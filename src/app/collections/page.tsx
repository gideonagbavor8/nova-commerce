'use client';

import { products } from "@/lib/products";
import Link from "next/link";

export default function CollectionsPage() {
    const collections = [
        {
            title: 'Minimalist Tech',
            description: 'Streamlined design for the modern digital nomad.',
            image: 'https://images.unsplash.com/photo-1491933382434-500287f9b54b?w=800&q=80',
            category: 'Computing'
        },
        {
            title: 'Timeless Accessories',
            description: 'Objects that transcend seasonal trends.',
            image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80',
            category: 'Accessories'
        },
        {
            title: 'Sensory Essentials',
            description: 'Elevate your atmosphere with curated fragrances.',
            image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?w=800&q=80',
            category: 'Fragrance'
        }
    ];

    return (
        <main className="section-padding">
            <div className="container animate-fade-in-up">
                <h1 className="font-display" style={{ fontSize: '3rem', marginBottom: '16px' }}>Collections</h1>
                <p style={{ color: 'var(--text-muted)', marginBottom: '64px', fontSize: '1.25rem' }}>Curated themes for a cohesive lifestyle.</p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '80px' }}>
                    {collections.map((col, index) => (
                        <div key={col.title} style={{
                            display: 'grid',
                            gridTemplateColumns: index % 2 === 0 ? '1.2fr 1fr' : '1fr 1.2fr',
                            gap: '64px',
                            alignItems: 'center'
                        }}>
                            {index % 2 === 0 ? (
                                <>
                                    <div className="glass" style={{ borderRadius: 'var(--radius-lg)', overflow: 'hidden', height: '500px' }}>
                                        <img src={col.image} alt={col.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                    </div>
                                    <div>
                                        <h2 className="font-display" style={{ fontSize: '2.5rem', marginBottom: '24px' }}>{col.title}</h2>
                                        <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', marginBottom: '32px', lineHeight: 1.6 }}>{col.description}</p>
                                        <Link href={`/shop`}>
                                            <button className="btn-primary">View Collection</button>
                                        </Link>
                                    </div>
                                </>
                            ) : (
                                <>
                                    <div>
                                        <h2 className="font-display" style={{ fontSize: '2.5rem', marginBottom: '24px' }}>{col.title}</h2>
                                        <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', marginBottom: '32px', lineHeight: 1.6 }}>{col.description}</p>
                                        <Link href={`/shop`}>
                                            <button className="btn-primary">View Collection</button>
                                        </Link>
                                    </div>
                                    <div className="glass" style={{ borderRadius: 'var(--radius-lg)', overflow: 'hidden', height: '500px' }}>
                                        <img src={col.image} alt={col.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                    </div>
                                </>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}
