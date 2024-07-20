# Backtesting - How easy is it to get it wrong?

 
In today’s post you will read about:

- backtesting principles like setting benchmarks and objectives to avoid unsuitable ideas and overfitting,
- details the components of a trading strategy including filters, signals, and rules,
- how to implement and evaluate backtesting and trading strategies through code snippets.

##Design, Testing, and Optimisation of Bactestig Systems

The benefit of an accurately tested systematic strategy is trading profit. 

Many analysts and portfolio managers face numerous challenges when developing systematic trading systems.  Each part of the system must be carefully built to ensure it doesn’t lose money and stays financially stable. The process includes formulating hypothesis, then turning  trading ideas into tests, regularly checking the results, and carefully managing the risks of overfitting. A well-designed system not only helps in evaluating and refining strategies but also keeps them competitive in fast-changing markets. It needs to be quick, enabling you to test your idea within minutes. Ideally, it should not take more than 30 minutes from conception to confirmation and subsequent refinement. 

You might ask why not just use established backtesting tools like Backtrader or QuantConnect? The simple answer, as Jim Simons has previously addressed, is that using common tools often yields common results. While these platforms are suitable for basic strategies and can provide quick outcomes, they are less adept at handling more sophisticated techniques such as conditional portfolio optimizations, regime identification, advanced risk management, and the integration of machine learning. Even if you want to modify their code, it will take you more time and effort to add such capabilities that meet your requirements.

Foremost, here at QuantJourney blog, we are passionate about our educational journey to build your own modern, modular trading system and backtester framework. Learning to code as you go not only enhances your skills but also allows you to customize and directly observe the effects on your code, strategies, and ultimately, your financial returns..

##Backtesting Principles

Before diving into coding or developing trading ideas, each investor needs to reflect on some key questions related to their unique trading style and risk tolerance. These aspects vary widely among individuals and are fundamental to your approach. Here are some essential questions to consider:

- What assets do you plan to trade, and why?
- On which exchanges will you trade these assets, and why?
- Why not trade assets A, B and C in exchanges E, F and G?
- Why would your strategy work?
- What is the biggest risk associated with your strategy?
- When was last time this major risk occurred and what happened?
- What is your investment holding period, and why have you chosen this duration?
- What other things could go wrong?
- How frequently does the scenario your strategy relies on occur?
- What are your profit expectations? Why?

Taking the time to answer these questions can seem tedious, but many investors skip this step and potentially end up losing money. The more prepared you are, the lower your chances of losses and the better your prospects for profit—or at least for improving your strategy to become more profitable.

##Backtesting Framework Blocks

###Choosing a benchmark

Selecting a benchmark is crucial but often overlooked by investors. A benchmark allows you to measure your performance and provides insight into how well your strategy performs. However, it's important not to become overly fixated on the benchmark, as this can lead to excessive adjustments. Here are some options for choosing a benchmark:

- **Market Observables**: these are common benchmarks for most traders. Metrics such as $/day, %/day, $/contract, % of daily volume.
- **Archetypal Strategies**: use established strategies, like an **Moving Average Crossover (MA-cross)** for a momentum strategy, as benchmarks. Or **Moving Average Convergence Divergence (MACD)** to determine the direction and strength of market trends in a trend following.
- **Alternative Indices**: indices like **S&P 500 Index**, **NASDAQ Composite Index**, or more sophisticated as **Vanguard Total Stock Market Index (VTSMX)** can serve as benchmarks, especially relevant for strategies similar to those indexed, when you trade large caps (more on that below)
- **Custom Tracking Portfolios**: create a bespoke benchmark by assembling a tracking portfolio that mirrors a specific strategy archetype, such as a capitalization-weighted index which uses market cap to weight securities and rebalances periodically according to the index rules.

Good benchmarks provide insight into what drives your strategy returns. Choosing more than one benchmark - which is quite common - can also help prevent overfitting by avoiding an exclusive focus on a single benchmark.

I have implemented simple benchmark parameter in config file for backtesting framework as:

```python
"benchmark": "SPY" 	
```

which further can be expanded to have multiple benchmarks, or more complex ones.

###Choosing an Objective
When creating a strategy, it's crucial to start with a well-defined objective.

Your business objective should specify the expected returns on your capital, tail risk parameters, the level of leverage you intend to use, and your limits on potential drawdowns.

For example, leverage limits are often strictly defined by your broker, and these directly affect your allowable drawdowns: using 10:1 leverage implies a strict 10% drawdown limit, while 4:1 leverage equates to a 25% drawdown limit. You should also establish clear return objectives, as a strategy may not be worthwhile if it cannot meet these targets.

Once you've defined these objectives, you need to formulate them in a way that allows for easy programmatic evaluation of your strategy.

The most commonly used objective of this type is the Sharpe Ratio (SR) which is most often calculated as mean return over volatility.  There are also many other modified Sharpe-style ratios.

- Information Ratio: annualised return over annualised risk,
- Profit factor: gross profits divided by gross losses,
- Sortino Ratio: similar to SR, but focuses only on downside volatility, calculating the excess return over the risk-free rate relative to the downside risk,
- Calmar Ratio: annualized return divided by the maximum drawdown,
- Return over expected tail loss: returns relative to the tail risk, focusing on potential losses in extreme market condition.

Setting benchmarks and objectives early helps discard unsuitable ideas. Without understanding the strategy's context, you risk overfitting and poor analysis.

###Trading Strategy (Filters, Indicators, Signals, Rules)

A trading strategy or investment approach is more than just a testable hypothesis. After creating and confirming a hypothesis, you need to specify the strategy. I like the approach which formaizes the strategy structure into: *filters →* *indicators → signals*, → and *rules*.

###Filters

Filters help to select the instruments to trade. They may be part of the formulated hypothesis, or they may be market characteristics that allow the rest of the strategy to trade better. For instance, in fundamental equity investing, some strategies consist solely of filters.

In our code we use term *eligibility* to address filters, which is set in configuration file ‘default_startegy.json’ as:

```json
"eligibility_criteria": {
							"active_threshold": 0.05,
							"volatility_threshold": 0.0002,
							"liquidity_threshold": 1000000,
							"excluded_sectors": ["Banking", "Technology"]
```

which allows to filter equities based on active threshold, volatility, and liquidity. If necessary, you can also exclude certain sectors.

You can also specify the instruments you want to test against your strategy in the same config file or by stating it in the code, as shown below:

```py linenums="1", title="run.py"
  	dc = DataConnector()
	output = await dc.indices.async_fetch_russell_1000_index()
	tickers = output['Ticker']

	my_strategy = BaseStrategy(
								config_file_path="qlib/backtesting/strategies/default_strategy.json",
								instruments=tickers,
								trading_range={'start': '2010-01-01', 'end': '2023-12-31'},
								initial_capital=20000,
								backtest_name="my_strategy"
	)
```

The backtester code checks against them as follows:

```python
def preprocess_eligibility(self) -> None:
		"""
		Determine the eligibility of instruments based on specific criteria defined in the strategy parameters,
		including checks for volatility, liquidity, active status, base close price, and future returns.
		
		Args:
			None
		
		Returns:
			dict: A dictionary where keys are instrument names, and values are booleans indicating eligibility.
		"""
		eligibility_criteria = self.config.get("eligibility_criteria", {})
		
		for instrument in self.instruments:
			eligible = True
	
			# Volatility check (last 5 days)
			volatility_threshold = eligibility_criteria.get("volatility_threshold", 0.00001)
			volatility_mean = self.market_data[instrument]['Volatility'].rolling(window=5).mean()
			volatility_eligible = volatility_mean > volatility_threshold

			# Liquidity check
			liquidity_threshold = eligibility_criteria.get("liquidity_threshold", 1000000)
			liquidity_eligible = self.market_data[instrument]['Liquidity'].mean() > liquidity_threshold

			# Additional checks
			active_eligible = self.market_data[instrument]['Active'].astype("bool")
			positive_close_eligible = (self.market_data[instrument]['Close'] > 0).astype("bool")

			max_return_threshold = 0.20
			last_return_eligible = (self.market_data[instrument]['Returns'] < max_return_threshold).astype("bool")

			# Combine all eligibility checks
			self.market_data[instrument]['Eligible'] = (
				volatility_eligible
				& liquidity_eligible
				& active_eligible
				& positive_close_eligible
				& last_return_eligible
			)
```

In advanced scenarios, we may expand or shrink the investible universe based on additional specific criteria / filters. These can encompass financial metrics such as P/E ratios and dividend yields or market behaviors like volatility and trading volume, or sector-specific data. By applying such filters, we can focus on assets that align with our specific investment criteria or risk profiles, effectively tailoring our approach to our strategy and risk tolerance. For instance, some use Lo's Variance Ratio to detect market patterns, adjusting their strategies to exploit trends or guard against reversals. This dynamic adjustment helps optimize returns and manage risks. 

Currently, this feature is not implemented. However, we do have a market regime identification system in place that adjusts daily transactions. This adjustment is made using a benchmark with a straightforward yet effective approach. Refer to the following configuration:

```python
"market_regime_params": {
							"indicators": ["moving_average_slope", "breadth_thrust"],
							"moving_average_slope": 20,
							"breadth_thrust": 0.5
		},
```

and function in code:

```python
def preprocess_market_regime(self) -> None:
		"""
		Preprocess the market regime based on the historical market data.
		"""
		logger.info("Preprocessing market regime.")
		
		benchmark = self.config['benchmark']
		market_regime_data = self.data_manager.get_market_data([benchmark], self.trading_range)
		
		if market_regime_data is None:
			logger.error("Error fetching benchmark data.")
			raise ValueError("Error fetching benchmark data.")
		
		# Passing config to market regime class
		market_regime_config = self.config.get('market_regime_params', {})
		
		# Passing config to market regime class
		self.market_regime = MarketRegime.create_with_data(market_regime_config, market_regime_data, benchmark)
		
		# Calculate the market regime for each date in the trading range
		self.market_regime_data = self.market_regime.identify_regime()
		
		# Convert the market regime data to the desired index labels
		self.market_regime_data = self.market_regime_data.replace({0: 'sideways', 1: 'bull', 2: 'bear'})

		# # Get the trading dates as a timezone-aware DatetimeIndex and convert to UTC
		trading_dates = pd.DatetimeIndex(self.data_manager.get_trading_dates(self.trading_range))
		trading_dates_utc = trading_dates.tz_localize('UTC')
  
		# Localize the market regime data to the 'UTC' timezone
		self.market_regime_data = self.market_regime_data.tz_localize('UTC')

		# Resample market_regime_data to match the frequency of trading dates
		self.market_regime_data = self.market_regime_data.reindex(trading_dates_utc, method='bfill')

		logger.info("Market regime preprocessing completed.")
```

and use in the loop:

```python
# Get the market regime for the current date from the market_regime_series
current_market_regime = self.market_regime_data.loc[current_date]

# Generate daily transactions for the current trading day based on the generated signals and current market regime
daily_transactions_dict = self.generate_daily_transactions(current_date, current_market_regime)
   
# Adjust daily transactions based on the risk profiles
daily_transactions_adjusted_dict = self.risk_management.adjust_transactions_with_risk_profiles(daily_transactions_dict, self.market_data, current_market_regime)
```

###Indicators

Indicators are quantitative values derived from market data. Examples of indicators include moving averages, RSI, MACD, volatility bands, channels, factor models, and theoretical pricing models. They ***are calculated in advance on market data*** (or on other indicators). Indicators have no knowledge of current positions or trades.

A common risk when defining your indicators is confusing the indicator with the strategy. The indicator is a model that describes some aspect of the market or a theoretical price. It is not a strategy on its own. A strategy requires interactions with its other components to be fully specified.

In the backtesting framework, you can use indicators from fundamental analysis - calculated as key ratios based on companies' financial statements (income statement, balance sheet, and profit and loss) - as well as technical indicators.  Just to name few:

```python
Functions:
		- RSI
		- SMA
		- EMA
		- BB
		- ATR
		- SAR
		- MACD
		- STOCH
		- ADX
		- CCI
		- WILLR
		- OBV
		- ROC
		- TRIX
		- KELTNER_CHANNELS
		- DONCHIAN_CHANNELS
		- AROON
		- STDEV
		- ULTIMATE_OSCILLATOR
		- ADXR
		- CMO
		- MFI
		- PRICE_ROC
```

and for fundamental ones:

```python
gross_profit_margin
operating_profit_margin
net_profit_margin
return_on_assets
return_on_equity
debt_to_equity
current_ratio
quick_ratio
cash_flow_to_debt
price_to_earnings
price_to_book
price_to_sales
enterprise_value
ev_to_ebitda
ev_to_sales
peg_ratio
dividend_yield
dividend_payout_ratio
asset_turnover_ratio
inventory_turnover_ratio
days_sales_outstanding
days_inventory_outstanding
days_payables_outstanding
cash_conversion_cycle
earnings_per_share
book_value_per_share
free_cash_flow_per_share
cash_flow_per_share
operating_cash_flow_ratio
free_cash_flow_to_equity
cash_flow_to_debt_ratio
price_to_cash_flow_ratio
```

###Signals

In our backtesting framework we calculate indicators in SignalGeneration class (and functions as preprocess_signals) - that’s because we use only those indicators, which are used for our strategy defined in the config file with signals.

Signals describe the interaction between filters, market data, and indicators. Signal processes describe the desire for an action, but the strategy may choose not to act or may not be actionable at the time. They include ‘classic’ things like crossovers and thresholds, as well as more complicated interactions between pricing models, other indicators, and other signal processes. It is our experience that signals may often interact with other signals. The final signal is a composite of multiple things. The combination of intermediate signals will increase the likelihood of actually placing or modifying orders based on the final signal.

First see the our config for signals:

```json
"signal_generator_params": {
						"buy_signals": {
									"SMA_10_50_crossover": "SMA(10) > SMA(50)",
									"RSI_oversold": "RSI(14) < 30",
									"MACD_signal": "MACD(12, 26, 9) > 0"
						},
						"sell_signals": {
									"SMA_10_50_reverse_crossover": "SMA(10) < SMA(50)",
									"RSI_overbought": "RSI(14) > 70"
						}
		},
```

Please note that like indicators, all the signals in our backtesting framework are calculated in advance on the market data:

```python
def preprocess_signals(self) -> None:
		"""
		Preprocess the technical indicators for each instrument based on the historical market data and the configuration.
	
		Args:
			instruments (list): A list of instruments to preprocess signals for.
			market_data (dict): A dictionary containing historical market data per instrument.
	
		Returns:
			None
		"""
		logger.info("Preprocessing signals.")
  
		signals_config = self.config.get('signal_generator_params', {})
		buy_signals = signals_config.get('buy_signals', {})
		sell_signals = signals_config.get('sell_signals', {})
		all_signals = {**buy_signals, **sell_signals}

		# List of indicators to compute
		unique_signals = set() 
  
		for signal_name, condition in all_signals.items():
			parts = condition.replace(", ", ",").split()  # Replace avoids splitting function parameters    
			for part in parts:
				if '(' in part and ')' in part:
					start_idx = part.find('(')
					end_idx = part.find(')')
					
					indicator_name = part[:start_idx]
					params_str = part[start_idx+1:end_idx]
	 
					try:
						params = tuple(int(p.strip()) for p in params_str.split(','))
					except ValueError:
						# Handle the case where conversion fails, indicating non-integer parameters
						# This block can be adjusted based on the specific needs or expected parameter types
						params = tuple(p.strip() for p in params_str.split(','))

					unique_signals.add((indicator_name, len(params), params))
				else:
					indicator_name = ''.join(filter(str.isalnum, part.split()[0]))  # Removing any non-alphanumeric characters
					if indicator_name.isalpha():  # Check if the part is purely alphabetic
						unique_signals.add((indicator_name, 0, ()))
	  
		# Convert set of unique indicators back to a list of lists for the output
		unique_signals_list = [list(item) for item in unique_signals]

		for instrument in self.instruments:
			market_data = self.market_data[instrument]
			not_recognized_or_error_indicators = self.signal_generator.process_technical_indicators(instrument, market_data, unique_signals_list)
			if not_recognized_or_error_indicators:
				logger.error(f"Error computing indicators: {not_recognized_or_error_indicators}")
				raise ValueError(f"Error computing indicators: {not_recognized_or_error_indicators}")
   
		logger.info("Signal preprocessing completed.")
```

What you can see, they are calculated prior simulation in a special class called SignalGenerator (additional module) with functions to evaluate signal per data, e.g. SMA(20), SMA(50) to calculate simple moving average over 20 and 50 days, and also give True/False if we asking ‘SMA(20) > SMA(50)’.

```python
def evaluate_signal(self, market_data, condition):
		"""
		Evaluate a signal condition by replacing function calls with their computed values.

		Args:
			market_data (pd.DataFrame): A DataFrame containing historical market data.
			condition (str): The signal condition to evaluate.

		Returns:
			pd.Series: A Series containing the evaluated signal values:
				1 for True (buy/sell signal), 0 for False (no signal).
		"""
		# Split the condition into parts
		parts = condition.replace(", ", ",").split()

		# Replace function calls with their computed values
		for i, part in enumerate(parts):
			if '(' in part and ')' in part:
				start_idx = part.find('(')
				end_idx = part.find(')')
	
				indicator_name = part[:start_idx]
				params_str = part[start_idx+1:end_idx]
	
				try:
					params = tuple(int(p.strip()) for p in params_str.split(','))

				except ValueError:
					params = tuple(p.strip() for p in params_str.split(','))
	   
				# Format parameters correctly for single-parameter scenarios without trailing commas
				params_formatted = '_'.join(map(str, params))
				#params_formatted = ','.join(map(str, params)).rstrip(',')

				# If there are parameters, join them with an underscore; otherwise, just use the indicator name
				column_name = f"{indicator_name}_{params_formatted}" if params_formatted else indicator_name
				
				# Check and replace in your condition
				if column_name in market_data.columns:
					parts[i] = f"market_data['{column_name}']"
				else:
					print(market_data.columns)
					raise KeyError(f"Column '{column_name}' not found in market_data.")

		# Join the modified parts back into the condition string
		modified_condition = ' '.join(parts)
  
		try:
			# Evaluate the modified condition
			signal_values = eval(modified_condition)
			
			# Convert the boolean signal values to integers (1 for True, 0 for False)
			signal_values = signal_values.astype(int)

		except (KeyError, TypeError, ValueError):
			# Handle errors related to missing or invalid data
			signal_values = pd.Series(np.nan, index=market_data.index)

		return signal_values
```

###Rules

Finally the rules.The two minimum requirements for a trading strategy are a rule to enter the market and a rule to exit the market. Typically, a strategy consists of buy and sell conditions that "mirror" each other. 

In the default configuration file, I've defined four strategies to run in parallel. The goal is to establish rules, which serve as basic guidelines for entering and exiting the market:

```json
"rules_params": {
							"simple_crossover": {
								"description": "A simple crossover",
								"buy": "SMA_10_50_crossover",
								"sell": "SMA_10_50_reverse_crossover"
							},
							"trend_following": {
								"description": "A trend-following rule",
								"buy": "SMA_10_50_crossover AND RSI_oversold",
								"sell": "SMA_10_50_reverse_crossover OR RSI_overbought"
							},
							"momentum": {
										"description": "A momentum-based rule",
										"buy": "MACD_signal",
										"sell": "RSI_overbought"
							},
							"mean_reversion": {
										"description": "A mean-reversion rule",
										"buy": "RSI_oversold",
										"sell": "RSI_overbought"
							}
		},
```

As we see, the rules, in both research/backtesting and in production, are what take input from market data, indicators, and signals, and actually take action. Entry, Exits, Risk, Profit Taking, and Portfolio Rebalancing are all rule processes. Rules are path dependent, meaning that they are aware of the current market state, the current portfolio, all working orders, and any other data available at the time the rule is being evaluated. No action is instantaneous, so rules also have a cost in time.

***Hypothesis Driven Development***

Creating a strategy is costly in terms of time, which is needed for research, and money for implementation into a live trading environment. To maximize return on this investment, we adopt a hypothesis-driven approach. This enables us to quickly confirm ideas, reject failures with minimal cost, and avoid many overfitting risks.

Each component of the strategy, including filters, indicators, signals, and various types of rules, represents different parts of the strategy's hypothesis and business objectives. Our goal at every stage should be to ensure that every component of the strategy is effective: adding value, improving predictions, validating the hypothesis, etc., before proceeding to the next component.

To understand the results of a trading model and hypothesis I like to follow the even steps model:

---

1. Formulate the trading strategy.
2. Write the rules in a definitive form.
3. Test the trading strategy.
4. Optimize the trading strategy.
5. Trade the strategy.
6. Monitor trading performance and compare it to test performance.
7. Improve and refine the trading strategy.

Each of these steps depends on the success of the preceding one. 

To comprehend the outcomes of a trading model and hypothesis, I prefer using the seven-step model:

---

1. Formulate the trading strategy and benchmark.
2. Define the filters, signals and rules explicitly.
3. Test the trading strategy against benchmark.
4. Optimise the trading strategy.
5. Implement the strategy through trades.
6. Monitor trading performance and compare it with the test performance.
7. Enhance and refine the trading strategy.

The success of each step is contingent upon the success of the previous one.

During the creation and testing of hypotheses, most strategy ideas are rejected. Many observations about market conditions lack the structure needed to form a testable hypothesis. Even if these ideas might be correct, they cannot be used to create a quantitative strategy with confidence unless they can be quantified into a provable or disprovable conjecture. This process protects against pursuing fundamentally questionable or erroneous ideas and is a valuable use of time. The quicker an untestable idea is dismissed for more verifiable ones, the better.

**A bit more on elements of further roadmap and studies:**

You might have noticed the section of the code that evaluates indicators. This can be quite challenging without a defined action theory as indicators represent measurable aspects of reality, such as theoretical prices, factor impacts, series turning points, or slope. A solid understanding of an indicator's properties allows us to apply a symmetric filter to historical data, like ARMA or Kalman processes. However, these are descriptive rather than predictive, as they primarily describe past behavior. We can further refine our code by comparing the indicator with the filter using methods such as kernel methods, clustering, mean squared error, or distance measures.

Similarly, a signal is a directional prediction for a specific point in time. The timing of this signal can vary based on the parameterisation of the indicator and/or signal functions.

The same principle applies to signals per regime or region. When comparing input parameter expectations, you should see clusters of similar positive and/or negative return expectations in similar or contiguous parameter combinations.

The signals generated by the backtests can also be empirically classified. You can measure statistics like the number of entry and exit signals, the distribution of the period between entries and exits, and the degree of overlap between entry and exit signals.

This task has been started in a separate class called PerformanceReporting. However, it will need a few more days to be fully completed.

Since every signal is a prediction, we can utilize the literature on model specification and testing of predictions when analyzing signal processes. Methods range from simple ones, such as mean squared model error or kernel distance from an ideal process, to more extensive evaluation techniques like the Akaike Information Criterion (AIC), Bayesian Information Criterion (BIC), or cross-validation.

Finally we have signal decay - factors with faster decay require higher turnover, while higher turnover incurs greater transaction cost, which has to be balanced with the predictive power of the models. Some signals decay so quickly that alpha opportunity disappears within hours, minutesor even seconds. For example, a simple backtesting of the one-day reversal factor (i.e., buying stocks that have fallen the most on the previous day) seems to suggest that
short-term reversal is a great strategy. The only problem is that the factor itself can only
be computed after the market closes; therefore, the earliest time we can trade on the
signal is at the next day’s open.

That is not yet implemented, hence offers quite interesting further development.

Outliers, Z-Score

As for my own studies, I backtesting a lot of Middle-East equities, there are a lot of outliers. And the easiest way to deal with outliers is to control them. More often than not, outliers are caused by data errors or specific events that are unlikely to be repeated in the future. There is little information on outliers and they usually cause more harm than good. We could either remove them from our sample completely or impose some restrictions by winsorization.
Unlike data truncation, winsorization replaces data greater or less than certain extreme x percentiles (often set as 5%, 1%, or 0.1%) with the xth percentile values. That’s is being implemented too.

We use Z-score for data normalization as well. Our preferred method for this is through a ranking transformation, wherein we rank all stocks based on their factor scores. This ranking transformation transforms any distribution into a uniform one, effectively managing outliers into a reasonable data range. In our proprietary models, we take it a step further by applying an inverse normal transformation, ensuring our factors always follow a standard normal distribution with a mean of zero and a standard deviation of one.

Given that there's more to cover and this post is already quite lengthy, the following topics will be discussed in more detail in the next post (likely next week):

Regime analysis, rebalancing and asset allocation, the empirical nature of entry/exit rules, trader statistics, and a few biases such as look-ahead bias, survivorship bias, data mining bias, and data snooping bias.

