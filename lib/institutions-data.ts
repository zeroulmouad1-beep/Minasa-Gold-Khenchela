// Deep Indigo & Copper palette
export const COPPER = '#B87333'
export const COPPER_LIGHT = '#D4956A'
export const INDIGO_DEEP = '#0F172A'
export const INDIGO_MEDIUM = '#1E293B'
export const INDIGO_LIGHT = '#334155'
export const DEEP_GREEN = '#2D5A43'

export type IconName = 'palette' | 'film' | 'book-open' | 'music' | 'drama'

export interface Institution {
  id: string
  title: string
  subtitle?: string
  description: string
  fullDescription: string
  iconName: IconName
  image: string
  gallery: string[]
  iconBg: string
  ambientColor: string
  address: string
  phone: string
  email: string
  workingHours: string
}

export const institutions: Institution[] = [
  {
    id: 'museum',
    title: 'المتحف العمومي الوطني',
    subtitle: '(الاخوة الشهداء بولعزيز)',
    description: 'متحف الآثار والتراث الخنشلي',
    fullDescription: 'المتحف العمومي الوطني بخنشلة (الاخوة الشهداء بولعزيز) هو صرح ثقافي يحتضن كنوز التراث الخنشلي والآثار التاريخية العريقة. يضم المتحف مجموعات نادرة من القطع الأثرية التي تعود إلى حقب زمنية مختلفة، من العصر الروماني إلى الفترة الإسلامية، مما يجعله وجهة أساسية للباحثين والمهتمين بالتاريخ والحضارة.',
    iconName: 'palette',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1774793547954-h5WWAy5VWDHTLXGuoXioEKWpbVLqVH.png',
    gallery: [
      'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1774793547954-h5WWAy5VWDHTLXGuoXioEKWpbVLqVH.png',
    ],
    iconBg: COPPER,
    ambientColor: 'rgba(184, 115, 51, 0.15)',
    address: 'وسط المدينة، خنشلة، الجزائر',
    phone: '+213 32 XX XX XX',
    email: 'museum@culture-khenchela.dz',
    workingHours: 'السبت - الخميس: 09:00 - 17:00',
  },
  {
    id: 'cinema',
    title: 'قاعة السينيماتيك',
    description: '',
    fullDescription: 'قاعة السينيماتيك بخنشلة هي مركز ثقافي متميز يقدم عروضاً سينمائية متنوعة تشمل الأفلام الجزائرية والعربية والعالمية. تستضيف القاعة أيضاً مهرجانات سينمائية ومعارض فنية وورشات عمل للشباب المهتمين بصناعة الأفلام.',
    iconName: 'film',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1774795667583-TGPHZqsJcqyVXpUY9kWIQvHLg4CjFu.png',
    gallery: [
      'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1774795667583-TGPHZqsJcqyVXpUY9kWIQvHLg4CjFu.png',
    ],
    iconBg: INDIGO_LIGHT,
    ambientColor: 'rgba(51, 65, 85, 0.15)',
    address: 'شارع الاستقلال، خنشلة، الجزائر',
    phone: '+213 32 XX XX XX',
    email: 'cinema@culture-khenchela.dz',
    workingHours: 'يومياً: 14:00 - 22:00',
  },
  {
    id: 'library',
    title: 'المكتبة الرئيسية للمطالعة العمومية',
    subtitle: '(الشهيد صيد لعروس)',
    description: '',
    fullDescription: 'المكتبة الرئيسية للمطالعة العمومية بخنشلة (الشهيد صيد لعروس) تحتوي على آلاف الكتب والمراجع العلمية والأدبية. تضم المكتبة قسماً خاصاً بالمخطوطات النادرة والوثائق التاريخية، بالإضافة إلى قاعات للمطالعة ومساحات للدراسة والبحث.',
    iconName: 'book-open',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1774810625631-D7LXz11tS6JipsAEbz3zRkSScB8q9H.png',
    gallery: [
      'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1774810625631-D7LXz11tS6JipsAEbz3zRkSScB8q9H.png',
    ],
    iconBg: COPPER_LIGHT,
    ambientColor: 'rgba(212, 149, 106, 0.15)',
    address: 'حي النصر، خنشلة، الجزائر',
    phone: '+213 32 XX XX XX',
    email: 'library@culture-khenchela.dz',
    workingHours: 'السبت - الخميس: 08:00 - 18:00',
  },
  {
    id: 'culture-house',
    title: 'دار الثقافة',
    subtitle: '(علي سوايحي)',
    description: 'مركز الفنون والآداب',
    fullDescription: 'دار الثقافة (علي سوايحي) بخنشلة هي مركز ثقافي متعدد الأنشطة يحتضن الفعاليات الفنية والأدبية والثقافية. تضم الدار قاعات للعروض المسرحية والموسيقية، ومعارض للفنون التشكيلية، وورشات للإبداع الفني للشباب.',
    iconName: 'music',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1774869219177-9FA2lSqhYeac1F5z9G8fcynSqwJsRF.png',
    gallery: [
      'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1774869219177-9FA2lSqhYeac1F5z9G8fcynSqwJsRF.png',
    ],
    iconBg: COPPER,
    ambientColor: 'rgba(184, 115, 51, 0.15)',
    address: 'وسط المدينة، خنشلة، الجزائر',
    phone: '+213 32 XX XX XX',
    email: 'darethakafa@culture-khenchela.dz',
    workingHours: 'السبت - الخميس: 09:00 - 18:00',
  },
  {
    id: 'theater',
    title: 'مسرح الهواء الطلق',
    subtitle: '(حسينة لواج)',
    description: 'عروض مسرحية فنية',
    fullDescription: 'مسرح الهواء الطلق (حسينة لواج) بخنشلة هو فضاء فني مميز يستضيف العروض المسرحية والفنية المتنوعة. يتميز المسرح بتصميمه المعماري الفريد الذي يمزج بين الطابع التقليدي والحداثة، مما يجعله وجهة مثالية للفعاليات الثقافية الكبرى.',
    iconName: 'drama',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1774870644717-NBL1epahbVNZ3kIG7YNHqQtNKPB1EP.png',
    gallery: [
      'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1774870644717-NBL1epahbVNZ3kIG7YNHqQtNKPB1EP.png',
    ],
    iconBg: DEEP_GREEN,
    ambientColor: 'rgba(45, 90, 67, 0.15)',
    address: 'حي الفنانة رولية، خنشلة، الجزائر',
    phone: '+213 32 XX XX XX',
    email: 'theater@culture-khenchela.dz',
    workingHours: 'حسب جدول العروض',
  },
]

export function getInstitutionById(id: string): Institution | undefined {
  return institutions.find(inst => inst.id === id)
}
