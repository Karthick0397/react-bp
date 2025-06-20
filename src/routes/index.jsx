import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '@/pages/Home';
import About from '@/pages/About';

const AppRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
  </BrowserRouter>
);

export default AppRoutes;
