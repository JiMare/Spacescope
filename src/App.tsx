import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {
  Tolgee, DevTools, TolgeeProvider, FormatSimple,
} from '@tolgee/react';
import HomePage from './pages/HomePage/index';
import Header from './components/Layouts/Header';
import Menu from './components/Layouts/Menu';
import MenuItem from './components/Layouts/Menu/MenuItem';
import GalleryPage from './pages/GalleryPage/index';
import WeatherPage from './pages/WeatherPage/index';
import ContactPage from './pages/ContactPage/index';
import LanguageSwitch from './components/UI/LanguageSwitch';

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
      <BrowserRouter>
        <Header>
          <Menu>
            <MenuItem to="/gallery" label="GALLERY" />
            <MenuItem to="/weather" label="WEATHER" />
            <MenuItem to="/contact" label="CONTACT" />
            <LanguageSwitch />
          </Menu>
        </Header>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/weather" element={<WeatherPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </BrowserRouter>
    </TolgeeProvider>
  );
};

export default App;
