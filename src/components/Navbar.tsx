import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useTheme } from '../context/ThemeContext';

const Navbar = () => {
  const { cart } = useCart();
  const { dark, toggle } = useTheme();

  return (
    <nav className={`navbar navbar-expand-lg ${dark ? 'navbar-dark bg-dark' : 'navbar-light bg-light'}`}>
      <div className='container'>
        <Link className='navbar-brand fw-bold' to='/'>E-Commerce</Link>

        <div className='d-flex align-items-center'>
          <button className='btn btn-outline-secondary me-3' onClick={toggle} title='Toggle theme'>
            {dark ? 'Light' : 'Dark'}
          </button>

          <Link className='btn btn-outline-primary' to='/cart'>
            Cart ({cart.reduce((s, i) => s + i.quantity, 0)})
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;