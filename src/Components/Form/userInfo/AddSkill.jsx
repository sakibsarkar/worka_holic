import PrimaryButton from "@/Components/buttons/PrimaryButton";
import React, { useContext } from "react";
import { toast } from "react-toastify";
import { UserContext } from "@/providers/UserProvider";

const AddSkill = ({ setIsOpen, oldSkills }) => {
    const { user, setUser } = useContext(UserContext)

    const handleAdd = async (e) => {
        e.preventDefault()
        const newSkill = e.target.feild.value
        if (!newSkill) return toast.error("Please add skill");

        const updatedSkills = [newSkill, ...oldSkills]

        const res = await fetch(`/api/user`, {
            method: "PATCH",
            headers: {
                "Content-type": "Application/json",
            },
            body: JSON.stringify({ skills: updatedSkills })
        })

        const data = await res.json();
        if (data.success) {
            setUser({ ...user, skills: updatedSkills })
            setIsOpen(false);
        }

    }

    return (
        <form onSubmit={handleAdd} className='mt-4 flex flex-col gap-5'>
            <div>
                <label htmlFor="" className='text-sm text-gray-500 mb-2 inline-block'>Add a new skill</label>
                <input name="feild" className='px-3 py-2 w-full focus-visible:outline-none border border-gray-200 rounded' placeholder='Bio...' />
            </div>
            <PrimaryButton type={'submit'} css={' rounded'}>
                Add skill
            </PrimaryButton>
        </form>
    );
};

export default AddSkill;