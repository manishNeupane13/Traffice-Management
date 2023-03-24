import React from 'react'

export const Accidents = () => {
    return (
        <><div>
            <h2 className='text'>Add Traffic Accident</h2>
            <form className='accidentform'>
                <div className="form-section">
                    <label htmlFor="city">City:</label>
                    <input type="text" id="city" name="city" required />

                    <label htmlFor="district">District:</label>
                    <input type="text" id="district" name="district" required />

                    <label htmlFor="date">Date:</label>
                    <input type="date" id="date" name="date" required />
                     <label htmlFor="time">Time:</label>
                    <input type="time" id="time" name="time" required />
                </div>

                <div className="form-section">
                    <label htmlFor="vehicleNumber">Vehicle Number:</label>
                    <input type="text" id="vehicleNumber" name="vehicleNumber" required />

                    <label htmlFor="ownerName">Owner Name:</label>
                    <input type="text" id="ownerName" name="ownerName" required />

                    <label htmlFor="ownerPhone">Owner Phone:</label>
                    <input type="tel" id="ownerPhone" name="ownerPhone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" required />

                    <label htmlFor="ownerEmail">Owner Email:</label>
                    <input type="email" id="ownerEmail" name="ownerEmail" required />

                    <label htmlFor="ownerAddress">Owner Address:</label>
                    <input type="text" id="ownerAddress" name="ownerAddress"  required></input>
                </div>

                <div className="form-section">
                    <label htmlFor="injuries">Number of Injuries:</label>
                    <input type="number" id="injuries" name="injuries" required />

                    <label htmlFor="description">Description:</label>
                    <textarea id="description" name="description" rows="5" required></textarea>
                </div>

               <div className='savebtn'>

                <button className="savebutton">SAVE</button>
               </div>

            </form>
        </div>
        <br/>
        <div>           
                <table>
                    <thead>
                        <tr>
                            <th>Accident ID</th>
                            <th>Date</th>
                            <th>Time</th>
                            <th>City</th>
                            <th>District</th>
                            <th>Vehicle Number</th>
                            <th>Owner Info</th>
                            <th>Injuries</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>#12345</td>
                            <td>2023-03-21</td>
                            <td>15:30:00</td>
                            <td>Bangalore</td>
                            <td>South</td>
                            <td>KA 02 AB 1234</td>
                            <td>John Doe</td>
                            <td>2</td>
                            <td>Two-wheeler hit by car</td>
                        </tr>
                        <tr>
                            <td>#12346</td>
                            <td>2023-03-22</td>
                            <td>08:45:00</td>
                            <td>Mumbai</td>
                            <td>West</td>
                            <td>MH 01 CD 5678</td>
                            <td>Jane Doe</td>
                            <td>0</td>
                            <td>Car skid due to rain</td>
                        </tr>
                        <tr>
                            <td>#12347</td>
                            <td>2023-03-23</td>
                            <td>12:15:00</td>
                            <td>Delhi</td>
                            <td>North</td>
                            <td>DL 03 EF 9101</td>
                            <td>Bob Smith</td>
                            <td>3</td>
                            <td>Bus collided with truck</td>
                        </tr>
                    </tbody>
                </table>

            </div>
            </>
    )
}
