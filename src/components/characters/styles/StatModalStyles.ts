import { CSSProperties } from "react";

interface StatModalStyles {
    container: CSSProperties;
    dashboard_3_grid: CSSProperties;
    dashboard_4_grid: CSSProperties;
    dashboard_7_grid: CSSProperties;
    title: CSSProperties;
    label: CSSProperties;
    buttonOpen: CSSProperties;
    buttonClose: CSSProperties;
}

export const statModalStyles: StatModalStyles = {

    container: {
        padding: "20px",
        backgroundColor: "hsla(0, 100%, 0%, 0.9)",
        border: 'black solid 3px',
        borderRadius: '20px',
        color: 'floralwhite',
        width: '80vw',
        height: '80vh'
    },
    dashboard_3_grid: {
        display: 'grid',
        gridTemplateColumns: "20% 10% 70%",
        marginBlock: '5px'
    },
    dashboard_4_grid: {
        display: 'grid',
        gridTemplateColumns: "20% 10% 10% 60%",
        marginBlock: '5px'
    },
    dashboard_7_grid: { 
        display: 'grid',
        gridTemplateColumns: "10% 10% 10% 10% 10% 10% 40%",
        marginBlock: '5px'
    },
    title: {
        color: "hsla(50, 66%, 80%, .8)",
        fontSize: '24px'
    },
    label: {
        color: "hsla(50, 66%, 80%, .8)",
        fontWeight: 'bold'
    },
    buttonOpen: {
        backgroundColor: "hsla(0, 100%, 0%, 0.9)",
        border: 'hsl(30, 100%, 50%) solid 1px',
        borderRadius: '20px',
        color: 'hsla(30, 100%, 50%)',
        fontSize: '20px',
        width: '150px',
        height: '150px',
        marginInline: '3px',
    },
    buttonClose: {
        backgroundColor: 'hsla(30, 100%, 50%',
        border: 'hsla(0, 100%, 0%, 0.9) solid 1px',
        fontWeight: 'bolder',
        fontSize: '18px',
        borderRadius: '5px',
        padding: '5px',
        marginBlock: '10px',
    }

}