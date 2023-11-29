import React from "react";
import { TopBar } from "../styled/TopBar";

const Header = () => {
  return (
    <TopBar>
      <div className="leading-icon">
        <button>
          <img src="images/icons/leading-icon.svg" />
        </button>
      </div>
      <h2>타이틀</h2>
      <div className="trailing-icon">
        <button>
          <img src="images/icons/trailing-icon 1.svg" />
        </button>
        <button>
          <img src="images/icons/trailing-icon 2.svg" />
        </button>
        <button>
          <img src="images/icons/trailing-icon 3.svg" />
        </button>
      </div>
    </TopBar>
  );
};

export default Header;
