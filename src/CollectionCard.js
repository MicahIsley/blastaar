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
    var charCard = this.props.type;
    var influenceCost = false;
    var stormlightCost = false;
    var sphereCard = false;
    var cardStyle = "neutral";
    var schemeReq = 0;
    var schemePower = 0;
    var scheme = false;
    var rarity = "common";
    console.log(this.props.rarity);
    if(this.props.rarity === 1){
      rarity = "common";
    }else if(this.props.rarity === 2){
      rarity = "uncommon;"
    }else{
      rarity = "rare"
    }
    if(charCard === "character"){
      scheme = true;
      influenceCost = true;
      cardStyle = this.props.faction + "Support";
      schemeReq = parseInt(this.props.ability.split(/[ ,]+/)[2]);
      schemePower = this.props.ability.split(/[ ,]+/)[3];
    }else if(charCard === "support"){
      influenceCost = true;
      cardStyle = this.props.faction + "Support";
    }else if(charCard === "stormlight"){
      stormlightCost = true;
      cardStyle = this.props.faction;
    }else if(charCard === "sphere"){
      sphereCard = true;
    }
    const { isDragging, connectDragSource, item } = this.props;
    const opacity = isDragging ? 0 : 1;

    return connectDragSource(
      <div className={`col-xs-12 ${this.props.className} ${cardStyle} ${rarity}`} style={{ opacity }}>
        { sphereCard === false &&
          <div className="row">
            <div className="col-xs-offset-4 col-xs-4 cardPower">{this.props.power}</div>
            <div className="col-xs-3 numberOwned">{this.props.numberOwned}</div>
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
        <div className="row schemeRow">
          <div className="col-xs-12">
          { scheme === true &&
            <div className="row supportCardText">
              <div className="col-xs-6 leftSideSupport">{schemeReq}</div>
              <div className="col-xs-6 rightSideSupport">{schemePower}</div>
            </div>
              }
          </div>
        </div>
        <div className="row bottomRow">
        { influenceCost === true &&
          <div className="col-xs-4 influenceCost">{this.props.cost}</div>
        }
        { stormlightCost === true &&
          <div className="col-xs-4"></div>
        }
          <div className="col-xs-offset-4 col-xs-4"><img className="iconImg" src={this.props.icon} alt="icon" /></div>
        </div>
      </div>
    )
  }
}

export default DragSource('card', itemSource, collect)(CollectionCard);