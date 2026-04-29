# Division 2 Gear & DPS Calculator v1.7.4

A fully-featured, offline gear and DPS calculator for Tom Clancy's The Division 2.

Built by **ImThatTeriyaki** from the **Sleepy Inc Clan**.

---

## What's New in v1.7.4

- Gear set chest and backpack talent dropdowns now show only the set-specific talent
- All 42 exotic weapons locked to their unique talent; 73 named weapons locked to their Perfect talent
- Added 50+ Perfect weapon talent entries and all missing exotic talent entries
- Coyote's Mask range stage selector (0-15m / 15-25m / 25m+)
- Capacitor Skill Tier scaling fixed
- Liquid glass theme: skill picker now uses styled custom panel matching weapon/gear pickers
- Liquid glass theme: DTA/DTWA/DTOC/HS/CRIT buttons now show bright active state with glow
- Cozy theme: page navigation fixed (Compare, SHD Levels, Specializations no longer append to current page)
- Gear set bonus corrections (Striker's, Tipping Scales), 4pc bonuses added for all sets
- Overlord Magazine slot fix, Regulus talent renamed to Regicide, Mosquito/Tempest talent corrections
- Category arrow icons fixed (▶ instead of ?) in item search dropdowns

---

## Features

- Configure 3 weapon slots (Primary, Secondary, Sidearm) with full attachment and talent support
- Configure 6 gear slots (Mask, Chest, Backpack, Gloves, Holster, Kneepads) with core attributes, regular attributes, mod slots, and talents
- Real-time DPS calculation (True DPS, Burst DPS, Sustained DPS) for each weapon
- Automatic brand set and gear set bonus detection
- Full attribute system: weapon-type damage bonuses (SMG, AR, LMG, Rifle, Shotgun, Pistol, MMR), defensive stats, utility stats
- Save and load builds as JSON files
- Division 2-inspired dark UI with orange accents
- Splash screen on launch
- Runs completely offline — no server, no internet required

---

## How to Run (Development)

### Prerequisites
- [Node.js](https://nodejs.org) (LTS recommended)

### Steps

```bash
# 1. Clone the repo
git clone https://github.com/YOUR_USERNAME/division2-gear-calculator.git
cd division2-gear-calculator

# 2. Install dependencies
npm install

# 3. Run the app
npm start
```

---

## How to Build the Installer (.exe)

```bash
npm run build
```

This produces two files in the `dist/` folder:
- `Division 2 Gear Calculator Setup 1.7.4.exe` — Windows installer
- `Division 2 Gear Calculator 1.7.4.exe` — Portable (no install needed)

> **Note:** On Windows, you may need to enable Developer Mode in Settings to allow symlink creation during the build process.

---

## Project Structure

```
division2-gear-calculator.html   # Main app (all logic, UI, and data in one file)
main.js                          # Electron entry point
splash.html                      # Splash screen shown on launch
package.json                     # Project config and build settings
icon.png                         # App icon
```

---

## Tech Stack

- **Electron** — Desktop wrapper
- **Vanilla HTML/CSS/JS** — Zero dependencies for the app itself
- **electron-builder** — Packaging and installer generation

---

## License

MIT — see [LICENSE](LICENSE)
