export const dynamic = "force-dynamic";

import Image from "next/image";
import Link from "next/link";

async function getProduct(id) {
  try {
    const res = await fetch(`https://agriculture-products-management.vercel.app/products/${id}`, { cache: 'no-store' });
    if (!res.ok) return null;
    return res.json();
  } catch (error) {
    return null;
  }
}

export default async function ProductDetails({ params }) {
  const { id } = await params; 
  const product = await getProduct(id);

  if (!product) {
    return <div className="text-center py-20 text-xl text-red-500">Product not found!</div>;
  }

  return (
    <div className="min-h-screen py-16 px-4 bg-white dark:bg-dark-bg">
      <div className="max-w-6xl mx-auto bg-gray-50 dark:bg-dark-surface rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-gray-700">
        
        <Link href="/products" className="text-agri-olive hover:underline mb-6 inline-block font-bold">
           &larr; Back to List
        </Link>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="relative h-[400px] w-full rounded-xl overflow-hidden shadow-md border-4 border-white dark:border-gray-600">
                 <Image 
                    src={product.image || "https://images.unsplash.com/photo-1592841200221-a6898f307baa"} 
                    alt={product.title} 
                    fill 
                    className="object-cover"
                />
            </div>

            <div className="flex flex-col justify-center">
                {product.category && (
                    <span className="bg-green-100 text-green-800 text-xs font-semibold px-2.5 py-0.5 rounded w-fit mb-2">
                        {product.category}
                    </span>
                )}
                
                <h1 className="text-3xl md:text-4xl font-bold text-agri-olive dark:text-white mb-4">
                    {product.title}
                </h1>
                
                <p className="text-3xl font-bold text-agri-brown mb-6">Price: ৳{product.price}</p>
                
                <div className="prose dark:prose-invert mb-8">
                    <h3 className="text-xl font-semibold mb-2 dark:text-gray-200">Description:</h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
                        {product.fullDescription || product.shortDescription}
                    </p>
                </div>

                <button className="w-full md:w-auto bg-agri-olive text-white font-bold py-3 px-8 rounded-lg hover:bg-agri-brown transition duration-300 shadow-lg">
                    Buy Now
                </button>
            </div>
        </div>
      </div>
    </div>
  );
}