import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect, useRouter } from "next/navigation";
import NavBar from "@/Components/dashboard/navbar/NavBar";

const DashboardLayout = async ({ children }) => {
  const session = await getServerSession(authOptions);
  if (!session || session?.user?.role !== "User") {
    redirect(`/`);
  }

  return (
    <>
      <NavBar />
      <div className="  bg-gray-100 border-t-[1px] pt-10 border-gray-300 ">
        <div className="max-w-7xl min-h-screen mx-auto">{children}</div>
      </div>
    </>
  );
};

export default DashboardLayout;
