'use client';

import { useState, use } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useCart } from '../../../contexts/CartContext';
import { useRouter } from 'next/navigation';
import { Header } from '@/components/Header';
import CartSidebar from "@/components/CartSidebar";
import { productsByCategories } from "@/objects/Products";

const allProducts = productsByCategories.flatMap(category => category.products);


// Extended product data with multiple images and descriptions
const allProducts2 = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 99.99,
    category: "Electronics",
    description: "Premium wireless headphones with noise-canceling technology and 30-hour battery life. Perfect for music lovers and professionals who demand crystal-clear audio quality.",
    features: [
      "Active Noise Cancellation",
      "30-hour battery life",
      "Bluetooth 5.0 connectivity",
      "Touch controls",
      "Foldable design"
    ],
    images: [
      "/api/placeholder/600/600",
      "/api/placeholder/600/600",
      "/api/placeholder/600/600",
      "/api/placeholder/600/600"
    ]
  },
  {
    id: 2,
    name: "Smart Watch",
    price: 199.99,
    category: "Electronics",
    description: "Advanced smartwatch with health monitoring, GPS tracking, and seamless smartphone integration. Track your fitness goals and stay connected on the go.",
    features: [
      "Heart rate monitoring",
      "GPS tracking",
      "Water resistant",
      "7-day battery life",
      "Sleep tracking"
    ],
    images: [
      "/api/placeholder/600/600",
      "/api/placeholder/600/600",
      "/api/placeholder/600/600"
    ]
  },
  {
    id: 3,
    name: "Bluetooth Speaker",
    price: 79.99,
    category: "Electronics",
    description: "Portable Bluetooth speaker with 360-degree sound and waterproof design. Perfect for outdoor adventures and home entertainment.",
    features: [
      "360-degree sound",
      "Waterproof IPX7",
      "12-hour battery",
      "Hands-free calling",
      "Compact design"
    ],
    images: [
      "/api/placeholder/600/600",
      "/api/placeholder/600/600",
      "/api/placeholder/600/600"
    ]
  },
  {
    id: 4,
    name: "Phone Case",
    price: 24.99,
    category: "Electronics",
    description: "Durable phone case with military-grade protection and wireless charging compatibility. Keep your phone safe without compromising style.",
    features: [
      "Military-grade protection",
      "Wireless charging compatible",
      "Scratch resistant",
      "Easy grip design",
      "Precise cutouts"
    ],
    images: [
      "/api/placeholder/600/600",
      "/api/placeholder/600/600"
    ]
  },
  {
    id: 5,
    name: "Cotton T-Shirt",
    price: 29.99,
    category: "Fashion",
    description: "Premium 100% organic cotton t-shirt with comfortable fit and sustainable materials. Perfect for everyday wear with timeless style.",
    features: [
      "100% organic cotton",
      "Comfortable fit",
      "Sustainable materials",
      "Machine washable",
      "Multiple colors available"
    ],
    images: [
      "/api/placeholder/600/600",
      "/api/placeholder/600/600",
      "/api/placeholder/600/600"
    ]
  },
  {
    id: 6,
    name: "Denim Jeans",
    price: 79.99,
    category: "Fashion",
    description: "Classic denim jeans with modern fit and premium denim fabric. Versatile and durable for any occasion.",
    features: [
      "Premium denim fabric",
      "Modern fit",
      "Reinforced stitching",
      "Fade resistant",
      "Multiple sizes"
    ],
    images: [
      "/api/placeholder/600/600",
      "/api/placeholder/600/600",
      "/api/placeholder/600/600"
    ]
  },
  {
    id: 7,
    name: "Sneakers",
    price: 129.99,
    category: "Fashion",
    description: "Comfortable athletic sneakers with breathable mesh upper and responsive cushioning. Perfect for running, training, or casual wear.",
    features: [
      "Breathable mesh upper",
      "Responsive cushioning",
      "Durable outsole",
      "Lightweight design",
      "Multiple colors"
    ],
    images: [
      "/api/placeholder/600/600",
      "/api/placeholder/600/600",
      "/api/placeholder/600/600",
      "/api/placeholder/600/600"
    ]
  },
  {
    id: 8,
    name: "Baseball Cap",
    price: 19.99,
    category: "Fashion",
    description: "Classic baseball cap with adjustable strap and premium materials. Perfect for outdoor activities and casual wear.",
    features: [
      "Adjustable strap",
      "Premium materials",
      "UV protection",
      "Breathable fabric",
      "One size fits all"
    ],
    images: [
      "/api/placeholder/600/600",
      "/api/placeholder/600/600"
    ]
  },
  {
    id: 9,
    name: "Throw Pillow",
    price: 34.99,
    category: "Home & Living",
    description: "Decorative throw pillow with premium fabric and comfortable filling. Add style and comfort to your living space.",
    features: [
      "Premium fabric",
      "Comfortable filling",
      "Machine washable",
      "Multiple designs",
      "Durable construction"
    ],
    images: [
      "/api/placeholder/600/600",
      "/api/placeholder/600/600",
      "/api/placeholder/600/600"
    ]
  },
  {
    id: 10,
    name: "Table Lamp",
    price: 89.99,
    category: "Home & Living",
    description: "Modern table lamp with adjustable brightness and elegant design. Perfect for reading, working, or ambient lighting.",
    features: [
      "Adjustable brightness",
      "Elegant design",
      "Energy efficient LED",
      "Touch controls",
      "Stable base"
    ],
    images: [
      "/api/placeholder/600/600",
      "/api/placeholder/600/600",
      "/api/placeholder/600/600"
    ]
  },
  {
    id: 11,
    name: "Wall Art",
    price: 49.99,
    category: "Home & Living",
    description: "Beautiful wall art piece with high-quality printing and durable frame. Transform your space with modern artwork.",
    features: [
      "High-quality printing",
      "Durable frame",
      "Ready to hang",
      "Fade resistant",
      "Multiple sizes"
    ],
    images: [
      "/api/placeholder/600/600",
      "/api/placeholder/600/600"
    ]
  },
  {
    id: 12,
    name: "Ceramic Mug",
    price: 14.99,
    category: "Home & Living",
    description: "Handcrafted ceramic mug with unique design and comfortable handle. Perfect for your morning coffee or tea.",
    features: [
      "Handcrafted ceramic",
      "Unique design",
      "Comfortable handle",
      "Dishwasher safe",
      "Heat resistant"
    ],
    images: [
      "/api/placeholder/600/600",
      "/api/placeholder/600/600"
    ]
  }
];

export default function ProductDetail({ params }: { params: Promise<{ id: string }> }) {
  const { addToCart } = useCart();
  const router = useRouter();
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  // Unwrap the params Promise
  const { id } = use(params);
  const product = allProducts.find(p => p.id === parseInt(id));

  if (!product) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Product Not Found</h2>
          <Link href="/" className="text-blue-600 hover:text-blue-800">
            ← Back to Home
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        category: product.category
      });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Product Detail */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Side - Product Images */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="aspect-square bg-gray-200 rounded-lg overflow-hidden">
              <div className="w-full h-full flex items-center justify-center">
                <div className="text-gray-500 text-center">
                  <svg className="w-24 h-24 mx-auto mb-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                  </svg>
                  <p className="text-lg">Main Product Image</p>
                </div>
              </div>
            </div>

            {/* Image Gallery */}
            <div className="grid grid-cols-4 gap-2">
              {product.allImages.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`aspect-square bg-gray-200 rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                    selectedImage === index ? 'border-blue-500' : 'border-transparent hover:border-gray-300'
                  }`}
                >
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="text-gray-500 text-center">
                      <svg className="w-8 h-8 mx-auto mb-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                      </svg>
                      <p className="text-xs">{index + 1}</p>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Right Side - Product Information */}
          <div className="space-y-6">
            {/* Product Name and Price */}
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.name}</h1>
              <p className="text-2xl font-bold text-blue-600">${product.price}</p>
            </div>

            {/* Product Description */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Description</h3>
              <p className="text-gray-600 leading-relaxed">{product.description}</p>
            </div>

            {/* Features */}
            {/* <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Features</h3>
              <ul className="space-y-1">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-gray-600">
                    <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div> */}

            {/* Quantity Selector */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Quantity</h3>
              <div className="flex items-center space-x-3">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors text-slate-600"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                  </svg>
                </button>
                <span className="text-xl font-medium w-12 text-center text-slate-600">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors text-slate-600"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Add to Cart Button */}
            <div className="pt-4">
              <button
                onClick={handleAddToCart}
                className="w-full bg-blue-600 text-white py-4 px-6 rounded-lg font-semibold hover:bg-blue-700 transition duration-300 flex items-center justify-center space-x-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v6a2 2 0 11-4 0v-6m4 0V9a2 2 0 10-4 0v4.01" />
                </svg>
                <span>Add {quantity} to Cart</span>
              </button>
            </div>

          </div>
        </div>
      </div>
      <CartSidebar />
    </div>
  );
} 