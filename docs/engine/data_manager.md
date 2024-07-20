# Module Information

**Description:**
Backtesting Framework for Trading Strategies

	DataManager - Class for managing data for trading strategies.

**Author:** jpolec

**Date:** 27-02-2024 and 01-04-2024

## Class: DataManager




### **Method: __init__**

```python
def __init__(
    self,
    config: Dict[str, Any]) -> dict:
```

Initialize the DataManager with the specified configuration.


**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `config` | `Dict[str, Any]` | Configuration options for the DataManager.





### **Method: get_market_data**

```python
def get_market_data(
    self,
    instruments: List[str],
    trading_range: Dict[str, str]) -> Dict[str, pd.DataFrame]: """ Get market data for specified instruments and trading range. Args: instruments (List[str]) -> dict:
```

Get market data for specified instruments and trading range.


**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `instruments` | `List[str]` | A list of ticker symbols.
| `trading_range` | `Dict[str, str]` | A dictionary with 'start' and 'end' dates as strings.
| `str]) -> Dict[str` | `` | 

**Returns:**

| Type | Description |
|------|-------------|
| `Dict[str, pd.DataFrame]` | A dictionary where keys are instrument symbols and values are DataFrames
			containing historical market data for each instrument.





### **Method: compute_returns**

```python
def compute_returns(
    self,
    market_data: Dict[str, pd.DataFrame],
    instruments: List[str]) -> Dict[str, pd.DataFrame]: """ Compute returns based on closing prices. """ for instrument in instruments: market_data[instrument]['Returns'] = market_data[instrument]['Close'].pct_change() return market_data #@timer def compute_returns_ewm(self,
    market_data: Dict[str, pd.DataFrame],
    instruments: List[str],
    span: int = 30) -> dict:
```

Compute returns based on closing prices.






### **Method: compute_volatility**

```python
def compute_volatility(
    self,
    market_data: Dict[str, pd.DataFrame],
    instruments: List[str],
    window: int = 20) -> Dict[str, pd.DataFrame]: """ Compute volatility based on returns. """ for instrument in instruments: market_data[instrument]['Volatility'] = market_data[instrument]['Returns'].rolling(window).std() * np.sqrt(252) return market_data #@timer def compute_ewm_volatility(self,
    market_data: Dict[str, pd.DataFrame],
    instruments: List[str],
    ewm_span: int = 60) -> Dict[str, pd.DataFrame]: """ Compute EWM volatility based on returns. """ for instrument in instruments: returns = market_data[instrument]['Returns'] market_data[instrument]['EWM_Volatility'] = returns.ewm(span=ewm_span).std() * np.sqrt(252) return market_data #@timer def get_ewm_volatility(self,
    instrument: str,
    date: pd.Timestamp) -> dict:
```

Compute volatility based on returns.



## Class: UnitTests




### **Method: run_unit_test**

```python
def run_unit_test(
    unit_test: UnitTests) -> dict:
```





