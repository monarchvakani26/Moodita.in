import type { Metadata } from 'next'
import { Lock } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Admin Login — Moodita',
  robots: { index: false, follow: false },
}

export default function AdminLoginPage() {
  return (
    <div className="min-h-screen bg-forest flex items-center justify-center section-padding">
      <div className="w-full max-w-sm">
        {/* Logo */}
        <div className="text-center mb-10">
          <p className="font-display text-3xl text-cream mb-2">moodita</p>
          <p className="font-sans text-xs text-cream/50 tracking-[0.2em] uppercase">Admin Panel</p>
        </div>

        {/* Card */}
        <div className="bg-cream/10 backdrop-blur-sm border border-cream/15 rounded-3xl p-8 shadow-soft-xl">
          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-terracotta/20 mx-auto mb-6">
            <Lock size={20} className="text-terracotta-light" />
          </div>

          <h1 className="font-display text-xl text-cream text-center mb-8">Sign In</h1>

          <form action="/api/auth/callback/credentials" method="POST" className="space-y-4">
            <div>
              <label htmlFor="admin-email" className="block font-sans text-xs text-cream/60 mb-2">
                Email
              </label>
              <input
                id="admin-email"
                name="email"
                type="email"
                required
                autoComplete="email"
                className="w-full bg-cream/10 border border-cream/20 text-cream placeholder:text-cream/30 rounded-xl px-4 py-3 text-sm font-sans focus:outline-none focus:ring-2 focus:ring-terracotta/40 transition-all"
                placeholder="hello@moodita.in"
              />
            </div>
            <div>
              <label htmlFor="admin-password" className="block font-sans text-xs text-cream/60 mb-2">
                Password
              </label>
              <input
                id="admin-password"
                name="password"
                type="password"
                required
                autoComplete="current-password"
                className="w-full bg-cream/10 border border-cream/20 text-cream placeholder:text-cream/30 rounded-xl px-4 py-3 text-sm font-sans focus:outline-none focus:ring-2 focus:ring-terracotta/40 transition-all"
                placeholder="••••••••"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-terracotta text-cream py-3.5 rounded-xl font-sans text-sm font-medium hover:bg-terracotta-dark transition-colors duration-200 mt-2"
            >
              Sign In
            </button>
          </form>
        </div>

        <p className="text-center font-sans text-xs text-cream/30 mt-6">
          Moodita Admin · Protected Area
        </p>
      </div>
    </div>
  )
}
