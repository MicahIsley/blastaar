import React from 'react';
import ReactDOM from 'react-dom';
import { DragDropContext } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'
import kaladin from './kaladin.jpg';
import shallan from './shallan.jpg';
import dalinar from './dalinar.jpg';
import dragonImg from './dragon.jpg';
import goblinImg from './goblin.jpg';
import hillGiantImg from './hillGiant.jpeg';
import ogreImg from './ogre.jpg';
import snakeImg from './snake.jpg';
import Item from './item';
import Target from './Target';
import CollectionCard from './CollectionCard';
import DeleteZone from './deleteZone.js';
import heart from './heart.png';
import shield from './shield.png';
import power from './power.jpg';
import './index.css';

var player;
const Types = {
  BOX: 'box',
};
var enemy0Slot = {
	name: "Snake",
	hp: 5,
	attack: 5,
	sabotoge: 2,
	image: snakeImg
}

var enemy1Slot = {
	name: "Ogre",
	hp: 5,
	attack: 5,
	sabotoge: 1,
	image: ogreImg
}

var enemy2Slot = {
	name: "Goblin",
	hp: 5,
	attack: 5,
	sabotoge: 5,
	image: goblinImg
}

function EnemyCon(name, hp, attack, sabotoge, image){
	this.name = name;
	this.hp = hp;
	this.attack = attack;
	this.sabotoge = sabotoge;
	this.image = image;
}

function ItemCon(name, power, unlocked){
	this.name = name;
	this.power = power;
	this.unlocked = unlocked;
}

function HeroCon(name, hp, attack, shield, image, unlocked){
	this.name = name;
	this.hp = hp;
	this.attack = attack;
	this.shield = shield;
	this.image = image;
	this.unlocked = unlocked;
}

function CardCon(name, cost, power, text, type, rarity, ability, unlocked){
	this.name = name;
	this.cost = cost;
	this.power = power;
	this.text = text;
	this.type = type;
	this.rarity = rarity;
	this.ability = ability;
	this.unlocked = unlocked;
}

const kaladinH = new HeroCon("Kaladin", 100, 1, 6, kaladin, true);
const shallanH = new HeroCon("Shallan", 120, 3, 5, shallan, false);
const dalinarH = new HeroCon("Dalinar", 150, 4, 8, dalinar, false);

const rustySword = new ItemCon("Rusty Sword", 1, true);
const battleSpear = new ItemCon("Battle Spear", 2, false);
const shardblade = new ItemCon("Shardblade", 3, false);

var samp1 = new CardCon("Bridgeman", 2, 2, "Shield 2", "hero", 0, "sweep", true);
var samp2 = new CardCon("Rock", 3, 3, "Purge", "hero", 0, "purge", true);
var samp3 = new CardCon("Moash", 4, 0, "Gains 1 power each time you choose this card", "hero", 0, "grow", true);
var samp4 = new CardCon("To the Skies", 1, 1, "Shield 4", "hero", 0, "shield 4", true);
var basic1 = new CardCon("Protect the Weak", 1, 1, "Lose no one", "hero", 1, " ", true);
var basic2 = new CardCon("Adolin", 5, 5, "Shardbearer", "hero", 3, " ", true);
var basic3 = new CardCon("Sadeas", 4, 4, "Scheming Highlord", "hero", 2, " ", true);
var basic4 = new CardCon("Training", 0, 0, "Grows more powerful over time", "hero", 2, " ", true);
var basic5 = new CardCon("Jasnah", 3, 3, "Research", "hero", 3, " ", true);
var basic6 = new CardCon("Elhokar", 3, 3, "King", "hero", 2, " ", false);
var basic7 = new CardCon("Gavilar", 4, 4, "The Avenged", "hero", 3, " ", false);
var basic8 = new CardCon("Navani", 2, 2, "Fabrial expert", "hero", 3, " ", false);
var basic9 = new CardCon("Soulcaster", 3, 3, "Create something from nothing", "hero", 2, " ", false);
var basic10 = new CardCon("Renarin", 2, 2, "Hapless prince", "hero", 2, " ", false);
var basic11 = new CardCon("Hunt the Chasmfiend", 2, 2, "Be careful", "hero", 1, " ", false);
var basic12 = new CardCon("Parshendi Carapace", 1, 1, "Enrage the parshendi", "hero", 1, "shield 2", " ", false);
var basic13 = new CardCon("Slavers", 1, 1, "Bad men", "hero", 1, " ", false);
var basic14 = new CardCon("Windspren", 1, 1, "Rides the winds", "hero", 2, " ", false);
var basic15 = new CardCon("Luckspren", 1, 1, "Follows the skyeels", "hero", 1, " ", false);
var basic16 = new CardCon("Painspren", 1, 1, "Litters the battlefield", "hero", 1, " ", false);
var basic17 = new CardCon("Chull", 1, 1, "Beasts of burden", "hero", 1, " ", false);
var basic18 = new CardCon("Shallan's Sketchbook", 2, 2, "Full of notes and drawings", "hero", 2, " ", false);
var basic19 = new CardCon("Weather the Highstorm", 3, 3, "Seek shelter", "hero", 1, " ", false);
var basic20 = new CardCon("Lead By Example", 2, 2, "Never surrender", "hero", 1, " ", false);

var currentEnemy;
var stormCounter = 0;
var gameMode = "story";
var stageComplete = 0;
var currentHeroPostion = 0;
var enemyNumber = 0;
var itemArray = [rustySword, battleSpear, shardblade];
var enemyArray = [enemy0Slot, enemy1Slot, enemy2Slot];
var cardArray = [samp1, samp2, samp3, samp4];
var rewardsArray = [{name: "Rusty Sword",item: rustySword}, {name: "BattleSpear",item: battleSpear}, {name: "Shallan", item: shallanH}];
var collectionArray = [samp1, samp2, samp3, samp4];
var stage1 = [new EnemyCon("Parshendi", 25, 3, 2, null), new EnemyCon("Parshendi", 25, 3, 2, null), new EnemyCon("Parshendi", 25, 3, 2, null)];
var stage2 = [new EnemyCon("Dragon", 50, 7, 4, dragonImg), new EnemyCon("Goblin", 15, 3, 2, goblinImg), new EnemyCon("Goblin", 15, 3, 2, goblinImg)];

function shuffle(a) {
    for (let i = a.length; i; i--) {
        let j = Math.floor(Math.random() * i);
        [a[i - 1], a[j]] = [a[j], a[i - 1]];
    }
}

function changeBackgroundColor() {
	
}

class GameScreenHub extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			heroSelect: null,
			gameScreen: false,
			characterSelectScreen: true,
			auxilaryScreen: false,
			showItems: false,
			collectionScreen: false,
			attack: 0,
			equipment: null,
			score: 0,
			heroHp: 0
		}
		this.changeHero = this.changeHero.bind(this);
		this.goToGameScreen = this.goToGameScreen.bind(this);
		this.goToCharacterScreen = this.goToCharacterScreen.bind(this);
		this.equipItem = this.equipItem.bind(this);
		this.auxilaryScreen = this.auxilaryScreen.bind(this);
		this.showCollection = this.showCollection.bind(this);
		this.changeScore = this.changeScore.bind(this);
		this.changeHeroHp = this.changeHeroHp.bind(this);
		this.checkDeckContents = this.checkDeckContents.bind(this);
	}
	changeHeroHp(newHp){
		this.state.heroSelect.hp = newHp;
		this.setState({
			heroHp: newHp
		});
	}
	changeScore(){
		this.setState({
			score: this.state.score + 100
		});
	}
	changeHero(data){
		var selectedHero = data.id;
		const x = document.getElementsByClassName("heroSelect");
		for (var i=0; i < x.length; i ++ ){
			x[i].classList.remove("highlightedHero");
		}
		const div = document.getElementById(data.id);
		div.classList.add("highlightedHero");

		if(selectedHero === "kaladinH"){
			this.setState({
				heroSelect: kaladinH,
				showItems: true,
				attack: kaladinH.attack
			}, () => {
				this.changeHeroHp(kaladinH.hp);
				player = kaladinH;
			});
		}else if(selectedHero === "shallanH"){
			this.changeHeroHp(shallanH.hp);
			this.setState({
				heroSelect: shallanH,
				showItems: true,
				attack: shallanH.attack
			});
			player = shallanH;
		}else if(selectedHero === "dalinarH"){
			this.changeHeroHp(dalinarH.hp);
			this.setState({
				heroSelect: dalinarH,
				showItems: true,
				attack: dalinarH.attack
			});
			player = dalinarH;
		}
		console.log(player);
	}
	goToGameScreen(){
		if(player === undefined){
			console.log("Pick a hero");
		}else{
			this.setState({
				gameScreen: true,
				characterSelectScreen: false,
				auxilaryScreen: false
			});
		}
	}
	checkDeckContents(){
		if(cardArray.length < 4){
			console.log("add more cards to deck");
		}else{
			this.goToCharacterScreen();
		}
	}
	goToCharacterScreen(){
		this.setState({
			gameScreen: false,
			characterSelectScreen: true,
			auxilaryScreen: false,
			collectionScreen: false
		});
	}
	auxilaryScreen(){
		this.setState({
			gameScreen: false,
			characterSelectScreen: false,
			auxilaryScreen: true
		});
		stageComplete ++;
	}
	showCollection(){
		this.setState({
			gameScreen: false,
			characterSelectScreen: false,
			auxilaryScreen: false,
			collectionScreen: true
		});
	}
	equipItem(childData) {
		console.log(childData);
		this.setState({
			attack: player.attack
		});
		var itemPower = childData.power;
		console.log(childData);
		var heroPower = player.attack;
		var newPower = itemPower + heroPower;
		console.log(newPower);
		this.setState({
			attack: newPower,
			equipment: childData.itemName
		});
		const x = document.getElementsByClassName("itemBox");
		for (var i=0; i < x.length; i ++ ){
			x[i].classList.remove("equippedItem");
			if(childData.id === i){
				x[i].classList.add("equippedItem");
			}else{}
		}
	}
	render() {
		return (
			<div>
			{this.state.characterSelectScreen ? <CharacterSelectScreen heroHp={this.state.heroHp} showCollection={this.showCollection} changeHero={this.changeHero} goToGameScreen={this.goToGameScreen} equipItem={this.equipItem} showItems={this.state.showItems} /> : null }
			{this.state.gameScreen ? <GameScreen changeHeroHp={this.changeHeroHp} heroHp={this.state.heroHp} score={this.state.score} changeScore={this.changeScore} aux={this.auxilaryScreen} heroSelect={this.state.heroSelect} attack={this.state.attack} equipment={this.state.equipment} /> : null }
			{this.state.auxilaryScreen ? <AuxilaryScreen goToCharacterScreen={this.goToCharacterScreen} /> : null }
			{this.state.collectionScreen ? <CollectionScreen checkDeckContents={this.checkDeckContents} /> : null }
			</div>
		)
	}
}

class CharacterSelectScreen extends React.Component {
	componentDidMount(){
		collectionArray = [samp1, samp2, samp3, samp4];
		for(var i=1; i<21; i++){
			var card = eval(`basic${i}`);
			if(card.unlocked === true){
				collectionArray.push(card);
			}else{}
		}
	}
	listItemOptions () {
		const numberOfItems = itemArray;
		const listItems = numberOfItems.map((item, index) => {
			if(item.unlocked === true) {
				return <HeroItem key={index} id={index} equipItem={this.props.equipItem} itemName={item.name} power={item.power} />
			}
		}
		);
		return (
			<div>{listItems}</div>
		)
	}
	render() {
		return (
			<div className="row">
				<div className="col-xs-12">
					<div className="row chooseTitle">Choose Your Hero!</div>
					<div className="row">
						{ kaladinH.unlocked ? <HeroSelectOption name="Kaladin" stats={kaladinH} image={kaladin} id="kaladinH" changeHero={this.props.changeHero} /> : null }
						{ shallanH.unlocked ? <HeroSelectOption name="Shallan" stats={shallanH} image={shallan} id="shallanH" changeHero={this.props.changeHero} /> : null }
						{ dalinarH.unlocked ? <HeroSelectOption name="Dalinar" stats={dalinarH} image={dalinar} id="dalinarH" changeHero={this.props.changeHero} /> : null }
					</div>
					<div className="row chooseTitle">Choose Your Weapon!</div>
					<div className="row">
						{this.listItemOptions()}
					</div>
					<div className="row">
						<button className="coolButton" onClick={this.props.goToGameScreen}>Select</button>
						<button className="coolButton" onClick={this.props.showCollection}>Collection</button>
					</div>
				</div>
			</div>
		)
	}
}

class HeroSelectOption extends React.Component {
	render() {
		return (
			<div className="col-xs-4">
				<div className="row heroSelect" id={this.props.id} onClick={() => this.props.changeHero(this.props)}>
					<img className="characterImage col-xs-7" src={this.props.image} alt={this.props.name} />
					<div className="col-xs-5">
						<div className="row heroSelectName">{this.props.name}</div>
						<div className="row"><img className="col-xs-4 heartIcon" src={heart} /> <span className="col-xs-offset-4 col-xs-8">{this.props.stats.hp}</span></div>
						<div className="row"><img className="col-xs-4 powerIcon" src={power} />  <span className="col-xs-8">{this.props.stats.attack}</span></div>
						<div className="row"><img className="col-xs-4 shieldIcon" src={shield} /> <span className="col-xs-8">{this.props.stats.shield}</span></div>
					</div>
				</div>
			</div>
		)
	}
}

class GameScreen extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			0: enemyArray[0].hp,
			1: enemyArray[1].hp,
			2: enemyArray[2].hp,
			currentItem: 0,
			heroPosition: [true,false,false],
			cards: [],
			cardDisplay: false,
			playerShield: 0,
			enemySab: []

		}
		this.playerAttack = this.playerAttack.bind(this);
		this.handleKeyPress = this.handleKeyPress.bind(this);
		this.heroDraw = this.heroDraw.bind(this);
		this.chooseCard = this.chooseCard.bind(this);
		this.enemyAttackAction = this.enemyAttackAction.bind(this);
		this.switchEnemyArray = this.switchEnemyArray.bind(this);
		this.triggerEnemyDeath = this.triggerEnemyDeath.bind(this);
		this.checkCardAbility = this.checkCardAbility.bind(this);
	}
	componentDidMount() {
		this.setState({
			playerShield: player.shield,
			enemySab: [enemyArray[0].sabotoge, enemyArray[1].sabotoge, enemyArray[2].sabotoge],
		});
	}
	chooseCard(card) {
		var cardPower = card.power;
		var newAttack = this.props.attack + cardPower;
		this.setState({
			cardDisplay: false,
			cards: []
		}, () => {
			this.checkCardAbility(card);
		    //this.playerAttack(newAttack);
		    document.getElementsByClassName("enemyCharacterBox")[currentEnemy].classList.remove("targetedEnemy");
		});
	}
	checkCardAbility(card){
		var cardPower = card.power;
		var newAttack = this.props.attack + cardPower;
		if (card.ability.indexOf("shield") >= 0){
		 	var thenum = parseInt(card.ability.match(/\d+/)[0]);
		 	var boostedShield = this.state.playerShield + thenum
		 	this.setState({
		 		playerShield: boostedShield
		 	}, () => {
		 		this.playerAttack(newAttack);
		 	})
		}else if(card.ability.indexOf("grow") >=0){
			console.log(card.power);
			card.power ++;
			console.log(card.power);
			this.playerAttack(newAttack);
		}else if(card.ability.indexOf("purge") >=0){
			shuffle(cardArray);
			for(var i=0; i < cardArray.length; i++){
				console.log(cardArray[i].type);
				if(cardArray[i].type === "enemy"){
					console.log("destroyed " + cardArray[i].name);
					cardArray.splice(i, 1);
					break;
				}else{
					console.log("no enemy cards");
				}
			}
			this.playerAttack(newAttack);
		}else{
			this.playerAttack(newAttack);
		}
	}
	heroDraw() {
		if( typeof currentEnemy === 'undefined' ){
			console.log("Select an enemy to attack!");
		}else{
			var numberDrawn = this.props.attack;
			console.log(numberDrawn);
			shuffle(cardArray);
			var selectedCards = cardArray.slice(0, numberDrawn);
			console.log(cardArray);
			this.setState({
				cardDisplay: true,
				cards: [selectedCards]
			});
		}
	}
	playerAttack(newAttack) {
		if(enemyArray[currentEnemy].hp <= 0){
		console.log("He's dead, pick another target.");
		}else{
			var enemyHealth = enemyArray[currentEnemy].hp;
			if(newAttack < 0){
				var heroAttack = 0;
			}else{
				var heroAttack = newAttack;
			}
			var enemyHp = enemyHealth - heroAttack;
			document.getElementsByClassName("heroDamageIndicator")[(currentEnemy + 1)].append("-" + heroAttack);
			document.getElementsByClassName("heroDamageIndicator")[(currentEnemy + 1)].style.display="inline";
			setTimeout(() => { 
				document.getElementsByClassName("heroDamageIndicator")[(currentEnemy + 1)].innerHTML="";
				document.getElementsByClassName("heroDamageIndicator")[(currentEnemy + 1)].style.display="none";
				if(enemyHp <= 0){
					enemyArray[currentEnemy].hp = 0;
					this.setState({
						[currentEnemy]: 0
					});
					this.triggerEnemyDeath(currentEnemy);
				}else{
					enemyArray[currentEnemy].hp = enemyHp;
					this.setState({
						[currentEnemy]: enemyHp
					}, () => {
						this.enemyAttackAction(0);
					});
				}
			}, 500);
		}
	}
	triggerEnemyDeath(enemy) {
		var deadEnemy = document.getElementById(enemy);
		deadEnemy.classList.add("fadeOut");
		setTimeout(() => {
			this.props.changeScore();
			deadEnemy.classList.remove("fadeOut");
			enemyArray.splice(deadEnemy.id, 1);
			if(enemyArray.length === 0){
				console.log("They're all dead. You win!");
				this.props.aux();
				this.switchEnemyArray();
			}else{
				var currentSabArray = [];
				for(var i=0; i < enemyArray.length; i++){
					currentSabArray.push(enemyArray[i].sabotoge);
				}
				this.setState({
					enemySab: currentSabArray
				}, () => {
					this.enemyAttackAction(0);
				});
			}
		}, 500);
	}
	enemyAttackAction(enemyNumber) {
		console.log(enemyArray[enemyNumber].name);
		const x = document.getElementsByClassName("enemyCharacterBox");
		for (var i=0; i < x.length; i ++ ){
			x[i].style.borderColor="black";
		}
		document.getElementById(enemyNumber).classList.add("attackingEnemy");
		if(this.state.playerShield > 0){
			let playerShield = this.state.playerShield;
			let enemyAttack = enemyArray[enemyNumber].attack;
			const shieldDamage = playerShield - enemyAttack;
			document.getElementsByClassName("heroDamageIndicator")[0].append("-" + enemyAttack);
			document.getElementsByClassName("heroDamageIndicator")[0].style.display="inline";
			setTimeout(() => { 
				document.getElementsByClassName("heroDamageIndicator")[0].innerHTML="";
				document.getElementsByClassName("heroDamageIndicator")[0].style.display="none";
			}, 500);
			if(shieldDamage < 0){
				var extraDamage = this.props.heroHp + shieldDamage;
				this.props.changeHeroHp(extraDamage);
				this.setState({
					playerShield: 0
				});
				if(enemyArray[enemyNumber].sabotoge > 0){
					var enemyCard = new CardCon(enemyArray[enemyNumber].name, -1, -(enemyArray[enemyNumber].attack), "Bad Card", "enemy", 0, "nothing");
					cardArray.push(enemyCard);
					enemyArray[enemyNumber].sabotoge --;
					var currentSabArray = [];
					for(i=0; i < enemyArray.length; i++){
						currentSabArray.push(enemyArray[i].sabotoge);
					}
					this.setState({
						enemySab: currentSabArray
					});
				}else{}
			}else{
				this.setState({
					playerShield: shieldDamage
				});
			}
		}else{
			let playerHealth = this.props.heroHp;
			console.log(playerHealth);
			let enemyAttack = enemyArray[enemyNumber].attack;
			const playerHp = playerHealth - enemyAttack;
			if(enemyArray[enemyNumber].sabotoge > 0){
				var enemyCard2 = new CardCon(enemyArray[enemyNumber].name, -1, -(enemyArray[enemyNumber].attack), "Bad Card", "enemy", 0, "nothing");
				cardArray.push(enemyCard2);
				enemyArray[enemyNumber].sabotoge --;
				this.setState({
					enemySab: [enemyArray[0].sabotoge, enemyArray[1].sabotoge, enemyArray[2].sabotoge]
				});
			}else{}
			document.getElementsByClassName("heroDamageIndicator")[0].append("-" + enemyAttack);
			document.getElementsByClassName("heroDamageIndicator")[0].style.display="inline";
			setTimeout(() => { 
				document.getElementsByClassName("heroDamageIndicator")[0].innerHTML="";
				document.getElementsByClassName("heroDamageIndicator")[0].style.display="none";
				if(playerHp <= 0){
					this.props.changeHeroHp(0);
				}else{
					this.props.changeHeroHp(playerHp);
				}
			}, 500);
		}
		setTimeout(() => {
			stormCounter ++;
			changeBackgroundColor();
			document.getElementById(enemyNumber).classList.remove("attackingEnemy");
			for (var i=0; i < x.length; i ++ ){
			x[i].style.borderColor="black";
			}
			if(enemyNumber < (enemyArray.length - 1)){
				enemyNumber ++;
				this.enemyAttackAction(enemyNumber);
			}else if(enemyNumber === (enemyArray.length - 1)){
				this.setState({
					playerShield: player.shield
				});
			}else{}
		}, 1000);
	}
	switchEnemyArray() {
	if(gameMode === "marathon"){
		var enemyList = [new EnemyCon("Goblin", 30, 5, 1, goblinImg),
					 new EnemyCon("Ogre", 30, 5, 2, ogreImg), 
					 new EnemyCon("Snake", 30, 5, 1, snakeImg), 
					 new EnemyCon("Dragon", 30, 5, 3, dragonImg), 
					 new EnemyCon("Hill Giant", 30, 5, 2, hillGiantImg)];
		var enemyList2 = [new EnemyCon("Goblin", 30, 5, 1, goblinImg),
					 new EnemyCon("Ogre", 30, 5, 2, ogreImg), 
					 new EnemyCon("Snake", 30, 5, 1, snakeImg), 
					 new EnemyCon("Dragon", 30, 5, 3, dragonImg), 
					 new EnemyCon("Hill Giant", 30, 5, 2, hillGiantImg)];
		var enemyList3 = [new EnemyCon("Goblin", 30, 5, 1, goblinImg),
					 new EnemyCon("Ogre", 30, 5, 2, ogreImg), 
					 new EnemyCon("Snake", 30, 5, 1, snakeImg), 
					 new EnemyCon("Dragon", 30, 5, 3, dragonImg), 
					 new EnemyCon("Hill Giant", 30, 5, 2, hillGiantImg)];
		var rand0 = enemyList[Math.floor(Math.random() * enemyList.length)];
		var rand1 = enemyList2[Math.floor(Math.random() * enemyList2.length)];
		var rand2 = enemyList3[Math.floor(Math.random() * enemyList3.length)];
		enemy0Slot = rand0;
		enemy1Slot = rand1;
		enemy2Slot = rand2;
		enemyArray = [enemy0Slot, enemy1Slot, enemy2Slot];
	}else{
		var stageName = "stage" + stageComplete;
		var nextStage = eval(stageName);
		console.log(nextStage);
		enemyArray = nextStage;
	}
}	
	handleKeyPress = (event) => {
	  if(event.keyCode === 40) {
	  	if(this.state.heroPosition[0] === true){
		  	this.setState({
				heroPosition: [false, true, false]
			});
			currentHeroPostion = 1;
		}else if(this.state.heroPosition[1] === true){
			this.setState({
				heroPosition: [false, false, true]
			});
			currentHeroPostion = 2;
		}else{}
	  }
	  if(event.keyCode === 38) {
	  	if(this.state.heroPosition[1] === true){
		  	this.setState({
				heroPosition: [true, false, false]
			});
			currentHeroPostion = 0;
		}else if(this.state.heroPosition[2] === true){
			this.setState({
				heroPosition: [false, true, false]
			});
			currentHeroPostion = 1;
		}else{}
	  }
	}

	render() {
		return (
			<div className="col-xs-12">
				<div className="row" id="stageName">Stage {stageComplete + 1}</div>
				<div className="row">
					<ScoreDisplay score={this.props.score} />
				</div>
				<div className="row" id="topRow">
					<div className="col-xs-5" id="characterSide tabIndex" onKeyDown={this.handleKeyPress}>
						<Character attack={this.props.attack} playerShield={this.state.playerShield} heroHp={this.props.heroHp} equipItem={this.equipItem} heroDraw={this.heroDraw} heroPosition={this.state.heroPosition} cards={this.state.cards} chooseCard={this.chooseCard} equipment={this.props.equipment} cardDisplay={this.state.cardDisplay} />
					</div>
					<div className="col-xs-5 col-xs-offset-2" id="enemySide">
						<EnemySide state={this.state} sab={this.state.enemySab} />
					</div>
				</div>
			</div>
		)
	}
}

class ScoreDisplay extends React.Component {
	render() {
		return (
			<div className="col-xs-12" id="scoreDisplay">Score: {this.props.score}</div>
		)
	}
}

class CardDisplayBox extends React.Component {
	listCards () {
		var cards = this.props.cards;
		const numberOfCards = cards[0];
		console.log(numberOfCards);
		const listItems = numberOfCards.map((card, index) =>
			<Card className={card.type} key={index} id={index} name={card.name} cost={card.cost} power={card.power} text={card.text} card={card} chooseCard={this.props.chooseCard} />
		);
		return (
			<div>{listItems}</div>
		)
	}
	render() {
		return (
			<div className="row" id="cardBox">
				<div className="col-xs-12">
					<div className="row">
						{this.listCards()}
					</div>
				</div>
			</div>
		)
	}
}

class Card extends React.Component {
	render() {
		return (
			<div className={`col-xs-12 ${this.props.className}`} onClick={() => this.props.chooseCard(this.props.card)}>
				<div className="row">
					<div className="col-xs-offset-4 col-xs-4 cardPower">{this.props.power}</div>
				</div>
				<div className="row cardName">{this.props.name}</div>
				<div className="row cardText">{this.props.text}</div>
			</div>
		)
	}
}

/*class CollectionCard extends React.Component {
	render() {
		return (
			<div className={`col-xs-12 ${this.props.className}`}>
				<div className="row">
					<div className="col-xs-offset-4 col-xs-4 cardPower">{this.props.power}</div>
				</div>
				<div className="row cardName">{this.props.name}</div>
				<div className="row cardText">{this.props.text}</div>
			</div>
		)
	}
}*/

class EnemySide extends React.Component {
	listBadGuys () {
		const numberOfBadGuys = enemyArray;
		const listItems = numberOfBadGuys.map((badGuy, index) =>
			<Enemy key={index} id={index} name={badGuy.name} eHp={badGuy.hp} sab={this.props.sab[index]} image={badGuy.image} />
		);
		return (
			<div className="col-xs-12">{listItems}</div>
		)
	}

	render() {
		return (
			<div className="row">
				{this.listBadGuys()}
			</div>
		)
	}
}

class Character extends React.Component {
	render() {
		return (
			<div className="row">
				<div className="col-xs-12">
					{this.props.cardDisplay ? <CardDisplayBox chooseCard={this.props.chooseCard} cards={this.props.cards} /> : null }
					<div className="row" id="heroSlot1">
						 {this.props.heroPosition[0] ? <HeroSideSlot attack={this.props.attack} playerShield={this.props.playerShield} heroHp={this.props.heroHp} name={player.name} image={player.image} hp={player.hp} equipItem={this.props.equipItem} heroDraw={this.props.heroDraw} equipment={this.props.equipment} /> : null }
					</div>
					<div className="row" id="heroSlot2">
						{this.props.heroPosition[1] ? <HeroSideSlot attack={this.props.attack} playerShield={this.props.playerShield} heroHp={this.props.heroHp} name={player.name} image={player.image} hp={player.hp} equipItem={this.props.equipItem} heroDraw={this.props.heroDraw} equipment={this.props.equipment} /> : null }
					</div>
					<div className="row" id="heroSlot3">
						{this.props.heroPosition[2] ? <HeroSideSlot attack={this.props.attack} playerShield={this.props.playerShield} heroHp={this.props.heroHp} name={player.name} image={player.image} hp={player.hp} equipItem={this.props.equipItem} heroDraw={this.props.heroDraw} equipment={this.props.equipment} /> : null }
					</div>
				</div>
			</div>
		);
	}
};

class HeroSideSlot extends React.Component {
	render() {
		return (
			<div className="col-xs-12">
				<div className=" heroSideSlot row">
					<div className="col-xs-6">
						<CharacterImage image={player.image} />
						<CharacterName name={player.name} />
					</div>
					<div className="col-xs-6">
						<ShieldSpan playerShield={this.props.playerShield} />
						<HPSpan hp={this.props.heroHp} />
						<CharacterItem attack={this.props.attack} equipment={this.props.equipment} />
						<CharacterActions heroDraw={this.props.heroDraw} />
					</div>
				</div>
			</div>
		)
	}
}

class CharacterActions extends React.Component {
	render() {
		return (
			<div className="row actionRow">
				<button onClick={this.props.heroDraw}>Attack</button>
			</div>
		);
	}
};

class CharacterItem extends React.Component {
	render() {
		return (
			<div className="row characterItem"><img className="powerIcon" src={power} />{this.props.attack}-{this.props.equipment}</div>
		)
	}
}

class CharacterName extends React.Component {
	render() {
		return (
			<div className="row">
				<h1 className="characterName">{this.props.name}</h1>
			</div>
		);
	}
};

class CharacterImage extends React.Component {
	render() {
		return (
			<div className="row">
				<img className="characterImage2 col-xs-6" src={this.props.image} alt={this.props.name} />
			</div>
		);
	}
};

class HPSpan extends React.Component {
	render() {
		return (
			<div className="row hpSpan">
				<img className="col-xs-4 heartIcon" src={heart} /> 
				<span className="col-xs-offset-2 col-xs-4">{this.props.hp}</span>
				<span className="col-xs-2 heroDamageIndicator"></span>
			</div>
		);
	}
};

class ShieldSpan extends React.Component {
	render() {
		return (
			<div className="row">
				<div className="shieldSpan"><img className="shieldIcon" src={shield} /> {this.props.playerShield}</div>
			</div>
		);
	}
};

class HeroItem extends React.Component {
	render() {
		return (
			<div className="itemBox col-xs-4" power={this.props.power} onClick={() => this.props.equipItem(this.props)}>
				<div>{this.props.itemName}</div>
			</div>
		);
	}
}

class Enemy extends React.Component {
	selectEnemyToAttack(id) {
		const x = document.getElementsByClassName("enemyCharacterBox");
		for (var i=0; i < x.length; i ++ ){
			x[i].classList.remove("targetedEnemy");
		}
		document.getElementById(id).classList.add("targetedEnemy");
		currentEnemy = id;
		console.log(currentEnemy);
	}

	render() {
		return (
			<div className="row enemyCharacterBox" id={this.props.id} onClick={() => {this.selectEnemyToAttack(this.props.id)}}>
				<div className="col-xs-12">
					<div className="row">
						<div className="col-xs-6">
							<CharacterImage image={this.props.image} />
							<CharacterName name={this.props.name} />
						</div>
						<div className="col-xs-4">
							<HPSpan hp={this.props.eHp} />
						</div>
						<div className="col-xs-2" id="sabColumn">
							<Sabotoge sab={this.props.sab} />
						</div>
					</div>
				</div>
			</div>
		);
	}
};

class Sabotoge extends React.Component {
	render() {
		var orbs = [];
		for (var i = 0; i < this.props.sab; i++) {
	  		orbs.push(<div className='orb' key={i}></div>);
		}
		return orbs;
	}
}

class AuxilaryScreen extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			rewardCards: [],
			openButton: true
		}
		this.openPack = this.openPack.bind(this);
	}
	componentDidMount(){
		console.log(stageComplete);
		console.log(rewardsArray);
		rewardsArray[stageComplete].item.unlocked = true;
		this.setState({
			openButton: true
		});
	}
	openPack(){
		var rarity;
		var randomWeight = Math.floor((Math.random() * 100) + 1);
		if(randomWeight <= 60){
			rarity = 1;
		}else if(randomWeight <= 90){
			rarity = 2;
		}else{
			rarity = 3;
		}
		shuffle(collectionArray);
		var rewardCard = collectionArray.find(x => x.rarity === rarity);
		cardArray.push(rewardCard);
		this.setState({
			rewardCards: rewardCard,
			openButton: false
		});

	}
	render() {
		return (
			<div className="col-xs-12">
				<div className="row" id="rewardsMessage">Congratulations! Claim your rewards!</div>
				<div className="row" id="rewardsDescription">{rewardsArray[stageComplete].name}</div>
				<button className="coolButton" onClick={this.props.goToCharacterScreen}>Next Stage</button>
				<div className="row" id="rewardCardSlot">
					<Card className={this.state.rewardCards.type} name={this.state.rewardCards.name} cost={this.state.rewardCards.cost} power={this.state.rewardCards.power} text={this.state.rewardCards.text} card={this.state.rewardCards}/>
				</div>
				{this.state.openButton ? <button className="coolButton" id="openPackButton" onClick={this.openPack}>Show Card</button> : null }
			</div>
		);
	}
};

class CollectionScreen extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			currentDeck: [samp1,samp2,samp3,samp4],
			items: [
				{ id: 1, name: 'Item 1'},
				{ id: 2, name: 'Item 2'},
				{ id: 3, name: 'Item 3'},
				{ id: 4, name: 'Item 4'},
			]
		}
	}
	addToDeck(name) {
	    console.log(name);
		var found = false;
		if(cardArray.length > 0){
			console.log(cardArray.length);
			for(var i=0; i < cardArray.length; i++){
				if(name === cardArray[i].name){
					console.log("already in deck");
					found = true;
					break;
				}else{}
			}
			if(found === false){
				for(var j=0; j < collectionArray.length; j++){
					if(name === collectionArray[j].name){
						var oldDeck = [...this.state.currentDeck];
			    		oldDeck.push(collectionArray[j]);
						this.setState({
							currentDeck: oldDeck
						}, () => {
							cardArray = this.state.currentDeck;
						});
					}else{}
				}
			}else{}
		}else{
			for(var i=0; i < collectionArray.length; i++){
				if(name === collectionArray[i].name){
					var oldDeck = [...this.state.currentDeck];
		    		oldDeck.push(collectionArray[i]);
					this.setState({
						currentDeck: oldDeck
					}, () => {
						cardArray = this.state.currentDeck;
					});
				}else{}
			}
		}
	}
	removeFromDeck(name) {
		console.log(name);
		console.log(cardArray);
		for(var i=0; i < cardArray.length; i++){
			console.log(cardArray[i]);
			if(name === cardArray[i].name){
				cardArray.splice(i, 1);
				this.setState({
					currentDeck: cardArray
				});
			}
		}
	}
	listCollection() {
		var cards = collectionArray;
		const listCollection = cards.map((card, index) =>
			<CollectionCard className={card.type} key={index} id={index} name={card.name} cost={card.cost} power={card.power} text={card.text} handleDrop={(name) => this.addToDeck(card.name)} />
		);
		return (
			<div>{listCollection}</div>
		)
	}
	listCurrentDeck() {
		var cards = this.state.currentDeck;
		const listDeck = cards.map((card, index) =>
			<CollectionCard className={card.type} key={index} card={card} id={index} name={card.name} cost={card.cost} power={card.power} text={card.text} handleDrop={(name) => this.removeFromDeck(card.name)} />
		);
		return (
			<div>{listDeck}</div>
		)
	}
	render() {
		return (
			<div className="col-xs-12">
				<div className="row">
					<button className="coolButton" onClick={this.props.checkDeckContents}>Back</button>
				</div>
				<div className="row">
					<div className="col-xs-2">
						<Target />
					</div>
					<div className="col-xs-10" id="deckRow">
						{this.listCurrentDeck()}
					</div>
				</div>
				<div className="row">
					{this.listCollection()}
				</div>
			</div>
		)
	}
}
export default DragDropContext(HTML5Backend)(GameScreenHub)