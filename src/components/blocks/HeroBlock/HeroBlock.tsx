import React from "react";
import Button from "../../components/Button";
import findMediaUrl from "../../../utils/findMediaUrl";
import { ComponentBlocksHero } from "@utils/types";
import ReactMarkdown from "react-markdown";

function HeroBlock({
  size,
  title,
  description,
  heroImage,
  smallTitle,
  button,
}: ComponentBlocksHero): JSX.Element {
  let style = "";

  switch (size) {
    case "large":
      style = `relative lg:h-[610px]  py-5 sm:h-full h-[351px]  sm:px-[40px] lg:pt-[120px]  h-full  w-full bg-cover bg-center bg-no-repeat`;
      break;
    case "medium":
      style = `relative xl:h-[550px] py-16  sm:px-[40px] sm:h-full h-[433px] h-full  w-full bg-cover bg-center bg-no-repeat `;
      break;
    case "small":
      style = `relative xl:h-[400px] py-16  sm:px-[20px] sm:h-full h-[300px] h-full  w-full bg-cover bg-center bg-no-repeat `;
      break;

    default:
      null;
      break;
  }
  return (
    <div
      className={style}
      style={{
        backgroundImage: `url('${findMediaUrl(heroImage)}')`,
      }}
    >
      <div className="absolute inset-0 z-10 bg-primaryLight opacity-30" />
      <div className="container mx-auto  flex flex-col sm:mt-0  ">
        <div className="z-20 text-base font-light text-white  sm:mt-16">
          {smallTitle}
        </div>
        {!smallTitle && <div className="py-4 lg:py-5" />}
        <div className="z-20 w-[80%] text-[28px] font-thin leading-[35px] text-white prose-strong:font-bold sm:w-[55%] lg:text-[50px] lg:leading-[50px]   ">
          <ReactMarkdown>{title}</ReactMarkdown>
        </div>
        {description && (
          <div className="z-20 mt-2 w-[60%] text-base font-light text-white md:mb-4 md:text-2xl lg:mt-[2px] lg:w-[35%]">
            {description}
          </div>
        )}
        <div className="z-20 my-12 sm:my-0 sm:mt-4 ">
          {button?.cta && (
            <Button
              color={button.color}
              link={button.link ?? "#"}
              cta={button.cta}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default HeroBlock;
