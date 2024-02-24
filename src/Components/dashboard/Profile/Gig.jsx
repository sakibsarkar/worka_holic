import EditGig from "@/Components/GigPage/EditGig";
import Image from "next/image";
import Link from "next/link";
import Swal from "sweetalert2";
import { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaRegEye } from "react-icons/fa6";
import { RiDeleteBin6Line } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";
import { VscEdit } from "react-icons/vsc";
import { toast } from "react-toastify";

const Gig = ({ gigDetails, setRefetch, refetch }) => {

  const [showOptions, setShowOptions] = useState(false)

  // show the gig edit page
  const [showEdit, setShowEdit] = useState(false)

  const { _id, userId, image, rating, status, title, description, price, skills, deliveryTime, __v } = gigDetails || {}

  const gigTitle = title.length > 45 ? title.substring(0, 45) + "..." : title


  const handleDeleteGig = async () => {
    const result = await Swal.fire({
      title: "Do you want to Delete your gig?",
      showCancelButton: true,
      confirmButtonText: "Yes",
      denyButtonText: `No`
    })
    try {
      if (result.isConfirmed) {

        await fetch(`/api/gigs?gig_id=${_id}`, {
          method: "DELETE",
          headers: {
            'Content-Type': 'application/json'
          }
        }
        )

        setRefetch(!refetch)

      }

      if (result.isDenied) return
    }

    catch {
      toast.error("Something went wrong")
    }

  }



  return (
    <>
      {
        showEdit ?

          <EditGig gigData={gigDetails} setRefetch={setRefetch} refetch={refetch} setShowEdit={setShowEdit} />
          :
          <div className="w-[300px] h-[318px] relative border-[1px] border-gray-300 flex flex-col justify-start">

            <div className="absolute top-[10px] right-[10px]" onClick={() => setShowOptions(true)}>
              <button
                className="h-[30px] w-[30px] bg-[#ffffff] rounded-[50%] flex justify-center items-center border-[1px] border-[#c9c9c9]">
                <BsThreeDotsVertical />

              </button>
            </div>

            <Image width={300} height={250} src={image} alt="gig.png" className="w-full h-[200px] object-cover" />
            <div className="p-3 border-t-[1px] border-gray-300 bg-white space-y-4 w-full h-full">
              <Link href={`gig/${_id}`} className="font-medium hover:underline">{gigTitle}</Link>
              <p className="flex items-center justify-end font-semibold text-lg gap-2">
                <span className="text-sm ">STARTING AT </span> ${price}
              </p>
            </div>



            <div
              className="absolute flex flex-col justify-between items-start w-0 h-0 bg-[#efeff0] z-10 right-0 top-0 border-[] overflow-hidden transition-[0.5s] "
              style={showOptions ? { width: "100%", height: "100%" } : {}}

            >
              <div className="w-full">
                <Link href={`gig/${_id}`} className="w-full py-[10px] pl-[15px] flex justify-start items-center gap-[15px] hover:bg-[#dcdcdc]">
                  <FaRegEye /> View

                </Link>
                <button className="w-full py-[10px] pl-[15px] flex justify-start items-center gap-[15px] hover:bg-[#dcdcdc]" onClick={() => {
                  setShowEdit(true)
                  setShowOptions(false)
                }}>
                  <VscEdit /> Edit

                </button>
                <button className="w-full py-[10px] pl-[15px] flex justify-start items-center gap-[15px] hover:bg-[#dcdcdc]" onClick={handleDeleteGig}>
                  <RiDeleteBin6Line /> Delete

                </button>
              </div>

              <div className="border-t-[1px] border-[#dcdcdc] w-full py-[10px] pl-[15px] flex justify-start items-center gap-[10px] hover:bg-[#dcdcdc]" onClick={() => setShowOptions(false)}>
                <RxCross2 />
                <button>Cancel</button>
              </div>

            </div>

          </div>
      }

    </>
  );
};

export default Gig;
