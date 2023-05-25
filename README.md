# 2021 Capstone Web Based Projects Review Website
Website used to showcase all the Web Based Projects (Games and WebXR) of 2021 - Nickel Class

- [2021 Capstone Web Based Projects Review Website](#2021-capstone-web-based-projects-review-website)
  - [Preview](#preview)
  - [Installation](#installation)
    - [Firebase CLI](#firebase-cli)
  - [Usage](#usage)
  - [Notes](#notes)

## Preview
![Screenshot of Home Page](https://github.com/NASAPsyche/2021-Capstone-Web-Based-Projects-Review-Website/blob/main/Screenshot_HomePage.png?raw=true)
![Screenshot of Bug Report](https://github.com/NASAPsyche/2021-Capstone-Web-Based-Projects-Review-Website/blob/main/Screenshot_BugReport.png?raw=true)

## Installation
This website is made using basic HTML/CSS/JS, and thus requires no installation for development purposes. Installation will be required for hosting and backend/database usage through Firebase.

### Firebase CLI

First install the Firebase CLI using npm
```bash
npm install -g firebase-tools
```

Log in to the Psyche Google Account
```bash
firebase login
```

## Usage

To test locally using Firebase (WARNING: this will still interact with the active backend/database)
```bash
firebase serve
```

To deploy the website
```bash
firebase deploy
```

## Notes
The backend for this website is located in the "2021 Capstone Web Projects" project on Psyche Google Firebase account.
