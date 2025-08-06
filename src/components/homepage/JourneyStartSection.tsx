'use client';

import { useState } from 'react';
import { HomepageProps } from '@/types/homepage';
import { travellerTypes } from '@/data/homepage';

export default function JourneyStartSection({ locale }: HomepageProps) {
  const [activeTab, setActiveTab] = useState<'traveller' | 'popular' | 'region'>('traveller');

  const tabItems = [
    {
      key: 'traveller',
      label: locale === 'en' ? 'BY TRAVELLER' : 'THEO DU KHÁCH',
    },
    {
      key: 'popular',
      label: locale === 'en' ? 'MOST POPULAR' : 'PHỔ BIẾN NHẤT',
    },
    {
      key: 'region',
      label: locale === 'en' ? 'BY REGION' : 'THEO KHU VỰC',
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-8">
        <div className="text-center mb-12">
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-8 mb-8">
            {tabItems.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key as typeof activeTab)}
                className={`uppercase text-sm font-medium pb-2 border-b-2 transition-colors ${
                  activeTab === tab.key
                    ? 'text-black border-black'
                    : 'text-gray-400 border-transparent hover:text-black'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black mb-4">
            {locale === 'en' ? 'START YOUR JOURNEY' : 'BẮT ĐẦU HÀNH TRÌNH CỦA BẠN'}
          </h2>
        </div>

        {/* Only rendering the traveller cards for now — you can extend this logic for other tabs */}
        {activeTab === 'traveller' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
            {travellerTypes.map((type, index) => (
              <div
                key={index}
                className="relative h-64 sm:h-80 lg:h-96 group cursor-pointer overflow-hidden rounded-lg"
              >
                <img
                  src={type.image}
                  alt={type.label}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-all duration-300" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <h3 className="text-white text-lg sm:text-xl font-bold uppercase tracking-wider drop-shadow-2xl shadow-black text-center px-2">
                    {type.label}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* You can add placeholders or alternate content for other tabs here */}
        {activeTab === 'popular' && (
          <div className="text-center text-gray-500 mt-12">
            <p>{locale === 'en' ? 'Popular content coming soon...' : 'Nội dung phổ biến sẽ được cập nhật...'}</p>
          </div>
        )}

        {activeTab === 'region' && (
          <div className="text-center text-gray-500 mt-12">
            <p>{locale === 'en' ? 'Regional content coming soon...' : 'Nội dung theo khu vực sẽ được cập nhật...'}</p>
          </div>
        )}
      </div>
    </section>
  );
}
