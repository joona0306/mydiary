import React from "react";
import { Contents } from "../styled/Contents";

const Main = props => {
  return <Contents>{props.children}</Contents>;
};

export default Main;
