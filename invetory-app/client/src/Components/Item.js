import React from "react";

export default function Item({ data }) {
  return (
    <div className="item-wrapper">
      <h1>{data.name}</h1>
      <h1>3</h1>
      <button>Delete</button>
    </div>
  );
}
