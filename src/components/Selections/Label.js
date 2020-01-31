import React from 'react';

import { selectionInfo } from '../../values/selectionInfo';

const Label = ({ arrNum, selectionName }) => {
  return (
    <label className="tooltip" htmlFor={`${selectionName}`}>
      {selectionName}
      <span className="tooltiptext">
        <ul>
          {selectionInfo[arrNum].map((info, i) => (
            <li key={i}>{info}</li>
          ))}
        </ul>
      </span>
    </label>
  );
};

export default Label;