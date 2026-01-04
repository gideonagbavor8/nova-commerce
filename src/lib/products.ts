export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
}

export const products: Product[] = [
  {
    id: '1',
    name: 'Aether Quartz Watch',
    description: 'A minimalist masterpiece blending timeless design with precision quartz movement.',
    price: 249,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80',
    category: 'Accessories'
  },
  {
    id: '2',
    name: 'Nebula Pro Headphones',
    description: 'Immersive soundscapes with advanced noise cancellation technology.',
    price: 399,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80',
    category: 'Electronics'
  },
  {
    id: '3',
    name: 'Onyx Leather Backpack',
    description: 'Premium handcrafted leather meet modern functional design.',
    price: 189,
    image: 'https://images.unsplash.com/photo-1547949003-9792a18a2601?w=800&q=80',
    category: 'Travel'
  },
  {
    id: '4',
    name: 'Zenith Mechanical Keyboard',
    description: 'Tactile perfection for the modern professional.',
    price: 159,
    image: 'https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?w=800&q=80',
    category: 'Computing'
  },
  {
    id: '5',
    name: 'Phantom Midnight Sneakers',
    description: 'Ultra-lightweight performance meets high-fashion aesthetics.',
    price: 299,
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80',
    category: 'Footwear'
  },
  {
    id: '6',
    name: 'Velvet Oud Essence',
    description: 'A rich, mysterious fragrance with notes of saffron and dark wood.',
    price: 185,
    image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?w=800&q=80',
    category: 'Fragrance'
  }
];
