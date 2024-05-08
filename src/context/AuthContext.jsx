
import { useContext,useState,createContext } from 'react';
import { auth, db } from '../services/firebase';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword ,signOut } from 'firebase/auth';
import { useEffect } from 'react';

const AuthContext = createContext();

export function AuthContextProvider({children}){
    const [user,setUser] = useState();
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,(currentUser)=>{
            console.log(currentUser)
            setUser(currentUser);
        })
        return ()=>{
            unsubscribe();
        }
    },[]);
    function signUp(email,password){
        createUserWithEmailAndPassword(auth,email,password);
    }
    function login(email,password){
        return signInWithEmailAndPassword(auth,email,password)
    }
    function logOut(){
        return signOut(auth);
    }
    return <AuthContext.Provider value={{user,signUp,login,logOut}}>{children}</AuthContext.Provider>
}

export function UserAuth(){
    return useContext(AuthContext)
}