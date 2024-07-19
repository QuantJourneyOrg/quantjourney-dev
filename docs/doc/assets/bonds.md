# Module Information

**Description:**
Bonds Assets class for QuantJourney Framework

The Bonds module is a component of the Quant Journey Framework, specifically tailored for
handling and managing Bonds data for quantitative analysis and algorithmic trading.
This module emphasizes the importance of accessing a wide range of Bonds data, including historical and intraday
market data, through various data sources like EOD Historical Data, Yahoo Finance, and OANDA.

**Author:** jpolec

**Date:** 27-02-2024 and 18-03-2024

## Class: Bonds()

### **Method: get_bond_ohlcv**
```python
def get_bond_ohlcv(
			tickers: List[str],
			exchanges: List[str],
			granularity: str,
			period_starts: List[str],
			period_ends: List[str],
			source: str
		) -> pd.DataFrame
```
Get bond OHLCV data
**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `tickers` | `List[str]` | List of bond tickers |
| `exchanges` | `List[str]` | List of bond exchanges |
| `granularity` | `str` | Granularity of the data |
| `period_starts` | `List[str]` | List of start dates |
| `period_ends` | `List[str]` | List of end dates |
| `source` | `str` | Source of the data |

**Returns:**

| Type | Description |
|------|--------------|
| `pd.DataFrame` | OHLCV data for the specified bonds |

### **Method: get_bond_info**
```python
def get_bond_info(
			tickers: List[str],
			exchanges: List[str],
			source: str
		) -> pd.DataFrame
```
Get bond info
**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `tickers` | `List[str]` | List of bond tickers |
| `exchanges` | `List[str]` | List of bond exchanges |
| `source` | `str` | Source of the data |

**Returns:**

| Type | Description |
|------|--------------|
| `pd.DataFrame` | Information about the specified bonds |

