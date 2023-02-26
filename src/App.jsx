import { Route, Routes } from 'react-router-dom';
import './App.css'
import { Navbar } from './components/Navbar';
import { About } from './pages/About';
import { Home } from './pages/Home';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path="*" element={<div>Not found, buddy</div>} />
        </Routes>
      </header>
    </div>
  );
}

export default App
