import Link from 'next/link';
import React from 'react';
import facebook from './assets/facebook.png';
import Image from 'next/image';

interface P {
  link?: string;
  image: string;
}

function SocialMediaIcon({ link, image }: P): JSX.Element {
  return (
    <div className="mt-10">
      {link && (
        <Link href={link}>
          <a className=" cursor-pointer" target="_blank">
            <Image
              alt="socialMediaIcon"
              src={image || facebook.src}
              width={37.89}
              height={37.89}
            />
          </a>
        </Link>
      )}
    </div>
  );
}
export default SocialMediaIcon;
