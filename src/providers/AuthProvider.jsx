'use client'
import { SessionProvider, useSession } from 'next-auth/react';
import React from 'react';
import UserProvider from './UserProvider';

const AuthProvider = ({children}) => {
    return <SessionProvider>
        <UserProvider>
            {children}
        </UserProvider>
    </SessionProvider>;
};

export default AuthProvider;