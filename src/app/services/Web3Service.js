import Web3 from "web3"

export async function doLogin() {
  if(!window.ethereum) throw new Error("Sem metamask instalada!");

  const web3 = new Web3(window.ethereum);
  const accounts = await web3.eth.requestAccounts();
  if(!accounts || !accounts.length) throw new Error("Carteira não permitida!")

  localStorage.setItem("wallet", accounts[0].toLowerCase());
  return accounts[0];
}