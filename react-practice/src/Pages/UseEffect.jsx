import React, { useEffect, useState } from 'react';

function UseEffect() {
  const [data, setData] = useState([]);
    const [count, setCount] = useState(0);

    async function fetchData() {
      const response = await fetch("https://jsonplaceholder.typicode.com/users");
      const result = await response.json();
      setData(result);
      console.log("fetching data again");
      
    }

    // fetchData();

      useEffect(() => {
    fetchData(); // runs once
  }, []);
  return (
    <>
      <h2>Users</h2>
       <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>
        Increase Count
      </button>
      <ul>
        {data.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </>
  );
}

export default UseEffect;
