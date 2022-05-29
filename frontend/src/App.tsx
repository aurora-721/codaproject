import { ReactElement } from 'react';
import styled from 'styled-components';
import { ActivateDeactivate } from './components/ActivateDeactivate';
import { Greeter } from './components/Greeter';
import { SectionDivider } from './components/SectionDivider';
import { SignMessage } from './components/SignMessage';
import { WalletStatus } from './components/WalletStatus';
import { Mail } from './components/Mail';
import { Account } from './components/Account';
import { Jumbotron } from './components/HomePage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { MailPage} from './components/MailPage';
import { Navigation } from './components/Navigation';
import { BuyTickets } from './components/BuyTickets';

const StyledAppDiv = styled.div`
  display: grid;
  grid-gap: 20px;
`;

export function App(): ReactElement {
  return (
    <div className="App">
      <Navigation />
        <Router>
          <Routes>
            <Route path='/' element={<Jumbotron/>}/>        
            <Route path='/email' element={<MailPage/>}/>            
            <Route path='/jumno' element={<BuyTickets/>}/>            
          </Routes>  
        </Router>         
     
    </div>


  );
}
