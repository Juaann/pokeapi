import React from "react";
import './App.css';
import ContadorHooks from "./componentes/ContadorHooks";
import AjaxHooks from "./componentes/AjaxHooks";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <section>
          <hr></hr>
            <ContadorHooks/>
          <hr></hr>
            <AjaxHooks/>
          <hr></hr>
        </section>
      </header>
    </div>
  );
}

export default App;