import React from 'react';
import './App.css';
import Banner from './components/Banner';
import Cards from './components/Cards';
import Text from './components/Text';
import Carts from './components/Carts';
import Txt from './components/Txt'; 
import Burger from './components/Burger';

function App() {
  return (
    <div>
        <Burger />
        <Banner />
        <Cards />
        <Text />
        <Carts />
        <Txt />
    </div>
  )
}

export default App;
