declare var global: any;
import { HardhatRuntimeEnvironment } from 'hardhat/types';
import { DeployFunction } from 'hardhat-deploy-holographed/types';
import { LeanHardhatRuntimeEnvironment, hreSplit } from '../scripts/utils/helpers';

const func: DeployFunction = async function (hre1: HardhatRuntimeEnvironment) {
  let { hre, hre2 } = await hreSplit(hre1, global.__companionNetwork);
  const { deployments, getNamedAccounts } = hre;
  const { deploy } = deployments;
  const { deployer } = await getNamedAccounts();

  const mockErc20Tokens = await deploy('ERC20Mock', {
    from: deployer,
    args: ['Wrapped ETH (MOCK)', 'WETHmock', 18, 'ERC20Mock', '1'],
    log: true,
    waitConfirmations: 1,
    nonce: await hre.ethers.provider.getTransactionCount(deployer),
  });
};

export default func;
func.tags = ['ERC20Mock', 'MockERC720Tokens'];
func.dependencies = ['HolographGenesis'];