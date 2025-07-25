export default function Header() {
  return (
    <header className="bg-white px-6 py-4 flex justify-between items-center shadow-sm">
      <div>
        <h1 className="font-bold text-lg">Discover Local Shops</h1>
        <p className="text-sm text-gray-500">Welcome back, doraemonsnacks@gmail.com</p>
      </div>
      <button className="text-sm text-gray-600 hover:text-red-600">🔓 Logout</button>
    </header>
  );
}
