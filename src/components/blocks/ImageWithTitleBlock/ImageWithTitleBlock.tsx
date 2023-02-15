import React from 'react';
import Image from 'next/image';
import TimerImage from './assets/TimerImage.svg';
import { ComponentBlocksImageWithTitle } from '@utils/types';
import findMediaUrl from '@utils/findMediaUrl';
import ReactMarkdown from 'react-markdown';

function ImageWithTitleBlock({
  title,
  image,
}: ComponentBlocksImageWithTitle): JSX.Element {
  return (
    <div className="container my-10 mx-auto flex flex-col items-center justify-center gap-4 md:flex-row xl:px-4 2xl:px-0">
      <div className="shrink-0">
        <Image
          alt="image"
          src={findMediaUrl(image) ?? (TimerImage as string)}
          height={image?.data?.attributes?.height ?? 138}
          width={image?.data?.attributes?.width ?? 107}
        />
      </div>
      <ReactMarkdown className=" max-w-[780px]  text-center text-xl prose-strong:text-orange sm:text-[32px]">
        {title ?? ''}
      </ReactMarkdown>
    </div>
  );
}

export default ImageWithTitleBlock;
