import React, { Component } from 'react';
import { DropTarget } from 'react-dnd';
import ElementTarget from './ElementTarget';
import AbilityTarget from './AbilityTarget';

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    hovered: monitor.isOver(),
    item: monitor.getItem(),
  }
}

class FrameTarget extends Component {
  render() {
    console.log(this.props.power);
    const { connectDropTarget, hovered, item } = this.props;
    return connectDropTarget(
      <div className={`col-xs-12 craftCard ${this.props.faction}`}>
        <div className="row">
          <div className="col-xs-offset-4 col-xs-4 cardPower">{this.props.power}</div>
        </div>
        <div className="row craftingCardName">{this.props.name}</div>
        <div className="row cardText">
          <AbilityTarget text={this.props.text} level={this.props.level}/>
        </div>
        <div className="row bottomRow">
          <div className="col-xs-offset-8 col-xs-4 elementSlot">
            <ElementTarget element={this.props.element} />
          </div>
        </div>
      </div>
    );
  }
}

export default DropTarget('cardFrame', {}, collect)(FrameTarget);