import React from "react";
import './App.css';
// import ContadorHooks from "./componentes/ContadorHooks";
// import AjaxHooks from "./componentes/AjaxHooks";
// import Referencias from './componentes/Referencias'
// import CustomHook from "./componentes/CustomHook";
import Formularios from "./componentes/Formularios";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <section>
          <hr/>
            <Formularios/>
          <hr/>
            {/* <ContadorHooks/>
          <hr/>
            <AjaxHooks/>
          <hr/>
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