# Module Information

**Description:**
ETFs Assets class for QuantJourney Framework

The ETF module is a key component of the QuantJourney Framework, designed to facilitate the retrieval and analysis of Exchange-Traded Funds (ETFs) data.
This module leverages multiple data connectors, including EOD Historical Data, Yahoo Finance, and OANDA, to provide comprehensive access to ETF data.

**Author:** jpolec

**Date:** 18-03-2024

## Class: ETFs()

### **Method: async_get_etf_general_data**
```python
def async_get_etf_general_data(
			tickers,
			exchanges
		) -> List[pd.DataFrame]
```
Fetch ETF general data


Examples:
```python
data = await dc.etfs.async_get_etf_general_data(tickers=["SPY", "QQQ"], exchanges=["US", "US"])

ETF General Data:
[                     Name  ...     Category
0  SPDR S&P 500 ETF Trust  ...  Large Blend

```
**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `tickers` | `list of str` | the list of ETF tickers |
| `exchanges` | `list of str` | the list of ETF exchanges |

**Returns:**

| Type | Description |
|------|--------------|
| `List[pd.DataFrame]` | the ETF general data as a list of DataFrames. |

### **Method: async_get_etf_technicals**
```python
def async_get_etf_technicals(
			tickers,
			exchanges
		) -> List[pd.DataFrame]
```
Fetch ETF technical data


Examples:
```python
data = await dc.etfs.async_get_etf_technicals(tickers=["SPY", "QQQ"], exchanges=["US", "US"])

ETF Technical Data:
[   Beta  52WeekHigh  52WeekLow   50DayMA  200DayMA
0     1      524.61   402.8064  511.2396  468.3622,    Beta  52WeekHigh  52WeekLow  50DayMA  200DayMA
0  1.18      449.34   314.1122  436.531  398.0516]

```
**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `tickers` | `list of str` | the list of ETF tickers |
| `exchanges` | `list of str` | the list of ETF exchanges |

**Returns:**

| Type | Description |
|------|--------------|
| `List[pd.DataFrame]` | the ETF technical data as a list of DataFrames. |

### **Method: async_get_etf_market_cap**
```python
def async_get_etf_market_cap(
			tickers,
			exchanges
		) -> List[pd.DataFrame]
```
Fetch ETF market capitalization data


Examples:
```python
data = await dc.etfs.async_get_etf_market_cap(tickers=["SPY", "QQQ"], exchanges=["US", "US"])

```
**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `tickers` | `list of str` | the list of ETF tickers |
| `exchanges` | `list of str` | the list of ETF exchanges |

**Returns:**

| Type | Description |
|------|--------------|
| `List[pd.DataFrame]` | the ETF market capitalization data as a list of DataFrames. |

### **Method: async_get_etf_asset_allocation**
```python
def async_get_etf_asset_allocation(
			tickers,
			exchanges
		) -> List[pd.DataFrame]
```
Fetch ETF asset allocation data


Examples:
```python
data = await dc.etfs.async_get_etf_asset_allocation(tickers=["SPY", "QQQ"], exchanges=["US", "US"])

```
**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `tickers` | `list of str` | the list of ETF tickers |
| `exchanges` | `list of str` | the list of ETF exchanges |
| `ETF Asset Allocation Data` | `None` |  |
| `0  {'Long_%'` | `None` | '0.39321', 'Short_%': '0', 'Net_Ass...  ...  {'Long_%': '0', 'Short_%': '0', 'Net_Assets_%'... |

**Returns:**

| Type | Description |
|------|--------------|
| `List[pd.DataFrame]` | the ETF asset allocation data as a list of DataFrames. |

### **Method: async_get_etf_world_regions**
```python
def async_get_etf_world_regions(
			tickers,
			exchanges
		) -> List[pd.DataFrame]
```
Fetch ETF world regions data


Examples:
```python
data = await dc.etfs.async_get_etf_world_regions(tickers=["SPY", "QQQ"], exchanges=["US", "US"])

```
**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `tickers` | `list of str` | the list of ETF tickers |
| `exchanges` | `list of str` | the list of ETF exchanges |

**Returns:**

| Type | Description |
|------|--------------|
| `List[pd.DataFrame]` |  |

### **Method: async_get_etf_sector_weights**
```python
def async_get_etf_sector_weights(
			tickers,
			exchanges
		) -> List[pd.DataFrame]
```
Fetch ETF sector weights data


Examples:
```python
data = await dc.etfs.async_get_etf_sector_weights(tickers=["SPY", "QQQ"], exchanges=["US", "US"])

```
**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `tickers` | `list of str` | the list of ETF tickers |
| `exchanges` | `list of str` | the list of ETF exchanges |

**Returns:**

| Type | Description |
|------|--------------|
| `List[pd.DataFrame]` | the ETF sector weights data as a list of DataFrames. |

### **Method: async_get_etf_top_10_holdings**
```python
def async_get_etf_top_10_holdings(
			tickers,
			exchanges
		) -> List[pd.DataFrame]
```
Fetch ETF top 10 holdings data


Examples:
```python
data = await dc.etfs.async_get_etf_top_10_holdings(tickers=["SPY", "QQQ"], exchanges=["US", "US"])

ETF Top 10 Holdings Data:
[                            MSFT.US  ...                        LLY.US
Code                           MSFT  ...                           LLY
Exchange                         US  ...                            US
Name          Microsoft Corporation  ...         Eli Lilly and Company
Sector                   Technology  ...                    Healthcare
Industry  Software - Infrastructure  ...  Drug Manufacturers - General
Country               United States  ...                 United States
Region                North America  ...                 North America
Assets_%                     6.9392  ...                        1.3638

```
**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `tickers` | `list of str` | the list of ETF tickers |
| `exchanges` | `list of str` | the list of ETF exchanges |

**Returns:**

| Type | Description |
|------|--------------|
| `List[pd.DataFrame]` | the ETF top 10 holdings data as a list of DataFrames. |

### **Method: get_etf_ohlcv**
```python
def get_etf_ohlcv(
			tickers,
			exchanges,
			granularity,
			period_starts,
			period_ends
		) -> Dict
```
Fetch ETFs OHLCV data


Examples:
```python
data = await dc.etfs.get_etf_ohlcv(tickers=["SPY", "QQQ"], exchanges=["US", "US"], granularity='1d', period_starts=["2022-06-01"], period_ends=["2024-03-25"])

ETF OHLCV Data:
[                   datetime    open    high  ...   close  adj_close     volume
0   2023-01-03 00:00:00+00:00  384.37  386.43  ...  380.82   373.9561   74850727
1   2023-01-04 00:00:00+00:00  383.18  385.88  ...  383.76   376.8432   85934094
2   2023-01-05 00:00:00+00:00  381.72  381.84  ...  379.38   372.5421   76970461
3   2023-01-06 00:00:00+00:00  382.61  389.25  ...  388.08   381.0853  104189602
4   2023-01-09 00:00:00+00:00  390.37  393.70  ...  387.86   380.8693   73978070

```
**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `tickers` | `list of str` | The list of ETF tickers. |
| `exchanges` | `list of str` | The list of ETF exchanges. |
| `granularity` | `str` | The granularity of the data (e.g., '1d', '1wk', '1mo'). |
| `period_starts` | `list of str` | The start dates of the period. |
| `period_ends` | `list of str` | The end dates of the period. |
