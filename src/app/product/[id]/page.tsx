'use client';

import { useState, use } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useCart } from '../../../contexts/CartContext';
import { Header } from '@/components/Header';
import CartSidebar from "@/components/CartSidebar";
import { productsByCategories } from "@/objects/Products";
import RumInfoComponent from "@/components/RumInfoComponent";
import { ShoppingCart } from 'lucide-react';

const allProducts = productsByCategories.flatMap(category => category.products);

export default function ProductDetail({ params }: { params: Promise<{ id: string }> }) {
  const { addToCart } = useCart();
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  // Unwrap the params Promise
  const { id } = use(params);
  const product = allProducts.find(p => p.id === parseInt(id));

  if (!product) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">상품을 찾을 수 없습니다</h2>
          <Link href="/" className="text-[#C97F17] hover:text-blue-800">
            ← 홈으로 돌아가기
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
            <div className="aspect-square bg-gray-200 rounded-lg overflow-hidden relative">
              <Image
                src={product.allImages[selectedImage]}
                alt={product.name}
                width={768}
                height={768}
                sizes="(max-width: 1024px) 100vw, (max-width: 1280px) 50vw, 700px"
                className="w-full h-full object-contain"
              />
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
                  <Image
                    src={image}
                    alt={`${product.name} - Image ${index + 1}`}
                    width={150}
                    height={150}
                    priority={true}
                    className="w-full h-full object-contain"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Right Side - Product Information */}
          <div className="space-y-6">
            {/* Product Name and Price */}
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.name}</h1>
              <p className="text-2xl text-[#C97F17]">₩{product.price.toLocaleString()}</p>
            </div>

            {/* Rum Info Component */}
            <RumInfoComponent
              bottleSize={product.contenance}
              degree={product.alcool}
              color={product.alcohol_type}
              origin={product.origin}
            />

            {/* Product Description */}
            <div className="mt-10">
              <div className="border-t border-gray-200 pt-10">
                {/* Product Description */}
                <div className="prose prose-sm text-gray-500">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">상품 설명</h3>
                  <p className="text-gray-600 leading-relaxed">{product.description}</p>
                </div>
              </div>
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
                className="w-full bg-[#C97F17] text-white py-4 px-6 rounded-lg font-semibold hover:bg-blue-700 transition duration-300 flex items-center justify-center space-x-2"
              >
                <ShoppingCart className="w-5 h-5" />
                <span>장바구니에 {quantity}개 담기</span>
              </button>
            </div>

          </div>
        </div>
      </div>
      <CartSidebar />
    </div>
  );
} 