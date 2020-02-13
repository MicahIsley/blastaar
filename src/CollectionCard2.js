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

class CollectionCard2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: false
    }
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
  }
  handleMouseEnter(){
    this.setState({
      hover: true
    });
  }
  handleMouseLeave(){
    this.setState({
      hover: false
    });
  }
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
    const { isDragging, connectDragSource, item } = this.props;
    const opacity = isDragging ? 0 : 1;

    return connectDragSource(
      <div className={`row ${this.props.className} ${this.props.faction}`} style={{ opacity }} onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>
        <div className="col-xs-12">
          <div className="row">
            <div className="col-xs-3 deckCardPower">{this.props.power}</div>
            <div className="col-xs-7 deckCardName">{this.props.name}</div>
            <div className="col-xs-2 deckCardNum">{this.props.deckNum}</div>
          </div>
        </div>
        { this.state.hover === true &&
          <div className="expandedCard col-xs-12">
            <div className="row cardText">{this.props.text}</div>
            <div className="row hoverBottomRow">
            { influenceCost === true &&
              <div>
              <div className="col-xs-4 influenceCost">{this.props.cost}</div>
              <div className="col-xs-offset-4 col-xs-4"><img className="iconImg" src={this.props.icon} alt="icon" /></div>
              </div>
            }
            { stormlightCost === true &&
              <div className="col-xs-offset-8 col-xs-4"><img className="iconImg" src={this.props.icon} alt="icon" /></div>
            }
            </div>
          </div>
        }
      </div>
    )
  }
}

export default DragSource('card2', itemSource, collect)(CollectionCard2);