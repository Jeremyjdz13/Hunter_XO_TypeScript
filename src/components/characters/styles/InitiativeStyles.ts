import { CSSProperties } from "react";

interface InitiativeStyles {
    container: CSSProperties
    title: CSSProperties
    rank: CSSProperties
    result: CSSProperties
    button: CSSProperties
    buttonContainer: CSSProperties
}

export const initiativeStyles : InitiativeStyles = {
    container: {
        backgroundColor: "hsla(0, 100%, 0%, 0.5)",
        color: "hsla(0, 0%, 100%, 0.7)",
        padding: '15px',
        border: 'hsl(30, 100%, 50%) solid 1px',
        borderRadius: '20px',
        marginInline: '3px'
    },
    title: {
        color: "hsla(50, 66%, 80%, .8)",
        fontSize: '20px'
    },
    rank: {
        color: 'hsl(30, 100%, 50%)',
        fontSize: '18px'
    }, 
    result: {
        backgroundColor: "hsla(0, 100%, 0%, 0.7)",
        display: "flex",
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
        color: 'hsla(30, 100%, 50%)',
        fontSize: '30px'
    },
    buttonContainer: {
        display: 'grid',
        gridTemplateColumns: '50% 50%',
        
    },
    button: {
        backgroundColor: "hsl(30, 100%, 50%)",
        border: 'hsl(30, 100%, 50%) solid 2px',
        borderRadius: '5px',
        color: 'hsla(0, 100%, 0%, 0.7)',
        padding: '5px',
        fontSize: '20px',
        fontWeight: 'bolder',
        width: '75px',
        height: '50px'
    }
}