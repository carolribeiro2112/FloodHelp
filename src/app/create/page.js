'use client'
import { useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { openRequest } from "../services/Web3Service";
import Link from "next/link";
import { WalletProvider } from "../hooks/useWallet";

export default function Home() {
  const [request, setRequest] = useState({
    title: "",
    description: "",
    contact: "",
    goal: 0
  })
    
  function onInputChange(evt){
    setRequest(prevState => ({ ...prevState, [evt.target.id]: evt.target.value }));
  }

  function btnSaveClick(){
    alert("Iniciando processo de salvamento...");
    openRequest(request)
      .then(result => {
        alert("Pedido enviado com sucesso. Em alguns minutos estará disponível na página inicial.");
        window.location.href = "/";
      })
      .catch(err => {
        console.error(err);
        alert(err.message);
      })
  }
  return (
    <WalletProvider>
      <Header/>
        <div className="p-5 w-1/2 mx-auto">
          <div className="m-3">
            <p className="text-slate-900">Preencha todos os campos abaixo para nos dizer o que precisa</p>
          </div>
          <div className="m-3">
            <div className="mb-3 flex flex-col">
              <label htmlFor="title" className="block text-sm font-medium leading-6 text-gray-900">Resumo do que precisa:</label>
              <input type="text" id="title" className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" maxLength={150} value={request.title} onChange={onInputChange}/>
            </div>
          
            <div className="form-floating mb-3">
              <label htmlFor="description" className="block text-sm font-medium leading-6 text-gray-900">Descreva em detalhes o que precisa e onde você está (para entregas presenciais):</label>
              <textarea id="description" className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" style={{ height: 100}} value={request.description} onChange={onInputChange}></textarea>
            </div>
          
            <div className="form-floating mb-3">
              <label htmlFor="contact" className="block text-sm font-medium leading-6 text-gray-900">Contato (telefone ou e-mail):</label>
              <input type="text" id="contact" className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" maxLength={150} value={request.contact} onChange={onInputChange}/>
            </div>
          
            <div className="form-floating mb-3">
              <label htmlFor="goal" className="block text-sm font-medium leading-6 text-gray-900">Meta em BNB (deixe em branco caso não deseje receber doação em cripto):</label>
              <input type="number" id="goal" placeholder="0.00" className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" value={request.goal} onChange={onInputChange} />
            </div>
            <div className="flex items-center w-full">
              <Link href="/" passHref className="w-1/3 mr-2">
                <button className="w-full px-3 py-2 mb-3 mr-2 rounded-md border-2 border-slate-300 hover:border-slate-900">
                  Voltar
                </button>
              </Link>
              <button type="button" className="mb-3 px-3 py-2.5 flex w-full justify-center rounded-md bg-slate-900 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-slate-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900" onClick={btnSaveClick}>Enviar Pedido</button>
            </div>
          </div>
        </div>
      <Footer/>
    </WalletProvider>
  );
}