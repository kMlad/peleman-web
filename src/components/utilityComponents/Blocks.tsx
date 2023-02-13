/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import AccordionDoubleBlock from '@blocks/AccordionDoubleBlock/AccordionDoubleBlock';
import React from 'react';

import type { PageEntity } from '../../utils/types';
import HeroBlock from '../blocks/HeroBlock/HeroBlock';
import WhyUsBlock from '../blocks/WhyUsBlock/WhyUsBlock';
import AboutHeroBlock from '../blocks/AboutHeroBlock/AboutHeroBlock';
import ButtonBlock from '../blocks/ButtonBlock/ButtonBlock';
import AccordionCardBlock from '@blocks/AccordionCardBlock/AccordionCardBlock';
import ImageWithTitleBlock from '@blocks/ImageWithTitleBlock/ImageWithTitleBlock';
import CallToActionBlock from '@blocks/CallToActionBlock/CallToActionBlock';
import LeftTitleRightDescriptionBlock from '@blocks/LeftTitleRightDescriptionBlock/LeftTitleRightDescriptionBlock';
import StepsBlock from '@blocks/StepsBlock/StepsBlock';
import CircledLeftImageBlock from '@blocks/CircledLeftImageBlock/CircledLeftImageBlock';
import CircledRightImageBlock from '@blocks/CircledRightImageBlock/CircledRightImageBlock';
import BenefitsBlock from '@blocks/BenefitsBlock/BenefitsBlock';
import TitledTabsBlock from '@blocks/TitledTabsBlock/TitledTabsBlock';
import FileBlock from '@blocks/FileBlock/FileBlock';
import MarqueeBlock from '@blocks/MarqueeBlock/MarqueeBlock';
import SignUpBlock from '@blocks/SignUpBlock/SignUpBlock';
import RequirementsFormBlock from '@blocks/RequirementsFormBlock/RequrirementsFormBlock';
import HomepageFormBlock from '@blocks/HomepageFormBlock/HomepageFormBlock';
import SellingPointsBlock from '@blocks/SellingPointsBlock/SellingPointsBlock';
import KeyFeaturesBlock from '@blocks/KeyFeaturesBlock/KeyFeaturesBlock';
import SmallPricingBlock from '@blocks/SmallPricingBlock/SmallPricingBlock';
import ServerCardsBlock from '@blocks/ServerCardsBlock/ServerCardsBlock';
import FaqBlock from '@blocks/FAQBlock/FaqBlock';
import LeftImageRightTextBlock from '@blocks/LeftImageRightTextBlock/LeftImageRightTextBlock';
import SpacingBlock from '@blocks/SpacingBlock/SpacingBlock';
import TitleBlock from '@blocks/TitleBlock/TitleBlock';
import DescriptionBlock from '@blocks/DescriptionBlock/DescriptionBlock';
import AccordionPlusBlock from '@blocks/AccordionPlusBlock/AccordionPlusBlock';
import ResourcesBlock from '@blocks/ResourcesBlock/ResourcesBlock';
import CheckCardBlock from '@blocks/CheckCardBlock/CheckCardBlock';
import BreadcrumbsBlock from '@blocks/BreadcrumbsBlock/BreadcrumbsBlock';
import CenteredDescBlock from '@blocks/CenteredDescBlock/CenteredDescBlock';
import DomainSearchBlock from '@blocks/DomainSearchBlock/DomainSearchBlock';
import DomainsNameBlock from '@blocks/DomainsNameBlock/DomainsNameBlock';
import ImageBlock from '@blocks/ImageBlock/ImageBlock';
import FaqListBlock from '@blocks/FaqListBlock/FaqListBlock';
import ContactFormBlock from '@blocks/ContactFormBlock/ContactFormBlock';

interface P {
  singlePageData: PageEntity;
}

export function Blocks({ singlePageData }: P) {
  return (
    <>
      {singlePageData?.attributes?.pageBlocks
        ? singlePageData.attributes.pageBlocks.map(
            (block: any, i): JSX.Element | null | undefined => {
              switch (block?.__typename) {
                case 'ComponentPageBlocksHero':
                  return (
                    <React.Fragment key={`${i}block.__typename`}>
                      <HeroBlock {...block} />
                    </React.Fragment>
                  );
                  break;

                case 'ComponentPageBlocksWhyUsBlock':
                  return (
                    <React.Fragment key={`${i}block.__typename`}>
                      <WhyUsBlock {...block} />
                    </React.Fragment>
                  );
                  break;
                case 'ComponentPageBlocksTitle':
                  return (
                    <React.Fragment key={`${i}block.__typename`}>
                      <TitleBlock {...block} />
                    </React.Fragment>
                  );
                  break;
                case 'ComponentPageBlocksBenefits':
                  return (
                    <React.Fragment key={`${i}block.__typename`}>
                      <BenefitsBlock {...block} />
                    </React.Fragment>
                  );
                  break;
                case 'ComponentPageBlocksTitledTabs':
                  return (
                    <React.Fragment key={`${i}block.__typename`}>
                      <TitledTabsBlock {...block} />
                    </React.Fragment>
                  );
                  break;
                case 'ComponentPageBlocksFiles':
                  return (
                    <React.Fragment key={`${i}block.__typename`}>
                      <FileBlock {...block} />
                    </React.Fragment>
                  );
                  break;
                case 'ComponentPageBlocksMarqee':
                  return (
                    <React.Fragment key={`${i}block.__typename`}>
                      <MarqueeBlock {...block} />
                    </React.Fragment>
                  );
                  break;
                case 'ComponentPageBlocksSignUp':
                  return (
                    <React.Fragment key={`${i}block.__typename`}>
                      <SignUpBlock {...block} />
                    </React.Fragment>
                  );
                  break;
                case 'ComponentPageBlocksRequirementsForm':
                  return (
                    <React.Fragment key={`${i}block.__typename`}>
                      <RequirementsFormBlock {...block} />
                    </React.Fragment>
                  );
                  break;
                case 'ComponentPageBlocksHomepageForm':
                  return (
                    <React.Fragment key={`${i}block.__typename`}>
                      <HomepageFormBlock {...block} />
                    </React.Fragment>
                  );
                  break;
                case 'ComponentPageBlocksSellingPoints':
                  return (
                    <React.Fragment key={`${i}block.__typename`}>
                      <SellingPointsBlock {...block} />
                    </React.Fragment>
                  );
                  break;

                case 'ComponentPageBlocksAboutHero':
                  return (
                    <React.Fragment key={`${i}block.__typename`}>
                      <AboutHeroBlock {...block} />
                    </React.Fragment>
                  );
                  break;
                
                case 'ComponentPageBlocksAccordionDouble':
                  return (
                    <React.Fragment key={`${i}block.__typename`}>
                      <AccordionDoubleBlock {...block} />
                    </React.Fragment>
                  );
                  break;
                case 'ComponentPageBlocksKeyFeatures':
                  return (
                    <React.Fragment key={`${i}block.__typename`}>
                      <KeyFeaturesBlock {...block} />
                    </React.Fragment>
                  );
                  break;

                case 'ComponentPageBlocksButtons':
                  return (
                    <React.Fragment key={`${i}block.__typename`}>
                      <ButtonBlock {...block} />
                    </React.Fragment>
                  );
                  break;

                case 'ComponentPageBlocksAccordionCart':
                  return (
                    <React.Fragment key={`${i}block.__typename`}>
                      <AccordionCardBlock {...block} />
                    </React.Fragment>
                  );
                  break;
                case 'ComponentPageBlocksImageWithTitle':
                  return (
                    <React.Fragment key={`${i}block.__typename`}>
                      <ImageWithTitleBlock {...block} />
                    </React.Fragment>
                  );
                  break;
                case 'ComponentPageBlocksCallToAction':
                  return (
                    <React.Fragment key={`${i}block.__typename`}>
                      <CallToActionBlock {...block} />
                    </React.Fragment>
                  );
                  break;
                case 'ComponentPageBlocksLeftTitleRightDescription':
                  return (
                    <React.Fragment key={`${i}block.__typename`}>
                      <LeftTitleRightDescriptionBlock {...block} />
                    </React.Fragment>
                  );
                  break;

                case 'ComponentPageBlocksDescription':
                  return (
                    <React.Fragment key={`${i}block.__typename`}>
                      <DescriptionBlock {...block} />
                    </React.Fragment>
                  );
                  break;
                case 'ComponentPageBlocksCenteredDesc':
                  return (
                    <React.Fragment key={`${i}block.__typename`}>
                      <CenteredDescBlock {...block} />
                    </React.Fragment>
                  );
                  break;
                case 'ComponentPageBlocksStepsBlock':
                  return (
                    <React.Fragment key={`${i}block.__typename`}>
                      <StepsBlock {...block} />
                    </React.Fragment>
                  );
                  break;
                case 'ComponentPageBlocksCircledLeftImage':
                  return (
                    <React.Fragment key={`${i}block.__typename`}>
                      <CircledLeftImageBlock {...block} />
                    </React.Fragment>
                  );
                  break;
                case 'ComponentPageBlocksCircledRightImage':
                  return (
                    <React.Fragment key={`${i}block.__typename`}>
                      <CircledRightImageBlock {...block} />
                    </React.Fragment>
                  );
                  break;
                case 'ComponentPageBlocksAccordionDouble':
                  return (
                    <React.Fragment key={`${i}block.__typename`}>
                      <AccordionDoubleBlock {...block} />
                    </React.Fragment>
                  );
                  break;
                case 'ComponentPageBlocksSmallPricing':
                  return (
                    <React.Fragment key={`${i}block.__typename`}>
                      <SmallPricingBlock {...block} />
                    </React.Fragment>
                  );
                  break;

                case 'ComponentPageBlocksButtons':
                  return (
                    <React.Fragment key={`${i}block.__typename`}>
                      <ButtonBlock {...block} />
                    </React.Fragment>
                  );
                  break;
                case 'ComponentPageBlocksServerCards':
                  return (
                    <React.Fragment key={`${i}block.__typename`}>
                      <ServerCardsBlock {...block} />
                    </React.Fragment>
                  );
                  break;
                case 'ComponentPageBlocksKeyFeatures':
                  return (
                    <React.Fragment key={`${i}block.__typename`}>
                      <KeyFeaturesBlock {...block} />
                    </React.Fragment>
                  );
                  break;
                case 'ComponentPageBlocksAccordionCart':
                  return (
                    <React.Fragment key={`${i}block.__typename`}>
                      <AccordionCardBlock {...block} />
                    </React.Fragment>
                  );
                  break;
                case 'ComponentPageBlocksFaq':
                  return (
                    <React.Fragment key={`${i}block.__typename`}>
                      <FaqBlock {...block} />
                    </React.Fragment>
                  );
                  break;
                case 'ComponentPageBlocksFaqList':
                  return (
                    <React.Fragment key={`${i}block.__typename`}>
                      <FaqListBlock {...block} />
                    </React.Fragment>
                  );
                  break;
                case 'ComponentPageBlocksBreadcrumbs':
                  return (
                    <React.Fragment key={`${i}block.__typename`}>
                      <BreadcrumbsBlock page={singlePageData} />
                    </React.Fragment>
                  );
                  break;
                case 'ComponentPageBlocksCheckCard':
                  return (
                    <React.Fragment key={`${i}block.__typename`}>
                      <CheckCardBlock {...block} />
                    </React.Fragment>
                  );
                  break;
                
                case 'ComponentPageBlocksLeftImageRightText':
                  return (
                    <React.Fragment key={`${i}block.__typename`}>
                      <LeftImageRightTextBlock {...block} />
                    </React.Fragment>
                  );
                  break;
                case 'ComponentPageBlocksSpacing':
                  return (
                    <React.Fragment key={`${i}block.__typename`}>
                      <SpacingBlock {...block} />
                    </React.Fragment>
                  );
                  break;
                
                case 'ComponentPageBlocksTitle':
                  return (
                    <React.Fragment key={`${i}block.__typename`}>
                      <TitleBlock {...block} />
                    </React.Fragment>
                  );
                  break;
                

                case 'ComponentPageBlocksAccordionPlus':
                  return (
                    <React.Fragment key={`${i}block.__typename`}>
                      <AccordionPlusBlock {...block} />
                    </React.Fragment>
                  );
                  break;

                case 'ComponentPageBlocksResources':
                  return (
                    <React.Fragment key={`${i}block.__typename`}>
                      <ResourcesBlock {...block} />
                    </React.Fragment>
                  );
                  break;

                case 'ComponentPageBlocksDomainSearch':
                  return (
                    <React.Fragment key={`${i}block.__typename`}>
                      <DomainSearchBlock {...block} />
                    </React.Fragment>
                  );
                  break;
                case 'ComponentPageBlocksDomainsName':
                  return (
                    <React.Fragment key={`${i}block.__typename`}>
                      <DomainsNameBlock {...block} />
                    </React.Fragment>
                  );
                  break;

                case 'ComponentBlocksContactForm':
                  return (
                    <React.Fragment key={`${i}block.__typename`}>
                      <ContactFormBlock {...block}/>
                    </React.Fragment>
                  );
                  break;
                
                case 'ComponentPageBlocksImage':
                  return (
                    <React.Fragment key={`${i}block.__typename`}>
                      <ImageBlock {...block} />
                    </React.Fragment>
                  );
                  break;

                default:
                  return null;
              }
            }
          )
        : null}
    </>
  );
}

export default Blocks;
