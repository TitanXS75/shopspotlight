export default function ShopCard({ name, description, location, hours, rating, status, action }) {
  const statusColors = {
    Open: 'bg-green-500',
    Busy: 'bg-yellow-400',
    Closed: 'bg-red-500',
  };

  return (
    <div className="bg-white rounded-md shadow p-4 flex flex-col justify-between">
      <div>
        <h4 className="font-bold text-md mb-1">{name}</h4>
        <p className="text-sm text-gray-600 mb-2">{description}</p>
        <p className="text-sm text-gray-500">📍 {location}</p>
        <p className="text-sm text-gray-500 mt-1">🕒 {hours}</p>
        <p className="text-sm text-yellow-500 mt-1">⭐ {rating}</p>
      </div>

      <div className="flex items-center justify-between mt-4">
        <span className={`text-white text-xs px-2 py-1 rounded-full ${statusColors[status]}`}>
          {status}
        </span>
        <div className="flex gap-2">
          <button className="border px-3 py-1 text-sm rounded">View Details</button>
          {action && (
            <button
              className={`text-white px-3 py-1 rounded text-sm ${
                action === 'Book Now' ? 'bg-green-500' : 'bg-yellow-400'
              }`}
            >
              {action}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
