import React, { Component } from 'react';
import { DragSource } from 'react-dnd';
import rummageSym from './assets/icons/rummageSym.png';
import shield from './assets/icons/shield.png';
import rare from './assets/icons/rare.png';
import uncommon from './assets/icons/uncommon.png';
import common from './assets/icons/common.png';
import empty from './assets/icons/empty.png';

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
  constructor(props) {
      super(props);
      this.state = {
        finalText1: "",
        cardSym1: null,
        finalText2: null,
        cardSym2: null,
        regularText1: true,
        regularText2: false,
      }
  }
  componentDidMount() {
    var cardSym = [];
    var cardText;
    var regularText = [];
    var splitText = this.props.text.split(".");
    var finalText = [];
    for(var i=0; i<2; i++){
      if(splitText[i] === null || splitText[i] === undefined){

      }else{
        if(splitText[i].indexOf("Rummage") >= 0 ){
          cardSym[i] = rummageSym;
          finalText[i] = parseInt(splitText[i].match(/\d+/)[0]);
          regularText[i] = false;
        }else if(splitText[i].indexOf("Ward") >= 0 ){
              cardSym[i] = shield;
              console.log(splitText[i]);
              finalText[i] = parseInt(splitText[i].match(/\d+/)[0]);
              regularText[i] = false;
          }else{
          cardSym[i] = null;
          finalText[i] = splitText[i];
          regularText[i] = true;
        }
      }
    }
    this.setState({
      cardSym1: cardSym[0],
      finalText1: finalText[0],
      cardSym2: cardSym[1],
      finalText2: finalText[1],
      regularText1: regularText[0],
      regularText2: regularText[1]
    }, () => {
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
    var ownedNum;
    var cardNumberClass = "cardPowerNum";
    if(this.props.cost > 0){
      influenceCost = true;
    }else{}
    if(this.props.rarity === 1){
      rarity = common;
    }else if(this.props.rarity === 2){
      rarity = uncommon;
    }else if(this.props.rarity === 3){
      rarity = rare;
    }else{
      rarity = empty;
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
      sphereCard = true;
    }else if(charCard === "stormlight"){
      stormlightCost = true;
      cardStyle = this.props.faction;
    }else if(charCard === "sphere"){
      sphereCard = true;
    }
    if(this.props.numberOwned === 0){
      ownedNum = "greyScale";
    }else{}
    var cardPowerLength = (this.props.power).toString().length;
    if(cardPowerLength === 2){
      cardNumberClass = "cardPowerNum2";
    }
    const { isDragging, connectDragSource, item } = this.props;
    const opacity = isDragging ? 0 : 1;

    return connectDragSource(
      <div className={`col-xs-12 ${this.props.className} ${cardStyle} ${rarity} ${ownedNum}`} style={{ opacity }} onDoubleClick = {() => { this.props.showCraftTree(this.props.craft)}}>
        { sphereCard === false &&
          <div>
            <div className="row">
              <div className="col-xs-offset-4 col-xs-4 cardPower"><span className={cardNumberClass}>{this.props.power}</span></div>
              <div className="col-xs-3 numberOwned">{this.props.numberOwned}</div>
            </div>
            <div className="row cardName">{this.props.name}</div>
          </div>
        }
        { sphereCard === true &&
          <div className="row">
            <div className="col-xs-12">
              <div className="row">
                <div className="col-xs-3 numberOwned">{this.props.numberOwned}</div>
              </div>
              <div className="row">
                <img className="monsterPic" src={this.props.image} alt="monsta" />
              </div>
            </div>
          </div>
        }
        <div className="row cardText">
          <div className="col-xs-12">
            <div className="row">
              { this.state.cardSym1 ? <img src={this.state.cardSym1} className="col-xs-8 cardSym" /> : null }
              { this.state.cardSym1 ? <div className="col-xs-4">{this.state.finalText1}</div> : null }
              { this.state.regularText1 ? <div className="col-xs-12">{this.state.finalText1}</div> : null }
            </div>
            <div className="row">
              { this.state.cardSym2 ? <img src={this.state.cardSym2} className="col-xs-8 cardSym" /> : null }
              { this.state.cardSym2 ? <div className="col-xs-4">{this.state.finalText2}</div> : null }
              { this.state.regularText2 ? <div className="col-xs-12">{this.state.finalText2}</div> : null }
            </div>
          </div>
        </div>
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
          <div className="col-xs-3 influenceCost">{this.props.cost}</div>
        }
        { influenceCost === false &&
          <div className="col-xs-3"></div>
        }
          <div className="col-xs-5"><img className="rarityImg" src={rarity} alt="rarity" /></div>
          <div className="col-xs-4"><img className="iconImg" src={this.props.icon} alt="icon" /></div>
        </div>
      </div>
    )
  }
}

export default DragSource('card', itemSource, collect)(CollectionCard);