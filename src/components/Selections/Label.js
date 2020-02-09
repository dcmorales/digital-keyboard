import React from 'react';

const Label = ({ selectionName }) => {
  return (
    <label className="selection-detail__label" htmlFor={`${selectionName}`}>
      {selectionName}
    </label>
  );
};

export default Label;
