import React from 'react';
import Button from './Button';
import ReactMarkdown from 'react-markdown';

interface P {
  title: string;
  description: string;
  ctaButton: string;
  linkButton: string;
}

function CustomServerCard({
  title,
  description,
  ctaButton,
  linkButton,
}: P): JSX.Element {
  return (
    <div className="flex !h-full flex-col items-center">
      <div className="flex !h-full w-[19rem] flex-col justify-between rounded-2xl bg-orange px-11 py-7 shadow-custom">
        <p className="text-center text-3xl font-bold text-white">{title}</p>
        <div className="my-16 text-center text-[18px] font-thin text-white">
          <ReactMarkdown>{description}</ReactMarkdown>
        </div>

        <div className="mb-4 flex justify-center pt-3">
          <Button cta={ctaButton} link={linkButton} color="tertiary" />
        </div>
      </div>
    </div>
  );
}

export default CustomServerCard;
