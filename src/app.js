import React from 'react';
import ReactDOM from 'react-dom';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import kaladin from './cardPics/kaladin.jpg';
import shallan from './cardPics/shallan.jpg';
import dalinar from './cardPics/dalinar.jpg';
import rockImg from './cardPics/rock.jpg';
import placeholderImg from './cardPics/placeholder.jpg';
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
import wobbleduk from './assets/wobbleduk.gif';
import budleFairy from './assets/budleFairy.gif';
import madnado from './assets/madnado.gif';
import morp from './assets/morp.gif';
import primtree from './assets/primtree.gif';
import borgus from './assets/borgus.gif';
import gangOfFleebs from './assets/gangOfFleebs.gif';
import kingWobbleduk from './assets/kingWobbleduk.gif';
import maclaw from './assets/maclaw.gif';
import youber from './assets/youber.gif';
import awe from './assets/awe.png';
import earth from './assets/earth.png';
import fire from './assets/fire.png';
import lava from './assets/lava.png';
import spooky from './assets/spooky.png';
import walkLeft from './assets/walkLeft.gif';
import walkRight from './assets/walkRight.gif';
import walkUp from './assets/walkUp.png';
import './index.css';

var player;
var enemy0Slot = {};
var enemy1Slot = {};
var enemy2Slot = {};
var createEnemy;

const chullStats = {
	name: "Wobbleduk",
	hp: 1,
	attack: 3,
	sabotoge: 0,
	pointValue: 50,
	image: wobbleduk
};

const chasmfiendStats = {
	name: "Budle Fairy",
	hp: 5,
	attack: 8,
	sabotoge: 4,
	pointValue: 500,
	image: budleFairy
};

const childChasmfiendStats = {
	name: "Madnado",
	hp: 3,
	attack: 4,
	sabotoge: 2,
	pointValue: 250,
	image: madnado
};

const axehoundStats = {
	name: "Morp",
	hp: 2,
	attack: 3,
	sabotoge: 1,
	pointValue: 100,
	image: morp
};

const whitespineStats = {
	name: "Primtree",
	hp: 1,
	attack: 5,
	sabotoge: 1,
	pointValue: 150,
	image: primtree
};

const parshendiScoutStats = {
	name: "Borgus",
	hp: 2,
	attack: 5,
	sabotoge: 2,
	pointValue: 200,
	image: borgus
};

const parshendiWarriorStats = {
	name: "Gang of Fleebs",
	hp: 3,
	attack: 7,
	sabotoge: 1,
	pointValue: 250,
	image: gangOfFleebs
};

const parshendiCaptainStats = {
	name: "Maclaw",
	hp: 3,
	attack: 6,
	sabotoge: 3,
	pointValue: 300,
	image: maclaw
};

const banditStats = {
	name: "Bandit",
	hp: 1,
	attack: 4,
	sabotoge: 2,
	pointValue: 300,
	image: placeholderImg
};

const eshonaiStats = {
	name: "King Wobbleduk",
	hp: 75,
	attack: 8,
	sabotoge: 4,
	pointValue: 700,
	image: kingWobbleduk
};

function levelZeroDistribution() {
	var x = Math.floor((Math.random() * 100) + 1);
	if(stageComplete === 0){
		switch (true) {
		case (x < 2):
			createEnemy = banditStats;
			break;
	    case (x < 74):
	        createEnemy = chullStats;
	        break;
	    case (x < 92):
	        createEnemy = whitespineStats;
	        break;
	    default:
	        createEnemy = parshendiScoutStats;
	        break;
		}
	}else if(stageComplete === 1){
		switch (true) {
		case (x < 2):
			createEnemy = banditStats;
			break;	
	    case (x < 50):
	        createEnemy = chullStats;
	        break;
	    case (x < 90):
	        createEnemy = whitespineStats;
	        break;
	    default:
	        createEnemy = parshendiScoutStats;
	        break;
		}
	}else if(stageComplete === 2){
		switch (true) {
		case (x < 2):
			createEnemy = banditStats;
			break;
	    case (x < 20):
	        createEnemy = chullStats;
	        break;
	    case (x < 45):
	        createEnemy = whitespineStats;
	        break;
	    case (x < 85):
	    	createEnemy = childChasmfiendStats;
	    default:
	        createEnemy = parshendiScoutStats;
	        break;
		}
	}else if(stageComplete === 3){
		createEnemy = chasmfiendStats;
	}
}

function levelOneDistribution() {
	var x = Math.floor((Math.random() * 100) + 1);
	if(stageComplete === 0){
		switch (true) {
		case (x < 2):
			createEnemy = banditStats;
			break;
	    case (x < 50):
	        createEnemy = whitespineStats;
	        break;
	    case (x < 95):
	    	createEnemy = parshendiScoutStats;
	    default:
	        createEnemy = parshendiWarriorStats;
	        break;
		}
	}else if(stageComplete === 1){
		switch (true) {
		case (x < 2):
			createEnemy = banditStats;
			break;	
	    case (x < 25):
	        createEnemy = parshendiScoutStats;
	        break;
	    case (x < 90):
	        createEnemy = parshendiWarriorStats;
	        break;
	    default:
	        createEnemy = parshendiCaptainStats;
	        break;
		}
	}else if(stageComplete === 2){
		switch (true) {
		case (x < 2):
			createEnemy = banditStats;
			break;
	    case (x < 10):
	        createEnemy = parshendiScoutStats;
	        break;
	    case (x < 65):
	        createEnemy = parshendiWarriorStats;
	        break;
	    case (x < 99):
	    	createEnemy = parshendiCaptainStats;
	    default:
	        createEnemy = chasmfiendStats;
	        break;
		}
	}else if(stageComplete === 3){
		createEnemy = eshonaiStats;
	}
}

function EnemyCon(name, hp, attack, sabotoge, pointValue, image){
	this.name = name;
	this.hp = hp;
	this.attack = attack;
	this.sabotoge = sabotoge;
	this.pointValue = pointValue;
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

function CardCon(name, cost, power, text, alignment, rarity, ability, unlocked, type, image, icon, faction){
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
	this.icon = icon;
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

const kaladinH = new HeroCon("Youber", 100, 1, 3, 6, youber, true);
const shallanH = new HeroCon("Shallan", 120, 3, 4, 5, shallan, false);
const dalinarH = new HeroCon("Dalinar", 150, 4, 2, 8, dalinar, false);

const rustySword = new ItemCon("Rusty Sword", 1, "weapon", 10, true, true);
const battleSpear = new ItemCon("Battle Spear", 2, "weapon", 70, true, true);
const shardblade = new ItemCon("Shardblade", 3, "weapon", 200, true, true);
const leatherPads = new ItemCon("Leather Pads", 1, "armor", 10, true, true);
const parshendiCarapace = new ItemCon("Parshendi Carapace", 2, "armor", 80, true, true);
const shardplate = new ItemCon("Shardplate", 3, "armor", 150, true, true);


var basic1 = new CardCon("Fireball", 2, 3, "Simple, but effective", "hero", 0, "", true, "stormlight", placeholderImg, fire, "neutral");
var basic2 = new CardCon("Rock Skin", 1, 1, "Shield 5", "hero", 0, "shield 5", true, "stormlight", placeholderImg, earth, "neutral");
var basic3 = new CardCon("Training", 0, 0, "Gains 1 power each time you choose this card", "hero", 0, "grow", true, "stormlight", placeholderImg, placeholderImg, "neutral");
var basic4 = new CardCon("Healing Herb", 0, 2, "Restore 3 health", "hero", 0, "heal 3", true, "stormlight", placeholderImg, awe, "neutral");
var basic5 = new CardCon("Magma Blast", 5, 5, "Skip your next turn", "hero", 0, "exhausted", true, "stormlight", placeholderImg, lava, "neutral");
var basic6 = new CardCon("Scared 'Em", 2, 2, "Stun the enemy", "hero", 0, "stun", true, "stormlight", placeholderImg, spooky, "neutral");
var basic7 = new CardCon("Head Bash", 2, 2, "Shield 2", "hero", 0, "shield 2", true, "stormlight", placeholderImg, earth, "neutral");
var basic8 = new CardCon("Lava Boomerang", 3, 3, "Come Back!", "hero", 0, "", true, "stormlight", placeholderImg, lava, "neutral");
var basic9 = new CardCon("Burn Bright", 1, 1, "Multiply", "hero", 0, "multiply", true, "stormlight", placeholderImg, fire, "neutral");
var basic10 = new CardCon("Molten Snake", 4, 4, "Very scary", "hero", 0, "", true, "character", placeholderImg, lava, "neutral");
var basic11 = new CardCon("Reach Back In", 0, 0, "Rummage 2", "hero", 0, "research 2", true, "stormlight", placeholderImg, placeholderImg, "neutral");
var basic12 = new CardCon("Burn Impurity", 1, 1, "Purge 1", "hero", 0, "purge", true, "stormlight", placeholderImg, fire, "neutral");
var basic13 = new CardCon("Extra Sticks", 0, 10, "Fire cards get +1 power", "hero", 0, "", true, "character", placeholderImg, fire, "neutral");
var basic14 = new CardCon("Turn to Smoke", 1, 1, "Avoid all sabotoges this turn", "hero", 0, "decoy", true, "stormlight", placeholderImg, fire, "neutral");
var basic15 = new CardCon("Power Cystal", 2, 2, "Gain 2 energy", "hero", 0, "sphere", true, "stormlight", placeholderImg, placeholderImg, "neutral");

var currentEnemy;
var playerHero;
var gameMode = "marathon";
var level = 0;
var stageComplete = 0;
var currentHeroPostion = 0;
var enemyNumber = 0;
var itemArray = [rustySword, battleSpear, shardblade, leatherPads, parshendiCarapace, shardplate];
var enemyArray = [];
var cardArray = [basic1, basic2, basic3, basic4, basic5, basic6, basic7, basic8, basic9];
var recruitArray = [];
var sprenArray = [painspren, windspren];
var rewardCardArray = [];
var collectionArray = [basic1, basic2, basic3, basic4, basic5, basic6, basic7, basic8, basic9];

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
			miningGame: false,
			attack: 1,
			heroShield: 2,
			equipment: null,
			score: 0,
			heroHp: 30,
			stormCounter: 100,
			enemyArray: [enemyArray[0], enemyArray[1], enemyArray[2]],
			sphereCount: 0,
			influence: 0,
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
		this.changeInfluence = this.changeInfluence.bind(this);
	}
	changeHeroHp(newHp){
		this.state.heroSelect.hp = newHp;
		this.setState({
			heroHp: newHp
		});
	}
	changeInfluence(newInfluence){
		this.setState({
			influence: newInfluence
		});
	}
	changeScore(pointValue){
		console.log(pointValue);
		this.setState({
			score: this.state.score + pointValue
		});
	}
	createNewCharacter(data){
		console.log(data);
		playerHero = new HeroCon(data.name, 100, data.attack, data.intelligence, data.shield, youber, true);
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
			stormCounter: 5
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
		if(cardArray.length < 7){
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
	createEnemies() {
		enemyArray = [];
		for(var i=0; i<3; i++){
			if(level === 0){
				levelZeroDistribution();
			}
			var selected = createEnemy;
			var eName = selected.name;
			var eHp = selected.hp;
			var eAttack = selected.attack;
			var eSabotoge = selected.sabotoge;
			var ePointValue = selected.pointValue;
			var eImage = selected.image;
			var newEnemy = new EnemyCon(eName, eHp, eAttack, eSabotoge, ePointValue, eImage);
			if(stageComplete < 3){
				enemyArray.push(newEnemy);
			}else if(stageComplete === 3){
				enemyArray.push(newEnemy);
				break;
			}
		}
		this.setState({
			enemyArray: enemyArray
		});
	}
	switchEnemyArray() {
		if(document.getElementById("stunned") === null){

		}else{
			document.getElementById("stunned").classList.remove("stunned");
		}
		if(gameMode === "marathon"){
			stageComplete ++;
			this.createEnemies();
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
			{this.state.characterSelectScreen ? <CharacterSelectScreen influence={this.state.influence} shield={this.state.heroShield} spheres={this.state.sphereCount} attack={this.state.attack} playerHero={playerHero} switchEnemyArray={this.switchEnemyArray} goToEquipmentScreen={this.goToEquipmentScreen} heroHp={this.state.heroHp} showCollection={this.showCollection} changeHero={this.changeHero} goToGameScreen={this.goToGameScreen} /> : null }
			{this.state.gameScreen ? <GameScreen changeInfluence={this.changeInfluence} influence={this.state.influence} int={this.state.heroSelect.intelligence} shield={this.state.heroShield} sprenArray={this.state.sprenArray} switchEnemyArray={this.switchEnemyArray} increaseStormCounter={this.increaseStormCounter} decreaseStormCounter={this.decreaseStormCounter} stormCounter={this.state.stormCounter} changeHeroHp={this.changeHeroHp} heroHp={this.state.heroHp} score={this.state.score} changeScore={this.changeScore} aux={this.auxilaryScreen} heroSelect={this.state.heroSelect} attack={this.state.attack} equipment={this.state.equipment} enemyArray={this.state.enemyArray} /> : null }
			{this.state.auxilaryScreen ? <AuxilaryScreen changeInfluence={this.changeInfluence} influence={this.state.influence} setSphereCount={this.setSphereCount} score={this.state.score} resetStormCounter={this.resetStormCounter} goToCharacterScreen={this.goToCharacterScreen} /> : null }
			{this.state.collectionScreen ? <CollectionScreen checkDeckContents={this.checkDeckContents} /> : null }
			{this.state.equipmentScreen ? <EquipmentScreen itemArray={this.state.itemArray} heroShield={this.state.heroShield} spheres={this.state.sphereCount} setSphereCount={this.setSphereCount} playerHero={playerHero} chooseItemAction={this.chooseItemAction} attack={this.state.attack} goToCharacterScreen={this.goToCharacterScreen} /> : null }
			{this.state.miningGame ? <MiningGame /> : null }
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
							<HeroSelectOption name={this.props.playerHero.name} stats={this.props.playerHero} image={youber} attack={this.props.attack} shield={this.props.heroShield} id="playerHero" />
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
		collectionArray = [basic1, basic2, basic3, basic4, basic5, basic6, basic7, basic8, basic9];
		for(var i=1; i<16; i++){
			var card = eval(`basic${i}`);
			if(card.unlocked === true){
				collectionArray.push(card);
			}else{
				rewardCardArray.push(card);
			}
		}
		stageComplete = -1;
		this.props.switchEnemyArray();
	}
	render() {
		return (
			<div className="row">
				<div className="col-xs-12">
					<div className="row chooseTitle">Warcamps</div>
					<div className="row">
						<div className="col-xs-9">
							<HeroSelectOption stats={this.props.playerHero} shield={this.props.shield} attack={this.props.attack} image={youber} id="playerHero" />
							{ /*kaladinH.unlocked ? <HeroSelectOption name="Kaladin" stats={kaladinH} attack={this.props.attack} image={kaladin} id="kaladinH" changeHero={this.props.changeHero} /> : null }
							{ shallanH.unlocked ? <HeroSelectOption name="Shallan" stats={shallanH} image={shallan} id="shallanH" changeHero={this.props.changeHero} /> : null }
							{ dalinarH.unlocked ? <HeroSelectOption name="Dalinar" stats={dalinarH} image={dalinar} id="dalinarH" changeHero={this.props.changeHero} /> : null */}
						</div>
						<div className="col-xs-3">
							<div>Spheres: {this.props.spheres}</div>
							<div>Influence: {this.props.influence}</div>
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
			0: null,
			1: null,
			2: null,
			currentItem: 0,
			heroPosition: [true,false,false],
			cards: [],
			cardDisplay: false,
			playerShield: 0,
			playerInt: 0,
			enemySab: [],
			stormlight: 0,
			recruit: false,
			recruitArray: recruitArray,
			research: false,
			researchNum: 0,
			cardAbility: true,
			decoy: false,
			exhausted: false

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
		var enemySabs = [];
		var nullHp1 = null;
		var nullHp2 = null;
		if(enemyArray.length === 1){
			enemySabs = [enemyArray[0].sabotoge, null, null];
		}else{
			enemySabs = [enemyArray[0].sabotoge, enemyArray[1].sabotoge, enemyArray[2].sabotoge]
			nullHp1 = enemyArray[1].hp;
			nullHp2 = enemyArray[2].hp;
		}
		this.setState({
			playerShield: this.props.shield,
			playerInt: player.intelligence,
			enemySab: enemySabs,
			0: enemyArray[0].hp,
			1: nullHp1,
			2: nullHp2
		});
	}
	updateEnemySab() {
		var enemySabs = [];
		if(enemyArray.length === 1){
			enemySabs = [enemyArray[0].sabotoge, null, null]
		}else{
			enemySabs = [enemyArray[0].sabotoge, enemyArray[1].sabotoge, enemyArray[2].sabotoge]
		}
		this.setState({
			enemySab: enemySabs
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
				document.getElementById("influenceOrb").classList.remove("stormlightOn");
			}else if(this.state.recruit === false){
				this.setState({
					recruit: true
				});
				document.getElementById("influenceOrb").classList.add("stormlightOn");
			}
		}else{}
	}
	recruitCharacter(card){
		if(card.type === "character" || card.type === "support"){
			if(this.props.influence >= card.cost){
				var recruitedChar = new HeroCon(card.name, (card.cost * 10), card.power, 0, 4, card.image, true, 3);
				recruitArray.push(recruitedChar);
				var newInfluence = this.props.influence - card.cost;
				this.props.changeInfluence(newInfluence);
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
					cards: removeRecruit
				});
				document.getElementById("influenceOrb").classList.remove("stormlightOn");
			}else{
				console.log("not enough influence");
			}
		}else{}
	}
	checkCardAbility(card){
		var cardPower = card.power;
		if(this.state.stormlight >= card.cost && card.type === "stormlight"){
			this.setState({
				stormlight: this.state.stormlight - card.cost
			});
		}else{
			console.log("not enough stormlight");
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
			}else if(card.ability.indexOf("heal") >=0) {
				var healNum = parseInt(card.ability.match(/\d+/)[0]);
				var newHp = this.props.heroHp + healNum;
				this.props.changeHeroHp(newHp);
				this.playerAttack(newAttack);
			}else if(card.ability.indexOf("exhausted") >=0) {
				this.setState({
					exhausted: true
				});
				this.playerAttack(newAttack);
			}else if(card.type === "sphere") {
				var sphereValue = card.power;
				this.setState({
					stormlight: this.state.stormlight + sphereValue
				});
				this.enemyAttackAction(0);
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
			var selectedCards = cardArray.slice(0, numberDrawn);
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
			document.getElementsByClassName("heroDamageIndicator")[(currentEnemy)].append("-" + heroAttack);
			document.getElementsByClassName("heroDamageIndicator")[(currentEnemy)].style.display="inline";
			setTimeout(() => { 
				document.getElementsByClassName("heroDamageIndicator")[(currentEnemy)].innerHTML="";
				document.getElementsByClassName("heroDamageIndicator")[(currentEnemy)].style.display="none";
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
		var pointValue = enemyArray[enemy].pointValue;
		console.log(pointValue);
		setTimeout(() => {
			this.props.changeScore(pointValue);
			deadEnemy.classList.remove("fadeOut");
			enemyArray.splice(deadEnemy.id, 1);
			if(enemyArray.length === 0){
				console.log("They're all dead. You win!");
				//this.props.aux();
				//stageComplete ++;
				if(stageComplete === 3){
					console.log("Level 1 Complete");
					this.props.aux();
				}else{
					this.props.switchEnemyArray();
					this.updateEnemySab();
				}
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
		console.log(document.getElementsByClassName("heroDamageIndicator"));
		const x = document.getElementsByClassName("enemyCharacterBox");
		for (var i=0; i < x.length; i ++ ){
			x[i].style.borderColor="black";
		}
		if(document.getElementById(enemyNumber).classList.contains("stunned")){
			console.log("too stunned to attack");
		}else{
			document.getElementById(enemyNumber).classList.add("attackingEnemy");
			if(this.state.recruitArray.length >= 1){
				var allyChar = (this.state.recruitArray[0]);
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
					console.log(allyChar);
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
					document.getElementsByClassName("heroDamageIndicator")[enemyArray.length].append("-" + enemyAttack);
					document.getElementsByClassName("heroDamageIndicator")[enemyArray.length].style.display="inline";
					setTimeout(() => {
						document.getElementsByClassName("shieldIcon")[0].style.background="none";
						document.getElementsByClassName("heroDamageIndicator")[enemyArray.length].innerHTML="";
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
								console.log(enemyCard);
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
							console.log(enemyCard2);
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
				console.log(this.state.exhausted);
				if(this.state.exhausted === true){
					this.enemyAttackAction(0);
					this.setState({
						exhausted: false
					});
				}else{
					this.setState({
						playerShield: this.props.shield,
						cardAbility: true,
						decoy: false
					}, () => {
						this.props.decreaseStormCounter();
					});
				}
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
				<div className="row">
					<div className="col-xs-offset-3 col-xs-5" id="stageName">Stage {stageComplete + 1}</div>
					<div className="col-xs-4">	
						<ScoreDisplay score={this.props.score} />
					</div>
				</div>
				<div className="row" id="topRow">
					<div className="col-xs-12">
						<div className="row" id="enemySide">
							<EnemySide updateEnemySab={this.updateEnemySab} state={this.state} sab={this.state.enemySab} />
						</div>
						<div className="row" id="playArea">
							{this.state.cardDisplay ? <CardDisplayBox chooseCard={this.chooseCard} cards={this.state.cards} /> : null }
						</div>
						<div className="row" id="characterSide tabIndex" onKeyDown={this.handleKeyPress}>
							<div className="col-xs-offset-4 col-xs-8">
								<Character toggleRecruitState={this.toggleRecruitState} influence={this.props.influence} sprenArray={this.props.sprenArray} stormlight={this.state.stormlight} recruitAction={this.recruitAction} attack={this.props.attack} int={this.props.int} playerShield={this.state.playerShield} heroHp={this.props.heroHp} equipItem={this.equipItem} heroDraw={this.heroDraw} heroPosition={this.state.heroPosition} cards={this.state.cards} chooseCard={this.chooseCard} equipment={this.props.equipment} cardDisplay={this.state.cardDisplay} />
							</div>
						</div>
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

class InfluenceCounter extends React.Component {
	render() {
		return (
			<div className="row">
				<div id="influenceOrb" onClick={this.props.toggle}>{this.props.influence}</div>
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
			<Card className={card.alignment} faction={card.faction} icon={card.icon} key={index} id={index} name={card.name} ability={card.ability} cost={card.cost} power={card.power} text={card.text} card={card} chooseCard={this.props.chooseCard} />
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
		var sphereCard = false;
		var normal = false;
		if(charCard === "character" || charCard === "support"){
			influenceCost = true;
		}else if(charCard === "stormlight"){
			stormlightCost = true;
		}else if(charCard === "sphere"){
    	  sphereCard = true;
    	}else{
    		normal = true;
    	}
		return (
			<div className={`col-xs-12 ${this.props.className} ${this.props.faction}`} onClick={() => this.props.chooseCard(this.props.card)}>
				{ sphereCard === false &&
		          <div className="row">
		            <div className="col-xs-offset-4 col-xs-4 cardPower">{this.props.power}</div>
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
		         <div className="row bottomRow">
					{ influenceCost === true &&
		            	<div className="col-xs-4 influenceCost">{this.props.cost}</div>
		        	}
		        	{ stormlightCost === true &&
		            	<div className="col-xs-4 stormlightCost">{this.props.cost}</div>
		        	}
		        	{ normal === true &&
		        		<div className="col-xs-4"></div>
		        	}
	        		<div className="col-xs-offset-4 col-xs-4"><img className="iconImg" src={this.props.icon} alt="icon" /></div>
		        </div>
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
					{/*<SprenDisplay sprenArray={this.props.sprenArray} />*/}
					<div className="row" id="heroSlot1">
						 {this.props.heroPosition[0] ? <HeroSideSlot int={this.props.int} attack={this.props.attack} playerShield={this.props.playerShield} heroHp={this.props.heroHp} name={player.name} image={player.image} hp={player.hp} equipItem={this.props.equipItem} heroDraw={this.props.heroDraw} equipment={this.props.equipment} stormlight={this.props.stormlight} toggleRecruitState={this.props.toggleRecruitState} influence={this.props.influence} /> : null }
						<RecruitedCharacters recruitAction={this.props.recruitAction} />
					</div>
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
			<div className="col-xs-6">
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
						<div className="row">
							<CharacterItem attack={this.props.attack} />
						</div>
					</div>
					<div className="col-xs-6">
						<div>{this.props.counter}</div>
						<HPSpan hp={this.props.charHp} />
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
			<div className=" heroSideSlot col-xs-6">
				<div className="row">
					<div className="col-xs-6">
						<CharacterImage image={player.image} />
						<div className="row">
							<CharacterItem attack={this.props.attack} equipment={this.props.equipment} />
							<IntelligenceSpan int={this.props.int} />
							<ShieldSpan playerShield={this.props.playerShield} />
						</div>
					</div>
					<div className="col-xs-6">
						<HPSpan hp={this.props.heroHp} />
						<div className="row">
							<div className="col-xs-6">
								<StormlightCounter stormlight={this.props.stormlight} />
							</div>
							<div className="col-xs-6">
								<InfluenceCounter toggle={this.props.toggleRecruitState} influence={this.props.influence} />
							</div>
						</div>
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
			<div className="col-xs-4 intSpan">
				<div className="row">	
					<img className="col-xs-12 statIcon" src={int} />
				</div>
				<div className="row">
					<span className="col-xs-12 statNum">{this.props.int}</span>
				</div>
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
			<div className="col-xs-4 characterItem">
				<div className="row">
					<img className="col-xs-12 statIcon" src={power} />
				</div>
				<div className="row">
					<div className="col-xs-12 statNum">{this.props.attack}</div>
				</div>
			</div>
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
				<img className="characterImage2 col-xs-offset-1 col-xs-8" id={this.props.id + 'image'} src={this.props.image} alt={this.props.name} />
			</div>
		);
	}
};

class HPSpan extends React.Component {
	render() {
		return (
			<div className="row hpSpan">
				<img className="col-xs-4 heartIcon" src={heart} /> 
				<span className="col-xs-3">{this.props.hp}</span>
				<span className="col-xs-2 heroDamageIndicator"></span>
			</div>
		);
	}
};

class ShieldSpan extends React.Component {
	render() {
		return (
			<div className="col-xs-4">
				<div className="row">
					<img className="col-xs-12 statIcon shieldIcon" src={shield} />
				</div>
				<div className="row shieldSpan">
					<div className="col-xs-12 statNum">
						{this.props.playerShield}
					</div>
				</div>
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
		const x = document.getElementsByClassName("characterImage2");
		for (var i=0; i < x.length; i ++ ){
			x[i].classList.remove("targetedEnemy");
		}
		document.getElementById(id + 'image').classList.add("targetedEnemy");
		currentEnemy = id;
	}

	render() {
		return (
			<div className="col-xs-4 enemyCharacterBox" id={this.props.id} onClick={() => {this.selectEnemyToAttack(this.props.id)}}>
				<div className="row">
					<div className="col-xs-offset-2 col-xs-8 enemyInfo">
						<CharacterName name={this.props.name} />
						<HPSpan hp={this.props.eHp} />
						<div className="row sabRow">
							<div className="col-xs-2">Sab</div>
							<div className="col-xs-9"><Sabotoge sab={this.props.sab} /></div>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-xs-offset-2 col-xs-8">
						<CharacterImage image={this.props.image} id={this.props.id} />
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
		cardArray.sort(function(a, b){
		    if(a.alignment < b.alignment) { return -1; }
		    if(a.alignment > b.alignment) { return 1; }
		    return 0;
		});
		var enemyCardNum = 0;
		for(var i=0; i < cardArray.length; i++){
			if(cardArray[i].alignment === "enemy"){
				enemyCardNum ++;
			}
		}
		cardArray.splice(0, enemyCardNum);
		console.log(cardArray);
	}
	listRewardCards() {
		var cards = this.state.rewardCards;
		const listRewards = cards.map((card, index) =>
			<CollectionCard className={card.alignment} key={index} id={index} name={card.name} type={card.type} cost={card.cost} power={card.power} text={card.text} ability={card.ability} icon={card.icon} faction={card.faction} />
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
			var newInfluence = this.props.influence + 1;
			this.changeInfluence(newInfluence);
			var rarity;
			var randomWeight = Math.floor((Math.random() * 100) + 1);
			if(randomWeight <= 60){
				rarity = 1;
			}else if(randomWeight <= 90){
				rarity = 2;
			}else{
				rarity = 3;
			}
			shuffle(rewardCardArray);
			var rewardCard = rewardCardArray.find(x => x.rarity === rarity);
			console.log(rewardCard);
			rewardCard.unlocked = true;
			this.setState({
				rewardCards: [rewardCard],
				openButton: false
			});
		}else if(roundScore >= 600){
			var newInfluence = this.props.influence + 2;
			this.props.changeInfluence(newInfluence);
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
				shuffle(rewardCardArray);
				console.log(rewardCardArray[0]);
				var rewardCard = rewardCardArray.find(x => x.rarity === rarity);
				console.log(rewardCard);
				rewardCard.unlocked = true;
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
			currentDeck: cardArray,
			items: [
				{ id: 1, name: 'Item 1'},
				{ id: 2, name: 'Item 2'},
				{ id: 3, name: 'Item 3'},
				{ id: 4, name: 'Item 4'},
			]
		}
	}
	addToDeck(name) {
		var found = false;
		if(cardArray.length > 0){
			for(var i=0; i < cardArray.length; i++){
				if(name === cardArray[i].name){
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
		for(var i=0; i < cardArray.length; i++){
			if(name === cardArray[i].name){
				cardArray.splice(i, 1);
				this.setState({
					currentDeck: cardArray
				});
			}
		}
	}
	listCollection() {
		var editedCollectionArray = [];
		var currentDeckState = this.state.currentDeck;
		for(var i=0; i<collectionArray.length; i++){
			var checkInDeck = currentDeckState.find(currentDeckState => currentDeckState.name === collectionArray[i].name);
			if(checkInDeck === undefined){
				editedCollectionArray.push(collectionArray[i]);
			}else{}
		}
		var cards = editedCollectionArray;
		const listCollection = cards.map((card, index) =>
			<CollectionCard className={card.alignment} key={index} id={index} ability={card.ability} icon={card.icon} faction={card.faction} name={card.name} type={card.type} cost={card.cost} power={card.power} text={card.text} handleDrop={(name) => this.addToDeck(card.name)} />
		);
		return (
			<div>{listCollection}</div>
		)
	}
	listCurrentDeck() {
		var cards = this.state.currentDeck;
		const listDeck = cards.map((card, index) =>
			<CollectionCard className={card.alignment} key={index} faction={card.faction} icon={card.icon} ability={card.ability} card={card} id={index} name={card.name} type={card.type} cost={card.cost} power={card.power} text={card.text} handleDrop={(name) => this.removeFromDeck(card.name)} />
		);
		return (
			<div>{listDeck}</div>
		)
	}
	render() {
		return (
			<div className="col-xs-12">
				<div className="row">
					<div className="col-xs-2">
						<button className="coolButton" onClick={this.props.checkDeckContents}>Back</button>
					</div>
					<div className="col-xs-offset-2 col-xs-4">
						<div id="deckNumber">Cards {this.state.currentDeck.length}/7</div>
					</div>
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

class MiningGame extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			rowDisplay: [1,0,0,0,0,0,0],
			colDisplay: [1,0,0,0,0,0,0,0,0,0,0,0]
		}
		this.handleKeyDown = this.handleKeyDown.bind(this);
	}
	componentDidMount(){
		document.getElementById("dirtLayer").style.height = "600px";
		console.log(document.getElementsByClassName('miner').parentElement);
		
	}
	handleKeyDown(event){
		if(event.key === "ArrowLeft"){
			var colArray = this.state.colDisplay;
			var index = colArray.indexOf(1);
			colArray[index] = 0;
			colArray[index-1] = 1;
			this.setState({
				colDisplay: colArray
			});
		}else if(event.key === "ArrowUp"){
			var rowArray = this.state.rowDisplay;
			var index = rowArray.indexOf(1);
			rowArray[index] = 0;
			rowArray[index-1] = 1;
			this.setState({
				rowDisplay: rowArray
			});
		}else if(event.key === "ArrowRight"){
			var colArray = this.state.colDisplay;
			var index = colArray.indexOf(1);
			colArray[index] = 0;
			colArray[index+1] = 1;
			this.setState({
				colDisplay: colArray
			});
		}else if(event.key === "ArrowDown"){
			var rowArray = this.state.rowDisplay;
			var index = rowArray.indexOf(1);
			rowArray[index] = 0;
			rowArray[index+1] = 1;
			this.setState({
				rowDisplay: rowArray
			});
		}
	}
	render() {
		return (
			<div tabIndex="1" onKeyDown={this.handleKeyDown}>
				<div className="row" id="dirtLayer">
					<div className="col-xs-12">
						<MiningRow rowDisplay={this.state.rowDisplay[0]} colDisplay={this.state.colDisplay} rowId="1" />
						<MiningRow rowDisplay={this.state.rowDisplay[1]} colDisplay={this.state.colDisplay} rowId="2" />
						<MiningRow rowDisplay={this.state.rowDisplay[2]} colDisplay={this.state.colDisplay} rowId="3" />
						<MiningRow rowDisplay={this.state.rowDisplay[3]} colDisplay={this.state.colDisplay} rowId="4" />
						<MiningRow rowDisplay={this.state.rowDisplay[4]} colDisplay={this.state.colDisplay} rowId="5" />
						<MiningRow rowDisplay={this.state.rowDisplay[5]} colDisplay={this.state.colDisplay} rowId="6" />
						<MiningRow rowDisplay={this.state.rowDisplay[6]} colDisplay={this.state.colDisplay} rowId="7" />
					</div>
				</div>
			</div>
		)
	}
}

class MiningRow extends React.Component {
	render() {
		return (
			<div className="row" id={this.props.rowId}>
				<MiningBlock rowDisplay={this.props.rowDisplay} colDisplay={this.props.colDisplay[0]} blockId="1" />
				<MiningBlock rowDisplay={this.props.rowDisplay} colDisplay={this.props.colDisplay[1]} blockId="2" />
				<MiningBlock rowDisplay={this.props.rowDisplay} colDisplay={this.props.colDisplay[2]} blockId="3" />
				<MiningBlock rowDisplay={this.props.rowDisplay} colDisplay={this.props.colDisplay[3]} blockId="4" />
				<MiningBlock rowDisplay={this.props.rowDisplay} colDisplay={this.props.colDisplay[4]} blockId="5" />
				<MiningBlock rowDisplay={this.props.rowDisplay} colDisplay={this.props.colDisplay[5]} blockId="6" />
				<MiningBlock rowDisplay={this.props.rowDisplay} colDisplay={this.props.colDisplay[6]} blockId="7" />
				<MiningBlock rowDisplay={this.props.rowDisplay} colDisplay={this.props.colDisplay[7]} blockId="8" />
				<MiningBlock rowDisplay={this.props.rowDisplay} colDisplay={this.props.colDisplay[8]} blockId="9" />
				<MiningBlock rowDisplay={this.props.rowDisplay} colDisplay={this.props.colDisplay[9]} blockId="10" />
				<MiningBlock rowDisplay={this.props.rowDisplay} colDisplay={this.props.colDisplay[10]} blockId="11" />
				<MiningBlock rowDisplay={this.props.rowDisplay} colDisplay={this.props.colDisplay[11]} blockId="12" />
			</div>
		)
	}
}

class MiningBlock extends React.Component {
	render() {
		var render = false;
		if(this.props.rowDisplay === 0 || this.props.colDisplay === 0){
			render = false;
		}else{
			render=true;
		}
		return (
			<div className={`col-xs-1 dirtBlock ${render}`}>
				{render ? <Miner /> : null }
			</div>
		)
	}
}

class Miner extends React.Component {
	render() {
		return (
			<div className="miner">
				<img src={youber} id="miningGif" alt="youber" />
			</div>
		)
	}
}
export default DragDropContext(HTML5Backend)(GameScreenHub)