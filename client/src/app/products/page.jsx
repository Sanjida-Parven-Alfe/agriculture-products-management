export const dynamic = "force-dynamic";

import Image from "next/image";
import Link from "next/link";

async function getProducts() {
  try {
    const res = await fetch('https://agriculture-products-management.vercel.app/products', { cache: 'no-store' });
    if (!res.ok) {
      return [];
    }
    return res.json();
  } catch (error) {
    console.log(error);
    return [];
  }
}

export default async function ProductsPage() {
  const products = await getProducts();

  return (
    <div className="min-h-screen py-16 px-4 bg-gray-50 dark:bg-dark-bg">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12 text-agri-olive dark:text-white">All Products</h1>
        
        {products.length === 0 ? (
            <div className="text-center text-gray-500 text-xl py-20">
                Loading products... (Wait a moment or refresh)
            </div>
        ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((prod) => (
                <div key={prod._id} className="bg-white dark:bg-dark-surface rounded-lg overflow-hidden shadow-sm hover:shadow-md transition duration-300 border border-gray-100 dark:border-gray-700 flex flex-col group">
                
                <div className="relative h-48 w-full overflow-hidden bg-gray-200">
                    <Image 
                        src={prod.image || "https://images.unsplash.com/photo-1592841200221-a6898f307baa"} 
                        alt={prod.title} 
                        fill 
                        className="object-cover group-hover:scale-110 transition duration-500" 
                    />
                </div>

                <div className="p-4 flex-grow flex flex-col justify-between">
                    <div>
                        <h3 className="font-bold text-lg mb-2 text-agri-olive dark:text-white line-clamp-1">
                            {prod.title}
                        </h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mb-2 line-clamp-2">
                            {prod.shortDescription}
                        </p>
                    </div>
                    
                    <div className="flex justify-between items-center mt-4 border-t pt-3 dark:border-gray-600">
                        <span className="text-agri-brown font-bold text-xl">৳{prod.price}</span>
                        
                        <Link 
                            href={`/products/${prod._id}`}
                            className="text-sm bg-agri-olive text-white px-4 py-2 rounded hover:bg-agri-brown transition"
                        >
                            View Details
                        </Link>
                    </div>
                </div>
                </div>
            ))}
            </div>
        )}
      </div>
    </div>
  );
}