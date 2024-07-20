# Module Information

**Description:**
DataManager class for QuantJourney Framework

The DataManager class serves as the central hub for data storage and retrieval within the QuantJourney Framework. 
It is engineered to interface with multiple types of databases and storage systems, offering a flexible and powerful way to manage financial data. 
By leveraging configuration settings, the DataManager dynamically connects to various data storage solutions, making it an essential component for quantitative analysis in hedge fund operations.

##Features:

####Versatile storage system integration, supporting MongoDB, Arctic, S3, and kdb+, among others, to cater to diverse data storage needs.
####Configuration-driven connectivity, allowing for seamless transitions between different storage backends without altering the codebase.
####Advanced data handling capabilities, including support for time series data, ensuring optimal performance for both historical analysis and real-time data processing.
####Comprehensive error management framework, providing detailed insights into connectivity and data retrieval issues to maintain high levels of data integrity and availability.
####Streamlined data access methods, facilitating efficient data queries and manipulation across various storage platforms with minimal overhead.

**Author:** jpolec

**Date:** 27-02-2024 and 18-03-2024

## Class: DataManager:()

### **Method: load_configuration**
```python
def load_configuration(
			config_path: str
		) -> None
```
Loads storage configuration from a JSON file.
**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `config_path` | `str` | Path to the configuration file. |


### **Method: initialize_storage**
```python
def initialize_storage() -> None
```
Initializes the storage system based on the configuration.


### **Method: is_shutting_down**
```python
def is_shutting_down() -> bool
```
Attempt to infer if the interpreter is shutting down by checking
if dummy threading operations fail, indicating cleanup has started.
This is a heuristic and might not be 100% reliable across all Python versions.

**Returns:**

| Type | Description |
|------|--------------|
| `bool` | True if the interpreter is shutting down; False otherwise. |

### **Method: close**
```python
def close() -> None
```
Ensure all resources are properly closed.

### **Method: initialize_kdb**
```python
def initialize_kdb() -> None
```
Set up the connection to kdb+


### **Method: initialize_s3**
```python
def initialize_s3() -> None
```
Set up the connection to AWS S3


### **Method: initialize_arctic**
```python
def initialize_arctic() -> None
```
Set up the connection to ArcticDB



### **Method: initialize_mongo**
```python
def initialize_mongo() -> None
```
Set up the connection to MongoDB.

This method initializes the MongoDB connection using credentials and other configurations
provided in the class's configuration data. It validates the presence of necessary configuration
parameters and establishes a connection to the specified MongoDB cluster and database.


### **Method: initialize_redis**
```python
def initialize_redis() -> None
```
Set up the connection to Redis.


### **Method: ensure_collection_exists**
```python
def ensure_collection_exists(
			collection_name: str
		) -> bool
```
Ensure the collection exists in the database.
**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `collection_name` | `str` | The name of the collection to check. |

**Returns:**

| Type | Description |
|------|--------------|
| `bool` | True if the collection exists; False otherwise. |

### **Method: read_data**
```python
def read_data(
			**kwargs
		) -> list
```
Read data from the storage based on the storage type, using flexible arguments.

Examples:
```python
# Read data from MongoDB
data = await data_manager.read_data(storage_type='mongo', collection_name='my_collection', query={'symbol': 'AAPL'})

```
**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `**kwargs` | `None` | Flexible keyword arguments based on the storage type. |

**Returns:**

| Type | Description |
|------|--------------|
| `list` | A list of data records read from the storage. |

### **Method: read_timeseries_data**
```python
def read_timeseries_data(
			**kwargs
		) -> list
```
Read timeseries data from the storage based on the storage type, using flexible arguments.

Examples:
```python
# Read timeseries data from MongoDB
data = await data_manager.read_timeseries_data(storage_type='mongo', collection='my_collection', metadata={'symbol': 'AAPL'}, period_start='2022-01-01', period_end='2022-12-31')

```
**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `**kwargs` | `None` | Flexible keyword arguments based on the storage type. |

**Returns:**

| Type | Description |
|------|--------------|
| `list` | A list of timeseries data records read from the storage. |

### **Method: read_fundamental_data**
```python
def read_fundamental_data(
			**kwargs
		) -> list
```
Read fundamental data from the storage based on the storage type, using flexible arguments.

Examples:
```python
# Read fundamental data from MongoDB
data = await data_manager.read_fundamental_data(storage_type='mongo', collection='my_collection', query={'symbol': 'AAPL'})

```
**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `**kwargs` | `None` | Flexible keyword arguments based on the storage type. |

**Returns:**

| Type | Description |
|------|--------------|
| `list` | A list of fundamental data records read from the storage. |

### **Method: write_data**
```python
def write_data(
			**kwargs
		) -> None
```
Write data to the storage based on the storage type, using flexible arguments.

Examples:
```python
# Write data to MongoDB
await data_manager.write_data(storage_type='mongo', collection_name='my_collection', symbol='AAPL', data=[{...}, {...}])

```
**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `**kwargs` | `None` | Flexible keyword arguments based on the storage type. |


### **Method: write_timeseries_data**
```python
def write_timeseries_data(
			**kwargs
		) -> None
```
Write timeseries data to the storage based on the storage type, using flexible arguments.

Examples:
```python
# Write timeseries data to MongoDB
await data_manager.write_timeseries_data(storage_type='mongo', collection='my_collection', symbol='AAPL', data={...})

```
**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `**kwargs` | `None` | Flexible keyword arguments based on the storage type. |


### **Method: write_fundamental_data**
```python
def write_fundamental_data(
			**kwargs
		) -> None
```
Write fundamental data to the storage based on the storage type, using flexible arguments.

Examples:
```python
# Write fundamental data to MongoDB
await data_manager.write_fundamental_data(storage_type='mongo', collection='my_collection', symbol='AAPL', data={...})

```
**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `**kwargs` | `None` | Flexible keyword arguments based on the storage type. |


### **Method: read_data_from_mongo**
```python
def read_data_from_mongo(
			**kwargs
		) -> list
```
Read data from MongoDB using flexible arguments.
**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `**kwargs` | `None` | Flexible keyword arguments for MongoDB. |

**Returns:**

| Type | Description |
|------|--------------|
| `list` | A list of data records read from MongoDB. |

### **Method: read_timeseries_data_from_mongo**
```python
def read_timeseries_data_from_mongo(
			**kwargs
		) -> list
```
Read timeseries data from MongoDB using flexible arguments, including metadata for filtering
and checking against specified date ranges.
**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `**kwargs` | `None` | Flexible keyword arguments for MongoDB. |

**Returns:**

| Type | Description |
|------|--------------|
| `list` | A list of timeseries data records read from MongoDB. |

### **Method: write_data_to_mongo**
```python
def write_data_to_mongo(
			**kwargs
		) -> None
```
Write data to MongoDB using flexible arguments.
**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `**kwargs` | `None` | Flexible keyword arguments for MongoDB. |


### **Method: write_timeseries_metadata_to_mongo**
```python
def write_timeseries_metadata_to_mongo(
			collection_name,
			period_start,
			period_end,
			**metadata
		) -> bool
```
Write timeseries metadata to MongoDB, combining and updating segments as needed.
**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `collection_name` | `str` | The name of the collection to write metadata to. |
| `period_start` | `str` | The start date of the period to write metadata for. |
| `period_end` | `str` | The end date of the period to write metadata for. |
| `**metadata` | `None` | Flexible keyword arguments for metadata. |

**Returns:**

| Type | Description |
|------|--------------|
| `bool` | True if the metadata was written successfully; False otherwise. |

### **Method: write_timeseries_data_to_mongo**
```python
def write_timeseries_data_to_mongo(
			**kwargs
		) -> None
```
Write timeseries data to MongoDB using flexible arguments.
**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `**kwargs` | `None` | Flexible keyword arguments for MongoDB. |

**Returns:**

| Type | Description |
|------|--------------|
| `None` | None |

### **Method: write_fundamental_data_to_mongo**
```python
def write_fundamental_data_to_mongo(
			**kwargs
		) -> None
```
Write fundamental data to MongoDB using flexible arguments.
**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `**kwargs` | `None` | Flexible keyword arguments for MongoDB. |


### **Method: read_fundamental_data_from_mongo**
```python
def read_fundamental_data_from_mongo(
			**kwargs
		)
```
Read fundamental data from MongoDB using flexible arguments, including metadata for filtering.
**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `**kwargs` | `None` | Flexible keyword arguments for MongoDB. |

### **Method: read_data_from_redis**
```python
def read_data_from_redis(
			**kwargs
		) -> list
```
Read data from Redis using flexible arguments.
**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `**kwargs` | `None` | Flexible keyword arguments for Redis. |

**Returns:**

| Type | Description |
|------|--------------|
| `list` | A list of data records read from Redis. |

### **Method: write_data_to_redis**
```python
def write_data_to_redis(
			**kwargs
		) -> None
```
Write data to Redis using flexible arguments.
**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `**kwargs` | `None` | Flexible keyword arguments for Redis. |


### **Method: read_timeseries_data_from_redis**
```python
def read_timeseries_data_from_redis(
			**kwargs
		)
```
Read timeseries data from Redis using flexible arguments.
**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `**kwargs` | `None` | Flexible keyword arguments for Redis. |

### **Method: write_timeseries_data_to_redis**
```python
def write_timeseries_data_to_redis(
			**kwargs
		)
```
Write timeseries data to Redis using flexible arguments.
**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `**kwargs` | `None` | Flexible keyword arguments for Redis. |

### **Method: write_metadata_to_redis**
```python
def write_metadata_to_redis(
			**kwargs
		) -> None
```
Write metadata to Redis using flexible arguments.
**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `**kwargs` | `None` | Flexible keyword arguments for Redis. |


### **Method: read_metadata_from_redis**
```python
def read_metadata_from_redis(
			**kwargs
		) -> dict
```
Read metadata from Redis using flexible arguments.
**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `**kwargs` | `None` | Flexible keyword arguments for Redis. |

**Returns:**

| Type | Description |
|------|--------------|
| `dict` | A dictionary containing the metadata read from Redis. |

### **Method: read_data_from_kdb**
```python
def read_data_from_kdb(
			**kwargs
		) -> list
```
Read data from kdb+ using flexible arguments.
**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `**kwargs` | `None` | Flexible keyword arguments for kdb+. |

**Returns:**

| Type | Description |
|------|--------------|
| `list` | A list of data records read from kdb+. |

### **Method: write_data_to_kdb**
```python
def write_data_to_kdb(
			**kwargs
		) -> None
```
Store data in kdb+ using flexible arguments.
**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `**kwargs` | `None` | Flexible keyword arguments for kdb+. |


### **Method: read_data_from_arctic**
```python
def read_data_from_arctic(
			**kwargs
		) -> list
```
Read data from the database (ArcticDB) using flexible arguments.
**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `**kwargs` | `None` | Flexible keyword arguments for the database. |

**Returns:**

| Type | Description |
|------|--------------|
| `list` | A list of data records read from the database. |

### **Method: write_data_to_arctic**
```python
def write_data_to_arctic(
			**kwargs
		) -> None
```
Write data to the Arctic library using flexible arguments.
**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `**kwargs` | `None` | Flexible keyword arguments for the Arctic library. |


### **Method: read_data_from_s3**
```python
def read_data_from_s3(
			**kwargs
		) -> list
```
Read data from AWS S3 using flexible arguments.
**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `**kwargs` | `None` | Flexible keyword arguments for AWS S3. |

**Returns:**

| Type | Description |
|------|--------------|
| `list` | A list of data records read from AWS S3. |

### **Method: write_data_to_s3**
```python
def write_data_to_s3(
			**kwargs
		) -> None
```
Write data to AWS S3 using flexible arguments.
**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `**kwargs` | `None` | Flexible keyword arguments for AWS S3. |
