import React from "react";

interface ItemTextProps {
  children: React.ReactNode;
}

const ItemText: React.FC<ItemTextProps> = (props) => {
  const { children } = props;

  return (
    <span
      css={{
        fontSize: "16px",
        color: "#000626",
        opacity: 0.9,
      }}
    >
      {children}
    </span>
  );
};

export default ItemText;
