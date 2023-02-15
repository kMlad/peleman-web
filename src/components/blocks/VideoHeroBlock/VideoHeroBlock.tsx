import Link from "next/link";
import React from "react";
import { useMediaQuery } from "react-responsive";

import { ComponentBlocksVideoHero } from "@utils/types";

function HomepageHeroBlock({
  video,
  mobileVideo,
}: ComponentBlocksVideoHero): JSX.Element {
  const isPhone = useMediaQuery({ query: "(max-width: 640px)" });

  return (
    <div
      className={`pb-60 xs:pb-80 phoneLarge:pb-96 pt-40 w-full bg-darkGreen md:pb-0 md:pt-0`}
    >
      {!isPhone && (
        <video
          autoPlay
          muted
          loop={false}
          className="absolute bottom-[9%] min-w-full min-h-full"
        >
          <source
            src={video.data?.attributes?.previewUrl ?? ""}
            type="video/mp4"
          />
        </video>
      )}
      {isPhone && (
        <video
          autoPlay
          muted
          loop={false}
          className="absolute right-0 bottom-0 min-w-full min-h-full"
        >
          <source
            src={
              (mobileVideo
                ? mobileVideo.data?.attributes?.previewUrl
                : video.data?.attributes?.previewUrl) ?? ""
            }
            type="video/mp4"
          />
        </video>
      )}
    </div>
  );
}

export default HomepageHeroBlock;
