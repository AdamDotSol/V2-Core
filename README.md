# Uniswap V2

Forked from uniswap/v2-core at commit `4dd59067c76dea4a0e8e4bfdda41877a6b16dedc`

[![Actions Status](https://github.com/Uniswap/uniswap-v2-core/workflows/CI/badge.svg)](https://github.com/Uniswap/uniswap-v2-core/actions)
[![Version](https://img.shields.io/npm/v/@uniswap/v2-core)](https://www.npmjs.com/package/@uniswap/v2-core)

In-depth documentation on Uniswap V2 is available at [uniswap.org](https://uniswap.org/docs).

The built contract artifacts can be browsed via [unpkg.com](https://unpkg.com/browse/@uniswap/v2-core@latest/).

# Local Development

The following assumes the use of `node@>=10`.

## Install Dependencies

`yarn install`

## Configuration

Edit `.env.example` file in `.env` and update it : 

`ALCHEMY_PROJECT_ID=`

`ETHERSCAN_API_KEY=`

`DEPLOYER_PRIVATE_KEY=`

## Compile Contracts

`npx hardhat compile`

## Deploy Contracts


### Factory
#### Deployment : 
`npx hardhat deploy-factory --network fuji`

#### Verify : 
`npx hardhat verify-factory --network fuji`

## Run Tests

`yarn test`
