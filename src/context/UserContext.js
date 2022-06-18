import { createContext, useContext, useEffect, useState } from "react";

const Context = createContext();

const Provider = ({ children }) => {
  const [user, setUser] = useState(
    localStorage.getItem("user", null)
      ? JSON.parse(localStorage.getItem("user"))
      : false
  );

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  const data = {
    user,
    setUser,
  };

  return <Context.Provider value={data}>{children}</Context.Provider>;
};

export const useUser = () => useContext(Context);
export default Provider;
