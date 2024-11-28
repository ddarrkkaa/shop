import React from "react";
import Item from "./item";

const Items = ({ items, onShowItem, onAdd }) => {
  return (
    <main>
      {items.map((item) => (
        <Item onShowItem={onShowItem} key={item.id} item={item} onAdd={onAdd} />
      ))}
    </main>
  );
};

export default Items;
