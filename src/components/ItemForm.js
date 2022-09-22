import React, { useState } from "react";
import { v4 as uuid } from "uuid";


function ItemForm({ onItemFormSubmit, name }) {
  const [categoryValue, setCategoryValue] = useState("Produce")

  return (
    <form className="NewItem" onSubmit={onItemFormSubmit}>
      <label>
        Name:
        <input type="text" name="name" value={name} />
      </label>

      <label>
        Category:
        <select
          name="category"
          value={categoryValue}
          onChange={(e) => setCategoryValue(e.target.value)}
        >
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
