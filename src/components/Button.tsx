import { ButtonHTMLAttributes } from "react";

export default function Button({
  reverse,
  ...rest
}: { reverse?: boolean } & ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...rest}
      className={`${
        reverse
          ? "border border-dWhite-200 text-dWhite-200 hover:text-dPurple-800 hover:bg-dWhite-200"
          : "text-dPurple-800 bg-dWhite-200"
      } hover:cursor-pointer w-fit duration-300 hover:scale-105 hover:drop-shadow-glow px-8 font-bold p-3 rounded-full ${
        rest.className
      }`}>
      {rest.children}
    </button>
  );
}
