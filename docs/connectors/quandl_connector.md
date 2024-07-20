# Module Information

**Description:**
Quandl Data Connector of QuantJourney Framework

This utility class facilitates the fetching of financial and economic data from Quandl for use in quantitative analysis. 
Leveraging Quandl's vast repository, it supports the retrieval of various datasets including macroeconomic indicators, ETFs, 
commodities, financial metrics, and more, making it a versatile tool for data-driven decision-making in finance.

The Quandl Data Poller is designed with async capabilities to enhance performance when dealing with large volumes of data or 
fetching data from multiple datasets concurrently. It abstracts the complexity of asynchronous programming and the Quandl API, 
providing a straightforward interface for data retrieval.

Features:
- Support for fetching a wide range of financial and economic datasets from Quandl.
- Asynchronous data retrieval for improved performance and efficiency.
- Easy integration with financial analysis and quantitative trading strategies.
- Flexible date range specification for historical data analysis.
- Utilizes the official Quandl API, requiring an API key for access.

**Author:** jpolec

**Date:** 18-03-2024

## Class: QuandlConnector()

### **Method: async_get_quandl_data**
```python
def async_get_quandl_data(
			dataset_codes: List[str],
			start_date: Optional[str] = None,
			end_date: Optional[str] = None
		) -> List[pd.DataFrame]
```
Fetches data from Quandl asynchronously for a given list of dataset codes.
**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `dataset_codes` | `List[str]` | List of Quandl dataset codes. |
| `start_date` | `Optional[str]` | Start date in 'YYYY-MM-DD' format. Defaults to None. |
| `end_date` | `Optional[str]` | End date in 'YYYY-MM-DD' format. Defaults to None. |

**Returns:**

| Type | Description |
|------|--------------|
| `List[pd.DataFrame]` | List of DataFrames containing the data for each dataset code. |

### **Method: async_get_dataset_metadata**
```python
def async_get_dataset_metadata(
			dataset_code: str
		) -> dict
```
Fetches metadata for a dataset from Quandl asynchronously.
**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `dataset_code` | `str` | Quandl dataset code. |

**Returns:**

| Type | Description |
|------|--------------|
| `dict` | Metadata for the dataset. |

### **Method: async_search_datasets**
```python
def async_search_datasets(
			query: str
		) -> List[dict]
```
Searches for datasets on Quandl asynchronously based on a query string.
**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `query` | `str` | Query string to search for datasets. |

**Returns:**

| Type | Description |
|------|--------------|
| `List[dict]` | List of datasets matching the search query. |

### **Method: async_get_dataset_codes**
```python
def async_get_dataset_codes(
			database_code: str
		) -> List[str]
```
Fetches dataset codes for a Quandl database asynchronously.
**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `database_code` | `str` | Quandl database code. |

**Returns:**

| Type | Description |
|------|--------------|
| `List[str]` | List of dataset codes in the database. |

### **Method: async_get_database_metadata**
```python
def async_get_database_metadata(
			database_code: str
		) -> dict
```
Fetches metadata for a Quandl database asynchronously.
**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `database_code` | `str` | Quandl database code. |

**Returns:**

| Type | Description |
|------|--------------|
| `dict` | Metadata for the database. |

