import React, {useState} from 'react';
import './Bill.scss'

const BillPage =()=>{
  const [customerInfo, setCustomerInfo] = useState({
    name: '',
    email: '',
    address: '',
  });

  const [products, setProducts] = useState([]);

  const handleCustomerInfoChange = (e) => {
    const { name, value } = e.target;
    setCustomerInfo({ ...customerInfo, [name]: value });



    // hello comment
  };

  const handleAddProduct = () => {
    setProducts([...products, { name: '', price: 0 }]);
  };

  const handleProductChange = (index, e) => {
    const { name, value } = e.target;
    const newProducts = [...products];
    newProducts[index][name] = value;
    setProducts(newProducts);
  };

  const handleRemoveProduct = (index) => {
    const newProducts = [...products];
    newProducts.splice(index, 1);
    setProducts(newProducts);
  };

  return (
    <div className='Bill'>
      <h1>Hóa Đơn</h1>
      <div>
        <h2>Thông Tin Khách Hàng</h2>
        <input
          type="text"
          name="name"
          placeholder="Tên"
          value={customerInfo.name}
          onChange={handleCustomerInfoChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={customerInfo.email}
          onChange={handleCustomerInfoChange}
        />
        <textarea
          name="address"
          placeholder="Địa chỉ"
          value={customerInfo.address}
          onChange={handleCustomerInfoChange}
        ></textarea>
      </div>
      <div>
        <h2>Sản Phẩm</h2>
        {products.map((product, index) => (
          <div key={index}>
            <input
              type="text"
              name="name"
              placeholder="Tên sản phẩm"
              value={product.name}
              onChange={(e) => handleProductChange(index, e)}
            />
            <input
              type="number"
              name="price"
              placeholder="Giá"
              value={product.price}
              onChange={(e) => handleProductChange(index, e)}
            />
            <button onClick={() => handleRemoveProduct(index)}>Xóa</button>
          </div>
        ))}
        <button onClick={handleAddProduct}>Thêm Sản Phẩm</button>
      </div>
      <div>
        <h2>Tổng Cộng:</h2>
        <p>
          {products.reduce((total, product) => total + parseFloat(product.price), 0)} VND
        </p>
      </div>
    </div>
  );
}

export default BillPage;


