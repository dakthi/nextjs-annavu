"use client";

import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

interface FooterProps {
  locale?: string;
}

export function Footer({ locale }: FooterProps) {
  const pathname = usePathname();
  const currentLocale = locale || (pathname?.startsWith("/vi") ? "vi" : "en");
  const navigation = [
    { label_en: "Home", label_vi: "Trang chủ", href: "" },
    { label_en: "About", label_vi: "Giới thiệu", href: "/learn" },
    { label_en: "Services", label_vi: "Dịch vụ", href: "/services" },
    { label_en: "Blog", label_vi: "Blog", href: "/blog" },
    { label_en: "Contact", label_vi: "Liên hệ", href: "/contact" },
  ];

  const legal = [
    { label_en: "Terms", label_vi: "Điều khoản", href: "/legal" },
    { label_en: "Privacy", label_vi: "Bảo mật", href: "/privacy" },
    { label_en: "Plan My Journey", label_vi: "Lên kế hoạch", href: "/contact" },
  ];

  const content = {
    en: {
      tagline: "Luxury Travel Curator",
      description: "Creating transformative journeys that blend luxury with authentic cultural experiences. Every trip is designed to open your heart to new cultures and landscapes.",
      keepInTouch: "Follow Our Adventures",
      copyright: "Anna Vu Travel",
      newsletter: "Stay Inspired",
      newsletterDesc: "Get exclusive travel insights and destination guides delivered to your inbox.",
      experiences: "Recent Experiences"
    },
    vi: {
      tagline: "Chuyên gia Du lịch Cao cấp",
      description: "Tạo ra những hành trình chuyển đổi kết hợp sự sang trọng với trải nghiệm văn hóa chân thực. Mỗi chuyến đi được thiết kế để mở lòng bạn với những nền văn hóa và cảnh quan mới.",
      keepInTouch: "Theo dõi Cuộc phiêu lưu",
      copyright: "Anna Vu Travel",
      newsletter: "Nhận Cảm hứng",
      newsletterDesc: "Nhận thông tin du lịch độc quyền và hướng dẫn điểm đến gửi đến hộp thư của bạn.",
      experiences: "Trải nghiệm Gần đây"
    }
  };

  const t = content[currentLocale as keyof typeof content] || content.en;

  const recentExperiences = [
    { image: "/img/chelsea-in-bloom.jpg", title: currentLocale === "en" ? "Chelsea in Bloom" : "Chelsea Xuân" },
    { image: "/img/in-venice-carnival.jpg", title: currentLocale === "en" ? "Venice Carnival" : "Lễ hội Venice" },
    { image: "/img/in-budapest.jpg", title: currentLocale === "en" ? "Budapest Nights" : "Đêm Budapest" },
    { image: "/img/Kandersteg.jpg", title: currentLocale === "en" ? "Swiss Alps" : "Dãy Alps Thụy Sĩ" }
  ];

  return (
    <footer className="w-full bg-white text-gray-900 border-t border-gray-200">
      {/* Recent Experiences Section */}
      <div className="py-16">
        <div className="max-w-6xl mx-auto px-8">
          <h3 className="text-2xl font-serif font-semibold text-black text-center mb-12">
            {t.experiences}
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {recentExperiences.map((experience, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="aspect-square overflow-hidden rounded-lg">
                  <img 
                    src={experience.image} 
                    alt={experience.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <p className="text-sm text-gray-600 mt-2 text-center">{experience.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <Link href={`/${currentLocale}`} className="block mb-6">
                <h2 className="text-3xl font-serif font-bold mb-2 text-black">Anna Vu</h2>
                <p className="text-gray-600 text-sm uppercase tracking-wider">{t.tagline}</p>
              </Link>
              <p className="text-gray-700 leading-relaxed mb-8 max-w-lg">
                {t.description}
              </p>
              <div className="flex space-x-6">
                <a href="https://www.facebook.com/yenthuongcat" target="_blank" rel="noopener" className="text-gray-600 hover:text-black transition-colors">
                  <Facebook size={24} />
                </a>
                <a href="https://www.instagram.com/annacanary_vu/" target="_blank" rel="noopener" className="text-gray-600 hover:text-black transition-colors">
                  <Instagram size={24} />
                </a>
                <a href="https://www.linkedin.com/in/anna-vu-travel" target="_blank" rel="noopener" className="text-gray-600 hover:text-black transition-colors">
                  <Linkedin size={24} />
                </a>
              </div>
            </div>

            {/* Navigation */}
            <div>
              <h4 className="text-black font-serif font-semibold mb-6 uppercase tracking-wider text-sm">Navigation</h4>
              <ul className="space-y-3">
                {navigation.map((item, index) => (
                  <li key={index}>
                    <Link
                      href={`/${currentLocale}${item.href}`}
                      className="text-gray-700 hover:text-black transition-colors"
                    >
                      {currentLocale === "en" ? item.label_en : item.label_vi}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h4 className="text-black font-serif font-semibold mb-6 uppercase tracking-wider text-sm">{t.newsletter}</h4>
              <p className="text-gray-700 mb-6 text-sm leading-relaxed">
                {t.newsletterDesc}
              </p>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder={currentLocale === "en" ? "Your email address" : "Địa chỉ email của bạn"}
                  className="flex-1 px-4 py-2 bg-gray-100 border border-gray-300 rounded-l-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:border-emerald-500"
                />
                <button className="px-6 py-2 bg-emerald-700 hover:bg-emerald-800 text-white rounded-r-lg transition-colors">
                  {currentLocale === "en" ? "Subscribe" : "Đăng ký"}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-200 py-8">
          <div className="max-w-6xl mx-auto px-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-700 text-sm">
                © {new Date().getFullYear()} {t.copyright}. {currentLocale === "en" ? "All rights reserved." : "Tất cả quyền được bảo lưu."}
              </p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                {legal.map((item, index) => (
                  <Link
                    key={index}
                    href={`/${currentLocale}${item.href}`}
                    className="text-gray-700 hover:text-black transition-colors text-sm"
                  >
                    {currentLocale === "en" ? item.label_en : item.label_vi}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

const Facebook = ({ size = 24 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M24 12.07C24 5.41 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.04V9.41c0-3.02 1.8-4.7 4.54-4.7 1.31 0 2.68.24 2.68.24v2.97h-1.5c-1.5 0-1.96.93-1.96 1.89v2.26h3.32l-.53 3.5h-2.8V24C19.62 23.1 24 18.1 24 12.07" />
  </svg>
);

const Instagram = ({ size = 24 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
);

const Linkedin = ({ size = 24 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M22.23 0H1.77C.8 0 0 .77 0 1.72v20.56C0 23.23.8 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.2 0 22.23 0zM7.27 20.1H3.65V9.24h3.62V20.1zM5.47 7.76h-.03c-1.22 0-2-.83-2-1.87 0-1.06.8-1.87 2.05-1.87 1.24 0 2 .8 2.02 1.87 0 1.04-.78 1.87-2.05 1.87zM20.34 20.1h-3.63v-5.8c0-1.45-.52-2.45-1.83-2.45-1 0-1.6.67-1.87 1.32-.1.23-.11.55-.11.88v6.05H9.28s.05-9.82 0-10.84h3.63v1.54a3.6 3.6 0 0 1 3.26-1.8c2.39 0 4.18 1.56 4.18 4.89v6.21z" />
  </svg>
);