import { useCart } from '../context/CartContext';

const Cart = () => {
  const { cart, increaseQty, decreaseQty, removeFromCart, total } = useCart();

  if (cart.length === 0) return <div className='container mt-4'><h4>Your cart is empty.</h4></div>;

  return (
    <div className='container mt-4'>
      <h3>Your Cart</h3>

      {cart.map(item => (
        <div key={item.id} className='card mb-3 p-3'>
          <div className='row align-items-center'>
            <div className='col-md-2'>
              <img src={item.image} style={{ width: '100%', height: 80, objectFit: 'cover' }} alt={item.title} />
            </div>
            <div className='col-md-6'>
              <h5>{item.title}</h5>
              <p className='text-muted'>${item.price.toFixed(2)}</p>
            </div>
            <div className='col-md-4 text-end'>
              <div className='btn-group' role='group'>
                <button className='btn btn-sm btn-outline-secondary' onClick={() => decreaseQty(item.id)}>-</button>
                <button className='btn btn-sm btn-light' disabled>{item.quantity}</button>
                <button className='btn btn-sm btn-outline-secondary' onClick={() => increaseQty(item.id)}>+</button>
              </div>

              <div className='mt-2'>
                <button className='btn btn-sm btn-danger' onClick={() => removeFromCart(item.id)}>Remove</button>
              </div>
            </div>
          </div>
        </div>
      ))}

      <div className='d-flex justify-content-end'>
        <div>
          <h4>Total: ${total.toFixed(2)}</h4>
          <button className='btn btn-primary'>Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;