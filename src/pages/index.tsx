export default function Home() {
  return (
    <body className="bg-[--gray-bg]">
      <header className="">
        <nav className="w-10/12 h-20 bg-white flex justify-around items-center text-[--blue-text] rounded-xl my-10 shadow-lg mx-auto">
          <img src="/imgs/Logo.png" alt="" className="w-12 h-12" />
          <ul className="flex gap-10 font-bold">
            <li className="hover:underline"><a href="">Quem somos</a></li>
            <li className="hover:underline"><a href="">Tutorial</a></li>
            <li className="hover:underline"><a href="">Duvidas</a></li>
            <li className="hover:underline"><a href="">Contatos</a></li>
          </ul>
          <button className="text-[--gray-bg] bg-[--blue-text] font-bold w-44 h-12 rounded-full">Começar Leitura</button>
        </nav>
      </header>
      <main className="flex flex-col items-center justify-center mt-10 leading-none">
        {/* Hero Section */}
        <section className="text-center">
          <h2 className="text-[--blue-text] text-[50px] font-serif">Descubra novos mundos com o</h2>
          <h1 className="text-[--blue-text] text-[100px] font-bold">PUBOOK</h1>
          <img src="/imgs/Book_Hero.png" alt="" className="mb-4" />
        </section>
        {/* Quem Somos */}
        <section className="w-full pt-40 pb-40 bg-[--blue-bg] flex justify-between text-center">
          <div className="flex items-center justify-center mx-auto">
            <img src="/imgs/Logo.png" alt="" className="mx-auto drop-shadow-2xl w-96" />
          </div>
          <div className="bg-[#D9D9D9] w-6/12 rounded-s-2xl">
            <p className="text-[--blue-text] text-3xl p-10">O PuBook é um projeto desenvolvido por 7 alunos dos cursos de Sistemas da Informação e Análise e Desenvolvimento de Sistemas da Faculdade Paraíso, nessa plataforma os leitores terão acesso a um grande acervo de livros de domínio público tornando a leitura mais acessível e prática para o público geral, pensando na acessibilidade, o PuBook oferece um recurso que é a disponibilização de livros em áudio. Crie sua conta e desfrute do poder transformador da leitura. </p>
            <button type="submit" className="bg-[--blue-text] p-6 mb-10 text-2xl font-bold rounded-3xl text-[--gray-bg]">Criar Minha Conta</button>
          </div>
        </section>
        {/* Tutorial Section */}
        <section className="flex flex-col justify-start w-full px-20 py-10 text-left">
          <h2 className="text-[--blue-text] text-3xl font-bold">Veja como é fácil usar o PuBook!</h2>
          <p className="text-[--blue-text] text-xl">Assista a esse tutorial e aprenda a como começar a ler uma nova história agora mesmo.</p>
        </section>
        {/* Perguntas Frequentes Section */}
        <section className="bg-[--blue-bg] w-full px-20 py-10">
          <h2 className="text-[--gray-bg] text-3xl font-bold mb-10">Perguntas Frequentes</h2>
          <div className="div-perguntas">
            <img src="/imgs/Mais.svg" alt="" />
            <p className="text-perguntas">O que e o PuBook?</p>
          </div>
          <div className="linha"></div>
          <div className="div-perguntas">
            <img src="/imgs/Mais.svg" alt="" />
            <p className="text-perguntas">Preciso pagar para usar o PuBook?</p>
          </div>
          <div className="linha"></div>
          <div className="div-perguntas">
            <img src="/imgs/Mais.svg" alt="" />
            <p className="text-perguntas">Quem pode usar o PuBook?</p>
          </div>
          <div className="linha"></div>
          <div className="div-perguntas">
            <img src="/imgs/Mais.svg" alt="" />
            <p className="text-perguntas">Como faço para começar a usar o PuBook?</p>
          </div>
          <div className="linha"></div>
          <div className="div-perguntas">
            <img src="/imgs/Mais.svg" alt="" />
            <p className="text-perguntas">Existe um limite de leitura no PuBook?</p>
          </div>
          <div className="linha"></div>
          <div className="div-perguntas">
            <img src="/imgs/Mais.svg" alt="" />
            <p className="text-perguntas">Quero ler um livro que não está disponível, o que devo fazer?</p>
          </div>
          <div className="linha"></div>
        </section>
        {/* Contatos Section */}
        <section className="w-full">
          <div className="px-20 py-10">
            <h2 className="text-9xl text-[--blue-text] font-bold">Contatos</h2>
            <p className="text-[--blue-text] text-xl">Ainda ficou com alguma dúvida? Entre em contatos conosco!</p>
          </div>
          <div className="bg-[--orange-bg] px-20 py-10 flex justify-around">
            {/* Left Side */}
            <div>
              <img src="/imgs/Logo.png" alt="" className="w-40 mb-5"/>
              {/* Links Redes Sociais */}
              <div className="flex gap-5">
                <a href=""><img src="/imgs/Gmail.svg" alt="" /></a>
                <a href=""><img src="/imgs/Facebook.svg" alt="" /></a>
                <a href=""><img src="/imgs/Instagram.svg" alt="" /></a>
              </div>
            </div>
            {/* Middle Side */}
            <div>
              <h2 className="text-3xl font-bold text-[--blue-text] mb-6">Navegue</h2>
              <div className="flex flex-col space-y-5 text-xl text-[--gray-bg]">
                <a href="">Quem somos</a>
                <a href="">Tutorial</a>
                <a href="">Duvidas</a>
              </div>
            </div>
            {/* Right Side */}
            <div>
              <h2 className="text-3xl font-bold text-[--blue-text] mb-6">Acesse</h2>
              <div className="flex flex-col space-y-5 text-xl text-[--gray-bg]">
                <a href="">Entrar</a>
                <a href="">Cadastre-se</a>
              </div>
            </div>
          </div>
        </section>
        {/* Footer */}
        <footer className="w-full bg-[--blue-text] py-5">
          <p className="text-sm text-center text-[--gray-bg]">© 2025 PuBook - Todos os direitos reservados.</p>
        </footer>
      </main>
    </body>
  );
}
