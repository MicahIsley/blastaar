import React from 'react';
import ReactDOM from 'react-dom';
import Firebase from 'firebase';
import config from "./config";
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import placeholderImg from './assets/icons/awe.png';
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
import awe from './assets/icons/awe.png';
import desert from './assets/icons/desert.png';
import earth from './assets/icons/earth.png';
import empty from './assets/icons/empty.png';
import fire from './assets/icons/fire.png';
import heart from './assets/icons/heart.png';
import int from './assets/icons/int.png';
import lava from './assets/icons/lava.png';
import mud from './assets/icons/mud.png';
import power from './assets/icons/power.png';
import shield from './assets/icons/shield.png';
import spooky from './assets/icons/spooky.png';
import storm from './assets/icons/storm.png';
import water from './assets/icons/water.png';
import wind from './assets/icons/wind.png';
import mainTitle from './assets/backgrounds/mainTitle.png';
import tree from './assets/backgrounds/backgroundTree.png';
import fireBackground from './assets/backgrounds/fireBackground.png';
import grassBackground from './assets/backgrounds/grassBackground.png';
import waterBackground from './assets/backgrounds/waterBackground.png';
import windBackground from './assets/backgrounds/windBackground.png';
import lavaBackground from './assets/backgrounds/lavaBackground.png';
import desertBackground from './assets/backgrounds/desertBackground.png';
import stormBackground from './assets/backgrounds/stormBackground.png';
import mudBackground from './assets/backgrounds/mudBackground.png';
import towerBackground from './assets/backgrounds/towerBackground.png';
import boneStalker from './assets/desert/boneStalker.png';
import championStalker from './assets/desert/championStalker.png';
import desertMadnado from './assets/desert/desertMadnado.gif';
import duneStabber from './assets/desert/duneStabber.png';
import grumpeel from './assets/desert/grumpeel.png';
import predatorSnipp from './assets/desert/predatorSnipp.png';
import sandSnipp from './assets/desert/sandSnipp.gif';
import stabberConclave from './assets/desert/stabberConclave.png';
import wanderingRelic from './assets/desert/wanderingRelic.png';
import jewelPrimtree from './assets/earth/jewelPrimtree.gif';
import kingWobbleduk from './assets/earth/kingWobbleduk.gif';
import primtree from './assets/earth/primtree.gif';
import queenPrimtree from './assets/earth/queenPrimtree.png';
import rockFairy from './assets/earth/rockFairy.gif';
import steed from './assets/earth/steed.png';
import stoneStrider from './assets/earth/stoneStrider.png';
import toughPrimtree from './assets/earth/toughPrimtree.gif';
import wobbleduk from './assets/earth/wobbleduk.gif';
import broodmother from './assets/fire/broodmother.png';
import emberAdder from './assets/fire/emberAdder.gif';
import flameCrawler from './assets/fire/flameCrawler.gif';
import flameScrabler from './assets/fire/flameScrabler.gif';
import grandTipper from './assets/fire/grandTipper.gif';
import kragmup from './assets/fire/kragmup.png';
import morp from './assets/fire/morp.gif';
import pheonixWyrm from './assets/fire/pheonixWyrm.png';
import tipper from './assets/fire/tipper.png';
import emberite from './assets/lava/emberite.png';
import lavaLordWalker from './assets/lava/lavaLordWalker.png';
import lavaWalker from './assets/lava/lavaWalker.png';
import moltasaurus from './assets/lava/moltasaurus.png';
import moltasaurusRex from './assets/lava/moltasaurusRex.png';
import nutrite from './assets/lava/nutrite.png';
import trekapod from './assets/lava/trekapod.png';
import volcanoTrampler from './assets/lava/volcanoTrampler.png';
import walkingEruption from './assets/lava/walkingEruption.png';
import archmageMuckster from './assets/mud/archmageMuckster.png';
import bogBoar from './assets/mud/bogBoar.png';
import duchessWarthus from './assets/mud/duchessWarthus.png';
import greaterGalope from './assets/mud/greaterGalope.png';
import lesserGalope from './assets/mud/lesserGalope.png';
import muckster from './assets/mud/muckster.png';
import sominus from './assets/mud/sominus.png';
import toxicRoller from './assets/mud/toxicRoller.png';
import warthus from './assets/mud/warthus.png';
import enlightenedRainWolf from './assets/storm/enlightenedRainWolf.png';
import greatShockShark from './assets/storm/greatShockShark.png';
import lightningBug from './assets/storm/lightningBug.png';
import rainWolf from './assets/storm/rainWolf.png';
import scorchedTreeGhast from './assets/storm/scorchedTreeGhast.png';
import shelterThump from './assets/storm/shelterThump.png';
import shockShark from './assets/storm/shockShark.gif';
import staticCatcher from './assets/storm/staticCatcher.png';
import staticGlider from './assets/storm/staticGlider.gif';
import borgus from './assets/tower/borgus.gif';
import gangOfFleebs from './assets/tower/gangOfFleebs.gif';
import misterBorgus from './assets/tower/misterBorgus.gif';
import purpleKreep from './assets/tower/purpleKreep.gif';
import reacher from './assets/tower/reacher.gif';
import rundarr from './assets/tower/rundarr.gif';
import sinisterSloop from './assets/tower/sinisterSloop.png';
import soulShredder from './assets/tower/soulShredder.png';
import superPincher from './assets/tower/superPincher.png';
import tooger from './assets/tower/tooger.png';
import albinoSlapper from './assets/water/albinoSlapper.gif';
import budleFairy from './assets/water/budleFairy.gif';
import caveThump from './assets/water/caveThump.gif';
import coralThump from './assets/water/coralThump.gif';
import ghostShark from './assets/water/ghostShark.png';
import kingSlapper from './assets/water/kingSlapper.png';
import marshSlapper from './assets/water/marshSlapper.gif';
import superBudleFairy from './assets/water/superBudleFairy.gif';
import trenchThump from './assets/water/trenchThump.gif';
import alphaSpookaw from './assets/wind/alphaSpookaw.png';
import empressMadnado from './assets/wind/empressMadnado.png';
import floofer from './assets/wind/floofer.png';
import maclaw from './assets/wind/maclaw.gif';
import madnado from './assets/wind/madnado.gif';
import raaHowler from './assets/wind/raaHowler.png';
import spookaw from './assets/wind/spookaw.gif';
import windFlitter from './assets/wind/windFlitter.gif';
import windleFairy from './assets/wind/windleFairy.png';
import youber from './assets/youber.gif';
import walkLeft from './assets/walkLeft.gif';
import walkRight from './assets/walkRight.gif';
import walkUp from './assets/walkUp.png';
import background from './assets/audio.m4a';
import click from './assets/click.mp3';
import attackSound from './assets/attackSound.mp3';
import meter0 from './assets/spookyMeter/meter0.png';
import meter1 from './assets/spookyMeter/meter1.png';
import meter2 from './assets/spookyMeter/meter2.png';
import meter3 from './assets/spookyMeter/meter3.png';
import meter4 from './assets/spookyMeter/meter4.png';
import meter5 from './assets/spookyMeter/meter5.png';
import meter6 from './assets/spookyMeter/meter6.png';
import meter7 from './assets/spookyMeter/meter7.png';
import meter8 from './assets/spookyMeter/meter8.png';
import meter9 from './assets/spookyMeter/meter9.png';
import meter10 from './assets/spookyMeter/meter10.png';
import meter11 from './assets/spookyMeter/meter11.png';
import meter12 from './assets/spookyMeter/meter12.png';
import './index.css';

var player;
var enemy0Slot = {};
var enemy1Slot = {};
var enemy2Slot = {};
var createEnemy;

var sabotoge1 = new CardCon("Tripped Up", 0, -2, "Hit the ground", "enemy", 0, "", "", false, "stormlight", placeholderImg, placeholderImg, "enemy", 0);
var sabotoge2 = new CardCon("Budle Charm", 0, -3, "Woozy", "enemy", 0, "", "", false, "stormlight", placeholderImg, placeholderImg, "enemy", 0);
var sabotoge3 = new CardCon("Raging Storm", 0, -4, "So Fierce", "enemy", 0, "", "", false, "stormlight", placeholderImg, placeholderImg, "enemy", 0);
var sabotoge4 = new CardCon("Steamed", 0, -5, "Super way too hot", "enemy", 0, "", "", false, "stormlight", placeholderImg, placeholderImg, "enemy", 0);

var crafting1 = new CardCon("------", 0, 0, " ", "hero", 0, "", "", false, "stormlight", placeholderImg, placeholderImg, "neutral", 0, 1, 0);

var basic1 = new CardCon("Small Rock", 0, 2, "It's pretty small", "hero", 1, "", "", true, "stormlight", placeholderImg, placeholderImg, "neutral", 1, 4, 4);
var basic2 = new CardCon("Big Rock", 0, 4, "It's pretty big", "hero", 1, "", "", true, "stormlight", placeholderImg, placeholderImg, "neutral", 2, 4, 4);
var basic3 = new CardCon("Biggest Blast", 0, 6, "Whaaam!", "hero", 2, "", "", true, "stormlight", placeholderImg, placeholderImg, "neutral", 3, 1, 1); 
var basic4 = new CardCon("Thick Skin", 0, 2, "Shield 2", "hero", 1, "shield 2", "", true, "stormlight", placeholderImg, placeholderImg, "neutral", 4, 2, 2);
var basic5 = new CardCon("Protective Bubble", 0, 0, "Shield 4", "hero", 1, "shield 4", "", true, "stormlight", placeholderImg, placeholderImg, "neutral", 5, 1, 0);
var basic6 = new CardCon("Short Rest", 0, 2, "Heal 3", "hero", 1, "heal 3", "", true, "stormlight", placeholderImg, placeholderImg, "neutral", 6, 2, 2);
var basic7 = new CardCon("Focus", 0, 1,"Next Spell +3", "hero", 1, "next 3", "", true, "stormlight", placeholderImg, placeholderImg, "neutral", 7, 2, 2);
var basic8 = new CardCon("Reach Back In", 0, 3, "Rummage 2", "hero", 1, "research 2", "", true, "stormlight", placeholderImg, placeholderImg, "neutral", 8, 2, 2);
var basic9 = new CardCon("Store Energy", 0, 3, "Gain 1 Energy", "hero", 1, "energy 1", "", true, "stormlight", placeholderImg, placeholderImg, "neutral", 9, 2, 2);
var basic10 = new CardCon("More Power", 0, 0, "Increase Magic by 1", "hero", 2, "str 1", "", true, "stormlight", placeholderImg, placeholderImg, "neutral", 10, 1, 0);
var basic11 = new CardCon("Mind Grow", 0, 0, "Increase Intelligence by 1", "hero", 2, "int 1", "", true, "stormlight", placeholderImg, placeholderImg, "neutral", 11, 1, 0);
var basic12 = new CardCon("React Stance", 0, 0, "Increase Shield by 1", "hero", 2, "def 1", "", true, "stormlight", placeholderImg, placeholderImg, "neutral", 12, 1, 0); 
var basic13 = new CardCon("Powerful Shove", 0, 5, "Exhausted", "hero", 2, "exhausted", "", true, "stormlight", placeholderImg, placeholderImg, "neutral", 13, 1, 0);
var basic14 = new CardCon("Thoughful Study", 0, 0, "Rummage 4", "hero", 1, "research 4", "", true, "stormlight", placeholderImg, placeholderImg, "neutral", 14, 1, 0);
var basic15 = new CardCon("Crippling Shot", 0, 1, "Weaken 1", "hero", 1, "weaken 1", "", true, "stormlight", placeholderImg, placeholderImg, "neutral", 15, 1, 0);
var basic16 = new CardCon("Add Some More", 0, 0, "Maybe Later", "hero", 3, "", "", true, "stormlight", placeholderImg, placeholderImg, "neutral", 16, 1, 0);
var basic17 = new CardCon("Something", 0, 4, "", "hero", 1, "", "", true, "stormlight", placeholderImg, placeholderImg, "neutral", 17, 1, 0);
var basic18 = new CardCon("Magic Rock", 0, 3, "Looks like it should turn into something", "hero", 3, "", "", true, "stormlight", placeholderImg, placeholderImg, "neutral", 18, 1, 0);
var basic19 = new CardCon("Plot", 1, 0, "Neutral Scheme", "hero", 2, "scheme neutral 2 4", 1, true, "character", placeholderImg, placeholderImg, "neutral", 19, 1, 1);
var basic20 = new CardCon("Master Scheme", 4, 0, "Neutral Scheme 5/8", "hero", 3, "scheme neutral 5 8", 1, true, "character", placeholderImg, placeholderImg, "neutral", 20, 1, 0);

var fire1 = new CardCon("Fire Rock", 0, 4, "Simple, but effective", "hero", 0, "", "", true, "stormlight", placeholderImg, fire, "fire", 1, 1, 0);
var fire2 = new CardCon("Illuminate", 0, 4, "Next Spell +2", "hero", 0, "next 2", "", true, "stormlight", placeholderImg, fire, "fire", 2, 1, 0);
var fire3 = new CardCon("Ember Smash", 0, 8, "Exhaust", "hero", 0, "exhausted", "", true, "stormlight", placeholderImg, fire, "fire", 3, 1, 0);
var fire4 = new CardCon("Heat Defense", 0, 2, "Shield 3", "hero", 0, "shield 3", "", true, "stormlight", placeholderImg, fire, "fire", 4, 1, 0);
var fire5 = new CardCon("Light the Fuse", 0, 0, "Draw +2", "hero", 0, "int 2", "", true, "stormlight", placeholderImg, fire, "fire", 5, 1, 0);
var fire6 = new CardCon("Pew Pew Pew", 0, 2, "Deal 2 Damage To All Enemies", "hero", 0, "all", "", true, "stormlight", placeholderImg, fire, "fire", 6, 1, 0);
var fire7 = new CardCon("Burn Bright", 0, 1, "Multiply", "hero", 0, "multiply", "", true, "stormlight", placeholderImg, fire, "fire", 7, 1, 0);
var fire8 = new CardCon("Frantic Planning", 0, 3, "Draw +1", "hero", 0, "int 1", "", true, "stormlight", placeholderImg, fire, "fire", 8, 1, 0);
var fire9 = new CardCon("Fuel", 0, 3, "Energy 2", "hero", 0, "energy 2", "", true, "stormlight", placeholderImg, fire, "fire", 9, 1, 0);
var fire10 = new CardCon("Big Boom", 0, 2, "Spooky 2", "hero", 0, "meter 2", "", true, "stormlight", placeholderImg, fire, "fire", 10, 1, 0);
var fire11 = new CardCon("Look Into Flame", 0, 6, "Draw +2. Exhaust.", "hero", 0, "int 2", "exhausted", true, "stormlight", placeholderImg, fire, "fire", 11, 1, 0);
var fire11 = new CardCon("Let It Burn", 0, 2, "Multiply", "hero", 0, "multiply", "", true, "stormlight", placeholderImg, fire, "fire", 12, 1, 0);
var fire12 = new CardCon("Soul Flare", 0, 4, "Multiply. Exhaust.", "hero", 0, "multiply", "exhausted", true, "stormlight", placeholderImg, fire, "fire", 13, 1, 0);
var fire13 = new CardCon("Risky Explosion", 0, 4, "All. Exhaust.", "hero", 0, "exhausted", "all", true, "stormlight", placeholderImg, fire, "fire", 14, 1, 0);
var fire14 = new CardCon("Fire Ruby", 0, 0, "Multiply. All", "hero", 0, "multiply", "all", true, "stormlight", placeholderImg, fire, "fire", 15, 1, 0);
var fire16 = new CardCon("Spark Spirits", 0, 0, "+1 For Each Fire Card. All.", "hero", 0, "factionBoost 1", "all", true, "stormlight", placeholderImg, fire, "fire", 16, 1, 0);
var fire17 = new CardCon("Big Fireball", 1, 9, "Whoa", "hero", 0, "", "", true, "stormlight", placeholderImg, fire, "fire", 17, 1, 0);
var fire18 = new CardCon("Wait For It", 1, 0, "Next +4. Draw +3.", "hero", 0, "next 4", "int 3", true, "stormlight", placeholderImg, fire, "fire", 18, 1, 0);
var fire19 = new CardCon("Surround By Fire", 2, 0, "Fire Scheme 2/6", "hero", 0, "scheme fire 2", 6, true, "character", placeholderImg, fire, "fire", 19, 1, 0);
var fire20 = new CardCon("Smoke Monster", 3, 0, "Fire Scheme 4/12", "hero", 0, "scheme fire 4", 12, true, "character", placeholderImg, fire, "fire", 20, 1, 0);

var fire21 = new CardCon("Flame Scrabler", 2, 0, "Fire cards get +2 power", "hero", 0, "boost fire 2", 99, true, "support", flameScrabler, fire, "fire", 21, 1, 0);
var fire22 = new CardCon("Broodmother", 3, 0, "Fire cards get +3 power", "hero", 0, "boost fire 3", 99, true, "support", broodmother, fire, "fire", 22, 1, 0);
var fire23 = new CardCon("Morp", 1, 0, "Gain 2 Fire gems", "hero", 0, "supGems 2", 99, true, "support", morp, fire, "fire", 22, 1, 0);
var fire24 = new CardCon("Ember Adder", 1, 0, "Gain an extra fire reward card", "hero", 0, "supCards 1", 99, true, "support", emberAdder, fire, "fire", 22, 1, 0);
var fire25 = new CardCon("Kragmup", 2, 0, "Enemies take 1 damage each turn", "hero", 0, "supBurning 1", 99, true, "support", kragmup, fire, "fire", 22, 1, 0);
var fire26 = new CardCon("Tipper", 2, 0, "Fire cards get +1 power", "hero", 0, "boost fire 1", 99, true, "support", tipper, fire, "fire", 22, 1, 0);
var fire27 = new CardCon("Grand Tipper", 3, 0, "Enemies take 3 damage each turn", "hero", 0, "supBurning 3", 99, true, "support", grandTipper, fire, "fire", 22, 1, 0);
var fire28 = new CardCon("Pheonix Wyrm", 2, 0, "Enemies take 2 damage each turn", "hero", 0, "supBurning 2", 99, true, "support", pheonixWyrm, fire, "fire", 22, 1, 0);
var fire29 = new CardCon("Flame Crawler", 1, 0, "Fire cards get +1 power", "hero", 0, "boost fire 1", 99, true, "support", flameCrawler, fire, "fire", 0, 1, 0);

var earth1 = new CardCon("Pile On", 0, 2, "Grow 2", "hero", 0, "grow 2 6", "", true, "stormlight", placeholderImg, earth, "earth", 1, 1, 0);
var earth2 = new CardCon("Oppressive Flurry", 0, 4, "Weaken 1", "hero", 0, "weaken", "", true, "stormlight", placeholderImg, earth, "earth", 2, 1, 0);
var earth3 = new CardCon("Blessing of Dirt", 0, 6, "Shield 1. Heal 1", "hero", 0, "shield 1", "heal 1", true, "stormlight", placeholderImg, earth, "earth", 3, 1, 0);
var earth4 = new CardCon("Rock Skin", 0, 2, "Shield 6", "hero", 0, "shield 6", "", true, "stormlight", placeholderImg, earth, "earth", 4, 1, 0);
var earth5 = new CardCon("Falling Rubble", 0, 3, "Shield 4", "hero", 0, "shield", "", true, "stormlight", placeholderImg, earth, "earth", 5, 1, 0);
var earth6 = new CardCon("Photosynthesis", 0, 4, "Heal 3", "hero", 0, "heal 3", "", true, "stormlight", placeholderImg, earth, "earth", 6, 1, 0);
var earth7 = new CardCon("Sharpen", 0, 1, "Grow 1", "hero", 0, "grow 1 10", "", true, "stormlight", placeholderImg, earth, "earth", 7, 1, 0)
var earth8 = new CardCon("Landslide", 0, 3, "Spooky 1", "hero", 0, "meter 1", "weaken 5", true, "stormlight", placeholderImg, earth, "earth", 8, 1, 0);
var earth9 = new CardCon("Life Pods", 0, 4, "Energy 1", "hero", 0, "energy 2", "", true, "stormlight", placeholderImg, earth, "earth", 9, 1, 0);
var earth10 = new CardCon("Earth Slam", 0, 2, "Shield 2. All.", "hero", 0, "shield 2", "all", true, "stormlight", placeholderImg, earth, "earth", 10, 1, 0);
var earth11 = new CardCon("Stone Bubble", 0, 0, "Shield 5. Defense +1.", "hero", 0, "shield 5", "def 1", true, "stormlight", placeholderImg, earth, "earth", 11, 1, 0);
var earth12 = new CardCon("Granite Armor", 0, 2, "Defense +1", "hero", 0, "def 1", "", true, "stormlight", placeholderImg, earth, "earth", 12, 1, 0);
var earth13 = new CardCon("Keep Rolling", 0, 1, "Grow 1. Weaken 1.", "hero", 0, "grow 1 99", "weaken 1", true, "stormlight", placeholderImg, earth, "earth", 13, 1, 0);
var earth14 = new CardCon("Boulder Trap", 0, 1, "Weaken 2", "hero", 0, "weaken 2", "", true, "stormlight", placeholderImg, earth, "earth", 14, 1, 0);
var earth15 = new CardCon("Targeted Blast", 0, 4, "Shield 4. Weaken 1.", "hero", 0, "shield 4", "weaken 1", true, "stormlight", placeholderImg, earth, "earth", 15, 1, 0);
var earth16 = new CardCon("Fast Learning", 0, 3, "Grow 3", "hero", 0, "grow 3 30", "", true, "stormlight", placeholderImg, earth, "earth", 16, 1, 0);
var earth17 = new CardCon("Super Crash", 1, 6, "+1 For Each Earth Card", "hero", 0, "factionBoost 1", "", true, "stormlight", placeholderImg, earth, "earth", 17, 1, 0);
var earth18 = new CardCon("Strength Sap", 1, 4, "Weaken 4", "hero", 0, "weaken 4", "", true, "stormlight", placeholderImg, earth, "earth", 18, 1, 0);
var earth19 = new CardCon("Rumblings From Below", 2, 0, "Earth Scheme 3/7", "hero", 0, "scheme earth 3", 7, true, "character", placeholderImg, earth, "earth", 19, 1, 0);
var earth20 = new CardCon("Quicksand", 3, 0, "Earth Scheme 5/Confuse", "hero", 0, "scheme earth 5", "confuse", true, "character", placeholderImg, earth, "earth", 20, 1, 0);

var earth21 = new CardCon("Rock Fairy", 1, 0, "Gain 1 Earth Card", "hero", 0, "supCards 1", 99, true, "support", rockFairy, earth, "earth", 21, 1, 1); 
var earth22 = new CardCon("Primtree", 2, 0, "Earth cards get +2 power", "hero", 0, "boost earth 2", 99, true, "support", primtree, earth, "earth", 0, 1, 0);
var earth23 = new CardCon("King Wobbleduk", 3, 0, "Earth cards get +3 power", "hero", 0, "boost earth 3", 99, true, "support", kingWobbleduk, earth, "earth", 0, 1, 0);
var earth24 = new CardCon("Steed", 1, 0, "Gain 1 Shield Per Turn", "hero", 0, "supShield 1", 99, true, "support", steed, earth, "earth", 0, 1, 0);
var earth25 = new CardCon("Stone Strider", 2, 0, "Gain 2 Shield Per Turn", "hero", 0, "supShield 2", 99, true, "support", stoneStrider, earth, "earth", 0, 1, 0);
var earth26 = new CardCon("Jewel Primtree", 2, 0, "Gain 2 Earth Gems", "hero", 0, "supGems 2", 99, true, "support", jewelPrimtree, earth, "earth", 0, 1, 0);
var earth27 = new CardCon("Queen Primtree", 3, 0, "Enemies have -2 Power", "hero", 0, "supWeaken 2", 99, true, "support", queenPrimtree, earth, "earth", 0, 1, 0);
var earth28 = new CardCon("Tough Primtree", 2, 0, "Gain 3 Shield Per Turn", "hero", 0, "supShield 3", 99, true, "support", toughPrimtree, earth, "earth", 0, 1, 0);
var earth29 = new CardCon("Wobbleduk", 1, 0, "Earth cards get +1 power", "hero", 0, "boost earth 1", 99, true, "support", wobbleduk, earth, "earth", 0, 1, 0);

var wind1 = new CardCon("Plan Ahead", 0, 2, "Next +3", "hero", 0, "next 3", "", true, "stormlight", placeholderImg, wind, "wind", 1, 1, 0);
var wind2 = new CardCon("Death Blow",0, 4, "Finesse 2", "hero", 0, "finesse 2", "", true, "stormlight", placeholderImg, wind, "wind", 2, 1, 0);
var wind3 = new CardCon("Headwind", 0, 6, "Deplete", "hero", 0, "deplete", "", true, "stormlight", placeholderImg, wind, "wind", 3, 1, 0);
var wind4 = new CardCon("Ethereal", 0, 2, "Deplete. Decoy.", "hero", 0, "deplete", "decoy", true, "stormlight", placeholderImg, wind, "wind", 4, 1, 0);
var wind5 = new CardCon("Finesse Strike", 0, 2, "Finesse 1", "hero", 0, "finesse 1", "", true, "stormlight", placeholderImg, wind, "wind", 5, 1, 0);
var wind6 = new CardCon("Blow Down", 0, 2, "Deplete 2", "hero", 0, "deplete", "deplete", true, "stormlight", placeholderImg, wind, "wind", 6, 1, 0);
var wind7 = new CardCon("Tornado", 0, 1, "Next +5.", "hero", 0, "next 5", "", true, "stormlight", placeholderImg, wind, "wind", 7, 1, 0);
var wind8 = new CardCon("Cloud Sign", 0, 5, "Rummage 2", "hero", 0, "research 2", "", true, "stormlight", placeholderImg, wind, "wind", 8, 1, 0);
var wind9 = new CardCon("Rising Wind", 0, 2, "Energy 3", "hero", 0, "energy 2", "", true, "stormlight", placeholderImg, wind, "wind", 9, 1, 0);
var wind10 = new CardCon("Brewing Storm", 0, 2, "Draw +1", "hero", 0, "int 1", "", true, "stormlight", placeholderImg, wind, "wind", 10, 1, 0);
var wind11 = new CardCon("Momentum", 0, 2, "Next +4. Draw +1.", "hero", 0, "next 4", "int 1", true, "stormlight", placeholderImg, wind, "wind", 11, 1, 0);
var wind12 = new CardCon("Whirlwind", 0, 3, "Decoy", "hero", 0, "decoy", "", true, "stormlight", placeholderImg, wind, "wind", 12, 1, 0);
var wind13 = new CardCon("Balanced Blow", 0, 5, "Next +1.", "hero", 0, "next 1", "", true, "stormlight", placeholderImg, wind, "wind", 13, 1, 0);
var wind14 = new CardCon("Dissolve", 0, 2, "Next +3. Decoy.", "hero", 0, "next 3", "decoy", true, "stormlight", placeholderImg, wind, "wind", 14, 1, 0);
var wind15 = new CardCon("Unfettered Attack", 0, 6, "Finesse 1", "hero", 0, "finesse 1", "", true, "stormlight", placeholderImg, wind, "wind", 15, 1, 0);
var wind16 = new CardCon("Relentless Speed", 0, 0, "+1 For Each Wind Card. Next +3", "hero", 0, "factionBoost 1", "next 3", true, "stormlight", placeholderImg, wind, "wind", 16, 1, 0);
var wind17 = new CardCon("Air Blessing", 1, 1, "Next +10", "hero", 0, "next 10", "", true, "stormlight", placeholderImg, wind, "wind", 17, 1, 0);
var wind18 = new CardCon("Surrender to the Gale", 2, 5, "Finesse 4", "hero", 0, "finesse 4", "", true, "stormlight", placeholderImg, wind, "wind", 18, 1, 0);
var wind19 = new CardCon("Mysterious Howl", 2, 0, "Wind Scheme 3/6", "hero", 0, "scheme wind 3", 6, true, "character", placeholderImg, wind, "wind", 19, 1, 0);
var wind20 = new CardCon("Wind's Fury", 3, 0, "Wind Scheme 4/Extra", "hero", 0, "scheme wind 4", "extra", true, "character", placeholderImg, wind, "wind", 20, 1, 0);

var wind21 = new CardCon("Windle Fairy",2, 0, "Wind cards get +2 power", "hero", 0, "boost wind 2", 99, true, "support", windleFairy, wind, "wind", 0, 1, 0);
var wind22 = new CardCon("Empress Madnado",3, 0, "Wind cards get +3 power", "hero", 0, "boost wind 3", 99, true, "support", empressMadnado, wind, "wind", 0, 1, 0);
var wind23 = new CardCon("Wind Flitter",2, 0, "Gain 2 Wind Gems", "hero", 0, "supGems 2", 99, true, "support", windFlitter, wind, "wind", 0, 1, 0);
var wind24 = new CardCon("Raa Howler",1, 0, "Gain 1 Wind Card", "hero", 0, "supCards 1", 99, true, "support", raaHowler, wind, "wind", 0, 1, 0);
var wind25 = new CardCon("Alpha Spookaw",2, 0, "Dodge All Sabotoges", "hero", 0, "supDecoy", 99, true, "support", alphaSpookaw, wind, "wind", 0, 1, 0);
var wind26 = new CardCon("Floofer",2, 0, "Gain 1 Energy Per Turn", "hero", 0, "supEnergy 1", 99, true, "support", floofer, wind, "wind", 0, 1, 0);
var wind27 = new CardCon("Maclaw",2, 0, "Gain 2 Energy Per Turn", "hero", 0, "supEnergy 2", 99, true, "support", maclaw, wind, "wind", 0, 1, 0);
var wind28 = new CardCon("Spookaw",1, 0, "Gain 1 Wind Gem", "hero", 0, "supGems 1", 99, true, "support", spookaw, wind, "wind", 0, 1, 0);
var wind29 = new CardCon("Madnado",1, 0, "Wind cards get +1 power", "hero", 0, "boost wind 1", 99, true, "support", madnado, wind, "wind", 0, 1, 0);

var water1 = new CardCon("Healing Water", 0, 2, "Heal 5", "hero", 0, "heal 5", "", true, "stormlight", placeholderImg, water, "water", 1, 1, 0);
var water2 = new CardCon("Sickness", 0, 4, "Poison 1", "hero", 0, "poison 1", "", true, "stormlight", placeholderImg, water, "water", 3, 1, 0)
var water3 = new CardCon("Restorative Blast", 0, 6, "Reclaim 2", "hero", 0, "reclaim 2", "", true, "stormlight", placeholderImg, water, "water", 6, 1, 0);
var water4 = new CardCon("Assimilate", 0, 2, "Reclaim 3", "hero", 0, "reclaim 3", "", true, "stormlight", placeholderImg, water, "water", 2, 1, 0);
var water5 = new CardCon("Spreading Sickness", 0, 2, "Posion 1 twice", "hero", 0, "poison 1", "poison 1", true, "stormlight", placeholderImg, water, "water", 15, 1, 0);
var water6 = new CardCon("Drain Life", 0, 2, "Heal 3. Poison 1.", "hero", 0, "heal 3", "posion 1", true, "stormlight", placeholderImg, water, "water", 8, 1, 0);
var water7 = new CardCon("Destroy Resistance", 0, 5, "Deplete", "hero", 0, "deplete", "", true, "stormlight", placeholderImg, water, "water", 5, 1, 0);
var water8 = new CardCon("Consult the Tides", 0, 4, "Rummage 2", "hero", 0, "research 2", "", true, "stormlight", placeholderImg, water, "water", 7, 1, 0);
var water9 = new CardCon("Power Water", 0, 3, "Energy 2", "hero", 0, "energy 2", "", true, "stormlight", placeholderImg, water, "water", 9, 1, 0);
var water10 = new CardCon("Ice Hands", 0, 2, "Magic +1", "hero", 0, "str 1", "", true, "stormlight", placeholderImg, water, "water", 12, 1, 0);
var water11 = new CardCon("Posion Spray", 0, 0, "Poison 3", "hero", 0, "poison 3", "", true, "stormlight", placeholderImg, water, "water", 11, 1, 0);
var water12 = new CardCon("Water Gem", 0, 0, "Magic +1. Defense +1", "hero", 0, "str 1", "def 1", true, "stormlight", placeholderImg, water, "water", 13, 1, 0);
var water13 = new CardCon("Corrosion", 0, 3, "Reclaim 3. Deplete", "hero", 0, "reclaim 3", "deplete", true, "stormlight", placeholderImg, water, "water", 14, 1, 0);
var water14 = new CardCon("Rising Tide", 0, 4, "+1 For Each Water Card", "hero", 0, "factionBoost 1", "", true, "stormlight", placeholderImg, water, "water", 10, 1, 0);
var water15 = new CardCon("Cleanse", 0, 2, "Reclaim 2", "hero", 0, "reclaim 2", "", true, "stormlight", placeholderImg, water, "water", 4, 1, 0);
var water16 = new CardCon("Tidal Wave", 0, 2, "+1 For Each Water Card. Heal 4", "hero", 0, "factionBoost 1", "heal 4", true, "stormlight", placeholderImg, water, "water", 16, 1, 0);
var water17 = new CardCon("Healing Whirpool", 1, 7, "Heal 7", "hero", 0, "heal 7", "", true, "stormlight", placeholderImg, water, "water", 17, 1, 0);
var water18 = new CardCon("Envelop Darkness", 2, 10, "Reclaim 5", "hero", 0, "reclaim 5", "", true, "stormlight", placeholderImg, water, "water", 18, 1, 0);
var water19 = new CardCon("Doom Puddles", 2, 0, "Water Scheme 2/5", "hero", 0, "scheme water 2", 5, true, "character", placeholderImg, water, "water", 19, 1, 0);
var water20 = new CardCon("Monster In The Deep", 3, 0, "Water Scheme 3/Stun", "hero", 0, "scheme water 3", "stun", true, "character", placeholderImg, water, "water", 20, 1, 0);

var water21 = new CardCon("Coral Thump", 1, 0,"Water cards get +2 power", "hero", 0, "boost water 2", 99, true, "support", coralThump, water, "water", 0, 1, 0);
var water22 = new CardCon("King Slapper", 3, 0,"Water cards get +3 power", "hero", 0, "boost water 3", 99, true, "support", kingSlapper, water, "water", 0, 1, 0);
var water23 = new CardCon("Budle Fairy", 2, 0,"Heal 2 Per Turn", "hero", 0, "supHeal 2", 99, true, "support", budleFairy, water, "water", 0, 1, 0);
var water24 = new CardCon("Albino Slapper", 2, 0,"Heal 4 Per Turn", "hero", 0, "supHeal 4", 99, true, "support", albinoSlapper, water, "water", 0, 1, 0);
var water25 = new CardCon("Super Budle Fairy", 3, 0,"Heal 6 Per Turn", "hero", 0, "supHeal 6", 99, true, "support", superBudleFairy, water, "water", 0, 1, 0);
var water26 = new CardCon("Ghost Shark", 2, 0,"Gain 2 Water Gems", "hero", 0, "supGems 2", 99, true, "support", ghostShark, water, "water", 0, 1, 0);
var water27 = new CardCon("Marsh Slapper", 2, 0,"Poison 1 to Each Enemy", "hero", 0, "supPoison 1", 99, true, "support", marshSlapper, water, "water", 0, 1, 0);
var water28 = new CardCon("Trench Thump", 1, 0,"Gain 1 Water Card", "hero", 0, "supCards 1", 99, true, "support", trenchThump, water, "water", 0, 1, 0);
var water29 = new CardCon("Cave Thump", 1, 0,"Water cards get +1 power", "hero", 0, "boost water 1", 99, true, "support", caveThump, water, "water", 0, 1, 0);

var basic51 = new CardCon("Wobble Smash", 0, 4, "Dodge and Shield 3", "hero", 0, "decoy", "shield 3", false, "stormlight", placeholderImg, earth, "earth", 0, 1);
var basic52 = new CardCon("Form of Wobble", 2, 0, "Wobble form", "hero", 0, "shapeshift1", "", false, "stormlight", placeholderImg, earth, "earth", 0, 1);
var basic53 = new CardCon("Budle Blast", 0, 3, "Confuse the Enemy", "hero", 0, "confuse", " ", false, "stormlight", placeholderImg, water, "water", 0, 1);
var basic54 = new CardCon("Form of Wobble", 2, 0, "Buddle form", "hero", 0, "shapeshift2", "", false, "stormlight", placeholderImg, water, "water", 0, 1);
var basic55 = new CardCon("Even Angrier", 0, 2, "Grow 2", "hero", 0, "grow 2 14", "", false, "stormlight", placeholderImg, wind, "wind", 0, 1);
var basic56 = new CardCon("Form of Nado", 2, 0, "Nado form", "hero", 0, "shapeshift3", "", false, "stormlight", placeholderImg, wind, "wind", 0, 1);
var basic57 = new CardCon("Molten Pinch", 0, 5, "Weaken 3", "hero", 0, "weaken 3", "", false, "stormlight", placeholderImg, fire, "fire", 0, 1); 
var basic58 = new CardCon("Form of Morp", 2, 0, "Morp form", "hero", 0, "shapeshift4", "", false, "stormlight", placeholderImg, fire, "fire", 0, 1);

var lava1 = new CardCon("Lava Ball", 0, 8, "Wow, duck!", "hero", 0, "", "", true, "stormlight", placeholderImg, lava, "lava", 0, 1, 0);
var lava2 = new CardCon("Spew Magma", 0, 4, "Purge", "hero", 0, "purge", "", true, "stormlight", placeholderImg, lava, "lava", 0, 1, 0);
var lava3 = new CardCon("Everywhere, Lava", 0, 12, "Exhaust", "hero", 0, "exhausted", "", true, "stormlight", placeholderImg, lava, "lava", 0, 1, 0);
var lava4 = new CardCon("Building Pressure", 0, 2, "Grow 2", "hero", 0, "grow 2 20", "", true, "stormlight", placeholderImg, lava, "lava", 0, 1, 1);
var lava5 = new CardCon("Smoke Scare", 0, 4, "Spooky 3", "hero", 0, "meter 3", "", true, "stormlight", placeholderImg, lava, "lava", 0, 1, 0);
var lava6 = new CardCon("The Summit Trembles", 0, 3, "Shield 2. All", "hero", 0, "shield 2", "all", true, "stormlight", placeholderImg, lava, "lava", 0, 1, 0);
var lava7 = new CardCon("Obsidian Smash", 0, 3, "Shield 6", "hero", 0, "shield 6", "", true, "stormlight", placeholderImg, lava, "lava", 0, 1, 0);
var lava8 = new CardCon("Molten Punch", 0, 0, "Grow 1. Shield 3", "hero", 0, "grow 1 10", "shield 3", true, "stormlight", placeholderImg, lava, "lava", 0, 1, 0);
var lava9 = new CardCon("Furnace", 0, 5, "Energy 3", "hero", 0, "energy 4", "", true, "stormlight", placeholderImg, lava, "lava", 0, 1, 0);
var lava10 = new CardCon("Magma Trap", 0, 2, "Weaken 2. Purge", "hero", 0, "purge", "weaken 2", true, "stormlight", placeholderImg, lava, "lava", 0, 1, 0);
var lava11 = new CardCon("Eruption", 0, 8, "All. Exhaust.", "hero", 0, "exhausted", "all", true, "stormlight", placeholderImg, lava, "lava", 0, 1, 0);
var lava12 = new CardCon("Burn Impurity", 0, 1, "Purge twice", "hero", 0, "purge", "purge", true, "stormlight", placeholderImg, lava, "lava", 0, 1, 0);
var lava13 = new CardCon("The Molten Crown", 0, 3, "Purge. Shield 3", "hero", 0, "purge", "shield 3", true, "stormlight", placeholderImg, lava, "lava", 0, 1, 0);
var lava14 = new CardCon("Out Of Hand", 0, 4, "Grow 3. Exhaust", "hero", 0, "grow 3 31", "exhausted", true, "stormlight", placeholderImg, lava, "lava", 0, 1, 0);
var lava15 = new CardCon("Magma Visions", 0, 2, "Purge. Draw +1", "hero", 0, "purge", "int 1", true, "stormlight", placeholderImg, lava, "lava", 0, 1, 0);
var lava16 = new CardCon("Moltify", 0, 4, "All", "hero", 0, "all", "", true, "stormlight", placeholderImg, lava, "lava", 0, 1, 0);
var lava17 = new CardCon("Constant Spew", 1, 0, "Grow 1", "hero", 0, "grow 1 10", "all", true, "stormlight", placeholderImg, lava, "lava", 0, 1, 0);
var lava18 = new CardCon("Obsidian Armor", 1, 10, "Defense +2", "hero", 0, "def 2", "", true, "stormlight", placeholderImg, lava, "lava", 0, 1, 0);
var lava19 = new CardCon("Monster Tracks", 2, 0, "Lava Scheme 2/Spooky 3", "hero", 0, "scheme lava 2", 3, true, "character", placeholderImg, lava, "lava", 0, 1, 0);
var lava20 = new CardCon("Mountain Treasure", 4, 0, "Lava Scheme 4/Treasure", "hero", 0, "scheme lava 4", 10, true, "character", placeholderImg, lava, "lava", 0, 1, 0);

var lava21 = new CardCon("Volcano Trampler", 3, 3, "Purge every turn", "hero", 0, "supPurge", 99, true, "support", volcanoTrampler, lava, "lava", 0, 1, 0);
var lava22 = new CardCon("Lava Walker", 2, 3, "Lava cards +2", "hero", 0, "boost lava 2", 99, true, "support", lavaWalker, lava, "lava", 0, 1, 0);
var lava23 = new CardCon("Moltasaurus", 3, 3, "Lava cards +3", "hero", 0, "boost lava 3", 99, true, "support", moltasaurus, lava, "lava", 0, 1, 0);
var lava24 = new CardCon("Lava Lord Walker", 4, 3, "Lava cards +4", "hero", 0, "boost lava 4", 99, true, "support", lavaLordWalker, lava, "lava", 0, 1, 0);
var lava25 = new CardCon("Emberite", 2, 3, "Gain 2 gems", "hero", 0, "supGems 2", 99, true, "support", emberite, lava, "lava", 0, 1, 0);
var lava26 = new CardCon("Nutrite", 3, 3, "Gain 3 gems", "hero", 0, "supGems 3", 99, true, "support", nutrite, lava, "lava", 0, 1, 0);
var lava27 = new CardCon("Trekapod", 2, 3, "Gain 1 Lava card", "hero", 0, "supCards 1", 99, true, "support", trekapod, lava, "lava", 0, 1, 0);
var lava28 = new CardCon("Moltasaurus Rex", 4, 3, "Deal 4 damage to all enemies each turn", "hero", 0, "supBurning 4", 99, true, "support", moltasaurusRex, lava, "lava", 0, 1, 0);
var lava29 = new CardCon("Walking Eruption", 3, 3, "Exhaust cards deal +5 damage", "hero", 0, "supAbilityBoost exhaust 5", 99, true, "support", walkingEruption, lava, "lava", 0, 1, 0);

var desert1 = new CardCon("Sand Ball", 0, 6, "", "hero", 0, "", "", true, "stormlight", placeholderImg, desert, "desert", 0, 1, 0);
var desert2 = new CardCon("Save Strength", 0, 0, "Next +10", "hero", 0, "next 10", "", true, "stormlight", placeholderImg, desert, "desert", 0, 1, 0);
var desert3 = new CardCon("Dune Speed", 0, 3, "Extra", "hero", 0, "extra 1", "", true, "stormlight", placeholderImg, desert, "desert", 0, 1, 0);
var desert4 = new CardCon("Dust Rage", 0, 5, "Decoy", "hero", 0, "decoy", "", true, "stormlight", placeholderImg, desert, "desert", 0, 1, 0);
var desert5 = new CardCon("Perilous Focus", 0, 2, "Finesse 1. Next +3", "hero", 0, "finesse 1", "next 3", true, "stormlight", placeholderImg, desert, "desert", 0, 1, 0);
var desert6 = new CardCon("Changing Sand", 0, 4, "Draw +2", "hero", 0, "int 2", "", true, "stormlight", placeholderImg, desert, "desert", 0, 1, 0);
var desert7 = new CardCon("Feint", 0, 1, "Extra. Decoy.", "hero", 0, "extra 1", "decoy", true, "stormlight", placeholderImg, desert, "desert", 0, 1, 0);
var desert8 = new CardCon("Mummy Chase", 0, 3, "Spooky 3", "hero", 0, "meter 3", "", true, "stormlight", placeholderImg, desert, "desert", 0, 1, 0);
var desert9 = new CardCon("Crystals", 0, 3, "Energy 5", "hero", 0, "energy 4", "", true, "stormlight", placeholderImg, desert, "desert", 0, 1, 0);
var desert10 = new CardCon("Intense Dodge", 0, 5, "Decoy. Exhaust.", "hero", 0, "decoy", "exhausted", true, "stormlight", placeholderImg, desert, "desert", 0, 1, 0);
var desert11 = new CardCon("Sand Flurry", 0, 3, "Multiply", "hero", 0, "multiply", "", true, "stormlight", placeholderImg, desert, "desert", 0, 1, 0);
var desert12 = new CardCon("Rush of Magic", 0, 0, "Extra 2.", "hero", 0, "extra 2", "", true, "stormlight", placeholderImg, desert, "desert", 0, 1, 0);
var desert13 = new CardCon("Desert Wisdom", 0, 2, "Extra. Draw +1.", "hero", 0, "extra 1", "int 1", true, "stormlight", placeholderImg, desert, "desert", 0, 1, 0);
var desert14 = new CardCon("Mirage", 0, 1, "Multiply. Decoy", "hero", 0, "multiply", "decoy", true, "stormlight", placeholderImg, desert, "desert", 0, 1, 0);
var desert15 = new CardCon("Delicate Slicing", 0, 2, "Finesse 1. All.", "hero", 0, "finesse 1", "all", true, "stormlight", placeholderImg, desert, "desert", 0, 1, 0);
var desert16 = new CardCon("Never Tire", 0, 2, "Extra. Multiply.", "hero", 0, "extra 1", "multiply", true, "stormlight", placeholderImg, desert, "desert", 0, 1, 0);
var desert17 = new CardCon("Painful Illusion", 2, 2, "Extra 3", "hero", 0, "extra 3", "", true, "stormlight", placeholderImg, desert, "desert", 0, 1, 0);
var desert18 = new CardCon("Sun Gem", 1, 3, "Draw +3. Next +3", "hero", 0, "int 3", "next 3", true, "stormlight", placeholderImg, desert, "desert", 0, 1, 0);
var desert19 = new CardCon("Tomb Treasure", 2, 0, "Desert Scheme 3/Treasure", "hero", 0, "scheme desert 3", 11, true, "character", placeholderImg, desert, "desert", 0, 1, 0);
var desert20 = new CardCon("Entomb", 4, 0, "Desert Scheme 6/17", "hero", 0, "scheme desert 6", 17, true, "character", placeholderImg, desert, "desert", 0, 1, 0);

var desert21 = new CardCon("Dune Stabber", 2, 3, "Desert Cards +2", "hero", 0, "boost desert 2", 99, true, "support", duneStabber, desert, "desert", 0, 1, 0);
var desert22 = new CardCon("Predator Snipp", 3, 3, "Desert Cards +3", "hero", 0, "boost desert 3", 99, true, "support", predatorSnipp, desert, "desert", 0, 1, 0);
var desert23 = new CardCon("Champion Stalker", 4, 3, "Desert Cards +4", "hero", 0, "boost desert 4", 99, true, "support", championStalker, desert, "desert", 0, 1, 0);
var desert24 = new CardCon("Stabber Conclave", 4, 3, "All enemies get -3 attack", "hero", 0, "supWeaken 3", 99, true, "support", stabberConclave, desert, "desert", 0, 1, 0);
var desert25 = new CardCon("Grumpeel", 2, 3, "Gain 2 gems", "hero", 0, "supGems 2", 99, true, "support", grumpeel, desert, "desert", 0, 1, 0);
var desert26 = new CardCon("Wandering Relic", 2, 3, "Gain 1 Desert Card", "hero", 0, "supCards 1", 99, true, "support", wanderingRelic, desert, "desert", 0, 1, 0);
var desert27 = new CardCon("Desert Madnado", 3, 3, "Your Next spells get +2", "hero", 0, "supAbilityBoost next 2", 99, true, "support", desertMadnado, desert, "desert", 0, 1, 0);
var desert28 = new CardCon("Bone Stalker", 3, 3, "Desert card gain grow 1 when played", "hero", 0, "supGrow desert 1", 99, true, "support", boneStalker, desert, "desert", 0, 1, 0);
var desert29 = new CardCon("Sand Snipp", 2, 3, "Decoy", "hero", 0, "supDecoy", 99, true, "support", sandSnipp, desert, "desert", 0, 1, 0);

var storm1 = new CardCon("Storm Crunch", 0, 6, "", "hero", 0, "", "", true, "stormlight", placeholderImg, storm, "storm", 0, 1, 0);
var storm2 = new CardCon("Static", 0, 4, "Stun", "hero", 0, "stun", "", true, "stormlight", placeholderImg, storm, "storm", 0, 1, 0);
var storm3 = new CardCon("Threatening Clouds", 0, 1, "Finesse 2. Deplete.", "hero", 0, "finesse 2", "deplete", true, "stormlight", placeholderImg, storm, "storm", 0, 1, 0);
var storm4 = new CardCon("Readjust", 0, 3, "Reclaim 2", "hero", 0, "reclaim 2", "", true, "stormlight", placeholderImg, storm, "storm", 0, 1, 0);
var storm5 = new CardCon("Rejuvination", 0, 0, "Reclaim 5", "hero", 0, "reclaim 5", "", true, "stormlight", placeholderImg, storm, "storm", 0, 1, 0);
var storm6 = new CardCon("Howling Gale", 0, 3, "Finesse. Reclaim 1.", "hero", 0, "finesse 1", "reclaim 1", true, "stormlight", placeholderImg, storm, "storm", 0, 1, 0);
var storm7 = new CardCon("Stinging Tide", 0, 1, "Stun. Poison 2.", "hero", 0, "poison 2", "stun", true, "stormlight", placeholderImg, storm, "storm", 0, 1, 0);
var storm8 = new CardCon("Crushing vortex", 0, 5, "Deplete", "hero", 0, "deplete", "", true, "stormlight", placeholderImg, storm, "storm", 0, 1, 0);
var storm9 = new CardCon("Lightning Charged", 0, 3, "Energy 5", "hero", 0, "energy 5", "", true, "stormlight", placeholderImg, storm, "storm", 0, 1, 0);
var storm10 = new CardCon("Thunder Clap", 0, 5, "Spooky 2", "hero", 0, "meter 2", "", true, "stormlight", placeholderImg, storm, "storm", 0, 1, 0);
var storm11 = new CardCon("Finishing Blow", 0, 4, "Finesse 3", "hero", 0, "finesse 3", "", true, "stormlight", placeholderImg, storm, "storm", 0, 1, 0);
var storm12 = new CardCon("Bitter Downpour", 0, 4, "Reclaim 2. Deplete", "hero", 0, "reclaim 2", "deplete", true, "stormlight", placeholderImg, storm, "storm", 0, 1, 0);
var storm13 = new CardCon("Thunderhead", 0, 2, "Stun. Magic +1", "hero", 0, "stun", "str 1", true, "stormlight", placeholderImg, storm, "storm", 0, 1, 0);
var storm14 = new CardCon("Recharge", 0, 2, "Decoy. Magic +1", "hero", 0, "decoy", "str 1", true, "stormlight", placeholderImg, storm, "storm", 0, 1, 0);
var storm15 = new CardCon("Dazed", 0, 3, "Stun. Next +2", "hero", 0, "stun", "next 2", true, "stormlight", placeholderImg, storm, "storm", 0, 1, 0);
var storm16 = new CardCon("Thunder Punch", 1, 9, "Stun the Enemy", "hero", 0, "stun", "", true, "stormlight", placeholderImg, storm, "storm", 0, 1, 0);
var storm17 = new CardCon("Converging Storm", 0, 4, "+2 For Each Storm Card", "hero", 0, "factionBoost 2", "", true, "stormlight", placeholderImg, storm, "storm", 0, 1, 0);
var storm18 = new CardCon("Hurricane Essence", 1, 1, "Magic +3", "hero", 0, "str 3", "", true, "stormlight", placeholderImg, storm, "storm", 0, 1, 0);
var storm19 = new CardCon("Delayed Shock", 1, 0, "Storm Scheme 2/Stun", "hero", 0, "scheme storm 2", "stun", true, "character", placeholderImg, storm, "storm", 0, 1, 0);
var storm20 = new CardCon("Treasure Storm", 4, 0, "Storm Scheme 4/Treasure", "hero", 0, "scheme storm 4", 10, true, "character", placeholderImg, storm, "storm", 0, 1, 0);

var storm21 = new CardCon("Lightning Bug", 2, 0, "Boost Storm 2", "hero", 0, "boost storm 2", 99, true, "support", lightningBug, storm, "storm", 0, 1, 0);
var storm22 = new CardCon("Static Glider", 3, 0, "Boost Storm 3", "hero", 0, "boost storm 3", 99, true, "support", staticGlider, storm, "storm", 0, 1, 0);
var storm23 = new CardCon("Great Shock Shark", 4, 0, "Boost Storm 4", "hero", 0, "boost storm 4", 99, true, "support", greatShockShark, storm, "storm", 0, 1, 0);
var storm24 = new CardCon("Shelter Thump", 2, 0, "Gain 2 Gems", "hero", 0, "supGems 2", 99, true, "support", shelterThump, storm, "storm", 0, 1, 0);
var storm25 = new CardCon("Shock Shark", 2, 0, "Gain 1 Storm Cards", "hero", 0, "supCards 1", 99, true, "support", placeholderImg, storm, "storm", 0, 1, 0);
var storm26 = new CardCon("Static Catcher", 3, 0, "Gain 3 Gems", "hero", 0, "supGems 3", 99, true, "support", staticCatcher, storm, "storm", 0, 1, 0);
var storm27 = new CardCon("Rain Wolf", 3, 0, "Gain 2 Energy Per Turn", "hero", 0, "supEnergy 2", 99, true, "support", rainWolf, storm, "storm", 0, 1, 0);
var storm28 = new CardCon("Schorched Tree Ghast", 2, 0, "Reclaim Cards +2", "hero", 0, "supAbilityBoost reclaim 2", 99, true, "support", scorchedTreeGhast, storm, "storm", 0, 1, 0);
var storm29 = new CardCon("Enlightened Rain Wolf", 4, 0, "Add Grow 1 to Storm Cards When Played and Betsy is the Greatest", "hero", 0, "supGrow storm 1", 99, true, "support", enlightenedRainWolf, storm, "storm", 0, 1, 0);

var mud1 = new CardCon("Mud Bath", 0, 6, "Heal 6", "hero", 0, "heal 6", "", true, "stormlight", placeholderImg, mud, "mud", 0, 1, 0);
var mud2 = new CardCon("Mud Blast", 0, 3, "Confuse", "hero", 0, "confuse", "", true, "stormlight", placeholderImg, mud, "mud", 0, 1, 0);
var mud3 = new CardCon("Stuck Muck", 0, 6, "Weaken 2", "hero", 0, "weaken 2", "", true, "stormlight", placeholderImg, mud, "mud", 0, 1, 0);
var mud4 = new CardCon("Tentacle Shackles", 0, 2, "Weaken 3", "hero", 0, "weaken 3", "", true, "stormlight", placeholderImg, mud, "mud", 0, 1, 0);
var mud5 = new CardCon("Sickening Shot", 0, 2, "Confuse. Poison 2", "hero", 0, "confuse", "poison 2", true, "stormlight", placeholderImg, mud, "mud", 0, 1, 0);
var mud6 = new CardCon("Drown in Filth", 0, 4, "Poison 3", "hero", 0, "poison 3", "", true, "stormlight", placeholderImg, mud, "mud", 0, 1, 0);
var mud7 = new CardCon("Sink Hole", 0, 1, "Poison 1. Weaken 1.", "hero", 0, "poison 1", "weaken 1", true, "stormlight", placeholderImg, mud, "mud", 0, 1, 0);
var mud8 = new CardCon("Magic Mud Helm", 0, 3, "Heal 5. Defense +1.", "hero", 0, "heal 5", "def 1", true, "stormlight", placeholderImg, mud, "mud", 0, 1, 0);
var mud9 = new CardCon("Glow Minerals", 0, 4, "Energy 4", "hero", 0, "energy 4", "", true, "stormlight", placeholderImg, mud, "mud", 0, 1, 0);
var mud10 = new CardCon("Murky Whispers", 0, 5, "Rumage 4", "hero", 0, "research 4", "", true, "stormlight", placeholderImg, mud, "mud", 0, 1, 0);
var mud11 = new CardCon("Spread Filth", 0, 5, "Poison 1 to 2 Enemies", "hero", 0, "poison 1", "poison 1", true, "stormlight", placeholderImg, mud, "mud", 0, 1, 0);
var mud12 = new CardCon("Swamp Power", 0, 2, "Grow 1. Heal 3", "hero", 0, "grow 1 15", "heal 3", true, "stormlight", placeholderImg, mud, "mud", 0, 1, 0);
var mud13 = new CardCon("Duck", 0, 0, "Confuse. Magic +1.", "hero", 0, "confuse", "str 1", true, "stormlight", placeholderImg, mud, "mud", 0, 1, 0);
var mud14 = new CardCon("Transforming Gem", 0, 7, "Reclaim 2", "hero", 0, "reclaim 2", "", true, "stormlight", placeholderImg, mud, "mud", 0, 1, 0);
var mud15 = new CardCon("Soak Minerals", 0, 2, "Heal 10", "hero", 0, "heal 10", "", true, "stormlight", placeholderImg, mud, "mud", 0, 1, 0);
var mud16 = new CardCon("Steal Essense", 0, 8, "Poison 1. Heal 4.", "hero", 0, "poison 1", "heal 4", true, "stormlight", placeholderImg, mud, "mud", 0, 1, 0);
var mud17 = new CardCon("Swamp Stomp", 1, 9, "Confuse", "hero", 0, "confuse", "", true, "stormlight", placeholderImg, mud, "mud", 0, 1, 0);
var mud18 = new CardCon("Inevitable Decay", 1, 1, "Poison 3. Poison 3", "hero", 0, "poison 3", "poison 3", true, "stormlight", placeholderImg, mud, "mud", 0, 1, 0);
var mud19 = new CardCon("Fossilized Prize", 2, 0, "Mud Scheme 2/Treasure", "hero", 0, "scheme mud 2", 6, true, "stormlight", placeholderImg, mud, "mud", 0, 1, 0);
var mud20 = new CardCon("Never Escape", 4, 0, "Mud Scheme 5/20", "hero", 0, "scheme mud 5", 20, true, "stormlight", placeholderImg, mud, "mud", 0, 1, 0);

var mud21 = new CardCon("Warthus", 2, 0, "Boost Mud 2", "hero", 0, "boost mud 2", 99, true, "support", warthus, mud, "mud", 0, 1, 0);
var mud22 = new CardCon("Muckster", 3, 0, "Boost Mud 3", "hero", 0, "boost mud 3", 99, true, "support", muckster, mud, "mud", 0, 1, 0);
var mud23 = new CardCon("Archmage Muckster", 4, 0, "Boost Mud 4", "hero", 0, "boost mud 4", 99, true, "support", archmageMuckster, mud, "mud", 0, 1, 0);
var mud24 = new CardCon("Bog Boar", 2, 0, "Poison 2 Every Turn", "hero", 0, "supPoison 2", 99, true, "support", bogBoar, mud, "mud", 0, 1, 0);
var mud25 = new CardCon("Toxic Roller", 3, 0, "Poison 4 Every Turn", "hero", 0, "supPoison 4", 99, true, "support", toxicRoller, mud, "mud", 0, 1, 0);
var mud26 = new CardCon("Lesser Galope", 2, 0, "Gain 2 Gems", "hero", 0, "supGems 2", 99, true, "support", lesserGalope, mud, "mud", 0, 1, 0);
var mud27 = new CardCon("Sominus", 2, 0, "Gain 1 Mud Card", "hero", 0, "supCards 1", 99, true, "support", sominus, mud, "mud", 0, 1, 0);
var mud28 = new CardCon("Duchess Warthus", 4, 0, "Mud Card gain +1 Power When Played", "hero", 0, "supGrow mud 1", 99, true, "support", duchessWarthus, mud, "mud", 0, 1, 0);
var mud29 = new CardCon("Greater Galope", 3, 0, "Poison Cards gain +1 Power", "hero", 0, "supAbilityBoost poison 1", 99, true, "support", greaterGalope, mud, "mud", 0, 1, 0);

var spooky1 = new CardCon("Gand of Fleebs", 0, 0, "", "hero", 0, "", 99, true, "support", gangOfFleebs, spooky, "spooky", 0, 1, 0);

var addCard1 = new CardCon("Roast", 0, 8, "Deal 8", "hero", 0, "remove", "", false, "stormlight", placeholderImg, fire, "fire", 0);
var addCard2 = new CardCon("Earth Shield", 0, 3, "Shield 7", "hero", 0, "shield 7", "remove", false, "stormlight", placeholderImg, earth, "earth", 0);
var addCard3 = new CardCon("Flurry", 0, 4, "Extra Attack", "hero", 0, "extra 1", "remove", false, "stormlight", placeholderImg, wind, "wind", 0);
var addCard4 = new CardCon("Drain", 0, 5, "Heal 3", "hero", 0, "heal 3", "remove", false, "stormlight", placeholderImg, water, "water", 0);
var addCard5 = new CardCon("Energy Blast", 0, 4, "Gain 2 Energy", "hero", 0, "energy 2", "remove", false, "stormlight", placeholderImg, placeholderImg, "neutral", 0, 0);

var transform1 = new CardCon("Crystal", 0, 3, "Woot", "hero", 0, "", "", false, "stormlight",placeholderImg, mud, "mud", 0, 0, 0);

const wobbledukStats = {
	name: "Wobbleduk",
	hp: 6,
	attack: 2,
	sabotoge: 0,
	pointValue: 50,
	image: wobbleduk,
	sabCard: sabotoge1,
	element: earth,
	supCard: earth16
};

const angryWobbledukStats = {
	name: "Mean Wobbleduk",
	hp: 6,
	attack: 2,
	sabotoge: 1,
	pointValue: 50,
	image: wobbleduk,
	sabCard: sabotoge1,
	element: earth,
	supCard: earth16
};

const kingWobbledukStats = {
	name: "King Wobbleduk",
	hp: 20,
	attack: 4,
	sabotoge: 3,
	pointValue: 700,
	image: kingWobbleduk,
	sabCard: sabotoge1,
	element: earth,
	supCard: earth23
};

const primtreeStats = {
	name: "Primtree",
	hp: 7,
	attack: 2,
	sabotoge: 0,
	pointValue: 150,
	image: primtree,
	sabCard: sabotoge1,
	element: earth,
	supCard: earth22
};

const primtreeDefenderStats = {
	name: "Primtree Defender",
	hp: 10,
	attack: 2,
	sabotoge: 1,
	pointValue: 150,
	image: toughPrimtree,
	sabCard: sabotoge1,
	element: earth,
	supCard: earth28
};

const primtreeRoyalStats = {
	name: "Jewel Primtree",
	hp: 9,
	attack: 3,
	sabotoge: 2,
	pointValue: 150,
	image: jewelPrimtree,
	sabCard: sabotoge1,
	element: earth,
	supCard: earth26
};

const queenPrimtreeStats = {
	name: "Queen Primtree",
	hp: 20,
	attack: 4,
	sabotoge: 4,
	pointValue: 150,
	image: queenPrimtree,
	sabCard: sabotoge1,
	element: earth,
	supCard: earth27
};

const rockFairyStats = {
	name: "Rock Fairy",
	hp: 7,
	attack: 1,
	sabotoge: 1,
	pointValue: 100,
	image: rockFairy,
	sabCard: sabotoge1,
	element: earth,
	supCard: earth21
};

const steedStats = {
	name: "Steed",
	hp: 5,
	attack: 2,
	sabotoge: 1,
	pointValue: 100,
	image: steed,
	sabCard: sabotoge1,
	element: earth,
	supCard: earth24
};

const stoneStriderStats = {
	name: "Stone Strider",
	hp: 9,
	attack: 2,
	sabotoge: 0,
	pointValue: 100,
	image: stoneStrider,
	sabCard: sabotoge1,
	element: earth,
	supCard: earth25
}

const morpStats = {
	name: "Morp",
	hp: 3,
	attack: 3,
	sabotoge: 1,
	pointValue: 100,
	image: morp,
	sabCard: sabotoge4,
	element: fire,
	supCard: fire23
};

const emberAdderStats = {
	name: "Ember Adder",
	hp: 7,
	attack: 2,
	sabotoge: 0,
	pointValue: 100,
	image: emberAdder,
	sabCard: sabotoge1,
	element: fire,
	supCard: fire24
};

const flameCrawlerStats = {
	name: "Flame Crawler",
	hp: 10,
	attack: 2,
	sabotoge: 0,
	pointValue: 100,
	image: flameCrawler,
	sabCard: sabotoge1,
	element: fire,
	supCard: fire29,
};

const flameScrablerStats = {
	name: "Flame Scrabler",
	hp: 12,
	attack: 4,
	sabotoge: 1,
	pointValue: 100,
	image: flameScrabler,
	sabCard: sabotoge1,
	element: fire,
	supCard: fire21
};

const tipperStats = {
	name: "Tipper",
	hp: 8,
	attack: 3,
	sabotoge: 1,
	pointValue: 100,
	image: tipper,
	sabCard: sabotoge1,
	element: fire,
	supCard: fire26
};

const grandTipperStats = {
	name: "Grand Tipper",
	hp: 20,
	attack: 4,
	sabotoge: 3,
	pointValue: 100,
	image: grandTipper,
	sabCard: sabotoge1,
	element: fire,
	supCard: fire27
};

const kragmupStats = {
	name: "kragmup",
	hp: 6,
	attack: 2,
	sabotoge: 1,
	pointValue: 100,
	image: kragmup,
	sabCard: sabotoge1,
	element: fire,
	supCard: fire25
};

const broodmotherStats = {
	name: "Broodmother",
	hp: 21,
	attack: 3,
	sabotoge: 3,
	pointValue: 100,
	image: broodmother,
	sabCard: sabotoge1,
	element: fire,
	supCard: fire2
};

const pheonixWyrmStats = {
	name: "Pheonix Wyrm",
	hp: 9,
	attack: 2,
	sabotoge: 2,
	pointValue: 100,
	image: pheonixWyrm,
	sabCard: sabotoge1,
	element: fire,
	supCard: fire28
};

const budleFairyStats = {
	name: "Budle Fairy",
	hp: 5,
	attack: 3,
	sabotoge: 4,
	pointValue: 500,
	image: budleFairy,
	sabCard: sabotoge2,
	element: water,
	supCard: water23
};

const superBudleFairyStats = {
	name: "Super Budle Fairy",
	hp: 20,
	attack: 5,
	sabotoge: 3,
	pointValue: 700,
	image: superBudleFairy,
	sabCard: sabotoge3,
	element: water,
	supCard: water25
};

const ghostSharkStats = {
	name: "Ghost Shark",
	hp: 7,
	attack: 3,
	sabotoge: 1,
	pointValue: 100,
	image: ghostShark,
	sabCard: sabotoge1,
	element: water,
	supCard: water26
};

const marshSlapperStats = {
	name: "Marsh Slapper",
	hp: 9,
	attack: 3,
	sabotoge: 0,
	pointValue: 100,
	image: marshSlapper,
	sabCard: sabotoge1,
	element: water,
	supCard: water27
};

const kingSlapperStats = {
	name: "King Slapper",
	hp: 25,
	attack: 4,
	sabotoge: 3,
	pointValue: 100,
	image: kingSlapper,
	sabCard: sabotoge1,
	element: water,
	supCard: water22
};

const albinoSlapperStats = {
	name: "Albino Slapper",
	hp: 9,
	attack: 3,
	sabotoge: 1,
	pointValue: 200,
	image: albinoSlapper,
	sabCard: sabotoge1,
	element: water,
	supCard: water24
};

const trenchThumpStats = {
	name: "Trench Thump",
	hp: 6,
	attack: 2,
	sabotoge: 0,
	pointValue: 100,
	image: trenchThump,
	sabCard: sabotoge1,
	element: water,
	supCard: water28
};

const caveThumpStats = {
	name: "Cave Thump",
	hp: 10,
	attack: 3,
	sabotoge: 1,
	pointValue: 100,
	image: caveThump,
	sabCard: sabotoge1,
	element: water,
	supCard: water29
};

const coralThumpStats = {
	name: "Coral Thump",
	hp: 8,
	attack: 2,
	sabotoge: 0,
	pointValue: 100,
	image: coralThump,
	sabCard: sabotoge1,
	element: water,
	supCard: water21
};

const madnadoStats = {
	name: "Madnado",
	hp: 4,
	attack: 4,
	sabotoge: 2,
	pointValue: 250,
	image: madnado,
	sabCard: sabotoge3,
	element: wind,
	supCard: wind29
};

const empressMadnadoStats = {
	name: "Empress Madnado",
	hp: 15,
	attack: 5,
	sabotoge: 2,
	pointValue: 250,
	image: empressMadnado,
	sabCard: sabotoge3,
	element: wind,
	supCard: wind22
};

const windleFairyStats = {
	name: "Windle Fairy",
	hp: 14,
	attack: 1,
	sabotoge: 0,
	pointValue: 100,
	image: windleFairy,
	sabCard: sabotoge1,
	element: wind,
	supCard: wind21
};

const flooferStats = {
	name: "Floofer",
	hp: 20,
	attack: 1,
	sabotoge: 0,
	pointValue: 100,
	image: floofer,
	sabCard: sabotoge1,
	element: wind,
	supCard: wind26
};

const windFlitterStats = {
	name: "Wind Flitter",
	hp: 6,
	attack: 1,
	sabotoge: 0,
	pointValue: 100,
	image: windFlitter,
	sabCard: sabotoge1,
	element: wind,
	supCard: wind23
};

const maclawStats = {
	name: "Maclaw",
	hp: 8,
	attack: 3,
	sabotoge: 1,
	pointValue: 300,
	image: maclaw,
	sabCard: sabotoge1,
	element: wind,
	supCard: wind27
};

const spookawStats = {
	name: "Spookaw",
	hp: 6,
	attack: 2,
	sabotoge: 2,
	pointValue: 100,
	image: spookaw,
	sabCard: sabotoge1,
	element: wind,
	supCard: wind28
};

const alphaSpookawStats = {
	name: "Alpha Spookaw",
	hp: 18,
	attack: 4,
	sabotoge: 2,
	pointValue: 100,
	image: alphaSpookaw,
	sabCard: sabotoge1,
	element: wind,
	supCard: wind25
};

const raaHowlerStats = {
	name: "Raa Howler",
	hp: 7,
	attack: 2,
	sabotoge: 2,
	pointValue: 100,
	image: raaHowler,
	sabCard: sabotoge1,
	element: wind,
	supCard: wind24
};

const boneStalkerStats = {
	name: "Bone Stalker",
	hp: 10,
	attack: 3,
	sabotoge: 1,
	pointValue: 150,
	image: boneStalker,
	sabCard: sabotoge1,
	element: desert,
	supCard: desert18
};

const championStalkerStats = {
	name: "Champion Stalker",
	hp: 28,
	attack: 6,
	sabotoge: 1,
	pointValue: 150,
	image: championStalker,
	sabCard: sabotoge1,
	element: desert,
	supCard: desert13
};

const desertMadnadoStats = {
	name: "Desert Madnado",
	hp: 7,
	attack: 4,
	sabotoge: 2,
	pointValue: 150,
	image: desertMadnado,
	sabCard: sabotoge1,
	element: desert,
	supCard: desert17
};

const sandSnippStats = {
	name: "Sand Snipp",
	hp: 7,
	attack: 2,
	sabotoge: 0,
	pointValue: 150,
	image: sandSnipp,
	sabCard: sabotoge1,
	element: desert,
	supCard: desert19
};

const predatorSnippStats = {
	name: "Predator Snipp",
	hp: 7,
	attack: 3,
	sabotoge: 3,
	pointValue: 150,
	image: predatorSnipp,
	sabCard: sabotoge1,
	element: desert,
	supCard: desert12
};

const grumpeelStats = {
	name: "Grumpeel",
	hp: 12,
	attack: 3,
	sabotoge: 0,
	pointValue: 150,
	image: grumpeel,
	sabCard: sabotoge1,
	element: desert,
	supCard: desert15
};

const duneStabberStats = {
	name: "Dune Stabber",
	hp: 9,
	attack: 5,
	sabotoge: 1,
	pointValue: 100,
	image: duneStabber,
	sabCard: sabotoge1,
	element: desert,
	supCard: desert11
};

const stabberConclaveStats = {
	name: "Stabber Conclave",
	hp: 27,
	attack: 5,
	sabotoge: 3,
	pointValue: 100,
	image: stabberConclave,
	sabCard: sabotoge1,
	element: desert,
	supCard: desert14
};

const wanderingRelicStats = {
	name: "Wandering Relic",
	hp: 6,
	attack: 1,
	sabotoge: 0,
	pointValue: 100,
	image: wanderingRelic,
	sabCard: sabotoge1,
	element: desert,
	supCard: desert16
};

const emberiteStats = {
	name: "Emberite",
	hp: 7,
	attack: 2,
	sabotoge: 2,
	pointValue: 100,
	image: emberite,
	sabCard: sabotoge1,
	element: lava,
	supCard: lava,
	supCard: lava15
};

const nutriteStats = {
	name: "Nutrite",
	hp: 7,
	attack: 3,
	sabotoge: 1,
	pointValue: 100,
	image: nutrite,
	sabCard: sabotoge1,
	element: lava,
	supCard: lava16
};

const lavaWalkerStats = {
	name: "Lava Walker",
	hp: 12,
	attack: 2,
	sabotoge: 2,
	pointValue: 100,
	image: lavaWalker,
	sabCard: sabotoge1,
	element: lava,
	supCard: lava12
};

const moltasaurusStats = {
	name: "Moltasaurus",
	hp: 9,
	attack: 5,
	sabotoge: 1,
	pointValue: 100,
	image: moltasaurus,
	sabCard: sabotoge1,
	element: lava,
	supCard: lava13
};

const moltasaurusRexStats = {
	name: "Moltasaurus Rex",
	hp: 30,
	attack: 4,
	sabotoge: 2,
	pointValue: 100,
	image: moltasaurusRex,
	sabCard: sabotoge1,
	element: lava,
	supCard: lava18
};

const lavaLordWalkerStats = {
	name: "Lava Lord Walker",
	hp: 34,
	attack: 3,
	sabotoge: 1,
	pointValue: 100,
	image: lavaLordWalker,
	sabCard: sabotoge1,
	element: lava,
	supCard: lava14
};

const trekapodStats = {
	name: "Trekapod",
	hp: 8,
	attack: 2,
	sabotoge: 2,
	pointValue: 100,
	image: trekapod,
	sabCard: sabotoge1,
	element: lava,
	supCard: lava17
};

const volcanoTramplerStats = {
	name: "Volcano Trampler",
	hp: 12,
	attack: 3,
	sabotoge: 1,
	pointValue: 100,
	image: volcanoTrampler,
	sabCard: sabotoge1,
	element: lava,
	supCard: lava11
};

const walkingEruptionStats = {
	name: "Walking Eruption",
	hp: 17,
	attack: 2,
	sabotoge: 1,
	pointValue: 100,
	image: walkingEruption,
	sabCard: sabotoge1,
	element: lava,
	supCard: lava19
};

const bogBoarStats = {
	name: "Bog Boar",
	hp: 10,
	attack: 3,
	sabotoge: 3,
	pointValue: 100,
	image: bogBoar,
	sabCard: sabotoge1,
	element: mud,
	supCard: mud24
};

const greaterGalopeStats = {
	name: "Greater Galope",
	hp: 14,
	attack: 2,
	sabotoge: 2,
	pointValue: 100,
	image: greaterGalope,
	sabCard: sabotoge1,
	element: mud,
	supCard: mud29
};

const lesserGalopeStats = {
	name: "Lesser Galope",
	hp: 13,
	attack: 3,
	sabotoge: 1,
	pointValue: 100,
	image: lesserGalope,
	sabCard: sabotoge1,
	element: mud,
	supCard: mud26
};

const mucksterStats = {
	name: "Muckster",
	hp: 9,
	attack: 4,
	sabotoge: 3,
	pointValue: 100,
	image: muckster,
	sabCard: sabotoge1,
	element: mud,
	supCard: mud22
};

const archmageMucksterStats = {
	name: "Archmage Muckster",
	hp: 23,
	attack: 7,
	sabotoge: 3,
	pointValue: 100,
	image: archmageMuckster,
	sabCard: sabotoge1,
	element: mud,
	supCard: mud23
};

const sominusStats = {
	name: "Sominus",
	hp: 5,
	attack: 1,
	sabotoge: 1,
	pointValue: 100,
	image: sominus,
	sabCard: sabotoge1,
	element: mud,
	supCard: mud27
};

const toxicRollerStats = {
	name: "Toxic Roller",
	hp: 9,
	attack: 3,
	sabotoge: 2,
	pointValue: 100,
	image: toxicRoller,
	sabCard: sabotoge1,
	element: mud,
	supCard: mud25
};

const warthusStats = {
	name: "Warthus",
	hp: 20,
	attack: 1,
	sabotoge: 0,
	pointValue: 100,
	image: warthus,
	sabCard: sabotoge1,
	element: mud,
	supCard: mud21
};

const duchessWarthusStats = {
	name: "Duchess Warthus",
	hp: 46,
	attack: 3,
	sabotoge: 2,
	pointValue: 100,
	image: duchessWarthus,
	sabCard: sabotoge1,
	element: mud,
	supCard: mud28
};

const staticGliderStats = {
	name: "Static Glider",
	hp: 8,
	attack: 3,
	sabotoge: 0,
	pointValue: 100,
	image: staticGlider,
	sabCard: sabotoge1,
	element: storm,
	supCard: storm22
};

const staticCatcherStats = {
	name: "Static Catcher",
	hp: 10,
	attack: 3,
	sabotoge: 1,
	pointValue: 100,
	image: staticCatcher,
	sabCard: sabotoge1,
	element: storm,
	supCard: storm26
};

const shockSharkStats = {
	name: "Shock Shark",
	hp: 9,
	attack: 5,
	sabotoge: 0,
	pointValue: 100,
	image: shockShark,
	sabCard: sabotoge1,
	element: storm,
	supCard: storm25
};

const greatShockSharkStats = {
	name: "Great Shock Shark",
	hp: 28,
	attack: 6,
	sabotoge: 2,
	pointValue: 100,
	image: greatShockShark,
	sabCard: sabotoge1,
	element: storm,
	supCard: storm23
};

const lightningBugStats = {
	name: "Lightning Bug",
	hp: 6,
	attack: 3,
	sabotoge: 2,
	pointValue: 100,
	image: lightningBug,
	sabCard: sabotoge1,
	element: storm,
	supCard: storm21
};

const scorchedTreeGhastStats = {
	name: "Schorched Tree Ghast",
	hp: 17,
	attack: 2,
	sabotoge: 2,
	pointValue: 100,
	image: scorchedTreeGhast,
	sabCard: sabotoge1,
	element: storm,
	supCard: storm28
};

const shelterThumpStats = {
	name: "Shelter Thump",
	hp: 14,
	attack: 2,
	sabotoge: 1,
	pointValue: 100,
	image: shelterThump,
	sabCard: sabotoge1,
	element: storm,
	supCard: storm24
};

const rainWolfStats = {
	name: "Rain Wolf",
	hp: 12,
	attack: 4,
	sabotoge: 3,
	pointValue: 100,
	image: rainWolf,
	sabCard: sabotoge1,
	element: storm,
	supCard: storm27
};

const enlightenedRainWolfStats = {
	name: "Enlightened Rain Wolf",
	hp: 30,
	attack: 5,
	sabotoge: 4,
	pointValue: 100,
	image: enlightenedRainWolf,
	sabCard: sabotoge1,
	element: storm,
	supCard: storm29
};

const borgusStats = {
	name: "Borgus",
	hp: 17,
	attack: 5,
	sabotoge: 2,
	pointValue: 200,
	image: borgus,
	sabCard: sabotoge1,
	element: spooky
};

const misterBorgusStats = {
	name: "Mister Borgus",
	hp: 50,
	attack: 6,
	sabotoge: 2,
	pointValue: 200,
	image: misterBorgus,
	sabCard: sabotoge1,
	element: spooky
};

const gangOfFleebsStats = {
	name: "Gang of Fleebs",
	hp: 4,
	attack: 4,
	sabotoge: 1,
	pointValue: 250,
	image: gangOfFleebs,
	sabCard: sabotoge1,
	element: spooky,
	supCard: spooky1
};

const purpleKreepStats = {
	name: "Purple Kreep",
	hp: 17,
	attack: 4,
	sabotoge: 3,
	pointValue: 150,
	image: purpleKreep,
	sabCard: sabotoge1,
	element: spooky
};

const reacherStats = {
	name: "Reacher",
	hp: 21,
	attack: 5,
	sabotoge: 0,
	pointValue: 150,
	image: reacher,
	sabCard: sabotoge1,
	element: spooky
};

const rundarrStats = {
	name: "Rundarr",
	hp: 12,
	attack: 3,
	sabotoge: 1,
	pointValue: 100,
	image: rundarr,
	sabCard: sabotoge1,
	element: spooky
};

const sinisterSloopStats = {
	name: "Sinister Sloop",
	hp: 22,
	attack: 6,
	sabotoge: 1,
	pointValue: 100,
	image: sinisterSloop,
	sabCard: sabotoge1,
	element: spooky
};

const soulShredderStats = {
	name: "Soul Shredder",
	hp: 20,
	attack: 8,
	sabotoge: 2,
	pointValue: 100,
	image: soulShredder,
	sabCard: sabotoge1,
	element: spooky
}

const superPincherStats = {
	name: "Super Pincher",
	hp: 9,
	attack: 3,
	sabotoge: 6,
	pointValue: 100,
	image: superPincher,
	sabCard: sabotoge1,
	element: spooky
}

const toogerStats = {
	name: "Tooger",
	hp: 100,
	attack: 5,
	sabotoge: 5,
	pointValue: 100,
	image: tooger,
	sabCard: sabotoge1,
	element: spooky
}

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
			createEnemy = primtreeDefenderStats;
			return;
		}else if(randEnemyNum < 340){
			createEnemy = rockFairyStats;
			return;
		}else if(randEnemyNum < 380){
			createEnemy = primtreeRoyalStats;
			return;
		}else if(randEnemyNum < 450){
			createEnemy = stoneStriderStats;
			return;
		}else if(randEnemyNum < 497){
			createEnemy = steedStats;
			return;
		}else{
			createEnemy = gangOfFleebsStats;
		}
	}else if(stageComplete === 3){
		numberOfEnemies = 2;
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
		numberOfEnemies = levelEnemyNum;
		if(randEnemyNum < 180){
			createEnemy = emberAdderStats;
			return;
		}else if(randEnemyNum < 255){
			createEnemy = kragmupStats;
			return;
		}else if(randEnemyNum < 330){
			createEnemy = flameCrawlerStats;
			return;
		}else if(randEnemyNum < 340){
			createEnemy = flameScrablerStats;
			return;
		}else if(randEnemyNum < 380){
			createEnemy = tipperStats;
			return;
		}else if(randEnemyNum < 450){
			createEnemy = morpStats;
			return;
		}else if(randEnemyNum < 497){
			createEnemy = pheonixWyrmStats;
			return;
		}else{
			createEnemy = gangOfFleebsStats;
		}
	}else if(stageComplete === 3){
		numberOfEnemies = 1;
		if(randEnemyNum < 250){
			createEnemy = broodmotherStats;
			return;
		}else{
			createEnemy = grandTipperStats;
		}
	}
}

function levelWaterDistribution(randEnemyNum){
	numberOfStages = 4;
	if(stageComplete < 3){
		numberOfEnemies = levelEnemyNum;
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
			createEnemy = superBudleFairyStats;
			return;
		}else{
			createEnemy = kingSlapperStats;
		}
	}
}

function levelWindDistribution(randEnemyNum){
	numberOfStages = 4;
	if(stageComplete < 3){
		numberOfEnemies = levelEnemyNum;
		if(randEnemyNum < 180){
			createEnemy = maclawStats;
			return;
		}else if(randEnemyNum < 255){
			createEnemy = madnadoStats;
			return;
		}else if(randEnemyNum < 330){
			createEnemy = raaHowlerStats;
			return;
		}else if(randEnemyNum < 340){
			createEnemy = windleFairyStats;
			return;
		}else if(randEnemyNum < 380){
			createEnemy = flooferStats;
			return;
		}else if(randEnemyNum < 450){
			createEnemy = spookawStats;
			return;
		}else if(randEnemyNum < 497){
			createEnemy = windFlitterStats;
			return;
		}else{
			createEnemy = gangOfFleebsStats;
		}
	}else if(stageComplete === 3){
		numberOfEnemies = 1;
		if(randEnemyNum < 250){
			createEnemy = empressMadnadoStats;
			return;
		}else{
			createEnemy = alphaSpookawStats;
		}
	}
}

function levelDesertDistribution(randEnemyNum){
	numberOfStages = 4;
	if(stageComplete < 3){
		numberOfEnemies = levelEnemyNum;
		if(randEnemyNum < 180){
			createEnemy = sandSnippStats;
			return;
		}else if(randEnemyNum < 255){
			createEnemy = duneStabberStats;
			return;
		}else if(randEnemyNum < 330){
			createEnemy = desertMadnadoStats;
			return;
		}else if(randEnemyNum < 340){
			createEnemy = wanderingRelicStats;
			return;
		}else if(randEnemyNum < 380){
			createEnemy = grumpeelStats;
			return;
		}else if(randEnemyNum < 450){
			createEnemy = boneStalkerStats;
			return;
		}else if(randEnemyNum < 497){
			createEnemy = predatorSnippStats;
			return;
		}else{
			createEnemy = gangOfFleebsStats;
		}
	}else if(stageComplete === 3){
		numberOfEnemies = 1;
		if(randEnemyNum < 250){
			createEnemy = championStalkerStats;
			return;
		}else{
			createEnemy = stabberConclaveStats;
		}
	}
}

function levelLavaDistribution(randEnemyNum){
	numberOfStages = 4;
	if(stageComplete < 3){
		numberOfEnemies = levelEnemyNum;
		if(randEnemyNum < 180){
			createEnemy = emberiteStats;
			return;
		}else if(randEnemyNum < 255){
			createEnemy = lavaWalkerStats;
			return;
		}else if(randEnemyNum < 330){
			createEnemy = trekapodStats;
			return;
		}else if(randEnemyNum < 340){
			createEnemy = nutriteStats;
			return;
		}else if(randEnemyNum < 380){
			createEnemy = moltasaurusStats;
			return;
		}else if(randEnemyNum < 450){
			createEnemy = volcanoTramplerStats;
			return;
		}else if(randEnemyNum < 497){
			createEnemy = walkingEruptionStats;
			return;
		}else{
			createEnemy = gangOfFleebsStats;
		}
	}else if(stageComplete === 3){
		numberOfEnemies = 1;
		if(randEnemyNum < 250){
			createEnemy = lavaLordWalkerStats;
			return;
		}else{
			createEnemy = moltasaurusRexStats;
		}
	}
}

function levelMudDistribution(randEnemyNum){
	numberOfStages = 4;
	if(stageComplete < 3){
		numberOfEnemies = levelEnemyNum;
		if(randEnemyNum < 180){
			createEnemy = bogBoarStats;
			return;
		}else if(randEnemyNum < 255){
			createEnemy = toxicRollerStats;
			return;
		}else if(randEnemyNum < 330){
			createEnemy = mucksterStats;
			return;
		}else if(randEnemyNum < 340){
			createEnemy = sominusStats;
			return;
		}else if(randEnemyNum < 380){
			createEnemy = warthusStats;
			return;
		}else if(randEnemyNum < 450){
			createEnemy = greaterGalopeStats;
			return;
		}else if(randEnemyNum < 497){
			createEnemy = lesserGalopeStats;
			return;
		}else{
			createEnemy = gangOfFleebsStats;
		}
	}else if(stageComplete === 3){
		numberOfEnemies = 1;
		if(randEnemyNum < 250){
			createEnemy = archmageMucksterStats;
			return;
		}else{
			createEnemy = duchessWarthusStats;
		}
	}
}

function levelStormDistribution(randEnemyNum){
	numberOfStages = 4;
	if(stageComplete < 3){
		numberOfEnemies = levelEnemyNum;
		if(randEnemyNum < 180){
			createEnemy = shockSharkStats;
			return;
		}else if(randEnemyNum < 255){
			createEnemy = staticGliderStats;
			return;
		}else if(randEnemyNum < 330){
			createEnemy = lightningBugStats;
			return;
		}else if(randEnemyNum < 340){
			createEnemy = staticCatcherStats;
			return;
		}else if(randEnemyNum < 380){
			createEnemy = shelterThumpStats;
			return;
		}else if(randEnemyNum < 450){
			createEnemy = rainWolfStats;
			return;
		}else if(randEnemyNum < 497){
			createEnemy = scorchedTreeGhastStats;
			return;
		}else{
			createEnemy = gangOfFleebsStats;
		}
	}else if(stageComplete === 3){
		numberOfEnemies = 1;
		if(randEnemyNum < 250){
			createEnemy = enlightenedRainWolfStats;
			return;
		}else{
			createEnemy = greatShockSharkStats;
		}
	}
}

function levelTowerDistribution(randEnemyNum){
	numberOfStages = 4;
	if(stageComplete < 3){
		numberOfEnemies = 3;
		if(randEnemyNum < 180){
			createEnemy = reacherStats;
			return;
		}else if(randEnemyNum < 255){
			createEnemy = borgusStats;
			return;
		}else if(randEnemyNum < 330){
			createEnemy = purpleKreepStats;
			return;
		}else if(randEnemyNum < 340){
			createEnemy = rundarrStats;
			return;
		}else if(randEnemyNum < 380){
			createEnemy = sinisterSloopStats;
			return;
		}else if(randEnemyNum < 450){
			createEnemy = soulShredderStats;
			return;
		}else if(randEnemyNum < 497){
			createEnemy = superPincherStats;
			return;
		}else{
			createEnemy = gangOfFleebsStats;
		}
	}else if(stageComplete === 3){
		numberOfEnemies = 1;
		if(randEnemyNum < 250){
			createEnemy = toogerStats;
			return;
		}else{
			createEnemy = misterBorgusStats;
		}
	}
}

function EnemyCon(name, hp, attack, sabotoge, pointValue, image, sabCard, element, supCard){
	this.name = name;
	this.hp = hp;
	this.attack = attack;
	this.sabotoge = sabotoge;
	this.pointValue = pointValue;
	this.image = image;
	this.sabCard = sabCard;
	this.element = element;
	this.supCard = supCard;
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

var currentEnemy = 4;
var playerHero = new HeroCon("Youber", 50, 0, 3, 0, youber, true);
var gameMode = "marathon";
var level = 0;
var stageComplete = 0;
var currentHeroPostion = 0;
var enemyNumber = 0;
var cardAbilityNum = 1;
var factionBoost = 0;
var itemArray = [rustySword, battleSpear, shardblade, leatherPads, parshendiCarapace, shardplate];
var enemyArray = [];
var cardArray = [basic1, basic2, basic3, basic4, basic14, basic6, basic7, basic8, basic18];
var cardArray2 = [];
var recruitArray = [];
var collectionArray = [basic1, basic2, basic3, basic4, basic14, basic6, basic7, basic8, basic18];
var cardFrames = [];
var elementOrbs = [];
var multiplier = 1;
var allies = [];
var meterArray = [meter0, meter1, meter2, meter3, meter4, meter5, meter6, meter7, meter8, meter9, meter10, meter11, meter12];
var levelsBeaten = ["tutorial"];
var keyWordList = [{keyword: "Shield", description: "Shield blocks enemy damage and sabotoges."}, {keyword: "Purge", description: "Removes an enemy sabotoge from your deck."}, {keyword: "Weaken", description: "Reduces an enemies strength"}, {keyword: "Exhausted", description: "Enemies attack twice in a row"}, {keyword: "Stun", description: "Stunned enemies miss their next attack"}, {keyword: "Poison", description: "Damage delt at the end of the turn"}, {keyword: "Confuse", description: "Confused enemies attack a random enemy"}, {keyword: "Grow", description: "The card gains power each time it is used"}, {keyword: "Scheme", description: "Schemes are played to one of your support areas and then are charged up over time providing an effect once completed"}, {keyword: "Heal", description: "Restore health to your character"}, {keyword: "Reclaim", description: "Increase the power of all enemy sabotoges in your deck"}, {keyword: "Int", description: "How many cards your draw when attacking"}, {keyword: "Def", description: "The number of shields you have at the start of every turn."}, {keyword: "Str", description: "Added damage to each attack"}, {keyword: "Rummage", description: "Choose a card to be replaced by a random card from your deck."}, {keyword: "Transform", description: "Change your stats into another creatures. Once your hp falls to 0 you regain your previous stats."}, {keyword: "multiply", description: "Double the damage you would deal this turn."}, {keyword: "Decoy", description: "Avoid all sabotoges this turn."}, {keyword: "Energy", description: "Gain energy to use for other purposes."}, {keyword: "Next", description: "Add power to the next card you choose."}, {keyword: "Add Card", description: "Shuffle a number of new cards into your deck."}, {keyword: "Remove", description: "The card gets removed from your deck after you select it"}, {keyword: "Extra", description: "Attack again after this one."}, {keyword: "Deplete", description: "Remove a sabotoge from the selected enemy."}, {keyword: "Boost", description: "All card of the selected type gain extra power."}, {keyword: "Spook", description: "The enemy will recieve 1.5x damage while it is spooked."}, {keyword: "Transform", description: "Turn an emeny sabotoge in your deck into another card."}, {keyword: "All", description: "Deal damage to all enemies."}];
var finesseAttack; 
var levelEnemyNum = 2;

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
			infoScreen: false,
			characterSelectScreen: true,
			auxilaryScreen: false,
			endingScreen: false,
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
			influence: 1,
			itemArray: itemArray,
			supCardRewards: [],
			supGemRewards: [],
			errorMessage: null,
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
		this.goToEndingScreen = this.goToEndingScreen.bind(this);
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
		this.toggleInfoScreen = this.toggleInfoScreen.bind(this);
		this.gainSupCardReward = this.gainSupCardReward.bind(this);
		this.gainSupGemReward = this.gainSupGemReward.bind(this);
		this.clearSupRewards = this.clearSupRewards.bind(this);
		this.displayErrorMessage = this.displayErrorMessage.bind(this);
		this.removeErrorMessage = this.removeErrorMessage.bind(this);
	}
	writeUserData(){
		var user = document.getElementById("saveName").value;
		console.log(user);
		if(user === ""){
			this.displayErrorMessage("enter a name");
		}else if(user === "super" || user === "super1" || user === "super2"){
			this.displayErrorMessage("Pick a different name");
		}else{
			var userSaveData = {name: user, collectionArray: collectionArray, levels: levelsBeaten};
			var saveDataArray = this.state.developers;
			for(var i=0; i<saveDataArray.length; i++){
				if(saveDataArray[i].name === user){
					saveDataArray.splice(i, 1);
				}else{}
			}
			saveDataArray.push(userSaveData);
			console.log(userSaveData);
			this.setState({
				developers: saveDataArray

			}, () => {
				Firebase.database().ref(`/${user}`).set(this.state.developers);
			 	this.displayErrorMessage('DATA SAVED');
			 	this.setState({
			 		developers: []
			 	});
			});
		}
	}
	getUserData(){
	  var user = document.getElementById("saveName").value;
	  let ref = Firebase.database().ref(`/${user}`);
	  ref.on('value', snapshot => {
	    const state = snapshot.val();
	    this.setState({
	    	developers: state
	    }, () => {
	    	if(state === null){
	    		this.displayErrorMessage("No Save Data");
	    	}else{
	    		this.setUpPlayerSave();
	    	}
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
		levelsBeaten = playerData.levels;
	}
	removeErrorMessage(){
		this.setState({
			errorMessage: null
		});
		document.getElementById("errorMessage").style.background = "none";
	}
	displayErrorMessage(message){
		this.setState({
			errorMessage: message
		});
		document.getElementById("errorMessage").style.background = "white";
		setTimeout(() => {
			this.removeErrorMessage();
		}, 1500);
	}
	gainSupCardReward(reward){
		var updateRewardArray = this.state.supCardRewards;
		console.log(updateRewardArray);
		updateRewardArray.push(reward);
		this.setState({
			supCardRewards: updateRewardArray
		});
	}
	gainSupGemReward(reward){
		var updateRewardArray = this.state.supGemRewards;
		updateRewardArray.push(reward);
		console.log(updateRewardArray);
		this.setState({
			supGemRewards: updateRewardArray
		});
	}
	clearSupRewards(){
		this.setState({
			supCardRewards: [],
			supGemRewards: []
		});
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
		}, () => {
			console.log("spheres: " + this.state.sphereCount);
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
	goToGameScreen(){
		console.log(level);
		if(level === 0){
			console.log("Pick a stage");
		}else{
			this.setState({
				gameScreen: true,
				characterSelectScreen: false,
				auxilaryScreen: false,
				levelSelectScreen: false
			});
		}
	}
	toggleInfoScreen(){
		console.log(this.state.infoScreen);
		if(this.state.infoScreen === true){
			this.setState({
				infoScreen: false
			});
		}else{
			this.setState({
				infoScreen: true
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
			createScreen: false,
			levelSelectScreen: false
		});
	}
	auxilaryScreen(){
		this.setState({
			gameScreen: false,
			characterSelectScreen: false,
			auxilaryScreen: true
		});
	}
	goToEndingScreen(){
		this.setState({
			auxilaryScreen: false,
			endingScreen: true
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
			}else if(stageComplete === 3 && i === 0){
				var newEnemy = new EnemyCon("", 0, 0, 0, 0, null, null, null);
				enemyArray.push(newEnemy);
				document.getElementById("playArea").style.height = "0px";
			}else{
				var randEnemyNum = Math.floor(Math.random() * 501);
				if(level === "tutorial"){
					tutorialLevels();
				}else if(level === "earth"){
					levelEarthDistribution(randEnemyNum);
				}else if(level === "fire"){
					levelFireDistribution(randEnemyNum);
				}else if(level === "water"){
					levelWaterDistribution(randEnemyNum);
				}else if(level === "wind"){
					levelWindDistribution(randEnemyNum);
				}else if(level === "desert"){
					levelDesertDistribution(randEnemyNum);
				}else if(level === "lava"){
					levelLavaDistribution(randEnemyNum);
				}else if(level === "mud"){
					levelMudDistribution(randEnemyNum);
				}else if(level === "storm"){
					levelStormDistribution(randEnemyNum);
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
				var eSupCard = selected.supCard;
				var newEnemy = new EnemyCon(eName, eHp, eAttack, eSabotoge, ePointValue, eImage, eSabCard, eElement, eSupCard);
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
			if(level === "tutorial"){
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
			<div className="col-xs-12">
			<ErrorMessage errorMessage={this.state.errorMessage} />
			{this.state.infoScreen ? <InfoScreen error={this.displayErrorMessage} toggleInfoScreen={this.toggleInfoScreen} /> : null }
			{this.state.createScreen ? <CreateCharacter error={this.displayErrorMessage} createNewCharacter={this.createNewCharacter} /> : null }
			{this.state.characterSelectScreen ? <CharacterSelectScreen error={this.displayErrorMessage} getUserData={this.getUserData} writeUserData={this.writeUserData} goToLevelScreen={this.goToLevelScreen} score={this.state.score} createNewCharacter={this.createNewCharacter} influence={this.state.influence} shield={this.state.heroShield} spheres={this.state.sphereCount} attack={this.state.attack} playerHero={playerHero} switchEnemyArray={this.switchEnemyArray} goToEquipmentScreen={this.goToEquipmentScreen} heroHp={this.state.heroHp} showCollection={this.showCollection} changeHero={this.changeHero} goToGameScreen={this.goToGameScreen} changeInfluence={this.changeInfluence} /> : null }
			{this.state.levelSelectScreen ? <LevelSelectScreen error={this.displayErrorMessage} goToCharacterScreen={this.goToCharacterScreen} goToGameScreen={this.goToGameScreen} switchEnemyArray={this.switchEnemyArray} /> : null }
			{this.state.gameScreen ? <GameScreen error={this.displayErrorMessage} clearSupRewards={this.clearSupRewards} gainSupGemReward={this.gainSupGemReward} gainSupCardReward={this.gainSupCardReward} toggleInfoScreen={this.toggleInfoScreen} characterScreen={this.goToCharacterScreen} changeHeroShield={this.changeHeroShield} changeHeroAttack={this.changeHeroAttack} changeInfluence={this.changeInfluence} influence={this.state.influence} int={this.state.heroSelect.intelligence} shield={this.state.heroShield} switchEnemyArray={this.switchEnemyArray} increaseStormCounter={this.increaseStormCounter} decreaseStormCounter={this.decreaseStormCounter} stormCounter={this.state.stormCounter} changeHeroHp={this.changeHeroHp} heroHp={this.state.heroHp} score={this.state.score} setSpheres={this.setSphereCount} changeScore={this.changeScore} aux={this.auxilaryScreen} heroSelect={this.state.heroSelect} attack={this.state.attack} equipment={this.state.equipment} enemyArray={this.state.enemyArray} /> : null }
			{this.state.auxilaryScreen ? <AuxilaryScreen error={this.displayErrorMessage} clearSupRewards={this.clearSupRewards} supGemRewards={this.state.supGemRewards} supCardRewards={this.state.supCardRewards} goToEndingScreen={this.goToEndingScreen} changeInfluence={this.changeInfluence} influence={this.state.influence} setSphereCount={this.setSphereCount} score={this.state.score} resetStormCounter={this.resetStormCounter} showCollection={this.showCollection} goToCharacterScreen={this.goToCharacterScreen} /> : null }
			{this.state.collectionScreen ? <CollectionScreen error={this.displayErrorMessage} toggleInfoScreen={this.toggleInfoScreen} goToCraftingScreen={this.goToCraftingScreen} checkDeckContents={this.checkDeckContents} /> : null }
			{this.state.equipmentScreen ? <EquipmentScreen error={this.displayErrorMessage} changeScore={this.changeScore} score={this.state.score} itemArray={this.state.itemArray} heroShield={this.state.heroShield} spheres={this.state.sphereCount} setSphereCount={this.setSphereCount} playerHero={playerHero} chooseItemAction={this.chooseItemAction} attack={this.state.attack} goToCharacterScreen={this.goToCharacterScreen} /> : null }
			{this.state.craftingScreen ? <CraftingScreen error={this.displayErrorMessage} toggleInfoScreen={this.toggleInfoScreen} showCollection={this.showCollection} /> : null}
			{this.state.endingScreen ? <EndingScreen error={this.displayErrorMessage} score={this.state.score} /> : null}
			{this.state.miningGame ? <MiningGame error={this.displayErrorMessage} /> : null }
			</div>
		)
	}
}

class ErrorMessage extends React.Component {
	render() {
		return (
			<div className="row" id="errorMessage">{this.props.errorMessage}</div>
		)
	}
}

class InfoScreen extends React.Component {
	keywordClick(word){
		for(var i=0; i<keyWordList.length; i++){
			if(keyWordList[i].keyword === word){
				document.getElementById("descriptionArea").innerHTML= " ";
				document.getElementById("descriptionArea").innerHTML= keyWordList[i].description;
			}else{}
		}
	}
	listKeywords(){
		keyWordList.sort(function(a, b){
		    if(a.keyword < b.keyword) { return -1; }
		    if(a.keyword > b.keyword) { return 1; }
		    return 0;
		});
		const listKeywords = keyWordList.map((keyword, index) =>
			<div className="row keyword" key={index} onClick={() => { this.keywordClick(keyword.keyword)}}>{keyword.keyword}</div>
		);
		return (
			<div id="keywordCol">{listKeywords}</div>
		)
	}
	render() {
		return (
			<div className="row" id="infoArea">
				<div className="col-xs-12">
					<div className="row">
						<div className="col-xs-2 coolButton" onClick={this.props.toggleInfoScreen}>Back</div>
						<div className="col-xs-10">Game Info</div>
					</div>
					<div className="row">
						<div className="col-xs-2">
							{this.listKeywords()}
						</div>
						<div className="col-xs-9" id="descriptionArea">
							Welcome to the information section!
						</div>
					</div>
				</div>
			</div>
		)
	}
}

class LevelSelectScreen extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			levelsUnlocked: [false, false, false, false, false],
		}
		this.selectLevel = this.selectLevel.bind(this);
	}
	componentDidMount(){
		cardArray2 = cardArray;
		cardArray = [];
		for(var i=0; i<cardArray2.length; i++){
			for(var j=0; j<cardArray2[i].deckNum; j++){
				var newCard = new CardCon(cardArray2[i].name, cardArray2[i].cost, cardArray2[i].power, cardArray2[i].text, cardArray2[i].alignment, cardArray2[i].rarity, cardArray2[i].ability1, cardArray2[i].ability2, cardArray2[i].unlocked, cardArray2[i].type, cardArray2[i].image, cardArray2[i].icon, cardArray2[i].faction, cardArray2[i].craft, cardArray2[i].ownedNum, cardArray2[i].deckNum);
				cardArray.push(newCard);
			}
		}
		var unlockLevels = this.state.levelsUnlocked;
		if(levelsBeaten.includes("fire") === true && levelsBeaten.includes("earth") === true){
			unlockLevels[0] = true;
		}
		if(levelsBeaten.includes("fire") === true && levelsBeaten.includes("wind") === true){
			unlockLevels[1] = true;
		}
		if(levelsBeaten.includes("water") === true && levelsBeaten.includes("wind") === true){
			unlockLevels[2] = true;
		}
		if(levelsBeaten.includes("water") === true && levelsBeaten.includes("earth") === true){
			unlockLevels[3] = true;
		}
		if(levelsBeaten.length > 5){
			unlockLevels[4] = true;
		}
		this.setState({
			levelsUnlocked: unlockLevels
		});
	}
	selectLevel(choice){
		level = choice;
		this.props.switchEnemyArray();
		const x = document.getElementsByClassName("levelChoice");
		for (var i=0; i < x.length; i ++ ){
			x[i].classList.remove("selectedLevel");
		}
		document.getElementById(choice + "Level").classList.add("selectedLevel");
	}
	render() {
		return (
			<div className="row" id="levelSelectScreen">
				<div className="col-xs-12">
					<div className="row" id="levelChoiceTitle">
						<div className="col-xs-offset-2 col-xs-8">Choose a level</div>
					</div>
					<div className="row levelChoiceRow">
						<div className="col-xs-3 levelChoice" id="fireLevel" onClick={() => {this.selectLevel("fire")}}>Fire Fields</div>
						<div className="col-xs-3 levelChoice" id="earthLevel" onClick={() => {this.selectLevel("earth")}}>Mountain Pass</div>
					</div>
					<div className="row levelChoiceRow">
						<div className="col-xs-3 levelChoice" id="windLevel" onClick={() => {this.selectLevel("wind")}}>Howling Caverns</div>
						<div className="col-xs-3 levelChoice" id="waterLevel" onClick={() => {this.selectLevel("water")}}>Islands of Ruu</div>
					</div>
					<div className="row levelChoiceRow">
						{this.state.levelsUnlocked[0] ? <div className="col-xs-3 levelChoice" id="lavaLevel" onClick={() => {this.selectLevel("lava")}}>Lava Mountain</div> : null }
						{this.state.levelsUnlocked[1] ? <div className="col-xs-3 levelChoice" id="desertLevel" onClick={() => {this.selectLevel("desert")}}>Barrens of Dust</div> : null }
					</div><div className="row levelChoiceRow">
						{this.state.levelsUnlocked[2] ? <div className="col-xs-3 levelChoice" id="stormLevel" onClick={() => {this.selectLevel("storm")}}>Tempest Coast</div> : null }
						{this.state.levelsUnlocked[3] ? <div className="col-xs-3 levelChoice" id="mudLevel" onClick={() => {this.selectLevel("mud")}}>Magic Marsh</div> : null }
					</div>
					<div className="row levelChoiceRow">
						{this.state.levelsUnlocked[4] ? <div className="col-xs-offset-4 col-xs-4 levelChoice" id="towerLevel" onClick={() => {this.selectLevel("tower")}}>The Tower</div> : null }
					</div>
					<div className="row" id="levelButtonRow">
						<div className="col-xs-offset-1 col-xs-2 levelButton" onClick={this.props.goToCharacterScreen}>Back</div>
						<div className="col-xs-offset-2 col-xs-2 levelButton" onClick={this.props.goToGameScreen}>Play</div>
						<div className="col-xs-2 levelChoice" id="tutorialLevel" onClick={() => {this.selectLevel("tutorial")}}>Tutorial</div>
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
		//this.props.switchEnemyArray();
		this.props.createNewCharacter();
		this.props.changeInfluence(0);
		if(levelsBeaten.length >= 5){
			levelEnemyNum = 3;
		}else{
			levelEnemyNum = 2;
		}
	}
	render() {
		return (
			<div className="row">
				<div className="col-xs-12">
					<div className="row chooseTitle">
						<img src={mainTitle} alt="mainTitle" id="mainTitle" />
					</div>
					<div className="row">
						<div className="col-xs-offset-8 col-xs-4">
							<div className="row">
								<div className="col-xs-5 mainScore scoreRow">Score: {this.props.score}</div>
								{/*<div className="col-xs-5 mainScore scoreRow">Coins: {this.props.spheres}</div>*/}
							</div>
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
							{/*<button className="campButton" onClick={this.props.goToEquipmentScreen}>Shop</button>*/}
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
				<div className="col-xs-offset-6 col-xs-6">
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
			endOfTurnDmg: [0,0,0],
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
			activeSlot: null,
			supportAction: true,
			nextSpellBonus: 0,
			extraAttacks: 0,
			enemiesAttacking: false,
			scheming: false,
			schemePower: 0,
			boostArray: [],
			spookLevel: meter6,
			enemyDamageMod: 0

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
		const audioEl = document.getElementsByClassName("audio-element")[0];
	    //audioEl.play();
		if(level === "fire"){
			document.getElementById("gameScreenBackground").style.backgroundImage = "url(" + fireBackground + ")";
		}else if(level === "earth"){
			document.getElementById("gameScreenBackground").style.backgroundImage = "url(" + grassBackground + ")";
		}else if(level === "water"){
			document.getElementById("gameScreenBackground").style.backgroundImage = "url(" + waterBackground + ")";
		}else if(level === "wind"){
			document.getElementById("gameScreenBackground").style.backgroundImage = "url(" + windBackground + ")";
		}else if(level === "lava"){
			document.getElementById("gameScreenBackground").style.backgroundImage = "url(" + lavaBackground + ")";
		}else if(level === "storm"){
			document.getElementById("gameScreenBackground").style.backgroundImage = "url(" + stormBackground + ")";
		}else if(level === "mud"){
			document.getElementById("gameScreenBackground").style.backgroundImage = "url(" + mudBackground + ")";
		}else if(level === "desert"){
			document.getElementById("gameScreenBackground").style.backgroundImage = "url(" + desertBackground + ")";
		}else if(level === "tower"){
			document.getElementById("gameScreenBackground").style.backgroundImage = "url(" + towerBackground + ")";
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
	spookCheck(spook) {
		
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
		this.setState({
			enemiesAttacking: false
		});
		multiplier = 1;
		if(this.state.recruit === true && (card.type === "support" || card.type === "character")){
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
				if(card.cost > 0 && card.type === "stormlight"){
					var meterNum = (card.cost * -1);
					var splitMeter = this.state.spookLevel.split("/");
					var splitMore = splitMeter[3].split(".");
					var lastSplit = splitMore[0].split("meter");
					var currentMeterNum = parseInt(lastSplit[1]);
					var newMeterNum = (currentMeterNum + meterNum);
					if(newMeterNum < 0){
						newMeterNum = 0;
					}else if(newMeterNum > 12){
						newMeterNum = 12;
					}
					this.setState({
						spookLevel: meterArray[newMeterNum]
					}, () => {
						this.checkSupportAbility(card);
					});
				}else{
					this.checkSupportAbility(card);
				}
			    const x = document.getElementsByClassName("characterImage2");
				for (var i=0; i < x.length; i ++ ){
					x[i].classList.remove("targetedEnemy");
				}
			});
			document.getElementById("influenceOrb").classList.remove("stormlightOn");
		}
	}
	scheme(card) {
		var activeSlot = this.state.activeSlot;
		if(activeSlot.ability1.indexOf(card.faction) >= 0){
			var schemeCards = this.state.cards;
			schemeCards.splice(schemeCards.indexOf(card), 1);
			var schemePower = this.state.schemePower + 1;
			var schemeGoal = parseInt(activeSlot.ability1.split(/[ ,]+/)[2]);
			var percentComplete = (schemePower/schemeGoal) * 100;
			var percentLeft = 100 - percentComplete;
			document.getElementById("fullMeter").style.height = percentComplete + "%";
			document.getElementById("emptyMeter").style.height = percentLeft + "%";
			this.setState({
				cards: schemeCards,
				scheming: false,
				schemePower: schemePower
			}, () => {
				if(this.state.schemePower === parseInt(activeSlot.ability1.split(/[ ,]+/)[2])){
					document.getElementById("supportSlot1").classList.add("fullScheme");
				}else{}
			});
		}else{
			this.props.error("wrongtype");
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
					if(recruitCards[i].type === "support" || recruitCards[i].type === "character"){
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
		if((card.type === "support" || card.type === "character") && card.cost <= this.props.influence){
			var newDamageMod = 0;
			if(card.ability1.indexOf("supWeaken") >= 0){
				var weakenNum = parseInt(card.ability1.split(/[ ,]+/)[1]);
				newDamageMod = this.state.enemyDamageMod - weakenNum;
			}else if(card.ability1.indexOf("supGems") >= 0){
				var gemNum = parseInt(card.ability1.split(/[ ,]+/)[1]);
				for(var i=0; i<gemNum; i++){
					var randNum = Math.floor(Math.random() * 2);
					if(randNum === 0){
						if(card.icon === lava){
							this.props.gainSupGemReward(fire);
						}else if(card.icon === mud){
							this.props.gainSupGemReward(earth);
						}else if(card.icon === desert){
							this.props.gainSupGemReward(wind);
						}else if(card.icon === storm){
							this.props.gainSupGemReward(water);
						}else{
							this.props.gainSupGemReward(card.icon);
						}
					}if(randNum === 1){
						if(card.icon === lava){
							this.props.gainSupGemReward(earth);
						}else if(card.icon === mud){
							this.props.gainSupGemReward(water);
						}else if(card.icon === desert){
							this.props.gainSupGemReward(fire);
						}else if(card.icon === storm){
							this.props.gainSupGemReward(wind);
						}else{
							this.props.gainSupGemReward(card.icon);
						}
					}
				}
			}else if(card.ability1.indexOf("supCards") >= 0){
				var cardNum = parseInt(card.ability1.split(/[ ,]+/)[1]);
				for(var i=0; i<cardNum; i++){
					var randNum = Math.floor(Math.random() * 20) + 1;
					var newCard = eval(card.faction + randNum);
					this.props.gainSupCardReward(newCard);
				}
			}else{}
			if((card.type === "support" || card.type === "character") && card.cost <= this.props.influence){
				if(this.state.supportSlot1 === null){
					this.setState({
						supportSlot1: card,
						enemyDamageMod: newDamageMod
					});
					var newInfluence = this.props.influence - card.cost;
					this.props.changeInfluence(newInfluence);
				}else if(this.state.supportSlot2 === null){
					this.setState({
						supportSlot2: card,
						enemyDamageMod: newDamageMod
					});
					var newInfluence = this.props.influence - card.cost;
					this.props.changeInfluence(newInfluence);
				}else{
					this.props.error("Already have 2 supports");
				}
			}else{}
			if(this.state.supportSlot1 === null || this.state.supportSlot2 === null){
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
			}else{}
		}else{
			this.props.error("Not Enough Energy");
		}

	}
	checkSupportAbility(card){
		var sup1 = this.state.supportSlot1;
		var sup2 = this.state.supportSlot2;
		var supArray = [sup1, sup2];
		if(sup1 === null && sup1 === null){
			this.checkCardAbility(card);
		}else{
			var boostArray = [];
			var shieldSup = this.state.playerShield;
			var poisonArray = this.state.endOfTurnDmg;
			for(var i=0; i<supArray.length; i++){
				if(supArray[i] === null){
				}else{
					if(supArray[i].type === "support"){
						supArray[i].ability2 --;
					}else{}
					if(supArray[i].ability1.indexOf("boost") >= 0){
						var boostType = supArray[i].ability1.split(/[ ,]+/)[1];
						var boostNum = parseInt(supArray[i].ability1.split(/[ ,]+/)[2]);
						var boostObject = {type: boostType, num: boostNum};
						boostArray.push(boostObject);
					}else if(supArray[i].ability1.indexOf("supShield") >= 0){
						var shieldNum = parseInt(supArray[i].ability1.split(/[ ,]+/)[1]);
						shieldSup = shieldNum + this.state.playerShield;
					}else if(supArray[i].ability1.indexOf("supPoison") >= 0){
						var poisonNum = parseInt(supArray[i].ability1.split(/[ ,]+/)[1]);
						for(var i=0; i<1; i++){
							var randNum = Math.floor(Math.random() * 3);
							if(enemyArray[randNum].hp > 0){
								poisonArray[randNum] = poisonArray[randNum] + poisonNum;
								break;
							}else{
								i--;
							}
						}
						//poisonArray = [this.state.endOfTurnDmg[0] + 1, this.state.endOfTurnDmg[1] + 1, this.state.endOfTurnDmg[2] + 1];
					}else if(supArray[i].ability1.indexOf("supHeal") >= 0){
						var healNum = parseInt(supArray[i].ability1.split(/[ ,]+/)[1]);
						var newHp = this.props.heroHp + healNum;
						console.log(newHp);
						this.props.changeHeroHp(newHp);
					}else if(supArray[i].ability1.indexOf("supEnergy") >= 0){
						var energyNum = parseInt(supArray[i].ability1.split(/[ ,]+/)[1]);
						var newEnergy = this.props.influence + energyNum;
						this.props.changeInfluence(newEnergy);
					}else if(supArray[i].ability1.indexOf("supDecoy") >= 0){
						this.setState({
							decoy: true
						});
					}else if(supArray[i].ability1.indexOf("supGrow") >=0){
						var splitAbility = supArray[i].ability1.split(" ");
						var growElement = splitAbility[1];
						var growNum = parseInt(splitAbility[2]);
						console.log(growElement + " " + card.faction);
						if(growElement === card.faction){
							for(var i=0; i<cardArray.length; i++){
								if(cardArray[i].name === card.name && cardArray[i].power === card.power){
									//cardArray[i].power = cardArray[i].power + growNum;
									console.log(cardArray[i]);
									card.power = card.power + growNum;
									break;
								}else{}
							}
						}else{}
					}else if(supArray[i].ability1.indexOf("supExhaust") >=0){
						this.setState({
							exhausted: "immune"
						});
					}else if(supArray[i].ability1.indexOf("supPurge") >=0){
						shuffle(cardArray);
						for(var i=0; i < cardArray.length; i++){
							if(cardArray[i].alignment === "enemy"){
								cardArray.splice(i, 1);
								break;
							}else{
								console.log("no enemy cards");
							}
						}
					}else if(supArray[i].ability1.indexOf("supAbilityBoost") >=0){
						var splitAbility = supArray[i].ability1.split(" ");
						var ability = splitAbility[1];
						var boostNum = parseInt(splitAbility[2]);
						if(card.ability1.indexOf(ability) >=0 || card.ability2.indexOf(ability) >=0){
							var boostObject = {type: ability, num: boostNum};
							boostArray.push(boostObject);
						}else{}
					}
				}
			}
			this.setState({
				boostArray: boostArray,
				playerShield: shieldSup,
				endOfTurnDmg: poisonArray
			}, () =>{
				this.checkCardAbility(card);
			})
		}
	}
	checkCardAbility(card){
		console.log(enemyNumber);
		var supportMod = 0;
		var boostArray = this.state.boostArray;
		for(var i=0; i<boostArray.length; i++){
			if(card.faction === boostArray[i].type || card.ability1.indexOf(boostArray[i].type) >=0 || card.ability2.indexOf(boostArray[i].type) >=0){
				supportMod = supportMod + boostArray[i].num;
			}else{}
		}
		var cardPower = card.power;
		var newAttack = (this.props.attack + cardPower + this.state.nextSpellBonus + supportMod + factionBoost) * multiplier;
		if(cardAbilityNum === 1){
			if(card.ability1.indexOf("research") >=0 || card.ability2.indexOf("research") >=0){

			}else{
				this.setState({
					nextSpellBonus: 0
				});
			}
		}else{}
		var checkAbility;
		if(cardAbilityNum === 1){
			checkAbility = card.ability1;
		}else if(cardAbilityNum === 2){
			checkAbility = card.ability2;
		}
		if(card.ability1.indexOf("scheme") >=0){
			this.playerAttack(newAttack);
		}else if(typeof checkAbility === "number"){
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
					console.log(cardArray);
					for(var i=0; i<cardArray.length; i++){
						if(cardArray[i].name === card.name && cardArray[i].power === card.power){
							cardArray[i].power = cardArray[i].power + growNum;
							break;
						}else{}
					}
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
				console.log("decoy");
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
				if(this.state.exhausted === "immune"){
				}else{
					this.setState({
						exhausted: true
					});
				}
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
				enemyArray[currentEnemy].sabotoge --;
				var currentSabArray = [];
				for(i=0; i < enemyArray.length; i++){
					currentSabArray.push(enemyArray[i].sabotoge);
				}
				this.setState({
					enemySab: currentSabArray
				});
			}else if(checkAbility.indexOf("weaken") >=0){
				var weakenNum = parseInt(checkAbility.match(/\d+/)[0]);
				if(enemyArray[currentEnemy].attack - weakenNum < 0){
					enemyArray[currentEnemy].attack = 0;
				}else{
					enemyArray[currentEnemy].attack = enemyArray[currentEnemy].attack - weakenNum;
				}
			}else if(checkAbility.indexOf("reclaim") >=0){
				var reclaimNum = parseInt(checkAbility.match(/\d+/)[0]);
				shuffle(cardArray);
				cardArray.sort(function(a, b){
				    if(a.alignment < b.alignment) { return -1; }
				    if(a.alignment > b.alignment) { return 1; }
				    return 0;
				});
				if(cardArray[0].alignment === "enemy"){
					cardArray[0].power = cardArray[i].power + reclaimNum;
				}else{
					console.log("nothing to reclaim");
				}
				console.log(cardArray);
			}else if(checkAbility.indexOf("confuse") >=0){
				document.getElementById(currentEnemy).classList.add("confused");
			}else if(checkAbility.indexOf("all") >=0){
				this.playerAttackAll(newAttack);
				cardAbilityNum = 1;
				return;
			}else if(checkAbility.indexOf("poison") >=0){
				var poisonNum = parseInt(checkAbility.match(/\d+/)[0]);
				var updateEndDmg = this.state.endOfTurnDmg;
				updateEndDmg[currentEnemy] = updateEndDmg[currentEnemy] + poisonNum;
				this.setState({
					endOfTurnDmg: updateEndDmg
				});
			}else if(checkAbility.indexOf("spook") >=0){
				//var spookNum = parseInt(checkAbility.match(/\d+/)[0]);
				document.getElementById(currentEnemy).classList.add("spooked");
			}else if(checkAbility.indexOf("transform") >=0){
				var transformNum = parseInt(checkAbility.match(/\d+/)[0]);
				shuffle(cardArray);
				for(var i=0; i < cardArray.length; i++){
					if(cardArray[i].alignment === "enemy"){
						cardArray.splice(i, 1);
						cardArray.push(eval("transform" + transformNum));
						break;
					}else{
						console.log("no enemy cards");
					}
				}
			}else if(checkAbility.indexOf("meter") >=0){
				var meterNum = parseInt(checkAbility.split(" ")[1]);
				var splitMeter = this.state.spookLevel.split("/");
				var splitMore = splitMeter[3].split(".");
				var lastSplit = splitMore[0].split("meter");
				var currentMeterNum = parseInt(lastSplit[1]);
				var newMeterNum = (currentMeterNum + meterNum);
				if(newMeterNum < 0){
					newMeterNum = 0;
				}else if(newMeterNum > 12){
					newMeterNum = 12;
				}
				this.setState({
					spookLevel: meterArray[newMeterNum]
				});
			}else if(checkAbility.indexOf("finesse") >=0){
				var finesseNum = parseInt(checkAbility.split(" ")[1]);
				console.log(cardPower + finesseNum);
				if(enemyArray[currentEnemy].hp <= (cardPower + finesseNum) && enemyArray[currentEnemy].hp >= (cardPower - finesseNum)){
					finesseAttack = enemyArray[currentEnemy].hp;
				}else{
					finesseAttack = newAttack;
				}
			}else if(checkAbility.indexOf("factionBoost") >=0){
				var factionNum = parseInt(checkAbility.split(" ")[1]);
				var drawnCards = this.state.cards;
				var boostedAttack = 0;
				for(var i=0; i<drawnCards.length; i++){
					if(card.faction === drawnCards[i].faction){
						boostedAttack = boostedAttack + factionNum;
					}else{}
				}
				if(cardAbilityNum === 1){
					factionBoost = boostedAttack - 1;
				}else{
					newAttack = newAttack + boostedAttack - 1;
				}
			}
			if(cardAbilityNum === 2){
				if(card.ability1.indexOf("finesse") >=0 || card.ability2.indexOf("finesse") >=0 ){
					console.log(finesseAttack);
					this.playerAttack(finesseAttack);
				}else{
					this.playerAttack(newAttack);
				}
				cardAbilityNum = 1;
			}else{
				cardAbilityNum ++;
				this.checkCardAbility(card);
			}
		}
	}
	heroDraw() {
		const audioEl = document.getElementsByClassName("clickSound")[0];
	    audioEl.play();
	    var patience = false;
	    for(var i=0; i<3; i++){
	    	if(document.getElementById(i + "image") === null){

	    	}else{
		    	if(document.getElementById(i + "image").classList.contains("attackingEnemy") === true){
		    		patience = true;
		    	}else{}
		    }
	    }
		if( currentEnemy === 4 ){
			this.props.error("Select an enemy to attack!");
		}else{
			if(this.state.cardDisplay === true){
				this.props.error("Stop Cheating Doug...");
			}else if(patience === true){
				this.props.error("Patience Betsy");
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
					});
				});
			}
		}
	}
	playerAttack(newAttack) {
		const audioEl = document.getElementsByClassName("clickSound")[0];
	    audioEl.play();
	    var splitMeter = this.state.spookLevel.split("/");
		var splitMore = splitMeter[3].split(".");
		var lastSplit = splitMore[0].split("meter");
		var currentMeterNum = parseInt(lastSplit[1]);
		if(enemyArray[currentEnemy].hp <= 0){
			console.log("He's dead, pick another target.");
		}else{
			var numberOfPlayerCharacters = this.state.recruitArray.length + 1;

			var enemyHealth = enemyArray[currentEnemy].hp;
			var heroAttack = newAttack;
			if(newAttack < 0){
				heroAttack = 0;
			}else{
				/*if(currentMeterNum === 0){
					heroAttack = Math.round(newAttack/3);
				}else if(currentMeterNum > 0 && currentMeterNum <= 3){
					heroAttack = Math.round(newAttack/2);
				}else if(currentMeterNum > 3 && currentMeterNum <= 8){
					heroAttack = newAttack;
				}else if(currentMeterNum > 8 && currentMeterNum <= 11){
					heroAttack = Math.round(newAttack * 2);
				}else if(currentMeterNum === 12){
					heroAttack = Math.round(newAttack * 3);
				}*/
			}
			var enemyHp = enemyHealth - heroAttack;
			if(enemyHealth === heroAttack){
				this.props.setSpheres(1);
				var supCardValue = Math.floor(Math.random() * 11);
				supCardValue = supCardValue + (currentMeterNum - 6);
				console.log("supValue" + supCardValue);
				if(supCardValue >= 9){
					console.log(enemyArray[currentEnemy]);
					console.log(enemyArray[currentEnemy].supCard)
					this.props.gainSupCardReward(enemyArray[currentEnemy].supCard);
				}else{}

			}else{}
			document.getElementById("badGuy" + (currentEnemy)).append("-" + heroAttack);
			document.getElementById("badGuy" + (currentEnemy)).style.display="inline";
			setTimeout(() => { 
				document.getElementById("badGuy" + (currentEnemy)).innerHTML="";
				document.getElementById("badGuy" + (currentEnemy)).style.display="none";
				if(enemyHp <= 0){
					enemyArray[currentEnemy].hp = 0;
					this.setState({
						enemyHpArray: [enemyArray[0].hp, enemyArray[1].hp, enemyArray[2].hp]
					});
					currentEnemy = 4;
					this.triggerEnemyDeath();
				}else{
					enemyArray[currentEnemy].hp = enemyHp;
					currentEnemy = 4;
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
						if(currentEnemy === 4){
							this.props.error("Pick an Enemy to Attack");
						}else{
							const x = document.getElementsByClassName("characterImage2");
							for (var i=0; i < x.length; i ++ ){
								x[i].classList.remove("targetedEnemy");
							}
							this.setState({
								enemiesAttacking: false
							}, () => {
								var schemeAttack = parseInt(support.ability1.split(/[ ,]+/)[3]);
								this.playerAttack(schemeAttack);
								usedSupport.ability2 --;
							});
							this.setState({
								cardDisplay: false,
								schemePower: 0
							});
						}
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
					var activeSlot;
					if(supSlot === "supportSlot1"){
						activeSlot = this.state.supportSlot1;
					}else{
						activeSlot = this.state.supportSlot2;
					}
					this.setState({
						scheming: true,
						supportAction: false,
						activeSlot: activeSlot

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
				var newDamageMod = this.state.enemyDamageMod;
				if(usedSupport.ability1.indexOf("supWeaken") >= 0){
					var weakenNum = parseInt(usedSupport.ability1.split(/[ ,]+/)[1]);
					newDamageMod = this.state.enemyDamageMod + weakenNum;
				}else{}
				this.setState({
					[supSlot]: null,
					cards: newArray,
					enemyDamageMod: newDamageMod
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
		this.props.clearSupRewards();
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
		if(this.state.supportSlot1 === null){

		}else{
			cardArray.push(this.state.supportSlot1);
		}
		if(this.state.supportSlot2 === null){

		}else{
			cardArray.push(this.state.supportSlot2);
		}
	}
	triggerEnemyDeath() {
		console.log("triggerEnemyDeath");
		var removeEndDmg = this.state.endOfTurnDmg;
		for(var i=0; i<enemyArray.length; i++){
			if(enemyArray[i].hp === 0){
				var pointValue = enemyArray[i].pointValue;
				this.props.changeScore(pointValue);
				removeEndDmg[i] = 0;
			}else{}
		}
		this.setState({
			endOfTurnDmg: removeEndDmg
		});
		setTimeout(() => {
			this.enemyCleanUp();
		}, 100);
	}
	enemyCleanUp() {
		console.log(enemyArray[0].hp);
		console.log(enemyArray[1].hp);
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
					console.log("enemies will attack");
					this.enemyAttackAction(0);
				}else{}
			});
		}
	}
	enemyAttackAction(enemyNumber) {
		this.setState({
			enemiesAttacking: true
		});
		var enemyAttack = enemyArray[enemyNumber].attack + this.state.enemyDamageMod;
		if(enemyAttack < 0){
			enemyAttack = 0;
		}else{}
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
					var enemyHp = enemyArray[selectedEnemy].hp - enemyAttack;
					document.getElementsByClassName("heroDamageIndicator")[(selectedEnemy)].append("-" + enemyAttack);
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
								var enemySabCard = enemyArray[enemyNumber].sabCard;
								var enemyCard = new CardCon(enemySabCard.name, enemySabCard.cost, enemySabCard.power, enemySabCard.text, enemySabCard.alignment, enemySabCard.rarity, enemySabCard.ability1, enemySabCard.ability2, enemySabCard.unlocked, enemySabCard.type, enemySabCard.image, enemySabCard.icon, enemySabCard.faction, enemySabCard.craft, enemySabCard.ownedNum, enemySabCard.deckNum);
								if(this.state.decoy === false){
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
							}else{}
						}else{
							this.setState({
								playerShield: shieldDamage
							});
						}
					}else{
						let playerHealth = this.props.heroHp;
						const playerHp = playerHealth - enemyAttack;
						if(enemyArray[enemyNumber].sabotoge > 0){
							var enemySabCard2 = enemyArray[enemyNumber].sabCard;
							var enemyCard2 = new CardCon(enemySabCard2.name, enemySabCard2.cost, enemySabCard2.power, enemySabCard2.text, enemySabCard2.alignment, enemySabCard2.rarity, enemySabCard2.ability1, enemySabCard2.ability2, enemySabCard2.unlocked, enemySabCard2.type, enemySabCard2.image, enemySabCard2.icon, enemySabCard2.faction, enemySabCard2.craft, enemySabCard2.ownedNum, enemySabCard2.deckNum);
							if(this.state.decoy === false){
								cardArray.push(enemyCard2);
								enemyArray[enemyNumber].sabotoge --;
								var currentSabArray = [];
								for(i=0; i < enemyArray.length; i++){
									currentSabArray.push(enemyArray[i].sabotoge);
								}
								this.setState({
									enemySab: currentSabArray
								});
							}else{}
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
					document.getElementById(enemyNumber + "image").classList.remove("attackingEnemy");
					document.getElementById(enemyNumber).classList.remove("stunned");
					document.getElementById(enemyNumber).classList.remove("confused");
					for (var i=0; i < x.length; i ++ ){
					x[i].style.borderColor="black";
					}
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
		console.log("endofturndmg");
		for(var i=0; i < enemyArray.length; i++){
			if(enemyArray[i].hp > 0 && this.state.endOfTurnDmg[i] > 0){
				enemyArray[i].hp = enemyArray[i].hp - this.state.endOfTurnDmg[i];
				if(enemyArray[i].hp < 0){
					enemyArray[i].hp = 0;
				}else{}
				document.getElementById("badGuy" + (i)).append("-" + this.state.endOfTurnDmg[i]);
				document.getElementById("badGuy" + (i)).style.display="inline";
			}else{}
		};
		for(var i=0; i<2; i++){
			var usedSupport;
			var supSlot; 
			if(i===0){
				usedSupport = this.state.supportSlot1;
				supSlot = "supportSlot1";
			}else{
				usedSupport = this.state.supportSlot2;
				supSlot = "supportSlot2";
			}
			if(usedSupport === null){
			}else{
				var parseNum = parseInt(usedSupport.ability2);
				if(usedSupport.ability1.indexOf("supBurning") >= 0){
					var burningNum = parseInt(usedSupport.ability1.split(/[ ,]+/)[1]);
					this.setState({
						extraAttacks: this.state.extraAttacks + 1
					}, () => {
						this.playerAttackAll(burningNum);
					});
				}else{}
				if(parseNum <= 0){
					//usedSupport.ability2 = parseInt(usedSupport.ability1.split(" ")[3]);
					//usedSupport.ability2 = 9;
					cardArray.push(usedSupport);
					var newArray = this.state.cards;
					newArray.push(usedSupport);
					console.log(parseInt(usedSupport.ability1.split(" ")[3]));
					var newDamageMod = this.state.enemyDamageMod;
					if(usedSupport.ability1.indexOf("supWeaken") >= 0){
						var weakenNum = parseInt(usedSupport.ability1.split(/[ ,]+/)[1]);
						newDamageMod = this.state.enemyDamageMod - weakenNum;
					}else{}
					this.setState({
						[supSlot]: null,
						cards: newArray,
						enemyDamageMod: newDamageMod
					});
				}else{
					this.setState({
						[supSlot]: usedSupport
					});
				}
			}
		}
		setTimeout(() => {
			for(var i=0; i < enemyArray.length; i++){
				if(enemyArray[i].hp > 0 && this.state.endOfTurnDmg[i] > 0){
					document.getElementById("badGuy" + (i)).innerHTML="";
					document.getElementById("badGuy" + (i)).style.display="none";
				}else{}
			}
			console.log("poison death");
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
				<audio className="audio-element">
		          <source src={background}></source>
		        </audio>
		        <audio className="attackSound">
		          <source src={attackSound}></source>
		        </audio>
		        <audio className="perfectHit">
		          <source src="https://api.coderrocketfuel.com/assets/pomodoro-times-up.mp3"></source>
		        </audio>
				<div className="row infoRow">
					<div className="col-xs-offset-3 col-xs-5" id="stageName">Stage {stageComplete + 1}</div>
					<div className="col-xs-3">	
						<ScoreDisplay score={this.props.score} />
					</div>
					<div className="col-xs-1">
						<div className="infoButton" id="infoButton" onClick={this.props.toggleInfoScreen}>?</div>
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
									<div className="coolButton col-xs-4" id="tutorialMessageButton" onClick={this.handleTutorialClick} >OK</div>
								</div>
							</div>
						</div>
						<div className="row" id="playArea">
							<div className="col-xs-12">
								{this.state.cardDisplay ? <CardDisplayBox chooseCard={this.chooseCard} cards={this.state.cards} /> : null }
							</div>
						</div>
						<div className="row">
							<div className="col-xs-offset-4 col-xs-4">
								<SpookyMeter spookLevel={this.state.spookLevel} />
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

class SpookyMeter extends React.Component {
	render() {
		return (
			<div className="col-xs-12"> 
				<div className="row spookyMeterRow">
					<img className="spookyMeter" src={this.props.spookLevel} alt="spookyMeter" />
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
			<div className="col-xs-12 influenceOrbRow">
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
			<Card className={card.alignment} faction={card.faction} icon={card.icon} key={index} id={index} name={card.name} image={card.image} ability={card.ability1} cost={card.cost} power={card.power} text={card.text} card={card} chooseCard={this.props.chooseCard} />
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
		var cardStyle = "neutral";
	    var schemeReq = 0;
	    var schemePower = 0;
	    var scheme = false;
		if(charCard === "character"){
			influenceCost = true;
			scheme = true;
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
    	}else{
    		normal = true;
    	}
		return (
			<div className={`col-xs-12 ${this.props.className} ${cardStyle}`} id={`${this.props.id}card`} onClick={() => this.props.chooseCard(this.props.card)}>
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
		          <CardText cardText={this.props.text} />
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
		        	{ normal === true &&
		        		<div className="col-xs-4"></div>
		        	}
	        		<div className="col-xs-offset-4 col-xs-4"><img className="iconImg" src={this.props.icon} alt="icon" /></div>
		        </div>
			</div>
		)
	}
}

class CardText extends React.Component {
	render() {
		return (
			<div className="row cardText">{this.props.cardText}</div> 
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
		var cardStyle = this.props.card.faction + "SupportSlot";
		var actionButton = false;
		if(this.props.card.ability1.indexOf("scheme") >= 0){
			actionButton = true;
		}else{}
		return (
			<div className="row supportSlot">
				{ actionButton === true &&
					<div className="col-xs-offset-1 col-xs-1">
						<div className="row">
							<div className="col-xs-offset-1 col-xs-2 schemeMeter">
								<div className="row" id="emptyMeter"></div>
								<div className="row" id="fullMeter"></div>
							</div>
						</div>
					</div>
				}
				{ actionButton === false &&
				<div className="col-xs-6">
					<img className="supportSlotImage" src={this.props.card.image} alt="supportImage" />
				</div>
				}
				{ actionButton === true &&
					<div className={`col-xs-offset-1 col-xs-8 ${cardStyle}`} id={this.props.supSlot}>
						<div className="row supportText">
							{this.props.card.text}
						</div>
						<div className="row schemeCounter">
							<div className="col-xs-12">
								<div className="row">
									<div className="col-xs-4">
										{/*{this.props.schemePower}/{parseInt(this.props.card.ability1.split(/[ ,]+/)[2])}*/}
									</div>
									<div className="col-xs-4 schemeReward">
										{parseInt(this.props.card.ability1.split(/[ ,]+/)[3])}
									</div>
								</div>
								<div className="row">
									<div className="col-xs-offset-4 col-xs-4 coolButton supportActionButton" onClick={() => this.props.supportAction(this.props.card, this.props.supSlot)}>Action</div>
								</div>
							</div>
						</div>
					</div>
				}
				{ actionButton === false &&
					<div className={`col-xs-5 ${cardStyle}`} id={this.props.supSlot}>
						<div className="row supportText">
							{this.props.card.text}
						</div>
					</div>
				}
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
							<PowerSpan attack={this.props.attack} />
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
					<div className="col-xs-4">
						<PowerSpan attack={this.props.attack} equipment={this.props.equipment} />
						<IntelligenceSpan int={this.props.int} />
						<ShieldSpan playerShield={this.props.playerShield} />
					</div>
					<div className="col-xs-4">
						<YouberImage image={player.image} />
					</div>
					<div className="col-xs-4">
						<HPSpan hp={this.props.heroHp} hero={"heroDamageIndicator2"} enemyId={"hero"} />
						<div className="row">
							<InfluenceCounter toggle={this.props.toggleRecruitState} influence={this.props.influence} />
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
			<div className="row intSpan">
				<div className="col-xs-8 iconCol">
					<img className="statIcon" src={int} />
				</div>
				<div className="col-xs-4">
					<span className="col-xs-4 statNum">{this.props.int}</span>
				</div>
			</div>
		)
	}
}

class CharacterActions extends React.Component {
	render() {
		return (
			<div className="row actionRow">
				<audio className="clickSound">
		          <source src={click}></source>
		        </audio>
				<button className="coolButton" id="attackButton" onClick={this.props.heroDraw}>Attack</button>
			</div>
		);
	}
};

class PowerSpan extends React.Component {
	render() {
		return (
			<div className="row powerSpan">
				<div className="col-xs-8 iconCol">
					<img className="statIcon" src={power} />
				</div>
				<div className="col-xs-4">
					<div className="statNum">{this.props.attack}</div>
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
				<img className={`characterImage2 col-xs-offset-1 col-xs-8 ${this.props.boss}`} id={this.props.id + 'image'} src={this.props.image} alt={this.props.name} />
			</div>
		);
	}
};

class YouberImage extends React.Component {
	render() {
		return (
			<div className="row">
				<img className="youberImage" id={this.props.id + 'image'} src={this.props.image} alt={this.props.name} />
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
			<div className="row shieldSpan">
				<div className="col-xs-8 iconCol">
					<img className="statIcon shieldIcon" src={shield} />
				</div>
				<div className="col-xs-4">
					<div className="statNum">{this.props.playerShield}</div>
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
	      hover: false,
	      boss: null
	    });
	}
	componentDidMount(){
		this.props.updateEnemySab();
		var newId;
		if(stageComplete === 3){
			newId = "boss"
		}else{
			newId = " "
		}
		this.setState({
			boss: newId
		});
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
						<CharacterImage image={this.props.image} boss={this.state.boss} id={this.props.id} />
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
			rewardCards: [],
			rewardGems: []

		}
	this.levelRewards = this.levelRewards.bind(this);
	this.listCardRewards = this.listCardRewards.bind(this);
	this.listGemRewards = this.listGemRewards.bind(this);
	}
	componentDidMount(){
		if(level === "tower"){
			this.props.goToEndingScreen();
		}else{
			levelsBeaten.push(level);
			cardArray = cardArray2;
			this.setState({
				rewardCards: [],
				rewardGems: []
			}, () => {
				this.levelRewards();
			});
			if(level === "earth"){
				earthStage ++;
			}else if(level === "fire"){
				fireStage ++;
			}else if(level === "water"){
				waterStage ++;
			}else if(level === "wind"){
				windStage ++;
			}
			cardArray.sort(function(a, b){
			    if(a.alignment < b.alignment) { return -1; }
			    if(a.alignment > b.alignment) { return 1; }
			    return 0;
			});
			var enemyCardNum = 0;
			for(var i=0; i < cardArray.length; i++){
				if(cardArray[i].alignment === "enemy"){
					enemyCardNum ++;
				}else{}
			}
			cardArray.splice(0, enemyCardNum);
		}
	}
	levelRewards(){
		var levelCard = this.props.supCardRewards;
		console.log(this.props.supCardRewards);
		var basicCards = [];
		for(var i=1; i<21; i++){
			var basicCard = eval('basic' + i);
			basicCards.push(basicCard);
		}
		if(level === 0){
			levelCard = [basic2, basic3, basic4, basic5, basic6];
		}else{
			var numberOfRewardCards = 2;
			if(levelEnemyNum === 3){
				numberOfRewardCards = 3;
			}else{
				numberOfRewardCards = 2
			}
			console.log(numberOfRewardCards);
			for(var i=0; i<numberOfRewardCards; i++){
				for(var j=0; j<basicCards.length; j++){
					shuffle(basicCards);
					var randNum = Math.floor(Math.random() * 101);
					if(randNum < 70){
						if(basicCards[j].rarity === 1){
							levelCard.push(basicCards[j])
							break;
						}else{}
					}else if(randNum > 70 && randNum < 95){
						if(basicCards[j].rarity === 2){
							levelCard.push(basicCards[j])
							break;
						}else{}
					}else{
						if(basicCards[j].rarity === 3){
							levelCard.push(basicCards[j])
							break;
						}else{}
					}
				}
			}
		}
		var levelGems = this.props.supGemRewards;
		var levelPoints;
		if(level === "earth"){
			for(var i=0; i<3; i++){
				levelGems.push(earth);
			}
			levelPoints = 1;
		}else if(level === "fire"){
			for(var i=0; i<3; i++){
				levelGems.push(fire);
			}
			levelPoints = 1;
		}else if(level === "water"){
			for(var i=0; i<3; i++){
				levelGems.push(water);
			}
			levelPoints = 1;
		}else if(level === "wind"){
			for(var i=0; i<3; i++){
				levelGems.push(wind);
			}
			levelPoints = 1;
		}else if(level === "lava"){
			for(var i=0; i<2; i++){
				levelGems.push(fire);
			}
			for(var i=0; i<2; i++){
				levelGems.push(earth);
			}
		}else if(level === "mud"){
			for(var i=0; i<2; i++){
				levelGems.push(water);
			}
			for(var i=0; i<2; i++){
				levelGems.push(earth);
			}
		}else if(level === "desert"){
			for(var i=0; i<2; i++){
				levelGems.push(fire);
			}
			for(var i=0; i<2; i++){
				levelGems.push(wind);
			}
		}else if(level === "storm"){
			for(var i=0; i<2; i++){
				levelGems.push(water);
			}
			for(var i=0; i<2; i++){
				levelGems.push(wind);
			}
		}else{}
		if(level === 0){
		}else{
			for(var i=0; i<levelGems.length; i++){
				elementOrbs.push(levelGems[i]);
			}
		}
		this.setState({
			rewardCards: levelCard,
			rewardGems: levelGems
		}, () => {
			this.props.clearSupRewards();
		});
		if(levelCard.length > 0){
			for(var i=0; i<levelCard.length; i++){
				var alreadyOwned = false;
				for(var j=0; j<collectionArray.length; j++){
					if(levelCard[i].name === collectionArray[j].name){
						alreadyOwned = true;
					}else{}
				}
				if(alreadyOwned === false){
					collectionArray.push(levelCard[i]);
					console.log(levelCard[i]);
					levelCard.unlocked = true;
				}else{
					var a = collectionArray.findIndex(x => x.name === levelCard[i].name);
					collectionArray[a].ownedNum ++;
				}
			}
		}else{}
	}
	listCardRewards(){
		var cards = this.state.rewardCards;
		if(cards === null){
		}else{
			const listCardRewards = cards.map((card, index) =>
				<CollectionCard className={card.alignment} key={index} id={index} ability={card.ability1} icon={card.icon} faction={card.faction} name={card.name} type={card.type} cost={card.cost} power={card.power} text={card.text} handleDrop={(name) => this.addToDeck(card.name)} />
			);
			return (
				<div>{listCardRewards}</div>
			)
		}
	}
	listGemRewards(){
		var gemRewards = this.state.rewardGems;
		if(gemRewards === undefined){
		}else{
			const listGemRewards = gemRewards.map((orb, index) =>
				<Element  key={index} element={orb} />
			);
			return (
				<div>{listGemRewards}</div>
			)
		}
	}
	render() {
		return (
			<div className="col-xs-12">
				<div className="row" id="rewardsMessage">Congratulations! Claim your rewards!</div>
				<div className="row" id="rewardsDescription">Score: {this.props.score}</div>
				<div className="row">
					<div className="col-xs-offset-3 col-xs-6" id="cardRewardRow">
						{this.listCardRewards()}
					</div>
				</div>
				<div className="row">
					<div className="col-xs-offset-4 col-xs-4" id="gemRewardRow">
						{this.listGemRewards()}
					</div>
				</div>
				<div className="row">
					<button className="coolButton col-xs-offset-4 col-xs-4" onClick={this.props.showCollection}>Deck</button>
				</div>
			</div>
		);
	}
};

class CollectionScreen extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			currentDeck: [],
			items: [
				{ id: 1, name: 'Item 1'},
				{ id: 2, name: 'Item 2'},
				{ id: 3, name: 'Item 3'},
				{ id: 4, name: 'Item 4'},
			],
			deckSize: 0
		}
		this.listCollection = this.listCollection.bind(this);
		this.listCurrentDeck = this.listCurrentDeck.bind(this);
	}
	componentDidMount(){
		var cardsInDeck = [];
		for(var i=0; i<collectionArray.length; i++){
			if(collectionArray[i].deckNum > 0){
				cardsInDeck.push(collectionArray[i]);
			}else{}
		}
		this.setState({
			currentDeck: cardsInDeck
		}, () => {
			cardArray = this.state.currentDeck;
		});
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
				console.log(card.deckNum);
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
		console.log(cards);
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
		console.log(cards);
		var deckNumber = 0;
		for(var i=0; i<cards.length; i++){
			deckNumber = deckNumber + cards[i].deckNum;
		}
		this.setState({
			deckSize: deckNumber
		});
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
					<button className="col-xs-1 coolButton goBackButton" onClick={this.props.checkDeckContents}>Back</button>
					<button className="col-xs-1 coolButton" onClick={this.props.goToCraftingScreen}>Crafting</button>
					<div className="col-xs-offset-9 col-xs-1 infoButton" id="infoButton" onClick={this.props.toggleInfoScreen}>?</div>
				</div>
				<div className="row">
					<div className="col-xs-10 deckTitle">Collection</div>
					<div className="col-xs-2 deckTitle">Deck ({this.state.deckSize})</div>
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
			if(craftedCard.craft > 0){
				var newCard = eval(this.state.element[1] + craftedCard.craft);
				var a = collectionArray.findIndex(x => x.name === craftedCard.name);
				if(collectionArray[a].ownedNum > 1){
					collectionArray[a].ownedNum --;
					collectionArray[a].deckNum --;
				}else{
					collectionArray.splice(a, 1);
				}
				var alreadyUnlocked = false;
				for(var i=0; i<collectionArray.length; i++){
					if(collectionArray[i].name === newCard.name){
						alreadyUnlocked = true;
					}else{}
				}
				if(alreadyUnlocked === false){
					newCard.unlocked = true;
					newCard.deckNum ++;
					collectionArray.push(newCard);
				}else{
					var c = collectionArray.findIndex(x => x.name === newCard.name);
					collectionArray[c].ownedNum ++;
					collectionArray[c].deckNum ++;
				}
				/*var b = cardArray.findIndex(x => x.name === craftedCard.name);
				cardArray.splice(a, 1);
				cardArray.push(newCard);*/
				var cardType = 1;
				var element1 = [];
				if(newCard.icon === desert && craftedCard.icon === placeholderImg){
					cardType = 2;
					element1 = [fire, wind];
				}else if(newCard.icon === lava && craftedCard.icon === placeholderImg){
					cardType = 2;
					element1 = [earth, fire];
				}else if(newCard.icon === mud && craftedCard.icon === placeholderImg){
					cardType = 2;
					element1 = [water, earth];
				}else if(newCard.icon === storm && craftedCard.icon === placeholderImg){
					cardType = 2;
					element1 = [wind, water];
				}else if(newCard.icon === lava && craftedCard.icon === fire){
					cardType = 1;
					element1 = [earth];
				}else if(newCard.icon === lava && craftedCard.icon === earth){
					cardType = 1;
					element1 = [fire];
				}else if(newCard.icon === desert && craftedCard.icon === fire){
					cardType = 1;
					element1 = [wind];
				}else if(newCard.icon === desert && craftedCard.icon === wind){
					cardType = 1;
					element1 = [fire];
				}else if(newCard.icon === mud && craftedCard.icon === earth){
					cardType = 1;
					element1 = [water];
				}else if(newCard.icon === mud && craftedCard.icon === water){
					cardType = 1;
					element1 = [earth];
				}else if(newCard.icon === storm && craftedCard.icon === water){
					cardType = 1;
					element1 = [wind];
				}else if(newCard.icon === storm && craftedCard.icon === wind){
					cardType = 1;
					element1 = [water];
				}else{
					cardType = 1;
					element1 = [newCard.icon];
				}
				for(var i=0; i<element1.length; i++){
					var usedElement = elementOrbs.indexOf(element1[i]);
					elementOrbs.splice(usedElement, 1);
				}
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
			if(card.type === "support") {
			}else{
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
						<button className="col-xs-1 coolButton goBackButton" onClick={this.props.showCollection}>Back</button>
						<div className="col-xs-offset-10 col-xs-1 infoButton" id="infoButton" onClick={this.props.toggleInfoScreen}>?</div>
					</div>
					<div className="row">
						<div className="col-xs-4">
							<div className="row createTitle">Card Frames</div>
							{this.listCardFrames()}
						</div>
						<div className="col-xs-5" id="craftingArea">
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
						<button className="col-xs-offset-4 col-xs-2 coolButton" onClick={this.handleCraftClick}>Craft</button><button className="col-xs-2 coolButton" onClick={this.handleResetClick}>Reset</button>
					</div>
				</div>
			</div>
		)
	}
}

class EndingScreen extends React.Component {
	render() {
		return (
			<div className="row">
				<div className="col-xs-12">
					<div className="row endingText">
						You Have Saved Your Family!
					</div>
					<div className="row endingText">
						Final Score: {this.props.score}
					</div>
					<div className="row" id="youberRow">
						<img  id="endingYouber0" src={youber} alt="youber" />
						<img  id="endingYouber1" src={youber} alt="youber" />
						<img  id="endingYouber2" src={youber} alt="youber" />
						<img  id="endingYouber3" src={youber} alt="youber" />
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