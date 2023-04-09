import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage/index';
import Header from './components/Layouts/Header';
import Menu from './components/Layouts/Menu';
import MenuItem from './components/Layouts/Menu/MenuItem';
import GalleryPage from './pages/GalleryPage/index';
import WeatherPage from './pages/WeatherPage/index';
import ContactPage from './pages/ContactPage/index';

const App = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Header>
        <Menu>
          <MenuItem to="/gallery" label="Gallery" />
          <MenuItem to="/weather" label="Weather" />
          <MenuItem to="/contact" label="Contact" />
        </Menu>
      </Header>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/weather" element={<WeatherPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
