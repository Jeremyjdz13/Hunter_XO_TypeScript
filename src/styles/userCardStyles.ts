import { CSSProperties } from "react";

interface UserCardStyles {
    container: CSSProperties;
    title: CSSProperties;
    cardContainer: CSSProperties;
    // formFieldContainer: CSSProperties;
    // buttonContainer: CSSProperties;
    // label: CSSProperties;
    // input: CSSProperties;
    // button: CSSProperties;
    // linkContainer: CSSProperties;
    // links: CSSProperties;
    // [key: string]: CSSProperties | any;
}

export const userCardStyles: UserCardStyles = {
    title: {
        fontSize: "24px",
        color: 'hsl(0,100%,50%)',
        textAlign: "center",
        backgroundColor: "hsla(0, 100%, 0%, 0.5)",
    },
    container: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr',
        padding: "10px",
        backgroundColor: "hsla(0, 100%, 0%, 0.5)",

    },
    cardContainer: {
        backgroundColor: "floralwhite",
        borderRadius: "5px",
        margin: "10px",
        padding: "5px"
    }
}