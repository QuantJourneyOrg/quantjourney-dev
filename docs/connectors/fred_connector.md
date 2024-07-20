# Module Information

**Description:**
Fred Data Connector of QuantJourney Framework 

This utility class facilitates the fetching of financial and economic data from the Federal Reserve Economic Data (FRED) API
for use in quantitative analysis. Leveraging FRED's extensive repository, it supports the retrieval of various datasets including
macroeconomic indicators, interest rates, employment data, and more, making it a valuable tool for data-driven decision-making
in finance and economics.

The FRED Data Connector is designed with async capabilities to enhance performance when dealing with large volumes of data or
fetching data from multiple series concurrently. It abstracts the complexity of asynchronous programming and the FRED API,
providing a straightforward interface for data retrieval.

Features:
- Support for fetching a wide range of financial and economic datasets from FRED.
- Asynchronous data retrieval for improved performance and efficiency.
- Easy integration with financial analysis and quantitative research projects.
- Flexible date range specification for historical data analysis.
- Utilizes the official FRED API, requiring an API key for access.

**Author:** jpolec

**Date:** 18-03-2024

## Class: FredConnector()

### **Method: search**
```python
def search(
			search_string: str
		) -> List[Dict]
```
Search the FRED API for a given search string.

Examples:
```python
search_results = dc.fred.search("GDP")
search_results = dc.fred.search("unemployment rate")

```
**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `search_string` | `str` | The string to search the FRED API for. |

**Returns:**

| Type | Description |
|------|--------------|
| `List[Dict]` | A list of dictionaries containing the search results. |

### **Method: get_series**
```python
def get_series(
			search_id: str,
			observation_start: Optional[str] = None,
			observation_end: Optional[str] = None
		) -> pd.DataFrame
```
Get series data between a start and end date.

Examples:
```python
series_data = dc.fred.get_series("GDP", observation_start="2020-01-01", observation_end="2020-12-31")
series_data = dc.fred.get_series("unemployment rate", observation_start="2020-01-01", observation_end="2020-12-31")

```
**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `search_id` | `str` | The ID of the series to fetch. |
| `observation_start` | `Optional[str]` | The start date for the data in 'YYYY-MM-DD' format. Defaults to None. |
| `observation_end` | `Optional[str]` | The end date for the data in 'YYYY-MM-DD' format. Defaults to None. |

**Returns:**

| Type | Description |
|------|--------------|
| `pd.DataFrame` | The series data. |

### **Method: get_series_as_of_date**
```python
def get_series_as_of_date(
			search_id: str,
			date: str
		) -> pd.DataFrame
```
Get series data for a specific date.

Examples:
```python
series_data = dc.fred.get_series_as_of_date("GDP", "2023-04-01")

```
**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `search_id` | `str` | The ID of the series to fetch. |
| `date` | `str` | The date for the data in 'YYYY-MM-DD' format. |

**Returns:**

| Type | Description |
|------|--------------|
| `pd.DataFrame` | The series data for the specified date. |

### **Method: get_series_info**
```python
def get_series_info(
			search_id: str
		) -> dict
```
Get information about a series.

Examples:
```python
series_info = dc.fred.get_series_info("GDP")

```
**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `search_id` | `str` | The ID of the series to fetch. |

**Returns:**

| Type | Description |
|------|--------------|
| `dict` | Information about the series. |

### **Method: get_release_series**
```python
def get_release_series(
			release_id: str,
			limit: int = 1000,
			order_by: str = 'popularity'
		) -> pd.DataFrame
```
Get series data for a specific release.

Examples:
```python
release_series = dc.fred.get_release_series("BACDINA066MNFRBNY", limit=10, order_by="popularity")

```
**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `release_id` | `str` | The ID of the release to fetch. |
| `limit` | `int` | The maximum number of series to return. Defaults to 1000. |
| `order_by` | `str` | The order of the series. Can be "popularity" or "series_id". Defaults to "popularity". |

**Returns:**

| Type | Description |
|------|--------------|
| `pd.DataFrame` | The series data for the specified release. |

### **Method: get_series_first_release**
```python
def get_series_first_release(
			search_id: str
		) -> pd.DataFrame
```
Get the first release of a series.

Examples:
```python
first_release = dc.fred.get_series_first_release("GDP")

```
**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `search_id` | `str` | The ID of the series to fetch. |

**Returns:**

| Type | Description |
|------|--------------|
| `pd.DataFrame` | The first release of the series. |

### **Method: get_series_latest_release**
```python
def get_series_latest_release(
			search_id: str
		) -> pd.DataFrame
```
Get the latest release of a series.

Examples:
```python
latest_release = dc.fred.get_series_latest_release("GDP")

```
**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `search_id` | `str` | The ID of the series to fetch. |

**Returns:**

| Type | Description |
|------|--------------|
| `pd.DataFrame` | The latest release of the series. |

### **Method: get_series_all_releases**
```python
def get_series_all_releases(
			search_id: str
		) -> pd.DataFrame
```
Get all releases of a series.

Examples:
```python
all_releases = dc.fred.get_series_all_releases("GDP")

```
**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `search_id` | `str` | The ID of the series to fetch. |

**Returns:**

| Type | Description |
|------|--------------|
| `pd.DataFrame` | All releases of the series. |

