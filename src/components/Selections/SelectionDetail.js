import React from 'react';

import { optionsNaN } from '../../values/optionsNaN';

import DropdownOptions from './DropdownOptions';
import InfoText from './InfoText';
import Label from './Label';

class SelectionDetail extends React.Component {
  state = {
    optionsDefined: [],
    showInfoText: false,
  };

  componentDidMount() {
    this.defineOptions();
  }

  defineOptions() {
    const { start, max, arrNum, selectionName } = this.props;
    var optionsNum = [];
    var iNum = parseInt(start, 10);
    for (
      var i = iNum;
      i <= max;
      selectionName !== 'noteLength' ? i++ : (i *= 2)
    ) {
      optionsNum.push(i);
    }
    //if start and max are defined then selection is a number
    //numbers use function above for options, not a number uses OptionsNaN values
    this.setState({
      optionsDefined: !start && !max ? optionsNaN[arrNum] : optionsNum,
    });
  }

  onButtonClick = () => {
    this.setState({ showInfoText: !this.state.showInfoText });
  };

  render() {
    const { arrNum, selectionName, selectionValue } = this.props;
    return (
      <div className="selection-detail">
        <Label selectionName={selectionName} />

        <InfoText
          arrNum={arrNum}
          selectionName={selectionName}
          showInfoText={this.state.showInfoText}
          onButtonClick={this.onButtonClick}
        />

        <DropdownOptions
          selectionName={selectionName}
          selectionValue={selectionValue}
          optionsDefined={this.state.optionsDefined}
        />
      </div>
    );
  }
}

export default SelectionDetail;
