import { ComponentBlocksTitle } from '@utils/types';
import React from 'react';
import Title from '../../components/Title';

function TitleBlock({ title, alignment, fontSize }: ComponentBlocksTitle): JSX.Element {
  return (
    <div className="container mx-auto leading-tight lg:px-32 2xl:px-72">
      <Title
        cta={title ?? ''}
        alignment={alignment ?? 'center'}
        fontSize={fontSize ?? 'Big'}
      />
    </div>
  );
}
export default TitleBlock;
