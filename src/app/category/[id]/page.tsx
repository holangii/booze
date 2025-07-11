'use client';

import { use } from 'react';
import Link from 'next/link';
import { Header } from '@/components/Header';
import CartSidebar from "@/components/CartSidebar";
import { productsByCategories } from "@/objects/Products";
import { ProductList } from '@/components/ProductsList';

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
              className="bg-[#C97F17] text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300"
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
        className="my-4 sm:my-8 max-w-7xl mx-auto flex justify-center items-center rounded-lg py-6 sm:py-8 md:py-12"
        style={{
          backgroundImage: `url(${CATEGORY_BANNER_IMAGES[id as keyof typeof CATEGORY_BANNER_IMAGES]})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="mx-auto grid grid-cols-1 items-center justify-items-center gap-4 sm:gap-8 px-4 sm:px-8 md:px-16 py-8 sm:py-12 md:py-16 md:grid-cols-2 rounded-lg relative">
          <div className="absolute inset-0 bg-white/20 rounded-lg pointer-events-none" aria-hidden="true"></div>
          {/* Overlay for text visibility */}
          <div className="max-w-md space-y-2 sm:space-y-4 relative z-10">
            <h2 className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight">{"프리미엄 수제 럼의 특별한 셀렉션을 만나보세요"}</h2>
            <p className="text-white text-sm sm:text-base">{"프리미엄 수제 럼의 특별한 셀렉션을 만나보세요"}</p>
          </div>
        </div>
      </section>
      
      {/* Page Header */}
      {/* <div className="bg-gradient-to-r from-[#C97F17] to-purple-700 text-white">
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 sm:py-4">
        <nav className="flex text-xs sm:text-sm text-gray-500">
          <Link href="/" className="hover:text-[#C97F17] transition-colors">
            Home
          </Link>
          <span className="mx-1 sm:mx-2">›</span>
          <span className="text-gray-900 font-medium">{category.name}</span>
        </nav>
      </div>

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8 sm:pb-16">
        <ProductList products={category.products} />
       
        {/* Empty State */}
        {category.products.length === 0 && (
          <div className="text-center py-8 sm:py-16">
            <svg className="w-16 sm:w-24 h-16 sm:h-24 mx-auto text-gray-300 mb-4 sm:mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
            </svg>
            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-1 sm:mb-2">No products found</h3>
            <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base">This category doesn&apos;t have any products yet.</p>
            <Link 
              href="/" 
              className="bg-[#C97F17] text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg hover:bg-blue-700 transition duration-300 text-sm sm:text-base"
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
