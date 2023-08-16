import { Routes, Route} from 'react-router-dom'
import { Campaigns } from '../pages/gmPages/Campaigns'
import { GameMasterLayout } from '../pages/gmPages/GameMasterLayout'
import { NPCS } from '../pages/gmPages/NPCs'
import { Players } from '../pages/gmPages/Players'
import { Villains } from '../pages/gmPages/Villains'
import { Notes } from '../pages/playerPages/Notes'

export function GameMasterRoutes() {
    return (
        <>
            <Routes>
                <Route element={<GameMasterLayout />}>
                    <Route path="npcs" element={<NPCS />} />
                    <Route path="players" element={<Players />} />
                    <Route path="notes" element={<Notes />} />
                    <Route path="campaigns" element={<Campaigns />} />
                    <Route path="villains" element={<Villains />} />
                </Route>
            </Routes>
        </>
    )
}