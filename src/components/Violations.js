import React from 'react'

export const Violations = () => {
      return (
        <>
        <h2 className='text'>Add Traffic Violation</h2>
        <div className='violationdiv'>

            <form className='addviolation'>
                <label className='violationlabel' htmlFor="type">Type:</label>
                <select id="type" name="type">
                    <option value="Speeding Ticket">Speeding Ticket</option>
                    <option value="Red Light Violation">Red Light Violation</option>
                    <option value="Parking Violation">Parking Violation</option>
                </select>

                <label className='violationlabel' htmlFor="vehicle">Vehicle:</label>
                <input className='violationinput' type="text" id="vehicle" name="vehicle" required />

                <label className='violationlabel' htmlFor="driver">Driver:</label>
                <input className='violationinput' type="text" id="driver" name="driver" required />

                <label className='violationlabel' htmlFor="location">Location:</label>
                <input className='violationinput' type="text" id="location" name="location" required />

                <label className='violationlabel' htmlFor="date">Date:</label>
                <input className='violationinputdate' type="date" id="date" name="date" required />
                <br/>
               
                
                
            </form>
            <div className='savebtn'>

                <button className="savebutton">SAVE</button>
            </div>
        </div>
            <div>
<table>
  <thead>
    <tr>
      <th>Violation ID</th>
      <th>Date</th>
      <th>Time</th>
      <th>Vehicle Number</th>
      <th>Violation Type</th>
      <th>Fine Amount</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>#12345</td>
      <td>2023-03-21</td>
      <td>15:30:00</td>
      <td>KA 02 AB 1234</td>
      <td>Speeding</td>
      <td>$100</td>
    </tr>
    <tr>
      <td>#12346</td>
      <td>2023-03-22</td>
      <td>08:45:00</td>
      <td>KA 01 CD 5678</td>
      <td>Red Light Violation</td>
      <td>$150</td>
    </tr>
    <tr>
      <td>#12347</td>
      <td>2023-03-23</td>
      <td>12:15:00</td>
      <td>KA 03 EF 9101</td>
      <td>Distracted Driving</td>
      <td>$200</td>
    </tr>
  </tbody>
</table>
            </div>
            </>
    );
}

