import CardSkeleton from '@/components/CardSkeleton';
import { Suspense } from 'react';
import RecentSalesCard from './_components/RecentSalesCard';
import RevenueCard from './_components/RevenueCard';
import SalesCard from './_components/SalesCard';
import SubscriptionCard from './_components/SubscriptionCard';

export default function PPRPage() {
  return (
    <section className="grid gap-16 p-16">
      <div className="container mx-auto px-6 py-8">
        <h3 className="text-3xl font-medium text-gray-700 dark:text-gray-200">
          Dashboard
        </h3>

        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Sample Widgets */}
          <Suspense fallback={<CardSkeleton />}>
            <RevenueCard />
          </Suspense>
          <Suspense fallback={<CardSkeleton />}>
            <SubscriptionCard />
          </Suspense>
          <Suspense fallback={<CardSkeleton />}>
            <SalesCard />
          </Suspense>
        </div>

        <div className="mt-8">
          <Suspense fallback={<CardSkeleton />}>
            <RecentSalesCard />
          </Suspense>
        </div>
      </div>
    </section>
  );
}
