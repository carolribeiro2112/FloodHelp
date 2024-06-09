export default function Header () {
  return(
    <div className="mx-auto py-5 bg-slate-900 flex items-center justify-center">
      <header className="p-3 bg-slate-900 flex flex-1 flex-row justify-between items-center max-w-[1200px]">
        <div className="justify-self-start">
          <a href="/" className="no-underline">
            <h1 className="font-bold text-slate-100">FloodHelp</h1>
          </a>
        </div>
        <div className="flex flex-row items-center space-x-8 m-0">
          <div className="flex flex-row items-center">
            <img src="/metamask.svg" className="w-6"/>
          <button type="button" className="flex border-solid border border-white text-slate-100 p-2 rounded-md"> Entrar</button>
          </div>
          <button type="button" className="bg-yellow-400 text-slate-900 p-2 rounded-md"><a href="/create">Pedir Ajuda</a></button>
        </div>
      </header>
      </div>
  )
}