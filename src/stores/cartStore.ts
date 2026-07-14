/**
 * Moodita Cart Store — Zustand
 * 
 * Handles client-side cart state with localStorage persistence.
 * Used by the shop, product pages, and cart drawer.
 */
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export interface CartItem {
  id: string
  slug: string
  title: string
  price: number
  image: string
  quantity: number
  variantLabel?: string
  variantId?: string
}

interface CartStore {
  items: CartItem[]
  isOpen: boolean

  // Actions
  addItem: (item: Omit<CartItem, 'quantity'>) => void
  removeItem: (id: string) => void
  updateQuantity: (id: string, quantity: number) => void
  clearCart: () => void
  toggleCart: () => void
  openCart: () => void
  closeCart: () => void

  // Computed
  totalItems: () => number
  totalPrice: () => number
}

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      isOpen: false,

      addItem: (newItem) => {
        set((state) => {
          const key = newItem.variantId
            ? `${newItem.id}-${newItem.variantId}`
            : newItem.id

          const existing = state.items.find((item) => {
            const itemKey = item.variantId
              ? `${item.id}-${item.variantId}`
              : item.id
            return itemKey === key
          })

          if (existing) {
            return {
              items: state.items.map((item) => {
                const itemKey = item.variantId
                  ? `${item.id}-${item.variantId}`
                  : item.id
                return itemKey === key
                  ? { ...item, quantity: item.quantity + 1 }
                  : item
              }),
              isOpen: true,
            }
          }

          return {
            items: [...state.items, { ...newItem, quantity: 1 }],
            isOpen: true,
          }
        })
      },

      removeItem: (id) =>
        set((state) => ({
          items: state.items.filter((item) => item.id !== id),
        })),

      updateQuantity: (id, quantity) =>
        set((state) => ({
          items:
            quantity <= 0
              ? state.items.filter((item) => item.id !== id)
              : state.items.map((item) =>
                  item.id === id ? { ...item, quantity } : item
                ),
        })),

      clearCart: () => set({ items: [] }),
      toggleCart: () => set((state) => ({ isOpen: !state.isOpen })),
      openCart: () => set({ isOpen: true }),
      closeCart: () => set({ isOpen: false }),

      totalItems: () =>
        get().items.reduce((sum, item) => sum + item.quantity, 0),

      totalPrice: () =>
        get().items.reduce((sum, item) => sum + item.price * item.quantity, 0),
    }),
    {
      name: 'moodita-cart',
      // Only persist items, not the drawer open state
      partialize: (state) => ({ items: state.items }),
    }
  )
)
