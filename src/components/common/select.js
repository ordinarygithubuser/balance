import React from 'react';

export default ({ item, items, onChange }) => {
    const update = newItem => () => onChange(newItem);

    const options = items.map((current, i) => {
        const selected = item && item === current ? 'selected' : '';
        const className = `option ${selected}`;

        return <div className={className} key={i} onClick={update(current)}>
            {current.name ? current.name : current}
        </div>;
    });

    return <div className="select">
        {options}
    </div>;
};