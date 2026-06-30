import React from "react";
import "./SocialHandles.css";
import { socialHandles } from "../../data"; // adjust path

const SocialHandles = () => {
  return (
    <div className="flex social_handles">
      {socialHandles.map((handle, index) => (
        <a
          href={handle.link}
          className="flex_center icon"
          target="_blank"
          rel="noopener noreferrer"
          key={index}
        >
          {handle.icon}
        </a>
      ))}
    </div>
  );
};

export default SocialHandles;