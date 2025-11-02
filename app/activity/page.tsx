import ActivityAfter from './_components/After';
import ActivityBefor from './_components/Befor';

export default function ActivityPage() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-16 p-16">
      <ActivityBefor />
      <ActivityAfter />
    </section>
  );
}
