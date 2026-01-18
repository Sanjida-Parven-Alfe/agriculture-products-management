import React from 'react';
import AddProductForm from './AddProductForm';
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function AddProductsPage() {
  const session = await getServerSession();

  if (!session) {
    redirect("/login");
  }

  return (
    <div className="min-h-screen py-12 px-4 bg-gray-50 dark:bg-dark-bg transition-colors duration-300">
      <div className="max-w-4xl mx-auto bg-white dark:bg-dark-surface p-8 md:p-12 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700">
        
        <div className="text-center mb-10">
            <h1 className="text-3xl md:text-4xl font-bold text-agri-olive dark:text-white mb-2">Add New Product</h1>
            <p className="text-gray-500 dark:text-gray-400">Fill in the details to add a new item to the inventory.</p>
        </div>

        <AddProductForm />
        
      </div>
    </div>
  );
}