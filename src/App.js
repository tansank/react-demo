import logo from './logo.svg';
import './App.css';
import {useState} from 'react'
import Food from './pages/Food'
import Places from './pages/Places'

const App=()=>
{

  return (
    <div className="App">
     {/* <Food/> */}
     <Places/>
    </div>
  );
}

export default App;
