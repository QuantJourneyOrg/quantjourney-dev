# Module Information

**Description:**
Futures Assets class for QuantJourney Framework

The Futures module is a crucial part of the QuantJourney Framework, designed to handle and manage futures data for quantitative finance applications.
This module leverages the power of multiple data connectors, including EOD Historical Data and OANDA, to provide comprehensive access to a wide array of futures data.

// NOTE: Eod decomissioned Futures from 01.2024, will re-factor in future

**Author:** jpolec

**Date:** 27-02-2024 and 18-03-2024

## Class: Futures()

### **Method: async_get_futures_contracts_eod**
```python
def async_get_futures_contracts_eod(
			start_date: datetime,
			end_date: datetime
		) -> pd.DataFrame
```
Fetch futures contracts data between the start_date and end_date from EOD.

Examples:
```python
futures_contracts = await dc.futures.async_get_futures_contracts_eod(start_date=datetime(2023, 1, 1), end_date=datetime(2023, 12, 31))

```
**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `start_date` | `datetime` | The start date for fetching futures contracts. |
| `end_date` | `datetime` | The end date for fetching futures contracts. |

**Returns:**

| Type | Description |
|------|--------------|
| `pd.DataFrame` | DataFrame containing futures contracts data. |

### **Method: async_get_futures_pricing_eod**
```python
def async_get_futures_pricing_eod(
			contracts: List[str],
			start_date: datetime,
			end_date: datetime
		) -> pd.DataFrame
```
Fetch pricing data for the given futures contracts between the start_date and end_date from EOD.

Examples:
```python
futures_pricing = await dc.futures.async_get_futures_pricing_eod(contracts=["CL", "GC"], start_date=datetime(2023, 1, 1), end_date=datetime(2023, 12, 31))

```
**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `contracts` | `List[str]` | List of futures contract codes. |
| `start_date` | `datetime` | The start date for fetching pricing data. |
| `end_date` | `datetime` | The end date for fetching pricing data. |

**Returns:**

| Type | Description |
|------|--------------|
| `pd.DataFrame` | DataFrame containing futures pricing data. |

### **Method: async_get_futures_expiration_dates_eod**
```python
def async_get_futures_expiration_dates_eod(
			contracts: List[str]
		) -> pd.DataFrame
```
Fetch expiration dates for the given futures contracts from EOD.

Examples:
```python
expiration_dates = await dc.futures.async_get_futures_expiration_dates_eod(contracts=["CL", "GC"])

```
**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `contracts` | `List[str]` | List of futures contract codes. |

**Returns:**

| Type | Description |
|------|--------------|
| `pd.DataFrame` | DataFrame containing futures expiration dates. |

### **Method: async_get_futures_contracts_oanda**
```python
def async_get_futures_contracts_oanda(
			start_date: datetime,
			end_date: datetime,
			contract_prefix: str
		) -> List[Dict]
```
Fetch futures contracts data between the start_date and end_date from Oanda for a specific contract prefix.

Examples:
```python
await dc.futures.async_get_futures_contracts_oanda(start_date=datetime(2023, 1, 1), end_date=datetime(2023, 12, 31), contract_prefix='BCO')

```
**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `start_date` | `datetime` | The start date for fetching futures contracts. |
| `end_date` | `datetime` | The end date for fetching futures contracts. |
| `contract_prefix` | `str` | The prefix of the futures contract to fetch (e.g., 'BCO' for Brent Crude Oil). |

**Returns:**

| Type | Description |
|------|--------------|
| `List[Dict]` | A list of dictionaries containing the futures contracts data. |

### **Method: async_get_futures_pricing_oanda**
```python
def async_get_futures_pricing_oanda(
			contracts: List[str],
			start_date: datetime,
			end_date: datetime
		) -> Optional[pd.DataFrame]
```
Fetch pricing data for the given futures contracts between the start_date and end_date from Oanda.

Examples:
```python
futures_pricing = await dc.futures.async_get_futures_pricing_oanda(contracts=["US30_USD", "AU200_AUD"], start_date=datetime(2023, 1, 1), end_date=datetime(2023, 12, 31))

```
**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `contracts` | `List[str]` | List of futures contract codes. |
| `start_date` | `datetime` | The start date for fetching pricing data. |
| `end_date` | `datetime` | The end date for fetching pricing data. |

**Returns:**

| Type | Description |
|------|--------------|
| `Optional[pd.DataFrame]` | DataFrame containing futures pricing data, or None if an error occurs. |

### **Method: async_get_futures_expiration_dates_oanda**
```python
def async_get_futures_expiration_dates_oanda(
			contracts: List[str]
		) -> Dict[str, datetime]
```
Fetch expiration dates for the given futures contracts from Oanda.

Examples:
```python
await dc.futures.async_get_futures_expiration_dates_oanda(contracts=["US30_USD", "AU200_AUD"])

```
**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `contracts` | `List[str]` | List of futures contract codes. |

**Returns:**

| Type | Description |
|------|--------------|
| `Dict[str, datetime]` | A dictionary mapping contract codes to their expiration dates. |

### **Method: fetch_expiration_date**
```python
def fetch_expiration_date(
			contract
		)
```

