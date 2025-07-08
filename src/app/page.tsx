'use client';

import Link from "next/link";
import CartSidebar from "../components/CartSidebar";
import { Header } from '@/components/Header'
import { productsByCategories } from "@/objects/Products";
import { ProductList } from "@/components/ProductsList";

function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <Header />

      {/* Hero Section */}
      {/* <div 
        className="relative text-white"
        style={{
          backgroundImage: "url('/rhum-playa.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat"
        }}
      >
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Discover Amazing Products
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Shop the latest trends with unbeatable prices and quality
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition duration-300">
                Shop Now
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div> */}

      <section
        className="mt-8 max-w-7xl mx-auto flex justify-center items-center rounded-lg py-8 sm:py-12"
        style={{
          backgroundImage: "url('/rhum-playa.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="mx-auto grid grid-cols-1 items-center justify-items-center gap-8 px-8 sm:px-16 py-16 md:grid-cols-2 rounded-lg relative">
          <div className="absolute inset-0 bg-gray-900/20 rounded-lg pointer-events-none" aria-hidden="true"></div>
          {/* Overlay for text visibility */}
          <div className="max-w-md space-y-4 relative z-10">
            <h2 className="text-white text-3xl font-bold tracking-tight md:text-4xl">{"Discover Out Latest Selection"}</h2>
            <p className="text-white">{"Explore our carefully selected products for your alcoholism."}</p>
          </div>
        </div>
      </section>

      {/* Product Categories Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Shop by Category
          </h2>
          <p className="text-lg text-gray-600">
            Explore our curated collection of premium products
          </p>
        </div>

        {/* Categories */}
        {productsByCategories.map((category) => (
          <div key={category.name} className="mb-16">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-2xl font-bold text-gray-900">{category.name}</h3>
              <Link href={`/category/${category.name}`} className="text-blue-600 hover:text-blue-800 font-medium">
                View All →
              </Link>
            </div>
            
            <ProductList products={category.products} />
            {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {category.products.map((product) => (
                <div key={product.id} className="bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300 overflow-hidden">
                  <Link href={`/product/${product.id}`} className="block">
                    <div className="aspect-square bg-gray-200 flex items-center justify-center cursor-pointer">
                      <div className="text-gray-500 text-center">
                        <svg className="w-16 h-16 mx-auto mb-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                        </svg>
                        <p className="text-sm">Image placeholder</p>
                      </div>
                    </div>
                  </Link>
                  <div className="p-4">
                    <Link href={`/product/${product.id}`}>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2 hover:text-blue-600 transition-colors cursor-pointer">{product.name}</h4>
                    </Link>
                    <p className="text-xl font-bold text-blue-600 mb-3">${product.price}</p>
                    <div className="flex gap-2">
                      <Link href={`/product/${product.id}`} className="flex-1">
                        <button className="w-full bg-gray-100 text-gray-800 py-2 px-4 rounded-lg hover:bg-gray-200 transition duration-300">
                          View Details
                        </button>
                      </Link>
                      <button 
                        onClick={() => handleAddToCart(product)}
                        className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300"
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div> */}
          </div>
        ))}
      </div>

      {/* Newsletter Section */}
      <div className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Stay Updated</h3>
          <p className="text-gray-600 mb-8">Subscribe to our newsletter for the latest products and exclusive offers</p>
          <div className="max-w-md mx-auto flex gap-2">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 text-slate-900"
            />
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-300">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h4 className="text-lg font-semibold mb-4">Mashija</h4>
              <p className="text-gray-400">Your one-stop shop for amazing products at unbeatable prices.</p>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Mashija. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Cart Sidebar */}
      <CartSidebar />
    </div>
  );
}

// Export as default to make it work as a client component
export default function Home() {
  return <HomePage />;
}
