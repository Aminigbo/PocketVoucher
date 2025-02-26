import React from "react";

export function Input({ type, value, onChange, readOnly = false }) {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      readOnly={readOnly}
      className=" p-2 rounded w-full border-0"
    />
  );
}
