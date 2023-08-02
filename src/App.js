import React from "react";
import './App.css';
// import ContadorHooks from "./componentes/ContadorHooks";
//import Formularios from "./componentes/Formularios";
import DisplayPokemons from "./componentes/DisplayPokemons";
// import CustomHook from "./componentes/CustomHook";
// import Referencias from './componentes/Referencias'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <section>
          {/* <hr/>
          <Formularios/>*/}
          <hr/>
          <DisplayPokemons/>
          <hr/>{/*}
          <CustomHook/>
          <hr/>
          <Referencias/>
          <hr/> */}
        </section>
      </header>
    </div>
  );
}
export default App;