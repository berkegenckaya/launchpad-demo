// components/ClaimTokens.js
import React from 'react';
import { Contract } from '@ethersproject/contracts';
import { provider } from '../../lib/ethers';
import LaunchpadABI from '../../contracts/Launchpad.json'; // ABI of your deployed contract

const launchpadAddress = '0x9dD12CC3073f39769B061c1f71837AE9bb7E3B0A';

const ClaimTokens = () => {
    const claimTokens = async () => {
        const signer = provider.getSigner();
        const launchpad = new Contract(launchpadAddress, LaunchpadABI, signer);
        const transaction = await launchpad.claimTokens();
        await transaction.wait();
        alert('Tokens claimed successfully!');
    };

    return (
        <div>
            <button className='bg-[#641d91] py-2 px-4 text-lg rounded-full' onClick={claimTokens}>Claim Tokens</button>
        </div>
    );
};

export default ClaimTokens;
