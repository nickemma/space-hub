import { Routes, Route } from 'react-router-dom';
import Mission from './Components/Mission';
import MyProfile from './Components/MyProfile';
import Rockets from './Components/Rockets';
import NavBar from './Components/Nav';
import './App.css';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Rockets />} />
        <Route path="/Mission" element={<Mission />} />
        <Route path="/MyProfile" element={<MyProfile />} />
      </Routes>
    </>
  );
}

export default App;
