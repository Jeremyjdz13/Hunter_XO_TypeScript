import { CSSProperties } from "react";

type NotesStyles = {
    container: CSSProperties;
    body: CSSProperties;
    title: CSSProperties;
    noteCardContainer: CSSProperties;
    noteCard: CSSProperties;
}

export const noteStyles: NotesStyles = {   

    container: {
    },
    body: {
    },

    title: {
    },
    noteCardContainer: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
    },
    noteCard: {
        backgroundColor: "hsla(0, 100%, 0%, 0.5)",
        color: "hsla(0, 0%, 100%, 0.7)",
        maxWidth: '100%',
        padding: '10px',
        border: 'hsl(30, 100%, 50%) solid 1px',
        borderRadius: '20px',
        marginInline: '3px',
      }
}
