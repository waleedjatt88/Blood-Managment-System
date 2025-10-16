import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './styles/GlobalStyles';
import { theme } from './styles/theme';
import { Routes, Route } from 'react-router-dom';

import MainLayout from './components/Layout/MainLayout'; 
import HomePage from './pages/HomePage';
import AvailableBloodPage from './pages/AvailableBloodPage';
import DonateBloodPage from './pages/DonateBloodPage';
import RequestBloodPage from './pages/RequestBloodPage';
import HospitalsPage from './pages/HospitalsPage';
import ContactUsPage from './pages/ContactUsPage';
import AboutUsPage from './pages/AboutUsPage';
import AuthPage from './pages/AuthPage';
import AdminRoute from './components/Layout/AdminRoute';
import DashboardPage from './pages/admin/DashboardPage';
import DonationsPage from './pages/admin/DonationsPage';
import RequestsPage from './pages/admin/RequestsPage';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/available-blood" element={<AvailableBloodPage />} />
          <Route path="/donate-blood" element={<DonateBloodPage />} />
          <Route path="/request-blood" element={<RequestBloodPage />} />
          <Route path="/hospitals" element={<HospitalsPage />} />
          <Route path="/contact-us" element={<ContactUsPage />} />
          <Route path="/about-us" element={<AboutUsPage />} />
           <Route element={<AdminRoute />}>
            <Route path="/admin/dashboard" element={<DashboardPage />} />
            <Route path="/admin/donations" element={<DonationsPage />} />
            <Route path="/admin/requests" element={<RequestsPage />} />
          </Route>
        </Route>


        <Route path="/login" element={<AuthPage />} />
        <Route path="/register" element={<AuthPage />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;