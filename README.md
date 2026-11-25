# Swastik Dolas: Portfolio

Static single-page portfolio built with Vite, React and TypeScript. Deployed to GitHub Pages.

All text lives in `src/data/portfolio.ts`. Edit that file to change content; components only render what it contains.

## Local development

Requirements: Node.js LTS (this project was built with Node 26.13.1 via nvm-windows) and npm.

```bash
npm ci           # install exact dependencies from package-lock.json
npm run dev      # start the dev server at http://localhost:5173
npm run build    # type-check and produce dist/
npm run preview  # serve the built dist/ locally
npm run lint     # run oxlint
```

## How to deploy

The site deploys with `.github/workflows/deploy.yml`. It runs on every push to `main` and can be started manually from the Actions tab (`workflow_dispatch`).

1. Create the repository **`swastik-git.github.io`** on GitHub (a user site, so `vite.config.ts` uses `base: '/'`).
2. Push this project to its `main` branch.
3. In the repository, go to **Settings → Pages** and set **Source** to **GitHub Actions**.
4. Wait for the **Deploy to GitHub Pages** workflow to finish. The site is then live at `https://swastik-git.github.io/`.

Custom domain: a `CNAME` file for `swastikdolas.me` exists at the repo root and in `public/` (so it is copied into `dist/` on each deploy). Set the same custom domain under Settings → Pages if you use it. See the checklist below.

## Checklist: still needs input

Everything below is marked in the code with `TODO` comments and, where it is visible on the page, with a yellow **TO ADD** marker. Run `grep -rn "TODO" src index.html public` to list them.

- [ ] **Email**: set `contact.email` in `src/data/portfolio.ts`. Until then, the Contact section shows a TO ADD marker and a mailto link to a placeholder address.
- [ ] **Resume PDF**: add `public/resume.pdf`, then set `contact.resumeAvailable` to `true`. Until then the download button is disabled.
- [ ] **Experience results**: add measurable results for Ksolves India Ltd. (the sheet has no metrics, so none were written).
- [ ] **CGPA**: decide whether to show CGPA (`showCgpa` in `src/data/portfolio.ts`; it is `false` by default).
- [ ] **Jenkins and Kubernetes**: confirm they were used in practice, or remove them from the Cloud & DevOps skills (sheet note).
- [ ] **Headline**: confirm `Full Stack Developer | AI & GenAI Engineer` against the options in the sheet.
- [ ] **IDFC Bank app**: check your employer's policy before publishing the project name and description.
- [ ] **Project links** (optional): add a demo or repo link to a project's `link` field if one can be shared.
- [ ] **Favicon**: `public/favicon.svg` is a placeholder "SD" icon. Replace it with your own.
- [x] **Public URL**: canonical URL set to `https://swastikdolas.me/` in `site.seo.url` and `index.html` (`og:url`). The site is also served at `https://sd-git-04.github.io/`. Change both if you pick a different address.
- [ ] **Social preview image**: add an `og:image` once you have one.
- [ ] **Repo name**: the existing README named the repo `sd-git-04.github.io`. It must be `swastik-git.github.io` for the planned URL and `base: '/'`.

## Content rules followed

- Dependency analyzer and system design tracker are on hold and are commented out in `src/data/portfolio.ts`.
- Alfred AI chatbot and AI workflow automation are labelled **Concept**.
- IDFC Bank app is labelled **Work project** and has no internal module names.
- Learning is shown as **In progress**. CCDV-F is not listed.
- No achievements, awards or GSSoC section.
- Links are plain GitHub and LinkedIn URLs with no tracking parameters.
