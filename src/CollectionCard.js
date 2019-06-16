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

class CollectionCard extends React.Component {
  render() {
    const { isDragging, connectDragSource, item } = this.props;
    const opacity = isDragging ? 0 : 1;

    return connectDragSource(
      <div className={`col-xs-12 ${this.props.className}`} style={{ opacity }}>
        <div className="row">
          <div className="col-xs-offset-4 col-xs-4 cardPower">{this.props.power}</div>
        </div>
        <div className="row cardName">{this.props.name}</div>
        <div className="row cardText">{this.props.text}</div>
      </div>
    )
  }
}

export default DragSource('card', itemSource, collect)(CollectionCard);