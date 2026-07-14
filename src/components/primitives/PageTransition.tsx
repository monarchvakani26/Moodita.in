'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { usePathname } from 'next/navigation'

/**
 * Cinematic page transition wrapper.
 * Uses a fade + subtle vertical shift — no bouncy spring.
 * Placed in the root layout to wrap all route content.
 */
export function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -8 }}
        transition={{
          duration: 0.45,
          ease: [0.16, 1, 0.3, 1],
        }}
        style={{ willChange: 'opacity, transform' }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}

/**
 * Loading curtain — shown between route navigations as an instant overlay.
 * Prevents the white flash between routes.
 */
export function LoadingCurtain({ isVisible }: { isVisible: boolean }) {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className="fixed inset-0 z-[9998] bg-cream flex items-center justify-center"
        >
          {/* Moodita wordmark pulse */}
          <motion.span
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="font-display text-2xl text-ink-muted tracking-widest"
          >
            moodita
          </motion.span>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
