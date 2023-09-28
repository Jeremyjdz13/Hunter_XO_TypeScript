import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import { AuthProvider } from './api/AuthContext'
import { initFirebase } from './config/firebase'
import './api/graphQL/server'
import { DataProvider } from './api/DataContext'
import { UserProvider } from './api/UserContext'
import { CharacterProvider } from './api/CharacterContext'
import { NoteProvider } from './api/NoteContext'

//Initialize Firebase
initFirebase(), "InitFirebase"

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <AuthProvider>
      <UserProvider>
        <CharacterProvider>
          <NoteProvider>
            <BrowserRouter>
              <App />
            </BrowserRouter>
          </NoteProvider>
        </CharacterProvider>
      </UserProvider>
    </AuthProvider>
  </React.StrictMode>,
)
