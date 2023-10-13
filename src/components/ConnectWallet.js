// components/ConnectWallet.js
import React, { useState } from 'react';
import { Web3Provider } from '@ethersproject/providers';

const ConnectWallet = ({ setProvider }) => {
    const [error, setError] = useState(null);

    const connectWallet = async () => {
        if (typeof window.ethereum !== 'undefined') {
            try {
                await window.ethereum.request({ method: 'eth_requestAccounts' });
                const provider = new Web3Provider(window.ethereum);
                setProvider(provider);
            } catch (err) {
                setError('Failed to connect wallet');
            }
        } else {
            setError('Please install a web3 provider, like MetaMask');
        }
    };

    return (
        <div>
            <button className='bg-[#9E00FF] py-2 px-4 text-lg rounded-full' onClick={connectWallet}>Connect Wallet</button>
            {error && <p>{error}</p>}
        </div>
    );
};

export default ConnectWallet;
