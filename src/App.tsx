import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import ContactPage from './pages/ContactPage';
import NotFoundPage from './pages/NotFoundPage';
import PaymentSuccessPage from './pages/PaymentSuccessPage';

function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="services" element={<ServicesPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="payment-success" element={<PaymentSuccessPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default App;