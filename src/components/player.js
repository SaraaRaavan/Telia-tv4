import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";

function Player({ selectedVideo: { video } }) {
  const videoElementRef = useRef();

  useEffect(() => {
    videoElementRef.current.load();
  }, [video]);

  return (
    <section className="player">
      <video controls ref={videoElementRef}>
        <source src={video} type="video/mp4" />
      </video>
    </section>
  );
}

Player.propTypes = {
  selectedVideo: PropTypes.object.isRequired
};

export default Player;
