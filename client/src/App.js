import './App.css';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './views/LandingPage';
import Login from './views/Login';
import Home from './views/Home';
import SearchGames from './views/SearchGames';
import SearchGMs from './views/SearchGMs';
import ViewGame from './views/ViewGame';
import ViewGM from './views/ViewGM';
import Profile from './views/Profile';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<LandingPage/>} path='/'/>
        <Route element={<Login/>} path='login'/>
        <Route element={<Home/>} path='home'/>
        <Route element={<SearchGames/>} path='searchGames'/>
        <Route element={<SearchGMs/>} path='searchGMs'/>
        <Route element={<ViewGame/>} path='game'/>
        <Route element={<ViewGM/>} path='gm'/>
        <Route element={<Profile/>} path='profile'/>
      </Routes>
    </div>
  );
}

export default App;
