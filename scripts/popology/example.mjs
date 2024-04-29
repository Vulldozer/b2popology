import { Tower } from "./tower.mjs"

const sampleTower = {
    "name": "sampleTower", "displayName": "Sample Tower",

    "upgrades": {
        "base": [
            {"name": "dart", "action": "new", "damage": 2, "attackCooldown": 0.95},
            {"name": "bullet", "action": "new", "damage": 3, "pierce": 1, "impact": true, "attackCooldown": 2}
        ],
        "paths": [
            [
                [
                    {"name": "dart", "action": "buff", "damage": ["+", 1]}
                ],[
                    {"name": "dart", "action": "buff", "damage": ["+", 2], "attackCooldown": ["*", 0.5]},
                    {"name": "bullet", "action": "buff", "damage": ["+", 3]}
                ],[
                    {"name": "fireball", "action": "new", "damage": 2, "attackCooldown": 0.8},
                    {"name": "dart", "action": "buff", "damage": ["%", 0.5]},
                    {
                        "name": "bullet", 
                        "action": "buff", 
                        "impact": false
                    }
                ],[
                    {"name": "dart", "action": "buff", "damage": ["%", 0.15]},
                    {"name": "fireball", "action": "buff", "damage": ["%", 0.15]},
                    {"name": "bullet", "action": "buff", "attackCooldown": ["*", 0.01]}
                ],[
                    {"name": "dart", "action": "buff", "damage": ["*", 2]},
                    {"name": "bullet", "action": "buff", "impact": "invert"}
                ]
            ],
            [
                [], [], [], [], []
            ],
            [
                [], [], [], [], []
            ]
        ]
    }
}

let tower1 = new Tower(sampleTower)

// console.log(tower1.getTowerUpgrade(true))
// console.log(tower1.getTowerUpgrade(false, 0, 0))
console.log(tower1.getName())
console.log(tower1.getConstructedTower([5, 0, 0]))