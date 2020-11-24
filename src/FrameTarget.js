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
    var influenceCost;
    if(this.props.cost > 0){
      influenceCost = true;
    }else{
      influenceCost = false;
    }
    const { connectDropTarget, hovered, item } = this.props;
    return connectDropTarget(
      <div className={`col-xs-12 craftCard ${this.props.faction}`}>
        <div className="row">
          <div className="col-xs-offset-5 col-xs-4 cardPower targetCardPower">{this.props.power}</div>
        </div>
        <div className="row craftingCardName">{this.props.name}</div>
        <div className="row cardText">
          <AbilityTarget text={this.props.text} level={this.props.level}/>
        </div>
        { influenceCost === true &&
          <div className="row bottomRow">
            <div className="col-xs-2 influenceCost">{this.props.cost}</div>
            <div className="col-xs-offset-6 col-xs-4 elementSlot">
              <ElementTarget element={this.props.element} />
            </div>
          </div>
        }
        { influenceCost === false &&
          <div className="row bottomRow">
            <div className="col-xs-offset-8 col-xs-4 elementSlot">
              <ElementTarget element={this.props.element} />
            </div>
          </div>
        }
      </div>
    );
  }
}

export default DropTarget('cardFrame', {}, collect)(FrameTarget);