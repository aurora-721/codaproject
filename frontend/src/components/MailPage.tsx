import { ReactElement } from 'react';
import styled from 'styled-components';
import { Greeter } from '.././components/Greeter';
import { SectionDivider } from '.././components/SectionDivider';
import { SignMessage } from '.././components/SignMessage';
import { WalletStatus } from '.././components/WalletStatus';
import { Mail } from '.././components/Mail';
import { Account } from '.././components/Account';
import { Jumbotron } from '.././components/HomePage';

const StyledAppDiv = styled.div`
  display: grid;
  grid-gap: 20px;
`;

export function MailPage(): ReactElement {
  return (
    <StyledAppDiv>
      <SectionDivider />
      <Mail />

    </StyledAppDiv>
  );
}
