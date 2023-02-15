import React from 'react';
import { ComponentBlocksCallToAction } from '@utils/types';
import Button, { P as ButtonProps } from '@components/Button';
import ReactMarkdown from 'react-markdown';

interface P {
  title: string;
  description: string;
  buttons: ButtonProps[];
}

function CallToActionBlock({ buttons, title, description }: ComponentBlocksCallToAction): JSX.Element {
  return (
    <div className="h-full w-full bg-darkNavy sm:py-0">
      <div className="container mx-auto flex flex-col justify-between gap-y-5 py-14 sm:gap-y-0 md:flex-row">
        <div className="basis-1/2">
          <h3 className=" text-2xl text-white  sm:text-3xl ">{title}</h3>
          <div className=" mt-2 text-base font-thin sm:text-lg lg:w-[80%] ">
            <div className="text-white prose-strong:font-bold">
              <ReactMarkdown>{description ?? ''}</ReactMarkdown>
            </div>
          </div>
        </div>
        <div className=" flex basis-1/2 flex-col gap-2 md:items-end">
          {buttons.map((item, index: number) => (
            <div key={index}>
              <Button cta={(item && item.cta) ?? ""} link={(item && item.link) ?? ""} color={'primary'} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CallToActionBlock;
