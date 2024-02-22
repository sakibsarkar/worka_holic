import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const OrderRows = () => {
    return (
        <>
            <tr className='hover:bg-gray-100 border-b'>
                <td className='px-3 py-2 '>
                    <Link href={'/'} className='flex items-center gap-3'>
                        <span>
                            <Image className='w-[45px] h-[45px] rounded-full' src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=740&t=st=1708606773~exp=1708607373~hmac=f2c6e240246a34de4d2c28f60f1fc126a83fa1ecb113884e1d27eea27766cfb2" width={45} height={45} alt="" />
                        </span>
                        <span className='text-sm'>Sufiya</span>
                    </Link>
                </td>
                <td className='px-3 py-2'>
                    <div className='flex items-center gap-3'>
                        <div className='w-[70px] inline-block'>
                            <Image className='w-[50px]' src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/187499261/original/74ebbbae2b9dd6e737e3b7ca9023192c2f05c02a/wordpress-landing-page-elementor-create-landing-page-design-elementor-pro-websit.jpg" width={40} height={40} alt="" />
                        </div>
                        <Link href={'/'} className='hover:underline text-sm'>I will design responsive wordpress landing page...</Link>
                    </div>
                </td>
                <td className='px-3 py-2'>12 Jan</td>
                <td className='px-3 py-2'>$ 15</td>
                <td className='px-3 py-2'>Some Note</td>
                <td className='px-3 py-2'>
                    <span className='font-medium text-gray-600'> Pending </span>
                </td>
            </tr>   
        </>
    );
};

export default OrderRows;