import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import BeersPage from './pages/beersPage/BeersPage';
import SingleBeerPage from './pages/SingleBeerPage';
import RandomBeerPage from './pages/RandomBeerPage';
import NewBeerPage from './pages/newBeerPage/NewBeerPage';
import OutletComponent from './components/outlet/OutletComponent';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route element={<OutletComponent />}>
          <Route path='/beers' element={<BeersPage />} />
          <Route path='/beers/:beerId' element={<SingleBeerPage />} />
          <Route path='/random-beer' element={<RandomBeerPage />} />
          <Route path='/new-beer' element={<NewBeerPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
