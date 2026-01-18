"use client";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useApp } from '@/context/providers';
import { FaShippingFast, FaLeaf, FaUserTie, FaQuoteLeft, FaQuestionCircle, FaChartLine, FaSmile } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

export default function Home() {
  const { language } = useApp();

  const t = {
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
      }
    ],
    featTitle: language === 'en' ? "Why Choose AgriMart?" : "কেন এগ্রিমার্ট বেছে নেবেন?",
    features: [
      { icon: FaLeaf, title: language === 'en' ? "100% Organic" : "১০০% অর্গানিক", desc: language === 'en' ? "Certified organic products." : "সার্টিফাইড অর্গানিক পণ্য।" },
      { icon: FaShippingFast, title: language === 'en' ? "Fast Delivery" : "দ্রুত ডেলিভারি", desc: language === 'en' ? "Delivery within 24 hours." : "২৪ ঘন্টার মধ্যে ডেলিভারি।" },
      { icon: FaUserTie, title: language === 'en' ? "Expert Advice" : "বিশেষজ্ঞ পরামর্শ", desc: language === 'en' ? "Tips from agriculture experts." : "কৃষি বিশেষজ্ঞদের পরামর্শ।" },
    ],
    stats: [
        { icon: FaSmile, count: "5000+", label: language === 'en' ? "Happy Farmers" : "সন্তুষ্ট কৃষক" },
        { icon: FaLeaf, count: "1200+", label: language === 'en' ? "Products Sold" : "পণ্য বিক্রয়" },
        { icon: FaChartLine, count: "5 Years", label: language === 'en' ? "Experience" : "অভিজ্ঞতা" },
        { icon: FaUserTie, count: "50+", label: language === 'en' ? "Experts" : "বিশেষজ্ঞ" },
    ],
    prodTitle: language === 'en' ? "Trending Products" : "জনপ্রিয় পণ্যসমূহ",
    addToCart: language === 'en' ? "Add to Cart" : "কার্টে যোগ করুন",
    dummyProducts: [
      { id: 1, name: "Hybrid Tomato Seeds", price: "৳450", img: "https://images.unsplash.com/photo-1592841200221-a6898f307baa?w=500&q=60" },
      { id: 2, name: "Organic Fertilizer", price: "৳1200", img: "https://plus.unsplash.com/premium_photo-1664298197723-533cc885104d?w=500&q=60" },
      { id: 3, name: "Garden Spade", price: "৳850", img: "https://images.unsplash.com/photo-1617576683096-00fc8eecb3af?w=500&q=60" },
      { id: 4, name: "Watering Can", price: "৳550", img: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=500&q=60" },
    ],
    bannerTitle: language === 'en' ? "Monsoon Sale! Up to 30% Off" : "বর্ষা অফার! ৩০% পর্যন্ত ছাড়",
    bannerBtn: language === 'en' ? "Shop The Sale" : "অফারটি লুফে নিন",
    faqTitle: language === 'en' ? "Frequently Asked Questions" : "সচরাচর জিজ্ঞাসিত প্রশ্ন",
    faqs: [
        { q: language === 'en' ? "How do I order?" : "কিভাবে অর্ডার করব?", a: language === 'en' ? "Select product and click buy." : "পণ্য নির্বাচন করুন এবং কিনুন বাটনে ক্লিক করুন।" },
        { q: language === 'en' ? "Is delivery free?" : "ডেলিভারি কি ফ্রি?", a: language === 'en' ? "Yes, for orders over 2000tk." : "হ্যাঁ, ২০০০ টাকার বেশি অর্ডারে।" },
        { q: language === 'en' ? "Can I return items?" : "পণ্য ফেরত দেওয়া যাবে?", a: language === 'en' ? "Yes, within 7 days." : "হ্যাঁ, ৭ দিনের মধ্যে।" },
    ],
    testTitle: language === 'en' ? "What Farmers Say" : "কৃষকদের মতামত",
    testimonials: [
      { name: "Rahim Uddin", location: "Cumilla", comment: "Excellent quality seeds." },
      { name: "Selina Begum", location: "Jessore", comment: "Very fast delivery." },
      { name: "Abdul Karim", location: "Bogura", comment: "The fertilizer works magic." },
    ]
  };

  return (
    <div className="flex flex-col min-h-screen">

      <section className="relative h-[550px] bg-gray-900">
        <Swiper modules={[Autoplay, Pagination]} pagination={{ clickable: true }} autoplay={{ delay: 5000 }} className="h-full w-full">
          {t.heroSlides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <Image src={slide.image} alt={slide.title} fill className="object-cover opacity-60" priority={slide.id === 1} />
              <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4 z-10">
                <h1 className="text-4xl md:text-6xl font-bold mb-4 max-w-4xl">{slide.title}</h1>
                <p className="text-lg md:text-2xl mb-8 max-w-2xl">{slide.subtitle}</p>
                <Link href="/products">
                  <button className="bg-agri-brown hover:bg-agri-olive text-white font-bold py-3 px-8 rounded-full transition transform hover:scale-105">
                    {t.heroBtn}
                  </button>
                </Link>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      <section className="py-16 px-4 bg-white dark:bg-dark-bg transition-colors duration-300">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="section-title">{t.featTitle}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
            {t.features.map((feat, index) => (
              <div key={index} className="card p-8 flex flex-col items-center hover:-translate-y-2 transition duration-300">
                <div className="bg-agri-olive/10 p-4 rounded-full mb-4 text-agri-olive">
                  <feat.icon className="text-4xl" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-agri-olive dark:text-white">{feat.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-agri-olive text-white">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {t.stats.map((stat, idx) => (
                <div key={idx} className="flex flex-col items-center">
                    <stat.icon className="text-3xl mb-2 opacity-80" />
                    <h3 className="text-4xl font-bold mb-1">{stat.count}</h3>
                    <p className="text-sm uppercase tracking-wider opacity-80">{stat.label}</p>
                </div>
            ))}
        </div>
      </section>

      <section className="py-16 px-4 bg-agri-beige dark:bg-dark-surface transition-colors duration-300">
        <div className="max-w-7xl mx-auto">
          <h2 className="section-title text-center">{t.prodTitle}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
            {t.dummyProducts.map((prod) => (
              <div key={prod.id} className="bg-white dark:bg-dark-bg rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition duration-300 group">
                <div className="relative h-48 overflow-hidden">
                  <Image src={prod.img} alt={prod.name} fill className="object-cover group-hover:scale-110 transition duration-500" />
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-lg mb-2 text-agri-olive dark:text-white truncate">{prod.name}</h3>
                  <div className="flex justify-between items-center">
                    <span className="text-agri-brown font-bold text-xl">{prod.price}</span>
                    <button className="text-sm bg-agri-olive text-white px-3 py-1 rounded hover:bg-agri-brown transition">
                      {t.addToCart}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
             <Link href="/products" className="inline-block border-2 border-agri-olive text-agri-olive dark:border-white dark:text-white px-8 py-2 rounded-full font-bold hover:bg-agri-olive hover:text-white transition">
                View All
             </Link>
          </div>
        </div>
      </section>

      <section className="relative py-24 bg-fixed bg-center bg-cover" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1500937386664-56d1dfef3854?q=80&w=1920&auto=format&fit=crop")' }}>
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center text-white">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">{t.bannerTitle}</h2>
          <Link href="/products">
            <button className="bg-white text-agri-olive font-bold py-3 px-8 rounded-full text-lg hover:bg-agri-brown hover:text-white transition mt-4">
              {t.bannerBtn}
            </button>
          </Link>
        </div>
      </section>

      <section className="py-16 px-4 bg-white dark:bg-dark-bg transition-colors duration-300">
         <div className="max-w-3xl mx-auto">
            <h2 className="section-title text-center mb-10">{t.faqTitle}</h2>
            <div className="space-y-4">
                {t.faqs.map((faq, i) => (
                    <details key={i} className="group bg-gray-50 dark:bg-dark-surface p-4 rounded-lg cursor-pointer border border-gray-100 dark:border-gray-700">
                        <summary className="font-bold text-lg text-agri-olive dark:text-gray-200 list-none flex justify-between items-center">
                            <span className="flex items-center gap-2"><FaQuestionCircle/> {faq.q}</span>
                            <span className="transition group-open:rotate-180">▼</span>
                        </summary>
                        <p className="mt-4 text-gray-600 dark:text-gray-400 pl-6">{faq.a}</p>
                    </details>
                ))}
            </div>
         </div>
      </section>

      <section className="py-16 px-4 bg-agri-beige dark:bg-dark-surface transition-colors duration-300">
        <div className="max-w-7xl mx-auto">
          <h2 className="section-title text-center mb-10">{t.testTitle}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {t.testimonials.map((testi, index) => (
              <div key={index} className="bg-white dark:bg-dark-bg p-8 rounded-xl shadow-sm relative">
                <FaQuoteLeft className="text-4xl text-agri-olive/10 absolute top-4 left-4" />
                <p className="text-gray-600 dark:text-gray-300 italic mb-6 relative z-10">"{testi.comment}"</p>
                <h4 className="font-bold text-agri-olive dark:text-white">{testi.name}</h4>
                <span className="text-sm text-gray-500">{testi.location}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}