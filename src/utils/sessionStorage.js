export const save = (key, value) => {
	sessionStorage.setItem(key, value);
};

export const get = (key) => sessionStorage.getItem(key);

export const remove = (key) => sessionStorage.removeItem(key);
