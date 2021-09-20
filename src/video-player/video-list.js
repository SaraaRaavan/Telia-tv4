import React from "react";
import PropTypes from "prop-types";
import ListItem from "../components/list-item.js";

function VideoList({ data, selectVideo, selectedVideo }) {
  return (
    <section>
      <ul className="video-list">
        {data.map((item) => (
          <ListItem
            key={item.id}
            item={item}
            selectedVideo={selectedVideo}
            onClick={() => selectVideo(item)}
          />
        ))}
      </ul>
    </section>
  );
}

VideoList.propTypes = {
  data: PropTypes.array.isRequired,
  selectVideo: PropTypes.func.isRequired,
  selectedVideo: PropTypes.object.isRequired,
};

export default VideoList;
