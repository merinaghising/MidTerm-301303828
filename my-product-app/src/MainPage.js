// MainPage.js
import React from 'react';
import AddProduct from './AddProduct';
import SignUpUser from './SignUpUser';

const MainPage = () => {
    return (
        <div>
            <h1>Product Management</h1>
            <AddProduct />
            <h1>User Signup</h1>
            <SignUpUser />
        </div>
    );
};

export default MainPage;
