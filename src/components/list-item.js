import React, { useState } from "react";
import PropTypes from "prop-types";
import Tooltip from "./tool-tip.js";

function ListItem({ item, onClick, selectedVideo }) {
  const [showTooltip, toggleTooltip] = useState(false);
  return (
    <li
      key={item.id}
      onClick={onClick}
      onMouseEnter={() => toggleTooltip(true)}
      onMouseLeave={() => toggleTooltip(false)}
      className={`list-item ${selectedVideo.id === item.id ? "selected" : ""}`}
    >
      <img src={item.image} alt="list-item" />
      <h4>{item.name}</h4>
      <Tooltip showTooltip={showTooltip} content={item.description} />
    </li>
  );
}

ListItem.propTypes = {
  item: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
  selectedVideo: PropTypes.object,
};

export default ListItem;
