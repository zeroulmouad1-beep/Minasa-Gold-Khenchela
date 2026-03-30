'use client'

import { AuthProvider, AdminGuard } from '@/lib/auth-context'

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <AuthProvider>
      {children}
    </AuthProvider>
  )
}
