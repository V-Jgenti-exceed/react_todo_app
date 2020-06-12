export const getTokenFromLS = () => {
    const token = localStorage.getItem('token');
    return token || null;
};

export const setTokenLS = (value) => {
    const token = localStorage.setItem("token", value);
}