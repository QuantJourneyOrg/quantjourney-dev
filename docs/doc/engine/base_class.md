# Base Strategy Class for Backtesting Framework

**Date**: 27-02-2024 & 01-04-2024  

This documentation outlines the base class for all trading strategies in the Qlib framework. It provides a comprehensive suite of tools for data management, signal generation, risk management, and much more, facilitating rigorous and detailed backtesting of trading strategies.

## Base Strategy Class

The `BaseStrategy` class is an abstract base class for all trading strategies, providing shared utilities and structure.

### Constructor

Initializes the strategy with configuration and optional parameters.

| Parameter         | Type   | Description                                      | Default |
|-------------------|--------|--------------------------------------------------|---------|
| config_file_path  | str    | Path to the configuration JSON file.             | None    |
| **kwargs          | dict   | Optional keyword arguments for extra settings.   | None    |

### Key Methods

#### `strategy_load_state`

Loads the strategy's state from a file.

| Parameter | Type | Description                           |
|-----------|------|---------------------------------------|
| file_name | str  | The name of the file to load from.    |

#### `strategy_save_state`

Saves the strategy's state to a file.

| Parameter | Type | Description                         |
|-----------|------|-------------------------------------|
| file_name | str  | The name of the file to save to.    |

#### `run_simulation`

Executes the trading strategy across a defined range of trading dates.

| Parameter | Type    | Description                                  |
|-----------|---------|----------------------------------------------|
| verbose   | bool    | Prints detailed logs if set to True.         |

#### `preprocess_data`

Prepares data for the backtesting process by fetching market data, calculating returns, and more.

### Components

The strategy class integrates multiple components from the QuantJP backtesting engine:

- **DataManager**: Manages data retrieval and preprocessing.
- **SignalGenerator**: Generates trading signals based on technical indicators.
- **RiskManagement**: Manages risk and adjusts trading positions accordingly.
- **PortfolioOptimizer**: Optimizes the portfolio to achieve the best performance based on given constraints.
- **PerformanceAnalytics**: Analyzes and reports on the performance of the strategy.

### Unit Tests

| Test Case                     | Description                                               |
|-------------------------------|-----------------------------------------------------------|
| `IDENTIFY_REGIME`             | Tests the market regime identification component.         |
| `COMPUTE_INDICATORS`          | Tests the computation of technical indicators.            |
| `GENERATE_SIGNALS`            | Tests the generation of trading signals.                  |
| `PREPROCESS_STRATEGIES`       | Tests the preprocessing of strategy parameters.           |
| `PREPROCESS_MARKET_REGIME`    | Tests preprocessing of market regime data.                |
| `GENERATE_DAILY_TRANSACTIONS` | Tests the generation of daily transactions.               |
| `CALCULATE_TRANSACTION_COSTS` | Tests the calculation of transaction costs.               |
| `RUN_SIMULATION`              | Tests the complete simulation process.                    |
| `RUN_STRATEGY`                | Tests the execution of the strategy with real data.       |

## Usage

To run a unit test for identifying the market regime:

```python
unit_test = UnitTests.IDENTIFY_REGIME
run_unit_test(unit_test)
