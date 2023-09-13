import Home from './Home';
import Drink from './Drink';
import Chips from './Chips';
import Candy from './Candy';
import Links from './Links'
import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Links/>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='/drink' element={<Drink/>}/>
          <Route exact path='/chips' element={<Chips/>}/>
          <Route exact path='/candy' element={<Candy/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
