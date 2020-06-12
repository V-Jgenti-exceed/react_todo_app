const heroUrl = 'http://georgiantodo.herokuapp.com';
const localHostUrl = 'http://localhost:4000';
const port = 4000;
const conf = {
    didMount: '/task/get/',
    deleteItem: `/task/delete/${id}/`,
    updateObject: `/task/${id}/update/`,
    controlInput: `/task/${id}/changeplan/`,
    addByEnter: `/task/create/`,
    clearCompleted: '/task/delete/',
    login: '/auth/login/',
    reg: '/user/reg/'
};

export { heroUrl, localHostUrl, port, conf };