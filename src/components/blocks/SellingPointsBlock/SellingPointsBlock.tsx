import React from 'react';
import Benefit from '@components/Benefit';
import {
  ComponentBlocksSellingPoints,
  UploadFileEntityResponse,
} from '@utils/types';

function SellingPointsBlock({
  benefits,
}: ComponentBlocksSellingPoints): JSX.Element {
  return (
    <>
      <div className="m-auto max-w-[80%] pb-10 sm:pb-10 xl:pb-20">
        <div className="flex flex-wrap justify-center gap-10 sm:gap-10">
          {benefits?.map((item, index: number) => (
            <div key={index} className="md:max-w-[310px]">
              <Benefit
                description={item?.description ?? ''}
                title={item?.title ?? ''}
                alignment="center"
                image={
                  item?.image ?? "" as UploadFileEntityResponse
                }
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default SellingPointsBlock;
