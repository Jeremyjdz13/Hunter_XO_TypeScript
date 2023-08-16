import Header from "../components/header/Header"
import { Routes, Route, useNavigate } from "react-router-dom"
import { GameMasterRoutes } from "../routes/GameMasterRoutes"
import { PlayerRoutes } from "../routes/PlayerRoutes"
import { Paragraph } from "../components/homeContent/paragraph"
import { useAuth } from "../api/AuthContext"
import { useProfile } from "../api/UserContext"
import { useEffect, useMemo } from "react"

export function Home() {

    const { currentUser } = useAuth()
    const { profileData } = useProfile()
    
    const navigate = useNavigate()
    
    useEffect(() => {
        if(profileData?.player) {
            navigate('/player/characters')
        } 
        if(profileData?.gameMaster) {
            navigate("/gameMaster/npcs")
        }
    }, [profileData])

    const checkCurrentUserProfile = currentUser?.email === profileData?.email
 
    function renderRoutes() {

        if(checkCurrentUserProfile && profileData?.player) {
            
            return <Route path="/player/*" element={<PlayerRoutes />} /> 
             
        } else if(checkCurrentUserProfile && profileData?.gameMaster) {
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