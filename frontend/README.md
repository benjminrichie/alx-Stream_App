installation

1. npm install

2. npm install axios lucide-react react-player react-hot-toast react-router-dom zustand

3. npm install -D tailwindcss postcss autoprefixer npx tailwindcss init -p

4. npm install -D prettier prettier-plugin-tailwindcss

5. npm install react-slick slick-carousel

6. npm run dev

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

@vitejs/plugin-react uses Babel for Fast Refresh
@vitejs/plugin-react-swc uses SWC for Fast Refresh


<!-- 
vercel.json
{
    "version": 2,
    "builds": [{ "src": "./server.js", "use": "@vercel/node" }],
    "routes": [{ "src": "/(.*)", "dest": "/" }]
} -->