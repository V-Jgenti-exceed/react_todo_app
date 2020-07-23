export const getTokenFromLS = (tokenName) => {
    const token = localStorage.getItem(`${tokenName}`);
    return token || null;
};

export const setTokenLS = (name,value) => {
    return localStorage.setItem(`${name}`, value);
}