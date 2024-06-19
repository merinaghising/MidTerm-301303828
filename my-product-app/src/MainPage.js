// MainPage.js
import React from 'react';
import './styles.css'; // Import the CSS file
import AddProduct from './AddProduct';
import SignUpUser from './SignUpUser';

const MainPage = () => {
    return (
        <div className="container">
            <h1>Product Management and User Signup</h1>
            <div className="forms-container">
                <div className="form-box">
                    <h2>Add Product</h2>
                    <AddProduct />
                </div>
                <div className="form-box">
                    <h2>User Signup</h2>
                    <SignUpUser />
                </div>
            </div>
        </div>
    );
};

export default MainPage;
