import { HomeClient } from '@/components/home-client'

// Server Component — no 'use client' here.
// dynamic({ ssr: false }) only works correctly inside Server Components.
export default function Home() {
  return <HomeClient />
}
