# Module Information

**Description:**
Indices Assets class for QuantJourney Framework

The Indicies module is a crucial component of the QuantJourney Framework, specifically tailored for 
handling and managing indices data for quantitative finance applications.
This module leverages the power of multiple data connectors, including EOD Historical Data, Yahoo Finance, and OANDA, to provide comprehensive access 
to a wide array of indices data,

**Author:** jpolec

**Date:** 18-03-2024

## Class: Indices()

### **Method: get_sp500**
```python
def get_sp500() -> List[str]
```
Get a list of S&P 500 tickers from Wikipedia, with use of BeautifulSoup.

Examples:
```python
spy = dc.indices.get_sp500()

['MMM', 'AOS', 'ABT', 'ABBV', 'ACN', 'ADBE', 'AMD', 'AES', 'AFL', 'A', 'APD',
'ABNB', 'AKAM', 'ALB', 'ARE', 'ALGN', 'ALLE', 'LNT', 'ALL', 'GOOGL', 'GOOG',
'MO', 'AMZN', 'AMCR', 'AEE', 'AAL', 'AEP', 'AXP', 'AIG', 'AMT', 'AWK', 'AMP',
'AME', 'AMGN', 'APH', 'ADI', 'ANSS', 'AON', 'APA', 'AAPL', 'AMAT', 'APTV', 'ACGL',
'ADM', 'ANET', 'AJG', 'AIZ', 'T', 'ATO', 'ADSK', 'ADP', 'AZO', 'AVB', 'AVY', 'AXON',
'BKR', 'BALL', 'BAC', 'BK', 'BBWI', 'BAX', 'BDX', 'BRK.B', 'BBY', 'BIO', 'TECH',
'BIIB', 'BLK', 'BX', 'BA', 'BKNG', 'BWA', 'BXP', 'BSX', 'BMY', 'AVGO', 'BR', 'BRO',
'BF.B', 'BLDR', 'BG', 'CDNS', 'CZR', 'CPT', 'CPB', 'COF', 'CAH', 'KMX', 'CCL', 'CARR',
'CTLT', 'CAT', 'CBOE', 'CBRE', 'CDW', 'CE', 'COR', 'CNC', 'CNP', 'CF', 'CHRW', 'CRL',


```

**Returns:**

| Type | Description |
|------|--------------|
| `List[str]` | A list of ticker symbols for companies in the S&P 500 index. |

### **Method: get_sp500_yfinance**
```python
def get_sp500_yfinance() -> pd.DataFrame
```
Get ticker symbol, sector, and sector abbreviation for all S&P 500 stocks using yfinance.

Examples:
```python
spy = dc.indices.get_sp500_yfinance()

Ticker             Sector                     Full Name
0       Open        Real Estate    Opendoor Technologies Inc.
1       High                N/A  Simplify Enhanced Income ETF
2        Low  Consumer Cyclical        Lowe's Companies, Inc.
3      Close                N/A                           N/A
4  Adj Close                N/A                           N/A
5     Volume                N/A                           N/A

```

**Returns:**

| Type | Description |
|------|--------------|
| `pd.DataFrame` | DataFrame containing each ticker's info. |

### **Method: get_sp500_df**
```python
def get_sp500_df() -> pd.DataFrame
```
Get S&P 500 historical data from Yahoo Finance

Examples:
```python
spy = dc.indices.get_sp500_df()

(                            MMM open   MMM high  ...   AMT close  AMT volume
date                                             ...
2014-05-02 00:00:00-04:00  79.119009  79.230738  ...   70.025688     2788500
2014-05-05 00:00:00-04:00  77.728029  78.795018  ...   71.152512     2769200
2014-05-06 00:00:00-04:00  78.364858  78.448654  ...   70.186661     2792000
2014-05-07 00:00:00-04:00  78.197292  78.906755  ...   71.112289     2843300
2014-05-08 00:00:00-04:00  78.700071  79.392774  ...   71.031799     1706100
...                              ...        ...  ...         ...         ...
2024-04-26 00:00:00-04:00  91.500000  92.190002  ...  171.690002     1701400
2024-04-29 00:00:00-04:00  91.559998  92.620003  ...  174.990005     2104800
2024-04-30 00:00:00-04:00  95.730003  97.839996  ...  171.559998     3710600
2024-05-01 00:00:00-04:00  98.099998  99.699997  ...  176.839996     3877100
2024-05-02 00:00:00-04:00  97.959999  98.339996  ...  176.880005

```

**Returns:**

| Type | Description |
|------|--------------|
| `pd.DataFrame` | DataFrame containing the historical data for the S&P 500 |

### **Method: get_sp500_sectors**
```python
def get_sp500_sectors() -> pd.DataFrame
```
Get ticker symbol, sector, and sector abbreviation for all 505 SPX stocks.

Examples:
```python
spy = dc.indices.get_sp500_sectors()

SPX Ticker                                        Sector
0          MMM                      Industrial Conglomerates
1          AOS                             Building Products
2          ABT                         Health Care Equipment
3         ABBV                                 Biotechnology
4          ACN                IT Consulting & Other Services
..         ...                                           ...
498        XYL  Industrial Machinery & Supplies & Components
499        YUM                                   Restaurants
500       ZBRA            Electronic Equipment & Instruments
501        ZBH                         Health Care Equipment
502        ZTS                               Pharmaceuticals

```

**Returns:**

| Type | Description |
|------|--------------|
| `pd.DataFrame` | DataFrame containing each ticker's info. |

### **Method: get_osebx_instruments**
```python
def get_osebx_instruments(
			parameter=None
		) -> List[str]
```
Get a list of OSEBX tickers from live.euronext.com.

FR0003500008-XPAR - PARIS/CAC40
QS0010989117-XPAR - PARIS/CAC60

Examples:
```python
osebx = dc.indices.get_osebx_instruments(parameter="NO0010865256-XOSL")

```
**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `parameter` | `str` | The parameter to use for the request. |

**Returns:**

| Type | Description |
|------|--------------|
| `List[str]` | A list of ticker symbols for companies in the OSEBX index. |

### **Method: get_sec_tickers**
```python
def get_sec_tickers() -> pd.DataFrame
```
Get a list of all company tickers from the SEC.

Examples:
```python
sec = await dc.indices.get_sec_tickers()

```

**Returns:**

| Type | Description |
|------|--------------|
| `pd.DataFrame` | cik_str, ticker, title |

### **Method: fetch_dow_jones_index**
```python
def fetch_dow_jones_index() -> pd.DataFrame
```
Get the Dow Jones index data from Wikipedia.

Examples:
```python
dji = await dc.indices.fetch_dow_jones_index()

```

**Returns:**

| Type | Description |
|------|--------------|
| `pd.DataFrame` | A DataFrame containing the Dow Jones index data. |

### **Method: fetch_nasdaq_100_index**
```python
def fetch_nasdaq_100_index() -> pd.DataFrame
```
Get the Nasdaq 100 index data from Wikipedia.

Examples:
```python
nasdaq = await dc.indices.fetch_nasdaq_100_index()

```

**Returns:**

| Type | Description |
|------|--------------|
| `pd.DataFrame` | A DataFrame containing the Nasdaq 100 index data. |

### **Method: fetch_ftse_100_index**
```python
def fetch_ftse_100_index() -> pd.DataFrame
```
Get the FTSE 100 index data from Wikipedia.

Examples:
```python
ftse = await dc.indices.fetch_ftse_100_index()

```

**Returns:**

| Type | Description |
|------|--------------|
| `pd.DataFrame` | A DataFrame containing the FTSE 100 index data. |

### **Method: fetch_sp500_index**
```python
def fetch_sp500_index() -> pd.DataFrame
```
Get the S&P 500 index data from Wikipedia.

Examples:
```python
spy = await dc.indices.fetch_sp500_index()

```

**Returns:**

| Type | Description |
|------|--------------|
| `pd.DataFrame` | A DataFrame containing the S&P 500 index data. |

### **Method: fetch_sse_50_index**
```python
def fetch_sse_50_index() -> pd.DataFrame
```
Get the SSE 50 index data from Wikipedia.

Examples:
```python
sse = await dc.indices.fetch_sse_50_index()

```

**Returns:**

| Type | Description |
|------|--------------|
| `pd.DataFrame` | A DataFrame containing the SSE 50 index data. |

### **Method: fetch_nikkei_225_index**
```python
def fetch_nikkei_225_index() -> pd.DataFrame
```
Get the Nikkei 225 index data from Wikipedia.

Examples:
```python
nikkei = await dc.indices.fetch_nikkei_225_index()

```

**Returns:**

| Type | Description |
|------|--------------|
| `pd.DataFrame` | A DataFrame containing the Nikkei 225 index data. |

### **Method: fetch_hang_seng_index**
```python
def fetch_hang_seng_index() -> pd.DataFrame
```
Get the Hang Seng index data from Wikipedia.

Examples:
```python
hang_seng = await dc.indices.fetch_hang_seng_index()

```

**Returns:**

| Type | Description |
|------|--------------|
| `pd.DataFrame` | A DataFrame containing the Hang Seng index data. |

### **Method: fetch_cac_40_index**
```python
def fetch_cac_40_index() -> pd.DataFrame
```
Get the CAC 40 index data from Wikipedia.

Examples:
```python
cac_40 = await dc.indices.fetch_cac_40_index()

```

**Returns:**

| Type | Description |
|------|--------------|
| `pd.DataFrame` | A DataFrame containing the CAC 40 index data. |

### **Method: fetch_dax_index**
```python
def fetch_dax_index() -> pd.DataFrame
```
Get the DAX index data from Wikipedia.

Examples:
```python
dax = await dc.indices.fetch_dax_index()

```

**Returns:**

| Type | Description |
|------|--------------|
| `pd.DataFrame` | A DataFrame containing the DAX index data. |

### **Method: fetch_wig20_index**
```python
def fetch_wig20_index() -> pd.DataFrame
```
Get the WIG 20 index data from Wikipedia.

Examples:
```python
wig20 = await dc.indices.fetch_wig20_index()

```

**Returns:**

| Type | Description |
|------|--------------|
| `pd.DataFrame` | A DataFrame containing the WIG 20 index data. |

### **Method: async_get_index_generals**
```python
def async_get_index_generals(
			ticker: str,
			exchange: str
		) -> Dict[str, Union[str, float, int]]
```
Get the general information for an index with EOD

Examples:
```python
index_generals = await dc.indices.async_get_index_generals(ticker='IXIC', exchange="INDX")

IXIC Index Generals:
{'Code': 'IXIC', 'Type': 'INDEX', 'Name': 'NASDAQ Composite', 'Exchange': 'INDX', 'CurrencyCode': 'USD', 'CurrencyName': 'US Dollar', 'CurrencySymbol': '$', 'CountryName': 'USA', 'CountryISO': 'US', 'OpenFigi': None}
RUT Index Generals:
{'Code': 'RUT', 'Type': 'INDEX', 'Name': 'Russell 2000', 'Exchange': 'INDX', 'CurrencyCode': 'USD', 'CurrencyName': 'US Dollar', 'CurrencySymbol': '$', 'CountryName': 'USA', 'CountryISO': 'US', 'OpenFigi': None}
FTSE Index Generals:
{'Code': 'FTSE', 'Type': 'INDEX', 'Name': 'FTSE 100 Index (UK)', 'Exchange': 'INDX', 'CurrencyCode': 'GBP', 'CurrencyName': 'British Pound', 'CurrencySymbol': '£', 'CountryName': 'UK', 'CountryISO': 'GB', 'OpenFigi': None}
GDAXI Index Generals:
{'Code': 'GDAXI', 'Type': 'INDEX', 'Name': 'DAX Index', 'Exchange': 'INDX', 'CurrencyCode': 'EUR', 'CurrencyName': 'Euro', 'CurrencySymbol': '€', 'CountryName': 'Germany', 'CountryISO': 'DE', 'OpenFigi': None}
N225 Index Generals:
{'Code': 'N225', 'Type': 'INDEX', 'Name': 'Nikkei 225', 'Exchange': 'INDX', 'CurrencyCode': 'JPY', 'CurrencyName': 'Japanese Yen', 'CurrencySymbol': '¥', 'CountryName': 'Japan', 'CountryISO': 'JP', 'OpenFigi': None}


```
**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `ticker` | `str` | The ticker symbol of the index |
| `exchange` | `str` | The exchange of the index |

**Returns:**

| Type | Description |
|------|--------------|
| `Dict[str, Union[str, float, int]]` | A dictionary containing the general information for the index. |

### **Method: get_index_components**
```python
def get_index_components(
			ticker: str,
			exchange: str ="INDX"
		) -> pd.DataFrame
```
Get the components of an index with EOD
Supported indices: https://eodhistoricaldata.com/financial-apis/list-supported-indices/

Examples:
```python
components = await dc.indices.get_index_components(ticker='IXIC', exchange="INDX")

```
**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `ticker` | `str` | The ticker symbol of the index. |
| `exchange` | `str` | The exchange of the index. |

**Returns:**

| Type | Description |
|------|--------------|
| `pd.DataFrame` | A DataFrame containing the components of the index. |

### **Method: get_index_historical_components**
```python
def get_index_historical_components(
			ticker: str,
			exchange: str ="INDX"
		) -> pd.DataFrame
```
Get the historical components of an index with EOD

Examples:
```python
historical_components = await dc.indices.get_index_historical_components(ticker='IXIC', exchange="INDX")

```
**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `ticker` | `str` | The ticker symbol of the index. |
| `exchange` | `str` | The exchange of the index. |

**Returns:**

| Type | Description |
|------|--------------|
| `pd.DataFrame` | A DataFrame containing the historical components of the index. |

