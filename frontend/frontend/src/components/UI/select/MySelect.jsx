import React from "react";

const MySelect = ({ value, defaultValue, option,onChange }) => {
    return (
        <select value={value} onChange={event => onChange(event.target.value)}>
            <option  value='' >{defaultValue}</option>
            {option.map(option =>
                <option value = {option.id} >
                    {option.name}
                </option>
            )}
        </select>
    );
};

export default MySelect;