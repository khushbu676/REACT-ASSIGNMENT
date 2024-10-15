import React from 'react';
import NavbarTop from './components/NavbarTop';
import NavbarBottom from './components/NavbarBottom';
import Banner from './components/Banner';
import Categories from './components/Categories';

const App = () => {
  return (
    <div>
      <NavbarTop />
      <NavbarBottom />
      <Banner />
      <Categories />
    </div>
  );
};

export default App;
