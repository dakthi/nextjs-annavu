import { HomepageProps } from '@/types/homepage';

export default function FeelingsEngineSection({ locale }: HomepageProps) {
  return (
    <section className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900"></div>
      <div className="relative z-10 max-w-4xl mx-auto text-center px-8">
        <h2 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6">
          {locale === "en" ? "EMOTION-LED JOURNEYS" : "HÀNH TRÌNH DẪN LỐI CẢM XÚC"}
        </h2>
        <p className="text-lg md:text-xl text-black uppercase tracking-wide mb-12 font-medium">
          {locale === "en"
            ? "Every trip is personal. Let your feelings guide the way."
            : "Mỗi chuyến đi là riêng biệt. Để cảm xúc dẫn lối."}
        </p>
        <p className="text-white text-base md:text-lg mb-12 max-w-2xl mx-auto">
          {locale === "en"
            ? "Through a short conversation, I’ll design a journey that fits not just your schedule—but your mood, your memories, your dreams. Whether you crave stillness, wonder, or connection, we’ll shape the perfect escape together."
            : "Chỉ qua một cuộc trò chuyện ngắn, mình sẽ thiết kế hành trình phù hợp không chỉ với thời gian của bạn — mà còn với cảm xúc, ký ức và những ước mơ thầm kín. Dù bạn đang cần sự tĩnh lặng, cảm hứng hay kết nối, chúng ta sẽ cùng nhau tạo nên chuyến đi hoàn hảo."}
        </p>
        <button className="border-2 border-white text-white px-12 py-4 uppercase tracking-wider font-medium hover:bg-emerald-500 hover:border-emerald-500 transition-colors">
          {locale === "en" ? "Begin your journey" : "Bắt đầu hành trình của bạn"}
        </button>
      </div>
    </section>
  );
}
