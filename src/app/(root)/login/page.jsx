import LoginForm from '@/Components/Form/LoginForm';
import React from 'react';

const page = () => {
    return (
        <div>
            <h2 className="flex items-center justify-center text-3xl  mt-5 font-bold text-[#007456] ">Please Login</h2>
            <div className="flex items-center mt-5 ml-5 justify-center">
                 <div class=" shrink-0 w-full max-w-md  flex items-center justify-center gap-10 p-10 bg-base-200">
                <LoginForm />
                </div>
            </div>
        </div>
    );
};

export default page;