# Argie Mariano — Portfolio

Plain HTML/CSS/JS personal portfolio. No build step — open `index.html` directly or serve with any static server.

## Add your screenshots

Drop project screenshots into `assets/images/projects/` using these exact filenames
(referenced in `js/projects-data.js`):

- `hotel-booking-confirmation.png`
- `weather-app.png`
- `calculator-app.png`
- `foreign-exchange-checker.png`
- `ip-address-tracker.png`
- `multi-step-form.png`

Recommended size: 800×600px or similar 4:3 ratio (cards are cropped to `object-fit: cover`).
If a file is missing, the card shows an "Add screenshot" placeholder instead of breaking.

## Add your CV

Place your PDF resume at `assets/Argie-Mariano-CV.pdf` — the nav "Download CV" button already
points there.

## Add a profile photo (optional)

The About section currently has no photo slot. If you want one, add an `<img>` inside
`.about__grid` in `index.html` and drop the file in `assets/images/`.

## Deploy

Any static host works: GitHub Pages, Netlify, Vercel, or Render (static site). No environment
variables or build commands needed.

## Editing projects

To add, remove, or reorder a project, edit the `PROJECTS` array in `js/projects-data.js` —
the card grid rebuilds from that array automatically, no HTML editing required.
