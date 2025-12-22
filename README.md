# ERLER: Evolutionary Reinforcement Learning for Explainable Recommendation

This is the project website for the paper **"Evolutionary reinforcement learning for explainable recommendation on knowledge graph"**, published in *Applied Soft Computing* (2026).

## Features

- **Modern Design:** Built with React, Vite, and Tailwind CSS.
- **Responsive:** Optimized for mobile and desktop.
- **Interactive:** Smooth scroll, hover effects, and animations using Framer Motion.
- **Deployment Ready:** Configured for GitHub Pages.

## Project Structure

- `src/components`: React components for each section (Hero, Abstract, Methodology, Results, Authors).
- `src/App.tsx`: Main layout.
- `tailwind.config.js`: Design system configuration.

## Development

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start development server:
   ```bash
   npm run dev
   ```

3. Build for production:
   ```bash
   npm run build
   ```

4. Preview build:
   ```bash
   npm run preview
   ```

## Deployment to GitHub Pages

1. Push this repository to GitHub.
2. Go to Settings > Pages.
3. Select 'GitHub Actions' or deploy the `dist` folder from a branch.
   - *Note:* The project is already configured with `base: './'` for relative path routing.
