import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './components/header/Header';
import HomePage from './pages/HomePage';
import BeersPage from './pages/beersPage/BeersPage';
import SingleBeerPage from './pages/SingleBeerPage';
import RandomBeerPage from './pages/RandomBeer';
import NewBeerPage from './pages/newBeerPage/NewBeerPage';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/beers' element={<BeersPage/>}/>
        <Route path='/beers/:beerId' element={<SingleBeerPage/>}/>
        <Route path='/random-beer' element={<RandomBeerPage/>}/>
        <Route path='/new-beer' element={<NewBeerPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
