'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

/**
 * Framer Motion wrapped Next.js Link component.
 * Allows Server Components to render animated links without needing 'use client'.
 */
export const MotionLink = motion(Link)
