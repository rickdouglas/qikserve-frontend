import '../styles/Cart.scss';
export function Cart(){
    return (
      <div onClick={onclick} className="w-auto p-3" style={{ cursor: 'pointer', gap: '24px', maxWidth: "540px", boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px' }}>

        <div className="card-body" style={{ padding: '0' }}>
          <h5 className="card-title">
            Carrinho
          </h5>
          <div className="cart-list">
           <p className='card-text'>Caipirinha</p>
            <p>R$ 15,00</p>
          </div>
          <div className="col-md-4">
            <div className='button-group'>
              <button className="less-btn-cart">
                <i className="bi bi-dash" />
              </button>
              <p className="card-text">1</p>
              <button className="add-btn-cart">
                <i className="bi bi-plus" />
              </button>
            </div>
                      
          </div>
            <div className="cart-list">
              <p className='h5'>Total</p>
              <p>R$ 155,00</p>
            </div>
        </div>
      </div>
    );
}