import React from 'react';
import Image from 'next/image';
import deskImage from './assets/benefit.png';
import { UploadFileEntityResponse } from '@utils/types';
import findMediaUrl from '@utils/findMediaUrl';
import ReactMarkdown from 'react-markdown';

export interface P {
  title: string;
  description: string;
  image?: UploadFileEntityResponse;
  alignment: 'left' | 'center' | 'right';
}

function Benefit({ title, description, image, alignment }: P): JSX.Element {
  return (
    <span className="max-w-[400px]">
      <div className="flex flex-col items-center">
        <div>
          {image?.data && (
            <Image
              alt="image"
              src={findMediaUrl(image) ?? deskImage.src}
              height={image.data.attributes?.height ?? 100}
              width={image.data.attributes?.width ?? 100}
            />
          )}
        </div>
        <h3
          className={`w-full ${
            alignment === 'right'
              ? 'text-right'
              : alignment === 'left'
              ? 'text-left'
              : 'text-center'
          }   text-[24px] font-semibold leading-tight text-orange sm:text-[24px]`}
        >
          {title}
        </h3>
        <div
          className={`w-full ${
            alignment === 'right'
              ? 'text-right'
              : alignment === 'left'
              ? 'text-left'
              : 'text-center'
          } mt-2 text-[20px] font-light text-darkGrey  sm:text-[18px]`}
        >
          <ReactMarkdown>{description}</ReactMarkdown>
        </div>
      </div>
    </span>
  );
}

export default Benefit;
