# login-page
# 🚀 Auth UI Starter Kit (Google • GitHub • Facebook • LinkedIn)

A modern, responsive authentication UI template with ready-to-use OAuth skeletons.

> ⚡ Perfect for developers who want to plug in authentication quickly without building UI from scratch.

---
![GitHub stars](https://img.shields.io/github/stars/ayushnandi718-dev/repo)
![License](https://img.shields.io/github/license/ayushnandi718-dev/repo)

## ✨ Features

* 🔥 Beautiful animated login/register UI
* 📱 Fully responsive (mobile + desktop)
* 🔐 OAuth skeletons for:

  * Google
  * GitHub
  * Facebook
  * LinkedIn
* ⚡ Clean and modular structure
* 🧩 Easy to integrate with Firebase / Auth0 / Custom backend

---

## 📸 Preview

![preview](https://via.placeholder.com/1000x500?text=Auth+UI+Preview)

---

## 🛠️ Setup Guide

### 1. Clone the repository

```bash
git clone https://github.com/your-username/auth-ui-template.git
cd auth-ui-template
```

---

### 2. Configure environment

Rename:

```
/config/config.example.js → /config/config.js
```

Then add your credentials:

```js
export const CONFIG = {
  GOOGLE_CLIENT_ID: "YOUR_GOOGLE_CLIENT_ID",
  GITHUB_CLIENT_ID: "YOUR_GITHUB_CLIENT_ID",
  FACEBOOK_APP_ID: "YOUR_FACEBOOK_APP_ID",
  LINKEDIN_CLIENT_ID: "YOUR_LINKEDIN_CLIENT_ID",
  REDIRECT_URI: "YOUR_REDIRECT_URI"
};
```

---

## 🔑 OAuth Setup

### 🟢 Google

* Use Firebase or Google Cloud Console
* Enable Google Auth
* Add authorized domains

---

### ⚫ GitHub

* Go to GitHub Developer Settings
* Create OAuth App
* Add callback URL

---

### 🔵 Facebook

* Create app in Meta Developers
* Enable Facebook Login
* Add redirect URI

---

### 🔷 LinkedIn (Important ⚠️)

* Requires backend for token exchange
* This template only handles redirect + UI

---

## 🔄 LinkedIn Flow

1. User clicks LinkedIn button
2. Redirects to LinkedIn login
3. Returns with `code`
4. Backend exchanges code → access token

---

## 📁 Project Structure

```
/auth        → OAuth logic
/callback    → OAuth redirects
/config      → API keys (user-defined)
```

---

## ⚠️ Important Notes

* ❌ Do NOT expose secrets in frontend
* ⚠️ LinkedIn requires backend
* ✅ Firebase recommended for beginners
* ✅ Auth0 recommended for full-stack apps

---

## 💡 Recommended Stack

| Use Case       | Recommendation     |
| -------------- | ------------------ |
| Frontend only  | Firebase           |
| Full SaaS      | Auth0              |
| Custom backend | Node.js + Passport |

---

## 🚀 Deployment

You can deploy easily on:

* GitHub Pages
* Netlify
* Vercel
## 🌐 Live Demo
https://your-demo.netlify.app
---

## 🤝 Contributing

Pull requests are welcome. For major changes, open an issue first.

---

## ⭐ Support

If you like this project:

* ⭐ Star the repo
* 🍴 Fork it
* 📢 Share it

---

## 📜 License

MIT License

---

## 👨‍💻 Author

Made with ❤️ by Ayush
