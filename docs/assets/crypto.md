# Module Information

**Description:**
Crypto Assets class for QuantJourney Framework

This module is responsible for managing cryptocurrency assets for quantitative analysis and algorithmic trading.
It has methods to fetch prices and other data from various cryptocurrency exchanges using the CCXT library.
You can use it with any exchange, but currently 'binance' and 'coinbase' are implemented below.

**Author:** jpolec

**Date:** 18-03-2024

## Class: Crypto()

### **Method: get_exchange_symbols**
```python
def get_exchange_symbols(
			exchange: str ='binance'
		) -> list
```
Get all available symbols for an exchange.


Examples:
```python
symbols = dc.crypto.get_exchange_symbols('binance')
symbols = dc.crypto.get_exchange_symbols('coinbase')

Exchange symbols: ['ETH/BTC', 'LTC/BTC', 'BNB/BTC', 'NEO/BTC', 'QTUM/ETH', 'EOS/ETH', 'SNT/ETH',
'BNT/ETH', 'BCC/BTC', 'GAS/BTC', 'BNB/ETH', 'BTC/USDT', 'ETH/USDT', 'HSR/BTC', 'OAX/ETH', 'DNT/ETH',
'MCO/ETH', 'ICN/ETH', 'MCO/BTC', 'WTC/BTC', 'WTC/ETH', 'LRC/BTC', 'LRC/ETH', 'QTUM/BTC', 'YOYOW/BTC',
'OMG/BTC', 'OMG/ETH', 'ZRX/BTC', 'ZRX/ETH', 'STRAT/BTC', 'STRAT/ETH', 'SNGLS/BTC', 'SNGLS/ETH', 'BQX/BTC',
'BQX/ETH', 'KNC/BTC', 'KNC/ETH', 'FUN/BTC', 'FUN/ETH', 'SNM/BTC', 'SNM/ETH', 'NEO/ETH', 'IOTA/BTC', 'IOTA/ETH',
'LINK/BTC', 'LINK/ETH', 'XVG/BTC', 'XVG/ETH', 'SALT/BTC', 'SALT/ETH', 'MDA/BTC', 'MDA/ETH', 'MTL/BTC',
'MTL/ETH', 'SUB/BTC', 'SUB/ETH', 'EOS/BTC', 'SNT/BTC', 'ETC/ETH', 'ETC/BTC', 'MTH/BTC', 'MTH/ETH', 'ENG/BTC',

```
**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `exchange` | `str` | name of the exchange |

**Returns:**

| Type | Description |
|------|--------------|
| `list` | list of all available symbols |

### **Method: get_latest_price**
```python
def get_latest_price(
			exchange: str,
			symbol: str
		) -> Optional[float]
```
Get the latest price of a given symbol on a given exchange.


Examples:
```python
btc_price = dc.crypto.get_latest_price('binance', 'BTC/USDT')
eth_price = dc.crypto.get_latest_price('coinbase', 'ETH/USDT')

```
**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `exchange` | `str` | name of the exchange (e.g., 'binance', 'coinbase') |
| `symbol` | `str` | the trading symbol (e.g., 'BTC/USDT', 'ETH/USDT') |

**Returns:**

| Type | Description |
|------|--------------|
| `Optional[float]` | the latest price of the symbol on the specified exchange, or None if an error occurs |

### **Method: get_account_balance**
```python
def get_account_balance(
			exchange: str
		) -> Optional[Dict[str, float]]
```
Get the account balance for a given exchange.


Examples:
```python
binance_balance = dc.crypto.get_account_balance('binance')
coinbase_balance = dc.crypto.get_account_balance('coinbase')

```
**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `exchange` | `str` | name of the exchange (e.g., 'binance', 'coinbase') |

**Returns:**

| Type | Description |
|------|--------------|
| `Optional[Dict[str, float]]` | the account balance on the specified exchange, or None if an error occurs |

### **Method: place_market_order**
```python
def place_market_order(
			exchange: str,
			symbol: str,
			side: str,
			amount: float
		) -> Optional[ccxt.Order]
```
Place a market order on a given exchange.


Examples:
```python
buy_order = dc.crypto.place_market_order('binance', 'BTC/USDT', 'buy', 0.1)
sell_order = dc.crypto.place_market_order('coinbase', 'ETH/USDT', 'sell', 1.5)

```
**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `exchange` | `str` | name of the exchange (e.g., 'binance', 'coinbase') |
| `symbol` | `str` | the trading symbol (e.g., 'BTC/USDT', 'ETH/USDT') |
| `side` | `str` | the side of the order ('buy' or 'sell') |
| `amount` | `float` | the amount of the asset to buy or sell |

**Returns:**

| Type | Description |
|------|--------------|
| `Optional[ccxt.Order]` | the placed market order, or None if an error occurs |

### **Method: get_order_book**
```python
def get_order_book(
			exchange: str,
			symbol: str,
			limit: int = 5
		) -> Optional[Dict]
```
Get the order book for a specific symbol on an exchange.


Examples:
```python
binance_order_book = dc.crypto.get_order_book('binance', 'BTC/USDT', limit=10)
coinbase_order_book = dc.crypto.get_order_book('coinbase', 'ETH/USDT', limit=5)

Order book: {'symbol': 'BTC/USDT', 'bids': [[57462.3, 2.331], [57462.2, 0.07], [57462.0, 0.075],
[57461.3, 0.042], [57461.2, 0.07]], 'asks': [[57462.4, 1.993], [57462.5, 0.003], [57462.6, 0.003],
[57462.7, 0.003], [57462.8, 0.098]], 'timestamp': 1714626869768, 'datetime': '2024-05-02T05:14:29.768Z',
'nonce': 4535218558049}

```
**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `exchange` | `str` | name of the exchange (e.g., 'binance', 'coinbase') |
| `symbol` | `str` | the trading symbol (e.g., 'BTC/USDT', 'ETH/USDT') |
| `limit` | `int` | the depth of the order book (default: 5) |

**Returns:**

| Type | Description |
|------|--------------|
| `Optional[Dict]` | the order book for the specified symbol on the exchange, or None if an error occurs |

### **Method: get_market_structure**
```python
def get_market_structure(
			exchange: str,
			ticker: str
		) -> Optional[Dict]
```
Get the market structure for a given ticker on an exchange.


Examples:
```python
binance_market_structure = dc.crypto.get_market_structure('binance', 'BTC/USDT')
coinbase_market_structure = dc.crypto.get_market_structure('coinbase', 'ETH/USDT')

```
**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `exchange` | `str` | name of the exchange (e.g., 'binance', 'coinbase') |
| `ticker` | `str` | the trading ticker (e.g., 'BTC/USDT', 'ETH/USDT') |

**Returns:**

| Type | Description |
|------|--------------|
| `Optional[Dict]` | the market structure for the specified ticker on the exchange, or None if an error occurs |

### **Method: get_tickers**
```python
def get_tickers(
			exchange: str,
			symbols: List[str] = None
		) -> Optional[Dict]
```
Get the tickers for a specific exchange.


Examples:
```python
binance_tickers = dc.crypto.get_tickers('binance')
coinbase_tickers = dc.crypto.get_tickers('coinbase', symbols=['BTC/USDT', 'ETH/USDT'])

```
**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `exchange` | `str` | name of the exchange (e.g., 'binance', 'coinbase') |
| `symbols` | `str` | a list of symbols to retrieve tickers for (default: None) |

**Returns:**

| Type | Description |
|------|--------------|
| `Optional[Dict]` | a dictionary of tickers for the specified exchange, or None if an error occurs |

### **Method: get_trades**
```python
def get_trades(
			exchange: str,
			symbol: str,
			since: int = None,
			limit: int = None
		) -> Optional[List]
```
Get the recent trades for a specific symbol on an exchange.


Examples:
```python
binance_trades = dc.crypto.get_trades('binance', 'BTC/USDT', since=1647580800000, limit=1000)
coinbase_trades = dc.crypto.get_trades('coinbase', 'ETH/USDT', limit=500)

```
**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `exchange` | `str` | name of the exchange (e.g., 'binance', 'coinbase') |
| `symbol` | `str` | the trading symbol (e.g., 'BTC/USDT', 'ETH/USDT') |
| `since` | `int` | the timestamp (in milliseconds) to start retrieving trades from (default: None) |
| `limit` | `int` | the maximum number of trades to retrieve (default: None) |

**Returns:**

| Type | Description |
|------|--------------|
| `Optional[List]` | a list of recent trades for the specified symbol on the exchange, or None if an error occurs |

### **Method: get_funding_rates**
```python
def get_funding_rates(
			exchange: str,
			symbol: str,
			start_time: int = None,
			end_time: int = None,
			limit: int = 1000
		) -> Optional[List]
```
Get the funding rates for a specific symbol on an exchange.


Examples:
```python
binance_funding_rates = dc.crypto.get_funding_rates('binance', 'BTC/USDT', start_time=1620000000000, end_time=1621000000000, limit=500)
coinbase_funding_rates = dc.crypto.get_funding_rates('coinbase', 'ETH/USDT', limit=200)

```
**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `exchange` | `str` | name of the exchange (e.g., 'binance', 'coinbase') |
| `symbol` | `str` | the trading symbol (e.g., 'BTC/USDT', 'ETH/USDT') |
| `start_time` | `int` | the start timestamp (default: None) |
| `end_time` | `int` | the end timestamp (default: None) |
| `limit` | `int` | the maximum number of funding rates to retrieve (default: 1000) |

**Returns:**

| Type | Description |
|------|--------------|
| `Optional[List]` | a list of funding rates for the specified symbol on the exchange, or None if an error occurs |

### **Method: get_open_interest**
```python
def get_open_interest(
			exchange: str,
			symbol: str,
			period: str,
			limit: int = 500
		) -> Optional[List]
```
Get the open interest for a specific symbol on an exchange.


Examples:
```python
binance_open_interest = dc.crypto.get_open_interest('binance', 'BTC/USDT', '5m', limit=400)
coinbase_open_interest = dc.crypto.get_open_interest('coinbase', 'ETH/USDT', '1h', limit=300)

Open interest: [{'symbol': 'BTC/USDT:USDT', 'baseVolume': 74055.805, 'quoteVolume': 4419354219.18,
'openInterestAmount': 74055.805, 'openInterestValue': 4419354219.18, 'timestamp': 1714506900000,
'datetime': '2024-04-30T19:55:00.000Z', 'info': {'symbol': 'BTCUSDT', 'sumOpenInterest': '74055.80500000',
'sumOpenInterestValue': '4419354219.18000000', 'timestamp': '1714506900000'}},
s
```
**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `exchange` | `str` | name of the exchange (e.g., 'binance', 'coinbase') |
| `symbol` | `str` | the trading symbol (e.g., 'BTC/USDT', 'ETH/USDT') |
| `period` | `str` | the period for the open interest (e.g., '5m', '1h', '1d') |
| `limit` | `int` | the maximum number of data points to retrieve (default: 500) |

**Returns:**

| Type | Description |
|------|--------------|
| `Optional[List]` | a list of open interest data for the specified symbol on the exchange, or None if an error occurs |

### **Method: get_historical_trades**
```python
def get_historical_trades(
			exchange: str,
			symbol: str,
			start_time: int = None,
			end_time: int = None,
			limit: int = 1000
		) -> Optional[List]
```
Get the historical trades for a specific symbol on an exchange.


Examples:
```python
binance_historical_trades = dc.crypto.get_historical_trades('binance', 'BTC/USDT', start_time=1620000000000, end_time=1621000000000, limit=500)
coinbase_historical_trades = dc.crypto.get_historical_trades('coinbase', 'ETH/USDT', limit=200)

Historical trades: [{'info': {'a': '462350718', 'p': '56630.34', 'q': '0.003', 'f': '750315980', 'l': '750315980', 'T': '1620000000087', 'm': False},
'timestamp': 1620000000087, 'datetime': '2021-05-03T00:00:00.087Z', 'symbol': 'BTC/USDT:USDT', 'id': '462350718', 'order': None, 'type': None, 'side': 'buy',
'takerOrMaker': None, 'price': 56630.34, 'amount': 0.003, 'cost': 169.89102, 'fee': None, 'fees': []},


```
**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `exchange` | `str` | name of the exchange (e.g., 'binance', 'coinbase') |
| `symbol` | `str` | the trading symbol (e.g., 'BTC/USDT', 'ETH/USDT') |
| `start_time` | `int` | the start timestamp (default: None) |
| `end_time` | `int` | the end timestamp (default: None) |
| `limit` | `int` | the maximum number of trades to retrieve (default: 1000) |

**Returns:**

| Type | Description |
|------|--------------|
| `Optional[List]` | a list of historical trades for the specified symbol on the exchange, or None if an error occurs |

### **Method: get_liquidations**
```python
def get_liquidations(
			exchange: str,
			symbol: str,
			start_time: int = None,
			end_time: int = None,
			limit: int = 1000
		) -> Optional[List]
```
Get the liquidations for a specific symbol on an exchange.


Examples:
```python
binance_liquidations = dc.crypto.get_liquidations('binance', 'BTC/USDT', start_time=1620000000000, end_time=1621000000000, limit=500)
coinbase_liquidations = dc.crypto.get_liquidations('coinbase', 'ETH/USDT', limit=200)

```
**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `exchange` | `str` | name of the exchange (e.g., 'binance', 'coinbase') |
| `symbol` | `str` | the trading symbol (e.g., 'BTC/USDT', 'ETH/USDT') |
| `start_time` | `int` | the start timestamp (default: None) |
| `end_time` | `int` | the end timestamp (default: None) |
| `limit` | `int` | the maximum number of liquidations to retrieve (default: 1000) |

**Returns:**

| Type | Description |
|------|--------------|
| `Optional[List]` | a list of liquidations for the specified symbol on the exchange, or None if an error occurs |

### **Method: get_futures_klines**
```python
def get_futures_klines(
			exchange: str,
			symbol: str,
			interval: str,
			start_time: int = None,
			end_time: int = None,
			limit: int = 1500
		) -> Optional[List]
```
Get the futures klines (candlestick data) for a specific symbol on an exchange.


Examples:
```python
binance_futures_klines = dc.crypto.get_futures_klines('binance', 'BTC/USDT', '5m', start_time=1620000000000, end_time=1621000000000, limit=1000)
coinbase_futures_klines = dc.crypto.get_futures_klines('coinbase', 'ETH/USDT', '1h', limit=500)

```
**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `exchange` | `str` | name of the exchange (e.g., 'binance', 'coinbase') |
| `symbol` | `str` | the trading symbol (e.g., 'BTC/USDT', 'ETH/USDT') |
| `interval` | `str` | the kline interval (e.g., '1m', '5m', '1h', '1d') |
| `start_time` | `int` | the start timestamp (default: None) |
| `end_time` | `int` | the end timestamp (default: None) |
| `limit` | `int` | the maximum number of klines to retrieve (default: 1500) |

**Returns:**

| Type | Description |
|------|--------------|
| `Optional[List]` | a list of futures klines for the specified symbol on the exchange, or None if an error occurs |

### **Method: get_futures_mark_price_klines**
```python
def get_futures_mark_price_klines(
			exchange: str,
			symbol: str,
			interval: str,
			start_time: int = None,
			end_time: int = None,
			limit: int = 1500
		) -> Optional[List]
```
Get the futures mark price klines for a specific symbol on an exchange.


Examples:
```python
binance_futures_mark_price_klines = dc.crypto.get_futures_mark_price_klines('binance', 'BTC/USDT', '5m', start_time=1620000000000, end_time=1621000000000, limit=1000)
coinbase_futures_mark_price_klines = dc.crypto.get_futures_mark_price_klines('coinbase', 'ETH/USDT', '1h', limit=500)

```
**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `exchange` | `str` | name of the exchange (e.g., 'binance', 'coinbase') |
| `symbol` | `str` | the trading symbol (e.g., 'BTC/USDT', 'ETH/USDT') |
| `interval` | `str` | the kline interval (e.g., '1m', '5m', '1h', '1d') |
| `start_time` | `int` | the start timestamp (default: None) |
| `end_time` | `int` | the end timestamp (default: None) |
| `limit` | `int` | the maximum number of klines to retrieve (default: 1500) |

**Returns:**

| Type | Description |
|------|--------------|
| `Optional[List]` | a list of futures mark price klines for the specified symbol on the exchange, or None if an error occurs |

### **Method: get_ohlcv**
```python
def get_ohlcv(
			exchange: str,
			ticker: str,
			timeframe: str,
			start_date: str,
			end_date: str,
			db_name=None,
			source='ccxt',
			read_from_db=False,
			write_to_db=False
		) -> pd.DataFrame
```
Get OHLCV data for a specific ticker and timeframe from a specific exchange.


Examples:
```python
ohlcv_data = await dc.crypto.get_ohlcv('binance', 'BTC/USDT', '1d', '2022-01-01', '2022-01-10')
ohlcv_data = await dc.crypto.get_ohlcv('binance', 'BTC/USDT', '1d', '2022-01-01', '2022-01-10', db_name='Mongo', source='ccxt', read_from_db=True)

OHLCV data:       open      high       low     close      volume
48   2022-01-02  47704.35  48000.00  46605.68  47280.00  184795.093
49   2022-01-03  47280.01  47575.22  45665.40  46445.81  244781.793
50   2022-01-04  46445.80  47524.36  45445.57  45833.42  292149.750
51   2022-01-05  45833.41  47075.29  42270.00  43421.69  485477.569
52   2022-01-06  43421.70  43766.00  42385.83  43080.01  299509.851
53   2022-01-07  43080.01  43135.00  40456.56  41553.86  473214.849
54   2022-01-08  41553.87  42335.00  40500.00  41688.05  283737.224
55   2022-01-09  41688.05  42773.85  41170.00  41851.22  223134.952

```
**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `exchange` | `str` | name of the exchange |
| `ticker` | `str` | trading pair (e.g., 'BTC/USDT') |
| `timeframe` | `time period` | (e.g., '1m', '5m', '15m', '30m', '1h', '1d') |
| `start_date` | `str` | start date (e.g., '2022-01-01') |
| `end_date` | `str` | end date (e.g., '2022-01-10') |
| `db_name` | `str` | the name of the database to read from/write to (e.g., 'Mongo') |
| `source` | `str` | used for reading / writing to the database, set in metadata |
| `read_from_db` | `bool` | whether to read data from the database |
| `write_to_db` | `bool` | whether to write data to the database |

**Returns:**

| Type | Description |
|------|--------------|
| `pd.DataFrame` | pandas DataFrame containing OHLCV data |
