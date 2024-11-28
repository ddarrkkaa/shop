import React, { useState } from "react";

const Categories = ({ chooseCategory }) => {
  const [categories] = useState([
    {
      key: "all",
      name: "All",
    },
    {
      key: "chairs",
      name: "Chairs",
    },
    {
      key: "tables",
      name: "Tables",
    },
    {
      key: "lamps",
      name: "Lamps",
    },
    {
      key: "sofas",
      name: "Sofas",
    },
  ]);

  return (
    <div className="categories">
      {categories.map((category) => (
        <div key={category.key} onClick={() => chooseCategory(category.key)}>
          {category.name}
        </div>
      ))}
    </div>
  );
};

export default Categories;
