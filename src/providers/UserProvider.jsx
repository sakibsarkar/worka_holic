'use client'
import React, { createContext, useEffect, useState } from 'react';

export const UserContext = createContext({});
const UserProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
  
    const logout = () => {
      // Perform logout logic
      setUser(null);
    };

    useEffect(() => {
        const getUser = async () => {
            setLoading(true)
            try {
              const res = await fetch(`/api/user`,{
                  method:"GET"
              });
              const data = await res.json();
              setUser(data?.user);
              
            } catch (error) {
              console.log(error);
            }finally{
              setLoading(false)
            }
        }
        getUser();
    },[])

    const obj = { 
      user, setUser, 
      logout,
      loading, setLoading
     }

  
    return (
      <UserContext.Provider value={obj}>
        {children}
      </UserContext.Provider>
    );
};

export default UserProvider;