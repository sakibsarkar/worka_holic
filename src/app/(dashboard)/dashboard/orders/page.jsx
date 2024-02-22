import OrderRows from '@/Components/Row/OrderRows';
import Link from 'next/link';
import React from 'react';

const OrderPage = () => {
    return (
        <div>
            <div className='box '>
                <div className='sm:flex items-center justify-between mb-5'>
                    <ul className='flex gap-3 items-center '>
                        <li><Link className='text-sm hover:text-gray-900 uppercase font-medium text-gray-500' href="/">Pending</Link></li>
                        <li><Link className='text-sm hover:text-gray-900 uppercase font-medium text-gray-500' href="/">Cancel</Link></li>
                        <li><Link className='text-sm hover:text-gray-900 uppercase font-medium text-gray-500' href="/">Success</Link></li>
                    </ul>
                    <Link href={'/'} className='btn btn-primary'>
                        Create new Gig
                    </Link>
                </div>
                <div className='bg-white p-3 overflow-x-auto'>
                    <table class="table-auto w-full border min-w-[800px]">
                        <thead>
                            <tr className='bg-gray-200'>
                                <th className='text-left px-3 py-2 text-gray-700'>BUYER</th>
                                <th className='text-left px-3 py-2 text-gray-700 w-[300px]'>GIG</th>
                                <th className='text-left px-3 py-2 text-gray-700'>DUE ON</th>
                                <th className='text-left px-3 py-2 text-gray-700'>TOTAL</th>
                                <th className='text-left px-3 py-2 text-gray-700'>NOTE</th>
                                <th className='text-left px-3 py-2 text-gray-700'>STATUS</th>
                            </tr>
                        </thead>
                        <tbody>
                            <OrderRows />
                            <OrderRows />
                            <OrderRows />
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default OrderPage;