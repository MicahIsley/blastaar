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
      <div className="col-xs-2 target" id="deckRow" style={{ background: backgroundColor }}>
        {this.props.listCurrentDeck()}
      </div>
    );
  }
}

export default DropTarget('card', {}, collect)(Target);