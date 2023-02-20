/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import React from "react";

import type { PageEntity } from "../../utils/types";
import HeroBlock from "../blocks/HeroBlock/HeroBlock";
import ButtonBlock from "../blocks/ButtonBlock/ButtonBlock";
import ImageWithTitleBlock from "@blocks/ImageWithTitleBlock/ImageWithTitleBlock";
import CallToActionBlock from "@blocks/CallToActionBlock/CallToActionBlock";
import LeftTitleRightDescriptionBlock from "@blocks/LeftTitleRightDescriptionBlock/LeftTitleRightDescriptionBlock";
import CircledLeftImageBlock from "@blocks/CircledLeftImageBlock/CircledLeftImageBlock";
import CircledRightImageBlock from "@blocks/CircledRightImageBlock/CircledRightImageBlock";
import BenefitsBlock from "@blocks/BenefitsBlock/BenefitsBlock";
import MarqueeBlock from "@blocks/MarqueeBlock/MarqueeBlock";
import SellingPointsBlock from "@blocks/SellingPointsBlock/SellingPointsBlock";
import LeftImageRightTextBlock from "@blocks/LeftImageRightTextBlock/LeftImageRightTextBlock";
import SpacingBlock from "@blocks/SpacingBlock/SpacingBlock";
import TitleBlock from "@blocks/TitleBlock/TitleBlock";
import DescriptionBlock from "@blocks/DescriptionBlock/DescriptionBlock";
// import BreadcrumbsBlock from "@blocks/BreadcrumbsBlock/BreadcrumbsBlock";
import ImageBlock from "@blocks/ImageBlock/ImageBlock";
import ContactFormBlock from "@blocks/ContactFormBlock/ContactFormBlock";
import VideoHeroBlock from "@blocks/VideoHeroBlock/VideoHeroBlock";

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
                case "ComponentBlocksHero":
                  return (
                    <React.Fragment key={`${i}block.__typename`}>
                      <HeroBlock {...block} />
                    </React.Fragment>
                  );
                  break;

                case "ComponentBlocksTitle":
                  return (
                    <React.Fragment key={`${i}block.__typename`}>
                      <TitleBlock {...block} />
                    </React.Fragment>
                  );
                  break;
                case "ComponentBlocksBenefits":
                  return (
                    <React.Fragment key={`${i}block.__typename`}>
                      <BenefitsBlock {...block} />
                    </React.Fragment>
                  );
                  break;

                case "ComponentBlocksSellingPoints":
                  return (
                    <React.Fragment key={`${i}block.__typename`}>
                      <SellingPointsBlock {...block} />
                    </React.Fragment>
                  );
                  break;

                case "ComponentBlocksButtons":
                  return (
                    <React.Fragment key={`${i}block.__typename`}>
                      <ButtonBlock {...block} />
                    </React.Fragment>
                  );
                  break;

                case "ComponentBlocksImageWithTitle":
                  return (
                    <React.Fragment key={`${i}block.__typename`}>
                      <ImageWithTitleBlock {...block} />
                    </React.Fragment>
                  );
                  break;
                case "ComponentBlocksCallToAction":
                  return (
                    <React.Fragment key={`${i}block.__typename`}>
                      <CallToActionBlock {...block} />
                    </React.Fragment>
                  );
                  break;
                case "ComponentBlocksLeftTitleRightDescription":
                  return (
                    <React.Fragment key={`${i}block.__typename`}>
                      <LeftTitleRightDescriptionBlock {...block} />
                    </React.Fragment>
                  );
                  break;

                case "ComponentBlocksDescription":
                  return (
                    <React.Fragment key={`${i}block.__typename`}>
                      <DescriptionBlock {...block} />
                    </React.Fragment>
                  );
                  break;

                case "ComponentBlocksLeftImageAndText":
                  return (
                    <React.Fragment key={`${i}block.__typename`}>
                      <CircledLeftImageBlock {...block} />
                    </React.Fragment>
                  );
                  break;
                case "ComponentBlocksRightImageAndText":
                  return (
                    <React.Fragment key={`${i}block.__typename`}>
                      <CircledRightImageBlock {...block} />
                    </React.Fragment>
                  );
                  break;

                case "ComponentBlocksButtons":
                  return (
                    <React.Fragment key={`${i}block.__typename`}>
                      <ButtonBlock {...block} />
                    </React.Fragment>
                  );
                  break;

                // case "ComponentBlocksBreadcrumbs":
                //   return (
                //     <React.Fragment key={`${i}block.__typename`}>
                //       <BreadcrumbsBlock page={singlePageData} />
                //     </React.Fragment>
                //   );
                //   break;

                case "ComponentBlocksLeftImageRightText":
                  return (
                    <React.Fragment key={`${i}block.__typename`}>
                      <LeftImageRightTextBlock {...block} />
                    </React.Fragment>
                  );
                  break;
                case "ComponentBlocksSpacing":
                  return (
                    <React.Fragment key={`${i}block.__typename`}>
                      <SpacingBlock {...block} />
                    </React.Fragment>
                  );
                  break;

                case "ComponentBlocksTitle":
                  return (
                    <React.Fragment key={`${i}block.__typename`}>
                      <TitleBlock {...block} />
                    </React.Fragment>
                  );
                  break;

                case "ComponentBlocksContactForm":
                  return (
                    <React.Fragment key={`${i}block.__typename`}>
                      <ContactFormBlock {...block} />
                    </React.Fragment>
                  );
                  break;

                case "ComponentBlocksImage":
                  return (
                    <React.Fragment key={`${i}block.__typename`}>
                      <ImageBlock {...block} />
                    </React.Fragment>
                  );
                  break;

                case "ComponentBlocksMarquee":
                  return (
                    <React.Fragment key={`${i}block.__typename`}>
                      <MarqueeBlock {...block} />
                    </React.Fragment>
                  );
                  break;

                  case "ComponentBlocksVideoHero":
                  return (
                    <React.Fragment key={`${i}block.__typename`}>
                      <VideoHeroBlock {...block} />
                    </React.Fragment>
                  );
                  break;

                  case "ComponentBlocksLeftTitleRightDescription":
                    return (
                      <React.Fragment key={`${i}block.__typename`}>
                        <LeftTitleRightDescriptionBlock {...block} />
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

//TODO: Make sure all blocks render
export default Blocks;
