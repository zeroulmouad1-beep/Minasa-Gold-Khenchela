// Menu Items Configuration
export const menuItems = [
  {
    id: 'institutions',
    label: 'المؤسسات الثقافية',
    items: [
      { label: 'المتحف العمومي الوطني', href: '/institutions/museum' },
      { label: 'دار الثقافة', href: '/institutions/cultural-house' },
      { label: 'المكتبة الرئيسية للمطالعة العمومية', href: '/institutions/library' },
      { label: 'السيناماتيك', href: '/institutions/cinematheque' },
    ],
  },
  {
    id: 'directorate',
    label: 'مصالح المديرية',
    items: [
      { label: 'مصلحة الفنون والآداب', href: '/directorate/arts' },
      { label: 'مصلحة النشاطات الثقافية', href: '/directorate/activities' },
      { label: 'مصلحة التراث الثقافي', href: '/directorate/heritage' },
    ],
  },
  {
    id: 'services',
    label: 'الخدمات',
    items: [
      { label: 'طلب البطاقة المهنية', href: '/services/professional-card' },
      { label: 'بطاقة فنان', href: '/services/artist-card' },
      { label: 'بوابة الخدمات', href: '/services/portal' },
    ],
  },
]

// Hero Slider Items
export const heroSlides = [
  {
    id: 1,
    title: 'نافذتكم على الإبداع والتراث الخنشلي',
    subtitle: 'اكتشفوا ثراء الفن والثقافة في الحضارة الخنشلية',
    image: '/images/chelia.jpg',
    alt: 'جبال شيليا الخضراء',
  },
  {
    id: 2,
    title: 'قصر الكاهنة - رمز التراث الخنشلي',
    subtitle: 'شاهد على عظمة الحضارة والتاريخ العميق',
    image: '/images/palais-kahina.jpg',
    alt: 'قصر الكاهنة التاريخي',
  },
  {
    id: 3,
    title: 'منصة متكاملة للخدمات الثقافية',
    subtitle: 'نحو تطوير قطاع الفنون والثقافة في الجزائر',
    image: '/images/heritage.jpg',
    alt: 'التراث الثقافي الخنشلي',
  },
]

// Quick Access Items
export const quickAccessItems = [
  {
    id: 1,
    title: 'خلية الإصغاء',
    description: 'تواصل مباشر مع الخدمات والاستفسارات',
    icon: 'headphones',
    href: '/listening-cell',
  },
  {
    id: 2,
    title: 'الخريطة الأثرية',
    description: 'اكتشف المواقع الأثرية والثقافية',
    icon: 'map',
    href: '/archaeological-map',
  },
  {
    id: 3,
    title: 'قوانين وتشريعات',
    description: 'الإطار القانوني للخدمات الثقافية',
    icon: 'document',
    href: '/laws',
  },
  {
    id: 4,
    title: 'المهرجانات الثقافية',
    description: 'أحدث الفعاليات والمهرجانات',
    icon: 'star',
    href: '/festivals',
  },
]

// Services Hub Items
export const servicesHubItems = [
  {
    id: 1,
    title: 'طلب البطاقة المهنية',
    description: 'احصل على بطاقتك المهنية للعاملين في القطاع الثقافي',
    icon: 'card',
    cta: 'قدّم الآن',
    href: '/services/professional-card',
  },
  {
    id: 2,
    title: 'بطاقة فنان',
    description: 'تسجيل وتوثيق المواهب الفنية والإبداعية',
    icon: 'palette',
    cta: 'قدّم الآن',
    href: '/services/artist-card',
  },
  {
    id: 3,
    title: 'استفسارات القطاع',
    description: 'احصل على إجابات لجميع أسئلتك حول الخدمات',
    icon: 'help',
    cta: 'أرسل استفسار',
    href: '/services/inquiries',
  },
  {
    id: 4,
    title: 'حجوزات الفعاليات',
    description: 'احجز تذاكرك للفعاليات والحفلات الثقافية',
    icon: 'ticket',
    cta: 'احجز الآن',
    href: '/services/bookings',
  },
]

// Footer Contact
export const footerContact = {
  address: 'خنشلة، الجزائر',
  phone: '+213 28 XX XX XX',
  email: 'info@khenchela-culture.dz',
  hours: 'السبت - الخميس: 08:00 - 16:00',
}

// Social Media
export const socialLinks = [
  {
    platform: 'facebook',
    url: 'https://facebook.com/khenchela-culture',
    label: 'فيسبوك',
  },
  {
    platform: 'instagram',
    url: 'https://instagram.com/khenchela-culture',
    label: 'إنستغرام',
  },
  {
    platform: 'twitter',
    url: 'https://twitter.com/khenchela-culture',
    label: 'تويتر',
  },
  {
    platform: 'youtube',
    url: 'https://youtube.com/khenchela-culture',
    label: 'يوتيوب',
  },
]
