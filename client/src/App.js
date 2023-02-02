import './App.css';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './views/LandingPage';
import Login from './views/Login';
import Home from './views/Home';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<LandingPage/>} path='/'/>
        <Route element={<Login/>} path='login'/>
        <Route element={<Home/>} path='home'/>
      </Routes>
    </div>
  );
}

export default App;
