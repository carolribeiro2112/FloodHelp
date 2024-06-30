// WalletContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';

// Cria o contexto
const WalletContext = createContext();

// Provedor do contexto
export const WalletProvider = ({ children }) => {
  const [wallet, setWallet] = useState("");

  useEffect(() => {
    setWallet(localStorage.getItem("wallet") || "");
  }, []);

  return (
    <WalletContext.Provider value={{ wallet, setWallet }}>
      {children}
    </WalletContext.Provider>
  );
};

// Hook para usar o contexto
export const useWallet = () => {
  return useContext(WalletContext);
};