export default function DashboardPage() {
  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-6">Dashboard</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <StatCard label="Total Spent (Month)" value="0 XLM" />
        <StatCard label="Budget Remaining" value="0 XLM" />
        <StatCard label="Savings Goal" value="0%" />
      </div>
    </div>
  );
}

function StatCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="border rounded-xl p-6 shadow-sm">
      <p className="text-sm text-gray-500">{label}</p>
      <p className="text-2xl font-semibold mt-1">{value}</p>
    </div>
  );
}
