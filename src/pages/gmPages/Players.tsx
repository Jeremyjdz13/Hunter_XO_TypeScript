import { UserCard } from "../../components/users/userCard"
import { userCardStyles } from "../../styles/userCardStyles"
import { userData } from "../../api/UserContext"

export function Players() {
    const { userList } = userData()
    console.log(userList, "UserList")

    return (
        <>
            <div style={userCardStyles.title}>Players</div>
            <div style={userCardStyles.container}>
                {userList.map(user => {
                        return <UserCard 
                            key={user.id} 
                            user={
                                {
                                    displayName: user.displayName,
                                    email: user.email,
                                    editor: user.editor,
                                    gameMaster: user.gameMaster,
                                    player: user.player,
                                    id: user.id
                                }
                            } 
                            />
                        }
                    ) 
                }
            </div>
        </>
    )
}