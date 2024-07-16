"use client";

import { useCallback } from "react";
import YouTube, { YouTubeProps } from "react-youtube";
import styles from "./styles.module.scss";

interface VideoPreviewProps {
  videoId: string;
  height?: string;
}

export default function VideoPreview({ videoId, height }: VideoPreviewProps) {
  const onPlayerReady: YouTubeProps["onReady"] = useCallback((event: any) => {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }, []);

  const opts: YouTubeProps["opts"] = {
    height: height ?? "278",
    width: "457",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  };

  return (
    <YouTube
      videoId={videoId}
      opts={opts}
      onReady={onPlayerReady}
      className={styles.videoPreview_container}
      iframeClassName={styles.videoPreview_iframe}
    />
  );
}
