import { useState } from 'react'
import { initiativeStyles } from '../styles/InitiativeStyles';
import { StatData } from '../../../api/types/CharacterTypes';

type InitiativeProps = {
    mental: StatData
    intuition: StatData | undefined
}

export default function Initiative({mental, intuition}: InitiativeProps) {

    const searchAlertness : any = Array.isArray(mental) && mental.filter(item => (
        item.name.includes('Alertness') || item.name.includes('alertness')
    ));
    
    const [initiativeRoll, setInitiativeRoll] = useState({randomD10: 0, D10Roll: 0})

    let alertnessCount = 0
    let initiative = 0
    
    if(searchAlertness[0].rank){
        alertnessCount = + searchAlertness[0].rank
    }
   
    if(intuition?.rank){
        initiative = + intuition.rank
    }

       const initiativeCount =  initiative + alertnessCount
    


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
            <div>Intuition: <span style={initiativeStyles.rank}>{initiative}</span></div>
            <div>Alertness: <span style={initiativeStyles.rank}>{alertnessCount}</span></div>
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