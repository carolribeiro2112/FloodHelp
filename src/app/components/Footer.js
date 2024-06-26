export default function Footer () {
  return(
    <footer className="flex flex-wrap justify-between items-center border-t border-slate-900 border-solid p-3 m-5 fixed bottom-0 left-0 right-0">
        <p className="mb-0 text-slate-900">
          &copy; 2024 FloodHelp, Inc.
        </p>
        <ul className="flex justify-end">
          <li className="nav-item"><a href="/" className="px-2 text-slate-900">Ajudar</a></li>
          <li className="nav-item"><a href="/create" className="px-4 text-slate-900">Pedir Ajuda</a></li>
        </ul>
      </footer>
  )
}