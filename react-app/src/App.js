import "./App.css";
import React from "react";
import Nav from "./components/Nav";
import { BrowserRouter } from "react-router-dom";
import OurRoutes from "./Routes";

function App() {
  return (
    <BrowserRouter> 
    <div className="App">
      <Nav/>
    
      <OurRoutes/>
    </div></BrowserRouter>
  );
}

export default App;
