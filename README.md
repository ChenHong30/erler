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

This project is configured for automatic deployment to GitHub Pages using GitHub Actions.

### Automatic Deployment

The site will automatically deploy when you push to the `main` branch:

1. Push your changes to the `main` branch
2. GitHub Actions will automatically build and deploy the site
3. Your site will be available at `https://<username>.github.io/<repository-name>/`

### Manual Setup (First Time)

1. Go to your repository Settings > Pages
2. Under "Build and deployment", select **Source: GitHub Actions**
3. The workflow is already configured in `.github/workflows/deploy.yml`
4. Push to the `main` branch to trigger the first deployment

### Manual Deployment

You can also trigger a manual deployment:
1. Go to the Actions tab in your repository
2. Select the "Deploy to GitHub Pages" workflow
3. Click "Run workflow" and select the branch

**Note:** The project uses `base: './'` in `vite.config.ts` for relative path routing, making it compatible with GitHub Pages subdirectory deployment.
