import React from "react";
import Image from "next/image";
import findMediaUrl from "@utils/findMediaUrl";
import { ComponentBlocksLeftImageRightText } from "@utils/types";
import ReactMarkdown from "react-markdown";

function LeftImageRightTextBlock({
  title,
  description,
  image,
}: ComponentBlocksLeftImageRightText): JSX.Element {
  return (
    <>
      <div className="container mx-auto my-20 flex flex-col px-4 md:flex-row">
        <div className={`flex h-full w-full xl:w-[90%]`}>
          <Image
            alt="image"
            src={findMediaUrl(image) ?? ""}
            height={316}
            width={316}
          />
        </div>
        <div className="md:pl-10">
          <h3 className=" mt-12 mb-8 w-full text-lg font-semibold text-darkNavy md:w-[80%] ">
            {title}
          </h3>
          <div className=" w-full list-disc text-lg  font-thin leading-8 md:w-[90%]">
            <ReactMarkdown>{description ?? ""}</ReactMarkdown>
          </div>
        </div>
      </div>
    </>
  );
}

export default LeftImageRightTextBlock;
