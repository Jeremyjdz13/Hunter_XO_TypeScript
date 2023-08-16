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
} 

export type IdNameRankData = {
    id: string
    name: string
    rank: number
} & Description & Purchased

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

export interface CharacterContextProps {
    characters: Character[] | undefined
    showCharacter: Character| undefined
    loading: boolean
    handleCharacterSelect: (id: string) => void
} 

export interface CharacterCardProps {
    character: Character
}

export interface CharacterButtonProps {
    character: Character
    key: string
}

export interface CharacterStatProps {
    traits: IdNameRankData[]
    groupName: string
    character: Character
    groupTitle: string
}

export interface StatListProps {
    id: string
    name: string
    rank: number
    description: string
    purchased: boolean
    groupName: string
    character: Character
    key: string
}