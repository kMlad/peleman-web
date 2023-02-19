import Link from "next/link";
import React from "react";

export interface P {
  cta?: string;
  link?: string;
  clickHandler?: () => void;
  color: "primary" | "secondary" | "tertiary" | "quaternary";
}

function Button({ cta, color, link, clickHandler }: P): JSX.Element {
  let style = "";

  switch (color) {
    case "primary":
      style = `font-normal border-2 border-orange bg-orange  px-[35px] py-[12px] text-base text-white transition  duration-200 hover:border-2 hover:border-orange hover:bg-transparent hover:text-orange md:text-lg lg:px-[40px] lg:py-[13px]`;
      break;
    case "secondary":
      style = `text-base md:text-lg  justify-center  px-[42px]  py-[12px]  text-orange hover:text-white transition  duration-200 hover:bg-orange hover:border-2 border-orange   hover:border-orange border-2 bg-white `;
      break;
    case "tertiary":
      style = `justify-center text-base lg:text-lg px-[42px]  py-[12px]  text-white hover:text-white transition  duration-200 hover:bg-lightNavy		 hover:border-2 border-darkNavy   hover:border-lightNavy border-2 bg-darkNavy `;
      break;
    case "quaternary":
      style = `text-base md:text-lg  justify-center  px-[42px]  py-[12px]  text-darkNavy hover:text-white transition  duration-200 hover:bg-darkNavy hover:border-2 border-darkNavy   hover:border-darkNavy border-2 bg-white `;
      break;
    default:
      null;
      break;
  }

  return (
    <div className="my-3  ">
      {!clickHandler && !link && <p className={style}>Error</p>}
      {clickHandler && (
        <button type="button" className={style} onClick={clickHandler}>
          {cta}
        </button>
      )}
      {link && (
        <Link href={link} className={`${style} whitespace-nowrap`}>
          {cta}
        </Link>
      )}
    </div>
  );
}
export default Button;
