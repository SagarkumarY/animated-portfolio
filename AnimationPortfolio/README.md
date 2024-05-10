# Animation Portfolio

This is a personal portfolio website showcasing your skills and projects as a full stack web developer. It's built using React, framer-motion for animations, and sass for styling.

## Features

- **Animated Design**: Utilizes framer-motion for smooth animations throughout the website.
- **Responsive**: Ensures the website looks great and functions well on various devices.
- **Contact Form**: Integrated with emailjs/browser for a contact form functionality.

## Installation

1. Clone this repository to your local machine.
2. Navigate to the project directory.
3. Install dependencies using npm:

```bash
npm install



Deployment Instructions

Deploying Vite.js Application to GitHub Pages

1. Install gh-pages: Install the gh-pages package as a dev dependency:

*npm i --save-dev gh-pages

2. Create a new repository in GitHub: Create a new repository in your GitHub account where you want to deploy your application.

3. Configure package.json: Update your package.json file with deployment scripts and set the homepage

#{
  "homepage": "https://<username>.github.io/<repository-name>",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
 #}
#}

#Replace <username> with your GitHub username and <repository-name> with the name of your GitHub repository.



4. Set Base URL in vite.config.js: Add the base URL in your vite.config.js file:
#import { defineConfig } from 'vite';

export default defineConfig({
  base: "/<repository-name>/"
});
#Replace <repository-name> with the name of your GitHub repository.

5.Deploy to GitHub Pages: Initialize a Git repository, add, commit, and push your changes to GitHub:

*git init
*git add .
*git commit -m "Initial commit"
*git branch -M main
*git remote add origin <repository-url>
#Replace <repository-url> with the URL of your GitHub repository.
*git push -u origin main


6.Run deployment script: Deploy your application to GitHub Pages:
*npm run deploy


