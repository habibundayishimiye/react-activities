import React, { useState } from 'react';

function ModuleForm() {
    const [moduleName, setModuleName] = useState('');
    const [moduleCode, setModuleCode] = useState('');
    const [credits, setCredits] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Module Registered:\nName: ${moduleName}\nCode: ${moduleCode}\nCredits: ${credits}`);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Module Name"
                value={moduleName}
                onChange={(e) => setModuleName(e.target.value)}
                required
            />
            <input
                type="text"
                placeholder="Module Code"
                value={moduleCode}
                onChange={(e) => setModuleCode(e.target.value)}
                required
            />
            <input
                type="number"
                placeholder="Credits"
                value={credits}
                onChange={(e) => setCredits(e.target.value)}
                required
            />
            <button type="submit">Register Module</button>
        </form>
    );
}

export default ModuleForm;
