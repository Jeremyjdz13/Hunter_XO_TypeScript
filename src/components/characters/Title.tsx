import { characterStyles } from "./styles/CharacterStyles";

type TitleProp = {
    storedTitle: string;
}
export default function Title({ storedTitle }: TitleProp){
    const title = storedTitle
    return (
        <div style={characterStyles.titles}>
            {title}
        </div>
    )
}