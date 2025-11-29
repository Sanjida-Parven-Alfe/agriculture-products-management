"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { FaLeaf, FaGlobe, FaMoon, FaSun, FaBars, FaTimes } from 'react-icons/fa';
import { useApp } from '@/context/providers';

export default function NavBar() {
  const { darkMode, toggleTheme, language, toggleLanguage } = useApp();
  const [isOpen, setIsOpen] = useState(false);

  const content = {
    en: { home: 'Home', products: 'Products', about: 'About', login: 'Login', register: 'Register' },
    bn: { home: 'হোম', products: 'পণ্য', about: 'সম্পর্কে', login: 'লগিন', register: 'রেজিস্টার' }
  };
  const t = content[language];

  return (
    <nav className="sticky top-0 z-50 w-full bg-white dark:bg-dark-surface border-b border-gray-100 dark:border-gray-800 shadow-sm transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          <Link href="/" className="flex items-center gap-2 group">
            <div className="bg-agri-olive w-10 h-10 rounded-full flex items-center justify-center text-white">
              <FaLeaf className="text-xl -rotate-12" />
            </div>
            <span className="text-2xl font-bold text-agri-olive dark:text-white tracking-tight">
              AgriMart
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-10">
            {['home', 'products', 'about'].map((item) => (
              <Link 
                key={item} 
                href={item === 'home' ? '/' : `/${item}`} 
                className="text-agri-olive dark:text-gray-300 font-semibold hover:text-agri-brown dark:hover:text-white transition text-[17px]"
              >
                {t[item]}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-4">
            
            <button 
              onClick={toggleLanguage} 
              className="flex items-center gap-2 px-3 py-1.5 border border-agri-olive/30 rounded-md text-agri-olive dark:text-gray-200 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 font-bold text-sm transition"
            >
              <FaGlobe /> {language === 'en' ? 'BN' : 'EN'}
            </button>

   
            <button 
              onClick={toggleTheme} 
              className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-700 text-agri-olive dark:text-yellow-400 hover:bg-gray-200 transition"
            >
              {darkMode ? <FaSun className="text-sm" /> : <FaMoon className="text-sm" />}
            </button>

       
            <Link 
              href="/login" 
              className="text-agri-olive dark:text-white font-bold text-lg px-2 hover:opacity-80 transition"
            >
              {t.login}
            </Link>

            <Link 
              href="/register" 
              className="bg-agri-brown text-white px-6 py-2 rounded-md font-bold text-lg hover:bg-[#6b2f1c] transition shadow-sm"
            >
              {t.register}
            </Link>
          </div>

 
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-2xl text-agri-olive dark:text-white">
              {isOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </div>

      {/* মোবাইল ড্রপডাউন মেনু */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-dark-surface border-t dark:border-gray-700 px-4 pb-6 shadow-lg absolute w-full left-0">
          <div className="flex flex-col space-y-3 mt-4">
            <Link href="/" className="text-agri-olive dark:text-gray-200 font-medium py-2">{t.home}</Link>
            <Link href="/products" className="text-agri-olive dark:text-gray-200 font-medium py-2">{t.products}</Link>
            <Link href="/about" className="text-agri-olive dark:text-gray-200 font-medium py-2">{t.about}</Link>
            <div className="h-[1px] bg-gray-200 w-full my-2"></div>
            <div className="flex items-center justify-between">
              <button onClick={toggleLanguage} className="flex items-center gap-2 font-bold text-agri-olive dark:text-white"><FaGlobe /> {language.toUpperCase()}</button>
              <button onClick={toggleTheme} className="p-2 bg-gray-100 rounded-full dark:bg-gray-700 dark:text-yellow-400">{darkMode ? <FaSun/> : <FaMoon/>}</button>
            </div>
            <Link href="/login" className="text-center w-full border border-agri-olive py-2 rounded text-agri-olive font-bold dark:border-gray-500 dark:text-white">{t.login}</Link>
            <Link href="/register" className="text-center w-full bg-agri-brown text-white py-2 rounded font-bold">{t.register}</Link>
          </div>
        </div>
      )}
    </nav>
  );
}