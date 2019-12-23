import React, { Component } from 'react';
import { DragSource } from 'react-dnd';

const itemSource = {
  beginDrag(props) {
    console.log(props.power);
    console.log('dragging');
    return props;
  },
  endDrag(props, monitor, component) {
    if (!monitor.didDrop()) {
      return;
    }

    return props.handleDrop(props);
  }
}

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    connectDragPreview: connect.dragPreview(),
    isDragging: monitor.isDragging(),
  }
}

class CardAbility extends React.Component {
  render() {
    const { isDragging, connectDragSource, item } = this.props;
    const opacity = isDragging ? 0 : 1;

    return connectDragSource(
      <div className="col-xs-3 abilityBox" style={{ opacity }}>
        <div className="row">
          <div className="col-xs-4">Level {this.props.level}</div>
          <div className="col-xs-8">{this.props.text}</div>
        </div>
      </div>  
    )
  }
}

export default DragSource('cardAbility', itemSource, collect)(CardAbility);