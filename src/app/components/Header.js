'use client'
import { useEffect, useState } from "react"
import { doLogin } from "../services/Web3Service"
import Link from "next/link";
import { useWallet } from "../hooks/useWallet";

export default function Header () {

  const { wallet, setWallet} = useWallet()
  // const [wallet, setWallet] = useState("");

  // useEffect(() => {
  //   setWallet(localStorage.getItem("wallet") || "");
  // },[])

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
          <Link href="/" className="no-underline">
            <h1 className="font-bold text-slate-100 text-3xl">FloodHelp</h1>
          </Link>
        </div>
        <div className="flex flex-row items-center space-x-8 m-0">
          {
            wallet 
              ?(
                <div className="flex flex-row items-center">
                  <Link href="/create"><button type="button" className="bg-yellow-400 hover:bg-yellow-500 text-slate-900 p-2 rounded-md">Pedir Ajuda</button></Link>
                </div>
              )
              :(
                <div className="flex flex-row items-center">
                  <button type="button" className="flex border-solid border border-white text-slate-100 p-2 rounded-md hover:bg-slate-800" onClick={btnLoginClick}>
                    <img src="/metamask.svg" className="w-6 mr-1"/>
                    Conectar metamask
                  </button>
                </div>
              )
          }
        </div>
      </header>
      </div>
  )
}