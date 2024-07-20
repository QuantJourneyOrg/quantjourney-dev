# Module Information

**Description:**
YFinance Connector of QuantJourney Framework

This connector facilitates the fetching of historical stock data from Yahoo Finance.
It uses the yfinance library to fetch historical OHLCV data for a list of stock tickers.
And is optimized for asynchronous fetching of data for multiple tickers, with a concurrency limit.

Attributes:
semaphore (asyncio.Semaphore): A semaphore to control the concurrency limit of the requests.

Parameters:
MAX_RETRIES = 3
MAX_CONCURRENT_REQUESTS = 10  # Concurrency limit

**Author:** jpolec

**Date:** 18-03-2024

## Class: YFinanceConnector()

### **Method: async_get_ohlcv**
```python
def async_get_ohlcv(
			tickers: List[str],
			exchanges: List[str],
			period_starts: List[datetime],
			period_ends: List[datetime],
			granularity: str
		) -> List[pd.DataFrame]
```
Get historical OHLCV data for a list of stock tickers asynchronously.

Examples:
```python
dfs = await async_get_ohlcv(
tickers=["AAPL", "GOOGL", "MSFT"],
exchanges=["NAS", "NAS", "NAS"],
)

Testing async_get_ohlcv with tickers: ['AAPL', 'GOOGL', 'MSFT', 'AMZN', 'FB', 'TSLA', 'NVDA', 'JPM', 'V', 'PYPL']
DataFrame shape: (251, 6)
datetime        open        high         low       close  \
0 2022-01-03 05:00:00+00:00  175.597058  180.583650  175.478569  179.724564
1 2022-01-04 05:00:00+00:00  180.336790  180.642895  176.870854  177.443573
2 2022-01-05 05:00:00+00:00  177.354683  177.907649  172.447089  172.723572
3 2022-01-06 05:00:00+00:00  170.531463  173.098822  169.484776  169.840256
4 2022-01-07 05:00:00+00:00  170.719078  171.953382  168.882433  170.008118

```
**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `tickers` | `List[str]` | A list of stock ticker symbols. |
| `exchanges` | `List[str]` | A list of stock exchange symbols corresponding to each ticker. |
| `period_starts` | `List[datetime]` | A list of start dates for the historical data query. |
| `period_ends` | `List[datetime]` | A list of end dates for the historical data query. |
| `granularity` | `str` | The granularity of the data ('1m', '2m', '5m', etc. up to '3mo'). |

**Returns:**

| Type | Description |
|------|--------------|
| `List[pd.DataFrame]` | A list of pandas DataFrames containing the historical stock data for each ticker. |

### **Method: _run_with_semaphore**
```python
def _run_with_semaphore(
			func,
			*args
		) -> pd.DataFrame
```
Runs a function with a semaphore to limit the concurrency of requests.
Supportive function for async_get_ohlcv - used in SEMAPHORE (self.semaphore) context manager.
So no more than MAX_CONCURRENT_REQUESTS requests are made at a time.
**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `func` | `None` | The function to run. |
| `args` | `None` | The arguments to pass to the function. |

**Returns:**

| Type | Description |
|------|--------------|
| `pd.DataFrame` | The result of the function. |

### **Method: get_current_ohlcv_price**
```python
def get_current_ohlcv_price(
			ticker: str
		) -> Optional[float]
```
Fetches the current price of a given stock ticker using Yahoo Finance.

Examples:
```python
current_price = get_current_ohlcv_price("AAPL")

```
**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `ticker` | `str` | The stock ticker symbol. |

**Returns:**

| Type | Description |
|------|--------------|
| `Optional[float]` | The current price of the stock, or None if the price is not available. |

### **Method: get_history**
```python
def get_history(
			ticker: str,
			period_start: datetime,
			period_end: datetime,
			granularity: str,
			tries: int = 0
		) -> pd.DataFrame
```
Function to fetch historical data for a given stock ticker using Yahoo Finance's history function.

Examples:
```python
df = get_history("AAPL", datetime(2022, 1, 1), datetime(2022, 12, 31), "1d")

Testing get_history with ticker: AAPL
DataFrame shape: (251, 6)
datetime        open        high         low       close  \
0 2022-01-03 05:00:00+00:00  175.597058  180.583650  175.478569  179.724564
1 2022-01-04 05:00:00+00:00  180.336790  180.642895  176.870854  177.443573
2 2022-01-05 05:00:00+00:00  177.354683  177.907649  172.447089  172.723572
3 2022-01-06 05:00:00+00:00  170.531463  173.098822  169.484776  169.840256
4 2022-01-07 05:00:00+00:00  170.719078  171.953382  168.882433  170.008118

```
**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `ticker` | `str` | The stock ticker symbol. |
| `tickermeta` | `str` | Additional metadata string to append to the ticker for specific queries. |
| `period_start` | `datetime` | The start date for the historical data query. |
| `period_end` | `datetime` | The end date for the historical data query. |
| `granularity` | `str` | The granularity of the data ('1m', '2m', '5m', etc. up to '3mo'). |
| `tries` | `int, optional` | Current count of retry attempts. Defaults to 0. |

**Returns:**

| Type | Description |
|------|--------------|
| `pd.DataFrame` | In case of an empty result or failure after retries, returns an empty DataFrame. |

