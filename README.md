# Mini Task Manager

A simple and responsive task management app built with **React** and **Tailwind CSS**.  
Simulates backend delays and random server errors using `setTimeout`.

---

## 📦 Getting Started

<pre> bash
# 1. Clone the repo
git clone https://github.com/ShorSerj/mini-task-manager.git
cd mini-task-manager
  
# 2. Install dependencies
npm install

# 3. Start development server
npm run dev

# 4. Visit in browser
Check the terminal output — it will show something like:
http://localhost:5173 </pre>

---

## 🚀 Features

- ⏳ Simulated API delays:
  - Load tasks (~1s)
  - Add tasks (~0.5s)
  - Delete tasks (~0.5s)
  - Toggle status (~0.3s)
- 🔄 Task filtering: **All / Active / Completed**
- 💾 Data persistence via `localStorage`
- ⚠️ Random server error simulation
- 🧭 Responsive layout
- 🔁 Loading indicators & error messages

---

## 🛠️ Tech Stack

- ⚛️ **React (Hooks, Functional Components)**
- 🎨 **Tailwind CSS**
- ⚡ `setTimeout` to mock API behavior
- 🧠 `localStorage` for storing tasks
- 🛠️ Vite (or CRA – depending on setup)


