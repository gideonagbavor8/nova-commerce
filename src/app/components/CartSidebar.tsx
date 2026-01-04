'use client';

import { useCart } from "@/app/context/CartContext";
import { Product } from "@/lib/products";
import Link from "next/link";

interface CartItem extends Product {
    quantity: number;
}

export default function CartSidebar() {
    const { cart, cartTotal, removeFromCart, updateQuantity, isCartOpen, setIsCartOpen } = useCart();

    if (!isCartOpen) return null;

    return (
        <div style={{
            position: 'fixed',
            top: 0,
            right: 0,
            bottom: 0,
            width: '100%',
            maxWidth: '400px',
            background: 'rgba(5, 5, 5, 0.95)',
            backdropFilter: 'blur(20px)',
            borderLeft: '1px solid var(--border)',
            zIndex: 1000,
            display: 'flex',
            flexDirection: 'column',
            boxShadow: '-20px 0 50px rgba(0,0,0,0.5)',
            animation: 'slideIn 0.3s ease-out'
        }}>
            <style dangerouslySetInnerHTML={{
                __html: `
        @keyframes slideIn {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }
      `}} />

            <div style={{ padding: '32px', borderBottom: '1px solid var(--border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h2 className="font-display" style={{ fontSize: '1.5rem' }}>Your Bag</h2>
                <button
                    onClick={() => setIsCartOpen(false)}
                    style={{ background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer', fontSize: '1.2rem' }}
                >
                    ✕
                </button>
            </div>

            <div style={{ flex: 1, overflowY: 'auto', padding: '32px' }}>
                {cart.length === 0 ? (
                    <div style={{ textAlign: 'center', marginTop: '40px', color: 'var(--text-muted)' }}>
                        Your bag is empty.
                    </div>
                ) : (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                        {cart.map((item: CartItem) => (
                            <div key={item.id} style={{ display: 'flex', gap: '16px' }}>
                                <div style={{ width: '80px', height: '80px', borderRadius: 'var(--radius-md)', overflow: 'hidden' }}>
                                    <img src={item.image} alt={item.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                </div>
                                <div style={{ flex: 1 }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                                        <h4 style={{ fontSize: '1rem', fontWeight: 600 }}>{item.name}</h4>
                                        <span style={{ fontWeight: 700 }}>${item.price}</span>
                                    </div>
                                    <p style={{ color: 'var(--text-dim)', fontSize: '0.8rem', marginBottom: '12px' }}>{item.category}</p>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', background: 'var(--bg-card)', padding: '4px 12px', borderRadius: 'var(--radius-full)' }}>
                                            <button
                                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                style={{ background: 'none', border: 'none', color: 'white', cursor: 'pointer' }}
                                            >-</button>
                                            <span>{item.quantity}</span>
                                            <button
                                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                style={{ background: 'none', border: 'none', color: 'white', cursor: 'pointer' }}
                                            >+</button>
                                        </div>
                                        <button
                                            onClick={() => removeFromCart(item.id)}
                                            style={{ background: 'none', border: 'none', color: '#EF4444', fontSize: '0.8rem', cursor: 'pointer' }}
                                        >Remove</button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            <div style={{ padding: '32px', borderTop: '1px solid var(--border)', background: 'var(--bg-deep)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '24px' }}>
                    <span style={{ color: 'var(--text-muted)' }}>Total</span>
                    <span style={{ fontSize: '1.5rem', fontWeight: 700 }}>${cartTotal}</span>
                </div>
                <Link href="/checkout" style={{ width: '100%' }} onClick={() => setIsCartOpen(false)}>
                    <button className="btn-primary" style={{ width: '100%' }}>Checkout Now</button>
                </Link>
            </div>
        </div>
    );
}
