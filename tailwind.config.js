/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // ── Core Palette ──────────────────────────────────
        cream:      '#FAF7F2',
        paper:      '#F0EBE1',
        parchment:  '#E8E0D4',
        ink:        '#1A1714',
        'ink-soft': '#3D3733',
        'ink-muted':'#6E6560',

        // ── Accent Palette ────────────────────────────────
        olive:      '#6B7C5E',
        'olive-light': '#8A9D7A',
        'olive-dark':  '#4A5A3E',

        terracotta:     '#C4714A',
        'terracotta-light': '#D9906C',
        'terracotta-dark':  '#A05535',

        forest:     '#2D4A3E',
        'forest-light': '#3D6456',
        'forest-dark':  '#1D3028',

        // ── UI tokens (map to semantic roles) ─────────────
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        border:     'var(--border)',
        ring:       'var(--ring)',
        muted:      { DEFAULT: 'var(--muted)', foreground: 'var(--muted-foreground)' },
        accent:     { DEFAULT: 'var(--accent)', foreground: 'var(--accent-foreground)' },
        card:       { DEFAULT: 'var(--card)', foreground: 'var(--card-foreground)' },
        primary:    { DEFAULT: 'var(--primary)', foreground: 'var(--primary-foreground)' },
        secondary:  { DEFAULT: 'var(--secondary)', foreground: 'var(--secondary-foreground)' },
        destructive:{ DEFAULT: 'var(--destructive)', foreground: 'var(--destructive-foreground)' },
        popover:    { DEFAULT: 'var(--popover)', foreground: 'var(--popover-foreground)' },
        input:      'var(--input)',
      },

      fontFamily: {
        serif:    ['var(--font-cormorant)', 'var(--font-playfair)', 'Georgia', 'serif'],
        display:  ['var(--font-playfair)', 'var(--font-cormorant)', 'serif'],
        sans:     ['var(--font-inter)', 'General Sans', 'system-ui', 'sans-serif'],
      },

      fontSize: {
        // Fluid clamp-based type scale
        'fluid-xs':  ['clamp(0.75rem, 1.5vw, 0.875rem)', { lineHeight: '1.5' }],
        'fluid-sm':  ['clamp(0.875rem, 2vw, 1rem)', { lineHeight: '1.6' }],
        'fluid-base':['clamp(1rem, 2.5vw, 1.125rem)', { lineHeight: '1.75' }],
        'fluid-lg':  ['clamp(1.125rem, 3vw, 1.375rem)', { lineHeight: '1.6' }],
        'fluid-xl':  ['clamp(1.375rem, 4vw, 1.875rem)', { lineHeight: '1.4' }],
        'fluid-2xl': ['clamp(1.875rem, 5vw, 2.625rem)', { lineHeight: '1.25' }],
        'fluid-3xl': ['clamp(2.25rem, 7vw, 3.75rem)', { lineHeight: '1.15' }],
        'fluid-4xl': ['clamp(3rem, 10vw, 5.5rem)', { lineHeight: '1.05' }],
        'fluid-hero':['clamp(3.5rem, 13vw, 8rem)', { lineHeight: '0.95' }],
      },

      spacing: {
        '18':  '4.5rem',
        '22':  '5.5rem',
        '30':  '7.5rem',
        '34':  '8.5rem',
        '38':  '9.5rem',
        '42':  '10.5rem',
        '128': '32rem',
        '144': '36rem',
      },

      borderRadius: {
        lg:  'var(--radius)',
        md:  'calc(var(--radius) - 2px)',
        sm:  'calc(var(--radius) - 4px)',
        '4xl': '2rem',
        '5xl': '2.5rem',
      },

      boxShadow: {
        'soft-sm':  '0 2px 16px 0 rgba(26,23,20,0.06)',
        'soft':     '0 4px 32px 0 rgba(26,23,20,0.08)',
        'soft-lg':  '0 8px 64px 0 rgba(26,23,20,0.10)',
        'soft-xl':  '0 16px 80px 0 rgba(26,23,20,0.12)',
        'glow-olive':'0 0 40px 0 rgba(107,124,94,0.15)',
        'glow-terra':'0 0 40px 0 rgba(196,113,74,0.15)',
      },

      backgroundImage: {
        'gradient-cream': 'linear-gradient(135deg, #FAF7F2 0%, #F0EBE1 100%)',
        'gradient-forest':'linear-gradient(135deg, #2D4A3E 0%, #1D3028 100%)',
        'gradient-warm':  'linear-gradient(180deg, #FAF7F2 0%, #F0EBE1 60%, #E8E0D4 100%)',
      },

      keyframes: {
        'grain': {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '10%':       { transform: 'translate(-2%, -3%)' },
          '30%':       { transform: 'translate(2%, 1%)' },
          '50%':       { transform: 'translate(-1%, 4%)' },
          '70%':       { transform: 'translate(3%, -1%)' },
          '90%':       { transform: 'translate(-2%, 2%)' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%':       { transform: 'translateY(-12px) rotate(2deg)' },
        },
        'shimmer': {
          '0%':   { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        'fade-up': {
          '0%':   { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'reveal-text': {
          '0%':   { clipPath: 'inset(0 100% 0 0)' },
          '100%': { clipPath: 'inset(0 0% 0 0)' },
        },
        'brush-stroke': {
          '0%':   { strokeDashoffset: '1000' },
          '100%': { strokeDashoffset: '0' },
        },
      },
      animation: {
        'grain':       'grain 8s steps(1) infinite',
        'float':       'float 6s ease-in-out infinite',
        'float-slow':  'float 9s ease-in-out infinite',
        'shimmer':     'shimmer 2s linear infinite',
        'fade-up':     'fade-up 0.6s cubic-bezier(0.16,1,0.3,1) forwards',
        'fade-in':     'fade-in 0.5s ease forwards',
        'reveal-text': 'reveal-text 0.8s cubic-bezier(0.16,1,0.3,1) forwards',
        'brush-stroke':'brush-stroke 1.5s cubic-bezier(0.16,1,0.3,1) forwards',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}
