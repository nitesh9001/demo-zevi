import React from "react";
import Header from "./component/Header";
import './App.scss';

const  App = (props) => {
    const pathName = window.location.pathname;
    console.log(pathName)
    return (
      <div className="app">
        <div className="overlays">
          {pathName !== "/" ? <div>
            <Header />
          </div> : 
          <div></div>
          }
          <div>
            {props.children}
          </div>
        </div>
      </div>
    );
  }

export default App;