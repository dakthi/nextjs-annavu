"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Disclosure } from "@headlessui/react";
import { useDarkMode } from "@/context/DarkModeContext";

export const Navbar = () => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  const pathname = usePathname();

  const currentLocale = pathname?.startsWith("/vi") ? "vi" : "en";
  const isHomePage = pathname === `/${currentLocale}` || pathname === `/${currentLocale}/`;
  const getCurrentPagePath = () => {
    if (!pathname) return "";
    return pathname.replace(/^\/(en|vi)/, "") || "";
  };
  const getLanguageSwitchUrl = (targetLocale: string) =>
    `/${targetLocale}${getCurrentPagePath()}`;

  const translations = {
    en: {
      nav: [
        { label: "Home", href: "" },
        { label: "About", href: "learn" },
        { label: "Services", href: "services" },
        { label: "Contact", href: "contact" },
      ],
      enquire: "ENQUIRE NOW",
      lightMode: "light mode",
      darkMode: "dark mode",
    },
    vi: {
      nav: [
        { label: "Trang chủ", href: "" },
        { label: "Giới thiệu", href: "learn" },
        { label: "Dịch vụ", href: "services" },
        { label: "Liên hệ", href: "contact" },
      ],
      enquire: "LIÊN HỆ NGAY",
      lightMode: "chế độ sáng",
      darkMode: "chế độ tối",
    },
  };

  const t = translations[currentLocale];
  const navItems = t.nav.map((item) => ({
    ...item,
    href: `/${currentLocale}/${item.href}`,
  }));

  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`w-full fixed top-0 left-0 right-0 z-50 px-8 py-6 transition-all duration-300 ${
      scrolled 
        ? "bg-white/95 backdrop-blur-sm shadow-lg" 
        : "bg-transparent"
    }`}>
      <div className="flex justify-between items-center">
        <div className="flex space-x-12">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`uppercase tracking-wider text-sm font-medium transition-all duration-300 ${
                isHomePage 
                  ? "text-white hover:text-gray-200" 
                  : "text-black hover:text-gray-700"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>
        
        <div className="flex items-center space-x-4">
          {/* Language Switcher */}
          <div className="flex space-x-2">
            <Link
              href={getLanguageSwitchUrl("en")}
              className={`px-2 py-1 text-xs uppercase transition-all duration-300 ${
                currentLocale === "en"
                  ? isHomePage ? "text-white font-bold" : "text-black font-bold"
                  : isHomePage ? "text-gray-300 hover:text-white" : "text-gray-500 hover:text-black"
              }`}
            >
              EN
            </Link>
            <span className={isHomePage ? "text-gray-400" : "text-gray-300"}>|</span>
            <Link
              href={getLanguageSwitchUrl("vi")}
              className={`px-2 py-1 text-xs uppercase transition-all duration-300 ${
                currentLocale === "vi"
                  ? isHomePage ? "text-white font-bold" : "text-black font-bold"
                  : isHomePage ? "text-gray-300 hover:text-white" : "text-gray-500 hover:text-black"
              }`}
            >
              VI
            </Link>
          </div>
          
          <button className="bg-emerald-700 text-white px-6 py-2 rounded font-medium hover:bg-emerald-800 transition-colors">
            {t.enquire}
          </button>
        </div>
      </div>

    </nav>
  );
};
