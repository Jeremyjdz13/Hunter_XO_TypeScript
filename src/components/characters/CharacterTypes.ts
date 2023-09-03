export type Character = {
    id: string
    name: string
    alias: string
    nature: string
    imageUrl: string
    primaryAttributes: IdNameRankData[]
    secondaryAttributes: IdNameRankData[]
    combatSkills: IdNameRankData[]
    physicalSkills: IdNameRankData[]
    professionalSkills: IdNameRankData[]
    mentalSkills: IdNameRankData[]
    backgrounds: IdNameRankData[]
    merits: IdNameRankData[]
    flaws: IdNameRankData[]
    powers: IdNameRankData[]
    talismans: IdNameRankData[]
    powerStunts: IdNameRankData[]
    spellbook: IdNameRankData[]
    protoniumCounter: IdNameRankData[]
    bashingCounter: IdNameRankData[]
    lethalCounter: IdNameRankData[]
    equipmentItems: IdNameRankData[]
} & {
    [key: string]: IdNameRankData
}

export type IdNameRankDataArray = IdNameRankData[]

export type IdNameRankData = {
    id: string
    name: string
    rank: number
} & Description & Purchased & Traits

export type Description = {
    description: string
}

export type Purchased = {
    purchased: boolean
}
export type GroupName = {
    groupName: string
}

export type GroupTitle = {
    groupTitle: string
}
export type Traits = { 
    traits: IdNameRankData[]
}

export type CharacterContextProps = {
    characters: Character[] | undefined
    showCharacter: Character | undefined
    loading: boolean
    handleCharacterSelect: (id: string) => void
    handleSelectedStat: (stat: IdNameRankData) => void
} 

export type CharacterCardProps = {
    character: Character
}

export type CharacterButtonProps = {
    character: Character
    key: string
}

export type CharacterStatProps = {
    traits: Traits
    groupName: string
    character: Character
    groupTitle: string
}

export type StatListProps = {
    id: string
    name: string
    rank: number
    description: string
    purchased: boolean
    groupName: string
    character: Character
    key: string
}