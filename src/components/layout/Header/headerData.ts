import { HeaderData } from './MegaMenu';
import MegaMenuicon from './assets/megaMenu.png';
import whyUs from './assets/whyUs.png';
import whoWeAre from './assets/whoWeAre.png';
import meetTheTeam from './assets/meetTheTeam.png';
import premiumWordPress from './assets/premiumWordPress.png';
import agencyHosting from './assets/agencyHosting.png';
import managedVPS from './assets/managedVPS.png';
import jelastic from './assets/jelastic.png';
import ehloMail from './assets/ehloMail.png';
import cdn from './assets/cdn.png';
import ssl from './assets/ssl.png';
import domains from './assets/domains.png';
import resources from './assets/resources.png';
import userVoice from './assets/userVoice.png';
import webTools from './assets/webTools.png';

import whatToExpect from './assets/whatToExpect.png';

import arrowIcon from './assets/rightArrow.png';

export const headerData: HeaderData = {
  categories: [
    {
      name: 'Additional products',
      subitems: [
        {
          cta: 'Agency Wordpress Plans',
          to: 'Learn more',
          description: 'Lorem ipsum lorem ipsum Lorem ipsum lorem ipsum',
          image: MegaMenuicon,
          icon: arrowIcon,
          link: '#',
        },
        {
          cta: 'Cloud VPS',
          to: 'Learn more',
          description: 'Lorem ipsum lorem ipsum Lorem ipsum lorem ipsum',
          image: MegaMenuicon,
          icon: arrowIcon,
          link: '#',
        },
        {
          cta: 'eCommerce (Jelastic)',
          to: 'Learn more',
          description: 'Lorem ipsum lorem ipsum Lorem ipsum lorem ipsum',
          image: MegaMenuicon,
          icon: arrowIcon,
          link: '#',
        },
        {
          cta: 'Business Email',
          to: 'Learn more',
          description: 'Lorem ipsum lorem ipsum Lorem ipsum lorem ipsum',
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
          to: 'Learn more',
          description: 'Lorem ipsum lorem ipsum Lorem ipsum lorem ipsum',
          image: MegaMenuicon,
          icon: arrowIcon,
          link: '#',
        },
        {
          cta: 'Cloud VPS',
          to: 'Learn more',
          description: 'Lorem ipsum lorem ipsum Lorem ipsum lorem ipsum',
          image: MegaMenuicon,
          icon: arrowIcon,
          link: '#',
        },
      ],
    },
  ],

  navLinks: [
    { name: 'Дома', href: 'linkHome', current: false, newTab: false },
    { name: 'За нас', href: 'linkHome', current: false, newTab: false },
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
          cta: 'Premium WordPress Hosting',
          to: 'Learn more',
          description: 'The all-in-one package for top-perfoming agencies',
          image: premiumWordPress,
          icon: arrowIcon,
          link: '/premium-wordpress-hosting',
        },
        {
          cta: 'Agency Hosting',
          to: 'Learn more',
          description: 'Lorem ipsum lorem ipsum Lorem ipsum lorem ipsum',
          image: agencyHosting,
          icon: arrowIcon,
          link: '/agency-hosting',
        },
        {
          cta: 'Managed VPS',
          to: 'Learn more',
          description:
            'Your website. Your data. Your apps. Hosted by cloud experts',
          image: managedVPS,
          icon: arrowIcon,
          link: '/managed-vps',
        },
        {
          cta: 'Jelastic Wordpress Hosting',
          to: 'Learn more',
          description:
            'Save money by easily meeting the evolving demands of your customers',
          image: jelastic,
          icon: arrowIcon,
          link: '/jelastic-wordpress-hosting',
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
          cta: 'EhloMail',
          to: 'Learn more',
          description:
            'Cloud-based email collaboration, backed by our team of experts',
          image: ehloMail,
          icon: arrowIcon,
          link: '/ehlo-mail',
        },
        {
          cta: 'CDN',
          to: 'Learn more',
          description:
            'End the struggle against your clients’ clueless hosting provider',
          image: cdn,
          icon: arrowIcon,
          link: '/cdn-waf',
        },
        {
          cta: 'SSL',
          to: 'Learn more',
          description: 'Protect your customers with a Layershift SSL',
          image: ssl,
          icon: arrowIcon,
          link: '/ssl-certificates',
        },
        {
          cta: 'Domains',
          to: 'Learn more',
          description: 'Tell the world who you are with a .com TLD domain',
          image: domains,
          icon: arrowIcon,
          link: '/domains',
        },
      ],
    },
  ],
};


export default headerData;
