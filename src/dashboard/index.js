import React, { useState } from 'react';
import './index.css';

function Dashboard() {
  const [searchTerm, setSearchTerm] = useState('');
  const [items, setItems] = useState([
    { name: 'Menengai 1kg bar soap', price: 140.00, quantity: 2, discount: 'null', subtotal: 280 },
    { name: 'Menengai 1kg bar soap', price: 140.00, quantity: 2, discount: 'null', subtotal: 280 },
    { name: 'Menengai 1kg bar soap', price: 140.00, quantity: 2, discount: 'null', subtotal: 280 },
    { name: 'Menengai 1kg bar soap', price: 140.00, quantity: 2, discount: 'null', subtotal: 280 },
    { name: 'Menengai 1kg bar soap', price: 140.00, quantity: 2, discount: 'null', subtotal: 280 },
  ]);

  return (
    <div className="dashboard">
      <div className="sidebar">
        <h2>clay mart supermarket</h2>
        <h3>point of sale</h3>
        <ul>
          <li><i className="icon">▧</i> Point of sale</li>
          <li><i className="icon">▦</i> Products</li>
          <li><i className="icon">▢</i> Reports</li>
          <li><i className="icon">▣</i> Suppliers</li>
          <li><i className="icon">▤</i> Expenses</li>
          <li><i className="icon">○</i> Track my business</li>
        </ul>
      </div>
      
      <div className="main-content">
        <div className="top-bar">
          <h3>zimmerman base road</h3>
          <div className="search-bar">
            <div className='input-container'>
              <input
                type="text"
                placeholder="Search item by name or number"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input"
              />
            </div>
            <div className="button-container">
              <button className="cancel-sale">CancelSale</button>
              <button className="remove-item">RemoveItem</button>
            </div>
          </div>
        </div>
        <div className='ti'>
          <table>
            <thead>
              <tr>
                <th>Item</th>
                <th>Price</th>
                <th>quantity</th>
                <th>discount</th>
                <th>subtotal</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item, index) => (
                <tr key={index} className={index % 2 === 0 ? 'even-row' : 'odd-row'}>
                  <td>{item.name}</td>
                  <td>{item.price.toFixed(2)}</td>
                  <td>{item.quantity}</td>
                  <td>{item.discount}</td>
                  <td>{item.subtotal.toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="sidebar-right">
        <div className="total-section">
          <h3>sub total</h3>
          <h3>discounts</h3>
          <h2 className='total'>TOTAL</h2>
          <div className="payment-amounts">
            <div className="paid">
              <h3>PAID</h3>
              <button className='bt'></button>
            </div>
            <div className="change">
              <h3>CHANGE</h3>
              <button className='bt'></button>
            </div>
          </div>
        </div>
        <div className="payment-method">
          <h3>HOW DO YOU WANT TO PAY?</h3>
          <div className="mpesa-section">
            <div className="mpesa-logo">M-PESA</div>
            <div className="payment-buttons">
              <img src='/images/mpesa.png' className='mpesa' alt="M-Pesa logo" />
              <button className='btn'></button>
              <button className='btn'></button>
              <button className='btn'></button>
              <button className='btn'></button>
              <button className='btn'></button>
            </div>
          </div>
          <button className="complete-sale">COMPLETE SALE</button>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;