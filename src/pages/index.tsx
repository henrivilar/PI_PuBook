import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <body className="bg-[#D4D4D4]">
      <header>
        <nav className="w-10/12 h-20 bg-white flex justify-around items-center text-[#2D3142] rounded-xl my-10 shadow-lg mx-auto">
        <img src="/imgs/Logo.png" alt="" className="w-12 h-12"/>
          <ul className="flex font-bold gap-10">
            <li className="hover:underline"><a href="">Quem somos</a></li>
            <li className="hover:underline"><a href="">Tutorial</a></li>
            <li className="hover:underline"><a href="">Duvidas</a></li>
            <li className="hover:underline"><a href="">Contatos</a></li>
          </ul>
          <button className="text-[#D4D4D4] bg-[#2D3142] font-bold w-44 h-12 rounded-full">Começar Leitura</button>
        </nav>
      </header>
      <main className="flex flex-col items-center justify-center text-center mt-10 leading-none">
        <h2 className="text-[#2D3142] text-[50px] font-serif">Descubra novos mundos com o</h2>
        <h1 className="text-[#2D3142] text-[100px] font-bold">PUBOOK</h1>
        <img src="/imgs/Book_Hero.png" alt="" />
      </main>
    </body>
  );
}
