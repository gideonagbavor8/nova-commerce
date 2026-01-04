'use client';

import { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

export default function DashboardPage() {
    const { data: session, status } = useSession();
    const router = useRouter();
    const [stats, setStats] = useState({ products: 0, orders: 0, revenue: 0 });
    const [orders, setOrders] = useState<any[]>([]);

    useEffect(() => {
        if (status === 'unauthenticated') {
            router.push('/login');
        } else if (status === 'authenticated') {
            // Fetch data
            Promise.all([
                fetch('/api/products').then(res => res.json()),
                fetch('/api/orders').then(res => res.json())
            ]).then(([products, orders]) => {
                setStats({
                    products: products.length,
                    orders: orders.length,
                    revenue: orders.reduce((acc: number, curr: any) => acc + curr.total, 0)
                });
                setOrders(orders);
            });
        }
    }, [status, router]);

    if (status === 'loading') return <div className="section-padding container">Loading dashboard...</div>;

    return (
        <main className="section-padding">
            <div className="container animate-fade-in-up">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '48px' }}>
                    <h1 className="font-display" style={{ fontSize: '3rem' }}>Merchant Dashboard</h1>
                    <div className="glass" style={{ padding: '8px 20px', borderRadius: 'var(--radius-full)', border: '1px solid var(--primary)' }}>
                        <span style={{ color: 'var(--primary)', fontWeight: 600 }}>Admin Access</span>
                    </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '24px', marginBottom: '64px' }}>
                    <div className="glass" style={{ padding: '32px', borderRadius: 'var(--radius-lg)' }}>
                        <p style={{ color: 'var(--text-dim)', fontSize: '0.9rem', marginBottom: '8px' }}>Total Products</p>
                        <h2 style={{ fontSize: '2.5rem' }}>{stats.products}</h2>
                    </div>
                    <div className="glass" style={{ padding: '32px', borderRadius: 'var(--radius-lg)' }}>
                        <p style={{ color: 'var(--text-dim)', fontSize: '0.9rem', marginBottom: '8px' }}>Total Orders</p>
                        <h2 style={{ fontSize: '2.5rem' }}>{stats.orders}</h2>
                    </div>
                    <div className="glass" style={{ padding: '32px', borderRadius: 'var(--radius-lg)', border: '1px solid var(--primary-glow)' }}>
                        <p style={{ color: 'var(--text-dim)', fontSize: '0.9rem', marginBottom: '8px' }}>Total Revenue</p>
                        <h2 style={{ fontSize: '2.5rem', color: 'var(--primary)' }}>${stats.revenue}</h2>
                    </div>
                </div>

                <div className="glass" style={{ padding: '32px', borderRadius: 'var(--radius-lg)' }}>
                    <h3 style={{ fontSize: '1.5rem', marginBottom: '24px' }}>Recent Orders</h3>
                    {orders.length === 0 ? (
                        <p style={{ color: 'var(--text-dim)' }}>No orders yet.</p>
                    ) : (
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                            {orders.reverse().map(order => (
                                <div key={order.id} style={{ display: 'flex', justifyContent: 'space-between', padding: '16px', borderRadius: 'var(--radius-md)', background: 'rgba(255,255,255,0.02)' }}>
                                    <div>
                                        <p style={{ fontWeight: 600, marginBottom: '4px' }}>Order #{order.id.substr(0, 8)}</p>
                                        <p style={{ color: 'var(--text-dim)', fontSize: '0.8rem' }}>{new Date(order.createdAt).toLocaleDateString()}</p>
                                    </div>
                                    <div style={{ textAlign: 'right' }}>
                                        <p style={{ fontWeight: 700, color: 'var(--primary)' }}>${order.total}</p>
                                        <p style={{ color: 'var(--secondary)', fontSize: '0.8rem' }}>{order.status}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </main>
    );
}
