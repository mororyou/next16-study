import CacheAfter from './_components/UsersList';

export default async function page() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-16 p-16">
      <CacheAfter />
    </section>
  );
}
