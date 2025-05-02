export default function Login() {
  return (
    <div className="h-screen bg-[--gray-bg] flex justify-center items-center">
      <section>
        <img src="/imgs/Image_Login.svg" alt="" />
      </section>
      <section className="bg-white w-[600px] h-[600px] rounded-r-[20px] flex justify-center items-center flex-col">
      <h1 className="text-[40px] font-bold text-[--blue-bg] text-center mb-6">Entrar</h1>
        <form action="" method="post" className="flex flex-col gap-4">
          <div className="input-bg">
            <img src="/imgs/User.svg" alt="" />
            <input type="email" name="email" id="email" placeholder="Email" className="bg-[--input-bg]"/>
          </div>
          <div className="input-bg">
            <img src="/imgs/Locked.svg" alt="" />
            <input type="password" name="password" id="password" placeholder="Senha" className="bg-[--input-bg]"/>
          </div>
          <div className="flex justify-between text-[--blue-bg]">
            <div className="flex gap-3">
              <input type="checkbox" name="checkbox" id="checkbox" className="bg-[--input-bg]"/>
              <p>Lembrar senha</p>
            </div>
            <a href="" className="hover:underline">Esqueci minha senha</a>
          </div>
          <input type="button" value="ENTRAR" className="h-[60px] w-[200px] bg-[--blue-bg] mx-auto text-white font-bold text-[24px] rounded-3xl m-5"/>
        </form>
        <p className="m-3">Ainda não possui uma conta? <a href="http://localhost:3000/cadastro" className="hover:underline text-blue-500">Cadastre-se</a></p>
        <div className="flex items-center gap-3 mb-5">
          <div className="h-[1px] w-[137px] bg-[--blue-bg] rounded-full"></div>
          <p>ou entre com</p>
          <div className="h-[1px] w-[137px] bg-[--blue-bg] rounded-full"></div>
        </div>
        <div className="flex gap-12">
          <a href="" className="w-[100px] h-[100px] bg-[--input-bg] rounded-full flex justify-center items-center"><img src="/imgs/Google-Logo.svg" alt=""/></a>
          <a href="" className="w-[100px] h-[100px] bg-[--input-bg] rounded-full flex justify-center items-center"><img src="/imgs/Facebook-Logo.svg" alt=""/></a>
          <a href="" className="w-[100px] h-[100px] bg-[--input-bg] rounded-full flex justify-center items-center"><img src="/imgs/Microsoft-Logo.svg" alt=""/></a>
        </div>
      </section>
    </div>
  );
}