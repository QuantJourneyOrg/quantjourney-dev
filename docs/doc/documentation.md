# **Start**

Welcome to the Documentation section of our Trading Framework and Backtesting Framework! This aim of this guide is to provide users, developers, and contributors with comprehensive information on how to install, configure, and use our software effectively. Below, you will find detailed descriptions, step-by-step tutorials, and additional resources to help you understand and work with our product.

## **Overview**
The documentation is organized into several key areas as:

* Assets - the wrappers to fetch the data (equities, crypto, macro, etc.), modify and present different assets
* Connectors - the wrapper to different sources of data (EOD, CCXT, Fred, etc.)
* Exchanges - the wrapper to execute trades (IBKR as per now)
* Backtesting - the complete framework for backtesting 

### Example (this is just an example of exmaple, see more in Examples section)
Please see how easily is to use the Qlib framework, in your Python code. The below example is getting daily data for Apple from EOD Historical Data source and presenting.
You may modify ([see examples](/doc/examples/get_equities/)) to select other sources and to get it directly from DataBase. 

### Python Code Example

```python
# Initialize Data Connector
dc = DataConnector()

# Fetch OHLCV data for AAPL from EOD Historical Data
eod_data = await dc.equities.async_get_ohlcv(
    tickers=["AAPL"],           # Specify the ticker for Apple Inc.
    exchanges=["US"],           # Specify the exchange as US (typically NASDAQ for AAPL)
    granularity="1d",           # Daily granularity for the OHLCV data
    period_starts=["2023-01-01"],   # Start date of the period for data fetching
    period_ends=["2023-12-31"],     # End date of the period
    source='eod'                # Specify the data source as EOD Historical Data
)

print(eod_data)
```

with output:
```json

[                     datetime    open    high     low   close  adj_close     volume
0   2023-01-03 00:00:00+00:00  130.28  130.90  124.17  125.07   124.2163  112117500
1   2023-01-04 00:00:00+00:00  126.89  128.66  125.08  126.36   125.4975   89113600
2   2023-01-05 00:00:00+00:00  127.13  127.77  124.76  125.02   124.1666   80962700
3   2023-01-06 00:00:00+00:00  126.01  130.29  124.89  129.62   128.7352   87754700
4   2023-01-09 00:00:00+00:00  130.47  133.41  129.89  130.15   129.2616   70790800
..                        ...     ...     ...     ...     ...        ...        ...
245 2023-12-22 00:00:00+00:00  195.18  195.41  192.97  193.60   193.3533   37122800
246 2023-12-26 00:00:00+00:00  193.61  193.89  192.83  193.05   192.8040   28919300
247 2023-12-27 00:00:00+00:00  192.49  193.50  191.09  193.15   192.9038   48087700
248 2023-12-28 00:00:00+00:00  194.14  194.66  193.17  193.58   193.3333   34049900
249 2023-12-29 00:00:00+00:00  193.90  194.40  191.73  192.53   192.2846   42628800

[250 rows x 7 columns]]
```


## **Local Infra**

 For the infrastructure we are using 
We are using different DataBases which you can specify in the config file (_config/config.json). As per now, it's recommened to [install MongoDB](/doc/installation/) on your PC/Mac prior doing examples. With predefined scripts it shouldn't take more than 15-30 min.

## **Sources of Data**
We rely on data sourced from the Internet, including both free and paid services. Free data is available from sources like YFinance. Paid data is sourced from services such as EODHistorical Data, which covers over 80 markets and includes data for equities, CFDs, REITs, and more. Another source, FinancialModelingPrep, provides data on over 15,000 stocks, ETFs, and Mutual Funds across various exchanges in the US, Europe, Canada, China, and others. Many of these services offer free tiers with limited capabilities or data coverage, but for comprehensive access, a paid subscription is often required.

You should choose data sources based on your specific requirements. Much of the research and analysis conducted by QuantJourney can be performed using the free-of-charge Yahoo Finance data. It’s up to you to determine what data you need to run your analyses effectively.

## **Code and GitHub Repository**
To full code is available in private GitHub repository, and available to paid subscribers to [Quant Journey with Code blog](https://quantjourney.substack.com/). If you'd like to have an access please subscribe it.


The best way is to start with examples, and discover more!

If you have any questions, please contact me directly.