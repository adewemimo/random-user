import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get('https://random-data-api.com/api/name/random_name?size=10')
      .then(response => setData(response.data));
  }, [count]);

  const handleFetch = () => {
    setCount(prev => prev + 1);
    console.log(count);
  };

  return (
    <div className="App">
      <h1>Users</h1>
      <button onClick={handleFetch}>Refetch</button>

      {data.map(user => (
        <ul key={user.id}>
          <li>
            <p>
              <span>ID:</span> {user.id}
            </p>
            <p>
              <span>Name:</span> {user.name}
            </p>
          </li>
        </ul>
      ))}
    </div>
  );
}

export default App;

