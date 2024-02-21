'use client'
import { SessionProvider, useSession } from 'next-auth/react';
import React from 'react';

const AuthProvider = ({children}) => {
    const {data:session} = useSession();
    return <SessionProvider session={session}>{children}</SessionProvider>;
};

export default AuthProvider;