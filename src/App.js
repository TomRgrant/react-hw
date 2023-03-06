import './App.css';
import { useState } from 'react';

function App() {

  const [items, setItems] = useState([
    "Walk Dog",
    "Milk Cows",
    "Shower",
    "Sleep"
  ])

  const [newItemName, setNewItemName] = useState("");

  const itemNodes = items.map((item, index) => {
    return <li key = {index}>
             <span>{item}</span>
           </li>
  });

  function saveNewItem(event) {
    event.preventDefault();
    console.log(newItemName);
    const newItem = newItemName;
    const newItems = [...items, newItem];
    setItems(newItems);
    setNewItemName("")
  }

  function handelInputChange(event) {
    setNewItemName(event.target.value);
  }



  return (
    <div>
      <h1>ToDo's</h1>

      <form onSubmit={saveNewItem}>
      <input type="text" placeholder='Enter Task Name' onChange={handelInputChange}></input>
      <label value="High" id='high'>High</label>
      <input type="radio" id='high' value="High"></input>
      <label value="Low" id="low">Low</label>
      <input type="radio" id='low' value="Low"></input>
      <input type="submit" value="Add New Item"></input>
      </form>

    <ul>
      {itemNodes}
    </ul>



    </div>
  );
}

export default App;
