import React, { useState } from 'react';

function DriverForm() {
    const [name, setName] = useState('');
    const [licenseNumber, setLicenseNumber] = useState('');
    const [vehicleType, setVehicleType] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Driver Registered:\nName: ${name}\nLicense Number: ${licenseNumber}\nVehicle Type: ${vehicleType}`);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Driver Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
            />
            <input
                type="text"
                placeholder="License Number"
                value={licenseNumber}
                onChange={(e) => setLicenseNumber(e.target.value)}
                required
            />
            <input
                type="text"
                placeholder="Vehicle Type"
                value={vehicleType}
                onChange={(e) => setVehicleType(e.target.value)}
                required
            />
            <button type="submit">Register Driver</button>
        </form>
    );
}

export default DriverForm;
