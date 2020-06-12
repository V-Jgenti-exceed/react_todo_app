import App from '../App';

const heroUrl = 'http://georgiantodo.herokuapp.com';
const localHostUrl = 'http://localhost:4000';
const port = 4000;
const conf = {
    didMount: '/task/get/',
    deleteItem: `/task/delete/${""}/`,
    updateObject: `/task/${""}/update/`,
    controlInput: `/task/${""}/changeplan/`,
    addByEnter: `/task/create/`,
    clearCompleted: '/task/delete/',
    login: '/auth/login/',
    reg: '/user/reg/'
};

export { heroUrl, localHostUrl, port, conf };