import { Routes, Route } from 'react-router'
import Layout from '../components/layout/Layout'
import HomePage from '../pages/Home/HomePage'
import AboutPage from '../pages/About/AboutPage'
import ServicesPage from '../pages/Services/ServicesPage'
import ServiceDetailPage from '../pages/Services/ServiceDetailPage'
import IndustriesPage from '../pages/Industries/IndustriesPage'
import CaseStudiesPage from '../pages/CaseStudies/CaseStudiesPage'
import ContactPage from '../pages/Contact/ContactPage'
import PrivacyPage from '../pages/Legal/PrivacyPage'
import TermsPage from '../pages/Legal/TermsPage'
import NotFoundPage from '../pages/NotFound/NotFoundPage'

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="services" element={<ServicesPage />} />
        <Route path="services/:slug" element={<ServiceDetailPage />} />
        <Route path="industries" element={<IndustriesPage />} />
        <Route path="case-studies" element={<CaseStudiesPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="privacy-policy" element={<PrivacyPage />} />
        <Route path="terms-of-service" element={<TermsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}
