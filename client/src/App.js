import React, { useEffect } from 'react';
import Home from './components/Home';
import Left from './components/Left';
import Right from './components/Right';
import './App.css'
import { TextField } from '@material-ui/core';

function App() {

  return (
    // <div>
    <TextField
      onClick={() => console.log("Clicking")}
      disabled={true}
      multiline={true}
      value="Hello"
      name="name"
      onMouseEnter={() => { }}
      onMouseLeave={() => { }}
      InputProps={{
        classes: {
          // disabled: classes.disabled,
          // root: classes[variant]
        }
      }}
    />
    // </div>
    // <div className="app">
    //   <div className="app-left">
    //     <Left />
    //   </div>
    //   <div className="app-right">
    //     <Right />
    //   </div>
    // </div>
  );
}

export default App;
