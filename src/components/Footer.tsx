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
    { label_en: "Travel Blog", label_vi: "Blog Du lịch", href: "/blog" },
    { label_en: "Travel Services", label_vi: "Dịch vụ Du lịch", href: "/projects" },
    { label_en: "About Anna", label_vi: "Về Anna", href: "/learn" },
    { label_en: "Testimonials", label_vi: "Đánh giá", href: "/testimonials" },
    { label_en: "FAQ", label_vi: "Câu hỏi thường gặp", href: "/faq" },
  ];

  const legal = [
    { label_en: "Terms", label_vi: "Điều khoản", href: "/legal" },
    { label_en: "Privacy", label_vi: "Bảo mật", href: "/privacy" },
    { label_en: "Plan My Journey", label_vi: "Lên kế hoạch", href: "/contact" },
  ];

  const content = {
    en: {
      tagline: "European Travel Consultant",
      description: "Anna Vu is a travel consultant based in London, UK. She specializes in European adventures and cultural exploration, helping travelers discover authentic experiences and hidden gems.",
      keepInTouch: "Connect with Anna",
      copyright: "Made by Anna Vu"
    },
    vi: {
      tagline: "Tư vấn Du lịch Châu Âu",
      description: "Anna Vu là tư vấn du lịch tại London, UK. Cô chuyên về các cuộc phiêu lưu châu Âu và khám phá văn hóa, giúp du khách khám phá những trải nghiệm chân thực và những viên ngọc ẩn.",
      keepInTouch: "Kết nối với Anna",
      copyright: "Được tạo bởi Anna Vu"
    }
  };

  const t = content[currentLocale as keyof typeof content] || content.en;

  return (
    <div className="w-full bg-white dark:bg-neutral-900 border-t border-gray-100 dark:border-gray-700 mt-5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-0">
        <div className="grid grid-cols-1 gap-10 pt-10 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div className="mb-5">
              <Link href={`/${currentLocale}`}>
                <div className="flex items-center space-x-3 mb-2">
                  <img
                    src="/img/anna-1.jpg"
                    alt="Anna Vu"
                    className="w-12 h-12 rounded-full"
                  />
                  <span className="text-xl font-medium text-black dark:text-white">
                    Anna Vu
                  </span>
                </div>
                <span className="flex items-center space-x-2 text-sm font-light text-gray-600 dark:text-gray-300">
                  <span>{t.tagline}</span>
                </span>
              </Link>
            </div>
            <div className="max-w-md text-gray-500 dark:text-gray-400 font-light leading-relaxed">
              {t.description}
            </div>
          </div>

          <div>
            <div className="flex flex-wrap w-full -mt-2 -ml-3 lg:ml-0">
              {navigation.map((item, index) => (
                <Link
                  key={index}
                  href={`/${currentLocale}${item.href}`}
                  className="w-full px-4 py-2 text-gray-500 dark:text-gray-400 rounded-md hover:text-black dark:hover:text-white focus:text-black dark:focus:text-white transition focus:bg-gray-100 dark:focus:bg-gray-800 focus:outline-none font-light"
                >
                  {currentLocale === "en" ? item.label_en : item.label_vi}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <div className="flex flex-wrap w-full -mt-2 -ml-3 lg:ml-0">
              {legal.map((item, index) => (
                <Link
                  key={index}
                  href={`/${currentLocale}${item.href}`}
                  className="w-full px-4 py-2 text-gray-500 dark:text-gray-400 rounded-md hover:text-black dark:hover:text-white focus:text-black dark:focus:text-white transition focus:bg-gray-100 dark:focus:bg-gray-800 focus:outline-none font-light"
                >
                  {currentLocale === "en" ? item.label_en : item.label_vi}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <div className="text-gray-500 dark:text-gray-400 rounded-md font-light">
              {t.keepInTouch}
            </div>
            <div className="flex mt-5 space-x-5 text-gray-400 dark:text-gray-500">
              <a href="https://www.facebook.com/yenthuongcat" target="_blank" rel="noopener">
                <span className="sr-only">Facebook</span>
                <Facebook />
              </a>
              <a href="https://www.instagram.com/annacanary_vu/" target="_blank" rel="noopener">
                <span className="sr-only">Instagram</span>
                <Instagram />
              </a>
              <a href="https://www.linkedin.com/in/anna-vu-travel" target="_blank" rel="noopener">
                <span className="sr-only">LinkedIn</span>
                <Linkedin />
              </a>
            </div>
          </div>
        </div>

        <div className="my-10 text-sm text-center text-gray-600 dark:text-gray-400 font-light">
          Copyright © {new Date().getFullYear()}.{" "}
          {t.copyright}
        </div>
      </div>
    </div>
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
