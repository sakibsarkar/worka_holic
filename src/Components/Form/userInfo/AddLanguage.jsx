import PrimaryButton from "@/Components/buttons/PrimaryButton";
import React, { useContext } from "react";
import { toast } from "react-toastify";
import { UserContext } from "@/providers/UserProvider";

const AddLanguage = ({ setIsOpen, oldLang }) => {
    const { user, setUser } = useContext(UserContext)
    const handleAdd = async (e) => {
        e.preventDefault()
        const newLang = e.target.feild.value
        if (!newLang) return toast.error("Please add a Language");

        const updatedLang = [newLang, ...oldLang]

        const update = { types: updatedLang }

        const res = await fetch(`/api/user`, {
            method: "PATCH",
            headers: {
                "Content-type": "Application/json",
            },
            body: JSON.stringify({ languages: update })
        })

        const data = await res.json();
        if (data.success) {
            setUser({ ...user, languages: update })
            setIsOpen(false);
        }

    }

    return (
        <form onSubmit={handleAdd} className='mt-4 flex flex-col gap-5'>
            <div>
                <label htmlFor="" className='text-sm text-gray-500 mb-2 inline-block'>Add a new Language</label>
                <input name="feild" className='px-3 py-2 w-full focus-visible:outline-none border border-gray-200 rounded' placeholder='Language...' />
            </div>
            <PrimaryButton type={'submit'} css={' rounded'}>
                Add Language
            </PrimaryButton>
        </form>
    );
};

export default AddLanguage;