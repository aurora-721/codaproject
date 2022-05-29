import { expect } from 'chai';
import { ethers } from 'hardhat';

describe('TicketNFT', function (): void {
  let seller, buyer
  it("Should return the new greeting once it's changed", async function (): Promise<void> {
    const TicketNFT = await ethers.getContractFactory('TicketNFT');
    const ticketNFT = await TicketNFT.deploy();
    await ticketNFT.deployed();

    let 

    [buyer] = await ethers.getSigners();

    const buyTicket = await ticketNFT.connect(buyer).reserveTicket({
      value: 100000000000
    })//.then(console.log);
    const tx = await buyTicket.wait();
    console.log(tx);

    const sendTicket = await ticketNFT.sendTicket(1);
    console.log('=============================');
    const tx2 = await sendTicket.wait();

    console.log(tx2);

    // const setGreetingTx = await ticketNFT.setGreeting('Hola, mundo!');

    // // wait until the transaction is mined
    // await setGreetingTx.wait();

    // expect(await ticketNFT.greet()).to.equal('Hola, mundo!');
  });
});
