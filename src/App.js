import './App.css';
import Home from './pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { routePath } from './constants/route';
import CategoryMovies from './pages/CategoryMovies';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={routePath.home} element={<Home />} />
        <Route path={routePath.category} element={<CategoryMovies />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
