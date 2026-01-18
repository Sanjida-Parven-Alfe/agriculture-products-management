"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';

export default function AddProductForm() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    const form = e.target;
    
    const productData = {
        title: form.title.value,
        price: form.price.value,
        image: form.image.value,
        category: form.category.value,
        shortDescription: form.shortDescription.value,
        fullDescription: form.fullDescription.value,
        date: new Date().toISOString().split('T')[0],
        priority: "Medium"
    };

    try {
        // আপডেট: লাইভ সার্ভার লিংক
        const res = await fetch('https://agriculture-products-management.vercel.app/products', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(productData)
        });

        if (res.ok) {
            toast.success("Product added successfully! 🎉");
            form.reset();
            router.refresh();
            router.push('/products');
        } else {
            toast.error("Failed to add product.");
        }
    } catch (error) {
        console.error(error);
        toast.error("Something went wrong!");
    } finally {
        setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
                <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">Product Title</label>
                <input name="title" required type="text" className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-agri-olive outline-none dark:bg-gray-800 dark:text-white" />
            </div>
            <div>
                <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">Price (৳)</label>
                <input name="price" required type="number" className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-agri-olive outline-none dark:bg-gray-800 dark:text-white" />
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
                <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">Image URL</label>
                <input name="image" required type="url" className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-agri-olive outline-none dark:bg-gray-800 dark:text-white" />
            </div>
            <div>
                <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">Category</label>
                <select name="category" className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-agri-olive outline-none dark:bg-gray-800 dark:text-white">
                    <option value="Seeds">Seeds</option>
                    <option value="Fertilizer">Fertilizer</option>
                    <option value="Tools">Tools</option>
                    <option value="Pesticides">Pesticides</option>
                </select>
            </div>
        </div>

        <div>
            <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">Short Description</label>
            <input name="shortDescription" required type="text" className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-agri-olive outline-none dark:bg-gray-800 dark:text-white" />
        </div>

        <div>
            <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">Full Description</label>
            <textarea name="fullDescription" rows="5" className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-agri-olive outline-none dark:bg-gray-800 dark:text-white"></textarea>
        </div>
        
        <button type="submit" disabled={loading} className="w-full bg-agri-olive hover:bg-agri-brown text-white font-bold py-4 rounded-lg transition duration-300 shadow-lg text-lg disabled:opacity-50">
            {loading ? 'Adding Product...' : 'Add New Product'}
        </button>
    </form>
  );
}