import React, { useEffect, useState, lazy, Suspense } from "react";
import { fetchContentInfo } from "../utils/api.js";
import { useAsync } from "../utils/custom-hooks.js";
import "./video-player.css";

const Player = lazy(() =>
  import(/* webpackChunkName: "player" */ "../components/player.js")
);

const VideoList = lazy(() =>
  import(/* webpackChunkName: "video-list" */ "./video-list.js")
);

function VideoPlayer() {
  const { status, value } = useAsync(fetchContentInfo);
  const [selectedVideo, selectVideo] = useState({});

  useEffect(() => {
    if (value && value[0]) {
      selectVideo(value[0]); //Select the first poster when data ready
    }
  }, [value]);

  if (status !== "success") {
    return <div className="loading">Loading...</div>;
  }

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <main className="video-player">
        {selectedVideo && <Player selectedVideo={selectedVideo} />}
        <VideoList
          data={value}
          selectVideo={selectVideo}
          selectedVideo={selectedVideo}
        />
      </main>
    </Suspense>
  );
}

export default VideoPlayer;
