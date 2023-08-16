import { CSSProperties } from "react";

interface CharacterButtonStyles {
    CharacterButtonContainer: CSSProperties;
    characterButtonImage: CSSProperties;

}
export const characterButtonStyles: CharacterButtonStyles = {
    CharacterButtonContainer: {
        padding: '5px',
        border: 'hsl(0,100%,50%) solid 1px',
        borderRadius: '25px',
        marginInline: '5px',
        color: "hsl(0,100%,50%)",
        backgroundColor: "hsla(0, 100%, 0%, 0.7)",
    },
    characterButtonImage: {
        width: '50px',
        height: '50px',
        maxWidth: '50px',
        maxHeight: '50px',
        border: 'hsl(0,100%,50%) solid 1px',
        borderRadius: '5px',
        marginInline: '3px'
    }
}