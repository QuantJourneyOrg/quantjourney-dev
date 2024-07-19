# Module Information

**Description:**
Data Connector class for QuantJourney Framework

This class is designed to facilitate the acquisition and management of financial market data 
from various external sources. It dynamically initializes data sources (or "connectors") and 
asset types based on configuration, making it highly adaptable for quantitative analysis 
in hedge fund applications.

Features:
- Dynamic data source initialization based on environment variables and configuration files.
- Flexible asset class access through a unified interface, allowing for easy extension.
- Robust error handling to ensure reliability in data fetching and processing.

**Author:** jpolec

**Date:** 27-02-2024 and 18-03-2024

## Class: DataConnector:()

### **Method: load_configuration**
```python
def load_configuration(
			config_path
		) -> None
```
Loads configuration from a JSON file.
**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `config_path` | `None` | str, The path to the configuration file. |

**Returns:**

| Type | Description |
|------|--------------|
| `None` | None |

### **Method: initialize_connectors**
```python
def initialize_connectors() -> Dict[str, object]
```
Dynamically initializes connectors based on the loaded configuration.

**Returns:**

| Type | Description |
|------|--------------|
| `Dict[str, object]` | A dictionary of initialized connectors. |

### **Method: get_asset_instance**
```python
def get_asset_instance(
			asset_type
		) -> object
```
Dynamically gets or creates an instance of the requested asset type.
**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `asset_type` | `None` | The type of asset to get or create. |

**Returns:**

| Type | Description |
|------|--------------|
| `object` | The asset instance. |

### **Method: is_shutting_down**
```python
def is_shutting_down() -> bool
```
Attempt to infer if the interpreter is shutting down by checking
if dummy threading operations fail, indicating cleanup has started.
This is a heuristic and might not be 100% reliable across all Python versions.

**Returns:**

| Type | Description |
|------|--------------|
| `bool` | True if the interpreter is shutting down, False otherwise. |

### **Method: close**
```python
def close() -> None
```
Ensure all connector resources are properly closed.

**Returns:**

| Type | Description |
|------|--------------|
| `None` | None |

