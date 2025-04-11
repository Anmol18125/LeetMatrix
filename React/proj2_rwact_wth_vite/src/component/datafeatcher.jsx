import { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(data => {
        setData(data);
        setLoading(false);
      })
      .catch(e => {
        console.log(e);
      });
  }, []); // Dependency array to ensure the effect runs only once

  return (
    <div>
      {loading ? <p>Loading...</p> : <p>{data.title}</p>}
    </div>
  );
}

export default App;
