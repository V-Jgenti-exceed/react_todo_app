export const getTokenFromLS = () => {
    const token = localStorage.getItem('token');
    return token || null;
};

export const setTokenLS = (value) => {
    return localStorage.setItem('token', value);
}