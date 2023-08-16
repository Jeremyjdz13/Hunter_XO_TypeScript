import { characterStyles } from "./styles/CharacterStyles";

export function NPCDisplay() {
    return (
        <div style={characterStyles.blackBorder}>
            <div style={characterStyles.titles}>NPC Panel</div>
        </div>
    )
}