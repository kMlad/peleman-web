import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import SVG from "react-inlinesvg";

import { Link as HeaderLink } from "../Header/MegaMenu";
import { HeaderData, P as MegaMenuProps } from "./MegaMenu";
import x from "./assets/x.png";
import logo from "./assets/burgerLogoNew.svg";
import avatar from "./assets/icon.png";
import cart from "./assets/cart.svg";
import arrow from "./assets/burgerarrow.svg";
import Button from "@components/Button";

interface BurgerMenuProps extends MegaMenuProps {
  closeBurgerMenu: () => void;
  currentSlug: string;
  headerSolutions: HeaderData;
  headerAdditionalProducts: HeaderData;
}

const BurgerMenu = ({
  navLinks,
  closeBurgerMenu,
  headerSolutions,
  headerAdditionalProducts,
}: BurgerMenuProps) => {
  const [solutionsMenu, setSolutionsMenu] = useState<boolean>(false);
  const [additionalProductsMenu, setAdditionalProductsMenu] =
    useState<boolean>(false);

  return (
    <>
      <section id="mobile" className="block lg:hidden">
        <div className="fixed inset-0 z-50 h-screen w-full overflow-y-scroll bg-orange xl:hidden">
          <div>
            <nav className="flex flex-row items-center justify-between px-5 py-3">
              <Link href="/home">
                <Image
                  src={logo.src}
                  alt="logo"
                  height={38.675}
                  width={196.3}
                />
              </Link>{" "}
              <div className=" flex flex-row  items-center justify-end gap-x-6">
                <button
                  className="flex cursor-pointer items-center"
                  onClick={() => closeBurgerMenu()}
                >
                  <Image src={x.src} alt="x" width={24.16} height={24.12} />
                </button>
              </div>
            </nav>
            <div className="flex w-full flex-row ">
              <ul
                className={`mt-11 flex w-full flex-col items-end justify-end gap-y-6 pr-5 text-right text-xl text-white`}
              >
                {navLinks?.map((item) => (
                  <>
                    <li
                      key={item.name}
                      className={`flex items-center ${
                        item.name === "Уреди за коричење" ||
                        item.name === "Персонализација" ||
                        item.name === "Дома" ||
                        item.name === "За нас"
                          ? ""
                          : "pb-5"
                      }`}
                    >
                      {item.name !== "Уреди за коричење" &&
                        item.name !== "Персонализација" && (
                          <Link
                            href={item.href}
                            passHref
                            onClick={() => closeBurgerMenu()}
                          >
                            {item.name}
                          </Link>
                        )}

                      {item.name === "Уреди за коричење" && (
                        <button
                          onClick={() =>
                            setAdditionalProductsMenu(!additionalProductsMenu)
                          }
                          className="flex items-center"
                        >
                          <p>{item.name}</p>
                          <SVG
                            src={arrow.src}
                            className={`ml-2 transition duration-200 ${
                              additionalProductsMenu ? "rotate-180" : ""
                            }`}
                          />
                        </button>
                      )}
                      {item.name === "Персонализација" && (
                        <button
                          onClick={() => setSolutionsMenu(!solutionsMenu)}
                          className="flex items-center"
                        >
                          <p>{item.name}</p>
                          <SVG
                            src={arrow.src}
                            className={`ml-2 transition duration-200 ${
                              solutionsMenu ? "rotate-180" : ""
                            }`}
                          />
                        </button>
                      )}
                    </li>
                    {item.name === "Уреди за коричење" &&
                      additionalProductsMenu && (
                        <ul className="flex flex-col gap-y-4 pb-5 text-lg">
                          {headerAdditionalProducts.categories?.[0].subitems?.map(
                            (item: HeaderLink, index: number) => (
                              <Link
                                onClick={() => closeBurgerMenu()}
                                key={index}
                                href={item.link}
                                passHref
                              >
                                {item.cta}
                              </Link>
                            )
                          )}
                        </ul>
                      )}
                    {item.name === "Персонализација" && solutionsMenu && (
                      <ul className="flex flex-col gap-y-4 pb-5  text-lg">
                        {headerSolutions.categories?.[0].subitems?.map(
                          (item: HeaderLink, index: number) => (
                            <Link
                              onClick={() => closeBurgerMenu()}
                              key={index}
                              href={item.link}
                              passHref
                            >
                              {item.cta}
                            </Link>
                          )
                        )}
                      </ul>
                    )}
                  </>
                ))}
              </ul>
            </div>
          </div>

          <div className=" mt-6 flex w-full font-bold cursor-pointer flex-row justify-end gap-x-4 pr-5 ">
            <Button cta="Контакт" link="/kontakt" color="tertiary" />
          </div>
        </div>
      </section>
    </>
  );
};

export default BurgerMenu;
