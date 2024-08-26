import { useEffect,useState } from "react";
function ListItems() {
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState('');

  function addItem (){
    if (inputValue.trim()) {
      setItems([...items, inputValue]);
      setInputValue('');
    }
  };

  useEffect(() => {
    console.log('component ListItems updated');
  }, []);

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={e => setInputValue(e.target.value)}
      />
      <button onClick={addItem}>add</button>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
export default ListItems;
