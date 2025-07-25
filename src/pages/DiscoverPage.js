import React from 'react';
import Header from '../components/Header';
import FilterSidebar from '../components/FilterSidebar';
import UpcomingAppointments from '../components/UpcomingAppointments';
import ShopCard from '../components/ShopCard';
import './DiscoverPage.css';

const shops = [
  {
    name: 'Elite Hair Studio',
    description: 'Premium hair styling and cutting services with experienced professionals',
    location: 'Downtown Mall, 1st Floor',
    hours: '9:00 AM - 8:00 PM',
    rating: 4.8,
    status: 'Open',
  },
  {
    name: 'Quick Cuts Barbershop',
    description: 'Fast and affordable haircuts for men and women',
    location: 'Main Street Plaza',
    hours: '8:00 AM - 7:00 PM',
    rating: 4.5,
    status: 'Busy',
  },
  {
    name: 'Luxury Spa & Salon',
    description: 'Full-service spa offering hair, nails, and wellness treatments',
    location: 'Wellness Center, 2nd Floor',
    hours: '10:00 AM - 6:00 PM',
    rating: 4.9,
    status: 'Closed',
  },
  {
    name: 'The Hair Lab',
    description: 'Modern salon specializing in creative cuts and color',
    location: 'Arts District',
    hours: '11:00 AM - 9:00 PM',
    rating: 4.6,
    status: 'Open',
  },
];

function DiscoverPage() {
  return (
    <div className="discover-page">
      <div className="sidebar">
        <FilterSidebar />
        <UpcomingAppointments />
      </div>

      <div className="main-content">
        <Header />
        <div className="main-top">
          <div className="main-title">
            <h2>Available Shops (4)</h2>
            <p>Find the perfect service near you</p>
          </div>
          <button className="view-map-btn">🗺️ View Map</button>
        </div>

        <div className="shop-grid">
          {shops.map((shop, idx) => (
            <ShopCard key={idx} shop={shop} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default DiscoverPage;
