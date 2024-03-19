import React from "react";

const Service = () => {
    return (
        <div className="min-h-[80vh] flex flex-col gap-[20px] items-center justify-center">
            <h1 className="mt-8 mb-16 text-center pt-8 text-4xl font-bold">
                Our <span className="text-primary-color">Service</span>
            </h1>
            <div className="w-full flex items-center justify-center gap-[20px]">

                <div className="h-[340px] w-[300px] boxShadow flex flex-col items-center justify-center gap-[30px] p-[20px] rounded-xl border-3 border-t-8 border-t-[#1f88d2]">
                    <div className="flex flex-col items-center justify-evenly gap-[30px] p-[20px] h-full">
                        <div>
                            <h1 className="font-bold text-lg">Privacy</h1>
                            <p className="text-sm mt-2 text-[#7a7a7a]"> Our dedicated privacy team operates globally, ensuring that your personal information remains secure and protected, regardless of where you ar</p>
                        </div>

                        <button className="w-full py-[4px] border-[1px] rounded-full bg-[#1f88d2] text-white hover:border-[#1f88d2] hover:bg-transparent hover:text-[#1f88d2]">View</button>
                    </div>
                </div>

                <div className="h-[420px] w-[350px] boxShadow flex flex-col items-center justify-center p-[20px] rounded-xl border-3 border-t-8 border-t-[#00a77c]">
                    <div className="flex flex-col items-center justify-evenly gap-[30px] p-[20px] h-full">
                        <div>
                            <h1 className="font-bold text-xl">Help & Support</h1>
                            <p className="text-sm mt-2 text-[#7a7a7a]"> Our dedicated privacy team operates globally, ensuring that your personal information remains secure and protected, regardless of where you ar</p>
                        </div>

                        <button className="w-full py-[4px] border-[1px] rounded-full bg-[#00a77c] text-white  hover:border-[#00a77c] hover:bg-transparent hover:text-[#00a77c]">View</button>
                    </div>

                </div>


                <div className="h-[340px] w-[300px] boxShadow flex flex-col items-center justify-center gap-[30px] p-[20px] rounded-xl border-3 border-t-8 border-t-[#ff7b7b]">
                    <div className="flex flex-col items-center justify-evenly gap-[30px] p-[20px] h-full">
                        <div>
                            <h1 className="font-bold text-lg">Budget</h1>
                            <p className="text-sm mt-2 text-[#7a7a7a]">Our budget-friendly option caters to individuals and businesses seeking cost-effective solutions without compromising on quality.</p>
                        </div>

                        <button className="w-full py-[4px] rounded-full border-[1px] bg-[#ff7b7b] text-white hover:border-[#ff7b7b] hover:bg-transparent hover:text-[#ff7b7b]">View</button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Service;