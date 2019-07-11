import React from 'react';
import ReactDOM from 'react-dom';
import { DragDropContext } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'
import kaladin from './cardPics/kaladin.jpg';
import shallan from './cardPics/shallan.jpg';
import dalinar from './cardPics/dalinar.jpg';
import dragonImg from './cardPics/dragon.jpg';
import goblinImg from './cardPics/goblin.jpg';
import hillGiantImg from './cardPics/hillGiant.jpeg';
import ogreImg from './cardPics/ogre.jpg';
import snakeImg from './cardPics/snake.jpg';
import rockImg from './cardPics/rock.jpg';
import placeholderImg from './cardPics/placeholder.jpg';
import Item from './item';
import Target from './Target';
import CollectionCard from './CollectionCard';
import CreateCharacter from './CreateCharacter';
import DeleteZone from './deleteZone.js';
import heart from './assets/heart.png';
import shield from './assets/shield.png';
import power from './assets/power.jpg';
import int from './assets/int.png';
import windrunner from './radiantSymbols/windrunner.png';
import lightweaver from './radiantSymbols/lightweaver.png';
import stormlight from './radiantSymbols/stormlight.jpg';
import elsecaller from './radiantSymbols/elsecaller.png';
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

function ItemCon(name, power, type, cost, unlocked, purchased){
	this.name = name;
	this.power = power;
	this.type = type;
	this.cost = cost;
	this.unlocked = unlocked;
	this.purchased = purchased;
}

function HeroCon(name, hp, attack, intelligence, shield, image, unlocked, counter){
	this.name = name;
	this.hp = hp;
	this.attack = attack;
	this.intelligence = intelligence;
	this.shield = shield;
	this.image = image;
	this.unlocked = unlocked;
	this.counter = counter;
}

function CardCon(name, cost, power, text, alignment, rarity, ability, unlocked, type, image, faction){
	this.name = name;
	this.cost = cost;
	this.power = power;
	this.text = text;
	this.alignment = alignment;
	this.rarity = rarity;
	this.ability = ability;
	this.unlocked = unlocked;
	this.type = type;
	this.image = image;
	this.faction = faction;
}

function SprenCardCon(name, cost, power, text, alignment, rarity, trigger, unlocked, image, bond){
	this.name = name;
	this.cost = cost;
	this.power = power;
	this.text = text;
	this.alignment = alignment;
	this.rarity = rarity;
	this.trigger = trigger;
	this.unlocked = unlocked;
	this.image = image;
	this.bond = bond;
	this.grow = function(trigger){
		if(trigger === "death"){
			this.power ++
		}
	}
}

var painspren = new SprenCardCon("Painspren", 0, 0, "Gain power when you kill enemies", "spren", 1, "death", true, " ", false);
var windspren = new SprenCardCon("Windspren", 0, 0, "Gain power when storm approaches", "spren", 1, "storm", true, " ", false);

const kaladinH = new HeroCon("Kaladin", 100, 1, 3, 6, kaladin, true);
const shallanH = new HeroCon("Shallan", 120, 3, 4, 5, shallan, false);
const dalinarH = new HeroCon("Dalinar", 150, 4, 2, 8, dalinar, false);

const rustySword = new ItemCon("Rusty Sword", 1, "weapon", 1, true, true);
const battleSpear = new ItemCon("Battle Spear", 2, "weapon", 2, true, true);
const shardblade = new ItemCon("Shardblade", 3, "weapon", 3, true, true);
const leatherPads = new ItemCon("Leather Pads", 1, "armor", 1, true, true);
const parshendiCarapace = new ItemCon("Parshendi Carapace", 2, "armor", 2, true, true);
const shardplate = new ItemCon("Shardplate", 3, "armor", 3, true, true);


var samp1 = new CardCon("Bridgeman", 2, "x2", "Double your hero's strength for the next attack", "hero", 0, "multiply", true, "");
var samp2 = new CardCon("Rock", 3, 2, "Recruit: Destroy 1 enemy card", "hero", 0, "", true, "support", rockImg, windrunner);
var samp3 = new CardCon("Moash", 4, 2, "Stun 1 enemy ", "hero", 0, "stun", true, "character", placeholderImg, placeholderImg);
var samp4 = new CardCon("To the Skies", 1, 1, "Speed 3", "hero", 0, "speed 3", true, "stormlight", placeholderImg, windrunner);
var basic1 = new CardCon("Protect the Weak", 1, 1, "Shield 2", "hero", 1, "shield 2", true, "");
var basic2 = new CardCon("Adolin", 5, 5, "Shardbearer", "hero", 3, " ", true, "character", placeholderImg, stormlight);
var basic3 = new CardCon("Sadeas", 4, 4, "Scheming Highlord", "hero", 2, " ", true, "character", placeholderImg, stormlight);
var basic4 = new CardCon("Training", 0, 0, "Gains 1 power each time you choose this card", "hero", 2, "grow", true);
var basic5 = new CardCon("Jasnah", 3, 3, "Research", "hero", 3, "research 3", true, "character", placeholderImg, elsecaller);
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
var basic21 = new CardCon("Light Mirage", 2, 2, "Decoy-avoid any sabatoges this turn", "hero", 2, "decoy", true, "stormlight", placeholderImg, lightweaver);
var basic22 = new CardCon("Recharge", 0, 0, "Restore 1 Stormlight", "hero", 1, "recharge 1", true);

var currentEnemy;
var playerHero;
var gameMode = "marathon";
var stageComplete = 0;
var currentHeroPostion = 0;
var enemyNumber = 0;
var itemArray = [rustySword, battleSpear, shardblade, leatherPads, parshendiCarapace, shardplate];
var enemyArray = [enemy0Slot, enemy1Slot, enemy2Slot];
var cardArray = [samp1, samp2, samp3, samp4];
var recruitArray = [];
var sprenArray = [painspren, windspren];
//var rewardsArray = [{name: "Rusty Sword",item: rustySword}, {name: "BattleSpear",item: battleSpear}, {name: "Shallan", item: shallanH}];
var collectionArray = [samp1, samp2, samp3, samp4];
var stage1 = [new EnemyCon("Parshendi", 25, 3, 2, null), new EnemyCon("Parshendi", 25, 3, 2, null), new EnemyCon("Parshendi", 25, 3, 2, null)];
var stage2 = [new EnemyCon("Dragon", 50, 7, 4, dragonImg), new EnemyCon("Goblin", 15, 3, 2, goblinImg), new EnemyCon("Goblin", 15, 3, 2, goblinImg)];

function shuffle(a) {
    for (let i = a.length; i; i--) {
        let j = Math.floor(Math.random() * i);
        [a[i - 1], a[j]] = [a[j], a[i - 1]];
    }
}

class GameScreenHub extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			heroSelect: null,
			gameScreen: false,
			characterSelectScreen: false,
			auxilaryScreen: false,
			collectionScreen: false,
			equipmentScreen: false,
			createScreen: true,
			attack: 0,
			heroShield: 0,
			equipment: null,
			score: 0,
			heroHp: 0,
			stormCounter: 5,
			enemyArray: [enemyArray[0], enemyArray[1], enemyArray[2]],
			sphereCount: 2,
			sprenArray: sprenArray,
			itemArray: itemArray
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
		this.goToEquipmentScreen = this.goToEquipmentScreen.bind(this);
		this.decreaseStormCounter = this.decreaseStormCounter.bind(this);
		this.increaseStormCounter = this.increaseStormCounter.bind(this);
		this.resetStormCounter = this.resetStormCounter.bind(this);
		this.highStorm = this.highStorm.bind(this);
		this.switchEnemyArray = this.switchEnemyArray.bind(this);
		this.createNewCharacter = this.createNewCharacter.bind(this);
		this.setSphereCount = this.setSphereCount.bind(this);
		this.chooseItemAction = this.chooseItemAction.bind(this);
		this.purchaseItem = this.purchaseItem.bind(this);
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
	createNewCharacter(data){
		console.log(data);
		playerHero = new HeroCon(data.name, 100, data.attack, data.intelligence, data.shield, kaladin, true);
		console.log(playerHero);
		this.setState({
			attack: playerHero.attack,
			heroSelect: playerHero,
			heroShield: playerHero.shield
		}, () => {
				this.changeHeroHp(playerHero.hp);
				player = playerHero;
			});
		this.goToCharacterScreen();
	}
	increaseStormCounter(number){
		var currentStorm = this.state.stormCounter + number;
		this.setState({
			stormCounter: currentStorm
		});
	}
	decreaseStormCounter(){
		var currentStorm = this.state.stormCounter - 1;
		if(currentStorm === 0){
			console.log("Storm has arrived, you're all dead");
			this.highStorm();
		}else{
			this.setState({
				stormCounter: currentStorm
			});
		}
	}
	resetStormCounter(){
		this.setState({
			stormCounter: 15
		});
	}
	highStorm(){
		var score = this.state.score;
		this.setState({
			score: score
		});
		this.auxilaryScreen()
	}
	setSphereCount(amount){
		var newTotal = this.state.sphereCount + amount;
		this.setState({
			sphereCount: newTotal
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
				attack: kaladinH.attack
			}, () => {
				this.changeHeroHp(kaladinH.hp);
				player = kaladinH;
			});
		}else if(selectedHero === "shallanH"){
			this.changeHeroHp(shallanH.hp);
			this.setState({
				heroSelect: shallanH,
				attack: shallanH.attack
			});
			player = shallanH;
		}else if(selectedHero === "dalinarH"){
			this.changeHeroHp(dalinarH.hp);
			this.setState({
				heroSelect: dalinarH,
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
	goToEquipmentScreen(){
		this.setState({
			equipmentScreen: true,
			characterSelectScreen: false
		});
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
			collectionScreen: false,
			equipmentScreen: false,
			createScreen: false
		});
	}
	auxilaryScreen(){
		this.setState({
			gameScreen: false,
			characterSelectScreen: false,
			auxilaryScreen: true
		});
	}
	showCollection(){
		this.setState({
			gameScreen: false,
			characterSelectScreen: false,
			auxilaryScreen: false,
			collectionScreen: true
		});
	}
	switchEnemyArray() {
		if(document.getElementById("stunned") === null){

		}else{
			document.getElementById("stunned").classList.remove("stunned");
		}
		if(gameMode === "marathon"){
			var enemyList = [new EnemyCon("Goblin", 5, 5, 1, goblinImg),
						 new EnemyCon("Ogre", 5, 5, 2, ogreImg), 
						 new EnemyCon("Snake", 5, 5, 1, snakeImg), 
						 new EnemyCon("Dragon", 5, 5, 3, dragonImg), 
						 new EnemyCon("Hill Giant", 5, 5, 2, hillGiantImg)];
			var enemyList2 = [new EnemyCon("Goblin", 5, 5, 1, goblinImg),
						 new EnemyCon("Ogre", 5, 5, 2, ogreImg), 
						 new EnemyCon("Snake", 5, 5, 1, snakeImg), 
						 new EnemyCon("Dragon", 5, 5, 3, dragonImg), 
						 new EnemyCon("Hill Giant", 5, 5, 2, hillGiantImg)];
			var enemyList3 = [new EnemyCon("Goblin", 5, 5, 1, goblinImg),
						 new EnemyCon("Ogre", 5, 5, 2, ogreImg), 
						 new EnemyCon("Snake", 5, 5, 1, snakeImg), 
						 new EnemyCon("Dragon", 5, 5, 3, dragonImg), 
						 new EnemyCon("Hill Giant", 5, 5, 2, hillGiantImg)];
			var rand0 = enemyList[Math.floor(Math.random() * enemyList.length)];
			var rand1 = enemyList2[Math.floor(Math.random() * enemyList2.length)];
			var rand2 = enemyList3[Math.floor(Math.random() * enemyList3.length)];
			enemy0Slot = rand0;
			enemy1Slot = rand1;
			enemy2Slot = rand2;
			enemyArray = [enemy0Slot, enemy1Slot, enemy2Slot];
			this.setState({
				enemyArray: enemyArray
			});

		}else{
			var stageName = "stage" + stageComplete;
			var nextStage = eval(stageName);
			enemyArray = nextStage;
		}
	}
	chooseItemAction(childData) {
		console.log(childData.purchased);
		if(childData.purchased === false){
			this.equipItem(childData);
		}else{
			this.purchaseItem(childData);
		}
	}
	purchaseItem(childData){
		console.log(childData);
		if(this.state.sphereCount >= childData.cost){
			console.log("enough money");
			for(var i=0; i < itemArray.length; i++){
				if(itemArray[i].name === childData.itemName){
					itemArray[i].purchased = false;
					this.setState({
						itemArray: itemArray,
						sphereCount: this.state.sphereCount - childData.cost
					});
				}else{}
			}
		}else{
			console.log("not enough spheres");
		}
	}
	equipItem(childData) {
		var itemPower = childData.power;
		if(childData.type === "weapon"){
			this.setState({
				attack: player.attack
			}, () => {
				var heroPower = player.attack;
				var newPower = itemPower + heroPower;
				this.setState({
					attack: newPower,
					equipment: childData.itemName
				});
			});
		}else if(childData.type === "armor"){
			this.setState({
				heroShield: player.shield
			}, () => {
				var newShield = itemPower + this.state.heroShield;
				this.setState({
					heroShield: newShield
				});
			})
		}
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
			{this.state.createScreen ? <CreateCharacter createNewCharacter={this.createNewCharacter} /> : null }
			{this.state.characterSelectScreen ? <CharacterSelectScreen shield={this.state.heroShield} spheres={this.state.sphereCount} attack={this.state.attack} playerHero={playerHero} switchEnemyArray={this.switchEnemyArray} goToEquipmentScreen={this.goToEquipmentScreen} heroHp={this.state.heroHp} showCollection={this.showCollection} changeHero={this.changeHero} goToGameScreen={this.goToGameScreen} /> : null }
			{this.state.gameScreen ? <GameScreen int={this.state.heroSelect.intelligence} shield={this.state.heroShield} sprenArray={this.state.sprenArray} switchEnemyArray={this.switchEnemyArray} increaseStormCounter={this.increaseStormCounter} decreaseStormCounter={this.decreaseStormCounter} stormCounter={this.state.stormCounter} changeHeroHp={this.changeHeroHp} heroHp={this.state.heroHp} score={this.state.score} changeScore={this.changeScore} aux={this.auxilaryScreen} heroSelect={this.state.heroSelect} attack={this.state.attack} equipment={this.state.equipment} enemyArray={this.state.enemyArray} /> : null }
			{this.state.auxilaryScreen ? <AuxilaryScreen setSphereCount={this.setSphereCount} score={this.state.score} resetStormCounter={this.resetStormCounter} goToCharacterScreen={this.goToCharacterScreen} /> : null }
			{this.state.collectionScreen ? <CollectionScreen checkDeckContents={this.checkDeckContents} /> : null }
			{this.state.equipmentScreen ? <EquipmentScreen itemArray={this.state.itemArray} heroShield={this.state.heroShield} spheres={this.state.sphereCount} setSphereCount={this.setSphereCount} playerHero={playerHero} chooseItemAction={this.chooseItemAction} attack={this.state.attack} goToCharacterScreen={this.goToCharacterScreen} /> : null }
			</div>
		)
	}
}

class EquipmentScreen extends React.Component {
	listWeaponOptions () {
		const numberOfItems = this.props.itemArray;
		const listItems = numberOfItems.map((item, index) => {
			if(item.unlocked === true && item.type === "weapon") {
				return <HeroItem key={index} id={index} chooseItemAction={this.props.chooseItemAction} itemName={item.name} type={item.type} power={item.power} cost={item.cost} purchased={item.purchased} />
			}
		}
		);
		return (
			<div>{listItems}</div>
		)
	}
	listArmorOptions () {
		const numberOfItems = this.props.itemArray;
		const listItems = numberOfItems.map((item, index) => {
			if(item.unlocked === true && item.type === "armor") {
				return <HeroItem key={index} id={index} chooseItemAction={this.props.chooseItemAction} itemName={item.name} type={item.type} power={item.power} cost={item.cost} purchased={item.purchased} />
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
					<div className="row chooseTitle">
						Armory
					</div>
					<div className="row">
						<div className="col-xs-9">
							<HeroSelectOption name={this.props.playerHero.name} stats={this.props.playerHero} image={kaladin} attack={this.props.attack} shield={this.props.heroShield} id="playerHero" />
						</div>
						<div className="col-xs-3">
							Spheres: {this.props.spheres}
						</div>
					</div> 
					<div className="row">
						<div className="col-xs-6">
							<div className="row equipmentTitle">
								Weapons
							</div>
							<div className="row">
								<div className="col-xs-offset-1 col-xs-10">
									{this.listWeaponOptions()}
								</div>
							</div>
						</div>
						<div className="col-xs-6 equipmentTitle">
							<div className="row">Armor</div>
							<div className="row">
								<div className="col-xs-offset-1 col-xs-10">
									{this.listArmorOptions()}
								</div>
							</div>
						</div>
					</div>
					<div className="row">
						<button className="coolButton" onClick={this.props.goToCharacterScreen}>Back</button>
					</div>
				</div>
			</div>
		)
	}
}

class CharacterSelectScreen extends React.Component {
	componentDidMount(){
		collectionArray = [samp1, samp2, samp3, samp4];
		for(var i=1; i<23; i++){
			var card = eval(`basic${i}`);
			if(card.unlocked === true){
				collectionArray.push(card);
			}else{}
		}
		this.props.switchEnemyArray();
	}
	render() {
		return (
			<div className="row">
				<div className="col-xs-12">
					<div className="row chooseTitle">Warcamps</div>
					<div className="row">
						<div className="col-xs-9">
							<HeroSelectOption stats={this.props.playerHero} shield={this.props.shield} attack={this.props.attack} image={kaladin} id="playerHero" />
							{ /*kaladinH.unlocked ? <HeroSelectOption name="Kaladin" stats={kaladinH} attack={this.props.attack} image={kaladin} id="kaladinH" changeHero={this.props.changeHero} /> : null }
							{ shallanH.unlocked ? <HeroSelectOption name="Shallan" stats={shallanH} image={shallan} id="shallanH" changeHero={this.props.changeHero} /> : null }
							{ dalinarH.unlocked ? <HeroSelectOption name="Dalinar" stats={dalinarH} image={dalinar} id="dalinarH" changeHero={this.props.changeHero} /> : null */}
						</div>
						<div className="col-xs-3">
							<div>Spheres: {this.props.spheres}</div>
						</div>
					</div>
					<div className="row">
						<div className="col-xs-4">
							<button className="campButton" onClick={this.props.goToGameScreen}>Adventure</button>
						</div>
						<div className="col-xs-4">
							<button className="campButton" onClick={this.props.showCollection}>Deck</button>
						</div>
						<div className="col-xs-4">
							<button className="campButton" onClick={this.props.goToEquipmentScreen}>Equipment</button>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

class HeroSelectOption extends React.Component {
	render() {
		return (
			<div className="row">
				<div className="col-xs-offset-5 col-xs-6">
					<div className="row heroSelect" id={this.props.id}>
						<div className="col-xs-7">
							<div className="row">
								<img className="col-xs-12 characterImage" src={this.props.image} alt={this.props.stats.name} />
							</div>
							<div className="row">
								<div className="col-xs-12 heroSelectName">{this.props.stats.name}</div>
							</div>
						</div>
						<div className="col-xs-5" id="statCol">
							<div className="row statIcon"><img className="col-xs-4 heartIcon" src={heart} /> <span className="col-xs-offset-4 col-xs-8">{this.props.stats.hp}</span></div>
							<div className="row statIcon"><img className="col-xs-4 powerIcon" src={power} />  <span className="col-xs-8">{this.props.attack}</span></div>
							<div className="row statIcon"><img className="col-xs-4 intIcon" src={int} />  <span className="col-xs-8">{this.props.stats.intelligence}</span></div>
							<div className="row statIcon"><img className="col-xs-4 shieldIcon" src={shield} /> <span className="col-xs-8">{this.props.shield}</span></div>
						</div>
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
			playerInt: 0,
			enemySab: [],
			stormlight: 5,
			recruit: false,
			recruitArray: recruitArray,
			research: false,
			researchNum: 0,
			cardAbility: true,
			decoy: false

		}
		this.playerAttack = this.playerAttack.bind(this);
		this.handleKeyPress = this.handleKeyPress.bind(this);
		this.heroDraw = this.heroDraw.bind(this);
		this.chooseCard = this.chooseCard.bind(this);
		this.enemyAttackAction = this.enemyAttackAction.bind(this);
		this.triggerEnemyDeath = this.triggerEnemyDeath.bind(this);
		this.checkCardAbility = this.checkCardAbility.bind(this);
		this.updateEnemySab = this.updateEnemySab.bind(this);
		this.toggleRecruitState = this.toggleRecruitState.bind(this);
		this.deadRecruit = this.deadRecruit.bind(this);
		this.recruitAction = this.recruitAction.bind(this);
		this.chooseResearch = this.chooseResearch.bind(this);
	}
	componentDidMount() {
		this.setState({
			playerShield: this.props.shield,
			playerInt: player.intelligence,
			enemySab: [enemyArray[0].sabotoge, enemyArray[1].sabotoge, enemyArray[2].sabotoge],
		});
	}
	updateEnemySab() {
		this.setState({
			enemySab: [enemyArray[0].sabotoge, enemyArray[1].sabotoge, enemyArray[2].sabotoge]
		});
	}
	chooseCard(card) {
		if(this.state.recruit === true){
			this.recruitCharacter(card);
		}else if(this.state.research === true){
			this.chooseResearch(card);
		}else{
			this.setState({
				cardDisplay: false
			}, () => {
				this.checkCardAbility(card);
			    document.getElementsByClassName("enemyCharacterBox")[currentEnemy].classList.remove("targetedEnemy");
			});
		}
	}
	chooseResearch(card) {
		cardArray.push(cardArray.splice(cardArray.indexOf(card), 1)[0]);
		var numberDrawn = this.state.playerInt;
			var selectedCards = cardArray.slice(0, numberDrawn);
			this.setState({
				cards: []
			}, () =>{
				this.setState({
				cards: selectedCards,
				researchNum: this.state.researchNum - 1
				}, () => {
					console.log(this.state.researchNum === 0);
					if(this.state.researchNum === 0){
						this.setState({
							research: false,
							cardAbility: false
						});
					}else{
						console.log("keep reading!!");
					}
				});
			});
	}
	toggleRecruitState(){
		if(this.state.cardDisplay === true){
			if(this.state.recruit === true){
				this.setState({
					recruit: false
				});
				document.getElementById("stormlightOrb").classList.remove("stormlightOn");
			}else if(this.state.recruit === false){
				this.setState({
					recruit: true
				});
				document.getElementById("stormlightOrb").classList.add("stormlightOn");
			}
		}else{}
	}
	recruitCharacter(card){
		if(card.type === "character" || card.type === "support"){
			if(this.state.stormlight >= card.cost){
				var recruitedChar = new HeroCon(card.name, (card.cost * 10), card.power, 0, 4, card.image, true, 3);
				recruitArray.push(recruitedChar);
				var newStormlight = this.state.stormlight - card.cost;
				var removeRecruit = this.state.cards;
				for(var i=0; i<removeRecruit.length; i++){
					if(removeRecruit[i].name === card.name){
						removeRecruit.splice(i, 1);
						cardArray = removeRecruit;
					}
				}
				this.setState({
					recruitArray: recruitArray,
					recruit: false,
					stormlight: newStormlight,
					cards: removeRecruit
				});
				document.getElementById("stormlightOrb").classList.remove("stormlightOn");
			}else{
				console.log("not enough influence");
			}
		}else{}
	}
	checkCardAbility(card){
		var cardPower = card.power;
		if(this.state.stormlight < card.cost){
			console.log("Not enough stormlight");
		}else{
			this.setState({
				stormlight: this.state.stormlight - card.cost
			});
		}
		var newAttack = this.props.attack + cardPower;
		if(this.state.cardAbility === false){
			this.playerAttack(newAttack);
		}else{
			if (card.ability.indexOf("shield") >= 0){
			 	var thenum = parseInt(card.ability.match(/\d+/)[0]);
			 	var boostedShield = this.state.playerShield + thenum
			 	this.setState({
			 		playerShield: boostedShield
			 	}, () => {
			 		this.playerAttack(newAttack);
			 	})
			}else if(card.ability.indexOf("grow") >=0){
				card.power ++;
				this.playerAttack(newAttack);
			}else if(card.ability.indexOf("purge") >=0){
				shuffle(cardArray);
				for(var i=0; i < cardArray.length; i++){
					if(cardArray[i].alignment === "enemy"){
						console.log("destroyed " + cardArray[i].name);
						cardArray.splice(i, 1);
						break;
					}else{
						console.log("no enemy cards");
					}
				}
				this.playerAttack(newAttack);
			}else if(card.ability.indexOf("multiply") >=0) {
				var multiplyAttack = this.props.attack * 2;
				this.playerAttack(multiplyAttack);
			}else if(card.ability.indexOf("stun") >=0) {
				document.getElementById(currentEnemy).classList.add("stunned");
				this.playerAttack(newAttack);
			}else if(card.ability.indexOf("speed") >=0) {
				var speedNum = parseInt(card.ability.match(/\d+/)[0]);
				console.log(speedNum);
				this.props.increaseStormCounter(speedNum);
				this.playerAttack(newAttack);
			}else if(card.ability.indexOf("research") >=0) {
				var researchNum = parseInt(card.ability.match(/\d+/)[0]);
				this.setState({
					research: true,
					cardDisplay: true,
					researchNum: researchNum
				});
			}else if(card.ability.indexOf("decoy") >=0) {
				this.setState({
					decoy: true
				});
				this.playerAttack(newAttack);
			}else if(card.ability.indexOf("recharge") >=0) {
				var stormlightNum = parseInt(card.ability.match(/\d+/)[0]);
				this.setState({
					stormlight: this.state.stormlight + stormlightNum
				});
				this.playerAttack(newAttack);
			}else{
				this.playerAttack(newAttack);
			}
		}
	}
	heroDraw() {
		if( typeof currentEnemy === 'undefined' ){
			console.log("Select an enemy to attack!");
		}else{
			var numberDrawn = this.state.playerInt;
			shuffle(cardArray);
			console.log(cardArray);
			var selectedCards = cardArray.slice(0, numberDrawn);
			console.log(selectedCards);
			this.setState({
				cards: []
			}, () =>{
				this.setState({
				cardDisplay: true,
				cards: selectedCards
				});
			});
		}
	}
	playerAttack(newAttack) {
		if(enemyArray[currentEnemy].hp <= 0){
		console.log("He's dead, pick another target.");
		}else{
			var numberOfPlayerCharacters = this.state.recruitArray.length + 1;
			var enemyHealth = enemyArray[currentEnemy].hp;
			if(newAttack < 0){
				var heroAttack = 0;
			}else{
				var heroAttack = newAttack;
			}
			var enemyHp = enemyHealth - heroAttack;
			document.getElementsByClassName("heroDamageIndicator")[(currentEnemy + numberOfPlayerCharacters)].append("-" + heroAttack);
			document.getElementsByClassName("heroDamageIndicator")[(currentEnemy + numberOfPlayerCharacters)].style.display="inline";
			setTimeout(() => { 
				document.getElementsByClassName("heroDamageIndicator")[(currentEnemy + numberOfPlayerCharacters)].innerHTML="";
				document.getElementsByClassName("heroDamageIndicator")[(currentEnemy + numberOfPlayerCharacters)].style.display="none";
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
	recruitAction(recruit) {
		if(recruit.counter > 0){
			if(recruit.name === "Rock"){
				shuffle(cardArray);
				for(var i=0; i < cardArray.length; i++){
					if(cardArray[i].alignment === "enemy"){
						cardArray.splice(i, 1);
						break;
					}else{}
				}
			}else if(recruit.name === "Moash"){
				var recruitAttack = recruit.attack;
				console.log(recruitAttack);
				var numberOfPlayerCharacters = this.state.recruitArray.length + 1;
				var enemyHealth = enemyArray[currentEnemy].hp;
				if(recruitAttack < 0){
					var heroAttack = 0;
				}else{
					var heroAttack = recruitAttack;
				}
				var enemyHp = enemyHealth - heroAttack;
				document.getElementsByClassName("heroDamageIndicator")[(currentEnemy + numberOfPlayerCharacters)].append("-" + heroAttack);
				document.getElementsByClassName("heroDamageIndicator")[(currentEnemy + numberOfPlayerCharacters)].style.display="inline";
				setTimeout(() => { 
					document.getElementsByClassName("heroDamageIndicator")[(currentEnemy + numberOfPlayerCharacters)].innerHTML="";
					document.getElementsByClassName("heroDamageIndicator")[(currentEnemy + numberOfPlayerCharacters)].style.display="none";
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
						});
					}
				}, 500);
			}
			for(var i=0; i < recruitArray.length; i++){
				if(recruitArray[i].name === recruit.name){
					var allyChar = (this.state.recruitArray[i]);
					var newCounter = allyChar.counter - 1;
					allyChar.counter = newCounter;
					recruitArray = [allyChar];
					this.setState({
						recruitArray: recruitArray
					}, () => {
						if(allyChar.counter === 0){
							setTimeout(() => {
								this.deadRecruit(allyChar.name);
							}, 500);
						}else{}
					});
				}
			}
		}else{
			console.log('no more actions');
		}
	}
	triggerEnemyDeath(enemy) {
		var deadEnemy = document.getElementById(enemy);
		deadEnemy.classList.remove("stunned");
		deadEnemy.classList.add("fadeOut");
		setTimeout(() => {
			this.props.changeScore();
			deadEnemy.classList.remove("fadeOut");
			enemyArray.splice(deadEnemy.id, 1);
			if(enemyArray.length === 0){
				console.log("They're all dead. You win!");
				//this.props.aux();
				//stageComplete ++;
				this.props.switchEnemyArray();
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
		const x = document.getElementsByClassName("enemyCharacterBox");
		for (var i=0; i < x.length; i ++ ){
			x[i].style.borderColor="black";
		}
		if(document.getElementById(enemyNumber).classList.contains("stunned")){
			console.log("too stunned to attack");
		}else{
			document.getElementById(enemyNumber).classList.add("attackingEnemy");
			if(this.state.recruitArray.length >= 1){
				let enemyAttack = enemyArray[enemyNumber].attack;
				if(this.state.playerShield > 0){
					let playerShield = this.state.playerShield;
					const shieldDamage = playerShield - enemyAttack;
					if(shieldDamage < 0){
						var allyChar = (this.state.recruitArray[0]);
						allyChar.hp = allyChar.hp + shieldDamage;
						recruitArray = [allyChar];
						this.setState({
							playerShield: 0,
							recruitArray: recruitArray
						});
						document.getElementsByClassName("shieldIcon")[0].style.background="blue";
						document.getElementsByClassName("heroDamageIndicator")[1].append(shieldDamage);
						document.getElementsByClassName("heroDamageIndicator")[1].style.display="inline";
					}else{
						this.setState({
							playerShield: shieldDamage
						});
					}
				}else{
					var allyChar = (this.state.recruitArray[0]);
					allyChar.hp = allyChar.hp - enemyAttack;
					console.log(allyChar);
					recruitArray = [allyChar];
					this.setState({
						recruitArray: recruitArray
					});
					document.getElementsByClassName("heroDamageIndicator")[1].append("-" + enemyAttack);
					document.getElementsByClassName("heroDamageIndicator")[1].style.display="inline";
				}
				setTimeout(() => {
					document.getElementsByClassName("shieldIcon")[0].style.background="none";
					document.getElementsByClassName("heroDamageIndicator")[1].innerHTML="";
					document.getElementsByClassName("heroDamageIndicator")[1].style.display="none";
					if(allyChar.hp <= 0){
						console.log("Recruit Died");
						this.deadRecruit();
					}else{}
				}, 500);
			}else{
				if(this.state.playerShield > 0){
					let playerShield = this.state.playerShield;
					let enemyAttack = enemyArray[enemyNumber].attack;
					const shieldDamage = playerShield - enemyAttack;
					document.getElementsByClassName("shieldIcon")[0].style.background="blue";
					document.getElementsByClassName("heroDamageIndicator")[0].append("-" + enemyAttack);
					document.getElementsByClassName("heroDamageIndicator")[0].style.display="inline";
					setTimeout(() => {
						document.getElementsByClassName("shieldIcon")[0].style.background="none";
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
							if(this.state.decoy === false){
								cardArray.push(enemyCard);
							}else{}
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
					let enemyAttack = enemyArray[enemyNumber].attack;
					const playerHp = playerHealth - enemyAttack;
					if(enemyArray[enemyNumber].sabotoge > 0){
						var enemyCard2 = new CardCon(enemyArray[enemyNumber].name, -1, -(enemyArray[enemyNumber].attack), "Bad Card", "enemy", 0, "nothing");
						if(this.state.decoy === false){
							cardArray.push(enemyCard2);
						}else{}
						enemyArray[enemyNumber].sabotoge --;
						var currentSabArray = [];
							for(i=0; i < enemyArray.length; i++){
								currentSabArray.push(enemyArray[i].sabotoge);
							}
							this.setState({
								enemySab: currentSabArray
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
			}
		}
		setTimeout(() => {
			document.getElementById(enemyNumber).classList.remove("attackingEnemy");
			document.getElementById(enemyNumber).classList.remove("stunned");
			for (var i=0; i < x.length; i ++ ){
			x[i].style.borderColor="black";
			}
			if(enemyNumber < (enemyArray.length - 1)){
				enemyNumber ++;
				this.enemyAttackAction(enemyNumber);
			}else if(enemyNumber === (enemyArray.length - 1)){
				this.setState({
					playerShield: this.props.shield,
					cardAbility: true,
					decoy: false
				}, () => {
					this.props.decreaseStormCounter();
				});
			}else{}
		}, 1000);
	}
	deadRecruit(name){
		console.log(name)
		recruitArray.splice(0, 1);
		for(var i=0; i<collectionArray.length; i++){
			if(collectionArray[i].name === name){
				cardArray.push(collectionArray[i]);
			}
		}
		this.setState({
			recruitArray: recruitArray
		});
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
					<div className="col-xs-3">
						<div className="row">Highstorm in {this.props.stormCounter} turns</div>
						<div className="row">
							<ScoreDisplay score={this.props.score} />
						</div>
					</div>
					<div className="col-xs-1">
						<StormlightCounter toggle={this.toggleRecruitState} stormlight={this.state.stormlight} />
					</div>
				</div>
				<div className="row" id="topRow">
					<div className="col-xs-4" id="characterSide tabIndex" onKeyDown={this.handleKeyPress}>
						<Character sprenArray={this.props.sprenArray} recruitAction={this.recruitAction} attack={this.props.attack} int={this.props.int} playerShield={this.state.playerShield} heroHp={this.props.heroHp} equipItem={this.equipItem} heroDraw={this.heroDraw} heroPosition={this.state.heroPosition} cards={this.state.cards} chooseCard={this.chooseCard} equipment={this.props.equipment} cardDisplay={this.state.cardDisplay} />
					</div>
					<div className="col-xs-4 col-xs-offset-3" id="enemySide">
						<EnemySide updateEnemySab={this.updateEnemySab} state={this.state} sab={this.state.enemySab} />
					</div>
				</div>
			</div>
		)
	}
}

class StormlightCounter extends React.Component {
	render() {
		return (
			<div className="row">
				<div id="stormlightOrb" onClick={this.props.toggle}>{this.props.stormlight}</div>
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
		const numberOfCards = cards;
		const listItems = numberOfCards.map((card, index) =>
			<Card className={card.alignment} key={index} id={index} name={card.name} cost={card.cost} power={card.power} text={card.text} card={card} chooseCard={this.props.chooseCard} />
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
		var charCard = this.props.card.type;
		var influenceCost = false;
		var stormlightCost = false;
		if(charCard === "character" || charCard === "support"){
			influenceCost = true;
		}else if(charCard === "stormlight"){
			stormlightCost = true;
		}else{

		}
		return (
			<div className={`col-xs-12 ${this.props.className}`} onClick={() => this.props.chooseCard(this.props.card)}>
				<div className="row">
					<div className="col-xs-offset-4 col-xs-4 cardPower">{this.props.power}</div>
				</div>
				<div className="row cardName">{this.props.name}</div>
				<div className="row cardText">{this.props.text}</div>
				{influenceCost === true &&
					<div className="row">
						<div className="col-xs-offset-4 col-xs-4 influenceCost">{this.props.cost}</div>
					</div>
				}
				{stormlightCost === true &&
					<div className="row">
						<div className="col-xs-offset-4 col-xs-4 stormlightCost">{this.props.cost}</div>
					</div>
				}
			</div>
		)
	}
}

class EnemySide extends React.Component {
	listBadGuys () {
		const numberOfBadGuys = enemyArray;
		const listItems = numberOfBadGuys.map((badGuy, index) =>
			<Enemy key={index} id={index} name={badGuy.name} eHp={badGuy.hp} updateEnemySab={this.props.updateEnemySab} sab={this.props.sab[index]} image={badGuy.image} />
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
					{/*<SprenDisplay sprenArray={this.props.sprenArray} />*/}
					<div className="row" id="heroSlot1">
						 {this.props.heroPosition[0] ? <HeroSideSlot int={this.props.int} attack={this.props.attack} playerShield={this.props.playerShield} heroHp={this.props.heroHp} name={player.name} image={player.image} hp={player.hp} equipItem={this.props.equipItem} heroDraw={this.props.heroDraw} equipment={this.props.equipment} /> : null }
					</div>
					<RecruitedCharacters recruitAction={this.props.recruitAction} />
				</div>
			</div>
		);
	}
};

class SprenDisplay extends React.Component {
	listSpren () {
		const numberOfSpren = this.props.sprenArray;
		const listSpren = numberOfSpren.map((spren, index) =>
			<Spren key={index} id={index} name={spren.name} power={spren.power} image={spren.image} />
		);
		return (
			<div className="col-xs-12">{listSpren}</div>
		)
	}
	render() {
		return (
			<div className="row">
				{this.listSpren()}
			</div>
		)
	}
}

class Spren extends React.Component {
	render(){
		return (
			<div className="col-xs-4 spren">
				<div className="row">{this.props.name}</div>
				<div className="row sprenPower">{this.props.power}</div>
			</div>
		)
	}
}

class RecruitedCharacters extends React.Component {
	listRecruits () {
		const numberOfRecruits = recruitArray;
		const listRecruits = numberOfRecruits.map((recruit, index) =>
			<RecruitSlot  recruitAction={this.props.recruitAction} key={index} id={index} name={recruit.name} attack={recruit.attack} charShield={recruit.shield} charHp={recruit.hp} image={recruit.image} counter={recruit.counter} />
		);
		return (
			<div className="col-xs-12">{listRecruits}</div>
		)
	}
	render() {
		return (
			<div className="row">
				{this.listRecruits()}
			</div>
		)
	}
}

class RecruitSlot extends React.Component {
	render() {
		return (
			<div className="col-xs-12">
				<div className="heroSideSlot row">
					<div className="col-xs-6">
						<CharacterImage image={this.props.image} />
						<CharacterName name={this.props.name} />
					</div>
					<div className="col-xs-6">
						<div>{this.props.counter}</div>
						<HPSpan hp={this.props.charHp} />
						<CharacterItem attack={this.props.attack} />
						<button onClick={() => this.props.recruitAction(this.props)} className="coolButton">Action</button>
					</div>
				</div>
			</div>
		)
	}
}
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
						<HPSpan hp={this.props.heroHp} />
						<CharacterItem attack={this.props.attack} equipment={this.props.equipment} />
						<IntelligenceSpan int={this.props.int} />
						<ShieldSpan playerShield={this.props.playerShield} />
						<CharacterActions heroDraw={this.props.heroDraw} />
					</div>
				</div>
			</div>
		)
	}
}

class IntelligenceSpan extends React.Component {
	render() {
		return (
			<div className="row intSpan">
				<img className="col-xs-4 intIcon" src={int} />
				<span className="col-xs-8">{this.props.int}</span>
			</div>
		)
	}
}

class CharacterActions extends React.Component {
	render() {
		return (
			<div className="row actionRow">
				<button className="coolButton" onClick={this.props.heroDraw}>Attack</button>
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
				<div className="characterName">{this.props.name}</div>
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
				<span className="col-xs-offset-3 col-xs-3">{this.props.hp}</span>
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
			<div className="itemBox row" power={this.props.power} onClick={() => this.props.chooseItemAction(this.props)}>
				<div className="col-xs-10">{this.props.itemName}</div>
				{this.props.purchased ? <div className="col-xs-2">{this.props.cost}</div> : null }
			</div>
		);
	}
}

class Enemy extends React.Component {
	componentDidMount(){
		this.props.updateEnemySab();
	}
	selectEnemyToAttack(id) {
		const x = document.getElementsByClassName("enemyCharacterBox");
		for (var i=0; i < x.length; i ++ ){
			x[i].classList.remove("targetedEnemy");
		}
		document.getElementById(id).classList.add("targetedEnemy");
		currentEnemy = id;
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
		this.listRewardCards = this.listRewardCards.bind(this);
	}
	componentDidMount(){
		//rewardsArray[stageComplete].item.unlocked = true;
		this.setState({
			openButton: true
		});
		this.props.resetStormCounter();
		this.openPack();
	}
	listRewardCards() {
		var cards = this.state.rewardCards;
		const listRewards = cards.map((card, index) =>
			<CollectionCard className={card.alignment} key={index} id={index} name={card.name} type={card.type} cost={card.cost} power={card.power} text={card.text} faction={card.faction} />
		);
		return (
			<div>{listRewards}</div>
		)
	}
	openPack(){
		var roundScore = this.props.score;
		document.getElementById("goldSpan").innerHTML = " ";
		document.getElementById("goldSpan").append(roundScore/10);
		this.props.setSphereCount(roundScore/10);
		if(roundScore < 300){
			console.log("Just some spheres");
		}else if(roundScore < 600 && roundScore >= 300){
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
				rewardCards: [rewardCard],
				openButton: false
			});
		}else if(roundScore >= 600){
			var multipleCards = [];
			for(var i=0; i < 2; i++){
				var rarity;
				var randomWeight = Math.floor((Math.random() * 100) + 1);
				console.log(randomWeight);
				if(randomWeight <= 60){
					rarity = 1;
				}else if(randomWeight <= 90){
					rarity = 2;
				}else{
					rarity = 3;
				}
				shuffle(collectionArray);
				console.log(collectionArray[0]);
				var rewardCard = collectionArray.find(x => x.rarity === rarity);
				cardArray.push(rewardCard);
				console.log(cardArray);
				multipleCards.push(rewardCard);
				this.setState({
					rewardCards: multipleCards,
					openButton: false
				});
			}
		}
	}
	render() {
		return (
			<div className="col-xs-12">
				<div className="row" id="rewardsMessage">Congratulations! Claim your rewards!</div>
				<div className="row" id="rewardsDescription">Score: {this.props.score}</div>
				<div className="row" id="goldRewardDisplay">Spheres: <span id="goldSpan"></span></div>
				<div className="row" id="rewardCardSlot">
					{this.listRewardCards()}
				</div>
				{this.state.openButton ? <button className="coolButton" id="openPackButton" onClick={this.openPack}>Show Card</button> : null }
				<div className="row">
					<button className="coolButton col-xs-offset-4 col-xs-4" onClick={this.props.goToCharacterScreen}>Return to Warcamps</button>
				</div>
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
			<CollectionCard className={card.alignment} key={index} id={index} faction={card.faction} name={card.name} type={card.type} cost={card.cost} power={card.power} text={card.text} handleDrop={(name) => this.addToDeck(card.name)} />
		);
		return (
			<div>{listCollection}</div>
		)
	}
	listCurrentDeck() {
		var cards = this.state.currentDeck;
		const listDeck = cards.map((card, index) =>
			<CollectionCard className={card.alignment} key={index} faction={card.faction} card={card} id={index} name={card.name} type={card.type} cost={card.cost} power={card.power} text={card.text} handleDrop={(name) => this.removeFromDeck(card.name)} />
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