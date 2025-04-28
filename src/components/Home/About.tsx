import { MdOutlineDarkMode } from "react-icons/md";

export default function About() {
  return (
    <section
      id="Sobre"
      className="mb-20 flex flex-col items-center shadow-dream bg-dPurple-700 m-3 p-5 rounded-xl">
      <div className="z-10 mt-8 max-w-4xl">
        <h2 className="border-b border-dWhite-200/70 pb-8 mb-8 text-center text-4xl font-bold">
          Nossa missão 🎯
        </h2>
        <div className="font-light leading-6 flex flex-col gap-8 text-dWhite-400">
          <p>
            <strong className="text-dWhite-200">
              <b>Dreams for Sale</b> é mais do que uma loja...
            </strong>
          </p>

          <p>
            <strong className="text-dWhite-200">
              ...é um portal para o imaginário,{" "}
            </strong>
            um espaço onde a realidade se mistura com a fantasia e{" "}
            <strong className="text-dWhite-200">
              onde o impossível se torna possível.
            </strong>
          </p>

          <p>
            Em um mundo saturado de produtos comuns, nós oferecemos algo{" "}
            <strong className="text-dWhite-200">
              verdadeiramente único: <br />
              Itens que ainda não existem, mas que vivem em seus sonhos e
              imaginações.
            </strong>
          </p>

          <p>
            Nossa missão é{" "}
            <strong className="text-dWhite-200">transformar</strong> seus
            desejos mais profundos{" "}
            <strong className="text-dWhite-200">em realidade</strong>,
            oferecendo uma coleção de produtos que desafiam as convenções e
            despertam a{" "}
            <strong className="text-dWhite-200">criatividade</strong>. Cada item
            em nossa loja é uma promessa de{" "}
            <strong className="text-dWhite-200">inovação</strong>, uma peça do
            futuro feita sob medida para você.
          </p>

          <p>
            Explore nossas categorias e deixe-se levar por um universo de{" "}
            <strong className="text-dWhite-200">
              possibilidades infinitas
            </strong>
            . Na{" "}
            <strong className="text-dWhite-200">
              <b>Dreams for Sale</b>
            </strong>
            , cada visita é uma nova aventura e cada compra, um passo em direção
            ao <strong className="text-dWhite-200">extraordinário</strong>.
          </p>

          <p className="pt-8 border-t border-dWhite-200/70 text-dWhite-200 mb-10">
            <strong>Bem-vindo ao futuro.</strong>
            <br />
            <span className="flex items-center gap-2">
              <MdOutlineDarkMode className="text-2xl" />
              <strong>Bem-vindo ao seu sonho.</strong>
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
