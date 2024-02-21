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
      <div className="max-w-7xl mx-auto">{children}</div>
    </>
  );
};

export default DashboardLayout;
