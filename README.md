# QA Engineer Portfolio (Hudha Farasha V P)

Suggested repository name: `hudha-farasha-portfolio`

## Overview
A one-page portfolio for an entry-level AI Quality Engineer. The hero is styled as a test run: PASS for skills already used in projects, WIP for skills still being learned (Playwright, Pytest, Appium, Promptfoo, DeepEval). All content comes from the resume and LinkedIn profile.

## Stack
Next.js 14 (App Router), React 18, Tailwind CSS 3. No API keys or environment variables. Uses system fonts, so it runs offline.

## Run locally
```
npm install
npm run dev
```
Open http://localhost:3000. Production: `npm run build && npm start`.

## Customize
- Edit `data/portfolio.js`: profile, hero checks, projects, experience, skills, education, certifications.
- Replace `public/resume.pdf` with a newer resume.
- Colors (light and dark) are CSS variables at the top of `app/globals.css`.
- No GitHub link is included because none was in the source documents. Add a `github` field in `data/portfolio.js` and a link in `components/Contact.js`.
- The resume lists the LinkedIn URL as `hudha-farasha-vp`; the profile PDF shows `hudhafarasha-vp`. The profile one is used. Confirm which is correct.

## Design update
Dark editorial redesign (charcoal, burnt orange, uppercase headings, floating nav).
- Profile photo: save a square image as `public/profile.jpg`. Until then initials show.
- GitHub: set `github` and each project's `repo` / `image` in `data/portfolio.js`. Icons appear only when set.
- Contact form: with no configuration it opens the visitor's email app with the message prefilled. To send directly, create a free form endpoint (for example at formspree.io), copy `.env.example` to `.env.local` and set `NEXT_PUBLIC_FORM_ENDPOINT` to its URL.
