import React, { useEffect, useState } from 'react'
import { auth } from '../../DB/Firebase-config';
import {
    onAuthStateChanged,
    signOut
} from 'firebase/auth'
import { useNavigate } from 'react-router-dom';

export default function MyPanel() {
    const navigate = useNavigate()
    const [currentUser, setUser] = useState({})
    onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser)
    })

    useEffect(() => {
        if (!currentUser) {
            navigate('/newnotebook/sign-in')
        }
    }, [currentUser, navigate])
    const logout = async () => {
        signOut(auth)
        navigate('/newnotebook/sign-in')
    }
    return (
        <div className=" justify-content-center  d-flex align-items-center ">
            {
                currentUser && (
                    <h1>Hello {currentUser.displayName}</h1>
                )
            }
            <button className='btn btn primary ' onClick={logout}>Logout</button>
        </div>
    )
}
