import React from 'react';

import { selectionInfo } from '../../values/selectionInfo';

const InfoText = ({ arrNum, selectionName }) => {
  return (
    <div className="selection-detail__info-text">
      <button className="selection-detail__info-text-button">&#63;</button>
      <ul className="selection-detail__info-text-list">
        {selectionInfo[arrNum].map((info, i) => (
          <li key={i}>{info}</li>
        ))}
      </ul>
    </div>
  );
};

export default InfoText;
