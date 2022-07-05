import React from "react";

const user = {
    email: 'user@gmail.com',
    password: 'user_123',
    isLoggedIn: false,
};

const logOut = () => {};

const MyContext = React.createContext(user, logOut);

export default MyContext