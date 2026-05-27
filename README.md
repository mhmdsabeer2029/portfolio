# Mohamed Saber Abbas Elsayed — 3D Developer Portfolio

A 3D developer portfolio built with **React**, **Three.js** (`@react-three/fiber` + `@react-three/drei`), **Tailwind CSS**, **Framer Motion**, and **Vite**.

The design and animation system is adapted from [adrianhajdin/project_3D_developer_portfolio](https://github.com/adrianhajdin/project_3D_developer_portfolio) and populated with my real content (projects, experience, education, skills, contact).

## Tech Stack

- React 18 + Vite
- Three.js · `@react-three/fiber` · `@react-three/drei`
- Tailwind CSS
- Framer Motion (scroll/reveal animations)
- `react-vertical-timeline-component` (experience timeline)
- `react-parallax-tilt` (3D tilt on cards)
- `@emailjs/browser` (contact form, with `mailto:` fallback)

## Local Development

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # static build into dist/
npm run preview  # preview the production build
```

## Environment Variables (optional)

The contact form will try to send via [EmailJS](https://www.emailjs.com/) if these are set, otherwise it falls back to opening the user's mail client with `mailto:`.

Create a `.env` file at the repo root:

```
VITE_APP_EMAILJS_SERVICE_ID=...
VITE_APP_EMAILJS_TEMPLATE_ID=...
VITE_APP_EMAILJS_PUBLIC_KEY=...
```

## Deployment

A GitHub Actions workflow (`.github/workflows/deploy.yml`) builds the site and publishes it to GitHub Pages on every push to `main`. To enable it, set the repository's **Pages → Source** to *GitHub Actions*.

## Credits

3D models (`public/desktop_pc/`, `public/planet/`) and base layout originate from [JavaScript Mastery's 3D portfolio tutorial](https://www.youtube.com/@javascriptmastery) — see `public/desktop_pc/license.txt` and `public/planet/license.txt` for model licenses.
