# Module Information

**Description:**
Forex Assets class for QuantJourney Framework

The Forex class provides methods for fetching forex data from various sources, 
such as EOD Historical Data, OANDA, and Yahoo Finance.

**Author:** jpolec

**Date:** 27-02-2024 and 18-03-2024

## Class: Forex()

### **Method: async_get_intraday_forex_data**
```python
def async_get_intraday_forex_data(
			pairs: List[str],
			source: str,
			interval: str = "5m",
			to_utc: Optional[datetime] = None,
			period_days: int = 120
		) -> dict
```
Asynchronously fetches intraday data for the given forex pairs.

Examples:
```python
data = async_get_intraday_forex_data(pairs=['EURUSD', 'GBPUSD'], source='eod', interval='5m', period_days=120)

```
**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `pairs` | `list of str` | List of forex pairs. |
| `source` | `str` | Data source for connectors (e.g., "yf", "eod", "oanda", etc.). |
| `interval` | `str` | Interval for the intraday data ('1m', '5m', '15m', '30m', '1h'). |
| `to_utc` | `datetime` | End date and time in UTC. Defaults to current UTC time. |
| `period_days` | `int` | Number of days for the data period. |

**Returns:**

| Type | Description |
|------|--------------|
| `dict` | Dictionary containing intraday data DataFrames for each pair. |

### **Method: get_forex_pricing_yfinance**
```python
def get_forex_pricing_yfinance(
			pairs: List[str],
			start_date: str,
			end_date: str
		) -> pd.DataFrame
```
Fetch pricing data for the given forex pairs between the start_date and end_date from YFinance.
**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `pairs` | `list of str` | List of forex pairs. |
| `start_date` | `str` | Start date for the pricing data. |
| `end_date` | `str` | End date for the pricing data. |

**Returns:**

| Type | Description |
|------|--------------|
| `pd.DataFrame` | DataFrame containing the pricing data for the given forex pairs. |

