import React from "react";

const YoutubeShortICON: React.FC = () => {
    const styles: React.CSSProperties = {
        pointerEvents: "none",
        display: "block",
        width: "100%",
        height: "100%"
      };
      
  return (
    <div>
      <svg
        width="7"
        height="7"
        viewBox="0 0 24 24"
        focusable="false"
        style={styles}
      >
        <g>
          <path
            d="M17.77,10.32l-1.2-.5L18,9.06a3.74,3.74,0,0,0-3.5-6.62L6,6.94a3.74,3.74,0,0,0,.23,6.74l1.2.49L6,14.93a3.75,3.75,0,0,0,3.5,6.63l8.5-4.5a3.74,3.74,0,0,0-.23-6.74Z"
            fill="red"
          ></path>
          <polygon
            points="10 14.65 15 12 10 9.35 10 14.65"
            fill="#fff"
          ></polygon>
        </g>
      </svg>
    </div>
  );
};

export default YoutubeShortICON;
