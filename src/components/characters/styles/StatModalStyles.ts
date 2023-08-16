import { CSSProperties } from "react";

interface StatModalStyles {
    container: CSSProperties;
    dashboard_3_grid: CSSProperties;
    dashboard_4_grid: CSSProperties;
    title: CSSProperties;
    label: CSSProperties;
   
}

export const statModalStyles: StatModalStyles = {

    container: {
        padding: "10px",
        backgroundColor: "hsla(0, 100%, 0%, 0.9)",
        border: 'black solid 3px',
        borderRadius: '20px',
        color: 'floralwhite',
        width: '80vw',
        height: '80vh'
    },
    dashboard_3_grid: {
        display: 'grid',
        gridTemplateColumns: "20% 10% 70%"
    },
    dashboard_4_grid: {
        display: 'grid',
        gridTemplateColumns: "20% 10% 10% 60%"
    },
    title: {
        color: 'hsl(0,100%,50%)',
        fontSize: '24px'
    },
    label: {
        color: 'hsl(0,100%,50%)',
        fontWeight: 'bold'
    }


}