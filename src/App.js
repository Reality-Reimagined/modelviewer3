import { useState } from 'react';
import './styles.css';
import { useEffect } from 'react';
import NFTContainer from './NFTContainer';
import ModelViewerContainer from './ModelViewerContainer';
import ModelViewer from './Modelviewer';
import NodeWalletConnect from "@walletconnect/node";
import WalletConnectQRCodeModal from "@walletconnect/qrcode-modal";



function App3() {
  
  const [walletAddress, setWalletAddress] = useState(null)
  const [nfts, setNfts] = useState([])

  const connectWallet = async () => {
    if (typeof window.ethereum !== 'undefined') {

    const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
    
    setWalletAddress(accounts [0])

    }
  }

  const getNFTData = async () => {

    if(!walletAddress) return;

  
    const response = await fetch (`https://api.rarible.org/v0.1/items/byOwner/?owner=ETHEREUM:${walletAddress}`);
    
    const data = await response.json()

    setNfts(data.items)

    debugger

  }

  useEffect(() => {
    getNFTData()
  }, [walletAddress])

  //wallet connect 
  

// Create connector
const walletConnector = new NodeWalletConnect(
  {
    bridge: "https://bridge.walletconnect.org", // Required
  },
  {
    clientMeta: {
      description: "WalletConnect NodeJS Client",
      url: "https://nodejs.org/en/",
      icons: ["https://nodejs.org/static/images/logo.svg"],
      name: "WalletConnect",
    },
  }
);

// Check if connection is already established
if (!walletConnector.connected) {
  // create new session
  walletConnector.createSession().then(() => {
    // get uri for QR Code modal
    const uri = walletConnector.uri;
    // display QR Code modal
    WalletConnectQRCodeModal.open(
      uri,
      () => {
        console.log("QR Code Modal closed");
      },
      true // isNode = true
    );
  });
}

// Subscribe to connection events
walletConnector.on("connect", (error, payload) => {
  if (error) {
    throw error;
  }

  // Close QR Code Modal
  WalletConnectQRCodeModal.close(
    true // isNode = true
  );

  // Get provided accounts and chainId
  const { accounts, chainId } = payload.params[0];
});

walletConnector.on("session_update", (error, payload) => {
  if (error) {
    throw error;
  }

  // Get updated accounts and chainId
  const { accounts, chainId } = payload.params[0];
});

walletConnector.on("disconnect", (error, payload) => {
  if (error) {
    throw error;
  }

  // Delete walletConnector
});



  return (
    <div className="App">
     <div className = "glow-on-hover" type= "button">
       Account: {walletAddress}
     </div>
     <button className="glow-on-hover" type="button" onClick={connectWallet}>
       Connect MetaMask
     </button>
     <button className="glow-on-hover" type="button" onClick={NodeWalletConnect}>
       Connect WalletConnect
     </button>
     <div>
    
     </div>
     {/* <NFTContainer nfts={nfts} />  */}
     <ModelViewer />
      <ModelViewerContainer nfts = {nfts}/>
    </div>
  );
}

export default App3;
