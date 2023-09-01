import { CSSProperties } from "react";

interface DiceModalStyles {
    dialogContainer: CSSProperties
    statButton: CSSProperties
}

export const diceModalStyles : DiceModalStyles = {
    dialogContainer: {
        width: '600px',
        height: '600px',
        // top: '1'
    },
    statButton: {
        background: 'none',
        border: 'none',
        boxShadow: 'none',
        outline: 'none',
        font: 'inherit',
        color: 'white',
        cursor: 'pointer'
    }
}