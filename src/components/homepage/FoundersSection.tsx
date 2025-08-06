import { HomepageProps } from '@/types/homepage';

export default function FoundersSection({ locale }: HomepageProps) {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="text-5xl font-bold uppercase tracking-wider">
              {locale === "en" ? "THE STORY BEHIND\nOUR PASSION" : "CÂU CHUYỆN ĐẰNG SAU\nNIỀM ĐAM MÊ"}
            </h2>
            <div className="space-y-6 text-lg text-gray-700 font-serif leading-relaxed">
              <p>
                {locale === "en" 
                  ? "What began as personal curiosity about different cultures has evolved into a mission to create transformative travel experiences. We believe every journey should be a story worth telling."
                  : "Điều bắt đầu từ sự tò mò cá nhân về các nền văn hóa khác nhau đã phát triển thành sứ mệnh tạo ra những trải nghiệm du lịch mang tính chuyển đổi. Chúng tôi tin rằng mọi hành trình đều phải là một câu chuyện đáng kể."}
              </p>
              <p>
                {locale === "en" 
                  ? "Our approach combines deep local knowledge with luxury service, ensuring that every detail of your adventure reflects both authenticity and excellence."
                  : "Cách tiếp cận của chúng tôi kết hợp kiến thức địa phương sâu sắc với dịch vụ sang trọng, đảm bảo rằng mọi chi tiết trong cuộc phiêu lưu của bạn đều phản ánh sự chân thực và xuất sắc."}
              </p>
            </div>
            <button className="bg-emerald-700 text-white px-8 py-3 font-medium hover:bg-emerald-800 transition-colors">
              {locale === "en" ? "WATCH THE FILM" : "XEM PHIM"}
            </button>
          </div>
          <div className="relative">
            <img 
              src="/img/in-budapest.jpg" 
              alt="Founder" 
              className="w-full rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}