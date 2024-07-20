# Module Information

**Description:**
Backtesting Framework for Trading Strategies
	
	RiskManagment - Class for managing risk in trading strategies.
	
	Functions:
		- manage_portfolio_risk: Perform portfolio-level risk management and diversification analysis.
		- manage_instrument_risk: Apply risk management rules to the given orders based on portfolio-level risk and configuration settings.
		- check_risk_limits: Checks whether a given order for an instrument complies with risk limits.
		- calculate_portfolio_risk: Calculate the portfolio-level risk metric based on the proposed orders.
		- calculate_instrument_volatility: Calculate the volatility of an instrument.
		- calculate_portfolio_volatility: Calculate the portfolio-level volatility based on instrument volatilities.
		- get_historical_returns: Retrieve historical returns for the specified instrument.

**Author:** jpolec

**Date:** 27-02-2024 and 01-04-2024

## Class: RiskManagement




### **Method: __init__**

```python
def __init__(
    self,
    config: Dict[str, Any]) -> dict:
```

Initialize the RiskManagement with the specified configuration.


**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `config` | `Dict[str, Any]` | Configuration options for the RiskManagement.





### **Method: load_risk_params**

```python
def load_risk_params(
    self,
    config: Dict[str, Any]) -> pd.DataFrame: """ Create DataFrame from nested dictionaries with correct indices and handling Args: config (Dict[str, Any]) -> dict:
```

Create DataFrame from nested dictionaries with correct indices and handling


**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `config` | `Dict[str, Any]` | The configuration dictionary with risk parameters.





### **Method: set_portfolio**

```python
def set_portfolio(
    self,
    portfolio: PortfolioOptimizer) -> dict:
```

Register the PortfolioOptimizer instance for the risk management calculations.


**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `portfolio` | `PortfolioOptimizer` | The PortfolioOptimizer instance.





### **Method: set_pnl_tracker**

```python
def set_pnl_tracker(
    self,
    pnl_tracker: ProfitLossTracker) -> dict:
```

Register the ProfitLossTracker instance for the risk management calculations.add()


**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `pnl_tracker` | `ProfitLossTracker` | The ProfitLossTracker instance.

**Returns:**

| Type | Description |
|------|-------------|
| `None` | None





### **Method: assess_risk_management**

```python
def assess_risk_management(
    self,
    market_regime: str,
    current_date: pd.Timestamp) -> dict:
```

Assess the risk management strategies based on the identified market regime and current date.


**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `market_regime` | `str` | The identified market regime ('bull', 'bear', or 'sideways').
| `current_date` | `pd.Timestamp` | The current date for which to adapt the risk management strategies.





### **Method: calculate_new_holding_size**

```python
def calculate_new_holding_size(
    self,
    strategy: str,
    instrument: str,
    signal: int,
    market_data: pd.DataFrame,
    current_market_regime: str,
    ) -> dict:
```

Calculate new holding size for a given instrument and strategy based on risk management rules.

    

    Explanation:

1. risk per trade - calculate the risk per trade based on the account size and the risk percentage.

2. instrument volatility - calculate the instrument volatility based on the ATR value.

3. position size - calculate the position size based on the risk per trade and the instrument volatility.

4. position change - check if the position change is below the inertia threshold.

5. max quantity - calculate the maximum quantity based on the available cash.

6. target position size - adjust the position size based on the signal and available cash/quantity.


**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `strategy` | `str` | The strategy name.
| `instrument` | `str` | The instrument symbol.
| `signal` | `int` | The signal for the instrument (1 for buy, -1 for sell).
| `market_data` | `pd.DataFrame` | The historical market data for the instrument.
| `current_market_regime` | `str` | The current market regime.
| `` | `` | 

**Returns:**

| Type | Description |
|------|-------------|
| `float` | The calculated position size.





### **Method: adjust_transactions_with_risk_profiles**

```python
def adjust_transactions_with_risk_profiles(
    self,
    daily_transactions_dict,
    market_data,
    current_market_regime) -> dict:
```

Optimize the transactions based on the risk management rules and market regime.

    

    It is checking:

1. Stop-loss level (stop_loss_level) if the potential loss exceeds the stop-loss level.

    It works both for 'buy' and 'sell' orders by adjusting the order quantity.

2. Volatility scaling (volatility_scaling) to adjust the order quantity based on the instrument volatility.

3. Leverage ratio (leverage_ratio) to apply leverage to the order quantity.

4. Maximum positions (max_positions) to limit the number of positions in the portfolio.

5. Risk percentage (risk_percentage) to limit the risk per trade based on the account size.

6. Maximum drawdown (max_drawdown) to limit the drawdown based on the new portfolio value.

7. Maximum risk percentage (max_risk_percentage) to limit the risk based on the portfolio value.

8. Liquidity risk (max_liquidity_risk) to limit the order quantity based on the average volume.

9. Sector exposure (max_sector_exposure) to limit the sector exposure based on the portfolio value.


**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `daily_transactions_dict` | `Dict[str, List[Dict[str, Any]]]` | A dictionary containing lists of transactions, grouped by strategy.
| `market_data` | `Dict[str, pd.DataFrame]` | The market data for each instrument.
| `current_market_regime` | `str` | The current market regime.

**Returns:**

| Type | Description |
|------|-------------|
| `Dict[str, List[Dict[str, Any]]]` | A dictionary containing the adjusted lists of transactions, grouped by strategy.





### **Method: calculate_instrument_volatility**

```python
def calculate_instrument_volatility(
    self,
    instrument: str,
    market_data: pd.DataFrame) -> dict:
```

Calculate the volatility of an instrument based on historical data.


**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `instrument` | `str` | The instrument symbol.
| `market_data` | `pd.DataFrame` | The market data for the instrument.

**Returns:**

| Type | Description |
|------|-------------|
| `float` | The calculated instrument volatility.





### **Method: calculate_potential_loss**

```python
def calculate_potential_loss(
    self,
    instrument: str,
    quantity: float,
    instrument_data: pd.DataFrame,
    current_market_regime: str) -> dict:
```

Calculate the potential loss for a given instrument and quantity based on the market data.


**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `instrument` | `str` | The instrument symbol.
| `quantity` | `float` | The order quantity.
| `instrument_data` | `pd.DataFrame` | The market data for the instrument.
| `current_market_regime` | `str` | The current market regime.

**Returns:**

| Type | Description |
|------|-------------|
| `float` | The potential loss.





### **Method: calculate_new_drawdown**

```python
def calculate_new_drawdown(
    self,
    instrument: str,
    quantity: float,
    market_data: Dict[str, pd.DataFrame]) -> dict:
```

Calculate the new drawdown for a given instrument and quantity based on the market data.


**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `instrument` | `str` | The instrument symbol.
| `quantity` | `float` | The order quantity.
| `market_data` | `Dict[str, pd.DataFrame]` | The market data for each instrument.

**Returns:**

| Type | Description |
|------|-------------|
| `float` | The new drawdown.





### **Method: calculate_liquidity_risk**

```python
def calculate_liquidity_risk(
    self,
    instrument: str,
    quantity: float,
    market_data: Dict[str, pd.DataFrame]) -> dict:
```

Calculate the liquidity risk for a given instrument and order quantity.


**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `instrument` | `str` | The instrument symbol.
| `quantity` | `float` | The order quantity.
| `market_data` | `Dict[str, pd.DataFrame]` | The market data for each instrument.

**Returns:**

| Type | Description |
|------|-------------|
| `float` | The liquidity risk.





### **Method: calculate_sector_exposure**

```python
def calculate_sector_exposure(
    self,
    instrument: str,
    quantity: float,
    market_data: Dict[str, pd.DataFrame]) -> dict:
```

Calculate the sector exposure for a given instrument and order quantity.


**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `instrument` | `str` | The instrument symbol.
| `quantity` | `float` | The order quantity.
| `market_data` | `Dict[str, pd.DataFrame]` | The market data for each instrument.

**Returns:**

| Type | Description |
|------|-------------|
| `float` | The sector exposure as a percentage of the portfolio value.





### **Method: calculate_portfolio_risk**

```python
def calculate_portfolio_risk(
    self,
    market_data: Dict[str, pd.DataFrame]) -> dict:
```

Calculate the portfolio risk based on the current positions and market data.


**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `market_data` | `Dict[str, pd.DataFrame]` | The market data for each instrument.

**Returns:**

| Type | Description |
|------|-------------|
| `float` | The calculated portfolio risk.





### **Method: check_portfolio_risk**

```python
def check_portfolio_risk(
    self,
    market_data: Dict[str, pd.DataFrame]) -> dict:
```

Check if the portfolio risk exceeds the maximum allowed risk.


**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `market_data` | `Dict[str, pd.DataFrame]` | The market data for each instrument.

**Returns:**

| Type | Description |
|------|-------------|
| `bool` | True if the portfolio risk exceeds the maximum allowed risk, False otherwise.





### **Method: calculate_pnl**

```python
def calculate_pnl(
    self,
    market_data: Dict[str, pd.DataFrame]) -> dict:
```

Calculate the profit and loss (PnL) of the portfolio.


**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `market_data` | `Dict[str, pd.DataFrame]` | The market data for each instrument.





### **Method: calculate_kelly_criterion_position_size**

```python
def calculate_kelly_criterion_position_size(
    self,
    win_probability: float,
    win_loss_ratio: float) -> dict:
```

Calculate the optimal position size using the Kelly criterion.


**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `win_probability` | `float` | The probability of a winning trade.
| `win_loss_ratio` | `float` | The ratio of average win to average loss.

**Returns:**

| Type | Description |
|------|-------------|
| `float` | The optimal position size based on the Kelly criterion.





### **Method: update_portfolio_metrics**

```python
def update_portfolio_metrics(
    self,
    market_data: Dict[str, pd.DataFrame]) -> dict:
```

Update the portfolio metrics based on the current market data.


**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `market_data` | `Dict[str, pd.DataFrame]` | The market data for each instrument.





### **Method: manage_risk**

```python
def manage_risk(
    self,
    orders: List[Dict[str, Any]],
    market_data: Dict[str, pd.DataFrame]) -> List[Dict[str, Any]] -> List[Dict[str, Any]]: """ Manage the risk of the portfolio based on the orders and market data. Args: orders (List[Dict[str, Any]]) -> dict:
```

Manage the risk of the portfolio based on the orders and market data.


**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `orders` | `List[Dict[str, Any]]` | The list of orders.
| `market_data` | `Dict[str, pd.DataFrame]` | The market data for each instrument.

**Returns:**

| Type | Description |
|------|-------------|
| `List[Dict[str, Any]]` | The updated list of orders after risk management.





### **Method: calculate_order_risk**

```python
def calculate_order_risk(
    self,
    instrument: str,
    quantity: float,
    market_data: Dict[str, pd.DataFrame]) -> dict:
```

Calculate the risk of an order.


**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `instrument` | `str` | The instrument symbol.
| `quantity` | `float` | The order quantity.
| `market_data` | `Dict[str, pd.DataFrame]` | The market data for each instrument.

**Returns:**

| Type | Description |
|------|-------------|
| `float` | The calculated order risk.





### **Method: calculate_value_at_risk**

```python
def calculate_value_at_risk(
    self,
    instrument_data: pd.DataFrame,
    confidence_level: float = 0.95,
    lookback_period: int = 252) -> dict:
```

Calculate the Value at Risk (VaR) for the given instrument data.


**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `instrument_data` | `pd.DataFrame` | Historical price data for the instrument.
| `confidence_level` | `float` | The confidence level for VaR calculation (default: 0.95).
| `lookback_period` | `int` | The number of historical periods to consider for VaR calculation (default: 252).

**Returns:**

| Type | Description |
|------|-------------|
| `float` | The calculated Value at Risk (VaR).





### **Method: calculate_expected_shortfall**

```python
def calculate_expected_shortfall(
    self,
    instrument_data: pd.DataFrame,
    confidence_level: float = 0.95,
    lookback_period: int = 252) -> dict:
```

Calculate the Expected Shortfall (ES) for the given instrument data.


**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `instrument_data` | `pd.DataFrame` | Historical price data for the instrument.
| `confidence_level` | `float` | The confidence level for ES calculation (default: 0.95).
| `lookback_period` | `int` | The number of historical periods to consider for ES calculation (default: 252).

**Returns:**

| Type | Description |
|------|-------------|
| `float` | The calculated Expected Shortfall (ES).


## Class: UnitTests




### **Method: run_unit_test**

```python
def run_unit_test(
    unit_test: UnitTests) -> dict:
```





