# My Resume Website

A beautiful, responsive resume website built with **React + Vite**, ready to deploy on **GitHub Pages**.

---

## 🚀 Getting Started

### 1. Install Node.js
Download and install Node.js (LTS) from [https://nodejs.org](https://nodejs.org).  
After installing, restart your terminal/PowerShell.

### 2. Install Dependencies
```bash
cd "C:\Users\Admin\.gemini\antigravity\scratch\resumes_ui"
npm install
```

### 3. Start the Dev Server
```bash
npm run dev
```
Open your browser at **http://localhost:5173**

---

## 📄 Pages

| Route | Description |
|---|---|
| `/` | **Home** — Profile photo, Name, Designation, Contact Me, Social Links |
| `/experience` | **Experience** — Career Objective + 3 Company Cards |
| `/experience/:id` | **Job Detail** — Bullet-point responsibilities per job |
| `/education` | **Education & Publications** — Timeline + Publication cards |

---

## ✏️ Customising Placeholders

| File | What to update |
|---|---|
| `src/components/NavBar.jsx` | Your name/brand in the navbar |
| `src/pages/Home.jsx` | Name, designation, LeetCode/GitHub/LinkedIn URLs |
| `src/pages/Experience.jsx` | Company names, roles, dates, responsibilities |
| `src/pages/Education.jsx` | Institution names, years, grades, publications |
| `src/components/Footer.jsx` | Contact email |
| `vite.config.js` | `base: '/your-repo-name/'` → change to your GitHub repo name |

---

## 🌐 Deploying to GitHub Pages

1. Push this folder to a GitHub repository (e.g. `resumes_ui`).
2. Update `vite.config.js`:
   ```js
   base: '/resumes_ui/',  // must match your repo name
   ```
3. Add your GitHub username to `package.json` homepage:
   ```json
   "homepage": "https://your-username.github.io/resumes_ui"
   ```
4. Run:
   ```bash
   npm run deploy
   ```
   This builds and pushes to the `gh-pages` branch automatically.

5. In your GitHub repo → **Settings → Pages → Source → `gh-pages` branch**.

Your site will be live at `https://your-username.github.io/resumes_ui` 🎉

---

## 🎨 Tech Stack

- **React 18** with React Router v6
- **Vite 5** (dev server + build)
- **Vanilla CSS** with custom properties (teal/blue/white/black palette)
- **Google Fonts** — Inter + Outfit
- **gh-pages** for one-command deployment
