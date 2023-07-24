# CTM Participation Analysis

This repository contains an analysis of meetup participation events.

## Description
The data being analyzed consists of meetup events and weather data for the dates of those events. The `event_data.json` file contains meetup event data, which was manually scraped using the `fetch_events.js` script from the meetup past events page. Weather data for each event date was then fetched individually to complement the event data.

## Published Graph
https://sevpfl.github.io/ctm_participation/plots/event_analysis_plot.html

## Getting Started

### Prerequisites
* Python 3.7 or higher
* An environment manager such as Conda or Pip

### Installation

#### Option 1: Using Pip
To install the necessary Python packages using pip, run the following command in your terminal:

```bash
pip install -r requirements.txt
```

#### Option 2: Using Conda
To create a new Conda environment using the provided `environment.txt` file, use the following commands:

```bash
conda create --name <env> --file environment.txt
```
Replace `<env>` with the name of your new environment.

### Usage
Before starting the Jupyter notebook, ensure you've activated your environment:

```bash
conda activate <env>
```
Replace `<env>` with the name of your environment.

You can then run the Jupyter notebook with the following command:

```bash
jupyter notebook
```

## Contributing
Contributions are welcome. Please open an issue to discuss proposed changes or open a pull request with improvements.

## License
Please see the `LICENSE` file for details.
