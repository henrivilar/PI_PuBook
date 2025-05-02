import Link from "next/link";

export default function Cadastro() {
  return (
    <div className="h-screen bg-[--gray-bg] flex justify-center items-center">
      <section className="bg-white w-[600px] h-[600px] rounded-l-[20px] flex justify-center items-center flex-col">
      <h1 className="text-[40px] font-bold text-[--blue-bg] text-center mb-6">Entrar</h1>
        <form action="" method="post" className="flex flex-col gap-4">
          <div className="input-bg">
            <img src="/imgs/User.svg" alt="" />
            <input type="text" name="nome" id="nome" placeholder="Nome" className="bg-[--input-bg] outline-none w-full"/>
          </div>
          <div className="input-bg">
            <img src="/imgs/User.svg" alt="" />
            <input type="text" name="sobrenome" id="sobrenome" placeholder="Sobrenome" className="bg-[--input-bg] outline-none w-full"/>
          </div>
          <div className="input-bg">
            <img src="/imgs/Tag.svg" alt="" />
            <input type="email" name="email" id="email" placeholder="Email" className="bg-[--input-bg] outline-none w-full"/>
          </div>
          <div className="input-bg">
            <img src="/imgs/Locked.svg" alt="" />
            <input type="password" name="password" id="password" placeholder="Senha" className="bg-[--input-bg] outline-none w-full"/>
          </div>
          <div className="input-bg">
            <img src="/imgs/Locked.svg" alt="" />
            <input type="password" name="password" id="password" placeholder="Confirmar Senha" className="bg-[--input-bg] outline-none w-full"/>
          </div>
          <input type="button" value="CADASTRE-SE" className="h-[60px] w-[200px] bg-[--blue-bg] mx-auto text-white font-bold text-[24px] rounded-3xl m-5 hover:shadow-xl hover:bg-[#4F5D75] hover:cursor-pointer"/>
        </form>
        <div>
        <p>Já possui uma conta? <Link href="/login" className="hover:underline text-blue-500">Entrar</Link></p>
      </div>
      </section>
      <section>
        <img src="/imgs/Image_Cadastro.svg" alt="" />
      </section>
    </div>
  );
}