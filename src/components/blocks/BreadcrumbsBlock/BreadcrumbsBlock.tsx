import React from 'react';
import { PageEntity } from '@utils/types';

export interface P {
  breadcrumb: string;
  parents: string;
}
interface Page {
  page: PageEntity;
}

function BreadcrumbsBlock({ page }: Page): JSX.Element {
  return (
    <div className="mx-auto my-5 max-w-[90%] text-left text-xs text-[#696969] sm:text-sm">
      {page.attributes?.parent?.data?.attributes?.parent?.data == null ? (
        page.attributes?.parent?.data ? (
          <div>
            {' '}
            <a
              className="underline"
              href={`/${page.attributes.parent.data.attributes?.slug ?? ''}`}
            >
              {page.attributes.parent.data.attributes?.title}
            </a>{' '}
            /{' '}
            <a
              className="font-bold underline"
              href={`/${page.attributes.slug ?? ''}`}
            >
              {page.attributes.title}
            </a>
          </div>
        ) : (
          ''
        )
      ) : (
        <div>
          <a
            className="underline"
            href={`/${
              page.attributes.parent.data.attributes.parent.data.attributes
                ?.slug ?? ''
            }`}
          >
            {
              page.attributes.parent.data.attributes.parent.data.attributes
                ?.title
            }
          </a>{' '}
          /{' '}
          <a
            className="underline"
            href={`/${page.attributes.parent.data.attributes.slug ?? ''}`}
          >
            {page.attributes.parent.data.attributes.title}
          </a>{' '}
          /{' '}
          <a
            className="font-bold underline"
            href={`/${page.attributes.slug ?? ''}`}
          >
            {page.attributes.title}
          </a>
        </div>
      )}
    </div>
  );
}
export default BreadcrumbsBlock;
