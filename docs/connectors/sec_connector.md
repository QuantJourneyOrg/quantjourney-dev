# Module Information

**Description:**
Sec Data Connector of QuantJourney Framework

SEC Services

1. EDGAR
https://www.sec.gov/edgar/searchedgar/companysearch
1) python3 -m pip install sec-edgar-api (https://github.com/jadchaar/sec-edgar-api)
2) python3 -m pip install sec-api (https://sec-api.io/)
3) https://www.sec.gov/developer...
Note: The SEC does not allow "unclassified" bots or automated tools to crawl the site.
However, `solutions' can be found online, but we will not support them here under Fair Access protocls.
2. SEC-API

**Author:** jpolec

**Date:** 18-03-2024

## Class: SecConnector()

### **Method: get_edgar_submissions**
```python
def get_edgar_submissions(
			cik: str
		) -> list
```
Retrieve a list of submissions for a given CIK.

Examples:
```python
submissions = get_edgar_submissions(cik='0000320193')

```
**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `cik` | `str` | Central Index Key of the company. |

**Returns:**

| Type | Description |
|------|--------------|
| `list` | List of submission details. |

### **Method: get_edgar_company_facts**
```python
def get_edgar_company_facts(
			cik: str
		) -> dict
```
Retrieve company facts for a given CIK.

Examples:
```python
company_facts = get_edgar_company_facts(cik='0000320193')

{'cik': 320193, 'entityName': 'Apple Inc.', 'facts': {'dei': {'EntityCommonStockSharesOutstanding':
{'label': 'Entity Common Stock, Shares Outstanding', 'description': "Indicate number of shares or
other units outstanding of each of registrant's classes of capital or common stock or other ownership
interests, if and as stated on cover of related periodic report. Where multiple classes or units exist
define each class/interest by adding class of stock items such as Common Class A [Member], Common Class B [Member]
or Partnership Interest [Member] onto the Instrument [Domain] of the Entity Listings, Instrument.",
'units': {'shares': [{'end': '2009-06-27', 'val': 895816758, 'accn': '0001193125-09-153165', 'fy': 2009,
'fp': 'Q3', 'form': '10-Q', 'filed': '2009-07-22', 'frame': 'CY2009Q2I'}, {'end': '2009-10-16',
'val': 900678473, 'accn': '0001193125-09-214859', 'fy': 2009, 'fp': 'FY', 'form': '10-K', 'filed': '2009-10-27'},
{'end': '2009-10-16', 'val': 900678473, 'accn': '0001193125-10-012091', 'fy': 2009, 'fp': 'FY', 'form': '10-K/A', 'filed':

```
**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `cik` | `str` | Central Index Key of the company. |

**Returns:**

| Type | Description |
|------|--------------|
| `dict` | Dictionary of company facts. |

### **Method: get_edgar_company_concept**
```python
def get_edgar_company_concept(
			cik: str,
			taxonomy: str = "dei",
			tag: str = "EntityPublicFloat"
		) -> dict
```
Retrieve company concept data for a given CIK.

Examples:
```python
company_concept = get_edgar_company_concept(cik='0000320193', taxonomy='dei', tag='EntityPublicFloat')

```
**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `cik` | `str` | Central Index Key of the company. |
| `taxonomy` | `str, optional` | Taxonomy for the concept data. Defaults to "dei". |
| `tag` | `str, optional` | Tag for the concept data. Defaults to "EntityPublicFloat". |

**Returns:**

| Type | Description |
|------|--------------|
| `dict` | Dictionary of company concept data. |

### **Method: get_edgar_frame**
```python
def get_edgar_frame(
			taxonomy: str = "us-gaap",
			tag: str = "AccountsPayableCurrent",
			unit: str = "USD",
			year: str = "2022",
			quarter: int = 1
		) -> pd.DataFrame
```
Retrieve financial data for a given taxonomy, tag, and filing period.

Examples:
```python
financial_data = get_edgar_frame(taxonomy="us-gaap", tag="AccountsPayableCurrent", unit="USD", year="2022", quarter=1)

```
**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `taxonomy` | `str, optional` | Taxonomy for the financial data. Defaults to "us-gaap". |
| `tag` | `str, optional` | Tag for the financial data. Defaults to "AccountsPayableCurrent". |
| `unit` | `str, optional` | Unit of the financial data. Defaults to "USD". |
| `year` | `str, optional` | Year of the filing period. Defaults to "2022". |
| `quarter` | `int, optional` | Quarter of the filing period. Defaults to 1. |

**Returns:**

| Type | Description |
|------|--------------|
| `pd.DataFrame` | DataFrame of financial data. |

### **Method: calculate_sec13f_holding_changes**
```python
def calculate_sec13f_holding_changes(
			df: pd.DataFrame,
			start_date: str = '2021-03-31',
			end_date: str = '2021-06-30'
		) -> pd.DataFrame
```
Calculate changes in holdings between two reporting periods.

Examples:
```python
holding_changes = calculate_sec13f_holding_changes(df, start_date='2021-03-31', end_date='2021-06-30')

```
**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `df` | `pd.DataFrame` | DataFrame containing 13F holdings data. |
| `start_date` | `str` | Start date of the comparison period in 'YYYY-MM-DD' format. |
| `end_date` | `str` | End date of the comparison period in 'YYYY-MM-DD' format. |

**Returns:**

| Type | Description |
|------|--------------|
| `pd.DataFrame` | DataFrame containing holding changes. |

### **Method: get_13f_filings**
```python
def get_13f_filings(
			cik: str,
			start_date='2021-01-01'
		) -> list
```
Fetch 13F filings from the SEC Edgar system.
**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `cik` | `str` | Central Index Key of the company. |
| `start_date` | `str` | Start date for fetching filings in 'YYYY-MM-DD' format. |

**Returns:**

| Type | Description |
|------|--------------|
| `list` | List of 13F filings. |

### **Method: flatten_and_process_filings**
```python
def flatten_and_process_filings(
			filings
		) -> pd.DataFrame
```
Flatten and process raw 13F filings into a structured pandas DataFrame.

params:
filings (list): List of 13F filings.

returns:
pd.DataFrame: DataFrame containing processed filings data.

**Returns:**

| Type | Description |
|------|--------------|

### **Method: analyze_investment_trends**
```python
def analyze_investment_trends(
			holding_changes
		) -> pd.DataFrame
```
Analyze investment trends from holding changes data.

params:
holding_changes (pd.DataFrame): DataFrame containing holding changes data.

returns:
pd.DataFrame: DataFrame containing investment trend analysis.

**Returns:**

| Type | Description |
|------|--------------|

### **Method: get_holdings_by_ticker**
```python
def get_holdings_by_ticker(
			ticker,
			start_date='2021-01-01',
			end_date='2021-06-30'
		) -> pd.DataFrame
```
Retrieve holdings information for a specific ticker across filings within the specified period.

params:

returns:

**Returns:**

| Type | Description |
|------|--------------|

### **Method: identify_new_holdings**
```python
def identify_new_holdings(
			current_period,
			previous_period
		) -> pd.DataFrame
```
Identify new holdings in the current period compared to the previous period.

params:
current_period:
previous_period:

returns:

**Returns:**

| Type | Description |
|------|--------------|

### **Method: track_disposed_holdings**
```python
def track_disposed_holdings(
			current_period,
			previous_period
		) -> pd.DataFrame
```
Track holdings that were disposed of since the previous period.

params:
current_period:
previous_period:
returns:

**Returns:**

| Type | Description |
|------|--------------|

### **Method: analyze_sector_allocation**
```python
def analyze_sector_allocation(
			filings
		) -> pd.DataFrame
```
Analyze sector allocation based on the current holdings in the filings.

params:
filings:

returns:

**Returns:**

| Type | Description |
|------|--------------|

### **Method: generate_investment_report**
```python
def generate_investment_report(
			new_holdings,
			disposed_holdings,
			sector_allocation
		) -> dict
```
Generate a comprehensive report of investment findings.

params:
new_holdings:
disposed_holdings:
sector_allocation:

returns:
dict: Comprehensive investment report.

**Returns:**

| Type | Description |
|------|--------------|

