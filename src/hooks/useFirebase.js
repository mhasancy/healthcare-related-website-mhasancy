//imported file
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Pages/UserAuthorize/Firebase/firebase.init";

//firebase initialization
initializeAuthentication();

//useFirebase hooks
const useFirebase = () => {
  const auth = getAuth();
  //states
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [emailData, setEmailData] = useState("");
  const [passwordData, setPasswordData] = useState("");
  const [nameData, setNameData] = useState("");
  const [error, setError] = useState("");
  //googleSignIn
  const googleSignIn = () => {
    setIsLoading(true);
    const googleProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleProvider).finally(() =>
      setIsLoading(false)
    );
  };
  //user creation
  const emailSignup = (auth, name, email, password) => {
    return createUserWithEmailAndPassword(auth, name, email, password).catch(
      (error) => {
        setError(error.message);
      }
    );
  };
  //email login
  const emailLogin = (auth, email, password) => {
    return signInWithEmailAndPassword(auth, email, password).catch((error) => {
      setError(error.message);
    });
  };
  //logout
  const logOut = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {})
      .finally(() => setIsLoading(false));
  };
  //observer
  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
    return () => unsubscribed;
  }, [auth]);
  return {
    emailData,
    nameData,
    passwordData,
    isLoading,
    user,
    setIsLoading,
    setEmailData,
    setPasswordData,
    setNameData,
    setUser,
    error,
    setError,
    googleSignIn,
    logOut,
    emailLogin,
    emailSignup,
  };
};
export default useFirebase;
