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
      style = ` font-normal border-2 border-secondary bg-secondary  px-[35px] py-[12px] text-base text-white transition  duration-200 hover:border-2 hover:border-secondary hover:bg-transparent hover:text-secondary md:text-lg lg:px-[40px] lg:py-[13px]`;
      break;
    case "secondary":
      style = ` text-base md:text-lg  justify-center  px-[42px]  py-[12px]  text-secondary hover:text-white transition  duration-200 hover:bg-secondary hover:border-2 border-secondary   hover:border-secondary border-2 bg-white `;
      break;
    case "tertiary":
      style = ` justify-center text-base lg:text-lg px-[42px]  py-[12px]  text-white hover:text-white transition  duration-200 hover:bg-primaryLight		 hover:border-2 border-primary   hover:border-primaryLight border-2 bg-primary `;
      break;
    case "quaternary":
      style = ` text-base md:text-lg  justify-center  px-[42px]  py-[12px]  text-primary hover:text-white transition  duration-200 hover:bg-primary hover:border-2 border-primary   hover:border-primary border-2 bg-white `;
      break;
    default:
      null;
      break;
  }

  return (
    <div className="my-3  ">
      {!clickHandler && !link && <p className={style}>Error</p>}
      {clickHandler && (
        <button type="button" className={`${style} rounded-md`} onClick={clickHandler}>
          {cta}
        </button>
      )}
      {link && (
        <Link href={link} className={`${style} whitespace-nowrap rounded-md`}>
          {cta}
        </Link>
      )}
    </div>
  );
}
export default Button;
