import './App.css';
import Categories from './pages/Categories';
import Home from "./pages/Home"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/categories" element={<Categories/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
