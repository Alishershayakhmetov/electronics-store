import React from "react";

export default function Block({ children, style }) {
  const mergedStyles = {
    backgroundColor: "#FFF",
    padding: "16px",
    borderRadius: "12px",
    marginBottom: "20px",
    ...style,
  };
  return <div style={mergedStyles}>{children}</div>;
}
