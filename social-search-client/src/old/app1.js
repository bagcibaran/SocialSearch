import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import { Routes, Route, Link, Navlink } from "react-router-dom";

export default function App() {
  const [searchKey, setSearcKey] = useState("");
  const [error, setError] = useState("");
  const [resultList, setResultList] = useState([]);
  useEffect(() => {}, []);

  const searchFromAPI = async () => {
    if (!searchKey) {
      setError("Search key required!");
      return false;
    }
    try {
      const response = await axios.get(
        `http://localhost:5000/search?searchKey=${searchKey}`
      );
      setResultList(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="App">
      <div className="container">
        <nav className="navbar">
          <ul className="menu">
            <li>
              <a href="home">Home</a>
            </li>
            <li>
              <a href="about">About</a>
            </li>
            <li>
              <a href="contact">Contact</a>
            </li>
          </ul>
        </nav>
        <div className="inputContainer">
          <input
            className="search"
            value={searchKey}
            type="text"
            placeholder="Please Enter Key!!!!"
            onChange={(e) => setSearcKey(e.target.value)}
          />
          <button
            className="button"
            type="button"
            onClick={() => searchFromAPI()}
          >
            Search
          </button>
        </div>
        {error && <p>{error}</p>}

        <div className="dataContainer">
          {resultList.map((item, key) => {
            const bgColor = item.hasAccount === true ? "green" : "red";
            if (bgColor === "green") {
              return (
                <div className={`card ${bgColor}`} key={key}>
                  <a href={item.url}>
                    <h5>{item.siteName}</h5>
                    <i
                      class={`fa-brands fa-${item.siteName.toLowerCase()}`}
                    ></i>
                  </a>
                </div>
              );
            } else {
              return "";
            }
          })}
        </div>
      </div>
         
    </div>
  );
}
