# Module Information

**Description:**
Commodities Assets class for QuantJourney Framework

The Commodities module is an essential part of the QuantJourney Framework, crafted to cater specifically to the complexities 
of managing and analyzing commodities data for quantitative finance applications. This module leverages the power of multiple data connectors, 
including EOD Historical Data, Yahoo Finance, and OANDA, to provide comprehensive access to a wide array of commodities data, crucial for conducting 
robust market analysis and developing effective trading strategies in hedge funds.	


@gmail.com

**Author:** jpolec

**Date:** 27-02-2024 and 18-03-2024

## Class: Commodities()

### **Method: async_get_commodities_yf**
```python
def async_get_commodities_yf(
			read_from_db=False,
			write_to_db=False
		) -> pd.DataFrame
```
Get commodities data from Yahoo Finance.
**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `read_from_db` | `bool` | Read data from database. |
| `write_to_db` | `bool` | Write data to database. |

**Returns:**

| Type | Description |
|------|--------------|
| `pd.DataFrame` | Commodities data. |

### **Method: async_get_ohlcv**
```python
def async_get_ohlcv(
			tickers,
			exchanges,
			source,
			granularity,
			period_starts=None,
			period_ends=None,
			db_name=None,
			read_from_db=False,
			write_to_db=False
		) -> pd.DataFrame
```
Async get historical OHLCV data for a commodity tickers
**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `tickers` | `List[str]` | List of stock tickers. |
| `exchanges` | `List[str]` | List of stock exchanges. |
| `source` | `str` | Data source for connectors (yf, eod, oanda, etc.). |
| `granularity` | `str` | Time period (5m, 15m, 30m, 1h, 1d). |
| `period_starts` | `List[str]` | Start date. |
| `period_ends` | `List[str]` | End date. |
| `db_name` | `str` | Database to read from/write to (e.g. Mongo). |
| `read_from_db` | `bool` | Read from database. |
| `write_to_db` | `bool` | Write to database. |

**Returns:**

| Type | Description |
|------|--------------|
| `pd.DataFrame` | OHLCV data. |

