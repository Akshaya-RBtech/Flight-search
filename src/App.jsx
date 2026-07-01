import { useState } from 'react';

const flights = [
  { id: 1, airline: 'SkyJet', departure: '08:30', arrival: '12:10', duration: '3h 40m', stops: 'Nonstop', price: '$189' },
  { id: 2, airline: 'BlueAir', departure: '09:45', arrival: '13:20', duration: '3h 35m', stops: '1 Stop', price: '$214' },
  { id: 3, airline: 'NorthStar', departure: '11:00', arrival: '14:35', duration: '3h 35m', stops: 'Nonstop', price: '$225' },
];

function App() {
  const [selectedFlight, setSelectedFlight] = useState(flights[0]);
  const [searchMessage, setSearchMessage] = useState('Ready to search flights');

  const handleSearch = () => {
    setSearchMessage('Searching flights...');
    setTimeout(() => {
      setSearchMessage('Flights loaded.');
    }, 800);
  };

  return (
    <div className="app">
      <h1>Simple Flight Search</h1>
      <p>Search and choose the best flight.</p>

      <div className="section">
        <label>
          From
          <input value="New York" readOnly />
        </label>
        <label>
          To
          <input value="Miami" readOnly />
        </label>
        <button onClick={handleSearch}>Search Flights</button>
        <p className="status">{searchMessage}</p>
      </div>

      <div className="section">
        <h2>Available flights</h2>
        <ul className="flight-list">
          {flights.map((flight) => (
            <li key={flight.id} className="flight-item">
              <span>
                {flight.airline}: {flight.departure} → {flight.arrival}, {flight.duration}, {flight.stops}, {flight.price}
              </span>
              <button onClick={() => setSelectedFlight(flight)}>Select</button>
            </li>
          ))}
        </ul>
      </div>

      <div className="section">
        <h2>Selected flight</h2>
        <p>{selectedFlight.airline}</p>
        <p>{selectedFlight.departure} → {selectedFlight.arrival}</p>
        <p>{selectedFlight.price}</p>
      </div>
    </div>
  );
}

export default App;
