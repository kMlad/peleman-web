import React from 'react';
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import closePlus from './assets/closePlus.svg';
import openPlus from './assets/openPlus.svg';
import { AccordionItemProps } from './AccordionComponent';
import ReactMarkdown from 'react-markdown';

function AccordionPlusItem({
  title,
  description,
  isOpen,
  btnOnClick,
}: AccordionItemProps): JSX.Element {
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (isOpen) {
      const contentEl = contentRef.current!;

      setHeight(contentEl.scrollHeight);
    } else {
      setHeight(0);
    }
  }, [isOpen]);

  return (
    <div className="w-full">
      <div className="">
        <div className="mb-4 mt-6 flex justify-items-center">
          <div
            className={`flex cursor-pointer flex-col  items-start pr-3   ${
              isOpen ? 'items-start' : 'items-center'
            }`}
          >
            <Image
              alt="image"
              onClick={btnOnClick}
              src={isOpen ? (openPlus as string) : (closePlus as string)}
              height={38}
              width={36}
              layout="fixed"
            />
          </div>
          <div className="flex flex-col justify-center">
            <h3 className=" text-left text-xl font-semibold text-darkGrey sm:text-2xl">
              <button className="text-left" onClick={btnOnClick}>
                {title}
              </button>
            </h3>
            {isOpen && (
              <div
                style={{ height }}
                className=" mt-4 text-left text-lg font-light text-darkGrey sm:text-xl"
              >
                <div ref={contentRef} className="">
                  <ReactMarkdown>{description}</ReactMarkdown>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AccordionPlusItem;
