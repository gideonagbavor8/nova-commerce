'use client';

import Link from 'next/link';
import { useCart } from "@/app/context/CartContext";
import { useState } from "react";
import SearchModal from "./SearchModal";
import { signOut, useSession } from "next-auth/react";

export default function Navbar() {
    const { cartCount, toggleCart } = useCart();
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const { data: session } = useSession();

    return (
        <nav className="glass" style={{
            position: 'sticky',
            top: 0,
            zIndex: 100,
            borderBottom: '1px solid var(--border)',
            padding: '16px 0'
        }}>
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Link href="/" style={{ fontSize: '1.5rem', fontWeight: 700, fontFamily: 'Outfit, sans-serif' }}>
                    NOVA<span style={{ color: 'var(--primary)' }}>COMMERCE</span>
                </Link>

                <div style={{ display: 'flex', gap: '32px', alignItems: 'center' }}>
                    <Link href="/shop" style={{ fontSize: '0.9rem', fontWeight: 500 }}>Shop</Link>
                    <Link href="/collections" style={{ fontSize: '0.9rem', fontWeight: 500 }}>Collections</Link>
                    <Link href="/about" style={{ fontSize: '0.9rem', fontWeight: 500 }}>About</Link>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                    <button
                        onClick={() => setIsSearchOpen(true)}
                        style={{ background: 'none', border: 'none', color: 'white', cursor: 'pointer', fontSize: '1.2rem' }}
                        title="Search"
                    >
                        🔍
                    </button>
                    <button
                        onClick={toggleCart}
                        style={{ background: 'none', border: 'none', color: 'white', cursor: 'pointer', position: 'relative' }}
                    >
                        <span style={{ fontSize: '1.5rem' }}>🛍️</span>
                        {cartCount > 0 && (
                            <span style={{
                                position: 'absolute',
                                top: '-5px',
                                right: '-5px',
                                background: 'var(--primary)',
                                color: 'white',
                                borderRadius: '50%',
                                width: '18px',
                                height: '18px',
                                fontSize: '0.7rem',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontWeight: 700
                            }}>
                                {cartCount}
                            </span>
                        )}
                    </button>

                    <div style={{ width: '1px', height: '24px', background: 'var(--border)' }}></div>

                    {session ? (
                        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                            <Link href="/dashboard" style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--primary)' }}>
                                {session.user?.name?.split(' ')[0]}
                            </Link>
                            <button
                                onClick={() => signOut()}
                                style={{ background: 'none', border: 'none', color: 'var(--text-dim)', cursor: 'pointer', fontSize: '0.8rem' }}
                            >
                                Sign Out
                            </button>
                        </div>
                    ) : (
                        <Link href="/login" className="btn-primary" style={{ padding: '8px 20px', fontSize: '0.85rem' }}>
                            Sign In
                        </Link>
                    )}
                </div>
            </div>
            <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
        </nav>
    );
}
