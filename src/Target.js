import React, { Component } from 'react';
import { DropTarget } from 'react-dnd';

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    hovered: monitor.isOver(),
    item: monitor.getItem(),
  }
}

class Target extends Component {
  render() {
    const { connectDropTarget, hovered, item } = this.props;
    const backgroundColor = hovered ? 'white' : 'lightgreen';

    return connectDropTarget(
      <div className="target" style={{ background: backgroundColor }}>
        Add/Remove Card
      </div>
    );
  }
}

export default DropTarget('card', {}, collect)(Target);