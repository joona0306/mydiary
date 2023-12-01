import React from "react";
import { BottomBar } from "../styled/BottomBar";

const Footer = props => {
  return (
    <BottomBar>
      <div className="fab">
        <button
          onClick={() => {
            props.handleClickHome();
          }}
        >
          <img src={`/images/icons/${props.icon}`} />
        </button>
      </div>
      <div className="leading-icon">
        <button>
          <img src="/images/icons/menu.svg" />
        </button>
        <button>
          <img src="/images/icons/edit.svg" />
        </button>
        <button>
          <img src="/images/icons/keyboard.svg" />
        </button>
        <button>
          <img src="/images/icons/search.svg" />
        </button>
      </div>
      <p>{props.children}</p>
      <div className="fab">
        <button>
          <img src="/images/icons/avatar.svg" />
        </button>
      </div>
    </BottomBar>
  );
};

export default Footer;
