import { Web3Provider } from '@ethersproject/providers';

let provider;

if (typeof window !== 'undefined') {
  provider = new Web3Provider(window.ethereum);
}

export { provider };
