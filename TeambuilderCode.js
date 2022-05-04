const mons = `
{
    "Cubzero": {
        "id": 1,
        "Type": "Ice",
        "BST": {
            "HP": 90,
            "Atk": 131,
            "Def": 109,
            "SpA": 98,
            "SpD": 119,
            "Spe": 88,
            "SP": 34
        },
        "Traits": [
            "Stoic",
            "Sharp Claws",
            "Clumsy Power",
            "Nimble"
        ],
        "Skills": [
            "Scratch",
            "Cute Pose",
            "Frost Chomp",
            "Static Fur",
            "Beat Up",
            "Splash",
            "Snowball",
            "Revenge",
            "Glacier",
            "Inner Peace",
            "Frigid Barrier",
            "Avalanche",
            "Beserk",
            "Deep Cut",
            "Disable Skill",
            "Drain",
            "Epiphany",
            "Feint Spurts",
            "Icy Flurry",
            "Monsoon",
            "Phantom Spike",
            "Poison Chomp",
            "Precision Eye",
            "Quicksand",
            "Scream",
            "Smackdown",
            "Snowfall",
            "Super Drain",
            "Slush"
        ]
    },
    "Aroara": {
        "id": 2,
        "Type": "Ice",
        "BST": {
            "HP": 121,
            "Atk": 172,
            "Def": 140,
            "SpA": 129,
            "SpD": 148,
            "Spe": 119,
            "SP": 34
        },
        "Traits": [
            "Stoic",
            "Sharp Claws",
            "Clumsy Power",
            "Nimble"
        ],
        "Skills": [
            "Scratch",
            "Cute Pose",
            "Frost Chomp",
            "Static Fur",
            "Beat Up",
            "Splash",
            "Snowball",
            "Revenge",
            "Glacier",
            "Inner Peace",
            "Frigid Barrier",
            "Avalanche",
            "Beserk",
            "Deep Cut",
            "Dirty Snow",
            "Disable Skill",
            "Drain",
            "Epiphany",
            "Feint Spurts",
            "Icy Flurry",
            "Monsoon",
            "Phantom Spike",
            "Poison Chomp",
            "Precision Eye",
            "Precision Punch",
            "Quicksand",
            "Scream",
            "Smackdown",
            "Snowfall",
            "Splatter",
            "Stone Fist",
            "Super Drain",
            "Slush"
        ]
    },
    "Bearealis": {
        "id": 3,
        "Type": "Ice",
        "BST": {
            "HP": 162,
            "Atk": 203,
            "Def": 181,
            "SpA": 170,
            "SpD": 179,
            "Spe": 158,
            "SP": 34
        },
        "Traits": [
            "Stoic",
            "Sharp Claws",
            "Clumsy Power",
            "Nimble"
        ],
        "Skills": [
            "Scratch",
            "Cute Pose",
            "Frost Chomp",
            "Static Fur",
            "Beat Up",
            "Splash",
            "Snowball",
            "Revenge",
            "Glacier",
            "Inner Peace",
            "Frigid Barrier",
            "Avalanche",
            "Beserk",
            "Deep Cut",
            "Dirty Snow",
            "Disable Skill",
            "Drain",
            "Epiphany",
            "Feint Spurts",
            "Icy Flurry",
            "Monsoon",
            "Phantom Spike",
            "Poison Chomp",
            "Precision Eye",
            "Precision Punch",
            "Quicksand",
            "Scream",
            "Smackdown",
            "Snowfall",
            "Splatter",
            "Stone Fist",
            "Super Drain",
            "Slush"
        ]
    },
    "Toruga": {
        "id": 4,
        "Type": "Fire",
        "BST": {
            "HP": 80,
            "Atk": 99,
            "Def": 90,
            "SpA": 121,
            "SpD": 102,
            "Spe": 132,
            "SP": 34
        },
        "Traits": [
            "Vegetarian",
            "Thick Skin",
            "Steam Layer",
            "Gourmand"
        ],
        "Skills": [
            "Slam",
            "Cute Pose",
            "Cinder",
            "Ignite",
            "Flaming Tackle",
            "Boulder Barrage",
            "Smokescreen",
            "Seismic Wave",
            "Fire Up",
            "Firestorm",
            "Body Blast",
            "Heatwave",
            "Scream",
            "Deep Cut",
            "Phantom Spike",
            "Feint Bursts",
            "Detonate",
            "Disable Heal",
            "Inner Peace",
            "Concentrate",
            "Agility Training",
            "Precision Eye",
            "Rage",
            "Crunch",
            "Last Stand",
            "Poison Chomp",
            "Fiery Breath"
        ]
    },
    "Embaval": {
        "id": 5,
        "Type": "Fire",
        "BST": {
            "HP": 121,
            "Atk": 122,
            "Def": 119,
            "SpA": 162,
            "SpD": 128,
            "Spe": 161,
            "SP": 34
        },
        "Traits": [
            "Vegetarian",
            "Thick Skin",
            "Steam Layer",
            "Gourmand"
        ],
        "Skills": [
            "Slam",
            "Cute Pose",
            "Cinder",
            "Ignite",
            "Flaming Tackle",
            "Boulder Barrage",
            "Smokescreen",
            "Seismic Wave",
            "Fire Up",
            "Firestorm",
            "Body Blast",
            "Heatwave",
            "Epiphany",
            "Scream",
            "Disable",
            "Deep Cut",
            "Phantom Spike",
            "Feint Bursts",
            "Detonate",
            "Disable Heal",
            "Inner Peace",
            "Concentrate",
            "Agility Training",
            "Precision Eye",
            "Rage",
            "Crunch",
            "Last Stand",
            "Poison Chomp",
            "Berserk",
            "Fiery Breath"
        ]
    },
    "Volcadon": {
        "id": 6,
        "Type": "Fire",
        "BST": {
            "HP": 159,
            "Atk": 180,
            "Def": 145,
            "SpA": 236,
            "SpD": 161,
            "Spe": 199,
            "SP": 34
        },
        "Traits": [
            "Vegetarian",
            "Thick Skin",
            "Steam Layer",
            "Gourmand"
        ],
        "Skills": [
            "Slam",
            "Cute Pose",
            "Cinder",
            "Ignite",
            "Flaming Tackle",
            "Boulder Barrage",
            "Smokescreen",
            "Seismic Wave",
            "Fire Up",
            "Firestorm",
            "Body Blast",
            "Heatwave",
            "Epiphany",
            "Scream",
            "Disable",
            "Deep Cut",
            "Phantom Spike",
            "Feint Bursts",
            "Detonate",
            "Disable Heal",
            "Inner Peace",
            "Concentrate",
            "Agility Training",
            "Precision Eye",
            "Rage",
            "Crunch",
            "Last Stand",
            "Poison Chomp",
            "Berserk",
            "Fiery Breath"
        ]
    },
    "Nibblegar": {
        "id": 7,
        "Type": "Water",
        "BST": {
            "HP": 89,
            "Atk": 89,
            "Def": 131,
            "SpA": 98,
            "SpD": 132,
            "Spe": 91,
            "SP": 34
        },
        "Traits": [
            "Vigilant",
            "Supersensory",
            "Fully Rested",
            "Wet Coat"
        ],
        "Skills": [
            "Chomp",
            "Mighty Roar",
            "Bubble Burst",
            "Streamline",
            "Feint Spurts",
            "Splash",
            "Power Nap",
            "Crunch",
            "Monsoon",
            "Bubble Blower",
            "Headcrash",
            "Crushing Waterfall",
            "Scream",
            "Slush",
            "Zen Cure",
            "Deep Cut",
            "Phantom Spike",
            "Disable Trait",
            "Disable Heal",
            "Inner Peace",
            "Smokescreen",
            "Quicksand",
            "Concentrate",
            "Agility Training",
            "Snowfall",
            "Precision Eye",
            "Rage",
            "Last Stand",
            "Poison Chomp",
            "Geyser",
            "Time Warp"
        ]
    },
    "Sheartooth": {
        "id": 8,
        "Type": "Water",
        "BST": {
            "HP": 118,
            "Atk": 126,
            "Def": 162,
            "SpA": 130,
            "SpD": 160,
            "Spe": 116,
            "SP": 34
        },
        "Traits": [
            "Vigilant",
            "Supersensory",
            "Fully Rested",
            "Wet Coat"
        ],
        "Skills": [
            "Chomp",
            "Mighty Roar",
            "Bubble Burst",
            "Streamline",
            "Feint Spurts",
            "Splash",
            "Power Nap",
            "Crunch",
            "Monsoon",
            "Bubble Blower",
            "Headcrash",
            "Crushing Waterfall",
            "Scream",
            "Slush",
            "Zen Cure",
            "Deep Cut",
            "Phantom Spike",
            "Disable Trait",
            "Disable Heal",
            "Inner Peace",
            "Smokescreen",
            "Quicksand",
            "Concentrate",
            "Agility Training",
            "Snowfall",
            "Precision Eye",
            "Rage",
            "Last Stand",
            "Poison Chomp",
            "Geyser",
            "Time Warp"
        ]
    },
    "Megalobite": {
        "id": 9,
        "Type": "Water",
        "BST": {
            "HP": 158,
            "Atk": 166,
            "Def": 204,
            "SpA": 168,
            "SpD": 214,
            "Spe": 156,
            "SP": 34
        },
        "Traits": [
            "Vigilant",
            "Supersensory",
            "Fully Rested",
            "Wet Coat"
        ],
        "Skills": [
            "Chomp",
            "Mighty Roar",
            "Bubble Burst",
            "Streamline",
            "Feint Spurts",
            "Splash",
            "Power Nap",
            "Crunch",
            "Monsoon",
            "Bubble Blower",
            "Headcrash",
            "Crushing Waterfall",
            "Scream",
            "Slush",
            "Zen Cure",
            "Deep Cut",
            "Phantom Spike",
            "Dirty Snow",
            "Disable Trait",
            "Disable Heal",
            "Inner Peace",
            "Flying Kick",
            "Smokescreen",
            "Beat Up",
            "Quicksand",
            "Concentrate",
            "Sumo Stance",
            "Agility Training",
            "Splatter",
            "Stone Fist",
            "Snowfall",
            "Precision Eye",
            "Precision Punch",
            "Rage",
            "Last Stand",
            "Poison Chomp",
            "Smackdown",
            "Geyser",
            "Time Warp"
        ]
    },
    "Swurmy": {
        "id": 10,
        "Type": "Normal",
        "BST": {
            "HP": 81,
            "Atk": 67,
            "Def": 58,
            "SpA": 36,
            "SpD": 36,
            "Spe": 98,
            "SP": 34
        },
        "Traits": [
            "Strategist",
            "Slippery",
            "Inner Fire",
            "Antidote"
        ],
        "Skills": [
            "Slam",
            "Rage",
            "Venomous Bees",
            "Double Sting",
            "Wind Blast",
            "Feelers",
            "Super Drain",
            "Precision Eye",
            "Transcending",
            "Sandman",
            "Distract",
            "Tactical Slam",
            "Inspect Scent",
            "Zen Cure",
            "All In",
            "Drain",
            "Glass Cannon",
            "Concentrate",
            "Agility Training",
            "Last Stand"
        ]
    },
    "Beezel": {
        "id": 11,
        "Type": "Normal",
        "BST": {
            "HP": 102,
            "Atk": 161,
            "Def": 71,
            "SpA": 62,
            "SpD": 98,
            "Spe": 141,
            "SP": 34
        },
        "Traits": [
            "Strategist",
            "Slippery",
            "Inner Fire",
            "Antidote"
        ],
        "Skills": [
            "Slam",
            "Rage",
            "Venomous Bees",
            "Double Sting",
            "Wind Blast",
            "Feelers",
            "Super Drain",
            "Precision Eye",
            "Transcending",
            "Sandman",
            "Distract",
            "Tactical Slam",
            "Inspect Scent",
            "Epiphany",
            "Zen Cure",
            "Disable",
            "Whoosh",
            "All In",
            "Drain",
            "Glass Cannon",
            "Clearing Wind",
            "Concentrate",
            "Agility Training",
            "Tempest",
            "Last Stand",
            "Berserk"
        ]
    },
    "Humbee": {
        "id": 12,
        "Type": "Normal",
        "BST": {
            "HP": 143,
            "Atk": 247,
            "Def": 91,
            "SpA": 89,
            "SpD": 174,
            "Spe": 185,
            "SP": 34
        },
        "Traits": [
            "Strategist",
            "Slippery",
            "Inner Fire",
            "Antidote"
        ],
        "Skills": [
            "Slam",
            "Rage",
            "Venomous Bees",
            "Double Sting",
            "Wind Blast",
            "Feelers",
            "Super Drain",
            "Precision Eye",
            "Transcending",
            "Sandman",
            "Distract",
            "Tactical Slam",
            "Inspect Scent",
            "Epiphany",
            "Zen Cure",
            "Disable",
            "Whoosh",
            "All In",
            "Drain",
            "Glass Cannon",
            "Clearing Wind",
            "Concentrate",
            "Agility Training",
            "Tempest",
            "Last Stand",
            "Berserk"
        ]
    },
    "Silquill": {
        "id": 13,
        "Type": "Normal",
        "BST": {
            "HP": 78,
            "Atk": 91,
            "Def": 79,
            "SpA": 56,
            "SpD": 71,
            "Spe": 110,
            "SP": 34
        },
        "Traits": [
            "Pep Talk",
            "Escapist",
            "Robber",
            "Weatherproof"
        ],
        "Skills": [
            "Claw",
            "Pocket Sand",
            "Fast Strike",
            "Coin Snatch",
            "Wind Blast",
            "Peck",
            "Agility Training",
            "Feather Fury",
            "Distract",
            "Whoosh",
            "Tempest",
            "Lacerate",
            "Tactical Slam",
            "EMP",
            "Inspect Scent",
            "Epiphany",
            "Scream",
            "Zen Cure",
            "Disable",
            "Deep Cut",
            "Phantom Spike",
            "Disable Heal",
            "Inner Peace",
            "All In",
            "Glass Cannon",
            "Clearing Wind",
            "Concentrate",
            "Precision Eye",
            "Rage",
            "Last Stand",
            "Berserk",
            "Scary Vision"
        ]
    },
    "Gildwing": {
        "id": 14,
        "Type": "Normal",
        "BST": {
            "HP": 124,
            "Atk": 128,
            "Def": 112,
            "SpA": 79,
            "SpD": 98,
            "Spe": 152,
            "SP": 34
        },
        "Traits": [
            "Pep Talk",
            "Escapist",
            "Robber",
            "Weatherproof"
        ],
        "Skills": [
            "Claw",
            "Pocket Sand",
            "Fast Strike",
            "Coin Snatch",
            "Wind Blast",
            "Peck",
            "Agility Training",
            "Feather Fury",
            "Distract",
            "Whoosh",
            "Tempest",
            "Lacerate",
            "Tactical Slam",
            "EMP",
            "Inspect Scent",
            "Epiphany",
            "Scream",
            "Zen Cure",
            "Disable",
            "Deep Cut",
            "Phantom Spike",
            "Disable Heal",
            "Inner Peace",
            "All In",
            "Glass Cannon",
            "Clearing Wind",
            "Concentrate",
            "Precision Eye",
            "Rage",
            "Last Stand",
            "Berserk",
            "Scary Vision"
        ]
    },
    "Golbeak": {
        "id": 15,
        "Type": "Normal",
        "BST": {
            "HP": 172,
            "Atk": 162,
            "Def": 148,
            "SpA": 161,
            "SpD": 142,
            "Spe": 208,
            "SP": 34
        },
        "Traits": [
            "Pep Talk",
            "Escapist",
            "Robber",
            "Weatherproof"
        ],
        "Skills": [
            "Claw",
            "Pocket Sand",
            "Fast Strike",
            "Coin Snatch",
            "Wind Blast",
            "Peck",
            "Agility Training",
            "Feather Fury",
            "Distract",
            "Whoosh",
            "Tempest",
            "Lacerate",
            "Tactical Slam",
            "EMP",
            "Inspect Scent",
            "Epiphany",
            "Scream",
            "Zen Cure",
            "Disable",
            "Deep Cut",
            "Phantom Spike",
            "Disable Heal",
            "Inner Peace",
            "All In",
            "Glass Cannon",
            "Clearing Wind",
            "Concentrate",
            "Precision Eye",
            "Rage",
            "Last Stand",
            "Berserk",
            "Scary Vision"
        ]
    },
    "Slitherpin": {
        "id": 16,
        "Type": "Normal",
        "BST": {
            "HP": 81,
            "Atk": 132,
            "Def": 88,
            "SpA": 90,
            "SpD": 124,
            "Spe": 124,
            "SP": 34
        },
        "Traits": [
            "Reconstitution",
            "Good Aim",
            "Molter",
            "Spiked Body"
        ],
        "Skills": [
            "Poison Sting",
            "Drain",
            "Toughen Up",
            "Constrict",
            "Acid Bite",
            "Epiphany",
            "Super Drain",
            "Poison Chomp",
            "Disable Heal",
            "Headcrash",
            "Super Energy Drain",
            "Distract",
            "Tactical Slam",
            "Inspect Scent",
            "Zen Cure",
            "Disable Trait",
            "All In",
            "Glass Cannon",
            "Smokescreen",
            "Concentrate",
            "Agility Training",
            "Rage",
            "Crunch",
            "Last Stand"
        ]
    },
    "Serpike": {
        "id": 17,
        "Type": "Normal",
        "BST": {
            "HP": 142,
            "Atk": 213,
            "Def": 153,
            "SpA": 139,
            "SpD": 188,
            "Spe": 188,
            "SP": 34
        },
        "Traits": [
            "Reconstitution",
            "Good Aim",
            "Molter",
            "Spiked Body"
        ],
        "Skills": [
            "Poison Sting",
            "Drain",
            "Toughen Up",
            "Constrict",
            "Acid Bite",
            "Epiphany",
            "Super Drain",
            "Poison Chomp",
            "Disable Heal",
            "Headcrash",
            "Super Energy Drain",
            "Distract",
            "Tactical Slam",
            "Inspect Scent",
            "Zen Cure",
            "Disable Trait",
            "All In",
            "Glass Cannon",
            "Smokescreen",
            "Concentrate",
            "Agility Training",
            "Rage",
            "Crunch",
            "Last Stand"
        ]
    },
    "Houndos": {
        "id": 18,
        "Type": "Electric",
        "BST": {
            "HP": 92,
            "Atk": 119,
            "Def": 59,
            "SpA": 161,
            "SpD": 97,
            "Spe": 132,
            "SP": 34
        },
        "Traits": [
            "Menacing",
            "Coward",
            "Brave"
        ],
        "Skills": [
            "Chomp",
            "Mighty Roar",
            "Fast Strike",
            "Volt Lick",
            "Scary Vision",
            "Multi Bolt",
            "Electrify",
            "Crunch",
            "Power Talons",
            "Spark Disc",
            "Ball of Darkness",
            "EMP",
            "Scream",
            "Zen Cure",
            "Taser",
            "Deep Cut",
            "Phantom Spike",
            "Cute Pose",
            "Disable Trait",
            "Bolt Bomb",
            "Disable Heal",
            "Shared Fate",
            "Lightning Strike",
            "Inner Peace",
            "Smokescreen",
            "Concentrate",
            "Agility Training",
            "Precision Eye",
            "Rage",
            "Last Stand",
            "Poison Chomp",
            "Desert Winds"
        ]
    },
    "Hountrion": {
        "id": 19,
        "Type": "Electric",
        "BST": {
            "HP": 167,
            "Atk": 218,
            "Def": 107,
            "SpA": 230,
            "SpD": 148,
            "Spe": 197,
            "SP": 34
        },
        "Traits": [
            "Menacing",
            "Coward",
            "Brave"
        ],
        "Skills": [
            "Chomp",
            "Mighty Roar",
            "Fast Strike",
            "Volt Lick",
            "Scary Vision",
            "Multi Bolt",
            "Electrify",
            "Crunch",
            "Power Talons",
            "Spark Disc",
            "Ball of Darkness",
            "EMP",
            "Scream",
            "Zen Cure",
            "Taser",
            "Deep Cut",
            "Phantom Spike",
            "Cute Pose",
            "Disable Trait",
            "Bolt Bomb",
            "Disable Heal",
            "Shared Fate",
            "Lightning Strike",
            "Inner Peace",
            "Smokescreen",
            "Concentrate",
            "Agility Training",
            "Precision Eye",
            "Rage",
            "Last Stand",
            "Poison Chomp",
            "Desert Winds"
        ]
    },
    "Armado": {
        "id": 20,
        "Type": "Normal",
        "BST": {
            "HP": 68,
            "Atk": 161,
            "Def": 203,
            "SpA": 59,
            "SpD": 51,
            "Spe": 59,
            "SP": 34
        },
        "Traits": [
            "Hoarder",
            "Thick Skin",
            "Vaccinated"
        ],
        "Skills": [
            "Scratch",
            "Concentrate",
            "Inspect Scent",
            "Deep Cut",
            "Tactical Slam",
            "Double Slash",
            "Berserk",
            "Distract",
            "Body Blast",
            "Rage",
            "Last Stand",
            "Epiphany",
            "Scream",
            "Zen Cure",
            "Disable",
            "Phantom Spike",
            "Cute Pose",
            "All In",
            "Glass Cannon",
            "Agility Training",
            "Precision Eye"
        ]
    },
    "Armadil": {
        "id": 21,
        "Type": "Normal",
        "BST": {
            "HP": 126,
            "Atk": 197,
            "Def": 234,
            "SpA": 88,
            "SpD": 67,
            "Spe": 82,
            "SP": 34
        },
        "Traits": [
            "Hoarder",
            "Thick Skin",
            "Vaccinated"
        ],
        "Skills": [
            "Scratch",
            "Concentrate",
            "Inspect Scent",
            "Deep Cut",
            "Tactical Slam",
            "Double Slash",
            "Berserk",
            "Distract",
            "Body Blast",
            "Rage",
            "Last Stand",
            "Epiphany",
            "Scream",
            "Zen Cure",
            "Disable",
            "Phantom Spike",
            "Dirty Snow",
            "Cute Pose",
            "All In",
            "Glass Cannon",
            "Beat Up",
            "Agility Training",
            "Splatter",
            "Stone Fist",
            "Precision Eye",
            "Precision Punch",
            "Smackdown"
        ]
    },
    "Armadon": {
        "id": 22,
        "Type": "Normal",
        "BST": {
            "HP": 168,
            "Atk": 246,
            "Def": 266,
            "SpA": 112,
            "SpD": 129,
            "Spe": 88,
            "SP": 34
        },
        "Traits": [
            "Hoarder",
            "Thick Skin",
            "Vaccinated"
        ],
        "Skills": [
            "Scratch",
            "Concentrate",
            "Inspect Scent",
            "Deep Cut",
            "Tactical Slam",
            "Double Slash",
            "Berserk",
            "Distract",
            "Body Blast",
            "Rage",
            "Last Stand",
            "Epiphany",
            "Scream",
            "Zen Cure",
            "Disable",
            "Phantom Spike",
            "Dirty Snow",
            "Cute Pose",
            "All In",
            "Glass Cannon",
            "Beat Up",
            "Agility Training",
            "Splatter",
            "Stone Fist",
            "Precision Eye",
            "Precision Punch",
            "Smackdown"
        ]
    },
    "Sanscale": {
        "id": 23,
        "Type": "Sand",
        "BST": {
            "HP": 121,
            "Atk": 143,
            "Def": 121,
            "SpA": 108,
            "SpD": 102,
            "Spe": 127,
            "SP": 34
        },
        "Traits": [
            "Thick Skin",
            "Menacing",
            "Dirt Coat"
        ],
        "Skills": [
            "Chomp",
            "Toughen Up",
            "Pocket Sand",
            "Mud Ball",
            "Revenge Jaws",
            "Desert Winds",
            "Seismic Wave",
            "Crunch",
            "Ignore Pain",
            "Meteor Shower",
            "Inner Peace",
            "Epiphany",
            "Scream",
            "Taser",
            "Disable",
            "Deep Cut",
            "Phantom Spike",
            "Disable Trait",
            "Sandspout",
            "Smokescreen",
            "Quicksand",
            "Concentrate",
            "Agility Training",
            "Precision Eye",
            "Rage",
            "Last Stand",
            "Berserk",
            "Reconstruct"
        ]
    },
    "Caradune": {
        "id": 24,
        "Type": "Sand",
        "BST": {
            "HP": 162,
            "Atk": 206,
            "Def": 162,
            "SpA": 183,
            "SpD": 138,
            "Spe": 162,
            "SP": 34
        },
        "Traits": [
            "Thick Skin",
            "Menacing",
            "Dirt Coat"
        ],
        "Skills": [
            "Chomp",
            "Toughen Up",
            "Pocket Sand",
            "Mud Ball",
            "Revenge Jaws",
            "Desert Winds",
            "Seismic Wave",
            "Crunch",
            "Ignore Pain",
            "Meteor Shower",
            "Inner Peace",
            "Epiphany",
            "Scream",
            "Taser",
            "Disable",
            "Deep Cut",
            "Phantom Spike",
            "Disable Trait",
            "Sandspout",
            "Smokescreen",
            "Quicksand",
            "Concentrate",
            "Agility Training",
            "Precision Eye",
            "Rage",
            "Last Stand",
            "Berserk",
            "Reconstruct"
        ]
    },
    "Bittybolt": {
        "id": 25,
        "Type": "Electric",
        "BST": {
            "HP": 80,
            "Atk": 68,
            "Def": 144,
            "SpA": 102,
            "SpD": 105,
            "Spe": 132,
            "SP": 34
        },
        "Traits": [
            "Zealous",
            "Scrapper",
            "Fast Learner"
        ],
        "Skills": [
            "Chomp",
            "Cute Pose",
            "Quad Volt",
            "Static Fur",
            "Bolt Bomb",
            "Revenge Jaws",
            "Multi Bolt",
            "Mighty Roar",
            "Spark Disc",
            "Power Talons",
            "Power Nap",
            "Ball of Darkness",
            "EMP",
            "Scream",
            "Zen Cure",
            "Taser",
            "Deep Cut",
            "Phantom Spike",
            "Disable Trait",
            "Disable Heal",
            "Shared Fate",
            "Lightning Strike",
            "Inner Peace",
            "Smokescreen",
            "Concentrate",
            "Agility Training",
            "Precision Eye",
            "Rage",
            "Crunch",
            "Last Stand",
            "Poison Chomp",
            "Desert Winds",
            "Scary Vision",
            "Electrify"
        ]
    },
    "Toravolt": {
        "id": 26,
        "Type": "Electric",
        "BST": {
            "HP": 134,
            "Atk": 141,
            "Def": 172,
            "SpA": 226,
            "SpD": 168,
            "Spe": 174,
            "SP": 34
        },
        "Traits": [
            "Zealous",
            "Scrapper",
            "Fast Learner"
        ],
        "Skills": [
            "Chomp",
            "Cute Pose",
            "Quad Volt",
            "Static Fur",
            "Bolt Bomb",
            "Revenge Jaws",
            "Multi Bolt",
            "Mighty Roar",
            "Spark Disc",
            "Power Talons",
            "Power Nap",
            "Ball of Darkness",
            "EMP",
            "Scream",
            "Zen Cure",
            "Taser",
            "Deep Cut",
            "Phantom Spike",
            "Disable Trait",
            "Disable Heal",
            "Shared Fate",
            "Lightning Strike",
            "Inner Peace",
            "Smokescreen",
            "Concentrate",
            "Agility Training",
            "Precision Eye",
            "Rage",
            "Crunch",
            "Last Stand",
            "Poison Chomp",
            "Desert Winds",
            "Scary Vision",
            "Electrify"
        ]
    },
    "Bloby": {
        "id": 27,
        "Type": "Fire",
        "BST": {
            "HP": 129,
            "Atk": 129,
            "Def": 81,
            "SpA": 92,
            "SpD": 84,
            "Spe": 88,
            "SP": 34
        },
        "Traits": [
            "Flare Intake",
            "Gullible",
            "Radiator"
        ],
        "Skills": [
            "Slam",
            "Toughen Up",
            "Ignite",
            "Rage",
            "Feint Bursts",
            "Loose Cannon",
            "Lava Boulder",
            "Magma Punch",
            "Heatwave",
            "Smackdown",
            "Heat Beam",
            "Mist",
            "Epiphany",
            "Disable",
            "Dirty Snow",
            "Detonate",
            "Fire Up",
            "Beat Up",
            "Concentrate",
            "Agility Training",
            "Splatter",
            "Stone Fist",
            "Precision Eye",
            "Precision Punch",
            "Last Stand",
            "Berserk",
            "Fiery Breath",
            "Toxic Cloud"
        ]
    },
    "Molteye": {
        "id": 28,
        "Type": "Fire",
        "BST": {
            "HP": 177,
            "Atk": 188,
            "Def": 108,
            "SpA": 139,
            "SpD": 110,
            "Spe": 112,
            "SP": 34
        },
        "Traits": [
            "Flare Intake",
            "Gullible",
            "Radiator"
        ],
        "Skills": [
            "Slam",
            "Toughen Up",
            "Ignite",
            "Rage",
            "Feint Bursts",
            "Loose Cannon",
            "Lava Boulder",
            "Magma Punch",
            "Heatwave",
            "Smackdown",
            "Heat Beam",
            "Mist",
            "Epiphany",
            "Disable",
            "Dirty Snow",
            "Detonate",
            "Fire Up",
            "Beat Up",
            "Concentrate",
            "Agility Training",
            "Splatter",
            "Stone Fist",
            "Precision Eye",
            "Precision Punch",
            "Last Stand",
            "Berserk",
            "Fiery Breath",
            "Toxic Cloud"
        ]
    },
    "Ashclops": {
        "id": 29,
        "Type": "Fire",
        "BST": {
            "HP": 216,
            "Atk": 232,
            "Def": 122,
            "SpA": 194,
            "SpD": 124,
            "Spe": 132,
            "SP": 34
        },
        "Traits": [
            "Flare Intake",
            "Gullible",
            "Radiator"
        ],
        "Skills": [
            "Slam",
            "Toughen Up",
            "Ignite",
            "Rage",
            "Feint Bursts",
            "Loose Cannon",
            "Lava Boulder",
            "Magma Punch",
            "Heatwave",
            "Smackdown",
            "Heat Beam",
            "Mist",
            "Epiphany",
            "Disable",
            "Dirty Snow",
            "Detonate",
            "Fire Up",
            "Beat Up",
            "Concentrate",
            "Agility Training",
            "Splatter",
            "Stone Fist",
            "Precision Eye",
            "Precision Punch",
            "Last Stand",
            "Berserk",
            "Fiery Breath",
            "Toxic Cloud"
        ]
    },
    "Fiddly": {
        "id": 30,
        "Type": "Water",
        "BST": {
            "HP": 62,
            "Atk": 191,
            "Def": 159,
            "SpA": 52,
            "SpD": 48,
            "Spe": 102,
            "SP": 34
        },
        "Traits": [
            "Conserver",
            "Fully Rested",
            "Polished Body",
            "Humidifier"
        ],
        "Skills": [
            "Scratch",
            "Toughen Up",
            "Fury Pincer",
            "Feint Spurts",
            "Last Stand",
            "Splatter",
            "Epiphany",
            "Body Blast",
            "Bubble Blower",
            "Death Grip",
            "Headbash",
            "Zen Cure",
            "Disable",
            "Monsoon",
            "Splash",
            "Quicksand",
            "Concentrate",
            "Agility Training",
            "Snowfall",
            "Precision Eye",
            "Rage",
            "Berserk",
            "Geyser"
        ]
    },
    "Ucaclaw": {
        "id": 31,
        "Type": "Water",
        "BST": {
            "HP": 143,
            "Atk": 278,
            "Def": 245,
            "SpA": 128,
            "SpD": 104,
            "Spe": 148,
            "SP": 34
        },
        "Traits": [
            "Conserver",
            "Fully Rested",
            "Polished Body",
            "Humidifier"
        ],
        "Skills": [
            "Scratch",
            "Toughen Up",
            "Fury Pincer",
            "Feint Spurts",
            "Last Stand",
            "Splatter",
            "Epiphany",
            "Body Blast",
            "Bubble Blower",
            "Death Grip",
            "Headbash",
            "Slush",
            "Zen Cure",
            "Disable",
            "Monsoon",
            "Dirty Snow",
            "Splash",
            "Beat Up",
            "Quicksand",
            "Concentrate",
            "Agility Training",
            "Stone Fist",
            "Snowfall",
            "Precision Eye",
            "Precision Punch",
            "Rage",
            "Berserk",
            "Smackdown",
            "Geyser"
        ]
    },
    "Moffel": {
        "id": 32,
        "Type": "Sand",
        "BST": {
            "HP": 99,
            "Atk": 151,
            "Def": 68,
            "SpA": 142,
            "SpD": 61,
            "Spe": 80,
            "SP": 34
        },
        "Traits": [
            "Vigilant",
            "Escapist",
            "Lucky"
        ],
        "Skills": [
            "Scratch",
            "Sandball",
            "Coin Snatch",
            "Tail Spin",
            "Constrict",
            "Tricky Claws",
            "Concentrate",
            "Quicksand",
            "Seismic Wave",
            "Streamline",
            "Meteor Shower",
            "Death Grip",
            "Epiphany",
            "Scream",
            "Taser",
            "Disable",
            "Deep Cut",
            "Phantom Spike",
            "Disable Trait",
            "Sandspout",
            "Smokescreen",
            "Agility Training",
            "Precision Eye",
            "Rage",
            "Crunch",
            "Last Stand",
            "Poison Chomp",
            "Desert Winds",
            "Berserk",
            "Reconstruct"
        ]
    },
    "Digmow": {
        "id": 33,
        "Type": "Sand",
        "BST": {
            "HP": 128,
            "Atk": 172,
            "Def": 94,
            "SpA": 164,
            "SpD": 84,
            "Spe": 106,
            "SP": 34
        },
        "Traits": [
            "Vigilant",
            "Escapist",
            "Lucky"
        ],
        "Skills": [
            "Scratch",
            "Sandball",
            "Coin Snatch",
            "Tail Spin",
            "Constrict",
            "Tricky Claws",
            "Concentrate",
            "Quicksand",
            "Seismic Wave",
            "Streamline",
            "Meteor Shower",
            "Death Grip",
            "Epiphany",
            "Scream",
            "Taser",
            "Disable",
            "Deep Cut",
            "Phantom Spike",
            "Disable Trait",
            "Sandspout",
            "Smokescreen",
            "Agility Training",
            "Precision Eye",
            "Rage",
            "Crunch",
            "Last Stand",
            "Poison Chomp",
            "Desert Winds",
            "Berserk",
            "Reconstruct"
        ]
    },
    "Dugterra": {
        "id": 34,
        "Type": "Sand",
        "BST": {
            "HP": 158,
            "Atk": 230,
            "Def": 111,
            "SpA": 221,
            "SpD": 118,
            "Spe": 142,
            "SP": 34
        },
        "Traits": [
            "Vigilant",
            "Escapist",
            "Lucky"
        ],
        "Skills": [
            "Scratch",
            "Sandball",
            "Coin Snatch",
            "Tail Spin",
            "Constrict",
            "Tricky Claws",
            "Concentrate",
            "Quicksand",
            "Seismic Wave",
            "Streamline",
            "Meteor Shower",
            "Death Grip",
            "Epiphany",
            "Scream",
            "Taser",
            "Disable",
            "Deep Cut",
            "Phantom Spike",
            "Disable Trait",
            "Sandspout",
            "Smokescreen",
            "Agility Training",
            "Precision Eye",
            "Rage",
            "Crunch",
            "Last Stand",
            "Poison Chomp",
            "Desert Winds",
            "Berserk",
            "Reconstruct"
        ]
    },
    "Buzzlet": {
        "id": 35,
        "Type": "Electric",
        "BST": {
            "HP": 108,
            "Atk": 78,
            "Def": 79,
            "SpA": 132,
            "SpD": 91,
            "Spe": 67,
            "SP": 34
        },
        "Traits": [
            "Good Aim",
            "Static Body"
        ],
        "Skills": [
            "Slam",
            "Toughen Up",
            "Taser",
            "Lightning Strike",
            "Streamline",
            "Multi Bolt",
            "Body Blast",
            "Crackle Horn",
            "Thunder Salvo",
            "Stalagmites",
            "Bolt Bomb",
            "Ball of Darkness",
            "EMP",
            "Scream",
            "Zen Cure",
            "Deep Cut",
            "Phantom Spike",
            "Disable Heal",
            "Shared Fate",
            "Super Drain",
            "Inner Peace",
            "Drain",
            "Concentrate",
            "Agility Training",
            "Sandman",
            "Precision Eye",
            "Rage",
            "Crunch",
            "Last Stand",
            "Poison Chomp",
            "Desert Winds",
            "Scary Vision",
            "Electrify"
        ]
    },
    "Bazzer": {
        "id": 36,
        "Type": "Electric",
        "BST": {
            "HP": 142,
            "Atk": 110,
            "Def": 108,
            "SpA": 161,
            "SpD": 122,
            "Spe": 90,
            "SP": 34
        },
        "Traits": [
            "Good Aim",
            "Static Body"
        ],
        "Skills": [
            "Slam",
            "Toughen Up",
            "Taser",
            "Lightning Strike",
            "Streamline",
            "Multi Bolt",
            "Body Blast",
            "Crackle Horn",
            "Thunder Salvo",
            "Stalagmites",
            "Bolt Bomb",
            "Ball of Darkness",
            "EMP",
            "Scream",
            "Zen Cure",
            "Deep Cut",
            "Phantom Spike",
            "Disable Heal",
            "Shared Fate",
            "Super Drain",
            "Inner Peace",
            "Drain",
            "Concentrate",
            "Agility Training",
            "Sandman",
            "Precision Eye",
            "Rage",
            "Crunch",
            "Last Stand",
            "Poison Chomp",
            "Desert Winds",
            "Scary Vision",
            "Electrify"
        ]
    },
    "Rhynobuzz": {
        "id": 37,
        "Type": "Electric",
        "BST": {
            "HP": 181,
            "Atk": 172,
            "Def": 170,
            "SpA": 216,
            "SpD": 178,
            "Spe": 102,
            "SP": 34
        },
        "Traits": [
            "Good Aim",
            "Static Body"
        ],
        "Skills": [
            "Slam",
            "Toughen Up",
            "Taser",
            "Lightning Strike",
            "Streamline",
            "Multi Bolt",
            "Body Blast",
            "Crackle Horn",
            "Thunder Salvo",
            "Stalagmites",
            "Bolt Bomb",
            "Ball of Darkness",
            "EMP",
            "Scream",
            "Zen Cure",
            "Deep Cut",
            "Phantom Spike",
            "Disable Heal",
            "Shared Fate",
            "Super Drain",
            "Inner Peace",
            "Drain",
            "Concentrate",
            "Agility Training",
            "Sandman",
            "Precision Eye",
            "Rage",
            "Crunch",
            "Last Stand",
            "Poison Chomp",
            "Desert Winds",
            "Scary Vision",
            "Electrify"
        ]
    },
    "Lunarpup": {
        "id": 38,
        "Type": "Ghost",
        "BST": {
            "HP": 58,
            "Atk": 72,
            "Def": 60,
            "SpA": 181,
            "SpD": 72,
            "Spe": 160,
            "SP": 34
        },
        "Traits": [
            "Menacing",
            "Steady"
        ],
        "Skills": [
            "Fade Attack",
            "Mighty Roar",
            "Hypno Wave",
            "Shadewalker",
            "Howl",
            "Voodoo",
            "Crunch",
            "Moon Disc",
            "Moonlight",
            "Premonition",
            "Ignite",
            "Ball of Darkness",
            "EMP",
            "Scream",
            "Heatwave",
            "Deep Cut",
            "Phantom Spike",
            "Artificial Night",
            "Cute Pose",
            "Disable Heal",
            "Shared Fate",
            "Inner Peace",
            "Concentrate",
            "Agility Training",
            "Precision Eye",
            "Rage",
            "Last Stand",
            "Poison Chomp",
            "Scary Vision",
            "Time Warp"
        ]
    },
    "Lunarwulf": {
        "id": 39,
        "Type": "Ghost",
        "BST": {
            "HP": 89,
            "Atk": 134,
            "Def": 92,
            "SpA": 213,
            "SpD": 107,
            "Spe": 191,
            "SP": 34
        },
        "Traits": [
            "Menacing",
            "Steady"
        ],
        "Skills": [
            "Fade Attack",
            "Mighty Roar",
            "Hypno Wave",
            "Shadewalker",
            "Howl",
            "Voodoo",
            "Crunch",
            "Moon Disc",
            "Moonlight",
            "Premonition",
            "Ignite",
            "Ball of Darkness",
            "EMP",
            "Scream",
            "Heatwave",
            "Deep Cut",
            "Phantom Spike",
            "Artificial Night",
            "Cute Pose",
            "Disable Heal",
            "Shared Fate",
            "Inner Peace",
            "Concentrate",
            "Agility Training",
            "Precision Eye",
            "Rage",
            "Last Stand",
            "Poison Chomp",
            "Scary Vision",
            "Time Warp"
        ]
    },
    "Eclyptor": {
        "id": 40,
        "Type": "Ghost",
        "BST": {
            "HP": 120,
            "Atk": 183,
            "Def": 121,
            "SpA": 224,
            "SpD": 152,
            "Spe": 223,
            "SP": 34
        },
        "Traits": [
            "Menacing",
            "Steady"
        ],
        "Skills": [
            "Fade Attack",
            "Mighty Roar",
            "Hypno Wave",
            "Shadewalker",
            "Howl",
            "Voodoo",
            "Crunch",
            "Moon Disc",
            "Moonlight",
            "Premonition",
            "Ignite",
            "Ball of Darkness",
            "EMP",
            "Scream",
            "Heatwave",
            "Deep Cut",
            "Phantom Spike",
            "Artificial Night",
            "Cute Pose",
            "Disable Heal",
            "Shared Fate",
            "Inner Peace",
            "Concentrate",
            "Agility Training",
            "Precision Eye",
            "Rage",
            "Last Stand",
            "Poison Chomp",
            "Scary Vision",
            "Time Warp"
        ]
    },
    "Kryo": {
        "id": 41,
        "Type": "Ice",
        "BST": {
            "HP": 141,
            "Atk": 79,
            "Def": 96,
            "SpA": 108,
            "SpD": 98,
            "Spe": 46,
            "SP": 34
        },
        "Traits": [
            "Shiny",
            "Fully Rested",
            "Cool Body",
            "Snowman"
        ],
        "Skills": [
            "Scratch",
            "Toughen Up",
            "Frost Chomp",
            "Ice Wall",
            "Permafrost",
            "Shattering Claw",
            "Frozen Spikes",
            "Icy Flurry",
            "Snowfall",
            "Glacier",
            "Intensifice",
            "Glacier Drop",
            "Frigid Barrier",
            "Slush",
            "Snowball",
            "Monsoon",
            "Dirty Snow",
            "Beat Up",
            "Concentrate",
            "Agility Training",
            "Splatter",
            "Precision Punch",
            "Rage",
            "Last Stand",
            "Smackdown"
        ]
    },
    "Krypeek": {
        "id": 42,
        "Type": "Ice",
        "BST": {
            "HP": 180,
            "Atk": 121,
            "Def": 137,
            "SpA": 149,
            "SpD": 141,
            "Spe": 84,
            "SP": 34
        },
        "Traits": [
            "Shiny",
            "Fully Rested",
            "Cool Body",
            "Snowman"
        ],
        "Skills": [
            "Scratch",
            "Toughen Up",
            "Frost Chomp",
            "Ice Wall",
            "Permafrost",
            "Shattering Claw",
            "Frozen Spikes",
            "Icy Flurry",
            "Snowfall",
            "Glacier",
            "Intensifice",
            "Glacier Drop",
            "Frigid Barrier",
            "Slush",
            "Snowball",
            "Monsoon",
            "Dirty Snow",
            "Beat Up",
            "Concentrate",
            "Agility Training",
            "Splatter",
            "Precision Punch",
            "Rage",
            "Last Stand",
            "Smackdown"
        ]
    },
    "Krybeest": {
        "id": 43,
        "Type": "Ice",
        "BST": {
            "HP": 219,
            "Atk": 162,
            "Def": 169,
            "SpA": 186,
            "SpD": 181,
            "Spe": 118,
            "SP": 34
        },
        "Traits": [
            "Shiny",
            "Fully Rested",
            "Cool Body",
            "Snowman"
        ],
        "Skills": [
            "Scratch",
            "Toughen Up",
            "Frost Chomp",
            "Ice Wall",
            "Permafrost",
            "Shattering Claw",
            "Frozen Spikes",
            "Icy Flurry",
            "Snowfall",
            "Glacier",
            "Intensifice",
            "Glacier Drop",
            "Frigid Barrier",
            "Slush",
            "Snowball",
            "Monsoon",
            "Dirty Snow",
            "Disable Trait",
            "Smokescreen",
            "Beat Up",
            "Concentrate",
            "Agility Training",
            "Splatter",
            "Precision Punch",
            "Rage",
            "Last Stand",
            "Smackdown"
        ]
    },
    "Bren": {
        "id": 44,
        "Type": "Fire",
        "BST": {
            "HP": 91,
            "Atk": 118,
            "Def": 78,
            "SpA": 132,
            "SpD": 98,
            "Spe": 93,
            "SP": 34
        },
        "Traits": [
            "Soothing Aura",
            "Afterburner",
            "Rebirth"
        ],
        "Skills": [
            "Claw",
            "Distract",
            "Health Link",
            "Pyre Peck",
            "All In",
            "Feather Fury",
            "Empathy",
            "Fiery Breath",
            "Blaze Feathers",
            "Inner Peace",
            "Ignite",
            "Heatwave",
            "Feint Bursts",
            "Detonate",
            "Cute Pose",
            "Fire Up",
            "Concentrate",
            "Agility Training",
            "Rage",
            "Last Stand"
        ]
    },
    "Pyrochick": {
        "id": 45,
        "Type": "Fire",
        "BST": {
            "HP": 91,
            "Atk": 118,
            "Def": 78,
            "SpA": 132,
            "SpD": 98,
            "Spe": 93,
            "SP": 34
        },
        "Traits": [
            "Soothing Aura",
            "Afterburner",
            "Rebirth"
        ],
        "Skills": [
            "Claw",
            "Distract",
            "Health Link",
            "Pyre Peck",
            "All In",
            "Feather Fury",
            "Empathy",
            "Fiery Breath",
            "Blaze Feathers",
            "Inner Peace",
            "Ignite",
            "Epiphany",
            "Scream",
            "Disable",
            "Heatwave",
            "Whoosh",
            "Deep Cut",
            "Phantom Spike",
            "Feint Bursts",
            "Detonate",
            "Cute Pose",
            "Fire Up",
            "Clearing Wind",
            "Concentrate",
            "Agility Training",
            "Tempest",
            "Precision Eye",
            "Rage",
            "Last Stand",
            "Berserk"
        ]
    },
    "Infinix": {
        "id": 46,
        "Type": "Fire",
        "BST": {
            "HP": 152,
            "Atk": 225,
            "Def": 129,
            "SpA": 217,
            "SpD": 132,
            "Spe": 154,
            "SP": 34
        },
        "Traits": [
            "Soothing Aura",
            "Afterburner",
            "Rebirth"
        ],
        "Skills": [
            "Claw",
            "Distract",
            "Health Link",
            "Pyre Peck",
            "All In",
            "Feather Fury",
            "Empathy",
            "Fiery Breath",
            "Blaze Feathers",
            "Inner Peace",
            "Ignite",
            "Epiphany",
            "Scream",
            "Disable",
            "Heatwave",
            "Whoosh",
            "Deep Cut",
            "Phantom Spike",
            "Feint Bursts",
            "Detonate",
            "Cute Pose",
            "Disable Trait",
            "Disable Heal",
            "Fire Up",
            "Smokescreen",
            "Clearing Wind",
            "Concentrate",
            "Agility Training",
            "Tempest",
            "Precision Eye",
            "Rage",
            "Last Stand",
            "Berserk"
        ]
    },
    "Acie": {
        "id": 47,
        "Type": "Electric",
        "BST": {
            "HP": 54,
            "Atk": 71,
            "Def": 138,
            "SpA": 195,
            "SpD": 118,
            "Spe": 89,
            "SP": 34
        },
        "Traits": [
            "Specialist",
            "Resistant",
            "Amplified",
            "Clear Skies"
        ],
        "Skills": [
            "Quad Volt",
            "Inner Peace",
            "Lightning Strike",
            "Electrify",
            "Multi Bolt",
            "Acid Rain",
            "Spark Wall",
            "Thunder Salvo",
            "Toxic Cloud",
            "EMP",
            "Ball of Darkness",
            "Zen Cure",
            "Taser",
            "Cute Pose",
            "Bolt Bomb",
            "Disable Heal",
            "Shared Fate",
            "Concentrate",
            "Agility Training",
            "Precision Eye",
            "Rage",
            "Last Stand",
            "Desert Winds",
            "Scary Vision"
        ]
    },
    "Deecie": {
        "id": 48,
        "Type": "Electric",
        "BST": {
            "HP": 105,
            "Atk": 120,
            "Def": 188,
            "SpA": 256,
            "SpD": 195,
            "Spe": 144,
            "SP": 34
        },
        "Traits": [
            "Specialist",
            "Resistant",
            "Amplified",
            "Clear Skies"
        ],
        "Skills": [
            "Quad Volt",
            "Inner Peace",
            "Lightning Strike",
            "Electrify",
            "Multi Bolt",
            "Acid Rain",
            "Spark Wall",
            "Thunder Salvo",
            "Toxic Cloud",
            "EMP",
            "Ball of Darkness",
            "Zen Cure",
            "Taser",
            "Cute Pose",
            "Bolt Bomb",
            "Disable Heal",
            "Shared Fate",
            "Concentrate",
            "Agility Training",
            "Precision Eye",
            "Rage",
            "Last Stand",
            "Desert Winds",
            "Scary Vision"
        ]
    },
    "Kyreptil": {
        "id": 49,
        "Type": "Sand",
        "BST": {
            "HP": 158,
            "Atk": 171,
            "Def": 192,
            "SpA": 56,
            "SpD": 72,
            "Spe": 58,
            "SP": 34
        },
        "Traits": [
            "Prepared",
            "Accurate",
            "Sharp Claws"
        ],
        "Skills": [
            "Scratch",
            "Pocket Sand",
            "Rage",
            "Double Slash",
            "Dust Storm",
            "Deep Cut",
            "Epiphany",
            "Lacerate",
            "Death Grip",
            "Parched Jaws",
            "Tail Sweep",
            "Scream",
            "Taser",
            "Disable",
            "Phantom Spike",
            "Disable Trait",
            "Sandspout",
            "Smokescreen",
            "Quicksand",
            "Concentrate",
            "Agility Training",
            "Precision Eye",
            "Crunch",
            "Last Stand",
            "Poison Chomp",
            "Desert Winds",
            "Berserk",
            "Reconstruct"
        ]
    },
    "Kyraptor": {
        "id": 50,
        "Type": "Sand",
        "BST": {
            "HP": 197,
            "Atk": 288,
            "Def": 266,
            "SpA": 98,
            "SpD": 111,
            "Spe": 78,
            "SP": 34
        },
        "Traits": [
            "Prepared",
            "Accurate",
            "Sharp Claws"
        ],
        "Skills": [
            "Scratch",
            "Pocket Sand",
            "Rage",
            "Double Slash",
            "Dust Storm",
            "Deep Cut",
            "Epiphany",
            "Lacerate",
            "Death Grip",
            "Parched Jaws",
            "Tail Sweep",
            "Scream",
            "Taser",
            "Disable",
            "Phantom Spike",
            "Disable Trait",
            "Sandspout",
            "Smokescreen",
            "Quicksand",
            "Concentrate",
            "Agility Training",
            "Precision Eye",
            "Crunch",
            "Last Stand",
            "Poison Chomp",
            "Desert Winds",
            "Berserk",
            "Reconstruct"
        ]
    },
    "Gella": {
        "id": 51,
        "Type": "Water",
        "BST": {
            "HP": 71,
            "Atk": 83,
            "Def": 98,
            "SpA": 136,
            "SpD": 80,
            "Spe": 120,
            "SP": 34
        },
        "Traits": [
            "Inverse",
            "Water Cooled",
            "Cleanse",
            "Vaccinated"
        ],
        "Skills": [
            "Bubble Burst",
            "Confusion",
            "Sting",
            "Stat Copycat",
            "Feint Spurts",
            "Water Clone",
            "Whirlpool",
            "Hydro Punch",
            "Bolt Bomb",
            "Mist",
            "Bubble Blower",
            "Zen Cure",
            "Monsoon",
            "Splash",
            "Concentrate",
            "Agility Training",
            "Snowfall",
            "Rage",
            "Last Stand",
            "Geyser"
        ]
    },
    "Gellish": {
        "id": 52,
        "Type": "Water",
        "BST": {
            "HP": 122,
            "Atk": 138,
            "Def": 114,
            "SpA": 176,
            "SpD": 128,
            "Spe": 148,
            "SP": 34
        },
        "Traits": [
            "Inverse",
            "Water Cooled",
            "Cleanse",
            "Vaccinated"
        ],
        "Skills": [
            "Bubble Burst",
            "Confusion",
            "Sting",
            "Stat Copycat",
            "Feint Spurts",
            "Water Clone",
            "Whirlpool",
            "Hydro Punch",
            "Bolt Bomb",
            "Mist",
            "Bubble Blower",
            "Slush",
            "Zen Cure",
            "Monsoon",
            "Dirty Snow",
            "Disable Heal",
            "Inner Peace",
            "Splash",
            "Beat Up",
            "Quicksand",
            "Concentrate",
            "Agility Training",
            "Splatter",
            "Stone Fist",
            "Snowfall",
            "Precision Eye",
            "Precision Punch",
            "Rage",
            "Last Stand",
            "Smackdown",
            "Geyser",
            "Time Warp"
        ]
    },
    "Gelaquad": {
        "id": 53,
        "Type": "Water",
        "BST": {
            "HP": 174,
            "Atk": 226,
            "Def": 159,
            "SpA": 182,
            "SpD": 131,
            "Spe": 164,
            "SP": 34
        },
        "Traits": [
            "Inverse",
            "Water Cooled",
            "Cleanse",
            "Vaccinated"
        ],
        "Skills": [
            "Bubble Burst",
            "Confusion",
            "Sting",
            "Stat Copycat",
            "Feint Spurts",
            "Water Clone",
            "Whirlpool",
            "Hydro Punch",
            "Bolt Bomb",
            "Mist",
            "Epiphany",
            "Bubble Blower",
            "Slush",
            "Zen Cure",
            "Disable",
            "Monsoon",
            "Dirty Snow",
            "Disable Trait",
            "Disable Heal",
            "Inner Peace",
            "Smokescreen",
            "Splash",
            "Beat Up",
            "Quicksand",
            "Concentrate",
            "Agility Training",
            "Splatter",
            "Stone Fist",
            "Snowfall",
            "Precision Eye",
            "Precision Punch",
            "Rage",
            "Last Stand",
            "Berserk",
            "Smackdown",
            "Geyser",
            "Time Warp"
        ]
    },
    "Skarbone": {
        "id": 54,
        "Type": "Sand",
        "BST": {
            "HP": 143,
            "Atk": 158,
            "Def": 94,
            "SpA": 63,
            "SpD": 65,
            "Spe": 68,
            "SP": 34
        },
        "Traits": [
            "Crippler",
            "Scrapper",
            "Dirt Coat"
        ],
        "Skills": [
            "Chomp",
            "Epiphany",
            "Toxic Skull",
            "Tricky Bone",
            "Sandman",
            "Revenge Jaws",
            "Acid Bite",
            "Stalagmites",
            "Acid Rain",
            "Parched Jaws",
            "Headcrash",
            "Scream",
            "Taser",
            "Disable",
            "Deep Cut",
            "Phantom Spike",
            "Disable Trait",
            "Sandspout",
            "Smokescreen",
            "Quicksand",
            "Concentrate",
            "Agility Training",
            "Precision Eye",
            "Rage",
            "Crunch",
            "Last Stand",
            "Poison Chomp",
            "Desert Winds",
            "Berserk",
            "Reconstruct"
        ]
    },
    "Skuldra": {
        "id": 55,
        "Type": "Sand",
        "BST": {
            "HP": 152,
            "Atk": 202,
            "Def": 141,
            "SpA": 107,
            "SpD": 121,
            "Spe": 90,
            "SP": 34
        },
        "Traits": [
            "Crippler",
            "Scrapper",
            "Dirt Coat"
        ],
        "Skills": [
            "Chomp",
            "Epiphany",
            "Toxic Skull",
            "Tricky Bone",
            "Sandman",
            "Revenge Jaws",
            "Acid Bite",
            "Stalagmites",
            "Acid Rain",
            "Parched Jaws",
            "Headcrash",
            "Scream",
            "Taser",
            "Disable",
            "Deep Cut",
            "Phantom Spike",
            "Disable Trait",
            "Sandspout",
            "Smokescreen",
            "Quicksand",
            "Concentrate",
            "Agility Training",
            "Precision Eye",
            "Rage",
            "Crunch",
            "Last Stand",
            "Poison Chomp",
            "Desert Winds",
            "Berserk",
            "Reconstruct"
        ]
    },
    "Skelatops": {
        "id": 56,
        "Type": "Sand",
        "BST": {
            "HP": 161,
            "Atk": 260,
            "Def": 166,
            "SpA": 151,
            "SpD": 178,
            "Spe": 114,
            "SP": 34
        },
        "Traits": [
            "Crippler",
            "Scrapper",
            "Dirt Coat"
        ],
        "Skills": [
            "Chomp",
            "Epiphany",
            "Toxic Skull",
            "Tricky Bone",
            "Sandman",
            "Revenge Jaws",
            "Acid Bite",
            "Stalagmites",
            "Acid Rain",
            "Parched Jaws",
            "Headcrash",
            "Scream",
            "Taser",
            "Disable",
            "Deep Cut",
            "Phantom Spike",
            "Disable Trait",
            "Sandspout",
            "Smokescreen",
            "Quicksand",
            "Concentrate",
            "Agility Training",
            "Precision Eye",
            "Rage",
            "Crunch",
            "Last Stand",
            "Poison Chomp",
            "Desert Winds",
            "Berserk",
            "Reconstruct"
        ]
    },
    "Droople": {
        "id": 57,
        "Type": "Ghost",
        "BST": {
            "HP": 110,
            "Atk": 88,
            "Def": 92,
            "SpA": 78,
            "SpD": 76,
            "Spe": 84,
            "SP": 34
        },
        "Traits": [
            "Gourmand",
            "Sticky Layer",
            "Resistant"
        ],
        "Skills": [
            "Chomp",
            "Sticky Saliva",
            "Feelers",
            "Shadewalker",
            "Beat Up",
            "Scary Vision",
            "Flying Kick",
            "Ooze Armor",
            "Mist",
            "Smackdown",
            "Replenish",
            "Time Warp",
            "Transcending",
            "Ignite",
            "Heatwave",
            "Artificial Night",
            "Premonition",
            "Concentrate",
            "Agility Training",
            "Rage",
            "Last Stand",
            "Toxic Cloud"
        ]
    },
    "Mudma": {
        "id": 58,
        "Type": "Ghost",
        "BST": {
            "HP": 188,
            "Atk": 184,
            "Def": 174,
            "SpA": 129,
            "SpD": 141,
            "Spe": 122,
            "SP": 34
        },
        "Traits": [
            "Gourmand",
            "Sticky Layer",
            "Resistant"
        ],
        "Skills": [
            "Chomp",
            "Sticky Saliva",
            "Feelers",
            "Shadewalker",
            "Beat Up",
            "Scary Vision",
            "Flying Kick",
            "Ooze Armor",
            "Mist",
            "Smackdown",
            "Replenish",
            "Time Warp",
            "Transcending",
            "Ignite",
            "Heatwave",
            "Artificial Night",
            "Premonition",
            "Dirty Snow",
            "Concentrate",
            "Agility Training",
            "Splatter",
            "Precision Punch",
            "Rage",
            "Last Stand",
            "Toxic Cloud"
        ]
    },
    "Arcta": {
        "id": 59,
        "Type": "Ice",
        "BST": {
            "HP": 90,
            "Atk": 109,
            "Def": 117,
            "SpA": 145,
            "SpD": 126,
            "Spe": 98,
            "SP": 34
        },
        "Traits": [
            "Lucky",
            "Antarctic",
            "Snowman"
        ],
        "Skills": [
            "Slam",
            "Slush",
            "Streamline",
            "Dirty Snow",
            "Snowball",
            "Snowfall",
            "Sharp Snowball",
            "Glass Cannon",
            "Crystal Beam",
            "Body Blast",
            "Blizzard",
            "Frigid Barrier",
            "Scream",
            "Deep Cut",
            "Phantom Spike",
            "Monsoon",
            "Icy Flurry",
            "Cute Pose",
            "Disable Heal",
            "Inner Peace",
            "Feint Spurts",
            "Concentrate",
            "Agility Training",
            "Precision Eye",
            "Rage",
            "Last Stand"
        ]
    },
    "Arcturos": {
        "id": 60,
        "Type": "Ice",
        "BST": {
            "HP": 141,
            "Atk": 161,
            "Def": 171,
            "SpA": 201,
            "SpD": 212,
            "Spe": 147,
            "SP": 34
        },
        "Traits": [
            "Lucky",
            "Antarctic",
            "Snowman"
        ],
        "Skills": [
            "Slam",
            "Slush",
            "Streamline",
            "Dirty Snow",
            "Snowball",
            "Snowfall",
            "Sharp Snowball",
            "Glass Cannon",
            "Crystal Beam",
            "Body Blast",
            "Blizzard",
            "Frigid Barrier",
            "Scream",
            "Deep Cut",
            "Phantom Spike",
            "Monsoon",
            "Icy Flurry",
            "Cute Pose",
            "Disable Heal",
            "Inner Peace",
            "Feint Spurts",
            "Concentrate",
            "Agility Training",
            "Precision Eye",
            "Rage",
            "Last Stand"
        ]
    },
    "Seraphace": {
        "id": 61,
        "Type": "Ghost",
        "BST": {
            "HP": 138,
            "Atk": 92,
            "Def": 97,
            "SpA": 122,
            "SpD": 129,
            "Spe": 70,
            "SP": 34
        },
        "Traits": [
            "Fearless",
            "Restless",
            "Soul Eater",
            "Pep Talk"
        ],
        "Skills": [
            "Fade Attack",
            "Hypno Wave",
            "Shared Fate",
            "Glass Cannon",
            "Wind Blast",
            "Artificial Night",
            "Feather Fury",
            "Ball of Darkness",
            "Frantic Mask",
            "Ball of Light",
            "Time Warp",
            "Ignite",
            "EMP",
            "Heatwave",
            "Whoosh",
            "Premonition",
            "Disable Heal",
            "Inner Peace",
            "Clearing Wind",
            "Concentrate",
            "Agility Training",
            "Tempest",
            "Precision Eye",
            "Rage",
            "Last Stand",
            "Scary Vision"
        ]
    },
    "Grimmask": {
        "id": 62,
        "Type": "Ghost",
        "BST": {
            "HP": 191,
            "Atk": 143,
            "Def": 152,
            "SpA": 211,
            "SpD": 182,
            "Spe": 121,
            "SP": 34
        },
        "Traits": [
            "Fearless",
            "Restless",
            "Soul Eater",
            "Pep Talk"
        ],
        "Skills": [
            "Fade Attack",
            "Hypno Wave",
            "Shared Fate",
            "Glass Cannon",
            "Wind Blast",
            "Artificial Night",
            "Feather Fury",
            "Ball of Darkness",
            "Frantic Mask",
            "Ball of Light",
            "Time Warp",
            "Ignite",
            "EMP",
            "Heatwave",
            "Whoosh",
            "Premonition",
            "Disable Heal",
            "Inner Peace",
            "Clearing Wind",
            "Concentrate",
            "Agility Training",
            "Tempest",
            "Precision Eye",
            "Rage",
            "Last Stand",
            "Scary Vision"
        ]
    },
    "Squidma": {
        "id": 63,
        "Type": "Fire",
        "BST": {
            "HP": 76,
            "Atk": 78,
            "Def": 67,
            "SpA": 101,
            "SpD": 198,
            "Spe": 142,
            "SP": 34
        },
        "Traits": [
            "Flare Intake",
            "Reignite"
        ],
        "Skills": [
            "Cinder",
            "Mighty Roar",
            "Tail Spin",
            "Smokescreen",
            "Feint Bursts",
            "Constrict",
            "Fire Up",
            "Crunch",
            "Detonate",
            "Heat Beam",
            "Scream",
            "Ignite",
            "Heatwave",
            "Disable Heal",
            "Inner Peace",
            "Concentrate",
            "Agility Training",
            "Precision Eye",
            "Rage",
            "Last Stand",
            "Poison Chomp",
            "Fiery Breath"
        ]
    },
    "Magmilus": {
        "id": 64,
        "Type": "Fire",
        "BST": {
            "HP": 159,
            "Atk": 139,
            "Def": 130,
            "SpA": 161,
            "SpD": 246,
            "Spe": 201,
            "SP": 34
        },
        "Traits": [
            "Flare Intake",
            "Reignite"
        ],
        "Skills": [
            "Cinder",
            "Mighty Roar",
            "Tail Spin",
            "Smokescreen",
            "Feint Bursts",
            "Constrict",
            "Fire Up",
            "Crunch",
            "Detonate",
            "Heat Beam",
            "Scream",
            "Ignite",
            "Heatwave",
            "Disable Heal",
            "Inner Peace",
            "Concentrate",
            "Agility Training",
            "Precision Eye",
            "Rage",
            "Last Stand",
            "Poison Chomp",
            "Fiery Breath"
        ]
    },
    "Lumon": {
        "id": 65,
        "Type": "Electric",
        "BST": {
            "HP": 69,
            "Atk": 71,
            "Def": 78,
            "SpA": 82,
            "SpD": 112,
            "Spe": 101,
            "SP": 34
        },
        "Traits": [
            "Amplified",
            "Conductor",
            "Bright Light"
        ],
        "Skills": [
            "Scratch",
            "Cute Pose",
            "Swarm Diversion",
            "Quad Volt",
            "Electrify",
            "Energy Drain",
            "Whoosh",
            "Taser",
            "Swarm Shocker",
            "Lacerate",
            "Precision Eye",
            "Scream",
            "Zen Cure",
            "Deep Cut",
            "Phantom Spike",
            "Bolt Bomb",
            "Super Drain",
            "Lightning Strike",
            "Drain",
            "Concentrate",
            "Agility Training",
            "Sandman",
            "Rage",
            "Last Stand",
            "Desert Winds"
        ]
    },
    "Lampyre": {
        "id": 66,
        "Type": "Electric",
        "BST": {
            "HP": 108,
            "Atk": 90,
            "Def": 111,
            "SpA": 103,
            "SpD": 133,
            "Spe": 160,
            "SP": 34
        },
        "Traits": [
            "Amplified",
            "Conductor",
            "Bright Light"
        ],
        "Skills": [
            "Scratch",
            "Cute Pose",
            "Swarm Diversion",
            "Quad Volt",
            "Electrify",
            "Energy Drain",
            "Whoosh",
            "Taser",
            "Swarm Shocker",
            "Lacerate",
            "Precision Eye",
            "Scream",
            "Zen Cure",
            "Deep Cut",
            "Phantom Spike",
            "Bolt Bomb",
            "Super Drain",
            "Lightning Strike",
            "Drain",
            "Clearing Wind",
            "Concentrate",
            "Agility Training",
            "Tempest",
            "Sandman",
            "Rage",
            "Last Stand",
            "Desert Winds"
        ]
    },
    "Lumasect": {
        "id": 67,
        "Type": "Electric",
        "BST": {
            "HP": 162,
            "Atk": 108,
            "Def": 166,
            "SpA": 134,
            "SpD": 191,
            "Spe": 224,
            "SP": 34
        },
        "Traits": [
            "Amplified",
            "Conductor",
            "Bright Light"
        ],
        "Skills": [
            "Scratch",
            "Cute Pose",
            "Swarm Diversion",
            "Quad Volt",
            "Electrify",
            "Energy Drain",
            "Whoosh",
            "Taser",
            "Swarm Shocker",
            "Lacerate",
            "Precision Eye",
            "Scream",
            "Zen Cure",
            "Deep Cut",
            "Phantom Spike",
            "Bolt Bomb",
            "Super Drain",
            "Lightning Strike",
            "Drain",
            "Clearing Wind",
            "Concentrate",
            "Agility Training",
            "Tempest",
            "Sandman",
            "Rage",
            "Last Stand",
            "Desert Winds"
        ]
    },
    "Patterbit": {
        "id": 68,
        "Type": "Normal",
        "BST": {
            "HP": 98,
            "Atk": 88,
            "Def": 108,
            "SpA": 143,
            "SpD": 122,
            "Spe": 79,
            "SP": 34
        },
        "Traits": [
            "Conductor",
            "Robber",
            "Overclocker"
        ],
        "Skills": [
            "Slam",
            "Feelers",
            "Propellor Punch",
            "Factory Reset",
            "Face Slap",
            "Precision Punch",
            "Upshift",
            "Flying Kick",
            "EMP",
            "Transcending",
            "Overdrive",
            "Stat Copycat",
            "Distract",
            "Tactical Slam",
            "Inspect Scent",
            "Zen Cure",
            "Dirty Snow",
            "All In",
            "Glass Cannon",
            "Beat Up",
            "Concentrate",
            "Agility Training",
            "Splatter",
            "Stone Fist",
            "Rage",
            "Last Stand",
            "Smackdown"
        ]
    },
    "Pitterbyte": {
        "id": 69,
        "Type": "Normal",
        "BST": {
            "HP": 142,
            "Atk": 139,
            "Def": 152,
            "SpA": 175,
            "SpD": 163,
            "Spe": 102,
            "SP": 34
        },
        "Traits": [
            "Conductor",
            "Robber",
            "Overclocker"
        ],
        "Skills": [
            "Slam",
            "Feelers",
            "Propellor Punch",
            "Factory Reset",
            "Face Slap",
            "Precision Punch",
            "Upshift",
            "Flying Kick",
            "EMP",
            "Transcending",
            "Overdrive",
            "Stat Copycat",
            "Distract",
            "Tactical Slam",
            "Inspect Scent",
            "Zen Cure",
            "Dirty Snow",
            "All In",
            "Glass Cannon",
            "Beat Up",
            "Concentrate",
            "Agility Training",
            "Splatter",
            "Stone Fist",
            "Rage",
            "Last Stand",
            "Smackdown"
        ]
    },
    "Cyberite": {
        "id": 70,
        "Type": "Normal",
        "BST": {
            "HP": 171,
            "Atk": 161,
            "Def": 180,
            "SpA": 214,
            "SpD": 196,
            "Spe": 121,
            "SP": 34
        },
        "Traits": [
            "Conductor",
            "Robber",
            "Overclocker"
        ],
        "Skills": [
            "Slam",
            "Feelers",
            "Propellor Punch",
            "Factory Reset",
            "Face Slap",
            "Precision Punch",
            "Upshift",
            "Flying Kick",
            "EMP",
            "Transcending",
            "Overdrive",
            "Stat Copycat",
            "Distract",
            "Tactical Slam",
            "Inspect Scent",
            "Zen Cure",
            "Dirty Snow",
            "Disable Heal",
            "Inner Peace",
            "All In",
            "Glass Cannon",
            "Beat Up",
            "Concentrate",
            "Agility Training",
            "Splatter",
            "Stone Fist",
            "Precision Eye",
            "Rage",
            "Last Stand",
            "Smackdown",
            "Scary Vision"
        ]
    },
    "Decibite": {
        "id": 71,
        "Type": "Sand",
        "BST": {
            "HP": 65,
            "Atk": 142,
            "Def": 208,
            "SpA": 81,
            "SpD": 72,
            "Spe": 67,
            "SP": 34
        },
        "Traits": [
            "Slippery",
            "Vegetarian",
            "Dry Wind"
        ],
        "Skills": [
            "Chomp",
            "Burrow",
            "Desert Winds",
            "Mud Ball",
            "Energy Drain",
            "Seismic Wave",
            "Super Drain",
            "Quicksand",
            "Crumble",
            "Sand Devils",
            "Epiphany",
            "Taser",
            "Disable",
            "Sandspout",
            "Drain",
            "Concentrate",
            "Agility Training",
            "Sandman",
            "Precision Eye",
            "Rage",
            "Crunch",
            "Last Stand",
            "Poison Chomp",
            "Berserk",
            "Reconstruct"
        ]
    },
    "Centilla": {
        "id": 72,
        "Type": "Sand",
        "BST": {
            "HP": 97,
            "Atk": 180,
            "Def": 276,
            "SpA": 99,
            "SpD": 98,
            "Spe": 82,
            "SP": 34
        },
        "Traits": [
            "Slippery",
            "Vegetarian",
            "Dry Wind"
        ],
        "Skills": [
            "Chomp",
            "Burrow",
            "Desert Winds",
            "Mud Ball",
            "Energy Drain",
            "Seismic Wave",
            "Super Drain",
            "Quicksand",
            "Crumble",
            "Sand Devils",
            "Epiphany",
            "Taser",
            "Disable",
            "Sandspout",
            "Drain",
            "Concentrate",
            "Agility Training",
            "Sandman",
            "Precision Eye",
            "Rage",
            "Crunch",
            "Last Stand",
            "Poison Chomp",
            "Berserk",
            "Reconstruct"
        ]
    },
    "Millidont": {
        "id": 73,
        "Type": "Sand",
        "BST": {
            "HP": 128,
            "Atk": 194,
            "Def": 340,
            "SpA": 120,
            "SpD": 148,
            "Spe": 98,
            "SP": 34
        },
        "Traits": [
            "Slippery",
            "Vegetarian",
            "Dry Wind"
        ],
        "Skills": [
            "Chomp",
            "Burrow",
            "Desert Winds",
            "Mud Ball",
            "Energy Drain",
            "Seismic Wave",
            "Super Drain",
            "Quicksand",
            "Crumble",
            "Sand Devils",
            "Epiphany",
            "Taser",
            "Disable",
            "Sandspout",
            "Drain",
            "Concentrate",
            "Agility Training",
            "Sandman",
            "Precision Eye",
            "Rage",
            "Crunch",
            "Last Stand",
            "Poison Chomp",
            "Berserk",
            "Reconstruct"
        ]
    },
    "Taddle": {
        "id": 74,
        "Type": "Water",
        "BST": {
            "HP": 78,
            "Atk": 96,
            "Def": 78,
            "SpA": 83,
            "SpD": 78,
            "Spe": 181,
            "SP": 34
        },
        "Traits": [
            "Humidifier",
            "Toxic Skin",
            "Anti-fungal"
        ],
        "Skills": [
            "Slam",
            "Ignore Pain",
            "Slush",
            "Cloudburst",
            "Toxic Cloud",
            "Precision Punch",
            "Splash",
            "Acid Rain",
            "Flying Kick",
            "Crushing Waterfall",
            "All In",
            "Bubble Blower",
            "Scream",
            "Zen Cure",
            "Deep Cut",
            "Phantom Spike",
            "Monsoon",
            "Disable Trait",
            "Feint Spurts",
            "Smokescreen",
            "Concentrate",
            "Agility Training",
            "Snowfall",
            "Rage",
            "Last Stand",
            "Geyser"
        ]
    },
    "Fibio": {
        "id": 75,
        "Type": "Water",
        "BST": {
            "HP": 138,
            "Atk": 158,
            "Def": 94,
            "SpA": 127,
            "SpD": 88,
            "Spe": 181,
            "SP": 34
        },
        "Traits": [
            "Humidifier",
            "Toxic Skin",
            "Anti-fungal"
        ],
        "Skills": [
            "Slam",
            "Ignore Pain",
            "Slush",
            "Cloudburst",
            "Toxic Cloud",
            "Precision Punch",
            "Splash",
            "Acid Rain",
            "Flying Kick",
            "Crushing Waterfall",
            "All In",
            "Bubble Blower",
            "Scream",
            "Zen Cure",
            "Deep Cut",
            "Phantom Spike",
            "Monsoon",
            "Disable Trait",
            "Feint Spurts",
            "Smokescreen",
            "Concentrate",
            "Sumo Stance",
            "Agility Training",
            "Snowfall",
            "Rage",
            "Last Stand",
            "Geyser"
        ]
    },
    "Chonktoad": {
        "id": 76,
        "Type": "Water",
        "BST": {
            "HP": 178,
            "Atk": 188,
            "Def": 194,
            "SpA": 155,
            "SpD": 182,
            "Spe": 142,
            "SP": 34
        },
        "Traits": [
            "Humidifier",
            "Toxic Skin",
            "Anti-fungal"
        ],
        "Skills": [
            "Slam",
            "Ignore Pain",
            "Slush",
            "Cloudburst",
            "Toxic Cloud",
            "Precision Punch",
            "Splash",
            "Acid Rain",
            "Flying Kick",
            "Crushing Waterfall",
            "All In",
            "Epiphany",
            "Bubble Blower",
            "Scream",
            "Zen Cure",
            "Disable",
            "Deep Cut",
            "Phantom Spike",
            "Monsoon",
            "Disable Trait",
            "Feint Spurts",
            "Smokescreen",
            "Quicksand",
            "Concentrate",
            "Sumo Stance",
            "Agility Training",
            "Snowfall",
            "Precision Eye",
            "Rage",
            "Last Stand",
            "Berserk",
            "Geyser"
        ]
    },
    "Tinshel": {
        "id": 77,
        "Type": "Sand",
        "BST": {
            "HP": 92,
            "Atk": 88,
            "Def": 161,
            "SpA": 81,
            "SpD": 109,
            "Spe": 87,
            "SP": 34
        },
        "Traits": [
            "Fast Learner",
            "Wet Coat",
            "Coward"
        ],
        "Skills": [
            "Scratch",
            "Toughen Up",
            "Burrow",
            "Berserk",
            "Boulder Barrage",
            "Sand Columns",
            "Head Crab",
            "Shell Drill",
            "Suffocate",
            "Sand Devils",
            "Epiphany",
            "Taser",
            "Disable",
            "Sandspout",
            "Quicksand",
            "Concentrate",
            "Agility Training",
            "Precision Eye",
            "Rage",
            "Last Stand",
            "Desert Winds",
            "Reconstruct"
        ]
    },
    "Dunpod": {
        "id": 78,
        "Type": "Sand",
        "BST": {
            "HP": 144,
            "Atk": 141,
            "Def": 223,
            "SpA": 93,
            "SpD": 121,
            "Spe": 104,
            "SP": 34
        },
        "Traits": [
            "Fast Learner",
            "Wet Coat",
            "Coward"
        ],
        "Skills": [
            "Scratch",
            "Toughen Up",
            "Burrow",
            "Berserk",
            "Boulder Barrage",
            "Sand Columns",
            "Head Crab",
            "Shell Drill",
            "Suffocate",
            "Sand Devils",
            "Epiphany",
            "Taser",
            "Disable",
            "Sandspout",
            "Quicksand",
            "Concentrate",
            "Agility Training",
            "Precision Eye",
            "Rage",
            "Last Stand",
            "Desert Winds",
            "Reconstruct"
        ]
    },
    "Sandril": {
        "id": 79,
        "Type": "Sand",
        "BST": {
            "HP": 185,
            "Atk": 168,
            "Def": 268,
            "SpA": 108,
            "SpD": 133,
            "Spe": 109,
            "SP": 34
        },
        "Traits": [
            "Fast Learner",
            "Wet Coat",
            "Coward"
        ],
        "Skills": [
            "Scratch",
            "Toughen Up",
            "Burrow",
            "Berserk",
            "Boulder Barrage",
            "Sand Columns",
            "Head Crab",
            "Shell Drill",
            "Suffocate",
            "Sand Devils",
            "Epiphany",
            "Taser",
            "Disable",
            "Sandspout",
            "Quicksand",
            "Concentrate",
            "Agility Training",
            "Precision Eye",
            "Rage",
            "Last Stand",
            "Desert Winds",
            "Reconstruct"
        ]
    },
    "Blizzburd": {
        "id": 80,
        "Type": "Ice",
        "BST": {
            "HP": 102,
            "Atk": 122,
            "Def": 93,
            "SpA": 127,
            "SpD": 122,
            "Spe": 84,
            "SP": 34
        },
        "Traits": [
            "Intelligent",
            "Winter Coat",
            "Cool Body"
        ],
        "Skills": [
            "Claw",
            "Frost Web",
            "Dirty Snow",
            "Peck",
            "Permafrost",
            "Ice Wall",
            "Frost Feathers",
            "Mist",
            "Shattering Claw",
            "Sharp Snowball",
            "Clearing Wind",
            "Pinion Slice",
            "Frigid Barrier",
            "Epiphany",
            "Scream",
            "Slush",
            "Disable",
            "Snowball",
            "Whoosh",
            "Deep Cut",
            "Phantom Spike",
            "Monsoon",
            "Icy Flurry",
            "Feint Spurts",
            "Concentrate",
            "Agility Training",
            "Tempest",
            "Snowfall",
            "Precision Eye",
            "Rage",
            "Last Stand",
            "Berserk"
        ]
    },
    "Blizzian": {
        "id": 81,
        "Type": "Ice",
        "BST": {
            "HP": 183,
            "Atk": 194,
            "Def": 179,
            "SpA": 182,
            "SpD": 176,
            "Spe": 118,
            "SP": 34
        },
        "Traits": [
            "Intelligent",
            "Winter Coat",
            "Cool Body"
        ],
        "Skills": [
            "Claw",
            "Frost Web",
            "Dirty Snow",
            "Peck",
            "Permafrost",
            "Ice Wall",
            "Frost Feathers",
            "Mist",
            "Shattering Claw",
            "Sharp Snowball",
            "Clearing Wind",
            "Pinion Slice",
            "Frigid Barrier",
            "Epiphany",
            "Scream",
            "Slush",
            "Disable",
            "Snowball",
            "Whoosh",
            "Deep Cut",
            "Phantom Spike",
            "Monsoon",
            "Icy Flurry",
            "Feint Spurts",
            "Concentrate",
            "Agility Training",
            "Tempest",
            "Snowfall",
            "Precision Eye",
            "Rage",
            "Last Stand",
            "Berserk"
        ]
    },
    "Purrgy": {
        "id": 82,
        "Type": "Ghost",
        "BST": {
            "HP": 88,
            "Atk": 102,
            "Def": 78,
            "SpA": 118,
            "SpD": 84,
            "Spe": 100,
            "SP": 34
        },
        "Traits": [
            "Tactical Retreat",
            "Backup Plan"
        ],
        "Skills": [
            "Fade Attack",
            "Confusion",
            "Kitty Claws",
            "Concentrate",
            "Premonition",
            "Ghastly Nap",
            "Phantom Spike",
            "Cat Scratch",
            "Soul Swap",
            "Lacerate",
            "Disable",
            "Ignite",
            "Ball of Darkness",
            "EMP",
            "Scream",
            "Heatwave",
            "Deep Cut",
            "Artificial Night",
            "Cute Pose",
            "Disable Trait",
            "Disable Heal",
            "Shared Fate",
            "Inner Peace",
            "Smokescreen",
            "Agility Training",
            "Precision Eye",
            "Rage",
            "Crunch",
            "Last Stand",
            "Poison Chomp",
            "Scary Vision",
            "Time Warp"
        ]
    },
    "Ghinx": {
        "id": 83,
        "Type": "Ghost",
        "BST": {
            "HP": 117,
            "Atk": 131,
            "Def": 116,
            "SpA": 157,
            "SpD": 128,
            "Spe": 129,
            "SP": 34
        },
        "Traits": [
            "Tactical Retreat",
            "Backup Plan"
        ],
        "Skills": [
            "Fade Attack",
            "Confusion",
            "Kitty Claws",
            "Concentrate",
            "Premonition",
            "Ghastly Nap",
            "Phantom Spike",
            "Cat Scratch",
            "Soul Swap",
            "Lacerate",
            "Disable",
            "Ignite",
            "Ball of Darkness",
            "EMP",
            "Scream",
            "Heatwave",
            "Deep Cut",
            "Artificial Night",
            "Cute Pose",
            "Disable Trait",
            "Disable Heal",
            "Shared Fate",
            "Inner Peace",
            "Smokescreen",
            "Agility Training",
            "Precision Eye",
            "Rage",
            "Crunch",
            "Last Stand",
            "Poison Chomp",
            "Scary Vision",
            "Time Warp"
        ]
    },
    "Purrghast": {
        "id": 84,
        "Type": "Ghost",
        "BST": {
            "HP": 158,
            "Atk": 185,
            "Def": 138,
            "SpA": 204,
            "SpD": 169,
            "Spe": 182,
            "SP": 34
        },
        "Traits": [
            "Tactical Retreat",
            "Backup Plan"
        ],
        "Skills": [
            "Fade Attack",
            "Confusion",
            "Kitty Claws",
            "Concentrate",
            "Premonition",
            "Ghastly Nap",
            "Phantom Spike",
            "Cat Scratch",
            "Soul Swap",
            "Lacerate",
            "Disable",
            "Ignite",
            "Ball of Darkness",
            "EMP",
            "Epiphany",
            "Scream",
            "Heatwave",
            "Deep Cut",
            "Artificial Night",
            "Cute Pose",
            "Disable Trait",
            "Disable Heal",
            "Shared Fate",
            "Inner Peace",
            "Smokescreen",
            "Agility Training",
            "Precision Eye",
            "Rage",
            "Crunch",
            "Last Stand",
            "Poison Chomp",
            "Berserk",
            "Scary Vision",
            "Time Warp"
        ]
    },
    "Gauslime": {
        "id": 85,
        "Type": "Electric",
        "BST": {
            "HP": 49,
            "Atk": 141,
            "Def": 142,
            "SpA": 121,
            "SpD": 106,
            "Spe": 78,
            "SP": 34
        },
        "Traits": [
            "Stick Layer",
            "Stinky",
            "Gravity Pull",
            "Magnetic"
        ],
        "Skills": [
            "Power Slap",
            "Toughen Up",
            "Electric Pound",
            "Disable",
            "Lightning Strike",
            "Taser",
            "Last Stand",
            "Body Blast",
            "Ooze Armor",
            "Transcending",
            "Spark Wall",
            "Mist",
            "Epiphany",
            "Zen Cure",
            "Dirty Snow",
            "Bolt Bomb",
            "Beat Up",
            "Concentrate",
            "Agility Training",
            "Splatter",
            "Precision Eye",
            "Precision Punch",
            "Rage",
            "Desert Winds",
            "Berserk",
            "Toxic Cloud",
            "Electrify"
        ]
    },
    "Magnamire": {
        "id": 86,
        "Type": "Electric",
        "BST": {
            "HP": 133,
            "Atk": 215,
            "Def": 209,
            "SpA": 163,
            "SpD": 172,
            "Spe": 117,
            "SP": 34
        },
        "Traits": [
            "Stick Layer",
            "Stinky",
            "Gravity Pull",
            "Magnetic"
        ],
        "Skills": [
            "Power Slap",
            "Toughen Up",
            "Electric Pound",
            "Disable",
            "Lightning Strike",
            "Taser",
            "Last Stand",
            "Body Blast",
            "Ooze Armor",
            "Transcending",
            "Spark Wall",
            "Mist",
            "Epiphany",
            "Zen Cure",
            "Dirty Snow",
            "Bolt Bomb",
            "Beat Up",
            "Concentrate",
            "Agility Training",
            "Splatter",
            "Precision Eye",
            "Precision Punch",
            "Rage",
            "Desert Winds",
            "Berserk",
            "Toxic Cloud",
            "Electrify"
        ]
    },
    "Quagoo": {
        "id": 87,
        "Type": "Water",
        "BST": {
            "HP": 81,
            "Atk": 88,
            "Def": 141,
            "SpA": 141,
            "SpD": 108,
            "Spe": 121,
            "SP": 34
        },
        "Traits": [
            "Conserver",
            "Caffeinated",
            "Water Cooled",
            "Reconstitution"
        ],
        "Skills": [
            "Bubble Burst",
            "Health Link",
            "Cloudburst",
            "Double Slash",
            "Monsoon",
            "Poison Chomp",
            "Sticky Saliva",
            "Geyser",
            "Hydro Punch",
            "Scream",
            "Mist",
            "Bubble Blower",
            "Slush",
            "Zen Cure",
            "Deep Cut",
            "Phantom Spike",
            "Disable Heal",
            "Inner Peace",
            "Feint Spurts",
            "Splash",
            "Quicksand",
            "Concentrate",
            "Agility Training",
            "Snowfall",
            "Precision Eye",
            "Rage",
            "Last Stand",
            "Toxic Cloud",
            "Time Warp"
        ]
    },
    "Swampa": {
        "id": 88,
        "Type": "Water",
        "BST": {
            "HP": 143,
            "Atk": 147,
            "Def": 204,
            "SpA": 212,
            "SpD": 167,
            "Spe": 183,
            "SP": 34
        },
        "Traits": [
            "Conserver",
            "Caffeinated",
            "Water Cooled",
            "Reconstitution"
        ],
        "Skills": [
            "Bubble Burst",
            "Health Link",
            "Cloudburst",
            "Double Slash",
            "Monsoon",
            "Poison Chomp",
            "Sticky Saliva",
            "Geyser",
            "Hydro Punch",
            "Scream",
            "Mist",
            "Bubble Blower",
            "Slush",
            "Zen Cure",
            "Deep Cut",
            "Phantom Spike",
            "Disable Heal",
            "Inner Peace",
            "Feint Spurts",
            "Splash",
            "Quicksand",
            "Concentrate",
            "Agility Training",
            "Snowfall",
            "Precision Eye",
            "Rage",
            "Last Stand",
            "Toxic Cloud",
            "Time Warp"
        ]
    },
    "Squidly": {
        "id": 89,
        "Type": "Ghost",
        "BST": {
            "HP": 48,
            "Atk": 39,
            "Def": 31,
            "SpA": 212,
            "SpD": 111,
            "Spe": 181,
            "SP": 34
        },
        "Traits": [
            "Motivated",
            "Menacing"
        ],
        "Skills": [
            "Chomp",
            "Drain",
            "Soul Swap",
            "Shadewalker",
            "Premonition",
            "Toxic Cloud",
            "Scary Vision",
            "Super Drain",
            "Horror Mask",
            "Final Gift",
            "Ball of Darkness",
            "Artificial Night",
            "Ignite",
            "EMP",
            "Heatwave",
            "Disable Heal",
            "Shared Fate",
            "Inner Peace",
            "Concentrate",
            "Agility Training",
            "Precision Eye",
            "Rage",
            "Crunch",
            "Last Stand",
            "Poison Chomp",
            "Time Warp"
        ]
    },
    "Octotle": {
        "id": 90,
        "Type": "Ghost",
        "BST": {
            "HP": 88,
            "Atk": 68,
            "Def": 123,
            "SpA": 251,
            "SpD": 276,
            "Spe": 214,
            "SP": 34
        },
        "Traits": [
            "Motivated",
            "Menacing"
        ],
        "Skills": [
            "Chomp",
            "Drain",
            "Soul Swap",
            "Shadewalker",
            "Premonition",
            "Toxic Cloud",
            "Scary Vision",
            "Super Drain",
            "Horror Mask",
            "Final Gift",
            "Ball of Darkness",
            "Artificial Night",
            "Ignite",
            "EMP",
            "Heatwave",
            "Disable Heal",
            "Shared Fate",
            "Inner Peace",
            "Concentrate",
            "Agility Training",
            "Precision Eye",
            "Rage",
            "Crunch",
            "Last Stand",
            "Poison Chomp",
            "Time Warp"
        ]
    },
    "Ruptius": {
        "id": 91,
        "Type": "Fire",
        "BST": {
            "HP": 88,
            "Atk": 66,
            "Def": 111,
            "SpA": 132,
            "SpD": 128,
            "Spe": 68,
            "SP": 34
        },
        "Traits": [
            "Short Fused",
            "Polished Body",
            "Steam Layer"
        ],
        "Skills": [
            "Slam",
            "Toughen Up",
            "Mighty Roar",
            "Flaming Tackle",
            "Feint Bursts",
            "Heatwave",
            "Magma Punch",
            "Lava Boulder",
            "Constricting Flames",
            "Firestorm",
            "Detonate",
            "Ignite",
            "Epiphany",
            "Disable",
            "Dirty Snow",
            "Disable Heal",
            "Fire Up",
            "Inner Peace",
            "Beat Up",
            "Concentrate",
            "Agility Training",
            "Splatter",
            "Stone Fist",
            "Precision Eye",
            "Precision Punch",
            "Rage",
            "Last Stand",
            "Berserk",
            "Smackdown",
            "Fiery Breath"
        ]
    },
    "Vulbrute": {
        "id": 92,
        "Type": "Fire",
        "BST": {
            "HP": 166,
            "Atk": 142,
            "Def": 254,
            "SpA": 245,
            "SpD": 195,
            "Spe": 84,
            "SP": 34
        },
        "Traits": [
            "Short Fused",
            "Polished Body",
            "Steam Layer"
        ],
        "Skills": [
            "Slam",
            "Toughen Up",
            "Mighty Roar",
            "Flaming Tackle",
            "Feint Bursts",
            "Heatwave",
            "Magma Punch",
            "Lava Boulder",
            "Constricting Flames",
            "Firestorm",
            "Detonate",
            "Ignite",
            "Epiphany",
            "Disable",
            "Dirty Snow",
            "Disable Heal",
            "Fire Up",
            "Inner Peace",
            "Beat Up",
            "Concentrate",
            "Agility Training",
            "Splatter",
            "Stone Fist",
            "Precision Eye",
            "Precision Punch",
            "Rage",
            "Last Stand",
            "Berserk",
            "Smackdown",
            "Fiery Breath"
        ]
    },
    "Mooby": {
        "id": 93,
        "Type": "Sand",
        "BST": {
            "HP": 68,
            "Atk": 72,
            "Def": 68,
            "SpA": 64,
            "SpD": 68,
            "Spe": 68,
            "SP": 34
        },
        "Traits": [
            "Normalized",
            "Dry Wind"
        ],
        "Skills": [
            "Fury Fist",
            "Reconstruct",
            "Sandball",
            "Boulder Barrage",
            "All In",
            "Dust Storm",
            "Stone Fist",
            "Stalagmites",
            "Sumo Stance",
            "Transcending",
            "Sand Columns",
            "Desert Winds",
            "Mist",
            "Taser",
            "Cute Pose",
            "Sandspout",
            "Concentrate",
            "Agility Training",
            "Rage",
            "Last Stand",
            "Toxic Cloud"
        ]
    },
    "Molbash": {
        "id": 94,
        "Type": "Sand",
        "BST": {
            "HP": 92,
            "Atk": 188,
            "Def": 172,
            "SpA": 79,
            "SpD": 181,
            "Spe": 102,
            "SP": 34
        },
        "Traits": [
            "Normalized",
            "Dry Wind"
        ],
        "Skills": [
            "Fury Fist",
            "Reconstruct",
            "Sandball",
            "Boulder Barrage",
            "All In",
            "Dust Storm",
            "Stone Fist",
            "Stalagmites",
            "Sumo Stance",
            "Transcending",
            "Sand Columns",
            "Desert Winds",
            "Mist",
            "Epiphany",
            "Taser",
            "Disable",
            "Dirty Snow",
            "Cute Pose",
            "Sandspout",
            "Beat Up",
            "Quicksand",
            "Concentrate",
            "Agility Training",
            "Splatter",
            "Precision Eye",
            "Precision Punch",
            "Rage",
            "Last Stand",
            "Berserk",
            "Toxic Cloud"
        ]
    },
    "Malavite": {
        "id": 95,
        "Type": "Sand",
        "BST": {
            "HP": 160,
            "Atk": 242,
            "Def": 188,
            "SpA": 97,
            "SpD": 240,
            "Spe": 124,
            "SP": 34
        },
        "Traits": [
            "Normalized",
            "Dry Wind"
        ],
        "Skills": [
            "Fury Fist",
            "Reconstruct",
            "Sandball",
            "Boulder Barrage",
            "All In",
            "Dust Storm",
            "Stone Fist",
            "Stalagmites",
            "Sumo Stance",
            "Transcending",
            "Sand Columns",
            "Desert Winds",
            "Mist",
            "Epiphany",
            "Taser",
            "Disable",
            "Dirty Snow",
            "Cute Pose",
            "Sandspout",
            "Flying Kick",
            "Beat Up",
            "Quicksand",
            "Concentrate",
            "Agility Training",
            "Splatter",
            "Precision Eye",
            "Precision Punch",
            "Rage",
            "Last Stand",
            "Berserk",
            "Toxic Cloud"
        ]
    },
    "Flowish": {
        "id": 96,
        "Type": "Water",
        "BST": {
            "HP": 74,
            "Atk": 118,
            "Def": 74,
            "SpA": 68,
            "SpD": 91,
            "Spe": 138,
            "SP": 34
        },
        "Traits": [
            "Acupuncture",
            "Amplified",
            "Wet Coat",
            "Soothing Aura"
        ],
        "Skills": [
            "Slam",
            "Agility Training",
            "Cloudburst",
            "Bubble Wrap",
            "Splatter",
            "Geyser",
            "Zen Cure",
            "Hydro Punch",
            "Inner Peace",
            "Crushing Waterfall",
            "Monsoon",
            "Bubble Blower",
            "Cute Pose",
            "Disable Trait",
            "Smokescreen",
            "Splash",
            "Concentrate",
            "Snowfall",
            "Rage",
            "Last Stand",
            "Time Warp"
        ]
    },
    "Daricara": {
        "id": 97,
        "Type": "Water",
        "BST": {
            "HP": 192,
            "Atk": 221,
            "Def": 163,
            "SpA": 159,
            "SpD": 197,
            "Spe": 161,
            "SP": 34
        },
        "Traits": [
            "Acupuncture",
            "Amplified",
            "Wet Coat",
            "Soothing Aura"
        ],
        "Skills": [
            "Slam",
            "Agility Training",
            "Cloudburst",
            "Bubble Wrap",
            "Splatter",
            "Geyser",
            "Zen Cure",
            "Hydro Punch",
            "Inner Peace",
            "Crushing Waterfall",
            "Monsoon",
            "Epiphany",
            "Bubble Blower",
            "Slush",
            "Disable",
            "Dirty Snow",
            "Cute Pose",
            "Disable Trait",
            "Flying Kick",
            "Smokescreen",
            "Splash",
            "Beat Up",
            "Quicksand",
            "Concentrate",
            "Sumo Stance",
            "Stone Fist",
            "Snowfall",
            "Precision Eye",
            "Precision Punch",
            "Rage",
            "Last Stand",
            "Berserk",
            "Smackdown",
            "Time Warp"
        ]
    },
    "Mino": {
        "id": 98,
        "Type": "Fire",
        "BST": {
            "HP": 71,
            "Atk": 122,
            "Def": 61,
            "SpA": 98,
            "SpD": 98,
            "Spe": 140,
            "SP": 34
        },
        "Traits": [
            "Comeback",
            "Hardheaded",
            "Motivated"
        ],
        "Skills": [
            "Tail Spin",
            "Cute Pose",
            "Rage",
            "Piercing Horns",
            "Agility Training",
            "Heated Horns",
            "Berserk",
            "Ignite",
            "Fiery Breath",
            "Headcrash",
            "Stampede",
            "Overdrive",
            "Epiphany",
            "Disable",
            "Heatwave",
            "Feint Bursts",
            "Detonate",
            "Disable Trait",
            "Fire Up",
            "Smokescreen",
            "Concentrate",
            "Precision Eye",
            "Last Stand"
        ]
    },
    "Blazitaur": {
        "id": 99,
        "Type": "Fire",
        "BST": {
            "HP": 132,
            "Atk": 204,
            "Def": 138,
            "SpA": 157,
            "SpD": 159,
            "Spe": 212,
            "SP": 34
        },
        "Traits": [
            "Comeback",
            "Hardheaded",
            "Motivated"
        ],
        "Skills": [
            "Tail Spin",
            "Cute Pose",
            "Rage",
            "Piercing Horns",
            "Agility Training",
            "Heated Horns",
            "Berserk",
            "Ignite",
            "Fiery Breath",
            "Headcrash",
            "Stampede",
            "Overdrive",
            "Epiphany",
            "Disable",
            "Heatwave",
            "Feint Bursts",
            "Detonate",
            "Disable Trait",
            "Fire Up",
            "Smokescreen",
            "Concentrate",
            "Precision Eye",
            "Last Stand"
        ]
    },
    "Frova": {
        "id": 100,
        "Type": "Ice",
        "BST": {
            "HP": 58,
            "Atk": 48,
            "Def": 46,
            "SpA": 91,
            "SpD": 71,
            "Spe": 84,
            "SP": 34
        },
        "Traits": [
            "Crippler",
            "Caffeinated",
            "Clean Retreat",
            "Antarctic"
        ],
        "Skills": [
            "Scratch",
            "Hypno Wave",
            "Drain",
            "Snowburst",
            "Toughen Up",
            "Clearing Wind",
            "Frost Web",
            "Frozen Spikes",
            "Energy Drain",
            "Wind Blast",
            "Icy Flurry",
            "Tempest",
            "Frigid Barrier",
            "Scream",
            "Slush",
            "Snowball",
            "Deep Cut",
            "Phantom Spike",
            "Monsoon",
            "Super Drain",
            "Feint Spurts",
            "Concentrate",
            "Agility Training",
            "Sandman",
            "Snowfall",
            "Rage",
            "Last Stand"
        ]
    },
    "Froshell": {
        "id": 101,
        "Type": "Ice",
        "BST": {
            "HP": 86,
            "Atk": 65,
            "Def": 104,
            "SpA": 115,
            "SpD": 152,
            "Spe": 92,
            "SP": 34
        },
        "Traits": [
            "Crippler",
            "Caffeinated",
            "Clean Retreat",
            "Antarctic"
        ],
        "Skills": [
            "Scratch",
            "Hypno Wave",
            "Drain",
            "Snowburst",
            "Toughen Up",
            "Clearing Wind",
            "Frost Web",
            "Frozen Spikes",
            "Energy Drain",
            "Wind Blast",
            "Icy Flurry",
            "Tempest",
            "Frigid Barrier",
            "Scream",
            "Slush",
            "Snowball",
            "Deep Cut",
            "Phantom Spike",
            "Monsoon",
            "Super Drain",
            "Feint Spurts",
            "Concentrate",
            "Agility Training",
            "Sandman",
            "Snowfall",
            "Rage",
            "Last Stand"
        ]
    },
    "Glamoth": {
        "id": 102,
        "Type": "Ice",
        "BST": {
            "HP": 150,
            "Atk": 139,
            "Def": 128,
            "SpA": 253,
            "SpD": 226,
            "Spe": 161,
            "SP": 34
        },
        "Traits": [
            "Crippler",
            "Caffeinated",
            "Clean Retreat",
            "Antarctic"
        ],
        "Skills": [
            "Scratch",
            "Hypno Wave",
            "Drain",
            "Snowburst",
            "Toughen Up",
            "Clearing Wind",
            "Frost Web",
            "Frozen Spikes",
            "Energy Drain",
            "Wind Blast",
            "Icy Flurry",
            "Tempest",
            "Frigid Barrier",
            "Scream",
            "Slush",
            "Snowball",
            "Whoosh",
            "Deep Cut",
            "Phantom Spike",
            "Monsoon",
            "Disable Heal",
            "Super Drain",
            "Inner Peace",
            "Feint Spurts",
            "Concentrate",
            "Agility Training",
            "Sandman",
            "Snowfall",
            "Precision Eye",
            "Rage",
            "Last Stand"
        ]
    },
    "Otogy": {
        "id": 103,
        "Type": "Ghost",
        "BST": {
            "HP": 148,
            "Atk": 118,
            "Def": 68,
            "SpA": 138,
            "SpD": 68,
            "Spe": 49,
            "SP": 34
        },
        "Traits": [
            "Fully Rested",
            "Clean Retreat"
        ],
        "Skills": [
            "Shadewalker",
            "Frantic Mask",
            "Voodoo",
            "Final Gift",
            "Phantom Spike",
            "Horror Mask",
            "Ball of Darkness",
            "Artificial Night",
            "Sacrifice",
            "Flying Kick",
            "Hocus-Pocus",
            "Ignite",
            "EMP",
            "Epiphany",
            "Scream",
            "Disable",
            "Heatwave",
            "Deep Cut",
            "Premonition",
            "Disable Heal",
            "Shared Fate",
            "Inner Peace",
            "Concentrate",
            "Agility Training",
            "Precision Eye",
            "Rage",
            "Last Stand",
            "Berserk",
            "Scary Vision",
            "Time Warp"
        ]
    },
    "Orotchy": {
        "id": 104,
        "Type": "Ghost",
        "BST": {
            "HP": 237,
            "Atk": 229,
            "Def": 131,
            "SpA": 176,
            "SpD": 108,
            "Spe": 99,
            "SP": 34
        },
        "Traits": [
            "Fully Rested",
            "Clean Retreat"
        ],
        "Skills": [
            "Shadewalker",
            "Frantic Mask",
            "Voodoo",
            "Final Gift",
            "Phantom Spike",
            "Horror Mask",
            "Ball of Darkness",
            "Artificial Night",
            "Sacrifice",
            "Flying Kick",
            "Hocus-Pocus",
            "Ignite",
            "EMP",
            "Epiphany",
            "Scream",
            "Disable",
            "Heatwave",
            "Deep Cut",
            "Premonition",
            "Disable Heal",
            "Shared Fate",
            "Inner Peace",
            "Concentrate",
            "Agility Training",
            "Precision Eye",
            "Rage",
            "Last Stand",
            "Berserk",
            "Scary Vision",
            "Time Warp"
        ]
    },
    "Shimshell": {
        "id": 105,
        "Type": "Water",
        "BST": {
            "HP": 58,
            "Atk": 132,
            "Def": 202,
            "SpA": 88,
            "SpD": 49,
            "Spe": 78,
            "SP": 34
        },
        "Traits": [
            "Empathetic",
            "Nurse",
            "Hardheaded",
            "Shiny"
        ],
        "Skills": [
            "Chomp",
            "Crystal Surprise",
            "Crystal Shot",
            "Streamline",
            "Feint Spurts",
            "Tail Sweep",
            "Permafrost",
            "Whirlpool",
            "Crystal Barrage",
            "Withdraw",
            "Headbash",
            "Epiphany",
            "Bubble Blower",
            "Zen Cure",
            "Disable",
            "Monsoon",
            "Cute Pose",
            "Splash",
            "Quicksand",
            "Concentrate",
            "Agility Training",
            "Snowfall",
            "Precision Eye",
            "Rage",
            "Crunch",
            "Last Stand",
            "Poison Chomp",
            "Berserk",
            "Geyser",
            "Time Warp"
        ]
    },
    "Atlantern": {
        "id": 106,
        "Type": "Water",
        "BST": {
            "HP": 117,
            "Atk": 198,
            "Def": 344,
            "SpA": 204,
            "SpD": 102,
            "Spe": 137,
            "SP": 34
        },
        "Traits": [
            "Empathetic",
            "Nurse",
            "Hardheaded",
            "Shiny"
        ],
        "Skills": [
            "Chomp",
            "Crystal Surprise",
            "Crystal Shot",
            "Streamline",
            "Feint Spurts",
            "Tail Sweep",
            "Permafrost",
            "Whirlpool",
            "Crystal Barrage",
            "Withdraw",
            "Headbash",
            "Epiphany",
            "Bubble Blower",
            "Zen Cure",
            "Disable",
            "Monsoon",
            "Cute Pose",
            "Disable Trait",
            "Smokescreen",
            "Splash",
            "Quicksand",
            "Concentrate",
            "Agility Training",
            "Snowfall",
            "Precision Eye",
            "Rage",
            "Crunch",
            "Last Stand",
            "Poison Chomp",
            "Berserk",
            "Geyser",
            "Time Warp"
        ]
    }
}`
const loadMons = JSON.parse(mons);

function getMons() {
    return JSON.parse(mons);
}

var mon1;
var mon2;
var mon3;
var mon4;
var mon5;
var mon6;

var monLevel1;
var monLevel2;
var monLevel3;
var monLevel4;
var monLevel5;
var monLevel6;

var stats = [
    mon1,
    mon2,
    mon3,
    mon4,
    mon5,
    mon6
];

var levels = [
    monLevel1,
    monLevel2,
    monLevel3,
    monLevel4,
    monLevel5,
    monLevel6
];

var obj;

var validMon = false;

//Moves
var moveList;

var flashMoves = [
    
];

//Traits
var traitList;

function setMon(monNum) {
    selectMon = monNum - 1;
    monCheck(monNum);
    console.log(monNum);
}

function monCheck(monNum) {
    validMon = false;
    toggleTable(monNum);
    stats[selectMon] = document.getElementById('Mon' + monNum).value;

    for (i=0;i<document.getElementById('coromon').options.length;i++) {
        if (stats[selectMon] == document.getElementById('coromon').options[i].value) {
            validMon = true;
            findMon(monNum);
            setLevels(monNum);
            toggleTable(monNum);
        }
    }
}

function findMon(monNum) {
    if (validMon == true) {
        obj = getMons()[stats[selectMon]];

        document.getElementById('name' + monNum).innerHTML = stats[selectMon];
        document.getElementById('type' + monNum).innerHTML = obj.Type;
        document.getElementById('hp' + monNum).innerHTML = obj.BST.HP;
        document.getElementById('spe' + monNum).innerHTML = obj.BST.Spe;
        document.getElementById('atk' + monNum).innerHTML = obj.BST.Atk;
        document.getElementById('def' + monNum).innerHTML = obj.BST.Def;
        document.getElementById('spa' + monNum).innerHTML = obj.BST.SpA;
        document.getElementById('spd' + monNum).innerHTML = obj.BST.SpD;
        document.getElementById('sp' + monNum).innerHTML = obj.BST.SP;
        document.getElementById('imgOfMon' + monNum).innerHTML = "";
        var monImg = document.createElement('img'); 
        monImg.src = stats[selectMon] + ".png";
        document.getElementById('imgOfMon' + monNum).appendChild(monImg).style.maxWidth = "200px";
        document.getElementById('imgOfMon' + monNum).appendChild(monImg).style.maxHeight = "130px";
        document.getElementById('imgOfMon' + monNum).appendChild(monImg);

        getMoves(monNum);
        getTraits(monNum);
        getItems(monNum);
    }    
}

function setLevels(monNum) {
    levels[selectMon] = document.getElementById('monLevel' + monNum).value;
    monLevel = levels[selectMon];
    console.log(monLevel);

    changeStats();
}

function toggleTable(monNum) {
    if (validMon == true) {
        document.getElementById('hideData' + monNum).style.display = "block";
        document.getElementById('monData' + monNum).style.display = "block";
    } else {
        document.getElementById('hideData' + monNum).style.display = "none";
        document.getElementById('monData' + monNum).style.display = "none";
    }
}

function changeStats() {
    obj.BST.HP = Math.floor((10+ +monLevel)+Math.floor((+monLevel/99)*loadMons[stats[selectMon]].BST.HP));
    obj.BST.Spe = Math.floor(5+Math.floor((+monLevel/99)*loadMons[stats[selectMon]].BST.Spe));
    obj.BST.Atk = Math.floor(5+Math.floor((+monLevel/99)*loadMons[stats[selectMon]].BST.Atk));
    obj.BST.SpA = Math.floor(5+Math.floor((+monLevel/99)*loadMons[stats[selectMon]].BST.SpA));
    obj.BST.Def = Math.floor(5+Math.floor((+monLevel/99)*loadMons[stats[selectMon]].BST.Def));
    obj.BST.SpD = Math.floor(5+Math.floor((+monLevel/99)*loadMons[stats[selectMon]].BST.SpD));
    obj.BST.SP = Math.floor(20+Math.floor((+monLevel/99)*loadMons[stats[selectMon]].BST.SP));
    console.log(obj);
    console.log(stats[selectMon]);
}

function getMoves(monNum) {
    document.getElementById('moves' + monNum).innerHTML = '';
    for (j=0 ; j<document.getElementsByClassName('moveInput' + monNum).length ; j++) {
        document.getElementsByClassName('moveInput' + monNum)[j].value = '';
    };

    moveList = document.getElementById('moves' + monNum);
    obj.Skills.forEach(function(thing1) {
        var option1 = document.createElement('option');
        option1.value = thing1;
        moveList.appendChild(option1);
    })
    flashMoves.forEach(function(thing2) {
        var option2 = document.createElement('option');
        option2.value = thing2;
        moveList.appendChild(option2);
    })
    console.log(moveList);
}

function getTraits(monNum) {
    document.getElementById('traits' + monNum).innerHTML = '';
    document.getElementsByClassName('traitInput' + monNum).value = '';

    traitList = document.getElementById('traits' + monNum);
    obj.Traits.forEach(function(thing3) {
        var option3 = document.createElement('option');
        option3.value = thing3;
        traitList.appendChild(option3);
    })
    console.log(traitList);
}

function getItems(monNum) {
    document.getElementsByClassName('itemInput' + monNum).value = '';
}

function totalPP(monNum) {
    var total = 0;

    for (k=0 ; k<document.getElementsByClassName('PPinvest' + monNum).length ; k++) {
        total += +document.getElementsByClassName('PPinvest' + monNum)[k].value;
    }
    document.getElementById('totalPP.' + monNum).value = total;
}

function totalStats(monNum) {
    var totalHP = document.getElementById('hp' + monNum).innerHTML;
    document.getElementById('totalHP' + monNum).innerHTML = obj.BST.HP + +document.getElementById('hpInvest' + monNum).value;

    var totalSpeed = document.getElementById('spe' + monNum).innerHTML;
    document.getElementById('totalSpeed' + monNum).innerHTML = obj.BST.Spe + +document.getElementById('speInvest' + monNum).value;

    var totalAtk = document.getElementById('atk' + monNum).innerHTML;
    document.getElementById('totalAtk' + monNum).innerHTML = obj.BST.Atk + +document.getElementById('atkInvest' + monNum).value;

    var totalDef = document.getElementById('def' + monNum).innerHTML;
    document.getElementById('totalDef' + monNum).innerHTML = obj.BST.Def + +document.getElementById('defInvest' + monNum).value;

    var totalSpA = document.getElementById('spa' + monNum).innerHTML;
    document.getElementById('totalSpA' + monNum).innerHTML = obj.BST.SpA + +document.getElementById('spatkInvest' + monNum).value;

    var totalSpD = document.getElementById('spd' + monNum).innerHTML;
    document.getElementById('totalSpD' + monNum).innerHTML = obj.BST.SpD + +document.getElementById('spdefInvest' + monNum).value;

    var totalSP = document.getElementById('sp' + monNum).innerHTML;
    document.getElementById('totalSP' + monNum).innerHTML = obj.BST.SP + +document.getElementById('spInvest' + monNum).value;
}

function submit() {
    for (n=1;n<7;n++) {
        if (levels[n-1] !== 50) {
            var levelText = "Level: " + (document.getElementById('monLevel' + n).value) + '\n'
        }
        if (levels[n-1] == 50) {
            levelText = "";
        }
        console.log(levelText);
        document.getElementById('coromonMon').innerHTML +=
        (document.getElementById('Mon' + n).value) + " @ " + (document.getElementById('monitem' + n).value) + '\n' +
        levelText +
        "Potency: " + (document.getElementById('potency' + n).value) + '\n' +
        "Trait: " + (document.getElementById('montrait' + n).value) + '\n' +
        "PP: " + (+document.getElementById('hpInvest' + (n)).value) + " HP / "
        + (+document.getElementById('speInvest' + (n)).value) + " Spe / "
        + (+document.getElementById('atkInvest' + (n)).value) + " Atk / "
        + (+document.getElementById('defInvest' + (n)).value) + " Def / "
        + (+document.getElementById('spatkInvest' + (n)).value) + " SpA / "
        + (+document.getElementById('spdefInvest' + (n)).value) + " SpD / "
        + (+document.getElementById('spInvest' + (n)).value) + " SP" + '\n' +
        "Skills:" + '\n' +
        "-" + document.getElementsByClassName('moveInput' + (n))[0].value + '\n' +
        "-" + document.getElementsByClassName('moveInput' + (n))[1].value + '\n' +
        "-" + document.getElementsByClassName('moveInput' + (n))[2].value + '\n' +
        "-" + document.getElementsByClassName('moveInput' + (n))[3].value + '\n\n';
    }
    console.log(document.getElementById('coromonMon').innerHTML);
    transfer();
}

function transfer() {
    var text1 = document.getElementById('coromonMon').innerHTML;

    localStorage.setItem("text1", text1);

    console.log(text1);
}

var text;
var perCoromon;
var lines;

var monName;
var item;
var level;
var potency
var trait;
var invests;
var skills;

setTimeout(importSets, 10);

function reset() {
    localStorage.clear();
}

function importSets() {
    text = localStorage.getItem('text');
    console.log(text);
    perCoromon = text.split("\n\n");
    console.log(perCoromon);

    for (o=0;o<perCoromon.length;o++) {
        for (p=0;p<Object.keys(loadMons).length;p++) {
            if (perCoromon[o].includes(Object.keys(loadMons)[p])) {
                document.getElementById('Mon' + (o+1)).value = Object.keys(loadMons)[p];
                setTimeout(setMon(o+1), 10);
                console.log(stats[o]);
                monName = stats[o];
                console.log(monName);
            }
        }
        for (q=0;q<document.getElementById('items').options.length;q++) {
            if (perCoromon[o].includes(document.getElementById('items').options[q].value)) {
                document.getElementById('monitem' + (o+1)).value = document.getElementById('items').options[q].value;
                item = document.getElementById('monitem' + (o+1)).value
                console.log(item);
            }
        }
        lines = perCoromon[o].split("\n");
        console.log(lines);

        if (lines[1].includes("Level:")) {
            level = (lines[1].split(" "))[1];
            if (level > 0 && level < 100) {
                document.getElementById('monLevel' + (o+1)).value = (lines[1].split(" "))[1];
            } else {
                document.getElementById('monLevel' + (o+1)).value = 50;
            }
            setTimeout(setMon(o+1), 10);
            console.log(level);

            potency = (lines[2].split(" "))[1];
            if (potency > 0 && potency < 22) {
                document.getElementById('potency' + (o+1)).value = (lines[2].split(" "))[1];
            } else {
                document.getElementById('potency' + (o+1)).value = 21;
            }
            console.log(potency);

            for (r=0;r<loadMons[monName].Traits.length;r++) {
                if (perCoromon[o].includes(loadMons[monName].Traits[r])) {
                    document.getElementById('montrait' + (o+1)).value = loadMons[monName].Traits[r];
                    trait = document.getElementById('montrait' + (o+1)).value;
                    console.log(trait);
                }
            }

            document.getElementById('hpInvest' + (o+1)).value = (lines[4].split(" "))[1];
            document.getElementById('speInvest' + (o+1)).value = (lines[4].split(" "))[4];
            document.getElementById('atkInvest' + (o+1)).value = (lines[4].split(" "))[7];
            document.getElementById('defInvest' + (o+1)).value = (lines[4].split(" "))[10];
            document.getElementById('spatkInvest' + (o+1)).value = (lines[4].split(" "))[13];
            document.getElementById('spdefInvest' + (o+1)).value = (lines[4].split(" "))[16];
            document.getElementById('spInvest' + (o+1)).value = (lines[4].split(" "))[19];
            totalPP(o+1);
            totalStats(o+1);

            for (s=0;s<4;s++) {
                for (t=0;t<loadMons[monName].Skills.length;t++) {
                    if ((lines[s+6].split("-"))[1] == loadMons[monName].Skills[t]) {
                        document.getElementsByClassName('moveInput' + (o+1))[s].value = (lines[s+6].split("-"))[1];
                        console.log((lines[s+6].split("-")));
                        console.log((lines[s+6].split("-"))[1]);
                    }
                }
            }
        } else {
            document.getElementById('monLevel' + (o+1)).value = 50;

            setTimeout(setMon(o+1), 10);
            console.log(level);

            potency = (lines[1].split(" "))[1];
            if (potency > 0 && potency < 22) {
                document.getElementById('potency' + (o+1)).value = (lines[1].split(" "))[1];
            } else {
                document.getElementById('potency' + (o+1)).value = 21;
            }
            console.log(potency);

            for (r=0;r<loadMons[monName].Traits.length;r++) {
                if (perCoromon[o].includes(loadMons[monName].Traits[r])) {
                    document.getElementById('montrait' + (o+1)).value = loadMons[monName].Traits[r];
                    trait = document.getElementById('montrait' + (o+1)).value;
                    console.log(trait);
                }
            }

            document.getElementById('hpInvest' + (o+1)).value = (lines[3].split(" "))[1];
            document.getElementById('speInvest' + (o+1)).value = (lines[3].split(" "))[4];
            document.getElementById('atkInvest' + (o+1)).value = (lines[3].split(" "))[7];
            document.getElementById('defInvest' + (o+1)).value = (lines[3].split(" "))[10];
            document.getElementById('spatkInvest' + (o+1)).value = (lines[3].split(" "))[13];
            document.getElementById('spdefInvest' + (o+1)).value = (lines[3].split(" "))[16];
            document.getElementById('spInvest' + (o+1)).value = (lines[3].split(" "))[19];
            totalPP(o+1);
            totalStats(o+1);

            for (s=0;s<4;s++) {
                for (t=0;t<loadMons[monName].Skills.length;t++) {
                    if ((lines[s+5].split("-"))[1] == loadMons[monName].Skills[t]) {
                        document.getElementsByClassName('moveInput' + (o+1))[s].value = (lines[s+5].split("-"))[1];
                        console.log((lines[s+5].split("-")));
                        console.log((lines[s+5].split("-"))[1]);
                    }
                }
            }
        }
    }
}