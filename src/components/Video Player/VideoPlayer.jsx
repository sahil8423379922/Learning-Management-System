import React from "react";
import ReactPlayer from "react-player";
import style from "./VideoPLayer.module.css";
import { useParams } from "react-router-dom";

export default function VideoPlayer() {
  const { title } = useParams();
  return (
    <div>
      <div className="fs-2 fw-semibold text-center">
        <p>{title}</p>
      </div>

      <div
        className={`shadow-sm bg-body-tertiary rounded ${style.playerwrapper}`}
      >
        <ReactPlayer
          className={` ${style.reactplayer}`}
          url="https://vimeo.com/243556536"
          playing
          width="100%"
          height="70%"
          controls
        />
      </div>
    </div>
  );
}
