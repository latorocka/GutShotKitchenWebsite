# GitHub Pages Deployment Guide for GutShot

## Current Status
- **Issue**: Getting GitHub's 404 page at https://latorocka.github.io/GutShotKitchenWebsite/
- **Cause**: GitHub Pages cannot find the built files

## Solution: Deploy Using GitHub Actions (Recommended)

### Step 1: Create GitHub Actions Workflow

1. In your GitHub repository, create this file: `.github/workflows/deploy.yml`

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]  # Change to 'master' if that's your main branch
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
        
      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: 'npm'
          
      - name: Install dependencies
        run: npm ci
        
      - name: Build
        run: npm run build:pages
        
      - name: Setup Pages
        uses: actions/configure-pages@v4
        
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: ./dist/public

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

### Step 2: Configure GitHub Pages Settings

1. Go to your repository on GitHub
2. Click **Settings** → **Pages** (in the left sidebar)
3. Under "Build and deployment":
   - **Source**: Select **"GitHub Actions"**
4. Click Save

### Step 3: Trigger Deployment

**Option A: Push a commit**
```bash
git add .
git commit -m "Setup GitHub Pages deployment"
git push
```

**Option B: Manual trigger**
- Go to **Actions** tab in your repository
- Click on "Deploy to GitHub Pages" workflow
- Click "Run workflow" → "Run workflow"

### Step 4: Wait and Verify

1. Go to the **Actions** tab in your GitHub repository
2. Watch the workflow run (takes 1-2 minutes)
3. Once complete, visit: https://latorocka.github.io/GutShotKitchenWebsite/

---

## Alternative: Manual Build and Deploy

If you prefer to deploy manually:

### 1. Build the site locally
```bash
npm run build:pages
```

### 2. Deploy using gh-pages package

Install gh-pages:
```bash
npm install --save-dev gh-pages
```

Add to `package.json` scripts:
```json
"scripts": {
  "deploy": "npm run build:pages && gh-pages -d dist/public"
}
```

Deploy:
```bash
npm run deploy
```

### 3. Configure GitHub Pages
- Go to **Settings** → **Pages**
- **Source**: Select **"Deploy from a branch"**
- **Branch**: Select **"gh-pages"** and **"/ (root)"**
- Click Save

---

## Troubleshooting

### Issue: Still getting 404 after deployment

**Check these:**

1. **Verify the build created files**:
   ```bash
   npm run build:pages
   ls -la dist/public/
   # Should see: index.html, assets/, etc.
   ```

2. **Check GitHub Actions logs**:
   - Go to Actions tab
   - Click on the latest workflow run
   - Check for any errors

3. **Verify GitHub Pages is enabled**:
   - Settings → Pages
   - Should show: "Your site is live at https://latorocka.github.io/GutShotKitchenWebsite/"

4. **Check branch name**:
   - If your main branch is `master` instead of `main`, update the workflow file

5. **Clear browser cache**:
   - Try in incognito/private mode
   - Hard refresh: Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)

### Issue: Assets/images not loading

This should be fixed with `vite.config.pages.ts` which sets `base: '/GutShotKitchenWebsite/'`

### Issue: Routing issues (URLs not working)

The app already has the spa-github-pages redirect script in place, so routing should work once deployed.

---

## What's Already Configured

✅ `vite.config.pages.ts` - Production build config with correct base path  
✅ `client/public/404.html` - SPA redirect handler  
✅ `client/index.html` - Redirect script for routes  
✅ `src/App.tsx` - Router configured with BASE_URL  
✅ `package.json` - Build script (`build:pages`)

---

## Quick Start (Copy-Paste)

1. Create `.github/workflows/deploy.yml` with the workflow above
2. Go to Settings → Pages → Source → **GitHub Actions**
3. Push a commit or trigger workflow manually
4. Wait 1-2 minutes
5. Visit https://latorocka.github.io/GutShotKitchenWebsite/

---

## Need Help?

If you're still getting errors after following these steps:
1. Share the GitHub Actions log (from the Actions tab)
2. Share a screenshot of Settings → Pages
3. Let me know what error message you see
