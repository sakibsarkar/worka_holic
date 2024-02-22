import axios from "axios";

export const singleImage = async (image) => {
    const formImage = new FormData()
    formImage.append('image', image)
    const res = await axios.post(`https://api.imgbb.com/1/upload?key=${process.env.NEXT_PUBLIC_IMG_BB}`, formImage)
    // const data = await res.json();
    return res.data.data.display_url;
    // return data.data.display_url;
}