/*
 * Rules index: keywords mapped to the book and printed page number.
 *
 * This is a finding aid, not a rules reference. Notes are short pointers
 * written for this index. Read the rule in the book itself.
 *
 *   books    id, name, short (shown on the page chip) and a coverage line
 *   entries  term     keyword shown in the list
 *            aliases  other words people search for (optional)
 *            note     one short line saying what the rule covers (optional)
 *            refs     [{ book, pages }] where pages is a printed page
 *                     number or a range as text, e.g. "36" or "30-31"
 *
 * Page numbers are the numbers printed on the pages of the books, not the
 * PDF page positions. Run `node tools/validate-data.mjs` after editing.
 */
window.BPRE_RULES_INDEX = {
  books: [
    { id: "core", name: "Core Rules", short: "Core", coverage: "Pages 24-39 (rules) and 68-75 (units)" },
    { id: "phaseline", name: "Phase Line", short: "PL", coverage: "Pages 14-19 (rules) and 30-37 (units)" },
    { id: "spearhead", name: "Spearhead", short: "SH", coverage: "Pages 30-47 (rules) and 70-77 (units)" }
  ],

  entries: [
    // ---- Turn and activation ----
    { term: "Alternating activation", aliases: ["activate", "activating", "eligible units", "turn order"], note: "Players take turns activating one unit at a time.", refs: [{ book: "core", pages: "33, 36" }] },
    { term: "ACT chit", aliases: ["ACT token", "activation chit", "activation token"], note: "Marks a unit that has acted this turn.", refs: [{ book: "core", pages: "27, 33" }, { book: "spearhead", pages: "31" }] },
    { term: "Double ACT tokens", aliases: ["two ACT tokens", "belt fed", "machine guns", "second activation"], note: "Machine gun units can take two ACT tokens a turn, with limits.", refs: [{ book: "spearhead", pages: "31" }, { book: "spearhead", pages: "77" }] },
    { term: "Passing", aliases: ["pass control", "pass"], note: "Passing is final for the phase.", refs: [{ book: "core", pages: "33" }] },
    { term: "Ending a turn", aliases: ["end of turn", "turn ends"], note: "The three ways a turn can end.", refs: [{ book: "core", pages: "33" }] },
    { term: "Order of battle", aliases: ["turn sequence", "phases", "quick reference", "new turn"], note: "Phase order laid out on one page.", refs: [{ book: "core", pages: "36-39" }] },
    { term: "Direct Fire Phase", aliases: ["direct fire", "static fire"], note: "No moving or rotating. Attack at +1.", refs: [{ book: "core", pages: "36" }] },
    { term: "Maneuver Phase", aliases: ["maneuver", "movement phase"], note: "Move, rotate and attack during the move.", refs: [{ book: "core", pages: "37" }] },
    { term: "Finishing Phase", aliases: ["finishing attacks", "finishing combat", "knife fight", "base to base", "melee"], note: "Frags detonate, then close fighting inside 3\".", refs: [{ book: "core", pages: "38" }] },
    { term: "Cleanup", aliases: ["clean up", "new turn", "advance turn counter"], note: "Remove ACT chits, stand up staggered units, advance the counter.", refs: [{ book: "core", pages: "38" }] },
    { term: "Turn counter", aliases: ["turn limit", "turns", "current turn chit"], note: "Tracks the turn. Limit depends on the game type.", refs: [{ book: "core", pages: "27, 38" }, { book: "phaseline", pages: "14" }, { book: "spearhead", pages: "34" }] },
    { term: "Quick Reaction Force", aliases: ["QRF", "reinforcements", "defender reserve"], note: "Defender holds back points and rolls to bring them in from turn 3.", refs: [{ book: "core", pages: "36" }, { book: "phaseline", pages: "17" }] },

    // ---- Dice and measuring ----
    { term: "Dice", aliases: ["D10", "2D10", "ten-sided"], note: "2D10 is the standard roll.", refs: [{ book: "core", pages: "25" }] },
    { term: "Modifiers", aliases: ["modifier", "bonus", "penalty", "plus", "minus"], note: "Numbers added to or taken off a roll.", refs: [{ book: "core", pages: "25" }] },
    { term: "Measuring", aliases: ["distance", "range", "inches", "measure"], note: "Measure from the center of the base. Targets use the nearest edge.", refs: [{ book: "core", pages: "25, 28" }] },
    { term: "Radial effect template", aliases: ["radial template", "grenade template", "area of effect", "AOE", "radius"], note: "Used for blasts, grenade bounce and area effects.", refs: [{ book: "core", pages: "24, 28, 38" }, { book: "phaseline", pages: "19" }] },

    // ---- Attacking ----
    { term: "Attacking", aliases: ["attack roll", "marksmanship", "shooting", "hit", "miss"], note: "Roll 2D10 against the unit card.", refs: [{ book: "core", pages: "32" }] },
    { term: "Save roll", aliases: ["save", "saving throw", "no save"], note: "Roll to turn a kill into a stagger. Fail and the unit is removed.", refs: [{ book: "core", pages: "32" }] },
    { term: "Staggered", aliases: ["stagger", "knocked down", "on its side"], note: "Cannot activate and auto-fails saves until the turn ends.", refs: [{ book: "core", pages: "32" }] },
    { term: "Headshot", aliases: ["20+", "natural 20", "critical"], note: "20+ on an attack kills with no save. 20+ on a save is unaffected.", refs: [{ book: "core", pages: "32" }] },
    { term: "Unit card", aliases: ["unit stats", "capability value", "attack table"], note: "Shows cost, movement, attack table, save and special rules.", refs: [{ book: "core", pages: "24, 26" }] },
    { term: "CQB", aliases: ["close quarters battle", "5D10", "close-quarters"], note: "Five dice per attack, counting hits.", refs: [{ book: "phaseline", pages: "19, 30, 33" }] },
    { term: "Mortally wounded", aliases: ["mortal wound", "dying"], note: "A failed save leaves the unit alive until the end of the Finishing Phase.", refs: [{ book: "spearhead", pages: "70-72" }] },
    { term: "Crew served", aliases: ["crew-served", "PKM assistant", "assistant gunner"], note: "A PKM unit paired with an assistant fires more attacks.", refs: [{ book: "phaseline", pages: "19, 37" }, { book: "spearhead", pages: "77" }] },
    { term: "Heavy machine guns", aliases: ["PKM", "fire for effect", "see through doors", "suppressive fire"], note: "Can shoot through closed doors and impose a save penalty.", refs: [{ book: "phaseline", pages: "19, 36" }, { book: "spearhead", pages: "31" }] },

    // ---- Movement and line of sight ----
    { term: "Movement", aliases: ["move", "range of movement", "rotate"], note: "Move from the center of the base, rotating freely.", refs: [{ book: "core", pages: "37" }] },
    { term: "Immediate Action", aliases: ["immediate actions", "overwatch shot", "reaction shot", "interrupt"], note: "Shoot a moving opponent in sight first, at -3.", refs: [{ book: "core", pages: "37" }, { book: "spearhead", pages: "31, 38" }] },
    { term: "Crossing cover", aliases: ["surmounting cover", "vaulting", "waist-high cover", "climb"], note: "Cross one low feature up to 2\". Roll 10+ or stagger.", refs: [{ book: "core", pages: "37" }] },
    { term: "Line of sight", aliases: ["LOS", "visibility", "see"], note: "Direct and obstructed. Friendly units never block it.", refs: [{ book: "core", pages: "30-31" }] },
    { term: "Direct line of sight", aliases: ["direct LOS"], note: "Clear line from the attacker's base to the target's center.", refs: [{ book: "core", pages: "30" }] },
    { term: "Obstructed line of sight", aliases: ["obstructed LOS", "cover"], note: "A line through waist-high cover.", refs: [{ book: "core", pages: "30-31" }] },
    { term: "Waist-high cover", aliases: ["cover", "low cover", "barricade"], note: "Makes direct sight obstructed.", refs: [{ book: "core", pages: "31, 37" }] },
    { term: "Doors", aliases: ["door", "open door", "close door", "doorway", "breach", "destroy door"], note: "3\" to open or close. Closed doors block sight.", refs: [{ book: "core", pages: "31-32" }, { book: "phaseline", pages: "19" }] },
    { term: "Stairwell", aliases: ["stairs", "stairways", "floors"], note: "Visible from both levels and blocks movement.", refs: [{ book: "phaseline", pages: "18" }] },
    { term: "Elevation", aliases: ["overwatch", "windows", "upper floor", "story", "storey", "shooting up"], note: "Windows limit sight and each level up costs a modifier.", refs: [{ book: "phaseline", pages: "18" }] },
    { term: "Glint", aliases: ["call for fire", "call down fires"], note: "Call a Fires card in the Maneuver Phase without ending the move.", refs: [{ book: "core", pages: "37, 68" }, { book: "spearhead", pages: "43, 70" }] },
    { term: "Breaching a door", aliases: ["breacher", "pointman", "door explosion"], note: "Spend 4\" to destroy a door with a 2\" blast.", refs: [{ book: "spearhead", pages: "72, 76" }] },
    { term: "Doorkicker", aliases: ["open door free", "free door"], note: "Opens a door without spending movement.", refs: [{ book: "core", pages: "71" }, { book: "phaseline", pages: "30, 33" }, { book: "spearhead", pages: "72" }] },

    // ---- Grenades and explosions ----
    { term: "Frag chit", aliases: ["frag", "grenade", "grenades", "throw grenade"], note: "Placed up to 10\" in the Direct Fire Phase. Detonates later.", refs: [{ book: "core", pages: "27, 36, 38" }] },
    { term: "Grenade bounce", aliases: ["scatter", "detonation", "frag detonation"], note: "Roll 1D10 on the template, then detonate with a 2\" area.", refs: [{ book: "core", pages: "38" }] },
    { term: "Explosions", aliases: ["explosion", "blast", "area of effect", "radius"], note: "Who is hit, cover bonus and doors destroyed.", refs: [{ book: "core", pages: "28, 31, 38" }] },
    { term: "Grenadier", aliases: ["grenade launcher", "40mm", "assault grenadier", "merc grenadier"], note: "Fires a grenade in place of an attack.", refs: [{ book: "phaseline", pages: "19, 31, 34" }] },
    { term: "S-Vest", aliases: ["suicide vest", "suicide bomber", "detonate"], note: "Detonates in the Maneuver Phase and hits everyone within 2\".", refs: [{ book: "core", pages: "72" }, { book: "phaseline", pages: "33" }] },
    { term: "Last Stand Activation", aliases: ["last stand"], note: "Campaign edge defence. A dying unit gets a final move and blast.", refs: [{ book: "spearhead", pages: "38" }] },

    // ---- Cards and tokens ----
    { term: "Intervention cards", aliases: ["intervention", "hand", "hand of three", "cards"], note: "Single-use cards. Choose a hand of three.", refs: [{ book: "core", pages: "26, 36" }, { book: "phaseline", pages: "17" }] },
    { term: "Special Intervention cards", aliases: ["special intervention", "reward cards"], note: "Earned by winning. Stronger single-use cards.", refs: [{ book: "core", pages: "26" }, { book: "phaseline", pages: "16-17, 19" }, { book: "spearhead", pages: "38" }] },
    { term: "Fires cards", aliases: ["fires", "fire support", "Scoria RS", "Quadrotor", "FengHuang-918", "call for fire"], note: "Support strikes, called in by Advisors, Enablers and operators.", refs: [{ book: "core", pages: "26, 37, 68, 74" }, { book: "spearhead", pages: "70, 73-74" }] },
    { term: "Phase Line Fires cards", aliases: ["phase line fires", "hidden fires"], note: "Placed face down at each Phase Line.", refs: [{ book: "phaseline", pages: "16-17" }, { book: "spearhead", pages: "44" }] },
    { term: "Tasking cards", aliases: ["tasking", "mission card", "objectives"], note: "Sets the mission, limits and victory.", refs: [{ book: "core", pages: "26, 32, 36" }] },
    { term: "Atmospherics cards", aliases: ["weather", "atmospherics", "conditions"], note: "Weather and conditions that change play.", refs: [{ book: "core", pages: "26" }, { book: "phaseline", pages: "18" }, { book: "spearhead", pages: "34, 37" }] },
    { term: "Battlespace cards", aliases: ["map", "battlespace", "terrain layout"], note: "Drawn to pick the map for the game.", refs: [{ book: "core", pages: "26" }, { book: "phaseline", pages: "16" }, { book: "spearhead", pages: "37" }] },
    { term: "Tactical Exploitation token", aliases: ["objective token", "exploitation token", "intel"], note: "Objective marker.", refs: [{ book: "core", pages: "27" }, { book: "spearhead", pages: "42-45, 47" }] },
    { term: "Exposure token", aliases: ["gas", "exposure"], note: "Gained on a failed chlorine save.", refs: [{ book: "spearhead", pages: "31" }] },

    // ---- Force building ----
    { term: "Capability Points", aliases: ["CP", "points", "points limit", "force building", "kill team"], note: "What each unit costs. The Tasking sets the limit.", refs: [{ book: "core", pages: "24, 26, 36" }] },
    { term: "Per 100 CP limits", aliases: ["limitations", "one per 100", "unit limits", "per 100 points"], note: "Some units are capped by how many points you field.", refs: [{ book: "core", pages: "26, 68, 70, 74" }, { book: "phaseline", pages: "31-32, 34" }, { book: "spearhead", pages: "70, 73-74, 77" }] },
    { term: "Shurta limit", aliases: ["Muhtasib ratio", "four Shurta"], note: "Shurta need a Muhtasib, four for each.", refs: [{ book: "core", pages: "73" }, { book: "phaseline", pages: "37" }] },
    { term: "Faction restrictions", aliases: ["allies", "ally", "Aayari and SPEAR", "SPEAR never with Aayari", "alliances"], note: "Who may be fielded with whom.", refs: [{ book: "spearhead", pages: "30, 74-76" }] },
    { term: "Respirators", aliases: ["respirator", "CB respirator", "chlorine", "chlorine gas", "gas"], note: "+7 to chlorine saves. Cost and eligibility vary by faction.", refs: [{ book: "spearhead", pages: "31" }] },
    { term: "Specialist Reserve", aliases: ["specialist units", "reserve", "specialist reserve units"], note: "350 CP of specialists for a campaign.", refs: [{ book: "spearhead", pages: "37" }] },
    { term: "Specialist Replacements", aliases: ["replacements", "replacement roll"], note: "Roll to refill the reserve after a Phase Line loss.", refs: [{ book: "spearhead", pages: "38" }] },

    // ---- Game types ----
    { term: "Night Raid", aliases: ["core game", "operation", "Infil", "Actions On", "Exfil"], note: "The core multi-tasking game. Taskings run Infil, Actions On, Exfil.", refs: [{ book: "core", pages: "24, 26" }, { book: "phaseline", pages: "17" }] },
    { term: "Phase Line", aliases: ["phase lines", "assaulting", "counterattacking"], note: "Large game with two Phase Lines. 52 x 26 battlespace.", refs: [{ book: "phaseline", pages: "14, 16-17" }] },
    { term: "Named Area of Interest", aliases: ["NAI", "objective structure"], note: "The structure the assaulter must hold.", refs: [{ book: "phaseline", pages: "14, 16-17" }] },
    { term: "Ready lines", aliases: ["ready line", "assault ready line", "counterattack ready line", "deployment"], note: "Deployment edges.", refs: [{ book: "phaseline", pages: "14, 16" }, { book: "spearhead", pages: "42-45, 47" }] },
    { term: "Phase Line victory", aliases: ["winning phase line", "success"], note: "Hold the NAI for a full turn before the limit.", refs: [{ book: "phaseline", pages: "17" }] },
    { term: "Spearhead Tasking", aliases: ["spearhead", "39 x 26", "10 turns"], note: "10-turn tasking with shaping and primary objectives.", refs: [{ book: "spearhead", pages: "34" }] },
    { term: "Primary and Shaping Objectives", aliases: ["primary objective", "shaping objective", "success criteria"], note: "What each Spearhead tasking asks the sides to do.", refs: [{ book: "spearhead", pages: "42-45, 47" }] },
    { term: "Fighting Position", aliases: ["spearhead tasking", "defend structure"], note: "Primary objective only. 350 CP a side.", refs: [{ book: "spearhead", pages: "42" }] },
    { term: "Command Net", aliases: ["shaping objective", "cognitive jamming", "airspace"], note: "Controlling it locks the opponent out of Fires cards, except Glint.", refs: [{ book: "spearhead", pages: "43" }] },
    { term: "Forward Observer Post", aliases: ["FOP", "shaping objective"], note: "Shaping objective. Each side keeps a Phase Line Fires card.", refs: [{ book: "spearhead", pages: "44" }] },
    { term: "ESM Site", aliases: ["electronic support measures", "shaping objective"], note: "Shaping objective for electronic warfare.", refs: [{ book: "spearhead", pages: "45" }] },
    { term: "Combat Patrol", aliases: ["patrol", "200 CP"], note: "Smaller tasking. 200 CP a side.", refs: [{ book: "spearhead", pages: "47" }] },
    { term: "Degradation cards", aliases: ["degradation", "persistent damage", "destroyed structures"], note: "Persistent destruction that changes the map.", refs: [{ book: "spearhead", pages: "34, 37-38" }] },
    { term: "Sarin attack", aliases: ["sarin", "gas attack", "chlorine gas release"], note: "Special degradation card. Ignore it in a one-off game.", refs: [{ book: "spearhead", pages: "34, 37-38" }] },
    { term: "Campaign", aliases: ["spearhead campaign", "campaign map", "7 map", "9 map", "limit of advance"], note: "Linked taskings on a shifting front. Up to 20 taskings.", refs: [{ book: "spearhead", pages: "36-38" }] },
    { term: "Spot report", aliases: ["record sheet", "destroyed structures", "mission points"], note: "End of tasking bookkeeping.", refs: [{ book: "spearhead", pages: "37-38" }] },

    // ---- Factions ----
    { term: "Crisis Troop Scorch", aliases: ["CTS", "Scorch", "Cold Harbor", "Cold Harbor contractors"], note: "Cold Harbor special operations contractors.", refs: [{ book: "core", pages: "24, 68-71" }, { book: "spearhead", pages: "9" }] },
    { term: "Aayari Network", aliases: ["Aayari Guard", "Aayari", "jihadist network"], note: "Fundamentalist fighters. Muhtasib and Shurta.", refs: [{ book: "core", pages: "72-73" }, { book: "phaseline", pages: "33, 36-37" }] },
    { term: "Hongbin", aliases: ["Hongbin Alloy", "mercenaries", "Chinese mercenaries"], note: "Funded mercenaries and proxies.", refs: [{ book: "core", pages: "74-75" }, { book: "spearhead", pages: "9" }] },
    { term: "Nitto", aliases: ["00 Unit", "00 Unit Nitto", "Awbari Border Protection"], note: "Border protection commandos, fieldable alone or with CTS.", refs: [{ book: "spearhead", pages: "14-15, 30, 70-72" }] },
    { term: "SPEAR Brigade", aliases: ["SPEAR", "Qasran SPEAR", "Hongbin Kinetic Forces"], note: "Qasran special mission unit. Never with the Aayari.", refs: [{ book: "spearhead", pages: "9-11, 30, 74-76" }] },
    { term: "Qasra", aliases: ["Qasran", "Awbari", "Sanhaja", "Jadid Salient", "setting", "lore", "background", "war"], note: "The war and its setting.", refs: [{ book: "spearhead", pages: "7-9, 18-19" }] },

    // ---- Units: Crisis Troop Scorch ----
    { term: "Operational Advisor", aliases: ["Advisor", "CTS Advisor", "Kinetic ISR"], note: "Scoria RS, Glint and frags. One per 100 CP.", refs: [{ book: "core", pages: "68" }] },
    { term: "Assaulter (CTS)", aliases: ["Scorch Assaulter", "Assaulter"], note: "Cheap shock trooper with frags.", refs: [{ book: "core", pages: "69" }] },
    { term: "Automatic Rifleman", aliases: ["LAMG", "bipod", "auto rifleman"], note: "Five attack rolls aimed at a point. One per 100 CP.", refs: [{ book: "core", pages: "70" }] },
    { term: "Recce", aliases: ["CTS Recce", "Initiative"], note: "Fast. Doorkicker, Initiative and Finishing Phase range.", refs: [{ book: "core", pages: "71" }] },
    { term: "Recce Raider", aliases: ["raider", "forward deployed"], note: "CQB 5D10. No Immediate Action penalty within 6\".", refs: [{ book: "phaseline", pages: "30" }] },
    { term: "Assault Grenadier", aliases: ["CTS grenadier"], note: "Fires grenades in Direct Fire or Maneuver. One per 100 CP.", refs: [{ book: "phaseline", pages: "31" }] },
    { term: "Automatic Rifleman HVY", aliases: ["HVY", "belt-fed", "heavy rifleman"], note: "Ultralight belt-fed gun that sees through doors.", refs: [{ book: "phaseline", pages: "32" }] },
    { term: "Assault Tech", aliases: ["CTS Assault Tech", "kinetic UAS integrator"], note: "Calls Fires on any friendly's sight line. Redirect roll.", refs: [{ book: "spearhead", pages: "73" }] },

    // ---- Units: Nitto ----
    { term: "Systems Operator (Nitto)", aliases: ["Nitto Sysop", "Swarm Controller", "Quadrotor", "loitering munitions"], note: "Two Quadrotor Fires cards. Swarm Controller attacks.", refs: [{ book: "spearhead", pages: "70" }] },
    { term: "Nitto Rifleman", aliases: ["Rifleman"], note: "Follow-up shot when a friend misses.", refs: [{ book: "spearhead", pages: "71" }] },
    { term: "Nitto Pointman", aliases: ["Pointman", "breacher"], note: "Door opener and breacher.", refs: [{ book: "spearhead", pages: "72" }] },

    // ---- Units: Hongbin ----
    { term: "Hongbin Enabler", aliases: ["Enabler", "FengHuang-918"], note: "Two FengHuang-918 Fires cards and Glint. One per 100 CP.", refs: [{ book: "core", pages: "74" }] },
    { term: "Hongbin Merc", aliases: ["Merc", "mercenary"], note: "Cheap. Two attack rolls at a point.", refs: [{ book: "core", pages: "75" }] },
    { term: "Merc Grenadier", aliases: ["Hongbin grenadier"], note: "Direct Fire grenades only. One per 100 CP.", refs: [{ book: "phaseline", pages: "34" }] },
    { term: "Hongbin PKM Gunner", aliases: ["PKM Gunner"], note: "Five attacks, seven with crew. Two ACT tokens.", refs: [{ book: "spearhead", pages: "77" }] },

    // ---- Units: Aayari ----
    { term: "Muhtasib", aliases: ["Guard Muhtasib", "S-Vest", "death cult"], note: "S-Vest. Unlocks four Shurta each.", refs: [{ book: "core", pages: "72" }] },
    { term: "Shurta", aliases: ["Guard Shurta", "no save"], note: "No save rolls. Attacks can hit friendlies in the way.", refs: [{ book: "core", pages: "73" }] },
    { term: "Muhtasib Sapper", aliases: ["Sapper", "CQB Muhtasib"], note: "CQB with an S-Vest and door opening.", refs: [{ book: "phaseline", pages: "33" }] },
    { term: "Shurta PKM Gunner", aliases: ["Shurta gunner", "PKM"], note: "Three attacks, five with an assistant. Save penalty on hits.", refs: [{ book: "phaseline", pages: "36" }] },
    { term: "Assistant PKM Gunner", aliases: ["Shurta assistant", "assistant gunner"], note: "Pairs with a PKM Gunner for more attacks.", refs: [{ book: "phaseline", pages: "37" }] },

    // ---- Units: SPEAR ----
    { term: "Systems Operator (SPEAR)", aliases: ["SPEAR Sysop", "Cognitive Jammers", "quadrotors"], note: "Two Quadrotor cards. Calls Fires on a friend's line of sight.", refs: [{ book: "spearhead", pages: "74" }] },
    { term: "SPEAR Marksman", aliases: ["Marksman"], note: "Two Direct Fire activations. Smaller Immediate Action penalty.", refs: [{ book: "spearhead", pages: "75" }] },
    { term: "SPEAR Assaulter", aliases: ["Assaulter"], note: "Breaches doors and throws frags.", refs: [{ book: "spearhead", pages: "76" }] }
  ]
};
