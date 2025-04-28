import Link from "next/link";
import Image from "next/image";
import Button from "../common/Button";

export default function Header() {
  return (
    <header className="shadow-dream bg-[url('/background.jpg')] md:gap-10 lg:gap-20 flex justify-center p-5 m-3 rounded-xl">
      <div className="my-6 flex flex-col text-center items-center md:items-end gap-5 w-sm lg:w-md md:text-right md:my-auto lg:mt-24">
        <h2 className="lg:leading-10 text-4xl md:text-4xl lg:text-5xl font-bold">
          <span className="text-nowrap">Onde seu sonho</span>
          <span className="block">se torna realidade</span>
        </h2>
        <Link href="/">
          <Button>Visualizar sonhos</Button>
        </Link>
      </div>
      <Image
        className="hidden md:block md:w-56 md:h-56 lg:w-96 lg:h-96 rounded-full shadow-dream"
        width={400}
        height={400}
        src="/dreams-for-sale-icon.png"
        alt=""
      />
    </header>
  );
}
