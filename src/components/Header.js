import React from "react";
import { TopBar } from "../styled/TopBar";

const Header = props => {
  return (
    <TopBar>
      <div>
        <button
          onClick={() => {
            props.handleClickMenu();
          }}
        >
          <img src={`/images/icons/${props.icon}`} />
        </button>
      </div>
      <h2>{props.children}</h2>
      <div className="trailing-icon">
        <button onClick={() => {}}>
          <img src="/images/icons/trailing-icon1.svg" />
        </button>
        <button onClick={() => {}}>
          <img src="/images/icons/trailing-icon2.svg" />
        </button>
        <button onClick={() => {}}>
          <img src="/images/icons/trailing-icon3.svg" />
        </button>
      </div>
    </TopBar>
  );
};

export default Header;
