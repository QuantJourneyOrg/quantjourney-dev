# Module Information

**Description:**
Financial Data Modelling Connector of QuantJourney Framework

This module provides a class for fetching financial and economic data from the Eodhistorical Data API.
It supports the retrieval of OHLCV data, fundamental data, and other financial metrics for a wide range of stocks and indices.

**Author:** jpolec

**Date:** 05-05-2024

## Class: FMPConnector()

### **Method: async_earning_calendar**
```python
def async_earning_calendar(
			from_date: str = None,
			to_date: str = None
		) -> Optional[List[Dict]]
```
Query FMP earning calendar API.

Fetch earning calendar data for a given date range. The maximum time interval between "from" and "to" parameters is 3 months.
**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `from_date` | `str, optional` | Start date in the format 'YYYY-MM-DD'. Defaults to None. |
| `to_date` | `str, optional` | End date in the format 'YYYY-MM-DD'. Defaults to None. |

**Returns:**

| Type | Description |
|------|--------------|
| `Optional[List[Dict]]` | List of earning calendar data dictionaries, or None if an error occurs. |

### **Method: async_historical_earning_calendar**
```python
def async_historical_earning_calendar(
			symbol: str,
			limit: int = DEFAULT_LIMIT
		) -> Optional[List[Dict]]
```
Query FMP /historical/earning_calendar/ API.

Fetch historical earning calendar data for a given stock symbol.
**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `symbol` | `str` | Stock symbol. |
| `limit` | `int, optional` | Number of historical earning calendar entries to retrieve. Defaults to DEFAULT_LIMIT. |

**Returns:**

| Type | Description |
|------|--------------|
| `Optional[List[Dict]]` | A list of dictionaries containing historical earning calendar data. |

### **Method: async_ipo_calendar**
```python
def async_ipo_calendar(
			from_date: str = None,
			to_date: str = None
		) -> Optional[List[Dict]]
```
Query FMP IPO calendar API.

Fetch IPO calendar data for a given date range. The maximum time interval between "from" and "to" parameters is 3 months.
**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `from_date` | `str, optional` | Start date in the format 'YYYY-MM-DD'. Defaults to None. |
| `to_date` | `str, optional` | End date in the format 'YYYY-MM-DD'. Defaults to None. |

**Returns:**

| Type | Description |
|------|--------------|
| `Optional[List[Dict]]` | List of IPO calendar data dictionaries, or None if an error occurs. |

### **Method: async_stock_split_calendar**
```python
def async_stock_split_calendar(
			from_date: str = None,
			to_date: str = None
		) -> Optional[List[Dict]]
```
Query FMP stock split calendar API.

Fetch stock split calendar data for a given date range. The maximum time interval between "from" and "to" parameters is 3 months.
**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `from_date` | `str, optional` | Start date in the format 'YYYY-MM-DD'. Defaults to None. |
| `to_date` | `str, optional` | End date in the format 'YYYY-MM-DD'. Defaults to None. |

**Returns:**

| Type | Description |
|------|--------------|
| `Optional[List[Dict]]` | List of stock split calendar data dictionaries, or None if an error occurs. |

### **Method: async_dividend_calendar**
```python
def async_dividend_calendar(
			from_date: str = None,
			to_date: str = None
		) -> Optional[List[Dict]]
```
Query FMP dividend calendar API.

Fetch dividend calendar data for a given date range. The maximum time interval between "from" and "to" parameters is 3 months.
**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `from_date` | `str, optional` | Start date in the format 'YYYY-MM-DD'. Defaults to None. |
| `to_date` | `str, optional` | End date in the format 'YYYY-MM-DD'. Defaults to None. |

**Returns:**

| Type | Description |
|------|--------------|
| `Optional[List[Dict]]` | List of dividend calendar data dictionaries, or None if an error occurs. |

### **Method: async_economic_calendar**
```python
def async_economic_calendar(
			from_date: str = None,
			to_date: str = None
		) -> Optional[List[Dict]]
```
Query FMP economic calendar API.

Fetch economic calendar data for a given date range. The maximum time interval between "from" and "to" parameters is 3 months.
**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `from_date` | `str, optional` | Start date in the format 'YYYY-MM-DD'. Defaults to None. |
| `to_date` | `str, optional` | End date in the format 'YYYY-MM-DD'. Defaults to None. |

**Returns:**

| Type | Description |
|------|--------------|
| `Optional[List[Dict]]` | List of economic calendar data dictionaries, or None if an error occurs. |

### **Method: async_available_commodities**
```python
def async_available_commodities() -> Optional[List[Dict]]
```
Fetch available commodities.

**Returns:**

| Type | Description |
|------|--------------|
| `Optional[List[Dict]]` | List of available commodities data dictionaries, or None if an error occurs. |

### **Method: async_commodities_list**
```python
def async_commodities_list() -> Optional[List[Dict]]
```
Fetch commodities list.

**Returns:**

| Type | Description |
|------|--------------|
| `Optional[List[Dict]]` | List of commodities data dictionaries, or None if an error occurs. |

### **Method: async_company_profile**
```python
def async_company_profile(
			symbol: str
		) -> Optional[List[Dict]]
```
Fetch company profile data for a given stock symbol.
**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `symbol` | `str` | Stock symbol. |

**Returns:**

| Type | Description |
|------|--------------|
| `Optional[List[Dict]]` | List of company profile data dictionaries, or None if an error occurs. |

### **Method: async_key_executives**
```python
def async_key_executives(
			symbol: str
		) -> Optional[List[Dict]]
```
Fetch key executives data for a given stock symbol.
**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `symbol` | `str` | Stock symbol. |

**Returns:**

| Type | Description |
|------|--------------|
| `Optional[List[Dict]]` | List of key executives data dictionaries, or None if an error occurs. |

### **Method: async_search**
```python
def async_search(
			query: str = "",
			limit: int = DEFAULT_LIMIT,
			exchange: str = ""
		) -> Optional[List[Dict]]
```
Search for stocks using a keyword and other optional parameters.
**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `query` | `str` | Search keyword. |
| `limit` | `int` | Maximum number of results to return. |
| `exchange` | `str` | Stock exchange to filter results. |

**Returns:**

| Type | Description |
|------|--------------|
| `Optional[List[Dict]]` | List of search result dictionaries, or None if an error occurs. |

### **Method: async_search_ticker**
```python
def async_search_ticker(
			query: str = "",
			limit: int = DEFAULT_LIMIT,
			exchange: str = ""
		) -> Optional[List[Dict]]
```
Search for stocks by ticker symbol using a keyword and other optional parameters.
**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `query` | `str` | Search keyword. |
| `limit` | `int` | Maximum number of results to return. |
| `exchange` | `str` | Stock exchange to filter results. |

**Returns:**

| Type | Description |
|------|--------------|
| `Optional[List[Dict]]` | List of search result dictionaries, or None if an error occurs. |

### **Method: async_income_statement**
```python
def async_income_statement(
			symbol: str,
			period: str = "annual",
			limit: int = DEFAULT_LIMIT,
			download: bool = False,
			filename: str = "income_statement.csv"
		) -> Optional[List[Dict]]
```
Fetch income statement data for a given stock symbol.
**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `symbol` | `str` | Stock symbol. |
| `period` | `str` | Period of the income statement data. Can be "annual" or "quarter". |
| `limit` | `int` | Maximum number of results to return. |
| `download` | `bool` | Whether to download the data as a CSV file. |
| `filename` | `str` | Name of the CSV file to save the data, if download is True. |

**Returns:**

| Type | Description |
|------|--------------|
| `Optional[List[Dict]]` | List of income statement data dictionaries, or None if an error occurs. |

### **Method: async_balance_sheet_statement**
```python
def async_balance_sheet_statement(
			symbol: str,
			period: str = "annual",
			limit: int = DEFAULT_LIMIT,
			download: bool = False,
			filename: str = "balance_sheet_statement.csv"
		) -> Optional[List[Dict]]
```
Fetch balance sheet statement data for a given stock symbol.
**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `symbol` | `str` | Stock symbol. |
| `period` | `str` | Period of the balance sheet statement data. Can be "annual" or "quarter". |
| `limit` | `int` | Maximum number of results to return. |
| `download` | `bool` | Whether to download the data as a CSV file. |
| `filename` | `str` | Name of the CSV file to save the data, if download is True. |

**Returns:**

| Type | Description |
|------|--------------|
| `Optional[List[Dict]]` | List of balance sheet statement data dictionaries, or None if an error occurs. |

### **Method: async_cash_flow_statement**
```python
def async_cash_flow_statement(
			symbol: str,
			period: str = "annual",
			limit: int = DEFAULT_LIMIT,
			download: bool = False,
			filename: str = "cash_flow_statement.csv"
		) -> Optional[List[Dict]]
```
Fetch cash flow statement data for a given stock symbol.
**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `symbol` | `str` | Stock symbol. |
| `period` | `str` | Period of the cash flow statement data. Can be "annual" or "quarter". |
| `limit` | `int` | Maximum number of results to return. |
| `download` | `bool` | Whether to download the data as a CSV file. |
| `filename` | `str` | Name of the CSV file to save the data, if download is True. |

**Returns:**

| Type | Description |
|------|--------------|
| `Optional[List[Dict]]` | List of cash flow statement data dictionaries, or None if an error occurs. |

### **Method: async_financial_statement_symbol_lists**
```python
def async_financial_statement_symbol_lists() -> Optional[List[Dict]]
```
Fetch financial statement symbol lists.

**Returns:**

| Type | Description |
|------|--------------|
| `Optional[List[Dict]]` | List of financial statement symbol lists data dictionaries, or None if an error occurs. |

### **Method: async_income_statement_growth**
```python
def async_income_statement_growth(
			symbol: str,
			limit: int = DEFAULT_LIMIT
		) -> Optional[List[Dict]]
```
Fetch income statement growth data for a given stock symbol.
**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `symbol` | `str` | Stock symbol. |
| `limit` | `int` | Maximum number of results to return. |

**Returns:**

| Type | Description |
|------|--------------|
| `Optional[List[Dict]]` | List of income statement growth data dictionaries, or None if an error occurs. |

### **Method: async_balance_sheet_statement_growth**
```python
def async_balance_sheet_statement_growth(
			symbol: str,
			limit: int = DEFAULT_LIMIT
		) -> Optional[List[Dict]]
```
Fetch balance sheet statement growth data for a given stock symbol.
**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `symbol` | `str` | Stock symbol. |
| `limit` | `int` | Maximum number of results to return. |

**Returns:**

| Type | Description |
|------|--------------|
| `Optional[List[Dict]]` | List of balance sheet statement growth data dictionaries, or None if an error occurs. |

### **Method: async_cash_flow_statement_growth**
```python
def async_cash_flow_statement_growth(
			symbol: str,
			limit: int = DEFAULT_LIMIT
		) -> Optional[List[Dict]]
```
Fetch cash flow statement growth data for a given stock symbol.
**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `symbol` | `str` | Stock symbol. |
| `limit` | `int` | Maximum number of results to return. |

**Returns:**

| Type | Description |
|------|--------------|
| `Optional[List[Dict]]` | List of cash flow statement growth data dictionaries, or None if an error occurs. |

### **Method: async_income_statement_as_reported**
```python
def async_income_statement_as_reported(
			symbol: str,
			period: str = "annual",
			limit: int = DEFAULT_LIMIT,
			download: bool = False,
			filename: str = "income_statement_as_reported.csv"
		) -> Optional[List[Dict]]
```
Fetch income statement as reported data for a given stock symbol.
**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `symbol` | `str` | Stock symbol. |
| `period` | `str` | Period of the income statement as reported data. Can be "annual" or "quarter". |
| `limit` | `int` | Maximum number of results to return. |
| `download` | `bool` | Whether to download the data as a CSV file. |
| `filename` | `str` | Name of the CSV file to save the data, if download is True. |

**Returns:**

| Type | Description |
|------|--------------|
| `Optional[List[Dict]]` | List of income statement as reported data dictionaries, or None if an error occurs. |

### **Method: async_balance_sheet_statement_as_reported**
```python
def async_balance_sheet_statement_as_reported(
			symbol: str,
			period: str = "annual",
			limit: int = DEFAULT_LIMIT,
			download: bool = False,
			filename: str = "balance_sheet_statement_as_reported.csv"
		) -> Optional[List[Dict]]
```
Fetch balance sheet statement as reported data for a given stock symbol.
**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `symbol` | `str` | Stock symbol. |
| `period` | `str` | Period of the balance sheet statement as reported data. Can be "annual" or "quarter". |
| `limit` | `int` | Maximum number of results to return. |
| `download` | `bool` | Whether to download the data as a CSV file. |
| `filename` | `str` | Name of the CSV file to save the data, if download is True. |

**Returns:**

| Type | Description |
|------|--------------|
| `Optional[List[Dict]]` | List of balance sheet statement as reported data dictionaries, or None if an error occurs. |

### **Method: async_cash_flow_statement_as_reported**
```python
def async_cash_flow_statement_as_reported(
			symbol: str,
			period: str = "annual",
			limit: int = DEFAULT_LIMIT,
			download: bool = False,
			filename: str = "cash_flow_statement_as_reported.csv"
		) -> Optional[List[Dict]]
```
Fetch cash flow statement as reported data for a given stock symbol.
**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `symbol` | `str` | Stock symbol. |
| `period` | `str` | Period of the cash flow statement as reported data. Can be "annual" or "quarter". |
| `limit` | `int` | Maximum number of results to return. |
| `download` | `bool` | Whether to download the data as a CSV file. |
| `filename` | `str` | Name of the CSV file to save the data, if download is True. |

**Returns:**

| Type | Description |
|------|--------------|
| `Optional[List[Dict]]` | List of cash flow statement as reported data dictionaries, or None if an error occurs. |

### **Method: async_financial_statement_full_as_reported**
```python
def async_financial_statement_full_as_reported(
			symbol: str,
			period: str = "annual"
		) -> Optional[List[Dict]]
```
Fetch financial statement full as reported data for a given stock symbol.
**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `symbol` | `str` | Stock symbol. |
| `period` | `str` | Period of the financial statement full as reported data. Can be "annual" or "quarter". |

**Returns:**

| Type | Description |
|------|--------------|
| `Optional[List[Dict]]` | List of financial statement full as reported data dictionaries, or None if an error occurs. |

### **Method: async_financial_ratios_ttm**
```python
def async_financial_ratios_ttm(
			symbol: str
		) -> Optional[List[Dict]]
```
Fetch financial ratios TTM (trailing twelve months) data for a given stock symbol.
**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `symbol` | `str` | Stock symbol. |

**Returns:**

| Type | Description |
|------|--------------|
| `Optional[List[Dict]]` | List of financial ratios TTM data dictionaries, or None if an error occurs. |

### **Method: async_financial_ratios**
```python
def async_financial_ratios(
			symbol: str,
			period: str = "annual",
			limit: int = DEFAULT_LIMIT
		) -> Optional[List[Dict]]
```
Fetch financial ratios data for a given stock symbol.
**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `symbol` | `str` | Stock symbol. |
| `period` | `str` | Period of the financial ratios data. Can be "annual" or "quarter". |
| `limit` | `int` | Maximum number of results to return. |

**Returns:**

| Type | Description |
|------|--------------|
| `Optional[List[Dict]]` | List of financial ratios data dictionaries, or None if an error occurs. |

### **Method: async_enterprise_values**
```python
def async_enterprise_values(
			symbol: str,
			period: str = "annual",
			limit: int = DEFAULT_LIMIT
		) -> Optional[List[Dict]]
```
Fetch enterprise values data for a given stock symbol.
**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `symbol` | `str` | Stock symbol. |
| `period` | `str` | Period of the enterprise values data. Can be "annual" or "quarter". |
| `limit` | `int` | Maximum number of results to return. |

**Returns:**

| Type | Description |
|------|--------------|
| `Optional[List[Dict]]` | List of enterprise values data dictionaries, or None if an error occurs. |

### **Method: async_key_metrics_ttm**
```python
def async_key_metrics_ttm(
			symbol: str,
			limit: int = DEFAULT_LIMIT
		) -> Optional[List[Dict]]
```
Fetch key metrics TTM (trailing twelve months) data for a given stock symbol.
**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `symbol` | `str` | Stock symbol. |
| `limit` | `int` | Maximum number of results to return. |

**Returns:**

| Type | Description |
|------|--------------|
| `Optional[List[Dict]]` | List of key metrics TTM data dictionaries, or None if an error occurs. |

### **Method: async_key_metrics**
```python
def async_key_metrics(
			symbol: str,
			period: str = "annual",
			limit: int = DEFAULT_LIMIT
		) -> Optional[List[Dict]]
```
Fetch key metrics data for a given stock symbol.
**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `symbol` | `str` | Stock symbol. |
| `period` | `str` | Period of the key metrics data. Can be "annual" or "quarter". |
| `limit` | `int` | Maximum number of results to return. |

**Returns:**

| Type | Description |
|------|--------------|
| `Optional[List[Dict]]` | List of key metrics data dictionaries, or None if an error occurs. |

### **Method: async_financial_growth**
```python
def async_financial_growth(
			symbol: str,
			period: str = "annual",
			limit: int = DEFAULT_LIMIT
		) -> Optional[List[Dict]]
```
Fetch financial growth data for a given stock symbol.
**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `symbol` | `str` | Stock symbol. |
| `period` | `str` | Period of the financial growth data. Can be "annual" or "quarter". |
| `limit` | `int` | Maximum number of results to return. |

**Returns:**

| Type | Description |
|------|--------------|
| `Optional[List[Dict]]` | List of financial growth data dictionaries, or None if an error occurs. |

### **Method: async_rating**
```python
def async_rating(
			symbol: str
		) -> Optional[List[Dict]]
```
Fetch rating data for a given stock symbol.
**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `symbol` | `str` | Stock symbol. |

**Returns:**

| Type | Description |
|------|--------------|
| `Optional[List[Dict]]` | List of rating data dictionaries, or None if an error occurs. |

### **Method: async_historical_rating**
```python
def async_historical_rating(
			symbol: str,
			limit: int = DEFAULT_LIMIT
		) -> Optional[List[Dict]]
```
Fetch historical rating data for a given stock symbol.
**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `symbol` | `str` | Stock symbol. |
| `limit` | `int` | Maximum number of results to return. |

**Returns:**

| Type | Description |
|------|--------------|
| `Optional[List[Dict]]` | List of historical rating data dictionaries, or None if an error occurs. |

### **Method: async_discounted_cash_flow**
```python
def async_discounted_cash_flow(
			symbol: str
		) -> Optional[List[Dict]]
```
Fetch discounted cash flow data for a given stock symbol.
**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `symbol` | `str` | Stock symbol. |

**Returns:**

| Type | Description |
|------|--------------|
| `Optional[List[Dict]]` | List of discounted cash flow data dictionaries, or None if an error occurs. |

### **Method: async_historical_discounted_cash_flow**
```python
def async_historical_discounted_cash_flow(
			symbol: str,
			period: str = "annual",
			limit: int = DEFAULT_LIMIT
		) -> Optional[List[Dict]]
```
Fetch historical discounted cash flow data for a given stock symbol.
**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `symbol` | `str` | Stock symbol. |
| `period` | `str` | Period of the historical discounted cash flow data. Can be "annual" or "quarter". |
| `limit` | `int` | Maximum number of results to return. |

**Returns:**

| Type | Description |
|------|--------------|
| `Optional[List[Dict]]` | List of historical discounted cash flow data dictionaries, or None if an error occurs. |

### **Method: async_historical_daily_discounted_cash_flow**
```python
def async_historical_daily_discounted_cash_flow(
			symbol: str,
			limit: int = DEFAULT_LIMIT
		) -> Optional[List[Dict]]
```
Fetch historical daily discounted cash flow data for a given stock symbol.
**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `symbol` | `str` | Stock symbol. |
| `limit` | `int` | Maximum number of results to return. |

**Returns:**

| Type | Description |
|------|--------------|
| `Optional[List[Dict]]` | List of historical daily discounted cash flow data dictionaries, or None if an error occurs. |

### **Method: async_market_capitalization**
```python
def async_market_capitalization(
			symbol: str
		) -> Optional[List[Dict]]
```
Fetch market capitalization data for a given stock symbol.
**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `symbol` | `str` | Stock symbol. |

**Returns:**

| Type | Description |
|------|--------------|
| `Optional[List[Dict]]` | List of market capitalization data dictionaries, or None if an error occurs. |

### **Method: async_historical_market_capitalization**
```python
def async_historical_market_capitalization(
			symbol: str,
			limit: int = DEFAULT_LIMIT
		) -> Optional[List[Dict]]
```
Fetch historical market capitalization data for a given stock symbol.
**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `symbol` | `str` | Stock symbol. |
| `limit` | `int` | Maximum number of results to return. |

**Returns:**

| Type | Description |
|------|--------------|
| `Optional[List[Dict]]` | List of historical market capitalization data dictionaries, or None if an error occurs. |

### **Method: async_symbols_list**
```python
def async_symbols_list() -> Optional[List[Dict]]
```
Fetch list of stock symbols.

**Returns:**

| Type | Description |
|------|--------------|
| `Optional[List[Dict]]` | List of stock symbols data dictionaries, or None if an error occurs. |

### **Method: async_etf_list**
```python
def async_etf_list() -> Optional[List[Dict]]
```
Fetch list of ETFs.

**Returns:**

| Type | Description |
|------|--------------|
| `Optional[List[Dict]]` | List of ETF data dictionaries, or None if an error occurs. |

### **Method: async_available_traded_list**
```python
def async_available_traded_list() -> Optional[List[Dict]]
```
Fetch list of available traded symbols.

**Returns:**

| Type | Description |
|------|--------------|
| `Optional[List[Dict]]` | List of available traded symbols data dictionaries, or None if an error occurs. |

### **Method: async_stock_screener**
```python
def async_stock_screener(
			market_cap_more_than: Optional[Union[float,
			int]] = None,
			market_cap_lower_than: Optional[Union[float,
			int]] = None,
			beta_more_than: Optional[Union[float,
			int]] = None,
			beta_lower_than: Optional[Union[float,
			int]] = None,
			volume_more_than: Optional[Union[float,
			int]] = None,
			volume_lower_than: Optional[Union[float,
			int]] = None,
			dividend_more_than: Optional[Union[float,
			int]] = None,
			dividend_lower_than: Optional[Union[float,
			int]] = None,
			price_more_than: Optional[Union[float,
			int]] = None,
			price_lower_than: Optional[Union[float,
			int]] = None,
			is_etf: Optional[bool] = None,
			is_actively_trading: Optional[bool] = None,
			sector: Optional[str] = None,
			industry: Optional[str] = None,
			country: Optional[str] = None,
			exchange: Optional[Union[str,
			List[str]]] = None,
			limit: int = DEFAULT_LIMIT,
		) -> Optional[List[Dict]]
```
Fetch stock screener data based on various filters.
**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `market_cap_more_than` | `Optional[Union[float, int]]` | Minimum market capitalization. |
| `market_cap_lower_than` | `Optional[Union[float, int]]` | Maximum market capitalization. |
| `beta_more_than` | `Optional[Union[float, int]]` | Minimum beta value. |
| `beta_lower_than` | `Optional[Union[float, int]]` | Maximum beta value. |
| `volume_more_than` | `Optional[Union[float, int]]` | Minimum trading volume. |
| `volume_lower_than` | `Optional[Union[float, int]]` | Maximum trading volume. |
| `dividend_more_than` | `Optional[Union[float, int]]` | Minimum dividend. |
| `dividend_lower_than` | `Optional[Union[float, int]]` | Maximum dividend. |
| `price_more_than` | `Optional[Union[float, int]]` | Minimum stock price. |
| `price_lower_than` | `Optional[Union[float, int]]` | Maximum stock price. |
| `is_etf` | `Optional[bool]` | Filter for ETFs. |
| `is_actively_trading` | `Optional[bool]` | Filter for actively trading stocks. |
| `sector` | `Optional[str]` | Filter by sector. |
| `industry` | `Optional[str]` | Filter by industry. |
| `country` | `Optional[str]` | Filter by country. |
| `exchange` | `Optional[Union[str, List[str]]]` | Filter by exchange(s). |
| `limit` | `int` | Number of results to return. |

**Returns:**

| Type | Description |
|------|--------------|
| `Optional[List[Dict]]` | List of stock screener data dictionaries, or None if an error occurs. |

### **Method: async_delisted_companies**
```python
def async_delisted_companies(
			limit: int = DEFAULT_LIMIT
		) -> Optional[List[Dict]]
```
Fetch list of delisted companies.
**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `limit` | `int` | Number of results to return. |

**Returns:**

| Type | Description |
|------|--------------|
| `Optional[List[Dict]]` | List of delisted companies data dictionaries, or None if an error occurs. |

### **Method: async_stock_news**
```python
def async_stock_news(
			tickers: Optional[Union[str,
			List[str]]] = None,
			limit: int = DEFAULT_LIMIT,
		) -> Optional[List[Dict]]
```
Fetch stock news for given ticker(s).
**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `tickers` | `Optional[Union[str, List[str]]]` | Ticker symbol(s) to fetch news for. |
| `limit` | `int` | Number of results to return. |

**Returns:**

| Type | Description |
|------|--------------|
| `Optional[List[Dict]]` | List of stock news data dictionaries, or None if an error occurs. |

### **Method: async_earnings_surprises**
```python
def async_earnings_surprises(
			symbol: str
		) -> Optional[List[Dict]]
```
Fetch earnings surprises data for a given stock symbol.
**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `symbol` | `str` | Stock symbol to fetch earnings surprises data for. |

**Returns:**

| Type | Description |
|------|--------------|
| `Optional[List[Dict]]` | List of earnings surprises data dictionaries, or None if an error occurs. |

### **Method: async_sec_filings**
```python
def async_sec_filings(
			symbol: str,
			filing_type: str = "",
			limit: int = DEFAULT_LIMIT,
		) -> Optional[List[Dict]]
```
Fetch SEC filings for a given stock symbol.
**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `symbol` | `str` | Stock symbol to fetch SEC filings for. |
| `filing_type` | `str` | Type of SEC filing to filter by. |
| `limit` | `int` | Number of results to return. |

**Returns:**

| Type | Description |
|------|--------------|
| `Optional[List[Dict]]` | List of SEC filings data dictionaries, or None if an error occurs. |

### **Method: async_press_releases**
```python
def async_press_releases(
			symbol: str,
			limit: int = DEFAULT_LIMIT
		) -> Optional[List[Dict]]
```
Fetch press releases for a given stock symbol.
**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `symbol` | `str` | Stock symbol to fetch press releases for. |
| `limit` | `int` | Number of results to return. |

**Returns:**

| Type | Description |
|------|--------------|
| `Optional[List[Dict]]` | List of press releases data dictionaries, or None if an error occurs. |

### **Method: async_stock_peers**
```python
def async_stock_peers(
			symbol: str
		) -> Optional[List[Dict]]
```
Fetch stock peers data for a given stock symbol.
**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `symbol` | `str` | Stock symbol to fetch peers data for. |

**Returns:**

| Type | Description |
|------|--------------|
| `Optional[List[Dict]]` | List of stock peers data dictionaries, or None if an error occurs. |

### **Method: async_analyst_estimates**
```python
def async_analyst_estimates(
			symbol: str,
			period: str = "annual",
			limit: int = DEFAULT_LIMIT
		) -> Optional[List[Dict]]
```
Fetch analyst estimates data for a given stock symbol.
**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `symbol` | `str` | Stock symbol to fetch analyst estimates for. |
| `period` | `str` | Period for analyst estimates (annual or quarterly). |
| `limit` | `int` | Number of results to return. |

**Returns:**

| Type | Description |
|------|--------------|
| `Optional[List[Dict]]` | List of analyst estimates data dictionaries, or None if an error occurs. |

### **Method: async_available_cryptocurrencies**
```python
def async_available_cryptocurrencies() -> Optional[List[Dict]]
```
Fetch list of available cryptocurrencies.

**Returns:**

| Type | Description |
|------|--------------|
| `Optional[List[Dict]]` | List of available cryptocurrencies data dictionaries, or None if an error occurs. |

### **Method: async_cryptocurrencies_list**
```python
def async_cryptocurrencies_list() -> Optional[List[Dict]]
```
Fetch list of cryptocurrencies.

**Returns:**

| Type | Description |
|------|--------------|
| `Optional[List[Dict]]` | List of cryptocurrencies data dictionaries, or None if an error occurs. |

### **Method: async_available_etfs**
```python
def async_available_etfs() -> Optional[List[Dict]]
```
Fetch list of available ETFs.

**Returns:**

| Type | Description |
|------|--------------|
| `Optional[List[Dict]]` | List of available ETFs data dictionaries, or None if an error occurs. |

### **Method: async_etf_price_realtime**
```python
def async_etf_price_realtime() -> Optional[List[Dict]]
```
Fetch real-time ETF price data.

**Returns:**

| Type | Description |
|------|--------------|
| `Optional[List[Dict]]` | List of real-time ETF price data dictionaries, or None if an error occurs. |

### **Method: async_etf_info**
```python
def async_etf_info(
			symbol: str
		) -> Optional[List[Dict]]
```
Fetch ETF information for a given symbol.
**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `symbol` | `str` | ETF symbol to fetch information for. |

**Returns:**

| Type | Description |
|------|--------------|
| `Optional[List[Dict]]` | List of ETF information data dictionaries, or None if an error occurs. |

### **Method: async_available_euronext**
```python
def async_available_euronext() -> Optional[List[Dict]]
```
Fetch list of available Euronext symbols.

**Returns:**

| Type | Description |
|------|--------------|
| `Optional[List[Dict]]` | List of available Euronext symbols data dictionaries, or None if an error occurs. |

### **Method: async_euronext_list**
```python
def async_euronext_list() -> Optional[List[Dict]]
```
Fetch list of Euronext symbols.

**Returns:**

| Type | Description |
|------|--------------|
| `Optional[List[Dict]]` | List of Euronext symbols data dictionaries, or None if an error occurs. |

### **Method: async_forex**
```python
def async_forex() -> Optional[List[Dict]]
```
Fetch forex data.

**Returns:**

| Type | Description |
|------|--------------|
| `Optional[List[Dict]]` | List of forex data dictionaries, or None if an error occurs. |

### **Method: async_forex_list**
```python
def async_forex_list() -> Optional[List[Dict]]
```
Fetch list of forex symbols.

**Returns:**

| Type | Description |
|------|--------------|
| `Optional[List[Dict]]` | List of forex symbols data dictionaries, or None if an error occurs. |

### **Method: async_available_forex**
```python
def async_available_forex() -> Optional[List[Dict]]
```
Fetch list of available forex currency pairs.

**Returns:**

| Type | Description |
|------|--------------|
| `Optional[List[Dict]]` | List of available forex currency pairs data dictionaries, or None if an error occurs. |

### **Method: async_quote**
```python
def async_quote(
			symbol: Union[str,
			List[str]]
		) -> Optional[List[Dict]]
```
Fetch quote data for a given symbol or list of symbols.
**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `symbol` | `Union[str, List[str]]` | Stock symbol or list of symbols to fetch quote data for. |

**Returns:**

| Type | Description |
|------|--------------|
| `Optional[List[Dict]]` | List of quote data dictionaries, or None if an error occurs. |

### **Method: async_historical_chart**
```python
def async_historical_chart(
			symbol: str,
			time_delta: str,
			from_date: str,
			to_date: str,
			time_series: str = "line",
		) -> Optional[List[Dict]]
```
Fetch historical chart data for a given symbol and time period.
**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `symbol` | `str` | Stock symbol to fetch historical chart data for. |
| `time_delta` | `str` | Time delta (e.g., "1min", "5min", "1hour", "1day", "1week", "1month"). |
| `from_date` | `str` | Start date for the historical data (YYYY-MM-DD format). |
| `to_date` | `str` | End date for the historical data (YYYY-MM-DD format). |
| `time_series` | `str` | Time series type (e.g., "line", "compact", "full"). |

**Returns:**

| Type | Description |
|------|--------------|
| `Optional[List[Dict]]` | List of historical chart data dictionaries, or None if an error occurs. |

### **Method: async_historical_price_full**
```python
def async_historical_price_full(
			symbol: Union[str,
			List[str]],
			from_date: Optional[str] = None,
			to_date: Optional[str] = None,
		) -> Optional[List[Dict]]
```
Fetch historical price data for a given symbol or list of symbols.
**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `symbol` | `Union[str, List[str]]` | Stock symbol or list of symbols to fetch historical price data for. |
| `from_date` | `Optional[str]` | Start date for the historical data (YYYY-MM-DD format). |
| `to_date` | `Optional[str]` | End date for the historical data (YYYY-MM-DD format). |

**Returns:**

| Type | Description |
|------|--------------|
| `Optional[List[Dict]]` | List of historical price data dictionaries, or None if an error occurs. |

### **Method: async_quote_short**
```python
def async_quote_short(
			symbol: str
		) -> Optional[List[Dict]]
```
Fetch short quote data for a given symbol.
**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `symbol` | `str` | Stock symbol to fetch short quote data for. |

**Returns:**

| Type | Description |
|------|--------------|
| `Optional[List[Dict]]` | List of short quote data dictionaries, or None if an error occurs. |

### **Method: async_exchange_realtime**
```python
def async_exchange_realtime(
			exchange: str
		) -> Optional[List[Dict]]
```
Fetch real-time exchange data for a given exchange.
**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `exchange` | `str` | Exchange to fetch real-time data for. |

**Returns:**

| Type | Description |
|------|--------------|
| `Optional[List[Dict]]` | List of real-time exchange data dictionaries, or None if an error occurs. |

### **Method: async_historical_stock_dividend**
```python
def async_historical_stock_dividend(
			symbol: str
		) -> Optional[List[Dict]]
```
Fetch historical stock dividend data for a given symbol.
**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `symbol` | `str` | Stock symbol to fetch historical dividend data for. |

**Returns:**

| Type | Description |
|------|--------------|
| `Optional[List[Dict]]` | List of historical stock dividend data dictionaries, or None if an error occurs. |

### **Method: async_historical_stock_split**
```python
def async_historical_stock_split(
			symbol: str
		) -> Optional[List[Dict]]
```
Fetch historical stock split data for a given symbol.
**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `symbol` | `str` | Stock symbol to fetch historical split data for. |

**Returns:**

| Type | Description |
|------|--------------|
| `Optional[List[Dict]]` | List of historical stock split data dictionaries, or None if an error occurs. |

### **Method: async_historical_survivorship_bias_free_eod**
```python
def async_historical_survivorship_bias_free_eod(
			symbol: str,
			date: str
		) -> Optional[List[Dict]]
```
Fetch historical survivorship bias-free EOD data for a given symbol and date.
**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `symbol` | `str` | Stock symbol to fetch historical survivorship bias-free EOD data for. |
| `date` | `str` | Date for the historical data (YYYY-MM-DD format). |

**Returns:**

| Type | Description |
|------|--------------|
| `Optional[List[Dict]]` | List of historical survivorship bias-free EOD data dictionaries, or None if an error occurs. |

### **Method: async_technical_indicators**
```python
def async_technical_indicators(
			symbol: str,
			period: int = 10,
			statistics_type: str = "SMA",
			time_delta: str = "daily",
		) -> Optional[List[Dict]]
```
Fetch technical indicators data for a given symbol.
**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `symbol` | `str` | Stock symbol to fetch technical indicators for. |
| `period` | `int` | Period for the technical indicator calculation. |
| `statistics_type` | `str` | Type of technical indicator (e.g., "SMA", "EMA", "RSI", "STOCH"). |
| `time_delta` | `str` | Time delta (e.g., "1min", "5min", "1hour", "1day", "1week", "1month"). |

**Returns:**

| Type | Description |
|------|--------------|
| `Optional[List[Dict]]` | List of technical indicators data dictionaries, or None if an error occurs. |

### **Method: async_available_tsx**
```python
def async_available_tsx() -> Optional[List[Dict]]
```
Fetch list of available TSX symbols.

**Returns:**

| Type | Description |
|------|--------------|
| `Optional[List[Dict]]` | List of available TSX symbols data dictionaries, or None if an error occurs. |

### **Method: async_tsx_list**
```python
def async_tsx_list() -> Optional[List[Dict]]
```
Fetch list of TSX symbols.

**Returns:**

| Type | Description |
|------|--------------|
| `Optional[List[Dict]]` | List of TSX symbols data dictionaries, or None if an error occurs. |

### **Method: async_insider_trading**
```python
def async_insider_trading(
			symbol: Optional[str] = None,
			reporting_cik: Optional[int] = None,
			company_cik: Optional[int] = None,
			limit: int = DEFAULT_LIMIT,
		) -> Optional[List[Dict]]
```
Fetch insider trading data.
**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `symbol` | `Optional[str]` | Stock symbol to fetch insider trading data for. |
| `reporting_cik` | `Optional[int]` | Reporting CIK to fetch insider trading data for. |
| `company_cik` | `Optional[int]` | Company CIK to fetch insider trading data for. |
| `limit` | `int` | Number of results to return. |

**Returns:**

| Type | Description |
|------|--------------|
| `Optional[List[Dict]]` | List of insider trading data dictionaries, or None if an error occurs. |

### **Method: async_mapper_cik_name**
```python
def async_mapper_cik_name(
			name: str
		) -> Optional[List[Dict]]
```
Fetch CIK mapper data for a given name.
**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `name` | `str` | Name to fetch CIK mapper data for. |

**Returns:**

| Type | Description |
|------|--------------|
| `Optional[List[Dict]]` | List of CIK mapper data dictionaries, or None if an error occurs. |

### **Method: async_mapper_cik_company**
```python
def async_mapper_cik_company(
			ticker: str
		) -> Optional[List[Dict]]
```
Fetch CIK mapper data for a given company ticker.
**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `ticker` | `str` | Ticker symbol to fetch CIK mapper data for. |

**Returns:**

| Type | Description |
|------|--------------|
| `Optional[List[Dict]]` | List of CIK mapper data dictionaries, or None if an error occurs. |

### **Method: async_insider_trading_rss_feed**
```python
def async_insider_trading_rss_feed(
			limit: int = DEFAULT_LIMIT
		) -> Optional[List[Dict]]
```
Fetch insider trading RSS feed data.
**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `limit` | `int` | Number of results to return. |

**Returns:**

| Type | Description |
|------|--------------|
| `Optional[List[Dict]]` | List of insider trading RSS feed data dictionaries, or None if an error occurs. |

### **Method: async_institutional_holders**
```python
def async_institutional_holders(
			symbol: str
		) -> Optional[List[Dict]]
```
Fetch institutional holders data for a given stock symbol.
**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `symbol` | `str` | Stock symbol to fetch institutional holders data for. |

**Returns:**

| Type | Description |
|------|--------------|
| `Optional[List[Dict]]` | List of institutional holders data dictionaries, or None if an error occurs. |

### **Method: async_mutual_fund_holders**
```python
def async_mutual_fund_holders(
			symbol: str
		) -> Optional[List[Dict]]
```
Fetch mutual fund holders data for a given stock symbol.
**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `symbol` | `str` | Stock symbol to fetch mutual fund holders data for. |

**Returns:**

| Type | Description |
|------|--------------|
| `Optional[List[Dict]]` | List of mutual fund holders data dictionaries, or None if an error occurs. |

### **Method: async_etf_holders**
```python
def async_etf_holders(
			symbol: str
		) -> Optional[List[Dict]]
```
Fetch ETF holders data for a given ETF symbol.
**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `symbol` | `str` | ETF symbol to fetch holders data for. |

**Returns:**

| Type | Description |
|------|--------------|
| `Optional[List[Dict]]` | List of ETF holders data dictionaries, or None if an error occurs. |

### **Method: async_etf_sector_weightings**
```python
def async_etf_sector_weightings(
			symbol: str
		) -> Optional[List[Dict]]
```
Fetch ETF sector weightings data for a given ETF symbol.
**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `symbol` | `str` | ETF symbol to fetch sector weightings data for. |

**Returns:**

| Type | Description |
|------|--------------|
| `Optional[List[Dict]]` | List of ETF sector weightings data dictionaries, or None if an error occurs. |

### **Method: async_etf_country_weightings**
```python
def async_etf_country_weightings(
			symbol: str
		) -> Optional[List[Dict]]
```
Fetch ETF country weightings data for a given ETF symbol.
**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `symbol` | `str` | ETF symbol to fetch country weightings data for. |

**Returns:**

| Type | Description |
|------|--------------|
| `Optional[List[Dict]]` | List of ETF country weightings data dictionaries, or None if an error occurs. |

### **Method: async_sec_rss_feeds**
```python
def async_sec_rss_feeds(
			limit: int = DEFAULT_LIMIT,
			download: bool = False,
			filename: str = "sec_rss_feeds.csv",
		) -> Optional[List[Dict]]
```
Fetch SEC RSS feeds data.
**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `limit` | `int` | Number of results to return. |
| `download` | `bool` | Whether to download the data as a CSV file. |
| `filename` | `str` | Filename to save the CSV file as. |

**Returns:**

| Type | Description |
|------|--------------|
| `Optional[List[Dict]]` | List of SEC RSS feeds data dictionaries, or None if an error occurs. |

### **Method: async_cik_list**
```python
def async_cik_list() -> Optional[List[Dict]]
```
Fetch list of CIK identifiers.

**Returns:**

| Type | Description |
|------|--------------|
| `Optional[List[Dict]]` | List of CIK identifier data dictionaries, or None if an error occurs. |

### **Method: async_cik_search**
```python
def async_cik_search(
			name: str
		) -> Optional[List[Dict]]
```
Search for CIK identifiers by company name.
**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `name` | `str` | Company name to search for CIK identifiers. |

**Returns:**

| Type | Description |
|------|--------------|
| `Optional[List[Dict]]` | List of CIK identifier data dictionaries, or None if an error occurs. |

### **Method: async_cik**
```python
def async_cik(
			cik_id: str
		) -> Optional[List[Dict]]
```
Fetch data for a given CIK identifier.
**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `cik_id` | `str` | CIK identifier to fetch data for. |

**Returns:**

| Type | Description |
|------|--------------|
| `Optional[List[Dict]]` | List of CIK data dictionaries, or None if an error occurs. |

### **Method: async_form_13f**
```python
def async_form_13f(
			cik_id: str,
			date: Optional[str] = None
		) -> Optional[List[Dict]]
```
Fetch Form 13F data for a given CIK identifier.
**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `cik_id` | `str` | CIK identifier to fetch Form 13F data for. |
| `date` | `Optional[str]` | Date to filter the Form 13F data (YYYY-MM-DD format). |

**Returns:**

| Type | Description |
|------|--------------|
| `Optional[List[Dict]]` | List of Form 13F data dictionaries, or None if an error occurs. |

### **Method: async_cusip**
```python
def async_cusip(
			cik_id: str
		) -> Optional[List[Dict]]
```
Fetch CUSIP data for a given CIK identifier.
**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `cik_id` | `str` | CIK identifier to fetch CUSIP data for. |

**Returns:**

| Type | Description |
|------|--------------|
| `Optional[List[Dict]]` | List of CUSIP data dictionaries, or None if an error occurs. |

### **Method: async_indexes**
```python
def async_indexes() -> Optional[List[Dict]]
```
Fetch list of market indexes.

**Returns:**

| Type | Description |
|------|--------------|
| `Optional[List[Dict]]` | List of market indexes data dictionaries, or None if an error occurs. |

### **Method: async_sp500_constituent**
```python
def async_sp500_constituent(
			download: bool = False,
			filename: str = "sp500_constituents.csv",
		) -> Optional[List[Dict]]
```
Fetch S&P 500 constituents data.
**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `download` | `bool` | Whether to download the data as a CSV file. |
| `filename` | `str` | Filename to save the CSV file as. |

**Returns:**

| Type | Description |
|------|--------------|
| `Optional[List[Dict]]` | List of S&P 500 constituents data dictionaries, or None if an error occurs. |

### **Method: async_historical_sp500_constituent**
```python
def async_historical_sp500_constituent() -> Optional[List[Dict]]
```
Fetch historical S&P 500 constituents data.

**Returns:**

| Type | Description |
|------|--------------|
| `Optional[List[Dict]]` | List of historical S&P 500 constituents data dictionaries, or None if an error occurs. |

### **Method: async_nasdaq_constituent**
```python
def async_nasdaq_constituent(
			download: bool = False,
			filename: str = "nasdaq_constituents.csv",
		) -> Optional[List[Dict]]
```
Fetch NASDAQ constituents data.
**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `download` | `bool` | Whether to download the data as a CSV file. |
| `filename` | `str` | Filename to save the CSV file as. |

**Returns:**

| Type | Description |
|------|--------------|
| `Optional[List[Dict]]` | List of NASDAQ constituents data dictionaries, or None if an error occurs. |

### **Method: async_historical_nasdaq_constituent**
```python
def async_historical_nasdaq_constituent() -> Optional[List[Dict]]
```
Fetch historical NASDAQ constituents data.

**Returns:**

| Type | Description |
|------|--------------|
| `Optional[List[Dict]]` | List of historical NASDAQ constituents data dictionaries, or None if an error occurs. |

### **Method: async_dowjones_constituent**
```python
def async_dowjones_constituent(
			download: bool = False,
			filename: str = "dowjones_constituents.csv",
		) -> Optional[List[Dict]]
```
Fetch Dow Jones constituents data.
**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `download` | `bool` | Whether to download the data as a CSV file. |
| `filename` | `str` | Filename to save the CSV file as. |

**Returns:**

| Type | Description |
|------|--------------|
| `Optional[List[Dict]]` | List of Dow Jones constituents data dictionaries, or None if an error occurs. |

### **Method: async_historical_dowjones_constituent**
```python
def async_historical_dowjones_constituent() -> Optional[List[Dict]]
```
Fetch historical Dow Jones constituents data.

**Returns:**

| Type | Description |
|------|--------------|
| `Optional[List[Dict]]` | List of historical Dow Jones constituents data dictionaries, or None if an error occurs. |

### **Method: async_available_indexes**
```python
def async_available_indexes() -> Optional[List[Dict]]
```
Fetch list of available market indexes.

**Returns:**

| Type | Description |
|------|--------------|
| `Optional[List[Dict]]` | List of available market indexes data dictionaries, or None if an error occurs. |

### **Method: async_available_mutual_funds**
```python
def async_available_mutual_funds() -> Optional[List[Dict]]
```
Fetch list of available mutual funds.

**Returns:**

| Type | Description |
|------|--------------|
| `Optional[List[Dict]]` | List of available mutual funds data dictionaries, or None if an error occurs. |

### **Method: async_mutual_fund_list**
```python
def async_mutual_fund_list() -> Optional[List[Dict]]
```
Fetch list of mutual funds.

**Returns:**

| Type | Description |
|------|--------------|
| `Optional[List[Dict]]` | List of mutual funds data dictionaries, or None if an error occurs. |

### **Method: async_senate_trading_rss**
```python
def async_senate_trading_rss(
			page: int = 0
		) -> Optional[List[Dict]]
```
Fetch Senate trading RSS feed data.
**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `page` | `int` | Page number for the RSS feed data. |

**Returns:**

| Type | Description |
|------|--------------|
| `Optional[List[Dict]]` | List of Senate trading RSS feed data dictionaries, or None if an error occurs. |

### **Method: async_senate_trading_symbol**
```python
def async_senate_trading_symbol(
			symbol: str
		) -> Optional[List[Dict]]
```
Fetch Senate trading data for a given symbol.
**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `symbol` | `str` | Stock symbol to fetch Senate trading data for. |

**Returns:**

| Type | Description |
|------|--------------|
| `Optional[List[Dict]]` | List of Senate trading data dictionaries, or None if an error occurs. |

### **Method: async_senate_disclosure_rss**
```python
def async_senate_disclosure_rss(
			page: int = 0
		) -> Optional[List[Dict]]
```
Fetch Senate disclosure RSS feed data.
**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `page` | `int` | Page number for the RSS feed data. |

**Returns:**

| Type | Description |
|------|--------------|
| `Optional[List[Dict]]` | List of Senate disclosure RSS feed data dictionaries, or None if an error occurs. |

### **Method: async_senate_disclosure_symbol**
```python
def async_senate_disclosure_symbol(
			symbol: str
		) -> Optional[List[Dict]]
```
Fetch Senate disclosure data for a given symbol.
**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `symbol` | `str` | Stock symbol to fetch Senate disclosure data for. |

**Returns:**

| Type | Description |
|------|--------------|
| `Optional[List[Dict]]` | List of Senate disclosure data dictionaries, or None if an error occurs. |

### **Method: async_shares_float**
```python
def async_shares_float(
			symbol: str,
			all: bool = False
		) -> Optional[List[Dict]]
```
Fetch shares float data for a given symbol or for all symbols.
**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `symbol` | `str` | Stock symbol to fetch shares float data for. |
| `all` | `bool` | Whether to fetch shares float data for all symbols. |

**Returns:**

| Type | Description |
|------|--------------|
| `Optional[List[Dict]]` | List of shares float data dictionaries, or None if an error occurs. |

### **Method: async_actives**
```python
def async_actives() -> Optional[List[Dict]]
```
Fetch data for actively traded stocks.

**Returns:**

| Type | Description |
|------|--------------|
| `Optional[List[Dict]]` | List of actively traded stocks data dictionaries, or None if an error occurs. |

### **Method: async_gainers**
```python
def async_gainers() -> Optional[List[Dict]]
```
Fetch data for top gainers in the stock market.

**Returns:**

| Type | Description |
|------|--------------|
| `Optional[List[Dict]]` | List of top gainers data dictionaries, or None if an error occurs. |

### **Method: async_losers**
```python
def async_losers() -> Optional[List[Dict]]
```
Fetch data for top losers in the stock market.

**Returns:**

| Type | Description |
|------|--------------|
| `Optional[List[Dict]]` | List of top losers data dictionaries, or None if an error occurs. |

### **Method: async_market_hours**
```python
def async_market_hours() -> Optional[List[Dict]]
```
Fetch market hours data.

**Returns:**

| Type | Description |
|------|--------------|
| `Optional[List[Dict]]` | List of market hours data dictionaries, or None if an error occurs. |

### **Method: async_sectors_performance**
```python
def async_sectors_performance(
			limit: int = DEFAULT_LIMIT
		) -> Optional[List[Dict]]
```
Fetch sectors performance data.
**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `limit` | `int` | Number of results to return. |

**Returns:**

| Type | Description |
|------|--------------|
| `Optional[List[Dict]]` | List of sectors performance data dictionaries, or None if an error occurs. |

### **Method: async_commitment_of_traders_report_list**
```python
def async_commitment_of_traders_report_list() -> Optional[List[Dict]]
```
Fetch list of available Commitment of Traders reports.

**Returns:**

| Type | Description |
|------|--------------|
| `Optional[List[Dict]]` | List of Commitment of Traders reports data dictionaries, or None if an error occurs. |

### **Method: async_commitment_of_traders_report**
```python
def async_commitment_of_traders_report(
			symbol: str,
			from_date: str,
			to_date: str
		) -> Optional[List[Dict]]
```
Fetch Commitment of Traders report data.
**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `symbol` | `str` | Stock symbol to fetch Commitment of Traders report data for. |
| `from_date` | `str` | Start date for the Commitment of Traders report data (YYYY-MM-DD format). |
| `to_date` | `str` | End date for the Commitment of Traders report data (YYYY-MM-DD format). |

**Returns:**

| Type | Description |
|------|--------------|
| `Optional[List[Dict]]` | List of Commitment of Traders report data dictionaries, or None if an error occurs. |

### **Method: async_commitment_of_traders_report_analysis**
```python
def async_commitment_of_traders_report_analysis(
			symbol: str,
			from_date: str,
			to_date: str
		) -> Optional[List[Dict]]
```
Fetch Commitment of Traders report analysis data.
**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `symbol` | `str` | Stock symbol to fetch Commitment of Traders report analysis data for. |
| `from_date` | `str` | Start date for the Commitment of Traders report analysis data (YYYY-MM-DD format). |
| `to_date` | `str` | End date for the Commitment of Traders report analysis data (YYYY-MM-DD format). |

**Returns:**

| Type | Description |
|------|--------------|
| `Optional[List[Dict]]` | List of Commitment of Traders report analysis data dictionaries, or None if an error occurs. |

### **Method: async_institutional_symbol_ownership**
```python
def async_institutional_symbol_ownership(
			symbol: str,
			limit: int,
			include_current_quarter: bool = False
		) -> Optional[List[Dict]]
```
Fetch institutional symbol ownership data.
**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `symbol` | `str` | Stock symbol to fetch institutional ownership data for. |
| `limit` | `int` | Number of results to return. |
| `include_current_quarter` | `bool` | Whether to include current quarter data. |

**Returns:**

| Type | Description |
|------|--------------|
| `Optional[List[Dict]]` | List of institutional symbol ownership data dictionaries, or None if an error occurs. |

### **Method: async_earning_call_transcript**
```python
def async_earning_call_transcript(
			symbol: str,
			year: int,
			quarter: int
		) -> Optional[List[Dict]]
```
Fetch earning call transcript data for a given symbol, year, and quarter.
**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `symbol` | `str` | Stock symbol to fetch earning call transcript data for. |
| `year` | `int` | Year for the earning call transcript. |
| `quarter` | `int` | Quarter for the earning call transcript. |

**Returns:**

| Type | Description |
|------|--------------|
| `Optional[List[Dict]]` | List of earning call transcript data dictionaries, or None if an error occurs. |

### **Method: async_batch_earning_call_transcript**
```python
def async_batch_earning_call_transcript(
			symbol: str,
			year: int
		) -> Optional[List[Dict]]
```
Fetch batch earning call transcript data for a given symbol and year.
**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `symbol` | `str` | Stock symbol to fetch batch earning call transcript data for. |
| `year` | `int` | Year for the batch earning call transcript. |

**Returns:**

| Type | Description |
|------|--------------|
| `Optional[List[Dict]]` | List of batch earning call transcript data dictionaries, or None if an error occurs. |

### **Method: async_earning_call_transcripts_available_dates**
```python
def async_earning_call_transcripts_available_dates(
			symbol: str
		) -> Optional[List[List]]
```
Fetch available dates for earning call transcripts for a given symbol.
**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `symbol` | `str` | Stock symbol to fetch available earning call transcript dates for. |

**Returns:**

| Type | Description |
|------|--------------|
| `Optional[List[List]]` | List of available earning call transcript dates, or None if an error occurs. |

