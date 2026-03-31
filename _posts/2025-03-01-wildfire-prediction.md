---
layout: post
title: "Predicting Notable Wildfire Incidence in the USA"
date: 2025-03-01
description: "A county-month panel model predicting large wildfire incidence across the US using logistic regression and random forest."
categories: [projects]
tags: [R, Machine Learning, Random Forest, Logistic Regression, Statistics]
gif: /assets/img/STA141 Wildfire picture.gif
embed: /assets/wildfire_prediction.html
permalink: /projects/wildfire-prediction/
---

## Overview

This project develops a predictive model for the monthly incidence of notable wildfires across U.S. counties from 1992 to 2015. Using a county-month panel dataset constructed from historical wildfire records, land cover data, and monthly climate measurements, we define a binary outcome indicating whether at least one wildfire of 300 or more acres occurred in a given county and month.

## The Data

The modeling dataset is constructed by joining three sources:

- **Historical wildfire records** — fire occurrence and size by county and date
- **Land cover data** — NLCD land cover fractions per county
- **Monthly climate measurements** — temperature, drought, and precipitation by county-month

A **notable fire** is defined as any fire with a final burned area of ≥ 300 acres, following operational wildfire reporting standards used by U.S. fire management agencies. This filters out the vast majority of small, quickly-contained fires.

## How I Built It

- **Data Preprocessing**

    The panel is built at the county-month level. Missing land cover fractions (no NLCD record) are filled with 0, and missing climate variables are replaced with the county's past-years median for that specific month to avoid data leakage. Any rows still missing key predictors after imputation are dropped.

- **Modeling**

    Two models are fit:
    - **Logistic Regression** — baseline model
    - **Random Forest** — second model

    Models are evaluated using time-aware expanding-window cross-validation to prevent data leakage. Performance is assessed via the Area Under the ROC Curve (AUC).

- **Results**

    Exploratory analysis reveals strong seasonality, pronounced geographic clustering in the western United States, and clear associations between fire incidence and drought, temperature, and land cover type. The random forest modestly outperforms logistic regression, with both models achieving meaningful predictive signal above chance.

## Tools Used
- R — core language
- Quarto — report generation
- tidyverse / dplyr — data wrangling
- randomForest — random forest modeling
- NLCD — land cover data source
