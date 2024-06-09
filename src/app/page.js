'use client'
import Footer from "./components/Footer";
import Header from "./components/Header";

export default function Home() {
  return (
    <>
      <Header/>
      <div className="container">
        <div>
          <p className="text-slate-900">Ajude as vítimas de enchentes e demais desastres naturais do Brasil</p>
        </div>
        <div>
          container lista
        </div>
      </div>
      <Footer/>
    </>
  );
}
