# Module Information

**Description:**
CCXT Connector of QuantJourney Framework

This module provides a class for connecting to cryptocurrency exchanges using the CCXT library.
It allows for the retrieval of market data, account information, and the placement of orders.
And is a base class for exchange-specific classes such as Binance, Bitfinex, Coinbase, etc.

**Author:** jpolec

**Date:** 18-03-2024

## Class: CcxtConnector()

### **Method: get_exchange_instance**
```python
def get_exchange_instance(
			exchange: str
		) -> ccxt.Exchange
```
Get the exchange instance for a given exchange.

Examples:
```python
binance = ccxt_connector.get_exchange_instance('binance')

```
**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `exchange` | `str` | The exchange name (e.g., 'binance') |

**Returns:**

| Type | Description |
|------|--------------|
| `ccxt.Exchange` | The exchange instance. |

### **Method: get_exchange_symbols**
```python
def get_exchange_symbols(
			exchange: str
		) -> List[str]
```
Get all available symbols for an exchange.

Examples:
```python
Exchange Symbols for binance: ['ETH/BTC', 'LTC/BTC', 'BNB/BTC', 'NEO/BTC', 'QTUM/ETH',
'EOS/ETH', 'SNT/ETH', 'BNT/ETH', 'BCC/BTC', 'GAS/BTC', 'BNB/ETH', 'BTC/USDT', 'ETH/USDT',
'HSR/BTC', 'OAX/ETH', 'DNT/ETH', 'MCO/ETH', 'ICN/ETH', 'MCO/BTC', 'WTC/BTC', 'WTC/ETH',
'LRC/BTC', 'LRC/ETH', 'QTUM/BTC', 'YOYOW/BTC', 'OMG/BTC', 'OMG/ETH', 'ZRX/BTC', 'ZRX/ETH',
'STRAT/BTC', 'STRAT/ETH', 'SNGLS/BTC', 'SNGLS/ETH', 'BQX/BTC', 'BQX/ETH', 'KNC/BTC', 'KNC/ETH',
'FUN/BTC', 'FUN/ETH', 'SNM/BTC', 'SNM/ETH', 'NEO/ETH', 'IOTA/BTC', 'IOTA/ETH', 'LINK/BTC',

```
**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `exchange` | `None` | The name of the exchange. |

**Returns:**

| Type | Description |
|------|--------------|
| `List[str]` | A list of all available symbols. |

### **Method: get_latest_price**
```python
def get_latest_price(
			exchange: str,
			symbol: str
		) -> float
```
Get the latest price of a given symbol on a given exchange.

Examples:
```python
btc = dc.crypto.get_latest_price('binance', 'BTC/USDT')
btc = dc.crypto.get_latest_price('coinbase', 'BTC/USDT')

```
**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `exchange` | `str` | the name of the exchange (e.g., 'binance') |
| `symbol` | `str` | the symbol of the asset (e.g., 'BTC/USDT') |

**Returns:**

| Type | Description |
|------|--------------|
| `float` | the latest price of the asset. |

### **Method: place_market_order**
```python
def place_market_order(
			exchange: str,
			symbol: str,
			side: str,
			amount: float
		) -> ccxt.Order
```
Place a market order on a given exchange.

Examples:
```python
binance_order = ccxt_connector.place_market_order('binance', 'BTC/USDT', 'buy', 0.1)
binance_order = ccxt_connector.place_market_order('binance', 'BTC/USDT', 'sell', 0.1)
coinbase_order = ccxt_connector.place_market_order('coinbase', 'BTC/USD', 'buy', 0.1)

```
**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `exchange` | `str` | the exchange name (e.g., 'binance') |
| `symbol` | `str` | the symbol of the asset (e.g., 'BTC/USDT') |
| `side` | `str` | the side of the order ('buy' or 'sell') |
| `amount` | `float` | the amount of the asset to buy or sell |

**Returns:**

| Type | Description |
|------|--------------|
| `ccxt.Order` | the order object. |

### **Method: get_account_balance**
```python
def get_account_balance(
			exchange: str
		) -> Dict[str, float]
```
Get the account balance for a given exchange.

Examples:
```python
binance_balance = ccxt_connector.get_account_balance('binance')
coinbase_balance = ccxt_connector.get_account_balance('coinbase')

```
**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `exchange` | `str` | the exchange name (e.g., 'binance') |

**Returns:**

| Type | Description |
|------|--------------|
| `Dict[str, float]` | the account balance. |

### **Method: get_order_book**
```python
def get_order_book(
			exchange,
			symbol,
			limit=None
		) -> Dict
```
Get the order book for a specific symbol on an exchange.

Examples:
```python
order_book = dc.crypto.get_order_book('binance', 'BTC/USDT')
order_book = dc.crypto.get_order_book('binance', 'BTC/USDT', limit=5)

```
**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `exchange` | `str` | The name of the exchange (e.g., 'binance') |
| `symbol` | `str` | The trading symbol (e.g., 'BTC/USDT') |
| `limit` | `int` | The maximum number of order book levels to retrieve (default: None) |

**Returns:**

| Type | Description |
|------|--------------|
| `Dict` | The order book. |

### **Method: get_market_structure**
```python
def get_market_structure(
			exchange: str,
			ticker: str
		) -> Dict
```
Get the market structure for a given ticker.

Examples:
```python
market = dc.crypto.get_market_structure('binance', 'BTC/USDT')

```
**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `exchange` | `ccxt.Exchange` | The ccxt exchange instance |
| `ticker` | `str` | The symbol of the asset (e.g., 'BTC/USDT') |

**Returns:**

| Type | Description |
|------|--------------|
| `Dict` | The market structure. |

### **Method: get_tickers**
```python
def get_tickers(
			exchange,
			symbols=None
		) -> Dict
```
Get the tickers for a specific exchange.

Examples:
```python
tickers = dc.crypto.get_tickers('binance')
tickers = dc.crypto.get_tickers('binance', symbols=['BTC/USDT', 'ETH/USDT'])

```
**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `exchange` | `str` | The name of the exchange (e.g., 'binance') |
| `symbols` | `list` | A list of symbols to retrieve tickers for (default: None) |

**Returns:**

| Type | Description |
|------|--------------|
| `Dict` | A dictionary of tickers. |

### **Method: get_trades**
```python
def get_trades(
			exchange: str,
			symbol: str,
			since: int =None,
			limit: int =None
		) -> List
```
Get the recent trades for a specific symbol on an exchange.

Examples:
```python
trades = dc.crypto.get_trades('binance', 'BTC/USDT', since=1647580800000, limit=1000)

```
**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `exchange` | `str` | The name of the exchange (e.g., 'binance') |
| `symbol` | `str` | The trading symbol (e.g., 'BTC/USDT') |
| `since` | `int` | The timestamp (in milliseconds) to start retrieving trades from (default: None) |
| `limit` | `int` | The maximum number of trades to retrieve (default: None) |

**Returns:**

| Type | Description |
|------|--------------|
| `List` | A list of trades. |

### **Method: get_funding_rates**
```python
def get_funding_rates(
			exchange: str,
			symbol: str,
			start_time=None,
			end_time=None,
			limit=1000
		) -> List
```
Get the funding rates for a specific symbol on an exchange.

Examples:
```python
funding_rates = dc.crypto.get_funding_rates('binance', 'BTC/USDT', start_time=1647580800000, end_time=1647580800000, limit=1000)

```
**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `exchange` | `str` | The name of the exchange (e.g., 'binance') |
| `symbol` | `str` | The trading symbol (e.g., 'BTC/USDT') |
| `start_time` | `int` | The start timestamp (default: None) |
| `end_time` | `int` | The end timestamp (default: None) |
| `limit` | `int` | The maximum number of funding rates to retrieve (default: 1000) |

**Returns:**

| Type | Description |
|------|--------------|
| `List` | A list of funding rates. |

### **Method: get_open_interest**
```python
def get_open_interest(
			exchange,
			symbol,
			period,
			limit=500
		) -> List
```
Get the open interest for a specific symbol on an exchange.

Examples:
```python
open_interest = dc.crypto.get_open_interest('binance', 'BTC/USDT', '5m', limit=500)

```
**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `exchange` | `str` | The name of the exchange (e.g., 'binance') |
| `symbol` | `str` | The trading symbol (e.g., 'BTC/USDT') |
| `period` | `str` | The period for the open interest (e.g., '5m', '1h', '1d') |
| `limit` | `int` | The maximum number of data points to retrieve (default: 500) |

**Returns:**

| Type | Description |
|------|--------------|
| `List` | A list of open interest data. |

### **Method: get_historical_trades**
```python
def get_historical_trades(
			exchange: str,
			symbol: str,
			start_time=None,
			end_time=None,
			limit=1000
		) -> List
```
Get the historical trades for a specific symbol on an exchange.

Examples:
```python
historical_trades = dc.crypto.get_historical_trades('binance', 'BTC/USDT', start_time=1647580800000, end_time=1647580800000, limit=1000)

```
**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `exchange` | `str` | The exchange name (e.g., 'binance') |
| `symbol` | `str` | The trading symbol (e.g., 'BTC/USDT') |
| `start_time` | `int` | The start timestamp (default: None) |
| `end_time` | `int` | The end timestamp (default: None) |
| `limit` | `int` | The maximum number of historical trades to retrieve (default: 1000) |

**Returns:**

| Type | Description |
|------|--------------|
| `List` | A list of historical trades. |

### **Method: get_liquidations**
```python
def get_liquidations(
			exchange: str,
			symbol: str,
			start_time=None,
			end_time=None,
			limit=1000
		) -> List
```
Get the liquidations for a specific symbol on an exchange.

Examples:
```python
liquidations = dc.crypto.get_liquidations('binance', 'BTC/USDT', start_time=1647580800000, end_time=1647580800000, limit=1000)

```
**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `exchange` | `str` | The exchange name (e.g., 'binance') |
| `symbol` | `str` | The trading symbol (e.g., 'BTC/USDT') |
| `start_time` | `int` | The start timestamp (default: None) |
| `end_time` | `int` | The end timestamp (default: None) |
| `limit` | `int` | The maximum number of liquidations to retrieve (default: 1000) |

**Returns:**

| Type | Description |
|------|--------------|
| `List` | A list of liquidations. |

### **Method: get_futures_klines**
```python
def get_futures_klines(
			exchange: str,
			symbol: str,
			interval,
			start_time=None,
			end_time=None,
			limit=1500
		) -> List
```
Get the futures klines (candlestick data) for a specific symbol on an exchange.

Examples:
```python
futures_klines = dc.crypto.get_futures_klines('binance', 'BTC/USDT', '1m', start_time=1647580800000, end_time=1647580800000, limit=1500)

```
**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `exchange` | `str` | The exchange name (e.g., 'binance') |
| `symbol` | `str` | The trading symbol (e.g., 'BTC/USDT') |
| `interval` | `str` | The kline interval (e.g., '1m', '5m', '1h', '1d') |
| `start_time` | `int` | The start timestamp (default: None) |
| `end_time` | `int` | The end timestamp (default: None) |
| `limit` | `int` | The maximum number of klines to retrieve (default: 1500) |

**Returns:**

| Type | Description |
|------|--------------|
| `List` | A list of klines. |

### **Method: get_futures_mark_price_klines**
```python
def get_futures_mark_price_klines(
			exchange: str,
			symbol: str,
			interval,
			start_time=None,
			end_time=None,
			limit=1500
		) -> List
```
Get the futures mark price klines for a specific symbol on an exchange.

Examples:
```python
futures_mark_price_klines = dc.crypto.get_futures_mark_price_klines('binance', 'BTC/USDT', '1m', start_time=1647580800000, end_time=1647580800000, limit=1500)

```
**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `exchange` | `str` | The exchange name (e.g., 'binance') |
| `symbol` | `str` | The trading symbol (e.g., 'BTC/USDT') |
| `interval` | `str` | The kline interval (e.g., '1m', '5m', '1h', '1d') |
| `start_time` | `int` | The start timestamp (default: None) |
| `end_time` | `int` | The end timestamp (default: None) |
| `limit` | `int` | The maximum number of klines to retrieve (default: 1500) |

**Returns:**

| Type | Description |
|------|--------------|
| `List` | A list of mark price klines. |

### **Method: get_futures_funding_rate**
```python
def get_futures_funding_rate(
			exchange: str,
			symbol: str,
			start_time=None,
			end_time=None,
			limit=1000
		) -> List
```
Get the futures funding rate for a specific symbol on an exchange.

Examples:
```python
futures_funding_rate = dc.crypto.get_futures_funding_rate('binance', 'BTC/USDT', start_time=1647580800000, end_time=1647580800000, limit=1000)

```
**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `exchange` | `str` | The exchange name (e.g., 'binance') |
| `symbol` | `str` | The trading symbol (e.g., 'BTC/USDT') |
| `start_time` | `int` | The start timestamp (default: None) |
| `end_time` | `int` | The end timestamp (default: None) |
| `limit` | `int` | The maximum number of funding rates to retrieve (default: 1000) |

**Returns:**

| Type | Description |
|------|--------------|
| `List` | A list of funding rates. |

### **Method: datetime_to_milliseconds**
```python
def datetime_to_milliseconds(
			date_str
		) -> int
```
Convert a YYYY-MM-DD string to milliseconds since epoch.
**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `date_str` | `str` | a date string in the format YYYY-MM-DD |

**Returns:**

| Type | Description |
|------|--------------|
| `int` | milliseconds since epoch |

### **Method: milliseconds_to_datetime**
```python
def milliseconds_to_datetime(
			milliseconds
		) -> datetime
```
Convert milliseconds since epoch to datetime.
**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `milliseconds` | `int` | milliseconds since epoch |

**Returns:**

| Type | Description |
|------|--------------|
| `datetime` | datetime object |

### **Method: _fetch_ohlcv**
```python
def _fetch_ohlcv(
			exchange: str,
			ticker: str,
			timeframe: str,
			start_date: str,
			end_date: str
		) -> pd.DataFrame
```
Get OHLCV data for a specific ticker and timeframe from a specific exchange,
handling the exchange's maximum time interval limitation.

Examples:
```python
df = dc.crypto.get_ohlcv('binance', 'BTC/USDT', '1d', datetime(2021, 1, 1), datetime(2021, 1, 5))

```
**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `exchange` | `str` | the name of the exchange. |
| `ticker` | `str` | the ticker symbol. |
| `timeframe` | `str` | the timeframe of the OHLCV data. |
| `start_date` | `str` | the start date of the data. |
| `end_date` | `str` | the end date of the data. |

**Returns:**

| Type | Description |
|------|--------------|
| `pd.DataFrame` | the OHLCV data as a pandas DataFrame. |

### **Method: async_get_ohlcv**
```python
def async_get_ohlcv(
			exchange: str,
			ticker: str,
			timeframe: str,
			start_date: str,
			end_date: str,
			db_name=None,
			source='ccxt',
			read_from_db=False,
			write_to_db=False
		) -> pd.DataFrame
```
Get OHLCV data for a specific ticker and timeframe from a specific exchange,
handling the exchange's maximum time interval limitation.

Examples:
```python
df = dc.crypto.get_ohlcv('binance', 'BTC/USDT', '1d', '2021-01-01', '2021-01-05)
df = dc.crypto.get_ohlcv('binance', 'BTC/USDT', '1d', '2021-01-01', '2021-01-05', db_name='Mongo', source='ccxt', read_from_db=False, write_to_db=True)

OHLCV Data for BTC/USDT on binance:
open      high       low     close      volume
timestamp
2021-01-01  28948.19  29668.86  28627.12  29337.16  210716.398
2021-01-02  29337.15  33480.00  28958.24  32199.91  545541.080
2021-01-03  32198.41  34832.25  32000.02  33054.53  487486.989
2021-01-04  33053.93  33653.56  27800.00  32031.07  506128.023

```
**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `exchange` | `str` | the name of the exchange. |
| `ticker` | `str` | the ticker symbol. |
| `timeframe` | `str` | the timeframe of the OHLCV data. |
| `start_date` | `str` | the start date of the data. |
| `end_date` | `str` | the end date of the data. |
| `db_name` | `str` | the name of the database to read from/write to (e.g., 'Mongo') |
| `source` | `str` | used for reading / writing to the database, set in metadata |
| `read_from_db` | `bool` | whether to read data from the database |
| `write_to_db` | `bool` | whether to write data to the database |

**Returns:**

| Type | Description |
|------|--------------|
| `pd.DataFrame` | the OHLCV data as a pandas DataFrame. |

