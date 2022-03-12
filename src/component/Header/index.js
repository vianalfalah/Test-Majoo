import React from "react";
import "./style.css";

export default function index({ title }) {
  return (
    <div className="header">
      <div className="title">{title}</div>
    </div>
  );
}
