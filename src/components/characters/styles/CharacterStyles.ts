import { CSSProperties } from "react";

interface CharacterStyles {
    container: CSSProperties;
    box1: CSSProperties;
    box2: CSSProperties;
    box3: CSSProperties;
    box4: CSSProperties;
    box5: CSSProperties;
    box6: CSSProperties;
    box7: CSSProperties;
    box8: CSSProperties;
    green: CSSProperties;
    blackBorder: CSSProperties;
    titles: CSSProperties;
    clickableTitles: CSSProperties;
    grid2: CSSProperties;
    grid3: CSSProperties;
    grid4: CSSProperties;
    row: CSSProperties;
}

export const characterStyles: CharacterStyles = {
    container: {
        backgroundColor: "hsla(0, 100%, 0%, 0.7)",
        padding: '10px',
        borderRadius: '20px',
        color: 'floralwhite',
    },
    box1: {
        display: 'grid',
        gridTemplateColumns: '20% 20% 20% 20% 20%',
        paddingBlock: '5px',
    },
    box2: {
        display: 'grid',
        gridTemplateColumns: '15% 15% 20% 20% 30%',
        borderTop: "hsl(0, 100%, 0%) solid 3px",
        paddingBlock: '5px',
    },
    box3: {
        display: 'grid',
        gridTemplateColumns: '25% 25% 25% 25%',
        paddingBlock: '5px',
    },
    box4: {
    
        border: 'yellow solid 1px'
    },
    box5: {
   
        border: 'blue solid 1px'
    },
    box6: {
  
        border: 'pink solid 1px'
    },
    box7: {
      
        border: 'orange solid 1px'
    },
    box8: {
      
        border: 'purple solid 1px'
    },
    green: {
        border: 'green solid 3px'
    },
    blackBorder: {
        borderInline: "hsl(0, 100%, 0%) solid 1.5px",
        padding: '5px',
    },
    titles: {
        color: 'hsl(0,100%,50%)',
        fontSize: '20px'
    },
    clickableTitles: {
        color: 'hsla(0,100%,50%,.7)',
        fontSize: '18px',
        cursor: 'pointer'
    },
    grid2: {
        display: 'grid',
        gridTemplateColumns: '75% 25%',
        marginBlock: '5px',
        maxWidth: '300px'
    },
    grid3: {
        display: 'grid',
        gridTemplateColumns: '15% 20% 20% 20% 20% 5%',
    },
    grid4: {
        display: 'grid',
        gridTemplateColumns: '15% 20% 20% 20% 20% 5%',
    },
    row: {
        display: "flex",
        flexDirection: "row",
        justifyContent: 'space-between',
        paddingInline: '10px',
        paddingBlock: '5px'
    },
      
}