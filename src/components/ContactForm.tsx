"use client";

import { Container } from "@/components/Container";
import { useState } from "react";
import { usePathname } from "next/navigation";

interface ContactFormProps {
  locale?: string;
}

export function ContactForm({ locale: propLocale }: ContactFormProps = {}) {
  const pathname = usePathname();
  const locale = propLocale || (pathname?.startsWith("/vi") ? "vi" : "en");

  const translations = {
    en: {
      tag: "let's plan your journey",
      heading: "ready for your next adventure?",
      description:
        "dream destination in mind? curious about european culture? ready to plan something amazing? let's chat.",
      contactTitle: "ways to reach anna",
      email: "email",
      location: "location",
      locationValue: "london, uk",
      responseTitle: "typical response time",
      responseText:
        "i usually respond within 24 hours, often much faster. for urgent travel needs, mention it in the subject line.",
      quote: `"every great journey begins with a single conversation"`,
      name: "name *",
      namePlaceholder: "your name",
      emailLabel: "email *",
      emailPlaceholder: "your@email.com",
      company: "travel type",
      companyPlaceholder: "solo, couple, family, friends (optional)",
      budget: "budget range",
      budgetOptions: [
        "select range (optional)",
        "under £500",
        "£500 - £2,000",
        "£2,000 - £5,000",
        "£5,000 - £10,000",
        "£10,000+",
        "flexible/open to suggestions",
      ],
      subject: "subject *",
      subjectPlaceholder: "what kind of adventure are you planning?",
      message: "message *",
      messagePlaceholder:
        "tell me about your dream trip, travel style, or questions you have...",
      send: "start planning",
      sending: "sending...",
    },
    vi: {
      tag: "cùng lập kế hoạch hành trình",
      heading: "sẵn sàng cho cuộc phiêu lưu tiếp theo?",
      description:
        "có điểm đến mơ ước? tò mò về văn hóa châu âu? sẵn sàng lập kế hoạch điều tuyệt vời? cùng trò chuyện nhé.",
      contactTitle: "cách liên hệ với anna",
      email: "email",
      location: "địa điểm",
      locationValue: "london, anh quốc",
      responseTitle: "thời gian phản hồi",
      responseText:
        "anna thường trả lời trong 24 giờ, thường là nhanh hơn. cho nhu cầu du lịch khẩn cấp, ghi rõ trong tiêu đề nhé.",
      quote: `"mọi hành trình tuyệt vời đều bắt đầu bằng một cuộc trò chuyện"`,
      name: "tên *",
      namePlaceholder: "tên của bạn",
      emailLabel: "email *",
      emailPlaceholder: "ban@email.com",
      company: "loại du lịch",
      companyPlaceholder: "một mình, đôi, gia đình, bạn bè (không bắt buộc)",
      budget: "ngân sách dự kiến",
      budgetOptions: [
        "chọn khoảng (không bắt buộc)",
        "dưới £500",
        "£500 - £2,000",
        "£2,000 - £5,000",
        "£5,000 - £10,000",
        "£10,000+",
        "linh hoạt/mở cho gợi ý",
      ],
      subject: "tiêu đề *",
      subjectPlaceholder: "bạn đang lập kế hoạch loại cuộc phiêu lưu nào?",
      message: "lời nhắn *",
      messagePlaceholder: "kể cho anna về chuyến đi mơ ước, phong cách du lịch hoặc câu hỏi của bạn...",
      send: "bắt đầu lập kế hoạch",
      sending: "đang gửi...",
    },
  };

  const t = translations[locale as "en" | "vi"];

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    subject: "",
    message: "",
    budget: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      alert(locale === "vi" ? "Cảm ơn bạn đã liên hệ!" : "Thanks for reaching out!");
      setFormData({
        name: "",
        email: "",
        company: "",
        subject: "",
        message: "",
        budget: "",
      });
    }, 2000);
  };

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-8">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="inline-block bg-white text-gray-600 text-sm px-4 py-2 rounded-full mb-6 shadow-sm">
            {t.tag}
          </div>
          <h1 className="text-3xl md:text-5xl font-serif font-bold text-black mb-6 leading-tight">
            {t.heading}
          </h1>
          <p className="text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto mb-8">
            {t.description}
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left Column - Contact Info */}
          <div className="lg:w-1/3">
            <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-200">
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-serif font-semibold text-black mb-4">
                    {t.contactTitle}
                  </h3>
                  <div className="space-y-4 text-gray-700">
                    <div>
                      <span className="font-medium text-black">{t.email}:</span>
                      <br />
                      <a
                        href="mailto:dakthi9@gmail.com"
                        className="hover:text-gray-900 transition-colors"
                      >
                        dakthi9@gmail.com
                      </a>
                    </div>
                    <div>
                      <span className="font-medium text-black">{t.location}:</span>
                      <br />
                      {t.locationValue}
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-serif font-semibold text-black mb-4">
                    {t.responseTitle}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {t.responseText}
                  </p>
                </div>

                <div className="pt-6 border-t border-gray-200">
                  <p className="text-gray-600 italic font-serif">
                    {t.quote}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="lg:w-2/3">
            <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-200">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-black mb-2">
                      {t.name}
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder={t.namePlaceholder}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-gray-200 focus:border-gray-400 bg-white text-gray-900 transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-black mb-2">
                      {t.emailLabel}
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder={t.emailPlaceholder}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-gray-200 focus:border-gray-400 bg-white text-gray-900 transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-black mb-2">
                      {t.company}
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder={t.companyPlaceholder}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-gray-200 focus:border-gray-400 bg-white text-gray-900 transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="budget" className="block text-sm font-medium text-black mb-2">
                      {t.budget}
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-gray-200 focus:border-gray-400 bg-white text-gray-900 transition-colors"
                    >
                      {t.budgetOptions.map((option, index) => (
                        <option key={index} value={option.toLowerCase()}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-black mb-2">
                    {t.subject}
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder={t.subjectPlaceholder}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-gray-200 focus:border-gray-400 bg-white text-gray-900 transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-black mb-2">
                    {t.message}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder={t.messagePlaceholder}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-gray-200 focus:border-gray-400 bg-white text-gray-900 transition-colors resize-vertical"
                  />
                </div>

                <div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full px-8 py-3 bg-emerald-700 text-white hover:bg-emerald-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed font-medium"
                  >
                    {isSubmitting ? t.sending : t.send}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
