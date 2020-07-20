export const EMAIL_REQUEST = 'EMAIL_ACTION';
export const USERNAME_REQUEST = 'USERNAME_ACTION';

export const gethEmail = (email) => {
    return dispatch => {
        dispatch({
            type: EMAIL_REQUEST,
            payload: email
        })
    };
};

export const gethUsername = (userName) => {
    return dispatch => {
        dispatch({
            type: USERNAME_REQUEST,
            payload: userName,
        });
    };
};