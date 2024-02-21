'use client'
import React, { createContext, useEffect, useState } from 'react';

export const UserContext = createContext({});
const UserProvider = ({children}) => {
    const [user, setUser] = useState(null);
  
    const logout = () => {
      // Perform logout logic
      setUser(null);
    };

    useEffect(() => {
        const getUser = async () => {
            const res = await fetch(`/api/user`,{
                method:"GET"
            });
            const data = await res.json();
            setUser(data?.user);
        }
        getUser();
    },[])

    const obj = { user, setUser, logout }

  
    return (
      <UserContext.Provider value={obj}>
        {children}
      </UserContext.Provider>
    );
};

export default UserProvider;