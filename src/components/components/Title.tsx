import React from 'react';

export interface P {
  cta: string;
  alignment: 'left' | 'center' | 'right';
  fontSize: 'Big' | 'Small';
}

function Title({ cta, alignment, fontSize }: P): JSX.Element {
  return (
    <div className="">
      <h2
        className={` ${
          alignment === 'right'
            ? 'text-right'
            : alignment === 'left'
            ? 'text-left'
            : 'text-center'
        } ${
          fontSize === 'Big'
            ? 'text-[36px] sm:text-[42px]'
            : fontSize === 'Small'
            ? 'text-[22px] sm:text-[28px]'
            : 'text-[36px] sm:text-[42px]'
        } font-bold text-orange`}
      >
        {cta}
      </h2>
    </div>
  );
}
export default Title;
