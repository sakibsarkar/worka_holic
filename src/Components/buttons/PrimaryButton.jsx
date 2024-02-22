import React from 'react';

const PrimaryButton = ({children,type,css}) => {
    return (
        <button type={type} className={`btn btn-primary ${css}`} >
            {children}
        </button>
    );
};

export default PrimaryButton;