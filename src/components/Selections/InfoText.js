import React from 'react';

import { selectionInfo } from '../../values/selectionInfo';

const InfoText = ({ arrNum, selectionName, showInfoText, onButtonClick }) => {
  return (
    <div className="selection-detail__info-text">
      <button
        className="selection-detail__info-text-button"
        onClick={onButtonClick}
      >
        {showInfoText ? 'x' : '?'}
      </button>
      {showInfoText ? (
        <ul className="selection-detail__info-text-list">
          {selectionInfo[arrNum].map((info, i) => (
            <li key={i}>{info}</li>
          ))}
        </ul>
      ) : null}
    </div>
  );
};

export default InfoText;
