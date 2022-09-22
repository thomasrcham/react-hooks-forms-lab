import React, { useEffect, useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm({ onItemFormSubmit, categoryValue, setCategoryValue, nameValue, setNameValue }) {


  return (
    <form className="NewItem" onSubmit={onItemFormSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={nameValue}
          onChange={(e) => setNameValue(e.target.value)} />
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
