import React, { memo } from "react";
import "./style.css";

const Header = memo(({ title }) => {
  return (
    <div className="header">
      <div className="title">{title}</div>
    </div>
  );
});

export default Header;
