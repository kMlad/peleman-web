import { HeaderData } from './MegaMenu';
import MegaMenuicon from './assets/megaMenu.png';
import printer from '../../../assets/printer.svg'

import arrowIcon from './assets/rightArrow.png';

export const headerData: HeaderData = {
  categories: [
    {
      name: 'Additional products',
      subitems: [
        {
          cta: 'Agency Wordpress Plans',
          to: 'Дознај повеќе',
          description: 'Лорем Ипусм е едноставно лажен текст на индустријата за печатење',
          image: MegaMenuicon,
          icon: arrowIcon,
          link: '#',
        },
        {
          cta: 'Cloud VPS',
          to: 'Дознај повеќе',
          description: 'Лорем Ипусм е едноставно лажен текст на индустријата за печатење',
          image: MegaMenuicon,
          icon: arrowIcon,
          link: '#',
        },
        {
          cta: 'eCommerce (Jelastic)',
          to: 'Дознај повеќе',
          description: 'Лорем Ипусм е едноставно лажен текст на индустријата за печатење',
          image: MegaMenuicon,
          icon: arrowIcon,
          link: '#',
        },
        {
          cta: 'Business Email',
          to: 'Дознај повеќе',
          description: 'Лорем Ипусм е едноставно лажен текст на индустријата за печатење',
          image: MegaMenuicon,
          icon: arrowIcon,
          link: '#',
        },
      ],
    },
    {
      name: 'Solutions',
      subitems: [
        {
          cta: 'Application Hosting',
          to: 'Дознај повеќе',
          description: 'Lorem ipsum lorem ipsum Lorem ipsum lorem ipsum',
          image: MegaMenuicon,
          icon: arrowIcon,
          link: '#',
        },
        {
          cta: 'Cloud VPS',
          to: 'Дознај повеќе',
          description: 'Lorem ipsum lorem ipsum Lorem ipsum lorem ipsum',
          image: MegaMenuicon,
          icon: arrowIcon,
          link: '#',
        },
      ],
    },
  ],

  navLinks: [
    { name: 'Дома', href: '/doma', current: false, newTab: false },
    { name: 'За нас', href: '/za-nas', current: false, newTab: false },
    {
      name: 'Производи',
      href: 'linkProducts',
      current: false,
      newTab: false,
    },
    {
      name: 'Индустрии',
      href: 'linkServices',
      current: false,
      newTab: false,
    },
  ],
};

export const headerDataSolutions: HeaderData = {
  categories: [
    {
      name: 'Solutions',
      subitems: [
        {
          cta: 'Печатници',
          to: 'Дознај повеќе',
          description: 'Лорем Ипусм е едноставно лажен текст на индустријата за печатење',
          image: printer,
          icon: arrowIcon,
          link: '#',
        },
        {
          cta: 'Човечки ресурси',
          to: 'Дознај повеќе',
          description: 'Лорем Ипусм е едноставно лажен текст на индустријата за печатење',
          image: printer,
          icon: arrowIcon,
          link: '#',
        },
        {
          cta: 'Угостителство',
          to: 'Дознај повеќе',
          description:
            'Лорем Ипусм е едноставно лажен текст на индустријата за печатење',
          image: printer,
          icon: arrowIcon,
          link: '#',
        },
        {
          cta: 'Финансии',
          to: 'Дознај повеќе',
          description:
            'Лорем Ипусм е едноставно лажен текст на индустријата за печатење',
          image: printer,
          icon: arrowIcon,
          link: '#',
        },
      ],
    },
  ],
};

export const headerDataAdditionalProducts: HeaderData = {
  categories: [
    {
      name: 'AdditionalProducts',
      subitems: [
        {
          cta: 'За документи',
          to: 'Дознај повеќе',
          description:
            'Лорем Ипусм е едноставно лажен текст на индустријата за печатење',
          image: printer,
          icon: arrowIcon,
          link: '#',
        },
        {
          cta: 'За фотографии',
          to: 'Дознај повеќе',
          description:
            'Лорем Ипусм е едноставно лажен текст на индустријата за печатење',
          image: printer,
          icon: arrowIcon,
          link: '#',
        },
        {
          cta: 'Персонализација',
          to: 'Дознај повеќе',
          description: 'Лорем Ипусм е едноставно лажен текст на индустријата за печатење',
          image: printer,
          icon: arrowIcon,
          link: '#',
        },
        {
          cta: 'Машини за печатење',
          to: 'Дознај повеќе',
          description: 'Лорем Ипусм е едноставно лажен текст на индустријата за печатење',
          image: printer,
          icon: arrowIcon,
          link: '#',
        },
      ],
    },
  ],
};


export default headerData;
