import React, { Component } from 'react';
import { DropTarget } from 'react-dnd';

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    hovered: monitor.isOver(),
    item: monitor.getItem(),
  }
}

class DeleteZone extends Component {
  render() {
    const { connectDropTarget, hovered, item } = this.props;
    const backgroundColor = hovered ? 'white' : 'red';

    return connectDropTarget(
      <div className="target" style={{ background: backgroundColor }}>
        Delete Card
      </div>
    );
  }
}

export default DropTarget('card', {}, collect)(DeleteZone);