import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Pages/UserAuthorize/Firebase/firebase.init";

initializeAuthentication();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");

  const handleSignUpName = (e) => {
    setName(e.target.value);
  };
  const handleSignUpEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleSignUpPassword = (e) => {
    setPassword(e.target.value);
  };
  const handleSignUp = (e) => {
    e.preventDefault();
    if (password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    } else {
      createUserWithEmailAndPassword(auth, email, password)
        .then((results) => {
          const userEmailPass = results.user;
          setUser(userEmailPass);
          updateProfile(auth.currentUser, {
            displayName: name,
          });

          setError("");
        })
        .catch((error) => {
          setError(error.message);
        });
    }
  };
  const auth = getAuth();

  const emailSignIn = () => {
    setIsLoading(true);

    signInWithEmailAndPassword(auth, email, password)
      .then((results) => {
        const user = results.user;
        console.log(user);
        setUser(user);
        setError("");
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  const googleSignIn = () => {
    setIsLoading(true);
    const googleProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleProvider).finally(() =>
      setIsLoading(false)
    );
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
  }, []);

  const logOut = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {})
      .finally(() => setIsLoading(false));
  };

  return {
    user,
    isLoading,
    email,
    password,
    name,
    error,
    googleSignIn,
    emailSignIn,
    logOut,
    handleSignUpName,
    handleSignUpEmail,
    handleSignUpPassword,
    handleSignUp,
  };
};
export default useFirebase;
