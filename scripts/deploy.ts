import { task } from 'hardhat/config'
import '@nomiclabs/hardhat-ethers'
import { Logger } from 'tslog'
import config from './config/config'

const logger: Logger = new Logger()

task('deploy-factory', 'Deploys UniswapV2Factory contract')
    .setAction(async (args, hre) => {
        const factory = await hre.ethers.getContractFactory(`contracts/UniswapV2Factory.sol:UniswapV2Factory`)
        const instance = await factory.deploy(config.feeToSetter)

        await instance.deployed()

        logger.info(instance.address)
    })

task("verify-factory", "Verifies factory Contract")
    .setAction(
        async (args, hre) => {
            await hre.run("verify:verify", {
                address: config.factory,
                constructorArguments: [config.feeToSetter],
                contract: "contracts/UniswapV2Factory.sol:UniswapV2Factory"
            });
        }
    );

