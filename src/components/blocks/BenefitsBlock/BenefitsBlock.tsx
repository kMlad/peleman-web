import React from 'react';
import Benefit from '@components/Benefit';
import placeholderImage from './assets/secondImage.png';
import {
  ComponentBlocksBenefits,
  UploadFileEntityResponse,
} from '@utils/types';
import ReactMarkdown from 'react-markdown';

function BenefitsBlock({
  title,
  benefits,
}: ComponentBlocksBenefits): JSX.Element {
  return (
    <>
      <div className="container mx-auto  flex flex-col justify-between px-4 lg:flex-row ">
        <div className="-mt-32 w-[45%] lg:basis-[12%]">
          <div className=" w-full text-[26px] font-thin text-orange prose-strong:font-bold md:text-[32px]">
            <ReactMarkdown>{title}</ReactMarkdown>
          </div>
        </div>
        <div className=" mt-20 flex flex-col gap-20 self-end sm:mt-0 lg:flex-row">
          {benefits?.map((item, index) => (
            <Benefit
              key={index}
              description={item?.description ?? ''}
              title={item?.title ?? ''}
              image={
                item?.image ??
                (placeholderImage.src as UploadFileEntityResponse)
              }
              alignment={item?.alignment as 'left' | 'right' | 'center'}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default BenefitsBlock;
