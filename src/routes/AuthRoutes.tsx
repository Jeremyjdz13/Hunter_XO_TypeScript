import {Routes, Route } from 'react-router-dom'
import ForgotPassword from '../pages/auth/ForgotPassword'
import { SignIn } from '../pages/auth/SignIn'
import SignUp from '../pages/auth/SignUp'
import UpdateProfile from '../pages/auth/UpdateProfile'


export function AuthRoutes() {
    return (
        <>
            <Routes> 
                <Route path="signIn" element={<SignIn />} />
                <Route path="signUp" element={<SignUp />} />
                <Route path="forgotPassword" element={<ForgotPassword />} />
                <Route path="updateProfile" element={<UpdateProfile />} />
            </Routes>   
        </>
    )
}