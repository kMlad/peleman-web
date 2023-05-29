import Link from "next/link";
import React from "react";
import { useMediaQuery } from "react-responsive";

import findMediaUrl from "@utils/findMediaUrl";
import { ComponentBlocksVideoHero } from "@utils/types";

function VideoHeroBlock({
  video,
}: ComponentBlocksVideoHero): JSX.Element {
  const isPhone = useMediaQuery({ query: "(max-width: 640px)" });

  return (
    <div className={`relative ${isPhone && "aspect-video"} w-full`}>
      {!isPhone && (
        <video autoPlay muted loop className="container mx-auto w-full">
          <source src={findMediaUrl(video) ?? ""} type="video/mp4" />
        </video>
      )}
      {isPhone && (
        <video
          autoPlay
          muted
          loop={false}
          className="absolute right-0 bottom-0 min-h-full min-w-full"
        >
          <source src={findMediaUrl(video) ?? ""} type="video/mp4" />
        </video>
      )}
    </div>
  );
}

export default VideoHeroBlock;
