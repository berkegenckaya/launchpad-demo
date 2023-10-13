// pages/index.js
import { useEffect, useState } from 'react';
import { Contract } from '@ethersproject/contracts';
import { provider } from '../../../lib/ethers';
import LaunchpadABI from '../../../contracts/Launchpad.json'; // ABI of your deployed contract
import Pool from '../../components/Pool';
import ClaimTokens from '@/components/ClaimToken';
import ConnectWallet from '@/components/ConnectWallet';

const launchpadAddress = '0x9dD12CC3073f39769B061c1f71837AE9bb7E3B0A';

export default function Home() {
    const [pools, setPools] = useState([]);
    
    const [provider, setProvider] = useState(null);

    useEffect(() => {
        const fetchPools = async () => {
            const launchpad = new Contract(launchpadAddress, LaunchpadABI, provider);
            const poolCount = await launchpad.nextPoolId();
            const poolPromises = [];

            for (let i = 0; i < poolCount; i++) {
                poolPromises.push(launchpad.pools(i));
            }

            const poolData = await Promise.all(poolPromises);
            setPools(poolData);
        };

        fetchPools();
        
    }, []);
        console.log(pools)
        console.log(provider)
    return (
        <div className='bg-[#0F0F0F] py-12 px-12 w-screen h-screen text-white'>
            
            {!provider ? (
                <ConnectWallet setProvider={setProvider} />
            ) : (
                <div className='flex flex-col items-center gap-4 p-4 max-w-[500px] rounded-lg bg-slate-800'>
                    {pools.map((pool, index) => (
                        <Pool
                        key={index}
                        poolId={index}
                        rate={pool.rate.toString()}
                        availableTokens={pool.availableTokens.toString()}
                        minContribution={pool.minContribution.toString()}
                        maxContribution={pool.maxContribution.toString()}
                        active={pool.active}
                        />
                    ))}
                    <ClaimTokens provider={provider} />
                </div>
            )}
        </div>
    );
}
