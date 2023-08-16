import { useState } from 'react'
import { InitiativeProps } from '../../../api/types/InitiativeTypes';
import { characterStyles } from '../styles/CharacterStyles';

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
         <div>
            <div style={characterStyles.titles}>Initiative</div>  
            <div>Intuition: {intuition.rank}</div>
            <div>Alertness: {alertCount}</div>
            <div>Bonus: {initiativeCount}</div>
            <div>D10 result: {initiativeRoll.D10Roll}</div>
            <button onClick={() => handleClickD10()}>      
                D*10 
            </button>
             <div>{initiativeRoll.randomD10}</div>
        </div>
    )
} 