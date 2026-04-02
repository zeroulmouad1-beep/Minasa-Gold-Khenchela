'use client'

import Link from 'next/link'
import { ArrowRight, Star, Music, BookOpen, Palette } from 'lucide-react'

const COPPER = '#B87333'
const COPPER_LIGHT = '#D4956A'
const INDIGO_DEEP = '#0F172A'

const festivals = [
  {
    id: 'child-welfare',
    title: 'المهرجان الثقافي الوطني لمصلحة الطفل',
    subtitle: 'مهرجان وطني',
    icon: Star,
  },
  {
    id: 'shawia-music',
    title: 'المهرجان الثقافي الوطني للموسيقى والأغنية الشاوية',
    subtitle: 'مهرجان وطني',
    icon: Music,
  },
  {
    id: 'reading',
    title: 'المهرجان الثقافي المحلي للقراءة',
    subtitle: 'مهرجان محلي',
    icon: BookOpen,
  },
  {
    id: 'folk-arts',
    title: 'المهرجان الثقافي المحلي للنشاطات والفنون الشعبية',
    subtitle: 'مهرجان محلي',
    icon: Palette,
  },
]

export default function FestivalsPage() {
  return (
    <div
      className="min-h-screen"
      dir="rtl"
      style={{ backgroundColor: INDIGO_DEEP }}
    >
      <div
        className="fixed inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23B87333' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div
        className="fixed top-0 right-0 w-[600px] h-[600px] opacity-20 pointer-events-none"
        style={{
          background: `radial-gradient(circle, ${COPPER}40 0%, transparent 70%)`,
        }}
      />

      <header className="relative z-10 py-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <Link
            href="/?enter=true"
            className="inline-flex items-center gap-2 text-gray-300 hover:text-white transition-colors duration-200 group"
          >
            <ArrowRight size={20} className="transition-transform duration-200 group-hover:translate-x-1" />
            <span className="text-sm font-medium">العودة للرئيسية</span>
          </Link>
        </div>
      </header>

      <main className="relative z-10 px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p
              className="text-sm font-semibold uppercase tracking-widest mb-4"
              style={{ color: COPPER }}
            >
              المهرجانات الثقافية
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-6">
              مهرجانات ولاية{' '}
              <span style={{ color: COPPER_LIGHT }}>خنشلة</span>
            </h1>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto font-light">
              اكتشف المهرجانات الثقافية الوطنية والمحلية التي تحتضنها ولاية خنشلة
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {festivals.map((festival) => {
              const FestivalIcon = festival.icon
              return (
                <a
                  key={festival.id}
                  href="#"
                  className="group rounded-2xl p-6 md:p-8 transition-all duration-500 hover:scale-[1.02] block"
                  style={{
                    backgroundColor: 'rgba(255,255,255,0.03)',
                    border: '2px solid rgba(255,255,255,0.08)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = COPPER
                    e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.06)'
                    e.currentTarget.style.boxShadow = `0 20px 50px -10px ${COPPER}20`
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'
                    e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.03)'
                    e.currentTarget.style.boxShadow = 'none'
                  }}
                >
                  <div className="flex items-start gap-4 md:gap-6">
                    <div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110"
                      style={{
                        backgroundColor: `${COPPER}20`,
                      }}
                    >
                      <FestivalIcon
                        size={26}
                        style={{ color: COPPER }}
                        className="transition-colors duration-300"
                      />
                    </div>
                    <div className="text-right">
                      <h2 className="text-xl md:text-2xl font-bold text-white mb-2 leading-tight transition-colors duration-300 group-hover:text-[#D4956A]">
                        {festival.title}
                      </h2>
                      <p className="text-xs font-medium" style={{ color: COPPER_LIGHT }}>
                        {festival.subtitle}
                      </p>
                    </div>
                  </div>
                </a>
              )
            })}
          </div>
        </div>
      </main>
    </div>
  )
}
