import React, { Component } from 'react';
import { DragSource } from 'react-dnd';
import AbilityTarget from './AbilityTarget';
import ElementTarget from './ElementTarget';

const itemSource = {
  beginDrag(props) {
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

class CardFrame extends React.Component {
  render() {
    var charCard = this.props.type;
    var influenceCost = false;
    var stormlightCost = false;
    var sphereCard = false;
    if(charCard === "character" || charCard === "support"){
      influenceCost = true;
    }else if(charCard === "stormlight"){
      stormlightCost = true;
    }else if(charCard === "sphere"){
      sphereCard = true;
    }
    if(this.props.cost > 0){
      influenceCost = true;
      stormlightCost = false;
    }
    const { isDragging, connectDragSource, item } = this.props;
    const opacity = isDragging ? 0 : 1;

    return connectDragSource(
      <div className={`col-xs-12 ${this.props.className} ${this.props.faction}`} style={{ opacity }}>
        { sphereCard === false &&
          <div className="row">
            <div className="col-xs-offset-4 col-xs-4 cardPower frameCardPower">{this.props.power}</div>
          </div>
        }
        <div className="row cardName">{this.props.name}</div>
        { sphereCard === true &&
          <div className="row">
            <div className={`col-xs-offset-4 col-xs-4 sphereIcon ${this.props.ability}`}></div>
          </div>
        }
        { sphereCard === false &&
          <div className="row cardText">{this.props.text}</div>
        }
        { influenceCost === true &&
          <div className="row bottomRow">
          <div className="col-xs-4 influenceCost">{this.props.cost}</div>
            <div className="col-xs-offset-4 col-xs-4"><img className="iconImg" src={this.props.icon} alt="icon" /></div>
          </div>
        }
        { stormlightCost === true &&
          <div className="row bottomRow">
            <div className="col-xs-offset-8 col-xs-4"><img className="iconImg" src={this.props.icon} alt="icon" /></div>
          </div>
        }
      </div>
    )
  }
}

export default DragSource('cardFrame', itemSource, collect)(CardFrame);