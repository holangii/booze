'use client';

import { use } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Header } from '@/components/Header';
import CartSidebar from "@/components/CartSidebar";
import { productsByCategories } from "@/objects/Products";

const CATEGORY_BANNER_IMAGES = {
  "Isautier": "/isautier_fresque.jpg",
  "Trois%20Rivieres": "/trois_rivieres_banner.jpeg",
  "Clement": "/clement.webp",
}

export default function CategoryPage({ params }: { params: Promise<{ id: string }> }) {
  // Unwrap the params Promise
  const { id } = use(params);

  // Find the category by matching the ID (case-insensitive)
  const category = productsByCategories.find(
    cat => cat.name.toLowerCase() === decodeURIComponent(id).toLowerCase()
  );

  if (!category) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Category Not Found</h2>
            <p className="text-gray-600 mb-8">The category you&apos;re looking for doesn&apos;t exist.</p>
            <Link 
              href="/" 
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300"
            >
              ← Back to Home
            </Link>
          </div>
        </div>
        <CartSidebar />
      </div>
    );
  }

  // const handleAddToCart = (product: any) => {
  //   addToCart({
  //     id: product.id,
  //     name: product.name,
  //     price: product.price,
  //     image: product.image,
  //     category: product.category
  //   });
  // };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <section
        className="my-8 max-w-7xl mx-auto flex justify-center items-center rounded-lg py-8 sm:py-12"
        style={{
          backgroundImage: `url(${CATEGORY_BANNER_IMAGES[id as keyof typeof CATEGORY_BANNER_IMAGES]})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="mx-auto grid grid-cols-1 items-center justify-items-center gap-8 px-8 sm:px-16 py-16 md:grid-cols-2 rounded-lg relative">
          <div className="absolute inset-0 bg-white/20 rounded-lg pointer-events-none" aria-hidden="true"></div>
          {/* Overlay for text visibility */}
          <div className="max-w-md space-y-4 relative z-10">
            <h2 className="text-white text-3xl font-bold tracking-tight md:text-4xl">{"Discover Out Latest Selection"}</h2>
            <p className="text-white">{"Explore our carefully selected products for your alcoholism."}</p>
          </div>
        </div>
      </section>
      
      {/* Page Header */}
      {/* <div className="bg-gradient-to-r from-blue-600 to-purple-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {category.name}
            </h1>
            <p className="text-xl opacity-90">
              Explore our {category.name} collection
            </p>
            <div className="mt-6">
              <span className="bg-white/20 px-4 py-2 rounded-full text-sm font-medium">
                {category.products.length} products available
              </span>
            </div>
          </div>
        </div>
      </div> */}

      {/* Breadcrumb Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <nav className="flex text-sm text-gray-500">
          <Link href="/" className="hover:text-blue-600 transition-colors">
            Home
          </Link>
          <span className="mx-2">›</span>
          <span className="text-gray-900 font-medium">{category.name}</span>
        </nav>
      </div>

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {category.products.map((product) => (
            <div 
              key={product.id} 
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100 group"
            >
              <Link href={`/product/${product.id}`} className="block">
                <Image
                  className="w-full h-full bg-neutral-100 object-contain object-center transition-transform duration-300 group-hover:scale-105"
                  src={product.image}
                  width={768}
                  height={768}
                  sizes="(max-width: 1024px) 100vw, (max-width: 1280px) 50vw, 700px"
                  alt={product.name}
                />
              </Link>
              
              <div className="p-4">
                <Link href={`/product/${product.id}`}>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 hover:text-blue-600 transition-colors cursor-pointer line-clamp-2">
                    {product.name}
                  </h3>
                </Link>
                
                <div className="flex items-center justify-between mb-3">
                  <span className="text-2xl font-bold text-blue-600">
                    ${product.price}
                  </span>
                </div>
                
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {product.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {category.products.length === 0 && (
          <div className="text-center py-16">
            <svg className="w-24 h-24 mx-auto text-gray-300 mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
            </svg>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No products found</h3>
            <p className="text-gray-600 mb-6">This category doesn&apos;t have any products yet.</p>
            <Link 
              href="/" 
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300"
            >
              Browse All Categories
            </Link>
          </div>
        )}
      </div>

      <CartSidebar />
    </div>
  );
}
