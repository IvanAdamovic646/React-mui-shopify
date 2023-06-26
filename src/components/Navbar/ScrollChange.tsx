import React from "react";
import { useScrollTrigger } from "@material-ui/core";

const ScrollHandler = (props: any) => {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: undefined,
  });

  return React.cloneElement(props.children, {
    style: {
      backgroundColor: trigger ? "black" : "transparent",
      color: trigger ? "white" : "black",
      transition: trigger ? "0.3s" : "0.5s",
      boxShadow: "none",
      padding: "10px 0px",
    },
  });
};

const ScrollChange = (props: any) => {
  return <ScrollHandler {...props}>{props.children}</ScrollHandler>;
  return <></>;
};

export default ScrollChange;
