export default function UpcomingAppointments() {
  return (
    <div className="bg-white rounded-md shadow p-4">
      <h3 className="font-semibold mb-3">📅 Upcoming</h3>
      <p className="text-sm text-gray-500 mb-2">Your scheduled appointments</p>

      <div className="space-y-2 text-sm">
        <div className="border p-2 rounded hover:bg-violet-50">
          <p className="font-medium">Elite Hair Studio</p>
          <p>Today at 3:00 PM</p>
          <span className="text-violet-500">Haircut</span>
        </div>
        <div className="border p-2 rounded hover:bg-violet-50">
          <p className="font-medium">Luxury Spa & Salon</p>
          <p>Tomorrow at 11:00 AM</p>
          <span className="text-violet-500">Facial</span>
        </div>
      </div>
    </div>
  );
}
