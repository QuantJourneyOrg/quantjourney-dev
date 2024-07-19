# Module Information

**Description:**
Eodhistorical Data Connector of QuantJourney Framework

This module provides a class for fetching financial and economic data from the Eodhistorical Data API.
It supports the retrieval of OHLCV data, fundamental data, and other financial metrics for a wide range of stocks and indices.

**Author:** jpolec

**Date:** 18-03-2024

## Class: EodConnector()

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
Asynchronously fetches OHLCV data for a given list of tickers and exchanges.
**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `tickers` | `list of str` | List of stock tickers. |
| `exchanges` | `list of str` | List of stock exchanges corresponding to tickers. |
| `granularity` | `str` | Time period ('5m', '15m', '30m', '1h', '1d'). |
| `period_starts` | `list of str` | List of start dates for each ticker's data retrieval period. |
| `period_ends` | `list of str` | List of end dates for each ticker's data retrieval period. |

**Returns:**

| Type | Description |
|------|--------------|
| `List[pd.DataFrame]` | List of DataFrames containing OHLCV data for each ticker. |

### **Method: async_get_live_lagged_prices**
```python
def async_get_live_lagged_prices(
			tickers: List[str],
			exchanges: List[str]
		) -> List[pd.DataFrame]
```
Asynchronously fetches live and lagged prices for the given tickers and exchanges.
**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `tickers` | `list of str` | List of stock tickers. |
| `exchanges` | `list of str` | List of stock exchanges corresponding to tickers. |

**Returns:**

| Type | Description |
|------|--------------|
| `List[pd.DataFrame]` | Dictionary containing live and lagged prices for each ticker. |

### **Method: async_get_intraday_data**
```python
def async_get_intraday_data(
			pairs,
			interval,
			to_utc,
			period_days
		) -> Dict
```
Fetches intraday data for the given forex pairs
**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `pairs` | `list of str` | List of forex pairs. |
| `interval` | `str` | Interval for the intraday data ('1m', '5m', '15m', '30m', '1h'). |
| `to_utc` | `datetime` | End date and time in UTC. |
| `period_days` | `int` | Number of days for the data period. |

**Returns:**

| Type | Description |
|------|--------------|
| `Dict` | Dictionary containing intraday data DataFrames for each pair. |

### **Method: async_get_fundamental_data**
```python
def async_get_fundamental_data(
			ticker: str,
			exchange: str ="US"
		) -> Dict
```
Get fundamental data for a given stock ticker or Index.
Available data:: https://eodhistoricaldata.com/financial-apis/stock-etfs-fundamental-data-feeds/
**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `ticker` | `str` | Stock ticker or Index. |
| `exchange` | `str` | Stock exchange. Default is 'US'. |

**Returns:**

| Type | Description |
|------|--------------|
| `Dict` | Dictionary containing fundamental data. |

### **Method: async_get_income_statement**
```python
def async_get_income_statement(
			ticker: str,
			exchange: str,
			option: str ="q"
		) -> pd.DataFrame
```
Get income statement data for a given stock ticker and exchange.

Examples:
```python
income_statement = await async_get_income_statement("AAPL", "US", "q")

Income Statement (Quarterly):
date filing_date currency_symbol researchDevelopment  \
1985-09-30  1985-09-30  1985-09-30             USD                None
1985-12-31  1985-12-31  1985-12-31             USD                None
1986-03-31  1986-03-31  1986-03-31             USD                None
1986-06-30  1986-06-30  1986-06-30             USD                None
1986-09-30  1986-09-30  1986-09-30             USD                None
...                ...         ...             ...                 ...
2022-12-31  2022-12-31  2023-02-03             USD       7709000000.00
2023-03-31  2023-03-31  2023-05-05             USD       7457000000.00
2023-06-30  2023-06-30  2023-08-04             USD       7442000000.00
2023-09-30  2023-09-30  2023-11-03             USD       7307000000.00
2023-12-31  2023-12-31  2024-02-02             USD       7696000000.00

```
**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `ticker` | `str` | Stock ticker. |
| `exchange` | `str` | Stock exchange. |
| `option` | `str` | Option for quarterly ('q') or yearly ('y') data. |

**Returns:**

| Type | Description |
|------|--------------|
| `pd.DataFrame` | DataFrame containing income statement data. |

### **Method: async_get_balance_sheet**
```python
def async_get_balance_sheet(
			ticker,
			exchange,
			option="q"
		) -> pd.DataFrame
```
Get balance sheet data for a given stock ticker and exchange.

Examples:
```python
balance_sheet = await async_get_balance_sheet("AAPL", "US", "q")

Balance Sheet (Quarterly):
date filing_date currency_symbol      totalAssets  \
1985-09-30  1985-09-30  1985-09-30             USD     936200000.00
1985-12-31  1985-12-31  1985-12-31             USD             None
1986-03-31  1986-03-31  1986-03-31             USD             None
1986-06-30  1986-06-30  1986-06-30             USD             None
1986-09-30  1986-09-30  1986-09-30             USD    1160100000.00
...                ...         ...             ...              ...
2022-12-31  2022-12-31  2023-02-03             USD  346747000000.00
2023-03-31  2023-03-31  2023-05-05             USD  332160000000.00
2023-06-30  2023-06-30  2023-08-04             USD  335038000000.00
2023-09-30  2023-09-30  2023-11-03             USD  352583000000.00
2023-12-31  2023-12-31  2024-02-02             USD  353514000000.00

```
**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `ticker` | `str` | Stock ticker. |
| `exchange` | `str` | Stock exchange. |
| `option` | `str` | Option for quarterly ('q') or yearly ('y') data. |

**Returns:**

| Type | Description |
|------|--------------|
| `pd.DataFrame` | DataFrame containing balance sheet data. |

### **Method: async_get_cash_flow**
```python
def async_get_cash_flow(
			ticker,
			exchange,
			option="q"
		)
```
Get cash flow data for a given stock ticker and exchange.

Examples:
```python
cash_flow = await async_get_cash_flow("AAPL", "US", "q")

Cash Flow (Quarterly):
date filing_date currency_symbol     investments  \
1989-12-31  1989-12-31  1989-12-31             USD            None
1990-03-31  1990-03-31  1990-03-31             USD            None
1990-06-30  1990-06-30  1990-06-30             USD            None
1990-09-30  1990-09-30  1990-09-30             USD            None
1990-12-31  1990-12-31  1990-12-31             USD            None
...                ...         ...             ...             ...
2022-12-31  2022-12-31  2023-02-03             USD  -1445000000.00
2023-03-31  2023-03-31  2023-05-05             USD   2319000000.00
2023-06-30  2023-06-30  2023-08-04             USD    437000000.00
2023-09-30  2023-09-30  2023-11-03             USD   2394000000.00
2023-12-31  2023-12-31  2024-02-02             USD   1927000000.00

```
**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `ticker` | `str` | Stock ticker. |
| `exchange` | `str` | Stock exchange. |
| `option` | `str` | Option for quarterly ('q') or yearly ('y') data. |

### **Method: get_ticker_highlights**
```python
def get_ticker_highlights(
			ticker: str,
			exchange: str,
			fundamental_data: Optional[Dict] = None
		) -> Optional[Dict]
```
Get highlights data for a given stock ticker and exchange. If fundamental data is pre-fetched,
it can be passed directly to avoid fetching it again.

Examples:
```python
{'MarketCapitalization': 2614313615360, 'MarketCapitalizationMln': 2614313.6154, 'EBITDA': 130108997632, 'PERatio': 26.3297,
'PEGRatio': 2.112, 'WallStreetTargetPrice': 198.9, 'BookValue': 4.793, 'DividendShare': 0.95, 'DividendYield': 0.0057,
'EarningsShare': 6.43, 'EPSEstimateCurrentYear': 6.53, 'EPSEstimateNextYear': 7.13, 'EPSEstimateNextQuarter': 1.57,
'EPSEstimateCurrentQuarter': 2.1, 'MostRecentQuarter': '2023-12-31', 'ProfitMargin': 0.2616, 'OperatingMarginTTM': 0.3376,
'ReturnOnAssetsTTM': 0.2118, 'ReturnOnEquityTTM': 1.5427, 'RevenueTTM': 385706000384, 'RevenuePerShareTTM': 24.648,
'QuarterlyRevenueGrowthYOY': 0.021, 'GrossProfitTTM': 170782000000, 'DilutedEpsTTM': 6.43, 'QuarterlyEarningsGrowthYOY': 0.16}

```
**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `ticker` | `str` | Stock ticker. |
| `exchange` | `str` | Stock exchange. |
| `fundamental_data` | `Optional[Dict]` | Pre-fetched fundamental data for the ticker. |

**Returns:**

| Type | Description |
|------|--------------|
| `Optional[Dict]` | Dictionary containing highlights data if found, otherwise None. |

### **Method: get_financial_metric**
```python
def get_financial_metric(
			ticker: str,
			exchange: str,
			metric_key: str,
			fundamental_data: Optional[Dict] = None
		) -> Optional[Union[str, float]]
```
Fetch a specific financial metric from the highlights data for a given stock ticker and exchange, using either pre-fetched
fundamental data or by fetching it anew. This method ensures that the data is handled efficiently and errors are logged properly.
**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `ticker` | `str` | Stock ticker. |
| `exchange` | `str` | Stock exchange. |
| `metric_key` | `str` | The key of the financial metric in the highlights. |
| `fundamental_data` | `Optional[Dict]` | Optionally pre-fetched fundamental data containing the 'Highlights' key. |

**Returns:**

| Type | Description |
|------|--------------|
| `Optional[Union[str, float]]` | The requested financial metric in its original format if available, otherwise None. |

### **Method: get_ticker_mcap**
```python
def get_ticker_mcap(
			ticker,
			exchange,
			fundamental_data=None
		)
```

### **Method: get_ticker_ebitda**
```python
def get_ticker_ebitda(
			ticker,
			exchange,
			fundamental_data=None
		)
```

### **Method: get_ticker_pe**
```python
def get_ticker_pe(
			ticker,
			exchange,
			fundamental_data=None
		)
```

### **Method: get_ticker_peg**
```python
def get_ticker_peg(
			ticker,
			exchange,
			fundamental_data=None
		)
```

### **Method: get_ticker_book**
```python
def get_ticker_book(
			ticker,
			exchange,
			fundamental_data=None
		)
```

### **Method: get_ticker_div_ps**
```python
def get_ticker_div_ps(
			ticker,
			exchange,
			fundamental_data=None
		)
```

### **Method: get_ticker_div_yield**
```python
def get_ticker_div_yield(
			ticker,
			exchange,
			fundamental_data=None
		)
```

### **Method: get_ticker_eps**
```python
def get_ticker_eps(
			ticker,
			exchange,
			fundamental_data=None
		)
```

### **Method: get_ticker_last_quarter_date**
```python
def get_ticker_last_quarter_date(
			ticker,
			exchange,
			fundamental_data=None
		)
```

### **Method: get_ticker_profit_margin**
```python
def get_ticker_profit_margin(
			ticker,
			exchange,
			fundamental_data=None
		)
```

### **Method: get_ticker_op_marginTTM**
```python
def get_ticker_op_marginTTM(
			ticker,
			exchange,
			fundamental_data=None
		)
```

### **Method: get_ticker_roaTTM**
```python
def get_ticker_roaTTM(
			ticker,
			exchange,
			fundamental_data=None
		)
```

### **Method: get_ticker_roeTTM**
```python
def get_ticker_roeTTM(
			ticker,
			exchange,
			fundamental_data=None
		)
```

### **Method: get_ticker_revenueTTM**
```python
def get_ticker_revenueTTM(
			ticker,
			exchange,
			fundamental_data=None
		)
```

### **Method: get_ticker_revenue_psTTM**
```python
def get_ticker_revenue_psTTM(
			ticker,
			exchange,
			fundamental_data=None
		)
```

### **Method: get_ticker_qoq_rev_growth**
```python
def get_ticker_qoq_rev_growth(
			ticker,
			exchange,
			fundamental_data=None
		)
```

### **Method: get_ticker_qoq_earnings_growth**
```python
def get_ticker_qoq_earnings_growth(
			ticker,
			exchange,
			fundamental_data=None
		)
```

### **Method: get_ticker_gross_profitTTM**
```python
def get_ticker_gross_profitTTM(
			ticker,
			exchange,
			fundamental_data=None
		)
```

### **Method: get_ticker_diluted_epsTTM**
```python
def get_ticker_diluted_epsTTM(
			ticker,
			exchange,
			fundamental_data=None
		)
```

### **Method: get_ticker_analyst_target**
```python
def get_ticker_analyst_target(
			ticker,
			exchange,
			fundamental_data=None
		)
```

### **Method: get_ticker_sharestats**
```python
def get_ticker_sharestats(
			ticker: str,
			exchange: str,
			fundamental_data: Optional[Dict] = None
		) -> Optional[Dict]
```
Fetch ShareStats data for a given stock ticker and exchange.
**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `ticker` | `str` | Stock ticker. |
| `exchange` | `str` | Stock exchange. |
| `fundamental_data` | `Optional[Dict]` | Optionally pre-fetched fundamental data. |

**Returns:**

| Type | Description |
|------|--------------|
| `Optional[Dict]` | Dictionary containing ShareStats data if found, otherwise None. |

### **Method: get_ticker_shortratio**
```python
def get_ticker_shortratio(
			ticker: str,
			exchange: str,
			fundamental_data: Optional[Dict] = None
		) -> Optional[float]
```
Get the short ratio from ShareStats for a given ticker and exchange.
**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `ticker` | `str` | Stock ticker. |
| `exchange` | `str` | Stock exchange. |
| `fundamental_data` | `Optional[Dict]` | Pre-fetched ShareStats or fundamental data. |

**Returns:**

| Type | Description |
|------|--------------|
| `Optional[float]` | Short ratio if available, otherwise None. |

### **Method: get_ticker_percentinsiders**
```python
def get_ticker_percentinsiders(
			ticker: str,
			exchange: str,
			fundamental_data: Optional[Dict] = None
		) -> Optional[float]
```
Get the percentage of insiders from ShareStats for a given ticker and exchange.
**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `ticker` | `str` | Stock ticker. |
| `exchange` | `str` | Stock exchange. |
| `fundamental_data` | `Optional[Dict]` | Pre-fetched ShareStats or fundamental data. |

**Returns:**

| Type | Description |
|------|--------------|
| `Optional[float]` | Percent of insiders if available, otherwise None. |

### **Method: get_ticker_valuation**
```python
def get_ticker_valuation(
			ticker: str,
			exchange: str,
			fundamental_data: Optional[Dict] = None
		) -> Optional[Dict]
```
Fetch valuation data for a given stock ticker and exchange.

Examples:
```python
ticker_val = await get_ticker_valuation("AAPL", "US")

{'TrailingPE': 26.3297, 'ForwardPE': 26.3158, 'PriceSalesTTM': 6.778, 'PriceBookMRQ': 35.4267, 'EnterpriseValue': 2649250332672,
'EnterpriseValueRevenue': 6.8966, 'EnterpriseValueEbitda': 19.929}

```
**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `ticker` | `str` | Stock ticker. |
| `exchange` | `str` | Stock exchange. |
| `fundamental_data` | `Optional[Dict]` | Optionally pre-fetched fundamental data. |

**Returns:**

| Type | Description |
|------|--------------|
| `Optional[Dict]` | Valuation data if found, otherwise None. |

### **Method: get_ticker_trailing_pe**
```python
def get_ticker_trailing_pe(
			ticker: str,
			exchange: str,
			fundamental_data: Optional[Dict] = None
		) -> Optional[float]
```
Get the trailing PE ratio from the valuation data for a given ticker and exchange.
**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `ticker` | `str` | Stock ticker. |
| `exchange` | `str` | Stock exchange. |
| `fundamental_data` | `Optional[Dict]` | Optionally pre-fetched fundamental or valuation data. |

**Returns:**

| Type | Description |
|------|--------------|
| `Optional[float]` | Trailing PE ratio if available, otherwise None. |

### **Method: get_ticker_forward_pe**
```python
def get_ticker_forward_pe(
			ticker: str,
			exchange: str,
			fundamental_data: Optional[Dict] = None
		) -> Optional[float]
```
Get the forward PE ratio from the valuation data for a given ticker and exchange.
**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `ticker` | `str` | Stock ticker. |
| `exchange` | `str` | Stock exchange. |
| `fundamental_data` | `Optional[Dict]` | Optionally pre-fetched fundamental or valuation data. |

**Returns:**

| Type | Description |
|------|--------------|
| `Optional[float]` | Forward PE ratio if available, otherwise None. |

### **Method: get_ticker_price_to_sales**
```python
def get_ticker_price_to_sales(
			ticker: str,
			exchange: str,
			fundamental_data: Optional[Dict] = None
		) -> Optional[float]
```
Get the price-to-sales ratio from the valuation data for a given ticker and exchange.
**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `ticker` | `str` | Stock ticker. |
| `exchange` | `str` | Stock exchange. |
| `fundamental_data` | `Optional[Dict]` | Optionally pre-fetched fundamental or valuation data. |

**Returns:**

| Type | Description |
|------|--------------|
| `Optional[float]` | Price-to-sales ratio if available, otherwise None. |

### **Method: get_ticker_price_to_book**
```python
def get_ticker_price_to_book(
			ticker: str,
			exchange: str,
			fundamental_data: Optional[Dict] = None
		) -> Optional[float]
```
Get the price-to-book ratio from the valuation data for a given ticker and exchange.
**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `ticker` | `str` | Stock ticker. |
| `exchange` | `str` | Stock exchange. |
| `fundamental_data` | `Optional[Dict]` | Optionally pre-fetched fundamental or valuation data. |

**Returns:**

| Type | Description |
|------|--------------|
| `Optional[float]` | Price-to-book ratio if available, otherwise None. |

### **Method: get_ticker_ev**
```python
def get_ticker_ev(
			ticker: str,
			exchange: str,
			fundamental_data: Optional[Dict] = None
		) -> Optional[float]
```
Get the enterprise value from the valuation data for a given ticker and exchange.
**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `ticker` | `str` | Stock ticker. |
| `exchange` | `str` | Stock exchange. |
| `fundamental_data` | `Optional[Dict]` | Optionally pre-fetched fundamental or valuation data. |

**Returns:**

| Type | Description |
|------|--------------|
| `Optional[float]` | Enterprise value if available, otherwise None. |

### **Method: get_ticker_ev_revenue**
```python
def get_ticker_ev_revenue(
			ticker: str,
			exchange: str,
			fundamental_data: Optional[Dict] = None
		) -> Optional[float]
```
Get the enterprise value to revenue ratio from the valuation data for a given ticker and exchange.
**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `ticker` | `str` | Stock ticker. |
| `exchange` | `str` | Stock exchange. |
| `fundamental_data` | `Optional[Dict]` | Optionally pre-fetched fundamental or valuation data. |

**Returns:**

| Type | Description |
|------|--------------|
| `Optional[float]` | Enterprise value to revenue ratio if available, otherwise None. |

### **Method: get_ticker_ev_ebitda**
```python
def get_ticker_ev_ebitda(
			ticker: str,
			exchange: str,
			fundamental_data: Optional[Dict] = None
		) -> Optional[float]
```
Get the enterprise value to EBITDA ratio from the valuation data for a given ticker and exchange.
**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `ticker` | `str` | Stock ticker. |
| `exchange` | `str` | Stock exchange. |
| `fundamental_data` | `Optional[Dict]` | Optionally pre-fetched fundamental or valuation data. |

**Returns:**

| Type | Description |
|------|--------------|
| `Optional[float]` | Enterprise value to EBITDA ratio if available, otherwise None. |

### **Method: get_exchange_symbols**
```python
def get_exchange_symbols(
			exchange="US"
		) -> List[str]
```
Get all symbols for a given exchange.
**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `exchange` | `str` | Stock exchange. Default is 'US'. |

**Returns:**

| Type | Description |
|------|--------------|
| `List[str]` | List of symbols for the exchange. |

### **Method: get_exchange_list**
```python
def get_exchange_list() -> List[str]
```
Get a list of all exchanges.

**Returns:**

| Type | Description |
|------|--------------|
| `List[str]` | List of all exchanges. |

### **Method: get_index_list**
```python
def get_index_list() -> List[str]
```
Get a list of all indices.

#Supported indices: https://eodhistoricaldata.com/financial-apis/list-supported-indices/

**Returns:**

| Type | Description |
|------|--------------|
| `List[str]` | List |

### **Method: async_get_intraday_forex_data**
```python
def async_get_intraday_forex_data(
			pairs: List[str],
			interval: str = "5m",
			to_utc: datetime = None,
			period_days: int = 120
		) -> List[pd.DataFrame]
```
Asynchronously fetches intraday data for the given forex pairs.
**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `pairs` | `list of str` | List of forex pairs. |
| `interval` | `str` | Interval for the intraday data ('1m', '5m', '15m', '30m', '1h'). |
| `to_utc` | `datetime` | End date and time in UTC. Defaults to current UTC time. |
| `period_days` | `int` | Number of days for the data period. |

**Returns:**

| Type | Description |
|------|--------------|
| `List[pd.DataFrame]` | Dictionary containing intraday data DataFrames for each pair. |

