import React from 'react';

export interface P {
  cta: string;
  alignment: 'left' | 'center' | 'right' | 'blog';
}

function CenteredDescription({ cta, alignment }: P): JSX.Element {
  return (
    <div
      className={` ${
        alignment === 'right'
          ? 'text-right font-semibold text-primaryLight'
          : alignment === 'left'
          ? ' text-left font-semibold  text-primaryLight'
          : alignment === 'blog'
          ? 'text-center font-semibold text-secondary'
          : 'py-2 text-center font-thin text-[#2C2933]  xl:px-[210px] '
      }  text-xl md:text-[28px]`}
    >
      {cta}
    </div>
  );
}
export default CenteredDescription;
