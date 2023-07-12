import axios from "axios";

export const API = axios.create({
    baseURL: "http://localhost:8000/apartments"
})

export const findStays = async(url,setData) => {
    const response = await API.get(url)
    setData(response.data)
}