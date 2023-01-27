import './App.css';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './views/LandingPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<LandingPage/>} path='/'/>
      </Routes>
    </div>
  );
}

export default App;
