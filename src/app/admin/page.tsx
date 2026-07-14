import type { Metadata } from 'next'
import Link from 'next/link'
import {
  LayoutDashboard, FileText, Image, ShoppingBag, Tag,
  Users, MessageSquare, Mail, BarChart3, LogOut, Settings
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Dashboard — Moodita Admin',
  robots: { index: false, follow: false },
}

const STATS = [
  { label: 'Blog Posts', value: '12', change: '+2 this month', color: 'text-olive' },
  { label: 'Artworks', value: '38', change: '+5 this month', color: 'text-terracotta' },
  { label: 'Orders', value: '24', change: '₹48,200 total', color: 'text-forest' },
  { label: 'Subscribers', value: '341', change: '+18 this month', color: 'text-ink' },
]

const NAV_ITEMS = [
  { href: '/admin', icon: LayoutDashboard, label: 'Dashboard' },
  { href: '/admin/posts', icon: FileText, label: 'Blog Posts' },
  { href: '/admin/gallery', icon: Image, label: 'Gallery' },
  { href: '/admin/products', icon: ShoppingBag, label: 'Products' },
  { href: '/admin/orders', icon: ShoppingBag, label: 'Orders' },
  { href: '/admin/categories', icon: Tag, label: 'Categories' },
  { href: '/admin/users', icon: Users, label: 'Users' },
  { href: '/admin/comments', icon: MessageSquare, label: 'Comments' },
  { href: '/admin/newsletter', icon: Mail, label: 'Newsletter' },
  { href: '/admin/analytics', icon: BarChart3, label: 'Analytics' },
  { href: '/admin/settings', icon: Settings, label: 'Settings' },
]

export default function AdminDashboard() {
  return (
    <div className="min-h-screen bg-cream flex">
      {/* Sidebar */}
      <aside className="w-64 bg-forest min-h-screen flex flex-col shrink-0" role="navigation" aria-label="Admin navigation">
        <div className="p-6 border-b border-cream/10">
          <p className="font-display text-xl text-cream">moodita</p>
          <p className="font-sans text-[10px] text-cream/40 tracking-[0.15em] uppercase mt-0.5">Admin Panel</p>
        </div>

        <nav className="flex-1 p-4 space-y-1">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-cream/70 hover:text-cream hover:bg-cream/10 transition-all duration-200 font-sans text-sm group"
            >
              <item.icon size={16} className="shrink-0 group-hover:text-terracotta-light transition-colors" />
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="p-4 border-t border-cream/10">
          <button className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-cream/50 hover:text-cream hover:bg-cream/10 transition-all duration-200 font-sans text-sm w-full">
            <LogOut size={16} /> Sign Out
          </button>
        </div>
      </aside>

      {/* Main */}
      <main className="flex-1 p-8" id="admin-content">
        <div className="mb-8">
          <h1 className="font-display text-2xl text-ink mb-1">Good morning ✦</h1>
          <p className="font-sans text-sm text-ink-muted">Here&apos;s what&apos;s happening with Moodita today.</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {STATS.map((stat) => (
            <div key={stat.label} className="bg-paper rounded-2xl p-6 border border-border">
              <p className="font-sans text-xs text-ink-muted tracking-wide mb-2">{stat.label}</p>
              <p className={`font-display text-3xl text-ink mb-1 ${stat.color}`}>{stat.value}</p>
              <p className="font-sans text-xs text-ink-muted">{stat.change}</p>
            </div>
          ))}
        </div>

        {/* Quick actions */}
        <div className="mb-10">
          <h2 className="font-display text-lg text-ink mb-4">Quick Actions</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { label: 'Write a Post', href: '/admin/posts/new', icon: FileText, color: 'hover:bg-olive/10 hover:border-olive/30' },
              { label: 'Upload Artwork', href: '/admin/gallery/new', icon: Image, color: 'hover:bg-terracotta/10 hover:border-terracotta/30' },
              { label: 'Add Product', href: '/admin/products/new', icon: ShoppingBag, color: 'hover:bg-forest/10 hover:border-forest/30' },
              { label: 'View Orders', href: '/admin/orders', icon: BarChart3, color: 'hover:bg-ink/5 hover:border-ink/20' },
            ].map((action) => (
              <Link
                key={action.href}
                href={action.href}
                className={`flex items-center gap-3 p-4 rounded-xl bg-cream border border-border transition-all duration-200 ${action.color} group`}
              >
                <action.icon size={18} className="text-ink-muted group-hover:text-ink shrink-0" />
                <span className="font-sans text-sm text-ink-soft">{action.label}</span>
              </Link>
            ))}
          </div>
        </div>

        {/* Recent activity */}
        <div>
          <h2 className="font-display text-lg text-ink mb-4">Recent Activity</h2>
          <div className="bg-paper rounded-2xl border border-border divide-y divide-border">
            {[
              { action: 'New order #1024', detail: 'Golden Hour Print — ₹1,200', time: '2h ago', type: 'order' },
              { action: 'New subscriber', detail: 'priya@example.com joined the newsletter', time: '4h ago', type: 'newsletter' },
              { action: 'Comment awaiting approval', detail: 'On "Kindness as a Legal Principle"', time: '6h ago', type: 'comment' },
              { action: 'Post published', detail: '"Why I Paint When Words Fail Me"', time: '1d ago', type: 'post' },
            ].map((item, i) => (
              <div key={i} className="flex items-center justify-between p-4">
                <div>
                  <p className="font-sans text-sm text-ink">{item.action}</p>
                  <p className="font-sans text-xs text-ink-muted">{item.detail}</p>
                </div>
                <span className="font-sans text-xs text-ink-muted shrink-0 ml-4">{item.time}</span>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}
