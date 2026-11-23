# Lingauro Clone (Clean & Minimal Real-Time Language Practice Platform)

A clean, minimal, modern, and easy-to-understand clone of **[Lingauro.com](https://lingauro.com/)**, designed strictly using the requested color palette:
- **Teal**: `#008080` (Primary Brand, Buttons, Nav Elements, Badges, Dark Theme Accents)
- **Gold**: `#FFD700` (Secondary Brand, High-converting Highlights, Speaking Rings, Icebreaker Cards, Shimmer Accents)

---

## 🌟 Key Features Cloned & Implemented

1. **Clean, Minimal Visual Hierarchy**:
   - Modern typography (`Plus Jakarta Sans`), ample breathing room, subtle borders, and crisp card surfaces.
   - High readability with slate/teal darks (`#0C2020`), soft teal highlights (`#E6F3F3`), and gold accents (`#FFD700`).

2. **Live Practice Rooms Explorer**:
   - Filter rooms by **30+ Languages** (English, Spanish, French, Japanese, German, Italian, Korean, Mandarin, Portuguese).
   - Filter by **Proficiency Level** (Beginner A1-A2, Intermediate B1-B2, Advanced C1-C2).
   - Filter by **Activity Type** (Casual Voice & Video, Icebreaker Games, Watch Together, Sing-Alongs).
   - Instant live search input with keyword matching.

3. **Interactive Live Room Simulation**:
   - Click **"Join Room"** or **"Drop Into This Room"** to open a simulated WebRTC voice/video room.
   - Dynamic stage with peer avatars, active speaker rings, and microphone badges.
   - **Real-Time HD Audio Visualizer Canvas**: animated dual Teal & Gold audio frequencies.
   - **Interactive Room Controls**:
     - 🎙️ Mute / Unmute microphone with live toast alerts
     - 📹 Toggle Camera (voice-only vs video mode)
     - ✋ Raise hand for moderated speaking
     - 💬 Live Room Chat with automated friendly peer responses
     - 💡 Interactive Icebreaker Prompt Deck with 8+ conversation starters

4. **Interactive In-Room Activities Showcase**:
   - 🎮 **Taboo & Icebreaker Games**: Interactive Taboo cards with "Next Card" randomizer.
   - 📺 **Watch Together**: Synchronized YouTube video player simulation with bilingual captions.
   - 🎤 **Sing-Alongs & Karaoke**: Synchronized scrolling lyrics to master pronunciation and rhythm.
   - 🎧 **Low-latency Voice & Video**: WebRTC architecture overview.
   - 💬 **Smart Chat**: Live word hints and translations in the chat stream.

5. **1-on-1 Speed Matcher**:
   - Select target language and current proficiency level.
   - Animated radar search simulation pairing you with a partner in under 12 seconds.
   - Direct button to launch a private 1-on-1 exchange room.

6. **Create Your Own Room**:
   - Custom modal allowing users to name a topic, choose language, level, and activity, and immediately launch a new room into the live grid.

7. **Zero Downloads / PWA Ready**:
   - Pure HTML5, CSS3, and modern vanilla JavaScript. No complex build tools or runtime required.

---

## 🎨 Color System Specification

| Role | Color Name | Hex Code | Usage |
|------|------------|----------|-------|
| Primary Brand | Classic Teal | `#008080` | Navigation, primary action buttons, active tags, headings |
| Deep Teal | Dark Persian Green | `#005656` | Hover states, card borders, active room chrome |
| Darkest Teal | Night Teal | `#0C2020` | Primary dark headings, modal background, footer |
| Subtle Teal | Soft Mint Teal | `#E6F3F3` | Active pills, soft highlight backgrounds |
| Secondary Accent | Pure Gold | `#FFD700` | Floating badges, speaking rings, taboo cards, gold CTAs |
| Warm Gold Dark | Amber Gold | `#CCA400` | Gold button borders, secondary text |
| Subtle Gold | Cream Gold | `#FFFBE6` | Badge backgrounds, star ratings |

---

## 🚀 How to Run the Website

### Option 1: Open Directly in Any Browser
Simply double-click or open `index.html` in your favorite web browser (Chrome, Edge, Safari, Firefox):
```powershell
explorer.exe "C:\Users\DEVA Pendriver\.gemini\antigravity\scratch\lingauro-clone\index.html"
```

### Option 2: Run with Local HTTP Server (Python / Node)
From the project folder:
```powershell
cd "C:\Users\DEVA Pendriver\.gemini\antigravity\scratch\lingauro-clone"
python -m http.server 8000
```
Then visit: `http://localhost:8000`
