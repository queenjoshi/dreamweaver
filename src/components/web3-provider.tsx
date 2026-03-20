'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { WagmiProvider, createConfig, http } from 'wagmi';
import { base } from 'wagmi/chains';
import { walletConnect, coinbaseWallet } from 'wagmi/connectors';
import { createStorage, noopStorage } from 'wagmi';

const projectId = 'de9280fff2c385d015207522ba5f35a3';

const config = createConfig({
  chains: [base],
  connectors: [
    walletConnect({
      projectId, metadata: {
        name: 'DreamWeaver',
        description: 'Weave your dreams into surreal art.',
        url: 'https://app.studioproj.com',
        icons: ['https://app.studioproj.com/favicon.ico']
      }
    }),
    coinbaseWallet({
      appName: 'DreamWeaver',
      preference: "smartWalletOnly"
    }),
  ],
  transports: {
    [base.id]: http(),
  },
  // By disabling SSR for wagmi, we ensure that all wallet connection logic
  // runs exclusively on the client-side, which can resolve hydration
  // and connection issues with browser-based wallets like MetaMask.
  ssr: false,
  storage: createStorage({
    storage: typeof window !== 'undefined' ? window.localStorage : noopStorage,
  }),
});


const queryClient = new QueryClient();

export function Web3Provider({ children }: { children: React.ReactNode }) {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </WagmiProvider>
  );
}
