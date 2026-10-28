# Everlast Design + Build Catalogue

**Developer:** Afaq Ahmad

A refined catalogue experience for Everlast Design and Build, showcasing an edge profile collection for handleless interiors.

## What has been completed

- Built a responsive single-page catalogue using Next.js App Router and React.
- Added a warm editorial visual direction with neutral, walnut, sage, oak, greige, and charcoal tones.
- Added a responsive header with desktop navigation and a mobile menu.
- Added a hero section with the generated Everlast interior image and catalogue messaging.
- Added the collection introduction and eight profile cards:
  - J Profile
  - Concave
  - Teardrop
  - Full C
  - W Profile
  - Diamond
  - Straight
  - 45° Profile
- Added applications, technical specifications, and contact/footer sections.
- Added smooth anchor navigation for Collection, Applications, Specifications, and Contact.
- Added responsive layouts for desktop and mobile screens.
- Added accessible labels, semantic sections, descriptive image alt text, and icon-based navigation affordances.

## Project structure

- `app/page.tsx` — page entry point.
- `app/layout.tsx` — application layout and metadata.
- `app/globals.css` — catalogue styling, responsive rules, colors, typography, and profile visuals.
- `components/catalogue.tsx` — main catalogue page component and profile data.
- `public/everlast-hero.png` — hero and application imagery.

## What remains

This is currently a polished catalogue front-end prototype. The following items remain for a production release:

- Connect the “Request catalogue” and contact details to a real enquiry or catalogue-request form.
- Add backend storage for enquiries and catalogue requests.
- Replace placeholder contact details with the final business email and phone number.
- Add additional application imagery if the final catalogue needs more than one visual example.
- Confirm final product specifications, profile dimensions, materials, and manufacturing details.
- Add analytics, SEO refinement, and production deployment configuration.
- Add automated tests for navigation, mobile menu behavior, and responsive presentation.

## Running locally

Install dependencies and start the development server using the package manager configured in `package.json`.

The project uses Next.js 16, React 19, Tailwind CSS 4, and Lucide icons.

## Project status

The catalogue interface and responsive presentation are complete. Production integrations, final business content, and deployment validation remain to be completed.
