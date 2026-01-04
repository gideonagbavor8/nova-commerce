import Link from 'next/link';

export default function Footer() {
    return (
        <footer style={{
            borderTop: '1px solid var(--border)',
            background: 'var(--bg-deep)',
            padding: '80px 0 40px'
        }}>
            <div className="container">
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                    gap: '48px',
                    marginBottom: '80px'
                }}>
                    <div>
                        <Link href="/" style={{ fontSize: '1.5rem', fontWeight: 700, fontFamily: 'Outfit, sans-serif', display: 'block', marginBottom: '24px' }}>
                            NOVA<span style={{ color: 'var(--primary)' }}>COMMERCE</span>
                        </Link>
                        <p style={{ color: 'var(--text-dim)', lineHeight: 1.6, fontSize: '0.9rem' }}>
                            Elevating mundane moments into premium experiences. Join us on our journey to redefine modern living.
                        </p>
                    </div>

                    <div>
                        <h4 style={{ marginBottom: '24px', fontSize: '1rem' }}>Shop</h4>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                            <Link href="/shop" style={{ color: 'var(--text-dim)', fontSize: '0.9rem' }}>All Products</Link>
                            <Link href="/collections" style={{ color: 'var(--text-dim)', fontSize: '0.9rem' }}>Collections</Link>
                            <Link href="/featured" style={{ color: 'var(--text-dim)', fontSize: '0.9rem' }}>Featured</Link>
                        </div>
                    </div>

                    <div>
                        <h4 style={{ marginBottom: '24px', fontSize: '1rem' }}>Support</h4>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                            <Link href="/faq" style={{ color: 'var(--text-dim)', fontSize: '0.9rem' }}>FAQs</Link>
                            <Link href="/shipping" style={{ color: 'var(--text-dim)', fontSize: '0.9rem' }}>Shipping</Link>
                            <Link href="/returns" style={{ color: 'var(--text-dim)', fontSize: '0.9rem' }}>Returns</Link>
                        </div>
                    </div>

                    <div>
                        <h4 style={{ marginBottom: '24px', fontSize: '1rem' }}>Newsletter</h4>
                        <p style={{ color: 'var(--text-dim)', marginBottom: '16px', fontSize: '0.8rem' }}>Stay updated with our latest releases.</p>
                        <div style={{ display: 'flex', gap: '8px' }}>
                            <input
                                type="email"
                                placeholder="Email"
                                className="glass"
                                style={{
                                    padding: '8px 12px',
                                    borderRadius: 'var(--radius-sm)',
                                    border: '1px solid var(--border)',
                                    color: 'white',
                                    width: '100%',
                                    fontSize: '0.8rem'
                                }}
                            />
                            <button className="btn-primary" style={{ padding: '8px 16px', fontSize: '0.8rem' }}>Join</button>
                        </div>
                    </div>
                </div>

                <div style={{
                    borderTop: '1px solid var(--border)',
                    paddingTop: '40px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    color: 'var(--text-dim)',
                    fontSize: '0.8rem'
                }}>
                    <p>© 2026 NovaCommerce. All rights reserved.</p>
                    <div style={{ display: 'flex', gap: '24px' }}>
                        <Link href="/privacy">Privacy Policy</Link>
                        <Link href="/terms">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
