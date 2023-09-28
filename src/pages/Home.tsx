import Header from "../components/header/Header"
import { Routes, Route, useNavigate } from "react-router-dom"
import { GameMasterRoutes } from "../routes/GameMasterRoutes"
import { PlayerRoutes } from "../routes/PlayerRoutes"
import { Paragraph } from "../components/homeContent/paragraph"
import { useAuth } from "../api/AuthContext"
import { userData } from "../api/UserContext"
import { useEffect } from "react"

export function Home() {

    const { currentUser } = useAuth()
    const { user } = userData()
    
    const navigate = useNavigate()

    useEffect(() => {
        if(user?.player) {
            navigate('/player/characters')
        } 
        if(user?.gameMaster) {
            navigate("/gameMaster/npcs")
        }
    }, [userData])

    const checkCurrentUserProfile = currentUser?.email === user?.email
 
    function renderRoutes() {

        if(checkCurrentUserProfile && user?.player) {
            
            return <Route path="/player/*" element={<PlayerRoutes />} /> 
             
        } else if(checkCurrentUserProfile && user?.gameMaster) {
            return <Route path="/gameMaster/*" element={<GameMasterRoutes />} />
        } 
        else {
            return <Route index element={<Paragraph />} />
        }
    }

    return (
        <>
            <Header />
            <Routes>
                {renderRoutes()}
            </Routes>
        </>
    )
}