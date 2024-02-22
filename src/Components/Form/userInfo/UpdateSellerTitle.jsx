import PrimaryButton from '@/Components/buttons/PrimaryButton';
import { UserContext } from '@/providers/UserProvider';
import React, { useContext } from 'react';

const UpdateSellerTitle = ({setIsOpen}) => {
    const {user,setUser} = useContext(UserContext)
    const handleUpdate = async (e) => {
        e.preventDefault();

        const accountTitle = e.target.accountTitle.value;
        
        const res = await fetch(`/api/user`,{
            method:"PATCH",
            headers:{
                "Content-type":"Application/json",
            },
            body: JSON.stringify({accountTitle})
        })

        const data = await res.json();
        if(data.success){
            setUser({...user, accountTitle})
            setIsOpen(false);
        }
    }

    return (
        <form onSubmit={handleUpdate} className='mt-4 flex flex-col gap-5'>
            <div>
                <label htmlFor="" className='text-sm text-gray-500 mb-2 inline-block'>Title</label>
                <input type="text" name='accountTitle' defaultValue={user?.accountTitle || ""} className='px-3 py-2 w-full focus-visible:outline-none border border-gray-200 rounded' placeholder='Display name' />
            </div>
            <PrimaryButton type={'submit'} css={' rounded'}>
                Save title
            </PrimaryButton>
        </form>
    );
};

export default UpdateSellerTitle;