import { v4 as uuidv4 } from 'uuid'


export const characterTemplate = {
        id: uuidv4(),
        name: 'Character Template',
        alias: 'Alias',
        nature: 'Nature',
        imageURL:'',
        initiative: 0,
        coreAbilities:[
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
        combat:[
                {
                    id:uuidv4(),
                    name: 'Combat Skill',
                    rank: 1
                }
            ],
        physical:[
                {
                    id: uuidv4(),
                    name: 'Physical Skill',
                    rank: 1
                }
            ],   
        professional:[
                {
                    id: uuidv4(),
                    name: 'Professional Skill',
                    rank: 1
                }
            ],
        mental:[
                {
                    id: uuidv4(),
                    name: 'example 1',
                    rank: 1
                },
                {
                    id: uuidv4(),
                    name: 'example 2',
                    rank: 5
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
                    name: 'Ring of Power',
                    rank: 1,
                    protoniumGenerator: true,
                    talisman: false,
                    description: 'What does this Ring of Power do?'
                },
                {
                    id: uuidv4(),
                    name: 'Invisibility Cloak',
                    rank: 1,
                    protoniumGenerator: false,
                    talisman: true,
                    description: 'What does this Invisibility Cloak do?'
                }
            ],
        flaws:[
                {
                    id: uuidv4(),
                    name: 'Bad breath',
                    rank: 1,
                    description: 'A fiber of chicken is lodged between your lateral and central incisor and has become wrought with bacteria pooping in your mouth.'
                }
            ],
        powers:[
                {
                    id: uuidv4(),
                    name: 'Super Power',
                    rank: 1,
                    description: 'What does this Super Power do?',
                    stunt:[
                        {
                            id: uuidv4(),
                            name: 'Power Stunt',
                            attempts: 0,
                            description: 'What does this Power Stunt do?',
                            mastered: false,
                            armor: false,
                            duration: 0
                        }
                    ]
                }, 
            ],
        talismans:[
                {
                    id: uuidv4(),
                    name: 'Talisman',
                    rank: 1,
                    description: 'What does this Talisman do?',
                    stunt:[
                        {
                            id: uuidv4(),
                            name: 'Stunt',
                            attempts: 0,
                            description: 'What does this Power Stunt do?',
                            mastered: false,
                            armor: false,
                            duration: 0
                        }
                    ]
                }
            ],
        spellbook:[
            {
                id: uuidv4(),
                name: 'Love Potion',
                attempts: 0,
                description: 'Makes you love me.',
                mastered: false,
                purchased: false,
                components: [
                    {
                        id: uuidv4(),
                        name: 'eye of newt',
                        rank: 3,
                        description: 'The eye of a newt used to make love potions',
                        armor: false,
                        component: true,
                    }
                ],
                casting: "Simply add the eye to your potion.",
                duration: 1
            },
            {
                id: uuidv4(),
                name: 'fireball',
                attempts: 3,
                description: 'ball of fire.',
                purchased: false,
                components: [
                    {
                        id: uuidv4(),
                        name: 'air',
                        rank: 3,
                        description: 'That you breath',
                        armor: false,
                        component: true,
                    }
                ],
                casting: "Instantly after saying, ignis pila.",
                duration: 0
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
        inventory:[
                {
                    id: uuidv4(),
                    name: 'Kitchen Chair',
                    rank: 5,
                    description: 'Solid Oak chair for bashing heads or to sit for a nice cup of tea.',
                    armor: false,
                    component: false,
                },
                {
                    id: uuidv4(),
                    name: 'Cash',
                    rank: 4,
                    description: 'Based off of my resources I should have this much cash per month.',
                    armor: false,
                    component: false,
                }
            ] 
    }