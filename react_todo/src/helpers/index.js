// export const getTokenFromLS = (tokenName) => {
//     const token = localStorage.getItem(`${tokenName}`);
//     return token || null;
// };

// export const setTokenLS = (name, value) => {
//     return localStorage.setItem(`${name}`, value);
// }

export const gethTokenFromLocalStorage = () => {
    const arr = ['googleToken', 'facebookToken', 'token'];
    let token = {};
    arr.forEach(e => {
        if (e != null && localStorage.getItem(`${e}`)) {
            token.identifyer = e;
            token.value = localStorage.getItem(`${e}`);

        }
    })
    return token;
}

export const isEmpty = (obj) => {
    return Object.keys(obj).length === 0;
}