// components/Pool.js
import React from 'react';

const Pool = ({ poolId, rate, availableTokens, minContribution, maxContribution, active }) => {
    return (
        <div className='w-[400px] py-4 flex flex-col p-8  bg-black rounded-2xl'>
            <div className=' text-3xl'>Token Launchpad</div>
            <h2 className='text-xl'>Pool ID: {poolId}</h2>
            <p className='text-xl'>Rate: {rate} Tokens per Ether</p>
            <p className='text-xl'>Available Tokens: {availableTokens}</p>
            <p className='text-xl'>Min Contribution: {minContribution} ether</p>
            <p className='text-xl'>Max Contribution: {maxContribution} ether</p>
            <p className='text-xl'>Status: {active ? 'Active' : 'Inactive'}</p>
        </div>
    );
};

export default Pool;
