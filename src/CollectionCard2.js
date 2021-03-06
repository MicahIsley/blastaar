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
    }else if(this.props.text.indexOf("Ward") >= 0 ){
      cardSym = shield;
      cardText = parseInt(this.props.text.match(/\d+/)[0]);
      regularText = null;
    }else{
      cardSym = null;
      regularText = true;
    }
    if(this.props.rarity === 1){
      rarity = "common";
    }else if(this.props.rarity === 2){
      rarity = "uncommon;"
    }else{
      rarity = "rare"
    }
    if(this.props.cost > 0){
      influenceCost = true;
    }else{}
    if(charCard === "support"){
      influenceCost = true;
      cardStyle = this.props.faction + "Support";
      sphereCard = true;
    }if(charCard === "character"){
      scheme = true;
      influenceCost = true;
      cardStyle = this.props.faction + "Support";
      schemeReq = parseInt(this.props.ability.split(/[ ,]+/)[2]);
      schemePower = this.props.ability.split(/[ ,]+/)[3];
    }else if(charCard === "stormlight"){
      stormlightCost = true;
      cardStyle = this.props.faction;
    }else if(charCard === "sphere"){
      sphereCard = true;
    }
    const { isDragging, connectDragSource, item } = this.props;
    const opacity = isDragging ? 0 : 1;

    return connectDragSource(
      <div className={`row ${this.props.className} ${cardStyle} ${rarity}`} style={{ opacity }} onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>
        <div className="col-xs-12">
          <div className="row">
            <div className="col-xs-3 deckCardPower">{this.props.power}</div>
            <div className="col-xs-7 deckCardName">{this.props.name}</div>
            <div className="col-xs-2 deckCardNum">{this.props.deckNum}</div>
          </div>
        </div>
        { this.state.hover === true &&
          <div className="expandedCard col-xs-12">
            { sphereCard === true &&  
              <img src={this.props.image} className="expandMonsterImage" alt="monsta" />
            }
            <div className="row cardText">
            { cardSym ? <img src={cardSym} className="col-xs-8 cardSym" /> : null }
            { cardSym ? <div className="col-xs-4 cardSymNum">{cardText}</div> : null }
            { regularText ? <div className="col-xs-12">{this.props.text}</div> : null }
            </div>
            <div className="row">
              <div className="col-xs-12">
              { scheme === true &&
                <div className="row supportCardText">
                  <div className="col-xs-6 leftSideSupport">{schemeReq}</div>
                  <div className="col-xs-6 rightSideSupport">{schemePower}</div>
                </div>
              }
              { influenceCost === true &&
                <div className="row hoverBottomRow">
                  <div className="col-xs-3 influenceCost">{this.props.cost}</div>
                </div>
              }
              </div>
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