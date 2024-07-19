# Module Information

**Description:**
Oanda Data Connector of QuantJourney Framework

This script contains the OandaConnector class, which is used to interact with the Oanda API.
The class provides methods to fetch account information, instruments, and historical OHLCV data.


Source:
https://oanda-api-v20.readthedocs.io/
https://developer.oanda.com/rest-live-v20/introduction/

**Author:** jpolec

**Date:** 18-03-2024

## Class: OandaConnector()

### **Method: get_account_summary**
```python
def get_account_summary() -> Dict
```
Retrieve the summary for the Oanda account.

**Returns:**

| Type | Description |
|------|--------------|
| `Dict` | The account summary. |

### **Method: get_account_details**
```python
def get_account_details() -> Dict
```
Retrieve the details for the Oanda account.

**Returns:**

| Type | Description |
|------|--------------|
| `Dict` | The account details. |

### **Method: get_account_instruments**
```python
def get_account_instruments() -> Dict
```
Retrieve the instruments for the Oanda account.

**Returns:**

| Type | Description |
|------|--------------|
| `Dict` | The account instruments. |

### **Method: fetch_data**
```python
def fetch_data(
			url: str,
			session
		) -> Dict
```
Asynchronously fetch data from the Oanda API.
**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `url` | `str` | The URL to fetch data from. |
| `session` | `None` | The aiohttp ClientSession object. |

**Returns:**

| Type | Description |
|------|--------------|
| `Dict` | The JSON response from the API. |

### **Method: async_get_ohlcv**
```python
def async_get_ohlcv(
			tickers: List[str],
			exchanges: List[str],
			granularity: str,
			period_starts: List[str],
			period_ends: List[str]
		) -> List[pd.DataFrame]
```
Asynchronously fetches OHLCV data from OANDA for a given list of tickers and exchanges.
**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `tickers` | `List[str]` | List of stock tickers. |
| `exchanges` | `List[str]` | List of stock exchanges corresponding to tickers. |
| `granularity` | `str` | Time period ('5m', '15m', '30m', '1h', '1d'). |
| `period_starts` | `List[str]` | List of start dates for each ticker's data retrieval period. |
| `period_ends` | `List[str]` | List of end dates for each ticker's data retrieval period. |

**Returns:**

| Type | Description |
|------|--------------|
| `List[pd.DataFrame]` | List of pandas DataFrames containing the historical stock data for each ticker. |

### **Method: format_date**
```python
def format_date(
			series
		) -> datetime.date
```
Format the date in the Oanda series data.
**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `series` | `str` | The series data from Oanda. |

**Returns:**

| Type | Description |
|------|--------------|
| `datetime.date` | The formatted date. |

### **Method: get_ohlcv**
```python
def get_ohlcv(
			ticker: str,
			exchange: str,
			granularity: str,
			period_start: str = "",
			period_end: str = "",
			period_days: int = 1000
		) -> pd.DataFrame
```
Get historical OHLCV data from OANDA.
**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `ticker` | `str` | The stock ticker symbol. |
| `exchange` | `str` | The stock exchange. |
| `granularity` | `str` | Time period ('5m', '15m', '30m', '1h', '1d'). |
| `period_start` | `str` | The start date for the historical data query. |
| `period_end` | `str` | The end date for the historical data query. |
| `period_days` | `int` | The number of days to fetch data for. |

**Returns:**

| Type | Description |
|------|--------------|
| `pd.DataFrame` | A pandas DataFrame containing the historical stock data |

### **Method: get_cfd_leverage**
```python
def get_cfd_leverage(
			ticker
		) -> float
```
Get the leverage factor for a given CFD instrument.
**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `ticker` | `str` | The CFD instrument ticker. |

**Returns:**

| Type | Description |
|------|--------------|
| `float` | The leverage factor. |

### **Method: get_cfd_marginrate**
```python
def get_cfd_marginrate(
			ticker
		) -> float
```
Get the margin rate for a given CFD instrument.
**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `ticker` | `str` | The CFD instrument ticker. |

**Returns:**

| Type | Description |
|------|--------------|
| `float` | The margin rate. |

### **Method: get_cfd_tickvalue**
```python
def get_cfd_tickvalue(
			ticker
		) -> float
```
Get the tick value for a given CFD instrument.
**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `ticker` | `str` | The CFD instrument ticker. |

**Returns:**

| Type | Description |
|------|--------------|
| `float` | The tick value. |

