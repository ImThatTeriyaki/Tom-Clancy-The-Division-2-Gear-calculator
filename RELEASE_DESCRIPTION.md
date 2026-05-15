# v1.8.24 — Data Accuracy Pass

This release is a comprehensive data accuracy pass driven by tester feedback. Every exotic item, gearset talent, and perfect talent has been verified against the official community reference spreadsheet.

---

## 🔧 What's Fixed

### Exotic Item Attributes (Off-By-One Bug)
10 exotic items had completely wrong core attributes and fixed attributes. All corrected:

| Item | Was | Now |
|---|---|---|
| Collector (Chest) | WD core, Crit Chance/Damage | Armor core, Armor Regen + Hazard Protection |
| Provocateur (Chest) | Skill Tier core, Armor Regen/Hazard | WD core, Crit Chance + Crit Damage |
| Beacon (Chest) | WD core, Crit Chance/Damage | Armor core, Armor Regen + Explosive Res |
| Tinkerer (Mask) | WD core, Crit Chance/Damage | Skill Tier core, Skill Damage + Skill Haste |
| Bloody Knuckles (Gloves) | WD core, Crit Chance/Damage | Skill Tier core, Skill Haste + Skill Repair |
| BTSU Datagloves (Gloves) | Skill Tier core, Skill Haste/Repair | WD core, Crit Chance + Crit Damage |
| Rugged Gauntlets (Gloves) | Crit Chance + Crit Damage | Crit Chance + Weapon Handling |
| Shocker Punch (Holster) | Explosive Res + Hazard Protection | Skill Tier core, Skill Damage + Skill Haste |
| Waveform (Holster) | Skill Tier core, Skill Damage/Haste | WD core, Crit Chance + Crit Damage |
| Acosta's Kneepads | Empty attrs, Skill Tier core | WD core, Crit Chance + Crit Damage |

### Exotic Talent Names
- **Sawyer's Kneepads**: "Rooted" → **"Stand Your Ground"** — now includes explosion stagger immunity
- **Blacklisters**: "Forbidden Impact" → **"Ostracize"** — correct mark + 600% amplified damage mechanic

### Gearset Talents (8 corrections)
- **Hunter's Fury Chest**: "Hivemind" → **"Endless Hunger"** (Apex Predator stacks 10s → 30s)
- **Hunter's Fury Backpack**: "Smart Cooperation" → **"Overwhelming Force"** (disorient radius 5m → 10m)
- **Measured Assembly Chest**: "Huddle" → **"Target Rich Environment"** (mark count 3 → 5)
- **Measured Assembly Backpack**: "Cooldown" → **"Critical Measures"** (damage transfer 60% → 112%)
- **Negotiator's Dilemma Backpack**: was showing wrong set's talent → **"Trauma Specialist"**
- **System Corruption Chest**: was showing Hackstep Protocol → **"Specialized Destruction"** (Aggressive Recon 15% → 30%)
- **System Corruption Backpack**: was showing Hackstep Protocol → **"Signature Moves"** (+50% WD after depleting Sig Weapon)
- **Umbra Initiative**: chest and backpack descriptions were swapped — both now reference the correct talent

### Perfect Talent Descriptions (15+ corrections)
All verified against the official reference spreadsheet:
- Perfect Obliterate: stacks up to 24 (was 25)
- Perfect Intimidate: full correct description
- Perfect Spark: 18% for 20s (was 20% for 15s)
- Perfectly Unbreakable: 100% repair, 55s cooldown (was 115%, 60s)
- Perfect Vanguard: 50% bonus armor (was 60%)
- Perfect Overwatch: 8s cover, 14% WD+SD (was completely wrong description)
- Perfect Trauma: correct blind/bleed cooldowns (was wrong description)
- Perfect Companion: within 10m, +20% WD (was wrong description)
- Perfect Focus: 6%/sec up to 60% (was wrong description)
- Perfect Braced: 50% weapon handling only (was wrong)
- Perfect Entrench: 1s cooldown (was wrong)
- Perfectly Skilled: 30% reset chance (was wrong)
- Perfect Vigilance: 3s disable (was 4s)
- Perfect Leadership: tripled within 10m (was doubled)
- Perfectly Tamper Proof: correct description
- Added: **Perfectly Efficient** and **Perfect Protected Reload**

### Other Fixes
- Vile Toxic Delivery: now shows DoT tic info (1 tic/sec × 10s) in the talent panel
- Imminence Armaments 2pc "Increased Threat" now tracked in stats and labeled correctly
- Locked/exotic talent modifier inputs are now read-only in the UI
- Coyote stage modifier inputs are now read-only
- Memento + NinjaBike Backpack correctly flagged as all-3-cores items
- NinjaBike Backpack talent no longer shows a phantom Weapon Damage modifier
- gt_challenger and gt_bond marked as exotic-only (no longer appear in general talent pool)
- Restored missing Striker's Battlegear "Risk Management" backpack talent

---

## 📦 Downloads

| File | Type |
|---|---|
| `Division 2 Gear Calculator Setup 1.8.24.exe` | Windows Installer |
| `Division 2 Gear Calculator 1.8.24.exe` | Portable (no install) |
