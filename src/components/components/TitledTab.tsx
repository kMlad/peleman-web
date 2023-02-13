import React from 'react';
import ReactMarkdown from 'react-markdown';

export interface P {
  title: string;
  desc: string;
}

function TitleTab({ title, desc }: P): JSX.Element {
  return (
    <div className="flex gap-2 text-left sm:gap-5">
      <div className="shrink-0 grow-0 basis-2/4 text-lg font-semibold sm:text-xl md:basis-1/3">
        {title}
      </div>
      <div className="shrink-0 grow-0 basis-2/4 pr-1 text-lg sm:text-xl md:basis-2/3">
        <ReactMarkdown>{desc}</ReactMarkdown>
      </div>
    </div>
  );
}
export default TitleTab;
