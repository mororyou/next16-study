import UseEffectEventAfter from './_components/After';
import UseEffectEventBefor from './_components/Before';

export default function UseEffectEventPage() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-16 p-16">
      <UseEffectEventBefor />
      <UseEffectEventAfter />
    </section>
  );
}
