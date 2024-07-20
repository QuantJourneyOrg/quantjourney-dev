# Module Information

**Description:**
Equities Assets class for QuantJourney Framework

The Equities module is a crucial component of the QuantJourney Framework, specifically tailored for 
handling and managing equity data for quantitative analysis and algorithmic trading in hedge funds. 
This module emphasizes the importance of accessing a wide range of equity data, including historical and intraday 
market data, corporate actions, and financial news, through various data sources like EOD Historical Data, 
Yahoo Finance, and OANDA.

**Author:** jpolec

**Date:** 27-02-2024 and 18-03-2024

## Class: Equities()

### **Method: get_us_securities**
```python
def get_us_securities() -> pd.DataFrame
```
Get a list of all US securities from EODHistoricalData.

Examples:
```python
sec = dc.self.connectors['eod'].get_us_securities()

US Securities:              Code  ...          Isin
0      0P0000A412  ...          None
1      0P0000RX5G  ...          None
2      0P0001GXZ7  ...          None
3      0P0001NGF5  ...          None
4               A  ...  US00846U1016
...           ...  ...           ...
47987        ZYME  ...  CA98985W1023
47988        ZYXI  ...  US98986M1036
47989       ZZHGF  ...          None
47990       ZZHGY  ...          None
47991       ZZZOF  ...          None

```

**Returns:**

| Type | Description |
|------|--------------|
| `pd.DataFrame` | Code, Name, Country, Exchange, Currency, Type, Isin |

### **Method: async_get_ticker_historical_mcap**
```python
def async_get_ticker_historical_mcap(
			ticker: str,
			exchange: str ="US"
		) -> pd.DataFrame
```
Get historical market capitalization for a ticker

Examples:
```python
mcap = await dc.equities.async_get_ticker_historical_mcap("AAPL")

```
**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `ticker` | `str` | the stock ticker |
| `exchange` | `str` | the stock exchange |

**Returns:**

| Type | Description |
|------|--------------|
| `pd.DataFrame` | the historical market capitalization data |

### **Method: async_get_ticker_nearby_earnings**
```python
def async_get_ticker_nearby_earnings(
			ticker: str,
			exchange: str ="US"
		) -> pd.DataFrame
```
Get nearby earnings for a ticker

Examples:
```python
earnings = await dc.equities.async_get_ticker_nearby_earnings("AAPL")

Nearby Earnings:       code report_date        date  ... estimate difference  percent
0  AAPL.US  2023-05-04  2023-03-31  ...     1.43       0.09   6.2937
1  AAPL.US  2023-08-03  2023-06-30  ...     1.19       0.07   5.8824
2  AAPL.US  2023-11-02  2023-09-30  ...     1.39       0.07   5.0360
3  AAPL.US  2024-02-01  2023-12-31  ...     2.10       0.08   3.8095
4  AAPL.US  2024-05-02  2024-03-31  ...     1.50        NaN      NaN
5  AAPL.US  2024-08-01  2024-06-30  ...      NaN        NaN      NaN
6  AAPL.US  2024-10-31  2024-09-30  ...      NaN        NaN      NaN
7  AAPL.US  2025-02-27  2024-12-31  ...      NaN        NaN      NaN

```
**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `ticker` | `str` | The stock ticker |
| `exchange` | `str` | The stock exchange |

**Returns:**

| Type | Description |
|------|--------------|
| `pd.DataFrame` | the nearby earnings data |

### **Method: async_get_nearby_ipos**
```python
def async_get_nearby_ipos() -> pd.DataFrame
```
Get nearby IPOs, i.e., Initial Public Offerings

Examples:
```python
ipos = await dc.equities.async_get_nearby_ipos()

```

**Returns:**

| Type | Description |
|------|--------------|
| `pd.DataFrame` | the nearby IPOs data |

### **Method: async_get_nearby_splits**
```python
def async_get_nearby_splits() -> pd.DataFrame
```
Get nearby stock splits

Examples:
```python
splits = await dc.equities.async_get_nearby_splits()

Nearby Splits:               code  split_date optionable  old_shares  new_shares
0     CANTABIL.BSE  2023-11-02          N           1           5
1          MOTS.US  2023-11-02          N          15           1
2            VR.CN  2023-11-02          N           3           1
3     CANTABIL.NSE  2023-11-02          N           1           5
4         VRCFD.US  2023-11-02          N           3           1
...            ...         ...        ...         ...         ...
1965       3AG1.BE  2024-09-27          N           1          10
1966      9434.TSE  2024-09-27          N           1          10
1967      3AG1.STU  2024-09-27          N           1          10
1968        3AG1.F  2024-09-27          N           1          10
1969      9534.TSE  2024-09-27          N           1           5

```

**Returns:**

| Type | Description |
|------|--------------|
| `pd.DataFrame` | the nearby stock splits data |

### **Method: async_get_ticker_earnings_trend**
```python
def async_get_ticker_earnings_trend(
			ticker: str,
			exchange: str ="US"
		) -> pd.DataFrame
```
Get earnings trend for a ticker, i.e., the earnings trend for the last 90 days

Examples:
```python
trend = await dc.equities.async_get_ticker_earnings_trend("AAPL")

Earnings Trend: code                                            AAPL.US
date                                2025-09-30 00:00:00
period                                              +1y
growth                                           0.0920
earningsEstimateAvg                              7.1300
earningsEstimateLow                              6.5100
earningsEstimateHigh                             7.7000
earningsEstimateYearAgoEps                       6.5300
earningsEstimateNumberOfAnalysts                39.0000
earningsEstimateGrowth                           0.0920
revenueEstimateAvg                      410879000000.00
revenueEstimateLow                      386715000000.00
revenueEstimateHigh                     436241000000.00
revenueEstimateYearAgoEps                          None
revenueEstimateNumberOfAnalysts                   37.00
revenueEstimateGrowth                            0.0650
epsTrendCurrent                                  7.1300
epsTrend7daysAgo                                 7.1300
epsTrend30daysAgo                                7.1600
epsTrend60daysAgo                                7.1700
epsTrend90daysAgo                                7.1700
epsRevisionsUpLast7days                          0.0000
epsRevisionsUpLast30days                         1.0000
epsRevisionsDownLast30days                       2.0000


```
**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `ticker` | `str` | The stock ticker |
| `exchange` | `str` | The stock exchange |

**Returns:**

| Type | Description |
|------|--------------|
| `pd.DataFrame` | the earnings trend data |

### **Method: async_get_historical_splits**
```python
def async_get_historical_splits(
			ticker: str,
			exchange: str ="US"
		) -> pd.DataFrame
```
Get historical stock splits for a ticker, i.e., the historical stock splits data

Examples:
```python
splits = await dc.equities.async_get_historical_splits("AAPL")

Historical Splits:
date      	split
1987-06-16  2.000000/1.000000
2000-06-21  2.000000/1.000000
2005-02-28  2.000000/1.000000
2014-06-09  7.000000/1.000000
2020-08-31  4.000000/1.000000

```
**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `ticker` | `str` | The stock ticker |
| `exchange` | `str` | The stock exchange |

**Returns:**

| Type | Description |
|------|--------------|
| `pd.DataFrame` | the historical stock splits data |

### **Method: async_get_historical_dividends**
```python
def async_get_historical_dividends(
			ticker: str,
			exchange: str ="US"
		) -> pd.DataFrame
```
Get historical dividends for a ticker

Examples:
```python
dividends = await dc.equities.async_get_historical_dividends("AAPL")

```
**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `ticker` | `str` | The stock ticker |
| `exchange` | `str` | The stock exchange |

**Returns:**

| Type | Description |
|------|--------------|
| `pd.DataFrame` | the historical dividends data |

### **Method: async_get_equity_news**
```python
def async_get_equity_news(
			ticker: str ="",
			exchange: str ="US",
			tag: str ="",
			period_end=datetime.now(pytz.utc
		) -> pd.DataFrame
```
Get news for a ticker

Examples:
```python
news = await dc.equities.async_get_equity_news("AAPL")

Equity News:
date                                                                          ...
2024-04-29T09:06:00+00:00  4 Artificial Intelligence (AI) Stocks Members ...  ...  0.112
2024-04-29T09:50:00+00:00  Prediction: This Will Be Warren Buffett's Seco...  ...  0.105
2024-04-29T13:00:00+00:00  Here's How Much Stock Apple Repurchased in the...  ...  0.156
2024-04-29T13:48:00+00:00  These Stocks Are Moving the Most Today: Tesla,...  ...  0.113
2024-04-29T14:26:52+00:00  12 Under-the-Radar Stocks With Massive Upside ...  ...  0.135
2024-04-29T15:58:39+00:00  US STOCKS-Wall St edges up as Tesla and Apple ...  ...  0.094
2024-04-29T16:16:57+00:00  US Benchmark Equity Indexes Extend Gains in Mi...  ...  0.369
2024-04-29T16:47:00+00:00  Should You Buy Apple (AAPL) Stock Ahead of Q2 ...  ...  0.112
2024-04-29T17:28:23+00:00  What Would Happen If Warren Buffett Bailed On ...  ...  0.144
2024-04-29T17:49:01+00:00   Tesla, Apple Help US Equity Indexes Extend Gains  ...  0.576
2024-04-29T19:10:54+00:00  US STOCKS-Wall Street stocks gain as investors...  ...  0.093
2024-04-29T19:13:12+00:00  Apple shares gain ground after Bernstein analy...  ...  0.098

```
**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `ticker` | `str` | The stock ticker |
| `exchange` | `str` | The stock exchange |
| `tag` | `str` | The news tag |
| `period_end` | `datetime` | The end date for the period |
| `period_days` | `int` | The number of days for the period |
| `limit` | `int` | The number of news items to fetch |

**Returns:**

| Type | Description |
|------|--------------|
| `pd.DataFrame` | the news data |

### **Method: async_get_ohlcv**
```python
def async_get_ohlcv(
			tickers: List[str],
			exchanges: List[str],
			source : str,
			granularity: str = "1d",
			period_starts: List[str] = None,
			period_ends: List[str] = None,
			db_name: Optional[str] = None,
			read_from_db: bool = False,
			write_to_db: bool = False
		) -> List[pd.DataFrame]
```
Async get historical OHLCV data for stock tickers.
All tickers, exchanges, and period_starts, period_ends are expected to be lists of the same length.
Please note read_db and write_db are require running DB; otherwise, it will raise an error, unless set as False.
You can specify different source: eod, yf, oanda, etc.

Examples:
```python
ohlcv_data = await dc.equities.async_get_ohlcv(
tickers=["AAPL", "MSFT"],
exchanges=["US", "US"],
source="eod",
granularity="1d",
period_starts=["2023-01-01", "2023-01-01"],
period_ends=["2023-12-31", "2023-12-31"],
read_from_db=False,
write_to_db=False
)

OHLCV data: [                     datetime    open    high  ...   close  adj_close     volume
0   2023-01-03 00:00:00+00:00  130.28  130.90  ...  125.07   124.2163  112117500
1   2023-01-04 00:00:00+00:00  126.89  128.66  ...  126.36   125.4975   89113600
2   2023-01-05 00:00:00+00:00  127.13  127.77  ...  125.02   124.1666   80962700
3   2023-01-06 00:00:00+00:00  126.01  130.29  ...  129.62   128.7352   87754700
4   2023-01-09 00:00:00+00:00  130.47  133.41  ...  130.15   129.2616   70790800
..                        ...     ...     ...  ...     ...        ...        ...
245 2023-12-22 00:00:00+00:00  195.18  195.41  ...  193.60   193.3533   37122800
246 2023-12-26 00:00:00+00:00  193.61  193.89  ...  193.05   192.8040   28919300
247 2023-12-27 00:00:00+00:00  192.49  193.50  ...  193.15   192.9038   48087700
248 2023-12-28 00:00:00+00:00  194.14  194.66  ...  193.58   193.3333   34049900
249 2023-12-29 00:00:00+00:00  193.90  194.40  ...  192.53   192.2846   42628800

```
**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `tickers` | `list of str` | List of stock tickers |
| `exchanges` | `list of str` | List of stock exchanges corresponding to tickers |
| `source` | `str` | Data source for connectors (e.g., "yf", "eod", "oanda", etc.) |
| `granularity` | `str` | Granularity for the OHLCV data ('1d', '1h', '15m', '5m', '1m') |
| `period_starts` | `list of str` | List of start dates for the OHLCV data |
| `period_ends` | `list of str` | List of end dates for the OHLCV data |
| `db_name` | `str` | Database name to read from/write to (e.g. Mongo) |
| `read_from_db` | `bool` | Read from database |
| `write_to_db` | `bool` | Write to database |

**Returns:**

| Type | Description |
|------|--------------|
| `List[pd.DataFrame]` | List of OHLCV DataFrames for each ticker |

### **Method: async_get_live_lagged_prices**
```python
def async_get_live_lagged_prices(
			tickers: List[str],
			exchanges: List[str],
			source: str
		) -> dict
```
Asynchronously fetches live and lagged prices for the given tickers and exchanges.
You can specify different source: eod, yf, oanda, etc.

Examples:
```python
prices = await dc.equities.async_get_live_lagged_prices(
tickers=["AAPL", "MSFT"],
exchanges=["US", "US"],
source="eod"
)

```
**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `tickers` | `list of str` | List of stock tickers. |
| `exchanges` | `list of str` | List of stock exchanges corresponding to tickers. |
| `source` | `str` | Data source for connectors (e.g., "yf", "eod", "oanda", etc.). |

**Returns:**

| Type | Description |
|------|--------------|
| `dict` | dictionary containing live and lagged prices DataFrames for each ticker. |

### **Method: async_get_intraday_data**
```python
def async_get_intraday_data(
			tickers: List[str],
			exchanges: List[str],
			source: str,
			interval: str = "5m",
			to_utc: Optional[datetime] = None,
			period_days: int = 120
		) -> dict
```
Asynchronously fetches intraday data for the given tickers and exchanges.
You can specify different source: eod, yf, oanda, etc.
Interval options: '1m', '5m', '15m', '30m', '1h'.

Examples:
```python
intraday_data = await dc.equities.async_get_intraday_data(
tickers=["AAPL", "MSFT"],
exchanges=["US", "US"],
source="eod",
interval="5m",
to_utc=datetime.utcnow(),
period_days=120
)

```
**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `tickers` | `list of str` | List of stock tickers |
| `exchanges` | `list of str` | List of stock exchanges corresponding to tickers |
| `source` | `str` | Data source for connectors (e.g., "yf", "eod", "oanda", etc.) |
| `interval` | `str` | Interval for the intraday data ('1m', '5m', '15m', '30m', '1h') |
| `to_utc` | `datetime` | End date and time in UTC. Defaults to current UTC time |
| `period_days` | `int` | Number of days for the data period |

**Returns:**

| Type | Description |
|------|--------------|
| `dict` | dictionary containing intraday data DataFrames for each ticker. |

### **Method: async_get_fundamental_data**
```python
def async_get_fundamental_data(
			ticker: str,
			exchange: str = "US",
			source: str = "eod",
			statement_type: Optional[str] = None,
			period: Union[str,
			int,
			None] = None,
			specific_date: Optional[str] = None,
			db_name: Optional[str] = None,
			read_from_db: bool = False,
			write_to_db: bool = False
		) -> Union[Dict, pd.DataFrame]
```
Async get fundamental data (income statement, cash flow, balance sheet) for a stock ticker.
Reads from the database if read_from_db is True, otherwise fetches from the data source.
Writes to the database if write_to_db is True.

Examples:
```python
fundamental_data = await dc.equities.async_get_fundamental_data("AAPL", "US", "eod", "income_statement", "y")
async_get_funamental_data("AAPL", "US", "eod", "income_statement", "y")
async_get_funamental_data("AAPL", "US", "eod", "cash_flow", "q")
async_get_funamental_data("AAPL", "US", "eod")

```
**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `ticker` | `str` | The stock ticker |
| `exchange` | `str` | The stock exchange |
| `source` | `str` | The data source (eod, yf, etc.) |
| `statement_type` | `str` | The type of fundamental data (income_statement, cash_flow, balance_sheet) |
| `period` | `str, int` | The period for the fundamental data (e.g., 'y', 'q', 1, 4) |
| `specific_date` | `str` | The specific date for the fundamental data |
| `db_name` | `str` | Database name to read from/write to (e.g. Mongo) |
| `read_from_db` | `bool` | Read from database |
| `write_to_db` | `bool` | Write to database |

**Returns:**

| Type | Description |
|------|--------------|
| `Union[Dict, pd.DataFrame]` | the fundamental data |

### **Method: async_get_income_statement**
```python
def async_get_income_statement(
			ticker: str,
			exchange: str,
			option: str = "q",
			source: str = "eod"
		) -> pd.DataFrame
```
Get income statement for a ticker.

Examples:
```python
income_statement = await dc.equities.async_get_income_statement("AAPL", "US", "q", "eod")

```
**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `ticker` | `str` | The stock ticker |
| `exchange` | `str` | The stock exchange |
| `option` | `str` | The period option (q - quarterly, y - yearly) |
| `source` | `str` | The data source (eod, yf, etc.) |

**Returns:**

| Type | Description |
|------|--------------|
| `pd.DataFrame` | the income statement data |

### **Method: async_get_balance_sheet**
```python
def async_get_balance_sheet(
			ticker: str,
			exchange: str,
			option: str = "q",
			source: str = "eod"
		) -> pd.DataFrame
```
Get balance sheet for a ticker.

Examples:
```python
balance_sheet = await dc.equities.async_get_balance_sheet("AAPL", "US", "q", "eod")

```
**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `ticker` | `str` | The stock ticker |
| `exchange` | `str` | The stock exchange |
| `option` | `str` | The period option (q - quarterly, y - yearly) |
| `source` | `str` | The data source (eod, yf, etc.) |

**Returns:**

| Type | Description |
|------|--------------|
| `pd.DataFrame` | pd.DataFrame, The balance sheet data |

### **Method: async_get_cash_flow**
```python
def async_get_cash_flow(
			ticker: str,
			exchange: str,
			option: str = "q",
			source: str = "eod"
		) -> pd.DataFrame
```
Get cash flow for a ticker.

Examples:
```python
cash_flow = await dc.equities.async_get_cash_flow("AAPL", "US", "q", "eod")

```
**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `ticker` | `str` | The stock ticker |
| `exchange` | `str` | The stock exchange |
| `option` | `str` | The period option (q - quarterly, y - yearly) |
| `source` | `str` | The data source (eod, yf, etc.) |

**Returns:**

| Type | Description |
|------|--------------|
| `pd.DataFrame` | the cash flow data |

### **Method: async_get_ticker_highlights**
```python
def async_get_ticker_highlights(
			ticker: str,
			exchange: str,
			source: str = "eod"
		) -> pd.DataFrame
```
Get ticker highlights.

Examples:
```python
highlights = await dc.equities.async_get_ticker_highlights("AAPL", "US", "eod")

```
**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `ticker` | `str` | The stock ticker |
| `exchange` | `str` | The stock exchange |
| `source` | `str` | The data source (eod, yf, etc.) |

**Returns:**

| Type | Description |
|------|--------------|
| `pd.DataFrame` | pd.DataFrame, The ticker highlights data |

### **Method: async_get_ticker_mcap**
```python
def async_get_ticker_mcap(
			ticker: str,
			exchange: str,
			source: str = "eod",
			fundamental_data=None
		) -> pd.DataFrame
```
Get ticker market capitalization.

Examples:
```python
mcap = await dc.equities.async_get_ticker_mcap("AAPL", "US", "eod")

```
**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `ticker` | `str` | The stock ticker |
| `exchange` | `str` | The stock exchange |
| `source` | `str` | The data source (eod, yf, etc.) |

**Returns:**

| Type | Description |
|------|--------------|
| `pd.DataFrame` | the ticker market capitalization data |

### **Method: async_get_ticker_ebitda**
```python
def async_get_ticker_ebitda(
			ticker: str,
			exchange: str,
			source: str = "eod",
			fundamental_data=None
		) -> pd.DataFrame
```
Get ticker EBITDA.

Examples:
```python
ebitda = await dc.equities.async_get_ticker_ebitda("AAPL", "US", "eod")

```
**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `ticker` | `str` | The stock ticker |
| `exchange` | `str` | The stock exchange |
| `source` | `str` | The data source (eod, yf, etc.) |

**Returns:**

| Type | Description |
|------|--------------|
| `pd.DataFrame` | the ticker EBITDA data |

### **Method: async_get_ticker_pe**
```python
def async_get_ticker_pe(
			ticker: str,
			exchange: str,
			source: str = "eod",
			fundamental_data=None
		) -> pd.DataFrame
```
Get ticker PE.

Examples:
```python
pe = await dc.equities.async_get_ticker_pe("AAPL", "US", "eod")

```
**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `ticker` | `str` | The stock ticker |
| `exchange` | `str` | The stock exchange |
| `source` | `str` | The data source (eod, yf, etc.) |

**Returns:**

| Type | Description |
|------|--------------|
| `pd.DataFrame` | pd.DataFrame, The ticker PE data |

### **Method: async_get_ticker_peg**
```python
def async_get_ticker_peg(
			ticker: str,
			exchange: str,
			source: str = "eod",
			fundamental_data=None
		) -> pd.DataFrame
```
Get ticker PEG.

Examples:
```python
peg = await dc.equities.async_get_ticker_peg("AAPL", "US", "eod")

```
**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `ticker` | `str` | The stock ticker |
| `exchange` | `str` | The stock exchange |
| `source` | `str` | The data source (eod, yf, etc.) |

**Returns:**

| Type | Description |
|------|--------------|
| `pd.DataFrame` | the ticker PEG data |

### **Method: async_get_ticker_book**
```python
def async_get_ticker_book(
			ticker: str,
			exchange: str,
			source: str = "eod",
			fundamental_data=None
		) -> pd.DataFrame
```
Get ticker book.

Examples:
```python
book = await dc.equities.async_get_ticker_book("AAPL", "US", "eod")

```
**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `ticker` | `str` | The stock ticker |
| `exchange` | `str` | The stock exchange |
| `source` | `str` | The data source (eod, yf, etc.) |

**Returns:**

| Type | Description |
|------|--------------|
| `pd.DataFrame` | pd.DataFrame, The ticker book data |

### **Method: async_get_ticker_div_ps**
```python
def async_get_ticker_div_ps(
			ticker: str,
			exchange: str,
			source: str = "eod",
			fundamental_data=None
		) -> pd.DataFrame
```
Get ticker div ps.

Examples:
```python
div_ps = await dc.equities.async_get_ticker_div_ps("AAPL", "US", "eod")

```
**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `ticker` | `str` | The stock ticker |
| `exchange` | `str` | The stock exchange |
| `source` | `str` | The data source (eod, yf, etc.) |

**Returns:**

| Type | Description |
|------|--------------|
| `pd.DataFrame` | the ticker div ps data |

### **Method: async_get_ticker_div_yield**
```python
def async_get_ticker_div_yield(
			ticker: str,
			exchange: str,
			source: str = "eod",
			fundamental_data=None
		) -> pd.DataFrame
```
Get ticker div yield.

Examples:
```python
div_yield = await dc.equities.async_get_ticker_div_yield("AAPL", "US", "eod")

```
**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `ticker` | `str` | The stock ticker |
| `exchange` | `str` | The stock exchange |
| `source` | `str` | The data source (eod, yf, etc.) |

**Returns:**

| Type | Description |
|------|--------------|
| `pd.DataFrame` | the ticker div yield data |

### **Method: async_get_ticker_eps**
```python
def async_get_ticker_eps(
			ticker: str,
			exchange: str,
			source: str = "eod",
			fundamental_data=None
		) -> pd.DataFrame
```
Get ticker EPS.

Examples:
```python
eps = await dc.equities.async_get_ticker_eps("AAPL", "US", "eod")

```
**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `ticker` | `str` | The stock ticker |
| `exchange` | `str` | The stock exchange |
| `source` | `str` | The data source (eod, yf, etc.) |

**Returns:**

| Type | Description |
|------|--------------|
| `pd.DataFrame` | the ticker EPS data |

### **Method: async_get_ticker_last_quarter_date**
```python
def async_get_ticker_last_quarter_date(
			ticker: str,
			exchange: str,
			source: str = "eod",
			fundamental_data=None
		) -> pd.DataFrame
```
Get ticker last quarter date.

Examples:
```python
last_quarter_date = await dc.equities.async_get_ticker_last_quarter_date("AAPL", "US", "eod")

```
**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `ticker` | `str` | The stock ticker |
| `exchange` | `str` | The stock exchange |
| `source` | `str` | The data source (eod, yf, etc.) |

**Returns:**

| Type | Description |
|------|--------------|
| `pd.DataFrame` | pd.DataFrame, The ticker last quarter date data |

### **Method: async_get_ticker_profit_margin**
```python
def async_get_ticker_profit_margin(
			ticker: str,
			exchange: str,
			source: str = "eod",
			fundamental_data=None
		) -> pd.DataFrame
```
Get ticker profit margin.

Examples:
```python
profit_margin = await dc.equities.async_get_ticker_profit_margin("AAPL", "US", "eod")

```
**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `ticker` | `str` | The stock ticker |
| `exchange` | `str` | The stock exchange |
| `source` | `str` | The data source (eod, yf, etc.) |

**Returns:**

| Type | Description |
|------|--------------|
| `pd.DataFrame` | the ticker profit margin data |

### **Method: async_get_ticker_op_marginTTM**
```python
def async_get_ticker_op_marginTTM(
			ticker: str,
			exchange: str,
			source: str = "eod",
			fundamental_data=None
		) -> pd.DataFrame
```
Get ticker op margin TTM (Operating Margin TTM)

Examples:
```python
op_marginTTM = await dc.equities.async_get_ticker_op_marginTTM("AAPL", "US", "eod")

```
**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `ticker` | `str` | The stock ticker |
| `exchange` | `str` | The stock exchange |
| `source` | `str` | The data source (eod, yf, etc.) |

**Returns:**

| Type | Description |
|------|--------------|
| `pd.DataFrame` | the ticker op margin TTM data |

### **Method: async_get_ticker_roaTTM**
```python
def async_get_ticker_roaTTM(
			ticker: str,
			exchange: str,
			source: str = "eod",
			fundamental_data=None
		) -> pd.DataFrame
```
Get ticker ROA TTM (Return on Assets TTM)

Examples:
```python
roaTTM = await dc.equities.async_get_ticker_roaTTM("AAPL", "US", "eod")

```
**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `ticker` | `str` | The stock ticker |
| `exchange` | `str` | The stock exchange |
| `source` | `str` | The data source (eod, yf, etc.) |

**Returns:**

| Type | Description |
|------|--------------|
| `pd.DataFrame` | the ticker ROA TTM data |

### **Method: async_get_ticker_roeTTM**
```python
def async_get_ticker_roeTTM(
			ticker: str,
			exchange: str,
			source: str = "eod",fundamental_data=None
		) -> pd.DataFrame
```
Get ticker ROE TTM (Return on Equity TTM)

Examples:
```python
roeTTM = await dc.equities.async_get_ticker_roeTTM("AAPL", "US", "eod")

```
**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `ticker` | `str` | The stock ticker |
| `exchange` | `str` | The stock exchange |
| `source` | `str` | The data source (eod, yf, etc.) |

**Returns:**

| Type | Description |
|------|--------------|
| `pd.DataFrame` | the ticker ROE TTM data |

### **Method: async_get_ticker_revenueTTM**
```python
def async_get_ticker_revenueTTM(
			ticker: str,
			exchange: str,
			source: str = "eod",
			fundamental_data=None
		) -> pd.DataFrame
```
Get ticker revenue TTM

Examples:
```python
revenueTTM = await dc.equities.async_get_ticker_revenueTTM("AAPL", "US", "eod")

```
**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `ticker` | `str` | The stock ticker |
| `exchange` | `str` | The stock exchange |
| `source` | `str` | The data source (eod, yf, etc.) |

**Returns:**

| Type | Description |
|------|--------------|
| `pd.DataFrame` | the ticker revenue TTM data |

### **Method: async_get_ticker_revenue_psTTM**
```python
def async_get_ticker_revenue_psTTM(
			ticker: str,
			exchange: str,
			source: str = "eod",
			fundamental_data=None
		) -> pd.DataFrame
```
Get ticker revenue ps TTM.

Examples:
```python
revenue_psTTM = await dc.equities.async_get_ticker_revenue_psTTM("AAPL", "US", "eod")

```
**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `ticker` | `str` | The stock ticker |
| `exchange` | `str` | The stock exchange |
| `source` | `str` | The data source (eod, yf, etc.) |

**Returns:**

| Type | Description |
|------|--------------|
| `pd.DataFrame` | the ticker revenue ps TTM data |

### **Method: async_get_ticker_qoq_rev_growth**
```python
def async_get_ticker_qoq_rev_growth(
			ticker: str,
			exchange: str,
			source: str = "eod",
			fundamental_data=None
		) -> pd.DataFrame
```
Get ticker QoQ revenue growth.

Examples:
```python
qoq_rev_growth = await dc.equities.async_get_ticker_qoq_rev_growth("AAPL", "US", "eod")

```
**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `ticker` | `str` | The stock ticker |
| `exchange` | `str` | The stock exchange |
| `source` | `str` | The data source (eod, yf, etc.) |

**Returns:**

| Type | Description |
|------|--------------|
| `pd.DataFrame` | the ticker QoQ revenue growth data |

### **Method: async_get_ticker_qoq_earnings_growth**
```python
def async_get_ticker_qoq_earnings_growth(
			ticker: str,
			exchange: str,
			source: str = "eod",
			fundamental_data=None
		) -> pd.DataFrame
```
Get ticker QoQ earnings growth.

Examples:
```python
qoq_earnings_growth = await dc.equities.async_get_ticker_qoq_earnings_growth("AAPL", "US", "eod")

```
**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `ticker` | `str` | The stock ticker |
| `exchange` | `str` | The stock exchange |
| `source` | `str` | The data source (eod, yf, etc.) |

**Returns:**

| Type | Description |
|------|--------------|
| `pd.DataFrame` | the ticker QoQ earnings growth data |

### **Method: async_get_ticker_gross_profitTTM**
```python
def async_get_ticker_gross_profitTTM(
			ticker: str,
			exchange: str,
			source: str = "eod",
			fundamental_data=None
		) -> pd.DataFrame
```
Get ticker gross profit TTM.

Examples:
```python
gross_profitTTM = await dc.equities.async_get_ticker_gross_profitTTM("AAPL", "US", "eod")

```
**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `ticker` | `str` | The stock ticker |
| `exchange` | `str` | The stock exchange |
| `source` | `str` | The data source (eod, yf, etc.) |

**Returns:**

| Type | Description |
|------|--------------|
| `pd.DataFrame` | the ticker gross profit TTM data |

### **Method: async_get_ticker_diluted_epsTTM**
```python
def async_get_ticker_diluted_epsTTM(
			ticker: str,
			exchange: str,
			source: str = "eod",
			fundamental_data=None
		) -> pd.DataFrame
```
Get ticker diluted EPS TTM (Earnings Per Share TTM).

Examples:
```python
diluted_epsTTM = await dc.equities.async_get_ticker_diluted_epsTTM("AAPL", "US", "eod")

```
**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `ticker` | `str` | The stock ticker |
| `exchange` | `str` | The stock exchange |
| `source` | `str` | The data source (eod, yf, etc.) |

**Returns:**

| Type | Description |
|------|--------------|
| `pd.DataFrame` | the ticker diluted EPS TTM data |

### **Method: async_get_ticker_analyst_target**
```python
def async_get_ticker_analyst_target(
			ticker: str,
			exchange: str,
			source: str = "eod",
			fundamental_data=None
		) -> pd.DataFrame
```
Get ticker analyst target.

Examples:
```python
analyst_target = await dc.equities.async_get_ticker_analyst_target("AAPL", "US", "eod")

```
**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `ticker` | `str` | The stock ticker |
| `exchange` | `str` | The stock exchange |
| `source` | `str` | The data source (eod, yf, etc.) |

**Returns:**

| Type | Description |
|------|--------------|
| `pd.DataFrame` | the ticker analyst target data |

### **Method: async_get_ticker_sharestats**
```python
def async_get_ticker_sharestats(
			ticker: str,
			exchange: str,
			source: str = "eod",
			fundamental_data=None
		) -> pd.DataFrame
```
Get ticker share stats.

Examples:
```python
sharestats = await dc.equities.async_get_ticker_sharestats("AAPL", "US", "eod")

```
**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `ticker` | `str` | The stock ticker |
| `exchange` | `str` | The stock exchange |
| `source` | `str` | The data source (eod, yf, etc.) |

**Returns:**

| Type | Description |
|------|--------------|
| `pd.DataFrame` | the ticker share stats data |

### **Method: async_get_ticker_shortratio**
```python
def async_get_ticker_shortratio(
			ticker: str,
			exchange: str,
			source: str = "eod",
			fundamental_data=None
		) -> pd.DataFrame
```
Get ticker short ratio.

Examples:
```python
shortratio = await dc.equities.async_get_ticker_shortratio("AAPL", "US", "eod")

```
**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `ticker` | `str` | The stock ticker |
| `exchange` | `str` | The stock exchange |
| `source` | `str` | The data source (eod, yf, etc.) |

**Returns:**

| Type | Description |
|------|--------------|
| `pd.DataFrame` | the ticker short ratio data |

### **Method: async_get_ticker_percentinsiders**
```python
def async_get_ticker_percentinsiders(
			ticker: str,
			exchange: str,
			source: str = "eod",
			fundamental_data=None
		) -> pd.DataFrame
```
Get ticker percent insiders.

Examples:
```python
percentinsiders = await dc.equities.async_get_ticker_percentinsiders("AAPL", "US", "eod")

```
**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `ticker` | `str` | The stock ticker |
| `exchange` | `str` | The stock exchange |
| `source` | `str` | The data source (eod, yf, etc.) |

**Returns:**

| Type | Description |
|------|--------------|
| `pd.DataFrame` | the ticker percent insiders data |

### **Method: async_get_ticker_valuation**
```python
def async_get_ticker_valuation(
			ticker: str,
			exchange: str,
			source: str = "eod",
			fundamental_data=None
		) -> pd.DataFrame
```
Get ticker valuation.

Examples:
```python
valuation = await dc.equities.async_get_ticker_valuation("AAPL", "US", "eod")

Ticker Valuation: {'TrailingPE': 26.3297, 'ForwardPE': 26.3158, 'PriceSalesTTM': 6.778,
'PriceBookMRQ': 35.4267, 'EnterpriseValue': 2649250332672, 'EnterpriseValueRevenue': 6.8966,
'EnterpriseValueEbitda': 19.929}


```
**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `ticker` | `str` | The stock ticker |
| `exchange` | `str` | The stock exchange |
| `source` | `str` | The data source (eod, yf, etc.) |

**Returns:**

| Type | Description |
|------|--------------|
| `pd.DataFrame` | the ticker valuation data |

### **Method: async_get_ticker_trailing_pe**
```python
def async_get_ticker_trailing_pe(
			ticker: str,
			exchange: str,
			source: str = "eod",
			fundamental_data=None
		) -> pd.DataFrame
```
Get ticker trailing PE (Price to Earnings).

Examples:
```python
trailing_pe = await dc.equities.async_get_ticker_trailing_pe("AAPL", "US", "eod")

```
**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `ticker` | `str` | The stock ticker |
| `exchange` | `str` | The stock exchange |
| `source` | `str` | The data source (eod, yf, etc.) |

**Returns:**

| Type | Description |
|------|--------------|
| `pd.DataFrame` | the ticker trailing PE data |

### **Method: async_get_ticker_forward_pe**
```python
def async_get_ticker_forward_pe(
			ticker: str,
			exchange: str,
			source: str = "eod",
			fundamental_data=None
		) -> pd.DataFrame
```
Get ticker forward PE (Price to Earnings).

Examples:
```python
forward_pe = await dc.equities.async_get_ticker_forward_pe("AAPL", "US", "eod")

```
**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `ticker` | `str` | The stock ticker |
| `exchange` | `str` | The stock exchange |
| `source` | `str` | The data source (eod, yf, etc.) |

**Returns:**

| Type | Description |
|------|--------------|
| `pd.DataFrame` | the ticker forward PE data |

### **Method: async_get_ticker_price_to_sales**
```python
def async_get_ticker_price_to_sales(
			ticker: str,
			exchange: str,
			source: str = "eod",
			fundamental_data=None
		) -> pd.DataFrame
```
Get ticker price to sales.

Examples:
```python
price_to_sales = await dc.equities.async_get_ticker_price_to_sales("AAPL", "US", "eod")

```
**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `ticker` | `str` | The stock ticker |
| `exchange` | `str` | The stock exchange |
| `source` | `str` | The data source (eod, yf, etc.) |

**Returns:**

| Type | Description |
|------|--------------|
| `pd.DataFrame` | the ticker price to sales data |

### **Method: async_get_ticker_price_to_book**
```python
def async_get_ticker_price_to_book(
			ticker: str,
			exchange: str,
			source: str = "eod",
			fundamental_data=None
		) -> pd.DataFrame
```
Get ticker price to book.

Examples:
```python
price_to_book = await dc.equities.async_get_ticker_price_to_book("AAPL", "US", "eod")

```
**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `ticker` | `str` | The stock ticker |
| `exchange` | `str` | The stock exchange |
| `source` | `str` | The data source (eod, yf, etc.) |

**Returns:**

| Type | Description |
|------|--------------|
| `pd.DataFrame` | the ticker price to book data |

### **Method: async_get_ticker_ev**
```python
def async_get_ticker_ev(
			ticker: str,
			exchange: str,
			source: str = "eod",
			fundamental_data=None
		) -> pd.DataFrame
```
Get ticker enterprise value.

Examples:
```python
ev = await dc.equities.async_get_ticker_ev("AAPL", "US", "eod")

```
**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `ticker` | `str` | The stock ticker |
| `exchange` | `str` | The stock exchange |
| `source` | `str` | The data source (eod, yf, etc.) |

**Returns:**

| Type | Description |
|------|--------------|
| `pd.DataFrame` | the ticker enterprise value data |

### **Method: async_get_ticker_ev_revenue**
```python
def async_get_ticker_ev_revenue(
			ticker: str,
			exchange: str,
			source: str = "eod",
			fundamental_data=None
		) -> pd.DataFrame
```
Get ticker enterprise value to revenue.

Examples:
```python
ev_revenue = await dc.equities.async_get_ticker_ev_revenue("AAPL", "US", "eod")

```
**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `ticker` | `str` | The stock ticker |
| `exchange` | `str` | The stock exchange |
| `source` | `str` | The data source (eod, yf, etc.) |

**Returns:**

| Type | Description |
|------|--------------|
| `pd.DataFrame` | the ticker enterprise value to revenue data |

### **Method: async_get_ticker_ev_ebitda**
```python
def async_get_ticker_ev_ebitda(
			ticker: str,
			exchange: str,
			source: str = "eod",
			fundamental_data=None
		) -> pd.DataFrame
```
Get ticker enterprise value to EBITDA (Earnings Before Interest, Taxes, Depreciation, and Amortization).

Examples:
```python
ev_ebitda = await dc.equities.async_get_ticker_ev_ebitda("AAPL", "US", "eod")

```
**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `ticker` | `str` | The stock ticker |
| `exchange` | `str` | The stock exchange |
| `source` | `str` | The data source (eod, yf, etc.) |

**Returns:**

| Type | Description |
|------|--------------|
| `pd.DataFrame` | the ticker enterprise value to EBITDA data |
