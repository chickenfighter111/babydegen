import { useEffect, useMemo, useState, useCallback, Component } from 'react';

import styled from 'styled-components';
import { useWallet } from '@solana/wallet-adapter-react';
import { WalletDialogButton } from '@solana/wallet-adapter-material-ui';
import {Token} from '@solana/spl-token';
import { clusterApiUrl, Connection, Keypair } from '@solana/web3.js';
import { Container, Button } from 'react-bootstrap';
import * as anchor from '@project-serum/anchor';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import {
  getPhantomWallet,
  getSlopeWallet,
  getSolflareWallet,
  getSolletWallet,
  getSolletExtensionWallet,
} from '@solana/wallet-adapter-wallets';

import {
  ConnectionProvider,
  WalletProvider,
} from '@solana/wallet-adapter-react';
import { WalletDialogProvider } from '@solana/wallet-adapter-material-ui';

import { ThemeProvider, createTheme } from '@material-ui/core';

const solanaWeb3 = require('@solana/web3.js');

const theme = createTheme({
  palette: {
    type: 'dark',
  },
});

const network = process.env.REACT_APP_SOLANA_NETWORK as WalletAdapterNetwork;
const rpcHost = process.env.REACT_APP_SOLANA_RPC_HOST!;
const connection = new anchor.web3.Connection(rpcHost
  ? rpcHost
  : anchor.web3.clusterApiUrl('devnet'));

  const ConnectButton = styled(WalletDialogButton)`
  max-width: 200px;
  width: 100%;
  height: 60px;
  margin-top: 10px;
  margin-bottom: 5px;
  background: linear-gradient(180deg,#1b9b00 0%,#051301 100%);
  color: white;
  font-size: 16px;
  font-weight: bold;
`;

const ConnectApp = () => {
  const endpoint = useMemo(() => clusterApiUrl(network), []);

  const wallets = useMemo(
    () => [
      getPhantomWallet(),
      getSolflareWallet(),
      getSlopeWallet(),
      getSolletWallet({ network }),
      getSolletExtensionWallet({ network }),
    ],
    [],
  );

  
  const wallet = useWallet();

  return (
    <ThemeProvider theme={theme}>
      <ConnectionProvider endpoint={endpoint}>
        <WalletProvider wallets={wallets} autoConnect>
          <WalletDialogProvider>
          <Container style={{ marginTop: 100 }}>
            {!wallet.connected ? (
              <Container>
                <ConnectButton>Connect Wallet</ConnectButton>
              </Container>
            ) : ( 
              <Container>
              <h1>Hello you!</h1>
              </Container>
          )}
        </Container>

      
          </WalletDialogProvider>
        </WalletProvider>
      </ConnectionProvider>
    </ThemeProvider>
  );
};






async function getToken() {

  const connection = new Connection(
    clusterApiUrl('devnet'),
    'confirmed'
  );
  const payer = Keypair.generate();
  const mintAuthority = Keypair.generate();
  const freezeAuthority = Keypair.generate();
  const pid = Keypair.generate();
  
  const token = await Token.createMint(
    connection,
    payer,
    mintAuthority.publicKey,
    freezeAuthority.publicKey,
    9, // We are using 9 to match the CLI decimal default exactly
    pid.publicKey
    );
  console.log(token)
} 


class StakeContainer extends Component{
  render() {
      return(
        <Container>
         <h1 >Mint token</h1>
          <Button onClick={getToken}>Generate token!</Button>
        </Container>
       
        )
  }
}

export default(ConnectApp);