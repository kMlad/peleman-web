import Link from "next/link";
import React from "react";
import { useMediaQuery } from "react-responsive";

import findMediaUrl from "@utils/findMediaUrl";
import { ComponentBlocksVideoHero } from "@utils/types";

function VideoHeroBlock({
  video,
  mobileVideo,
}: ComponentBlocksVideoHero): JSX.Element {
  const isPhone = useMediaQuery({ query: "(max-width: 640px)" });

  return (
    <div
      className={`aspect-video pb-60 xs:pb-80 relative phoneLarge:pb-96 pt-40 w-full bg-darkGreen md:pb-0 md:pt-0`}
    >
      {!isPhone && (
        <video
          autoPlay
          muted
          loop
          className="absolute bottom-[9%] min-w-full min-h-full"
        >
          <source
            src={findMediaUrl(video) ?? ""}
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
                ? findMediaUrl(mobileVideo)
                : findMediaUrl(video)) ?? ""
            }
            type="video/mp4"
          />
        </video>
      )}
    </div>
  );
}

export default VideoHeroBlock;
