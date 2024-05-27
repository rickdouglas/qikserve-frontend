import PropTypes from 'prop-types';

export function Card({ name, description, price, images, onclick }) {
  return (
    <div data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={onclick} className="w-auto p-3" style={{ cursor: 'pointer', margin: '0.5rem', maxWidth: "540px", boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px' }}>
      <div className="row g-0">
        <div className="col-md-4">
          <img src={images} className="img-fluid rounded" alt="" />
        </div>
        <div className="col-md-8">
          <div className="card-body" style={{ padding: '0', paddingLeft: '1rem' }}>
            <h5 className="card-title">
              <button className='btn-primary'>1</button>
              {name}
            </h5>
            <p className="card-text">
              {description && description.length > 100 ? description.slice(0, 100) + '...' : description}
            </p>
            <p className="h6">
              R${price.toFixed(2)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

Card.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  price: PropTypes.number,
  images: PropTypes.array,
  onclick: PropTypes.func,
};
