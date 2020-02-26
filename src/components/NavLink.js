import React from "react";
import { Link } from "@reach/router";

export default function NavLink(props) {
  return (
    <Link
      {...props}
      getProps={({ isCurrent }) => {
        let className = "link-btn";
        if (isCurrent) {
          className += " link-btn__active";
        }
        return {
          className
        };
      }}
    />
  );
}
