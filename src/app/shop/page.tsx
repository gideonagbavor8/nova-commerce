'use client';

import { products } from "@/lib/products";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useCart } from "../context/CartContext";

export default function ShopPage() {
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [products, setProducts] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const { addToCart } = useCart();

    useEffect(() => {
        fetch('/api/products')
            .then(res => res.json())
            .then(data => {
                setProducts(data);
                setLoading(false);
            })
            .catch(error => {
                console.error("Failed to fetch products:", error);
                setLoading(false);
            });
    }, []);

    const categories = ['All', ...new Set(products.map(p => p.category))];

    const filteredProducts = selectedCategory === "All"
        ? products
        : products.filter(p => p.category === selectedCategory);

    if (loading) {
        return (
            <main className="section-padding">
                <div className="container animate-fade-in-up">
                    <h1 className="font-display" style={{ fontSize: '3rem', marginBottom: '40px' }}>Our Shop</h1>
                    <p>Loading products...</p>
                </div>
            </main>
        );
    }

    return (
        <main className="section-padding">
            <div className="container animate-fade-in-up">
                <h1 className="font-display" style={{ fontSize: '3rem', marginBottom: '40px' }}>Our Shop</h1>

                {/* Category Filters */}
                <div style={{
                    display: 'flex',
                    gap: '12px',
                    marginBottom: '48px',
                    overflowX: 'auto',
                    paddingBottom: '12px'
                }}>
                    {categories.map(category => (
                        <button
                            key={category}
                            onClick={() => setSelectedCategory(category)}
                            className={`glass ${selectedCategory === category ? 'active' : ''}`}
                            style={{
                                padding: '10px 24px',
                                borderRadius: 'var(--radius-full)',
                                border: '1px solid var(--border)',
                                background: selectedCategory === category ? 'var(--primary)' : 'rgba(255,255,255,0.05)',
                                color: selectedCategory === category ? 'white' : 'var(--text-dim)',
                                cursor: 'pointer',
                                transition: 'var(--transition-fast)',
                                fontSize: '0.9rem',
                                fontWeight: 500,
                                whiteSpace: 'nowrap'
                            }}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Product Grid */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
                    gap: '32px'
                }}>
                    {filteredProducts.map(product => (
                        <div key={product.id} className="glass" style={{
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
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '16px' }}>
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
        </main>
    );
}
