'use client'
import { useEffect, useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { getAllOpenRequests } from "./services/Web3Service";
import Request from "./components/Request";
import Loader from "./components/Loader";
import { WalletProvider } from "./hooks/useWallet";

export default function Home() {
  const [requests, setRequests] = useState([]);
  const [isMetamaskInstalled, setIsMetamaskInstalled] = useState(null); // inicializa como null
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (window.ethereum) {
      setIsMetamaskInstalled(true);
    } else {
      setIsMetamaskInstalled(false);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    if (isMetamaskInstalled) {
      loadRequests(0);
    }
  }, [isMetamaskInstalled]);

  async function loadRequests(lastId) {
    setIsLoading(true);
    try {
      const result = await getAllOpenRequests(lastId);
      console.log(result)
      if (lastId === 0) {
        setRequests(result);
      } else {
        setRequests(prevRequests => [...prevRequests, ...result]);
      }
    } catch (err) {
      console.error(err);
      // alert(err.message);
    } finally {
      setIsLoading(false);
    }
  }

  if (isLoading) {
    return <Loader />;
  }

  return (
    <WalletProvider>
      <Header />
      <div className="container m-auto pb-3">
        <div>
          <h2 className="text-slate-900 py-4 text-xl font-semibold">Ajude as vítimas de enchentes e demais desastres naturais do Brasil</h2>
        </div>
        <div>
          {isMetamaskInstalled === null ? (
            <Loader />
          ) : isMetamaskInstalled ? (
            requests.length ? (
              requests.map(rq => <Request key={rq.id} data={rq} />)
            ) : (
              <p className="text-slate-900">Nenhum pedido encontrado.</p>
            )
          ) : (
            <p className="text-slate-900">Conecte sua carteira MetaMask no botão "Entrar" para ajudar ou pedir ajuda.</p>
          )}
        </div>
      </div>
      <Footer />
    </WalletProvider>
  );
}

