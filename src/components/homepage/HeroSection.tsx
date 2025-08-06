import { HomepageProps } from '@/types/homepage';

export default function HeroSection({ locale }: HomepageProps) {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-black/40 z-10"></div>
      <video 
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay 
        muted 
        loop
        playsInline
      >
        <source src="/img/swiss-hero.mov" type="video/mp4" />
      </video>
      <div className="relative z-20 text-center text-white">
        <h1 className="text-3xl md:text-6xl font-bold uppercase tracking-[0.3em] leading-tight">
          {locale === "en" ? "Beyond destinations. Designed experiences.\nIN YOUR HANDS" : "Khám phá thế giới \n cùng Yến Vũ"}
        </h1>
      </div>
    </section>
  );
}