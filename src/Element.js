import React, { Component } from 'react';
import { DragSource } from 'react-dnd';

const itemSource = {
  beginDrag(props) {
    return props;
  },
  endDrag(props, monitor, component) {
    if (!monitor.didDrop()) {
      return;
    }

    return props.handleDrop(props.id);
  }
}
function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    connectDragPreview: connect.dragPreview(),
    isDragging: monitor.isDragging(),
  }
}

class ElementOrb extends React.Component {
  render() {
    const { isDragging, connectDragSource, item } = this.props;
    const opacity = isDragging ? 0 : 1;

    return connectDragSource(
       <img className="eleOrbImg" src={this.props.element} alt="orb" style={{ opacity }} />
    )
  }
}

export default DragSource('elementOrb', itemSource, collect)(ElementOrb);