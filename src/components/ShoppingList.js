import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearchValue] = useState("")

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  function handleSearchChange(event) {
    setSearchValue(event.target.value)
  }

  function handleFormSubmit(e) {
    e.preventDefault()
    console.log('yay')
  }

  const searchedItems = items.filter(item => item.name.includes(search))
  const newItemsArray = (selectedCategory === "All") ? searchedItems : searchedItems.filter(item => item.category === selectedCategory)

  return (
    <div className="ShoppingList">
      <ItemForm
        onItemFormSubmit={handleFormSubmit} />
      <Filter
        onCategoryChange={handleCategoryChange}
        searchValue={search}
        onSearchChange={handleSearchChange} />
      <ul className="Items">
        {(newItemsArray.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        )
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
