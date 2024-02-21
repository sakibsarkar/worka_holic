import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect, useRouter } from "next/navigation";


const DashboardLayout = async ({ children }) => {

    const session = await getServerSession(authOptions);
    if( !session || session?.user?.role !== 'User'){
        redirect(`/`) 
    }




    return (
        <>
            {children}
        </>
    );
};

export default DashboardLayout;