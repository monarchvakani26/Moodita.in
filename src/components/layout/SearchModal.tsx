'use client';

import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { Search, X, BookOpen, PenTool, ShoppingBag, Eye, Heart, Compass } from 'lucide-react';
import { ARTWORKS, POSTS, WRITINGS, RECIPES, TRAVEL_ENTRIES, PRODUCTS } from '@/lib/content-index';

interface SearchResultItem {
  title: string;
  category: string;
  path: string;
  description: string;
  type: 'gallery' | 'journal' | 'writing' | 'food' | 'travel' | 'shop';
}

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const router = useRouter();
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResultItem[]>([]);
  const [activeIndex, setActiveIndex] = useState(-1);
  const modalRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Focus trap & keyboard controls
  useEffect(() => {
    if (!isOpen) return;

    // Reset state
    setQuery('');
    setResults([]);
    setActiveIndex(-1);
    
    // Lock scroll
    document.body.style.overflow = 'hidden';
    
    // Focus input
    const focusTimeout = setTimeout(() => {
      inputRef.current?.focus();
    }, 100);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        setActiveIndex(prev => (prev < results.length - 1 ? prev + 1 : prev));
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setActiveIndex(prev => (prev > 0 ? prev - 1 : 0));
      } else if (e.key === 'Enter' && activeIndex >= 0) {
        e.preventDefault();
        const selected = results[activeIndex];
        if (selected) {
          router.push(selected.path);
          onClose();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
      clearTimeout(focusTimeout);
    };
  }, [isOpen, results, activeIndex, onClose, router]);

  // Run fuzzy search
  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      return;
    }

    const term = query.toLowerCase();
    const matches: SearchResultItem[] = [];

    // Search Artworks
    ARTWORKS.forEach(item => {
      if (item.title.toLowerCase().includes(term) || item.description.toLowerCase().includes(term) || item.medium.toLowerCase().includes(term)) {
        matches.push({
          title: item.title,
          category: `Artwork — ${item.medium}`,
          path: `/gallery/${item.slug}`,
          description: item.description,
          type: 'gallery',
        });
      }
    });

    // Search Journal
    POSTS.forEach(item => {
      if (item.title.toLowerCase().includes(term) || item.excerpt.toLowerCase().includes(term) || item.category.toLowerCase().includes(term)) {
        matches.push({
          title: item.title,
          category: `Journal — ${item.category}`,
          path: `/journal/${item.slug}`,
          description: item.excerpt,
          type: 'journal',
        });
      }
    });

    // Search Writing
    WRITINGS.forEach(item => {
      if (item.title.toLowerCase().includes(term) || item.excerpt.toLowerCase().includes(term) || item.typeLabel.toLowerCase().includes(term)) {
        matches.push({
          title: item.title,
          category: `Writing — ${item.typeLabel}`,
          path: `/writing/${item.slug}`,
          description: item.excerpt,
          type: 'writing',
        });
      }
    });

    // Search Recipes
    RECIPES.forEach(item => {
      if (item.title.toLowerCase().includes(term) || item.description.toLowerCase().includes(term) || item.tags.some(t => t.toLowerCase().includes(term))) {
        matches.push({
          title: item.title,
          category: `Food — Recipe`,
          path: `/food/${item.slug}`,
          description: item.description,
          type: 'food',
        });
      }
    });

    // Search Travel
    TRAVEL_ENTRIES.forEach(item => {
      if (item.title.toLowerCase().includes(term) || item.description.toLowerCase().includes(term) || item.location.toLowerCase().includes(term)) {
        matches.push({
          title: item.title,
          category: `Travel — ${item.location}, ${item.country}`,
          path: `/travel/${item.slug}`,
          description: item.description,
          type: 'travel',
        });
      }
    });

    // Search Shop
    PRODUCTS.forEach(item => {
      if (item.title.toLowerCase().includes(term) || item.description.toLowerCase().includes(term) || item.typeLabel.toLowerCase().includes(term)) {
        matches.push({
          title: item.title,
          category: `Shop — ${item.typeLabel}`,
          path: `/shop/${item.slug}`,
          description: item.description,
          type: 'shop',
        });
      }
    });

    setResults(matches.slice(0, 8)); // Limit to top 8
    setActiveIndex(0); // auto select first
  }, [query]);

  if (!isOpen) return null;

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'gallery': return <Eye size={16} className="text-olive" />;
      case 'journal': return <BookOpen size={16} className="text-terracotta" />;
      case 'writing': return <PenTool size={16} className="text-olive" />;
      case 'food': return <Heart size={16} className="text-terracotta" />;
      case 'travel': return <Compass size={16} className="text-olive" />;
      case 'shop': return <ShoppingBag size={16} className="text-terracotta" />;
      default: return null;
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="search-modal-title"
      className="fixed inset-0 z-[9999] flex items-start justify-center pt-24 px-4 bg-ink/40 backdrop-blur-md transition-opacity duration-300"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div
        ref={modalRef}
        className="w-full max-w-xl bg-cream border border-border shadow-soft rounded-2xl overflow-hidden flex flex-col max-h-[70vh] transition-transform duration-300 transform scale-100"
      >
        {/* Input Bar */}
        <div className="flex items-center gap-3 px-4 border-b border-border h-14 shrink-0">
          <Search size={20} className="text-ink-muted" />
          <input
            ref={inputRef}
            id="search-modal-title"
            type="search"
            placeholder="Search art, journal posts, recipes, writings..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="flex-1 bg-transparent text-ink placeholder-ink-muted text-sm font-sans focus:outline-none"
            aria-label="Fuzzy site search input"
          />
          <button
            onClick={onClose}
            className="p-1 text-ink-muted hover:text-ink transition-colors"
            aria-label="Close search overlay"
          >
            <X size={18} />
          </button>
        </div>

        {/* Results Pane */}
        <div className="flex-1 overflow-y-auto p-3">
          {query.trim() === '' ? (
            <div className="py-12 text-center">
              <p className="font-sans text-xs text-ink-muted tracking-wider uppercase mb-1">Looking for something?</p>
              <p className="font-serif text-sm text-ink italic">Type to search the world of Niomi Gada</p>
            </div>
          ) : results.length === 0 ? (
            <div className="py-12 text-center">
              <p className="font-sans text-xs text-ink-muted tracking-wider uppercase mb-1">No matches found</p>
              <p className="font-serif text-sm text-ink italic">Try a different keyword or category</p>
            </div>
          ) : (
            <div className="space-y-1" role="listbox" aria-label="Search results">
              {results.map((item, index) => {
                const isActive = index === activeIndex;
                return (
                  <div
                    key={item.path}
                    role="option"
                    aria-selected={isActive}
                    onClick={() => {
                      router.push(item.path);
                      onClose();
                    }}
                    onMouseEnter={() => setActiveIndex(index)}
                    className={`flex items-start gap-3 p-3 rounded-xl cursor-pointer transition-colors duration-150 ${
                      isActive ? 'bg-paper text-ink' : 'bg-transparent text-ink-soft'
                    }`}
                  >
                    <div className="shrink-0 p-2 bg-cream rounded-lg border border-border mt-0.5">
                      {getTypeIcon(item.type)}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2">
                        <span className="font-serif text-sm font-medium text-ink truncate">
                          {item.title}
                        </span>
                        <span className="font-sans text-[10px] text-ink-muted tracking-wider uppercase shrink-0">
                          {item.category}
                        </span>
                      </div>
                      <p className="font-sans text-xs text-ink-muted line-clamp-1 mt-0.5">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Keyboard hints footer */}
        <div className="px-4 py-2 bg-paper border-t border-border flex items-center justify-between text-[10px] text-ink-muted font-sans shrink-0">
          <span>Use <kbd className="border border-border px-1 rounded bg-cream">↑</kbd> <kbd className="border border-border px-1 rounded bg-cream">↓</kbd> to navigate</span>
          <span>Press <kbd className="border border-border px-1 rounded bg-cream">ESC</kbd> to close</span>
        </div>
      </div>
    </div>
  );
}
