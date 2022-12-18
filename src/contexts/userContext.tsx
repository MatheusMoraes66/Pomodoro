import React, { useContext, createContext, useState } from "react";
import { getUser } from "../service/user";
import { IUser, UserContextType } from "../@types/user";
import { useMessage } from "./useMessage";
import { serializeUser } from "../utils/serializeUser";
import { useNavigate } from "react-router-dom";

const DEFAULT_STATE: IUser = {
  login: "",
  id: 0,
  avatar_url: "",
  url: "",
  html_url: "",
  type: "",
  name: "",
  company: "",
  location: "",
  email: "",
  public_repos: 0,
  public_gists: 0,
  followers: 0,
  following: 0,
}

const DEFAULT_CONTEXT: UserContextType = {
  user: DEFAULT_STATE,
  searchUser: (name: string) => { },
}

export const UserContext = createContext<UserContextType>(DEFAULT_CONTEXT);

export const useUser = () => useContext(UserContext);

function UserProvider({ children }: { children: React.ReactElement }) {
  const navigate = useNavigate();

  const { messageSuccess, messageError } = useMessage()

  const [user, setUser] = useState<IUser>(DEFAULT_STATE);

  const searchUser = async (name: string) => {
    const resp = await getUser(name);
    if(resp?.status === 200){
      const response = messageSuccess(resp.data)
      console.log(response);
      navigate("/pomodore");
      setUser(serializeUser(response.data))
    } else {
      console.log(resp)
      const response = messageError(resp?.data)
      console.log(response);
      
    }
  }

  return (
    <UserContext.Provider
      value={{
        user,
        searchUser
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;