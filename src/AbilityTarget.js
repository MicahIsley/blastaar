import React, { Component } from 'react';
import { DropTarget } from 'react-dnd';

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    hovered: monitor.isOver(),
    item: monitor.getItem(),
  }
}

class AbilityTarget extends Component {
  render() {
    const { connectDropTarget, hovered, item } = this.props;
    const backgroundColor = hovered ? 'white' : 'lightblue';

    return connectDropTarget(
      <div className="col-xs-12" id="abilityTarget" style={{ background: backgroundColor }}>
        {this.props.text}
      </div>
    );
  }
}

export default DropTarget('cardAbility', {}, collect)(AbilityTarget);