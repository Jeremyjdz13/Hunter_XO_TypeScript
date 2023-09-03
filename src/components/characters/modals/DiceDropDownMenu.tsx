import { useState } from "react";
import { IdNameRankData } from "../CharacterTypes"
import { dropdownMenuStyles } from "../../dropdownMenu/DropdownStyles"

type DiceDropDownMenuProps = {
    skillType: string
    skills:  IdNameRankData[]
}

export default function DiceDropDownMenu({ skillType, skills }: DiceDropDownMenuProps) {
    const [isContentVisible, setIsContentVisible] = useState(false);
    function handleClick() {
        setIsContentVisible((prevState) => !prevState);
    }

    function handleMouseEnter() {
        setIsContentVisible(true);
    }
    
    function handleMouseLeave() {
    setIsContentVisible(false);
    }

   

    return (
        <div style={dropdownMenuStyles.dropdown}>
            <button 
                style={dropdownMenuStyles.dropbtn}
                onClick={handleClick}
                onMouseEnter={handleMouseEnter}
            >
                {skillType}
            </button>
            <div 
                style={{
                ...dropdownMenuStyles.dropdownContent,
                display: isContentVisible ? 'block' : 'none',
            }}
            onMouseLeave={handleMouseLeave}
            >
                {
                    skills.map(skill => (
                        <button
                            id={skill.id}
                            style={dropdownMenuStyles.dropbtn}
                        >
                            {skill.name} : {skill.rank}
                        </button>
                    )
                    )
                }
            </div>
        </div>
    )
}