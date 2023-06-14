import React from 'react';
import Image from 'next/image';
import check from './assets/check.svg';
import cross from './assets/cross.svg';
import ReactMarkdown from 'react-markdown';
import Button from './Button';

export interface P {
  cta?: string;
  description?: string;
  checking?: 'check' | 'cross' | 'empty';
  size?: 'card' | 'features' | 'packageCard';
  ctaButton?: string;
  linkButton?: string;
  theme?: 'simple' | 'secondary' | 'quaternary';
}

function CheckListItem({
  cta,
  description,
  checking,
  size,
  ctaButton,
  linkButton,
  theme,
}: P): JSX.Element {
  if (size === 'card') {
    return (
      <div className="flex pr-2">
        {checking != 'empty' && (
          <span className="shrink-0">
            <Image
              alt="image"
              src={checking === 'check' ? (check as string) : (cross as string)}
              height={14}
              width={13.35}
              layout="fixed"
            />
          </span>
        )}

        <div
          className={`${
            checking != 'empty' ? 'pl-[2px] text-left' : 'text-center '
          } text-[16px] text-darkGrey `}
        >
          <ReactMarkdown>{cta ?? ''}</ReactMarkdown>
        </div>
      </div>
    );
  } else if (size === 'features') {
    return (
      <div className="flex">
        {checking != 'empty' ? (
          <div>
            <Image
              alt="image"
              src={checking === 'check' ? (check as string) : (cross as string)}
              height={30}
              width={30}
              layout="fixed"
            />
          </div>
        ) : (
          ''
        )}
        <div className="flex w-full flex-col gap-2">
          <span
            className={`${
              checking === 'empty'
                ? `${
                    theme === 'secondary' ? 'text-primaryLight' : 'text-darkGrey'
                  }  font-bold`
                : 'text-darkGrey'
            } text-left text-[26px] `}
          >
            {cta}
          </span>
          {checking === 'empty' && (
            <hr
              className={`${
                theme === 'secondary'
                  ? 'border-t-[6px] border-secondary'
                  : 'border-t-[6px] text-primary'
              }  `}
            />
          )}

          <div className="text-left  text-lg text-darkGrey prose-ul:ml-5 prose-ul:list-disc">
            <ReactMarkdown>{description ?? ''}</ReactMarkdown>
          </div>

          {ctaButton && (theme === 'secondary' || theme === 'quaternary') ? (
            <Button cta={ctaButton} link={linkButton} color={theme} />
          ) : ctaButton ? (
            <Button cta={ctaButton} link={linkButton} color="tertiary" />
          ) : (
            ''
          )}
        </div>
      </div>
    );
  } else if (size === 'packageCard') {
    return (
      <div className="flex  w-full flex-row  items-start ">
        <Image
          alt="image"
          src={checking === 'check' ? (check as string) : (cross as string)}
          height={13.75}
          width={13.1}
        />

        <span className="flex w-full  pl-[4px]  text-base  text-darkGrey">
          <ReactMarkdown>{cta ?? ''}</ReactMarkdown>
        </span>
      </div>
    );
  }

  return <div>Error!</div>;
}

export default CheckListItem;
