import axios from "axios";

const baseUrl = `${process.env.REACT_APP_SERVER_HOST}`;

export const deleteProduct = (id, token) => {
    const url = `${baseUrl}/products/${id}`
    const config = {
        headers: { Authorization: `Bearer ${token}` },
    }
    return axios.delete(url,config)
}