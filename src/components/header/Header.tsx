import { useState, useEffect, useMemo } from 'react';
import { headerStyles } from './HeaderStyles';
import { useAuth } from '../../api/AuthContext'
import { useNavigate } from 'react-router-dom';
import { Chat } from '../chat/Chat';
import { Link } from 'react-router-dom';
import { signInSignUpStyles } from '../../styles/AuthStyles';
import DropdownMenu from '../dropdownMenu/DropdownMenu';
import { userData } from '../../api/UserContext';


export default function Header() {

  const { signOut, currentUser } = useAuth()
  const { user } = userData()
  const navigate = useNavigate();
  const [ error, setError ] = useState('')

  const [ menuItems, setMenuItems ] = useState<{
    text: string
    onClick: (event: React.MouseEvent<HTMLAnchorElement>) => void
  }[]>([])
  
  useEffect(() => {
    if(user?.player) {
     return setMenuItems(playerMenuItems)
    }
    setMenuItems(gameMasterMenuItems)
  }, [user])
  
  const playerMenuItems = [
    {text: 'Characters', onClick: () => handleNavigation('player/characters') },
    {text: 'Notes', onClick: () => handleNavigation('player/notes') },
    {text: 'Character Gen', onClick: () => handleNavigation('player/charactergen') },
    {text: 'Settings', onClick: () => handleNavigation('auth/updateprofile') },
    {text: 'Sign Out', onClick: handleSignOut}
  ]

  const gameMasterMenuItems = [
    {text: "Players", onClick: () => handleNavigation('gameMaster/players')},
    {text: "NPCs", onClick: () => handleNavigation('gameMaster/npcs')},
    {text: "Notes", onClick: () => handleNavigation('gameMaster/notes')},
    {text: "Campaigns", onClick: () => handleNavigation('gameMaster/campaigns')},
    {text: "Villains", onClick: () => handleNavigation('gameMaster/villains')},
    {text: 'Settings', onClick:  () => handleNavigation('auth/updateprofile') },
    {text: 'Sign Out', onClick: handleSignOut}
  ]

  function handleSignOut(){
    setError('')

    if(currentUser){
      try{
        signOut()
        navigate('/')
      } catch {
        setError('Failed to log out')
      }
    }
  }

  function handleNavigation(path: string) {
    setError('')
    if(currentUser){
      navigate(path)
    }
  }
  return (
    <div style={headerStyles.container}>
      <div className='anotherDangerSlanted' style={headerStyles.title}>Hunter XO</div>
      <div style={headerStyles.containerLeft}>
        Search Field
      </div>
        <div style={headerStyles.containerRight}>
         {currentUser ? 
          <DropdownMenu menuItems={menuItems} playerName={currentUser.displayName ?? undefined}/>: 
          <Link style={signInSignUpStyles.title} to="/auth/signIn">Sign In</Link>}
        </div>      
    </div>
  );
}

