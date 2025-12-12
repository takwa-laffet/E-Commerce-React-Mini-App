import { useEffect, useMemo, useState } from 'react';
import productsData from '../data/products.json';
import ProductCard from '../components/ProductCard';
import SkeletonCard from '../components/SkeletonCard';
import { Product } from '../types';

const PER_PAGE = 6;

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [products, setProducts] = useState<Product[]>([]);

  // filter & pagination state
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('all');
  const [page, setPage] = useState(1);

  useEffect(() => {
    let mounted = true;
    setLoading(true);
    setError(null);

    // simulate fetch with delay and occasional error
    const t = setTimeout(() => {
      try {
        if (!mounted) return;
        // simulate random error 10% chance
        if (Math.random() < 0.1) throw new Error('Network error');
        setProducts(productsData);
      } catch (e: any) {
        setError(e.message || 'Failed to load products');
      } finally {
        setLoading(false);
      }
    }, 700);

    return () => { mounted = false; clearTimeout(t); };
  }, []);

  const categories = useMemo(() => ['all', ...Array.from(new Set(productsData.map(p => p.category || 'uncategorized')))], []);

  const filtered = useMemo(() => {
    let list = products;
    if (category !== 'all') list = list.filter(p => p.category === category);
    if (query.trim()) list = list.filter(p => p.title.toLowerCase().includes(query.toLowerCase()));
    return list;
  }, [products, category, query]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PER_PAGE));

  useEffect(() => { if (page > totalPages) setPage(1); }, [totalPages]);

  const paginated = useMemo(() => filtered.slice((page - 1) * PER_PAGE, page * PER_PAGE), [filtered, page]);

  const retry = () => { setError(null); setLoading(true); setTimeout(() => { setProducts(productsData); setLoading(false); }, 700); };

  return (
    <div className='container mt-4'>
      <div className='d-flex justify-content-between align-items-center mb-3'>
        <h3>Products</h3>

        <div className='d-flex gap-2'>
          <input className='form-control' style={{ minWidth: 200 }} value={query} onChange={e => setQuery(e.target.value)} placeholder='Search products...' />
          <select className='form-select' value={category} onChange={e => setCategory(e.target.value)}>
            {categories.map(c => <option key={c} value={c}>{c}</option>)}
          </select>
        </div>
      </div>

      {error && (
        <div className='alert alert-danger'>
          <div>{error}</div>
          <button className='btn btn-sm btn-primary mt-2' onClick={retry}>Retry</button>
        </div>
      )}

      <div className='row'>
        {loading ? Array.from({ length: PER_PAGE }).map((_, i) => <SkeletonCard key={i} />) : (
          paginated.length === 0 ? (
            <div className='col-12'><p>No products found.</p></div>
          ) : (
            paginated.map(p => <ProductCard key={p.id} {...p} />)
          )
        )}
      </div>

      <div className='d-flex justify-content-between align-items-center mt-4'>
        <div>
          Page {page} of {totalPages}
        </div>

        <div>
          <button className='btn btn-outline-secondary me-2' disabled={page <= 1} onClick={() => setPage(p => Math.max(1, p - 1))}>Prev</button>
          <button className='btn btn-outline-secondary' disabled={page >= totalPages} onClick={() => setPage(p => Math.min(totalPages, p + 1))}>Next</button>
        </div>
      </div>
    </div>
  );
};

export default Home;