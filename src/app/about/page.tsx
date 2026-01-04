export default function AboutPage() {
    return (
        <main className="section-padding">
            <div className="container animate-fade-in-up">
                <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
                    <span style={{ color: 'var(--primary)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.2em', fontSize: '0.9rem', marginBottom: '24px', display: 'block' }}>
                        Our Story
                    </span>
                    <h1 className="font-display" style={{ fontSize: '4rem', marginBottom: '40px', lineHeight: 1.1 }}>
                        Crafting the Future of <span className="text-gradient">Premium Living</span>
                    </h1>

                    <div className="glass" style={{ padding: '48px', borderRadius: 'var(--radius-lg)', textAlign: 'left', marginBottom: '64px' }}>
                        <p style={{ fontSize: '1.25rem', color: 'var(--text-main)', marginBottom: '24px', lineHeight: 1.8 }}>
                            NovaCommerce was born from a simple observation: the world doesn't need more products, it needs better ones. We started in a small workshop with a vision to bridge the gap between artisanal craftsmanship and modern digital efficiency.
                        </p>
                        <p style={{ fontSize: '1.25rem', color: 'var(--text-muted)', marginBottom: '24px', lineHeight: 1.8 }}>
                            Our philosophy is rooted in "Essentialism." We believe every object in your life should serve a purpose and evoke a sense of beauty. We meticulously vet every designer and craftsman we partner with to ensure they share our commitment to sustainability and excellence.
                        </p>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '40px', marginTop: '80px' }}>
                        <div>
                            <h3 style={{ fontSize: '2.5rem', marginBottom: '8px', color: 'var(--primary)' }}>100%</h3>
                            <p style={{ color: 'var(--text-muted)' }}>Sustainably Sourced</p>
                        </div>
                        <div>
                            <h3 style={{ fontSize: '2.5rem', marginBottom: '8px', color: 'var(--primary)' }}>24/7</h3>
                            <p style={{ color: 'var(--text-muted)' }}>Premium Support</p>
                        </div>
                        <div>
                            <h3 style={{ fontSize: '2.5rem', marginBottom: '8px', color: 'var(--primary)' }}>50k+</h3>
                            <p style={{ color: 'var(--text-muted)' }}>Happy Clients</p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
