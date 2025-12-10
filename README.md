# LIVO Core – Web MVP (Demo)

This repository contains the first web MVP for **LIVO Core** – a control center
for a future real-time translation platform (voice, video, and documents).

The current version is **UI demo only** (no real backend, no AI engines).
All authentication and data are **mock**.

---

## Tech stack

- **Next.js 13+ (App Router)**
- **TypeScript**
- **React**
- Deployed on **Vercel**
- Developed in **GitHub Codespaces**

---

## Production deployment (Vercel)

Main URL (Production):

- `https://livo-ai-wold.vercel.app`

The app is deployed from the `main` branch.  
Every push to `main` triggers an automatic redeploy on Vercel.

---

## Current routes (MVP)

All routes below are **UI only / mock** – no real authentication, no database.

### 1. `/` – Landing (LIVO Core gate)

- Simple welcome / landing screen.
- Offers navigation to **Login** and **Register**.

### 2. `/register` – User registration (mock)

- Form with:
  - Display name
  - Email
  - Password
- On submit:
  - Shows a success message.
  - Redirects the user to the **Login** page.
- No real user is stored anywhere (mock only).

### 3. `/login` – User login (mock)

- Form with:
  - Email
  - Password
- Validation:
  - Both fields are required.
- On success:
  - Shows a “Login successful” message.
  - Redirects to `/dashboard`.
- “Logout (mock)” on the dashboard simply sends the user back to `/login`.

### 4. `/dashboard` – **LIVO Core Dashboard**

This is the main control center for LIVO.

Content:

- **Header**
  - Welcome message for the current user (hardcoded: `George`).
  - Button: **Settings** → `/settings`
  - Button: **Logout (mock)** → `/login`

- **Top stats (3 cards)**
  - Active Devices – currently 3 (mock)
  - Sessions today – 12 (mock)
  - Translation minutes – 47 min (mock)
  - All values and descriptions are demo numbers.

- **Quick Actions**
  - **Live Voice Translator**
    - Card that redirects to `/voice`
    - Shows that this is a future real-time voice translation engine.
  - **Session History**
    - Card that redirects to `/history`
    - Shows a demo list of recent sessions.
  - **AI Chat & File Translator**
    - Disabled card (no navigation)
    - Placeholder for a future feature (chat + PDF/Word translation).

- **Recent Activity (mock)**
  - List of 3 demo items:
    - Voice translation – English ⇄ Persian
    - Video session with live subtitles
    - File translation – `medical_report.pdf`
  - All items are static demo data.

### 5. `/voice` – Live Voice Translator (future page)

- UI-only demo page.
- Explains that this page will be the real-time voice translator in the future.
- Sections:
  - **Session Status (Demo)** – description of:
    - Microphone / speaker connection
    - Source & target language selection
    - Text from both sides of the conversation
    - Saving the session for later review
  - **Info panel** about this being a demonstration.
- Button “Start Session (Coming soon)” is disabled (no real logic).
- Link at the top: “Back to dashboard” → `/dashboard`.

### 6. `/history` – Session History (demo)

- Shows a demo table of previous LIVO sessions:
  - Type: voice / video / file
  - Title
  - Date
  - Duration
  - Direction (e.g. English ⇄ Persian)
  - Status (Completed)
- This is a static table for now (no real data).
- Link “Back to dashboard” → `/dashboard`.

### 7. `/settings` – Account & App Settings (demo)

- **Account information**
  - Display name: `George Smith`
  - Email: `george.smith.uk1985@gmail.com`
  - Role: `Standard user` + badge `Mock`

- **App preferences (future)**
  - Interface language: English · فارسی (planned)
  - Theme: Dark mode (always on in this demo)
  - Notice that settings are **read-only** in this version.

- **System information**
  - LIVO Core version: `v0.1.0 · UI demo`
  - Environment: `Production (Vercel)`
  - Data status: all values are mock.

- Link “Back to dashboard” → `/dashboard`.

---

## Future roadmap (high level)

This repository is intentionally simple. It is prepared for the next steps:

1. **Real authentication**
   - Replace mock login/register with a real auth system
     (e.g. NextAuth, Supabase, or custom backend).

2. **User profiles & database**
   - Store users, sessions, and history in a real database.
   - Connect the dashboard stats to real data.

3. **Real-time translation engines**
   - Implement WebRTC-based audio and video for live sessions.
   - Connect to AI translation / transcription APIs.
   - Replace the mock “Live Voice Translator” page with real streaming.

4. **File translation engine**
   - Upload documents (PDF / Word).
   - Show progress and translated output in the UI.

5. **Multilingual UI**
   - Provide full UI in English and Persian.
   - Let the user change their interface language from `/settings`.

---

## Notes for contributors / future team

- All current pages are written in **TypeScript** with inline styles
  for quick UI iteration.
- There is **no backend code** yet – everything is front-end mock.
- The goal of this MVP is to:
  - Demonstrate the basic **user flow**
    (Register → Login → Dashboard → Feature pages → Settings → Logout).
  - Provide a clear structure for future developers to plug in:
    - Authentication
    - Database
    - Real-time AI services
    - Multi-language support.
