export interface Project {
  id: string;
  title_en: string;
  title_vi: string;
  description_en: string;
  description_vi: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  articleUrl?: string;
  category_en: string;
  category_vi: string;
}

export const projects: Project[] = [
  {
    id: "1",
    title_en: "European Cultural Immersion Tours",
    title_vi: "Tour du lịch văn hóa châu Âu",
    description_en:
      "Designed and led 15 cultural immersion experiences across Europe, covering 8 countries including Germany, France, Italy, and Spain. Created personalized itineraries focusing on hidden local gems, authentic cultural experiences, and freedom-focused travel. Achieved 95% client satisfaction with repeat booking rate of 70%.",
    description_vi:
      "Thiết kế và dẫn đầu 15 trải nghiệm hòa nhập văn hóa khắp châu Âu, bao gồm 8 quốc gia như Đức, Pháp, Ý và Tây Ban Nha. Tạo lịch trình cá nhân hóa tập trung vào những viên ngọc ẩn của địa phương, trải nghiệm văn hóa chân thực và du lịch tự do. Đạt 95% khách hàng hài lòng với tỷ lệ đặt lại 70%.",
    technologies: [
      "Cultural Research",
      "Local Networking",
      "Itinerary Planning",
      "Language Skills",
      "Photography"
    ],
    articleUrl: "/blog/european-cultural-tours",
    category_en: "cultural exploration",
    category_vi: "khám phá văn hóa"
  },
  {
    id: "2",
    title_en: "Korean Cultural Discovery Journey",
    title_vi: "Hành trình khám phá văn hóa Hàn Quốc",
    description_en:
      "Led comprehensive cultural exploration of South Korea, showcasing modern marvels and traditional heritage. Documented unique experiences through photography and storytelling, inspiring 500+ followers to explore Korean culture. Created detailed travel guides covering K-pop culture, modern architecture, and local cuisine experiences.",
    description_vi:
      "Dẫn đầu cuộc khám phá văn hóa toàn diện về Hàn Quốc, trưng bày những kỳ quan hiện đại và di sản truyền thống. Ghi lại những trải nghiệm độc đáo thông qua nhiếp ảnh và kể chuyện, truyền cảm hứng cho hơn 500 người theo dõi khám phá văn hóa Hàn Quốc. Tạo hướng dẫn du lịch chi tiết về văn hóa K-pop, kiến trúc hiện đại và trải nghiệm ẩm thực địa phương.",
    technologies: [
      "Cultural Documentation",
      "Travel Photography",
      "Social Media",
      "Content Creation",
      "Cultural Research"
    ],
    articleUrl: "/blog/korean-cultural-journey",
    category_en: "cultural exploration",
    category_vi: "khám phá văn hóa"
  },
  {
    id: "3",
    title_en: "European Hidden Gems Discovery",
    title_vi: "Khám phá những viên ngọc ẩn châu Âu",
    description_en:
      "Curated and documented 50+ off-the-beaten-path destinations across 12 European countries. Specialized in discovering authentic local experiences, family-run establishments, and unique cultural sites missed by mainstream tourism. Created detailed travel resources helping 200+ travelers experience Europe beyond typical tourist attractions.",
    description_vi:
      "Tuyển chọn và ghi lại hơn 50 điểm đến ít được biết đến trên 12 quốc gia châu Âu. Chuyên khám phá những trải nghiệm địa phương chân thực, các cơ sở gia đình và địa điểm văn hóa độc đáo mà du lịch chính thống bỏ lỡ. Tạo tài nguyên du lịch chi tiết giúp hơn 200 du khách trải nghiệm châu Âu ngoài các điểm thu hút khách du lịch thông thường.",
    technologies: [
      "Local Research",
      "Travel Documentation",
      "Cultural Networking",
      "Photography",
      "Content Creation"
    ],
    articleUrl: "/blog/european-hidden-gems",
    category_en: "destination discovery",
    category_vi: "khám phá điểm đến"
  },
  {
    id: "4",
    title_en: "Personalized Europe Travel Consulting",
    title_vi: "Tư vấn du lịch cá nhân hóa châu Âu",
    description_en:
      "Launched personalized travel consulting service helping 100+ clients plan their European adventures. Specialized in matching travel experiences to individual interests, budgets, and travel styles. Achieved 90% client satisfaction with custom itineraries focusing on cultural immersion and authentic local experiences.",
    description_vi:
      "Ra mắt dịch vụ tư vấn du lịch cá nhân hóa giúp hơn 100 khách hàng lên kế hoạch cho cuộc phiêu lưu châu Âu. Chuyên kết hợp trải nghiệm du lịch với sở thích cá nhân, ngân sách và phong cách du lịch. Đạt 90% khách hàng hài lòng với các lịch trình tùy chỉnh tập trung vào hòa nhập văn hóa và trải nghiệm địa phương chân thực.",
    technologies: [
      "Client Consultation",
      "Itinerary Planning",
      "Cultural Research",
      "Budget Optimization"
    ],
    articleUrl: "/blog/personalized-travel-consulting",
    category_en: "travel consulting",
    category_vi: "tư vấn du lịch"
  },
  {
    id: "5",
    title_en: "Travel Content Creation & Storytelling",
    title_vi: "Tạo nội dung và kể chuyện du lịch",
    description_en:
      "Created engaging travel content documenting European adventures, reaching 5,000+ followers across social platforms. Specialized in authentic storytelling that inspires others to explore with curiosity and freedom. Developed visual narratives showcasing the joy of discovery and cultural connections.",
    description_vi:
      "Tạo nội dung du lịch hấp dẫn ghi lại những cuộc phiêu lưu châu Âu, tiếp cận hơn 5.000 người theo dõi trên các nền tảng xã hội. Chuyên về việc kể chuyện chân thực truyền cảm hứng cho người khác khám phá với sự tò mò và tự do. Phát triển các câu chuyện trực quan thể hiện niềm vui khám phá và kết nối văn hóa.",
    technologies: [
      "Content Creation",
      "Photography",
      "Social Media",
      "Storytelling",
      "Video Editing"
    ],
    category_en: "content & storytelling",
    category_vi: "nội dung & kể chuyện"
  },
  {
    id: "6",
    title_en: "European Adventure Planning System",
    title_vi: "Hệ thống lên kế hoạch phiêu lưu châu Âu",
    description_en:
      "Developed systematic approach to European travel planning, creating templates for different travel styles and budgets. Successfully planned 50+ unique adventures across 15 European countries, optimizing for authentic experiences, cultural discovery, and personal freedom. Streamlined consultation process reducing planning time by 60%.",
    description_vi:
      "Phát triển phương pháp hệ thống cho việc lên kế hoạch du lịch châu Âu, tảo các mẫu cho các phong cách và ngân sách du lịch khác nhau. Lên kế hoạch thành công hơn 50 cuộc phiêu lưu độc đáo trên 15 quốc gia châu Âu, tối ưu hóa cho trải nghiệm chân thực, khám phá văn hóa và tự do cá nhân. Tối ưu hóa quy trình tư vấn giảm thời gian lên kế hoạch 60%.",
    technologies: [
      "Travel Planning Tools",
      "Route Optimization",
      "Budget Management",
      "Cultural Research",
      "Client Management"
    ],
    category_en: "travel planning",
    category_vi: "lên kế hoạch du lịch"
  }
];
