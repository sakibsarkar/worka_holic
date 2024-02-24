import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import ModalBox from '../ui/ModalBox';
import DeliveryOrder from '../Form/DeliveryOrder';

const OrderRows = ({order,handleCancelOrder,handleAccept,setUpdateEffect,updateEffect}) => {
    const {_id,deliveryStatus,deliveryTime,ownerId,clientId,gigId} = order || {};
    const {title,image,price} = gigId || {}
    const [isOpen,setIsOpen] = useState(false);

    return (
        <>
            <tr className='hover:bg-gray-100 border-b'>
                <td className='px-3 py-2 '>
                    <Link href={'/'} className='flex items-center gap-3'>
                        <span>
                            <Image className='w-[45px] h-[45px] rounded-full' src={clientId?.avater || "https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=740&t=st=1708606773~exp=1708607373~hmac=f2c6e240246a34de4d2c28f60f1fc126a83fa1ecb113884e1d27eea27766cfb2"} width={45} height={45} alt="" />
                        </span>
                        <span className='text-sm'>{clientId?.name}</span>
                    </Link>
                </td>
                <td className='px-3 py-2'>
                    <div className='flex items-center gap-3'>
                        <div className='w-[70px] inline-block'>
                            <Image className='w-[50px]' src={ image || "https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/187499261/original/74ebbbae2b9dd6e737e3b7ca9023192c2f05c02a/wordpress-landing-page-elementor-create-landing-page-design-elementor-pro-websit.jpg"} width={40} height={40} alt="" />
                        </div>
                        <Link href={'/'} className='hover:underline text-sm'>{title}</Link>
                    </div>
                </td>
                <td className='px-3 py-2'>{deliveryTime}</td>
                <td className='px-3 py-2'>$ {price}</td>
                <td className='px-3 py-2'>Some Note</td>
                <td className='px-3 py-2'>
                    {
                        deliveryStatus == 'Pending' ?   <button onClick={() => handleAccept(_id)} className='font-medium bg-green-600 rounded px-2 py-1 text-xs text-white '> Accept now </button>
                        :   <span className='font-medium text-gray-600'> {deliveryStatus} </span>
                    }
                  
                </td>
                <td className='px-3 py-2'>
                    <div className=' flex flex-col gap-2'>{
                        deliveryStatus == "Pending" ? <> <button onClick={() => handleCancelOrder(_id)} className='font-medium bg-red-600 rounded px-2 py-1 text-xs text-white '> Cancel</button></> 
                        : deliveryStatus != "Pending" && deliveryStatus != "Cancel" ?  <><button onClick={() => setIsOpen(!isOpen)} className='font-medium bg-green-600 rounded px-2 py-1 text-xs text-white '> Delivery now </button></>
                        : <>Cancel</>
                    }
                    </div>
                  
                  
                </td>
            </tr>   

            <ModalBox title="Delivery order & Documents" isOpen={isOpen} setIsOpen={setIsOpen}>
                <DeliveryOrder 
                setIsOpen={setIsOpen}
                setUpdateEffect={setUpdateEffect}
                updateEffect={updateEffect}
                id={_id}
                />
            </ModalBox>
        </>
    );
};

export default OrderRows;