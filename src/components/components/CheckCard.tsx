import React from 'react';
import Button from './Button';
import CheckListItem, { P as CheckListItemsProps } from './CheckListItem';

interface P {
  title: string;
  checklistItems: CheckListItemsProps[];
  ctaButton: string;
  linkButton: string;
}

function CheckCard({
  title,
  checklistItems,
  ctaButton,
  linkButton,
}: P): JSX.Element {
  return (
    <div className="flex flex-col items-center">
      <div className="w-[314px] rounded-2xl  bg-white p-4 shadow-custom md:w-[304px]">
        <p className="mb-4 mt-7 min-h-[65px] text-center text-2xl font-bold text-darkGrey">
          {title}
        </p>
        <div className="mx-3 min-h-[380px] space-y-4 py-10  text-base">
          {checklistItems.map((item: CheckListItemsProps, index: number) => (
            <CheckListItem
              key={index}
              cta={item.cta}
              checking={item.checking}
              size={'card'}
              ctaButton={''}
              linkButton={''}
              description={''}
            />
          ))}
        </div>
        <div className="mt-5 mb-4 flex justify-center">
          <Button cta={ctaButton} link={linkButton} color={'tertiary'} />
        </div>
      </div>
    </div>
  );
}

export default CheckCard;
