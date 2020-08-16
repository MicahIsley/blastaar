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
    const backgroundColor = hovered ? 'white' : '#ffffff38';

    return connectDropTarget(
      <div className="col-xs-10 target" id="collectionCol" style={{ background: backgroundColor }}>
        {this.props.listCollection()}
      </div>
    );
  }
}

export default DropTarget('card2', {}, collect)(Target);