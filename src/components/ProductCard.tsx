import { Product } from '../types';
import { Link } from 'react-router-dom';

const ProductCard = ({ id, title, price, image }: Product) => {
  return (
    <div className='col-md-4 mb-4'>
      <div className='card h-100 product-card'>
        <img src={image} className='card-img-top' alt={title} style={{ height: 200, objectFit: 'cover' }} />
        <div className='card-body d-flex flex-column'>
          <h5 className='card-title'>{title}</h5>
          <p className='card-text text-muted'>${price.toFixed(2)}</p>
          <div className='mt-auto'>
            <Link className='btn btn-sm btn-primary w-100' to={`/product/${id}`}>View</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;