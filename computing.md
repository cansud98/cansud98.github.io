---
layout: page
title: "Computing Resources"
---


This webpage contains information about how to set up and run WRF on FSU HPC.

The Florida State University HPC system features over 18,000 and over 700 nodes providing powerful and scalable HPC resources. My research utilizes the FSU HPC for numerical simulations and data processing related to mesoscale storm modeling.



# Introduction

This guide is prepared to facilitate the basic compilation and execution of WRF-ARW v4.3.3 on FSU HPC. (I will update this page for the new releases of WRF-ARW). For detailed installing and running options beyond this guide, please see: [WRF User’s Guide -- (ucar.edu)](https://www2.mmm.ucar.edu/wrf/users/wrf_users_guide/build/html/index.html "website")

Before reading the rest of the guide, I recommend reading the [FSU HPC Overview & Using the HPC ](https://docs.rcc.fsu.edu/hpc/ "website") and getting familiar with it.

***********************
*** will be updated *** 

## What you need to know first
*** will be updated *** 

## FSU HPC Access Considerations
**Login Details**: FSU HPC is accessed via SSH as follows:

ssh <username>@hpc-login.rcc.fsu.edu

Activities such as compiling model code can be performed on the same node to which you log in or by submitting the compilation to the job scheduler.

**Remote Access**: HPC is accessible only when on-campus or when using the campus VPN.

To download the VPN software, visit [FSU Cisco AnyConnect VPN client](https://its.fsu.edu/services/virtual-private-network?_gl=1%2A16o60xg%2A_ga%2AMTk5OTg1MzQxNy4xNjcwNjA3Njk5%2A_ga_JD6E8L9B8V%2AMTcyNTU2MTMyOC4xMC4xLjE3MjU1NjEzMzYuNTIuMC4w "website"), and for further details please check [this link](https://servicecenter.fsu.edu/s/article/How-do-I-connect-to-the-HPC-or-other-RCC-resources-from-off-campus "website").

**Data Transfer**: To transfer data from HPC to your laptop or desktop using sftp or scp, you must directly connect to the disk on which your data are located. This is done as follows:

scp <username>@hpc-login.rcc.fsu.edu:/<path/to/data> </target/file/path>

where <username> is replaced with your username and <path/to/data> is replaced with the data path (/gpfs/home/cd21q/model; /gpfs/research/eoas/cd21q, etc.) on which your data are located.

**Visualization**: *** text will be updated *** 
ssh -Y <username>@hpc-login.rcc.fsu.edu

# Part-I: Obtaining & Compiling the Model

## Obtaining the WRF Model Code

## Installing the WRF Model Code

## Installing the WRF Pre-Processor (WPS) Code

# Part-II: WPS

## What does WPS do?

### Step 1: Defining a Domain

### Step 2: Getting Model Data

### Step 3: Interpolating Model Data

### Advanced Uses: Multiple Domains

### Advanced Uses: “Constant” Input Data Sources

### Advanced Uses: Time-Varying SST, Sea Ice, Albedo, and Vegetation Data

# Part-III: Configuring and Running the WRF Model

## Step 1: Real-Data Initialization

## Step 2: Running the Model

### Common Errors: SIGTERM Statements in the rsl.* Files

### Advanced Uses: Adaptive Time Steps

### Advanced Uses: Two-Way Nesting

### Advanced Uses: Time-Varying SST, Sea Ice, Albedo, and Vegetation Data

### Other Advanced Uses

# Part-IV: Visualization

# Conclusions


