// src/AddProduct.js
import React, { useState } from 'react';

const AddProduct = () => {
  const [product, setProduct] = useState({
    name: '',
    price: '',
    description: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Product Added:\nName: ${product.name}\nPrice: ${product.price}\nDescription: ${product.description}`);
    console.log(product);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Name:
          <input type="text" name="name" value={product.name} onChange={handleChange} />
        </label>
      </div>
      <div>
        <label>
          Price:
          <input type="text" name="price" value={product.price} onChange={handleChange} />
        </label>
      </div>
      <div>
        <label>
          Description:
          <input type="text" name="description" value={product.description} onChange={handleChange} />
        </label>
      </div>
      <button type="submit">Add Product</button>
    </form>
  );
};

export default AddProduct;
