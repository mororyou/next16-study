import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';

export type CardSkeletonProps = {
  height?: string;
};

export default function CardSkeleton({ height = 'auto' }: CardSkeletonProps) {
  return (
    <Card style={{ height }}>
      <CardHeader>
        <Skeleton className="h-4 w-2/3" />
      </CardHeader>
      <CardContent>
        <Skeleton className="h-8 w-1/2 mb-4" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-4/5 mt-2" />
      </CardContent>
    </Card>
  );
}
