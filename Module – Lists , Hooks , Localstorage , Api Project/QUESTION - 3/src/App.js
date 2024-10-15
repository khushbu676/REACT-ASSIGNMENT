import React, { useState } from "react";
import "./App.css";

function App() {
  // State to store the input value and list of items
  const [item, setItem] = useState("");
  const [items, setItems] = useState([
    { id: 1, text: "Cheese", isEditing: false },
    { id: 2, text: "Milk", isEditing: false },
    { id: 3, text: "Eggs", isEditing: false },
  ]);

  // Handle input change
  const handleInputChange = (e) => {
    setItem(e.target.value);
  };

  // Add item to the list
  const addItem = () => {
    if (item.trim() !== "") {
      setItems([...items, { id: Date.now(), text: item, isEditing: false }]);
      setItem(""); // Clear input after adding
    }
  };

  // Edit an item
  const editItem = (id) => {
    const newItems = items.map((item) =>
      item.id === id ? { ...item, isEditing: !item.isEditing } : item
    );
    setItems(newItems);
  };

  // Update item text
  const updateItemText = (id, newText) => {
    const newItems = items.map((item) =>
      item.id === id ? { ...item, text: newText, isEditing: false } : item
    );
    setItems(newItems);
  };

  // Delete an item
  const deleteItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  // Clear the entire list
  const clearList = () => {
    setItems([]);
  };

  return (
    <div className="app-container">
      <h1 className="title">Grocery Shopping</h1>
      <div className="input-container">
        <input
          type="text"
          value={item}
          placeholder="Add something to your list"
          onChange={handleInputChange}
        />
        <button className="add-btn" onClick={addItem}>Add</button>
        <button className="clear-btn" onClick={clearList}>Delete List</button>
      </div>
      <div className="list-container">
        {items.map((item) => (
          <div key={item.id} className="list-item">
            {item.isEditing ? (
              <input
                type="text"
                value={item.text}
                onChange={(e) => updateItemText(item.id, e.target.value)}
              />
            ) : (
              <p>{item.text}</p>
            )}
            <div className="actions">
              <button onClick={() => deleteItem(item.id)}>🗑️</button>
              <button onClick={() => editItem(item.id)}>
                {item.isEditing ? "💾" : "✏️"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
