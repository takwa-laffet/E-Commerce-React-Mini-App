import { useParams, useNavigate } from 'react-router-dom';
import products from '../data/products.json';
import { useCart } from '../context/CartContext';

const ProductDetails = () => {
  const { id } = useParams();
  const product = products.find(p => String(p.id) === String(id));
  const { addToCart } = useCart();
  const navigate = useNavigate();

  if (!product) return <div className='container mt-4'><h4>Product not found</h4></div>;

  return (
    <div className='container mt-4'>
      <button className='btn btn-link mb-3' onClick={() => navigate(-1)}>← Back</button>
      <div className='row'>
        <div className='col-md-6'>
          <img src={product.image} alt={product.title} className='img-fluid rounded' />
        </div>
        <div className='col-md-6'>
          <h2>{product.title}</h2>
          <p className='text-muted'>{product.category}</p>
          <p>{product.description}</p>
          <h4>${product.price.toFixed(2)}</h4>

          <div className='d-flex gap-2 mt-3'>
            <button className='btn btn-success' onClick={() => { addToCart(product); }}>
              Add to cart
            </button>
            <button className='btn btn-outline-secondary' onClick={() => navigate('/cart')}>
              Go to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;