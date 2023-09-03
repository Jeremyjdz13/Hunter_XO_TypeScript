
export default function Spellbook() {

    function handleRank(){
        if((rank === 10 && groupName === "powerStunts") || (rank === 5 && groupName === "spellbook")){
            return "M"
        }
        return rank
    }

    function handlePurchased(){
        console.log(purchased, "Purchased")
        return purchased ? "Aye" : "Nay"
    }
    
    return (
        <div>
            
        </div>
    )
}