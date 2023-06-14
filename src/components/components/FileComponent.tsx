import React from 'react';
import Image from 'next/image';
import iconPlaceholder from './assets/icon.png';
import Link from 'next/link';

export interface P {
  title: string;
  link: string;
}

function FileComponent({ title, link }: P): JSX.Element {
  return (
    <div className="flex flex-row ">
      <div className="shrink-0">
        <Image alt="image" src={iconPlaceholder.src} height={56} width={56} />
      </div>
      <div className="flex flex-col pl-5">
        <h3 className="   mt-2 text-[22px] font-semibold text-darkGrey">
          {title}
        </h3>
        <Link
          href={`${
            process.env.NEXT_PUBLIC_STRAPI_URI ?? 'http://localhost:1337'
          }${link}`}
          passHref
        >
          <a
            className="text-left text-lg  font-medium text-primaryLight"
            href={link}
            target="_blank"
            rel="noreferrer"
          >
            Read PDF
          </a>
        </Link>
      </div>
    </div>
  );
}

export default FileComponent;
