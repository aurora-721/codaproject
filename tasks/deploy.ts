import '@nomiclabs/hardhat-waffle';
import { task } from 'hardhat/config';
import { HardhatRuntimeEnvironment } from 'hardhat/types';

task('deploy', 'Deploy Ticket contract').setAction(
  async (_, hre: HardhatRuntimeEnvironment): Promise<void> => {
    const TicketNFT = await hre.ethers.getContractFactory('TicketNFT');
    const ticketNft = await TicketNFT.deploy();

    await ticketNft.deployed();

    console.log('TicketNFT deployed to:', ticketNft.address);
  }
);
