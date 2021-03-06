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

  //user creation with email
  const emailSignup = (auth, name, email, password) => {
    setError("");
    return createUserWithEmailAndPassword(auth, name, email, password);
  };

  //email login
  const emailLogin = (auth, email, password) => {
    setError("");
    return signInWithEmailAndPassword(auth, email, password);
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

  //set error handle empty
  const errorDataClear = () => {
    setError("");
  };
  return {
    emailData,
    nameData,
    passwordData,
    isLoading,
    user,
    error,
    setIsLoading,
    setEmailData,
    setPasswordData,
    setNameData,
    setUser,
    setError,
    googleSignIn,
    logOut,
    emailLogin,
    emailSignup,
    errorDataClear,
  };
};
export default useFirebase;
