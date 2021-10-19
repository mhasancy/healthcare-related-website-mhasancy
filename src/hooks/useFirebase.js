//imported file
import {
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
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

  const googleSignIn = () => {
    setIsLoading(true);
    const googleProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleProvider).finally(() =>
      setIsLoading(false)
    );
  };

  const logOut = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {})
      .finally(() => setIsLoading(false));
  };

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
  };
};
export default useFirebase;
