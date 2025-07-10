# 🎱 Snooker Shuffle – Random Ball Assignment Tool

Snooker Shuffle is a fun, fair, and simple web tool that randomly assigns coloured balls to players during the **Shuffle mini-game** in Snooker. This helps keep gameplay unbiased, secretive, and exciting!

🔗 [Live Site](https://prathmesh-d.github.io/SnookerShuffle/)

---

## 🔐 New Feature: Anti-Cheating Lock System

To prevent players from peeking at each other's assignments during the summary reveal, we’ve added a **"Lock Before Show"** mechanism.

- 🧩 Each player’s result is **initially locked** and grayed out.
- 🔓 They must **click the unlock button** to enable the **👁️ Show/Hide** toggle.
- 🚫 Once unlocked, the card **cannot be re-locked** — promoting fairness and transparency.

This helps avoid players secretly checking and hiding someone else’s ball — especially in competitive or casual group play.

---

## 🧠 How It Works

1. **Set Players:** Choose how many players (2–4) and how many secret balls each gets (1–2).
2. **Secret Assignment:** Tap "Start Game" and take turns revealing your ball(s). Only one player views their result at a time.
3. **Play the Game:** After all players know their ball(s), begin the snooker game using the secret assignments.
4. **Final Reveal:** At the end, each player must **unlock** their card once before using the Show/Hide toggle.  
   Unlocking is **permanent** and ensures no tampering or sneaky reveals.

---

## 🎯 What’s This For?

The **Shuffle mini-game** is a casual snooker variant where each player is assigned a secret coloured ball to pot — adding a layer of mystery and strategy.

Snooker Shuffle automates this process fairly and efficiently.  
It prevents arguments, removes bias, and adds a fun "hidden mission" twist to your snooker sessions.

🔒 The new **Lock-to-Show system** ensures players cannot secretly peek at others’ cards or re-hide their own. This preserves game integrity and trust among players.

---

## ⚙️ Features

- ✅ Random, unbiased ball assignment  
- 🔄 Step-by-step gameplay with progress tracking  
- 👁️ Secret reveal system for each player  
- 🔐 Lock-based summary to prevent cheating  
- 🎱 Supports 2–4 players and 1–2 balls per player  
- 🎨 Clean UI and mobile-friendly design  
- ⚡ Fully client-side, no backend needed  

---

## 📂 Project Structure

```
SnookerShuffle/
│
├── index.html          # Main UI
├── script.js           # Game logic and interactivity
├── style.css           # UI styling
├── assets/             # Icons, ball images, favicon, preview image
│   ├── yellow.webp
│   ├── green.webp
│   ├── ...
│   └── lock.svg        # Used for the unlock button
├── sitemap.xml         # SEO sitemap
├── robots.txt          # SEO crawler rules
└── README.md           # Project description
```

---

## 🌐 SEO & Social Preview

- Includes Open Graph meta tags for sharing on WhatsApp, Facebook, and Discord.  
- Favicon and preview image optimized for web platforms.  
- `sitemap.xml` provided for better Google indexing.  
- Meta title and description tailored for Google Search appearance.  

---

## 🧪 Tech Stack

- HTML5, CSS3, Vanilla JavaScript  
- SVG icons for clarity  
- GitHub Pages for deployment  

---

## 📄 License

MIT License — Free for use and modification with credit.

---

## ✨ Created By

**Prathmesh Deshkar**  
Made with ❤️ for snooker players everywhere.
