import React from "react";
import Header from "./component/Header";
import './Scss/main.scss';

const  App = (props) => {
    const pathName = window.location.pathname;
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