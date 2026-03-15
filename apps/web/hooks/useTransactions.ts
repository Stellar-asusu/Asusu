import { useWallet } from "../context/WalletContext";

export function useTransactions() {
  const { publicKey } = useWallet();

  const fetchTransactions = async () => {
    if (!publicKey) return [];
    const res = await fetch(`/api/transactions?account=${publicKey}`);
    return res.json();
  };

  return { fetchTransactions };
}
