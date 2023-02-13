import React from 'react';

export interface P {
  cta: string;
}

function SmallLeftTitle({ cta }: P): JSX.Element {
  return (
    <div className=" mt-20 px-4">
      <h2 className=" -ml-28 self-start text-[20px] font-light text-orange md:text-[28px] ">
        {cta}
      </h2>
    </div>
  );
}
export default SmallLeftTitle;
