import Web3 from "web3"
import ABI from "./ABI.json"

const CONTRACT_ADDRESS = "0x1da21CE916C0B10b25c83d41942C62013c353717";

export async function doLogin() {
  if(!window.ethereum) throw new Error("Sem metamask instalada!");

  const web3 = new Web3(window.ethereum);
  const accounts = await web3.eth.requestAccounts();
  if(!accounts || !accounts.length) throw new Error("Carteira não permitida!")

  localStorage.setItem("wallet", accounts[0].toLowerCase());
  return accounts[0];
}

export async function getAllOpenRequests(lastId = 0) {
  if(!window.ethereum) throw new Error("Sem metamask instalada!");

  const from =localStorage.getItem("wallet");
  const web3 = new Web3(window.ethereum);

  const contract = new web3.eth.Contract(ABI,CONTRACT_ADDRESS, {from});
  const requests = await contract.methods.getAllOpenRequests(lastId+1, 10).call();
  return requests.filter(rq => rq.title !== "")
}