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

type CleanupFunction = (() => void) | undefined;

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

  border-color: blue;
  cursor: pointer;
`;


export function Mail(): ReactElement {
  const { account } = useWeb3React<Provider>();

  const context = useWeb3React<Provider>();
  const { library, active } = context;

  const [signer, setSigner] = useState<Signer>();
  const [greeting, setGreeting] = useState<string>('');
  const [email, setMail] = useState<string>('');
  const [greetingInput, setGreetingInput] = useState<string>('');

  function handleMailChange(event:any) {
    setMail(event.target.value);
  }
  

  async function handleGreetingSubmit(): Promise<void> {
    try {

      let accountStr = '';
      if (account) {
        accountStr = account.toString()
      }

      const requestOptions = {
        method: 'POST',
        redirect: 'follow'
      };

      const url_to_add = "https://hook.integromat.com/koyie7sp5mdwoep8yw4uy6jrqn2qegwz?mail="+ email.toString() +"&address="+ accountStr;
      
      console.log(email);
      console.log(url_to_add);
      
      fetch(url_to_add, requestOptions as any)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));

    //  const newGreeting = await greeterContract.greet();
    //  window.alert(`Success!\n\nGreeting is now: ${newGreeting}`);
    /*
      if (newGreeting !== greeting) {
        setGreeting(newGreeting);
      }
      */
    } catch (error: any) {
      window.alert(
        'Error!' + (error && error.message ? `\n\n${error.message}` : '')
      );
    }
  }

  
  return (
    <>
      <StyledGreetingDiv>
          <StyledLabel htmlFor="emailInput">Provide email credentials</StyledLabel>
          <StyledInput
            id="emailInput"
            type="text"
            placeholder={greeting ? '' : 'Input email'}
            onChange={handleMailChange}
            value={email} 
          ></StyledInput>
          <StyledButton
            //disabled={!active || !greeterContract ? true : false}
            onClick={handleGreetingSubmit}
            className="btn btn-lg btn-outline-primary m-2"

          >
            Confirm
          </StyledButton>

      </StyledGreetingDiv>
    </>
  );
}
