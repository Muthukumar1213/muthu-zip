import React from "react";
import { FaLinkedinIn, FaGithub, FaAws, FaDev, FaLinux, FaUbuntu  } from "react-icons/fa";
const Media = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-10 lgl:gap-0 justify-between">
      <div>
        <h2 className="text-base uppercase font-titleFont mb-4">Find me in</h2>
        <div className="flex gap-4">
          <a
            href="https://github.com/Muthukumar1213"
            className="bannerIcon"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
          <a
            href="http://linkedin.com/in/muthukumarneethimohan"
            className="bannerIcon"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedinIn />
          </a>
      
        </div>
      </div>
      <div>
        <h2 className="text-base uppercase font-titleFont mb-4">
          BEST SKILL ON
        </h2>
        <div className="flex gap-4">
          <span className="bannerIcon">
            <FaAws /> {/* AWS */}
          </span>
          <span className="bannerIcon">
            <FaDev /> {/* DevOps */}
          </span>
          <span className="bannerIcon">
            <FaLinux /> {/* Linux */}
          </span>
          <span className="bannerIcon">
            <FaUbuntu /> {/* Ubuntu */}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Media;
