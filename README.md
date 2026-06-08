# Food Craft Institute (FCI) Sumerpur Portal

A premium, modern, and highly responsive web portal for **Food Craft Institute, Sumerpur (Pali, Rajasthan)**. Built using React, React Router, and styled with a custom modern design system (glassmorphism, clean grids, fluid micro-animations, and verified accessibility standards).

---

## 🚀 Getting Started

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) (version 16 or higher) installed on your system.

### Installation
1. Clone the repository to your local machine.
2. In the project directory, run the following command to install dependencies:
   ```bash
   npm install
   ```

### Running Locally (Development Mode)
To run the local development server:
```bash
npm start
```
This runs the app in development mode. Open [http://localhost:3000](http://localhost:3000) (or port `3001` if `3000` is locked) to view it in your browser. The page will reload automatically if you make edits.

### Compiling for Production
To compile the application into static files for production deployment:
```bash
npm run build
```
This builds the app for production, creating an optimized, minified bundle inside the `/build` folder.

---

## 📂 Project Structure

```
FCISumperpur/
├── public/                 # Static public templates and icons
├── src/
│   ├── assets/             # Images, PDFs, and media assets
│   ├── components/         # Reusable global widgets & layout components
│   │   ├── Navbar/         # Desktop & Mobile Navbars
│   │   ├── Footer.js       # Modern 4-column footer with Maps & Social Links
│   │   ├── Contact.js      # Query form integrated with EmailJS
│   │   ├── ScrollToTop.js  # Navigation smooth scroll reset helper
│   │   └── Testimonials.js # Alumni testimonials grid
│   ├── pages/              # Routing pages
│   │   ├── AboutUs/        # Overview, Vision, Why Us, Staff, Principal Message
│   │   ├── Courses/        # Diploma details & Skill development courses
│   │   └── Home.js         # Unified home page structure
│   ├── App.js              # Top-level wrapper
│   ├── AppRouter.js        # React Router routes mapping
│   ├── index.css           # Global theme variables, tables, and typography
│   └── index.js            # React entry mounting script
├── .gitignore              # Files ignored from Git tracking
└── README.md               # Project documentation
```

---

## 🗂️ What to Add to GitHub (Source vs. Build)

> [!IMPORTANT]
> **Always upload the FULL SOURCE CODE to GitHub, NOT the `build` folder.**

### Why?
1. **GitHub is for Source Code:** Version control needs the editable source files (JavaScript, CSS, assets) to track history, manage branches, and collaborate.
2. **The `build` Folder is Transient:** The `build/` folder contains minified, machine-readable code compiled for browsers. It changes entirely on every compilation, causing severe merge conflicts. It is excluded in `.gitignore` by default.
3. **Continuous Deployment:** Modern hosting services (Vercel, Netlify) connect directly to your GitHub source code repository and run the build command (`npm run build`) automatically on their servers.

---

## 🌐 Production Deployment Guide

Here are the easiest methods to publish this portal to the internet:

### Option 1: Vercel via GitHub Actions (Automated CI/CD)
The repository is configured to deploy automatically to Vercel via a GitHub Actions pipeline (`.github/workflows/ci.yml`) **only after** all compilation and testing checks pass successfully.

To enable this:
1. Navigate to your repository on **GitHub.com**.
2. Go to **Settings** > **Secrets and variables** > **Actions**.
3. Under **Repository secrets**, click **New repository secret** and add:
   - Name: `VERCEL_TOKEN`
     Value: *(Paste your Vercel Personal Access Token here)*
4. The Org ID and Project ID are already preconfigured inside the workflow file. The pipeline will automatically:
   - Verify the production build and test suites.
   - Deploy preview builds on push events to the `dev` branch.
   - Deploy production builds on push/merge events to the `main` branch.

*Note: Azure Web App and Static Web App pipelines have been commented out to prevent conflicting deployments.*

### Option 2: Shared Hosting (cPanel / Hostinger / GoDaddy)
If you already have a domain and web hosting:
1. Run the build command locally:
   ```bash
   npm run build
   ```
2. Open the newly generated `/build` folder on your computer.
3. Select and compress (ZIP) all the files and folders *inside* the `/build` folder.
4. Log into your hosting cPanel (or File Manager) and open the **File Manager**.
5. Go to the root directory (usually `public_html`).
6. Upload your ZIP file and extract it directly into `public_html`.
7. *Note:* Make sure `index.html` sits directly inside `public_html` (not in a subfolder).

### Option 3: GitHub Pages (Free Hosting on GitHub)
If you want to host directly on GitHub:
1. Install the deployment helper package:
   ```bash
   npm install --save-dev gh-pages
   ```
2. Open `package.json` and add a `homepage` property:
   ```json
   "homepage": "http://your-username.github.io/your-repository-name",
   ```
3. Add these scripts inside the `"scripts"` block in `package.json`:
   ```json
   "predeploy": "npm run build",
   "deploy": "gh-pages -d build"
   ```
4. Run the deploy script:
   ```bash
   npm run deploy
   ```
   This compiles the app and pushes it to a special `gh-pages` branch on GitHub automatically.

---

## 🔒 GitHub Branch Protection (PR Approvals & Status Checks)

To enforce that code checks pass and prevent commits from going directly to `main` without review, configure Branch Protection Rules on GitHub:

1. Navigate to your repository on **GitHub.com**.
2. Click on the **Settings** tab.
3. In the left sidebar, click on **Branches**.
4. Under **Branch protection rules**, click **Add protection rule**.
5. Set the **Branch name pattern** to `main` (and repeat for `dev` if desired).
6. Enable the following settings:
   - **Require a pull request before merging:** Forces all changes to go through a PR.
   - **Require approvals:** Set the number of required approvals (e.g., `1`) before a PR can be merged.
   - **Require status checks to pass before merging:** Prevents merging if the CI build checks fail.
     - Search and select `Build & Test Pre-checks` (which runs via `.github/workflows/ci.yml`).
7. Click **Create** (or **Save changes**).
