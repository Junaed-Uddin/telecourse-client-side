import React from 'react';
import { useState } from 'react';
import { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import app from '../firebase/firebase.config';
import { useEffect } from 'react';

const auth = getAuth(app);

export const AuthContext = createContext();

const UserContext = ({ children }) => {
    const [user, setUser] = useState('');
    const [loading, setLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider();

    const userEmailAndPassword = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const profileUpdate = (name, photo) => {
        setLoading(true);
        return updateProfile(auth.currentUser, name, photo);
    }

    const emailVerify = () => {
        setLoading(true);
        return sendEmailVerification(auth.currentUser);
    }

    const googleSignIn = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    const userLogin = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const userPasswordReset = (email) => {
        setLoading(true);
        return sendPasswordResetEmail(auth, email);
    }

    const userSignOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            if (currentUser === null || currentUser?.emailVerified) {
                setUser(currentUser);
                console.log(currentUser);
            }
            setLoading(false);
        })

        return () => {
            unsubscribe();
        }
    }, [])

    const authInfo = {
        user,
        loading,
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