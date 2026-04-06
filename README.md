# Argha Portfolio

A modern personal portfolio website built with Next.js and TypeScript to showcase my profile, technical skills, and project work.

Live website: https://arghadutta.me

## Overview

This project is designed as a fast, responsive, and clean one-page portfolio. It includes:

- A hero section with personal introduction
- About and education sections
- Skills categorized by domain
- Project highlights with key contributions
- Contact links (Email, GitHub, LinkedIn, X)
- Theme toggle with dark and light mode icons

## Tech Stack

- Next.js 16
- React 19
- TypeScript
- CSS (custom styling in globals.css)
- ESLint

## Available Scripts

```bash
npm run dev    # Start development server
npm run build  # Create production build
npm run start  # Run production server
npm run lint   # Run ESLint checks
```

## Project Structure

```text
.
├── public/
├── src/
│   └── app/
│       ├── globals.css
│       ├── layout.tsx
│       └── page.tsx
├── eslint.config.mjs
├── next.config.ts
├── package.json
└── tsconfig.json
```

## Customization

To customize the portfolio:

- Update content sections in `src/app/page.tsx`
- Update styles and theme variables in `src/app/globals.css`
- Replace/add profile images in the `public/` folder

## Deployment

This app can be deployed on platforms like Vercel or Netlify.

Typical production flow:

```bash
npm run build
npm run start
```

If connected to GitHub with auto-deploy, every push to the `main` branch will trigger a new deployment.

## Contact

- Email: imarghadutta@gmail.com
- GitHub: https://github.com/dutta-argha
- LinkedIn: https://www.linkedin.com/in/argha-dutta/

## License

This project is for personal portfolio use.
