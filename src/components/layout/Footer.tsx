import {
  FaXTwitter,
  FaInstagram,
  FaLinkedin,
  FaFacebook,
} from "react-icons/fa6";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-20 flex flex-col items-center" id="Contato">
      <div className="z-10 flex flex-col gap-5 items-center">
        <div className="flex gap-5 text-2xl">
          <Link
            href=""
            className="hover:text-dPurple-800 hover:bg-dWhite-200 duration-300 hover:scale-105 hover:drop-shadow-glow shadow-dream rounded-xl justify-center items-center border flex w-12 h-12">
            <FaFacebook className="" />
          </Link>
          <a
            href=""
            className="hover:text-dPurple-800 hover:bg-dWhite-200 duration-300 hover:scale-105 hover:drop-shadow-glow shadow-dream rounded-xl justify-center items-center border flex  w-12 h-12">
            <FaInstagram />
          </a>
          <a
            href=""
            className="hover:text-dPurple-800 hover:bg-dWhite-200 duration-300 hover:scale-105 hover:drop-shadow-glow shadow-dream rounded-xl justify-center items-center border flex  w-12 h-12">
            <FaXTwitter />
          </a>
          <a
            href=""
            className="hover:text-dPurple-800 hover:bg-dWhite-200 duration-300 hover:scale-105 hover:drop-shadow-glow shadow-dream rounded-xl justify-center items-center border flex w-12 h-12">
            <FaLinkedin className="" />
          </a>
        </div>
        <div className="text-center mb-8 text-sm flex flex-col items-center">
          <p className="font-extralight">
            © 2024 Dreams for Sale, Inc. All rights reserved.
          </p>
          <p className="font-extralight">+55 4002-8992</p>
          <p className="mt-2 text-base text-dWhite-200 font-bold">
            <a className="duration-300 hover:drop-shadow-glow" href="#">
              Voltar ao topo
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
