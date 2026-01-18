"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { FaLeaf, FaGlobe, FaMoon, FaSun, FaBars, FaTimes, FaUserCircle } from 'react-icons/fa';
import { useApp } from '@/context/providers';
import { useSession, signOut } from "next-auth/react"; // 1. useSession এবং signOut ইমপোর্ট করা হলো

export default function NavBar() {
  const { darkMode, toggleTheme, language, toggleLanguage } = useApp();
  const [isOpen, setIsOpen] = useState(false);
  
  // 2. সেশন চেক করা হচ্ছে
  const { data: session } = useSession();

  const content = {
    en: { home: 'Home', products: 'Items List', about: 'About', login: 'Login', logout: 'Logout', dashboard: 'Dashboard' },
    bn: { home: 'হোম', products: 'পণ্য তালিকা', about: 'সম্পর্কে', login: 'লগিন', logout: 'লগআউট', dashboard: 'ড্যাশবোর্ড' }
  };
  const t = content[language];

  return (
    <nav className="sticky top-0 z-50 w-full bg-white dark:bg-dark-surface border-b border-gray-100 dark:border-gray-800 shadow-sm transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="bg-agri-olive w-10 h-10 rounded-full flex items-center justify-center text-white">
              <FaLeaf className="text-xl -rotate-12" />
            </div>
            <span className="text-2xl font-bold text-agri-olive dark:text-white tracking-tight">
              AgriMart
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="nav-link">{t.home}</Link>
            <Link href="/products" className="nav-link">{t.products}</Link>
            <Link href="/about" className="nav-link">{t.about}</Link>
            
            {/* লগইন করা থাকলে ড্যাশবোর্ড লিংক দেখাবে */}
            {session && (
               <Link href="/dashboard/addproducts" className="nav-link text-agri-brown">
                 Add Item
               </Link>
            )}
          </div>

          {/* Right Side Icons & Auth */}
          <div className="hidden md:flex items-center gap-4">
            <button onClick={toggleLanguage} className="flex items-center gap-2 px-3 py-1.5 border rounded-md text-sm font-bold hover:bg-gray-50 dark:border-gray-600 dark:text-white dark:hover:bg-gray-800">
              <FaGlobe /> {language === 'en' ? 'BN' : 'EN'}
            </button>

            <button onClick={toggleTheme} className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-700 text-agri-olive dark:text-yellow-400">
              {darkMode ? <FaSun /> : <FaMoon />}
            </button>

            {/* 3. কন্ডিশনাল রেন্ডারিং: সেশন থাকলে Logout, না থাকলে Login */}
            {session ? (
              <div className="flex items-center gap-3">
                <div className="hidden lg:flex items-center gap-2 text-sm font-bold text-agri-olive dark:text-white">
                    <FaUserCircle className="text-xl"/>
                    <span>{session.user?.name || "Admin"}</span>
                </div>
                <button 
                  onClick={() => signOut()} 
                  className="bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-full font-bold transition shadow-md text-sm"
                >
                  {t.logout}
                </button>
              </div>
            ) : (
              <Link href="/login">
                <button className="bg-agri-olive text-white px-6 py-2 rounded-full font-bold hover:bg-agri-brown transition shadow-md">
                  {t.login}
                </button>
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-2xl text-agri-olive dark:text-white">
              {isOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-dark-surface border-t dark:border-gray-700 px-4 pb-6 shadow-lg absolute w-full left-0">
          <div className="flex flex-col space-y-4 mt-4 text-center">
            <Link href="/" onClick={() => setIsOpen(false)} className="mobile-link">{t.home}</Link>
            <Link href="/products" onClick={() => setIsOpen(false)} className="mobile-link">{t.products}</Link>
            
            {session && (
               <Link href="/dashboard/addproducts" onClick={() => setIsOpen(false)} className="mobile-link text-agri-brown">
                 Add Item
               </Link>
            )}

            <Link href="/about" onClick={() => setIsOpen(false)} className="mobile-link">{t.about}</Link>
            
            {session ? (
                <button onClick={() => signOut()} className="bg-red-500 text-white py-2 rounded-md font-bold w-full">
                  {t.logout}
                </button>
            ) : (
                <Link href="/login" onClick={() => setIsOpen(false)} className="bg-agri-olive text-white py-2 rounded-md font-bold w-full block">
                  {t.login}
                </Link>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}