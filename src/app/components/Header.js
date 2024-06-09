'use client'
import { useEffect, useState } from "react"
import { doLogin } from "../services/Web3Service"

export default function Header () {

  const [wallet, setWallet] = useState("");

  useEffect(() => {
    setWallet(localStorage.getItem("wallet") || "");
  },[])

  const btnLoginClick = ()  => {
    doLogin().then(wallet => setWallet(wallet)).catch(err => {
      console.error(err);
      alert(err.message);
    })
  }

  return(
    <div className="mx-auto py-5 bg-slate-900 flex items-center justify-center">
      <header className="p-3 bg-slate-900 flex flex-1 flex-row justify-between items-center max-w-[1200px]">
        <div className="justify-self-start">
          <a href="/" className="no-underline">
            <h1 className="font-bold text-slate-100">FloodHelp</h1>
          </a>
        </div>
        <div className="flex flex-row items-center space-x-8 m-0">
          {
            wallet 
              ?  <button type="button" className="bg-yellow-400 text-slate-900 p-2 rounded-md"><a href="/create">Pedir Ajuda</a></button>
              :  (
                <div className="flex flex-row items-center">
                  <img src="/metamask.svg" className="w-6"/>
                  <button type="button" className="flex border-solid border border-white text-slate-100 p-2 rounded-md" onClick={btnLoginClick}> Entrar</button>
                </div>
                )
          }
        </div>
      </header>
      </div>
  )
}