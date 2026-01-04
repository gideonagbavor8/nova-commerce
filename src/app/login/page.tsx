'use client';

import { useState } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        const result = await signIn('credentials', {
            email,
            password,
            redirect: false,
        });

        if (result?.error) {
            setError('Invalid credentials. Hint: use admin@nova.com / password123');
            setLoading(false);
        } else {
            router.push('/');
            router.refresh();
        }
    };

    return (
        <div className="section-padding" style={{ minHeight: '80vh', display: 'flex', alignItems: 'center' }}>
            <div className="container" style={{ maxWidth: '450px' }}>
                <div className="glass animate-fade-in-up" style={{ padding: '48px', borderRadius: 'var(--radius-lg)' }}>
                    <h1 className="font-display" style={{ fontSize: '2.5rem', marginBottom: '8px', textAlign: 'center' }}>Welcome Back</h1>
                    <p style={{ color: 'var(--text-muted)', textAlign: 'center', marginBottom: '40px' }}>Enter your details to access your account.</p>

                    {error && (
                        <div style={{
                            background: 'rgba(239, 68, 68, 0.1)',
                            color: '#EF4444',
                            padding: '12px',
                            borderRadius: 'var(--radius-sm)',
                            marginBottom: '24px',
                            fontSize: '0.9rem',
                            border: '1px solid rgba(239, 68, 68, 0.2)'
                        }}>
                            {error}
                        </div>
                    )}

                    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                        <div>
                            <label style={{ display: 'block', marginBottom: '8px', fontSize: '0.9rem', color: 'var(--text-muted)' }}>Email Address</label>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="name@company.com"
                                required
                                className="glass"
                                style={{
                                    width: '100%',
                                    padding: '14px',
                                    borderRadius: 'var(--radius-md)',
                                    color: 'white',
                                    border: '1px solid var(--border)',
                                    outline: 'none'
                                }}
                            />
                        </div>
                        <div>
                            <label style={{ display: 'block', marginBottom: '8px', fontSize: '0.9rem', color: 'var(--text-muted)' }}>Password</label>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="••••••••"
                                required
                                className="glass"
                                style={{
                                    width: '100%',
                                    padding: '14px',
                                    borderRadius: 'var(--radius-md)',
                                    color: 'white',
                                    border: '1px solid var(--border)',
                                    outline: 'none'
                                }}
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className="btn-primary"
                            style={{ marginTop: '20px', padding: '16px', opacity: loading ? 0.7 : 1 }}
                        >
                            {loading ? 'Authenticating...' : 'Sign In'}
                        </button>
                    </form>

                    <div style={{ marginTop: '32px', textAlign: 'center', fontSize: '0.9rem', color: 'var(--text-dim)' }}>
                        Don't have an account? <Link href="/register" style={{ color: 'var(--primary)', fontWeight: 600 }}>Create one</Link>
                    </div>
                </div>

                <div style={{ marginTop: '24px', textAlign: 'center' }}>
                    <Link href="/" style={{ color: 'var(--text-dim)', fontSize: '0.9rem' }}>← Back to Homepage</Link>
                </div>
            </div>
        </div>
    );
}
