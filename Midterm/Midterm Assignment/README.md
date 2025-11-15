# Project Name: [Pokémon Crash Prevention]
## CIS 185 - Midterm Project
## Author: [Matthew Hockett]
## Date: [11/14/2025]

---

## 1. Project Description
This is a browser-based game where the players try to prevent their browser from "crashing" by clicking or tapping Pokémon that appear on the screen. Players can select their favorite Pokémon and aim to survive for three minutes while more Pokémon spawn progressively faster.

## 2. Target Audience
Fans of Pokémon games and casual gamers of all ages who enjoy quick reaction and click/tap-based challenges.

## 3. Main Features
- Feature 1: A Pokédex selector of the original 151 Pokémon.
- Feature 2: Interactive Canvas API gameplay with clickable/tappable Pokémon.
- Feature 3: Countdown timer displayed prominently.
- Feature 4: Mobile-friendly and responsive design with touch events.

## 4. Technologies Used
- HTML5 (semantic structure)
- CSS3 (Pokémon-themed styling and responsiveness)
- Javascript (game mechanics, Canvas API, timer, touch/click events)
- Google Fonts ('Press Start 2P' for Pokémon-style font)

## 5. File Structure
- index.html - Main game page
- style.css - Styling for the game page an UI
- script.js - Game logic, spawning, timer, and event handeling

## 6. Challenges Faced
Managing the games end conditions and making sure alerts triggered correctly was challenging, especially with the variable spawn rates. This was solved by tracking game state with a `gameEnded` flag and updating spawn limits according to the full Pokédex.

## 7. AI Tools Used
- ChatGPT: Assisted with structuring Javascript logic for Canvas API, countdown timer, and mobile touch events.

## 8. Future Improvements
- Add different difficulty levels with varying spawn speeds.
- Include animations and sound effects when Pokémon are clicked.
- Expand to include all 898 Pokémon sprites from the Pokédex.

## 9. Credits
- Images from: PokéAPI Sprites
- Fonts from: Google Fonts
- AI assistance as noted in Section 7