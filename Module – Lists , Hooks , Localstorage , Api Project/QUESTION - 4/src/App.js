import React from 'react';


const items = [
  { id: 'item1', name: 'Apple' },
  { id: 'item2', name: 'Banana' },
  { id: 'item3', name: 'Orange' },
  { id: 'item4', name: 'Mango' },
];

function ItemList() {
  return (
    <div>
      <h2>Fruit List</h2>
      <ul>
       
        {items.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

// Main App component
function App() {
  return (
    <div className="App">
      <ItemList />
    </div>
  );
}

export default App;

