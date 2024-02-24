import PrimaryButton from '@/Components/buttons/PrimaryButton';
import { UserContext } from '@/providers/UserProvider';
import React, { useContext } from 'react';

const UpdateBio = ({setIsOpen}) => {
    const {user,setUser} = useContext(UserContext)
    const handleUpdate = async (e) => {
        e.preventDefault();

        const bio = e.target.bio.value;
        
        const res = await fetch(`/api/user`,{
            method:"PATCH",
            headers:{
                "Content-type":"Application/json",
            },
            body: JSON.stringify({bio})
        })

        const data = await res.json();
        if(data.success){
            setUser({...user, bio})
            setIsOpen(false);
        }
    }

    return (
        <form onSubmit={handleUpdate} className='mt-4 flex flex-col gap-5'>
            <div>
                <label htmlFor="" className='text-sm text-gray-500 mb-2 inline-block'>Bio</label>
                <textarea name="bio" id="" cols="30" defaultValue={user?.bio || ""} rows="3" className='px-3 py-2 w-full focus-visible:outline-none border border-gray-200 rounded' placeholder='Bio...'></textarea>
            </div>
            <PrimaryButton type={'submit'} css={' rounded'}>
                Update Bio
            </PrimaryButton>
        </form>
    );
};

export default UpdateBio;