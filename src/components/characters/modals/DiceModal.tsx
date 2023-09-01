import { IdNameRankData } from "../../../api/types/CharacterTypes"
import { useRef, useState } from "react"
import { diceModalStyles } from "../styles/DiceModalStyles"
import EditStatModal from "./EditStatModal"
import DiceDropDownMenu from "./DiceDropDownMenu"
import StatLists from "../StatLists"
import { initiativeStyles } from "../styles/InitiativeStyles"
import { characterStyles } from "../styles/CharacterStyles"

type DiceModalProps = {
    stat: IdNameRankData
    character: CharacterData
}
type D100 = {
    randomD100: number;
    D100Roll: number;
    score: string;
}

export default function DiceModal(
    {
        stat,
        character
    } : DiceModalProps) {
    const modalRef = useRef<HTMLDialogElement | null>(null)
    const [isEditOpen, setIsEditOpen] = useState(false)
    const [d100, setD100] = useState({successTotal: 0, D100Roll: 0, score: ''})
    // const [powerRank, setPowerRank] = useState('None Selected')
    // const [count, setCount] = useState(0)  
    const combatSkills = character?.combatSkills
    const physicalSkills = character?.physicalSkills
    const professionalSkills = character?.professionalSkills
    const mentalSkills = character?.mentalSkills
    const baseProtonium = character?.secondaryAttributes[5]
    const spentProtonium = character?.protoniumCounter[0]
    const protoniumGenerator = character?.merits?.filter(item => (
        item.name.includes('Protonium Generator') || 
        item.name.includes(' protonium generator') || 
        item.name.includes('P G') || 
        item.name.includes('p gen') || 
        item.name.includes(' P Generator') || 
        item.name.includes('p g') || 
        item.name.includes('P Gen') ||
        item.name.includes('Protonium')
    )
)

    console.log(baseProtonium, "protonium")
    console.log(spentProtonium, "Spent Proton")
    console.log(protoniumGenerator[0], "Protonium Gen")


    function handleOpenModal() {
        (modalRef.current! as HTMLDialogElement).showModal()
    }

    function handleCloseModal() {
        (modalRef.current! as HTMLDialogElement).close()
    }

    function handleContextMenuOpen(e: { preventDefault: () => void}){
        e.preventDefault()
        console.log("Right Click")

        setIsEditOpen(true)
    }

    function handleContextMenuClose() {
        setIsEditOpen(false)
    }

    function handleRank(){
        let value = stat.rank
        let name = stat.name
        console.log({value, name})

        if (value === 0){
           return "Decrepit"
        } else if (value === 1){
            return "Feeble"
        } else if (value === 2){
            return "Poor"
        } else if (value === 3){
            return "Typical"
        } else if (value === 4){
            return "Good"
        } else if (value === 5){
            return "Excellent"
        } else if (value === 6){
            return "Remarkable"
        } else if (value === 7){
            return "Incredible"
        } else if (value === 8){
            return "Amazing"
        } else if (value === 9){
            return "Monstrous"
        } else if (value === 10){
            return "Unearthly"
        }
       
    }

    function handleClickD100(){
        let rTimer = setInterval(()=>{
            let modifiers: number = 0;
            let roll = Math.floor((Math.random() * 100) +1)
            let total = modifiers + roll;
            let rank = stat.rank;
            let success: string = '';
            // console.log(success, rank, total)
            if (rank === 0){
                if (total <= 1){
                 success = " botched";
                }
                if (total >= 2 && total <= 55){
                    success = " failed"
                }
                if (total >= 56 && total <= 94){
                    success = " green";
                }
                if (total >= 95 && total <= 99){
                success = " yellow";
                }
                if (total >= 100){
                success = " red";
                }
            }

            if (rank === 1){
                if (total <= 1){
                 success = " botched";
                }
                if (total >= 2 && total <= 50){
                    success = " failed"
                }
                if (total >= 51 && total <= 90){
                    success = " green";
                }
                if (total >= 91 && total <= 99){
                success = " yellow";
                }
                if (total >= 100){
                success = " red";
                }
            }

            if (rank === 2){
                if (total <= 1){
                 success = " botched";
                }
                if (total >= 2 && total <= 45){
                    success = " failed"
                }
                if (total >= 46 && total <= 85){
                    success = " green";
                }
                if (total >= 86 && total <= 99){
                success = " yellow";
                }
                if (total >= 100){
                success = " red";
                }
            }

            if (rank === 3){
                if (total <= 1){
                 success = " botched";
                }
                if (total >= 2 && total <= 40){
                    success = " failed"
                }
                if (total >= 41 && total <= 80){
                    success = " green";
                }
                if (total >= 81 && total <= 97){
                success = " yellow";
                }
                if (total >= 98){
                success = " red";
                }
            }

            if (rank === 4){
                if (total <= 1){
                 success = " botched";
                }
                if (total >= 2 && total <= 35){
                    success = " failed"
                }
                if (total >= 36 && total <= 75){
                    success = " green";
                }
                if (total >= 76 && total <= 97){
                success = " yellow";
                }
                if (total >= 98){
                success = " red";
                }
            }

            if (rank === 5){
                if (total <= 1){
                 success = " botched";
                }
                if (total >= 2 && total <= 30){
                    success = " failed"
                }
                if (total >= 31 && total <= 70){
                    success = " green";
                }
                if (total >= 71 && total <= 94){
                success = " yellow";
                }
                if (total >= 95){
                success = " red";
                }
            }

            if (rank === 6){
                if (total <= 1){
                 success = " botched";
                }
                if (total >= 2 && total <= 25){
                    success = " failed"
                }
                if (total >= 26 && total <= 65){
                    success = " green";
                }
                if (total >= 66 && total <= 94){
                success = " yellow";
                }
                if (total >= 95){
                success = " red";
                }
            }

            if (rank === 7){
                if (total <= 1){
                 success = " botched";
                }
                if (total >= 2 && total <= 20){
                    success = " failed"
                }
                if (total >= 25 && total <= 60){
                    success = " green";
                }
                if (total >= 61 && total <= 90){
                success = " yellow";
                }
                if (total >= 91){
                success = " red";
                }
            }

            if (rank === 8){
                if (total <= 1){
                 success = " botched";
                }
                if (total >= 2 && total <= 15){
                    success = " failed"
                }
                if (total >= 16 && total <= 55){
                    success = " green";
                }
                if (total >= 56 && total <= 90){
                success = " yellow";
                }
                if (total >= 91){
                success = " red";
                }
            }

            if (rank === 9){
                if (total <= 1){
                 success = " botched";
                }
                if (total >= 2 && total <= 10){
                    success = " failed"
                }
                if (total >= 11 && total <= 50){
                    success = " green";
                }
                if (total >= 51 && total <= 85){
                success = " yellow";
                }
                if (total >= 86){
                success = " red";
                }
            }

            if (rank === 10){
                if (total <= 1){
                 success = " botched";
                }
                if (total >= 2 && total <= 6){
                    success = " failed"
                }
                if (total >= 7 && total <= 45){
                    success = " green";
                }
                if (total >= 46 && total <= 85){
                success = " yellow";
                }
                if (total >= 86){
                success = " red";
                }
            }
          
            setD100({ 
                successTotal: total,
                D100Roll: roll,
                score: success,
            });

        }, 100)
   
        setTimeout(()=>{
            clearInterval(rTimer);
        }, 2000);
        
    }

 
    const totalPool = baseProtonium.rank + protoniumGenerator.rank
    const protoniumCount = totalPool - spentProtonium.rank 


    function handleProtoniumGeneratorElement(): JSX.Element {
        if(protoniumGenerator){
            return (
                <div style={characterStyles.grid2}>
                    <div>Generator</div>
                    <div style={characterStyles.rank}>{protoniumGenerator[0].rank}</div>
                </div>
            )
        }
        return <></>
    }

    return (
        <div>
            <div
                onClick={handleOpenModal}
                onContextMenu={handleContextMenuOpen}
                style={diceModalStyles.statButton}
            >
                {stat.name}
            </div>
            <dialog 
                ref={modalRef}
                style={diceModalStyles.dialogContainer}
            >
                <button 
                    onClick={handleCloseModal}

                >close</button>
                <div>{stat?.name} : {stat.rank}</div>
                <div>Column Rank : {handleRank()}</div>
                <button
                    onClick={handleClickD100}
                >D: 100</button>
                <div>
                    <span>Base D100 Roll: {d100.D100Roll}</span><br />
                    <span>Total Results: {d100.successTotal}</span><br />
                    <span>Color: {d100.score}</span>
                </div>
                <div>
                    <DiceDropDownMenu
                        skillType="Combat"
                        skills={combatSkills}
                    />
                     <DiceDropDownMenu
                        skillType="Physical"
                        skills={physicalSkills}
                    />
                     <DiceDropDownMenu
                        skillType="Professional"
                        skills={professionalSkills}
                    />
                     <DiceDropDownMenu
                        skillType="Mental"
                        skills={mentalSkills}
                    />
                </div>
                <div style={initiativeStyles.container}>
                    
                    <StatLists
                        key={baseProtonium.id}
                        {...baseProtonium}
                        groupName="secondaryAttributes"
                        character={character}
                    />
                    {
                        protoniumGenerator ? handleProtoniumGeneratorElement() : <></>
                    }
                    <StatLists
                        id={spentProtonium.id}
                        {...spentProtonium}
                        groupTitle='Protonium'
                        character={character}
                    />
                    <div>
                        Total: <span style={initiativeStyles.result}>{protoniumCount}</span>
                    </div>
                </div>
            </dialog>
            <EditStatModal
                storedTitle={stat.name}
                isOpen={isEditOpen}
                onClose={handleContextMenuClose}
            />
        </div>
    )
}