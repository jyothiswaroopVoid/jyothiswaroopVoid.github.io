---
layout: post
title: "Egg Price Viz"
date: 2025-03-06
description: "An interactive visualization tracking caged egg prices over time."
tags: [Python, Pandas, NumPy, Data Viz, Plotly]
gif: /assets/img/egg_price.gif
embed: /assets/egg_prices_caged.html
permalink: /projects/egg-price-vizz/
---

## Overview

Recently, in both 2024 and 2022 egg prices across the country soared. Largely, due to the outbreak of the Avian Influenza commonly known as the "bird flu" in farms across the country. The research group I'm currently working with wanted to study the affect of the flu as well as regional disparities, supply shocks, and the growing premium consumers pay for cage-free eggs. So I was tasked with unloading, processing and performing an elementary visualization of the data.

## The Data
The underlying data comes from the Nielsen Retail Measurement Services (RMS) scanner dataset, a commercial dataset covering weekly point-of-sale transactions across thousands of U.S. grocery stores. Each observation records the number of units sold, the price charged, and a product UPC identifier, which can be linked to detailed product attributes.

For research purposes the egg product data was filtered by:
- Category: Chicken eggs only
- Size: Standard dozen (12 COUNT)
- Color: White eggs only
- Excluded: Organic eggs (USDA Organic Seal or any organic claim), pasture-raised eggs
- Split by: Cage-free vs. conventional (caged)

## How I Built It
- **Data collection**

    The raw movement files — one per year (2021–2024) — were pulled from the Nielsen RMS archive. Each annual file contains tens of millions of transaction rows. Product hierarchy, description, and attribute files were loaded alongside and merged by UPC to build a detailed table.

- **Processing** 

    The processing pipeline is built in Python using pandas and parallelized with joblib. Because egg movement files more than 20 million rows per year, the data is sliced into chunks and each chunk is processed in parallel before results are concatenated.

    Within each chunk, the pipeline:
    - Merges product characteristics onto movement rows to bring in size, segment, and cage-free status
    - Merges store metadata to attach county FIPS codes and apply validity filters
    - Computes quantity (units × size_unit × multi) and unit price (price / (prmult × size_unit × multi)) for each transaction
    - Drops rows with invalid dates, missing fields, or stores that fail quality checks
    - Aggregates to the county × week × cage-free level, summing quantity and revenue, and counting distinct stores

- **Visualization**

    The maps are built with Plotly Express choropleth, using the publicly hosted GeoJSON file for U.S. county boundaries. Each county is colored by its average weekly egg price, and an animation slider steps through each week in the dataset.

    The color scale is clipped to the 2nd–98th percentile of prices to prevent outliers from washing out regional variation. Both maps are exported as self-contained HTML files for embedding.

- **Challenges**

    I've done aggregation of Nielsen IQ data of different products in the past but they were usually store > upc > year, retailer > quarter > dma, etc. So the processing & aggregation wasn't too different. 

    But a unique requirement was computing n_stores — the number of distinct stores observed per county per week. This sounds simple, but parallelization gets in the way becase when you split the movemnet data into chunks, a single store's transactions can land in multiple chunks 

    When you split the data into chunks, a single store's transactions can land in multiple chunks If you simply sum a nunique() count across chunks, like I did at first, you'll overcount: a store appearing in both chunk 1 and chunk 2 would be counted twice in the final aggregation.

    What I did is to collect store identifiers as frozensets rather than counts within each chunk, then take the union of those sets across chunks before measuring their size.

## Tools Used
- Python — core language
- Pandas — data cleaning, merging, and aggregation
- NumPy — unit conversion and numeric operations
- joblib — parallel chunk processing
- Plotly Express — animated choropleth maps
- Nielsen RMS — retail scanner data source