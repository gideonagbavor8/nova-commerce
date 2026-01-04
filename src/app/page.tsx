'use client';

import { useCart } from "./context/CartContext";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Home() {
  const { addToCart } = useCart();
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/products')
      .then(res => res.json())
      .then(data => {
        setProducts(data);
        setLoading(false);
      });
  }, []);

  return (
    <main>
      {/* Hero Section */}
      <section className="section-padding" style={{ position: 'relative', overflow: 'hidden' }}>
        <div className="container animate-fade-in-up" style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
          <h1 className="text-gradient" style={{ fontSize: '4.5rem', marginBottom: '1.5rem', fontWeight: 700 }}>
            Elevate Your Lifestyle
          </h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.25rem', maxWidth: '600px', margin: '0 auto 2.5rem', lineHeight: 1.6 }}>
            Discover a curated collection of premium essentials designed for the modern connoisseur.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center' }}>
            <button className="btn-primary">Shop Collection</button>
            <button className="glass" style={{ padding: '12px 24px', borderRadius: 'var(--radius-md)', color: 'white', fontWeight: 600 }}>Explore More</button>
          </div>
        </div>

        {/* Background Decoration */}
        <div style={{
          position: 'absolute',
          top: '-20%',
          right: '-10%',
          width: '500px',
          height: '500px',
          background: 'var(--primary)',
          opacity: 0.15,
          filter: 'blur(120px)',
          borderRadius: '50%',
          zIndex: 0
        }}></div>
      </section>

      {/* Featured Products Group */}
      <section className="section-padding" style={{ background: 'var(--bg-deep)' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '48px' }}>
            <div>
              <h2 className="font-display" style={{ fontSize: '2.5rem', marginBottom: '12px' }}>Curated Essentials</h2>
              <p style={{ color: 'var(--text-dim)' }}>Handpicked pieces for the modern connoisseur.</p>
            </div>
            <Link href="/shop" style={{ color: 'var(--primary)', fontWeight: 600, fontSize: '0.9rem', letterSpacing: '1px' }}>
              VIEW ALL COLLECTION →
            </Link>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '32px' }}>
            {loading ? (
              <p>Loading collection...</p>
            ) : products.slice(0, 4).map((product) => (
              <div key={product.id} className="glass hover-lift" style={{
                borderRadius: 'var(--radius-lg)',
                overflow: 'hidden',
                transition: 'var(--transition-smooth)',
                cursor: 'pointer'
              }}>
                <Link href={`/product/${product.id}`}>
                  <div style={{ position: 'relative', height: '300px', overflow: 'hidden' }}>
                    <img
                      src={product.image}
                      alt={product.name}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                    <div style={{
                      position: 'absolute',
                      top: '16px',
                      right: '16px',
                      background: 'var(--glass-bg)',
                      padding: '4px 12px',
                      borderRadius: 'var(--radius-full)',
                      fontSize: '0.875rem'
                    }}>
                      {product.category}
                    </div>
                  </div>
                </Link>
                <div style={{ padding: '24px' }}>
                  <Link href={`/product/${product.id}`}>
                    <h3 style={{ fontSize: '1.25rem', marginBottom: '8px' }}>{product.name}</h3>
                  </Link>
                  <p style={{ color: 'var(--text-dim)', fontSize: '0.9rem', marginBottom: '20px', lineHeight: 1.5 }}>
                    {product.description}
                  </p>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontSize: '1.5rem', fontWeight: 700 }}>${product.price}</span>
                    <button
                      className="btn-primary"
                      style={{ padding: '8px 16px', fontSize: '0.9rem' }}
                      onClick={(e) => {
                        e.preventDefault();
                        addToCart(product);
                      }}
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
