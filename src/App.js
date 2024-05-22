import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import JazzPage from './pages/JazzPage';
import LyricalPage from './pages/LyricalPage';
import HomePage from './pages/HomePage';
import TapPage from './pages/TapPage';
import BalletPage from './pages/BalletPage';
import MusicalTheaterPage from './pages/MusicalTheaterPage';
import HipHopPage from './pages/HipHopPage';
import SoloPage from './pages/SoloPage';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='jazz' element={<JazzPage />} />
          <Route path='lyrical' element={<LyricalPage />} />
          <Route path='tap' element={<TapPage />} />
          <Route path='ballet' element={<BalletPage />} />
          <Route path='musicaltheater' element={<MusicalTheaterPage />} />
          <Route path='hiphop' element={<HipHopPage />} />
          <Route path='solo' element={<SoloPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
