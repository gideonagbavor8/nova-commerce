'use client';

import { useParams, useRouter } from "next/navigation";
import { products } from "@/lib/products";
import { useCart } from "@/app/context/CartContext";
import React from "react";

export default function ProductPage() {
    const params = useParams();
    const router = useRouter();
    const { addToCart } = useCart();

    const product = products.find(p => p.id === params.id);

    if (!product) {
        return (
            <div className="container" style={{ textAlign: 'center', padding: '100px 0' }}>
                <h2>Product not found</h2>
                <button onClick={() => router.push('/')} className="btn-primary" style={{ marginTop: '20px' }}>Back to Shop</button>
            </div>
        );
    }

    return (
        <div className="section-padding">
            <div className="container">
                <button
                    onClick={() => router.back()}
                    style={{ background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer', marginBottom: '32px', display: 'flex', alignItems: 'center', gap: '8px' }}
                >
                    ← Back
                </button>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '64px' }}>
                    <div className="glass" style={{ borderRadius: 'var(--radius-lg)', overflow: 'hidden', height: '500px' }}>
                        <img src={product.image} alt={product.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                        <span style={{ color: 'var(--primary)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '0.8rem', marginBottom: '12px' }}>
                            {product.category}
                        </span>
                        <h1 className="font-display" style={{ fontSize: '3rem', marginBottom: '16px' }}>{product.name}</h1>
                        <p style={{ fontSize: '1.25rem', color: 'var(--text-muted)', marginBottom: '32px', lineHeight: 1.6 }}>
                            {product.description}
                        </p>

                        <div style={{ display: 'flex', alignItems: 'center', gap: '24px', marginBottom: '40px' }}>
                            <span style={{ fontSize: '2.5rem', fontWeight: 700 }}>${product.price}</span>
                        </div>

                        <div style={{ display: 'flex', gap: '16px' }}>
                            <button
                                className="btn-primary"
                                style={{ flex: 1, padding: '18px' }}
                                onClick={() => addToCart(product)}
                            >
                                Add to Bag
                            </button>
                            <button className="glass" style={{ width: '60px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>♡</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
