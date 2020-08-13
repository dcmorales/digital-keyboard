import React, { Component } from 'react';

import SelectionContext from '../../context/SelectionContext';

export default (ChildComponent) => {
  class ComposedComponent extends Component {
    static contextType = SelectionContext;

    render() {
      //takes any props received and hands it down to child
      return (
        <ChildComponent {...this.props} maxBeats={this.context.maxBeats} />
      );
    }
  }

  return ComposedComponent;
};
