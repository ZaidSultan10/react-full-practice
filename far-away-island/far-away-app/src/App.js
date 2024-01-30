import React from 'react';
import './App.css';
import Header from './components/header/Header';
import SearchBar from './components/searchBar/SearchBar';
import List from './components/list/List';
import Footer from './components/footer/Footer';

function App() {
  return (
    <main className="App">
      <div className='app__container'>
        <div className='app__header'>
          <Header />
        </div>
        <div className='app__search'>
          <SearchBar />
        </div>
        <div className='app__list'>
          <List />
        </div>
        <div className='app__footer'>
          <Footer />
        </div>
      </div>
    </main>
  );
}

export default App;
