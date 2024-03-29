/* eslint-disable tailwindcss/no-custom-classname */
import React from "react";
import Image from "next/image";
import { ComponentBlocksMarquee } from "@utils/types";
import findMediaUrl from "@utils/findMediaUrl";
import Marquee from "react-fast-marquee";

function MarqueeBlock({ title, logos }: ComponentBlocksMarquee): JSX.Element {

  

  return (
    <>
      <div className="relative my-10 flex max-h-[273px] flex-col items-center overflow-x-hidden">
        <h3 className=" my-10 text-3xl font-semibold text-secondary">{title}</h3>
        <Marquee speed={60} className="flex  flex-row">
          {logos?.data.map((logoItem, index) => (
            <div
              className="mx-10 text-4xl grayscale hover:grayscale-0"
              key={index}
            >
              <Image
                alt="image"
                src={findMediaUrl({ data: logoItem }) ?? ""}
                height={logoItem.attributes?.height ?? 100}
                width={logoItem.attributes?.width ?? 100}
                unoptimized
              />
            </div>
          ))}
        </Marquee>
      </div>
    </>
  );
}

export default MarqueeBlock;
