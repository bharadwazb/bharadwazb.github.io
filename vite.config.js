import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Set base to your GitHub repo name, e.g. '/resumes_ui/'
// Change this before deploying to GitHub Pages
export default defineConfig({
    plugins: [react()],
    base: '/',
})
