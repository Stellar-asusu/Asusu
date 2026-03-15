export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-8">
      <h1 className="text-4xl font-bold mb-4">Asusu</h1>
      <p className="text-lg text-gray-600 mb-8 text-center max-w-md">
        Financial inclusion powered by the{" "}
        <span className="text-blue-600 font-semibold">Stellar blockchain</span>.
        Track spending, set budgets, and grow savings — no bank required.
      </p>
      <a
        href="/dashboard"
        className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
      >
        Open Dashboard
      </a>
    </main>
  );
}
