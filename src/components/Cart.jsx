import { useEffect } from 'react';
import '../styles/Cart.scss';
import React ,{ useState } from 'react';

export function Cart() {
  const [order, setOrder] = useState([]);

  useEffect(() => {
    const updateCart = () => {
      const existingOrderString = localStorage.getItem('order');
      const existingOrder = existingOrderString ? JSON.parse(existingOrderString) : [];
      setOrder(existingOrder);
    };
  
    // Update cart when component mounts
    updateCart();
  
    // Listen for the custom event and update cart when it's fired
    const listener = window.addEventListener('itemAddedToCart', updateCart);
  
    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('itemAddedToCart', listener);
    };
  }, []);

  return (
    <div
      onClick={onclick}
      className="w-auto p-3"
      style={{
        cursor: 'pointer',
        gap: '24px',
        maxWidth: '540px',
        boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
      }}
    >
      <div className="card-body" style={{ padding: '0' }}>
        <h5 className="card-title">Carrinho</h5>
        {order.map((product) => (
          <React.Fragment key={product.id}>
            <div className="cart-list">
          <p className="card-text">{product.name}</p>
          <p>R${product.price}</p>
        </div>
        <div className="col-md-4">
          <div className="button-group">
            <button className="less-btn-cart">
              <i className="bi bi-dash" />
            </button>
            <p className="card-text">1</p>
            <button className="add-btn-cart">
              <i className="bi bi-plus" />
            </button>
          </div>
        </div>
          </React.Fragment>
        ))}
        <div className="cart-list">
          <p className="h5">Total</p>
          <p>R${order.reduce((total, product) => total + parseFloat(product.price), 0).toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
}