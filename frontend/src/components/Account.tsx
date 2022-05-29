import { useWeb3React } from '@web3-react/core';
import { ethers } from 'ethers';
import { ReactElement, useEffect, useState } from 'react';
import styled from 'styled-components';
import { Provider } from '../utils/provider';

type CleanupFunction = (() => void) | undefined;


const StyledStatusIcon = styled.h1`
  margin: 0px;
`;



export function Account(): ReactElement {
    const { account } = useWeb3React<Provider>();

  return (
    <>
      <span>
        <strong>Account</strong>
      </span>
      <span>
        {typeof account === 'undefined'
          ? ''
          : account
          ? `${account.substring(0, 6)}...${account.substring(
              account.length - 4
            )}`
          : ''}
      </span>
    </>
  );
}
