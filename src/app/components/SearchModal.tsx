'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

interface SearchModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function SearchModal({ isOpen, onClose }: SearchModalProps) {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState<any[]>([]);
    const [allProducts, setAllProducts] = useState<any[]>([]);

    useEffect(() => {
        if (isOpen) {
            fetch('/api/products')
                .then(res => res.json())
                .then(data => setAllProducts(data));
        }
    }, [isOpen]);

    useEffect(() => {
        if (query.trim().length > 1) {
            const filtered = allProducts.filter((p: any) =>
                p.name.toLowerCase().includes(query.toLowerCase()) ||
                p.category.toLowerCase().includes(query.toLowerCase())
            );
            setResults(filtered);
        } else {
            setResults([]);
        }
    }, [query, allProducts]);

    if (!isOpen) return null;

    return (
        <div style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(5, 5, 5, 0.9)',
            backdropFilter: 'blur(20px)',
            zIndex: 2000,
            padding: '40px 24px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            animation: 'fadeIn 0.3s ease-out'
        }}>
            <div style={{ width: '100%', maxWidth: '800px' }}>
                <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '40px' }}>
                    <button
                        onClick={onClose}
                        style={{ background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer', fontSize: '1.5rem' }}
                    >
                        ✕
                    </button>
                </div>

                <input
                    autoFocus
                    type="text"
                    placeholder="Search products, categories, styles..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    style={{
                        width: '100%',
                        background: 'none',
                        border: 'none',
                        borderBottom: '2px solid var(--border)',
                        fontSize: '2.5rem',
                        color: 'white',
                        outline: 'none',
                        paddingBottom: '16px',
                        fontFamily: 'var(--font-display)'
                    }}
                />

                <div style={{ marginTop: '64px', display: 'grid', gap: '24px' }}>
                    {results.length > 0 ? (
                        results.map(item => (
                            <Link
                                key={item.id}
                                href={`/product/${item.id}`}
                                onClick={onClose}
                                className="glass"
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '24px',
                                    padding: '16px',
                                    borderRadius: 'var(--radius-md)',
                                    transition: 'var(--transition-fast)'
                                }}
                            >
                                <img src={item.image} alt={item.name} style={{ width: '60px', height: '60px', borderRadius: 'var(--radius-sm)', objectFit: 'cover' }} />
                                <div>
                                    <h4 style={{ fontSize: '1.2rem', marginBottom: '4px' }}>{item.name}</h4>
                                    <p style={{ color: 'var(--text-dim)', fontSize: '0.9rem' }}>{item.category} • ${item.price}</p>
                                </div>
                            </Link>
                        ))
                    ) : query.trim().length > 1 ? (
                        <p style={{ color: 'var(--text-muted)', textAlign: 'center' }}>No matches found for "{query}"</p>
                    ) : (
                        <p style={{ color: 'var(--text-muted)', textAlign: 'center' }}>Start typing to discover products...</p>
                    )}
                </div>
            </div>
        </div>
    );
}
