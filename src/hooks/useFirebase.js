import {
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Pages/UserAuthorize/Firebase/firebase.init";

initializeAuthentication();

const useFirebase = () => {
  const auth = getAuth();

  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [emailData, setEmailData] = useState("");
  const [passwordData, setPasswordData] = useState("");
  const [nameData, setNameData] = useState("");
  const [error, setError] = useState("");

  const emailSignIn = (e, email, password) => {
    setIsLoading(true);
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((results) => {
        const user = results.user;
        setUser(user);
        setError("");
      })

      .catch((error) => {
        setError(error.message);
        setIsLoading(false);
      });
  };

  const googleSignIn = () => {
    setIsLoading(true);
    const googleProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleProvider).finally(() =>
      setIsLoading(false)
    );
  };
  const processLogin = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const user = result.user;
        setError("");
      })
      .catch((error) => {
        setError(error.message);
      });
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
    user,
    setIsLoading,
    setEmailData,
    setPasswordData,
    setNameData,
    setUser,
    error,
    setError,
    googleSignIn,
    emailSignIn,
    logOut,
    processLogin,
  };
};
export default useFirebase;
