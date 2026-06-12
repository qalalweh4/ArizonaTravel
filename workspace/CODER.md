<instructions>
This file will be automatically added to your context. 
It serves multiple purposes:
  1. Storing frequently used tools so you can use them without searching each time
  2. Recording the user's code style preferences (naming conventions, preferred libraries, etc.)
  3. Maintaining useful information about the codebase structure and organization
  4. Remembering tricky quirks from this codebase

When you spend time searching for certain configuration files, tricky code coupled dependencies, or other codebase information, add that to this CODER.md file so you can remember it for next time.
Keep entries sorted in DESC order (newest first) so recent knowledge stays in prompt context if the file is truncated.
</instructions>

<coder>
## 2026-06-11
- Converted visible Arabic UI/content strings to English across navigation, consent modal, contact form labels, and key pages: `src/pages/AboutPage.tsx`, `src/pages/ExclusiveOffersPage.tsx`, `src/pages/BusinessPage.tsx`, `src/pages/EducationPage.tsx`, `src/pages/ContactUsPage.tsx`, `src/pages/FaqsPage.tsx`, `src/pages/ServicesPage.tsx`, `src/components/navigation/MobileNavigation.tsx`, `src/components/ConsentModal.tsx`, `src/sections/Footer/components/ContactFormSection.tsx`, `src/pages/HomePage.tsx`.
- Added `src/pages/VisaAssistancePage.tsx` inspired by `travelgateksa.com/en/services/visa-assistance` and registered `/en/services/visa-assistance` route in `src/App.tsx`.
- Updated `src/sections/Header/components/DesktopNavigation.tsx` to make the Services arrow toggle a dropdown item labeled `Visas Services` linking to `/en/services/visa-assistance`.
- Added `src/pages/ServicesPage.tsx` inspired by `travelgateksa.com/en/services` and registered `/en/services` route in `src/App.tsx`.
- Added `src/pages/PackagesPage.tsx` inspired by `travelgateksa.com/en/packages` and registered `/en/packages` route in `src/App.tsx`.
- Added `src/pages/FaqsPage.tsx` inspired by `travelgateksa.com/en/faqs` and registered `/en/faqs` route in `src/App.tsx`.
- Updated `src/pages/VisaAssistancePage.tsx` visa type cards per request: kept Chinese, Schengen, Turkish, Russian, replaced London with British Visa, and removed Germany and Australia entries.
- Removed temporary runtime debug logs (`__ANIMA_DBG__`) from `src/pages/ContactUsPage.tsx` per cleanup requirement.
- Refined `src/pages/ContactUsPage.tsx` to more closely mirror `travelgateksa.com/en/contactus`: RTL sections, source wording for working hours, and a mailto-driven request form.
- Added `src/pages/ContactUsPage.tsx` inspired by `travelgateksa.com/en/contactus` and registered `/en/contactus` route in `src/App.tsx`.
- Added `src/pages/EducationPage.tsx` inspired by `travelgateksa.com/en/education` and registered `/en/education` route in `src/App.tsx`.
- Added `src/pages/CareersPage.tsx` inspired by `travelgateksa.com/en/careers` and registered `/en/careers` route in `src/App.tsx`.
- Added `src/pages/BusinessPage.tsx` inspired by `travelgateksa.com/en/business` and registered `/en/business` route in `src/App.tsx`.
- Added `src/pages/ExclusiveOffersPage.tsx` inspired by `travelgateksa.com/en/exclusive-offers` with a filter sidebar, sorting/search bar, and 12 offer cards.
- Registered `/en/exclusive-offers` route in `src/App.tsx`.
- Updated `src/pages/AboutPage.tsx` CTA link to internal `/en/exclusive-offers`.
- Routing is now handled with `react-router-dom` in `src/App.tsx` + `src/index.tsx` (BrowserRouter + Routes).
- Home page content was moved into `src/pages/HomePage.tsx` to keep route components clean.
- New About page content from `travelgateksa.com/en/about` was added in `src/pages/AboutPage.tsx`.
- Navigation links still use `href="/en/..."`, so routes must exist for each linked path to avoid fallback redirects.
</coder>
