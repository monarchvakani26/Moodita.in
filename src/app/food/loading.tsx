import { ProductGridSkeleton } from '@/components/primitives/Skeleton';

export default function FoodLoading() {
  return (
    <div className="pt-[var(--nav-height)] pb-24">
      <div className="section-padding py-20 bg-paper border-b border-border">
        <div className="page-container space-y-4">
          <div className="skeleton h-3 w-16 rounded-full" />
          <div className="skeleton h-14 w-80 rounded-lg" />
          <div className="skeleton h-4 w-96 rounded-full" />
        </div>
      </div>
      <div className="section-padding py-12">
        <div className="page-container">
          <ProductGridSkeleton count={4} />
        </div>
      </div>
    </div>
  );
}
