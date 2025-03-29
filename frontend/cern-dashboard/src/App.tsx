import React, { useState } from "react";
import { fetchCERNData } from "./api";
import { LineChart, Line, XAxis, YAxis, Tooltip } from "recharts";
import "./styles.css"; // Import the CSS

const App = () => {
  const [query, setQuery] = useState("");
  const [data, setData] = useState([]);

  const handleSearch = async () => {
    const results = await fetchCERNData(query);
    setData(results);
  };

  return (
    <div className="container">
      <h1>CERN Data Dashboard</h1>
      <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search CERN data..." />
      <button onClick={handleSearch}>Search</button>

      <div className="chart-container">
        <LineChart width={600} height={300} data={data}>
          <XAxis dataKey="title" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="energy" stroke="#4c8bf5" />
        </LineChart>
      </div>
    </div>
  );
};

export default App;
