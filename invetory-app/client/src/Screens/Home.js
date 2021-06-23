import React, { useEffect, useState } from "react";
import axios from "axios";
import { Item, Button } from "../Components";

export default function Home() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3001/60d36294af09470b39311ae3", {})
      .then((res) => {
        const items = res.data.items;
        setItems(items);
      });
  }, items);

  const addItem = () => {
    axios.patch("http://localhost:3001/60d36294af09470b39311ae3", {
      newItem: newItem,
    });
  };

  const [newItem, setNewItem] = useState();

  const renderItems = items.map((it, ind) => (
    <li key={ind}>
      <Item data={it} />
    </li>
  ));

  return (
    <div className="inv-wrapper">
      <h1>My Inventory</h1>
      <ul>{renderItems}</ul>
      <h1>Add item:</h1>
      <input
        onChange={(e) => setNewItem(e.target.value)}
        type="text"
        name="item-name"
        id="item-input"
      />
      <button onClick={addItem}>Add</button>
    </div>
  );
}
