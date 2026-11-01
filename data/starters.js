/*
 * Starter forces: ready-made forces for new players.
 *
 * Each one is a complete, legal force for one game type: a Core Set Night Raid
 * (150 CP), a Phase Line game (200 CP plus two 150 CP reinforcement waves) or a
 * Spearhead Tasking (350 CP). Open one in the builder to change anything.
 * These are suggestions built from the unit and card text, not official lists.
 *
 *   id, name     identifier (lowercase, hyphens) and display name
 *   faction      main faction id
 *   ally         optional ally faction id
 *   mode         game type id
 *   points       CP limit
 *   style        short label shown as a tag, such as "Balanced"
 *   blurb        one or two sentences on what the force does
 *   tips         short play tips
 *   units        { unitId: quantity } for the main kill team
 *   waves        Phase Line only: { pl1: { unitId: quantity }, pl2: { ... } }
 *   slots        Phase Line only: { pl1: cardId, pl2: cardId } for the two
 *                face-down Phase Line Fires cards
 *   cards        Intervention card ids (a full hand)
 *
 * Run `node tools/validate-data.mjs` after editing. It checks every force
 * against the same limits the builder enforces.
 */
window.BPRE_STARTERS = [
  // ---- Crisis Troop Scorch ----
  {
    id: "cts-balanced",
    name: "Scorch Fire Team",
    faction: "cts", mode: "core", points: 150,
    style: "Balanced",
    blurb: "One of each core role: an Advisor to call in a Scoria RS, a machine gunner to hold a lane, a fast Recce and an Assaulter with frags.",
    tips: [
      "Keep the Advisor back and use Glint to drop the Scoria RS on a point you can see.",
      "Park the Automatic Rifleman where it covers a door or corridor and let the others work around it."
    ],
    units: { "cts-advisor": 1, "cts-auto-rifleman": 1, "cts-recce": 1, "cts-assaulter": 1 },
    cards: ["int-react-to-contact", "int-kill-not-capture", "int-break-contact"]
  },
  {
    id: "cts-door-kickers",
    name: "Door Kickers",
    faction: "cts", mode: "core", points: 150,
    style: "Aggressive",
    blurb: "Six cheap, fast models. Three Recces with Doorkicker and three Assaulters with frags. Nothing here has a per-100 CP limit, so it is simple to field.",
    tips: [
      "Move together and push through doors early. The Door Is Yours makes that free.",
      "Assaulters throw frags from the Direct Fire Phase to clear a room before you walk in."
    ],
    units: { "cts-recce": 3, "cts-assaulter": 3 },
    cards: ["int-door-is-yours", "int-frag-out", "int-pile-little-arms"]
  },

  // ---- 00 Unit Nitto ----
  {
    id: "nitto-drone-eyes",
    name: "Drone Eyes",
    faction: "nitto", mode: "core", points: 150,
    style: "Support",
    blurb: "A Systems Operator brings two Quadrotor Fires cards, backed by two Riflemen and a Pointman.",
    tips: [
      "Keep the Systems Operator behind your Riflemen and use the Quadrotors on groups, not single models.",
      "Nitto units are fast (8\"), so use that to get the first shot."
    ],
    units: { "nitto-sysop": 1, "nitto-rifleman": 2, "nitto-pointman": 1 },
    cards: ["int-kill-not-capture", "int-hasty-ambush", "int-lift-and-shift"]
  },
  {
    id: "nitto-joint-strike",
    name: "Joint Strike with Scorch",
    faction: "nitto", ally: "cts", mode: "core", points: 150,
    style: "Allied",
    blurb: "Nitto's Systems Operator and Pointman alongside a CTS Automatic Rifleman and Recce. A simple way to see how an allied force works.",
    tips: [
      "The Automatic Rifleman anchors a lane while the fast Nitto and Recce models flank.",
      "Use the Quadrotors to open up positions before the Pointman breaches."
    ],
    units: { "nitto-sysop": 1, "nitto-pointman": 1, "cts-auto-rifleman": 1, "cts-recce": 1 },
    cards: ["int-fire-for-effect", "int-kill-not-capture", "int-break-contact"]
  },

  // ---- Hongbin ----
  {
    id: "hongbin-merc-line",
    name: "Mercenary Line",
    faction: "hongbin", mode: "core", points: 150,
    style: "Balanced",
    blurb: "An Enabler with two FengHuang-918 Fires cards behind five cheap Mercs. Lots of models and lots of frags.",
    tips: [
      "Mercs are cheap, so trade them freely and keep the Enabler alive to call in the FengHuang.",
      "Spread out. Frags and explosions punish a tight group."
    ],
    units: { "hb-enabler": 1, "hb-merc": 5 },
    cards: ["int-hasty-ambush", "int-break-contact", "int-frag-out"]
  },
  {
    id: "hongbin-proxy-screen",
    name: "Proxy Screen",
    faction: "hongbin", ally: "aayari", mode: "core", points: 150,
    style: "Allied",
    blurb: "Hongbin's Enabler and Mercs shoot from behind Aayari bodies: two Muhtasib with four Shurta in front.",
    tips: [
      "Send the Shurta and Muhtasib first and keep the Mercs and Enabler behind them.",
      "Each Muhtasib permits four Shurta, so this force is at its limit. You cannot add more Shurta without another Muhtasib."
    ],
    units: { "hb-enabler": 1, "hb-merc": 3, "aa-muhtasib": 2, "aa-shurta": 4 },
    cards: ["int-ambush", "int-hasty-ambush", "int-break-contact"]
  },

  // ---- Aayari Network ----
  {
    id: "aayari-human-wave",
    name: "Human Wave",
    faction: "aayari", mode: "core", points: 150,
    style: "Swarm",
    blurb: "Six Muhtasib with S-Vests and twelve Shurta. Cheap, numerous and built to overwhelm.",
    tips: [
      "Lead with Shurta to soak up shots and get the Muhtasib close enough to detonate.",
      "Shurta have no save roll, so expect to lose them. That is the plan."
    ],
    units: { "aa-muhtasib": 6, "aa-shurta": 12 },
    cards: ["int-ambush", "int-front-towards-enemy", "int-hasty-ambush"]
  },
  {
    id: "aayari-gun-line",
    name: "Gun Line",
    faction: "aayari", mode: "core", points: 150,
    style: "Balanced",
    blurb: "A Shurta PKM Gunner and assistant give you a base of fire while four Muhtasib and eight Shurta close in.",
    tips: [
      "Set the PKM up first where it can cover the approach, then advance the rest.",
      "The PKM Gunner can take two ACT tokens a turn from Direct Fire or Immediate Actions."
    ],
    units: { "aa-shurta-pkm": 1, "aa-assistant-pkm": 1, "aa-muhtasib": 4, "aa-shurta": 8 },
    cards: ["int-ambush", "int-front-towards-enemy", "int-kill-not-capture"]
  },

  // ---- SPEAR Brigade ----
  {
    id: "spear-ew-patrol",
    name: "Electronic Warfare Patrol",
    faction: "spear", mode: "core", points: 150,
    style: "Support",
    blurb: "A Systems Operator with two Quadrotors, two Marksmen and an Assaulter.",
    tips: [
      "Marksmen cover from a distance while the Assaulter breaches and the Operator controls the Quadrotors.",
      "The Operator carries Cognitive Jammers, which help against enemy drones."
    ],
    units: { "spear-sysop": 1, "spear-marksman": 2, "spear-assaulter": 1 },
    cards: ["int-kill-not-capture", "int-break-contact", "int-lift-and-shift"]
  },
  {
    id: "spear-hongbin-gun-team",
    name: "SPEAR and Hongbin Gun Team",
    faction: "spear", ally: "hongbin", mode: "core", points: 150,
    style: "Allied",
    blurb: "Only three models: a SPEAR Systems Operator and Marksman, with a Hongbin PKM Gunner for sustained fire. Easy to run first time.",
    tips: [
      "Set the PKM Gunner up first and let the Marksman cover it.",
      "With so few models, protect them. Use Break Contact when a save matters."
    ],
    units: { "spear-sysop": 1, "spear-marksman": 1, "hb-pkm-gunner": 1 },
    cards: ["int-break-contact", "int-hasty-ambush", "int-full-send"]
  },

  // ---- Phase Line (200 CP, then 150 CP at each phase line) ----
  {
    id: "cts-pl-push",
    name: "Scorch Phase Line Push",
    faction: "cts", mode: "phaseline", points: 200,
    style: "Balanced",
    blurb: "A full Scorch team up front, then two waves that bring more Assaulters, Recce Raiders and a second Advisor for the last push.",
    tips: [
      "Use the first 200 CP to grab ground and hold it. The Advisor and HVY machine gun cover while the Raiders push.",
      "The second Advisor arrives in the last wave with another Scoria RS. Save it for the structure you are attacking."
    ],
    units: { "cts-advisor": 1, "cts-auto-rifleman-hvy": 1, "cts-assault-grenadier": 1, "cts-recce-raider": 1, "cts-assaulter": 1 },
    waves: {
      pl1: { "cts-assaulter": 2, "cts-recce-raider": 2, "cts-auto-rifleman": 1 },
      pl2: { "cts-advisor": 1, "cts-assault-grenadier": 1, "cts-assaulter": 3 }
    },
    slots: { pl1: "plf-sensor-fuzed", pl2: "plf-gps-mortars" },
    cards: ["int-troops-in-contact", "int-fix-and-finish", "int-break-contact"]
  },
  {
    id: "nitto-pl-raid",
    name: "Nitto Phase Line Raid",
    faction: "nitto", mode: "phaseline", points: 200,
    style: "Aggressive",
    blurb: "Fast Nitto Pointmen and Riflemen with a Systems Operator in the first two groups. The last wave is all infantry.",
    tips: [
      "Nitto move 8\", so get to the phase line first and make the opponent come to you.",
      "Pointmen breach doors for you. Use that to hit rooms from two sides."
    ],
    units: { "nitto-sysop": 1, "nitto-rifleman": 2, "nitto-pointman": 3 },
    waves: {
      pl1: { "nitto-sysop": 1, "nitto-rifleman": 1, "nitto-pointman": 2 },
      pl2: { "nitto-rifleman": 2, "nitto-pointman": 3 }
    },
    slots: { pl1: "plf-drone-swarm", pl2: "plf-gps-mortars" },
    cards: ["int-troops-in-contact", "int-hasty-ambush", "int-kill-not-capture"]
  },
  {
    id: "hongbin-pl-line",
    name: "Hongbin Phase Line Defence",
    faction: "hongbin", mode: "phaseline", points: 200,
    style: "Balanced",
    blurb: "An Enabler and a PKM Gunner behind a screen of cheap Mercs, with Merc Grenadiers to clear rooms. Each wave adds more Mercs and another heavy hitter.",
    tips: [
      "Mercs are cheap. Trade them to keep the PKM Gunner alive and firing.",
      "Merc Grenadiers only fire in the Direct Fire Phase, so set them up where they can see the door you want."
    ],
    units: { "hb-enabler": 1, "hb-pkm-gunner": 1, "hb-merc-grenadier": 1, "hb-merc": 3 },
    waves: {
      pl1: { "hb-enabler": 1, "hb-merc-grenadier": 1, "hb-merc": 4 },
      pl2: { "hb-pkm-gunner": 1, "hb-merc-grenadier": 1, "hb-merc": 3 }
    },
    slots: { pl1: "plf-drone-swarm", pl2: "plf-gps-mortars" },
    cards: ["int-troops-in-contact", "int-hasty-ambush", "int-break-contact"]
  },
  {
    id: "aayari-pl-surge",
    name: "Aayari Phase Line Surge",
    faction: "aayari", mode: "phaseline", points: 200,
    style: "Swarm",
    blurb: "Muhtasib Sappers and Muhtasib with a Shurta PKM team on the first line. The waves add more Sappers and a crowd of Shurta.",
    tips: [
      "Sappers breach doors and detonate. Keep them alive until they are next to something worth killing.",
      "The Shurta limit counts the whole force: four Shurta for every Muhtasib or Sapper."
    ],
    units: { "aa-muhtasib-sapper": 2, "aa-muhtasib": 4, "aa-shurta-pkm": 1, "aa-assistant-pkm": 1, "aa-shurta": 8 },
    waves: {
      pl1: { "aa-muhtasib-sapper": 2, "aa-muhtasib": 3, "aa-shurta": 11 },
      pl2: { "aa-muhtasib-sapper": 3, "aa-muhtasib": 3, "aa-shurta": 6 }
    },
    slots: { pl1: "plf-hesh", pl2: "plf-drone-swarm" },
    cards: ["int-ambush", "int-front-towards-enemy", "int-hasty-ambush"]
  },
  {
    id: "spear-pl-patrol",
    name: "SPEAR Phase Line Patrol",
    faction: "spear", mode: "phaseline", points: 200,
    style: "Support",
    blurb: "Marksmen and Assaulters led by a Systems Operator with two Quadrotors. Respirators come standard, so a gas card does not scare them.",
    tips: [
      "Marksmen can activate twice in the Direct Fire Phase. Put them where they can see the approach.",
      "Assaulters breach doors and throw frags. Send them in once the Marksmen have the approach covered."
    ],
    units: { "spear-sysop": 1, "spear-marksman": 2, "spear-assaulter": 4 },
    waves: {
      pl1: { "spear-sysop": 1, "spear-marksman": 1, "spear-assaulter": 3 },
      pl2: { "spear-marksman": 2, "spear-assaulter": 4 }
    },
    slots: { pl1: "plf-drone-swarm", pl2: "plf-gps-mortars" },
    cards: ["int-kill-not-capture", "int-break-contact", "int-troops-in-contact"]
  },

  // ---- Spearhead (350 CP) ----
  {
    id: "cts-sh-assault",
    name: "Scorch Spearhead Assault",
    faction: "cts", mode: "spearhead", points: 350,
    style: "Balanced",
    blurb: "An Advisor and an Assault Tech for two Scoria RS cards, an HVY machine gun and a grenadier for support, and six cheap models to take the building.",
    tips: [
      "The Assault Tech can call Fires on any friendly unit's line of sight, so it can strike from the back.",
      "Take objectives with the Assaulters and Recces. Keep the specialists back."
    ],
    units: { "cts-advisor": 1, "cts-assault-tech": 1, "cts-auto-rifleman-hvy": 1, "cts-assault-grenadier": 1, "cts-recce": 2, "cts-assaulter": 4 },
    cards: ["int-react-to-contact", "int-troops-in-contact", "int-break-contact"]
  },
  {
    id: "nitto-sh-strike",
    name: "Nitto Spearhead Strike",
    faction: "nitto", mode: "spearhead", points: 350,
    style: "Support",
    blurb: "Two Systems Operators with four Quadrotor cards, then Riflemen and Pointmen to move in behind them.",
    tips: [
      "Systems Operators survive a failed save as Mortally Wounded, but they die at the end of the Finishing Phase. Keep them out of harm's way.",
      "Quadrotors are Fires cards, so any Glint-capable unit holding one can use it."
    ],
    units: { "nitto-sysop": 2, "nitto-rifleman": 3, "nitto-pointman": 5 },
    cards: ["int-kill-not-capture", "int-hasty-ambush", "int-troops-in-contact"]
  },
  {
    id: "hongbin-sh-line",
    name: "Hongbin Spearhead Line",
    faction: "hongbin", mode: "spearhead", points: 350,
    style: "Balanced",
    blurb: "Two Enablers bring four FengHuang-918 cards. A PKM Gunner and a Merc Grenadier give you a base of fire, with nine Mercs to fill the building.",
    tips: [
      "The PKM Gunner can take two ACT tokens, but only from Direct Fire or Immediate Actions.",
      "Mercs are cheap. Use them to hold doors and windows while the Enablers call down the FengHuang."
    ],
    units: { "hb-enabler": 2, "hb-pkm-gunner": 1, "hb-merc-grenadier": 1, "hb-merc": 9 },
    cards: ["int-hasty-ambush", "int-break-contact", "int-troops-in-contact"]
  },
  {
    id: "aayari-sh-wave",
    name: "Aayari Spearhead Wave",
    faction: "aayari", mode: "spearhead", points: 350,
    style: "Swarm",
    blurb: "Six Sappers and six Muhtasib with a Shurta PKM team and twelve Shurta. Plenty of ways to blow a door and fill the room behind it.",
    tips: [
      "Sappers and Muhtasib detonate in the Maneuver Phase if they have not attacked. Move them next to the enemy first.",
      "Use the Shurta PKM Gunner and Assistant as a base of fire while the rest advance."
    ],
    units: { "aa-muhtasib-sapper": 6, "aa-muhtasib": 6, "aa-shurta-pkm": 1, "aa-assistant-pkm": 1, "aa-shurta": 12 },
    cards: ["int-ambush", "int-front-towards-enemy", "int-hasty-ambush"]
  },
  {
    id: "spear-sh-team",
    name: "SPEAR Spearhead Team",
    faction: "spear", mode: "spearhead", points: 350,
    style: "Support",
    blurb: "Two Systems Operators and three Marksmen, with seven Assaulters to breach and clear. Respirators are included.",
    tips: [
      "Systems Operators can call Fires on a friendly's line of sight and redirect it if it lands close.",
      "Marksmen and Assaulters take a smaller penalty on Immediate Actions, so shoot first when you can."
    ],
    units: { "spear-sysop": 2, "spear-marksman": 3, "spear-assaulter": 7 },
    cards: ["int-kill-not-capture", "int-break-contact", "int-troops-in-contact"]
  }
];
