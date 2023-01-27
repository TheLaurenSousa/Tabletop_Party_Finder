import './App.css';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './views/LandingPage';
import Login from './views/Login';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<LandingPage/>} path='/'/>
        <Route element={<Login/>} path='login'/>
      </Routes>
    </div>
  );
}

export default App;
