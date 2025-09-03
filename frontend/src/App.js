// src/App.js
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Register from './pages/Register';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route path="/Home"  element={<Home />} />
          <Route path="/Register"  element={<Register />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;