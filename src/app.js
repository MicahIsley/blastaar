import React from 'react';
import ReactDOM from 'react-dom';
import Firebase from 'firebase';
import config from "./config";
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import placeholderImg from './assets/awe.png';
import Target from './Target';
import Target2 from './Target2';
import Ability from './Ability';
import AbilityTarget from './AbilityTarget';
import CardFrame from './CardFrame';
import FrameTarget from './FrameTarget';
import Element from './Element';
import ElementTarget from './ElementTarget';
import CollectionCard from './CollectionCard';
import CollectionCard2 from './CollectionCard2';
import CreateCharacter from './CreateCharacter';
import DeleteZone from './deleteZone.js';
import heart from './assets/heart.png';
import shield from './assets/shield.png';
import power from './assets/power.png';
import int from './assets/int.png';
import wobbleduk from './assets/wobbleduk.gif';
import budleFairy from './assets/budleFairy.gif';
import madnado from './assets/madnado.gif';
import morp from './assets/morp.gif';
import primtree from './assets/primtree.gif';
import toughPrimtree from './assets/toughPrimtree.gif';
import jewelPrimtree from './assets/jewelPrimtree.gif';
import queenPrimtree from './assets/queenPrimtree.png';
import borgus from './assets/borgus.gif';
import gangOfFleebs from './assets/gangOfFleebs.gif';
import kingWobbleduk from './assets/kingWobbleduk.gif';
import maclaw from './assets/maclaw.gif';
import ghostShark from './assets/ghostShark.png';
import marshSlapper from './assets/marshSlapper.gif';
import albinoSlapper from './assets/albinoSlapper.gif';
import kingSlapper from './assets/kingSlapper.png';
import trenchThump from './assets/trenchThump.gif';
import caveThump from './assets/caveThump.gif';
import coralThump from './assets/coralThump.gif';
import kragmup from './assets/kragmup.png';
import purpleKreep from './assets/purpleKreep.gif';
import shockShark from './assets/shockShark.gif';
import steed from './assets/steed.png';
import tipper from './assets/tipper.png';
import rockFairy from './assets/rockFairy.gif';
import windleFairy from './assets/windleFairy.png';
import youber from './assets/youber.gif';
import awe from './assets/awe.png';
import earth from './assets/earth.png';
import fire from './assets/fire.png';
import wind from './assets/wind.png';
import water from './assets/water.png';
import lava from './assets/lava.png';
import desert from './assets/desert.png';
import mud from './assets/mud.png';
import storm from './assets/storm.png';
import spooky from './assets/spooky.png';
import empty from './assets/empty.png';
import walkLeft from './assets/walkLeft.gif';
import walkRight from './assets/walkRight.gif';
import walkUp from './assets/walkUp.png';
import tree from './assets/backgroundTree.png';
import fireBackground from './assets/fireBackground.png';
import grassBackground from './assets/grassBackground.png';
import waterBackground from './assets/waterBackground.png';
import windBackground from './assets/windBackground.png';
import neutralCard from './assets/neutralCard.png';
import './index.css';

var player;
var enemy0Slot = {};
var enemy1Slot = {};
var enemy2Slot = {};
var createEnemy;

var sabotoge1 = new CardCon("Tripped Up", 0, -2, "Hit the ground", "enemy", 0, "", "", false, "stormlight", placeholderImg, placeholderImg, "neutral", 0);
var sabotoge2 = new CardCon("Budle Charm", 0, -3, "Woozy", "enemy", 0, "", "", false, "stormlight", placeholderImg, placeholderImg, "neutral", 0);
var sabotoge3 = new CardCon("Raging Storm", 0, -4, "So Fierce", "enemy", 0, "", "", false, "stormlight", placeholderImg, placeholderImg, "neutral", 0);
var sabotoge4 = new CardCon("Steamed", 0, -5, "Super way too hot", "enemy", 0, "", "", false, "stormlight", placeholderImg, placeholderImg, "neutral", 0);

const wobbledukStats = {
	name: "Wobbleduk",
	hp: 6,
	attack: 3,
	sabotoge: 0,
	pointValue: 50,
	image: wobbleduk,
	sabCard: sabotoge1,
	element: earth
};

const angryWobbledukStats = {
	name: "Mean Wobbleduk",
	hp: 1,
	attack: 2,
	sabotoge: 1,
	pointValue: 50,
	image: wobbleduk,
	sabCard: sabotoge1,
	element: earth
};

const kingWobbledukStats = {
	name: "King Wobbleduk",
	hp: 3,
	attack: 5,
	sabotoge: 3,
	pointValue: 700,
	image: kingWobbleduk,
	sabCard: sabotoge1,
	element: earth
};

const budleFairyStats = {
	name: "Budle Fairy",
	hp: 5,
	attack: 8,
	sabotoge: 4,
	pointValue: 500,
	image: budleFairy,
	sabCard: sabotoge2,
	element: water
};

const kingBudleFairyStats = {
	name: "Super Budle Fairy",
	hp: 20,
	attack: 6,
	sabotoge: 4,
	pointValue: 700,
	image: budleFairy,
	sabCard: sabotoge3,
	element: water
};

const madnadoStats = {
	name: "Madnado",
	hp: 3,
	attack: 4,
	sabotoge: 2,
	pointValue: 250,
	image: madnado,
	sabCard: sabotoge3,
	element: wind
};

const kingMadnadoStats = {
	name: "Grand Madnado",
	hp: 3,
	attack: 4,
	sabotoge: 2,
	pointValue: 250,
	image: madnado,
	sabCard: sabotoge3,
	element: wind
};

const morpStats = {
	name: "Morp",
	hp: 2,
	attack: 3,
	sabotoge: 1,
	pointValue: 100,
	image: morp,
	sabCard: sabotoge4,
	element: fire
};

const kingMorpStats = {
	name: "Emperor Morp",
	hp: 2,
	attack: 3,
	sabotoge: 1,
	pointValue: 100,
	image: morp,
	sabCard: sabotoge4,
	element: fire
};

const primtreeStats = {
	name: "Primtree",
	hp: 2,
	attack: 3,
	sabotoge: 0,
	pointValue: 150,
	image: primtree,
	sabCard: sabotoge1,
	element: earth
};

const primtree2Stats = {
	name: "Primtree Defender",
	hp: 10,
	attack: 3,
	sabotoge: 1,
	pointValue: 150,
	image: toughPrimtree,
	sabCard: sabotoge1,
	element: earth
};

const primtree3Stats = {
	name: "Primtree Royal Guard",
	hp: 15,
	attack: 5,
	sabotoge: 1,
	pointValue: 150,
	image: jewelPrimtree,
	sabCard: sabotoge1,
	element: earth
};

const primtree4Stats = {
	name: "Root Caster",
	hp: 10,
	attack: 5,
	sabotoge: 3,
	pointValue: 150,
	image: primtree,
	sabCard: sabotoge1,
	element: earth
};

const queenPrimtreeStats = {
	name: "Queen Primtree",
	hp: 1,
	attack: 5,
	sabotoge: 1,
	pointValue: 150,
	image: queenPrimtree,
	sabCard: sabotoge1,
	element: earth
};

const borgusStats = {
	name: "Borgus",
	hp: 2,
	attack: 5,
	sabotoge: 2,
	pointValue: 200,
	image: borgus,
	sabCard: sabotoge1,
	element: earth
};

const kingBorgusStats = {
	name: " King Borgus",
	hp: 20,
	attack: 4,
	sabotoge: 5,
	pointValue: 200,
	image: borgus,
	sabCard: sabotoge1,
	element: earth
};

const gangOfFleebsStats = {
	name: "Gang of Fleebs",
	hp: 3,
	attack: 7,
	sabotoge: 1,
	pointValue: 250,
	image: gangOfFleebs,
	sabCard: sabotoge1,
	element: earth
};

const maclawStats = {
	name: "Maclaw",
	hp: 3,
	attack: 6,
	sabotoge: 3,
	pointValue: 300,
	image: maclaw,
	sabCard: sabotoge1,
	element: wind
};

const rockFairyStats = {
	name: "Rock Fairy",
	hp: 15,
	attack: 2,
	sabotoge: 1,
	pointValue: 100,
	image: rockFairy,
	sabCard: sabotoge1,
	element: earth
};

const ghostSharkStats = {
	name: "Ghost Shark",
	hp: 12,
	attack: 4,
	sabotoge: 2,
	pointValue: 100,
	image: ghostShark,
	sabCard: sabotoge1,
	element: water
};

const marshSlapperStats = {
	name: "Marsh Slapper",
	hp: 10,
	attack: 3,
	sabotoge: 3,
	pointValue: 100,
	image: marshSlapper,
	sabCard: sabotoge1,
	element: water
};

const kingSlapperStats = {
	name: "King Slapper",
	hp: 25,
	attack: 5,
	sabotoge: 3,
	pointValue: 100,
	image: kingSlapper,
	sabCard: sabotoge1,
	element: water
};

const albinoSlapperStats = {
	name: "Albino Slapper",
	hp: 8,
	attack: 4,
	sabotoge: 2,
	pointValue: 200,
	image: albinoSlapper,
	sabCard: sabotoge1,
	element: water
};

const trenchThumpStats = {
	name: "Trench Thump",
	hp: 20,
	attack: 2,
	sabotoge: 0,
	pointValue: 100,
	image: trenchThump,
	sabCard: sabotoge1,
	element: water
};

const caveThumpStats = {
	name: "Cave Thump",
	hp: 25,
	attack: 4,
	sabotoge: 1,
	pointValue: 100,
	image: caveThump,
	sabCard: sabotoge1,
	element: water
};

const coralThumpStats = {
	name: "Coral Thump",
	hp: 18,
	attack: 3,
	sabotoge: 2,
	pointValue: 100,
	image: coralThump,
	sabCard: sabotoge1,
	element: water
}

const banditStats = {
	name: "Bandit",
	hp: 1,
	attack: 4,
	sabotoge: 2,
	pointValue: 300,
	image: placeholderImg,
	sabCard: sabotoge1,
	element: earth
};

var numberOfEnemies = 1;
var numberOfStages;
var earthStage = 0;
var waterStage = 0;
var windStage = 0;
var fireStage = 0;

function tutorialLevels(){
	numberOfStages = 4;
	if(stageComplete === 0){
		numberOfEnemies = 1;
		createEnemy = wobbledukStats;
	}else if(stageComplete === 1){
		numberOfEnemies = 2;
		createEnemy = wobbledukStats;
	}else if(stageComplete === 2){
		numberOfEnemies = 3;
		createEnemy = angryWobbledukStats;
	}else if(stageComplete === 3){
		numberOfEnemies = 1;
		createEnemy = kingWobbledukStats;
	}
}

function levelWaterDistribution(randEnemyNum){
	numberOfStages = 4;
	if(stageComplete < 3){
		numberOfEnemies = 3;
		if(randEnemyNum < 180){
			createEnemy = trenchThumpStats;
			return;
		}else if(randEnemyNum < 255){
			createEnemy = marshSlapperStats;
			return;
		}else if(randEnemyNum < 330){
			createEnemy = ghostSharkStats;
			return;
		}else if(randEnemyNum < 340){
			createEnemy = budleFairyStats;
			return;
		}else if(randEnemyNum < 400){
			createEnemy = caveThumpStats;
			return;
		}else if(randEnemyNum < 480){
			createEnemy = coralThumpStats;
			return;
		}else if(randEnemyNum < 497){
			createEnemy = albinoSlapperStats;
			return;
		}else{
			createEnemy = gangOfFleebsStats;
		}
	}else if(stageComplete === 3){
		numberOfEnemies = 1;
		if(randEnemyNum < 250){
			createEnemy = kingBudleFairyStats;
			return;
		}else{
			createEnemy = kingSlapperStats;
		}
	}
}

function levelEarthDistribution(randEnemyNum){
	numberOfStages = 4;
	if(stageComplete < 3){
		numberOfEnemies = 2;
		if(randEnemyNum < 180){
			createEnemy = primtreeStats;
			return;
		}else if(randEnemyNum < 255){
			createEnemy = wobbledukStats;
			return;
		}else if(randEnemyNum < 330){
			createEnemy = primtree2Stats;
			return;
		}else if(randEnemyNum < 340){
			createEnemy = rockFairyStats;
			return;
		}else if(randEnemyNum < 380){
			createEnemy = primtree3Stats;
			return;
		}else if(randEnemyNum < 450){
			createEnemy = angryWobbledukStats;
			return;
		}else if(randEnemyNum < 497){
			createEnemy = primtree4Stats;
			return;
		}else{
			createEnemy = gangOfFleebsStats;
		}
	}else if(stageComplete === 3){
		numberOfEnemies = 1;
		if(randEnemyNum < 250){
			createEnemy = kingWobbledukStats;
			return;
		}else{
			createEnemy = queenPrimtreeStats;
		}
	}
}

function levelFireDistribution(randEnemyNum){
	numberOfStages = 4;
	if(stageComplete < 3){
		numberOfEnemies = 2;
		if(randEnemyNum < 180){
			createEnemy = primtreeStats;
			return;
		}else if(randEnemyNum < 255){
			createEnemy = wobbledukStats;
			return;
		}else if(randEnemyNum < 330){
			createEnemy = primtree2Stats;
			return;
		}else if(randEnemyNum < 340){
			createEnemy = rockFairyStats;
			return;
		}else if(randEnemyNum < 380){
			createEnemy = primtree3Stats;
			return;
		}else if(randEnemyNum < 450){
			createEnemy = angryWobbledukStats;
			return;
		}else if(randEnemyNum < 497){
			createEnemy = primtree4Stats;
			return;
		}else{
			createEnemy = gangOfFleebsStats;
		}
	}else if(stageComplete === 3){
		numberOfEnemies = 1;
		if(randEnemyNum < 250){
			createEnemy = kingWobbledukStats;
			return;
		}else{
			createEnemy = queenPrimtreeStats;
		}
	}
}

function levelWindDistribution(randEnemyNum){
	numberOfStages = 4;
	if(stageComplete < 3){
		numberOfEnemies = 2;
		if(randEnemyNum < 180){
			createEnemy = primtreeStats;
			return;
		}else if(randEnemyNum < 255){
			createEnemy = wobbledukStats;
			return;
		}else if(randEnemyNum < 330){
			createEnemy = primtree2Stats;
			return;
		}else if(randEnemyNum < 340){
			createEnemy = rockFairyStats;
			return;
		}else if(randEnemyNum < 380){
			createEnemy = primtree3Stats;
			return;
		}else if(randEnemyNum < 450){
			createEnemy = angryWobbledukStats;
			return;
		}else if(randEnemyNum < 497){
			createEnemy = primtree4Stats;
			return;
		}else{
			createEnemy = gangOfFleebsStats;
		}
	}else if(stageComplete === 3){
		numberOfEnemies = 1;
		if(randEnemyNum < 250){
			createEnemy = kingWobbledukStats;
			return;
		}else{
			createEnemy = queenPrimtreeStats;
		}
	}
}

function levelTowerDistribution(randEnemyNum){

}

function EnemyCon(name, hp, attack, sabotoge, pointValue, image, sabCard, element){
	this.name = name;
	this.hp = hp;
	this.attack = attack;
	this.sabotoge = sabotoge;
	this.pointValue = pointValue;
	this.image = image;
	this.sabCard = sabCard;
	this.element = element;
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

function CardCon(name, cost, power, text, alignment, rarity, ability1, ability2, unlocked, type, image, icon, faction, craft, ownedNum, deckNum){
	this.name = name;
	this.cost = cost;
	this.power = power;
	this.text = text;
	this.alignment = alignment;
	this.rarity = rarity;
	this.ability1 = ability1;
	this.ability2 = ability2;
	this.unlocked = unlocked;
	this.type = type;
	this.image = image;
	this.icon = icon;
	this.faction = faction;
	this.craft = craft;
	this.ownedNum = ownedNum;
	this.deckNum = deckNum;
}

const kaladinH = new HeroCon("Youber", 50, 0, 3, 0, youber, true);
var shapeshift1 = new HeroCon("Wobbleduk", 30, 3, 3, 4, wobbleduk, true);
var shapeshift2 = new HeroCon("Budle Fairy", 20, 2, 5, 0, budleFairy, true);
var shapeshift3 = new HeroCon("Madnado", 25, 4, 3, 2, madnado, true);
var shapeshift4 = new HeroCon("Morp", 25, 5, 2, 2, morp, true);

const rustySword = new ItemCon("Rusty Sword", 1, "weapon", 10, true, true);
const battleSpear = new ItemCon("Battle Spear", 2, "weapon", 70, true, true);
const shardblade = new ItemCon("Shardblade", 3, "weapon", 200, true, true);
const leatherPads = new ItemCon("Leather Pads", 1, "armor", 10, true, true);
const parshendiCarapace = new ItemCon("Parshendi Carapace", 2, "armor", 80, true, true);
const shardplate = new ItemCon("Shardplate", 3, "armor", 150, true, true);

var crafting1 = new CardCon(" ", 0, 0, " ", "hero", 0, "", "", false, "stormlight", placeholderImg, placeholderImg, "neutral", 0, 1, 0);
var fire1 = new CardCon("Fireball", 0, 5, "Simple, but effective", "hero", 0, "", "", false, "stormlight", placeholderImg, fire, "fire", 1, 1, 0);
var fire2 = new CardCon("Fire Lash", 0, 6, "Weaken 1", "hero", 0, "weaken 1", "", false, "stormlight", placeholderImg, fire, "fire", 2, 1, 0);
var fire3 = new CardCon("Power of Goordu", 0, 0, "Gain 1 Magic Power and Next Spell +5", "hero", 0, "str 1", "next 5", false, "stormlight", placeholderImg, fire, "fire", 3, 1, 0);
var fire4 = new CardCon("Burn Bright", 0, 1, "Multiply", "hero", 0, "multiply", "", false, "stormlight", placeholderImg, fire, "fire", 4, 1, 0);
var fire5 = new CardCon("Soul Flare", 0, 7, "You're Exhausted", "hero", 0, "", "", false, "stormlight", placeholderImg, fire, "fire", 5, 1, 0);
var fire6 = new CardCon("Draw Heat", 0, 4, "Heal 2 and Next Spell + 2", 0, "heal 2", "next 2", false, "stormlight", placeholderImg, fire, "fire", 6, 1, 0);
var fire7 = new CardCon("Warning Shot", 0, 2, "Next Spell +3", "hero", 0, "next 3", "", false, "stormlight", placeholderImg, fire, "fire", 7, 1, 0);
var fire8 = new CardCon("Illuminate", 0, 1, "Rummage 1 and give next spell +2", "hero", 0, "next 2", "research 1", false, "stormlight", placeholderImg, fire, "fire", 8, 1, 0);
var fire9 = new CardCon("Find the source", 0, 3, "Rummage 4", "hero", 0, "research 4", "", false, "stormlight", placeholderImg, fire, "fire", 9, 1, 0);
var fire10 = new CardCon("Force of Fire", 0, 1, "Gain 2 Magic Power", "hero", 0, "str 2", "", false, "stormlight", placeholderImg, fire, "fire", 10, 1, 0);
var fire11 = new CardCon("Crown of Flames", 0, 0, "Gain 3 Magic Power, you're exhausted", 0, "str 3", "", false, "stormlight", placeholderImg, fire, "fire", 11, 1, 0);
var fire12 = new CardCon("Fire Breath", 10, 0, "", 0, "", "", false, "stormlight", placeholderImg, fire, "fire", 12, 1, 0);
var fire13 = new CardCon("Reckless Flare", 0, 5, "Double this attack. You're exhausted", "hero", 0, "multiply", "exhausted", false, "stormlight", placeholderImg, fire, "fire", 13, 1, 0);
var fire14 = new CardCon("Fuel", 0, 1, "Gain 4 energy", "hero", 0, "energy 3", "", false, "stormlight", placeholderImg, fire, "fire", 14, 1, 0);
var fire15 = new CardCon("Suffocating Smoke", 0, 3, "Weaken 2", "hero", 0, "weaken 2", "", false, "stormlight", placeholderImg, fire, "fire", 15, 1, 0);
var fire16 = new CardCon("Extra Sticks", 2, 0, "Fire cards get +1 power", "hero", 0, "boost fire 1", "", false, "support", placeholderImg, fire, "fire", 16, 1, 0);
var fire17 = new CardCon("Hot Hands", 0, 1, "Shuffle 3 Roasts into your deck", "hero", 0, "addCard 1 3", "", false, "stormlight", placeholderImg, fire, "fire", 17, 1, 0);
var fire18 = new CardCon("Encirle", 1, 0, "Fire Scheme 2/6", "hero", 0, "scheme fire 2", 6, false, "stormlight", placeholderImg, fire, "fire", 18, 1, 0);
var fire19 = new CardCon("Cooked Alive", 3, 0, "Fire Scheme 3/Purge", "hero", 0, "scheme fire 3", "purge", false, "stormlight", placeholderImg, fire, "fire", 19, 1, 0);
var fire20 = new CardCon("Fire...Everywhere!", 0, 15, "", "hero", 0, "", "", false, "stormlight", placeholderImg, fire, "fire", 20, 1, 0);
var earth1 = new CardCon("Rock Skin", 0, 2, "Shield 6", "hero", 0, "shield 6", "", false, "stormlight", placeholderImg, earth, "earth", 1, 1, 0);
var earth2 = new CardCon("Boulder Trap", 0, 6, "", "hero", 0, "", "", false, "stormlight", placeholderImg, earth, "earth", 2, 1, 0);
var earth3 = new CardCon("Toughen", 0, 5, "Gain +1 Def", "hero", 0, "def 1", "", false, "stormlight", placeholderImg, earth, "earth", 3, 1, 0);
var earth4 = new CardCon("Stone Bubble", 0, 1, "Shield 9", "hero", 0, "shield 9", "", false, "stormlight", placeholderImg, earth, "earth", 4, 1, 0)
var earth5 = new CardCon("Head Bash", 0, 4, "Shield 4", "hero", 0, "shield 2", "", false, "stormlight", placeholderImg, earth, "earth", 5, 1, 0);
var earth6 = new CardCon("Training Grounds", 0, 1, "Grow 1", "hero", 0, "grow 1 10", "", false, "stormlight", placeholderImg, earth, "earth", 6, 1, 0);
var earth7 = new CardCon("Earthquake", 0, 5, "Deal 5 damage this turn and the next", "hero", 0, "next 5", "", false, "stormlight", placeholderImg, earth, "earth", 7, 1, 0);
var earth8 = new CardCon("Pile On", 0, 2, "Grow 2", "hero", 0, "grow 2 6", "", false, "stormlight", placeholderImg, earth, "earth", 8, 1, 0);
var earth9 = new CardCon("Stone Shackles", 0, 3, "Weaken 2", "hero", 0, "weaken 2", "", false, "stormlight", placeholderImg, earth, "earth", 9, 1, 0);
var earth10 = new CardCon("No Sabotoge!", 0, 1, "Shield 5 and Weaken 5", "hero", 0, "shield 5", "weaken 5", false, "stormlight", placeholderImg, earth, "earth", 10, 1, 0);
var earth11 = new CardCon("Defences Up", 0, 2, "Gain + 1 Def and Shield 4", "hero", 0, "def 1", "shield 4", false, "stormlight", placeholderImg, earth, "earth", 11, 1, 0);
var earth12 = new CardCon("Granite Armor", 0, 0, "Gain +2 Def", "hero", 0, "def 2", "", false, "stormlight", placeholderImg, earth, "earth", 12, 1, 0);
var earth13 = new CardCon("Keep Rolling", 0, 0, "Shield 2. Grow 1", "hero", 0, "shield 1", "grow 1 8", false, "stormlight", placeholderImg, earth, "earth", 13, 1, 0);
var earth14 = new CardCon("Power Crystal", 0, 1, "Energy 3", "hero", 0, "energy 3", "", false, "stormlight", placeholderImg, earth, "earth", 14, 1, 0);
var earth15 = new CardCon("Break Bones", 0, 6, "Weaken 3", "hero", 0, "weaken 3", "", false, "stormlight", placeholderImg, earth, "earth", 15, 1, 0);
var earth16 = new CardCon("Power Quarry", 2, 0, "Earth cards get +1 power", "hero", 0, "boost earth 1", "", false, "support", placeholderImg, earth, "earth", 16, 1, 0);
var earth17 = new CardCon("Rock Buds", 0, 0, "Shuffle 3 Earth Shields into your deck", "hero", 0, "addCard 2 3", "", false, "stormlight", placeholderImg, earth, "earth", 17, 1, 0);
var earth18 = new CardCon("Rock Scheme", 2, 0, "Earth Scheme 2/5", "hero", 0, "scheme earth 2", 5, false, "stormlight", placeholderImg, earth, "earth", 18, 1, 0);
var earth19 = new CardCon("Strong Rock Scheme", 5, 0, "Earth Scheme 7/22", "hero", 0, "scheme earth 7", 22, false, "stormlight", placeholderImg, earth, "earth", 19, 1, 0);
var earth20 = new CardCon("Crush", 0, 1, "Grow 3", "hero", 0, "grow 3 31", "", false, "stormlight", earth, "earth", 20, 1, 0);
var wind1 = new CardCon("Wind Blessing",0, 0, "Wind cards get +1 power", "hero", 0, "boost wind 1", "", false, "support", placeholderImg, wind, "wind", 0, 1);
var wind2 = new CardCon("Like the Wind", 0, 2, "Avoid all sabotoges this turn", "hero", 0, "decoy", "", false, "stormlight", placeholderImg, wind, "wind", 0, 1);
var wind3 = new CardCon("Brewing Storm",0, 2, "Next Spell +6", "hero", 0, "next 6", "", false, "stormlight", placeholderImg, wind, "wind", 0, 1);
var wind4 = new CardCon("Tornado", 0, 5, "Whoosh!", "hero", 0, "", "", false, "stormlight", placeholderImg, wind, "wind", 0, 1);
var wind5 = new CardCon("Fly", 0, 0, "Avoid all sabotoges and the next spell gets +2", "hero", 0, "decoy", "next 2", false, "stormlight", placeholderImg, wind, "wind", 0, 1);
var wind6 = new CardCon("Wind Speed", 0, 3, "Attack again", "hero", 0, "extra 1", "", false, "stormlight", placeholderImg, wind, "wind", 0, 1);
var wind7 = new CardCon("Super Quick Hands", 0, 1, "Gain +2 Int", "hero", 0, "int 2", "", false, "stormlight", placeholderImg, wind, "wind", 0, 1);
var wind8 = new CardCon("Inner Storm", 0, 0, "Shuffle 3 Flurry's into your deck", "hero", 0, "addCard 3 3", "", false, "stormlight", placeholderImg, wind, "wind", 0, 1);
var wind9 = new CardCon("Piercing Wind", 0, 3, "Ouch", "hero", 0, "", "", false, "stormlight", placeholderImg, wind, "wind", 0, 1);
var wind10 = new CardCon("Momentum", 0, 3, "Extra Attack and next spell +3", "hero", 0, "extra 1", "next 3", false, "stormlight", placeholderImg, wind, "wind", 0, 1);
var water1 = new CardCon("Healing Water", 0, 0, "Restore 10 health", "hero", 0, "heal 10", "", false, "stormlight", placeholderImg, water, "water", 0, 1);
var water2 = new CardCon("Water Visions", 0, 1, "Rummage 5", "hero", 0, "research 5", "", false, "stormlight", placeholderImg, water, "water", 0, 1);
var water3 = new CardCon("Cleanse",0, 2,"Reclaim 1", "hero", 0, "reclaim 1", "", false, "stormlight", placeholderImg, water , "water", 0, 1);
var water4 = new CardCon("Water Blessing", 2, 0,"Water cards get +1 power", "hero", 0, "boost water 1", "", false, "support", placeholderImg, water, "water", 0, 1);
var water5 = new CardCon("Liquify", 0, 4, "Oh no!", "hero", 0, "", "", false, "stormlight", placeholderImg, water, "water", 0, 1);
var water6 = new CardCon("Imbue power", 0, 0, "Magic +2", "hero", 0, "str 2", "", false, "stormlight", placeholderImg, water, "water", 0, 1);
var water7 = new CardCon("Draw Deep", 0, 0, "Shuffle 3 Drain's into your deck", "hero", 0, "addCard 4 3", "", false, "stormlight", placeholderImg, water, "water", 0, 1);
var water8 = new CardCon("Tidal Wave", 0, 7, "Splash", "hero", 0, "", "", false, "stormlight", placeholderImg, water, "water", 0, 1);
var water9 = new CardCon("Ice Cold", 0, 2, "Weaken 2", "hero", 0, "weaken 2", "", false, "stormlight", placeholderImg, water, "water", 0, 1);
var water10 = new CardCon("Just Keep Looking", 0, 3, "Rummage 3 and heal 3", "hero", 0, "heal 3", "research 3", true, "stormlight", placeholderImg, water, "water", 0, 1);
var basic1 = new CardCon("Small Rock", 0, 2, "It's pretty small", "hero", 1, "", "", true, "stormlight", coralThump, placeholderImg, "neutral", 1, 4, 1);
var basic2 = new CardCon("Big Rock", 0, 4, "It's pretty big", "hero", 1, "", "", true, "stormlight", placeholderImg, placeholderImg, "neutral", 2, 2, 1);
var basic3 = new CardCon("Biggest Blast", 0, 6, "Whaaam!", "hero", 2, "", "", true, "stormlight", placeholderImg, placeholderImg, "neutral", 3, 1, 0); 
var basic4 = new CardCon("Thick Skin", 0, 2, "Shield 2", "hero", 1, "shield 2", "", true, "stormlight", placeholderImg, placeholderImg, "neutral", 4, 1, 1);
var basic5 = new CardCon("Protective Bubble", 0, 0, "Shield 4", "hero", 1, "shield 4", "", true, "stormlight", placeholderImg, placeholderImg, "neutral", 5, 1, 0);
var basic6 = new CardCon("Short Rest", 0, 2, "Heal 3", "hero", 1, "heal 3", "", true, "stormlight", placeholderImg, placeholderImg, "neutral", 6, 1, 1);
var basic7 = new CardCon("Focus", 0, 1,"Next Spell +3", "hero", 1, "next 3", "", true, "stormlight", placeholderImg, placeholderImg, "neutral", 7, 1, 1);
var basic8 = new CardCon("Reach Back In", 0, 3, "Rummage 2", "hero", 1, "research 2", "", true, "stormlight", placeholderImg, placeholderImg, "neutral", 8, 1, 1);
var basic9 = new CardCon("Thoughful Study", 0, 0, "Rummage 4", "hero", 1, "research 4", "", true, "stormlight", placeholderImg, placeholderImg, "neutral", 9, 1, 0);
var basic10 = new CardCon("More Power", 0, 0, "Increase Attack by 1", "hero", 2, "str 1", "", true, "stormlight", placeholderImg, placeholderImg, "neutral", 10, 1, 0);
var basic11 = new CardCon("Mind Grow", 0, 0, "Increase Intelligence by 1", "hero", 2, "int 1", "", true, "stormlight", placeholderImg, placeholderImg, "neutral", 11, 1, 0);
var basic12 = new CardCon("React Stance", 0, 0, "Increase Shield by 1", "hero", 2, "def 1", "", true, "stormlight", placeholderImg, placeholderImg, "neutral", 12, 1, 0); 
var basic13 = new CardCon("Powerful Shove", 0, 5, "Exhausted", "hero", 2, "exhausted", "", true, "stormlight", placeholderImg, placeholderImg, "neutral", 13, 1, 0);
var basic14 = new CardCon("Store Energy", 0, 3, "Gain 2 Energy", "hero", 1, "energy 2", "", true, "stormlight", placeholderImg, placeholderImg, "neutral", 14, 1, 0);
var basic15 = new CardCon("Crippling Shot", 0, 1, "Weaken 1", "hero", 1, "weaken 1", "", true, "stormlight", placeholderImg, placeholderImg, "neutral", 15, 1, 0);
var basic16 = new CardCon("Something", 0, 3, "", "hero", 1, "", "", true, "stormlight", placeholderImg, placeholderImg, "neutral", 16, 1, 0);
var basic17 = new CardCon("Add Some More", 0, 0, "Add 3 Energy Blast's to your deck", "hero", 3, "addCard 5 3", "", true, "stormlight", placeholderImg, placeholderImg, "neutral", 17, 1, 0);
var basic18 = new CardCon("Plot", 1, 0, "Neutral Scheme 2/4", "hero", 2, "scheme neutral 2 4", 1, true, "support", placeholderImg, placeholderImg, "neutral", 18, 1, 1);
var basic19 = new CardCon("Master Scheme", 4, 0, "Neutral Scheme 5/8", "hero", 3, "scheme neutral 5", 8, true, "support", placeholderImg, placeholderImg, "neutral", 19, 1, 0);
var basic20 = new CardCon("Magic Rock", 0, 3, "Looks like it should turn into something", "hero", 3, "", "", true, "stormlight", placeholderImg, placeholderImg, "neutral", 20, 1, 0);


//var basic24 = new CardCon("Leeching Tar Pit",0, 4,"Heal 4", "hero", 0, "heal 4", "", false, "stormlight", placeholderImg, mud, "mud", 0);
//var basic25 = new CardCon("Eruption",0, 13,"Miss your next attack", "hero", 0, "exhausted", "", false, "stormlight", placeholderImg, lava, "lava", 0);
//var basic26 = new CardCon("Hurl Magma",0, 7,"Yikes", "hero", 0, "", "", false, "stormlight", placeholderImg, lava, "lava", 0);
//var basic27 = new CardCon("Lava Boomerang", 0, 3, "Come Back!", "hero", 0, "", "", false, "stormlight", placeholderImg, lava, "lava", 0);
//var basic28 = new CardCon("Molten Snake", 0, 4, "Very scary", "hero", 0, "", "", false, "character", placeholderImg, lava, "lava", 0);
//var basic29 = new CardCon("Scared 'Em", 0, 0, "Stun the enemy", "hero", 0, "stun", "", false, "stormlight", placeholderImg, storm, "storm", 0);
//var basic30 = new CardCon("Lightning Strike",0, 5,"Stun the enemy", "hero", 0, "stun", "", false, "stormlight", placeholderImg, storm, "storm", 0);
//var basic31 = new CardCon("Charged Shot", 0, 0, "Gains 1 power each time you choose this card", "hero", 0, "grow", "", false, "stormlight", placeholderImg, storm, "storm", 0);
//var basic32 = new CardCon("Mirage",0, 6,"Dodge", "hero", 0, "decoy", "", false, "stormlight", placeholderImg, desert, "desert", 0);

var basic51 = new CardCon("Wobble Smash", 0, 4, "Dodge and Shield 3", "hero", 0, "decoy", "shield 3", false, "stormlight", placeholderImg, earth, "earth", 0, 1);
var basic52 = new CardCon("Form of Wobble", 2, 0, "Wobble form", "hero", 0, "shapeshift1", "", false, "stormlight", placeholderImg, earth, "earth", 0, 1);
var basic53 = new CardCon("Budle Blast", 0, 3, "Confuse the Enemy", "hero", 0, "confuse", " ", false, "stormlight", placeholderImg, water, "water", 0, 1);
var basic54 = new CardCon("Form of Wobble", 2, 0, "Buddle form", "hero", 0, "shapeshift2", "", false, "stormlight", placeholderImg, water, "water", 0, 1);
var basic55 = new CardCon("Even Angrier", 0, 2, "Grow 2", "hero", 0, "grow 2 14", "", false, "stormlight", placeholderImg, wind, "wind", 0, 1);
var basic56 = new CardCon("Form of Nado", 2, 0, "Nado form", "hero", 0, "shapeshift3", "", false, "stormlight", placeholderImg, wind, "wind", 0, 1);
var basic57 = new CardCon("Molten Pinch", 0, 5, "Weaken 3", "hero", 0, "weaken 3", "", false, "stormlight", placeholderImg, fire, "fire", 0, 1); 
var basic58 = new CardCon("Form of Morp", 2, 0, "Morp form", "hero", 0, "shapeshift4", "", false, "stormlight", placeholderImg, fire, "fire", 0, 1);

var lava1 = new CardCon("Lava Ball", 0, 8, "Wow, duck!", "hero", 0, "", "", true, "stormlight", placeholderImg, lava, "lava", 0, 1);
var desert1 = new CardCon("Sand Ball", 0, 4, "Decoy", "hero", 0, "decoy", "", true, "stormlight", placeholderImg, desert, "desert", 0, 1);


var addCard1 = new CardCon("Roast", 0, 8, "Deal 8", "hero", 0, "remove", "", false, "stormlight", placeholderImg, fire, "fire", 0);
var addCard2 = new CardCon("Earth Shield", 0, 3, "Shield 7", "hero", 0, "shield 7", "remove", false, "stormlight", placeholderImg, earth, "earth", 0);
var addCard3 = new CardCon("Flurry", 0, 4, "Extra Attack", "hero", 0, "extra 1", "remove", false, "stormlight", placeholderImg, wind, "wind", 0);
var addCard4 = new CardCon("Drain", 0, 5, "Heal 3", "hero", 0, "heal 3", "remove", false, "stormlight", placeholderImg, water, "water", 0);
var addCard5 = new CardCon("Energy Blast", 0, 4, "Gain 2 Energy", "hero", 0, "energy 2", "remove", false, "stormlight", placeholderImg, placeholderImg, "neutral", 0, 0);

var currentEnemy = 4;
var playerHero = new HeroCon("Youber", 50, 0, 3, 0, youber, true);
var gameMode = "marathon";
var level = 0;
var stageComplete = 0;
var currentHeroPostion = 0;
var enemyNumber = 0;
var cardAbilityNum = 1;
var itemArray = [rustySword, battleSpear, shardblade, leatherPads, parshendiCarapace, shardplate];
var enemyArray = [];
var cardArray = [basic1, basic2, basic18];
var cardArray2 = [];
var recruitArray = [];
var collectionArray = [basic1, basic2, basic4, basic6, basic7, basic8];
var cardFrames = [];
var elementOrbs = [];
var multiplier = 1;
var allies = [];

function shuffle(a) {
    for (let i = a.length; i; i--) {
        let j = Math.floor(Math.random() * i);
        [a[i - 1], a[j]] = [a[j], a[i - 1]];
    }
}

class GameScreenHub extends React.Component {
	constructor(props) {
		super(props);
		Firebase.initializeApp(config);
		this.state = {
			heroSelect: null,
			gameScreen: false,
			characterSelectScreen: true,
			auxilaryScreen: false,
			collectionScreen: false,
			equipmentScreen: false,
			createScreen: false,
			miningGame: false,
			craftingScreen: false,
			levelSelectScreen: false,
			attack: 1,
			heroShield: 2,
			equipment: null,
			score: 0,
			heroHp: 10,
			stormCounter: 100,
			enemyArray: [enemyArray[0], enemyArray[1], enemyArray[2]],
			sphereCount: 0,
			influence: 0,
			itemArray: itemArray,
			developers: []
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
		this.goToCraftingScreen = this.goToCraftingScreen.bind(this);
		this.goToLevelScreen = this.goToLevelScreen.bind(this);
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
		this.changeHeroAttack = this.changeHeroAttack.bind(this);
		this.changeHeroShield = this.changeHeroShield.bind(this);
		this.writeUserData = this.writeUserData.bind(this);
		this.getUserData = this.getUserData.bind(this);
		this.setUpPlayerSave = this.setUpPlayerSave.bind(this);
	}
	writeUserData(){
		var user = document.getElementById("saveName").value;
		console.log(user);
		if(user === ""){
			console.log("enter a name");
		}else{
			var userSaveData = {name: user, collectionArray: collectionArray, levels: [earthStage,fireStage,waterStage,windStage]};
			var saveDataArray = this.state.developers;
			for(var i=0; i<saveDataArray.length; i++){
				if(saveDataArray[i].name === user){
					saveDataArray.splice(i, 1);
				}else{}
			}
			saveDataArray.push(userSaveData);
			this.setState({
				developers: saveDataArray

			}, () => {
				Firebase.database().ref('/').set(this.state.developers);
			 	console.log('DATA SAVED');
			});
		}
	}
	getUserData(){
	  let ref = Firebase.database().ref('/');
	  ref.on('value', snapshot => {
	    const state = snapshot.val();
	    this.setState({
	    	developers: state
	    }, () => {
	    	this.setUpPlayerSave();
	    });
	  });
	  console.log('DATA RETRIEVED');
	}
	setUpPlayerSave(){
		var user = document.getElementById("saveName").value;
		var playerDataArray = this.state.developers;
		var playerData;
		for(var i=0; i<playerDataArray.length; i++){
			if(playerDataArray[i].name === user){
				playerData = playerDataArray[i];
			}else{}
		}
		console.log(playerData);
		//document.getElementById("saveName").value = playerData
		collectionArray = playerData.collectionArray;
		earthStage = playerData.levels[0];
		fireStage = playerData.levels[1];
		waterStage = playerData.levels[2];
		windStage = playerData.levels[3];
	}
	changeHeroHp(newHp){
		this.state.heroSelect.hp = newHp;
		this.setState({
			heroHp: newHp
		});
		if(newHp === 0){
			this.goToCharacterScreen();
		}
	}
	changeHeroAttack(newAttack){
		this.setState({
			attack: newAttack
		});
	}
	changeHeroShield(newShield){
		this.setState({
			heroShield: newShield
		});
	}
	changeInfluence(newInfluence){
		this.setState({
			influence: newInfluence
		});
	}
	changeScore(pointValue){
		this.setState({
			score: this.state.score + pointValue
		});
	}
	createNewCharacter(data){
		playerHero = new HeroCon("Youber", 50, 0, 3, 0, youber, true);
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
		}else{}
	}
	goToGameScreen(level){
		level = level;
		if(player === undefined){
			console.log("Pick a hero");
		}else{
			this.setState({
				gameScreen: true,
				characterSelectScreen: false,
				auxilaryScreen: false,
				levelSelectScreen: false
			});
		}
	}
	goToLevelScreen(){
		this.setState({
			characterSelectScreen: false,
			auxilaryScreen: false,
			levelSelectScreen: true
		});
	}
	goToEquipmentScreen(){
		this.setState({
			equipmentScreen: true,
			characterSelectScreen: false
		});
	}
	goToCraftingScreen(){
		this.setState({
			craftingScreen: true,
			collectionScreen: false
		});
	}
	checkDeckContents(){
		if(cardArray.length < 1){
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
			craftingScreen: false,
			collectionScreen: true
		});
	}
	createEnemies() {
		enemyArray = [];
		for(var i=0; i < 3; i++){
			if(i >= numberOfEnemies){
				var newEnemy = new EnemyCon("", 0, 0, 0, 0, null, null, null);
				enemyArray.push(newEnemy);
			}else{
				var randEnemyNum = Math.floor(Math.random() * 501);
				if(level === 0){
					tutorialLevels();
				}else if(level === "earth"){
					levelEarthDistribution(randEnemyNum);
				}else if(level === "fire"){
					levelFireDistribution(randEnemyNum);
				}else if(level === "water"){
					levelWaterDistribution(randEnemyNum);
				}else if(level === "wind"){
					levelWindDistribution(randEnemyNum);
				}else if(level === "tower"){
					levelTowerDistribution(randEnemyNum);
				}
				var selected = createEnemy;
				var eName = selected.name;
				var eHp = selected.hp;
				var eAttack = selected.attack;
				var eSabotoge = selected.sabotoge;
				var ePointValue = selected.pointValue;
				var eImage = selected.image;
				var eSabCard = selected.sabCard;
				var eElement = selected.element;
				var newEnemy = new EnemyCon(eName, eHp, eAttack, eSabotoge, ePointValue, eImage, eSabCard, eElement);
				enemyArray.push(newEnemy);
			}
		}
		this.setState({
			enemyArray: enemyArray
		});
	}
	tutorialActions(){
		if(stageComplete === 1){
			cardArray = [basic1, basic2];
			document.getElementById("tutorialMessage").innerHTML=" ";
			document.getElementById("tutorialMessageBox").style.display="inline";
			document.getElementById("tutorialMessage").append("Well done, I think you could use a bigger rock");
		}else if(stageComplete === 2){
			cardArray.push(basic4);
			document.getElementById("tutorialMessage").innerHTML=" ";
			document.getElementById("tutorialMessageBox").style.display="inline";
			document.getElementById("tutorialMessage").append("Uh oh, the enemy is trying to sabotoge your spells. Here, try using a shielding spell to protect yourself.");
		}else if(stageComplete === 3){
			this.changeHeroHp(50);
			cardArray = [basic1, basic2, basic3, basic4, basic5, basic6];
			document.getElementById("tutorialMessage").innerHTML=" ";
			document.getElementById("tutorialMessageBox").style.display="inline";
			document.getElementById("tutorialMessage").append("Whoa, that was tough. If you have a shield up enemies can't sabotoge you, but if you run out the enemy gets to put one of their cards in your deck. Looks like you need some healing and I added some new cards to your deck. Uh oh... hear that? Something big is coming. ");
		}
	}
	switchEnemyArray() {
		if(document.getElementById("stunned") === null){
		}else{
			document.getElementById("stunned").classList.remove("stunned");
		}
		if(document.getElementById("confused") === null){
		}else{
			document.getElementById("confused").classList.remove("confused");
		}
		if(gameMode === "marathon"){
			if(level === 0){
				this.tutorialActions();
			}
			this.createEnemies();
		}else{
			var stageName = "stage" + stageComplete;
			var nextStage = eval(stageName);
			enemyArray = nextStage;
		}
	}
	chooseItemAction(childData) {
		if(childData.purchased === false){
			this.equipItem(childData);
		}else{
			this.purchaseItem(childData);
		}
	}
	purchaseItem(childData){
		if(this.state.sphereCount >= childData.cost){
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
			{this.state.characterSelectScreen ? <CharacterSelectScreen getUserData={this.getUserData} writeUserData={this.writeUserData} goToLevelScreen={this.goToLevelScreen} score={this.state.score} createNewCharacter={this.createNewCharacter} influence={this.state.influence} shield={this.state.heroShield} spheres={this.state.sphereCount} attack={this.state.attack} playerHero={playerHero} switchEnemyArray={this.switchEnemyArray} goToEquipmentScreen={this.goToEquipmentScreen} heroHp={this.state.heroHp} showCollection={this.showCollection} changeHero={this.changeHero} goToGameScreen={this.goToGameScreen} /> : null }
			{this.state.levelSelectScreen ? <LevelSelectScreen goToGameScreen={this.goToGameScreen} switchEnemyArray={this.switchEnemyArray} /> : null }
			{this.state.gameScreen ? <GameScreen characterScreen={this.goToCharacterScreen} changeHeroShield={this.changeHeroShield} changeHeroAttack={this.changeHeroAttack} changeInfluence={this.changeInfluence} influence={this.state.influence} int={this.state.heroSelect.intelligence} shield={this.state.heroShield} switchEnemyArray={this.switchEnemyArray} increaseStormCounter={this.increaseStormCounter} decreaseStormCounter={this.decreaseStormCounter} stormCounter={this.state.stormCounter} changeHeroHp={this.changeHeroHp} heroHp={this.state.heroHp} score={this.state.score} setSpheres={this.setSphereCount} changeScore={this.changeScore} aux={this.auxilaryScreen} heroSelect={this.state.heroSelect} attack={this.state.attack} equipment={this.state.equipment} enemyArray={this.state.enemyArray} /> : null }
			{this.state.auxilaryScreen ? <AuxilaryScreen changeInfluence={this.changeInfluence} influence={this.state.influence} setSphereCount={this.setSphereCount} score={this.state.score} resetStormCounter={this.resetStormCounter} goToCharacterScreen={this.goToCharacterScreen} /> : null }
			{this.state.collectionScreen ? <CollectionScreen goToCraftingScreen={this.goToCraftingScreen} checkDeckContents={this.checkDeckContents} /> : null }
			{this.state.equipmentScreen ? <EquipmentScreen changeScore={this.changeScore} score={this.state.score} itemArray={this.state.itemArray} heroShield={this.state.heroShield} spheres={this.state.sphereCount} setSphereCount={this.setSphereCount} playerHero={playerHero} chooseItemAction={this.chooseItemAction} attack={this.state.attack} goToCharacterScreen={this.goToCharacterScreen} /> : null }
			{this.state.craftingScreen ? <CraftingScreen showCollection={this.showCollection} /> : null}
			{this.state.miningGame ? <MiningGame /> : null }
			</div>
		)
	}
}

class LevelSelectScreen extends React.Component {
	componentDidMount(){
		cardArray2 = cardArray;
		cardArray = [];
		for(var i=0; i<cardArray2.length; i++){
			for(var j=0; j<cardArray2[i].deckNum; j++){
				cardArray.push(cardArray2[i]);
			}
		}
	}
	constructor(props) {
		super(props);
		this.selectLevel = this.selectLevel.bind(this);
	}
	selectLevel(choice){
		level = choice;
		this.props.switchEnemyArray();
		const x = document.getElementsByClassName("levelChoice");
		for (var i=0; i < x.length; i ++ ){
			x[i].classList.remove("selectedLevel");
		}
		document.getElementById(choice).classList.add("selectedLevel");
	}
	render() {
		return (
			<div className="row">
				<div className="col-xs-12">
					<div className="row" id="levelChoiceTitle">
						<div className="col-xs-offset-2 col-xs-8">Choose a level</div>
					</div>
					<div className="row levelChoiceRow">
						<div className="col-xs-offset-1 col-xs-4 levelChoice" id="earth" onClick={() => {this.selectLevel("earth")}}>Mountain Pass</div>
						<div className="col-xs-offset-2 col-xs-4 levelChoice" id="fire" onClick={() => {this.selectLevel("fire")}}>Fire Fields</div>
					</div>
					<div className="row levelChoiceRow">
						<div className="col-xs-offset-1 col-xs-4 levelChoice" id="water" onClick={() => {this.selectLevel("water")}}>Islands of Ruu</div>
						<div className="col-xs-offset-2 col-xs-4 levelChoice" id="wind" onClick={() => {this.selectLevel("wind")}}>Howling Caverns</div>
					</div>
					<div className="row levelChoiceRow">
						<div className="col-xs-offset-4 col-xs-4 levelChoice" id="tower" onClick={() => {this.selectLevel("tower")}}>The Tower</div>
					</div>
					<div className="row">
						<div className="col-xs-offset-3 col-xs-6" id="levelButton" onClick={this.props.goToGameScreen}>Play</div>
					</div>
				</div>
			</div>
		)
	}
}

class EquipmentScreen extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			packCards: []
		}
		this.listPackCards = this.listPackCards.bind(this);
	}
	listWeaponOptions() {
		const numberOfItems = this.props.itemArray;
		const listItems = numberOfItems.map((item, index) => {
			if(item.unlocked === true && item.type === "weapon") {
				return <HeroItem key={index} id={index} chooseItemAction={this.props.chooseItemAction} itemName={item.name} type={item.type} power={item.power} cost={item.cost} purchased={item.purchased} />
			}
		});
		return (
			<div>{listItems}</div>
		)
	}
	listArmorOptions() {
		const numberOfItems = this.props.itemArray;
		const listItems = numberOfItems.map((item, index) => {
			if(item.unlocked === true && item.type === "armor") {
				return <HeroItem key={index} id={index} chooseItemAction={this.props.chooseItemAction} itemName={item.name} type={item.type} power={item.power} cost={item.cost} purchased={item.purchased} />
			}
		});
		return (
			<div>{listItems}</div>
		)
	}
	listPackCards() {
		const numberOfPackCards = this.state.packCards;
		const listPackCards = numberOfPackCards.map((card, index) => {
			return <CollectionCard className={card.alignment} key={index} id={index} ability={card.ability1} icon={card.icon} faction={card.faction} name={card.name} type={card.type} cost={card.cost} power={card.power} text={card.text} />
		});
		return (
			<div>{listPackCards}</div>
		)
	}
	openPacks(type) {
		shuffle(collectionArray);
		var newCards = [];
		if(type === "basic"){
			if(this.props.spheres < 2){
				console.log("Not Enough");
			}else{
				this.props.setSphereCount(-2);
				for(var i=0; i<3; i++){
					newCards.push(collectionArray[i]);
					collectionArray[i].unlocked = true;
				}
				this.setState({
					packCards: newCards
				});
			}
		}else if(type === "super"){
			if(this.props.spheres < 5){
				console.log('Not Enough');
			}else{
				this.props.setSphereCount(-5);
				for(var i=0; i<5; i++){
					newCards.push(collectionArray[i]);
					collectionArray[i].unlocked = true;
				}
				this.setState({
					packCards: newCards
				});
			}
		}else if(type === "extreme"){
			if(this.props.spheres < 9){
				console.log("Not Enough");
			}else{
				this.props.setSphereCount(-9);
				for(var i=0; i<7; i++){
					newCards.push(collectionArray[i]);
					collectionArray[i].unlocked = true;
				}
				this.setState({
					packCards: newCards
				});
			}
		}
	}
	render() {
		return (
			<div className="row">
				<div className="col-xs-12">
					<div className="row chooseTitle">
						Shop
					</div>
					<div className="row">
						<div className="col-xs-3"><button className="coolButton" onClick={this.props.goToCharacterScreen}>Back</button></div>
						<div className="col-xs-offset-6 col-xs-3" id="shopPoints">
							Points: {this.props.spheres}
						</div>
					</div>
					<div className="row">
						<div className="col-xs-offset-2 col-xs-2 packOption" id="basicPack" onClick={() => {this.openPacks("basic")}}>Basic Pack</div>
						<div className="col-xs-offset-1 col-xs-2 packOption" id="superPack" onClick={() => {this.openPacks("super")}}>Super Pack</div>
						<div className="col-xs-offset-1 col-xs-2 packOption" id="extremePack" onClick={() => {this.openPacks("extreme")}}>Extreme Pack</div>
					</div>
					<div className="row" id="newCardDisplay">
						{this.listPackCards()}
					</div>
				</div>
			</div>
		)
	}
}

class CharacterSelectScreen extends React.Component {
	componentDidMount(){
		stageComplete = 0;
		this.props.switchEnemyArray();
		this.props.createNewCharacter();
	}
	render() {
		return (
			<div className="row">
				<div className="col-xs-12">
					<div className="row chooseTitle"></div>
					<div className="row">
						<div className="col-xs-9">
							<HeroSelectOption stats={this.props.playerHero} shield={this.props.shield} attack={this.props.attack} image={youber} id="playerHero" />
						</div>
						<div className="col-xs-3">
							<div className="row mainScore">Total Score: {this.props.score}</div>
							<div className="row mainScore">Spheres: {this.props.spheres}</div>
						</div>
					</div>
					<div className="row">
						<div className="col-xs-4">
							<button className="campButton" onClick={this.props.goToLevelScreen}>Adventure</button>
						</div>
						<div className="col-xs-4">
							<button className="campButton" onClick={this.props.showCollection}>Deck</button>
						</div>
						<div className="col-xs-4">
							<button className="campButton" onClick={this.props.goToEquipmentScreen}>Shop</button>
						</div>
					</div>
					<div className="row">
						<div className="col-xs-offset-4 col-xs-2">
							<input type="text" id="saveName"></input>
						</div>
						<div className="col-xs-2">
							<button className="saveButton" onClick={this.props.writeUserData}>Save</button>
						</div>
						<div className="col-xs-2">
							<button className="saveButton" onClick={this.props.getUserData}>Load</button>
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
								<div className="row statIcon" id="heartStatIcon"><img className="col-xs-6 heartIcon" src={heart} /> <span className="col-xs-4">{this.props.stats.hp}</span></div>
							</div>
						</div>
						<div className="col-xs-5" id="statCol">
							<div className="row statIcon"><img className="col-xs-8 statIcon" src={power} />  <span className="col-xs-4 mainStat">{this.props.attack}</span></div>
							<div className="row statIcon"><img className="col-xs-8 statIcon" src={int} />  <span className="col-xs-4 mainStat">{this.props.stats.intelligence}</span></div>
							<div className="row statIcon"><img className="col-xs-8 statIcon" src={shield} /> <span className="col-xs-4 mainStat">{this.props.shield}</span></div>
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
			enemyHpArray: [0,0,0],
			endOfTurnDmg: [1,1,0],
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
			exhausted: false,
			supportSlot1: null,
			supportSlot2: null,
			supportAction: true,
			nextSpellBonus: 0,
			extraAttacks: 0,
			enemiesAttacking: false,
			scheming: false,
			schemePower: 0

		}
		this.playerAttack = this.playerAttack.bind(this);
		this.handleKeyPress = this.handleKeyPress.bind(this);
		this.heroDraw = this.heroDraw.bind(this);
		this.chooseCard = this.chooseCard.bind(this);
		this.enemyAttackAction = this.enemyAttackAction.bind(this);
		this.triggerEnemyDeath = this.triggerEnemyDeath.bind(this);
		this.checkCardAbility = this.checkCardAbility.bind(this);
		this.checkSupportAbility = this.checkSupportAbility.bind(this);
		this.updateEnemySab = this.updateEnemySab.bind(this);
		this.toggleRecruitState = this.toggleRecruitState.bind(this);
		this.deadRecruit = this.deadRecruit.bind(this);
		this.recruitAction = this.recruitAction.bind(this);
		this.chooseResearch = this.chooseResearch.bind(this);
		this.enemyCleanUp = this.enemyCleanUp.bind(this);
		this.scheme = this.scheme.bind(this);
		this.supportAction = this.supportAction.bind(this);
		this.endOfTurnDmg = this.endOfTurnDmg.bind(this);
	}
	componentDidMount() {
		if(level === "fire"){
			document.getElementById("gameScreenBackground").style.backgroundImage = "url(" + fireBackground + ")";
		}else if(level === "earth"){
			document.getElementById("gameScreenBackground").style.backgroundImage = "url(" + grassBackground + ")";
		}else if(level === "water"){
			document.getElementById("gameScreenBackground").style.backgroundImage = "url(" + waterBackground + ")";
		}else if(level === "wind"){
			document.getElementById("gameScreenBackground").style.backgroundImage = "url(" + windBackground + ")";
		}
		var enemySabs = [];
		var nullHp1 = null;
		var nullHp2 = null;
		if(enemyArray.length === 1){
			enemySabs = [enemyArray[0].sabotoge, null, null];
		}else if(enemyArray.length === 2){
			enemySabs = [enemyArray[0].sabotoge, enemyArray[1].sabotoge, null];
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
			2: nullHp2,
			enemyHpArray: [enemyArray[0].hp, nullHp1, nullHp2]
		});
	}
	handleTutorialClick() {
		document.getElementById("tutorialMessageBox").style.display="none";
	}
	updateEnemySab() {
		var enemySabs = [];
		if(enemyArray.length === 1){
			enemySabs = [enemyArray[0].sabotoge, null, null];
		}else if(enemyArray.length === 2){
			enemySabs = [enemyArray[0].sabotoge, enemyArray[1].sabotoge, null];
		}else{
			enemySabs = [enemyArray[0].sabotoge, enemyArray[1].sabotoge, enemyArray[2].sabotoge];
		}
		this.setState({
			enemySab: enemySabs
		});
	}
	chooseCard(card) {
		multiplier = 1;
		if(this.state.recruit === true && card.type === "support"){
			console.log("going to recruit");
			this.recruitCharacter(card);
		}else if(this.state.research === true){
			this.chooseResearch(card);
		}else if(this.state.scheming === true){
			const x = document.getElementsByClassName("hero");
				for (var i=0; i < x.length; i ++ ){
					x[i].classList.remove("influenceGlow");
				}
			this.scheme(card);
		}else{
			this.setState({
				cardDisplay: false,
				recruit: false,
				supportAction: true
			}, () => {
				this.checkSupportAbility(card);
			    const x = document.getElementsByClassName("characterImage2");
				for (var i=0; i < x.length; i ++ ){
					x[i].classList.remove("targetedEnemy");
				}
			});
			document.getElementById("influenceOrb").classList.remove("stormlightOn");
		}
	}
	scheme(card) {
		console.log(this.state.supportSlot1);
		if(this.state.supportSlot1.ability1.indexOf(card.faction) >= 0){
			var schemeCards = this.state.cards;
			schemeCards.splice(schemeCards.indexOf(card), 1);
			var schemePower = this.state.schemePower + 1;
			this.setState({
				cards: schemeCards,
				scheming: false,
				schemePower: schemePower
			}, () => {
				if(this.state.schemePower === parseInt(this.state.supportSlot1.ability1.split(/[ ,]+/)[2])){
					document.getElementById("supportSlot1").classList.add("fullScheme");
				}else{}
			});
		}else{
			console.log("wrongtype");
			this.setState({
				scheming: false
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
				var x = document.getElementsByClassName("hero");
				for(var i=0; i < x.length; i++){
					x[i].classList.remove("influenceGlow");
				}
			}else if(this.state.recruit === false){
				this.setState({
					recruit: true
				});
				document.getElementById("influenceOrb").classList.add("stormlightOn");
				var recruitCards = this.state.cards;
				for(var i=0; i<recruitCards.length; i++){
					console.log(recruitCards[i]);
					if(recruitCards[i].type === "support"){
						if(recruitCards[i].cost <= this.props.influence){
							document.getElementById(i+"card").classList.add("influenceGlow");
						}else{}
					}else{}
				}
			}
		}else{}
	}
	recruitCharacter(card){
		var x = document.getElementsByClassName("hero");
		for(var i=0; i < x.length; i++){
			x[i].classList.remove("influenceGlow");
		}
		console.log(this.state.cards);
		if(card.type === "support"){
			if(this.state.supportSlot1 === null){
				this.setState({
					supportSlot1: card
				});
			}else if(this.state.supportSlot2 === null){
				this.setState({
					supportSlot2: card
				});
			}else{
				console.log("Already have 2 supports");
			}
		}else{}
		var removeRecruit = this.state.cards;
		var a = cardArray.findIndex(x => x.name === card.name);
		cardArray.splice(a, 1);
		var b = removeRecruit.findIndex(x => x.name === card.name);
		removeRecruit.splice(b, 1);
		document.getElementById("influenceOrb").classList.remove("stormlightOn");
		this.setState({
			recruit: false,
			cards: removeRecruit
		});

	}
	checkSupportAbility(card){
		var sup1 = this.state.supportSlot1;
		var sup2 = this.state.supportSlot2;
		if(sup1 === null){
			this.checkCardAbility(card);
		}else{
			if(sup1.ability1.indexOf("boost") >= 0){
				var boostType = sup1.ability1.split(/[ ,]+/)[1];
				var boostNum = parseInt(sup1.ability1.split(/[ ,]+/)[2]);
				this.checkCardAbility(card, boostType, boostNum);
			}else{
				this.checkCardAbility(card, boostType, boostNum);
			}
		}
	}
	checkCardAbility(card, boost, num){
		var supportMod = 0;
		if(card.faction === boost){
			supportMod = num;
		}
		var cardPower = card.power;
		var newAttack = (this.props.attack + cardPower + this.state.nextSpellBonus + supportMod) * multiplier;
		if(cardAbilityNum === 1){
			this.setState({
				nextSpellBonus: 0
			});
		}else{}
		var checkAbility;
		if(cardAbilityNum === 1){
			checkAbility = card.ability1;
		}else if(cardAbilityNum === 2){
			checkAbility = card.ability2;
		}
		if(card.ability1.indexOf("scheme") >=0){
			this.playerAttack(newAttack);
		}else{
			if(checkAbility.indexOf("shield") >= 0){
			 	var thenum = parseInt(checkAbility.match(/\d+/)[0]);
			 	var boostedShield = this.state.playerShield + thenum
			 	this.setState({
			 		playerShield: boostedShield
			 	});
			}else if(checkAbility.indexOf("grow") >=0){
				var splitAbility = checkAbility.split(" ");
				var growNum = parseInt(splitAbility[1]);
				var growNum2 = parseInt(splitAbility[2]);
				if(card.power < growNum2){
					card.power = card.power + growNum;
				}else{}
			}else if(checkAbility.indexOf("purge") >=0){
				shuffle(cardArray);
				for(var i=0; i < cardArray.length; i++){
					if(cardArray[i].alignment === "enemy"){
						cardArray.splice(i, 1);
						break;
					}else{
						console.log("no enemy cards");
					}
				}
			}else if(checkAbility.indexOf("multiply") >=0) {
				multiplier = 2;
			}else if(checkAbility.indexOf("stun") >=0) {
				document.getElementById(currentEnemy).classList.add("stunned");
			}else if(checkAbility.indexOf("speed") >=0) {
				var speedNum = parseInt(checkAbility.match(/\d+/)[0]);
				this.props.increaseStormCounter(speedNum);
			}else if(checkAbility.indexOf("research") >=0) {
				var researchNum = parseInt(checkAbility.match(/\d+/)[0]);
				if(this.state.cardAbility === true){
					this.setState({
						research: true,
						cardDisplay: true,
						researchNum: researchNum
					});
					cardAbilityNum = 1;
					return;
				}else{}
			}else if(checkAbility.indexOf("decoy") >=0) {
				this.setState({
					decoy: true
				});
			}else if(checkAbility.indexOf("recharge") >=0) {
				var stormlightNum = parseInt(checkAbility.match(/\d+/)[0]);
				this.setState({
					stormlight: this.state.stormlight + stormlightNum
				});
			}else if(checkAbility.indexOf("heal") >=0) {
				var healNum = parseInt(checkAbility.match(/\d+/)[0]);
				var newHp = this.props.heroHp + healNum;
				this.props.changeHeroHp(newHp);
			}else if(checkAbility.indexOf("exhausted") >=0) {
				this.setState({
					exhausted: true
				});
			}else if(checkAbility.indexOf("energy") >= 0) {
				var energyNum = parseInt(checkAbility.match(/\d+/)[0]);
				var newEnergy = this.props.influence + energyNum;
				this.props.changeInfluence(newEnergy);
			}else if(checkAbility.indexOf("int") >= 0) {
				var intNum = parseInt(checkAbility.match(/\d+/)[0]);
				var currentInt = this.state.playerInt;
				this.setState({
					playerInt: currentInt + intNum
				});
			}else if(checkAbility.indexOf("str") >= 0) {
				var strNum = parseInt(checkAbility.match(/\d+/)[0]);
				var newStr = this.props.attack + strNum
				this.props.changeHeroAttack(newStr);
			}else if(checkAbility.indexOf("def") >= 0) {
				var defNum = parseInt(checkAbility.match(/\d+/)[0]);
				var newDef = this.props.shield + defNum
				this.props.changeHeroShield(newDef);
				this.setState({
					playerShield: newDef
				});
			}else if(checkAbility.indexOf("next") >=0) {
				var nextNum = parseInt(checkAbility.match(/\d+/)[0]);
				console.log(nextNum);
				this.setState({
					nextSpellBonus: nextNum
				});
			}else if(checkAbility.indexOf("addCard") >=0) {
				var splitAbility = checkAbility.split(" ");
				var addCardNum = parseInt(splitAbility[1]);
				var addCardNum2 = parseInt(splitAbility[2]);
				var newCards = eval(`addCard${addCardNum}`);
				for(var i=0; i< addCardNum2; i++){
					cardArray.push(newCards);
				}
			}else if(checkAbility.indexOf("remove") >=0) {
				var removeIndex = cardArray.findIndex(x => x.name ===card.name);
				cardArray.splice(removeIndex, 1);
			}else if(checkAbility.indexOf("shapeshift") >=0) {
				var shapeshiftNum = parseInt(checkAbility.match(/\d+/)[0]);
				playerHero = eval(`shapeshift${shapeshiftNum}`);
				player = playerHero;
				this.setState({
					playerInt: playerHero.intelligence
				});
				this.props.changeHeroAttack(playerHero.attack);
				this.props.changeHeroShield(playerHero.shield);
			}else if(checkAbility.indexOf("extra") >=0) {
				var extraNum = parseInt(checkAbility.match(/\d+/)[0]);
				this.setState({
					extraAttacks: extraNum
				});
			}else if(checkAbility.indexOf("deplete") >=0) {
				enemyArray[enemyNumber].sabotoge --;
				var currentSabArray = [];
				for(i=0; i < enemyArray.length; i++){
					currentSabArray.push(enemyArray[i].sabotoge);
				}
				this.setState({
					enemySab: currentSabArray
				});
			}else if(checkAbility.indexOf("weaken") >=0){
				var weakenNum = parseInt(checkAbility.match(/\d+/)[0]);
				enemyArray[currentEnemy].attack = enemyArray[currentEnemy].attack - weakenNum;
			}else if(checkAbility.indexOf("reclaim") >=0){
				var reclaimNum = parseInt(checkAbility.match(/\d+/)[0]);
				for(var i=0; i<cardArray.length; i++){
					if(cardArray[i].faction === "sabotogeCard"){
						cardArray[i].power = cardArray[i].power + reclaimNum
					}else{}
				}
			}else if(checkAbility.indexOf("confuse") >=0){
				document.getElementById(currentEnemy).classList.add("confused");
			}else if(checkAbility.indexOf("all") >=0){
				this.playerAttackAll(newAttack);
				return;
			}else{}
			if(cardAbilityNum === 2){
				this.playerAttack(newAttack);
				cardAbilityNum = 1;
			}else{
				cardAbilityNum ++;
				this.checkCardAbility(card, boost, num);
			}
		}
	}
	heroDraw() {
		if( currentEnemy === 4 ){
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
				cards: selectedCards,
				enemiesAttacking: false
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
			if(enemyHealth === heroAttack){
				console.log("exact damage");
				this.props.setSpheres(1);
			}else{}
			console.log("badGuy" + (currentEnemy));
			document.getElementById("badGuy" + (currentEnemy)).append("-" + heroAttack);
			document.getElementById("badGuy" + (currentEnemy)).style.display="inline";
			setTimeout(() => { 
				console.log(document.getElementById("badGuy" + (currentEnemy)));
				document.getElementById("badGuy" + (currentEnemy)).innerHTML="";
				document.getElementById("badGuy" + (currentEnemy)).style.display="none";
				if(enemyHp <= 0){
					enemyArray[currentEnemy].hp = 0;
					this.setState({
						enemyHpArray: [enemyArray[0].hp, enemyArray[1].hp, enemyArray[2].hp]
					});
					this.triggerEnemyDeath();
				}else{
					enemyArray[currentEnemy].hp = enemyHp;
					this.setState({
						enemyHpArray: [enemyArray[0].hp, enemyArray[1].hp, enemyArray[2].hp]
					}, () => {
						if(this.state.extraAttacks === 0){
							this.enemyAttackAction(0);
						}else{
							var attacksLeft = this.state.extraAttacks - 1;
							this.setState({
								extraAttacks: attacksLeft
							});
						}
					});
				}
			}, 500);
		}
	}
	playerAttackAll(newAttack) {
		var heroAttack;
		if(newAttack < 0){
			heroAttack = 0;
		}else{
			heroAttack = newAttack;
		}
		for(var i = 0; i<enemyArray.length; i++){
			if(enemyArray[i].hp > 0){
				document.getElementById("badGuy" + (i)).append("-" + heroAttack);
				document.getElementById("badGuy" + (i)).style.display="inline";
			}else{}
			if(enemyArray[i].hp === heroAttack){
				this.props.setSpheres(1);
			}
		}
		setTimeout(() => { 
			for(var i = 0; i<enemyArray.length; i++){
				if(enemyArray[i].hp > 0){
					document.getElementById("badGuy" + (i)).innerHTML="";
					document.getElementById("badGuy" + (i)).style.display="none";
					if(enemyArray[i].hp - heroAttack <= 0){
						enemyArray[i].hp = 0;
					}else{
						enemyArray[i].hp = enemyArray[i].hp - heroAttack;
					}
				}else{}
			}
			this.setState({
				enemyHpArray: [enemyArray[0].hp, enemyArray[1].hp, enemyArray[2].hp]
			}, () => {
				this.triggerEnemyDeath();
				var enemiesAlive = 0;
				for(var i=0; i<enemyArray.length; i++){
					if(enemyArray[i].hp > 0){
						enemiesAlive ++;
					}else{}
				}
				if(enemiesAlive > 0){
					if(this.state.extraAttacks === 0){
						this.enemyAttackAction(0);
					}else{
						var attacksLeft = this.state.extraAttacks - 1;
						this.setState({
							extraAttacks: attacksLeft
						});
					}
				}else{}
			});
		}, 500);
	}
	recruitAction(recruit) {
		if(recruit.counter > 0){
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
	supportAction(support, supSlot){
		var schemeNum = parseInt(support.ability1.split(/[ ,]+/)[2]);
		var usedSupport = support;
		if(this.state.supportAction === true){
			if(support.ability1.indexOf("scheme") >= 0){
				if(this.state.schemePower === schemeNum){
					if(Number.isInteger(parseInt(support.ability1.split(/[ ,]+/)[3]))){
						var schemeAttack = parseInt(support.ability1.split(/[ ,]+/)[3]);
						this.playerAttack(schemeAttack);
						usedSupport.ability2 --;
						this.setState({
							cardDisplay: false,
							schemePower: 0
						});
					}else if(support.ability1.split(/[ ,]+/)[3] === "purge"){
						shuffle(cardArray);
						for(var i=0; i < cardArray.length; i++){
							if(cardArray[i].alignment === "enemy"){
								cardArray.splice(i, 1);
								usedSupport.ability2 --;
								break;
							}else{
								console.log("no enemy cards");
							}
						}
					}else if(support.ability2 === "confuse"){
						document.getElementById(currentEnemy).classList.add("confused");
					}else if(support.ability2 === "extra"){
						var extraNum = parseInt(support.ability2.match(/\d+/)[0]);
						this.setState({
							extraAttacks: extraNum
						});
					}else if(support.ability2 === "stun"){
						document.getElementById(currentEnemy).classList.add("stunned");
					}
				}else{
					this.setState({
						scheming: true,
						supportAction: false
					});
					var x = document.getElementsByClassName("hero");
					for(var i=0; i < x.length; i++){
						x[i].classList.add("influenceGlow");
					}
				}
			}
			if(usedSupport.ability2 === 0){
				cardArray.push(support);
				var newArray = this.state.cards;
				newArray.push(support);
				this.setState({
					[supSlot]: null,
					cards: newArray
				});
			}else{
				this.setState({
					[supSlot]: usedSupport
				});
			}
		}else{
			console.log("You've already used this once");
		}
	}
	triggerPlayerDeath() {
		this.props.characterScreen();
		var enemyCardNum = 0;
		for(var i=0; i < cardArray.length; i++){
			if(cardArray[i].alignment === "enemy"){
				enemyCardNum ++;
			}
		}
		cardArray.splice(0, enemyCardNum);
	}
	triggerEnemyDeath() {
		for(var i=0; i<enemyArray.length; i++){
			if(enemyArray[i].hp === 0){
			var pointValue = enemyArray[i].pointValue;
			this.props.changeScore(pointValue);
			}else{}
		}
		setTimeout(() => {
			this.enemyCleanUp();
		}, 500);
	}
	enemyCleanUp() {
		if(enemyArray[0].hp === 0 && enemyArray[1].hp === 0 && enemyArray[2].hp === 0){
				console.log("They're all dead. You win!");
				//this.props.aux();
				//stageComplete ++;
				if(stageComplete === numberOfStages - 1){
					this.props.aux();
				}else{
					this.setState({
						playerShield: this.props.shield
					});
					stageComplete ++;
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
				if(this.state.enemiesAttacking === false){
					this.enemyAttackAction(0);
				}else{}
			});
		}
	}
	enemyAttackAction(enemyNumber) {
		this.setState({
			enemiesAttacking: true
		});
		if(enemyArray[enemyNumber].hp === 0){
			if(enemyNumber < (enemyArray.length - 1)){
				enemyNumber ++;
				this.enemyAttackAction(enemyNumber);
			}else if(enemyNumber === (enemyArray.length - 1)){
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
						this.endOfTurnDmg();
					});
				}
			}else{}
		}else{
			const x = document.getElementsByClassName("enemyCharacterBox");
			for (var i=0; i < x.length; i ++ ){
				x[i].style.borderColor="black";
			}
			if(document.getElementById(enemyNumber).classList.contains("stunned")){
				console.log("too stunned to attack");
			}else{
				document.getElementById(enemyNumber + "image").classList.add("attackingEnemy");
				if(document.getElementById(enemyNumber).classList.contains("confused") && enemyArray.length > 1){
					var enemyNumArray = [];
					for(var i=0; i<enemyArray.length; i++){
						if(i === currentEnemy){
							console.log("can't attack yourself");
						}else{
							enemyNumArray.push(i);
						}

					}
					var selectedEnemy = enemyNumArray[Math.floor(Math.random()*enemyNumArray.length)];
					var enemyHp = enemyArray[selectedEnemy].hp - enemyArray[currentEnemy].attack;
					document.getElementsByClassName("heroDamageIndicator")[(selectedEnemy)].append("-" + enemyArray[currentEnemy].attack);
					document.getElementsByClassName("heroDamageIndicator")[(selectedEnemy)].style.display="inline";
					setTimeout(() => { 
						document.getElementsByClassName("heroDamageIndicator")[(selectedEnemy)].innerHTML="";
						document.getElementsByClassName("heroDamageIndicator")[(selectedEnemy)].style.display="none";
						if(enemyHp <= 0){
							enemyArray[selectedEnemy].hp = 0;
							this.setState({
								enemyHpArray: [enemyArray[0].hp, enemyArray[1].hp, enemyArray[2].hp]
							});
							this.triggerEnemyDeath();
						}else{
							enemyArray[selectedEnemy].hp = enemyHp;
							this.setState({
								enemyHpArray: [enemyArray[0].hp, enemyArray[1].hp, enemyArray[2].hp]
							});
						}
					}, 500);
				}else{
					if(this.state.playerShield > 0){
						let playerShield = this.state.playerShield;
						let enemyAttack = enemyArray[enemyNumber].attack;
						const shieldDamage = playerShield - enemyAttack;
						document.getElementsByClassName("shieldIcon")[0].style.background="blue";
						document.getElementsByClassName("heroDamageIndicator2")[0].append("-" + enemyAttack);
						document.getElementsByClassName("heroDamageIndicator2")[0].style.display="inline";
						setTimeout(() => {
							document.getElementsByClassName("shieldIcon")[0].style.background="none";
							document.getElementsByClassName("heroDamageIndicator2")[0].innerHTML="";
							document.getElementsByClassName("heroDamageIndicator")[0].style.display="none";
						}, 500);
						if(shieldDamage < 0){
							var extraDamage = this.props.heroHp + shieldDamage;
							if(extraDamage <= 0){
								this.props.changeHeroHp(0);
								this.triggerPlayerDeath();
							}else{
								this.props.changeHeroHp(extraDamage);
							}
							this.setState({
								playerShield: 0
							});
							if(enemyArray[enemyNumber].sabotoge > 0){
								var enemyCard = new CardCon(enemyArray[enemyNumber].name, 0, -(enemyArray[enemyNumber].attack), "Bad Card", "enemy", 0, "", "", false, "stormlight", placeholderImg, placeholderImg, "sabotogeCard");
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
							var enemyCard2 = new CardCon(enemyArray[enemyNumber].name, 0, -(enemyArray[enemyNumber].attack), "Bad Card", "enemy", 0, "", "", false, "stormlight", placeholderImg, placeholderImg, "sabotogeCard");
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
						document.getElementsByClassName("heroDamageIndicator2")[0].append("-" + enemyAttack);
						document.getElementsByClassName("heroDamageIndicator2")[0].style.display="inline";
						setTimeout(() => { 
							document.getElementsByClassName("heroDamageIndicator2")[0].innerHTML="";
							document.getElementsByClassName("heroDamageIndicator2")[0].style.display="none";
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
				if(this.props.heroHp === 0){
					this.triggerPlayerDeath();
				}else{
					currentEnemy = 4;
					document.getElementById(enemyNumber + "image").classList.remove("attackingEnemy");
					document.getElementById(enemyNumber).classList.remove("stunned");
					document.getElementById(enemyNumber).classList.remove("confused");
					for (var i=0; i < x.length; i ++ ){
					x[i].style.borderColor="black";
					}
					console.log(enemyNumber);
					if(enemyNumber < (enemyArray.length - 1)){
						enemyNumber ++;
						this.enemyAttackAction(enemyNumber);
					}else if(enemyNumber === (enemyArray.length - 1)){
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
								this.endOfTurnDmg();
							});
						}
					}else{}
				}
			}, 1000);
		}
	}
	endOfTurnDmg(){
		for(var i=0; i < enemyArray.length; i++){
			if(enemyArray[i].hp > 0){
				enemyArray[i].hp = enemyArray[i].hp - this.state.endOfTurnDmg[i];
				document.getElementById("badGuy" + (i)).append("-" + this.state.endOfTurnDmg[i]);
				document.getElementById("badGuy" + (i)).style.display="inline";
			}else{}
		};
		setTimeout(() => {
			for(var i=0; i < enemyArray.length; i++){
				if(enemyArray[i].hp > 0){
					document.getElementById("badGuy" + (i)).innerHTML="";
					document.getElementById("badGuy" + (i)).style.display="none";
				}else{}
			}
			this.triggerEnemyDeath();
		}, 500);
	}
	deadRecruit(name){
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
			<div className="col-xs-12" id="gameScreenBackground">
				<div className="row infoRow">
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
						<div className="row" id="tutorialMessageBox">
							<div className="col-xs-12" id="tutorialMessageCol">
								<div className="row" id="tutorialMessage"></div>
								<div className="row" id="tutorialButtonRow">
									<div className="coolButton col-xs-4" id="tutorialMessageButton" onClick={this.handleTutorialClick} >Ok</div>
								</div>
							</div>
						</div>
						<div className="row" id="playArea">
							<div className="col-xs-12">
								{this.state.cardDisplay ? <CardDisplayBox chooseCard={this.chooseCard} cards={this.state.cards} /> : null }
								<div className="row">
									<div className="col-xs-offset-4 col-xs-4">
										<AllyDisplay />
									</div>
								</div>
							</div>
						</div>
						<div className="row" id="characterSide tabIndex" onKeyDown={this.handleKeyPress}>
							<div className="col-xs-12">
								<Character supportAction={this.supportAction} schemePower={this.state.schemePower} supportSlot1={this.state.supportSlot1} supportSlot2={this.state.supportSlot2} toggleRecruitState={this.toggleRecruitState} influence={this.props.influence} stormlight={this.state.stormlight} recruitAction={this.recruitAction} attack={this.props.attack} int={this.state.playerInt} playerShield={this.state.playerShield} heroHp={this.props.heroHp} equipItem={this.equipItem} heroDraw={this.heroDraw} heroPosition={this.state.heroPosition} cards={this.state.cards} chooseCard={this.chooseCard} equipment={this.props.equipment} cardDisplay={this.state.cardDisplay} />
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

class AllyDisplay extends React.Component {
	listAllies () {
		const numberOfAllies = allies;
		const listAllies = numberOfAllies.map((ally, index) =>
			<Ally key={index} image={ally.image} />
		);
		return (
			<div className="row">{listAllies}</div>
		)
	}
	render() {
		return (
			<div className="col-xs-12"> 
				<div className="row allyRow">
					{this.listAllies()}
				</div>
			</div>
		)
	}
}

class Ally extends React.Component {
	render() {
		return (
			<div className="col-xs-3">
				<img className="allyImage" src={this.props.image} />
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
			<Card className={card.alignment} faction={card.faction} icon={card.icon} key={index} id={index} name={card.name} ability={card.ability1} cost={card.cost} power={card.power} text={card.text} card={card} chooseCard={this.props.chooseCard} />
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
			<div className={`col-xs-12 ${this.props.className} ${this.props.faction}`} id={`${this.props.id}card`} onClick={() => this.props.chooseCard(this.props.card)}>
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
		            	<div className="col-xs-4"></div>
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
		const listItems = numberOfBadGuys.map((badGuy, index) => {
			if(badGuy.hp > 0){
				return <Enemy key={index} id={index} enemyId={"badGuy" + index} name={badGuy.name} eHp={badGuy.hp} updateEnemySab={this.props.updateEnemySab} sab={this.props.sab[index]} sabCard={badGuy.sabCard} image={badGuy.image} />
			}else{
				return <Placeholder key={index} id={index} />
			}
		});
		return (
			<div className="row">{listItems}</div>
		)
	}
	render() {
		return (
			<div className="col-xs-12">
				{this.listBadGuys()}
			</div>
		)
	}
}

class Placeholder extends React.Component {
	render(){
		return (
			<div className="col-xs-4 placeholderDiv">
			</div>
		)
	}
}

class Character extends React.Component {
	render() {
		return (
			<div className="row">
				<div className="col-xs-12">
					<div className="row" id="heroSlot1">
						<div className="col-xs-4 supportCol">
							{ this.props.supportSlot1 ? <SupportSlot supSlot={"supportSlot1"} schemePower={this.props.schemePower} supportAction={this.props.supportAction} card={this.props.supportSlot1}  /> : null }
						</div>
						<HeroSideSlot int={this.props.int} attack={this.props.attack} playerShield={this.props.playerShield} heroHp={this.props.heroHp} name={player.name} image={player.image} hp={player.hp} equipItem={this.props.equipItem} heroDraw={this.props.heroDraw} equipment={this.props.equipment} stormlight={this.props.stormlight} toggleRecruitState={this.props.toggleRecruitState} influence={this.props.influence} />
						<div className="col-xs-4 supportCol">
							{ this.props.supportSlot2 ? <SupportSlot supSlot={"supportSlot2"} schemePower={this.props.schemePower} supportAction={this.props.supportAction} card={this.props.supportSlot2} /> : null }
						</div>
					</div>
				</div>
			</div>
		);
	}
};

class SupportSlot extends React.Component {
	render() {
		var actionButton = false;
		if(this.props.card.ability1.indexOf("scheme") >= 0){
			actionButton = true;
		}else{}
		return (
			<div className="row supportSlot">	
				<div className="col-xs-12 supportCard" id={this.props.supSlot}>
					<div className="row supportName">
						{this.props.card.name}
					</div>
					<div className="row supportText">
						{this.props.card.text}
					</div>
					{ actionButton === true &&
						<div className="row">
							<div className="col-xs-12">
								<div className="row schemeCounter">
									{this.props.schemePower}/{parseInt(this.props.card.ability1.split(/[ ,]+/)[2])}
								</div>
								<div className="row">
									<div className="col-xs-offset-4 col-xs-4 coolButton supportActionButton" onClick={() => this.props.supportAction(this.props.card, this.props.supSlot)}>Action</div>
								</div>
							</div>
						</div>
					}
				</div>
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
				<div className="recruitSlot row">
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
			<div className=" heroSideSlot col-xs-4">
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
						<HPSpan hp={this.props.heroHp} hero={"heroDamageIndicator2"} enemyId={"hero"} />
						<div className="row">
							<div className="col-xs-6">
								{/*<StormlightCounter stormlight={this.props.stormlight} /> */}
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
				<span className={`col-xs-2 ${this.props.hero}`} id={this.props.enemyId}></span>
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
	    console.log("enter");
	}
	handleMouseLeave(){
	    this.setState({
	      hover: false
	    });
	}
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
						<HPSpan hp={this.props.eHp} enemyId={this.props.enemyId} hero={"heroDamageIndicator"} />
						<div className="row sabRow">
							<div className="col-xs-2">Sab</div>
							<div className="col-xs-9"><Sabotoge mouseEnter={this.handleMouseEnter} mouseLeave={this.handleMouseLeave} sab={this.props.sab} /></div>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-xs-offset-2 col-xs-8">
						<CharacterImage image={this.props.image} id={this.props.id} />
						{this.state.hover ? <EnemySabCard sabCard={this.props.sabCard}/> : null }
					</div>
				</div>
			</div>
		);
	}
};

class EnemySabCard extends React.Component {
	render() {
		return (
			<div className="col-xs-12 enemy enemyHoverCard">
		          <div className="row">
		            <div className="col-xs-offset-4 col-xs-4 cardPower">{this.props.sabCard.power}</div>
		          </div>
		        <div className="row cardName">{this.props.sabCard.name}</div>
		        <div className="row cardText">{this.props.sabCard.text}</div>
		        <div className="row bottomRow">
	        		<div className="col-xs-offset-8 col-xs-4"><img className="iconImg" src={this.props.sabCard.icon} alt="icon" /></div>
		        </div>
			</div>
		)
	}
}

class Sabotoge extends React.Component {
	render() {
		var orbs = [];
		for (var i = 0; i < this.props.sab; i++) {
	  		orbs.push(<div className='orb' key={i} onMouseEnter={this.props.mouseEnter} onMouseLeave={this.props.mouseLeave}></div>);
		}
		return orbs;
	}
}

class AuxilaryScreen extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			rewardCards: [basic10],
			rewardGems: []

		}
	this.levelRewards = this.levelRewards.bind(this);
	this.listCardRewards = this.listCardRewards.bind(this);
	this.listGemRewards = this.listGemRewards.bind(this);
	}
	componentDidMount(){
		cardArray = cardArray2;
		this.levelRewards();
		if(level === "earth"){
			earthStage ++;
		}else if(level === "fire"){
			fireStage ++;
		}else if(level === "water"){
			waterStage ++;
		}else if(level === "wind"){
			windStage ++;
		}
		level ++;
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
	}
	levelRewards(){
		var levelCard = [];
		var basicCards = [];
		for(var i=1; i<21; i++){
			var basicCard = eval('basic' + i);
			basicCards.push(basicCard);
		}
		shuffle(basicCards);
		var randNum = Math.floor(Math.random() * 101);
		for(var i=0; i<basicCards.length; i++){
			if(randNum < 70){
				if(basicCards[i].rarity === 1){
					levelCard.push(basicCards[i])
					break;
				}else{}
			}else if(randNum > 70 && randNum < 95){
				if(basicCards[i].rarity === 2){
					levelCard.push(basicCards[i])
					break;
				}else{}
			}else{
				if(basicCards[i].rarity === 3){
					levelCard.push(basicCards[i])
					break;
				}else{}
			}
		}
		var levelGems;
		var levelPoints;
		if(level === "earth"){
			levelGems = [earth, earth, earth];
			levelPoints = 1;
		}else if(level === "fire"){
			levelGems = [fire, fire, fire];
			levelPoints = 1;
		}else if(level === "water"){
			levelGems = [water, water, water];
			levelPoints = 1;
		}else if(level === "wind"){
			levelGems = [wind, wind, wind];
			levelPoints = 1;
		}else{}
		for(var i=0; i<levelGems.length; i++){
			elementOrbs.push(levelGems[i]);
		}
		this.props.setSphereCount(levelPoints);
		this.setState({
			rewardCards: levelCard,
			rewardGems: levelGems
		});
		if(levelCard.length > 0){
			var alreadyOwned = false;
			for(var i=0; i<collectionArray.length; i++){
				if(levelCard[0].name === collectionArray[i].name){
					alreadyOwned = true;
				}else{}
			}
			if(alreadyOwned === false){
				collectionArray.push(levelCard[0]);
				levelCard.unlocked = true;
			}else{
				var a = collectionArray.findIndex(x => x.name === levelCard[0].name);
				collectionArray[a].ownedNum ++;
			}
		}else{}
	}
	listCardRewards(){
		var cards = this.state.rewardCards;
		const listCardRewards = cards.map((card, index) =>
			<CollectionCard className={card.alignment} key={index} id={index} ability={card.ability1} icon={card.icon} faction={card.faction} name={card.name} type={card.type} cost={card.cost} power={card.power} text={card.text} handleDrop={(name) => this.addToDeck(card.name)} />
		);
		return (
			<div>{listCardRewards}</div>
		)
	}
	listGemRewards(){
		var gemRewards = this.state.rewardGems;
		const listGemRewards = gemRewards.map((orb, index) =>
			<Element  key={index} element={orb} />
		);
		return (
			<div>{listGemRewards}</div>
		)
	}
	render() {
		return (
			<div className="col-xs-12">
				<div className="row" id="rewardsMessage">Congratulations! Claim your rewards!</div>
				<div className="row" id="rewardsDescription">Score: {this.props.score}</div>
				<div className="row">
					<div className="col-xs-offset-4 col-xs-4" id="cardRewardRow">
						{this.listCardRewards()}
					</div>
				</div>
				<div className="row">
					<div className="col-xs-offset-4 col-xs-4" id="gemRewardRow">
						{this.listGemRewards()}
					</div>
				</div>
				<div className="row">
					<button className="coolButton col-xs-offset-4 col-xs-4" onClick={this.props.goToCharacterScreen}>Return</button>
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
		this.listCollection = this.listCollection.bind(this);
		this.listCurrentDeck = this.listCurrentDeck.bind(this);
	}

	addToDeck(card) {
		var found = 0;
		if(cardArray.length > 0){
			console.log(card);
			for(var i=0; i < cardArray.length; i++){
				if(card.name === cardArray[i].name){
					found = card.deckNum;
				}else{}
			}
			if(found === 0){
				for(var i=0; i < collectionArray.length; i++){
					if(card.name === collectionArray[i].name){
						var oldDeck = [...this.state.currentDeck];
			    		oldDeck.push(collectionArray[i]);
						this.setState({
							currentDeck: oldDeck
						}, () => {
							cardArray = this.state.currentDeck;
						});
					}else{}
				}
				card.deckNum ++;
			}else if(found < card.ownedNum){
				card.deckNum ++;
			}else{}
		}else{
			for(var i=0; i < collectionArray.length; i++){
				if(card.name === collectionArray[i].name){
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
	removeFromDeck(card) {
		if(card.deckNum > 1){
			card.deckNum --;
		}else{
			for(var i=0; i < cardArray.length; i++){
				if(card.name === cardArray[i].name){
					card.deckNum = 0;
					cardArray.splice(i, 1);
					this.setState({
						currentDeck: cardArray
					});
					break;
				}
			}
		}
	}
	listCollection() {
		var cards = collectionArray;
		const listCollection = cards.map((card, index) => {
			if(card.unlocked === true) {
				return <CollectionCard className={card.alignment} key={index} id={index} numberOwned={card.ownedNum} ability={card.ability1} icon={card.icon} faction={card.faction} name={card.name} type={card.type} cost={card.cost} power={card.power} text={card.text} handleDrop={(name) => this.addToDeck(card)} />
			}
		});
		return (
			<div>{listCollection}</div>
		)
	}
	listCurrentDeck() {
		var cards = this.state.currentDeck;
		const listDeck = cards.map((card, index) =>
			<CollectionCard2 className={card.alignment + "2"} key={index} deckNum={card.deckNum} faction={card.faction} icon={card.icon} ability={card.ability1} card={card} id={index} name={card.name} type={card.type} cost={card.cost} power={card.power} text={card.text} handleDrop={(name) => this.removeFromDeck(card)} />
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
					<div className="col-xs-2">
						<button className="coolButton" onClick={this.props.goToCraftingScreen}>Crafting</button>
					</div>
				</div>
				<div className="row">
					<div className="col-xs-10 deckTitle">Collection</div>
					<div className="col-xs-2 deckTitle">Deck ({this.state.currentDeck.length})</div>
				</div>
				<div className="row">
					<Target listCollection={this.listCollection}  />
					<Target2 listCurrentDeck={this.listCurrentDeck} />
				</div>
			</div>
		)
	}
}

class CraftingScreen extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			elementOrbs: elementOrbs,
			card: crafting1,
			element: [empty, "neutral"],
			level: null,
			cardName: "--------",
			resetCard: null
		}
		this.frameDrop = this.frameDrop.bind(this);
		this.handleResetClick = this.handleResetClick.bind(this);
		this.handleCraftClick = this.handleCraftClick.bind(this);
	}
	handleCraftClick(){
		if(this.state.element[1] === "neutral"){
		}else{
			var craftedCard = this.state.resetCard;
			console.log(craftedCard.craft);
			if(craftedCard.craft > 0){
				var newCard = eval(this.state.element[1] + craftedCard.craft);
				var a = collectionArray.findIndex(x => x.name === craftedCard.name);
				if(collectionArray[a].number > 1){
					collectionArray[a].number --;
				}else{
					collectionArray.splice(a, 1);
				}
				collectionArray.push(newCard);
				newCard.unlocked = true;
				var b = cardArray.findIndex(x => x.name === craftedCard.name);
				cardArray.splice(a, 1);
				cardArray.push(newCard);
				var usedElement = elementOrbs.indexOf(newCard.icon);
				elementOrbs.splice(usedElement, 1);
				this.setState({
					card: crafting1,
					element: [empty, "neutral"],
					elementOrbs: elementOrbs
				});
			}else{}
		}
	}
	handleResetClick(){
		console.log(this.state.card.icon + " " + this.state.card.faction);
		if(this.state.element[1] === "neutral"){
			console.log("nothing to reset");
		}else{
			var resetCard = this.state.resetCard;
			this.setState({
				element: [resetCard.icon, resetCard.faction],
				card: resetCard
			});
		}
	}
	listCardFrames() {
		var multipleFrames = [];
		for(var i=0; i<collectionArray.length; i++){
			if(collectionArray[i].ownedNum > 1){
				for(var j=0; j<collectionArray[i].ownedNum; j++){
					multipleFrames.push(collectionArray[i]);
				}
			}else{
				multipleFrames.push(collectionArray[i]);
			}
		}
		const listFrames = multipleFrames.map((card, index) => {
			if(card.unlocked === true) {
				return <CardFrame handleDrop={(stats) => this.frameDrop(card)} className={card.alignment} key={index} id={index} ability={card.ability1} icon={card.icon} faction={card.faction} name={card.name} type={card.type} cost={card.cost} power={card.power} text={card.text} />
			}
		});
		return (
			<div id="frameList">{listFrames}</div>
		)
	}
	listElementOrbs() {
		const listElementOrbs = this.state.elementOrbs.map((orb, index) =>
			<Element  key={index} element={orb} handleDrop={(element) => this.orbDrop(orb)} />
		);
		return (
			<div>{listElementOrbs}</div>
		)
	}
	orbDrop(element){
		var newElement;
		if(this.state.card.faction === "neutral"){
			if(element === fire){
					newElement = [fire, "fire"];
			}else if(element === wind){
				newElement = [wind, "wind"];
			}else if(element === water){
				newElement = [water, "water"];
			}else if(element === earth){
				newElement = [earth, "earth"];
			}
			this.setState({
				element: newElement
			});
		}else{
			if(this.state.element[0] === fire){
				if(element === earth){
					newElement = [lava, "lava"];
				}else if(element === wind){
					newElement = [desert, "desert"];
				}else{
					newElement = [fire, "fire"];
				}
				this.setState({
					element: newElement
				});
			}else if(this.state.element[0] === earth){
				if(element === fire){
					newElement = [lava, "lava"];
				}else if (element === water){
					newElement = [mud, "mud"];
				}else{
					newElement = [earth, "earth"];
				}
				this.setState({
					element: newElement
				});
			}else if(this.state.element[0] === wind){
				if(element === fire){
					newElement = [desert, "desert"];
				}else if(element === water){
					newElement = [storm, "storm"];
				}else{
					newElement = [wind, "wind"];
				}
				this.setState({
					element: newElement
				});
			}else if(this.state.element[0] === water){
				if(element === wind){
					newElement = [storm, "storm"];
				}else if(element === earth){
					newElement = [mud, "mud"];
				}else{
					newElement = [water, "water"];
				}
				this.setState({
					element: newElement
				});
			}else if(element === this.state.card.icon){
				this.setState({
					element: [this.state.card.icon, this.state.card.faction]
				});
			}
		}
		var craftedCard = this.state.card;
			if(craftedCard.craft > 0){
				var newCard = eval(this.state.element[1] + craftedCard.craft);
				this.setState({
					card: newCard,
					element: [newCard.icon, newCard.faction]
				});
			}else{}
	}
	frameDrop(card) {
		this.setState({
			card: card,
			element: [card.icon, card.faction],
			resetCard: card
		});
	}
	render(){
		return (
			<div className="row">
				<div className="col-xs-12">
					<div className="row">
						<button className="col-xs-2 coolButton" onClick={this.props.showCollection}>Back</button>
					</div>
					<div className="row">
						<div className="col-xs-3">
							<div className="row createTitle">Card Frames</div>
							{this.listCardFrames()}
						</div>
						<div className="col-xs-offset-1 col-xs-5" id="craftingArea">
							<div className="row">
								<FrameTarget className={this.state.card.alignment} faction={this.state.element[1]} name={this.state.card.name} text={this.state.card.text} power={this.state.card.power} element={this.state.element[0]} />
							</div>
						</div>
						<div className="col-xs-3">
							<div className="row createTitle">Element Gems</div>
							{this.listElementOrbs()}
						</div>
					</div>
					<div className="row craftingButtonRow">
						<button className="col-xs-3 coolButton" onClick={this.handleCraftClick}>Craft</button><button className="col-xs-3 coolButton" onClick={this.handleResetClick}>Reset</button>
					</div>
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