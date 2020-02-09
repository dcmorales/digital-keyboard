import React from 'react';

const Label = ({ labelName, selectionName }) => {
  return (
    <label className="selection-detail__label" htmlFor={`${selectionName}`}>
      {labelName}
    </label>
  );
};

export default Label;
