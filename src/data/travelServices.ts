export interface TravelService {
  id: string;
  title_en: string;
  title_vi: string;
  description_en: string;
  description_vi: string;
  price: string;
  price_vi: string;
  duration: string;
  duration_vi: string;
  features_en: string[];
  features_vi: string[];
  category_en: string;
  category_vi: string;
  image: string;
  serviceUrl?: string;
}

export const travelServices: TravelService[] = [
  {
    id: "consultation-free",
    title_en: "Free Travel Consultation",
    title_vi: "Tư vấn Du lịch Miễn phí",
    description_en: "Not sure where to go or what to do? I'll help you discover the perfect destination based on your preferences, whether you want snowy mountains, cultural experiences, or specific countries like Switzerland.",
    description_vi: "Chưa biết muốn đi đâu hoặc làm gì? Mình sẽ giúp bạn khám phá điểm đến hoàn hảo dựa trên sở thích, dù bạn muốn núi tuyết, trải nghiệm văn hóa, hay các quốc gia cụ thể như Thụy Sĩ.",
    price: "Free",
    price_vi: "Miễn phí",
    duration: "30-60 minutes",
    duration_vi: "30-60 phút",
    features_en: [
      "Destination recommendations (3-4 countries)",
      "Overview of each country's highlights",
      "Multi-country itinerary options",
      "Cultural insights and local tips"
    ],
    features_vi: [
      "Gợi ý điểm đến (3-4 quốc gia)",
      "Tổng quan điểm nổi bật mỗi nước",
      "Lựa chọn hành trình đa quốc gia",
      "Hiểu biết văn hóa và mẹo địa phương"
    ],
    category_en: "Consultation",
    category_vi: "Tư vấn",
    image: "/img/in-budapest.jpg"
  },
  {
    id: "basic-itinerary",
    title_en: "Basic Travel Plan",
    title_vi: "Kế hoạch Du lịch Cơ bản",
    description_en: "A detailed 4-day, 3-night itinerary with all the essentials: transportation, activities, dining, and accommodations. Includes photos and outfit suggestions for your social media moments.",
    description_vi: "Lịch trình chi tiết 4 ngày 3 đêm với đầy đủ yếu tố: di chuyển, hoạt động, ăn uống và chỗ ở. Bao gồm hình ảnh và gợi ý trang phục cho những khoảnh khắc sống ảo.",
    price: "£50",
    price_vi: "£50",
    duration: "4 days, 3 nights",
    duration_vi: "4 ngày 3 đêm",
    features_en: [
      "Complete itinerary with times and addresses",
      "Restaurant recommendations with prices",
      "Transportation details and routes",
      "Photo locations for social media",
      "Outfit and photography suggestions"
    ],
    features_vi: [
      "Lịch trình hoàn chỉnh với giờ và địa chỉ",
      "Gợi ý nhà hàng với giá cả",
      "Chi tiết phương tiện và tuyến đường",
      "Địa điểm chụp ảnh sống ảo",
      "Gợi ý trang phục và chụp ảnh"
    ],
    category_en: "Planning",
    category_vi: "Lập kế hoạch",
    image: "/img/chelsea-in-bloom.jpg"
  },
  {
    id: "premium-itinerary",
    title_en: "Premium Detailed Plan",
    title_vi: "Kế hoạch Chi tiết Cao cấp",
    description_en: "Everything in the basic plan plus: activity booking assistance, opening hours, ticket booking help, extensive photo pose guides, and famous Instagram spots with detailed photography tips.",
    description_vi: "Tất cả trong gói cơ bản cộng thêm: hỗ trợ đặt hoạt động, giờ mở cửa, giúp đặt vé, hướng dẫn pose ảnh toàn diện, và các điểm Instagram nổi tiếng với mẹo chụp ảnh chi tiết.",
    price: "£100",
    price_vi: "£100",
    duration: "4+ days",
    duration_vi: "4+ ngày",
    features_en: [
      "All basic plan features",
      "Activity booking assistance",
      "Opening hours and ticket booking",
      "Extensive pose guides and photo angles",
      "Famous Instagram spots with tips",
      "Multiple outfit suggestions per location"
    ],
    features_vi: [
      "Tất cả tính năng gói cơ bản",
      "Hỗ trợ đặt hoạt động",
      "Giờ mở cửa và đặt vé",
      "Hướng dẫn pose và góc chụp toàn diện",
      "Điểm Instagram nổi tiếng với mẹo",
      "Nhiều gợi ý trang phục cho mỗi địa điểm"
    ],
    category_en: "Planning",
    category_vi: "Lập kế hoạch",
    image: "/img/in-venice-carnival.jpg"
  },
  {
    id: "personalized-itinerary",
    title_en: "Personalized Custom Plan",
    title_vi: "Kế hoạch Cá nhân hóa",
    description_en: "A completely customized itinerary based on your personal interview and preferences. Whether you love nature or cities, I'll design the perfect trip that matches your unique style and interests.",
    description_vi: "Lịch trình hoàn toàn tùy chỉnh dựa trên phỏng vấn cá nhân và sở thích. Dù bạn thích thiên nhiên hay thành phố, mình sẽ thiết kế chuyến đi hoàn hảo phù hợp với phong cách và sở thích riêng của bạn.",
    price: "£150",
    price_vi: "£150",
    duration: "Custom length",
    duration_vi: "Độ dài tùy chỉnh",
    features_en: [
      "Personal consultation interview",
      "Custom itinerary based on your preferences",
      "Nature vs. city balance according to your taste",
      "Unique experiences not found in standard guides",
      "All premium plan features included"
    ],
    features_vi: [
      "Phỏng vấn tư vấn cá nhân",
      "Lịch trình tùy chỉnh theo sở thích",
      "Cân bằng thiên nhiên vs thành phố theo gu",
      "Trải nghiệm độc đáo không có trong hướng dẫn thông thường",
      "Bao gồm tất cả tính năng gói cao cấp"
    ],
    category_en: "Planning",
    category_vi: "Lập kế hoạch",
    image: "/img/Kandersteg.jpg"
  },
  {
    id: "visa-support",
    title_en: "UK Visa Application Support",
    title_vi: "Hỗ trợ Xin Visa Anh",
    description_en: "Specialized support for UK visa applications, which can be quite challenging. I'll guide you through the entire process based on my experience and knowledge of what works.",
    description_vi: "Hỗ trợ chuyên biệt cho đơn xin visa Anh, có thể khá khó khăn. Mình sẽ hướng dẫn bạn qua toàn bộ quy trình dựa trên kinh nghiệm và kiến thức về những gì hiệu quả.",
    price: "£50 per person",
    price_vi: "£50 mỗi người",
    duration: "Full process support",
    duration_vi: "Hỗ trợ toàn bộ quy trình",
    features_en: [
      "Complete visa application guidance",
      "Document preparation assistance",
      "Application review and feedback",
      "Tips for successful applications",
      "Based on proven successful methods"
    ],
    features_vi: [
      "Hướng dẫn hoàn chỉnh đơn xin visa",
      "Hỗ trợ chuẩn bị tài liệu",
      "Xem xét và góp ý đơn",
      "Mẹo cho đơn thành công",
      "Dựa trên phương pháp đã được chứng minh"
    ],
    category_en: "Support",
    category_vi: "Hỗ trợ",
    image: "/img/Doumo-Milan.jpg"
  },
  {
    id: "personal-guide",
    title_en: "Personal Guide Service",
    title_vi: "Dịch vụ Hướng dẫn Cá nhân",
    description_en: "Join me for a day of exploration! I'll personally guide you to amazing locations, take professional photos with quality cameras, and ensure you get those perfect Instagram-worthy shots. All my expenses covered.",
    description_vi: "Cùng mình khám phá trong một ngày! Mình sẽ cá nhân hướng dẫn bạn đến những địa điểm tuyệt vời, chụp ảnh chuyên nghiệp với máy chất lượng cao, và đảm bảo bạn có những shot hoàn hảo xứng đáng Instagram. Tất cả chi phí của mình được trang trải.",
    price: "£200 per day",
    price_vi: "£200 mỗi ngày",
    duration: "Full day",
    duration_vi: "Cả ngày",
    features_en: [
      "Personal guide for the entire day",
      "Professional photography service",
      "Quality camera and equipment",
      "Perfect angles and poses guidance",
      "All guide expenses covered",
      "Customized locations based on your preferences"
    ],
    features_vi: [
      "Hướng dẫn viên cá nhân cả ngày",
      "Dịch vụ chụp ảnh chuyên nghiệp",
      "Máy và thiết bị chất lượng cao",
      "Hướng dẫn góc chụp và pose hoàn hảo",
      "Tất cả chi phí hướng dẫn được trang trải",
      "Địa điểm tùy chỉnh theo sở thích của bạn"
    ],
    category_en: "Experience",
    category_vi: "Trải nghiệm",
    image: "/img/in-budapest.jpg"
  }
];