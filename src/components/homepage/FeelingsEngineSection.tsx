import { HomepageProps } from '@/types/homepage';

export default function FeelingsEngineSection({ locale }: HomepageProps) {
  return (
    <section className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900"></div>
      <div className="relative z-10 max-w-4xl mx-auto text-center px-8">
        <h2 className="text-6xl md:text-8xl font-serif font-bold text-white mb-6">
          {locale === "en" ? "FEELINGS ENGINE" : "ĐỘNG CƠ CẢM XÚC"}
        </h2>
        <p className="text-xl text-white/80 uppercase tracking-wider mb-12 font-medium">
          {locale === "en" 
            ? "DISCOVER YOUR PERFECT JOURNEY THROUGH EMOTION"
            : "KHÁM PHÁ HÀNH TRÌNH HOÀN HẢO QUA CẢM XÚC"}
        </p>
        <button className="border-2 border-white text-white px-12 py-4 uppercase tracking-wider font-medium hover:bg-white hover:text-black transition-colors">
          {locale === "en" ? "TRY THE FEELINGS ENGINE" : "THỬ ĐỘNG CƠ CẢM XÚC"}
        </button>
      </div>
    </section>
  );
}