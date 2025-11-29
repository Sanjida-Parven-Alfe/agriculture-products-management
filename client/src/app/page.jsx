"use client";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useApp } from '@/context/providers';
// Icons
import { FaShippingFast, FaLeaf, FaUserTie, FaStar, FaQuoteLeft } from 'react-icons/fa';
// Swiper components and modules
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectFade } from 'swiper/modules';
// Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

export default function Home() {
  const { language } = useApp();

  // --- Data for Sections (Language based) ---
  const t = {
    // Hero
    heroBtn: language === 'en' ? 'Shop Now' : 'এখনই কিনুন',
    heroSlides: [
      {
        id: 1,
        image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=1920&auto=format&fit=crop",
        title: language === 'en' ? "Empowering Farmers, Feeding the Future" : "কৃষকের শক্তি, ভবিষ্যতের খাদ্য",
        subtitle: language === 'en' ? "Get the best quality seeds, fertilizers, and tools delivered to your doorstep." : "সেরা মানের বীজ, সার এবং কৃষি সরঞ্জাম আপনার দোরগোড়ায় পৌঁছে নিন।"
      },
      {
        id: 2,
        image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1920&auto=format&fit=crop",
        title: language === 'en' ? "Organic Solutions for Healthy Harvest" : "সুস্থ ফলনের জন্য জৈব সমাধান",
        subtitle: language === 'en' ? "Explore our range of eco-friendly pesticides and organic farming essentials." : "আমাদের পরিবেশ-বান্ধব কীটনাশক এবং জৈব চাষের প্রয়োজনীয় পণ্যগুলি দেখুন।"
      },
      {
        id: 3,
        image: "https://images.unsplash.com/photo-1530507629858-e4977d30e9e0?q=80&w=1920&auto=format&fit=crop",
        title: language === 'en' ? "Modern Tools for Smart Farming" : "স্মার্ট চাষের জন্য আধুনিক যন্ত্রপাতি",
        subtitle: language === 'en' ? "Upgrade your farming techniques with our latest machinery and tools." : "আমাদের আধুনিক যন্ত্রপাতি দিয়ে আপনার চাষাবাদ পদ্ধতি উন্নত করুন।"
      },
       {
        id: 4,
        image: "https://plus.unsplash.com/premium_photo-1661962692059-55d5a4319814?q=80&w=1920&auto=format&fit=crop",
        title: language === 'en' ? "Quality Yields Start Here" : "গুণগত ফলন এখান থেকেই শুরু",
        subtitle: language === 'en' ? "Trusted by thousands of farmers across the country." : "সারা দেশের হাজার হাজার কৃষকের বিশ্বাসী প্রতিষ্ঠান।"
      },
    ],
    // Features
    featTitle: language === 'en' ? "Why Choose AgriMart?" : "কেন এগ্রিমার্ট বেছে নেবেন?",
    features: [
      { icon: FaLeaf, title: language === 'en' ? "100% Organic" : "১০০% অর্গানিক", desc: language === 'en' ? "Certified organic products for sustainable farming." : "টেকসই চাষের জন্য সার্টিফাইড অর্গানিক পণ্য।" },
      { icon: FaShippingFast, title: language === 'en' ? "Fast Delivery" : "দ্রুত ডেলিভারি", desc: language === 'en' ? "We ensure your products reach you on time." : "আমরা নিশ্চিত করি আপনার পণ্য যেন সময়মতো পৌঁছায়।" },
      { icon: FaUserTie, title: language === 'en' ? "Expert Advice" : "বিশেষজ্ঞ পরামর্শ", desc: language === 'en' ? "Get farming tips from agricultural experts." : "কৃষি বিশেষজ্ঞদের কাছ থেকে চাষাবাদের টিপস নিন।" },
    ],
    // Products
    prodTitle: language === 'en' ? "Trending Products" : "জনপ্রিয় পণ্যসমূহ",
    dummyProducts: [
      { id: 1, name: "Hybrid Tomato Seeds", price: "৳450", img: "https://images.unsplash.com/photo-1592841200221-a6898f307baa?w=500&q=60" },
      { id: 2, name: "Organic Fertilizer", price: "৳1200", img: "https://plus.unsplash.com/premium_photo-1664298197723-533cc885104d?w=500&q=60" },
      { id: 3, name: "Garden Spade", price: "৳850", img: "https://images.unsplash.com/photo-1617576683096-00fc8eecb3af?w=500&q=60" },
      { id: 4, name: "Watering Can", price: "৳550", img: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=500&q=60" },
    ],
    addToCart: language === 'en' ? "Add to Cart" : "কার্টে যোগ করুন",
    // Banner
    bannerTitle: language === 'en' ? "Monsoon Sale! Up to 30% Off" : "বর্ষা অফার! ৩০% পর্যন্ত ছাড়",
    bannerDesc: language === 'en' ? "Get discounts on all essential farming tools and seeds." : "সকল প্রয়োজনীয় কৃষি যন্ত্রপাতি এবং বীজের উপর ছাড় পান।",
    // Testimonials
    testTitle: language === 'en' ? "What Our Farmers Say" : "আমাদের কৃষকদের মতামত",
    testimonials: [
      { name: "Rahim Uddin", location: "Cumilla", comment: language === 'en' ? "Excellent quality seeds. My harvest doubled this year thanks to AgriMart!" : "বীজের গুণমান খুবই ভালো। এগ্রিমার্টের কারণে এবার আমার ফলন দ্বিগুণ হয়েছে!" },
      { name: "Selina Begum", location: "Jessore", comment: language === 'en' ? "Very fast delivery and helpful customer service. Highly recommended." : "খুব দ্রুত ডেলিভারি এবং কাস্টমার সার্ভিস খুব সহায়ক। আমি সবাইকে সাজেস্ট করব।" },
      { name: "Abdul Karim", location: "Bogura", comment: language === 'en' ? "The organic fertilizer works like magic on my vegetable farm." : "আমার সবজি খামারে জৈব সারটি জাদুর মতো কাজ করেছে।" },
    ]
  };

  return (
    <div className="flex flex-col min-h-screen">

      {/* ================= 1. HERO SECTION (SWIPER) ================= */}
      <section className="relative h-[600px] md:h-[700px] bg-gray-900">
        <Swiper
          modules={[Autoplay, Pagination, EffectFade]}
          effect={'fade'}
          spaceBetween={0}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          className="h-full w-full hero-swiper"
        >
          {t.heroSlides.map((slide) => (
            <SwiperSlide key={slide.id} className="relative">
              {/* Background Image */}
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                className="object-cover w-full h-full"
                priority={slide.id === 1} // Load first image faster
              />
              {/* Dark Overlay for readability */}
              <div className="absolute inset-0 bg-black/60 dark:bg-black/70"></div>

              {/* Text Content */}
              <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4 z-10">
                <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 drop-shadow-lg max-w-4xl leading-tight">
                  {slide.title}
                </h1>
                <p className="text-lg md:text-2xl mb-8 drop-shadow-md max-w-2xl text-gray-200">
                  {slide.subtitle}
                </p>
                <Link href="/products">
                  <button className="bg-agri-brown hover:bg-agri-olive text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300 transform hover:scale-105 shadow-lg">
                    {t.heroBtn}
                  </button>
                </Link>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* ================= 2. FEATURES SECTION ================= */}
      <section className="py-16 px-4 bg-agri-beige dark:bg-dark-surface transition-colors duration-300">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-agri-olive dark:text-white">
            {t.featTitle}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {t.features.map((feat, index) => (
              <div key={index} className="bg-white dark:bg-dark-bg p-8 rounded-xl shadow-md hover:shadow-xl transition duration-300 flex flex-col items-center text-center group border border-gray-100 dark:border-gray-700">
                <div className="bg-agri-olive/10 dark:bg-agri-olive/20 p-4 rounded-full mb-6 group-hover:bg-agri-olive transition duration-300">
                  <feat.icon className="text-4xl text-agri-olive group-hover:text-white transition duration-300" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-agri-olive dark:text-white">{feat.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= 3. TRENDING PRODUCTS SECTION ================= */}
      <section className="py-16 px-4 bg-white dark:bg-dark-bg transition-colors duration-300">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-agri-olive dark:text-white">
            {t.prodTitle}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.dummyProducts.map((prod) => (
              <div key={prod.id} className="bg-agri-beige dark:bg-dark-surface rounded-lg overflow-hidden shadow-sm hover:shadow-md transition duration-300 group border border-gray-100 dark:border-gray-700">
                <div className="relative h-48 overflow-hidden">
                  <Image src={prod.img} alt={prod.name} fill className="object-cover group-hover:scale-110 transition duration-500" />
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-lg mb-2 text-agri-olive dark:text-white truncate">{prod.name}</h3>
                  <div className="flex justify-between items-center">
                    <span className="text-agri-brown font-bold text-xl">{prod.price}</span>
                    <button className="text-sm border border-agri-olive text-agri-olive dark:border-gray-400 dark:text-gray-300 px-3 py-1 rounded hover:bg-agri-olive hover:text-white dark:hover:bg-white dark:hover:text-agri-olive transition">
                      {t.addToCart}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
             <Link href="/products">
                <button className="px-6 py-2 border-2 border-agri-olive text-agri-olive dark:border-white dark:text-white font-bold rounded-full hover:bg-agri-olive hover:text-white dark:hover:bg-white dark:hover:text-agri-olive transition duration-300">
                    View All Products
                </button>
             </Link>
          </div>
        </div>
      </section>

      {/* ================= 4. PROMOTIONAL BANNER SECTION ================= */}
      <section 
        className="relative py-24 bg-fixed bg-center bg-cover"
        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1500937386664-56d1dfef3854?q=80&w=1920&auto=format&fit=crop")' }}
      >
        <div className="absolute inset-0 bg-agri-olive/70 mix-blend-multiply"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center text-white">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 drop-shadow-lg">
            {t.bannerTitle}
          </h2>
          <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-2xl mx-auto">
            {t.bannerDesc}
          </p>
          <Link href="/products">
            <button className="bg-white text-agri-olive font-bold py-3 px-8 rounded-full text-lg transition duration-300 hover:bg-agri-brown hover:text-white shadow-md">
              Shop the Sale
            </button>
          </Link>
        </div>
      </section>

       {/* ================= 5. TESTIMONIALS SECTION ================= */}
       <section className="py-16 px-4 bg-agri-beige dark:bg-dark-surface transition-colors duration-300">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-agri-olive dark:text-white">
            {t.testTitle}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {t.testimonials.map((testi, index) => (
              <div key={index} className="bg-white dark:bg-dark-bg p-8 rounded-xl shadow-sm hover:shadow-md transition duration-300 relative border border-gray-100 dark:border-gray-700">
                <FaQuoteLeft className="text-4xl text-agri-olive/20 absolute top-4 left-4" />
                <p className="text-gray-600 dark:text-gray-300 italic mb-6 relative z-10 pt-4">"{testi.comment}"</p>
                <div className="flex items-center">
                    <div className="w-12 h-12 bg-agri-gray rounded-full flex items-center justify-center text-xl font-bold text-agri-olive mr-4">
                        {testi.name.charAt(0)}
                    </div>
                    <div>
                        <h4 className="font-bold text-agri-olive dark:text-white">{testi.name}</h4>
                        <span className="text-sm text-gray-500 dark:text-gray-400">{testi.location}</span>
                    </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}