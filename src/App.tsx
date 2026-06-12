import { Navigate, Route, Routes } from "react-router-dom";
import { HomePage } from "@/pages/HomePage";
import { AboutPage } from "@/pages/AboutPage";
import { ExclusiveOffersPage } from "@/pages/ExclusiveOffersPage";
import { BusinessPage } from "@/pages/BusinessPage";
import { CareersPage } from "@/pages/CareersPage";
import { EducationPage } from "@/pages/EducationPage";
import { ContactUsPage } from "@/pages/ContactUsPage";
import { FaqsPage } from "@/pages/FaqsPage";
import { PackagesPage } from "@/pages/PackagesPage";
import { ServicesPage } from "@/pages/ServicesPage";
import { VisaAssistancePage } from "@/pages/VisaAssistancePage";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/en" element={<HomePage />} />
      <Route path="/en/about" element={<AboutPage />} />
      <Route path="/en/exclusive-offers" element={<ExclusiveOffersPage />} />
      <Route path="/en/business" element={<BusinessPage />} />
      <Route path="/en/careers" element={<CareersPage />} />
      <Route path="/en/education" element={<EducationPage />} />
      <Route path="/en/faqs" element={<FaqsPage />} />
      <Route path="/en/packages" element={<PackagesPage />} />
      <Route path="/en/contactus" element={<ContactUsPage />} />
      <Route path="/en/services" element={<ServicesPage />} />
      <Route
        path="/en/services/visa-assistance"
        element={<VisaAssistancePage />}
      />
      <Route path="*" element={<Navigate to="/en" replace />} />
    </Routes>
  );
};
