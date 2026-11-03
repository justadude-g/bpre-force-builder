/*
 * Introduction page content.
 *
 * A short orientation for people who have never played: what the game is,
 * what the war is about, and how a game runs. Written in plain English as a
 * summary, not a copy of the rulebook.
 *
 *   lead       one or two sentences under the page title
 *   sections   shown in order. Each has:
 *                id, title, kicker (optional)
 *                paras   paragraphs of text (optional)
 *                items   [{ term, text }] shown as a list of definitions (optional)
 *                steps   [{ title, text, items? }] shown as numbered steps (optional)
 *                blocs   true to show the two sides with their factions (optional)
 *                next    [{ view, label, text }] buttons to other pages (optional)
 *   factions   one line per faction id, used by the blocs section
 *
 * Run `node tools/validate-data.mjs` after editing.
 */
window.BPRE_INTRO = {
  lead: "Black Powder Red Earth (BPRE) is a tabletop skirmish game of night raids and close-quarters fighting. This page covers what the game is, who is fighting and why, and how a game plays out. It takes about five minutes to read.",

  sections: [
    {
      id: "game",
      title: "What the game is",
      kicker: "Small teams, one model at a time",
      paras: [
        "You command a kill team: a handful of models up to a few dozen, each one a single warfighter on a 1\" base. Two players fight over a built-up battlespace of rooms, doors, stairwells and low cover, usually at night.",
        "Players take turns activating one model at a time, so nobody waits while the other player moves everything. Whatever you do, your opponent gets to answer.",
        "There are no hit points. A hit either kills the target or, if its card gives it a save roll, gives it a chance to survive staggered. Models are fragile, so cover, doors and line of sight matter more than numbers."
      ],
      items: [
        { term: "Rulebooks", text: "The Core Rules, plus Phase Line and Spearhead for the bigger games. This site is a helper. It does not replace the books." },
        { term: "Models", text: "Single models on 1\" bases. Each faction's unit list is on the Factions page." },
        { term: "Dice", text: "Ten-sided dice (D10). You need at least two, and a handful is easier." },
        { term: "Measuring", text: "An inch ruler or tape, and the Radial Effect Template for grenade and blast areas." },
        { term: "Chits and cards", text: "ACT chits, Frag chits, a turn counter and Tactical Exploitation tokens, plus the unit, Intervention, Fires, Tasking, Atmospherics and Battlespace cards." }
      ]
    },

    {
      id: "conflict",
      title: "The conflict",
      kicker: "A proxy war over a border and what is under it",
      paras: [
        "The setting is 2027, on the border between Qasra and Awbari in North Africa. Qasra was a military dictatorship friendly to NATO until the 2012 elections put an Islamist party in power. Deep in debt to China, it gave its infrastructure contracts to Hongbin Energy, a Chinese-backed resource company with its own private security arm.",
        "The prize is lithium and rare earth metals worth trillions, in the territory next door. Awbari is already fighting a civil war that Qasra feeds by backing extremist groups, and the people who want the minerals have every reason to keep it going.",
        "Standing in the way is Cold Harbor, a Western private military contractor. Its Crisis Troop Scorch teams hunt extremists who cross the border, and work alongside Awbari's own strike unit, Nitto. Cold Harbor is paid in mineral rights for every extremist it kills.",
        "In November 2027 a coup in western Awbari sets off a Qasran invasion. The fighting centers on the Jadid Salient, a contested city and its surroundings, where contractors, corporate mercenaries and a jihadist network are all working inside the same few square kilometers."
      ],
      blocs: true
    },

    {
      id: "play",
      title: "How a game is played",
      kicker: "From setup to the last turn",
      steps: [
        {
          title: "Pick a mission and a map",
          text: "Draw a Tasking card (the mission and its points limit) and a Battlespace card (the map). An Atmospherics card adds weather. One player is the Assaulter and the other is the Defender. The Defender sets which doors start open."
        },
        {
          title: "Build your kill team",
          text: "Spend Capability Points (CP) on units, up to the limit on the Tasking card. A standard Night Raid tasking is 150 CP. Then choose a hand of three different Intervention cards. The Build tab does this for you and checks the limits."
        },
        {
          title: "Deploy",
          text: "Place your units in your setup zone. The Defender can hold back some points as a Quick Reaction Force that arrives later in the game."
        },
        {
          title: "Play turns",
          text: "Each turn has four phases. In the first three, players alternate activating one unit at a time, starting with the Assaulter, until every unit has acted or both players pass. A unit that acts takes an ACT chit and cannot act again that turn.",
          items: [
            { term: "1. Direct Fire", text: "Units stand still and shoot, at +1 to every die. Grenades are thrown and land as Frag chits." },
            { term: "2. Maneuver", text: "Units move and can shoot as they go. An opponent who sees a unit move into its line of sight can take a quick Immediate Action shot first, at a penalty." },
            { term: "3. Finishing", text: "Frag chits detonate, then units within 3\" of an enemy finish the fight." },
            { term: "4. Cleanup", text: "Remove the ACT chits, stand staggered units back up and advance the turn counter." }
          ]
        },
        {
          title: "Shoot",
          text: "Roll 2D10 and compare the total with the attack line on the unit card. The card shows the number you need in direct sight and in obstructed sight (through cover). A hit kills the target, unless it has a save roll. Pass the save and the unit is only staggered: it lies on its side and cannot act until the turn ends. Fail it and the unit is removed. An attack total of 20 or more is a headshot and kills with no save."
        },
        {
          title: "Win",
          text: "Each Tasking has its own win condition, such as holding a building. The Operation ends when someone wins or when the turn counter runs out (after turn 7 in a Night Raid)."
        }
      ]
    },

    {
      id: "cards",
      title: "Cards that change a fight",
      kicker: "Your hand and your support",
      items: [
        { term: "Intervention cards", text: "Single-use tricks you hold in your hand and play at the right moment. You choose three before the game." },
        { term: "Fires cards", text: "Drone and artillery strikes. Some units add them to your hand when they deploy, and units such as the Advisor can call them down on a point they can see (the Glint ability)." },
        { term: "Special Intervention cards", text: "Stronger single-use cards, earned by winning an Operation in a Night Raid." }
      ]
    },

    {
      id: "types",
      title: "Three ways to play",
      kicker: "Same rules, different scale",
      items: [
        { term: "Night Raid", text: "The core game. Kill teams of around 150 CP fight an Operation of up to 7 turns." },
        { term: "Phase Line", text: "A bigger game on a 52\" by 26\" battlespace over 14 turns. The Assaulter pushes through two phase lines toward a target building while the Defender counterattacks. Each side starts with 200 CP and gets 150 CP more at each phase line." },
        { term: "Spearhead", text: "Taskings on a 39\" by 26\" battlespace over 10 turns, played at 200 or 350 CP. Most have a main objective and a second objective, such as a Command Net, that changes how the fight plays. Spearhead also has a campaign that links battles along a shifting front." }
      ]
    },

    {
      id: "terms",
      title: "Words you will see",
      kicker: "A short glossary",
      items: [
        { term: "Unit", text: "One model. Your friendly units are on your side, opponent units are on the other." },
        { term: "Kill team", text: "Your force: all the units you bring." },
        { term: "Capability Points (CP)", text: "What units cost. The Tasking card sets how many you can spend." },
        { term: "Tasking", text: "The mission, with its setup, points limit and win condition." },
        { term: "Battlespace", text: "The map you play on." },
        { term: "Line of sight (LOS)", text: "Whether a unit can see another. Direct is a clear line. Obstructed passes through waist-high cover and makes the shot harder." },
        { term: "Staggered", text: "Knocked down but alive. Cannot act and fails every save until the turn ends." },
        { term: "ACT chit", text: "Marks a unit that has acted." },
        { term: "Immediate Action", text: "A quick shot at a moving enemy that comes into your line of sight." },
        { term: "Frag chit", text: "Marks a thrown grenade. It explodes in the Finishing Phase." }
      ]
    },

    {
      id: "next",
      title: "Where to go next",
      kicker: "Your first game",
      paras: [
        "For a first game, each player picks a Core Set starter force, so you are both fielding 150 CP and learning the same rules. Keep the Quick reference open for the turn sequence, and use the Rules index to find the page in the book when a rule comes up."
      ],
      next: [
        { view: "starters", label: "Starter forces", text: "Ready-made forces for every faction." },
        { view: "build", label: "Build a force", text: "Pick a faction and spend your points." },
        { view: "reference", label: "Quick reference", text: "The turn sequence and core rules on one page." },
        { view: "rules", label: "Rules index", text: "Find which book and page a rule is on." },
        { view: "factions", label: "Factions", text: "Who is who, with every unit and its cost." }
      ]
    }
  ],

  factions: {
    cts: "Small elite teams. Cheap Assaulters and fast Recces, with specialists such as the Advisor who calls in Scoria RS strikes.",
    nitto: "Fast commandos and drone operators who move 8\". Can fight alone or alongside Scorch.",
    hongbin: "Mercenaries. Cheap Mercs, plus Enablers who bring FengHuang-918 drone strikes, and PKM machine guns.",
    aayari: "A swarm. Muhtasib in suicide vests and crowds of cheap Shurta who get no save roll.",
    spear: "Qasran special forces with jammers and Quadrotor drones, backed by Marksmen and Assaulters."
  }
};
