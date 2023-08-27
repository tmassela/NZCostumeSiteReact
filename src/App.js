import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import JazzPage from './pages/JazzPage';
import LyricalPage from './pages/LyricalPage';
import HomePage from './pages/HomePage';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='jazz' element={<JazzPage />} />
          <Route path='lyrical' element={<LyricalPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
