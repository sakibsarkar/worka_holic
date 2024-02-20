import React from 'react';

const PrimaryButton = ({children,type,}) => {
    return (
        <button type={type} className='btn btn-primary' >
            {children}
        </button>
    );
};

export default PrimaryButton;