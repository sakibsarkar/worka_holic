"use client";
import PrimaryButton from "../buttons/PrimaryButton";
import React, { useContext } from "react";
import { useRouter } from "next/navigation";
import { UserContext } from "@/providers/UserProvider";
import { calculateNextDate } from "@/utilsFunction/dateConverter";

const OrderForm = ({ setIsOpen, gigData }) => {
    const { user } = useContext(UserContext);
    const router = useRouter();

<<<<<<< HEAD
    const {userId,_id,deliveryTime:gigDelivery} = gigData || {};
=======
    const { userId, _id, deliveryTime: gigDelivery } = gigData || {};
>>>>>>> 1046de0312ee4bf4716118360e2e87b21e4a3053


    const handleSubmit = async (e) => {
        e.preventDefault()
        if (!user?._id) {
            router.push('/login');
            return
        }
        
        const orderNote = e.target.orderNote.value;
<<<<<<< HEAD
        const {deliveryTime} = calculateNextDate(gigDelivery);
=======
        const { deliveryTime } = calculateNextDate(gigDelivery);
>>>>>>> 1046de0312ee4bf4716118360e2e87b21e4a3053

        try {
            const res = await fetch(`/api/order`, {
                method: "POST",
                headers: {
                    "Content-type": "Application/json",
                },
                body: JSON.stringify({
                    ownerId: userId?._id,
                    clientId: user?._id,
                    orderNote,
                    gigId: _id,
                    deliveryStatus: "Pending",
                    deliveryTime,
                })
            })
            const data = await res.json();
            if (data.success) {
                setIsOpen(false)
                console.log(data);
            }
        } catch (error) {
            console.log(error.message);
        }
    }
    return (
        <form onSubmit={handleSubmit} >
            <div className='mt-2'>
                <label htmlFor="" className='text-sm text-gray-500 mb-2 inline-block'>Write details your order note. (Optional)</label>
                <textarea name="orderNote" id="" cols="30" rows="3" className='px-3 py-2 w-full focus-visible:outline-none border border-gray-200 rounded' placeholder='Order note...'></textarea>
            </div>
            <div className='mt-2'>
                <PrimaryButton type={'submit'} css={'w-full rounded'}>Order now</PrimaryButton>
            </div>
        </form>
    );
};

export default OrderForm;