import Link from "next/link";
import { MdOutlineShoppingCart } from "react-icons/md";
import { MdOutlineDarkMode } from "react-icons/md";

export default function Navbar() {
  return (
    <nav className="bg-[url('/background.jpg')] m-3 mb-5 px-5 py-4 z-40 sticky top-0 rounded-xl shadow-dream flex justify-between">
      <Link className="hover:drop-shadow-glow flex gap-2 items-center" href="/">
        <MdOutlineDarkMode className="text-2xl" />
        <h1 className="hidden font-bold md:block lg:text-2xl">
          Dreams for Sale
        </h1>
      </Link>
      <div className="flex text-sm sm:text-base gap-3 sm:gap-5 lg:gap-16 md:mr-20 xl:mr-40 items-center">
        <Link className="hover:drop-shadow-glow" href="/produtos">
          Produtos
        </Link>
        <Link className="hover:drop-shadow-glow" href="#Sobre">
          Sobre
        </Link>
        <Link className="hover:drop-shadow-glow" href="/contato">
          Contato
        </Link>
      </div>
      <Link
        className="hover:drop-shadow-glow flex items-center"
        href="/carrinho">
        <MdOutlineShoppingCart className="text-2xl" />
      </Link>
    </nav>
  );
}
