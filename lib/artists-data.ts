export type ArtistStatus = 'نشط' | 'معلق' | 'غير نشط'

export interface Artist {
  id: number
  name: string
  specialty: string
  municipality: string
  status: ArtistStatus
}

const artistsData: Artist[] = [
  { id: 1, name: 'محمد بن عيسى', specialty: 'فنون تشكيلية', municipality: 'خنشلة', status: 'نشط' },
  { id: 2, name: 'فاطمة الزهراء بوزيد', specialty: 'خط عربي', municipality: 'قايس', status: 'نشط' },
  { id: 3, name: 'عبد الرحمن شريف', specialty: 'نحت', municipality: 'بغاي', status: 'معلق' },
  { id: 4, name: 'نورة بن حمادي', specialty: 'رسم زيتي', municipality: 'خنشلة', status: 'نشط' },
  { id: 5, name: 'يوسف مرابط', specialty: 'تصوير فوتوغرافي', municipality: 'الحامة', status: 'غير نشط' },
  { id: 6, name: 'أمينة تواتي', specialty: 'فنون تشكيلية', municipality: 'ششار', status: 'نشط' },
  { id: 7, name: 'كريم بوعلام', specialty: 'أدب وشعر', municipality: 'طامزة', status: 'معلق' },
  { id: 8, name: 'سارة بلخير', specialty: 'خزف تقليدي', municipality: 'أولاد رشاش', status: 'نشط' },
  { id: 9, name: 'عمار حداد', specialty: 'موسيقى تراثية', municipality: 'خنشلة', status: 'نشط' },
  { id: 10, name: 'ليلى بن ناصر', specialty: 'مسرح', municipality: 'عين الطويلة', status: 'غير نشط' },
]

export async function getArtists(): Promise<Artist[]> {
  return artistsData
}
