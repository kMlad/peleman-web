import React from 'react';
import Image from 'next/image';
import imageBig from '../ImageBlock/assets/image.png';
import {
  ComponentPageBlocksImage,
  UploadFileEntityResponse,
} from '@utils/types';
import findMediaUrl from '../../../utils/findMediaUrl';

function ImageBlock({ image, desc }: ComponentPageBlocksImage): JSX.Element {
  return (
    <div className="container mx-auto">
      <div className="container">
        <Image
          alt="image"
          src={findMediaUrl(image) ?? imageBig.src}
          height={image?.data?.attributes?.height ?? 221}
          width={image?.data?.attributes?.width ?? 600}
          layout="responsive"
        />
      </div>
      <div className=" container mt-2 text-sm text-darkGrey">{desc}</div>
    </div>
  );
}
export default ImageBlock;
