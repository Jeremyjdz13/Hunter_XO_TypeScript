import { useState } from 'react'
import { InitiativeProps } from '../../../api/types/InitiativeTypes';
import { characterStyles } from '../styles/CharacterStyles';
import { initiativeStyles } from '../styles/InitiativeStyles';

export default function Initiative({mentalSkills, intuition}: InitiativeProps) {
    const searchAlertness = mentalSkills.filter(item => (
        item.name.includes('Alertness') || item.name.includes('alertness')
    ));
    const [initiativeRoll, setInitiativeRoll] = useState({randomD10: 0, D10Roll: 0})
    let alertCount = 0
   
    if (searchAlertness[0] === undefined) {
        alertCount = 0
    }else{
        alertCount = searchAlertness[0].rank
    }
    const initiativeCount = intuition.rank + alertCount

    function handleClickD10(){
        
        let rTimer = setInterval(()=>{
     
            let roll = Math.floor((Math.random() * 10) +1)
            let total = roll + initiativeCount;
             setInitiativeRoll({ 
                 randomD10: total,
                 D10Roll: roll
             });
         }, 100)
 
         setTimeout(()=>{
             clearInterval(rTimer);
         }, 2000);
     }

    return (
         <div style={initiativeStyles.container}>
            <div style={initiativeStyles.title}>Initiative</div>  
            <div>Intuition: <span style={initiativeStyles.rank}>{intuition.rank}</span></div>
            <div>Alertness: <span style={initiativeStyles.rank}>{alertCount}</span></div>
            <div>Bonus: <span style={initiativeStyles.rank}>{initiativeCount}</span></div>
            <div>D10 result: <span style={initiativeStyles.rank}>{initiativeRoll.D10Roll}</span></div>
            <div style={initiativeStyles.buttonContainer}>
                <button 
                    onClick={() => handleClickD10()}
                    style={initiativeStyles.button}
                >      
                    D*10 
                </button>
                <div style={initiativeStyles.result}>{initiativeRoll.randomD10}</div>
            </div>
        </div>
    )
} 