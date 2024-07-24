<div>
  <div style="text-align: left; margin-top: 10px; margin-bottom: 0px; padding-bottom: -10px;">
    <h1 class="start-heading" style="font-size: 36px; margin-bottom: 5px;">Installation of TimescaleDB</h1>
  </div>
</div>

In this section, we'll walk through the process of setting up TimescaleDB using Docker for the QuantJourney framework. TimescaleDB, an extension of PostgreSQL optimized for time-series data, offers efficient storage and querying capabilities crucial for storing and analyzing high-frequency trading data.

## **Prerequisites**

Before we begin, ensure you have the following:

- Docker installed and running on your system
- Basic knowledge of the command line interface (CLI)

## **Step 1: Prepare the Installation Script**

Create a new file named `install_timescaledb.sh` and copy the following content into it:

```bash
#!/bin/bash

# Define the host directory where data will be stored
HOST_DATA_DIR="$HOME/Documents/jakub/timescaledb_data"

# Database configuration
DB_PASSWORD="PaSsWoRd"
DB_USER="jakub"
DB_NAME="quantjp"
DB_PORT="5432"
TABLE_NAME="intraday"

# ... (rest of the script)
```

> **Important:** Before running the script, modify the following variables according to your preferences:
> 
> - `HOST_DATA_DIR`: Set this to the directory where you want to store the TimescaleDB data on your host machine.
> - `DB_PASSWORD`: Choose a secure password for your database.
> - `DB_USER`: Set your preferred database username.
> - `DB_NAME`: Set your preferred database name.
> - `DB_PORT`: Change this if you want to use a different port (default is 5432).
> - `TABLE_NAME`: Change this if you want to use a different name for the main table.

## **Step 2: Make the Script Executable**

In the terminal, navigate to the directory containing the script and run:

```bash
chmod +x install_timescaledb.sh
```

This command gives execute permissions to the script.

## **Step 3: Run the Installation Script**

Execute the script by running:

```bash
./install_timescaledb.sh
```

The script will perform the following actions:

1. Check if Docker is installed and running.
2. Create necessary directories and files.
3. Start the TimescaleDB container using Docker Compose.
4. Initialize the database schema with the `intraday` table and necessary indexes.
5. Create roles for read-only and read-write access.
6. Insert a sample record to verify the setup.

## **Step 4: Verify the Installation**

After the script completes, it will display connection information. You should see output similar to:

```
TimescaleDB setup complete. You can connect to the database on localhost:5432
Database: quantjp
User: jakub
Password: PaSsWoRd
Table: intraday
Please save this information securely and update your application configuration.

You can connect to the database using the following command:
psql -d "postgres://jakub:PaSsWoRd@localhost:5432/quantjp"
```

Make sure to save this information securely, as you'll need it to configure your application.

## **Step 5: Connect to TimescaleDB**

You can connect to the database using the `psql` command provided in the script output. This will allow you to interact with the database directly and run SQL queries.

<hr style="padding-bottom: 25px">
</hr>

**Usage in QuantJourney**

The `intraday` table is set up with the following schema:

```sql
CREATE TABLE IF NOT EXISTS intraday (
    time TIMESTAMPTZ NOT NULL,
    symbol TEXT NOT NULL,
    price DOUBLE PRECISION NOT NULL,
    volume BIGINT NOT NULL,
    conditions INTEGER[],
    dark_pool BOOLEAN,
    market_state TEXT,
    data_source TEXT NOT NULL,
    PRIMARY KEY (time, symbol, data_source)
);
```

This table is optimized for storing time-series data, with automatic partitioning and indexing for efficient querying.

In your QuantJourney application, you can use the `batch_insert_worker` method to efficiently insert data into the database:

```python
async def batch_insert_worker(self):
    batch = []
    while self.is_active:
        try:
            symbol, data = await self.batch_insert_queue.get()
            batch.append((symbol, data))

            if len(batch) >= 100 or (len(batch) > 0 and self.batch_insert_queue.empty()):
                async with self.db_pool.acquire() as conn:
                    await conn.executemany('''
                        INSERT INTO intraday (time, symbol, price, volume)
                        VALUES ($1, $2, $3, $4)
                    ''', [(datetime.fromtimestamp(d['t']), s, d['p'], d['v']) for s, d in batch])
                logger.info(f"Inserted batch of {len(batch)} records into database")
                batch = []
        except Exception as e:
            logger.error(f"Error in batch insert: {str(e)}", exc_info=True)
```

This batch insert approach minimizes the number of database connections and transactions, significantly improving insert performance.

**Final**

Youve now successfully set up TimescaleDB for your QuantJourney framework. This setup provides efficient storage and querying capabilities for your time-series data, enabling more accurate backtesting and strategy refinement. Remember to update your application's configuration with the database connection details provided by the installation script.

<div style="padding: 50px">
</div>