import React from "react";

export default function Button(props) {
  const {
    text,
    onClick,
    alternateClassName,
    type = "button",
    disabled = false,
  } = props;
  return (
    <button
      type={type}
      onClick={onClick}
      className={`bg-Peru text-white font-bold text-sm py-3 px-6 hover:bg-VeryLightTangelo ${
        alternateClassName || ""
      }`}
      disabled={disabled}
    >
      {text}
    </button>
  );
}
