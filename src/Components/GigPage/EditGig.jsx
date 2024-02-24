import Image from "next/image";
import { useRef, useState } from "react";
import { LuImagePlus } from "react-icons/lu";
import { RxCross2 } from "react-icons/rx";
import { toast } from "react-toastify";
import { singleImage } from "@/config/uploadImage/UploadImage";
import { local_img_url } from "@/utilsFunction/local_img_url";

const categorys = ["Web developer", "Devops Engineer", "Full stack developer"];
const DeliveryTime = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const EditGig = ({ gigData, setRefetch, refetch, setShowEdit }) => {
    const { _id, userId, image, category, rating, status, title, description, price, skills, deliveryTime, __v } = gigData

    //for category
    const [selectedCategory, setSelectedCategory] = useState(category);

    // for delivery days
    const [selectedDays, setSelectedDays] = useState(deliveryTime)

    //for skills
    const [selectedSkills, setSelectedSkills] = useState(skills);

    // skill feild ref 
    const skillFeildRef = useRef(null)

    // is focused
    const [isfocused, setIsFocused] = useState(false)

    // gig image preview 
    const [preview, setPreview] = useState(image)

    // to valided that user changed gig image or not
    const [isChanged, setIschanged] = useState(false)

    // for adding skill after pressing "enter"
    const handleAddSkill = (e) => {
        e.preventDefault();
        const keyCode = e.keyCode
        let value = e.target.value
        let skills = [...selectedSkills]

        // enter button keycode = 13
        if (keyCode == 13) {
            skills.push(value.trim())
            setSelectedSkills(skills)
            skillFeildRef.current.value = ""
            e.stopPropagation();
            e.preventDefault();
        }
    }
    const handleRemoveSkill = (index) => {
        let replica = [...selectedSkills]
        replica.splice(index, 1)
        setSelectedSkills(replica)
    }


    const hanldePreviewGigImg = async (e) => {
        const file = e.target.files[0]
        const url = await local_img_url(file)
        setPreview(url)
        setIschanged(true)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (isfocused) {
            return
        }

        // form data
        const form = e.target

        const title = form.title.value;
        const description = form.description.value;
        const price = parseInt(form.price.value)
        const newImage = form.image.files[0]

        if (!title || title.length < 14) return toast.error("Invalid title length")
        if (!description || description.length < 100) return toast.error("Invalid description length")
        if (selectedSkills.length < 1) return toast.error("Please select atleast on skill")
        if (!selectedCategory) return toast.error("Please select a Category")
        if (!price) return toast.error("Please select a price")
        if (!newImage && isChanged) return toast.error("Please select a photo for your gig")
        if (!selectedDays) return toast.error("Please select estimeted your delivery time")


        const toastId = toast.loading("Please wait..")

        try {

            if (newImage && isChanged) {
                var url = await singleImage(newImage)
            }

            const obj = {
                image: url || image,
                title: title,
                description: description,
                price: price,
                skills: selectedSkills,
                deliveryTime: Number(selectedDays),
                category: selectedCategory,
            }


            await fetch(`/api/gigs?gig_id=${_id}`, {
                method: "PUT",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify(obj)
            })

            form.reset()
            toast.dismiss(toastId)
            toast.success("Successfully gig created")
            setRefetch(!refetch)
            setShowEdit(false)
            setIschanged(false)


        }
        catch (err) {
            toast.dismiss(toastId)
            toast.error("Something went wrong...")
            console.log(err);
        }

    }

    return (
        <div>
            <form className="w-full max-w-[450px] mx-auto border-2 border-gray-200 shadow-sm bg-white min-h-[600px] p-4" onSubmit={handleSubmit}>
                <div className="mt-8">
                    <input
                        type="text"
                        placeholder="I will do"
                        defaultValue={title}
                        name="title"

                        className="border-2 border-gray-200 rounded-md py-1 px-1 w-full h-20"
                    />
                </div>
                <div className="mt-8">
                    <textarea placeholder="Type Description here..." className="border-2 border-gray-200 rounded-md py-1 px-1 w-full min-h-[150px]"
                        defaultValue={description}
                        name="description" ></textarea>
                </div>

                <div className="w-full flex justify-start items-center gap-[10px] flex-wrap">
                    {
                        selectedSkills?.map((skill, i) => <p
                            key={i + "i"}
                            className="px-[10px] py-[5px] cursor-pointer bg-gray-200 rounded-full text-[#707070] cursor-pointerf flex justify-start items-center gap-[5px]"
                            onClick={() => handleRemoveSkill(i)}
                        ><RxCross2 /> {skill}</p>)
                    }
                </div>
                <div className="flex justify-center items-center gap-[20px] mt-[20px]">


                    <div className="w-full">
                        <input type="text"
                            placeholder="Skills for this gig"
                            className="pl-1  w-full  rounded-md py-2 -mr-8 text-gray-500 cursor-pointer border-2 border-gray-200"
                            onKeyUp={handleAddSkill}
                            onFocus={() => setIsFocused(true)}
                            onBlur={() => setIsFocused(false)}
                            ref={skillFeildRef}
                        />
                    </div>

                    <select
                        value={selectedCategory}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                        className="w-full rounded-md py-2 text-gray-500 cursor-pointer border-2 border-gray-200"
                    >
                        <option value="">Select a Category</option>
                        {
                            categorys.map((cat, i) => <option key={i} value={cat}>
                                {cat}
                            </option>)
                        }
                    </select>


                </div>
                <div className="flex justify-center items-center gap-[20px] mt-[20px]">

                    <div className="w-full">
                        <input
                            type="number"
                            name="price"
                            defaultValue={price}
                            placeholder="Price"
                            className="border-2 border-gray-200 rounded-md py-2 px-1 w-full pl-1 text-gray-500"
                        />
                    </div>


                    <select
                        className="w-full rounded-md py-2 text-gray-500 cursor-pointer border-2 border-gray-200"
                        value={selectedDays}
                        onChange={(e) => setSelectedDays(e.target.value)}
                    >
                        <option value="">Delivery time</option>
                        {
                            DeliveryTime.map((time, i) => <option key={i + "skil"} value={time}>
                                {time} {time < 2 ? "Day" : "Days"}
                            </option>)
                        }
                    </select>

                </div>
                <div className="flex flex-col lg:flex-row lg:justify-between mt-12">

                    <div>
                        <label htmlFor="imgBox"
                            className="w-[180px] h-[80px] bg-slate-200 flex-col gap-[10px] flex justify-center items-center cursor-pointer"

                        >
                            {
                                preview ?
                                    <Image alt="preview" src={preview} width={180} height={80} className="h-full w-full object-cover" /> : <>
                                        <LuImagePlus />
                                        <p>Select Image</p>
                                    </>
                            }

                        </label>

                        <input className="hidden" accept="image/*" type="file" name="image" id="imgBox"
                            onChange={hanldePreviewGigImg}
                        />
                    </div>
                    <div className="flex flex-col gap-[10px] justify-start items-end">
                        <button type="submit" className="btn rounded-md mt-4 lg:mt-0 bg-black text-white" >
                            Save & Continue
                        </button>
                        <button className="text-white bg-red-700 px-[10px] py-[7px] rounded-lg" type="button" onClick={() => setShowEdit(false)}>Cancel Edit</button>
                    </div>
                </div>
            </form>

        </div>
    );
}
export default EditGig;