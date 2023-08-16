import { useAuth } from "./AuthContext"
import { 
          doc, 
          getDoc, 
          setDoc, 
          getFirestore, 
          collection, 
          getDocs 
        } from 'firebase/firestore'
import { 
        useState, 
        useEffect, 
        useContext,
        createContext,
        ReactNode,
        useMemo
    } from 'react'
import { app } from "../config/firebase"

type UserList = {
    id: string
    displayName: string
    email: string
    editor: boolean
    gameMaster: boolean
    player: boolean
}

interface ProfileData {
    gameMaster: boolean
    editor: boolean
    player: boolean
    displayName: string | null
    email: string | null
    emailVerified: boolean
} 

interface ProfileContextProps {
    profileData: ProfileData | undefined
    userList: UserList[]
    loading: boolean
}
  
  interface UserListData {
    [key: string]: {
        id: string;
        data: any;
    }[];
  }[]

const ProfileContext = createContext<ProfileContextProps>({
    profileData: undefined,
    userList: [],
    loading: true
})


export default ProfileContext;

export function useProfile() {
    return useContext(ProfileContext)
}

export function ProfileProvider({ children }: { children: ReactNode }) {

    const { currentUser, loading: loadingUser } = useAuth()

    const [loading, setLoading] = useState(true)
    const [profileData, setProfileData] = useState<ProfileData | undefined>()
    const [userList, setUserList] = useState<UserList[]>([])
    const db = getFirestore(app)

    useEffect(() => {
        if (loadingUser) {
          console.log(loadingUser, 'Still initializing, do nothing');
          return; // still initializing, do nothing.
        }
        if (!currentUser) {
            // no user signed in!
            console.log('No user signed in!');
            setProfileData(undefined);
            setLoading(false);
            return;
          }
        // user is logged in
        const profileDoc = doc(db, 'users', currentUser.uid)

        getDoc(profileDoc)
        .then((docSnapshot) => {
          if (!docSnapshot.exists()) {
            // didn't find a profile for this user
            console.log(docSnapshot, "not found")
            setDoc(profileDoc, {
              gameMaster: false,
              editor: false,
              player: true,
              displayName: currentUser.displayName,
              email: currentUser.email,
              emailVerified: currentUser.emailVerified,
            }).catch((error) =>
              console.log('Failed to initialize default profile', error)
            );
          } else {
            // Check to see currentUser.profile match displayName in database if not update attribute.
            const data = docSnapshot.data() as {
              gameMaster: boolean;
              editor: boolean;
              player: boolean;
              displayName: string | null;
              email: string | null;
              emailVerified: boolean;
            };
            const displayNameCheck = data.displayName === currentUser.displayName;
            const editor = data.editor;
            const gameMaster = data.gameMaster;
            const player = data.player
  
            if (!displayNameCheck) {
              setDoc(profileDoc, {
                gameMaster: gameMaster,
                editor: editor,
                player: player,
                displayName: currentUser.displayName,
                email: currentUser.email,
                emailVerified: currentUser.emailVerified,
              }).catch((error) =>
                console.log('Failed to update profile', error)
              );
            } else {
              console.log('Setting Profile');
              setProfileData(data);
              setLoading(false);
            }
          }
        })
        .catch((error) => console.log('Error getting profile document', error));
  
      return () => {}; // no cleanup needed for Firestore

  }, [currentUser, loadingUser]);


  useEffect(() => {
    if(!currentUser) return;

    const getUsers = async () => {
        const users: UserList[] = [];
        const querySnapshot = await getDocs(collection(db, "users"));
          
        querySnapshot.forEach((doc) => {
            const user = {id: doc.id, ...doc.data()} as UserList;
            users.push(user)
        })
        setUserList(users)

    }
    getUsers()

  }, [currentUser, db]);
  
  
  const value: ProfileContextProps = {
    profileData,
    userList,
    loading,
  };

  return <ProfileContext.Provider value={value}>{children}</ProfileContext.Provider>;
}