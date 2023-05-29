import axios from "axios";

const baseUrl = `${process.env.REACT_APP_SERVER_HOST}`;

export const wishlist = (productId, token) => {
    const url = `${baseUrl}/apiv1/userPanel/wishlist`
    const body = {
        product_id: productId
    }
    return axios.post(url, body, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
}

export const deleteWishlist = (wishlistId, token) => {
	const url = `${baseUrl}/apiv1/userPanel/wishlist/${wishlistId}`;
	return axios.delete(url, {
        headers : {
            'Authorization' : `Bearer ${token}`
        }
    });
};

export const deleteProduct = (productId, token) => {
    const url = `${baseUrl}/products/${productId}`
    return axios.delete(url, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
}
