import { HomepageProps } from '@/types/homepage';
import { getTestimonials } from '@/data/homepage';

export default function BrandStatementSection({ locale }: HomepageProps) {
  const testimonials = getTestimonials(locale);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-8 text-center mb-16">
        <p className="text-2xl leading-relaxed text-gray-700 font-serif mb-8">
          {locale === "en" 
            ? "We believe travel is about creating connections that last a lifetime. Every journey we craft is designed to open your heart to new cultures, landscapes, and experiences that transform how you see the world."
            : "Chúng tôi tin rằng du lịch là tạo ra những kết nối kéo dài suốt đời. Mọi hành trình chúng tôi tạo ra đều được thiết kế để mở lòng bạn với những nền văn hóa, cảnh quan và trải nghiệm mới làm thay đổi cách bạn nhìn thế giới."}
        </p>
        <button className="bg-emerald-700 text-white px-8 py-3 font-medium hover:bg-emerald-800 transition-colors">
          {locale === "en" ? "GET IN TOUCH" : "LIÊN HỆ"}
        </button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto px-8">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="text-center p-6">
            <p className="text-gray-600 italic mb-4 leading-relaxed">"{testimonial.text}"</p>
            <p className="text-sm text-gray-500 italic">{testimonial.author}</p>
          </div>
        ))}
      </div>
    </section>
  );
}