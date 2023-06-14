import React from 'react';
import Button from './Button';
import CheckListItem, { P as CheckListItemsProps } from './CheckListItem';
import ReactMarkdown from 'react-markdown';

interface P {
  title: string;
  monthPrice: number;
  valuta: 'dollar' | 'euro' | 'pound';
  annualPrice: number;
  description: string;
  ctaFirstButton: string;
  linkFirstButton: string;
  ctaSecondButton: string;
  linkSecondButton: string;
  checklistItems: CheckListItemsProps[];
}

function ServerCard({
  title,
  monthPrice,
  annualPrice,
  valuta,
  description,
  ctaFirstButton,
  linkFirstButton,
  checklistItems,
  ctaSecondButton,
  linkSecondButton,
}: P): JSX.Element {
  return (
    <div className="flex flex-col items-center">
      <div className="flex !h-full w-[19rem] flex-col justify-between rounded-2xl bg-white px-6 py-7 shadow-custom">
        <div>
          <p className="mb-[5px] text-center text-3xl font-bold text-darkGrey">
            {title}
          </p>
          <div className="flex justify-center text-center">
            <div className="text-5xl font-bold text-primary">
              {valuta === 'dollar'
                ? '$'
                : valuta === 'euro'
                ? '€'
                : valuta === 'pound'
                ? '£'
                : ' '}{' '}
              {monthPrice}
            </div>
            <div className="text-darkGrey/70 self-end text-lg">/month</div>
          </div>
          <div className="flex justify-center text-center">
            <div className="text-2xl font-bold text-darkGrey">
              {valuta === 'dollar'
                ? '$'
                : valuta === 'euro'
                ? '€'
                : valuta === 'pound'
                ? '£'
                : ' '}{' '}
              {annualPrice}
            </div>
            <div className="self-center pt-2 text-base text-darkGrey/70">
              /12 months
            </div>
          </div>
          <div className="mt-[9px]  mb-6 text-center text-base text-darkGrey">
            <ReactMarkdown>{description}</ReactMarkdown>
          </div>
        </div>
        <div className="mb-5 px-6">
          {checklistItems.map((item: CheckListItemsProps, index: number) => (
            <CheckListItem
              key={index}
              cta={item.cta}
              checking={item.checking}
              size={'packageCard'}
              description={''}
              ctaButton={''}
              linkButton={''}
            />
          ))}
        </div>
        <div className="mb-4 flex justify-between pt-3">
          <div className="flex items-center text-center text-lg font-semibold text-primaryLight">
            <a className="py-[10px] px-[15px]" href={linkFirstButton}>
              {ctaFirstButton}
            </a>
          </div>
          <div>
            <Button
              cta={ctaSecondButton}
              link={linkSecondButton}
              color={'primary'}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServerCard;
