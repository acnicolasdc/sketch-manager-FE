import React, { useState, useLayoutEffect } from 'react';
import { getStorage, setStorage, deleteStorage } from '../../utils/localStorage';
import serviceManager from '../../utils/servicesManager';


type SessionContextType = {
  email: string,
  firstname: string,
  password: string,
  role: string,
  secondname: string,
  token: string,
  username: string,
  __v: number,
  _id: string,
}

export interface SessionContextInterface {
  session: boolean,
  deleteSession: () => void,
  createSession: (session: SessionContextType) => void,
  getSession: () => SessionContextType | boolean,
}

export interface SessionProviderProps {
  children: any,
}

export const SessionContext = React.createContext<SessionContextInterface>({
  session: false,
  deleteSession: () => { },
  createSession: () => { },
  getSession: () => false,
});

const SessionProvider:React.FunctionComponent<SessionProviderProps>=({ children })=> {
  const [session, setSession] = useState(false);

  useLayoutEffect(() => {
    const userSession = getStorage('user-session-skm');
    if (userSession && typeof userSession === 'string') {
      setSession(true);
      let token = JSON.parse(userSession).token;
      serviceManager.setAuthorization(token); 
    }    
  }, [session]);

  const deleteSession = () => {
    deleteStorage('user-session-skm');
    setSession(false);
  };

  const createSession = (session:SessionContextType) => {
    setStorage('user-session-skm', JSON.stringify(session));
    setSession(true);
  };
  const getSession = ():SessionContextType | boolean => {
    let userSession = getStorage('user-session-skm');
    if (userSession && typeof userSession === 'string'){ 
      userSession = JSON.parse(userSession);
      if(typeof userSession === 'object')return userSession;
    }
    return false;
  };
  return (
    <SessionContext.Provider
      value={{
        session,
        createSession,
        deleteSession,
        getSession,
      }}
    >
      {children}
    </SessionContext.Provider>
  );
}

export default SessionProvider;
