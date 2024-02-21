import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { useRouter } from "next/navigation";


const DashboardLayout = async ({ children }) => {

    const session = await getServerSession(authOptions);
    console.log('pric',session);
    if(session.user.role !== 'User'){
        router.push('/')
        return
    }
    return (
        <>
            {children}
        </>
    );
};

export default DashboardLayout;