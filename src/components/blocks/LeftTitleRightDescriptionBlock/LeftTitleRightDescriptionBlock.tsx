import React from 'react';
import Title from '../../components/Title';
import { ComponentBlocksLeftTitleRightDescription } from '@utils/types';
import ReactMarkdown from 'react-markdown';

function LeftTitleRightDescriptionBlock({
  title,
  description,
}: ComponentBlocksLeftTitleRightDescription): JSX.Element {
  return (
    <div className="container mx-auto flex flex-col">
      <div className="flex-row sm:flex">
        <div className="px-[10%] sm:basis-2/3">
          <Title cta={title ?? ''} alignment={'left'} fontSize={'Big'} />
        </div>
        <div className="px-[10%]  sm:basis-2/4 sm:pt-[5%]">
          <div className="text-[22px] prose-p:mb-10 prose-strong:font-bold sm:basis-2/4 sm:pt-[5%]">
            <ReactMarkdown>{description ?? ''}</ReactMarkdown>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftTitleRightDescriptionBlock;
