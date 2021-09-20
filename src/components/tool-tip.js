import React from "react";
import PropTypes from "prop-types";
import MouseTooltip from "react-sticky-mouse-tooltip";

function Tooltip({ content, showTooltip }) {

  return (
    <MouseTooltip
      className="tool-tip"
      visible={showTooltip}
      offsetX={15}
      offsetY={10}
    >
      <span>{content}</span>
    </MouseTooltip>
  );
}

Tooltip.propTypes = {
  content: PropTypes.string.isRequired,
  showTooltip: PropTypes.bool.isRequired
};

export default Tooltip;
