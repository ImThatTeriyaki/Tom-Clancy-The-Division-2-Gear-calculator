# Division 2 Gear & DPS Calculator v1.8.24

> A fully-featured, offline gear and DPS calculator for Tom Clancy's The Division 2.
> Built by **ImThatTeriyaki** from the **Sleepy Inc Clan**.

---

## What is this?

The Division 2 Gear Calculator is a standalone desktop app that lets you plan, simulate, and optimise builds without ever opening the game. Configure every slot, see your real DPS numbers, and compare builds side by side — all offline, no account required.

---

## Standout Features

### 🔫 Full Weapon System
- 3 weapon slots: Primary, Secondary, Sidearm
- Every weapon in the game with base stats, RPM, mag size, and headshot multiplier
- Full attachment system: Scope, Muzzle, Underbarrel, Magazine — each with stat modifiers
- Weapon talents: all 100+ talents including exotic and named-weapon locked talents
- Per-weapon DPS calculation: **True DPS**, **Burst DPS**, **Sustained DPS**, and **Headshot DPS**
- Expertise system: +1% base damage per expertise level (0–30) per weapon
- Named and exotic weapons locked to their correct Perfect/unique talent automatically

### 🛡️ Full Gear System
- All 6 gear slots: Mask, Chest, Backpack, Gloves, Holster, Kneepads
- Every brand set, gear set, named item, and exotic in the game
- Core attribute auto-applied on item selection (Weapon Damage / Armor / Skill Tier)
- Fixed attributes on exotics shown as read-only with correct values
- Editable secondary attributes with slot-aware compatibility filtering
- Mod slots with full mod stat list
- Gear talents: all chest, backpack, and kneepads talents including perfect variants
- Exotic talents locked to their item — no wrong talents in the dropdown
- Coyote's Mask range stage selector (0–15m / 15–25m / 25m+) with live modifier update
- Memento and NinjaBike Backpack support all 3 core variants simultaneously
- Expertise system on gear: +1% armor per level per piece

### 📊 Brand Set & Gear Set Bonuses
- Automatic detection of all active 1pc / 2pc / 3pc brand bonuses
- Automatic detection of all active 2pc / 3pc gear set bonuses
- Tooltip breakdown showing exactly which bonuses are active and from which set
- NinjaBike Messenger Backpack "Resourceful" talent correctly adds +1 to all set counts
- All gearset chest and backpack talents verified against the official reference spreadsheet

### 📈 Real-Time Stat Panel
- Live totals for every stat: Weapon Damage, Crit Chance, Crit Damage, Headshot Damage, Armor, Skill Tier, and 30+ more
- Separate tracking for weapon-type damage bonuses (SMG, AR, LMG, Rifle, Shotgun, Pistol, MMR)
- Total Weapon Damage bucket (Vigilance, Glass Cannon, etc.) calculated separately as a multiplier
- Defensive stats: Armor Regen, Hazard Protection, Explosive Resistance, all status resistances
- Utility stats: Skill Damage, Skill Haste, Skill Repair, Status Effects, Skill Efficiency

### 🎯 Skills
- Both skill slots with full variant/mod support
- Skill base stats scale with your equipped Skill Tier
- Skill mod platform with per-slot mod selection
- Expertise on skills

### ⚡ Specializations
- All 6 specializations: Sharpshooter, Survivalist, Demolitionist, Technician, Gunner, Firewall
- Signature weapon stats and bonuses applied to calculations

### 📷 OCR Scanner *(New)*
- Captures the Division 2 game window directly via screen capture
- Reads item stats automatically: name, quality, brand, slot, armor, core attribute, secondary attributes, mods, and talent
- Review panel with all fields editable before confirming — low-confidence fields highlighted in amber
- Sends result directly to the target loadout slot or Library
- Falls back to file picker if the game window can't be found

### 🤖 Build Advisor *(New)*
- AI-powered build recommendations based on your playstyle and goals
- Analyses your current build and suggests improvements
- Scores builds across multiple archetypes (DPS, Skill, Tank, Hybrid)

### 📚 Build Library
- Save unlimited builds with custom names
- Organised into folders by slot type
- Import / export builds as JSON
- Quick-load any saved build into the active loadout

### 🔄 Build Compare
- Side-by-side comparison of two full builds
- Highlights stat differences with colour-coded deltas

### 📸 Screenshot Export
- Capture a clean screenshot of your current build
- Shareable image with all stats, gear, and weapons laid out

### 🏅 SHD Watch & Levels
- SHD Watch level input with stat bonuses applied to calculations
- SHD Level stat breakdown page

---

## Themes

Seven UI themes to match your style:

| Theme | Style |
|---|---|
| **Default** | Classic dark orange — the original Division 2 look |
| **Cozy** | Wider layout, card-based UI, softer colours |
| **Liquid Glass** | Frosted glass panels with blur effects |
| **Candy** | Bright pastel accents |
| **Aero** | Windows Aero-inspired glass |
| **Aero Nightshade** | Dark purple Aero variant |
| **Saint** | Clean minimal dark theme |

---

## What's New in v1.8.24

A comprehensive data accuracy pass — every exotic item, gearset talent, and perfect talent verified against the official reference spreadsheet.

- **10 exotic items** had wrong core attributes due to a reference data misread — all corrected (Collector, Provocateur, Beacon, Tinkerer, Bloody Knuckles, BTSU, Rugged Gauntlets, Shocker Punch, Waveform, Acosta's Kneepads)
- **Sawyer's Kneepads** talent renamed "Stand Your Ground" with correct full description
- **Blacklisters** talent renamed "Ostracize" with correct mark mechanic description
- **8 gearset talents** corrected: Hunter's Fury, Measured Assembly, Negotiator's Dilemma, System Corruption (both chest and backpack), Umbra Initiative (chest/backpack were swapped)
- **15+ perfect talent descriptions** corrected against reference data
- Vile Toxic Delivery now shows DoT tic rate (1/sec, 10s duration) in the talent panel
- Imminence Armaments 2pc "Increased Threat" now tracked in stats and labeled correctly
- Locked/exotic talent modifier inputs are now read-only

---

## How to Run (Development)

```bash
git clone https://github.com/YOUR_USERNAME/division2-gear-calculator.git
cd division2-gear-calculator
npm install
npm start
```

## How to Build the Installer

```bash
npm run build
```

Outputs to `dist/`:
- `Division 2 Gear Calculator Setup 1.8.24.exe` — Windows installer
- `Division 2 Gear Calculator 1.8.24.exe` — Portable, no install needed

---

## Tech Stack

- **Electron** — Desktop wrapper
- **Vanilla HTML / CSS / JS** — Zero runtime dependencies in the app itself
- **electron-builder** — Windows installer and portable packaging
- **Tesseract.js** — OCR engine for the scanner feature

---

## License

MIT — see [LICENSE](LICENSE)
