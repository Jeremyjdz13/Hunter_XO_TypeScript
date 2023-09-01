import { v4 as uuidv4 } from 'uuid'


export const characterTemplate = {
        id: uuidv4(),
        name: 'Character Template',
        alias: 'Alias',
        nature: 'Nature',
        imageURL:'',
        primaryAttributes:[
                {
                    id: uuidv4(),
                    name: 'Fight',
                    rank: 3
                },
                {
                    id: uuidv4(),
                    name: 'Strength',
                    rank: 3
                },
                {
                    id: uuidv4(),
                    name: 'Agility',
                    rank: 3
                },
                {
                    id: uuidv4(),
                    name: 'Endurance',
                    rank: 3
                },
                {
                    id: uuidv4(),
                    name: 'Reason',
                    rank: 3
                },
                {
                    id: uuidv4(),
                    name: 'Intuition',
                    rank: 3
                },
                {
                    id: uuidv4(),
                    name: 'Psyche',
                    rank: 3
                }
            ],
        acclaim:[
                {
                    id: uuidv4(),
                    name: 'Acclaim',             
                    rank: 0
                }
            ],
        infamy: [
                {
                    id: uuidv4(),
                    name: 'Infamy',             
                    rank: 0
                }
            ],
        karma: [
            {
                id: uuidv4(),
                name: 'Karma',             
                rank: 0
            },
        ], 
        experience: [
            {
                id: uuidv4(),
                name: 'Experience',             
                rank: 0
            },
        ],    
        armor: [
            {
                id: uuidv4(),
                name: 'Armor',             
                rank: 0
            }
        ],
        combatSkills:[
                {
                    id:uuidv4(),
                    name: 'Combat Skill',
                    rank: 1
                }
            ],
        physicalSkills:[
                {
                    id: uuidv4(),
                    name: 'Physical Skill',
                    rank: 1
                }
            ],   
        professionalSkills:[
                {
                    id: uuidv4(),
                    name: 'Professional Skill',
                    rank: 1
                }
            ],
        mentalSkills:[
                {
                    id: uuidv4(),
                    name: 'Mental Skill',
                    rank: 1
                }
            ],
        backgrounds:[
                {
                    id: uuidv4(),
                    name: 'Background',
                    rank: 1,
                    description: 'What does this background do?'
                }
            ],
        merits:[
                {
                    id: uuidv4(),
                    name: 'Merit',
                    rank: 1
                }
            ],
        flaws:[
                {
                    id: uuidv4(),
                    name: 'Flaw',
                    rank: 1
                }
            ],
        powers:[
                {
                    id: uuidv4(),
                    name: 'Super Power',
                    rank: 1
                }
            ],
        talismans:[
                {
                    id: uuidv4(),
                    name: 'Talisman',
                    rank: 1,
                    description: 'What does this Talisman do?'
                }
            ],
        powerStunts:[
                {
                    id: uuidv4(),
                    name: 'Power Stunt',
                    rank: 0,
                    description: 'What does this Power Stunt do?'
                }
            ] ,
        spellbook:[
            {
                id: uuidv4(),
                name: 'spell',
                rank: 0,
                description: 'What does this Power Stunt do?',
                purchased: false
            }
        ],
        protonium:[
                {
                    id: uuidv4(),
                    name: 'Spent Protonium',
                    rank: 0,
                },
                {
                    id: uuidv4(),
                    name: 'Protonium',             
                    rank: 0
                }
            ],
        bashing:[
                {
                    id: uuidv4(),
                    name: 'Count',
                    rank: 0
                }
            ],
        lethal:[
                {
                    id: uuidv4(),
                    name: 'Count',
                    rank: 0, 
                }
            ],
        equipmentItems:[
                {
                    id: uuidv4(),
                    name: 'Kitchen Chair',
                    rank: 5,
                    description: 'Solid Oak chair for bashing heads or to sit for a nice cup of tea.'
                },
                {
                    id: uuidv4(),
                    name: 'Cash',
                    rank: 4,
                    description: 'Based off of my resources I should have this much cash per month.'
                }
            ] 
    }