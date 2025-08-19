# Bekalu Temesgen — Portfolio Website

A modern, responsive portfolio built with React, Framer Motion, and custom CSS. It showcases projects, skills, and background with smooth interactions and dark/light themes.

## 🚀 Highlights

- **React 19** app with functional components and hooks
- **Smooth animations** with Framer Motion
- **Dark/Light mode** with persistence
- **Filterable projects** and **interactive skill categories**
- **Scroll-to-top** helper and refined mobile experience
- **Accessible UI**: focus states, ARIA labels where relevant

## 📊 Language & tech usage (approx.)

| Technology | Share |
| --- | --- |
| JavaScript/JSX (React) | ~70% |
| CSS | ~18% |
| TypeScript (.ts/.tsx for bootstrapping, tests) | ~8% |
| JSON/Config | ~4% |

Notes: The UI components are primarily `.jsx`. TypeScript is used in the entry, tests, and typings.

## 🧩 Sections

- Hero: prominent name, role typing, CTAs, social links
- About: stats and compact education/experience timeline
- Skills: category chips + narrative of strengths
- Projects: filterable cards with tech stack and links
- Achievements: certificates and highlights
- Contact: polished info cards and validated form
- Scroll to Top: floating button for quick navigation

## 🛠️ Stack

- React 19, React Router, React Helmet Async
- Framer Motion, React Intersection Observer
- Lucide React icons
- Create React App (CRA) build tooling
- Custom CSS with variables (no CSS frameworks)

## 📁 Project Structure (simplified)

```
src/
├── components/
│   ├── Header.jsx        # Navigation + theme toggle
│   ├── Hero.jsx          # Hero section
│   ├── About.jsx         # About + timeline
│   ├── Skills.jsx        # Skill categories + narrative
│   ├── Projects.jsx      # Project grid + filters
│   ├── Achievements.jsx  # Certificates
│   ├── Contact.jsx       # Contact info + form
│   ├── Footer.jsx        # Footer
│   └── ScrollToTop.jsx   # Floating scroll control
├── App.jsx               # Main routes and layout
├── App.css               # Global styles, components helpers
└── index.tsx             # Entry (CRA)
```

## ✅ Quality rating and recommendations

- **Overall rating**: 8.7/10
- **Strengths**:
  - Clean design, smooth animations, clear CTAs
  - Dark mode and responsive behavior
  - Filterable projects and organized sections
- **Recommendations**:
  - Add real project screenshots and live links for each card
  - Add basic SEO: meta description, Open Graph, social image
  - Generate `sitemap.xml` and verify `robots.txt`
  - Optimize images (WebP/AVIF) and run Lighthouse to target 90+ scores
  - Add a 404 route and basic analytics (e.g., Vercel Analytics)
  - Consider minimal tests for critical UI (render + accessibility)

## 🧪 Getting started

Prereqs: Node 18+, npm

```bash
npm install
npm start
```

Build:

```bash
npm run build
```

## ▲ Free deployment on Vercel (recommended)

Option A — Git integration (one-click deploys)
1) Push this repo to GitHub/GitLab/Bitbucket.
2) Go to vercel.com → New Project → Import your repo.
3) Framework preset: “Create React App” (auto-detected).
4) Build Command: `npm run build`
5) Output/Publish Directory: `build`
6) Deploy. Vercel will create a preview URL and a production domain.

Option B — Vercel CLI
```bash
npm i -g vercel
vercel
# For production
vercel --prod
```

Post-deploy tips
- Set project name and custom domain in the Vercel dashboard.
- Enable Vercel Analytics and Speed Insights.
- Add environment variables if you later integrate APIs.

## 📞 Contact

- Email: bekalutemesgen74@gmail.com  
- Phone: +251 (992) 721-492  
- Location: Bahir Dar, Ethiopia  
- GitHub: Bekalu-Temesgen2306

---

Built with ❤️ by Bekalu Temesgen
