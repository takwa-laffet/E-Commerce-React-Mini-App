import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';
import Cart from './pages/Cart';
import { CartProvider } from './context/CartContext';
import { ThemeProvider } from './context/ThemeContext';


export default function App() {
return (
<BrowserRouter>
<ThemeProvider>
<CartProvider>
<Navbar />
<Routes>
<Route path='/' element={<Home />} />
<Route path='/product/:id' element={<ProductDetails />} />
<Route path='/cart' element={<Cart />} />
</Routes>
</CartProvider>
</ThemeProvider>
</BrowserRouter>
);
}