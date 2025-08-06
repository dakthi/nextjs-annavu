import { mediaLogos } from '@/data/homepage';

export default function MediaFeaturesSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-8">
        <div className="flex justify-center items-center space-x-12">
          {mediaLogos.map((logo, index) => (
            <div key={index} className="text-gray-400 font-medium text-lg opacity-60 hover:opacity-100 transition-opacity">
              {logo}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}