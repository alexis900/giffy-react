import React from "react";
import "./App.css";
import ListOfGifs from "./components/ListOfGifs";

import { Link, Route } from 'wouter'

export default function App() {
  return (
    <div className="App">
      <section className="App-content">
        <h1>App</h1>
        <Link to="/search/pandas">Gifs de Pandas</Link>
        <Link to="/search/informatica">Gifs de programacion</Link>
        <Link to="/search/pandas">Gifs de Pandas</Link>
        <Route path="/search/:keyword" component={ListOfGifs}/>
      </section>
    </div>
  );
}
