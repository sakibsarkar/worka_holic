import PrimaryButton from '@/Components/buttons/PrimaryButton';
import { UserContext } from '@/providers/UserProvider';
import React, { useContext } from 'react';

const UpdateDisplayName = ({setIsOpen}) => {
    const {user,setUser} = useContext(UserContext)
    const handleUpdate = async (e) => {
        e.preventDefault();

        const name = e.target.name.value;
        
        const res = await fetch(`/api/user`,{
            method:"PATCH",
            headers:{
                "Content-type":"Application/json",
            },
            body: JSON.stringify({name})
        })

        const data = await res.json();
        if(data.success){
            setUser({...user, name})
            setIsOpen(false);
        }
    }
    return (
        <form onSubmit={handleUpdate} className='mt-4 flex flex-col gap-5'>
           <div>
           <label htmlFor="" className='text-sm text-gray-500 mb-2 inline-block'>Display name</label>
            <input type="text" name='name' defaultValue={user?.name || ""} className='px-3 py-2 w-full focus-visible:outline-none border border-gray-200 rounded' placeholder='Display name' />
           </div>
            <PrimaryButton type={'submit'} css={' rounded'}>
                Update Name
            </PrimaryButton>
        </form>
    );
};

export default UpdateDisplayName;