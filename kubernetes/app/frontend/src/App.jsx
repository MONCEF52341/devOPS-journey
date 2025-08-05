import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([]);

  const swagger = `${import.meta.env.VITE_REACT_APP_API_URL}/api-docs`;

  useEffect(() => {
    // Utilisation de la variable d'environnement
    fetch(`${import.meta.env.VITE_REACT_APP_API_URL}/api/data`)
      .then((res) => res.json())
      .then((data) => setData(data.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="container">
      <h1>MERN Frontend</h1>
      <p>API URL: {import.meta.env.VITE_REACT_APP_API_URL}</p>

      <h1>Fetched API</h1>
      <ul>
        {data.map((item) => <li key={item.id}>{item.name}</li>)}
      </ul>

      <a href={swagger} target="_blank" rel="noopener noreferrer">
        Swagger link
      </a>
    </div>
  );
}

export default App;
