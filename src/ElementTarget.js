import React, { Component } from 'react';
import { DropTarget } from 'react-dnd';
import Element from './Element';

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    hovered: monitor.isOver(),
    item: monitor.getItem(),
  }
}

class ElementTarget extends Component {
  render() {
    const { connectDropTarget, hovered, item } = this.props;
    const backgroundColor = hovered ? 'white' : 'lightblue';

    return connectDropTarget(
      <div className="col-xs-offset-4 col-xs-8 elementTarget" style={{ background: backgroundColor }}>
        <img src={this.props.element} alt="orb" className="eleOrbImg" />
      </div>  
    );
  }
}

export default DropTarget('elementOrb', {}, collect)(ElementTarget);