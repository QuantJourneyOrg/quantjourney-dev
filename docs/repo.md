<div>
  <div style="text-align: left; margin-top: 10px; margin-bottom: 0px; padding-bottom: -10px;">
    <h1 class="start-heading" style="font-size: 36px; margin-bottom: 5px;">Getting Quant Journey Repository from GitHub</h1>
    <div style="font-size: 20px; color: #FF4500; margin-top: 0; margin-bottom: 20px">Access only for paid Subscribers.</div>
  </div>
</div>
In this section, we will clone the QuantJourney repository from GitHub, unpack the contents, and set up the Python environment.

## **Step 1: Cloning a Repository**

A) To clone a repository, you need to go to [https://github.com/jpolec/quantjourney](https://github.com/jpolec/quantjourney) once you have access.

Then, go to the `Code` button and uncover options on how to download the repository.
One of the recommended ways is to use GitHub Desktop, which you can download from their site. It allows for better sync-up with further repository changes.

Alternatively, you can download Git and install it on your computer from [Git SCM](https://git-scm.com/).

B) Once you have your directory for the project, e.g., `/Users/<your_name>/quantjourney` (for OSX), you may do:
```bash
cd path/to/your/folder

git clone https://github.com/jpolec/quantjourney.git
```

This downloads the repository and its entire version history.

## **Step 2: Unpacking and Setting Environment**

After cloning the repository, you might need to unpack files, or with GitHub Desktop, they will automatically be in the set directory, so you can start VSC (Visual Studio Code) or any other IDE to work with the code.

C) Setting up the repository.

You need to start with a virtual environment - in my case, I am doing it as follows:
```bash
python -m venv venv_3.12
```
from the main directory within VSC. I used to set up an environment for a specific version of Python (in my case, 3.12).

Using a virtual environment in Python projects helps manage dependencies efficiently and keeps your project organized. Always activate your virtual environment before working on your project to ensure you're using the right versions of your dependencies.

In the future, we may use Poetry or any other tool for package and dependency management in Python. This part is with pip, as this is a commonly used package manager for Python packages.

Once you set up the virtual environment, you have to activate it with:
```bash
source venv_3.12/bin/activate
```

In the main directory, you will find a file called `requirements.txt`, where all libraries needed to run QuantJourney are stored. You should install them with the command:
```bash
pip install -r requirements.txt
```

## **Step 3: Setting final configuration**

A) In order QuantJourney be able to use DB and other sources of data we have to set-up configuration file. This file by default is set in `_config` directory and is in JSON form with the name `config.json`.

It looks like:

<div style="border: 2px solid lightgrey; padding: 10px; display: inline-block; width: 60%;">
    <img src="/images/repo.png" style="width: 100%;" alt="MongoDB Download">
</div>

As you may see in the bottom there is a configuration for MongoDB which we set-up during [MongoDB installation](installation.md)

We rely on data sourced from the Internet, including both free and paid services. Free data is available from sources like YFinance. Paid data is sourced from services such as EODHistorical Data, which covers over 80 markets and includes data for equities, CFDs, REITs, and more. Another source, FinancialModelingPrep, provides data on over 15,000 stocks, ETFs, and Mutual Funds across various exchanges in the US, Europe, Canada, China, and others. Many of these services offer free tiers with limited capabilities or data coverage, but for comprehensive access, a paid subscription is often required.

You should choose data sources based on your specific requirements. Much of the research and analysis conducted by QuantJourney can be performed using the free-of-charge Yahoo Finance data. It’s up to you to determine what data you need to run your analyses effectively.

If you don't have an access to some of those sources of data, you may leave such section blank.

## **Final Step: Test!**

That's all. Your QuantJourney repository should work right now.

You may run data_manager from quantjourney/data directory.

<div style="padding: 50px">
</div>