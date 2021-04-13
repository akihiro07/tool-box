import React from 'react';
import classes from '../assets/styles/App.module.scss';
import { Toolbox } from './organisms/Toolbox';

function App() {
  return (
    <div className="App">
      <h1 className={classes.title}>Tool Box</h1>
      <Toolbox />
    </div>
  );
}

export default App;
