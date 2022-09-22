import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";
import { v4 as uuid } from "uuid";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearchValue] = useState("")
  const [categoryValue, setCategoryValue] = useState("Produce")
  const [nameValue, setNameValue] = useState("")
  const [itemsArray, setItemsArray] = useState(items)

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  function handleSearchChange(event) {
    setSearchValue(event.target.value)
  }

  function onItemFormSubmit(e) {
    e.preventDefault()
    const newItem = {
      id: uuid(),
      name: nameValue,
      category: categoryValue
    }
    setItemsArray([...itemsArray, newItem])
  }


  const searchedItems = itemsArray.filter(item => item.name.includes(search))
  const newItemsArray = (selectedCategory === "All") ? searchedItems : searchedItems.filter(item => item.category === selectedCategory)


  return (
    <div className="ShoppingList">
      <ItemForm
        onItemFormSubmit={onItemFormSubmit}
        categoryValue={categoryValue}
        setCategoryValue={setCategoryValue}
        nameValue={nameValue}
        setNameValue={setNameValue} />
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
