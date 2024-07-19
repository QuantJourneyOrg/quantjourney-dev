# Module Information

**Description:**
Macro Assets class for QuantJourney Framework

The Macro class provides methods for fetching macroeconomic data from various sources,
such as EOD Historical Data, FRED, OECD, and Quandl. It supports the retrieval of macroeconomic


@gmail.com

**Author:** jpolec

**Date:** 18-03-2024

## Class: Macro()

### **Method: get_macro_releases**
```python
def get_macro_releases(
			from_date: str = '2022-01-01',
			to_date: str = '2023-12-31',
			countryiso: str = None,
			limit: int = 1000,
			comparison: str = None
		) -> pd.DataFrame
```
Get Macro Events Calendar (per country, type, etc.)

Examples:
```python
macro.get_macro_releases(from_date='2022-01-01', to_date='2023-12-31', countryiso='USA', limit=1000, comparison='mom')

Macro Releases:
type comparison period country  ...  previous  estimate  change  change_percentage
date                                                                      ...
2023-12-12 13:30:00          ECB McCaul Speech       None   None      EU  ...       NaN       NaN     NaN                NaN
2023-12-12 13:30:00                    CPI s.a       None    Nov      US  ...   307.619       NaN   0.298              0.097
2023-12-12 13:30:00        Core Inflation Rate        mom    Nov      US  ...     0.200       0.3   0.100             50.000
2023-12-12 13:30:00        Core Inflation Rate        yoy    Nov      US  ...     4.000       4.0     NaN                NaN
2023-12-12 13:30:00             Inflation Rate        yoy    Nov      US  ...     3.200       3.1  -0.100             -3.125
...                                        ...        ...    ...     ...  ...       ...       ...     ...                ...
2023-12-31 00:00:00             New Year’s Eve       None   None      JP  ...       NaN       NaN     NaN                NaN
2023-12-31 00:00:00             New Year’s Eve       None   None      EU  ...       NaN       NaN     NaN                NaN
2023-12-31 01:30:00      NBS Manufacturing PMI       None    Dec      CN  ...    49.400      49.5  -0.400             -0.810
2023-12-31 01:30:00            NBS General PMI       None    Dec      CN  ...    50.400       NaN  -0.100             -0.198
2023-12-31 01:30:00  NBS Non Manufacturing PMI       None    Dec      CN  ...    50.200       NaN   0.200              0.398

```
**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `from_date` | `str` | The start date of the period for fetching data (default '2022-01-01') |
| `to_date` | `str` | The end date of the period for fetching data (default '2023-12-31') |
| `countryiso` | `str` | The country ISO code (default None) |
| `limit` | `int` | The maximum number of events to fetch (default 1000) |
| `comparison` | `str` | The comparison value - possible values: mom, qoq, yoy (default None) |

**Returns:**

| Type | Description |
|------|--------------|
| `pd.DataFrame` | A DataFrame containing the macroeconomic events |

### **Method: get_macro_indicators**
```python
def get_macro_indicators(
			countryiso="USA",
			indicator_code="gdp_current_usd"
		) -> pd.DataFrame
```
Get Macro Indicators
supported indicators: https://eodhistoricaldata.com/financial-apis/macroeconomics-data-and-macro-indicators-api/

List of Available Macroeconomics Indicators
real_interest_rate - Real interest rate (%).
population_total - Population, total.
population_growth_annual - Population growth (annual %).
inflation_consumer_prices_annual - Inflation, consumer prices (annual %).
consumer_price_index - Consumer Price Index (2010 = 100).
gdp_current_usd - GDP (current US$).
gdp_per_capita_usd - GDP per capita (current US$).
gdp_growth_annual - GDP growth (annual %).
debt_percent_gdp - Debt in percent of GDP (annual %).
net_trades_goods_services - Net trades in goods and services (current US$).
inflation_gdp_deflator_annual - Inflation, GDP deflator (annual %).
agriculture_value_added_percent_gdp - Agriculture, value added (% of GDP).
industry_value_added_percent_gdp - Industry, value added (% of GDP).
services_value_added_percent_gdp - Services, etc., value added (% of GDP).
exports_of_goods_services_percent_gdp - Exports of goods and services (% of GDP).
imports_of_goods_services_percent_gdp - Imports of goods and services (% of GDP).
gross_capital_formation_percent_gdp - Gross capital formation (% of GDP).
net_migration - Net migration (absolute value).
gni_usd - GNI, Atlas method (current US$).
gni_per_capita_usd - GNI per capita, Atlas method (current US$).
gni_ppp_usd - GNI, PPP (current international $).
gni_per_capita_ppp_usd - GNI per capita, PPP (current international $).
income_share_lowest_twenty - Income share held by lowest 20% (in %).
life_expectancy - Life expectancy at birth, total (years).
fertility_rate - Fertility rate, total (births per woman).
prevalence_hiv_total - Prevalence of HIV, total (% of population ages 15-49).
co2_emissions_tons_per_capita - CO2 emissions (metric tons per capita).
surface_area_km - Surface area (sq. km).
poverty_poverty_lines_percent_population - Poverty headcount ratio at national poverty lines (% of population).
revenue_excluding_grants_percent_gdp - Revenue, excluding grants (% of GDP).
cash_surplus_deficit_percent_gdp - Cash surplus/deficit (% of GDP).
startup_procedures_register - Start-up procedures to register a business (number).
market_cap_domestic_companies_percent_gdp - Market capitalization of listed domestic companies (% of GDP).
mobile_subscriptions_per_hundred - Mobile cellular subscriptions (per 100 people).
internet_users_per_hundred - Internet users (per 100 people).
high_technology_exports_percent_total - High-technology exports (% of manufactured exports).
merchandise_trade_percent_gdp - Merchandise trade (% of GDP).
total_debt_service_percent_gni - Total debt service (% of GNI).
unemployment_total_percent - Unemployment total (% of labor force).

Examples:
```python
macro.get_macro_indicators(countryiso="USA", indicator_code="gdp_current_usd")
macro.get_macro_indicators(countryiso="USA", indicator_code="unemployment_rate")

CountryCode    CountryName          Indicator  Period           Value
Date
1960-12-31         USA  United States  GDP (current US$)  Annual    543300000000
1961-12-31         USA  United States  GDP (current US$)  Annual    563300000000
1962-12-31         USA  United States  GDP (current US$)  Annual    605100000000
1963-12-31         USA  United States  GDP (current US$)  Annual    638600000000
1964-12-31         USA  United States  GDP (current US$)  Annual    685800000000
...                ...            ...                ...     ...             ...
2019-12-31         USA  United States  GDP (current US$)  Annual  21380976119000
2020-12-31         USA  United States  GDP (current US$)  Annual  21060473613000
2021-12-31         USA  United States  GDP (current US$)  Annual  23315080560000
2022-12-31         USA  United States  GDP (current US$)  Annual  25439700000000
2023-12-31         USA  United States  GDP (current US$)  Annual               0


```
**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `countryiso` | `str` | The country ISO code (default "USA") |
| `indicator_code` | `str` | The indicator code (default "gdp_current_usd") |

**Returns:**

| Type | Description |
|------|--------------|
| `pd.DataFrame` | A DataFrame containing the macroeconomic indicators |

### **Method: get_macro_borrow_rates**
```python
def get_macro_borrow_rates(
			ticker="LIBORUSD",
			duration="1M"
		) -> pd.DataFrame
```
Get Borrowing Rates

Examples:
```python
macro.get_macro_borrow_rates(ticker="LIBORUSD", duration="1M")
macro.get_macro_borrow_rates(ticker="LIBORUSD", duration="3M")

```
**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `ticker` | `str` | The ticker symbol (default "LIBORUSD") |
| `duration` | `str` | The duration of the borrowing rate (default "1M") |

**Returns:**

| Type | Description |
|------|--------------|
| `pd.DataFrame` | A DataFrame containing the borrowing rates |

### **Method: search_fred_for_series**
```python
def search_fred_for_series(
			search_string="GDP"
		) -> pd.DataFrame
```
Search FRED for series

Examples:
```python
macro.search_fred_for_series(search_string="GDP")
macro.search_fred_for_series(search_string="unemployment")

FRED Series Search:
series id                   id  ... popularity                                              notes
0            GFDEGDQ188S          GFDEGDQ188S  ...         84  Federal Debt: Total Public Debt as Percent of ...
1            FYFSGDA188S          FYFSGDA188S  ...         75  Federal Surplus or Deficit [-] as Percent of G...
2             FYFSDFYGDP           FYFSDFYGDP  ...         42                                               None
3            GFDGDPA188S          GFDGDPA188S  ...         67  Gross Federal Debt as Percent of Gross Domesti...
4                    GDP                  GDP  ...         93  BEA Account Code: A191RC  Gross domestic produ...
..                   ...                  ...  ...        ...                                                ...
995  OECDLORSGPORIXOBSAM  OECDLORSGPORIXOBSAM  ...          1  OECD descriptor ID: LORSGPOR OECD unit ID: IXO...
996      NAEXKP02GBA661S      NAEXKP02GBA661S  ...          0  OECD Descriptor ID: NAEXKP02 OECD unit ID: IDX...
997        DEBTTLESA188A        DEBTTLESA188A  ...          9  Debt is the entire stock of direct government ...
998        DEBTTLCHA188A        DEBTTLCHA188A  ...          9  Debt is the entire stock of direct government ...
999            NGMP17140            NGMP17140  ...         24  The All industry total includes all Private in...

```
**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `search_string` | `str` | The search string (default "GDP") |

**Returns:**

| Type | Description |
|------|--------------|
| `pd.DataFrame` | A DataFrame containing the search results |

### **Method: get_fred_data_series_list_by_category**
```python
def get_fred_data_series_list_by_category(
			category_id=101,
			limit=1000,
			order_by="popularity"
		) -> pd.DataFrame
```
Get FRED Data Series List by Category

Examples:
```python
macro.get_fred_data_series_list_by_category(category_id=101, limit=1000, order_by="popularity")

```
**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `category_id` | `int` | The category ID (default 101) |
| `limit` | `int` | The maximum number of series to fetch (default 1000) |
| `order_by` | `str` | The order of the series (default "popularity") |

**Returns:**

| Type | Description |
|------|--------------|
| `pd.DataFrame` | A DataFrame containing the data series list |

### **Method: get_fred_data_series_list_by_release**
```python
def get_fred_data_series_list_by_release(
			release_id=175,
			limit=1000,
			order_by="popularity"
		) -> pd.DataFrame
```
Get FRED Data Series List by Release

Examples:
```python
macro.get_fred_data_series_list_by_release(release_id=175, limit=1000, order_by="popularity")

FRED Series by ID:
2014-05-02    1881.14
2014-05-05    1884.66
2014-05-06    1867.72
2014-05-07    1878.21
2014-05-08    1875.63
...
2024-04-25    5048.42
2024-04-26    5099.96
2024-04-29    5116.17
2024-04-30    5035.69
2024-05-01    5018.39
Length: 2609, dtype: float64

```
**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `release_id` | `int` | The release ID (default 175) |
| `limit` | `int` | The maximum number of series to fetch (default 1000) |
| `order_by` | `str` | The order of the series (default "popularity") |

**Returns:**

| Type | Description |
|------|--------------|
| `pd.DataFrame` | A DataFrame containing the data series list |

### **Method: get_fred_data_series_by_id**
```python
def get_fred_data_series_by_id(
			search_id="SP500",
			start="1950-01-01",
			end=datetime.today(
		)
```

### **Method: get_fred_data_series_info**
```python
def get_fred_data_series_info(
			search_id="SP500"
		) -> pd.DataFrame
```
Get FRED Data Series Info

Examples:
```python
macro.get_fred_data_series_info(search_id="SP500")

RED Series Info:
id                                                                       SP500
realtime_start                                                      2024-05-02
realtime_end                                                        2024-05-02
title                                                                  S&P 500
observation_start                                                   2014-05-02
observation_end                                                     2024-05-01
frequency                                                         Daily, Close
frequency_short                                                              D
units                                                                    Index
units_short                                                              Index
seasonal_adjustment                                    Not Seasonally Adjusted
seasonal_adjustment_short                                                  NSA
last_updated                                            2024-05-01 19:10:58-05
popularity                                                                  83


```
**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `search_id` | `str` | The search ID (default "SP500") |

**Returns:**

| Type | Description |
|------|--------------|
| `pd.DataFrame` | A DataFrame containing the data series info |

### **Method: get_all_fred_data_tags**
```python
def get_all_fred_data_tags() -> pd.DataFrame
```
Get All FRED Data Tags

**Returns:**

| Type | Description |
|------|--------------|
| `pd.DataFrame` | A DataFrame containing the data tags |

### **Method: get_all_fred_data_sources**
```python
def get_all_fred_data_sources() -> pd.DataFrame
```
Get All FRED Data Sources

**Returns:**

| Type | Description |
|------|--------------|
| `pd.DataFrame` | A DataFrame containing the data sources |

### **Method: get_all_fred_series_by_tags**
```python
def get_all_fred_series_by_tags(
			tags=["usa"]
		) -> pd.DataFrame
```
Get All FRED Series by Tags
**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `tags` | `list` | List of tags (default ["usa"]) |

**Returns:**

| Type | Description |
|------|--------------|
| `pd.DataFrame` | A DataFrame containing the data series by tags |

### **Method: get_all_fred_releases**
```python
def get_all_fred_releases(
			realtime_start=datetime.today(
		)
```

### **Method: get_oecd_countries**
```python
def get_oecd_countries() -> pd.DataFrame
```
Get OECD Countries

Examples:
```python
macro.get_oecd_countries()

Requesting URL http://stats.oecd.org/SDMX-JSON/dataflow/MEI/all
Structure: LOCATION, SUBJECT, MEASURE, FREQUENCY, TIME_PERIOD
LOCATION values:
{'id': 'AUS', 'name': 'Australia'}
{'id': 'AUT', 'name': 'Austria'}
{'id': 'BEL', 'name': 'Belgium'}
{'id': 'CAN', 'name': 'Canada'}
{'id': 'CHL', 'name': 'Chile'}
{'id': 'COL', 'name': 'Colombia'}
{'id': 'CRI', 'name': 'Costa Rica'}
{'id': 'CZE', 'name': 'Czechia'}
{'id': 'DNK', 'name': 'Denmark'}
{'id': 'EST', 'name': 'Estonia'}
{'id': 'FIN', 'name': 'Finland'}
{'id': 'FRA', 'name': 'France'}
{'id': 'DEU', 'name': 'Germany'}
{'id': 'GRC', 'name': 'Greece'}
{'id': 'HUN', 'name': 'Hungary'}
{'id': 'ISL', 'name': 'Iceland'}
{'id': 'IRL', 'name': 'Ireland'}
{'id': 'ISR', 'name': 'Israel'}
{'id': 'ITA', 'name': 'Italy'}
{'id': 'JPN', 'name': 'Japan'}
{'id': 'KOR', 'name': 'Korea'}
{'id': 'LVA', 'name': 'Latvia'}
{'id': 'LTU', 'name': 'Lithuania'}
{'id': 'LUX', 'name': 'Luxembourg'}
{'id': 'MEX', 'name': 'Mexico'}
{'id': 'NLD', 'name': 'Netherlands'}
{'id': 'NZL', 'name': 'New Zealand'}
{'id': 'NOR', 'name': 'Norway'}
{'id': 'POL', 'name': 'Poland'}
{'id': 'PRT', 'name': 'Portugal'}
{'id': 'SVK', 'name': 'Slovakia'}
{'id': 'SVN', 'name': 'Slovenia'}
{'id': 'ESP', 'name': 'Spain'}
{'id': 'SWE', 'name': 'Sweden'}
{'id': 'CHE', 'name': 'Switzerland'}
{'id': 'TUR', 'name': 'Turkey'}
{'id': 'GBR', 'name': 'United Kingdom'}
{'id': 'USA', 'name': 'United States'}

```

**Returns:**

| Type | Description |
|------|--------------|
| `pd.DataFrame` | A DataFrame containing the OECD countries |

### **Method: get_oecd_data**
```python
def get_oecd_data(
			dataset="QNA",
			country="USA",
			frequency="Q"
		) -> pd.DataFrame
```
Get OECD data for a given dataset, country, and frequency, showing all leading indicators.
**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `dataset` | `str` | The dataset (default "QNA") |
| `country` | `str` | The country (default "USA") |
| `frequency` | `str` | The frequency (default "Q") |

**Returns:**

| Type | Description |
|------|--------------|
| `pd.DataFrame` | A DataFrame containing the OECD data |

### **Method: get_quandl_data**
```python
def get_quandl_data(
			dataset_code="WIKI/AAPL",
			start_date=None,
			end_date=None
		) -> pd.DataFrame
```
Get Quandl Data

Examples:
```python
macro.get_quandl_data(dataset_code="WIKI/AAPL", start_date="2017-01-01", end_date="2017-12-31")

Metadata for WIKI/AAPL:
[{'dataset': {'id': 9775409, 'dataset_code': 'AAPL', 'database_code': 'WIKI', 'name': 'Apple Inc (AAPL) Prices,
Dividends, Splits and Trading Volume', 'description': 'End of day open, high, low, close and volume, dividends and splits,
and split/dividend adjusted open, high, low close and volume for Apple Inc. (AAPL). Ex-Dividend is non-zero on ex-dividend
dates. Split Ratio is 1 on non-split dates. Adjusted prices are calculated per CRSP

```
**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `dataset_code` | `str` | The dataset code (default "WIKI/AAPL") |
| `start_date` | `str` | The start date (default None) |
| `end_date` | `str` | The end date (default None) |

**Returns:**

| Type | Description |
|------|--------------|
| `pd.DataFrame` | A DataFrame containing the Quandl data |

