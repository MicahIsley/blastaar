import React, { Component } from 'react';
import { DragSource } from 'react-dnd';
import rummageSym from './assets/icons/rummageSym.png';
import shield from './assets/icons/shield.png';

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
    var cardSym;
    var cardText;
    var regularText;
    if(this.props.text.indexOf("Rummage") >= 0 ){
      cardSym = rummageSym;
      cardText = parseInt(this.props.text.match(/\d+/)[0]);
      regularText = null;
    }else if(this.props.text.indexOf("Shield") >= 0 ){
      cardSym = shield;
      cardText = parseInt(this.props.text.match(/\d+/)[0]);
      regularText = null;
    }else{
      cardSym = null;
      regularText = true;
    }
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
      <div className={`col-xs-12 ${this.props.className} ${cardStyle} ${rarity}`} style={{ opacity }} onDoubleClick = {() => { this.props.showCraftTree(this.props.craft)}}>
        { sphereCard === false &&
          <div className="row">
            <div className="col-xs-offset-4 col-xs-4 cardPower"><span className="cardPowerNum">{this.props.power}</span></div>
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
          <div className="row cardText">
            { cardSym ? <img src={cardSym} className="col-xs-8 cardSym" /> : null }
            { cardSym ? <div className="col-xs-4 cardSymNum">{cardText}</div> : null }
            { regularText ? <div className="col-xs-12">{this.props.text}</div> : null }
          </div>
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