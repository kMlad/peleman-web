import React from 'react';
import ReactMarkdown from 'react-markdown';

export interface P {
  cta: string;
  alignment: 'left' | 'center' | 'right';
}

function Description({ cta, alignment }: P): JSX.Element {
  return (
    <div className="mt-10">
      <div
        className={` ${
          alignment === 'right'
            ? 'text-right'
            : alignment === 'left'
            ? 'text-left'
            : 'text-center'
        } text-[22px] font-light text-darkGrey prose-ul:ml-5 prose-ul:list-disc sm:text-[28px]`}
      >
        <ReactMarkdown>{cta}</ReactMarkdown>
      </div>
    </div>
  );
}
export default Description;
