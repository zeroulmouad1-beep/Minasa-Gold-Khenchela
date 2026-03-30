'use client'

import { useEffect, useState } from 'react'
import { AdminGuard } from '@/lib/auth-context'
import { AdminShell } from '@/components/admin/admin-shell'
import { isMockMode } from '@/lib/firestore-helpers'
import { mockGetCounts } from '@/lib/mock-data'
import { db } from '@/lib/firebase'
import { collection, getCountFromServer } from 'firebase/firestore'
import { Newspaper, Settings, Calendar, TrendingUp } from 'lucide-react'

const COPPER = '#B87333'
const COPPER_LIGHT = '#D4956A'
const INDIGO_MEDIUM = '#1E293B'
const INDIGO_LIGHT = '#334155'

function DashboardContent() {
  const [counts, setCounts] = useState({ news: 0, services: 0, events: 0 })
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchCounts() {
      try {
        if (isMockMode) {
          setCounts(mockGetCounts())
        } else if (db) {
          const [newsSnap, servicesSnap, eventsSnap] = await Promise.all([
            getCountFromServer(collection(db, 'news')),
            getCountFromServer(collection(db, 'services')),
            getCountFromServer(collection(db, 'events')),
          ])
          setCounts({
            news: newsSnap.data().count,
            services: servicesSnap.data().count,
            events: eventsSnap.data().count,
          })
        }
      } catch {
        setCounts({ news: 0, services: 0, events: 0 })
      } finally {
        setLoading(false)
      }
    }
    fetchCounts()
  }, [])

  const cards = [
    { label: 'الأخبار', count: counts.news, icon: Newspaper, href: '/admin/news' },
    { label: 'الخدمات', count: counts.services, icon: Settings, href: '/admin/services' },
    { label: 'الفعاليات', count: counts.events, icon: Calendar, href: '/admin/events' },
  ]

  return (
    <AdminShell>
      <div className="max-w-5xl mx-auto">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-white mb-2" style={{ fontFamily: 'Tajawal, sans-serif' }}>
            مرحباً بك في لوحة الإدارة
          </h2>
          <p className="text-sm" style={{ color: '#94A3B8', fontFamily: 'Amiri, serif' }}>
            إدارة محتوى منصة قطاع الثقافة والفنون - خنشلة
          </p>
        </div>

        {isMockMode && (
          <div className="mb-6 p-3 rounded-lg flex items-center gap-2 text-sm" style={{ backgroundColor: 'rgba(184, 115, 51, 0.12)', border: '1px solid rgba(184, 115, 51, 0.3)', color: '#D4956A', fontFamily: 'Tajawal, sans-serif' }}>
            <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: '#B87333' }} />
            وضع المعاينة — البيانات تجريبية ولن تُحفظ بعد إعادة التحميل
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          {cards.map((card) => {
            const Icon = card.icon
            return (
              <a
                key={card.label}
                href={card.href}
                className="p-5 rounded-xl border transition-all duration-300 hover:scale-[1.02] block"
                style={{ backgroundColor: INDIGO_MEDIUM, borderColor: INDIGO_LIGHT }}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${COPPER}20` }}>
                    <Icon size={20} style={{ color: COPPER }} />
                  </div>
                  <TrendingUp size={16} style={{ color: '#22C55E' }} />
                </div>
                <p className="text-2xl font-bold text-white mb-1" style={{ fontFamily: 'Tajawal, sans-serif' }}>
                  {loading ? '...' : card.count}
                </p>
                <p className="text-xs" style={{ color: '#94A3B8', fontFamily: 'Tajawal, sans-serif' }}>
                  إجمالي {card.label}
                </p>
              </a>
            )
          })}
        </div>

        <div className="rounded-xl border p-6" style={{ backgroundColor: INDIGO_MEDIUM, borderColor: INDIGO_LIGHT }}>
          <h3 className="text-lg font-bold text-white mb-4" style={{ fontFamily: 'Tajawal, sans-serif' }}>
            دليل سريع
          </h3>
          <div className="space-y-3">
            {[
              { text: 'إضافة أخبار جديدة من قسم الأخبار', icon: Newspaper },
              { text: 'إدارة الخدمات الإلكترونية المتاحة للمواطنين', icon: Settings },
              { text: 'إضافة وتعديل الفعاليات الثقافية القادمة', icon: Calendar },
            ].map((item, i) => {
              const Icon = item.icon
              return (
                <div key={i} className="flex items-center gap-3 p-3 rounded-lg" style={{ backgroundColor: `${COPPER}08` }}>
                  <Icon size={16} style={{ color: COPPER_LIGHT }} />
                  <span className="text-sm" style={{ color: '#CBD5E1', fontFamily: 'Tajawal, sans-serif' }}>
                    {item.text}
                  </span>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </AdminShell>
  )
}

export default function AdminDashboardPage() {
  return (
    <AdminGuard>
      <DashboardContent />
    </AdminGuard>
  )
}
