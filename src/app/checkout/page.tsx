'use client';

import { useCart } from "@/app/context/CartContext";
import { useRouter } from "next/navigation";
import React from "react";

export default function CheckoutPage() {
    const { cart, cartTotal, clearCart } = useCart();
    const router = useRouter();

    const handleCheckout = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const response = await fetch('/api/orders', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    items: cart,
                    total: cartTotal,
                    userId: 'guest-trader'
                })
            });

            if (response.ok) {
                alert("Order placed successfully! Check the Merchant Dashboard.");
                clearCart();
                router.push('/');
            }
        } catch (err) {
            alert("Checkout failed. Please try again.");
        }
    };

    return (
        <div className="section-padding">
            <div className="container">
                <h1 className="font-display" style={{ fontSize: '3rem', marginBottom: '48px' }}>Checkout</h1>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '64px' }}>
                    <div>
                        <h2 style={{ fontSize: '1.5rem', marginBottom: '24px' }}>Shipping Information</h2>
                        <form onSubmit={handleCheckout} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                                <input type="text" placeholder="First Name" required className="glass" style={{ padding: '14px', borderRadius: 'var(--radius-md)', color: 'white', border: '1px solid var(--border)' }} />
                                <input type="text" placeholder="Last Name" required className="glass" style={{ padding: '14px', borderRadius: 'var(--radius-md)', color: 'white', border: '1px solid var(--border)' }} />
                            </div>
                            <input type="email" placeholder="Email Address" required className="glass" style={{ padding: '14px', borderRadius: 'var(--radius-md)', color: 'white', border: '1px solid var(--border)' }} />
                            <input type="text" placeholder="Address" required className="glass" style={{ padding: '14px', borderRadius: 'var(--radius-md)', color: 'white', border: '1px solid var(--border)' }} />
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                                <input type="text" placeholder="City" required className="glass" style={{ padding: '14px', borderRadius: 'var(--radius-md)', color: 'white', border: '1px solid var(--border)' }} />
                                <input type="text" placeholder="Postal Code" required className="glass" style={{ padding: '14px', borderRadius: 'var(--radius-md)', color: 'white', border: '1px solid var(--border)' }} />
                            </div>

                            <h2 style={{ fontSize: '1.5rem', marginTop: '24px', marginBottom: '12px' }}>Payment Method</h2>
                            <div className="glass" style={{ padding: '16px', borderRadius: 'var(--radius-md)', display: 'flex', alignItems: 'center', gap: '12px' }}>
                                <input type="radio" checked readOnly />
                                <span>Credit / Debit Card (Simulation)</span>
                            </div>

                            <button type="submit" className="btn-primary" style={{ marginTop: '32px', padding: '18px' }}>Place Order</button>
                        </form>
                    </div>

                    <div>
                        <div className="glass" style={{ padding: '32px', borderRadius: 'var(--radius-lg)' }}>
                            <h2 style={{ fontSize: '1.5rem', marginBottom: '24px' }}>Order Summary</h2>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '24px' }}>
                                {cart.map(item => (
                                    <div key={item.id} style={{ display: 'flex', justifyContent: 'space-between' }}>
                                        <span style={{ color: 'var(--text-muted)' }}>{item.name} x {item.quantity}</span>
                                        <span style={{ fontWeight: 600 }}>${item.price * item.quantity}</span>
                                    </div>
                                ))}
                            </div>
                            <div style={{ height: '1px', background: 'var(--border)', marginBottom: '24px' }}></div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px' }}>
                                <span style={{ color: 'var(--text-muted)' }}>Subtotal</span>
                                <span>${cartTotal}</span>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px' }}>
                                <span style={{ color: 'var(--text-muted)' }}>Shipping</span>
                                <span style={{ color: 'var(--secondary)' }}>Free</span>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '24px' }}>
                                <span style={{ fontSize: '1.25rem', fontWeight: 700 }}>Total</span>
                                <span style={{ fontSize: '1.5rem', fontWeight: 700 }}>${cartTotal}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
