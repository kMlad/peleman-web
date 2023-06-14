import React from 'react';
import CheckListItem, { P as CheckListItemsProps } from './CheckListItem';
import Button from './Button';

export interface P {
  title: string;
  price: number;
  value: 'dollar' | 'euro' | 'pound';
  checklistItems: CheckListItemsProps[];
  ctaButton: string;
  linkButton: string;
}

function SmallPricing({
  title,
  price,
  value,
  checklistItems,
  ctaButton,
  linkButton,
}: P): JSX.Element {
  return (
    <div className="flex flex-col items-center">
      <div className="flex w-[19rem] flex-col items-center rounded-2xl bg-white py-7 px-3 shadow-custom">
        <div className="text-center text-[26px] font-bold text-darkGrey">
          {title}
        </div>
        <div className="text-[55px] font-bold text-primary">
          {value === 'dollar'
            ? '$'
            : value === 'euro'
            ? '€'
            : value === 'pound'
            ? '£'
            : ' '}{' '}
          {price}
        </div>
        <div className="min-h-[120px] pt-8 pb-9">
          {checklistItems.map((item: CheckListItemsProps, index: number) => (
            <div key={index}>
              {' '}
              <CheckListItem
                key={index}
                cta={item.cta}
                checking={item.checking}
                size={'card'}
                description=""
                ctaButton={''}
                linkButton={''}
              />
            </div>
          ))}
        </div>
        <div>
          <Button cta={ctaButton} link={linkButton} color={'primary'} />
        </div>
      </div>
    </div>
  );
}
export default SmallPricing;
