# DevTinder — Frontend 🚀

<div align="center">

![React](https://img.shields.io/badge/React-19.1.1-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![Redux](https://img.shields.io/badge/Redux_Toolkit-2.9.0-764ABC?style=for-the-badge&logo=redux&logoColor=white)
![Tailwind](https://img.shields.io/badge/Tailwind-4.1.14-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-7.1.7-646CFF?style=for-the-badge&logo=vite&logoColor=white)

**A modern, production-ready React application for developer matching and real-time collaboration**

[Live Demo](https://thedevtinder.live) • [Backend Repo](https://github.com/Lokeshsuwalka05/Devtinder-Backend) • [Report Bug](https://github.com/Lokeshsuwalka05/Devtinder-Frontend/issues) • [Request Feature](https://github.com/Lokeshsuwalka05/Devtinder-Frontend/issues)

</div>

---

## 📖 About The Project

DevTinder is a developer-matching and collaboration platform designed to connect developers for networking, collaboration, and professional growth. The frontend is built with modern web technologies, emphasizing performance, real-time communication, and an exceptional user experience.

### ⚠️ **100% Human-Written Code**

Every single line of code in this project is manually written — no AI-generated code, no templates, no shortcuts. This project represents genuine software craftsmanship and deep understanding of modern React architecture.

### 🌟 Key Features

- 🔐 **Secure Authentication** — JWT-based auth with token management via Axios interceptors
- 💬 **Real-time Chat** — Live messaging powered by Socket.io
- 🎨 **Modern UI/UX** — Beautiful interfaces built with Tailwind CSS + DaisyUI
- ⚡ **Performance Optimized** — Lightning-fast with Vite bundling and optimized rendering
- 📱 **Responsive Design** — Seamless experience across all devices
- 🔔 **Smart Notifications** — Real-time toast alerts for user actions
- 🎭 **Smooth Animations** — Delightful interactions using Framer Motion
- 🏗️ **Scalable Architecture** — Feature-based structure for easy maintenance

---

## 🛠️ Tech Stack

### Core Framework

- **React 19** — Latest React with concurrent features
- **Redux Toolkit** — Efficient state management
- **React Router 7** — Client-side routing

### UI & Styling

- **Tailwind CSS 4** — Utility-first CSS framework
- **DaisyUI** — Beautiful component library
- **Framer Motion** — Production-ready animations
- **Lucide React** — Clean, modern icon set

### Communication

- **Socket.io Client** — Real-time bidirectional communication
- **Axios** — Promise-based HTTP client

### Development Tools

- **Vite 7** — Next-generation frontend tooling
- **ESLint 9** — Code quality and consistency
- **React Hot Toast** — Elegant notifications

---

## 📂 Project Structure

```
src/
├── app/
│   └── store.jsx              # Redux store configuration
├── assets/                     # Static assets (images, fonts, etc.)
├── components/                 # Reusable UI components
├── context/                    # React Context providers
├── features/                   # Feature-based modules
│   ├── connections/           # User connections management
│   ├── feed/                  # Developer feed
│   ├── requests/              # Connection requests
│   └── user/                  # User profile & auth
├── utills/                    # Utility functions & helpers
├── App.jsx                    # Root component
├── main.jsx                   # Application entry point
└── index.css                  # Global styles
```

**Architecture Philosophy:** Feature-based structure ensures modularity, scalability, and clear separation of concerns. Each feature is self-contained with its own components, logic, and state management.

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- Git

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/Lokeshsuwalka05/devtinder-frontend.git
   cd devtinder-frontend
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start development server**

   ```bash
   npm run dev
   ```

   The app will be available at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The optimized production build will be in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

---

## 🌐 Deployment

The production build is deployed on **AWS EC2** using the following setup:

- ✅ **Platform:** Ubuntu Server on AWS EC2
- ✅ **Web Server:** Nginx for static file serving
- ✅ **SSL/TLS:** HTTPS enabled for secure communication
- ✅ **CI/CD:** Automated deployment pipeline

### Deployment Architecture

```
User Browser → CloudFlare CDN → Nginx (EC2) → Static React Build
                                        ↓
                                  Backend API (Microservices)
```

---

## 📦 Dependencies

<details>
<summary><b>Production Dependencies</b></summary>

| Package          | Version  | Purpose              |
| ---------------- | -------- | -------------------- |
| @reduxjs/toolkit | 2.9.0    | State management     |
| axios            | 1.12.2   | HTTP client          |
| framer-motion    | 12.23.24 | Animations           |
| lucide-react     | 0.553.0  | Icons                |
| react            | 19.1.1   | UI library           |
| react-dom        | 19.1.1   | React DOM rendering  |
| react-hot-toast  | 2.6.0    | Notifications        |
| react-redux      | 9.2.0    | React-Redux bindings |
| react-router     | 7.9.3    | Routing              |
| socket.io-client | 4.8.1    | WebSocket client     |
| tailwindcss      | 4.1.14   | CSS framework        |

</details>

<details>
<summary><b>Development Dependencies</b></summary>

| Package              | Version | Purpose           |
| -------------------- | ------- | ----------------- |
| @vitejs/plugin-react | 5.0.4   | Vite React plugin |
| vite                 | 7.1.7   | Build tool        |
| eslint               | 9.36.0  | Linting           |
| daisyui              | 5.1.26  | UI components     |

</details>

---

## 🎯 Available Scripts

| Command           | Description                        |
| ----------------- | ---------------------------------- |
| `npm run dev`     | Start development server with HMR  |
| `npm run build`   | Create optimized production build  |
| `npm run preview` | Preview production build locally   |
| `npm run lint`    | Run ESLint for code quality checks |

---

## 🔌 API Integration

The frontend communicates with a microservices backend architecture:

- **Authentication Service** — User registration, login, token management
- **Profile Service** — User profiles, preferences, skills
- **Matching Service** — Developer matching algorithm
- **Chat Service** — Real-time messaging via WebSocket
- **Notification Service** — Push notifications and alerts

All API calls are centralized using Axios with interceptors for token injection and error handling.

---

## 🤝 Contributing

Contributions are welcome! This project maintains high code quality standards.

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

**Code Standards:**

- Follow existing code style and structure
- Write meaningful commit messages
- Ensure ESLint passes before committing
- Test thoroughly before submitting PR

---

## 📬 Contact & Support

**Lokesh Suwalka**

- 🌐 Website: [thedevtinder.live](https://thedevtinder.live)
- 📧 Email: support@thedevtinder.live
- 💼 GitHub: [@Lokeshsuwalka05](https://github.com/Lokeshsuwalka05)

---

## 📄 License

This project is proprietary and all rights are reserved. Unauthorized copying, distribution, or modification is prohibited.

---

## ⭐ Acknowledgments

Built with passion for connecting developers worldwide. Special thanks to the open-source community for the amazing tools that made this possible.

---

<div align="center">

**If you find this project interesting, consider giving it a ⭐**

Made with ❤️ by [Lokesh Suwalka](https://github.com/Lokeshsuwalka05)

</div>
