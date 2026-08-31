# Athaulla Hafizh – Personal Portfolio

A minimalist, professional personal portfolio website built with **Vite**, **Tailwind CSS v3**, and **Vanilla JavaScript**.
Deployed to **GitHub Pages** as a fully static site.

## 🚀 Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Start development server (http://localhost:3000)
npm run dev

# 3. Build for production
npm run build

# 4. Preview production build
npm run preview
```

## 📦 Deploy to GitHub Pages

```bash
# One-time setup — install gh-pages (already in devDependencies)
npm install

# Deploy (runs build automatically via predeploy script)
npm run deploy
```

> **Note:** Before deploying, ensure `vite.config.js` has the correct `base` path matching your GitHub repository name.

## 🗂️ Project Structure

```
portofolio-athaulla-hafizh/
├── index.html                 # HTML skeleton (IDs only, no hardcoded content)
├── vite.config.js             # Vite config with GitHub Pages base path
├── tailwind.config.js         # Tailwind theme + custom tokens
├── postcss.config.js          # PostCSS (Tailwind + Autoprefixer)
├── package.json
├── .gitignore
├── public/
│   └── favicon.svg            # SVG favicon
└── src/
    ├── style.css              # Tailwind directives + component classes
    ├── main.js                # Controller — reads data, renders DOM
    ├── assets/
    │   └── profile.jpg        # ← Place your photo here
    └── data/
        └── portfolioData.js   # ← All content lives here
```

## ✏️ Customizing Content

Edit **`src/data/portfolioData.js`** only — no HTML changes needed.

## 📸 Adding Your Photo

Place your photo at `src/assets/profile.jpg`.
If the image is missing, an initials avatar fallback is shown automatically.

## 🛠️ Tech Stack

| Tool | Version |
|------|---------|
| Vite | ^5.4 |
| Tailwind CSS | ^3.4 |
| PostCSS | ^8.4 |
| gh-pages | ^6.1 |
| JavaScript | ES2022+ (Vanilla) |
