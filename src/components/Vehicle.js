import React from 'react'

export const Vehicle = () => {
  const vehiclesData = [
    { id: 1, make: 'Toyota', model: 'Corolla', year: 2019, color: 'Silver', plateNumber: 'ABC123' },
    { id: 2, make: 'Honda', model: 'Civic', year: 2020, color: 'White', plateNumber: 'DEF456' },
    { id: 3, make: 'Ford', model: 'Mustang', year: 2018, color: 'Red', plateNumber: 'GHI789' }
  ]; // replace with actual data from your backend API

  return (
    <div>
      <h2>Vehicles</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Make</th>
            <th>Model</th>
            <th>Year</th>
            <th>Color</th>
            <th>Plate Number</th>
          </tr>
        </thead>
        <tbody>
          {vehiclesData.map(vehicle => (
            <tr key={vehicle.id}>
              <td>{vehicle.id}</td>
              <td>{vehicle.make}</td>
              <td>{vehicle.model}</td>
              <td>{vehicle.year}</td>
              <td>{vehicle.color}</td>
              <td>{vehicle.plateNumber}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

}
