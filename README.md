# SkillDeck

**A clean, responsive React UI to explore top learning courses.**

![screenshot](<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/4e93dd42-c0dc-4a30-90a7-c8e8ae6d6ddd" />
)

---

## 🔖 Overview

SkillDeck is a responsive React app that displays curated learning courses in a modern card layout. It features filtering, like buttons with toast feedback, and a clean, mobile-friendly UI — perfect as a starter for any learning or catalog-style project.

---

## ✨ Demo Screenshot

The screenshot above demonstrates the finished UI (cards, filters, navbar, and toast notifications).

---

## 🧭 Features

- Responsive grid of course cards
- Filter by category
- Like button with toast notifications
- Clean and modern UI with scalable CSS
- Easy to extend and customize

---

## 🛠️ Tech Stack

- React (create-react-app or Vite)
- React hooks (useState, useEffect)
- react-icons
- react-toastify
- Plain CSS (modular component CSS files)

---

## 🚀 Quick Start

```bash
# Clone the repo (replace with your GitHub URL)
git clone https://github.com/YOUR_USERNAME/SkillDeck.git
cd SkillDeck

# Install dependencies
npm install

# Start dev server
npm start
# or if using yarn
# yarn
# yarn start
```

---

## 🗂️ Project Structure (recommended)

```
SkillDeck/
├─ public/
├─ src/
│  ├─ components/
│  │  ├─ Navbar.jsx
│  │  ├─ Filter.jsx
│  │  ├─ Cards.jsx
│  │  ├─ Card.jsx
│  ├─ App.jsx
│  ├─ data.js
│  ├─ index.js
│  ├─ App.css
│  ├─ Navbar.css
│  ├─ Filter.css
│  ├─ Cards.css
│  ├─ Card.css
├─ .gitignore
├─ package.json
└─ README.md
```

---

## 🧩 How it works (short)

- `App.jsx` fetches course data from `apiUrl` and stores it in state.
- `Filter` sends category selections back to `App` via `filtercource`.
- `Cards` flattens the courses object to an array and maps into `Card` components.
- `Card` shows course thumbnail, title, description and a like button which uses `react-toastify`.

---

## 🎨 Styling

All component CSS lives in separate files (`App.css`, `Navbar.css`, `Filter.css`, `Cards.css`, `Card.css`). The design follows a minimal, card-based layout and uses responsive CSS grid for the card container.

---

## ✅ Future ideas / Improvements

- Add pagination or infinite scroll
- Add real user authentication & personal liked courses
- Add skeleton loaders for improved perceived performance
- Add light/dark theme toggle
- Add unit tests with React Testing Library / Jest

---

## 🧾 License

MIT © YOUR_NAME

---

## 🤝 Contributing

Contributions welcome! Open an issue or submit a pull request with a clear description of your change.

---

## 📬 Contact

If you want help customizing this for a personal project or portfolio, reach out at YOUR_EMAIL.

