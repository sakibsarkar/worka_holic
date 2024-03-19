"use client";
import Link from "next/link";
import OrderRows from "@/Components/Row/OrderRows";
import React, { useEffect, useState } from "react";

const OrderPage = () => {
    const [updateEffect, setUpdateEffect] = useState(false)
    const [orders, setOrders] = useState([]);
    const [isTab, setIsTab] = useState('all');

    const orderStatus = ["all", "Pending", "Accept", "Cancel", "Delivery"]

    // Cancel order
    const handleCancelOrder = async (id) => {

        const res = await fetch(`/api/order?id=${id}`, {
            method: "PATCH",
            headers: {
                "Content-type": "Application/json",
            },
            body: JSON.stringify({
                deliveryStatus: "Cancel"
            })
        });
        const data = await res.json();
        if (data.success) {
            setUpdateEffect(!updateEffect)
        }
    }

    // Accept order
    const handleAccept = async (id) => {
        const res = await fetch(`/api/order?id=${id}`, {
            method: "PATCH",
            headers: {
                "Content-type": "Application/json",
            },
            body: JSON.stringify({
                deliveryStatus: "Accept"
            })
        });
        const data = await res.json();
        if (data.success) {
            setUpdateEffect(!updateEffect)
        }
    }


    useEffect(() => {
        const getOrders = async () => {
            const res = await fetch(`/api/order?status=${isTab}`, {
                method: "GET",
            })
            const { orders } = await res.json();
            setOrders(orders);
        }
        getOrders();
    }, [updateEffect, isTab])
    return (
        <div>
            <div className='box '>
                <div className='sm:flex items-center justify-between mb-5'>
                    <ul className='flex gap-3 items-center '>

                        {
                            orderStatus?.map((status, index) => <li key={index}>
                                <button onClick={() => setIsTab(status)}
                                    className={`text-sm hover:text-gray-900 uppercase font-medium  ${isTab == status ? 'text-gray-900 underline' : "text-gray-500"} `}>
                                    {status == "Deliver" ? "success" : status}

                                </button>
                            </li>)
                        }
                    </ul>
                    <Link href={'/createGig'} className='btn btn-primary'>
                        Create new Gig
                    </Link>
                </div>
                <div className='bg-white p-3 overflow-x-auto'>
                    <table className="table-auto w-full border min-w-[800px]">
                        <thead>
                            <tr className='bg-gray-200'>
                                <th className='text-left px-3 py-2 text-gray-700'>BUYER</th>
                                <th className='text-left px-3 py-2 text-gray-700 w-[300px]'>GIG</th>
                                <th className='text-left px-3 py-2 text-gray-700'>DUE ON</th>
                                <th className='text-left px-3 py-2 text-gray-700'>TOTAL</th>
                                <th className='text-left px-3 py-2 text-gray-700'>NOTE</th>
                                <th className='text-left px-3 py-2 text-gray-700'>STATUS</th>
                                <th className='text-left px-3 py-2 text-gray-700 w-[120px]'>ACTION</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                orders?.map(order => <OrderRows
                                    key={order?._id}
                                    order={order}
                                    handleCancelOrder={handleCancelOrder}
                                    handleAccept={handleAccept}
                                    setUpdateEffect={setUpdateEffect}
                                    updateEffect={updateEffect}
                                />)
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default OrderPage;