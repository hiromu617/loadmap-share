import { FC, createContext, useEffect, useState } from "react";
import { getAuth, getRedirectResult, GoogleAuthProvider } from "firebase/auth";
import { User } from "../types/User";
import axios from "../libs/axios";

const CurrentUserContext = createContext(
  {} as {
    currentUser: User | null | undefined;
    setCurrentUser: React.Dispatch<
      React.SetStateAction<User | null | undefined>
    >;
    loading: boolean;
  }
);

const CurrentUserProvider: FC = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<User | null | undefined>(
    undefined
  );
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    const auth = getAuth();
    getRedirectResult(auth)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access Google APIs.
        const credential = GoogleAuthProvider.credentialFromResult(result!);
        const token = credential?.accessToken;

        // The signed-in user info.
        const user = result?.user;
        // console.log("token", token);
        console.log("user", user);

        if (user && user.displayName && token && user.photoURL) {
          axios
            .post("/api/v1/users/login", {
              user: {
                name: user.displayName,
                uid: user.uid,
                profile_image: user.photoURL,
              },
            })
            .then((res) => {
              console.log(res);
              setCurrentUser({
                uid: res.data.uid,
                name: res.data.name,
                profile_image: res.data.profile_image,
              });
            })
            .catch((e) => {
              console.error(e);
            });
        }
        if (!user) {
          setCurrentUser(null);
        }
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        // Handle Errors here.
        const errorCode = error.code;
        console.error(errorCode);
        const errorMessage = error.message;
        console.error(errorMessage);
        // The email of the user's account used.
        const email = error.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  }, []);

  /* 下階層のコンポーネントをラップする */
  return (
    <CurrentUserContext.Provider
      value={{
        currentUser: currentUser,
        setCurrentUser: setCurrentUser,
        loading: loading,
      }}
    >
      {children}
    </CurrentUserContext.Provider>
  );
};

export { CurrentUserContext, CurrentUserProvider };
