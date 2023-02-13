import { ComponentPageBlocksTitle } from '@utils/types';
import React from 'react';
import Title from '../../components/Title';

function TitleBlock({ centeredTitle }: ComponentPageBlocksTitle): JSX.Element {
  return (
    <div className="container mx-auto leading-tight lg:px-32 2xl:px-72">
      <Title
        cta={centeredTitle?.cta ?? ''}
        alignment={centeredTitle?.aligment ?? 'center'}
        fontSize={centeredTitle?.fontSize ?? 'Big'}
      />
    </div>
  );
}
export default TitleBlock;
