import { Testimonial, TravellerType, Trip } from '@/types/homepage';

export const getTestimonials = (locale: string): Testimonial[] => [
  {
    text: locale === "en" ? "Anna helped us plan the most incredible European adventure. Every detail was perfect!" : "Anna đã giúp chúng tôi lập kế hoạch cho cuộc phiêu lưu châu Âu tuyệt vời nhất. Mọi chi tiết đều hoàn hảo!",
    author: "Micah, Egypt"
  },
  {
    text: locale === "en" ? "The cultural insights Anna provided made our trip truly authentic and meaningful." : "Những hiểu biết văn hóa mà Anna cung cấp đã làm cho chuyến đi của chúng tôi thực sự chân thực và ý nghĩa.",
    author: "Sarah, London"
  },
  {
    text: locale === "en" ? "Professional service with a personal touch. Anna's expertise is unmatched." : "Dịch vụ chuyên nghiệp với sự chăm sóc cá nhân. Chuyên môn của Anna không ai sánh được.",
    author: "James, Australia"
  },
  {
    text: locale === "en" ? "Thanks to Anna, we discovered hidden gems we never would have found ourselves." : "Nhờ Anna, chúng tôi đã khám phá những viên ngọc ẩn mà chúng tôi không bao giờ có thể tự tìm thấy.",
    author: "Maria, Spain"
  }
];

export const travellerTypes: TravellerType[] = [
  { label: "FAMILY", image: "/img/chelsea-in-bloom.jpg" },
  { label: "COUPLES", image: "/img/in-venice-carnival.jpg" },
  { label: "SOLO", image: "/img/in-budapest.jpg" },
  { label: "FRIENDS", image: "/img/Kandersteg.jpg" },
  { label: "LUXURY", image: "/img/Doumo-Milan.jpg" }
];

export const getTrips = (locale: string): Trip[] => [
  {
    title: locale === "en" ? "Mediterranean Dreams" : "Giấc mơ Địa Trung Hải",
    nights: "8 NIGHTS",
    image: "/img/in-venice-carnival.jpg"
  },
  {
    title: locale === "en" ? "Northern Lights Adventure" : "Cuộc phiêu lưu Cực quang",
    nights: "12 NIGHTS",
    image: "/img/Kandersteg.jpg"
  },
  {
    title: locale === "en" ? "Cultural Heritage Tour" : "Tour Di sản Văn hóa",
    nights: "10 NIGHTS",
    image: "/img/Doumo-Milan.jpg"
  }
];

export const mediaLogos = [
  "BBC Travel", "Lonely Planet", "National Geographic", "Travel + Leisure", "Condé Nast"
];