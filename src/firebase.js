import { initializeApp } from "firebase/app";
import { 
    createUserWithEmailAndPassword, 
    getAuth, 
    signInWithEmailAndPassword,
    signOut } from "firebase/auth";
import { 
    addDoc, 
    getFirestore,
    collection } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyAFz_LfsvZtoLRkFGeRPescK-slqSKk1OQ",
  authDomain: "netflix-clone-aa602.firebaseapp.com",
  projectId: "netflix-clone-aa602",
  storageBucket: "netflix-clone-aa602.firebasestorage.app",
  messagingSenderId: "200786489053",
  appId: "1:200786489053:web:432de400ab1f692d6df534"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signup = async (name, email, password) => {
    try {
        const res = await createUserWithEmailAndPassword(auth, email, password);
        const user = res.user;
        await addDoc(collection(db, "user"), {
            uid: user.uid, 
            name,
            authProvider: "local",
            email,
        })
    } catch (error) {
        console.log(error);
        alert(error);
    }
}

const login = async (email, password) => {
    try {
        await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
        console.log(error)
        alert(error);
    }
}

const logout = () => {
    signOut(auth);
}

export { auth, db, login, signup, logout }