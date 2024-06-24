import {generateAvatarURL} from "@cfx-kit/wallet-avatar"
import Web3 from "web3";

export default function Request({data}) {

  function btnCloseClick() {
    if (!confirm("Tem certeza que deseja fechar este pedido?")) return;

    closeRequest(data.id)
      .then(result => {
        alert("Pedido fechado com sucesso. Em alguns minutos deixará de ser visto no site.");
        window.location.reload();
      })
      .catch(err => {
        console.error(err);
        alert(err.message);
      })
  }

  function btnHelpClick() {
    const donationInBnb = prompt("O quanto deseja doar (em BNB)?", 0);
    donate(data.id, donationInBnb)
      .then(result => {
        alert("Doação efetuada com sucesso. Em alguns minutos será processada.");
        window.location.reload();
      })
      .catch(err => {
        console.error(err);
        alert(err.message);
      })
  }

  return(
    <div className="gap-3 p-3 my-3 border rounded-lg flex justify-between">
      <div>
      <div className="flex items-center mb-2">
        <img src={generateAvatarURL(data.author)} width="32" height="32" className="mr-2 rounded-full" />
        <h6 className="mb-0">{data.title} &rsaquo;&rsaquo; Contato: {data.contact}</h6>
      </div>
      <p className="opacity-75 pe-5 mb-0 me-5">{data.description}</p>
      <span className="me-1 opacity-75">Meta:</span>
        <span className="opacity-50">
          {
            data.balance
              ? `BNB ${Web3.utils.fromWei(data.balance, "ether")} obtidos de ${Web3.utils.fromWei(data.goal, "ether")}`
              : `BNB ${Web3.utils.fromWei(data.goal, "ether")}`
          }
      </span>  
      </div> 
      <div className="w-1/4 flex text-end items-center justify-center">
        {
          localStorage.getItem("wallet") === data.author.toLowerCase()
            ? <button type="button" className="flex w-1/2 justify-center rounded-md bg-red-500 text-slate-50" onClick={btnCloseClick}>Fechar</button>
            : <button type="button" className="flex w-1/2 justify-center rounded-md bg-green-500 text-slate-50" onClick={btnHelpClick}>&#36; Ajudar</button>
        }
      </div>   
    </div>
  )
}