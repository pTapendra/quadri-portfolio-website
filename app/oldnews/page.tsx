import NewsList from "@/components/NewsList";

export default function NewsPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <h2 className="mb-4 text-2xl font-semibold text-gray-900">
          News &amp; Updates
        </h2>
        <NewsList />
      </div>
    </main>
  );
}
