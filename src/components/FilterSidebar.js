export default function FilterSidebar() {
  return (
    <div className="bg-white rounded-md shadow p-4">
      <h3 className="font-semibold mb-3">🔍 Search & Filter</h3>
      <input
        type="text"
        placeholder="Search shops..."
        className="w-full mb-4 px-3 py-2 border rounded text-sm"
      />
      <h4 className="text-sm font-medium mb-2">Status Filter</h4>
      <div className="flex flex-col gap-2 text-sm">
        <button className="bg-violet-100 text-violet-700 px-3 py-1 rounded font-medium">All Shops</button>
        <button className="border px-3 py-1 rounded">Open Now</button>
        <button className="border px-3 py-1 rounded">Busy</button>
      </div>
    </div>
  );
}
