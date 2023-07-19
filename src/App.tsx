import { HashRouter, Route, Routes } from 'react-router-dom';
import {
  Tolgee, DevTools, TolgeeProvider, FormatSimple,
} from '@tolgee/react';
import HomePage from './pages/HomePage/index';
import Header from './components/Layouts/Header';
import Menu from './components/Layouts/Menu';
import MenuItem from './components/Layouts/Menu/MenuItem';
import WeatherPage from './pages/WeatherPage/index';
import ContactPage from './pages/ContactPage/index';
import LanguageSwitch from './components/UI/LanguageSwitch';
import EpicPhotos from './pages/GalleryPage/EpicPhotos';
import MarsPhotos from './pages/GalleryPage/MarsPhotos';
import NasaPhotos from './pages/GalleryPage/NasaPhotos';

export const tolgee = Tolgee().use(DevTools()).use(FormatSimple()).init({
  language: 'en',

  // for development
  // apiUrl: process.env.REACT_APP_TOLGEE_API_URL,
  // apiKey: process.env.REACT_APP_TOLGEE_API_KEY,
  apiUrl: 'https://app.tolgee.io',
  apiKey: 'tgpak_giztanc7m5wguzrzgq2xmmtghe3xm4zzmy2gkytbn4ygq2jwom',
});

const App = (): JSX.Element => {
  return (
    <TolgeeProvider tolgee={tolgee} fallback="Loading...">
      <HashRouter>
        <Header>
          <Menu>
            <MenuItem to="/gallery/mars" label="GALLERY" />
            <MenuItem to="/weather" label="WEATHER" />
            <MenuItem to="/contact" label="CONTACT" />
            <LanguageSwitch />
          </Menu>
        </Header>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/gallery/mars" element={<MarsPhotos />} />
          <Route path="/gallery/epic" element={<EpicPhotos />} />
          <Route path="/gallery/nasa" element={<NasaPhotos />} />
          <Route path="/weather" element={<WeatherPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </HashRouter>
    </TolgeeProvider>
  );
};

export default App;
