export type Character = {
    id: string
    name: string
    alias: string
    nature: string
    imageUrl: StatData
    strength: StatData
    fight: StatData
    endurance: StatData
    agility: StatData
    reason: StatData
    intuition: StatData
    psyche: StatData
    combatSkills: StatData[]
    physicalSkills: StatData[]
    professionalSkills: StatData[]
    mentalSkills: StatData[]
    backgrounds: StatData[]
    merits: StatData[]
    flaws: StatData[]
    powers: (StatData[] & { stunt: Stunt[] })[]
    talismans: StatData[]
    spellbook: (StatData & { componentItem: ComponentItem[] })[]
    protonium: StatData
    usedProtonium: StatData
    bashingCounter: StatData[] 
    lethalCounter: StatData[]
    inventory: StatData[]
} & {
    [key: string]: StatData
}

export type StatData = {
    id: string
    name: string
    rank?: number
    url?: string
    description?: string
    talisman?: boolean
    protoniumGenerator?: boolean
    purchased?: boolean
    mastered?: boolean
    attempts?: number
    armor?: boolean
    duration?: number
    stunt?: Stunt[]
    casting?: string
    quantity?: number
    component?: boolean
    componentItem?: ComponentItem[]
    spellAssignmentId?: string
} 

export type ComponentItem = {
    id: string
    name: string
    rank: number
    description: string
    armor: boolean
    component: boolean
    quantity: number
    spellAssignmentId: string
}
export type GroupName = {
    groupName: string
}

export type Stunt = {
    id: string
    name: string
    attempts: number
    description: string
    mastered: boolean
    armor: boolean
    duration: number
}

export type GroupTitle = {
    groupTitle: string
}
export type Traits = { 
    traits: StatData[]
}

export type CharacterContextProps = {
    characters: Character[] | undefined
    loading: boolean
    selectedCharacter: SelectedCharacter | undefined
    handleCharacterSelect: (id: string) => void
    handleSelectedStat: (stat: StatData) => void
}

export type CharacterCardProps = {
    character: Character
}

export type CharacterButtonProps = {
    character: Character
    key: string
}


//Data Template for Characters
export type CharacterTemplate = {
    id: string
    name: string
    alias: string
    nature: string
    strength: StatData
    fight: StatData
    endurance: StatData
    experience: StatData
    imageURL: StatData
    initiative: StatData
    karma: StatData
    lethal: StatData
    agility: StatData
    bashing: StatData
    reason: StatData
    intuition: StatData
    psyche: StatData
    combat: StatData[]
    physical: StatData[]
    professional: StatData[]
    mental: StatData[]
    backgrounds: StatData[]
    merits: StatData[]
    flaws: StatData[]
    powers: StatData[]
    talismans: StatData[]
    spellbook: StatData[]
    protonium: StatData
    usedProtonium: StatData
    inventory: StatData[]
}

export type SelectedCharacter = {
    id: string
    name: string
    alias: string
    nature: string
    strength: StatData
    fight: StatData
    endurance: StatData
    experience: StatData
    imageURL: StatData
    initiative: StatData
    karma: StatData
    lethal: StatData
    agility: StatData
    bashing: StatData
    reason: StatData
    intuition: StatData
    psyche: StatData
    combat: StatData[]
    physical: StatData[]
    professional: StatData[]
    mental: StatData[]
    backgrounds: StatData[]
    merits: StatData[]
    flaws: StatData[]
    powers: StatData[]
    talismans: StatData[]
    spellbook: StatData[]
    protonium: StatData
    usedProtonium: StatData
    inventory: StatData[]
}