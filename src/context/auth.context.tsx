import { User, onAuthStateChanged } from "firebase/auth";
import { useRouter } from "next/router";
import { ReactNode, createContext, useEffect, useMemo, useState } from "react";
import { auth } from "src/firebase";
import { useAuth } from "src/hooks/useAuth";
interface AuthContextState {
  user: User | null;
  error: string;
  isLoading: boolean;
  signUp: (email: string, password: string) => Promise<void>;
  signIn: (email: string, password: string) => Promise<void>;
  logOut: () => Promise<void>;
}
export const AuthContext = createContext<AuthContextState>({
  user: null,
  error: "",
  isLoading: false,
  signIn: async () => {},
  signUp: async () => {},
  logOut: async () => {},
});
const AuthContextProvider = ({ children }: { children: ReactNode }) => {
  const [initialLoader, setInitialLoader] = useState<boolean>(true);
  const { error, isLoading, logOut, signIn, signUp, setUser, user, setIsLoading } = useAuth();
  const router = useRouter();
  const value = useMemo(() => ({ user, isLoading, error, signIn, signUp, logOut }), [user, isLoading, error]);
  useEffect(
    () =>
      onAuthStateChanged(auth, (user) => {
        if (user) {
          setIsLoading(false);
          setUser(user);
        } else {
          setUser(null);
          setIsLoading(true);
          router.push("/auth");
        }
        setInitialLoader(false);
        setIsLoading(false);
      }),
    []
  );
  return <AuthContext.Provider value={value}>{!initialLoader ? children : <h1>Loading...</h1>}</AuthContext.Provider>;
};
export default AuthContextProvider;
