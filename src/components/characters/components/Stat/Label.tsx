import { statModalStyles } from "../../styles/StatModalStyles"

type LabelProp = {
    storedLabel: string;
}
export default function Label({ storedLabel }: LabelProp){
    const label = storedLabel
    return (
        <div style={statModalStyles.label}>
            {label}
        </div>
    )
}