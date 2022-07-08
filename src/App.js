import { Routes, Route, Link } from "react-router-dom";
import './App.css';
import Layout from './layouts/Layout';
import Home from './pages/Home';
import About from './pages/About';

function App() {
  return (
    <div className="App">
      <h1>Welcome to React Router!</h1>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          </Route>
      </Routes>

    </div>
  );
}

export default App;
