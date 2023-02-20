import React from "react";
import Image from "next/image";
import logo from "../../../assets/logo-small-white.svg";
import facebookImage from "../../../assets/facebook.svg";
import instagramImage from "../../../assets/instagram.svg";
import messengerImage from "../../../assets/messenger.svg";
import Link from "next/link";

const FooterBlock = ({}): JSX.Element => {
  return (
    <section className="w-full bg-darkNavy px-4">
      <div className="container mx-auto flex w-full flex-col">
        <div className=" flex w-full flex-col items-center justify-between  py-[50px] md:flex-row ">
          <Link href={"/doma"} className="cursor-pointer">
            <Image
              unoptimized
              src={logo.src}
              alt=" logo"
              width={110}
              height={109.36}
              className=" cursor-pointer"
            />
          </Link>

          <div className="mt-10 flex flex-col  gap-y-2 text-center text-lg font-extralight text-white md:-mb-16 md:mt-0 md:text-right">
            <div className=" text-[20px] font-semibold">
              <div>Помош и Поддршка</div>
            </div>
            <div>
              <Link href={"/kontakt"}>Контакт</Link>
            </div>
            <div>
              {" "}
              <Link href={"/za-nas"}>За Пелеман</Link>
            </div>
            <div>
              {" "}
              <Link href={"#"}>Сите производи</Link>
            </div>
            <div>
              {" "}
              <Link href={"https://peleman.com"} target="_blank">Peleman International</Link>
            </div>
          </div>
        </div>
        <div className=" self-center text-[20px] font-semibold text-white md:self-start">
          Заследете нè
        </div>
        <div className="flex w-full flex-col items-center justify-between gap-y-10 pt-5 pb-7 md:flex-row md:items-start md:gap-y-0 md:pt-5 ">
          <div className="flex gap-5">
            <a href="#" target="_blank" rel="noopener noreferrer">
              <Image
                unoptimized
                src={facebookImage.src}
                alt=" logo"
                width={38}
                height={38}
                className="cursor-pointer"
              />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <Image
                unoptimized
                src={instagramImage.src}
                alt=" logo"
                width={38}
                height={40}
                className="cursor-pointer"
              />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <Image
                unoptimized
                src={messengerImage.src}
                alt="logo"
                width={38}
                height={38}
                className="cursor-pointer"
              />
            </a>
          </div>
          <div
            className="flex flex-col text-center 
          text-lg font-light  text-white md:flex-row md:text-start"
          >
            <div className="pr-5 "> &copy; 2023</div>
            <div>
              Принтин Тоуцх Д.О.О.Е.Л 
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FooterBlock;
