import React from 'react';

export default ({ label, children }) => {
    return <div className="row">
        <label>{label}</label>
        {children}
    </div>;
};