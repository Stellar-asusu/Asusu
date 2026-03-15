"use client";

import { createContext, useContext, useState, ReactNode } from "react";

interface WalletContextType {
  publicKey: string | null;
  connect: () => Promise<void>;
  disconnect: () => void;
}

const WalletContext = createContext<WalletContextType | null>(null);

export function WalletProvider({ children }: { children: ReactNode }) {
  const [publicKey, setPublicKey] = useState<string | null>(null);

  const connect = async () => {
    // Freighter wallet integration placeholder
    if (typeof window !== "undefined" && (window as any).freighter) {
      const key = await (window as any).freighter.getPublicKey();
      setPublicKey(key);
    }
  };

  const disconnect = () => setPublicKey(null);

  return (
    <WalletContext.Provider value={{ publicKey, connect, disconnect }}>
      {children}
    </WalletContext.Provider>
  );
}

export const useWallet = () => {
  const ctx = useContext(WalletContext);
  if (!ctx) throw new Error("useWallet must be used within WalletProvider");
  return ctx;
};
