import { useState } from 'react';

const flights = [
  {
    id: 1,
    airline: 'SkyJet',
    departure: '08:30',
    arrival: '12:10',
    duration: '3h 40m',
    stops: 'Nonstop',
    price: '$189',
    badge: 'Best Value',
  },
  {
    id: 2,
    airline: 'BlueAir',
    departure: '09:45',
    arrival: '13:20',
    duration: '3h 35m',
    stops: '1 Stop',
    price: '$214',
    badge: 'Flexible',
  },
  {
    id: 3,
    airline: 'NorthStar',
    departure: '11:00',
    arrival: '14:35',
    duration: '3h 35m',
    stops: 'Nonstop',
    price: '$225',
    badge: 'Premium',
  },
];

function App() {
  const [selectedFlight, setSelectedFlight] = useState(flights[0]);
  const [searchMessage, setSearchMessage] = useState('Ready to search flights');

  const handleSearch = () => {
    setSearchMessage('Searching flights for New York to Miami...');
    setTimeout(() => {
      setSearchMessage('Showing available flights for your trip.');
    }, 800);
  };

  return (
    <div className="app-shell">
      <header className="hero">
        <div>
          <p className="eyebrow">Affordable travel made simple</p>
          <h1>Compare flights and book with confidence.</h1>
          <p className="hero-text">
            Find the right fare, see live seat availability, and reserve your trip in minutes.
          </p>
        </div>
        <div className="search-card">
          <label>From</label>
          <input value="New York" readOnly />
          <label>To</label>
          <input value="Miami" readOnly />
          <button onClick={handleSearch}>Search Flights</button>
          <p className="status-text">{searchMessage}</p>
        </div>
      </header>

      <main className="content-grid">
        <section className="flights-section">
          <div className="section-title">
            <h2>Available flights</h2>
            <span>Updated just now</span>
          </div>

          <div className="flight-list">
            {flights.map((flight) => (
              <article key={flight.id} className={`flight-card ${selectedFlight.id === flight.id ? 'active' : ''}`}>
                <div className="flight-top">
                  <div>
                    <h3>{flight.airline}</h3>
                    <p>{flight.stops}</p>
                  </div>
                  <span className="badge">{flight.badge}</span>
                </div>

                <div className="flight-times">
                  <div>
                    <strong>{flight.departure}</strong>
                    <span>Departure</span>
                  </div>
                  <div>
                    <strong>{flight.duration}</strong>
                    <span>Travel time</span>
                  </div>
                  <div>
                    <strong>{flight.arrival}</strong>
                    <span>Arrival</span>
                  </div>
                </div>

                <div className="flight-footer">
                  <div>
                    <strong>{flight.price}</strong>
                    <span>per traveler</span>
                  </div>
                  <button onClick={() => setSelectedFlight(flight)}>Choose</button>
                </div>
              </article>
            ))}
          </div>
        </section>

        <aside className="summary-card">
          <h3>Booking summary</h3>
          <p className="summary-label">Selected flight</p>
          <h2>{selectedFlight.airline}</h2>
          <p>{selectedFlight.departure} → {selectedFlight.arrival}</p>
          <ul>
            <li>Duration: {selectedFlight.duration}</li>
            <li>Stops: {selectedFlight.stops}</li>
            <li>Price: {selectedFlight.price}</li>
          </ul>
          <button className="primary-btn">Confirm Booking</button>
        </aside>
      </main>
    </div>
  );
}

export default App;
