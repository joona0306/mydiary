import React from "react";
import { BottomBar } from "../styled/BottomBar";

const Footer = () => {
  return (
    <BottomBar>
      <div className="leading-icon">
        <button>
          <img src="images/icons/icon 1.svg" />
        </button>
        <button>
          <img src="images/icons/icon 2.svg" />
        </button>
        <button>
          <img src="images/icons/icon 3.svg" />
        </button>
        <button>
          <img src="images/icons/icon 4.svg" />
        </button>
      </div>
      <div className="fab">
        <button>
          <img src="images/icons/avatar.svg" />
        </button>
      </div>
    </BottomBar>
  );
};

export default Footer;
