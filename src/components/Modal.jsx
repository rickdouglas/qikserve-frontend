import '../styles/Modal.scss';
import PropTypes from 'prop-types';

export function Modal({ item, closeModal }) {
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
              {item.modifiers ? 
              
              item.modifiers.map((modifier) => (
                modifier.items.map((item) => (
                  <div key={item.id} className="form-check">
                    <input
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
                          {typeof item.price === 'number' ? item.price.toFixed(2).toString() : ''}
                        </p>
                      </div>
                    </label>
                  </div>
                ))
              ))
                  
                
              : 
                <div className="form-check">
                  <input
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
          <button className="btn-order">
            Add to order . {item.price.toFixed(2).toString()}
          </button>
        </div>
      </div>
    </div>
  );
}

Modal.propTypes = {
  item: {
    name: PropTypes.string,
    price: PropTypes.number,
    description: PropTypes.string,
    images: PropTypes.array,
    modifiers: PropTypes.array,
  },
  
  closeModal: PropTypes.func.isRequired,
  
};
