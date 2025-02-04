import React from "react";
import { NavLink, To } from "react-router";

interface Props {
  to: To;
  children: React.ReactNode;
}

const Item: React.FC<Props> = (props) => {
  const { to, children } = props;

  return (
    <li>
      <NavLink
        to={to}
        css={{
          display: "flex",
          alignItems: "center",
          gap: "12px",
          padding: "12px 24px 12px 20px",
          textDecoration: "none",
          borderLeft: "4px solid transparent",
          borderLeftColor: "transparent",
          backgroundColor: "white",
          "&.active": {
            borderLeftColor: "#4C64D9",
            backgroundColor: "#0015800A",
          },
          "&:hover": {
            backgroundColor: "#0015800A",
          },
          "&:active": {
            backgroundColor: "#00116619",
          },
        }}
      >
        {children}
      </NavLink>
    </li>
  );
};

export default Item;
