import { useProfile } from "../../api/UserContext"
import { UserCard } from "../../components/users/userCard"
import { userCardStyles } from "../../styles/userCardStyles"

export function Players() {
    const { userList } = useProfile()
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