/*
 * Starter forces: ready-made forces for new players.
 *
 * Each one is a complete, legal force at a standard Core Set tasking (150 CP).
 * Open one in the builder to change anything. These are suggestions built from
 * the unit and card text, not official lists.
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
  }
];
