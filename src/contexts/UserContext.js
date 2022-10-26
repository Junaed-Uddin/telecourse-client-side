import React from 'react';
import { useState } from 'react';
import { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import app from '../firebase/firebase.config';
import { useEffect } from 'react';

const auth = getAuth(app);

export const AuthContext = createContext();

const UserContext = ({ children }) => {
    const [user, setUser] = useState('hello');
    const googleProvider = new GoogleAuthProvider();

    const userEmailAndPassword = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const profileUpdate = (name, photo) => {
        return updateProfile(auth.currentUser, name, photo);
    }

    const emailVerify = () => {
        return sendEmailVerification(auth.currentUser);
    }

    const googleSignIn = () => {
        return signInWithPopup(auth, googleProvider);
    }

    const userLogin = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    const userPasswordReset = (email) => {
        return sendPasswordResetEmail(auth, email);
    }

    const userSignOut = () => {
        return signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            console.log(currentUser);
            setUser(currentUser);
        })

        return () => {
            unsubscribe();
        }
    }, [])

    const authInfo = {
        user,
        userEmailAndPassword,
        profileUpdate,
        emailVerify,
        googleSignIn,
        userPasswordReset,
        userLogin,
        userSignOut
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;