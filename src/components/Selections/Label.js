import React from 'react';

const Label = ({ labelName, selectionName }) => {
  return (
    <label
      className="selection-detail__label-name"
      htmlFor={`${selectionName}`}
    >
      {labelName}
    </label>
  );
};

export default Label;
