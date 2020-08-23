import React, { useState, useLayoutEffect } from 'react';
import { getStorage, setStorage, deleteStorage } from '../../utils/localStorage';
import serviceManager from '../../utils/servicesManager';

export const SessionContext = React.createContext({
  session: false,
  deleteSession: () => { },
  createSession: (session) => { },
  getSession: () => { },
  createUserData: (userData) => { },
  getUserData: () => { },
});

function SessionProvider({ children }) {
  const [session, setSession] = useState(false);

  useLayoutEffect(() => {
    const userSession = getStorage('user-session-otr');
    if (userSession) {
      setSession(true);
      let token = JSON.parse(userSession).token;
      serviceManager.setAuthorization(token); 
    }    
  }, [session]);

  const deleteSession = () => {
    deleteStorage('user-session-otr');
    setSession(false);
  };

  const createSession = (session) => {
    setStorage('user-session-otr', JSON.stringify(session));
    setSession(true);
  };
  const createUserData = (userData) => {
    setStorage('user-data-otr', JSON.stringify(userData));
  };
  const getUserData = () => {
    let userData = getStorage('user-data-otr');
    if (userData) userData = JSON.parse(userData);
    return userData;
  };
  const getSession = () => {
    let userSession = getStorage('user-session-otr');
    return userSession;
  };
  return (
    <SessionContext.Provider
      value={{
        session,
        createSession,
        deleteSession,
        getSession,
        createUserData,
        getUserData,
      }}
    >
      {children}
    </SessionContext.Provider>
  );
}

export default SessionProvider;
