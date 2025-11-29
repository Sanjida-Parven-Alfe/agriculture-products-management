"use client";
import Link from 'next/link';
import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { useApp } from '../context/providers'; 

export default function Footer() {
  const { language } = useApp();

  const t = {
    about: language === 'en' ? "About Us" : "আমাদের সম্পর্কে",
    aboutDesc: language === 'en'
      ? "We love what we do and how we do! We put our care, quality and passion into creating our products. We use traditional methods to produce items so when you buy from us, you buy quality guarantee."
      : "আমরা আমাদের কাজে বিশ্বাসী! আমরা যত্ন, গুণমান এবং আবেগের সাথে আমাদের পণ্য তৈরি করি। আমরা ঐতিহ্যবাহী পদ্ধতি ব্যবহার করি, তাই আমাদের কাছ থেকে কেনা মানেই গুণমানের নিশ্চয়তা।",

    info: language === 'en' ? "Information" : "তথ্য",
    home: language === 'en' ? "Home" : "হোম",
    shop: language === 'en' ? "Shop" : "দোকান",
    products: language === 'en' ? "Products" : "পণ্যসমূহ",
    aboutLink: language === 'en' ? "About Us" : "আমাদের সম্পর্কে",
    contactLink: language === 'en' ? "Contacts" : "যোগাযোগ",

    newsletter: language === 'en' ? "Newsletter" : "নিউজলেটার",
    newsDesc: language === 'en'
      ? "Stay up to date with all our recent products and promotions."
      : "আমাদের সাম্প্রতিক পণ্য এবং অফার সম্পর্কে আপডেট পেতে সাথে থাকুন।",

    subscribe: language === 'en' ? "SUBSCRIBE" : "সাবস্ক্রাইব",
    emailPlace: language === 'en' ? "Your Email" : "আপনার ইমেইল",

    contact: language === 'en' ? "Contact us" : "যোগাযোগ করুন",

    address: language === 'en'
      ? "Bashundhara, Dhaka, Bangladesh"
      : "বসুন্ধরা, ঢাকা, বাংলাদেশ",

    phone: "123-456-7890",
    email: "info@agrimart.com",

    copyright:
      language === 'en'
        ? "AgriMart. All rights reserved. | Developed using Next.js"
        : "AgriMart. সর্বস্বত্ব সংরক্ষিত। | নেক্সট জেএস ব্যবহার করে তৈরি",

    terms: language === 'en'
      ? "I have read and agree to the terms & conditions"
      : "আমি শর্তাবলী পড়েছি এবং সম্মত হয়েছি",
  };

  return (
    <footer className="bg-[#333333] dark:bg-[#1a1c10] text-white pt-16 pb-8 mt-auto border-t dark:border-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
          {/* Column 1: About */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-[#FFD700] dark:text-yellow-400 font-serif relative inline-block">
              {t.about}
              <span className="absolute left-0 bottom-[-8px] w-10 h-[2px] bg-gray-500"></span>
            </h3>
            <p className="text-gray-400 dark:text-gray-300 text-sm leading-relaxed mb-6">
              {t.aboutDesc}
            </p>
          </div>

          {/* Column 2: Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-[#FFD700] dark:text-yellow-400 font-serif relative inline-block">
              {t.info}
              <span className="absolute left-0 bottom-[-8px] w-10 h-[2px] bg-gray-500"></span>
            </h3>
            <ul className="space-y-3 text-sm text-gray-400 dark:text-gray-300">
              <li><Link href="/" className="hover:text-[#FFD700]">{t.home}</Link></li>
              <li><Link href="/products" className="hover:text-[#FFD700]">{t.shop}</Link></li>
              <li><Link href="/products" className="hover:text-[#FFD700]">{t.products}</Link></li>
              <li><Link href="/about" className="hover:text-[#FFD700]">{t.aboutLink}</Link></li>
              <li><Link href="/login" className="hover:text-[#FFD700]">{t.contactLink}</Link></li>
            </ul>
          </div>

          {/* Column 3: Newsletter */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-[#FFD700] dark:text-yellow-400 font-serif relative inline-block">
              {t.newsletter}
              <span className="absolute left-0 bottom-[-8px] w-10 h-[2px] bg-gray-500"></span>
            </h3>
            <p className="text-gray-400 dark:text-gray-300 text-sm mb-4">
              {t.newsDesc}
            </p>
            <form className="flex flex-col gap-3">
              <input
                type="email"
                placeholder={t.emailPlace}
                className="bg-[#444444] dark:bg-white/10 border-none text-white px-4 py-3 focus:outline-none focus:ring-1 focus:ring-[#FFD700] text-sm placeholder-gray-500"
              />
              <button type="button" className="bg-[#FFD700] hover:bg-yellow-500 text-black font-bold py-3 px-4 text-sm transition duration-300 uppercase tracking-wider">
                {t.subscribe}
              </button>

              <div className="flex items-start gap-2 mt-2">
                <input type="checkbox" id="footer_terms" className="mt-1 accent-[#FFD700]" />
                <label htmlFor="footer_terms" className="text-xs text-gray-500 cursor-pointer hover:text-gray-300">
                  {t.terms}
                </label>
              </div>
            </form>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-[#FFD700] dark:text-yellow-400 font-serif relative inline-block">
              {t.contact}
              <span className="absolute left-0 bottom-[-8px] w-10 h-[2px] bg-gray-500"></span>
            </h3>

            <div className="space-y-4 text-gray-400 dark:text-gray-300 text-sm">
              <p>{t.address}</p>
              <p>Phone: {t.phone}</p>
              <p>Email: {t.email}</p>
            </div>

            <div className="flex space-x-3 mt-8">
              {[FaFacebook, FaTwitter, FaInstagram, FaLinkedin].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-[#FFD700] text-black flex items-center justify-center hover:bg-white hover:text-olive transition duration-300 text-lg">
                  <Icon />
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-gray-700 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} {t.copyright}
          </p>
        </div>

      </div>
    </footer>
  );
}