<instructions>
## 🚨 MANDATORY: CHANGELOG TRACKING 🚨

You MUST maintain this file to track your work across messages. This is NON-NEGOTIABLE.

---

## INSTRUCTIONS

- **MAX 5 lines** per entry - be concise but informative
- **Include file paths** of key files modified or discovered
- **Note patterns/conventions** found in the codebase
- **Sort entries by date** in DESCENDING order (most recent first)
- If this file gets corrupted, messy, or unsorted -> re-create it. 
- CRITICAL: Updating this file at the END of EVERY response is MANDATORY.
- CRITICAL: Keep this file under 300 lines. You are allowed to summarize, change the format, delete entries, etc., in order to keep it under the limit.

</instructions>

<changelog>
- 2026-06-11: Updated visa cards on `src/pages/VisaAssistancePage.tsx` to include Chinese, Schengen, Turkish, Russian, and British Visa entries; removed Germany and Australia.
- 2026-06-11: Converted major Arabic UI/content to English in `src/pages/AboutPage.tsx`, `src/pages/ExclusiveOffersPage.tsx`, `src/pages/BusinessPage.tsx`, `src/pages/EducationPage.tsx`, `src/pages/ContactUsPage.tsx`, `src/pages/FaqsPage.tsx`, `src/pages/ServicesPage.tsx`, plus `src/components/navigation/MobileNavigation.tsx`, `src/components/ConsentModal.tsx`, `src/sections/Footer/components/ContactFormSection.tsx`, and `src/pages/HomePage.tsx`.
- 2026-06-11: Updated `src/sections/Header/components/DesktopNavigation.tsx` Services arrow to toggle a dropdown with `Visas Services`, added `src/pages/VisaAssistancePage.tsx`, and registered `/en/services/visa-assistance` in `src/App.tsx`.
- 2026-06-11: Added `src/pages/ServicesPage.tsx` from `https://travelgateksa.com/en/services` and registered `/en/services` in `src/App.tsx`.
- 2026-06-11: Added `src/pages/PackagesPage.tsx` from `https://travelgateksa.com/en/packages` and registered `/en/packages` in `src/App.tsx`.
- 2026-06-11: Added `src/pages/FaqsPage.tsx` from `https://travelgateksa.com/en/faqs`, registered `/en/faqs` in `src/App.tsx`, and removed all `__ANIMA_DBG__` logs from `src/pages/ContactUsPage.tsx`.
- 2026-06-11: Updated `src/pages/ContactUsPage.tsx` for closer source parity (RTL sections, wording alignment, mailto submit behavior) and added temporary `__ANIMA_DBG__` logs on form interactions.
- 2026-06-11: Added `/en/contactus` route in `src/App.tsx` and created `src/pages/ContactUsPage.tsx` inspired by `https://travelgateksa.com/en/contactus`.
- 2026-06-11: Added `/en/education` route in `src/App.tsx` and created `src/pages/EducationPage.tsx` inspired by `https://travelgateksa.com/en/education`.
- 2026-06-11: Updated `workspace/CODER.md` and `workspace/TODO.md` to track completed education route and remaining header routes.
- 2026-06-11: Added `/en/careers` route in `src/App.tsx` and created `src/pages/CareersPage.tsx` inspired by `https://travelgateksa.com/en/careers`.
- 2026-06-11: Updated `workspace/CODER.md` and `workspace/TODO.md` to track completed careers route and remaining header route priorities.
- 2026-06-11: Added `/en/business` route in `src/App.tsx` and created `src/pages/BusinessPage.tsx` inspired by `https://travelgateksa.com/en/business`.
- 2026-06-11: Updated workspace memory files `workspace/CODER.md` and `workspace/TODO.md` to track completed business route and remaining route priorities.
- 2026-06-11: Added `/en/exclusive-offers` route in `src/App.tsx` and created `src/pages/ExclusiveOffersPage.tsx` inspired by `https://travelgateksa.com/en/exclusive-offers`.
- 2026-06-11: Updated `src/pages/AboutPage.tsx` CTA to internal route `/en/exclusive-offers`.
- 2026-06-11: Updated workspace memory files `workspace/CODER.md` and `workspace/TODO.md` to reflect completed exclusive offers route and next route priorities.
- 2026-06-11: Added router-based navigation for home/about in `src/App.tsx` and `src/index.tsx`.
- 2026-06-11: Created `src/pages/HomePage.tsx` and moved previous home sections into route component.
<!-- NEXT_ENTRY_HERE -->
</changelog>
