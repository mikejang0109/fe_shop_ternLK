import React from 'react';

const DateTimeDisplay = ({ value, type, isDanger }) => {
  return (
    <div className={isDanger ? 'countdown danger' : 'countdown'}>
      <p className=''>{value}</p>
      <span className=''>{type}</span>
    </div>
  );
};

export default DateTimeDisplay;
