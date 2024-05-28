import '../styles/Modal.scss';
import PropTypes from 'prop-types';
import { useState } from 'react';

export function Modal({ item, closeModal }) {

  const [total, setTotal] = useState('');

  const addToOrder = () => {
    const product = {
      id: item.id,
      name: item.name,
      price: total,
    };
    // Get the existing order from localStorage
    let existingOrder = localStorage.getItem('order');
  
    // If an order already exists, parse it into an array. Otherwise, start with an empty array
    existingOrder = existingOrder ? JSON.parse(existingOrder) : [];
  
    // Add the new item to the order
    existingOrder.push(product);
  
    // Convert the updated order back into a JSON string
    const orderJson = JSON.stringify(existingOrder);
  
    // Save the updated order in localStorage
    localStorage.setItem('order', orderJson);
  };

  return (
    <div className="modal-teste">
      <div className="modal-content-teste">
        <div className="card">
          <div className="row-g-0 d-flex">
            <img
              src={item.images && item.images[0].image}
              className="card-img"
              alt="..."
            />
            <button onClick={closeModal} className='btn-close'>
              <i className="bi bi-x-lg" />
            </button>
          </div>
          <div className="card-body">
            <h5 className="card-title">{item.name}</h5>
            <p className="card-text">
              {item.description && item.description.length > 100
                ? item.description.slice(0, 100) + '...'
                : item.description}
            </p>
            <div className="col-md">
              <h6>Choose your size</h6>
              <p className="card-text">Select one option</p>
              {console.log(item.modifiers, 'item.modifiers')}
              {item.modifiers ? 
                item.modifiers.map((modifier) => (
                  modifier.items.map((item) => (
                    <div key={item.id} className="form-check">
                      <input
                        onChange={() => setTotal(item.price.toFixed(2).toString())}
                        className="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexRadioDefault1"
                      >
                        <div className="col">
                          <h6>{item.name}</h6>
                          <p className="card-text">
                            {item.price.toFixed(2).toString()}
                          </p>
                        </div>
                      </label>
                    </div>
                    
                  ))
                ))
                
              : 
                <div className="form-check">
                  <input
                    onChange={() => setTotal(item.price.toFixed(2).toString())}
                    className="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault1"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexRadioDefault1"
                  >
                    <div className="col">
                      <h6>1 meat</h6>
                      <p className="card-text">
                        {item.price.toFixed(2).toString()}
                      </p>
                    </div>
                  </label>
                </div>
              }
            </div>
          </div>
          <div className="card-body">
            <div className="row-g-0 d-flex justify-content-evenly">
              <button className="less-btn">
                <i className="bi bi-dash-lg" />
              </button>
              <p className="card-text">1</p>
              <button className="add-btn">
                <i className="bi bi-plus-lg" />
              </button>
            </div>
          </div>
          <button onClick={addToOrder} className="btn-order">
            Add to order . {total}
          </button>
        </div>
      </div>
    </div>
  );
}

Modal.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    price: PropTypes.number,
    description: PropTypes.string,
    images: PropTypes.array,
    modifiers: PropTypes.array,
  }),
  closeModal: PropTypes.func.isRequired,
};