import React from "react";

export function Button({ children, onClick }) {
  return (
    <button
      className="bg-gray-100 w-28 flex items-center h-10 justify-center text-black shadow-2xl rounded hover:bg-blue-600"
      onClick={onClick}
    >
      {children}
    </button>
  );
}
