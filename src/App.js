import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Cards from './components/Cards';
import Text from './components/Text';
import Carts from './components/Carts';
import Txt from './components/Txt'; 

function App() {
  return (
    <div>
        <Navbar />
        <Banner />
        <Cards />
        <Text />
        <Carts /> 
        <Txt />
    </div> 
  )
}

export default App;
