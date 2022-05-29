import { useWeb3React } from '@web3-react/core';
import { Contract, ethers, Signer } from 'ethers';
import {
  ChangeEvent,
  MouseEvent,
  ReactElement,
  useEffect,
  useState
} from 'react';
import styled from 'styled-components';
import TicketArtifact from '../artifacts/contracts/TicketNFT.sol/TicketNFT.json';
import { Provider } from '../utils/provider';

const StyledDeployContractButton = styled.button`
  width: 180px;
  height: 2rem;
  border-radius: 1rem;
  border-color: blue;
  cursor: pointer;
  place-self: center;
`;

const StyledGreetingDiv = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  grid-template-columns: 135px 2.7fr 1fr;
  grid-gap: 10px;
  place-self: center;
  align-items: center;
`;

const StyledLabel = styled.label`
  font-weight: bold;
`;

const StyledInput = styled.input`
  padding: 0.4rem 0.6rem;
  line-height: 2fr;
`;

const StyledButton = styled.button`
  width: 150px;
  height: 2rem;
  border-radius: 1rem;
  border-color: blue;
  cursor: pointer;
`;

export function BuyTickets(): ReactElement {
  const context = useWeb3React<Provider>();
  const { library, active } = context;

  const [signer, setSigner] = useState<Signer>();
  const [greeterContract, setGreeterContract] = useState<Contract>();
  const [greeterContractAddr, setGreeterContractAddr] = useState<string>('');
  const [greeting, setGreeting] = useState<string>('');
  const [greetingInput, setGreetingInput] = useState<string>('');

  useEffect((): void => {
    if (!library) {
      setSigner(undefined);
      return;
    }

    setSigner(library.getSigner());
  }, [library]);

  useEffect((): void => {
    if (!greeterContract) {
      return;
    }

    async function getGreeting(greeterContract: Contract): Promise<void> {
      const _greeting = await greeterContract.greet();

      if (_greeting !== greeting) {
        setGreeting(_greeting);
      }
    }

    getGreeting(greeterContract);
  }, [greeterContract, greeting]);

  function handleDeployContract(event: MouseEvent<HTMLButtonElement>) {
    event.preventDefault();

    // only deploy the Greeter contract one time, when a signer is defined
    if (greeterContract || !signer) {
      return;
    }

    async function deployGreeterContract(signer: Signer): Promise<void> {
      const Greeter = new ethers.ContractFactory(
        TicketArtifact.abi,
        TicketArtifact.bytecode,
        signer
      );

      try {
        const greeterContract = await Greeter.deploy('Hello, Hardhat!');

        await greeterContract.deployed();

        const greeting = await greeterContract.greet();

        setGreeterContract(greeterContract);
        setGreeting(greeting);

        window.alert(`Greeter deployed to: ${greeterContract.address}`);

        setGreeterContractAddr(greeterContract.address);
      } catch (error: any) {
        window.alert(
          'Error!' + (error && error.message ? `\n\n${error.message}` : '')
        );
      }
    }

    deployGreeterContract(signer);
  }

  function handleGreetingChange(event: ChangeEvent<HTMLInputElement>): void {
    event.preventDefault();
    setGreetingInput(event.target.value);
  }

  function handleGreetingSubmit(event: MouseEvent<HTMLButtonElement>): void {
    event.preventDefault();

    if (!greeterContract) {
      window.alert('Undefined greeterContract');
      return;
    }

    if (!greetingInput) {
      window.alert('Greeting cannot be empty');
      return;
    }

    async function submitGreeting(greeterContract: Contract): Promise<void> {
      try {
        const setGreetingTxn = await greeterContract.setGreeting(greetingInput);

        await setGreetingTxn.wait();

        const newGreeting = await greeterContract.greet();
        window.alert(`Success!\n\nGreeting is now: ${newGreeting}`);

        if (newGreeting !== greeting) {
          setGreeting(newGreeting);
        }
      } catch (error: any) {
        window.alert(
          'Error!' + (error && error.message ? `\n\n${error.message}` : '')
        );
      }
    }

    submitGreeting(greeterContract);
  }

  return (
    <>
         <section className="jumbotron text-center mb-0 bg-white">
      <div className="container">
       <h1 className="jumbotron-heading">Buy ticket for Web3 summit</h1>
       <p className="lead text-muted">
       Select which ticket and how much BlockSplit tickets you want to buy. To complete click buy button. 
       </p>
       <p>
      <StyledGreetingDiv>
        <StyledLabel htmlFor="greetingInput">Provide email credentials</StyledLabel>
        <StyledInput
          id="greetingInput"
          type="text"
          placeholder={greeting ? '' : 'Input email'}
          onChange={handleGreetingChange}
          style={{ fontStyle: greeting ? 'normal' : 'italic' }}
        ></StyledInput>
        <StyledButton
          //disabled={!active || !greeterContract ? true : false}
          style={{
            //cursor: !active || !greeterContract ? 'not-allowed' : 'pointer',
            borderColor: !active || !greeterContract ? 'unset' : 'blue'
          }}
          onClick={handleDeployContract}
        >
          Submit
        </StyledButton>
      </StyledGreetingDiv>

       </p>

        <div className="row" >
        <div className="card col-6" >
            <div className="card-body">
                <h2 className="card-title">VIP tickets</h2>
                <p className="card-text">Includes everything in the regular ticket, plus invitation to VIP dinner, sailing, private parties, backstage and much more.</p>
                <h4>$500</h4>
                <a href="#" className="btn btn-lg btn-outline-primary m-2">
                    Buy VIP
                </a>
            </div>
        </div>
        <div className="card col-6" >
            <div className="card-body">
                <h2 className="card-title">Regular ticket</h2>
                <p className="card-text">Attend all the talks, expo, workshops and official parties. Ticket includes food and drinks during the events and a dope swag.</p>
                <h4>$100</h4>
                <a href="#" className="btn btn-lg btn-outline-primary m-2">
                    Buy regular
                </a>
            </div>
        </div>
        </div>


      </div>
      
      
     </section>

    </>
  );
}
