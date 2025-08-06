import {
  GlobeAltIcon,
  MapPinIcon,
  HeartIcon,
  CameraIcon,
  BeakerIcon,
  SparklesIcon,
} from "@heroicons/react/24/solid";
import { ComponentType } from "react";

export interface BenefitItem {
  title_en: string;
  title_vi: string;
  desc_en: string;
  desc_vi: string;
  icon: ComponentType<any>;
}

export interface BenefitSection {
  title_en: string;
  title_vi: string;
  desc_en: string;
  desc_vi: string;
  image: string;
  bullets: BenefitItem[];
}

export const benefitOne: BenefitSection = {
  title_en: "European Adventure Specialist",
  title_vi: "Chuyên gia Phiêu lưu Châu Âu",
  desc_en: "Living in London and exploring Europe regularly, Anna has developed a deep understanding of European culture, hidden gems, and travel logistics. Her passion for discovery and cultural exploration makes her the perfect guide for your next adventure.",
  desc_vi: "Sống ở London và thường xuyên khám phá châu Âu, Anna đã phát triển sự hiểu biết sâu sắc về văn hóa châu Âu, những viên ngọc ẩn và hậu cần du lịch. Niềm đam mê khám phá và tìm hiểu văn hóa của cô ấy làm cho cô ấy trở thành người hướng dẫn hoàn hảo cho cuộc phiêu lưu tiếp theo của bạn.",
  image: "/img/anna-10.jpg",
  bullets: [
    {
      title_en: "Regular European Explorer",
      title_vi: "Nhà thám hiểm Châu Âu thường xuyên",
      desc_en: "Every 1-2 months, Anna embarks on new European adventures, continuously discovering hidden gems, local cultures, and unique experiences that she loves sharing with fellow travelers.",
      desc_vi: "Mỗi 1-2 tháng, Anna bắt đầu những cuộc phiêu lưu mới ở châu Âu, liên tục khám phá những viên ngọc ẩn, văn hóa địa phương và những trải nghiệm độc đáo mà cô ấy yêu thích chia sẻ với những người du lịch cùng chí hướng.",
      icon: GlobeAltIcon,
    },
    {
      title_en: "Cultural Immersion Expert",
      title_vi: "Chuyên gia Hòa nhập Văn hóa",
      desc_en: "From the modern marvels of South Korea that sparked her wanderlust to the diverse cultures across Europe, Anna understands how to truly immerse in local experiences and help others do the same.",
      desc_vi: "Từ những kỳ quan hiện đại của Hàn Quốc đã khơi dậy đam mê du lịch của cô ấy đến những nền văn hóa đa dạng khắp châu Âu, Anna hiểu cách thực sự hòa nhập vào trải nghiệm địa phương và giúp những người khác làm điều tương tự.",
      icon: HeartIcon,
    },
    {
      title_en: "Freedom Through Travel",
      title_vi: "Tự do qua Du lịch",
      desc_en: "Anna believes travel is about freedom, curiosity, and discovery. She helps others experience that liberating feeling of exploring new places without constraints or limitations.",
      desc_vi: "Anna tin rằng du lịch là về sự tự do, tò mò và khám phá. Cô ấy giúp những người khác trải nghiệm cảm giác giải phóng khi khám phá những nơi mới mà không có ràng buộc hoặc giới hạn.",
      icon: BeakerIcon,
    },
  ],
};

export const benefitTwo: BenefitSection = {
  title_en: "Personalized Travel Consulting Services",
  title_vi: "Dịch vụ Tư vấn Du lịch Cá nhân hóa",
  desc_en: "Anna doesn't just suggest destinations - she crafts personalized travel experiences that match your interests, budget, and travel style. Her curious nature and love for sharing discoveries make her the ideal travel companion.",
  desc_vi: "Anna không chỉ gợi ý điểm đến - cô ấy tạo ra những trải nghiệm du lịch được cá nhân hóa phù hợp với sở thích, ngân sách và phong cách du lịch của bạn. Bản tính tò mò và tình yêu chia sẻ những khám phá của cô ấy làm cho cô ấy trở thành người bạn đồng hành du lịch lý tưởng.",
  image: "/img/anna-11.jpg",
  bullets: [
    {
      title_en: "Curious Explorer Mindset",
      title_vi: "Tư duy Nhà thám hiểm Tò mò",
      desc_en: "Anna's natural curiosity drives her to discover the most interesting and unique aspects of each destination. She loves learning about local cultures and sharing these fascinating discoveries with others.",
      desc_vi: "Sự tò mò tự nhiên của Anna thúc đẩy cô ấy khám phá những khía cạnh thú vị và độc đáo nhất của mỗi điểm đến. Cô ấy yêu thích việc tìm hiểu về văn hóa địa phương và chia sẻ những khám phá hấp dẫn này với những người khác.",
      icon: CameraIcon,
    },
    {
      title_en: "Tailored Travel Experiences",
      title_vi: "Trải nghiệm Du lịch Được thiết kế Riêng",
      desc_en: "Understanding that every traveler is different, Anna creates customized itineraries that match your interests, whether you seek adventure, cultural immersion, or relaxation.",
      desc_vi: "Hiểu rằng mỗi du khách đều khác nhau, Anna tạo ra những lịch trình tùy chỉnh phù hợp với sở thích của bạn, dù bạn tìm kiếm phiêu lưu, hòa nhập văn hóa hay thư giãn.",
      icon: MapPinIcon,
    },
    {
      title_en: "Sharing the Joy of Discovery",
      title_vi: "Chia sẻ Niềm vui Khám phá",
      desc_en: "Anna finds immense joy in helping others experience the same sense of wonder and freedom she feels when traveling. She believes in making travel accessible and enjoyable for everyone.",
      desc_vi: "Anna tìm thấy niềm vui to lớn trong việc giúp những người khác trải nghiệm cảm giác ngạc nhiên và tự do tương tự mà cô ấy cảm thấy khi du lịch. Cô ấy tin tưởng vào việc làm cho du lịch trở nên dễ tiếp cận và thú vị cho mọi người.",
      icon: SparklesIcon,
    },
  ],
};

export const benefits = [benefitOne, benefitTwo];