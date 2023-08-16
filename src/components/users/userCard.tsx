import { userCardStyles } from "../../styles/userCardStyles"

interface UserCardProps {
    user: {
        displayName: string
        email: string
        editor: boolean
        gameMaster: boolean
        player: boolean
        id: string
    }
}
export function UserCard({ user } : UserCardProps ) {
    const {
        displayName,
        email,
        editor,
        gameMaster,
        player,
        id
    } = user
    return (
        <div key={id} style={userCardStyles.cardContainer}>
            <div>{displayName}</div>
            <div>Email: {email}</div>
            <div>Editor: {editor ? "Yes" : "No"}</div>
            <div>Game Master: {gameMaster ? "Yes" : "No"}</div>
            <div>Player: {player ? "Yes" : "No"}</div>
        </div>
    )
}