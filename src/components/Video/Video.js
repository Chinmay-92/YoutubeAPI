import React from "react";
import './video.css';

function constructVideoTitles(vidoesData, onVideoSelected) {
  return vidoesData.map(({ snippet, id }, index) => {
    return (
      <div key={index} className="video">
        <img alt={snippet.title} src={snippet.thumbnails.high.url} height="180px" width="400px" /> <span style={{ whiteSpace: "nowrap", "overflow": "scroll" }}>{snippet.title}</span>
      </div >
    );
  });
}
const Video = ({ data, onVideoSelected }) => {
  return <>{constructVideoTitles(data, onVideoSelected)}</>;
};

export default Video;