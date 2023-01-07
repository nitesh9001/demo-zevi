import React from "react";
import Header from "./component/Header";
import './App.scss';

const  App = (props) => {
    return (
      <div className="app">
        <div className="overlays">
          <div>
            <Header />
          </div>
          <div>
            {props.children}
          </div>
          </div>
      </div>
    );
  }

export default App;