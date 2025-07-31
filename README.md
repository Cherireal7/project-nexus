📽️ **Project Nexus – Movie Recommendation App**
A dynamic, modern movie recommendation platform built with Next.js 14, TypeScript, and TailwindCSS — designed to deliver personalized movie discovery, engaging UI/UX, and AI-powered suggestions.

🧭 Overview
Project Nexus is the final project of the ALX Frontend Engineering program. It demonstrates real-world skills in frontend architecture, modern frameworks, UI design, state management, API integration, and developer best practices.

**This app allows users to:**
Browse trending and top-rated movies
Add movies to a personal watchlist
View detailed movie pages with cast, rating, and recommendations
Prepare for AI Concierge (GPT-powered movie suggestions)

It is designed to be scalable, fast, responsive, and easily extensible for future features like community playlists, user reviews, and AI integration.

🔧 **Tech Stack**
Tool	Purpose
Next.js 14	React-based framework using App Router
TypeScript	Strongly typed code and maintainability
Tailwind CSS	Utility-first styling
Framer Motion	Page transitions and layout animations
TMDb API (planned)	Movie data and images
OpenAI API (planned)	AI-powered movie recommendations
GitHub	Version control
Vercel (optional)	Deployment platform

⚙️ Features
✅ Implemented
Home page with skeleton loading

Clean layout with responsive design

Page transition animations using Framer Motion

Watchlist route, search route, movie detail skeletons

GitHub integration with meaningful commits

Folder structure aligned with App Router (src/app)

🚧 In Progress / Planned
 API integration with TMDb (trending, popular, search)

 User watchlist with Supabase or Firebase

 AI Concierge (OpenAI integration)

 Auth (OAuth / Email login)

 Theme switching

 Deployment to Vercel

📂 Folder Structure
bash
Copy
Edit
src/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── loading.tsx
│   ├── search/
│   ├── movie/[id]/
│   ├── profile/[username]/
│   ├── watchlist/
│   ├── ai-suggestions/
│   └── api/
├── components/
├── styles/
├── types/
├── lib/
🧠 Key Learnings
Structured a production-grade project with Next.js App Router

Implemented streaming + skeleton loaders for smooth UX

Leveraged Framer Motion for page-level animations

Built modular, scalable components with TailwindCSS

Learned how to manage layout state transitions cleanly

Used Git effectively: branching, amending, pushing to GitHub

🚧 Challenges & Solutions
Challenge	Solution
Skeleton loader errors in App Router	Fixed by ensuring all loading.tsx files had default exports
Layout transition glitches	Resolved using framer-motion and AnimatePresence wrapping
GitHub remote confusion	Corrected remote casing issues and synced branches manually
Initial file clutter	Wrote shell/Powershell scripts to bootstrap directory structure

🧼 Best Practices Followed
 Modular and reusable components

 Minimal and expressive commits

 Typed everything with TypeScript

 Clean .gitignore and .env hygiene

 Avoided global state unless necessary

 Planned for scalability and AI features

 Clear layout hierarchy with src/app/ and src/components/

🛠️ Installation & Setup
bash
Copy
Edit
git clone https://github.com/Cherireal7/project-nexus.git
cd project-nexus
npm install
npm run dev

🔮 Future Plans
✅ TMDb integration (trending, search, recommendations)
✅ Supabase auth + watchlist storage
✅ GPT-4 Concierge using OpenAI API
✅ Community playlists
✅ Deployment on Vercel

📸 Screenshots (Coming soon)
(I will dd screenshots after implementing the UI — homepage, movie details, etc.)

📬 Contact & Collaboration
Built by @Cherireal7 for the ALX Project Nexus.
Contributions are welcome via pull requests or issues.

