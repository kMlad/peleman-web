/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import Image from "next/image";
import Link from "next/link";
import React, { useCallback, useState } from "react";
import SVG from "react-inlinesvg";
import BurgerMenu from "./BurgerMenu";
import MegaMenu from "./MegaMenu";
import downArrow from "./assets/downArrow.svg";
import headerData, {
  headerDataSolutions,
  headerDataAdditionalProducts,
} from "./headerData";
import menu from "../../../assets/burger-white.svg";
import logoWhite from "../../../assets/logo-small-white.svg";
import logo from "../../../assets/new-logo.png";
import Button from "@components/Button";

interface P {
  currentSlug: string;
}

function HeaderBlock({ currentSlug }: P): JSX.Element {
  const [burgerMenu, setBurgerMenu] = useState<boolean>(false);
  const [megaMenuShow, setMegaMenuShow] = useState<
    "whyUs" | "solutions" | "products" | "support" | null
  >(null);

  const handleBurgerMenuClose = useCallback(() => {
    setBurgerMenu(false);
  }, []);

  const handleMegaMenuClose = useCallback(() => {
    setMegaMenuShow(null);
  }, []);

  return (
    <>
      <div className="relative z-50 w-full">
        <div className=" bg-orange ">
          <div className="flex h-[80px] flex-col justify-center shadow-customMobile lg:container lg:mx-auto lg:h-auto lg:py-1">
            <div className="flex items-center gap-x-4">
              <div
                id="menu-links"
                className="flex grow flex-col justify-around"
              >
                <div id="search-lang" className="flex  justify-end">
                  <div className="flex w-full items-center gap-x-8 lg:w-auto">
                    <div className="flex w-full flex-row items-center justify-between px-5 lg:hidden">
                      <Link href="/home">
                        <Image
                          src={logoWhite.src}
                          alt="menu"
                          height={53}
                          width={53}
                        />
                      </Link>
                      <button
                        className="flex flex-row   lg:hidden"
                        onClick={() => setBurgerMenu(true)}
                      >
                        <Image
                          src={menu.src}
                          alt="menu"
                          height={21}
                          width={31}
                        />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="hidden h-[70px] justify-between bg-white text-orange shadow-customDeep lg:flex lg:flex-row">
            <div className="container mx-auto flex flex-row items-center justify-between">
              <div className="hidden my-4 lg:block">
                <Link href="/doma" >
                  <Image src={logo.src} alt="logo" height={1} width={240} />
                </Link>
              </div>
              <div
                id="links"
                className={` ml-10 flex flex-row items-center justify-end font-semibold  lg:gap-x-7  `}
              >
                {headerData.navLinks?.map((link) => (
                  <span key={Math.random()}>
                    {link.name !== "Производи" &&
                      link.name !== "Индустрии" && (
                        <span className="hover:font-bold ">
                          <Link key={link.name} href={link.href}>
                            {link.name}
                          </Link>
                        </span>
                      )}

                    {link.name === "Производи" && (
                      <button
                        onClick={() =>
                          setMegaMenuShow(
                            megaMenuShow === "products" ? null : "products"
                          )
                        }
                        className="flex items-center hover:font-bold"
                      >
                        <p>{link.name}</p>
                        <SVG src={downArrow.src} className="ml-2" />
                      </button>
                    )}
                    {link.name === "Индустрии" && (
                      <button
                        onClick={() =>
                          setMegaMenuShow(
                            megaMenuShow === "solutions" ? null : "solutions"
                          )
                        }
                        className="flex items-center hover:font-bold"
                      >
                        <p>{link.name}</p>
                        <SVG src={downArrow.src} className="ml-2" />
                      </button>
                    )}
                    {link.name === "Support" && (
                      <button
                        onClick={() =>
                          setMegaMenuShow(
                            megaMenuShow === "support" ? null : "support"
                          )
                        }
                        className="flex items-center hover:font-bold"
                      >
                        <p>{link.name}</p>
                        <SVG src={downArrow.src} className="ml-2" />
                      </button>
                    )}
                    {/* {link.name === 'Security Solutions' && (
                    <button
                      onClick={() =>
                        setMegaMenuShow(
                          megaMenuShow === 'security' ? null : 'security'
                        )
                      }
                      className="flex items-center"
                    >
                      <p>{link.name}</p>
                      <SVG src={downArrow.src} className="ml-2" />
                    </button>
                  )} */}
                  </span>
                ))}
                <div className="hidden lg:flex">
                  <Button cta="Контакт" link="/kontakt" color="tertiary" />
                </div>
              </div>
            </div>
          </div>
        </div>
        {burgerMenu && (
          <BurgerMenu
            {...headerData}
            currentSlug={currentSlug}
            closeBurgerMenu={handleBurgerMenuClose}
            headerAdditionalProducts={headerDataAdditionalProducts}
            headerSolutions={headerDataSolutions}
          />
        )}
        {megaMenuShow === "solutions" && (
          <MegaMenu
            {...headerDataSolutions}
            closeMegaMenu={handleMegaMenuClose}
          />
        )}

        {megaMenuShow === "products" && (
          <MegaMenu
            {...headerDataAdditionalProducts}
            closeMegaMenu={handleMegaMenuClose}
          />
        )}
        
        
      </div>
    </>
  );
}

export default HeaderBlock;
