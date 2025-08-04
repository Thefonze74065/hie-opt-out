# GitHub Pages Deployment Guide

## Quick Setup for GitHub Pages

### 1. Create a New Repository
1. Go to GitHub and create a new repository
2. Name it something like `hie-opt-out-guide` or similar
3. Make it public (required for free GitHub Pages)
4. Don't initialize with README (we already have one)

### 2. Push Your Code
```bash
# Initialize git repository
git init

# Add all files
git add .

# Make initial commit
git commit -m "Initial commit: HIE Opt-Out Guide website"

# Add your GitHub repository as origin
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git

# Push to GitHub
git push -u origin main
```

### 3. Enable GitHub Pages
1. Go to your repository on GitHub
2. Click on "Settings" tab
3. Scroll down to "Pages" in the left sidebar
4. Under "Source", select "Deploy from a branch"
5. Choose "main" branch and "/ (root)" folder
6. Click "Save"

### 4. Access Your Website
- Your website will be available at: `https://YOUR-USERNAME.github.io/YOUR-REPO-NAME`
- It may take a few minutes for the initial deployment

## Local Development

### Start Local Server
Use the VS Code task "Start Local Server" or run:
```bash
python -m http.server 8000
```

Then visit: `http://localhost:8000`

### Making Changes
1. Edit files locally
2. Test changes on local server
3. Commit and push to GitHub
4. GitHub Pages will automatically rebuild and deploy

## Custom Domain (Optional)

### If you have a custom domain:
1. Create a file named `CNAME` in the root directory
2. Add your domain name (e.g., `optout.yourdomain.com`)
3. Configure your domain's DNS to point to GitHub Pages
4. Update the `_config.yml` file with your custom URL

## SEO and Analytics

### Google Analytics (Optional)
1. Create a Google Analytics account
2. Get your tracking ID
3. Uncomment and update the `google_analytics` line in `_config.yml`

### Search Console
1. Verify ownership in Google Search Console
2. Submit sitemap: `https://your-site.com/sitemap.xml`

## Troubleshooting

### Common Issues:
- **404 Error**: Check that your repository is public and Pages is enabled
- **Styling Issues**: Clear browser cache and check file paths
- **Slow Updates**: GitHub Pages can take 5-10 minutes to reflect changes

### Getting Help:
- Check GitHub Pages documentation
- Look at the repository's Actions tab for build errors
- Create an issue in the repository if needed

## Security Notes

- Never commit sensitive information
- This is a public repository - all code is visible
- No server-side processing - all data is client-side only
