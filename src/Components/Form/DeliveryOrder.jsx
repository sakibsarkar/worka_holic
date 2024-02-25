import PrimaryButton from "../buttons/PrimaryButton";
import React from "react";

const DeliveryOrder = ({ setIsOpen, setUpdateEffect, updateEffect, id }) => {
    const handleOrderSubmit = async (e) => {
        e.preventDefault();
        const documentOrder = e.target.documentInput.value;

        console.log(documentOrder);
        const res = await fetch(`/api/order?id=${id}`, {
            method: "PATCH",
            headers: {
                "Content-type": "Application/json",
            },
            body: JSON.stringify({
                documentOrder,
            })
        });
        const data = await res.json();
        if (data.success) {
            console.log(data);
            setUpdateEffect(!updateEffect);
            setIsOpen(false)
        }

    }
    return (
        <form onSubmit={handleOrderSubmit}>
            <div className='mt-2'>
                <label htmlFor="" className='text-sm text-gray-500 mb-2 inline-block'>Work Document</label>
                <textarea name="documentInput" id="" cols="30" rows="3" className='px-3 py-2 w-full focus-visible:outline-none border border-gray-200 rounded' placeholder='Work document...'></textarea>
            </div>
            <div className='mt-2'>
                <PrimaryButton type={'submit'} css={'w-full rounded'}>Order Submit</PrimaryButton>
            </div>
        </form>
    );
};

export default DeliveryOrder;