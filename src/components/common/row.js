import React from 'react';

const Error = ({ message }) => {
    return <div className="error-message">{message}</div>;
};

const hasError = errors => errors && errors.length > 0;

export default ({ label, errors = [], children }) => {
    const elements = errors.map((error, i) => {
        return <Error key={i} message={error} />
    });

    const errorClass = hasError(errors) ? 'error' : '';

    return <div className={`row ${errorClass}`}>
	    <div className="element">
		    <label>{label}</label>
		    {children}
	    </div>
        <div className="error-messages">
	        {elements}
	    </div>
    </div>;
};