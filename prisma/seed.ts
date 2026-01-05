import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
    const products = [
        {
            id: '1',
            name: 'Aether Quartz Watch',
            description: 'A minimalist masterpiece blending timeless design with precision quartz movement.',
            price: 249,
            image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80',
            category: 'Accessories',
            stock: 50
        },
        {
            id: '2',
            name: 'Nebula Pro Headphones',
            description: 'Immersive soundscapes with advanced noise cancellation technology.',
            price: 399,
            image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80',
            category: 'Electronics',
            stock: 30
        },
        {
            id: '3',
            name: 'Onyx Leather Backpack',
            description: 'Premium handcrafted leather meet modern functional design.',
            price: 189,
            image: 'https://images.unsplash.com/photo-1547949003-9792a18a2601?w=800&q=80',
            category: 'Travel',
            stock: 45
        },
        {
            id: '4',
            name: 'Zenith Mechanical Keyboard',
            description: 'Tactile perfection for the modern professional.',
            price: 159,
            image: 'https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?w=800&q=80',
            category: 'Computing',
            stock: 25
        },
        {
            id: '5',
            name: 'Phantom Midnight Sneakers',
            description: 'Ultra-lightweight performance meets high-fashion aesthetics.',
            price: 299,
            image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80',
            category: 'Footwear',
            stock: 15
        },
        {
            id: '6',
            name: 'Velvet Oud Essence',
            description: 'A rich, mysterious fragrance with notes of saffron and dark wood.',
            price: 185,
            image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?w=800&q=80',
            category: 'Fragrance',
            stock: 40
        }
    ]

    console.log('Seeding products...')
    for (const product of products) {
        await prisma.product.upsert({
            where: { id: product.id },
            update: product,
            create: product,
        })
    }

    // Create admin user
    await prisma.user.upsert({
        where: { email: 'admin@nova.com' },
        update: {},
        create: {
            email: 'admin@nova.com',
            name: 'Nova Merchant',
            password: 'password123', // In a real app, this should be hashed
            role: 'ADMIN'
        }
    })

    console.log('Seeding complete.')
}

main()
    .catch((e) => {
        console.error(e)
        process.exit(1)
    })
    .finally(async () => {
        await prisma.$disconnect()
    })
