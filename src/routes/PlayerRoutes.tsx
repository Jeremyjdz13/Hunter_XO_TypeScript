import {Routes, Route } from 'react-router-dom'
import { Characters } from '../pages/playerPages/Characters'
import { CharacterGen } from '../pages/playerPages/CharacterGen'
import { Notes } from '../pages/playerPages/Notes'
import { PlayerLayout } from '../pages/playerPages/PlayerLayout'

export function PlayerRoutes() {
    return (
        <Routes>  
            <Route element={<PlayerLayout />} >
                {/* <Route path="characters" element={<Characters />} /> */}
                <Route path="characterGen" element={<CharacterGen />} />
                <Route path="notes/*" element={<Notes />} />
            </Route>
        </Routes>
    )
}