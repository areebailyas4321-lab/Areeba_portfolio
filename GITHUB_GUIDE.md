# How to Push Your Portfolio to GitHub

Since you already have the code on your local machine, follow these steps to push it to your GitHub repository.

## Prerequisites
1.  **Git Installed**: Make sure Git is installed on your computer.
2.  **GitHub Account**: You already have one (https://github.com/areebailyas4321-lab).

## Steps

### 1. Create a New Repository on GitHub
1.  Go to [GitHub](https://github.com/) and log in.
2.  Click the **+** icon in the top right corner and select **New repository**.
3.  Name your repository (e.g., `my-portfolio`).
4.  Keep it **Public**.
5.  **Do not** initialize with a README, .gitignore, or license (we already have these).
6.  Click **Create repository**.

### 2. Open Terminal in Your Project Folder
1.  Open your project folder (`Tarun-s-Portfolio`) in VS Code.
2.  Open the terminal (`Ctrl + ~` or `Terminal > New Terminal`).

### 3. Initialize Git and Push
Run the following commands one by one in your terminal:

```bash
# Initialize a new git repository (if not already done)
git init

# Add all files to the staging area
git add .

# Commit the changes
git commit -m "Initial commit - Portfolio Website"

# Link your local repository to the GitHub repository you just created
# REPLACE THE URL BELOW with your actual repository URL
git remote add origin https://github.com/areebailyas4321-lab/my-portfolio.git

# Rename the branch to main (standard practice)
git branch -M main

# Push your code to GitHub
git push -u origin main
```

### 4. Deploy to GitHub Pages (Optional but Recommended)
To make your website live on the internet:

1.  Open `package.json` and add this line at the top:
    ```json
    "homepage": "https://areebailyas4321-lab.github.io/my-portfolio",
    ```
    *(Replace `my-portfolio` with your repository name)*

2.  Install the `gh-pages` package:
    ```bash
    npm install gh-pages --save-dev
    ```

3.  Add these scripts to `package.json` under `"scripts"`:
    ```json
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
    ```

4.  Run the deploy command:
    ```bash
    npm run deploy
    ```

Your website will be live at `https://areebailyas4321-lab.github.io/my-portfolio/`!
