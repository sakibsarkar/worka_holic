import axios from "axios";

export const singleImage = async (image) => {
    const formImage = new FormData()
    formImage.append('image', image)


    const res = await axios.post(`https://api.imgbb.com/1/upload?key=${"37903e4288055807df74be2a197d367e"}`, formImage)
    // const data = await res.json();
    return res.data.data.display_url;
    // return data.data.display_url;
}