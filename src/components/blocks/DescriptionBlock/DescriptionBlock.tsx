import { ComponentBlocksDescription } from '@utils/types';
import React from 'react';
import ReactMarkdown from 'react-markdown';

function DescriptionBlock({
  description,
  alignment,
  fontSize,
}: ComponentBlocksDescription): JSX.Element {
  return (
    <div className="container m-auto flex 2xl:px-40">
      <div className="mt-10 w-full">
        <div
          className={` ${
            alignment === 'right'
              ? 'text-right'
              : alignment === 'left'
              ? 'text-left'
              : 'text-center'
          } ${
            fontSize == 'Large'
              ? 'text-[20px] leading-9 sm:text-[28px]'
              : fontSize == 'Small'
              ? 'text-[18px] leading-7  sm:text-[22px]'
              : 'text-[20px] leading-9  sm:text-[28px]'
          }              
              font-light  text-darkGrey prose-ul:ml-5 prose-ul:list-disc`}
        >
          <ReactMarkdown>{description ?? ""}</ReactMarkdown>
        </div>
      </div>
    </div>
  );
}
export default DescriptionBlock;
