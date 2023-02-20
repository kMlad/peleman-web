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
      className={`relative  aspect-video w-full `}
    >
      {!isPhone && (
        <video
          autoPlay
          muted
          loop
          className="absolute min-h-full min-w-full"
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
          className="absolute right-0 bottom-0 min-h-full min-w-full"
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
