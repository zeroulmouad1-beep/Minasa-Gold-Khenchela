import { notFound } from 'next/navigation'
import { InstitutionDetail } from '@/components/institution-detail'

// Valid institution IDs
const validIds = ['museum', 'cinema', 'library', 'culture-house', 'theater']

// Titles for metadata (no icons, just plain data)
const institutionTitles: Record<string, { title: string; description: string }> = {
  'museum': {
    title: 'المتحف الوطني',
    description: 'المتحف الوطني بخنشلة هو صرح ثقافي يحتضن كنوز التراث الخنشلي والآثار التاريخية العريقة.',
  },
  'cinema': {
    title: 'دار السينما',
    description: 'دار السينما بخنشلة هي مركز ثقافي متميز يقدم عروضاً سينمائية متنوعة.',
  },
  'library': {
    title: 'المكتبة الرئيسية',
    description: 'المكتبة الرئيسية للمطالعة العمومية بخنشلة تحتوي على آلاف الكتب والمراجع.',
  },
  'culture-house': {
    title: 'دار الثقافة',
    description: 'دار الثقافة علي سوايحي بخنشلة هي مركز ثقافي متعدد الأنشطة.',
  },
  'theater': {
    title: 'المسرح الجهوي',
    description: 'المسرح الجهوي بخنشلة هو فضاء فني مميز يستضيف العروض المسرحية والفنية.',
  },
}

interface PageProps {
  params: Promise<{ id: string }>
}

// Generate static params for all institutions
export function generateStaticParams() {
  return validIds.map((id) => ({ id }))
}

// Generate metadata for SEO
export async function generateMetadata({ params }: PageProps) {
  const { id } = await params
  const meta = institutionTitles[id]
  
  if (!meta) {
    return {
      title: 'المؤسسة غير موجودة',
    }
  }

  return {
    title: `${meta.title} | منصة الثقافة والفنون خنشلة`,
    description: meta.description,
  }
}

export default async function InstitutionPage({ params }: PageProps) {
  const { id } = await params

  if (!validIds.includes(id)) {
    notFound()
  }

  // Pass only the ID string to the client component
  return <InstitutionDetail institutionId={id} />
}
