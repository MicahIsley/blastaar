import React from 'react';
import ReactDOM from 'react-dom';
import Firebase from 'firebase';
import config from "./config";
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import placeholderImg from './assets/icons/neutral.png';
import neutral from './assets/icons/neutral.png';
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
import bustedTreasure from './assets/icons/bustedTreasure.png';
import cardPrize from './assets/icons/cardPrize.gif';
import common from './assets/icons/common.png';
import confused from './assets/icons/confused.png';
import damagedTreasure from './assets/icons/damagedTreasure.png';
import decoySym from './assets/icons/decoySym.png';
import desert from './assets/icons/desert.png';
import earth from './assets/icons/earth.png';
import empty from './assets/icons/empty.png';
import exhaustedSym from './assets/icons/exhaustedSym.png';
import extraSym from './assets/icons/extraSym.png';
import fire from './assets/icons/fire.png';
import heart from './assets/icons/heart.png';
import int from './assets/icons/int.png';
import magicBag from './assets/icons/magicBag.png';
import regularBag from './assets/icons/regularBag.png';
import slash from './assets/icons/slash.png';
import lava from './assets/icons/lava.png';
import mud from './assets/icons/mud.png';
import obeliskOfPrizes from './assets/icons/obeliskOfPrizes.gif';
import orbPrize from './assets/icons/orbPrize.gif';
import poisoned from './assets/icons/poisoned.png';
import power from './assets/icons/power.png';
import rare from './assets/icons/rare.png';
import rewards from './assets/icons/rewards.png';
import rummageSym from './assets/icons/rummageSym.png';
import save from './assets/icons/save.png';
import shield from './assets/icons/shield.png';
import spooky from './assets/icons/spooky.png';
import storm from './assets/icons/storm.png';
import stunned from './assets/icons/stunned.png';
import tower from './assets/icons/tower.png';
import treasure from './assets/icons/treasure.gif';
import treasureChest from './assets/icons/treasureChest.png';
import trophy from './assets/icons/trophy.png';
import uncommon from './assets/icons/uncommon.png';
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
import templeBackground from './assets/backgrounds/templeBackground.png';
import boneStalker from './assets/desert/boneStalker.gif';
import championStalker from './assets/desert/championStalker.gif';
import desertGolem from './assets/desert/desertGolem.gif';
import desertMadnado from './assets/desert/desertMadnado.gif';
import duneStabber from './assets/desert/duneStabber.gif';
import grumpeel from './assets/desert/grumpeel.gif';
import predatorSnipp from './assets/desert/predatorSnipp.gif';
import sandSnipp from './assets/desert/sandSnipp.gif';
import sarcophagus from './assets/artifacts/sarcophagus.png';
import stabberConclave from './assets/desert/stabberConclave.gif';
import wanderingRelic from './assets/desert/wanderingRelic.gif';
import earthGolem from './assets/earth/earthGolem.gif';
import jewelPrimtree from './assets/earth/jewelPrimtree.gif';
import kingWobbleduk from './assets/earth/kingWobbleduk.gif';
import primtree from './assets/earth/primtree.gif';
import queenPrimtree from './assets/earth/queenPrimtree.gif';
import rockFairy from './assets/earth/rockFairy.gif';
import steed from './assets/earth/steed.gif';
import stoneStrider from './assets/earth/stoneStrider.gif';
import toughPrimtree from './assets/earth/toughPrimtree.gif';
import wobbleduk from './assets/earth/wobbleduk.gif';
import broodmother from './assets/fire/broodmother.gif';
import emberAdder from './assets/fire/emberAdder.gif';
import fireGolem from './assets/fire/fireGolem.gif';
import flameCrawler from './assets/fire/flameCrawler.gif';
import flameScrabler from './assets/fire/flameScrabler.gif';
import grandTipper from './assets/fire/grandTipper.gif';
import kragmup from './assets/fire/kragmup.gif';
import morp from './assets/fire/morp.gif';
import pheonixWyrm from './assets/fire/pheonixWyrm.gif';
import tipper from './assets/fire/tipper.gif';
import emberite from './assets/lava/emberite.gif';
import lavaGolem from './assets/lava/lavaGolem.gif';
import lavaLordWalker from './assets/lava/lavaLordWalker.gif';
import lavaWalker from './assets/lava/lavaWalker.gif';
import moltasaurus from './assets/lava/moltasaurus.gif';
import moltasaurusRex from './assets/lava/moltasaurusRex.gif';
import moltenPedestal from './assets/artifacts/moltenPedestal.png';
import nutrite from './assets/lava/nutrite.gif';
import trekapod from './assets/lava/trekapod.gif';
import volcanoTrampler from './assets/lava/volcanoTrampler.gif';
import walkingEruption from './assets/lava/walkingEruption.gif';
import archmageMuckster from './assets/mud/archmageMuckster.gif';
import bogBoar from './assets/mud/bogBoar.gif';
import duchessWarthus from './assets/mud/duchessWarthus.gif';
import grandGoo from './assets/artifacts/grandGoo.png';
import greaterGalope from './assets/mud/greaterGalope.gif';
import lesserGalope from './assets/mud/lesserGalope.gif';
import muckster from './assets/mud/muckster.gif';
import mudGolem from './assets/mud/mudGolem.gif';
import sominus from './assets/mud/sominus.gif';
import toxicRoller from './assets/mud/toxicRoller.gif';
import warthus from './assets/mud/warthus.gif';
import elderStorm from './assets/artifacts/elderStorm.png';
import enlightenedRainWolf from './assets/storm/enlightenedRainWolf.gif';
import greatShockShark from './assets/storm/greatShockShark.gif';
import lightningBug from './assets/storm/lightningBug.gif';
import rainWolf from './assets/storm/rainWolf.gif';
import scorchedTreeGhast from './assets/storm/scorchedTreeGhast.gif';
import shelterThump from './assets/storm/shelterThump.gif';
import shockShark from './assets/storm/shockShark.gif';
import staticCatcher from './assets/storm/staticCatcher.gif';
import staticGlider from './assets/storm/staticGlider.gif';
import stormGolem from './assets/storm/stormGolem.gif';
import borgus from './assets/tower/borgus.gif';
import gangOfFleebs from './assets/tower/gangOfFleebs.gif';
import misterBorgus from './assets/tower/misterBorgus.gif';
import purpleKreep from './assets/tower/purpleKreep.gif';
import reacher from './assets/tower/reacher.gif';
import rundarr from './assets/tower/rundarr.gif';
import sinisterSloop from './assets/tower/sinisterSloop.gif';
import soulShredder from './assets/tower/soulShredder.gif';
import superPincher from './assets/tower/superPincher.gif';
import tooger from './assets/tower/tooger.gif';
import toogerShadow from './assets/tower/toogerShadow.png';
import albinoSlapper from './assets/water/albinoSlapper.gif';
import budleFairy from './assets/water/budleFairy.gif';
import caveThump from './assets/water/caveThump.gif';
import coralThump from './assets/water/coralThump.gif';
import ghostShark from './assets/water/ghostShark.gif';
import kingSlapper from './assets/water/kingSlapper.gif';
import marshSlapper from './assets/water/marshSlapper.gif';
import superBudleFairy from './assets/water/superBudleFairy.gif';
import trenchThump from './assets/water/trenchThump.gif';
import waterGolem from './assets/water/waterGolem.gif';
import alphaSpookaw from './assets/wind/alphaSpookaw.gif';
import empressMadnado from './assets/wind/empressMadnado.gif';
import floofer from './assets/wind/floofer.gif';
import maclaw from './assets/wind/maclaw.gif';
import madnado from './assets/wind/madnado.gif';
import raaHowler from './assets/wind/raaHowler.gif';
import spookaw from './assets/wind/spookaw.gif';
import windFlitter from './assets/wind/windFlitter.gif';
import windGolem from './assets/wind/windGolem.gif';
import windleFairy from './assets/wind/windleFairy.gif';
import youber from './assets/youber.gif';
import walkLeft from './assets/walkLeft.gif';
import walkRight from './assets/walkRight.gif';
import walkUp from './assets/walkUp.png';
import background from './assets/audio/audio.m4a';
import click from './assets/audio/click.mp3';
import attackSound from './assets/audio/attackSound.wav';
import collectSound from './assets/audio/collectSound.mp3';
import mainTitles from './assets/audio/mainTitles3.m4a';
import mistyWoods from './assets/audio/mistyWoods.m4a';
import intense from './assets/audio/intense.m4a';
import brightStyle from './assets/audio/brightStyle.m4a';
import distantChimes from './assets/audio/distantChimes.m4a';
import findingOut from './assets/audio/findingOut.m4a';
import fireDestruction from './assets/audio/fireDestruction.m4a';
import majesticLad from './assets/audio/majesticLad.m4a';
import mysteryMud from './assets/audio/mysteryMud.m4a';
import defeat from './assets/audio/defeat.m4a';
import victory from './assets/audio/victory.m4a';
import hitSound from './assets/audio/hit.wav';
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
import earthSection from './assets/backgrounds/earthSection.png';
import fireSection from './assets/backgrounds/fireSection.png';
import waterSection from './assets/backgrounds/waterSection.png';
import windSection from './assets/backgrounds/windSection.png';
import desertSection from './assets/backgrounds/desertSection.png';
import lavaSection from './assets/backgrounds/lavaSection.png';
import mudSection from './assets/backgrounds/mudSection.png';
import stormSection from './assets/backgrounds/stormSection.png';
import towerSection from './assets/backgrounds/towerSection.png';
import earthSectionHidden from './assets/backgrounds/earthSectionHidden.png';
import fireSectionHidden from './assets/backgrounds/fireSectionHidden.png';
import waterSectionHidden from './assets/backgrounds/waterSectionHidden.png';
import windSectionHidden from './assets/backgrounds/windSectionHidden.png';
import desertSectionHidden from './assets/backgrounds/desertSectionHidden.png';
import lavaSectionHidden from './assets/backgrounds/lavaSectionHidden.png';
import mudSectionHidden from './assets/backgrounds/mudSectionHidden.png';
import stormSectionHidden from './assets/backgrounds/stormSectionHidden.png';
import towerSectionHidden from './assets/backgrounds/towerSectionHidden.png';
import earthSecret from './assets/earth/earthSecret.png';
import earthSecretRevealed from './assets/earth/earthSecretRevealed.png';
import fireSecret from './assets/fire/fireSecret.png';
import fireSecretRevealed from './assets/fire/fireSecretRevealed.png';
import waterSecret from './assets/water/waterSecret.png';
import waterSecretRevealed from './assets/water/waterSecretRevealed.png';
import windSecret from './assets/wind/windSecret.png';
import windSecretRevealed from './assets/wind/windSecretRevealed.png';
import desertMasterYouber from './assets/costumes/desertMasterYouber.gif';
import earthMasterYouber from './assets/costumes/earthMasterYouber.gif';
import fireMasterYouber from './assets/costumes/fireMasterYouber.gif';
import lavaMasterYouber from './assets/costumes/lavaMasterYouber.gif';
import mudMasterYouber from './assets/costumes/mudMasterYouber.gif';
import stormMasterYouber from './assets/costumes/stormMasterYouber.gif';
import waterMasterYouber from './assets/costumes/waterMasterYouber.gif';
import windMasterYouber from './assets/costumes/windMasterYouber.gif';
import earthArtifact from './assets/artifacts/earthArtifact.png';
import earthKey from './assets/artifacts/earthKey.png';
import fireArtifact from './assets/artifacts/fireArtifact.png';
import fireKey from './assets/artifacts/fireKey.png';
import waterArtifact from './assets/artifacts/waterArtifact.png';
import waterKey from './assets/artifacts/waterKey.png';
import windArtifact from './assets/artifacts/windArtifact.png';
import windKey from './assets/artifacts/windKey.png';
import desertScroll from './assets/artifacts/desertScroll.png';
import earthScroll from './assets/artifacts/earthScroll.png';
import fireScroll from './assets/artifacts/fireScroll.png';
import lavaScroll from './assets/artifacts/lavaScroll.png';
import mudScroll from './assets/artifacts/mudScroll.png';
import stormScroll from './assets/artifacts/stormScroll.png';
import waterScroll from './assets/artifacts/waterScroll.png';
import windScroll from './assets/artifacts/windScroll.png';
import boulderDoor from './assets/templePath/boulderDoor.png';
import dirtDoor from './assets/templePath/dirtDoor.png';
import earthMarkedDoor from './assets/templePath/earthMarkedDoor.png';
import emptyDoor from './assets/templePath/emptyDoor.png';
import fireDoor from './assets/templePath/fireDoor.png';
import fireMarkedDoor from './assets/templePath/fireMarkedDoor.png';
import iceDoor from './assets/templePath/iceDoor.png';
import ironDoor from './assets/templePath/ironDoor.png';
import magicDoor from './assets/templePath/magicDoor.png';
import mortemus from './assets/templePath/mortemus.gif';
import oldDoor from './assets/templePath/oldDoor.png';
import runeDoor from './assets/templePath/runeDoor.png';
import shockDoor from './assets/templePath/shockDoor.png';
import tornadoDoor from './assets/templePath/tornadoDoor.png';
import vineDoor from './assets/templePath/vineDoor.png';
import waterDoor from './assets/templePath/waterDoor.png';
import waterMarkedDoor from './assets/templePath/waterMarkedDoor.png';
import windMarkedDoor from './assets/templePath/windMarkedDoor.png';
import earthStalactite from './assets/templePath/earthStalactite.gif';
import fireStalactite from './assets/templePath/fireStalactite.gif';
import waterStalactite from './assets/templePath/waterStalactite.gif';
import windStalactite from './assets/templePath/windStalactite.gif';
import prisonOrbBlank from './assets/templePath/prisonOrbBlank.gif';
import prisonOrbE from './assets/templePath/prisonOrbE.gif';
import prisonOrbEF from './assets/templePath/prisonOrbEF.gif';
import prisonOrbEFI from './assets/templePath/prisonOrbEFI.gif';
import prisonOrbEFW from './assets/templePath/prisonOrbEFW.gif';
import prisonOrbEFWI from './assets/templePath/prisonOrbEFWI.gif';
import prisonOrbEI from './assets/templePath/prisonOrbEI.gif';
import prisonOrbEW from './assets/templePath/prisonOrbEW.gif';
import prisonOrbEWI from './assets/templePath/prisonOrbEWI.gif';
import prisonOrbF from './assets/templePath/prisonOrbF.gif';
import prisonOrbFI from './assets/templePath/prisonOrbFI.gif';
import prisonOrbFW from './assets/templePath/prisonOrbFW.gif';
import prisonOrbFWI from './assets/templePath/prisonOrbFWI.gif';
import prisonOrbI from './assets/templePath/prisonOrbI.gif';
import prisonOrbW from './assets/templePath/prisonOrbW.gif';
import prisonOrbWI from './assets/templePath/prisonOrbWI.gif';
import './index.css';

var player;
var enemy0Slot = {};
var enemy1Slot = {};
var enemy2Slot = {};
var createEnemy;
var prisonOrbBlank2 = prisonOrbBlank;
var prisonOrbE2 = prisonOrbE;
var prisonOrbEF2 = prisonOrbEF;
var prisonOrbEFI2 = prisonOrbEFI;
var prisonOrbEFWI2 = prisonOrbEFWI;
var prisonOrbEI2 = prisonOrbEI;
var prisonOrbEW2 = prisonOrbEW;
var prisonOrbEWI2 = prisonOrbEWI;
var prisonOrbF2 = prisonOrbF;
var prisonOrbFI2 = prisonOrbFI;
var prisonOrbFW2 = prisonOrbFW;
var prisonOrbFWI2 = prisonOrbFWI;
var prisonOrbI2 = prisonOrbI;
var prisonOrbW2 = prisonOrbW;
var prisonOrbWI2 = prisonOrbWI;

var storyText = [
	{level: "first", timing: "Start", text: "Youber awakens from a terrible dream. His home is dark and empty. Calling out, he soon realizes that he is alone. His family is gone. It finally happened. Youber grabs his grandfather's magic sack and walks out into the beyond."},
];

var earthText = [
	{type: "start", timing: 0, text: "Youber recalls his grandfather talking about disappearing, as if it was inevitable. Though he never mentioned why or how. Perhaps the forest will hold some answers. Youber entered the woods, prepared for whatever perils might befall him."},
	{type: "start", timing: 0.5, text: "Youber takes a moment to collect his thoughts. The creatures seem considerably agitated. Youber looks around and finds some interesting items. These must enhance the magic sack. A quick rest and then further into the woods."},
	{type: "start", timing: 1, text: "Youber, feeling slightly empowered, presses through the ever thickening growth. The trees look more unnatural the farther Youber travels. Youber stumbles down an embankment and finds himself confronted by more creatures. They don't look particularly pleased..."},
	{type: "start", timing: 1.5, text: "What's this? Youber collects a glowing orb, he can now add the magic of the forest to his cards. The forest grow darker and more dangerous as Youber presses onward. This new power will be very useful."},
	{type: "start", timing: 2, text: "Youber is undeterred by danger and finds his way into the heart of the forest. The trees give way to a clearing and Youber quickly realizes he has been surrounded...and there's something very large looming in the distance."},
	{type: "start", timing: 2.5, text: "With the denizens of the forest defeated, they seem to relax for just a moment. The leader hands over a key. They haven't seen Youber's family, but they have suffered disappearances of there own. West, they claim, the sickness lies West. As Youber ventures away his bag begins to radiate a strong pink glow. Quickly, it subsides, leaving runes etched in the sides. Youber now has a magic bag."},
	{type: "regular", timing: 0, text: "Youber decides his quest leads into the forests of Primafauna. He remembers hearing stories about the woods and the gentle creatures that lived there. Hopefully, Youber's journey will be unevent...what was that? The trees rustle and branches snap. Youber is not alone."},
	{type: "regular", timing: 0.5, text: "Youber takes a moment to collect his thoughts. The creatures seem far from gentle. However, Youber will not give up, he can feel that he's getting closer. A quick rest and then further into the woods."},
	{type: "regular", timing: 1, text: "Youber, feeling slightly empowered, presses through the ever thickening growth. Youber stumbles down an embankment and finds himself confronted by more creatures. They don't look particularly pleased..."},
	{type: "regular", timing: 1.5, text: "The Earth Scroll! This will certainly be useful. Youber looks around and sees a crossroads, with paths leading out of the forest. Still, the tress are luring Youber deeper in. More secrets and power lie ahead. Decisions, decisions..."},
	{type: "regular", timing: 2, text: "Youber is undeterred by danger and finds his way into the heart of the forest. The trees give way to a clearing and Youber quickly realizes he has been surrounded...and there's something very large looming in the distance."},
	{type: "regular", timing: 2.5, text: "With the denizens of the forest defeated, they seem to relax for just a moment. The leader hands over a key and tells Youber about a growing corruption in the West. The creatures seems to be growing agitated once more. Youber presses onward..."},
	{type: "regular", timing: 3, text: "Youber can't seem to stay away from the forest for too long. Surely there is more hidden behind these Vine covered trees."},
	{type: "regular", timing: 3.5, text: "Youber grows in the ways of the Earth. He must think that this is the power he needs to complete his quest."}

];

var earthTempleText = [
	{type: "start", timing: 0, text: "The hidden path leads to a cave. Youber can sense magic thrumming in the air around him. This place is very old and surely treacherous, but great are the rewards for brave adventurers."}
];

var fireText = [
	{type: "start", timing: 0, text: "Youber recalls his grandfather talking about disappearing, as if it was inevitable. Though he never mentioned why or how. Perhaps the Fire Fields will hold some answers. Youber entered the burning plains, prepared for whatever perils might befall him."},
	{type: "start", timing: 0.5, text: "Youber wipes his brow and collects his thoughts. On the ground, Youber finds a new spell. Youber takes a quick break to make some modifications."},
	{type: "start", timing: 1, text: "Youber treads carefully around the fire rivers and listening for any sulfuric explosions. The sky is always dark here, even when there are no clouds. Youber is starting to understand why anything that lived here would have poor manners. Speaking of which, here come some now..."},
	{type: "start", timing: 1.5, text: "What's this? Youber collects a glowing orb, he can now add fire magic to his cards. Youber must continue to brave the smoldering wasteland. First a snack, then onward."},
	{type: "start", timing: 2, text: "The fire creatures grow more numerous as Youber presses onward. Youber notices large markings, something large lives here, splendid. The ground rumbles, not a fissure. Youber steels himself for conflict."},
	{type: "start", timing: 2.5, text: "Youber defeats the leader and presses for information. A growing terror lives in the East. A key is pressed into Youber's hand. Youber knows that his quest must lead him there. As Youber ventures away his bag begins to radiate a strong pink glow. Quickly, it subsides, leaving runes etched in the sides. Youber now has a magic bag."},
	{type: "regular", timing: 0, text: "Youber adventures into the fearsome Fire Fields. The inhabitants have a fearsome reputation. Youber will have to be ready for anything. Perhaps here he will discover some clues about his family's disappearance."},
	{type: "regular", timing: 0.5, text: "Although painful, this place is good for training. Youber feels his Fire powers growing. The more powerful he gets, the better chance of rescuing his family."},
	{type: "regular", timing: 1, text: "Youber treads carefully around the fire rivers and listening for any sulfuric explosions. The sky is always dark here, even when there are no clouds. Youber is starting to understand why anything that lived here would have poor manners. Speaking of which, here come some now..."},
	{type: "regular", timing: 1.5, text: "A scroll bering the secrets of fire magic lies before Youber. Youber quickly scoops it up. Sweating profusely, Youber ponders his next steps. Move on to cooler pastures or persue whatever secrets this burning land holds."},
	{type: "regular", timing: 2, text: "A large crag conceals Youber's path forward. Upon cresting the peak, Youber sees a gathering of monsters surrounding a hulking figure. Youber is scared, but his quest must go on."},
	{type: "regular", timing: 2.5, text: "The monsters hush as Youber stands alone in victory. Youber learns of more powerful lands beyond this place, but mastering just Fire will not be enough to venture there. The fire leader gives Youber a key. Feeling inspired, Youber takes his sack and sets a new course."},
	{type: "regular", timing: 3, text: "Why would Youber return to such an awful place. Secrets, promises of power, heaps of Ash laying undisturbed. Youber will need all the help he can get if his quest is to be completed."},
	{type: "regular", timing: 3.5, text: "Fire is an alluring power and Youber has claimed much of its power. Perhaps a little more?"}
];

var fireTempleText = [
	{type: "start", timing: 0, text: "Youber descends into the hidden pit. The heat subsides and Youber sees a faint glow further down. A hidden temple, full of secrets and riches. Youber loves both, but mostly secrets."}
];

var waterText = [
	{type: "start", timing: 0, text: "Youber recalls his grandfather talking about disappearing, as if it was inevitable. Though he never mentioned why or how. Perhaps the Islands of Ruu will hold some answers. Youber crosses into the tropical paradise, preparing for whatever perils might befall him."},
	{type: "start", timing: 0.5, text: "Youber is taken aback at finding so much hostility in such a warm, welcoming place. At least he found some fancy looking gems. Youber instinctively feels that they will improve his magic sack in some way. Youber spends a moment discovering how."},
	{type: "start", timing: 1, text: "Youber slowly makes his way to the larger islands. They are streaked with greys and blacks. Dull colors that feel out of place in this vibrant climate. Youber spies some monsters roaming the coast, they are headed his way..."},
	{type: "start", timing: 1.5, text: "What's this? Youber collects a glowing orb, he can now add the magic of the islands to his cards. Youber feels that these islands hold more secrets. What will Youber do next?"},
	{type: "start", timing: 2, text: "The largest island lies ahead, accompanied by the largest throng of monsters. The leader looms larger among them. Youber, determined to continue his quest, ventures forward, looking for answers."},
	{type: "start", timing: 2.5, text: "The leader defeated, Youber manages to extract some useful information and a key. The dull palate is a new phenomenom here, creeping in from the North-West. Also, monsters have been disappearing from the Islands too. The monsters suddenly stop sharing and begin glaring at Youber. As Youber ventures away his bag begins to radiate a strong pink glow. Quickly, it subsides, leaving runes etched in the sides. Youber now has a magic bag."},
	{type: "regular", timing: 0, text: "Youber's questing leads him to the Islands of Ruu. A tropical paradise, though Youber has never been too fond of the water."},
	{type: "regular", timing: 0.5, text: "Youber is taken aback at finding so much hostility in such a warm, welcoming place. At least Youber is learning some of the Water power that permeates the islands. No family yet, but Youber know every step he gets closer."},
	{type: "regular", timing: 1, text: "Youber slowly makes his way to the larger islands. They are streaked with greys and blacks. Dull colors that feel out of place in this vibrant climate. Youber spies some monsters roaming the coast, they are headed his way..."},
	{type: "regular", timing: 1.5, text: "Lying in the debris is the scroll of water, which Youber pockets and moves on. Youber hears a rumor of danger across the waters. Could this be where his family was taken?"},
	{type: "regular", timing: 2, text: "The largest island lies ahead, accompanied by the largest throng of monsters. The leader looms larger among them. Youber, determined to continue his quest, ventures forward, looking for answers."},
	{type: "regular", timing: 2.5, text: "Youber learns of an ever raging tempest to the West, a place with powerful magic. However, it seems that Water will not be enough to find the way there. Youber is given a key and knows that his quest leads to new lands."},
	{type: "regular", timing: 3, text: "Youber returns to the islands, hoping to grow stronger in the way of Water. Was every crevase explored? Did Youber look behind every Waterfall?"},
	{type: "regular", timing: 3.5, text: "Youber's mastery with Water grows and grows. His magic sack will hopefully be strong enough to save his family."}
];

var waterTempleText = [
	{type: "start", timing: 0, text: "The grotto is much larger on the inside. The moisture in the air seems to glow. Youber can smell the rot of ancient ruins. The path forward isn't clear, but Youber wants to find out what precious secrets lie within."}
];

var windText = [
	{type: "start", timing: 0, text: "Youber recalls his grandfather talking about disappearing, as if it was inevitable. Though he never mentioned why or how. Perhaps the towering crags will hold some answers. Youber crosses into the wind-swept landscape, preparing for whatever perils might befall him."},
	{type: "start", timing: 0.5, text: "Dueling on the cliffs is dangerous, but it appears Youber has discovered some interesting gems. Perhaps Youber can use these to make his sack more powerful. A quick moment to rest and then the climing continues."},
	{type: "start", timing: 1, text: "These caves don't just howl, they moan. And the smell is nigh unbearable. However, Youber is confident that he will only finish his quest if he braves the caves. Speaking of danger..."},
	{type: "start", timing: 1.5, text: "What's this? Youber collects a glowing orb, he can now add the magic of the spires to his cards. Youber continues to scour the cliffs for answers and secrets."},
	{type: "start", timing: 2, text: "Youber reaches the top of the tallest spire. The howling is almost deafening, Youber enters the cavern and within moments realizes he is vastly outnumbered. Youber opens the magic sack..."},
	{type: "start", timing: 2.5, text: "Youber has defended himself and conquered the champion of the cliffs. The champion hands over a key and tells Youber of a dark shroud that lies to the East. Creatures from the caves have been disapearing into the shroud. As Youber ventures away his bag begins to radiate a strong pink glow. Quickly, it subsides, leaving runes etched in the sides. Youber now has a magic bag."},
	{type: "regular", timing: 0, text: "Youber scales the heights of the Howling Caverns. These caves surely hold many secrets."},
	{type: "regular", timing: 0.5, text: "Dueling on the cliffs is dangerous, but it appears Youber has discovered some Wind magic. A quick moment to rest and then the climing continues."},
	{type: "regular", timing: 1, text: "These caves don't just howl, they moan. And the smell is nigh unbearable. However, Youber is confident that he will only finish his quest if he braves the caves. Speaking of danger..."},
	{type: "regular", timing: 1.5, text: "The wind scroll now belongs to Youber. Also, Chutes! Pathways to other lands. One to the Fire Fields and the other to the tropical region. These could be useful to Youber. Youber can also contining scouring the cliffs for answers and secrets."},
	{type: "regular", timing: 2, text: "Youber reaches the top of the tallest spire. The howling is almost deafening, Youber enters the cavern and within moments realizes he is vastly outnumbered. Youber opens the magic sack..."},
	{type: "regular", timing: 2.5, text: "After the battle subsides, a key materializes in Youber's hand. Youber can see far into the distance from up here. A desert and a massive storm lingering on the horizon. Is Youber destined to visit these lands? Will the Wind magic be enough?"},
	{type: "regular", timing : 3, text: "There are so many caverns that Youber had to return to explore. Youber is convinced that powerful magic lies dormant in these cliffs. Perhaps it is guarded by trap, like Poison Gas?"},
	{type: "regular", timing: 3.5, text: "The rush of learning Wind magic excites Youber. Wanting to rescue his family drives him forward, but learn to fly would be really really sweet."}
];

var windTempleText = [
	{type: "start", timing: 0, text: "The poisonous fumes drain away and a grand doorway remains. A temple, surely dangerous, but surely rewarding. Youber hopes for the best and enters boldly."}
];

var desertText = [
	{type: "regular", timing: 0, text: "Having learned the magic of Fire and Wind, the path to the Barrens of Dust reveals itself. The sun grows hotter, the air drier. Youber needs a drink, but on quests, sacrifices must be made."},
	{type: "regular", timing: 0.5, text: "As Youber treks through the desert, an image looms in the distance. Not a mirage, but a dark tower, looming ominously. Now Youber must find the path forward."},
	{type: "regular", timing: 1, text: "The shifting sands make travel difficult, but Youber carries on. The bones emerging from the dunes grow more numerous and the monsters living here are certainly fierce."},
	{type: "regular", timing: 1.5, text: "Desert magic is powerful, Youber discovers a scroll holding the secrets of the dunes. With this power in his magic sack, Youber believes he stands a change at completing his quest."},
	{type: "regular", timing: 2, text: "A large gathering in the desert stops Youber in his tracks. Do they know the way to the Tower? Youber slowly emerges into the fray. Time to find out."},
	{type: "regular", timing: 2.5, text: "The desert Lord knows the way to the Tower, but it is accompanied by harsh warnings. Death awaits all who venture there. Does Youber charge straight towards his destiny or spend some more time growing in power?"},
	{type: "regular", timing: 3, text: "The deserts are always shifting, revealing new paths where before there were none. Youber decideds to explore a bit more, longing for some ancient Desert magic."},
	{type: "regular", timing: 3.5, text: "Youber is beginning to enjoy the dunes and the Desert magic that flows through them. Youber feeling stronger than ever, gazes at the Tower, knowing that it's waiting for him."}
];

var lavaText = [
	{type: "regular", timing: 0, text: "Fire and Earth open the path for Youber to venture into the Magma Lands. The ground trembles beneath his feet and the air boils. If there are any secrets here, they must be found quickly."},
	{type: "regular", timing: 0.5, text: "Lava magic will be a useful addition to the magic sack. Youber doesn't like being in constant danger, but at least the rewards are sweet."},
	{type: "regular", timing: 1, text: "The monsters that live here seem to congregate close to the largest volcano. Youber makes his way straight towards it, no matter what's in his way..."},
	{type: "regular", timing: 1.5, text: "A scroll containing lava magic lies on the ground. It's amazing parchment exists in such a place. The grand volcano spews constant ash into the air, but the sky is even darker to the South. Youber suspects there are greater powers than volcanos in this land."},
	{type: "regular", timing: 2, text: "Almost as the peak, Youber feels a great tembling. Quickly realizing that it's not the mount that trembles, but a horde of monsters surrounding Youber."},
	{type: "regular", timing: 2.5, text: "Youber stands on the precipice and sees in the distance a black tower rising over the horizon. Youber believes he sees the path forward, but he is unsure whether his power is great enough to challenge the tower. Either way, the questing continues."},
	{type: "regular", timing: 3, text: "Youber returns to the tumultuous land of lava in hopes of finding a massive secret. There have always been tales of the great volcano being powered by unlimited power. Sounds useful."},
	{type: "regular", timing: 3.5, text: "The Lava magic asks much from Youber and gives much in return. The longer Youber stays here the more magic his magic bag becomes."}
];

var mudText = [
	{type: "regular", timing: 0, text: "As Youber travels between the edge of the forest and the coast, he can smell the bog long before he arrives. The mud seems lively here and magic seems to radiate from every surface."},
	{type: "regular", timing: 0.5, text: "The Mudlands seem eager to defend themselves from Youber. He is not the first creature to come here in hopes of harnessing the magic here."},
	{type: "regular", timing: 1, text: "The path is almost impossible to follow and Youber makes many sticky mistakes. And the creatures here are just waiting for Youber to slip..."},
	{type: "regular", timing: 1.5, text: "Youber slowly learns the way of mud magic from a scroll he discovers after the skirmish. A dark shadow lingers everywhere, disturbing even the monsters who live here."},
	{type: "regular", timing: 2, text: "The obelisks of mud grow more numerous and dramatic. Twisting and surging in impossible ways. Youber notices a large dome ahead...except it's alive!"},
	{type: "regular", timing: 2.5, text: "The large mud creature bellows about the tower. A tower which haunts everything around it. Youber is informed of the path West and moves to the next stage of his journey."},
	{type: "regular", timing: 3, text: "The mud is hard to leave behind. Especially when Youber learned such powerful magic here. What if Youber found a secret power, one that would finally save his family?"},
	{type: "regular", timing: 3.5, text: "The magic of Mud is worth the risks found in the bog. Youber merely wants to save his family and find secrets. Youber likes secrets."}
];

var stormText = [
	{type: "regular", timing: 0, text: "Using the power of Wind and Water to make his way into the storm, Youber forgoes shelter in favor of answers. Whatever or whoever is waiting for him here will bring him one step closer to his family."},
	{type: "regular", timing: 0.5, text: "Youber discovers a small piece of storm magic. Placing it in his sack, Youber walks further into the tempest and double-checks that he isn't wearing any metal."},
	{type: "regular", timing: 1, text: "The wind grows wild and the driving rain swirls around Youber. Any threats are impossible to see coming. How can anything call this place home? Alas, what was that..."},
	{type: "regular", timing: 1.5, text: "Flashes of lighting reveal the landscape around Youber. A scroll lies tucked away in an alcove. Storm magic. Finally."},
	{type: "regular", timing: 2, text: "The eye of the storm. Youber has a fleeting moment of relief before realizing the monsters circle above. A large shadow swallows Youber from above..."},
	{type: "regular", timing: 2.5, text: "Victorious, Youber commands the monsters attention and learns of a towering tower the towers in the North. Nothing flies there and returns. Youber walks back into the storm, knowing his destiny awaits."},
	{type: "regular", timing: 3, text: "Youber comes prepared this time to enter the storm. This will help him find the secrets that are disguised by the driving rains. Youber must find more power!"},
	{type: "regular", timing: 3.5, text: "Storm magic courses through Youber. He feels strong, but will it be enough. Self-doubt has always been a struggle for Youber."}
];

var towerText = [
	{type: "regular", timing: 0, text: "Finally, the path to the tower revealed itself and Youber finds himself about to ascend it. Afterall, shouldn't the reward to all quest end at the top of an treacherous tower?"},
	{type: "regular", timing: 0.5, text: "Youber has found his family! Now that evil has been vanquished, Youber can return home and live a life of peace and hapiness."}
];

var tutorialText = [
	{type: "regular", timing: 0, text: ""},
	{type: "regular", timing: 0.5, text: ""}
];

var sabotage1 = new CardCon("Tripped Up", 0, 0, "Hit the ground", "enemy", 0, "", "", false, "stormlight", placeholderImg, placeholderImg, "enemy", 0);
var sabotage2 = new CardCon("Off Balance", 0, -1, "Woozy", "enemy", 0, "", "", false, "stormlight", placeholderImg, placeholderImg, "enemy", 0);
var sabotage3 = new CardCon("Raging Storm", 0, -2, "So Fierce", "enemy", 0, "", "", false, "stormlight", placeholderImg, placeholderImg, "enemy", 0);
var sabotage4 = new CardCon("Steamed", 0, -3, "Super way too hot", "enemy", 0, "", "", false, "stormlight", placeholderImg, placeholderImg, "enemy", 0);
var sabotage5 = new CardCon("Disrupt", 0, 0, "No Wrd", "enemy", 0, "blockW", "", false, "stormlight", placeholderImg, placeholderImg, "enemy", 0);
var sabotage6 = new CardCon("Sickness", 0, 0, "No Hl", "enemy", 0, "blockH", "", false, "stormlight", placeholderImg, placeholderImg, "enemy", 0);
var sabotage7 = new CardCon("Mind Scramble", 0, 0, "No Card Abilities", "enemy", 0, "blockA", "", false, "stormlight", placeholderImg, placeholderImg, "enemy", 0);
var sabotage8 = new CardCon("Leech", 0, 0, "Enemy gets +1 HP when attacked.", "enemy", 0, "siphon 1", "", false, "stormlight", placeholderImg, placeholderImg, "enemy", 0);
var sabotage9 = new CardCon("Big Leech", 0, 0, "Enemy gets +2 HP when attacked.", "enemy", 0, "siphon 2", "", false, "stormlight", placeholderImg, placeholderImg, "enemy", 0);
var sabotage10 = new CardCon("Exhaustion", 0, 0, "Get Exhausted", "enemy", 0, "enemyExhst", "", false, "stormlight", placeholderImg, placeholderImg, "enemy", 0);
var sabotage11 = new CardCon("Brain Dead", 0, -4, "", "enemy", 0, "", "", false, "stormlight", placeholderImg, placeholderImg, "enemy", 0);
var sabotage12 = new CardCon("Super Leech", 0, 0, "Enemy gets +3 HP when attacked.", "enemy", 0, "siphon 3", "", false, "stormlight", placeholderImg, placeholderImg, "enemy", 0);

var crafting1 = new CardCon("------", 0, 0, " ", "hero", 0, "", "", false, "stormlight", placeholderImg, placeholderImg, "neutral", 0, 1, 0);

var neutral1 = new CardCon("Small Rock", 0, 2, "It's pretty small.", "hero", 1, "", "", false, "stormlight", placeholderImg, neutral, "neutral", 1, 0, 4);
var neutral2 = new CardCon("Big Rock", 0, 4, "It's pretty big.", "hero", 1, "", "", false, "stormlight", placeholderImg, neutral, "neutral", 2, 0, 3);
var neutral3 = new CardCon("Thick Skin", 0, 2, "Ward 3.", "hero", 1, "ward 3", "", false, "stormlight", placeholderImg, neutral, "neutral", 3, 0, 2);
var neutral4 = new CardCon("Short Rest", 0, 2, "Heal 3.", "hero", 1, "heal 3", "", false, "stormlight", placeholderImg, neutral, "neutral", 4, 0, 2);
var neutral5 = new CardCon("Focus", 0, 1, "Next Spell +3.", "hero", 1, "next 3", "", false, "stormlight", placeholderImg, neutral, "neutral", 5, 0, 2);
var neutral6 = new CardCon("Reach Back In", 0, 3, "Rummage 2.", "hero", 1, "rummage 2", "", false, "stormlight", placeholderImg, neutral, "neutral", 6, 0, 2);
var neutral7 = new CardCon("Store Energy", 0, 3, "Gain 1 Energy.", "hero", 1, "energy 1", "", false, "stormlight", placeholderImg, neutral, "neutral", 7, 0, 2);
var neutral8 = new CardCon("Crippling Shot", 0, 1, "Weaken 1.", "hero", 1, "weaken 1", "", false, "stormlight", placeholderImg, neutral, "neutral", 8, 0, 1);
var neutral9 = new CardCon("Shrug Off", 0, 2, "Reclaim 1.", "hero", 1, "reclaim 1", "", false, "stormlight", placeholderImg, neutral, "neutral", 9, 0, 0);
var neutral10 = new CardCon("Smooth Rock", 0, 3, "Finesse 1.", "hero", 1, "finesse 1", "", false, "stormlight", placeholderImg, neutral, "neutral", 10, 0, 0);
var neutral11 = new CardCon("Finicky Orb", 0, 4, "Random. Energy 3/0.", "hero", 1, "random", "energy 3/energy 0", false, "stormlight", placeholderImg, neutral, "neutral", 11, 0, 0);
var neutral12 = new CardCon("Biggest Rock", 0, 6, "Whaaam.", "hero", 2, "", "", false, "stormlight", placeholderImg, neutral, "neutral", 12, 0, 1); 
var neutral13 = new CardCon("Mystery Spell", 0, 3, "Random. Heal 5/+5 Damage.", "hero", 2, "random", "heal 5/damage 5", false, "stormlight", placeholderImg, neutral, "neutral", 13, 0, 0);
var neutral14 = new CardCon("Soul Lasso", 0, 2, "Capture 1.", "hero", 2, "capture 1", "", false, "stormlight", placeholderImg, neutral, "neutral", 14, 0, 0);
var neutral15 = new CardCon("Powerful Shove", 0, 9, "Exhausted.", "hero", 2, "exhausted", "", false, "stormlight", placeholderImg, neutral, "neutral", 15, 0, 0);
var neutral16 = new CardCon("Battle Ball", 1, 8, "Heal 2. Ward 2.", "hero", 2, "heal 2", "ward 2", false, "stormlight", placeholderImg, neutral, "neutral", 16, 0, 0); 
var neutral17 = new CardCon("More Stuff", 1, 1, "Add 3 Energy Blasts into your deck.", "hero", 2, "addCard 1 3", "", false, "stormlight", placeholderImg, neutral, "neutral", 17, 0, 1);
var neutral18 = new CardCon("Gloop Goop", 1, 0, "Neutral Boost.", "hero", 3, "factionBoost", "", false, "stormlight", placeholderImg, neutral, "neutral", 18, 0, 0);
var neutral19 = new CardCon("Magic Rock", 1, 5, "Random. Next +3/Energy 3.", "hero", 3, "random", "next 3/rummage 3", false, "stormlight", placeholderImg, neutral, "neutral", 19, 0, 0);
var neutral20 = new CardCon("Grey Goo", 0, 0, "Ew.", "hero", 3, "addCard 2 1", "remove", false, "stormlight", placeholderImg, neutral, "neutral", 20, 0, 0);
//var neutral19 = new CardCon("Plot", 1, 0, "Scheme.", "hero", 2, "scheme neutral 2 4", 1, false, "character", placeholderImg, neutral, "neutral", 19, 0, 0);
//var neutral20 = new CardCon("Master Scheme", 4, 0, "Scheme 5.", "hero", 3, "scheme neutral 5 8", 1, false, "character", placeholderImg, neutral, "neutral", 20, 0, 0);

var neutral51 = new CardCon("Wobble Smash", 0, 4, "Dodge and Ward 3", "hero", 0, "decoy", "ward 3", false, "stormlight", placeholderImg, earth, "earth", 0, 1);
var neutral52 = new CardCon("Form of Wobble", 2, 0, "Wobble form", "hero", 0, "shapeshift1", "", false, "stormlight", placeholderImg, earth, "earth", 0, 1);
var neutral53 = new CardCon("Budle Blast", 0, 3, "Confuse the Enemy", "hero", 0, "confuse", " ", false, "stormlight", placeholderImg, water, "water", 0, 1);
var neutral54 = new CardCon("Form of Wobble", 2, 0, "Buddle form", "hero", 0, "shapeshift2", "", false, "stormlight", placeholderImg, water, "water", 0, 1);
var neutral55 = new CardCon("Even Angrier", 0, 2, "Grow 2", "hero", 0, "", "grow 2 99", false, "stormlight", placeholderImg, wind, "wind", 0, 1);
var neutral56 = new CardCon("Form of Nado", 2, 0, "Nado form", "hero", 0, "shapeshift3", "", false, "stormlight", placeholderImg, wind, "wind", 0, 1);
var neutral57 = new CardCon("Molten Pinch", 0, 5, "Weaken 3", "hero", 0, "weaken 3", "", false, "stormlight", placeholderImg, fire, "fire", 0, 1); 
var neutral58 = new CardCon("Form of Morp", 2, 0, "Morp form", "hero", 0, "shapeshift4", "", false, "stormlight", placeholderImg, fire, "fire", 0, 1);

var earth1 = new CardCon("Subtle Sickness", 0, 2, "Poison 1.", "hero", 1, "poison 1", "", false, "stormlight", placeholderImg, earth, "earth", 1, 0, 0);
var earth2 = new CardCon("Oppressive Flurry", 0, 4, "Weaken 1.", "hero", 1, "weaken 1", "", false, "stormlight", placeholderImg, earth, "earth", 2, 0, 0);
var earth3 = new CardCon("Root Tangle", 0, 3, "Capture 1.", "hero", 1, "capture 1", "", false, "stormlight", placeholderImg, earth, "earth", 3, 0, 0);
var earth4 = new CardCon("Blessing of Dirt", 0, 2, "Heal 5.", "hero", 1, "heal 5", "", false, "stormlight", placeholderImg, earth, "earth", 4, 0, 0);
var earth5 = new CardCon("Sinister Fruit", 0, 1, "Poison 3.", "hero", 1, "poison 3", "", false, "stormlight", placeholderImg, earth, "earth", 5, 0, 0)
var earth6 = new CardCon("Surprise Bloom", 0, 0, "Random. Heal 6/Poison 2.", "hero", 1, "random", "heal 6/poison 2", false, "stormlight", placeholderImg, earth, "earth", 6, 0, 0);
var earth7 = new CardCon("Photosynthesis", 0, 4, "Energy 1.", "hero", 1, "energy 1", "", false, "stormlight", placeholderImg, earth, "earth", 7, 0, 0);
var earth8 = new CardCon("Landslide", 0, 1, "Weaken 3", "hero", 1, "weaken 3", "", false, "stormlight", placeholderImg, earth, "earth", 8, 0, 0);
var earth9 = new CardCon("New Life", 0, 4, "Reclaim 1.", "hero", 1, "reclaim 1", "", false, "stormlight", placeholderImg, earth, "earth", 9, 0, 0)
var earth10 = new CardCon("Quarry Smash", 0, 1, "All", "hero", 1, "", "all", false, "stormlight", placeholderImg, earth, "earth", 10, 0, 0);
var earth11 = new CardCon("Jewel Hunt", 0, 1, "Gain 1 Earth Gem", "hero", 1, "treasure 1 0", "", false, "stormlight", placeholderImg, earth, "earth", 11, 0, 0);
var earth12 = new CardCon("Fickle Fault", 0, 2, "Random. +4 Damage/All.", "hero", 2, "random", "damage 4/all", false, "stormlight", placeholderImg, earth, "earth", 12, 0, 0);
var earth13 = new CardCon("Keep Rolling", 0, 1, "Poison 5", "hero", 2, "poison 5", "", false, "stormlight", placeholderImg, earth, "earth", 13, 0, 0);
var earth14 = new CardCon("Boulder Trap", 0, 5, "Capture 3.", "hero", 2, "capture 2", "", false, "stormlight", placeholderImg, earth, "earth", 14, 0, 0);
var earth15 = new CardCon("Sap Strength", 0, 0, "Weaken 2. Poison 2", "hero", 2, "weaken 2", "poison 2", false, "stormlight", placeholderImg, earth, "earth", 15, 0, 0);
var earth16 = new CardCon("Leeching Vines", 1, 5, "Heal 5. Weaken 1.", "hero", 2, "heal 5", "weaken 1", false, "stormlight", placeholderImg, earth, "earth", 16, 0, 0);
var earth17 = new CardCon("Large Berries", 1, 1, "Shuffle 3 Berries into your deck.", "hero", 2, "addCard 4 3", "", false, "stormlight", placeholderImg, earth, "earth", 17, 0, 0);
var earth18 = new CardCon("Stack Up", 1, 5, "Heal Boost.", "hero", 3, "hlBoost", "", false, "stormlight", placeholderImg, earth, "earth", 18, 0, 0);
var earth19 = new CardCon("Super Crash", 1, 3, "Earth Boost.", "hero", 3, "factionBoost", "", false, "stormlight", placeholderImg, earth, "earth", 19, 0, 0);
var earth20 = new CardCon("Strange Geode", 0, 0, "What's Inside?", "hero", 3, "addCard 5 1", "remove", false, "stormlight", placeholderImg, earth, "earth", 20, 0, 0);
//var earth19 = new CardCon("Rumblings From Below", 2, 0, "Scheme 3.", "hero", 0, "scheme earth 3 7", 1, false, "character", placeholderImg, earth, "earth", 19, 0, 0);
//var earth20 = new CardCon("Quicksand", 3, 0, "Scheme 5.", "hero", 0, "scheme earth 5 confuse", 1, false, "character", placeholderImg, earth, "earth", 20, 0, 0);

var earth21 = new CardCon("Rock Fairy", 1, 0, "Gain 1 Earth Card.", "hero", 0, "supCards 1", 99, false, "support", rockFairy, earth, "earth", 21, 0, 0); 
var earth22 = new CardCon("Primtree", 2, 0, "Earth cards get Weaken 1.", "hero", 0, "match/earth/weaken 1", 99, false, "support", primtree, earth, "earth", 0, 0, 0);
var earth23 = new CardCon("King Wobbleduk", 3, 0, "Earth cards get +4 power.", "hero", 0, "supBoost earth 4", 99, false, "support", kingWobbleduk, earth, "earth", 0, 0, 0);
var earth24 = new CardCon("Steed", 1, 0, "Heal 2 Each Turn", "hero", 0, "supHeal 2", 99, false, "support", steed, earth, "earth", 0, 0, 0);
var earth25 = new CardCon("Stone Strider", 2, 0, "Earth Cards get Poison 2.", "hero", 0, "match/earth/poison 2", 99, false, "support", stoneStrider, earth, "earth", 0, 0, 0);
var earth26 = new CardCon("Jewel Primtree", 2, 0, "Gain 2 Earth Gems.", "hero", 0, "supGems 2", 99, false, "support", jewelPrimtree, earth, "earth", 0, 0, 0);
var earth27 = new CardCon("Queen Primtree", 3, 0, "Enemies have -2 Power.", "hero", 0, "supWeaken 2", 99, false, "support", queenPrimtree, earth, "earth", 0, 0, 0);
var earth28 = new CardCon("Tough Primtree", 2, 0, "Earth Cards get Heal 5.", "hero", 0, "match/earth/heal 5", 99, false, "support", toughPrimtree, earth, "earth", 0, 0, 0);
var earth29 = new CardCon("Wobbleduk", 1, 0, "Earth cards get +2 power.", "hero", 0, "supBoost earth 2", 99, false, "support", wobbleduk, earth, "earth", 0, 0, 0);

var fire1 = new CardCon("Fire Rock", 0, 2, "Purge", "hero", 1, "purge", "", false, "stormlight", placeholderImg, fire, "fire", 1, 0, 0);
var fire2 = new CardCon("Illuminate", 0, 4, "Next +2", "hero", 1, "next 2", "", false, "stormlight", placeholderImg, fire, "fire", 2, 0, 0);
var fire3 = new CardCon("Ember Smash", 0, 4, "Ward 3", "hero", 1, "ward 3", "", false, "stormlight", placeholderImg, fire, "fire", 3, 0, 0);
var fire4 = new CardCon("Fling and Wait", 0, 1, "Random. +6 Power/+0 Power.", "hero", 1, "random", "damage 6/damage 0", false, "stormlight", placeholderImg, fire, "fire", 4, 0, 0);
var fire5 = new CardCon("Pew Pew Pew", 0, 2, "All", "hero", 1, "", "all", false, "stormlight", placeholderImg, fire, "fire", 5, 0, 0);
var fire6 = new CardCon("Engulfing Flash", 0, 8, "Ward 2. Exhaust", "hero", 1, "ward 2", "exhausted", false, "stormlight", placeholderImg, fire, "fire", 9, 0, 0);
var fire7 = new CardCon("Fuel", 0, 3, "Energy 3.", "hero", 1, "energy 3", "", false, "stormlight", placeholderImg, fire, "fire", 7, 0, 0);
var fire8 = new CardCon("Inner Fire", 0, 1, "Magic +1.", "hero", 1, "str 1", "", false, "stormlight", placeholderImg, fire, "fire", 8, 0, 0);
var fire9 = new CardCon("Fire Within", 0, 4, "Clutch. Ward +8.", "hero", 1, "clutch", "ward 8", false, "stormlight", placeholderImg, fire, "fire", 9, 0, 0);
var fire10 = new CardCon("Big Boom", 0, 3, "Clutch. +12 Damage.", "hero", 1, "clutch", "damage 12", false, "stormlight", placeholderImg, fire, "fire", 10, 0, 0);
var fire11 = new CardCon("Look Into Flame", 0, 6, "Magic +2. Exhaust.", "hero", 1, "str 2", "exhausted", false, "stormlight", placeholderImg, fire, "fire", 11, 0, 0);
var fire12 = new CardCon("Let It Burn", 0, 10, "Quickly.", "hero", 2, "", "", false, "stormlight", placeholderImg, fire, "fire", 12, 0, 0);
var fire13 = new CardCon("Shamble Bomb", 0, 4, "Random. +4 Damage/Next +4.", "hero", 2, "random", "damage 4/next 4", false, "stormlight", placeholderImg, fire, "fire", 13, 0, 0);
var fire14 = new CardCon("Risky Explosion", 0, 8, "All. Exhaust.", "hero", 2, "exhausted", "all", false, "stormlight", placeholderImg, fire, "fire", 14, 0, 0);
var fire15 = new CardCon("Soul Flare", 0, 4, "Purge Twice.", "hero", 2, "purge", "purge", false, "stormlight", placeholderImg, fire, "fire", 15, 0, 0);
var fire16 = new CardCon("Big Fireball", 1, 15, "", "hero", 2, "", "", false, "stormlight", placeholderImg, fire, "fire", 16, 0, 0);
var fire17 = new CardCon("Roasting", 1, 1, "Add 3 Roasts into your deck.", "hero", 2, "addCard 7 3", "", false, "stormlight", placeholderImg, fire, "fire", 17, 0, 0);
var fire18 = new CardCon("Spark Spirits", 1, 2, "Fire Boost", "hero", 3, "factionBoost", "", false, "stormlight", placeholderImg, fire, "fire", 18, 0, 0);
var fire19 = new CardCon("Wait For It", 1, 0, "Magic +3.", "hero", 3, "str 3", "", false, "stormlight", placeholderImg, fire, "fire", 19, 0, 0);
var fire20 = new CardCon("Flame Meditation", 0, 0, "Peace.", "hero", 3, "addCard 8 1", "remove", false, "stormlight", placeholderImg, fire, "fire", 20, 0, 0);
//var fire19 = new CardCon("Surround By Fire", 2, 0, "Scheme 2.", "hero", 0, "scheme fire 2 6", 1, false, "character", placeholderImg, fire, "fire", 19, 0, 0);
//var fire20 = new CardCon("Smoke Monster", 3, 0, "Scheme 4.", "hero", 0, "scheme fire 4 12", 1, false, "character", placeholderImg, fire, "fire", 20, 0, 0);

var fire21 = new CardCon("Flame Scrabler", 2, 0, "Fire cards get Purge.", "hero", 0, "match/fire/purge", 99, false, "support", flameScrabler, fire, "fire", 0, 0, 0);
var fire22 = new CardCon("Broodmother", 3, 0, "Fire cards get +4 power.", "hero", 0, "supBoost fire 4", 99, false, "support", broodmother, fire, "fire", 0, 0, 0);
var fire23 = new CardCon("Morp", 1, 0, "Gain 2 Fire gems.", "hero", 0, "supGems 2", 99, false, "support", morp, fire, "fire", 0, 0, 0);
var fire24 = new CardCon("Ember Adder", 1, 0, "Gain 1 Fire Card.", "hero", 0, "supCards 1", 99, false, "support", emberAdder, fire, "fire", 0, 0, 0);
var fire25 = new CardCon("Kragmup", 2, 0, "Burning 2.", "hero", 0, "supBurning 2", 99, false, "support", kragmup, fire, "fire", 0, 0, 0);
var fire26 = new CardCon("Tipper", 2, 0, "Fire cards get +2 power.", "hero", 0, "supBoost fire 2", 99, false, "support", tipper, fire, "fire", 0, 0, 0);
var fire27 = new CardCon("Grand Tipper", 3, 0, "Fire Cards get All.", "hero", 0, "match/fire/all", 99, false, "support", grandTipper, fire, "fire", 0, 0, 0);
var fire28 = new CardCon("Pheonix Wyrm", 2, 0, "Burning 3.", "hero", 0, "supBurning 3", 99, false, "support", pheonixWyrm, fire, "fire", 0, 0, 0);
var fire29 = new CardCon("Flame Crawler", 1, 0, "Immune to Exhaust", "hero", 0, "supExhaust", 99, false, "support", flameCrawler, fire, "fire", 0, 0, 0);

var water1 = new CardCon("Quick Chill", 0, 2, "Stun.", "hero", 1, "stun", "", false, "stormlight", placeholderImg, water, "water", 1, 0, 0);
var water2 = new CardCon("Restorative Blast", 0, 4, "Reclaim 2", "hero", 1, "reclaim 2", "", false, "stormlight", placeholderImg, water, "water", 2, 0, 0);
var water3 = new CardCon("Ice Shell", 0, 2, "Ward 5", "hero", 1, "ward 5", "", false, "stormlight", placeholderImg, water, "water", 3, 0, 0);
var water4 = new CardCon("Assimilate", 0, 3, "Draw +1.", "hero", 1, "int 1", "", false, "stormlight", placeholderImg, water, "water", 4, 0, 0);
var water5 = new CardCon("Stuck in Muck", 0, 4, "Capture 1.", "hero", 1, "capture 1", "", false, "stormlight", placeholderImg, water, "water", 5, 0, 0);
var water6 = new CardCon("Riptide", 0, 4, "Rummage 2.", "hero", 1, "rummage 2", "", false, "stormlight", placeholderImg, water, "water", 6, 0, 0);
var water7 = new CardCon("Power Water", 0, 4, "Energy 2", "hero", 1, "energy 2", "", false, "stormlight", placeholderImg, water, "water", 7, 0, 0);
var water8 = new CardCon("Consult the Tides", 0, 1, "Ward 7", "hero", 1, "ward 7", "", false, "stormlight", placeholderImg, water, "water", 8, 0, 0);
var water9 = new CardCon("Deflect", 0, 2, "Reclaim 1 Twice.", "hero", 1, "reclaim 1", "reclaim 1", false, "stormlight", placeholderImg, water, "water", 9, 0, 0);
var water10 = new CardCon("Ice Hands", 0, 3, "Draw +1. Ward 3", "hero", 1, "int 1", "ward 3", false, "stormlight", placeholderImg, water, "water", 10, 0, 0);
var water11 = new CardCon("Geyser", 0, 4, "Random. Stun/Damage +2.", "hero", 1, "random", "stun/damage 2", false, "stormlight", placeholderImg, water, "water", 11, 0, 0);
var water12 = new CardCon("Water Gem", 0, 4, "Draw +3.", "hero", 2, "int 3", "", false, "stormlight", placeholderImg, water, "water", 12, 0, 0);
var water13 = new CardCon("Deep Freeze", 0, 4, "Stun. Rummage 1.", "hero", 2, "stun", "rummage 1", false, "stormlight", placeholderImg, water, "water", 13, 0, 0);
var water14 = new CardCon("Rising Tide", 0, 4, "Capture 2.", "hero", 2, "capture 2", "", false, "stormlight", placeholderImg, water, "water", 14, 0, 0);
var water15 = new CardCon("Tidal Wave", 0, 2, "+1 For Each Water Card Played.", "hero", 2, "factionBoost 1", "", false, "stormlight", placeholderImg, water, "water", 15, 0, 0);
var water16 = new CardCon("Cleanse", 1, 2, "Reclaim 4.", "hero", 2, "reclaim 4", "", false, "stormlight", placeholderImg, water, "water", 16, 0, 0);
var water17 = new CardCon("Reserve Life", 1, 1, "Shuffle 3 Life Reserves into your deck.", "hero", 2, "addCard 10 3", "", false, "stormlight", placeholderImg, water, "water", 17, 0, 0);
var water18 = new CardCon("Crash Down", 1, 7, "Ward 7", "hero", 3, "ward 7", "", false, "stormlight", placeholderImg, water, "water", 18, 0, 0);
var water19 = new CardCon("Envelop Darkness", 2, 10, "Stun. Reclaim 3", "hero", 3, "stun", "reclaim 3", false, "stormlight", placeholderImg, water, "water", 19, 0, 0);
var water20 = new CardCon("Perplexing Puddle", 0, 0, "Look Deep.", "hero", 3, "addCard 11 1", "remove", false, "stormlight", placeholderImg, water, "water", 20, 0, 0);
//var water19 = new CardCon("Doom Puddles", 2, 0, "Scheme 2.", "hero", 0, "scheme water 2 5", 1, false, "character", placeholderImg, water, "water", 19, 0, 0);
//var water20 = new CardCon("Monster In The Deep", 3, 0, "Scheme 3.", "hero", 0, "scheme water 3 stun", 1, false, "character", placeholderImg, water, "water", 20, 0, 0);

var water21 = new CardCon("Coral Thump", 1, 0,"Water cards get Reclaim 2", "hero", 0, "match/water/reclaim 2", 99, false, "support", coralThump, water, "water", 0, 0, 0);
var water22 = new CardCon("King Slapper", 3, 0,"Water cards get +4 power.", "hero", 0, "supBoost water 4", 99, false, "support", kingSlapper, water, "water", 0, 0, 0);
var water23 = new CardCon("Budle Fairy", 2, 0,"+2 Ward", "hero", 0, "supShield 1", 99, false, "support", budleFairy, water, "water", 0, 0, 0);
var water24 = new CardCon("Albino Slapper", 2, 0,"Water Cards get Ward 3", "hero", 0, "match/water/ward 3", 99, false, "support", albinoSlapper, water, "water", 0, 0, 0);
var water25 = new CardCon("Super Budle Fairy", 3, 0,"+4 Ward", "hero", 0, "supShield 4", 99, false, "support", superBudleFairy, water, "water", 0, 0, 0);
var water26 = new CardCon("Ghost Shark", 2, 0,"Gain 2 Water Gems.", "hero", 0, "supGems 2", 99, false, "support", ghostShark, water, "water", 0, 0, 0);
var water27 = new CardCon("Marsh Slapper", 2, 0,"Water Cards get Draw + 2", "hero", 0, "match/water/int 2", 99, false, "support", marshSlapper, water, "water", 0, 0, 0);
var water28 = new CardCon("Trench Thump", 1, 0,"Gain 1 Water Card.", "hero", 0, "supCards 1", 99, false, "support", trenchThump, water, "water", 0, 0, 0);
var water29 = new CardCon("Cave Thump", 1, 0,"Water cards get +2 power.", "hero", 0, "supBoost water 2", 99, false, "support", caveThump, water, "water", 0, 0, 0);

var wind1 = new CardCon("Plan Ahead", 0, 2, "Next +3.", "hero", 1, "next 3", "", false, "stormlight", placeholderImg, wind, "wind", 1, 0, 0);
var wind2 = new CardCon("Death Blow",0, 4, "Finesse 2.", "hero", 1, "finesse 2", "", false, "stormlight", placeholderImg, wind, "wind", 2, 0, 0);
var wind3 = new CardCon("Headwind", 0, 2, "Decoy", "hero", 1, "decoy", "", false, "stormlight", placeholderImg, wind, "wind", 3, 0, 0);
var wind4 = new CardCon("Deep Breath", 0, 4, "Heal 2.", "hero", 1, "heal 2", "", false, "stormlight", placeholderImg, wind, "wind", 4, 0, 0);
var wind5 = new CardCon("Study the Clouds", 0, 1, "Next +5.", "hero", 1, "next 5", "", false, "stormlight", placeholderImg, wind, "wind", 5, 0, 0);
var wind6 = new CardCon("Blow Down", 0, 3, "Rummage 4.", "hero", 1, "rummage 4", "", false, "stormlight", placeholderImg, wind, "wind", 6, 0, 0);
var wind7 = new CardCon("Rising Wind", 0, 1, "Energy 3", "hero", 1, "energy 3", "", false, "stormlight", placeholderImg, wind, "wind", 7, 0, 0);
var wind8 = new CardCon("Cloud Sign", 0, 5, "Rummage 2.", "hero", 1, "rummage 2", "", false, "stormlight", placeholderImg, wind, "wind", 8, 0, 0);
var wind9 = new CardCon("Extra Extra Study", 0, 1, "Next +10. Exhaust.", "hero", 1, "next 10", "exhausted", false, "stormlight", placeholderImg, wind, "wind", 9, 0, 0);
var wind10 = new CardCon("Brewing Storm", 0, 5, "Finesse 3. Exhaust", "hero", 1, "finesse 3", "exhausted", false, "stormlight", placeholderImg, wind, "wind", 10, 0, 0);
var wind11 = new CardCon("Momentum", 0, 2, "Next +4. Heal 1", "hero", 1, "next 4", "heal 1", false, "stormlight", placeholderImg, wind, "wind", 11, 0, 0);
var wind12 = new CardCon("Whirlwind", 0, 5, "Decoy.", "hero", 2, "decoy", "", false, "stormlight", placeholderImg, wind, "wind", 12, 0, 0);
var wind13 = new CardCon("Wild Blow", 0, 4, "Random. Finesse 2/Next +2.", "hero", 2, "random", "finesse 2/next 2", false, "stormlight", placeholderImg, wind, "wind", 13, 0, 0);
var wind14 = new CardCon("Dissolve", 0, 3, "Stash 5. Damage +5", "hero", 2, "stash", "damage 5", false, "stormlight", placeholderImg, wind, "wind", 14, 0, 0);
var wind15 = new CardCon("Relentless Speed", 0, 0, "+1 For Each Wind Card.", "hero", 2, "factionBoost 1", "", false, "stormlight", placeholderImg, wind, "wind", 15, 0, 0);
var wind16 = new CardCon("Unfettered Attack", 1, 6, "Finesse 1. Energy 2.", "hero", 2, "finesse 1", "", false, "stormlight", placeholderImg, wind, "wind", 16, 0, 0);
var wind17 = new CardCon("Flurrious", 1, 1, "Shuffle 3 Flurrys into your deck.", "hero", 2, "addCard 13 3", "", false, "stormlight", placeholderImg, wind, "wind", 17, 0, 0);
var wind18 = new CardCon("Air Blessing", 1, 1, "Next +10.", "hero", 3, "next 10", "", false, "stormlight", placeholderImg, wind, "wind", 18, 0, 0);
var wind19 = new CardCon("Surrender to the Gale", 2, 6, "Finesse 4.", "hero", 3, "finesse 4", "", false, "stormlight", placeholderImg, wind, "wind", 19, 0, 0);
var wind20 = new CardCon("Whisper Stone", 0, 0, "Listen", "hero", 3, "addCard14 1", "remove", false, "stormlight", placeholderImg, wind, "wind", 20, 0, 0);
//var wind19 = new CardCon("Mysterious Howl", 2, 0, "Scheme 2.", "hero", 0, "scheme wind 3 6", 1, false, "character", placeholderImg, wind, "wind", 19, 0, 0);
//var wind20 = new CardCon("Wind's Fury", 3, 0, "Scheme 4.", "hero", 0, "scheme wind 4 extra", 1, false, "character", placeholderImg, wind, "wind", 20, 0, 0);

var wind21 = new CardCon("Windle Fairy",2, 0, "Wind cards get Finesse 2", "hero", 0, "match/wind/finesse 2", 99, false, "support", windleFairy, wind, "wind", 0, 0, 0);
var wind22 = new CardCon("Empress Madnado",3, 0, "Wind cards get +4 power.", "hero", 0, "supBoost wind 4", 99, false, "support", empressMadnado, wind, "wind", 0, 0, 0);
var wind23 = new CardCon("Wind Flitter",2, 0, "Gain 2 Wind Gems.", "hero", 0, "supGems 2", 99, false, "support", windFlitter, wind, "wind", 0, 0, 0);
var wind24 = new CardCon("Raa Howler",1, 0, "Gain 1 Wind Card.", "hero", 0, "supCards 1", 99, false, "support", raaHowler, wind, "wind", 0, 0, 0);
var wind25 = new CardCon("Alpha Spookaw",2, 0, "Decoy.", "hero", 0, "supDecoy", 99, false, "support", alphaSpookaw, wind, "wind", 0, 0, 0);
var wind26 = new CardCon("Floofer",2, 0, "Gain 1 Energy Per Turn.", "hero", 0, "supEnergy 1", 99, false, "support", floofer, wind, "wind", 0, 0, 0);
var wind27 = new CardCon("Maclaw",2, 0, "Gain 2 Energy Per Turn.", "hero", 0, "supEnergy 2", 99, false, "support", maclaw, wind, "wind", 0, 0, 0);
var wind28 = new CardCon("Spookaw",1, 0, "Wind Cards get Next +3.", "hero", 0, "match/wind/next 3", 99, false, "support", spookaw, wind, "wind", 0, 0, 0);
var wind29 = new CardCon("Madnado",1, 0, "Wind cards get +2 power.", "hero", 0, "supBoost wind 2", 99, false, "support", madnado, wind, "wind", 0, 0, 0);

var desert1 = new CardCon("Sand Ball", 0, 4, "Next +3", "hero", 1, "next 3", "", false, "stormlight", placeholderImg, desert, "desert", 1, 0, 0);
var desert2 = new CardCon("Save Strength", 0, 4, "Finesse 3", "hero", 1, "finesse 3", "", false, "stormlight", placeholderImg, desert, "desert", 2, 0, 0);
var desert3 = new CardCon("Intense Dodge", 0, 9, "Decoy. Exhaust.", "hero", 1, "decoy", "exhausted", false, "stormlight", placeholderImg, desert, "desert", 3, 0, 0);
var desert4 = new CardCon("Feint", 0, 2, "Multiply", "hero", 1, "multiply 1", "", false, "stormlight", placeholderImg, desert, "desert", 4, 0, 0);
var desert5 = new CardCon("Perilous Focus", 0, 2, "Finesse 1. All", "hero", 1, "finesse 1", "all", false, "stormlight", placeholderImg, desert, "desert", 5, 0, 0);
var desert6 = new CardCon("Delicate Slicing", 0, 3, "Decoy. Next +3", "hero", 1, "decoy", "next 3", false, "stormlight", placeholderImg, desert, "desert", 6, 0, 0);
var desert7 = new CardCon("Crystals", 0, 3, "Energy 5", "hero", 1, "energy 5", "", false, "stormlight", placeholderImg, desert, "desert", 7, 0, 0);
var desert8 = new CardCon("Changing Sand", 0, 4, "Magic +1.", "hero", 1, "str 1", "", false, "stormlight", placeholderImg, desert, "desert", 8, 0, 0);
var desert9 = new CardCon("Mummy Chase", 0, 3, "Random. 1 Desert Card/Gem", "hero", 1, "random", "treasure 1 0/treasure 0 1", false, "stormlight", placeholderImg, desert, "desert", 9, 0, 0);
var desert10 = new CardCon("Lurching Advance", 0, 5, "Finesse 5. Exhaust.", "hero", 1, "finesse 5", "exhausted", false, "stormlight", placeholderImg, desert, "desert", 10, 0, 0);
var desert11 = new CardCon("Desert Wisdom", 0, 1, "Magic +1. Next +3", "hero", 1, "str 1", "next 3", false, "stormlight", placeholderImg, desert, "desert", 11, 0, 0);
var desert12 = new CardCon("Mirage", 0, 3, "Multiply. Decoy.", "hero", 2, "multiply 1", "decoy", false, "stormlight", placeholderImg, desert, "desert", 12, 0, 0);
var desert13 = new CardCon("Dust Trap", 0, 7, "Capture 2.", "hero", 2, "capture 2", "", false, "stormlight", placeholderImg, desert, "desert", 13, 0, 0);
var desert14 = new CardCon("Dune Speed", 0, 4, "Stash 5. All", "hero", 2, "stash", "all", false, "stormlight", placeholderImg, desert, "desert", 14, 0, 0);
var desert15 = new CardCon("Never Tire", 0, 2, "Finesse 6. Next +4", "hero", 2, "finesse 6", "next 4", false, "stormlight", placeholderImg, desert, "desert", 15, 0, 0);
var desert16 = new CardCon("Rush of Magic", 1, 5, "Multiply", "hero", 2, "multiply 1", "", false, "stormlight", placeholderImg, desert, "desert", 16, 0, 0);
var desert17 = new CardCon("Time Flow", 1, 1, "Shuffle 3 Time Stops into your deck.", "hero", 3, "addCard 16 3", "", false, "stormlight", placeholderImg, desert, "desert", 17, 0, 0);
var desert18 = new CardCon("Painful Illusion", 2, 0, "Decoy. Next +15", "hero", 2, "decoy", "next 15", false, "stormlight", placeholderImg, desert, "desert", 18, 0, 0);
var desert19 = new CardCon("Sun Gem", 1, 30, "Exhaust.", "hero", 3, "exhausted", "", false, "stormlight", placeholderImg, desert, "desert", 19, 0, 0);
var desert20 = new CardCon("Scarab Trinket", 0, 0, "It's a puzzle!", "hero", 3, "addCard 17 1", "remove", false, "stormlight", placeholderImg, desert, "desert", 20, 0, 0);
//var desert19 = new CardCon("Tomb Treasure", 2, 0, "Scheme 3.", "hero", 0, "scheme desert 3 treasure", 1, false, "character", placeholderImg, desert, "desert", 19, 0, 0);
//var desert20 = new CardCon("Entomb", 4, 0, "Scheme 6.", "hero", 0, "scheme desert 4 11", 1, false, "character", placeholderImg, desert, "desert", 20, 0, 0);

var desert21 = new CardCon("Dune Stabber", 2, 0, "Desert Cards +3.", "hero", 0, "supBoost desert 3", 99, false, "support", duneStabber, desert, "desert", 0, 0, 0);
var desert22 = new CardCon("Predator Snipp", 3, 0, "Immune to Exhaust", "hero", 0, "supExhaust", 99, false, "support", predatorSnipp, desert, "desert", 0, 0, 0);
var desert23 = new CardCon("Champion Stalker", 4, 0, "Desert Cards +6.", "hero", 0, "supBoost desert 6", 99, false, "support", championStalker, desert, "desert", 0, 0, 0);
var desert24 = new CardCon("Stabber Conclave", 4, 0, "Multiplier +1", "hero", 0, "supMultiply 1", 99, false, "support", stabberConclave, desert, "desert", 0, 0, 0);
var desert25 = new CardCon("Grumpeel", 2, 0, "Gain 4 Desert gems.", "hero", 0, "supGems 4", 99, false, "support", grumpeel, desert, "desert", 0, 0, 0);
var desert26 = new CardCon("Wandering Relic", 2, 0, "Gain 2 Desert Card.", "hero", 0, "supCards 2", 99, false, "support", wanderingRelic, desert, "desert", 0, 0, 0);
var desert27 = new CardCon("Desert Madnado", 3, 0, "Your Next spells get +5.", "hero", 0, "supAbilityBoost next 4", 99, false, "support", desertMadnado, desert, "desert", 0, 0, 0);
var desert28 = new CardCon("Bone Stalker", 3, 0, "Desert card get Multipler +1.", "hero", 0, "match/desert/multiply 1", 99, false, "support", boneStalker, desert, "desert", 0, 0, 0);
var desert29 = new CardCon("Sand Snipp", 2, 0, "Decoy.", "hero", 0, "supDecoy", 99, false, "support", sandSnipp, desert, "desert", 0, 0, 0);

var lava1 = new CardCon("Lava Ball", 0, 7, "Duck.", "hero", 1, "", "", false, "stormlight", placeholderImg, lava, "lava", 1, 0, 0);
var lava2 = new CardCon("Spew Magma", 0, 4, "Grow 2", "hero", 1, "", "grow 1 99", false, "stormlight", placeholderImg, lava, "lava", 2, 0, 0);
var lava3 = new CardCon("Everywhere, Lava", 0, 12, "Exhaust.", "hero", 2, "exhausted", "", false, "stormlight", placeholderImg, lava, "lava", 3, 0, 0);
var lava4 = new CardCon("Blazing Shimmer", 0, 3, "Ward 7.", "hero", 1, "ward 7", "", false, "stormlight", placeholderImg, lava, "lava", 4, 0, 0);
var lava5 = new CardCon("The Summit Trembles", 0, 4, "All. Heal 2", "hero", 1, "heal 2", "all", false, "stormlight", placeholderImg, lava, "lava", 5, 0, 0);
var lava6 = new CardCon("Moltify", 0, 5, "Purge", "hero", 1, "purge", "", false, "stormlight", placeholderImg, lava, "lava", 6, 0, 0);
var lava7 = new CardCon("Furnace", 0, 7, "Energy 2.", "hero", 1, "energy 2", "", false, "stormlight", placeholderImg, lava, "lava", 9, 0, 0);
var lava8 = new CardCon("Smoke Scare", 0, 2, "Magic +2. Weaken 2", "hero", 1, "str 2", "weaken 2", false, "stormlight", placeholderImg, lava, "lava", 8, 0, 0);
var lava9 = new CardCon("Building Pressure", 0, 4, "Grow 2.", "hero", 1, "", "grow 2 99", false, "stormlight", placeholderImg, lava, "lava", 7, 0, 0);
var lava10 = new CardCon("Magma Trap", 0, 4, "Weaken 2. Purge.", "hero", 2, "purge", "weaken 2", false, "stormlight", placeholderImg, lava, "lava", 10, 0, 0);
var lava11 = new CardCon("Magma Visions", 0, 6, "Magic +4. Exhaust.", "hero", 2, "str 4", "exhausted", false, "stormlight", placeholderImg, lava, "lava", 11, 0, 0);
var lava12 = new CardCon("Burn Impurity", 0, 10, "Clutch. All", "hero", 2, "clutch", "all", false, "stormlight", placeholderImg, lava, "lava", 12, 0, 0);
var lava13 = new CardCon("Out Of Hand", 0, 4, "Grow 3.", "hero", 2, "", "grow 3 99", false, "stormlight", placeholderImg, lava, "lava", 13, 0, 0);
var lava14 = new CardCon("Eruption", 0, 8, "All. Purge", "hero", 1, "purge", "all", false, "stormlight", placeholderImg, lava, "lava", 14, 0, 0);
var lava15 = new CardCon("Slag Punch", 0, 1, "Grow 1. Ward 2.", "hero", 2, "ward 2", "grow 1 99", false, "stormlight", placeholderImg, lava, "lava", 15, 0, 0);
var lava16 = new CardCon("The Molten Crown", 1, 8, "Weaken 3.", "hero", 1, "weaken 3", "", false, "stormlight", placeholderImg, lava, "lava", 16, 0, 0);
var lava17 = new CardCon("Incineration", 1, 1, "Add 3 Incinerates into you deck.", "hero", 2, "addCard 19 3", "", false, "stormlight", placeholderImg, lava, "lava", 17, 0, 0);
var lava18 = new CardCon("Constant Spew", 1, 12, "All", "hero", 1, "", "all", false, "stormlight", placeholderImg, lava, "lava", 18, 0, 0);
var lava19 = new CardCon("Obsidian Armor", 2, 5, "Grow 5", "hero", 3, "", "grow 5 99", false, "stormlight", placeholderImg, lava, "lava", 19, 0, 0);
var lava20 = new CardCon("Molten Ingot", 0, 0, "It must be shaped", "hero", 3, "addCard 20 1", "remove", false, "stormlight", placeholderImg, lava, "lava", 20, 0, 0);
//var lava19 = new CardCon("Monster Tracks", 2, 0, "Scheme 2.", "hero", 0, "scheme lava 2 9", 1, false, "character", placeholderImg, lava, "lava", 19, 0, 0);
//var lava20 = new CardCon("Mountain Treasure", 4, 0, "Scheme 4.", "hero", 0, "scheme lava 4 treasure", 1, false, "character", placeholderImg, lava, "lava", 20, 0, 0);

var lava21 = new CardCon("Volcano Trampler", 3, 0, "Lava Cards get All.", "hero", 0, "match/lava/all", 99, false, "support", volcanoTrampler, lava, "lava", 0, 0, 0);
var lava22 = new CardCon("Lava Walker", 2, 0, "Lava cards +3.", "hero", 0, "supBoost lava 3", 99, false, "support", lavaWalker, lava, "lava", 0, 0, 0);
var lava23 = new CardCon("Moltasaurus", 3, 0, "Burning 4", "hero", 0, "supBurning 4", 99, false, "support", moltasaurus, lava, "lava", 0, 0, 0);
var lava24 = new CardCon("Lava Lord Walker", 4, 0, "Lava cards +6.", "hero", 0, "supBoost lava 6", 99, false, "support", lavaLordWalker, lava, "lava", 0, 0, 0);
var lava25 = new CardCon("Emberite", 2, 0, "Gain 4 Lava gems.", "hero", 0, "supGems 4", 99, false, "support", emberite, lava, "lava", 0, 0, 0);
var lava26 = new CardCon("Nutrite", 3, 0, "Gain 2 Lava cards.", "hero", 0, "supCards 2", 99, false, "support", nutrite, lava, "lava", 0, 0, 0);
var lava27 = new CardCon("Trekapod", 2, 0, "Lava Cards get Purge", "hero", 0, "match/lava/purge", 99, false, "support", trekapod, lava, "lava", 0, 0, 0);
var lava28 = new CardCon("Moltasaurus Rex", 4, 0, "Lava Cards get Grow 2", "hero", 0, "supGrow lava 2", 99, false, "support", moltasaurusRex, lava, "lava", 0, 0, 0);
var lava29 = new CardCon("Walking Eruption", 3, 0, "Exhaust cards deal +5 damage.", "hero", 0, "supAbilityBoost exhaust 5", 99, false, "support", walkingEruption, lava, "lava", 0, 0, 0);

var mud1 = new CardCon("Mud Blast", 0, 3, "Confuse.", "hero", 1, "confuse", "", false, "stormlight", placeholderImg, mud, "mud", 1, 0, 0);
var mud2 = new CardCon("Drown out Filth", 0, 6, "Reclaim 2.", "hero", 1, "reclaim 3", "", false, "stormlight", placeholderImg, mud, "mud", 2, 0, 0);
var mud3 = new CardCon("Doom Puddle", 0, 4, "Capture 4. ", "hero", 1, "capture 4", "", false, "stormlight", placeholderImg, mud, "mud", 3, 0, 0);
var mud4 = new CardCon("Tentacle Shackles", 0, 2, "Heal 5. Draw +1.", "hero", 1, "heal 5", "int 1", false, "stormlight", placeholderImg, mud, "mud", 4, 0, 0);
var mud5 = new CardCon("Sickening Shot", 0, 2, "Confuse. Poison 3.", "hero", 1, "confuse", "poison 2", false, "stormlight", placeholderImg, mud, "mud", 5, 0, 0);
var mud6 = new CardCon("Swamp Power", 0, 2, "Heal 8. Rummage 2.", "hero", 1, "heal 8", "rummage 2", false, "stormlight", placeholderImg, mud, "mud", 6, 0, 0);
var mud7 = new CardCon("Glowy Minerals", 0, 4, "Energy 4.", "hero", 1, "energy 4", "", false, "stormlight", placeholderImg, mud, "mud", 7, 0, 0);
var mud8 = new CardCon("Murky Whispers", 0, 5, "Capture 2. Weaken 1.", "hero", 1, "capture 2", "weaken 1", false, "stormlight", placeholderImg, mud, "mud", 8, 0, 0);
var mud9 = new CardCon("Glow Minerals", 0, 4, "Reclaim 2 Twice.", "hero", 1, "reclaim 2", "reclaim 2", false, "stormlight", placeholderImg, mud, "mud", 9, 0, 0);
var mud10 = new CardCon("Duck", 0, 2, "Confuse. Reclaim 1", "hero", 1, "confuse", "reclaim 1", false, "stormlight", placeholderImg, mud, "mud", 10, 0, 0);
var mud11 = new CardCon("Sink Hole", 0, 1, "Poison 6.", "hero", 1, "poison 6", "", false, "stormlight", placeholderImg, mud, "mud", 11, 0, 0);
var mud12 = new CardCon("Magic Mud Helm", 0, 3, "Random. Heal 10/Poison 5.", "hero", 2, "random", "heal 10/poison 5", false, "stormlight", placeholderImg, mud, "mud", 12, 0, 0);
var mud13 = new CardCon("Spread Filth", 0, 5, "Confuse. Rummage 1", "hero", 2, "confuse", "rummage 1", false, "stormlight", placeholderImg, mud, "mud", 13, 0, 0);
var mud14 = new CardCon("Lurking Trap", 0, 8, "Capture 3", "hero", 2, "capture 3", "", false, "stormlight", placeholderImg, mud, "mud", 14, 0, 0);
var mud15 = new CardCon("Murky Vision", 0, 0, "Draw +1. Rummage 2.", "hero", 2, "int 1", "rummage 2", false, "stormlight", placeholderImg, mud, "mud", 15, 0, 0);
var mud16 = new CardCon("Steal Essense", 1, 7, "Heal 7", "hero", 2, "heal 7", "", false, "stormlight", placeholderImg, mud, "mud", 16, 0, 0);
var mud17 = new CardCon("Plague Party", 1, 1, "Shuffle 3 Sludge Plagues into you deck.", "hero", 3, "addCard 22 3", "", false, "stormlight", placeholderImg, mud, "mud", 17, 0, 0);
var mud18 = new CardCon("Swamp Stomp", 1, 9, "Confuse. Faction Boost.", "hero", 2, "confuse", "factionBoost", false, "stormlight", placeholderImg, mud, "mud", 18, 0, 0);
var mud19 = new CardCon("Inevitable Decay", 1, 1, "Poison 3. Poison 3", "hero", 3, "poison 3", "poison 3", false, "stormlight", placeholderImg, mud, "mud", 19, 0, 0);
var mud20 = new CardCon("Purple Goo", 0, 0, "Unsettling", "hero", 3, "addCard 24 1", "remove", false, "stormlight", placeholderImg, mud, "mud", 20, 0, 0);
//var mud19 = new CardCon("Fossilized Prize", 2, 0, "Scheme 2.", "hero", 0, "scheme mud 2 treasure", 1, false, "stormlight", placeholderImg, mud, "mud", 0, 0, 0);
//var mud20 = new CardCon("Never Escape", 4, 0, "Scheme 5.", "hero", 0, "scheme mud 5 20", 1, false, "stormlight", placeholderImg, mud, "mud", 0, 0, 0);

var mud21 = new CardCon("Warthus", 2, 0, "Heal 6 each turn.", "hero", 0, "supHeal 6", 99, false, "support", warthus, mud, "mud", 0, 0, 0);
var mud22 = new CardCon("Muckster", 3, 0, "Mud Cards get +3", "hero", 0, "supBoost mud 3", 99, false, "support", muckster, mud, "mud", 0, 0, 0);
var mud23 = new CardCon("Archmage Muckster", 4, 0, "Mud Cards get +6.", "hero", 0, "supBoost mud 6", 99, false, "support", archmageMuckster, mud, "mud", 0, 0, 0);
var mud24 = new CardCon("Bog Boar", 2, 0, "Poison 2 Every Turn.", "hero", 0, "supPoison 2", 99, false, "support", bogBoar, mud, "mud", 0, 0, 0);
var mud25 = new CardCon("Toxic Roller", 3, 0, "Poison 4 Every Turn.", "hero", 0, "supPoison 4", 99, false, "support", toxicRoller, mud, "mud", 0, 0, 0);
var mud26 = new CardCon("Lesser Galope", 2, 0, "Gain 4 Mud Gems.", "hero", 0, "supGems 4", 99, false, "support", lesserGalope, mud, "mud", 0, 0, 0);
var mud27 = new CardCon("Sominus", 3, 0, "Gain 2 Mud Card.", "hero", 0, "supCards 2", 99, false, "support", sominus, mud, "mud", 0, 0, 0);
var mud28 = new CardCon("Duchess Warthus", 4, 0, "Mud Card get Confuse.", "hero", 0, "match/mud/confuse", 99, false, "support", duchessWarthus, mud, "mud", 0, 0, 0);
var mud29 = new CardCon("Greater Galope", 3, 0, "Poison Cards get Reclaim 3.", "hero", 0, "match/mud/reclaim 3", 99, false, "support", greaterGalope, mud, "mud", 0, 0, 0);

var storm1 = new CardCon("Threatening Clouds", 0, 2, "Stun. Next +3.", "hero", 1, "stun", "next 3", false, "stormlight", placeholderImg, storm, "storm", 1, 0, 0);
var storm2 = new CardCon("Howling Gale", 0, 4, "Finesse 1. Reclaim 1.", "hero", 1, "finesse 1", "reclaim 1", false, "stormlight", placeholderImg, storm, "storm", 2, 0, 0);
var storm3 = new CardCon("Static", 0, 2, "Extra Attack", "hero", 1, "extra 1", "", false, "stormlight", placeholderImg, storm, "storm", 3, 0, 0);
var storm4 = new CardCon("Readjust", 0, 4, "Draw +1. Ward 2.", "hero", 1, "int 1", "ward 2", false, "stormlight", placeholderImg, storm, "storm", 4, 0, 0);
var storm5 = new CardCon("Stinging Tide", 0, 5, "Stun.", "hero", 1, "stun", "", false, "stormlight", placeholderImg, storm, "storm", 5, 0, 0);
var storm6 = new CardCon("Crushing vortex", 0, 5, "Rummage 5", "hero", 1, "rummage 5", "", false, "stormlight", placeholderImg, storm, "storm", 6, 0, 0);
var storm7 = new CardCon("Lightning Charged", 0, 3, "Energy 5.", "hero", 1, "energy 5", "", false, "stormlight", placeholderImg, storm, "storm", 9, 0, 0);
var storm8 = new CardCon("Storm Crunch", 0, 4, "Ward 5. Rummage 3.", "hero", 1, "ward 5", "rummage 3", false, "stormlight", placeholderImg, storm, "storm", 8, 0, 0);
var storm9 = new CardCon("Energize", 0, 4, "Stash 5. Extra 1.", "hero", 1, "stash", "extra 1", false, "stormlight", placeholderImg, storm, "storm", 7, 0, 0);
var storm10 = new CardCon("Thunder Clap", 0, 4, "Finesse 2. Draw +1.", "hero", 1, "finesse 2", "int 1", false, "stormlight", placeholderImg, storm, "storm", 10, 0, 0);
var storm11 = new CardCon("Thunderhead", 0, 8, "Ward 3.", "hero", 1, "ward 3", "", false, "stormlight", placeholderImg, storm, "storm", 11, 0, 0);
var storm12 = new CardCon("Recharge", 0, 2, "Draw +2. Energy 2.", "hero", 2, "int 2", "energy 2", false, "stormlight", placeholderImg, storm, "storm", 12, 0, 0);
var storm13 = new CardCon("Bitter Downpour", 0, 5, "Reclaim 2. Next +2.", "hero", 2, "reclaim 2", "next 2", false, "stormlight", placeholderImg, storm, "storm", 13, 0, 0);
var storm14 = new CardCon("Double Flash", 0, 1, "Random. Extra 1/2", "hero", 2, "random", "extra 1/extra 2", false, "stormlight", placeholderImg, storm, "storm", 14, 0, 0);
var storm15 = new CardCon("Converging Storm", 0, 4, "+2 For Each Storm Card.", "hero", 2, "factionBoost 2", "", false, "stormlight", placeholderImg, storm, "storm", 15, 0, 0);
var storm16 = new CardCon("Paralyzing Stab", 1, 4, "Stun. Extra.", "hero", 2, "stun", "extra 1", false, "stormlight", placeholderImg, storm, "storm", 16, 0, 0);
var storm17 = new CardCon("Overcharging", 1, 3, "Shuffle 3 Overcharges into your deck.", "hero", 3, "addCard 25 3", "", false, "stormlight", placeholderImg, storm, "storm", 17, 0, 0);
var storm18 = new CardCon("Thunder Punch", 1, 10, "Stun the Enemy.", "hero", 2, "stun", "", false, "stormlight", placeholderImg, storm, "storm", 18, 0, 0);
var storm19 = new CardCon("Hurricane Essence", 2, 3, "Draw +3.", "hero", 3, "int 3", "", false, "stormlight", placeholderImg, storm, "storm", 19, 0, 0);
var storm20 = new CardCon("The Elder Cloud", 0, 0, "Stare deep.", "hero", 3, "addCard 26 1", "remove", false, "stormlight", placeholderImg, storm, "storm", 20, 0, 0);
//var storm19 = new CardCon("Delayed Shock", 1, 0, "Scheme 2.", "hero", 0, "scheme storm 2 stun", 1, false, "character", placeholderImg, storm, "storm", 19, 0, 0);
//var storm20 = new CardCon("Treasure Storm", 4, 0, "Scheme 4.", "hero", 0, "scheme storm 4 treasure", 1, false, "character", placeholderImg, storm, "storm", 20, 0, 0);

var storm21 = new CardCon("Lightning Bug", 2, 0, "Storm Cards get +3.", "hero", 0, "supBoost storm 3", 99, false, "support", lightningBug, storm, "storm", 0, 0, 0);
var storm22 = new CardCon("Static Glider", 3, 0, "+5 Ward.", "hero", 0, "supShield 5", 99, false, "support", staticGlider, storm, "storm", 0, 0, 0);
var storm23 = new CardCon("Great Shock Shark", 4, 0, "Storm Cards get +6.", "hero", 0, "supBoost storm 6", 99, false, "support", greatShockShark, storm, "storm", 0, 0, 0);
var storm24 = new CardCon("Shelter Thump", 2, 0, "Gain 4 Storm Gems.", "hero", 0, "supGems 4", 99, false, "support", shelterThump, storm, "storm", 0, 0, 0);
var storm25 = new CardCon("Shock Shark", 2, 0, "Gain 2 Storm Cards.", "hero", 0, "supCards 2", 99, false, "support", shockShark, storm, "storm", 0, 0, 0);
var storm26 = new CardCon("Static Catcher", 3, 0, "Storm Cards get Rummage 2", "hero", 0, "match/storm/rummage 2", 99, false, "support", staticCatcher, storm, "storm", 0, 0, 0);
var storm27 = new CardCon("Rain Wolf", 3, 0, "Gain 4 Energy Per Turn.", "hero", 0, "supEnergy 4", 99, false, "support", rainWolf, storm, "storm", 0, 0, 0);
var storm28 = new CardCon("Schorched Tree Ghast", 2, 0, "Reclaim Cards get +5.", "hero", 0, "supAbilityBoost reclaim 5", 99, false, "support", scorchedTreeGhast, storm, "storm", 0, 0, 0);
var storm29 = new CardCon("Enlightened Rain Wolf", 4, 0, "Storm Cards get extra 1", "hero", 0, "match/storm/extra 1", 99, false, "support", enlightenedRainWolf, storm, "storm", 0, 0, 0);

var spooky1 = new CardCon("Gang of Fleebs", 0, 0, "Nothing Yet", "hero", 0, "", 99, false, "support", gangOfFleebs, spooky, "spooky", 0, 0, 0);
var golem1 = new CardCon("Earth Golem", 5, 0, "Earth Cards get +8.", "hero", 0, "supBoost earth 8", 99, false, "support", earthGolem, spooky, "spooky", 0, 0, 0);
var golem2 = new CardCon("Fire Golem", 5, 0, "Fire Cards get +8.", "hero", 0, "supBoost fire 8", 99, false, "support", fireGolem, spooky, "spooky", 0, 0, 0);
var golem3 = new CardCon("Water Golem", 5, 0, "Water Cards get +8.", "hero", 0, "supBoost water 8", 99, false, "support", waterGolem, spooky, "spooky", 0, 0, 0);
var golem4 = new CardCon("Wind Golem", 5, 0, "Wind Cards get +8.", "hero", 0, "supBoost wind 8", 99, false, "support", windGolem, spooky, "spooky", 0, 0, 0);
var golem5 = new CardCon("Desert Golem", 5, 0, "Desert Cards get +10.", "hero", 0, "supBoost desert 10", 99, false, "support", desertGolem, spooky, "spooky", 0, 0, 0);
var golem6 = new CardCon("Lava Golem", 5, 0, "Lava Cards get +10.", "hero", 0, "supBoost lava 10", 99, false, "support", lavaGolem, spooky, "spooky", 0, 0, 0);
var golem7 = new CardCon("Mud Golem", 5, 0, "Mud Cards get +10.", "hero", 0, "supBoost mud 10", 99, false, "support", mudGolem, spooky, "spooky", 0, 0, 0);
var golem8 = new CardCon("Storm Golem", 5, 0, "Storm Cards get +10.", "hero", 0, "supBoost storm 10", 99, false, "support", stormGolem, spooky, "spooky", 0, 0, 0);

var addCard1 = new CardCon("Energy Blast", 0, 5, "Gain 2 Energy. Remove.", "hero", 0, "energy 2", "remove", false, "stormlight", placeholderImg, neutral, "neutral", 0, 0, 0);
var addCard2 = new CardCon("Grey Goo", 0, 0, "Still Gross", "hero", 0, "addCard 3 1", "remove", false, "stormlight", placeholderImg, neutral, "neutral", 0, 0, 0);
var addCard3 = new CardCon("Supreme Power", 0, 5, "Magic +5. Remove.", "hero", 0, "str 5", "remove", false, "stormlight", placeholderImg, neutral, "neutral", 0, 0, 0);
var addCard4 = new CardCon("Berry", 0, 3, "Heal 8. Remove.", "hero", 0, "heal 8", "remove", false, "stormlight", placeholderImg, earth, "earth", 0, 0, 0);
var addCard5 = new CardCon("Strange Geode", 0, 0, "It's Cracking", "hero", 0, "addCard6 1", "remove", false, "stormlight", placeholderImg, earth, "earth", 0, 0, 0);
var addCard6 = new CardCon("Quartz of Destiny", 0, 0, "Ongoing Ward +6. Remove.", "hero", 0, "def 6", "remove", false, "stormlight", placeholderImg, earth, "earth", 0, 0, 0);
var addCard7 = new CardCon("Roast", 0, 10, "Roasted. Remove.", "hero", 0, "remove", "", false, "stormlight", placeholderImg, fire, "fire", 0, 0, 0);
var addCard8 = new CardCon("Flame Meditation", 0, 0, "Reflect.", "hero", 0, "addCard 9 1", "remove", false, "stormlight", placeholderImg, fire, "fire", 0, 0, 0);
var addCard9 = new CardCon("Ultimate Rage", 0, 20, "All. Remove.", "hero", 0, "remove", "all", false, "stormlight", placeholderImg, fire, "fire", 0, 0, 0);
var addCard10 = new CardCon("Life Reserves", 0, 2, "Ward 6. Remove.", "hero", 0, "ward 6", "remove", false, "stormlight", placeholderImg, water, "water", 0, 0, 0);
var addCard11 = new CardCon("Perplexing Puddle", 0, 0, "Even Deeper.", "hero", 0, "addCard 12 1", "remove", false, "stormlight", placeholderImg, water, "water", 0, 0, 0);
var addCard12 = new CardCon("Leviathan Grasp", 0, 15, "Heal 15. Remove.", "hero", 0, "heal 15", "remove", false, "stormlight", placeholderImg, water, "water", 0, 0, 0);
var addCard13 = new CardCon("Flurry", 0, 4, "Finesse 4. Remove.", "hero", 0, "finesse 4", "remove", false, "stormlight", placeholderImg, wind, "wind", 0, 0, 0);
var addCard14 = new CardCon("Whisper Stone", 0, 0, "A Faint Meldoy?", "hero", 0, "addCard15 1", "remove", false, "stormlight", placeholderImg, wind, "wind", 0, 0, 0);
var addCard15 = new CardCon("Gale Symphony", 0, 5, "Draw +5. Remove.", "hero", 0, "int 5", "remove", false, "stormlight", placeholderImg, wind, "wind", 0, 0, 0);
var addCard16 = new CardCon("Time Stop", 0, 3, "Multiply x3. Remove.", "hero", 0, "multiply 2", "remove", false, "stormlight", placeholderImg, desert, "desert", 0, 0, 0);
var addCard17 = new CardCon("Scarab Trinket", 0, 0, "A Hidden Key!", "hero", 0, "addCard 18 1", "remove", false, "stormlight", placeholderImg, desert, "desert", 0, 0, 0);
var addCard18 = new CardCon("Pharoh's Hoard", 0, 0, "Rewards. Remove.", "hero", 0, "treasure 4 2", "remove", false, "stormlight", placeholderImg, desert, "desert", 0, 0, 0);
var addCard19 = new CardCon("Incinerate", 0, 12, "Purge. Remove.", "hero", 0, "purge", "remove", false, "stormlight", placeholderImg, lava, "lava", 0, 0, 0);
var addCard20 = new CardCon("Molten Ingot", 0, 0, "It's transforming!", "hero", 0, "addCard 21 1", "remove", false, "stormlight", placeholderImg, lava, "lava", 0, 0, 0);
var addCard21 = new CardCon("Kaboom Crown", 0, 0, "Rewards. Remove.", "hero", 0, "treasure 4 2", "remove", false, "stormlight", placeholderImg, lava, "lava", 0, 0, 0);
var addCard22 = new CardCon("Sludge Plague", 0, 1, "Poison 10. Remove.", "hero", 0, "poison 10", "remove", false, "stormlight", placeholderImg, mud, "mud", 0, 0, 0);
var addCard23 = new CardCon("Purple Goo", 0, 0, "It's squishy", "hero", 0, "addCard 24 1", "remove", false, "stormlight", placeholderImg, mud, "mud", 0, 0, 0);
var addCard24 = new CardCon("Spontaneous Generation", 0, 0, "Rewards. Remove.", "hero", 0, "treasure 4 2", "remove", false, "stormlight", placeholderImg, mud, "mud", 0, 0, 0);
var addCard25 = new CardCon("Overcharge", 0, 5, "Extra", "hero", 0, "extra 1", "remove", false, "stormlight", placeholderImg, storm, "storm", 0, 0, 0);
var addCard26 = new CardCon("The Elder Cloud", 0, 0, "Give yourself over.", "hero", 0, "addCard 27 1", "remove", false, "stormlight", placeholderImg, storm, "storm", 0, 0, 0);
var addCard27 = new CardCon("Elder Blessing", 0, 0, "Reward. Remove.", "hero", 0, "treasure 4 2", "remove", false, "stormlight", placeholderImg, storm, "storm", 0, 0, 0);

var transform1 = new CardCon("Crystal", 0, 3, "Woot", "hero", 0, "", "", false, "stormlight",placeholderImg, mud, "mud", 0, 0, 0);

var neutral99 = new CardCon("", 0, 0, "?", "hero", 0, "", "", false, "stormlight", placeholderImg, placeholderImg, "neutral", 0, 0, 0);
var earth99 = new CardCon("", 0, 0, "?", "hero", 0, "", "", false, "stormlight", placeholderImg, earth, "earth", 0, 0, 0);
var fire99 = new CardCon("", 0, 0, "?", "hero", 0, "", "", false, "stormlight", placeholderImg, fire, "fire", 0, 0, 0);
var water99 = new CardCon("", 0, 0, "?", "hero", 0, "", "", false, "stormlight", placeholderImg, water, "water", 0, 0, 0);
var wind99 = new CardCon("", 0, 0, "?", "hero", 0, "", "", false, "stormlight", placeholderImg, wind, "wind", 0, 0, 0);
var desert99 = new CardCon("", 0, 0, "?", "hero", 0, "", "", false, "stormlight", placeholderImg, desert, "desert", 0, 0, 0);
var lava99 = new CardCon("", 0, 0, "?", "hero", 0, "", "", false, "stormlight", placeholderImg, lava, "lava", 0, 0, 0);
var mud99 = new CardCon("", 0, 0, "?", "hero", 0, "", "", false, "stormlight", placeholderImg, mud, "mud", 0, 0, 0);
var storm99 = new CardCon("", 0, 0, "?", "hero", 0, "", "", false, "stormlight", placeholderImg, storm, "storm", 0, 0, 0);

const wobbledukStats = {
	name: "Wobbleduk",
	hp: 6,
	attack: 2,
	sabotage: 0,
	pointValue: 100,
	image: wobbleduk,
	sabCard: sabotage1,
	element: "earth",
	supCard: earth29,
	effect: ["regular", null, null]
};

const angryWobbledukStats = {
	name: "Mean Wobbleduk",
	hp: 6,
	attack: 2,
	sabotage: 1,
	pointValue: 100,
	image: wobbleduk,
	sabCard: sabotage1,
	element: "earth",
	supCard: earth29,
	effect: ["regular", null, null]
};

const primtreeStats = {
	name: "Primtree",
	hp: 7,
	attack: 2,
	sabotage: 1,
	pointValue: 100,
	image: primtree,
	sabCard: sabotage8,
	element: "earth",
	supCard: earth22,
	effect: ["regular", null, null]
};

const primtreeDefenderStats = {
	name: "Primtree Defender",
	hp: 10,
	attack: 2,
	sabotage: 1,
	pointValue: 200,
	image: toughPrimtree,
	sabCard: sabotage8,
	element: "earth",
	supCard: earth28,
	effect: ["regular", null, null]
};

const stoneStriderStats = {
	name: "Stone Strider",
	hp: 9,
	attack: 3,
	sabotage: 0,
	pointValue: 200,
	image: stoneStrider,
	sabCard: sabotage1,
	element: "earth",
	supCard: earth25,
	effect: ["regular", null, null]
};

const rockFairyStats = {
	name: "Rock Fairy",
	hp: 11,
	attack: 1,
	sabotage: 1,
	pointValue: 300,
	image: rockFairy,
	sabCard: sabotage9,
	element: "earth",
	supCard: earth21,
	effect: ["regular", null, null]
};

const steedStats = {
	name: "Steed",
	hp: 8,
	attack: 4,
	sabotage: 2,
	pointValue: 300,
	image: steed,
	sabCard: sabotage8,
	element: "earth",
	supCard: earth24,
	effect: ["regular", null, null]
};

const primtreeRoyalStats = {
	name: "Jewel Primtree",
	hp: 13,
	attack: 2,
	sabotage: 2,
	pointValue: 400,
	image: jewelPrimtree,
	sabCard: sabotage9,
	element: "earth",
	supCard: earth26,
	effect: ["regular", null, null]
};

const kingWobbledukStats = {
	name: "King Wobbleduk",
	hp: 20,
	attack: 4,
	sabotage: 2,
	pointValue: 1000,
	image: kingWobbleduk,
	sabCard: sabotage1,
	element: "earth",
	supCard: earth23,
	effect: ["regular", null, null]
};

const queenPrimtreeStats = {
	name: "Queen Primtree",
	hp: 20,
	attack: 4,
	sabotage: 4,
	pointValue: 1000,
	image: queenPrimtree,
	sabCard: sabotage8,
	element: "earth",
	supCard: earth27,
	effect: ["regular", null, null]
};

const emberAdderStats = {
	name: "Ember Adder",
	hp: 6,
	attack: 3,
	sabotage: 0,
	pointValue: 100,
	image: emberAdder,
	sabCard: sabotage1,
	element: "fire",
	supCard: fire24,
	effect: [null, null, null]
};

const flameCrawlerStats = {
	name: "Flame Crawler",
	hp: 9,
	attack: 2,
	sabotage: 0,
	pointValue: 100,
	image: flameCrawler,
	sabCard: sabotage1,
	element: "fire",
	supCard: fire29,
	effect: [null, null, null]
};

const morpStats = {
	name: "Morp",
	hp: 5,
	attack: 4,
	sabotage: 1,
	pointValue: 200,
	image: morp,
	sabCard: sabotage6,
	element: "fire",
	supCard: fire23,
	effect: [null, null, null]
};

const kragmupStats = {
	name: "Kragmup",
	hp: 6,
	attack: 4,
	sabotage: 0,
	pointValue: 200,
	image: kragmup,
	sabCard: sabotage1,
	element: "fire",
	supCard: fire25,
	effect: [null, null, null]
};

const tipperStats = {
	name: "Tipper",
	hp: 9,
	attack: 4,
	sabotage: 0,
	pointValue: 300,
	image: tipper,
	sabCard: sabotage6,
	element: "fire",
	supCard: fire26,
	effect: [null, null, null]
};

const pheonixWyrmStats = {
	name: "Pheonix Wyrm",
	hp: 9,
	attack: 3,
	sabotage: 2,
	pointValue: 300,
	image: pheonixWyrm,
	sabCard: sabotage6,
	element: "fire",
	supCard: fire28,
	effect: [null, null, null]
};

const flameScrablerStats = {
	name: "Flame Scrabler",
	hp: 11,
	attack: 3,
	sabotage: 1,
	pointValue: 400,
	image: flameScrabler,
	sabCard: sabotage6,
	element: "fire",
	supCard: fire21,
	effect: [null, null, null]
};

const grandTipperStats = {
	name: "Grand Tipper",
	hp: 20,
	attack: 4,
	sabotage: 3,
	pointValue: 1000,
	image: grandTipper,
	sabCard: sabotage1,
	element: "fire",
	supCard: fire27,
	effect: [null, null, null]
};

const broodmotherStats = {
	name: "Broodmother",
	hp: 21,
	attack: 3,
	sabotage: 3,
	pointValue: 1000,
	image: broodmother,
	sabCard: sabotage1,
	element: "fire",
	supCard: fire2,
	effect: [null, null, null]
};

const marshSlapperStats = {
	name: "Marsh Slapper",
	hp: 6,
	attack: 3,
	sabotage: 1,
	pointValue: 100,
	image: marshSlapper,
	sabCard: sabotage1,
	element: "water",
	supCard: water27,
	effect: [null, null, null]
};

const trenchThumpStats = {
	name: "Trench Thump",
	hp: 9,
	attack: 1,
	sabotage: 2,
	pointValue: 100,
	image: trenchThump,
	sabCard: sabotage1,
	element: "water",
	supCard: water28,
	effect: [null, null, null]
};

const ghostSharkStats = {
	name: "Ghost Shark",
	hp: 7,
	attack: 3,
	sabotage: 1,
	pointValue: 200,
	image: ghostShark,
	sabCard: sabotage5,
	element: "water",
	supCard: water26,
	effect: [null, null, null]
};

const coralThumpStats = {
	name: "Coral Thump",
	hp: 9,
	attack: 2,
	sabotage: 2,
	pointValue: 200,
	image: coralThump,
	sabCard: sabotage1,
	element: "water",
	supCard: water21,
	effect: [null, null, null]
};

const budleFairyStats = {
	name: "Budle Fairy",
	hp: 7,
	attack: 3,
	sabotage: 5,
	pointValue: 300,
	image: budleFairy,
	sabCard: sabotage1,
	element: "water",
	supCard: water23,
	effect: [null, null, null]
};

const caveThumpStats = {
	name: "Cave Thump",
	hp: 10,
	attack: 3,
	sabotage: 2,
	pointValue: 300,
	image: caveThump,
	sabCard: sabotage1,
	element: "water",
	supCard: water29,
	effect: [null, null, null]
};

const albinoSlapperStats = {
	name: "Albino Slapper",
	hp: 9,
	attack: 4,
	sabotage: 1,
	pointValue: 400,
	image: albinoSlapper,
	sabCard: sabotage7,
	element: "water",
	supCard: water24,
	effect: [null, null, null]
};

const superBudleFairyStats = {
	name: "Super Budle Fairy",
	hp: 20,
	attack: 4,
	sabotage: 3,
	pointValue: 1000,
	image: superBudleFairy,
	sabCard: sabotage3,
	element: "water",
	supCard: water25,
	effect: [null, null, null]
};


const kingSlapperStats = {
	name: "King Slapper",
	hp: 25,
	attack: 3,
	sabotage: 3,
	pointValue: 1000,
	image: kingSlapper,
	sabCard: sabotage1,
	element: "water",
	supCard: water22,
	effect: [null, null, null]
};

const madnadoStats = {
	name: "Madnado",
	hp: 6,
	attack: 3,
	sabotage: 1,
	pointValue: 100,
	image: madnado,
	sabCard: sabotage3,
	element: "wind",
	supCard: wind29,
	effect: [null, null, null]
};

const maclawStats = {
	name: "Maclaw",
	hp: 8,
	attack: 2,
	sabotage: 1,
	pointValue: 100,
	image: maclaw,
	sabCard: sabotage2,
	element: "wind",
	supCard: wind27,
	effect: [null, null, null]
};

const flooferStats = {
	name: "Floofer",
	hp: 12,
	attack: 2,
	sabotage: 0,
	pointValue: 200,
	image: floofer,
	sabCard: sabotage1,
	element: "wind",
	supCard: wind26,
	effect: [null, null, null]
};

const raaHowlerStats = {
	name: "Raa Howler",
	hp: 9,
	attack: 3,
	sabotage: 1,
	pointValue: 200,
	image: raaHowler,
	sabCard: sabotage2,
	element: "wind",
	supCard: wind24,
	effect: [null, null, null]
};

const windleFairyStats = {
	name: "Windle Fairy",
	hp: 14,
	attack: 1,
	sabotage: 2,
	pointValue: 300,
	image: windleFairy,
	sabCard: sabotage3,
	element: "wind",
	supCard: wind21,
	effect: [null, null, null]
};

const spookawStats = {
	name: "Spookaw",
	hp: 10,
	attack: 2,
	sabotage: 0,
	pointValue: 300,
	image: spookaw,
	sabCard: sabotage2,
	element: "wind",
	supCard: wind28,
	effect: [null, null, null]
};

const windFlitterStats = {
	name: "Wind Flitter",
	hp: 8,
	attack: 1,
	sabotage: 4,
	pointValue: 400,
	image: windFlitter,
	sabCard: sabotage2,
	element: "wind",
	supCard: wind23,
	effect: [null, null, null]
};

const empressMadnadoStats = {
	name: "Empress Madnado",
	hp: 17,
	attack: 5,
	sabotage: 2,
	pointValue: 1000,
	image: empressMadnado,
	sabCard: sabotage3,
	element: "wind",
	supCard: wind22,
	effect: [null, null, null]
};

const alphaSpookawStats = {
	name: "Alpha Spookaw",
	hp: 19,
	attack: 4,
	sabotage: 2,
	pointValue: 1000,
	image: alphaSpookaw,
	sabCard: sabotage3,
	element: "wind",
	supCard: wind25,
	effect: [null, null, null]
};

const duneStabberStats = {
	name: "Dune Stabber",
	hp: 9,
	attack: 4,
	sabotage: 1,
	pointValue: 100,
	image: duneStabber,
	sabCard: sabotage2,
	element: "desert",
	supCard: desert21,
	effect: [null, null, null]
};

const sandSnippStats = {
	name: "Sand Snipp",
	hp: 10,
	attack: 2,
	sabotage: 0,
	pointValue: 100,
	image: sandSnipp,
	sabCard: sabotage1,
	element: "desert",
	supCard: desert29,
	effect: [null, null, null]
};

const desertMadnadoStats = {
	name: "Desert Madnado",
	hp: 7,
	attack: 5,
	sabotage: 1,
	pointValue: 200,
	image: desertMadnado,
	sabCard: sabotage2,
	element: "desert",
	supCard: desert27,
	effect: [null, null, null]
};

const grumpeelStats = {
	name: "Grumpeel",
	hp: 13,
	attack: 3,
	sabotage: 0,
	pointValue: 200,
	image: grumpeel,
	sabCard: sabotage1,
	element: "desert",
	supCard: desert25,
	effect: [null, null, null]
};

const boneStalkerStats = {
	name: "Bone Stalker",
	hp: 11,
	attack: 5,
	sabotage: 1,
	pointValue: 300,
	image: boneStalker,
	sabCard: sabotage10,
	element: "desert",
	supCard: desert28,
	effect: [null, null, null]
};

const wanderingRelicStats = {
	name: "Wandering Relic",
	hp: 7,
	attack: 3,
	sabotage: 3,
	pointValue: 300,
	image: wanderingRelic,
	sabCard: sabotage10,
	element: "desert",
	supCard: desert26,
	effect: [null, null, null]
};

const predatorSnippStats = {
	name: "Predator Snipp",
	hp: 5,
	attack: 5,
	sabotage: 2,
	pointValue: 400,
	image: predatorSnipp,
	sabCard: sabotage3,
	element: "desert",
	supCard: desert22,
	effect: [null, null, null]
};

const championStalkerStats = {
	name: "Champion Stalker",
	hp: 28,
	attack: 5,
	sabotage: 1,
	pointValue: 1000,
	image: championStalker,
	sabCard: sabotage10,
	element: "desert",
	supCard: desert23,
	effect: [exhaustedSym, null, "countDown"]
};

const stabberConclaveStats = {
	name: "Stabber Conclave",
	hp: 26,
	attack: 5,
	sabotage: 3,
	pointValue: 1000,
	image: stabberConclave,
	sabCard: sabotage2,
	element: "desert",
	supCard: desert24,
	effect: [exhaustedSym, null, "countDown"]
};

const emberiteStats = {
	name: "Emberite",
	hp: 8,
	attack: 4,
	sabotage: 0,
	pointValue: 100,
	image: emberite,
	sabCard: sabotage1,
	element: "lava",
	supCard: lava25,
	effect: [null, null, null]
};

const lavaWalkerStats = {
	name: "Lava Walker",
	hp: 16,
	attack: 2,
	sabotage: 0,
	pointValue: 100,
	image: lavaWalker,
	sabCard: sabotage1,
	element: "lava",
	supCard: lava22,
	effect: [null, null, null]
};

const walkingEruptionStats = {
	name: "Walking Eruption",
	hp: 14,
	attack: 3,
	sabotage: 1,
	pointValue: 200,
	image: walkingEruption,
	sabCard: sabotage5,
	element: "lava",
	supCard: lava29,
	effect: [null, null, null]
};

const trekapodStats = {
	name: "Trekapod",
	hp: 9,
	attack: 3,
	sabotage: 2,
	pointValue: 200,
	image: trekapod,
	sabCard: sabotage1,
	element: "lava",
	supCard: lava27,
	effect: [null, null, null]
};

const moltasaurusStats = {
	name: "Moltasaurus",
	hp: 11,
	attack: 6,
	sabotage: 0,
	pointValue: 300,
	image: moltasaurus,
	sabCard: sabotage1,
	element: "lava",
	supCard: lava23,
	effect: [null, null, null]
};

const volcanoTramplerStats = {
	name: "Volcano Trampler",
	hp: 12,
	attack: 5,
	sabotage: 1,
	pointValue: 300,
	image: volcanoTrampler,
	sabCard: sabotage5,
	element: "lava",
	supCard: lava21,
	effect: [null, null, null]
};

const nutriteStats = {
	name: "Nutrite",
	hp: 7,
	attack: 3,
	sabotage: 2,
	pointValue: 400,
	image: nutrite,
	sabCard: sabotage7,
	element: "lava",
	supCard: lava26,
	effect: [null, null, null]
};

const moltasaurusRexStats = {
	name: "Moltasaurus Rex",
	hp: 30,
	attack: 7,
	sabotage: 2,
	pointValue: 1000,
	image: moltasaurusRex,
	sabCard: sabotage5,
	element: "lava",
	supCard: lava28,
	effect: [power, 1, "static"]
};

const lavaLordWalkerStats = {
	name: "Lava Lord Walker",
	hp: 38,
	attack: 4,
	sabotage: 1,
	pointValue: 1000,
	image: lavaLordWalker,
	sabCard: sabotage4,
	element: "lava",
	supCard: lava24,
	effect: [power, 1, "static"]
};

const lesserGalopeStats = {
	name: "Lesser Galope",
	hp: 12,
	attack: 3,
	sabotage: 1,
	pointValue: 100,
	image: lesserGalope,
	sabCard: sabotage1,
	element: mud,
	supCard: mud26,
	effect: [null, null, null]
};

const toxicRollerStats = {
	name: "Toxic Roller",
	hp: 9,
	attack: 3,
	sabotage: 2,
	pointValue: 100,
	image: toxicRoller,
	sabCard: sabotage8,
	element: mud,
	supCard: mud25,
	effect: [null, null, null]
};

const sominusStats = {
	name: "Sominus",
	hp: 8,
	attack: 3,
	sabotage: 1,
	pointValue: 200,
	image: sominus,
	sabCard: sabotage9,
	element: mud,
	supCard: mud27,
	effect: [null, null, null]
};

const warthusStats = {
	name: "Warthus",
	hp: 20,
	attack: 2,
	sabotage: 0,
	pointValue: 200,
	image: warthus,
	sabCard: sabotage1,
	element: mud,
	supCard: mud21,
	effect: [null, null, null]
};

const mucksterStats = {
	name: "Muckster",
	hp: 10,
	attack: 4,
	sabotage: 3,
	pointValue: 300,
	image: muckster,
	sabCard: sabotage8,
	element: mud,
	supCard: mud22,
	effect: [null, null, null]
};

const bogBoarStats = {
	name: "Bog Boar",
	hp: 12,
	attack: 3,
	sabotage: 3,
	pointValue: 300,
	image: bogBoar,
	sabCard: sabotage1,
	element: mud,
	supCard: mud24,
	effect: [null, null, null]
};

const greaterGalopeStats = {
	name: "Greater Galope",
	hp: 14,
	attack: 4,
	sabotage: 1,
	pointValue: 400,
	image: greaterGalope,
	sabCard: sabotage1,
	element: mud,
	supCard: mud29,
	effect: [null, null, null]
};

const archmageMucksterStats = {
	name: "Archmage Muckster",
	hp: 23,
	attack: 7,
	sabotage: 1,
	pointValue: 1000,
	image: archmageMuckster,
	sabCard: sabotage11,
	element: mud,
	supCard: mud23,
	effect: [int, 1, "static"]
};

const duchessWarthusStats = {
	name: "Duchess Warthus",
	hp: 46,
	attack: 3,
	sabotage: 0,
	pointValue: 1000,
	image: duchessWarthus,
	sabCard: sabotage1,
	element: "mud",
	supCard: mud28,
	effect: [int, 1, "static"]
};

const staticGliderStats = {
	name: "Static Glider",
	hp: 8,
	attack: 3,
	sabotage: 1,
	pointValue: 100,
	image: staticGlider,
	sabCard: sabotage2,
	element: "storm",
	supCard: storm22,
	effect: [null, null, null]
};

const shockSharkStats = {
	name: "Shock Shark",
	hp: 9,
	attack: 5,
	sabotage: 0,
	pointValue: 100,
	image: shockShark,
	sabCard: sabotage1,
	element: "storm",
	supCard: storm25,
	effect: [null, null, null]
};

const lightningBugStats = {
	name: "Lightning Bug",
	hp: 7,
	attack: 4,
	sabotage: 2,
	pointValue: 200,
	image: lightningBug,
	sabCard: sabotage2,
	element: "storm",
	supCard: storm21,
	effect: [null, null, null]
};

const scorchedTreeGhastStats = {
	name: "Schorched Tree Ghast",
	hp: 17,
	attack: 3,
	sabotage: 3,
	pointValue: 200,
	image: scorchedTreeGhast,
	sabCard: sabotage1,
	element: "storm",
	supCard: storm28,
	effect: [null, null, null]
};

const shelterThumpStats = {
	name: "Shelter Thump",
	hp: 14,
	attack: 2,
	sabotage: 3,
	pointValue: 300,
	image: shelterThump,
	sabCard: sabotage1,
	element: "storm",
	supCard: storm24,
	effect: [null, null, null]
};

const rainWolfStats = {
	name: "Rain Wolf",
	hp: 11,
	attack: 4,
	sabotage: 3,
	pointValue: 300,
	image: rainWolf,
	sabCard: sabotage2,
	element: "storm",
	supCard: storm27,
	effect: [null, null, null]
};

const staticCatcherStats = {
	name: "Static Catcher",
	hp: 10,
	attack: 3,
	sabotage: 5,
	pointValue: 400,
	image: staticCatcher,
	sabCard: sabotage1,
	element: "storm",
	supCard: storm26,
	effect: [null, null, null]
};

const greatShockSharkStats = {
	name: "Great Shock Shark",
	hp: 28,
	attack: 6,
	sabotage: 2,
	pointValue: 1000,
	image: greatShockShark,
	sabCard: sabotage3,
	element: "storm",
	supCard: storm23,
	effect: [slash, 2, "countDown"]
};

const enlightenedRainWolfStats = {
	name: "Enlightened Rain Wolf",
	hp: 30,
	attack: 5,
	sabotage: 6,
	pointValue: 1000,
	image: enlightenedRainWolf,
	sabCard: sabotage2,
	element: "storm",
	supCard: storm29,
	effect: [slash, 2, "countDown"]
};

const borgusStats = {
	name: "Borgus",
	hp: 17,
	attack: 4,
	sabotage: 2,
	pointValue: 200,
	image: borgus,
	sabCard: sabotage1,
	element: "spooky",
	supCard: spooky1,
	effect: [null, null, null]
};

const misterBorgusStats = {
	name: "Mister Borgus",
	hp: 50,
	attack: 6,
	sabotage: 2,
	pointValue: 200,
	image: misterBorgus,
	sabCard: sabotage1,
	element: "spooky",
	supCard: spooky1,
	effect: [null, null, null]
};

const gangOfFleebsStats = {
	name: "Gang of Fleebs",
	hp: 4,
	attack: 4,
	sabotage: 1,
	pointValue: 250,
	image: gangOfFleebs,
	sabCard: sabotage1,
	element: "spooky",
	supCard: spooky1,
	effect: [null, null, null]
};

const purpleKreepStats = {
	name: "Purple Kreep",
	hp: 15,
	attack: 3,
	sabotage: 3,
	pointValue: 150,
	image: purpleKreep,
	sabCard: sabotage1,
	element: "spooky",
	supCard: spooky1,
	effect: [null, null, null]
};

const reacherStats = {
	name: "Reacher",
	hp: 20,
	attack: 3,
	sabotage: 0,
	pointValue: 150,
	image: reacher,
	sabCard: sabotage1,
	element: "spooky",
	supCard: spooky1,
	effect: [null, null, null]
};

const rundarrStats = {
	name: "Rundarr",
	hp: 12,
	attack: 3,
	sabotage: 1,
	pointValue: 100,
	image: rundarr,
	sabCard: sabotage1,
	element: "spooky",
	supCard: spooky1,
	effect: [null, null, null]
};

const sinisterSloopStats = {
	name: "Sinister Sloop",
	hp: 22,
	attack: 5,
	sabotage: 1,
	pointValue: 100,
	image: sinisterSloop,
	sabCard: sabotage1,
	element: "spooky",
	supCard: spooky1,
	effect: [null, null, null]
};

const soulShredderStats = {
	name: "Soul Shredder",
	hp: 11,
	attack: 7,
	sabotage: 2,
	pointValue: 100,
	image: soulShredder,
	sabCard: sabotage1,
	element: "spooky",
	supCard: spooky1,
	effect: [null, null, null]
};

const superPincherStats = {
	name: "Super Pincher",
	hp: 9,
	attack: 3,
	sabotage: 6,
	pointValue: 100,
	image: superPincher,
	sabCard: sabotage1,
	element: "spooky",
	supCard: spooky1,
	effect: [null, null, null]
};

const toogerStats = {
	name: "Tooger",
	hp: 100,
	attack: 5,
	sabotage: 5,
	pointValue: 100,
	image: tooger,
	sabCard: sabotage1,
	element: "spooky",
	supCard: spooky1,
	effect: [null, null, null]
};

const earthGolemStats = {
	name: "Earth Golem",
	hp: 10,
	attack: 4,
	sabotage: 1,
	pointValue: 500,
	image: earthGolem,
	sabCard: sabotage1,
	element: "earth",
	supCard: golem1,
	effect: ["impervious", null, null]
};

const fireGolemStats = {
	name: "Fire Golem",
	hp: 10,
	attack: 4,
	sabotage: 1,
	pointValue: 500,
	image: fireGolem,
	sabCard: sabotage1,
	element: "fire",
	supCard: golem2,
	effect: ["impervious", null, null]
};

const waterGolemStats = {
	name: "Water Golem",
	hp: 10,
	attack: 4,
	sabotage: 1,
	pointValue: 500,
	image: waterGolem,
	sabCard: sabotage1,
	element: "water",
	supCard: golem3,
	effect: ["impervious", null, null]
};

const windGolemStats = {
	name: "Wind Golem",
	hp: 10,
	attack: 4,
	sabotage: 1,
	pointValue: 500,
	image: windGolem,
	sabCard: sabotage1,
	element: "wind",
	supCard: golem4,
	effect: ["impervious", null, null]
};

const desertGolemStats = {
	name: "Desert Golem",
	hp: 15,
	attack: 5,
	sabotage: 1,
	pointValue: 750,
	image: desertGolem,
	sabCard: sabotage1,
	element: "desert",
	supCard: golem5,
	effect: ["impervious", null, null]
};

const lavaGolemStats = {
	name: "Lava Golem",
	hp: 15,
	attack: 5,
	sabotage: 1,
	pointValue: 750,
	image: lavaGolem,
	sabCard: sabotage1,
	element: "lava",
	supCard: golem6,
	effect: ["impervious", null, null]
};

const mudGolemStats = {
	name: "Mud Golem",
	hp: 15,
	attack: 5,
	sabotage: 1,
	pointValue: 750,
	image: mudGolem,
	sabCard: sabotage1,
	element: "mud",
	supCard: golem7,
	effect: ["impervious", null, null]
};

const stormGolemStats = {
	name: "Storm Golem",
	hp: 15,
	attack: 5,
	sabotage: 1,
	pointValue: 750,
	image: stormGolem,
	sabCard: sabotage1,
	element: "storm",	
	supCard: golem8,
	effect: ["impervious", null, null]
};

const bustedTreasureStats = {
	name: "Treasure Chest",
	hp: 5,
	attack: 0,
	sabotage: 0,
	pointValue: 0,
	image: bustedTreasure,
	sabCard: sabotage1,
	element: "object",
	effect: ["final", cardPrize, null]
};

const damagedTreasureStats = {
	name: "Treasure Chest",
	hp: 7,
	attack: 0,
	sabotage: 0,
	pointValue: 0,
	image: damagedTreasure,
	sabCard: sabotage1,
	element: "object",
	effect: ["stage", bustedTreasureStats, null]
};

const treasureChestStats = {
	name: "Treasure Chest",
	hp: 10,
	attack: 0,
	sabotage: 0,
	pointValue: 0,
	image: treasureChest,
	sabCard: sabotage1,
	element: "object",
	effect: ["stage", damagedTreasureStats, null]
};

const earthSecretRevealedStats = {
	name: "Secret",
	hp: 100,
	attack: 0,
	sabotage: 0,
	pointValue: 0,
	image: earthSecretRevealed,
	sabCard: sabotage1,
	element: "object",
	effect: ["secret", "revealed", null]
};

const earthSecretStats = {
	name: "Secret",
	hp: 1,
	attack: 0,
	sabotage: 0,
	pointValue: 0,
	image: earthSecret,
	sabCard: sabotage1,
	element: "object",
	effect: ["secret", earthSecretRevealed, "fire"]
};

const fireSecretRevealedStats = {
	name: "Secret",
	hp: 100,
	attack: 0,
	sabotage: 0,
	pointValue: 0,
	image: fireSecretRevealed,
	sabCard: sabotage1,
	element: "object",
	effect: ["secret", "revealed", null]
};

const fireSecretStats = {
	name: "Secret",
	hp: 1,
	attack: 0,
	sabotage: 0,
	pointValue: 0,
	image: fireSecret,
	sabCard: sabotage1,
	element: "object",
	effect: ["secret", fireSecretRevealed, "wind"]
};

const waterSecretRevealedStats = {
	name: "Secret",
	hp: 100,
	attack: 0,
	sabotage: 0,
	pointValue: 0,
	image: waterSecretRevealed,
	sabCard: sabotage1,
	element: "object",
	effect: ["secret", "revealed", null]
};

const waterSecretStats = {
	name: "Secret",
	hp: 1,
	attack: 0,
	sabotage: 0,
	pointValue: 0,
	image: waterSecret,
	sabCard: sabotage1,
	element: "object",
	effect: ["secret", waterSecretRevealed, "earth"]
};

const windSecretRevealedStats = {
	name: "Secret",
	hp: 100,
	attack: 0,
	sabotage: 0,
	pointValue: 0,
	image: windSecretRevealed,
	sabCard: sabotage1,
	element: "object",
	effect: ["secret", "revealed", null]
};

const windSecretStats = {
	name: "Secret",
	hp: 1,
	attack: 0,
	sabotage: 0,
	pointValue: 0,
	image: windSecret,
	sabCard: sabotage1,
	element: "object",
	effect: ["secret", windSecretRevealed, "water"]
};

const orbPrizeStats = {
	name: "Orbs",
	hp: 1,
	attack: 0,
	sabotage: 0,
	pointValue: 0,
	image: orbPrize,
	sabCard: sabotage1,
	element: "object",
	effect: ["prize", "orbs", null]
};

const cardPrizeStats = {
	name: "Cards",
	hp: 1,
	attack: 0,
	sabotage: 0,
	pointValue: 0,
	image: cardPrize,
	sabCard: sabotage1,
	element: "object",
	effect: ["prize", "cards", null]
};

const obeliskOfPrizesStats = {
	name: "Obelisk Of Prizes",
	hp: 100,
	attack: 0,
	sabotage: 0,
	pointValue: 0,
	image: obeliskOfPrizes,
	sabCard: sabotage1,
	element: "obelisk",
	effect: ["obelisk", null, null]
};

const boulderDoorStats = {
	name: "Boulder Door",
	hp: 10,
	attack: 0,
	sabotage: 0,
	pointValue: 0,
	image: boulderDoor,
	sabCard: sabotage1,
	element: "doorway",
	effect: [null, null, null]
};

const dirtDoorStats = {
	name: "Dirt Door",
	hp: 10,
	attack: 0,
	sabotage: 0,
	pointValue: 0,
	image: dirtDoor,
	sabCard: sabotage1,
	element: "doorway",
	effect: ["weakness", "water", null]
};

const earthMarkedDoorStats = {
	name: "Mysterious Door",
	hp: 10,
	attack: 0,
	sabotage: 0,
	pointValue: 0,
	image: earthMarkedDoor,
	sabCard: sabotage1,
	element: "doorway",
	effect: [null, null, null]
};

const fireMarkedDoorStats = {
	name: "Mysterious Door",
	hp: 10,
	attack: 0,
	sabotage: 0,
	pointValue: 0,
	image: fireMarkedDoor,
	sabCard: sabotage1,
	element: "doorway",
	effect: [null, null, null]
};

const waterMarkedDoorStats = {
	name: "Mysterious Door",
	hp: 10,
	attack: 0,
	sabotage: 0,
	pointValue: 0,
	image: waterMarkedDoor,
	sabCard: sabotage1,
	element: "doorway",
	effect: [null, null, null]
};

const windMarkedDoorStats = {
	name: "Mysterious Door",
	hp: 10,
	attack: 0,
	sabotage: 0,
	pointValue: 0,
	image: windMarkedDoor,
	sabCard: sabotage1,
	element: "doorway",
	effect: [null, null, null]
};

const emptyDoorStats = {
	name: "Empty Door",
	hp: 10,
	attack: 0,
	sabotage: 0,
	pointValue: 0,
	image: emptyDoor,
	sabCard: sabotage1,
	element: "doorway",
	effect: [null, null, null]
};

const fireDoorStats = {
	name: "Fire Door",
	hp: 10,
	attack: 0,
	sabotage: 0,
	pointValue: 0,
	image: fireDoor,
	sabCard: sabotage1,
	element: "doorway",
	effect: [null, null, null]
};

const iceDoorStats = {
	name: "Ice Door",
	hp: 10,
	attack: 0,
	sabotage: 0,
	pointValue: 0,
	image: iceDoor,
	sabCard: sabotage1,
	element: "doorway",
	effect: [null, null, null]
};

const ironDoorStats = {
	name: "Iron Door",
	hp: 10,
	attack: 0,
	sabotage: 0,
	pointValue: 0,
	image: ironDoor,
	sabCard: sabotage1,
	element: "doorway",
	effect: [null, null, null]
};

const magicDoorStats = {
	name: "Magic Door",
	hp: 10,
	attack: 0,
	sabotage: 0,
	pointValue: 0,
	image: magicDoor,
	sabCard: sabotage1,
	element: "doorway",
	effect: [null, null, null]
};

const oldDoorStats = {
	name: "Old Door",
	hp: 10,
	attack: 0,
	sabotage: 0,
	pointValue: 0,
	image: oldDoor,
	sabCard: sabotage1,
	element: "doorway",
	effect: [null, null, null]
};

const runeDoorStats = {
	name: "Rune Door",
	hp: 10,
	attack: 0,
	sabotage: 0,
	pointValue: 0,
	image: runeDoor,
	sabCard: sabotage1,
	element: "doorway",
	effect: [null, null, null]
};

const shockDoorStats = {
	name: "Shock Door",
	hp: 10,
	attack: 0,
	sabotage: 0,
	pointValue: 0,
	image: shockDoor,
	sabCard: sabotage1,
	element: "doorway",
	effect: [null, null, null]
};

const tornadoDoorStats = {
	name: "Tornado Door",
	hp: 10,
	attack: 0,
	sabotage: 0,
	pointValue: 0,
	image: tornadoDoor,
	sabCard: sabotage1,
	element: "doorway",
	effect: [null, null, null]
};

const vineDoorStats = {
	name: "Vine Door",
	hp: 10,
	attack: 0,
	sabotage: 0,
	pointValue: 0,
	image: vineDoor,
	sabCard: sabotage1,
	element: "doorway",
	effect: ["weakness", "fire", null]
};

const waterDoorStats = {
	name: "Water Door",
	hp: 10,
	attack: 0,
	sabotage: 0,
	pointValue: 0,
	image: waterDoor,
	sabCard: sabotage1,
	element: "doorway",
	effect: [null, null, null]
};

const earthStalactiteStats = {
	name: "Stalactite",
	hp: 10,
	attack: 0,
	sabotage: 0,
	pointValue: 0,
	image: earthStalactite,
	sabCard: sabotage1,
	element: "object",
	effect: ["drop", "orbs", true]
};

const fireStalactiteStats = {
	name: "Stalactite",
	hp: 10,
	attack: 0,
	sabotage: 0,
	pointValue: 0,
	image: fireStalactite,
	sabCard: sabotage1,
	element: "object",
	effect: ["drop", "orbs", true]
};

const waterStalactiteStats = {
	name: "Stalactite",
	hp: 10,
	attack: 0,
	sabotage: 0,
	pointValue: 0,
	image: waterStalactite,
	sabCard: sabotage1,
	element: "object",
	effect: ["drop", "orbs", true]
};

const windStalactiteStats = {
	name: "Stalactite",
	hp: 10,
	attack: 0,
	sabotage: 0,
	pointValue: 0,
	image: windStalactite,
	sabCard: sabotage1,
	element: "object",
	effect: ["drop", "orbs", true]
};

const earthArtifactStats = {
	name: "Earth Artifact",
	hp: 10,
	attack: 0,
	sabotage: 0,
	pointValue: 0,
	image: earthArtifact,
	sabCard: sabotage1,
	element: "object",
	effect: ["artifact", null, null]
};

const fireArtifactStats = {
	name: "Fire Artifact",
	hp: 10,
	attack: 0,
	sabotage: 0,
	pointValue: 0,
	image: fireArtifact,
	sabCard: sabotage1,
	element: "object",
	effect: ["artifact", null, null]
};

const waterArtifactStats = {
	name: "Water Artifact",
	hp: 10,
	attack: 0,
	sabotage: 0,
	pointValue: 0,
	image: waterArtifact,
	sabCard: sabotage1,
	element: "object",
	effect: ["artifact", null, null]
};

const windArtifactStats = {
	name: "Wind Artifact",
	hp: 10,
	attack: 0,
	sabotage: 0,
	pointValue: 0,
	image: windArtifact,
	sabCard: sabotage1,
	element: "object",
	effect: ["artifact", null, null]
};

const orbTraderStats = {
	name: "Orb Trader",
	hp: 10,
	attack: 0,
	sabotage: 0,
	pointValue: 0,
	image: mortemus,
	sabCard: sabotage1,
	element: "object",
	effect: ["orbTrader", null, null]
};

const runeFragmentStats = {
	name: "Earth Rune Fragment",
	hp: 10,
	attack: 0,
	sabotage: 0,
	pointValue: 0,
	image: placeholderImg,
	sabCard: sabotage1,
	element: "object",
	effect: [null, null, null]
};

const prisonOrbStats = {
	name: "Prison Orb",
	hp: 10,
	attack: 0,
	sabotage: 0,
	pointValue: 0,
	image: empty,
	sabCard: sabotage1,
	element: "object",
	effect: [null, null, null]
};

var smallGolemArray = [earthGolemStats, fireGolemStats, waterGolemStats, windGolemStats];
var bigGolemArray = [desertGolemStats, lavaGolemStats, mudGolemStats, stormGolemStats];
var numberOfEnemies = 1;
var numberOfStages;
var enemyDistributionArray = [140, 280, 350, 420, 455, 490, 498];
var enemyDistributionArray2 = [90, 180, 280, 380, 430, 480, 498];
var enemyDistributionArray3 = [80, 160, 250, 340, 400, 460, 498];
var lastDoorway = "Empty Door";

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
	var randNum = Math.floor(Math.random() * 3);
	if((numberOfStages === 4 && stageComplete < 4) || (numberOfStages === 5 && stageComplete < 4)){
		if(randEnemyNum < enemyDistributionArray[0]){
			createEnemy = primtreeStats;
			return;
		}else if(randEnemyNum < enemyDistributionArray[1]){
			createEnemy = wobbledukStats;
			return;
		}else if(randEnemyNum < enemyDistributionArray[2]){
			createEnemy = primtreeDefenderStats;
			return;
		}else if(randEnemyNum < enemyDistributionArray[3]){
			createEnemy = stoneStriderStats;
			return;
		}else if(randEnemyNum < enemyDistributionArray[4]){
			createEnemy = steedStats;
			return;
		}else if(randEnemyNum < enemyDistributionArray[5]){
			createEnemy = rockFairyStats;
			return;
		}else if(randEnemyNum < enemyDistributionArray[6]){
			createEnemy = primtreeRoyalStats;
			return;
		}else{
			createEnemy = smallGolemArray[randNum];
		}
	}else if(stageComplete === 4){
		numberOfEnemies = 1;
		if(randEnemyNum < 250){
			createEnemy = kingWobbledukStats;
			return;
		}else{
			createEnemy = queenPrimtreeStats;
		}
	}
}

function levelEarthTempleDistribution(randEnemyNum){
	if(enemyArray.length === 0 || enemyArray.length === 2){
		if(lastDoorway === "Empty Door"){
			if(randEnemyNum < 100){
				createEnemy = emptyDoorStats;
			}else if(randEnemyNum >= 100 && randEnemyNum < 275){
				createEnemy = dirtDoorStats;
			}else if(randEnemyNum >= 275 && randEnemyNum < 450){
				createEnemy = oldDoorStats;
			}else if(randEnemyNum >=450 && randEnemyNum < 475){
				createEnemy = boulderDoorStats;
			}else{
				createEnemy = vineDoorStats;
			}
		}else if(lastDoorway === "Dirt Door" || lastDoorway === "Old Door"){
			if(randEnemyNum < 50){
				createEnemy = emptyDoorStats;
			}else if(randEnemyNum >= 50 && randEnemyNum < 250){
				createEnemy = boulderDoorStats;
			}else if(randEnemyNum >= 250 && randEnemyNum < 450){
				createEnemy = vineDoorStats;
			}else if(randEnemyNum >= 450 && randEnemyNum < 475){
				createEnemy = magicDoorStats;
			}else{
				createEnemy = runeDoorStats;
			}
		}else if(lastDoorway === "Boulder Door" || lastDoorway === "Iron Door" || lastDoorway === "Vine Door" || lastDoorway === "Water Door"){
			if(randEnemyNum < 10){
				createEnemy = emptyDoorStats;
			}else if(randEnemyNum >= 10 && randEnemyNum < 220){
				createEnemy = magicDoorStats;
			}else if(randEnemyNum >= 220 && randEnemyNum < 430){
				createEnemy = runeDoorStats;
			}else{
				createEnemy = earthMarkedDoorStats;
			}
		}else if(lastDoorway === "Magic Door" || lastDoorway === "Rune Door"){
			if(randEnemyNum < 20){
				createEnemy = oldDoorStats;
			}else if(randEnemyNum >= 20 && randEnemyNum < 40){
				createEnemy = dirtDoorStats;
			}else if(randEnemyNum >= 40 && randEnemyNum < 90){
				createEnemy = boulderDoorStats;
			}else if(randEnemyNum >= 90 && randEnemyNum < 140){
				createEnemy = vineDoorStats;
			}else if(randEnemyNum >= 140 && randEnemyNum < 240){
				createEnemy = magicDoorStats;
			}else if(randEnemyNum >= 240 && randEnemyNum < 340){
				createEnemy = runeDoorStats;
			}else{
				createEnemy = earthMarkedDoorStats;
			}
		}else if(lastDoorway === "Mysterious Door"){
			createEnemy = earthMarkedDoorStats;
		}else{}
	}else{
		if(lastDoorway === "Empty Door"){
			if(randEnemyNum < 125){
				createEnemy = wobbledukStats;
			}else if(randEnemyNum >= 125 && randEnemyNum < 250){
				createEnemy = primtreeStats;
			}else if(randEnemyNum >= 250 && randEnemyNum < 375){
				createEnemy = steedStats;
			}else{
				createEnemy = stoneStriderStats;
			}
		}else if(lastDoorway === "Dirt Door" || lastDoorway === "Old Door"){
			if(randEnemyNum < 250){
				createEnemy = earthStalactiteStats;
			}else if(randEnemyNum >= 250 && randEnemyNum < 450) {
				createEnemy = treasureChestStats;
			}else{
				createEnemy = earthGolemStats;
			}
		}else if(lastDoorway === "Boulder Door" || lastDoorway === "Iron Door" || lastDoorway === "Vine Door" || lastDoorway === "Water Door"){
			if(randEnemyNum < 100){
				createEnemy = earthStalactiteStats;
			}else if(randEnemyNum >= 100 && randEnemyNum < 200) {
				createEnemy = treasureChestStats;
			}else if(randEnemyNum >= 200 && randEnemyNum < 300) {
				createEnemy = earthGolemStats;
			}else if(randEnemyNum >= 300 && randEnemyNum < 450) {
				createEnemy = orbTraderStats;
			}else{
				createEnemy = prisonOrbStats;
			}
		}else if(lastDoorway === "Magic Door" || lastDoorway === "Rune Door"){
			if(randEnemyNum < 100){
				createEnemy = earthStalactiteStats;
			}else if(randEnemyNum >= 100 && randEnemyNum < 200) {
				createEnemy = treasureChestStats;
			}else if(randEnemyNum >= 200 && randEnemyNum < 300) {
				createEnemy = earthGolemStats;
			}else if(randEnemyNum >= 300 && randEnemyNum < 450) {
				createEnemy = orbTraderStats;
			}else{
				createEnemy = prisonOrbStats;
			}
		}else if(lastDoorway === "Mysterious Door" && secretArtifacts[0] === false){
			createEnemy = earthArtifactStats;
		}else{
			createEnemy = earthGolemStats;
		}
	}
}

function levelFireDistribution(randEnemyNum){
	var randNum = Math.floor(Math.random() * 3);
	if((numberOfStages === 4 && stageComplete < 4) || (numberOfStages === 5 && stageComplete < 4)){
		if(randEnemyNum < enemyDistributionArray[0]){
			createEnemy = emberAdderStats;
			return;
		}else if(randEnemyNum < enemyDistributionArray[1]){
			createEnemy = flameCrawlerStats;
			return;
		}else if(randEnemyNum < enemyDistributionArray[2]){
			createEnemy = kragmupStats;
			return;
		}else if(randEnemyNum < enemyDistributionArray[3]){
			createEnemy = tipperStats;
			return;
		}else if(randEnemyNum < enemyDistributionArray[4]){
			createEnemy = morpStats;
			return;
		}else if(randEnemyNum < enemyDistributionArray[5]){
			createEnemy = pheonixWyrmStats;
			return;
		}else if(randEnemyNum < enemyDistributionArray[6]){
			createEnemy = flameScrablerStats;
			return;
		}else{
			createEnemy = smallGolemArray[randNum];
		}
	}else if(stageComplete === 4){
		numberOfEnemies = 1;
		if(randEnemyNum < 250){
			createEnemy = broodmotherStats;
			return;
		}else{
			createEnemy = grandTipperStats;
		}
	}
}

function levelFireTempleDistribution(randEnemyNum){
	if(enemyArray.length === 0 || enemyArray.length === 2){
		if(lastDoorway === "Empty Door"){
			if(randEnemyNum < 100){
				createEnemy = emptyDoorStats;
			}else if(randEnemyNum >= 100 && randEnemyNum < 275){
				createEnemy = dirtDoorStats;
			}else if(randEnemyNum >= 275 && randEnemyNum < 450){
				createEnemy = oldDoorStats;
			}else if(randEnemyNum >=450 && randEnemyNum < 475){
				createEnemy = ironDoorStats;
			}else{
				createEnemy = fireDoorStats;
			}
		}else if(lastDoorway === "Dirt Door" || lastDoorway === "Old Door"){
			if(randEnemyNum < 50){
				createEnemy = emptyDoorStats;
			}else if(randEnemyNum >= 50 && randEnemyNum < 250){
				createEnemy = ironDoorStats;
			}else if(randEnemyNum >= 250 && randEnemyNum < 450){
				createEnemy = fireDoorStats;
			}else if(randEnemyNum >= 450 && randEnemyNum < 475){
				createEnemy = magicDoorStats;
			}else{
				createEnemy = runeDoorStats;
			}
		}else if(lastDoorway === "Fire Door" || lastDoorway === "Iron Door"){
			if(randEnemyNum < 10){
				createEnemy = emptyDoorStats;
			}else if(randEnemyNum >= 10 && randEnemyNum < 220){
				createEnemy = magicDoorStats;
			}else if(randEnemyNum >= 220 && randEnemyNum < 430){
				createEnemy = runeDoorStats;
			}else{
				createEnemy = fireMarkedDoorStats;
			}
		}else if(lastDoorway === "Magic Door" || lastDoorway === "Rune Door"){
			if(randEnemyNum < 20){
				createEnemy = oldDoorStats;
			}else if(randEnemyNum >= 20 && randEnemyNum < 40){
				createEnemy = dirtDoorStats;
			}else if(randEnemyNum >= 40 && randEnemyNum < 90){
				createEnemy = ironDoorStats;
			}else if(randEnemyNum >= 90 && randEnemyNum < 140){
				createEnemy = fireDoorStats;
			}else if(randEnemyNum >= 140 && randEnemyNum < 240){
				createEnemy = magicDoorStats;
			}else if(randEnemyNum >= 240 && randEnemyNum < 340){
				createEnemy = runeDoorStats;
			}else{
				createEnemy = fireMarkedDoorStats;
			}
		}else if(lastDoorway === "Mysterious Door"){
			createEnemy = fireMarkedDoorStats;
		}else{}
	}else{
		if(lastDoorway === "Empty Door"){
			if(randEnemyNum < 125){
				createEnemy = emberAdderStats;
			}else if(randEnemyNum >= 125 && randEnemyNum < 250){
				createEnemy = kragmupStats;
			}else if(randEnemyNum >= 250 && randEnemyNum < 375){
				createEnemy = morpStats;
			}else{
				createEnemy = flameCrawlerStats;
			}
		}else if(lastDoorway === "Dirt Door" || lastDoorway === "Old Door"){
			if(randEnemyNum < 250){
				createEnemy = fireStalactiteStats;
			}else if(randEnemyNum >= 250 && randEnemyNum < 450) {
				createEnemy = treasureChestStats;
			}else{
				createEnemy = fireGolemStats;
			}
		}else if(lastDoorway === "Iron Door" || lastDoorway === "Fire Door"){
			if(randEnemyNum < 100){
				createEnemy = fireStalactiteStats;
			}else if(randEnemyNum >= 100 && randEnemyNum < 200) {
				createEnemy = treasureChestStats;
			}else if(randEnemyNum >= 200 && randEnemyNum < 300) {
				createEnemy = fireGolemStats;
			}else if(randEnemyNum >= 300 && randEnemyNum < 450) {
				createEnemy = orbTraderStats;
			}else{
				createEnemy = prisonOrbStats;
			}
		}else if(lastDoorway === "Magic Door" || lastDoorway === "Rune Door"){
			if(randEnemyNum < 100){
				createEnemy = fireStalactiteStats;
			}else if(randEnemyNum >= 100 && randEnemyNum < 200) {
				createEnemy = treasureChestStats;
			}else if(randEnemyNum >= 200 && randEnemyNum < 300) {
				createEnemy = fireGolemStats;
			}else if(randEnemyNum >= 300 && randEnemyNum < 450) {
				createEnemy = orbTraderStats;
			}else{
				createEnemy = prisonOrbStats;
			}
		}else if(lastDoorway === "Mysterious Door" && secretArtifacts[1] === false){
			createEnemy = fireArtifactStats;
		}else{
			createEnemy = fireGolemStats;
		}
	}
}

function levelWaterDistribution(randEnemyNum){
	var randNum = Math.floor(Math.random() * 3);
	if((numberOfStages === 4 && stageComplete < 4) || (numberOfStages === 5 && stageComplete < 4)){
		if(randEnemyNum < enemyDistributionArray[0]){
			createEnemy = trenchThumpStats;
			return;
		}else if(randEnemyNum < enemyDistributionArray[1]){
			createEnemy = marshSlapperStats;
			return;
		}else if(randEnemyNum < enemyDistributionArray[2]){
			createEnemy = ghostSharkStats;
			return;
		}else if(randEnemyNum < enemyDistributionArray[3]){
			createEnemy = coralThumpStats;
			return;
		}else if(randEnemyNum < enemyDistributionArray[4]){
			createEnemy = caveThumpStats;
			return;
		}else if(randEnemyNum < enemyDistributionArray[5]){
			createEnemy = budleFairyStats;
			return;
		}else if(randEnemyNum < enemyDistributionArray[6]){
			createEnemy = albinoSlapperStats;
			return;
		}else{
			createEnemy = smallGolemArray[randNum];
		}
	}else if(stageComplete === 4){
		numberOfEnemies = 1;
		if(randEnemyNum < 250){
			createEnemy = superBudleFairyStats;
			return;
		}else{
			createEnemy = kingSlapperStats;
		}
	}
}

function levelWaterTempleDistribution(randEnemyNum){
	if(enemyArray.length === 0 || enemyArray.length === 2){
		if(lastDoorway === "Empty Door"){
			if(randEnemyNum < 100){
				createEnemy = emptyDoorStats;
			}else if(randEnemyNum >= 100 && randEnemyNum < 275){
				createEnemy = dirtDoorStats;
			}else if(randEnemyNum >= 275 && randEnemyNum < 450){
				createEnemy = oldDoorStats;
			}else if(randEnemyNum >=450 && randEnemyNum < 475){
				createEnemy = iceDoorStats;
			}else{
				createEnemy = waterDoorStats;
			}
		}else if(lastDoorway === "Dirt Door" || lastDoorway === "Old Door"){
			if(randEnemyNum < 50){
				createEnemy = emptyDoorStats;
			}else if(randEnemyNum >= 50 && randEnemyNum < 250){
				createEnemy = iceDoorStats;
			}else if(randEnemyNum >= 250 && randEnemyNum < 450){
				createEnemy = waterDoorStats;
			}else if(randEnemyNum >= 450 && randEnemyNum < 475){
				createEnemy = magicDoorStats;
			}else{
				createEnemy = runeDoorStats;
			}
		}else if(lastDoorway === "Water Door" || lastDoorway === "Ice Door"){
			if(randEnemyNum < 10){
				createEnemy = emptyDoorStats;
			}else if(randEnemyNum >= 10 && randEnemyNum < 220){
				createEnemy = magicDoorStats;
			}else if(randEnemyNum >= 220 && randEnemyNum < 430){
				createEnemy = runeDoorStats;
			}else{
				createEnemy = waterMarkedDoorStats;
			}
		}else if(lastDoorway === "Magic Door" || lastDoorway === "Rune Door"){
			if(randEnemyNum < 20){
				createEnemy = oldDoorStats;
			}else if(randEnemyNum >= 20 && randEnemyNum < 40){
				createEnemy = dirtDoorStats;
			}else if(randEnemyNum >= 40 && randEnemyNum < 90){
				createEnemy = iceDoorStats;
			}else if(randEnemyNum >= 90 && randEnemyNum < 140){
				createEnemy = waterDoorStats;
			}else if(randEnemyNum >= 140 && randEnemyNum < 240){
				createEnemy = magicDoorStats;
			}else if(randEnemyNum >= 240 && randEnemyNum < 340){
				createEnemy = runeDoorStats;
			}else{
				createEnemy = waterMarkedDoorStats;
			}
		}else if(lastDoorway === "Mysterious Door"){
			createEnemy = waterMarkedDoorStats;
		}else{}
	}else{
		if(lastDoorway === "Empty Door"){
			if(randEnemyNum < 125){
				createEnemy = caveThumpStats;
			}else if(randEnemyNum >= 125 && randEnemyNum < 250){
				createEnemy = marshSlapperStats;
			}else if(randEnemyNum >= 250 && randEnemyNum < 375){
				createEnemy = coralThumpStats;
			}else{
				createEnemy = ghostSharkStats;
			}
		}else if(lastDoorway === "Dirt Door" || lastDoorway === "Old Door"){
			if(randEnemyNum < 250){
				createEnemy = waterStalactiteStats;
			}else if(randEnemyNum >= 250 && randEnemyNum < 450) {
				createEnemy = treasureChestStats;
			}else{
				createEnemy = waterGolemStats;
			}
		}else if(lastDoorway === "Ice Door" || lastDoorway === "Water Door"){
			if(randEnemyNum < 100){
				createEnemy = waterStalactiteStats;
			}else if(randEnemyNum >= 100 && randEnemyNum < 200) {
				createEnemy = treasureChestStats;
			}else if(randEnemyNum >= 200 && randEnemyNum < 300) {
				createEnemy = waterGolemStats;
			}else if(randEnemyNum >= 300 && randEnemyNum < 450) {
				createEnemy = orbTraderStats;
			}else{
				createEnemy = prisonOrbStats;
			}
		}else if(lastDoorway === "Magic Door" || lastDoorway === "Rune Door"){
			if(randEnemyNum < 100){
				createEnemy = waterStalactiteStats;
			}else if(randEnemyNum >= 100 && randEnemyNum < 200) {
				createEnemy = treasureChestStats;
			}else if(randEnemyNum >= 200 && randEnemyNum < 300) {
				createEnemy = waterGolemStats;
			}else if(randEnemyNum >= 300 && randEnemyNum < 450) {
				createEnemy = orbTraderStats;
			}else{
				createEnemy = prisonOrbStats;
			}
		}else if(lastDoorway === "Mysterious Door" && secretArtifacts[2] === false){
			createEnemy = waterArtifactStats;
		}else{
			createEnemy = waterGolemStats;
		}
	}
}

function levelWindDistribution(randEnemyNum){
	var randNum = Math.floor(Math.random() * 3);
	if((numberOfStages === 4 && stageComplete < 4) || (numberOfStages === 5 && stageComplete < 4)){
		if(randEnemyNum < enemyDistributionArray[0]){
			createEnemy = maclawStats;
			return;
		}else if(randEnemyNum < enemyDistributionArray[1]){
			createEnemy = madnadoStats;
			return;
		}else if(randEnemyNum < enemyDistributionArray[2]){
			createEnemy = raaHowlerStats;
			return;
		}else if(randEnemyNum < enemyDistributionArray[3]){
			createEnemy = flooferStats;
			return;
		}else if(randEnemyNum < enemyDistributionArray[4]){
			createEnemy = windleFairyStats;
			return;
		}else if(randEnemyNum < enemyDistributionArray[5]){
			createEnemy = spookawStats;
			return;
		}else if(randEnemyNum < enemyDistributionArray[6]){
			createEnemy = windFlitterStats;
			return;
		}else{
			createEnemy = smallGolemArray[randNum];
		}
	}else if(stageComplete === 4){
		numberOfEnemies = 1;
		if(randEnemyNum < 250){
			createEnemy = empressMadnadoStats;
			return;
		}else{
			createEnemy = alphaSpookawStats;
		}
	}
}

function levelWindTempleDistribution(randEnemyNum){
	if(enemyArray.length === 0 || enemyArray.length === 2){
		if(lastDoorway === "Empty Door"){
			if(randEnemyNum < 100){
				createEnemy = emptyDoorStats;
			}else if(randEnemyNum >= 100 && randEnemyNum < 275){
				createEnemy = dirtDoorStats;
			}else if(randEnemyNum >= 275 && randEnemyNum < 450){
				createEnemy = oldDoorStats;
			}else if(randEnemyNum >=450 && randEnemyNum < 475){
				createEnemy = shockDoorStats;
			}else{
				createEnemy = tornadoDoorStats;
			}
		}else if(lastDoorway === "Dirt Door" || lastDoorway === "Old Door"){
			if(randEnemyNum < 50){
				createEnemy = emptyDoorStats;
			}else if(randEnemyNum >= 50 && randEnemyNum < 250){
				createEnemy = shockDoorStats;
			}else if(randEnemyNum >= 250 && randEnemyNum < 450){
				createEnemy = tornadoDoorStats;
			}else if(randEnemyNum >= 450 && randEnemyNum < 475){
				createEnemy = magicDoorStats;
			}else{
				createEnemy = runeDoorStats;
			}
		}else if(lastDoorway === "Tornado Door" || lastDoorway === "Shock Door"){
			if(randEnemyNum < 10){
				createEnemy = emptyDoorStats;
			}else if(randEnemyNum >= 10 && randEnemyNum < 220){
				createEnemy = magicDoorStats;
			}else if(randEnemyNum >= 220 && randEnemyNum < 430){
				createEnemy = runeDoorStats;
			}else{
				createEnemy = windMarkedDoorStats;
			}
		}else if(lastDoorway === "Magic Door" || lastDoorway === "Rune Door"){
			if(randEnemyNum < 20){
				createEnemy = oldDoorStats;
			}else if(randEnemyNum >= 20 && randEnemyNum < 40){
				createEnemy = dirtDoorStats;
			}else if(randEnemyNum >= 40 && randEnemyNum < 90){
				createEnemy = shockDoorStats;
			}else if(randEnemyNum >= 90 && randEnemyNum < 140){
				createEnemy = tornadoDoorStats;
			}else if(randEnemyNum >= 140 && randEnemyNum < 240){
				createEnemy = magicDoorStats;
			}else if(randEnemyNum >= 240 && randEnemyNum < 340){
				createEnemy = runeDoorStats;
			}else{
				createEnemy = windMarkedDoorStats;
			}
		}else if(lastDoorway === "Mysterious Door"){
			createEnemy = windMarkedDoorStats;
		}else{}
	}else{
		if(lastDoorway === "Empty Door"){
			if(randEnemyNum < 125){
				createEnemy = spookawStats;
			}else if(randEnemyNum >= 125 && randEnemyNum < 250){
				createEnemy = madnadoStats;
			}else if(randEnemyNum >= 250 && randEnemyNum < 375){
				createEnemy = maclawStats;
			}else{
				createEnemy = flooferStats;
			}
		}else if(lastDoorway === "Dirt Door" || lastDoorway === "Old Door"){
			if(randEnemyNum < 250){
				createEnemy = windStalactiteStats;
			}else if(randEnemyNum >= 250 && randEnemyNum < 450) {
				createEnemy = treasureChestStats;
			}else{
				createEnemy = windGolemStats;
			}
		}else if(lastDoorway === "Iron Door" || lastDoorway === "Wind Door"){
			if(randEnemyNum < 100){
				createEnemy = windStalactiteStats;
			}else if(randEnemyNum >= 100 && randEnemyNum < 200) {
				createEnemy = treasureChestStats;
			}else if(randEnemyNum >= 200 && randEnemyNum < 300) {
				createEnemy = windGolemStats;
			}else if(randEnemyNum >= 300 && randEnemyNum < 450) {
				createEnemy = orbTraderStats;
			}else{
				createEnemy = prisonOrbStats;
			}
		}else if(lastDoorway === "Magic Door" || lastDoorway === "Rune Door"){
			if(randEnemyNum < 100){
				createEnemy = windStalactiteStats;
			}else if(randEnemyNum >= 100 && randEnemyNum < 200) {
				createEnemy = treasureChestStats;
			}else if(randEnemyNum >= 200 && randEnemyNum < 300) {
				createEnemy = windGolemStats;
			}else if(randEnemyNum >= 300 && randEnemyNum < 450) {
				createEnemy = orbTraderStats;
			}else{
				createEnemy = prisonOrbStats;
			}
		}else if(lastDoorway === "Mysterious Door" && secretArtifacts[3] === false){
			createEnemy = windArtifactStats;
		}else{
			createEnemy = windGolemStats;
		}
	}
}

function levelDesertDistribution(randEnemyNum){
	var randNum = Math.floor(Math.random() * 3);
	if((numberOfStages === 4 && stageComplete < 4) || (numberOfStages === 5 && stageComplete < 4)){
		if(randEnemyNum < enemyDistributionArray[0]){
			createEnemy = sandSnippStats;
			return;
		}else if(randEnemyNum < enemyDistributionArray[1]){
			createEnemy = duneStabberStats;
			return;
		}else if(randEnemyNum < enemyDistributionArray[2]){
			createEnemy = desertMadnadoStats;
			return;
		}else if(randEnemyNum < enemyDistributionArray[3]){
			createEnemy = wanderingRelicStats;
			return;
		}else if(randEnemyNum < enemyDistributionArray[4]){
			createEnemy = grumpeelStats;
			return;
		}else if(randEnemyNum < enemyDistributionArray[5]){
			createEnemy = boneStalkerStats;
			return;
		}else if(randEnemyNum < enemyDistributionArray[6]){
			createEnemy = predatorSnippStats;
			return;
		}else{
			createEnemy = bigGolemArray[randNum];
		}
	}else if(stageComplete === 4){
		numberOfEnemies = 1;
		if(randEnemyNum < 250){
			createEnemy = championStalkerStats;
			return;
		}else{
			createEnemy = stabberConclaveStats;
		}
	}
}

function levelDesertTempleDistribution(randEnemyNum){
	if(randEnemyNum < enemyDistributionArray[0]){
			createEnemy = sandSnippStats;
			return;
		}else if(randEnemyNum < enemyDistributionArray[1]){
			createEnemy = duneStabberStats;
			return;
		}else if(randEnemyNum < enemyDistributionArray[2]){
			createEnemy = desertMadnadoStats;
			return;
		}else if(randEnemyNum < enemyDistributionArray[3]){
			createEnemy = wanderingRelicStats;
			return;
		}else if(randEnemyNum < enemyDistributionArray[4]){
			createEnemy = grumpeelStats;
			return;
		}else if(randEnemyNum < enemyDistributionArray[5]){
			createEnemy = boneStalkerStats;
			return;
		}else if(randEnemyNum < enemyDistributionArray[6]){
			createEnemy = predatorSnippStats;
			return;
		}else{
			createEnemy = bigGolemArray[0];
		}
}

function levelLavaDistribution(randEnemyNum){
	var randNum = Math.floor(Math.random() * 3);
	if((numberOfStages === 4 && stageComplete < 4) || (numberOfStages === 5 && stageComplete < 4)){
		if(randEnemyNum < enemyDistributionArray[0]){
			createEnemy = emberiteStats;
			return;
		}else if(randEnemyNum < enemyDistributionArray[1]){
			createEnemy = lavaWalkerStats;
			return;
		}else if(randEnemyNum < enemyDistributionArray[2]){
			createEnemy = trekapodStats;
			return;
		}else if(randEnemyNum < enemyDistributionArray[3]){
			createEnemy = walkingEruptionStats;
			return;
		}else if(randEnemyNum < enemyDistributionArray[4]){
			createEnemy = moltasaurusStats;
			return;
		}else if(randEnemyNum < enemyDistributionArray[5]){
			createEnemy = volcanoTramplerStats;
			return;
		}else if(randEnemyNum < enemyDistributionArray[6]){
			createEnemy = nutriteStats;
			return;
		}else{
			createEnemy = bigGolemArray[randNum];
		}
	}else if(stageComplete === 4){
		numberOfEnemies = 1;
		if(randEnemyNum < 250){
			createEnemy = lavaLordWalkerStats;
			return;
		}else{
			createEnemy = moltasaurusRexStats;
		}
	}
}

function levelLavaTempleDistribution(randEnemyNum){
	if(randEnemyNum < enemyDistributionArray[0]){
			createEnemy = emberiteStats;
			return;
		}else if(randEnemyNum < enemyDistributionArray[1]){
			createEnemy = lavaWalkerStats;
			return;
		}else if(randEnemyNum < enemyDistributionArray[2]){
			createEnemy = trekapodStats;
			return;
		}else if(randEnemyNum < enemyDistributionArray[3]){
			createEnemy = walkingEruptionStats;
			return;
		}else if(randEnemyNum < enemyDistributionArray[4]){
			createEnemy = moltasaurusStats;
			return;
		}else if(randEnemyNum < enemyDistributionArray[5]){
			createEnemy = volcanoTramplerStats;
			return;
		}else if(randEnemyNum < enemyDistributionArray[6]){
			createEnemy = nutriteStats;
			return;
		}else{
			createEnemy = bigGolemArray[1];
		}
}

function levelMudDistribution(randEnemyNum){
	var randNum = Math.floor(Math.random() * 3);
	if((numberOfStages === 4 && stageComplete < 4) || (numberOfStages === 5 && stageComplete < 4)){
		if(randEnemyNum < enemyDistributionArray[0]){
			createEnemy = lesserGalopeStats;
			return;
		}else if(randEnemyNum < enemyDistributionArray[1]){
			createEnemy = toxicRollerStats;
			return;
		}else if(randEnemyNum < enemyDistributionArray[2]){
			createEnemy = warthusStats;
			return;
		}else if(randEnemyNum < enemyDistributionArray[3]){
			createEnemy = sominusStats;
			return;
		}else if(randEnemyNum < enemyDistributionArray[4]){
			createEnemy = mucksterStats;
			return;
		}else if(randEnemyNum < enemyDistributionArray[5]){
			createEnemy = bogBoarStats;
			return;
		}else if(randEnemyNum < enemyDistributionArray[6]){
			createEnemy = greaterGalopeStats;
			return;
		}else{
			createEnemy = bigGolemArray[randNum];
		}
	}else if(stageComplete === 4){
		numberOfEnemies = 1;
		if(randEnemyNum < 250){
			createEnemy = archmageMucksterStats;
			return;
		}else{
			createEnemy = duchessWarthusStats;
		}
	}
}

function levelMudTempleDistribution(randEnemyNum){
	if(randEnemyNum < enemyDistributionArray[0]){
			createEnemy = lesserGalopeStats;
			return;
		}else if(randEnemyNum < enemyDistributionArray[1]){
			createEnemy = toxicRollerStats;
			return;
		}else if(randEnemyNum < enemyDistributionArray[2]){
			createEnemy = warthusStats;
			return;
		}else if(randEnemyNum < enemyDistributionArray[3]){
			createEnemy = sominusStats;
			return;
		}else if(randEnemyNum < enemyDistributionArray[4]){
			createEnemy = mucksterStats;
			return;
		}else if(randEnemyNum < enemyDistributionArray[5]){
			createEnemy = bogBoarStats;
			return;
		}else if(randEnemyNum < enemyDistributionArray[6]){
			createEnemy = greaterGalopeStats;
			return;
		}else{
			createEnemy = bigGolemArray[2];
		}
}

function levelStormDistribution(randEnemyNum){
	var randNum = Math.floor(Math.random() * 3);
	if((numberOfStages === 4 && stageComplete < 4) || (numberOfStages === 5 && stageComplete < 4)){
		if(randEnemyNum < enemyDistributionArray[0]){
			createEnemy = shockSharkStats;
			return;
		}else if(randEnemyNum < enemyDistributionArray[1]){
			createEnemy = staticGliderStats;
			return;
		}else if(randEnemyNum < enemyDistributionArray[2]){
			createEnemy = lightningBugStats;
			return;
		}else if(randEnemyNum < enemyDistributionArray[3]){
			createEnemy = scorchedTreeGhastStats;
			return;
		}else if(randEnemyNum < enemyDistributionArray[4]){
			createEnemy = shelterThumpStats;
			return;
		}else if(randEnemyNum < enemyDistributionArray[5]){
			createEnemy = rainWolfStats;
			return;
		}else if(randEnemyNum < enemyDistributionArray[6]){
			createEnemy = staticCatcherStats;
			return;
		}else{
			createEnemy = bigGolemArray[randNum];
		}
	}else if(stageComplete === 4){
		numberOfEnemies = 1;
		if(randEnemyNum < 250){
			createEnemy = enlightenedRainWolfStats;
			return;
		}else{
			createEnemy = greatShockSharkStats;
		}
	}
}

function levelStormTempleDistribution(randEnemyNum){
	if(randEnemyNum < enemyDistributionArray[0]){
			createEnemy = shockSharkStats;
			return;
		}else if(randEnemyNum < enemyDistributionArray[1]){
			createEnemy = staticGliderStats;
			return;
		}else if(randEnemyNum < enemyDistributionArray[2]){
			createEnemy = lightningBugStats;
			return;
		}else if(randEnemyNum < enemyDistributionArray[3]){
			createEnemy = scorchedTreeGhastStats;
			return;
		}else if(randEnemyNum < enemyDistributionArray[4]){
			createEnemy = shelterThumpStats;
			return;
		}else if(randEnemyNum < enemyDistributionArray[5]){
			createEnemy = rainWolfStats;
			return;
		}else if(randEnemyNum < enemyDistributionArray[6]){
			createEnemy = staticCatcherStats;
			return;
		}else{
			createEnemy = bigGolemArray[3];
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
		}else if(randEnemyNum < enemyDistributionArray[0]){
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

function EnemyCon(name, hp, attack, sabotage, pointValue, image, sabCard, element, supCard, effect){
	this.name = name;
	this.hp = hp;
	this.attack = attack;
	this.sabotage = sabotage;
	this.pointValue = pointValue;
	this.image = image;
	this.sabCard = sabCard;
	this.element = element;
	this.supCard = supCard;
	this.effect = effect;
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

const youberHero = new HeroCon("Youber", 40, 0, 3, 0, youber, true, false);
var shapeshift1 = new HeroCon("Wobbleduk", 30, 3, 3, 4, wobbleduk, true, false);
var shapeshift2 = new HeroCon("Budle Fairy", 20, 2, 5, 0, budleFairy, true, false);
var shapeshift3 = new HeroCon("Madnado", 25, 4, 3, 2, madnado, true, false);
var shapeshift4 = new HeroCon("Morp", 25, 5, 2, 2, morp, true, false);

const rustySword = new ItemCon("Rusty Sword", 1, "weapon", 10, true, true);
const battleSpear = new ItemCon("Battle Spear", 2, "weapon", 70, true, true);
const shardblade = new ItemCon("Shardblade", 3, "weapon", 200, true, true);
const leatherPads = new ItemCon("Leather Pads", 1, "armor", 10, true, true);
const parshendiCarapace = new ItemCon("Parshendi Carapace", 2, "armor", 80, true, true);
const shardplate = new ItemCon("Shardplate", 3, "armor", 150, true, true);

var currentEnemy = 4;
var playerHero = new HeroCon("Youber", 50, 0, 3, 0, youber, true, false);
var gameMode = "marathon";
var level = 0;
var stageComplete = 0;
var currentHeroPostion = 0;
var enemyNumber = 0;
var cardAbilityNum = 1;
var factionBoost = 0;
var itemArray = [rustySword, battleSpear, shardblade, leatherPads, parshendiCarapace, shardplate];
var enemyArray = [];
var cardArray = [neutral1, neutral2, neutral3, neutral4, neutral5, neutral6, neutral7, neutral8, neutral12, neutral17];
var cardArray2 = [];
var tutorialDeckSave;
var recruitArray = [];
var collectionArray = [];
var cardFrames = [];
var elementOrbs = [];
var multiplier = 1;
var allies = [];
var meterArray = [meter0, meter1, meter2, meter3, meter4, meter5, meter6, meter7, meter8, meter9, meter10, meter11, meter12];
var levelsBeaten = [];
var keyWordList = [{id: "finesse", keyword: "Finesse", description: "Change power by X to exactly kill an enemy"}, {id: "ward", keyword: "Ward", description: "Ward blocks enemy damage and sabotages."}, {id: "purge", keyword: "Purge", description: "Removes an enemy sabotage from your deck."}, {id: "weaken", keyword: "Weaken", description: "Reduces an enemies strength"}, {id: "exhausted", keyword: "Exhausted", description: "Enemies attack twice in a row"}, {id:"stun", keyword: "Stun", description: "Stunned enemies miss their next attack"}, {id: "poison", keyword: "Poison", description: "Damage delt at the end of the turn"}, {id: "confuse", keyword: "Confuse", description: "Confused enemies attack a random enemy"}, {id: "grow", keyword: "Grow", description: "The card gains power each time it is used"}, /*{id: "scheme", keyword: "Scheme", description: "Schemes are played to one of your support areas and then are charged up over time providing an effect once completed"},*/ {id: "heal", keyword: "Heal", description: "Restore health to your character"}, {id: "reclaim", keyword: "Reclaim", description: "Increase the power of all enemy sabotages in your deck"}, {id: "int", keyword: "Draw", description: "How many extra cards your draw your next turn."}, {id: "def", keyword: "Ongoing Ward", description: "The number of shields you have at the start of every turn."}, {id: "str", keyword: "Magic", description: "Added damage to each attack"}, {id: "rummage", keyword: "Rummage", description: "Switch a card with a random card from your deck."}, {id: "multiply", keyword: "Multiply", description: "Multiply your damage by X."}, {id: "decoy", keyword: "Decoy", description: "Avoid all sabotages this turn."}, {id: "energy", keyword: "Energy", description: "Gain energy to use for other purposes."}, {id: "next", keyword: "Next", description: "Add power to next attack."}, {id: "add", keyword: "Add", description: "Shuffle a number of new cards into your deck."}, {id: "remove", keyword: "Remove", description: "The card gets removed from your deck after you select it"}, {id: "extra", keyword: "Extra", description: "Attack again after this one."}, /*{id: "deplete", keyword: "Deplete", description: "Remove a sabotage from the selected enemy."},*/ {id: "factionBoost", keyword: "Damage Boost", description: "Gains power for each card of the same type played."}, /*{id: "spooky", keyword: "Spooky", description: "Increase the chances of getting a creature's card."}, {id: "transform", keyword: "Transform", description: "Turn an emeny sabotage in your deck into another card."},*/ {id: "all", keyword: "All", description: "Deal damage to all enemies."}, {id: "clutch", keyword: "Clutch", description: "Gains extra effects when your HP is 15 or lower."}, {id: "random", keyword: "Random", description: "One of two effects."}, {id: "stash", keyword: "Energy Stash", description: "Gains extra effects when your energy is 5 or more."}, {id: "treasure", keyword: "Treasure", description: "Add gems and/or cards to your rewards."}, {id: "capture", keyword: "Capture", description: "Increase the change of gaining targeted monster's card."}, {id: "hlBoost", keyword: "Heal Boost", description: "Heal 1 for each card of the same element you've played."}, 
{id: "wrdBoost", keyword: "Ward Boost", description: "Gain 1 ward for each card of the same element you've played."}, {id: "supBurning", keyword: "Burning", description: "Deals damage at the end of every turn."}, {id: "supGems", keyword: "Gain Gems", description: "Add gems to your rewards."}, {id: "supCards", keyword: "Gain Cards", description: "Add cards to your rewards."}, {id: "supBoost", keyword: "Boost", description: "Increases the power of that type."}];
var finesseAttack; 
var attackAll = false;
var levelEnemyNum = 2;
var randomAbility;
var wardBoost;
var healBoost;
var numberOfSaves = 0;
var updatedScores = [];
var loggedIn = false;
var username;
var userSaveArray = [];
var storyCounter = 0;
var currentStoryText;
var fireGem = fire;
var earthGem = earth;
var waterGem = water;
var windGem = wind;
var desertGem = desert;
var lavaGem = lava;
var mudGem = mud;
var stormGem = storm;
var startingLevel = null;
var patience = false;
var secrets = false;
var unlockedSecrets = [false, false, false, false, false, false, false, false];
var elementKeys = [false, false, false, false];
var elementScrolls = [false, false, false, false, false, false, false, false];
var secretArtifacts = [false, false, false, false, false, false, false, false];
var equippedArtifact;
var prisonOrbImg = [false, false, false, false];

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
			openingFade: false,
			bonusStage: false,
			heroSelect: null,
			gameScreen: false,
			infoScreen: false,
			characterSelectScreen: false,
			auxilaryScreen: false,
			endingScreen: false,
			collectionScreen: false,
			equipmentScreen: false,
			createScreen: false,
			miningGame: false,
			craftingScreen: false,
			levelSelectScreen: false,
			playerDeathScreen: false,
			highScoreScreen: false,
			firstLevelChoice: false,
			storyScreen: false,
			introScreen: true,
			attack: 1,
			heroShield: 2,
			equipment: null,
			score: 0,
			heroHp: 50,
			stormCounter: 5,
			enemyArray: [enemyArray[0], enemyArray[1], enemyArray[2]],
			sphereCount: 0,
			influence: 1,
			itemArray: itemArray,
			supCardRewards: [],
			supGemRewards: [],
			extraRewards: [],
			errorMessage: null,
			developers: [],
			developersEternal: [],
			bossStats: null,
			highScores: [],
			userSaveArray: [],
			displayUserSaves: false,
			saveBox: false,
			prizeChoice: null,
			obelisk: 0,
			magicBag: false,
			packCards: []
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
		this.createNewUser = this.createNewUser.bind(this);
		this.loadUserSaves = this.loadUserSaves.bind(this);
		this.setUpPlayerSave = this.setUpPlayerSave.bind(this);
		this.toggleInfoScreen = this.toggleInfoScreen.bind(this);
		this.gainSupCardReward = this.gainSupCardReward.bind(this);
		this.gainSupGemReward = this.gainSupGemReward.bind(this);
		this.clearSupRewards = this.clearSupRewards.bind(this);
		this.displayErrorMessage = this.displayErrorMessage.bind(this);
		this.removeErrorMessage = this.removeErrorMessage.bind(this);
		this.playerDeathScreen = this.playerDeathScreen.bind(this);
		this.highScoreScreen = this.highScoreScreen.bind(this);
		this.openSaveBox = this.openSaveBox.bind(this);
		this.logOutUser = this.logOutUser.bind(this);
		this.autoSave = this.autoSave.bind(this);
		this.showStoryScreen = this.showStoryScreen.bind(this);
		this.hideStoryScreen = this.hideStoryScreen.bind(this);
		this.prizeChoice = this.prizeChoice.bind(this);
		this.changeOpeningFade = this.changeOpeningFade.bind(this);
		this.activateBonusStage = this.activateBonusStage.bind(this);
		this.upgradeMagicBag = this.upgradeMagicBag.bind(this);
		this.gainExtraRewards = this.gainExtraRewards.bind(this);
		this.makePack = this.makePack.bind(this);
	}
	componentDidMount(){
		collectionArray = [];
		for(var i=0; i<9; i++){
			var cardTypeArray = ["neutral", "earth", "fire", "water", "wind", "desert", "lava", "mud", "storm"];
			for(var j=1; j<30; j++){
				if(cardTypeArray[i] === "neutral" && j > 20){

				}else{	
					var pushCard = eval(cardTypeArray[i] + j);
					collectionArray.push(pushCard);
				}
			}
		}
		collectionArray.push(spooky1);
		numberOfSaves = 0;
		updatedScores = [];
		var ref = Firebase.database().ref('Micah/');
		ref.on('value', function(snapshot) {
			updatedScores = [];
			numberOfSaves = 0;
			snapshot.forEach(function(user){
				var data =(user.val());
				updatedScores.push({name: data.name, score: data.score});
				numberOfSaves ++;
			});
		});
		this.setState({
			highScores: updatedScores
		});
	}
	createNewUser(){
		var newUser = document.getElementById("saveName").value;
		var newPassword = document.getElementById("password").value;
		if(newUser === "" || newPassword === ""){
			this.displayErrorMessage('Enter Name and Password');
		}else{
		 	Firebase.database().ref(`/${newUser}/password`).set(newPassword);
		 	this.displayErrorMessage('USER CREATED');
		 	username = newUser;
		 }
	}
	logOutUser(){
		username = "noUser";
		loggedIn = false;
		this.setState({
			displayUserSaves: false,
			saveBox: false
		})
	}
	loadUserSaves(){
		userSaveArray = [];
		var user = document.getElementById("saveName").value;
		var ref = Firebase.database().ref(`/${user}`);
		var password = document.getElementById("password").value;
		if(user === "" || password === ""){
			this.displayErrorMessage('Enter name and password');
		}else{
			var wrongPassword = false;
			ref.once('value')
				.then((snapshot) => {
					numberOfSaves = 0;
					if(snapshot.val().password === password || loggedIn === true){
						userSaveArray = [];
						snapshot.forEach((user) => {
							var data =(user.val());
							if(data.name === undefined){
							}else{
								userSaveArray.push({name: data.name, collectionArray: data.collectionArray, levelsBeaten: data.levels, score: data.score, elementOrbs: data.elementOrbs, hp: data.hp, elementScrolls: data.elementScrolls, elementKeys: data.elementKeys, unlockedSecrets: data.unlockedSecrets, secretArtifacts: data.secretArtifacts, prisonOrbImg: data.prisonOrbImg});
								this.setState({
									userSaveArray: userSaveArray,
									displayUserSaves: true,
									saveBox: false
								}, () => {
									console.log(this.state.userSaveArray);

								});
							}
						});
						loggedIn = true;
						username = user;
					}else{
						wrongPassword = true;
					}
			});
			/*if(wrongPassword === true){
				this.displayErrorMessage("Wrong Password");
			}else{
				this.setState({
					userSaveArray: userSaveArray,
					displayUserSaves: true,
					saveBox: false
				}, () => {
					console.log(this.state.userSaveArray);

				});
			}*/
		}
	}
	writeUserData(){
		//var userEternal = document.getElementById("saveFileName").value + "!" + numberOfSaves;
		var user = username;
		var fileName = document.getElementById("saveFileName").value;
		console.log(user);
		var levelArray;
		if(levelsBeaten.length === 0){
			levelArray = ["empty"];
		}else{
			levelArray = levelsBeaten;
		}
		if(user === ""){
			this.displayErrorMessage("enter a name");
		}else if(user === "super" || user === "super1" || user === "super2"){
			this.displayErrorMessage("Pick a different name");
		}else{
			var saveOrbs;
			if(elementOrbs.length === 0){
				saveOrbs = [neutral];
			}else{
				saveOrbs = elementOrbs;
			}
			var userSaveData = {name: fileName, collectionArray: collectionArray, score: this.state.score, levels: levelArray, elementOrbs: saveOrbs, hp: youberHero.hp, elementScrolls: elementScrolls, elementKeys: elementKeys, unlockedSecrets: unlockedSecrets, secretArtifacts: secretArtifacts, prisonOrbImg: prisonOrbImg};
			//var userEternalData = {collectionArray: collectionArray, score: this.state.score, levels: levelArray, name: fileName};
			this.setState({
				developers: userSaveData,
				//developersEternal: userEternalData

			}, () => {
				/*Firebase.database().ref(`/${userEternal}`).set(this.state.developersEternal);
			 	this.displayErrorMessage('DATA SAVED');
			 	this.setState({
			 		developers: []
			 	});*/
			 	Firebase.database().ref(`/${user}/${fileName}`).set(this.state.developers);
			 	//this.displayErrorMessage('DATA SAVED');
			 	this.setState({
			 		developers: []
			 	});
			});
		}
		setTimeout(() => {
			this.setState({
				userSaveArray: userSaveArray
			});
		}, 3000);
	}
	autoSave(){
		var user = username;
		var fileName = "Auto Save";
		var saveOrbs;
		if(elementOrbs.length === 0){
			saveOrbs = [neutral];
		}else{
			saveOrbs = elementOrbs;
		}
		var userSaveData = {name: fileName, collectionArray: collectionArray, score: this.state.score, levels: levelsBeaten, elementOrbs: saveOrbs, hp: youberHero.hp, elementScrolls: elementScrolls, elementKeys: elementKeys, unlockedSecrets: unlockedSecrets, secretArtifacts: secretArtifacts, prisonOrbImg: prisonOrbImg};
		this.setState({
			developers: userSaveData

		}, () => {
		 	Firebase.database().ref(`/${user}/${fileName}`).set(this.state.developers);
		 	//this.displayErrorMessage('DATA SAVED');
		 	this.setState({
		 		developers: []
		 	});
		});
		setTimeout(() => {
			this.setState({
				userSaveArray: userSaveArray
			});
		}, 3000);
	}
	getUserData(){
	  var user = document.getElementById("saveName").value;
	  let ref = Firebase.database().ref(`/${user}`);
	  ref.on('value', snapshot => {
	    const state = snapshot.val();
	    console.log(state);
	    this.setState({
	    	developers: state
	    }, () => {
	    	if(state === null){
	    		this.displayErrorMessage("No Save Data");
	    	}else{
	    		this.setUpPlayerSave();
	    		this.displayErrorMessage('DATA RETRIEVED');
	    	}
	    });
	  });
	}
	setUpPlayerSave(collection, lvlsBeat, score, elOrbs, hhp, elKeys, elScrolls, unSecrets, secArtifacts, priOrbImg){
		if(collectionArray === undefined){

		}else{
			for(var i=0; i<collection.length; i++){
				collectionArray[i].deckNum = collection[i].deckNum;
				collectionArray[i].ownedNum = collection[i].ownedNum;
				collectionArray[i].unlocked = collection[i].unlocked;
				if(collectionArray[i].deckNum > 0){
					cardArray.push(collectionArray[i]);
				}else{}
			}
		}
		elementKeys = elKeys;
		var magicBag = false;
		for(var i=0; i<elementKeys.length; i++){
			if(elementKeys[i] === true){
				magicBag = true;
			}else{}
		}
		elementScrolls = elScrolls;
		unlockedSecrets = unSecrets;
		secretArtifacts = secArtifacts;
		prisonOrbImg = priOrbImg;
		var bonusStage = false;
		if(lvlsBeat[0] === "empty"){
			levelsBeaten = [];
		}else{
			levelsBeaten = lvlsBeat;
			youberHero.hp = hhp;
		}
		if(lvlsBeat.length >= 2){
			bonusStage = true;
		}else{}
		if(elOrbs.includes(neutral)){
			elementOrbs = [];
		}else{
			elementOrbs = elOrbs;
		}
		this.setState({
			score: 0,
			displayUserSaves: false,
			heroHp: youberHero.hp,
			magicBag: magicBag,
			bonusStage: bonusStage
		}, () => {
			this.changeScore(score);
		});
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
	pauseAudio(){
		var audioEl;
		if(level === "fire"){
			audioEl = document.getElementsByClassName("intense")[0];
		}else if(level === "earth"){
			audioEl = document.getElementsByClassName("mistyWoods")[0];
		}else if(level === "water"){
			audioEl = document.getElementsByClassName("brightStyle")[0];
		}else if(level === "wind"){
			audioEl = document.getElementsByClassName("findingOut")[0];
		}else if(level === "desert"){
			audioEl = document.getElementsByClassName("majesticLad")[0];
		}else if(level === "lava"){
			audioEl = document.getElementsByClassName("fireDestruction")[0];
		}else if(level === "mud"){
			audioEl = document.getElementsByClassName("mysteryMud")[0];
		}else if(level === "storm"){
			audioEl = document.getElementsByClassName("distantChimes")[0];
		}else{
			audioEl = document.getElementsByClassName("findingOut")[0];
		}
		audioEl.pause();
	}
	playAudio(){
		var audioEl;
		if(level === "fire"){
			audioEl = document.getElementsByClassName("intense")[0];
		}else if(level === "earth"){
			audioEl = document.getElementsByClassName("mistyWoods")[0];
		}else if(level === "water"){
			audioEl = document.getElementsByClassName("brightStyle")[0];
		}else if(level === "wind"){
			audioEl = document.getElementsByClassName("findingOut")[0];
		}else if(level === "desert"){
			audioEl = document.getElementsByClassName("majesticLad")[0];
		}else if(level === "lava"){
			audioEl = document.getElementsByClassName("fireDestruction")[0];
		}else if(level === "mud"){
			audioEl = document.getElementsByClassName("mysteryMud")[0];
		}else if(level === "storm"){
			audioEl = document.getElementsByClassName("distantChimes")[0];
		}else{
			audioEl = document.getElementsByClassName("findingOut")[0];
		}
		audioEl.play();
	}
	changeOpeningFade(){
		this.setState({
			openingFade: false
		});
	}
	showStoryScreen(newStoryText){
		currentStoryText = newStoryText;
		this.setState({
			storyScreen: true
		});
	}
	hideStoryScreen(){
		this.setState({
			storyScreen: false
		});
	}
	activateBonusStage(){
		this.setState({
			bonusStage: true
		});
	}
	upgradeMagicBag(){
		this.setState({
			magicBag: true
		});
	}
	prizeChoice(choice){
		this.setState({
			prizeChoice: choice
		}, () => {
			var newStoryText;
			var storyTime = .5;
			for(var i=0; i<levelsBeaten.length; i++){
				if(levelsBeaten[i] === level){
					storyTime ++;
				}else{}
			}
			var textArray = eval(level + "Text");
			for(var i=0; i<textArray.length; i++){
				if(startingLevel === level){
					if(textArray[i].type === "start" && textArray[i].timing === storyTime){
						newStoryText = textArray[i].text;
					}else{}
				}else{
					if(textArray[i].type === "regular" && textArray[i].timing === storyTime){
						newStoryText = textArray[i].text;
					}else{}
				}
			}
			this.showStoryScreen(newStoryText);
			this.auxilaryScreen();
		});
	}
	gainSupCardReward(reward){
		var updateRewardArray = this.state.supCardRewards;
		updateRewardArray.push(reward);
		this.setState({
			supCardRewards: updateRewardArray
		});
	}
	gainSupGemReward(reward){
		var updateRewardArray = this.state.supGemRewards;
		updateRewardArray.push(reward);
		this.setState({
			supGemRewards: updateRewardArray
		});
	}
	gainExtraRewards(reward){
		var updateRewardArray = this.state.extraRewards;
		updateRewardArray.push(reward);
		this.setState({
			extraRewards: updateRewardArray
		});
	}
	clearSupRewards(){
		this.setState({
			supCardRewards: [],
			supGemRewards: []
		});
	}
	makePack(element, type){
		var packCards = [];
		var newPack = [];
		var packSize;
		var rareCards;
		for(var i=0; i<9; i++){
			var cardTypeArray = ["neutral", "earth", "fire", "water", "wind", "desert", "lava", "mud", "storm"];
			for(var j=1; j<20; j++){
				if(cardTypeArray[i] === "neutral" || cardTypeArray[i] === element){	
					var pushCard = eval(cardTypeArray[i] + j);
					packCards.push(pushCard);
				}
			}
		}
		if(type === "basic"){
			packSize = 5;
			rareCards = 1;
		}else if(type === "super"){
			packSize = 7;
			rareCards = 3;
		}else if(type === "ultimate"){
			packSize = 9;
			rareCards = 5
		}else{}
		for(var i=0; i<packSize; i++){
			shuffle(packCards);
			var randEleNum = Math.floor(Math.random() * 2) + 1;
			for(var j=0; j<packCards.length; j++){
				if(packCards[j].ownedNum + packCards[j].deckNum >= 4){
				}else{
					if(newPack.length < packSize - rareCards){
						if(packCards[j].rarity === 1){
							if(randEleNum > 1){
								newPack.push(packCards[j]);
								var a = collectionArray.findIndex(x => x.name === packCards[j].name);
								collectionArray[a].ownedNum ++;
								collectionArray[a].unlocked = true;
								break;
							}else{
								if(packCards[j].faction === "neutral"){
									newPack.push(packCards[j]);
									var a = collectionArray.findIndex(x => x.name === packCards[j].name);
									collectionArray[a].ownedNum ++;
									collectionArray[a].unlocked = true;
									break;
								}else{}
							}
						}else{}
					}else if(newPack.length < packSize && newPack.length >= packSize - rareCards){
						if(packCards[j].rarity === 2 || packCards[j].rarity === 3){
							if(randEleNum > 1){
								newPack.push(packCards[j]);
								var a = collectionArray.findIndex(x => x.name === packCards[j].name);
								collectionArray[a].ownedNum ++;
								collectionArray[a].unlocked = true;
								break;
							}else{
								if(packCards[j].faction === "neutral"){
									newPack.push(packCards[j]);
									var a = collectionArray.findIndex(x => x.name === packCards[j].name);
									collectionArray[a].ownedNum ++;
									collectionArray[a].unlocked = true;
									break;
								}else{}
							}
						}else{}
					}else{}
				}
			}
		}
		this.setState({
			packCards: newPack
		}, () => {
			console.log(this.state.packCards);
		});
	}
	changeHeroHp(newHp){
		var oldHp = this.state.heroHp;
		var healedHp = newHp - oldHp;
		this.state.heroHp = newHp;
		if(document.getElementsByClassName("heroDamageIndicator2")[0] === undefined){

		}else{
			if(healedHp > 0){
				document.getElementsByClassName("heroDamageIndicator2")[0].append("+" + healedHp);
				document.getElementsByClassName("heroDamageIndicator2")[0].style.color="green";
				document.getElementsByClassName("heroDamageIndicator2")[0].style.display="inline";
				setTimeout(() => {
					document.getElementsByClassName("heroDamageIndicator2")[0].innerHTML="";
					document.getElementsByClassName("heroDamageIndicator2")[0].style.display="none";
				}, 350);
			}else{}
		}
		this.setState({
			heroHp: newHp
		});
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
		playerHero = youberHero;
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
		patience = false;
		var currentStorm = this.state.stormCounter - 1;
		if(currentStorm === 0){
			var obeliskPoints = 100 - enemyArray[1].hp;
			this.setState({
				obelisk: obeliskPoints
			}, () => {
				if(this.state.obelisk >= 15){
					this.displayErrorMessage("Something came out...");
					setTimeout(() => {
						this.auxilaryScreen();
					}, 1500);
				}else{
					this.auxilaryScreen();
				}
			});
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
		if(selectedHero === "youberHero"){
			this.setState({
				heroSelect: youberHero,
				attack: youberHero.attack
			}, () => {
				this.changeHeroHp(youberHero.hp);
				player = youberHero;
			});
		}else{}
	}
	openSaveBox(){
		var saveState;
		var userSaveState;
		if(loggedIn === true){
			if(this.state.displayUserSaves === true){
				userSaveState = false;
			}else{
				userSaveState = true;
			}
		}else{
			if(this.state.saveBox === true){
				saveState = false;
			}else{
				saveState = true;
			}
		}
		this.setState({
			saveBox: saveState,
			displayUserSaves: userSaveState
		});
	}
	goToGameScreen(){
		if(level === 0){
			this.displayErrorMessage('Pick a Stage');
		}else{
			this.setState({
				gameScreen: true,
				characterSelectScreen: false,
				auxilaryScreen: false,
				levelSelectScreen: false,
				displayUserSaves: false
			});
			const audioEl = document.getElementsByClassName("clickSound")[0];
	    	audioEl.play();
		}

	}
	toggleInfoScreen(){
		if(this.state.infoScreen === true){
			this.setState({
				infoScreen: false
			});
		}else{
			this.setState({
				infoScreen: true
			});
		}
		const audioEl = document.getElementsByClassName("clickSound")[0];
	    audioEl.play();
	}
	playerDeathScreen(){
		this.setState({
			gameScreen: false,
			playerDeathScreen: true,
			characterSelectScreen: false
		});
	}
	goToLevelScreen(){
		if(levelsBeaten.length === 0 && startingLevel === null){
			this.setState({
				characterSelectScreen: false,
				auxilaryScreen: false,
				firstLevelChoice: true,
				displayUserSaves: false
			});
		}else{
			this.setState({
				characterSelectScreen: false,
				auxilaryScreen: false,
				levelSelectScreen: true,
				displayUserSaves: false,
				firstLevelChoice: false
			});
		}
		const audioEl = document.getElementsByClassName("clickSound")[0];
	    audioEl.play();
	}
	highScoreScreen(){
		this.setState({
			characterSelectScreen: false,
			highScoreScreen: true,
			highScores: updatedScores,
			displayUserSaves: false
		});
	}
	goToEquipmentScreen(){
		this.setState({
			equipmentScreen: true,
			characterSelectScreen: false,
			displayUserSaves: false
		});
		const audioEl = document.getElementsByClassName("clickSound")[0];
	    audioEl.play();
	}
	goToCraftingScreen(){
		this.setState({
			craftingScreen: true,
			collectionScreen: false
		});
		const audioEl = document.getElementsByClassName("clickSound")[0];
	    audioEl.play();
	}
	checkDeckContents(){
		var deckNumber = 0;
		for(var i=0; i<cardArray.length; i++){
			deckNumber = cardArray[i].deckNum + deckNumber;
		}
		if(deckNumber < 20){
			this.displayErrorMessage("Must have at least 20 cards in your deck.");
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
			levelSelectScreen: false,
			highScoreScreen: false,
			introScreen: false
		});
		const audioEl = document.getElementsByClassName("clickSound")[0];
		audioEl.volume = 1;
	    audioEl.play();
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
			collectionScreen: true,
			playerDeathScreen: false,
			displayUserSaves: false
		});
		const audioEl = document.getElementsByClassName("clickSound")[0];
	    audioEl.play();
	}
	createEnemies() {
		enemyArray = [];
		var levelTier = 1;
		var stageArray;
		for(var i=0; i<levelsBeaten.length; i++){
			if(levelsBeaten[i] === level){
				levelTier ++;
			}else{}
		}
		if(level.includes("Temple") === true){
			console.log("Welcome to Temple");
			numberOfStages = 100;
		}else{
			if(levelTier === 1){
				enemyDistributionArray = enemyDistributionArray2;
				stageArray = [1, 1, 1, 1];
				numberOfStages = 4;
			}else if(levelTier === 2){
				enemyDistributionArray = enemyDistributionArray3;
				stageArray = [2, 2, 2, 2];
				numberOfStages = 4;
			}else if(levelTier === 3){
				enemyDistributionArray = enemyDistributionArray3;
				stageArray = [2, 2, 3, 1];
				numberOfStages = 4;
			}else if(levelTier > 3){
				enemyDistributionArray = enemyDistributionArray3;
				stageArray = [2, 3, 3, 1];
				numberOfStages = 4;
			}else{}
		}
		if(level.includes("Temple") === true){
			numberOfEnemies = 3;
		}else{
			numberOfEnemies = stageArray[stageComplete];
		}
		for(var i=0; i < 3; i++){
			if(i >= numberOfEnemies){
				var newEnemy = new EnemyCon("", 0, 0, 0, 0, null, null, "box", null, [null, null, null]);
				enemyArray.push(newEnemy);
			}else if((stageComplete === (numberOfStages - 1) && i === 0) || numberOfEnemies === 1){
				numberOfEnemies = 2;
				var newEnemy = new EnemyCon("", 0, 0, 0, 0, null, null, "box", null, [null, null, null]);
				enemyArray.push(newEnemy);
			}else{
				var randEnemyNum = Math.floor(Math.random() * 500) + 1;
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
				}else if(level === "earthTemple"){
					levelEarthTempleDistribution(randEnemyNum);
				}else if(level === "fireTemple"){
					levelFireTempleDistribution(randEnemyNum);
				}else if(level === "waterTemple"){
					levelWaterTempleDistribution(randEnemyNum);
				}else if(level === "windTemple"){
					levelWindTempleDistribution(randEnemyNum);
				}else if(level === "desertTemple"){
					levelDesertTempleDistribution(randEnemyNum);
				}else if(level === "lavaTemple"){
					levelLavaTempleDistribution(randEnemyNum);
				}else if(level === "mudTemple"){
					levelMudTempleDistribution(randEnemyNum);
				}else if(level === "stormTemple"){
					levelStormTempleDistribution(randEnemyNum);
				}else{}
				var selected = createEnemy;
				var eName = selected.name;
				var eHp = selected.hp;
				var eAttack = selected.attack;
				var eSabotage = selected.sabotage;
				var ePointValue = selected.pointValue;
				var eImage = selected.image;
				var eSabCard = selected.sabCard;
				var eElement = selected.element;
				var eSupCard = selected.supCard;
				var eEffect = selected.effect;
				var newEnemy = new EnemyCon(eName, eHp, eAttack, eSabotage, ePointValue, eImage, eSabCard, eElement, eSupCard, eEffect);
				if(stageComplete === 3 && i === 1){
					this.setState({
						bossStats: eAttack,
						bossEffect: eEffect
					});
				}
				enemyArray.push(newEnemy);
			}
		}
		this.setState({
			enemyArray: enemyArray
		});
	}
	tutorialActions(){
		if(stageComplete === 0){
			tutorialDeckSave = cardArray;
			cardArray = [neutral1];
		}else if(stageComplete === 1){
			cardArray = [neutral1, neutral2];
			document.getElementById("tutorialMessage").innerHTML=" ";
			document.getElementById("tutorialMessageBox").style.display="inline";
			document.getElementById("tutorialMessage").append("When you defeat an enemy with exact damage, you gain an energy! You also have a chance at capturing their monster card, each enemy has one. Here, try a bigger rock");
		}else if(stageComplete === 2){
			cardArray.push(neutral3);
			document.getElementById("tutorialMessage").innerHTML=" ";
			document.getElementById("tutorialMessageBox").style.display="inline";
			document.getElementById("tutorialMessage").append("Uh oh, the enemy is trying to sabotage your magic bag. A ward spell will protect you.");
		}else if(stageComplete === 3){
			this.changeHeroHp(50);
			cardArray = [neutral1, neutral2, neutral3, neutral4, neutral5, neutral7];
			document.getElementById("tutorialMessage").innerHTML=" ";
			document.getElementById("tutorialMessageBox").style.display="inline";
			document.getElementById("tutorialMessage").append("Whoa, that was tough. If you have a ward up, enemies can't sabotage you, but if you run out the enemy gets to put one of their cards in your deck. Looks like you need some healing and I added some new cards to your deck. Uh oh... hear that? Something big is coming... ");
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
			patience = false;
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
		}else{}
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
			<audio className="mistyWoods">
	          <source src={mistyWoods}></source>
	        </audio>
	        <audio className="intense">
	          <source src={intense}></source>
	        </audio>
	        <audio className="findingOut">
	          <source src={findingOut}></source>
	        </audio>
	        <audio className="brightStyle">
	          <source src={brightStyle}></source>
	        </audio>
	        <audio className="fireDestruction">
	          <source src={fireDestruction}></source>
	        </audio>
	        <audio className="mysteryMud">
	          <source src={mysteryMud}></source>
	        </audio>
	        <audio className="distantChimes">
	          <source src={distantChimes}></source>
	        </audio>
	        <audio className="majesticLad">
	          <source src={majesticLad}></source>
	        </audio>
	        <audio className="clickSound">
	          <source src={click}></source>
	        </audio>
			<ErrorMessage errorMessage={this.state.errorMessage} />
			{this.state.introScreen ? <IntroScreen openSaveBox={this.openSaveBox} goToCharacterScreen={this.goToCharacterScreen} /> : null }
			{this.state.storyScreen ? <StoryScreen hideStoryScreen={this.hideStoryScreen} /> : null }
			{this.state.infoScreen ? <InfoScreen play={this.playAudio} pause={this.pauseAudio} error={this.displayErrorMessage} toggleInfoScreen={this.toggleInfoScreen} /> : null }
			{this.state.createScreen ? <CreateCharacter error={this.displayErrorMessage} createNewCharacter={this.createNewCharacter} /> : null }
			{this.state.characterSelectScreen ? <CharacterSelectScreen changeOpeningFade={this.changeOpeningFade} openingFade={this.state.openingFade} error={this.displayErrorMessage} autoSave={this.autoSave} logOutUser={this.logOutUser} openSaveBox={this.openSaveBox} saveBox={this.state.saveBox} setUpPlayerSave={this.setUpPlayerSave} displayUserSaves={this.state.displayUserSaves} userSaveArray={this.state.userSaveArray} highScoreScreen={this.highScoreScreen} loadUserSaves={this.loadUserSaves} createNewUser={this.createNewUser} getUserData={this.getUserData} writeUserData={this.writeUserData} goToLevelScreen={this.goToLevelScreen} score={this.state.score} createNewCharacter={this.createNewCharacter} influence={this.state.influence} shield={this.state.heroShield} spheres={this.state.sphereCount} attack={this.state.attack} playerHero={playerHero} switchEnemyArray={this.switchEnemyArray} goToEquipmentScreen={this.goToEquipmentScreen} heroHp={this.state.heroHp} showCollection={this.showCollection} changeHero={this.changeHero} goToGameScreen={this.goToGameScreen} changeInfluence={this.changeInfluence} /> : null }
			{this.state.firstLevelChoice ? <FirstLevelChoice goToLevelScreen={this.goToLevelScreen} /> : null}
			{this.state.levelSelectScreen ? <LevelSelectScreen error={this.displayErrorMessage} showStoryScreen={this.showStoryScreen} goToCharacterScreen={this.goToCharacterScreen} goToGameScreen={this.goToGameScreen} switchEnemyArray={this.switchEnemyArray} /> : null }
			{this.state.gameScreen ? <GameScreen bonusStage={this.state.bonusStage} magicBag={this.state.magicBag} prizeChoice={this.prizeChoice} gainExtraRewards={this.extraRewards} showStoryScreen={this.showStoryScreen} playerDeathScreen={this.playerDeathScreen} supGemRewards={this.state.supGemRewards} supCardRewards={this.state.supCardRewards} boss={this.state.bossStats} bossEffect={this.state.bossEffect} error={this.displayErrorMessage} clearSupRewards={this.clearSupRewards} gainSupGemReward={this.gainSupGemReward} gainSupCardReward={this.gainSupCardReward} toggleInfoScreen={this.toggleInfoScreen} characterScreen={this.goToCharacterScreen} changeHeroShield={this.changeHeroShield} changeHeroAttack={this.changeHeroAttack} changeInfluence={this.changeInfluence} influence={this.state.influence} int={this.state.heroSelect.intelligence} shield={this.state.heroShield} switchEnemyArray={this.switchEnemyArray} increaseStormCounter={this.increaseStormCounter} decreaseStormCounter={this.decreaseStormCounter} stormCounter={this.state.stormCounter} changeHeroHp={this.changeHeroHp} heroHp={this.state.heroHp} score={this.state.score} setSpheres={this.setSphereCount} changeScore={this.changeScore} aux={this.auxilaryScreen} heroSelect={this.state.heroSelect} attack={this.state.attack} equipment={this.state.equipment} enemyArray={this.state.enemyArray} goToCollection={this.showCollection} /> : null }
			{this.state.auxilaryScreen ? <AuxilaryScreen error={this.displayErrorMessage} extraRewards={this.state.extraRewards} activateBonusStage={this.activateBonusStage} obelisk={this.state.obelisk} prizeChoice={this.state.prizeChoice} changeHeroHp={this.changeHeroHp} heroHp={this.state.heroHp} clearSupRewards={this.clearSupRewards} supGemRewards={this.state.supGemRewards} supCardRewards={this.state.supCardRewards} goToEndingScreen={this.goToEndingScreen} changeInfluence={this.changeInfluence} influence={this.state.influence} setSphereCount={this.setSphereCount} score={this.state.score} resetStormCounter={this.resetStormCounter} showCollection={this.showCollection} goToCharacterScreen={this.goToCharacterScreen} /> : null }
			{this.state.collectionScreen ? <CollectionScreen error={this.displayErrorMessage} toggleInfoScreen={this.toggleInfoScreen} goToCraftingScreen={this.goToCraftingScreen} checkDeckContents={this.checkDeckContents} /> : null }
			{this.state.equipmentScreen ? <EquipmentScreen error={this.displayErrorMessage} changeScore={this.changeScore} score={this.state.score} itemArray={this.state.itemArray} heroShield={this.state.heroShield} spheres={this.state.sphereCount} setSphereCount={this.setSphereCount} playerHero={playerHero} chooseItemAction={this.chooseItemAction} attack={this.state.attack} goToCharacterScreen={this.goToCharacterScreen} /> : null }
			{this.state.craftingScreen ? <CraftingScreen error={this.displayErrorMessage} toggleInfoScreen={this.toggleInfoScreen} showCollection={this.showCollection} /> : null}
			{this.state.endingScreen ? <EndingScreen showStoryScreen={this.showStoryScreen} error={this.displayErrorMessage} writeUserData={this.writeUserData} score={this.state.score} /> : null}
			{this.state.playerDeathScreen ? <PlayerDeathScreen showStoryScreen={this.showStoryScreen} showCollection={this.showCollection} /> : null}
			{this.state.highScoreScreen ? <HighScoreScreen goToCharacterScreen={this.goToCharacterScreen} highScores={this.state.highScores} /> : null }
			{this.state.miningGame ? <MiningGame error={this.displayErrorMessage} /> : null }
			</div>
		)
	}
}

class IntroScreen extends React.Component {
	render(){
		return (
			<div className="row">
				<div className="col-xs-12">
					<div className="row">
						<div className="col-xs-offset-4 col-xs-3" id="beginButton" onClick={this.props.goToCharacterScreen}>Begin</div>
					</div>
				</div>
			</div>
		)
	}
}

class FirstLevelChoice extends React.Component {
	chooseFirstLevel(level){
		startingLevel = level;
		const x = document.getElementsByClassName("firstLevelChoice");
		for (var i=0; i < x.length; i ++ ){
			x[i].classList.remove("selectedFirstLevel");
		}
		document.getElementById(level + "First").classList.add("selectedFirstLevel");
		this.props.goToLevelScreen();
	}
	render(){
		return(
			<div className="row">
				<div className="col-xs-12">
					<div className="row" id="levelTitle">Choose Starting Level</div>
					<div className="row" id="firstChoiceRow">
						<img className="col-xs-3 firstLevelChoice" id="earthFirst" src={earth} alt="earth" onClick={() => {this.chooseFirstLevel("earth")}} />
						<img className="col-xs-3 firstLevelChoice" id="fireFirst" src={fire} alt="fire" onClick={() => {this.chooseFirstLevel("fire")}} />
						<img className="col-xs-3 firstLevelChoice" id="waterFirst" src={water} alt="water" onClick={() => {this.chooseFirstLevel("water")}} />
						<img className="col-xs-3 firstLevelChoice" id="windFirst" src={wind} alt="wind" onClick={() => {this.chooseFirstLevel("wind")}} />
					</div>
				</div>
			</div>
		)
	}
}

class HighScoreScreen extends React.Component {
	listHighScores(){
		var highScoreList = this.props.highScores;
		highScoreList.sort(function(a, b){
		    if(a.score < b.score) { return 1; }
		    if(a.score > b.score) { return -1; }
		    return 0;
		});
		const listHighScores = highScoreList.map((score, index) => {
			if(score.name.indexOf("!") >= 0){
				var newName = score.name.split("!");
				return <HighScore id={index} name={newName[0]} score={score.score} key={index} />
			}else{}
		});
		return (
			<div>{listHighScores}</div>
		)
	}
	render() {
		return (
			<div className="row">
				<div className="col-xs-12">
					<div className="row">
						<div className="col-xs-1 coolButton" onClick={this.props.goToCharacterScreen}>Back</div>
					</div>
					<div className="row">
						<div className="col-xs-offset-2 col-xs-8 highScore">
							<div className="row" id="highScoreTitle">High Scores</div>
							<div className="row">
								<div className="col-xs-offset-3 col-xs-2 scoreTitle">Rank</div>
								<div className="col-xs-2 scoreTitle">User</div>
								<div className="col-xs-2 scoreTitle">Score</div>
							</div>
							{this.listHighScores()}
						</div>
					</div>
				</div>
			</div>
		)
	}
}

class HighScore extends React.Component {
	render(){
		return (
			<div className="row">
				<div className="col-xs-offset-3 col-xs-2 scoreRank">{this.props.id + 1}</div>
				<div className="col-xs-2 scoreName">{this.props.name}</div>
				<div className="col-xs-2 scoreScore">{this.props.score}</div>
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
			if(keyWordList[i].id === word){
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
			<div className="row keyword" key={index} onClick={() => { this.keywordClick(keyword.id)}}>{keyword.keyword}</div>
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
						<div className="col-xs-10 gameInfoTitle">Game Info</div>
					</div>
					<div className="row">
						<div className="col-xs-2">
							{this.listKeywords()}
						</div>
						<div className="col-xs-4" id="descriptionArea">
							Welcome to the information section!
						</div>
						<div className="col-xs-4" id="audioArea">
							<div className="row" id="audioTitle">Audio Controls</div>
							<div className="row">
								<div className="col-xs-3 coolButton" onClick={this.props.play}>Play</div>
								<div className="col-xs-3 coolButton" onClick={this.props.pause}>Pause</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}
var backgroundScreenImage = "";
class LevelSelectScreen extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			levelsUnlocked: [false, false, false, false, false, false, false, false, false],
			backgroundScreenImage: null,
			levelCount: [0,0,0,0,0,0,0,0]
		}
		this.selectLevel = this.selectLevel.bind(this);
	}
	componentDidMount(){
		lastDoorway = "Empty Door";
		if(equippedArtifact === undefined){
			player.image = youber;
		}else{
			player.image = equippedArtifact;
		}
		cardArray2 = cardArray;
		cardArray = [];
		for(var i=0; i<cardArray2.length; i++){
			for(var j=0; j<cardArray2[i].deckNum; j++){
				var newCard = new CardCon(cardArray2[i].name, cardArray2[i].cost, cardArray2[i].power, cardArray2[i].text, cardArray2[i].alignment, cardArray2[i].rarity, cardArray2[i].ability1, cardArray2[i].ability2, cardArray2[i].unlocked, cardArray2[i].type, cardArray2[i].image, cardArray2[i].icon, cardArray2[i].faction, cardArray2[i].craft, cardArray2[i].ownedNum, cardArray2[i].deckNum);
				cardArray.push(newCard);
			}
		}
		if(levelsBeaten.length > 0){

		}else{
			this.props.showStoryScreen(storyText[0].text);
		}
		var levelCount = [0,0,0,0,0,0,0,0];
		for(var i=0; i<levelsBeaten.length; i++){
			if(levelsBeaten[i] === "earth"){
				levelCount[0] ++;
			}else if(levelsBeaten[i] === "fire"){
				levelCount[1] ++;
			}else if(levelsBeaten[i] === "water"){
				levelCount[2] ++;
			}else if(levelsBeaten[i] === "wind"){
				levelCount[3] ++;
			}else if(levelsBeaten[i] === "desert"){
				levelCount[4] ++;
			}else if(levelsBeaten[i] === "lava"){
				levelCount[5] ++;
			}else if(levelsBeaten[i] === "mud"){
				levelCount[6] ++;
			}else if(levelsBeaten[i] === "storm"){
				levelCount[7] ++;
			}else{}
		}
		var hiddenLevels = [{hidden: true, urlShow: "url(" + earthSection + ")", urlHidden: "url(" + earthSectionHidden + ")"},{hidden: true, urlShow: "url(" + fireSection + ")", urlHidden: "url(" + fireSectionHidden + ")"},{hidden: true, urlShow: "url(" + waterSection + ")", urlHidden: "url(" + waterSectionHidden + ")"},{hidden: true, urlShow: "url(" + windSection + ")", urlHidden: "url(" + windSectionHidden + ")"},{hidden: true, urlShow: "url(" + desertSection + ")", urlHidden: "url(" + desertSectionHidden + ")"},{hidden: true, urlShow: "url(" + lavaSection + ")", urlHidden: "url(" + lavaSectionHidden + ")"},{hidden: true, urlShow: "url(" + mudSection + ")", urlHidden: "url(" + mudSectionHidden + ")"},{hidden: true, urlShow: "url(" + stormSection + ")", urlHidden: "url(" + stormSectionHidden + ")"},{hidden: true, urlShow: "url(" + towerSection + ")", urlHidden: "url(" + towerSectionHidden + ")"}];
		var unlockLevels = this.state.levelsUnlocked;
		if(levelCount[0] >= 1 || startingLevel === "earth" || levelCount[1] >= 3 || levelCount[2] >= 3){
			unlockLevels[0] = true;
			hiddenLevels[0].hidden = false;
		}
		if(levelCount[1] >= 1 || startingLevel === "fire" || levelCount[0] >= 3 || levelCount[3] >= 3){
			unlockLevels[1] = true;
			hiddenLevels[1].hidden = false;
		}
		if(levelCount[2] >= 1 || startingLevel === "water" || levelCount[0] >= 3 || levelCount[3] >= 3){
			unlockLevels[2] = true;
			hiddenLevels[2].hidden = false;
		}
		if(levelCount[3] >= 1 || startingLevel === "wind" || levelCount[1] >= 3 || levelCount[2] >= 3){
			unlockLevels[3] = true;
			hiddenLevels[3].hidden = false;
		}
		if(elementKeys[0] === true && elementKeys[1] === true){
			unlockLevels[5] = true;
			hiddenLevels[5].hidden = false;
		}
		if(elementKeys[1] === true && elementKeys[3] === true){
			unlockLevels[4] = true;
			hiddenLevels[4].hidden = false;
		}
		if(elementKeys[2] === true && elementKeys[3] === true){
			unlockLevels[7] = true;
			hiddenLevels[7].hidden = false;
		}
		if(elementKeys[0] === true && elementKeys[2] === true){
			unlockLevels[6] = true;
			hiddenLevels[6].hidden = false;
		}
		if(levelCount[4] >= 3 || levelCount[5] >= 3 || levelCount[6] >= 3 || levelCount[7] >= 3){
			unlockLevels[8] = true;
			hiddenLevels[8].hidden = false;
		}
		backgroundScreenImage = "";
		for(var i=0; i<hiddenLevels.length; i++){
			if(hiddenLevels[i].hidden === false){
				
					backgroundScreenImage = backgroundScreenImage + hiddenLevels[i].urlShow + ",";
				
			}else{}
		}
		for(var i=0; i<hiddenLevels.length; i++){
			if(hiddenLevels[i].hidden === true){
					backgroundScreenImage = backgroundScreenImage + hiddenLevels[i].urlHidden + ",";
				
			}else{}
		}
		var slicedImage = backgroundScreenImage.slice(0, -2);
		document.getElementById("levelSelectScreen").style.backgroundImage = slicedImage;
		this.setState({
			levelsUnlocked: unlockLevels,
			backgroundScreenImage: backgroundScreenImage,
			levelCount: levelCount
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
					<div className="row levelChoiceRow">
						{this.state.levelsUnlocked[1] ? <div className="col-xs-3 levelChoice" id="fireLevel" onClick={() => {this.selectLevel("fire")}}>
							<div className="row">
								<div className="col-xs-2 levelCount">{this.state.levelCount[1] + 1}</div>
							</div>
						</div> : null }
						{unlockedSecrets[1] ? <div className="col-xs-3 levelTempleChoice" id="fireTempleLevel" onClick={() => {this.selectLevel("fireTemple")}}></div> : null }
						{this.state.levelsUnlocked[0] ? <div className="col-xs-3 levelChoice" id="earthLevel" onClick={() => {this.selectLevel("earth")}}>
							<div className="row">
								<div className="col-xs-2 levelCount">{this.state.levelCount[0] + 1}</div>
							</div>
						</div> : null }
						{unlockedSecrets[0] ? <div className="col-xs-3 levelTempleChoice" id="earthTempleLevel" onClick={() => {this.selectLevel("earthTemple")}}></div> : null }
					</div>
					<div className="row levelChoiceRow">
						{this.state.levelsUnlocked[3] ? <div className="col-xs-3 levelChoice" id="windLevel" onClick={() => {this.selectLevel("wind")}}>
							<div className="row">
								<div className="col-xs-2 levelCount">{this.state.levelCount[3] + 1}</div>
							</div>
						</div> : null }
						{unlockedSecrets[3] ? <div className="col-xs-3 levelTempleChoice" id="windTempleLevel" onClick={() => {this.selectLevel("windTemple")}}></div> : null }
						{this.state.levelsUnlocked[2] ? <div className="col-xs-3 levelChoice" id="waterLevel" onClick={() => {this.selectLevel("water")}}>
							<div className="row">
								<div className="col-xs-2 levelCount">{this.state.levelCount[2] + 1}</div>
							</div>
						</div> : null }
						{unlockedSecrets[2] ? <div className="col-xs-3 levelTempleChoice" id="waterTempleLevel" onClick={() => {this.selectLevel("waterTemple")}}></div> : null }
					</div>
					<div className="row levelChoiceRow">
						{this.state.levelsUnlocked[5] ? <div className="col-xs-3 levelChoice" id="lavaLevel" onClick={() => {this.selectLevel("lava")}}>
							<div className="row">
								<div className="col-xs-2 levelCount">{this.state.levelCount[5] + 1}</div>
							</div>
						</div> : null }
						{unlockedSecrets[5] ? <div className="col-xs-3 levelTempleChoice" id="lavaTempleLevel" onClick={() => {this.selectLevel("lavaTemple")}}></div> : null }
						{this.state.levelsUnlocked[4] ? <div className="col-xs-3 levelChoice" id="desertLevel" onClick={() => {this.selectLevel("desert")}}>
							<div className="row">
								<div className="col-xs-2 levelCount">{this.state.levelCount[4] + 1}</div>
							</div>
						</div> : null }
						{unlockedSecrets[4] ? <div className="col-xs-3 levelTempleChoice" id="desertTempleLevel" onClick={() => {this.selectLevel("desertTemple")}}></div> : null }
					</div><div className="row levelChoiceRow">
						{this.state.levelsUnlocked[7] ? <div className="col-xs-3 levelChoice" id="stormLevel" onClick={() => {this.selectLevel("storm")}}>
							<div className="row">
								<div className="col-xs-2 levelCount">{this.state.levelCount[7] + 1}</div>
							</div>
						</div> : null }
						{unlockedSecrets[7] ? <div className="col-xs-3 levelTempleChoice" id="stormTempleLevel" onClick={() => {this.selectLevel("stormTemple")}}></div> : null }
						{this.state.levelsUnlocked[6] ? <div className="col-xs-3 levelChoice" id="mudLevel" onClick={() => {this.selectLevel("mud")}}>
							<div className="row">
								<div className="col-xs-2 levelCount">{this.state.levelCount[6] + 1}</div>
							</div>
						</div> : null }
						{unlockedSecrets[6] ? <div className="col-xs-3 levelTempleChoice" id="mudTempleLevel" onClick={() => {this.selectLevel("mudTemple")}}></div> : null }
					</div>
					<div className="row levelChoiceRow">
						{this.state.levelsUnlocked[8] ? <div className="col-xs-offset-4 col-xs-4 levelChoice" id="towerLevel" onClick={() => {this.selectLevel("tower")}}></div> : null }
					</div>
					<div className="row" id="levelButtonRow">
						<div className="col-xs-offset-1 col-xs-2 levelButton" onClick={this.props.goToCharacterScreen}>Back</div>
						<div className="col-xs-offset-2 col-xs-2 levelButton" onClick={this.props.goToGameScreen}>Play</div>
						<div className="col-xs-offset-1 col-xs-2 levelChoice levelButton" id="tutorialLevel" onClick={() => {this.selectLevel("tutorial")}}>Tutorial</div>
					</div>
				</div>
			</div>
		)
	}
}

class StoryScreen extends React.Component {
	componentDidMount(){
		storyCounter = 0;
		this.scrollText();
	}
	scrollText(){
		var speed = 40;
		if(document.getElementById("storyText") === null){
			speed = 40;
			storyCounter = 0;
		}else{
			if (storyCounter < currentStoryText.length) {
				document.getElementById("storyText").innerHTML += currentStoryText.charAt(storyCounter);
			    if(currentStoryText.charAt(storyCounter) === "." || currentStoryText.charAt(storyCounter) === "?" || currentStoryText.charAt(storyCounter) === "!"){
			    	speed = 750;
			    }else{
			    	speed = 30;
			    }
			    storyCounter++;
			    setTimeout(() => {
						this.scrollText();
		    	}, speed);
			}else{
				document.getElementById("storyButton").innerHTML = "Continue";
			}
		}
	}
	render(){
		return (
			<div className="row" id="storyScreen">
				<div className="col-xs-12">
					<div className="row" id="storyText">
					</div>
					<div className="row" id="storyButtonRow">
						<div className="col-xs-offset-4 col-xs-3 coolButton" onClick={this.props.hideStoryScreen} id="storyButton">...</div>
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
	selectArtifact(costume, artifact){
		const x = document.getElementsByClassName("artifactImg");
		for (var i=0; i < x.length; i ++ ){
			x[i].classList.remove("selectedArtifact");
		}
		if(document.getElementById(artifact) === null ){
		}else{
			document.getElementById(artifact).classList.add("selectedArtifact");
			equippedArtifact = costume;
		}
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
			return <CollectionCard className={card.alignment} key={index} id={index} ability={card.ability1} icon={card.icon} faction={card.faction} name={card.name} type={card.type} cost={card.cost} power={card.power} text={card.text} rarity={card.rarity} />
		});
		return (
			<div>{listPackCards}</div>
		)
	}
	openPacks(type) {
		shuffle(collectionArray);
		var newCards = [];
		if(type === "neutral"){
			if(this.props.spheres < 2){

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
				<div className="col-xs-1 coolButton" onClick={this.props.goToCharacterScreen}>Back</div>
				<div className="col-xs-7">
					<div className="row treasureTitle">Keys</div>
					<div className="row">
						<div className="col-xs-3 keySlot" id="earthKey">{elementKeys[0] ? <img className="keyImg" src={earthKey} id="key1" alt="earthKey" /> : null }</div>
						<div className="col-xs-3 keySlot" id="fireKey">{elementKeys[1] ? <img className="keyImg" src={fireKey} id="key2" alt="fireKey" /> : null }</div>
						<div className="col-xs-3 keySlot" id="waterKey">{elementKeys[2] ? <img className="keyImg" src={waterKey} id="key3" alt="waterKey" /> : null }</div>
						<div className="col-xs-3 keySlot" id="windKey">{elementKeys[3] ? <img className="keyImg" src={windKey} id="key4" alt="windKey" /> : null }</div>
					</div>
					<div className="row treasureTitle">Artifacts</div>
					<div className="row">
						<div className="col-xs-3 artifactSlot" onClick={() => { this.selectArtifact(earthMasterYouber, "earthYouber") }}>{secretArtifacts[0] ? <img className="artifactImg" id="earthYouber" src={earthArtifact} alt="earthArtifact" /> : null }</div>
						<div className="col-xs-3 artifactSlot" onClick={() => { this.selectArtifact(fireMasterYouber, "fireYouber") }}>{secretArtifacts[1] ? <img className="artifactImg" id="fireYouber" src={fireArtifact} alt="fireArtifact" /> : null }</div>
						<div className="col-xs-3 artifactSlot" onClick={() => { this.selectArtifact(waterMasterYouber, "waterYouber") }}>{secretArtifacts[2] ? <img className="artifactImg" id="waterYouber" src={waterArtifact} alt="waterArtifact" /> : null }</div>
						<div className="col-xs-3 artifactSlot" onClick={() => { this.selectArtifact(windMasterYouber, "windYouber") }}>{secretArtifacts[3] ? <img className="artifactImg" id="windYouber" src={windArtifact} alt="windArtifact" /> : null }</div>
					</div>
					<div className="row artifactRow2">
						<div className="col-xs-3 artifactSlot" id="artifact5" onClick={() => { this.selectArtifact(desertMasterYouber, "desertYouber") }}>{secretArtifacts[4] ? <img className="artifactImg" id="desertYouber" src={sarcophagus} alt="desertArtifact" /> : null }</div>
						<div className="col-xs-3 artifactSlot" id="artifact6" onClick={() => { this.selectArtifact(lavaMasterYouber, "lavaYouber") }}>{secretArtifacts[5] ? <img className="artifactImg" id="lavaYouber" src={moltenPedestal} alt="lavaArtifact" /> : null }</div>
						<div className="col-xs-3 artifactSlot" id="artifact7" onClick={() => { this.selectArtifact(mudMasterYouber, "mudYouber") }}>{secretArtifacts[6] ? <img className="artifactImg" id="mudYouber" src={grandGoo} alt="mudArtifact" /> : null }</div>
						<div className="col-xs-3 artifactSlot" id="artifact8" onClick={() => { this.selectArtifact(stormMasterYouber, "stormYouber") }}>{secretArtifacts[7] ? <img className="artifactImg" id="stormYouber" src={elderStorm} alt="stormArtifact" /> : null }</div>
					</div>
				</div>
				{/*<div className="col-xs-3">
					<div className="row treasureTitle">Scrolls</div>
					<div className="row">
						<div className="col-xs-6 scrollSlot">{elementScrolls[0] ? <img className="scrollImg" src={earthScroll} id="scroll1" alt="earthScroll" /> : null }</div>
						<div className="col-xs-6 scrollSlot">{elementScrolls[1] ? <img className="scrollImg" src={fireScroll} id="scroll2" alt="fireScroll" /> : null }</div>
					</div>
					<div className="row">
						<div className="col-xs-6 scrollSlot">{elementScrolls[2] ? <img className="scrollImg" src={waterScroll} id="scroll3" alt="waterScroll" /> : null }</div>
						<div className="col-xs-6 scrollSlot">{elementScrolls[3] ? <img className="scrollImg" src={windScroll} id="scroll4" alt="windScroll" /> : null }</div>
					</div>
					<div className="row">
						<div className="col-xs-6 scrollSlot">{elementScrolls[4] ? <img className="scrollImg" src={desertScroll} id="scroll5" alt="desertScroll" /> : null }</div>
						<div className="col-xs-6 scrollSlot">{elementScrolls[5] ? <img className="scrollImg" src={lavaScroll} id="scroll6" alt="lavaScroll" /> : null }</div>
					</div>
					<div className="row">
						<div className="col-xs-6 scrollSlot">{elementScrolls[6] ? <img className="scrollImg" src={mudScroll} id="scroll7" alt="mudScroll" /> : null }</div>
						<div className="col-xs-6 scrollSlot">{elementScrolls[7] ? <img className="scrollImg" src={stormScroll} id="scroll8" alt="stormScroll" /> : null }</div>
					</div>
				</div>*/}
			</div>
		)
	}
}

class CharacterSelectScreen extends React.Component {
	componentDidMount(){
		collectionArray = [];
		for(var i=0; i<9; i++){
			var cardTypeArray = ["neutral", "earth", "fire", "water", "wind", "desert", "lava", "mud", "storm"];
			for(var j=1; j<30; j++){
				if(cardTypeArray[i] === "neutral" && j > 20){

				}else{	
					var pushCard = eval(cardTypeArray[i] + j);
					collectionArray.push(pushCard);
				}
			}
		}
		collectionArray.push(spooky1);
		console.log(this.props.displayUserSaves);
		stageComplete = 0;
		//this.props.switchEnemyArray();
		this.props.createNewCharacter();
		this.props.changeInfluence(0);
		if(levelsBeaten.length >= 3){
			levelEnemyNum = 3;
		}else{
			levelEnemyNum = 2;
		}
		this.props.autoSave();
	    if(this.props.openingFade === true){
	    	var audioEl = document.getElementsByClassName("mainTitles")[0];
			audioEl.volume = .8;
		    audioEl.play();
	    	this.props.changeOpeningFade();
	    	document.getElementById("mainTitle").classList.add("beginFade");
	    	document.getElementById("mainTitle").style.opacity = "1";
		    setTimeout(() => {
		    	var x = document.getElementsByClassName("fadeElements");
		    	for(var i=0; i < x.length; i++){
		    		x[i].classList.add("beginFade");
		    		x[i].style.opacity = "1";
		    	}
			}, 6000);
		}else{
			document.getElementById("mainTitle").style.opacity = "1";
			var x = document.getElementsByClassName("fadeElements");
	    	for(var i=0; i < x.length; i++){
	    		x[i].style.opacity = "1";
	    	}
		}
	}
	render() {
		return (
			<div className="row titleDesigns">
				<audio className="mainTitles">
		          <source src={mainTitles}></source>
		        </audio>
				<div className="col-xs-12">
					<div className="row fadeElements">
						<div className="col-xs-offset-8 col-xs-2 mainScore">Score: {this.props.score}</div>
						{/*<div className="col-xs-1" id="trophyButton" onClick={this.props.highScoreScreen}></div>*/}
						<div className="col-xs-1" id="saveButton" onClick={this.props.openSaveBox}></div>
					</div>
					{ this.props.saveBox ? <SaveBox loadUserSaves={this.props.loadUserSaves} createNewUser={this.props.createNewUser} writeUserData={this.props.writeUserData} getUserData={this.props.getUserData} /> : null }
					{ this.props.displayUserSaves ? <UserSavesBox logOutUser={this.props.logOutUser} setUpPlayerSave={this.props.setUpPlayerSave} writeUserData={this.props.writeUserData} userSaveArray={this.props.userSaveArray} getUserData={this.props.getUserData} /> : null }
					<div className="row chooseTitle">
						<img src={mainTitle} alt="mainTitle" id="mainTitle" />
					</div>
					<div className="row">
						<div className="col-xs-offset-5 col-xs-4">
							<div className="row">
								{/*<div className="col-xs-5 mainScore scoreRow">Coins: {this.props.spheres}</div>*/}
							</div>
						</div>
					</div>
					<div className="row fadeElements">
						<div className="col-xs-offset-1 col-xs-3">
							<button className="campButton" onClick={this.props.goToLevelScreen}>Adventure</button>
						</div>
						<div className="col-xs-3">
							<button className="campButton" onClick={this.props.showCollection}>Deck</button>
						</div>
						<div className="col-xs-3">
							<button className="campButton" onClick={this.props.goToEquipmentScreen}>Treasure</button>
						</div>
					</div>
					<div className="row fadeElements" id="patchNotes"><a target="_blank" href="https://github.com/MicahIsley/blastaar/blob/old-state/README.md">2/7 Patch Notes</a>
					</div>
				</div>
			</div>
		)
	}
}

class SaveBox extends React.Component {
	render() {
		return (
			<div className="row">
				<div className="col-xs-3" id="saveBox">
					<div className="row">
						<div className="col-xs-4">Name</div>
						<input className="col-xs-8" type="text" id="saveName"></input>
					</div>
					<div className="row">
						<div className="col-xs-4">Password</div>
						<input className="col-xs-8" type="text" id="password"></input>
					</div>
					<div className="row">
						<div className="col-xs-6">
							<button className="coolButton" onClick={this.props.createNewUser}>New</button>
						</div>
						<div className="col-xs-6">
							<button className="coolButton" onClick={this.props.loadUserSaves}>Log In</button>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

class UserSavesBox extends React.Component {
	listUserSaves(){
		var userSaves = this.props.userSaveArray;
		console.log(userSaves);
		const listUserSaves = userSaves.map((save, index) =>
			<UserSave key={index} id={index} name={save.name} setUpPlayerSave={this.props.setUpPlayerSave} collectionArray={save.collectionArray} levelsBeaten={save.levelsBeaten} score={save.score} hp={save.hp} elementOrbs={save.elementOrbs} elementKeys={save.elementKeys} elementScrolls={save.elementScrolls} unlockedSecrets={save.unlockedSecrets} secretArtifacts={save.secretArtifacts} prisonOrbImg={save.prisonOrbImg} />
		);
		return (
			<div className="col-xs-12">{listUserSaves}</div>
		)
	}
	render() {
		return (
			<div className="row">
				<div className="col-xs-3" id="userSavesBox">
					<div className="row">
						<div className="col-xs-6">
							{this.listUserSaves()}
						</div>
						<div className="col-xs-6">
							<button className="coolButton" onClick={this.props.logOutUser}>Logout</button>
						</div>
					</div>
					<div className="row">
						<div className="col-xs-4">Save Name</div>
						<input className="col-xs-8" type="text" id="saveFileName"></input>
					</div>
					<div className="row">
						<button className="coolButton" onClick={this.props.writeUserData}>Save</button>
					</div>
				</div>
			</div>
		)
	}

}

class UserSave extends React.Component {
	render(){
		return (
			<div className="row">
				<div className="col-xs-12 userSave" onClick={() => { this.props.setUpPlayerSave(this.props.collectionArray, this.props.levelsBeaten, this.props.score, this.props.elementOrbs, this.props.hp, this.props.elementKeys, this.props.elementScrolls, this.props.unlockedSecrets, this.props.secretArtifacts, this.props.prisonOrbImg)}}>{this.props.name}</div>
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
			spookLevel: 0,
			enemyDamageMod: 0,
			bossCleanse: 5,
			typeCount: [0,0,0,0,0,0,0,0,0],
			sabotageNum: 0,
			extraCards: 0,
			status: [empty, empty, empty],
			noHeal: false,
			noWard: false,
			noAbility: false,
			showRewards: false,
			enemyHeal: 0,
			templeHealth: 10,
			orbTraderScreen: false

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
		this.bossCleanse = this.bossCleanse.bind(this);
		this.checkBossEffect = this.checkBossEffect.bind(this);
		this.updateTypeCount = this.updateTypeCount.bind(this);
		this.updateSabotageNum = this.updateSabotageNum.bind(this);
		this.rewardsClick = this.rewardsClick.bind(this);
		this.checkSabCard = this.checkSabCard.bind(this);
		this.showOrbTraderScreen = this.showOrbTraderScreen.bind(this);
	}
	componentDidMount() {
		var audioEl;
		var newStoryText;
		var storyTime = 0;
		for(var i=0; i<levelsBeaten.length; i++){
			if(levelsBeaten[i] === level){
				storyTime ++;
			}
		}
		var newStoryText;
		var textArray;
		if(level.includes("Temple")){
			newStoryText = eval(level + "Text")[0].text;
			document.getElementById("gameScreenBackground").style.backgroundImage = "url(" + templeBackground + ")";
		}else{
			textArray = eval(level + "Text");
			for(var i=0; i<textArray.length; i++){
				if(startingLevel === level){
					if(textArray[i].type === "start" && textArray[i].timing === storyTime){
						newStoryText = textArray[i].text;
					}else{}
				}else{
					if(textArray[i].type === "regular" && textArray[i].timing === storyTime){
						newStoryText = textArray[i].text;
					}else{}
				}
			}
		}
		this.props.showStoryScreen(newStoryText);
		if(level === "fire"){
			audioEl = document.getElementsByClassName("intense")[0];
			document.getElementById("gameScreenBackground").style.backgroundImage = "url(" + fireBackground + ")";
			if(unlockedSecrets[1] === true || levelsBeaten.length < 3){
			}else{
				secrets = true;
			}
		}else if(level === "earth"){
			audioEl = document.getElementsByClassName("mistyWoods")[0];
			document.getElementById("gameScreenBackground").style.backgroundImage = "url(" + grassBackground + ")";
			if(unlockedSecrets[0] === true || levelsBeaten.length < 3){
			}else{
				secrets = true;
			}
		}else if(level === "water"){
			audioEl = document.getElementsByClassName("brightStyle")[0];
			document.getElementById("gameScreenBackground").style.backgroundImage = "url(" + waterBackground + ")";
			if(unlockedSecrets[2] === true || levelsBeaten.length < 3){
			}else{
				secrets = true;
			}
		}else if(level === "wind"){
			audioEl = document.getElementsByClassName("findingOut")[0];
			document.getElementById("gameScreenBackground").style.backgroundImage = "url(" + windBackground + ")";
			if(unlockedSecrets[3] === true || levelsBeaten.length < 3){
			}else{
				secrets = true;
			}
		}else if(level === "lava"){
			audioEl = document.getElementsByClassName("fireDestruction")[0];
			document.getElementById("gameScreenBackground").style.backgroundImage = "url(" + lavaBackground + ")";
			if(unlockedSecrets[5] === true){
			}else{
				secrets = true;
			}
		}else if(level === "storm"){
			audioEl = document.getElementsByClassName("distantChimes")[0];
			document.getElementById("gameScreenBackground").style.backgroundImage = "url(" + stormBackground + ")";
			if(unlockedSecrets[7] === true){
			}else{
				secrets = true;
			}
		}else if(level === "mud"){
			audioEl = document.getElementsByClassName("mysteryMud")[0];
			document.getElementById("gameScreenBackground").style.backgroundImage = "url(" + mudBackground + ")";
			if(unlockedSecrets[6] === true){
			}else{
				secrets = true;
			}
		}else if(level === "desert"){
			audioEl = document.getElementsByClassName("majesticLad")[0];
			document.getElementById("gameScreenBackground").style.backgroundImage = "url(" + desertBackground + ")";
			if(unlockedSecrets[4] === true){
			}else{
				secrets = true;
			}
		}else if(level === "tower"){
			audioEl = document.getElementsByClassName("findingOut")[0];
			document.getElementById("gameScreenBackground").style.backgroundImage = "url(" + towerBackground + ")";
		}else if(level === "tutorial"){
			audioEl = document.getElementsByClassName("findingOut")[0];
			document.getElementById("tutorialMessageBox").style.display = "inline";
		}else{
			audioEl = document.getElementsByClassName("findingOut")[0];
		}
		audioEl.loop = true;
		audioEl.volume = .4;
	    audioEl.play();
		var enemySabs = [];
		var nullHp1 = null;
		var nullHp2 = null;
		if(enemyArray.length === 1){
			enemySabs = [enemyArray[0].sabotage, null, null];
		}else if(enemyArray.length === 2){
			enemySabs = [enemyArray[0].sabotage, enemyArray[1].sabotage, null];
		}else{
			enemySabs = [enemyArray[0].sabotage, enemyArray[1].sabotage, enemyArray[2].sabotage]
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
			enemyHpArray: [enemyArray[0].hp, nullHp1, nullHp2],
			templeHealth: 10
		});
	}
	componentWillUnmount(){
		var audioEl;
		if(level === "fire"){
			audioEl = document.getElementsByClassName("intense")[0];
		}else if(level === "earth"){
			audioEl = document.getElementsByClassName("mistyWoods")[0];
		}else if(level === "water"){
			audioEl = document.getElementsByClassName("brightStyle")[0];
		}else if(level === "wind"){
			audioEl = document.getElementsByClassName("findingOut")[0];
		}else if(level === "desert"){
			audioEl = document.getElementsByClassName("majesticLad")[0];
		}else if(level === "lava"){
			audioEl = document.getElementsByClassName("fireDestruction")[0];
		}else if(level === "mud"){
			audioEl = document.getElementsByClassName("mysteryMud")[0];
		}else if(level === "storm"){
			audioEl = document.getElementsByClassName("distantChimes")[0];
		}else{
			audioEl = document.getElementsByClassName("findingOut")[0];
		}
		audioEl.pause();
		audioEl.currentTime = 0;
	}
	handleTutorialClick() {
		document.getElementById("tutorialMessageBox").style.display="none";
	}
	showOrbTraderScreen() {
		var toggleScreen;
		if(this.state.orbTraderScreen === false){
			toggleScreen = true;
		}else{
			toggleScreen = false;
		}
		this.setState({
			orbTraderScreen: toggleScreen
		});
	}
	checkPrisonOrbImg(){
		var imgName = "prisonOrb";
		if(prisonOrbImg[0] === true){
			imgName = imgName + "E";
		}else{}
		if(prisonOrbImg[1] === true){
			imgName = imgName + "F";
		}else{}
		if(prisonOrbImg[2] === true){
			imgName = imgName + "W";
		}else{}
		if(prisonOrbImg[3] === true){
			imgName = imgName + "I";
		}else{}
		if(prisonOrbImg[0] === false && prisonOrbImg[1] === false && prisonOrbImg[2] === false && prisonOrbImg[3] === false){
			imgName = imgName + "Blank"
		}else{}
		var actualImg = eval(imgName + "2");
		document.getElementById("1image").classList.add("prisonOrbImg");
		document.getElementById("1image").style.backgroundImage = "url('" + actualImg + "')";
	}
	updateEnemySab() {
		var enemySabs = [];
		if(enemyArray.length === 1){
			enemySabs = [enemyArray[0].sabotage, null, null];
		}else if(enemyArray.length === 2){
			enemySabs = [enemyArray[0].sabotage, enemyArray[1].sabotage, null];
		}else{
			enemySabs = [enemyArray[0].sabotage, enemyArray[1].sabotage, enemyArray[2].sabotage];
		}
		this.setState({
			enemySab: enemySabs
		});
	}
	bossCleanse() {
		this.setState({
			bossCleanse: this.state.bossCleanse - 1
		}, () => {
			if(this.state.bossCleanse === 0){
				var effectNum = 0;
				if(this.props.bossEffect[0] === exhaustedSym){
					this.setState({
						exhausted: true
					});
				}else if(this.props.bossEffect[0] === slash){
					effectNum = this.props.bossEffect[1];
				}else{}
				enemyArray[1].attack = this.props.boss + effectNum;
				this.setState({
					bossCleanse: 5
				});
			}
		})
	}
	updateTypeCount(element){
		var newTypeCount = this.state.typeCount;
		if(element === "neutral"){
			newTypeCount[0] ++; 
		}else if(element === "earth"){
			newTypeCount[1] ++;
		}else if(element === "fire"){
			newTypeCount[2] ++;
		}else if(element === "water"){
			newTypeCount[3] ++;
		}else if(element === "wind"){
			newTypeCount[4] ++;
		}else if(element === "desert"){
			newTypeCount[2] ++;
			newTypeCount[4] ++;
			newTypeCount[5] ++;
		}else if(element === "lava"){
			newTypeCount[1] ++;
			newTypeCount[2] ++;
			newTypeCount[6] ++;
		}else if(element === "mud"){
			newTypeCount[1] ++;
			newTypeCount[3] ++;
			newTypeCount[7] ++;
		}else if(element === "storm"){
			newTypeCount[3] ++;
			newTypeCount[4] ++;
			newTypeCount[8] ++;
		}
		this.setState({
			typeCount: newTypeCount
		});
	}
	updateSabotageNum(){
		var sabotages = this.state.cards;
		var sabotageNumber = 0;
		/*var noHeal = false;
		var noWard = false;
		var noAbility = false;
		var enemyHeal = 0;
		var exhausted = false;*/
		for(var i=0; i<sabotages.length; i++){
			if(sabotages[i].alignment === "enemy"){
				sabotageNumber = sabotageNumber + sabotages[i].power;
			}else{}
		}
		if(sabotageNumber > 0){

		}else{
			this.setState({
				sabotageNum: sabotageNumber,
			});
		}
	}
	checkSabCard(card){
		var sabotages = this.state.cards;
		var noHeal = false;
		var noWard = false;
		var noAbility = false;
		var enemyHeal = 0;
		var exhausted = false;
		for(var i=0; i<sabotages.length; i++){
			if(sabotages[i].alignment === "enemy"){
				if(sabotages[i].ability1 === "blockH" || sabotages[i].ability2 === "blockH"){
					noHeal = true;
				}else if(sabotages[i].ability1 === "blockW" || sabotages[i].ability2 === "blockW"){
					noWard = true;
				}else if(sabotages[i].ability1 === "blockA" || sabotages[i].ability2 === "blockA"){
					noAbility = true;
				}else if(sabotages[i].ability1.indexOf("siphon") >= 0){
					var enemyHlNum = parseInt(sabotages[i].ability1.split(" ")[1]);
					enemyHeal = enemyHeal + enemyHlNum;
				}else if(sabotages[i].ability1 === "enemyExhst"){
					if(this.state.exhausted === "immune"){
						exhausted = "immune";
					}else{
						exhausted = true;
					}
				}else{}
			}else{}
		}
		this.setState({
			noHeal: noHeal,
			noWard: noWard,
			noAbility: noAbility,
			enemyHeal: enemyHeal,
			exhausted: exhausted
		},() => {
			this.checkSupportAbility(card);
		});
	}
	chooseCard(card) {
		patience = true;
		this.setState({
			enemiesAttacking: false
		});
		if(typeof card.ability2 === "number"){
			this.setState({
				extraCards: 0
			});
		}else{
			if(card.ability1.indexOf("rummage") >=0 || card.ability2.indexOf("rummage") >=0 || this.state.research === true){

			}else{
				this.setState({
					extraCards: 0
				});
			}
		}
		multiplier = 1;
		if(this.state.research === true){
			this.chooseResearch(card);
		}else if(card.type === "support" || card.type === "character"){
			this.recruitCharacter(card);
		}else if(this.state.scheming === true){
			const x = document.getElementsByClassName("hero");
			for (var i=0; i < x.length; i ++ ){
				x[i].classList.remove("influenceGlow");
			}
			this.scheme(card);
		}else{
			if(card.cost > this.props.influence && card.type === "stormlight"){
				this.props.error("Not enough energy!");
			}else{
				this.setState({
					cardDisplay: false,
					recruit: false,
					supportAction: true
				});
				if(card.type === "stormlight"){
					this.props.changeInfluence(this.props.influence - card.cost);
				}else{}
				factionBoost = 0;
				if(card.ability1.indexOf("rummage") >=0 || card.ability2.indexOf("rummage") >=0){
					this.checkSupportAbility(card);
				}else{
					this.checkSabCard(card);
				}
			}
		}
	}
	scheme(card) {
		var activeSlot = this.state.activeSlot;
		if(card.alignment === "enemy"){
		}else{
			if(activeSlot.ability1.indexOf(card.faction) >= 0 || (activeSlot.ability1.indexOf("desert") >=0 && (card.faction === "fire" || card.faction === "wind")) || (activeSlot.ability1.indexOf("lava") >=0 && (card.faction === "fire" || card.faction === "earth")) || (activeSlot.ability1.indexOf("mud") >=0 && (card.faction === "water" || card.faction === "earth")) || (activeSlot.ability1.indexOf("storm") >=0 && (card.faction === "water" || card.faction === "wind")) || activeSlot.ability1.indexOf("neutral") >=0){
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
	}
	chooseResearch(card) {
		cardArray.push(cardArray.splice(cardArray.indexOf(card), 1)[0]);
		var numberDrawn = this.state.playerInt + this.state.extraCards;
			var selectedCards = cardArray.slice(0, numberDrawn);
			this.setState({
				cards: []
			}, () =>{
				this.setState({
				cards: selectedCards,
				researchNum: this.state.researchNum - 1
				}, () => {
					if(this.state.researchNum === 0){
						this.updateSabotageNum();
						this.setState({
							research: false,
							cardAbility: false,
							extraCards: 0
						}, () => {
							document.getElementById("cardBox").classList.remove("rummageGlow");
						});
					}else{}
				});
			});
	}
	toggleRecruitState(){
		if(this.state.cardDisplay === true){
			if(this.state.recruit === true){
				this.setState({
					recruit: false
				});
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
					cards: removeRecruit,
					cardDisplay: false
				});
				const x = document.getElementsByClassName("characterImage2");
				for (var i=0; i < x.length; i ++ ){
					x[i].classList.remove("targetedEnemy");
				}
				setTimeout(() => {
					this.enemyAttackAction(0);
	    		}, 500);
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
					if(supArray[i].ability1.indexOf("supBoost") >= 0){
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
						if(growElement === card.faction){
							for(var i=0; i<cardArray.length; i++){
								if(cardArray[i].name === card.name && cardArray[i].power === card.power){
									//cardArray[i].power = cardArray[i].power + growNum;
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
							}else{}
						}
					}else if(supArray[i].ability1.indexOf("supAbilityBoost") >=0){
						var splitAbility = supArray[i].ability1.split(" ");
						var ability = splitAbility[1];
						var boostNum = parseInt(splitAbility[2]);
						if(card.ability1.indexOf(ability) >=0 || card.ability2.indexOf(ability) >=0){
							var boostObject = {type: ability, num: boostNum};
							boostArray.push(boostObject);
						}else{}
					}else if(supArray[i].ability1.indexOf("match") >= 0){
						var boostType = supArray[i].ability1.split("/")[1];
						var boostAbility = supArray[i].ability1.split("/")[2];
						var boostObject = {type: boostType, num: boostAbility};
						boostArray.push(boostObject);
					}else if(supArray[i].ability1.indexOf("supMultiply") >= 0){
						var multiplyNum = parseInt(supArray[i].ability1.split(/[ ,]+/)[1]);
						multiplier = multiplier + multiplyNum;
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
		var cardElement = card.faction;
		var supportMod = 0;
		var boostArray = this.state.boostArray;
		var supportAbility = false;
		for(var i=0; i<boostArray.length; i++){
			if(card.faction === boostArray[i].type || card.ability1.indexOf(boostArray[i].type) >=0 || card.ability2.indexOf(boostArray[i].type) >=0){
				if(typeof boostArray[i].num === "number"){
					supportMod = supportMod + boostArray[i].num;
				}else{
					supportAbility = boostArray[i].num;
				}
			}else{}
		}
		var cardPower = card.power;
		var newAttack = (this.props.attack + cardPower + this.state.nextSpellBonus + supportMod + factionBoost + this.state.sabotageNum) * multiplier;
		if(cardAbilityNum === 1 && card.ability1.indexOf("scheme") < 0){
			var rummaging = false;
			if(typeof card.ability2 === "number"){

			}else{
				if(card.ability1.indexOf("rummage") >=0 || card.ability2.indexOf("rummage") >=0){
					rummaging = true;
				}else{
					rummaging = false;
				}
			}
			if(rummaging === true && this.state.cardAbility === true){
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
			if(card.ability1 === "random"){
				checkAbility = randomAbility;
			}else if(card.ability1 === "wrdBoost"){
				checkAbility = wardBoost;
			}else{
				checkAbility = card.ability2;
			}
		}else if(cardAbilityNum === 3){
			checkAbility = supportAbility;
		}
		if(card.ability1.indexOf("scheme") >=0){
			this.playerAttack(newAttack, cardElement);
		}else if(typeof checkAbility === "number" || this.state.noAbility === true){
			this.playerAttack(newAttack, cardElement);
			this.updateTypeCount(card.faction);
			cardAbilityNum = 1;
		}else{
			if(checkAbility.indexOf("ward") >= 0){
				if(this.state.noWard === false){
				 	var thenum = parseInt(checkAbility.match(/\d+/)[0]);
				 	var boostedShield = this.state.playerShield + thenum
				 	this.setState({
				 		playerShield: boostedShield
				 	});
				 }else{}
			}else if(checkAbility.indexOf("grow") >=0){
				var splitAbility = checkAbility.split(" ");
				var growNum = parseInt(splitAbility[1]);
				var growNum2 = parseInt(splitAbility[2]);
				if(card.power < growNum2){
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
					}else{}
				}
			}else if(checkAbility.indexOf("multiply") >=0) {
				var multiplyNum = parseInt(checkAbility.match(/\d+/)[0]);
				multiplier = multiplier + multiplyNum;
			}else if(checkAbility.indexOf("stun") >=0) {
				document.getElementById(currentEnemy).classList.add("stunned");
				var statusArray = this.state.status;
				statusArray[currentEnemy] = stunned;
				this.setState({
					status: statusArray
				});
			}else if(checkAbility.indexOf("speed") >=0) {
				var speedNum = parseInt(checkAbility.match(/\d+/)[0]);
				this.props.increaseStormCounter(speedNum);
			}else if(checkAbility.indexOf("rummage") >=0) {
				var researchNum = parseInt(checkAbility.match(/\d+/)[0]);
				if(this.state.cardAbility === true){
					this.setState({
						research: true,
						cardDisplay: true,
						researchNum: researchNum
					}, () => {
						document.getElementById("cardBox").classList.add("rummageGlow");
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
				if(this.state.noHeal === false){
					var healNum = parseInt(checkAbility.match(/\d+/)[0]);
					var newHp = this.props.heroHp + healNum;
					this.props.changeHeroHp(newHp);
				}else{}
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
				this.setState({
					extraCards: intNum
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
				enemyArray[currentEnemy].sabotage --;
				var currentSabArray = [];
				for(i=0; i < enemyArray.length; i++){
					currentSabArray.push(enemyArray[i].sabotage);
				}
				this.setState({
					enemySab: currentSabArray
				});
			}else if(checkAbility.indexOf("weaken") >=0){
				var weakenNum = parseInt(checkAbility.match(/\d+/)[0]);
				if(enemyArray[currentEnemy].attack - weakenNum <= 0){
					enemyArray[currentEnemy].attack = 1;
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
				}else{}
			}else if(checkAbility.indexOf("confuse") >=0){
				document.getElementById(currentEnemy).classList.add("confused");
				var statusArray = this.state.status;
				statusArray[currentEnemy] = confused;
				this.setState({
					status: statusArray
				});
			}else if(checkAbility.indexOf("all") >=0){
				attackAll = true;
			}else if(checkAbility.indexOf("poison") >=0){
				var poisonNum = parseInt(checkAbility.match(/\d+/)[0]);
				var updateEndDmg = this.state.endOfTurnDmg;
				updateEndDmg[currentEnemy] = updateEndDmg[currentEnemy] + poisonNum;
				var statusArray = this.state.status;
				statusArray[currentEnemy] = poisoned;
				this.setState({
					endOfTurnDmg: updateEndDmg,
					status: statusArray
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
					}else{}
				}
			}else if(checkAbility.indexOf("spooky") >=0){
				var spookyNum = parseInt(checkAbility.split(" ")[1]);
				var newSpooky = spookyNum + this.state.spookLevel;
				this.setState({
					spookLevel: newSpooky
				});
			}else if(checkAbility.indexOf("finesse") >=0){
				var finesseNum = parseInt(checkAbility.split(" ")[1]);
				if(enemyArray[currentEnemy].hp <= (newAttack + finesseNum) && enemyArray[currentEnemy].hp >= (newAttack - finesseNum)){
					finesseAttack = enemyArray[currentEnemy].hp;
				}else{
					finesseAttack = newAttack;
				}
			}else if(checkAbility.indexOf("factionBoost") >=0){
				var factionArray = ["neutral", "earth", "fire", "water", "wind", "desert", "lava", "mud", "storm"];
				for(var i=0; i< factionArray.length; i++){
					if(card.faction === factionArray[i]){
						factionBoost = this.state.typeCount[i];
					}else{}
				}
			}else if(checkAbility.indexOf("wrdBoost") >=0){
				var factionArray = ["neutral", "earth", "fire", "water", "wind", "desert", "lava", "mud", "storm"];
				for(var i=0; i< factionArray.length; i++){
					if(card.faction === factionArray[i]){
						wardBoost = "ward " + this.state.typeCount[i];
					}else{}
				}
			}else if(checkAbility.indexOf("hlBoost") >=0){
				var factionArray = ["neutral", "earth", "fire", "water", "wind", "desert", "lava", "mud", "storm"];
				for(var i=0; i< factionArray.length; i++){
					if(card.faction === factionArray[i]){
						healBoost = "heal " + this.state.typeCount[i];
					}else{}
				}
			}else if(checkAbility.indexOf("stash") >=0){
				if(this.props.influence >= 5){

				}else{
					cardAbilityNum = 2;
				}
			}else if(checkAbility.indexOf("clutch") >=0){
				if(this.props.heroHp <= 15){

				}else{
					cardAbilityNum = 2;
				}
			}else if(checkAbility.indexOf("random") >=0){
				var randOptions = card.ability2.split("/");
				var randNum = Math.round(Math.random());
				randomAbility = randOptions[randNum];
			}else if(checkAbility.indexOf("damage") >=0){
				var damageNum = parseInt(checkAbility.split(" ")[1]);
				newAttack = newAttack + damageNum;
			}else if(checkAbility.indexOf("treasure") >=0){
				var gemNum = parseInt(checkAbility.split(" ")[1]);
				var cardNum = parseInt(checkAbility.split(" ")[2]);
				for(var i=0; i<gemNum; i++){
					this.props.gainSupGemReward(card.icon);
				}
				var typeCards = [];
				for(var i=1; i<21; i++){
					var typeCard = eval(card.faction + i);
					typeCards.push(typeCard);
				}
				for(var i=0; i<cardNum; i++){
					var newCard;
					for(var j=0; j<typeCards.length; j++){
						shuffle(typeCards);
						var randNum = Math.floor(Math.random() * 101);
						if(randNum < 50){
							if(typeCards[j].rarity === 1){
								if((typeCards[j].ownedNum + typeCards[j].deckNum) >=4){
								}else{
									newCard = typeCards[j];
									break;
								}
							}else{}
						}else if(randNum > 50 && randNum < 85){
							if(typeCards[j].rarity === 2){
								if((typeCards[j].ownedNum + typeCards[j].deckNum) >=4){
								}else{
									newCard = typeCards[j];
									break;
								}
							}else{}
						}else{
							if(typeCards[j].rarity === 3){
								if((typeCards[j].ownedNum + typeCards[j].deckNum) >=4){
								}else{
									newCard = typeCards[j];
									break;
								}
							}else{}
						}
					}
					this.props.gainSupCardReward(newCard);
				}
			}else if(checkAbility.indexOf("capture") >=0){
				var captureNum = parseInt(checkAbility.split(" ")[1]);
				var randNum = Math.floor(Math.random() * 10);
				captureNum = captureNum + randNum;
				var threshold = 10;
				if(parseInt(checkAbility.split(" ")[2]) === enemyArray[currentEnemy].element){
					captureNum + 5;
				}else{}
				if(enemyArray[currentEnemy].pointValue >= 1000){
					threshold = 50;
				}else{}
				if(captureNum >= threshold){
					if(enemyArray[currentEnemy].element === "doorway"){
					}else{
						this.props.gainSupCardReward(enemyArray[currentEnemy].supCard);
						this.props.error("Gained Monster Prize!");
					}
				}else{
					this.props.error("Failed");
				}

			}else if(checkAbility.indexOf("advantage") >=0){
				var advantageType = checkAbility.split(" ")[1];
				if(advantageType === enemyArray[currentEnemy].element){

				}else{
					cardAbilityNum = 2;
				}
			}else{}
			if(cardAbilityNum === 2 && supportAbility === false){
				if(card.ability1.indexOf("finesse") >=0 || card.ability2.indexOf("finesse") >=0 ){
					if(attackAll === true){
						console.log("attackAll");
						this.playerAttackAll(finesseAttack, false, cardElement);
					}else{
						this.playerAttack(finesseAttack, cardElement);
					}
				}else{
					if(attackAll === true){
						console.log("attackAll2");
						this.playerAttackAll(newAttack, false, cardElement);
					}else{
						this.playerAttack(newAttack, cardElement);
					}
				}
				this.updateTypeCount(card.faction);
				cardAbilityNum = 1;
			}else if(cardAbilityNum === 3){
				if(card.ability1.indexOf("finesse") >=0 || card.ability2.indexOf("finesse") >=0 ){
					this.playerAttack(finesseAttack);
				}else{
					this.playerAttack(newAttack, cardElement);
				}
				this.updateTypeCount(card.faction);
				cardAbilityNum = 1;
			}else{
				cardAbilityNum ++;
				this.checkCardAbility(card);
			}
		}
	}
	heroDraw() {
		console.log("heroDraw");
		const audioEl = document.getElementsByClassName("clickSound")[0];
	    audioEl.play();
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
				var numberDrawn = this.state.playerInt + this.state.extraCards;
				shuffle(cardArray);
				var selectedCards = cardArray.slice(0, numberDrawn);
				var unplayableCards = 0;
				for(var i=0; i<selectedCards.length; i++){
					if(selectedCards[i].cost > this.props.influence){
						unplayableCards ++;
					}else{}
				}
				if(unplayableCards === selectedCards.length ){
					this.playerAttack(0);
					this.props.error("Critical Miss");
				}else if(this.state.exhausted === true && enemyArray[currentEnemy].pointValue > 0){
					this.enemyAttackAction(0);
					this.props.error("Exhausted");
					this.setState({
						exhausted: false
					});
				}else{
					this.setState({
						cards: []
					}, () =>{
						this.setState({
						cardDisplay: true,
						cards: selectedCards
						}, () =>{
							this.updateSabotageNum();
							if(numberDrawn > 6){
								document.getElementById("cardBox").style.left = "0%";
							}else if(numberDrawn > 5){
								document.getElementById("cardBox").style.left = "5%";
							}else if(numberDrawn > 4){
								document.getElementById("cardBox").style.left = "10%";
							}else if(numberDrawn > 3){
								document.getElementById("cardBox").style.left = "15%";
							}else{}
						});
					});
				}
			}
		}
	}
	playerAttack(newAttack, cardElement) {
		if(enemyArray[currentEnemy].element === "object" || enemyArray[currentEnemy].element === "doorway"){

		}else if(this.state.enemyHeal > 0){
			enemyArray[currentEnemy].hp = enemyArray[currentEnemy].hp + this.state.enemyHeal;
		}else{}
	    const x = document.getElementsByClassName("characterImage2");
		for (var i=0; i < x.length; i ++ ){
			x[i].classList.remove("targetedEnemy");
		}
		if(enemyArray[currentEnemy].hp <= 0){
			console.log("He's dead, pick another target.");
		}else if(enemyArray[currentEnemy].name === "Prison Orb"){
			if(cardElement === "earth"){
				prisonOrbImg[0] = true;
			}else if(cardElement === "fire"){
				prisonOrbImg[1] = true;
			}else if(cardElement === "water"){
				prisonOrbImg[2] = true;
			}else if(cardElement === "wind"){
				prisonOrbImg[3] = true;
			}
			this.checkPrisonOrbImg();
			patience = false;
		}else{
			var numberOfPlayerCharacters = this.state.recruitArray.length + 1;
			var enemyHealth = enemyArray[currentEnemy].hp;
			var heroAttack = newAttack;
			if(newAttack < 0){
				heroAttack = 0;
			}else if(enemyArray[currentEnemy].effect[0] === "impervious" && cardElement === enemyArray[currentEnemy].element){
				heroAttack = 0;
				this.props.error("It didn't have an effect.");
			}else if(enemyArray[currentEnemy].effect[0] === "weakness" && cardElement === enemyArray[currentEnemy].effect[1]){
				heroAttack = heroAttack * 2;
			}else if(enemyArray[currentEnemy].effect[0] === "secret" && cardElement === enemyArray[currentEnemy].effect[2]){
				var secretArray = ["earth", "fire", "water", "wind"];
				for(var i=0; i<secretArray.length; i++){
					if(secretArray[i] === level){
						unlockedSecrets[i] = true;
						this.props.error("A new path is revealed");
						var newSecret = eval(secretArray[i] + "SecretRevealedStats");
						var newEnemy = new EnemyCon(newSecret.name, newSecret.hp, newSecret.attack, newSecret.sabotage, newSecret.pointValue, newSecret.image, newSecret.sabCard, newSecret.element, newSecret.supCard, newSecret.effect);
						enemyArray[currentEnemy] = newEnemy;
						enemyHealth = enemyArray[currentEnemy].hp;
					}else{}
				}

			}else{}
			if(level.includes("Temple")){
				var templeHealth = this.state.templeHealth - heroAttack;
				var shakeLength;
				var ending = false;
				if(this.state.templeHealth >= 90 && templeHealth < 90){
					shakeLength = 100;
					this.props.error("Uh oh, what was that?");
				}else if(this.state.templeHealth >= 50 && templeHealth < 50){
					shakeLength = 500;
					this.props.error("This place is not stable");
				}else if(templeHealth < 20 && templeHealth >= 0){
					shakeLength = 1000;
				}else if(templeHealth <=0){
					ending = true;
					this.props.error("You can venture no further");
					setTimeout(() => {
						this.props.aux();
					}, 1500);
				}else{
					shakeLength = 0;
				}
				this.setState({
					templeHealth: templeHealth
				});
				if(ending === false){
					if(shakeLength > 0){
						document.getElementById("gameScreenBackground").classList.add("shake");
					}else{}
					setTimeout(() => {
						document.getElementById("gameScreenBackground").classList.remove("shake");
					}, shakeLength)
				}else{}
			}else{}
			var enemyHp = enemyHealth - heroAttack;
			if(enemyHealth === heroAttack){
				const audioEl = document.getElementsByClassName("collectSound")[0];
	    		setTimeout(() => {
	    			audioEl.play();
	    			var newEnergy = this.props.influence + 1;
					this.props.changeInfluence(newEnergy);
	    		}, 500);
				this.props.setSpheres(1);
				var enemyLevel;
				if(enemyArray[currentEnemy].pointValue <= 100){
					enemyLevel = 16;
				}else if(enemyArray[currentEnemy].pointValue > 100 && enemyArray[currentEnemy].pointValue <= 200){
					enemyLevel = 17;
				}else if(enemyArray[currentEnemy].pointValue > 200 && enemyArray[currentEnemy].pointValue <= 300){
					enemyLevel = 18;
				}else if(enemyArray[currentEnemy].pointValue > 300 && enemyArray[currentEnemy].pointValue <= 400){
					enemyLevel = 19;
				}else if(enemyArray[currentEnemy].pointValue >= 1000){
					enemyLevel = 20;
				}else{
					enemyLevel = 20;
				}
				var supCardValue = Math.floor(Math.random() * 21) + this.state.spookLevel;
				if(supCardValue >= enemyLevel){
					if(enemyArray[currentEnemy].effect[0] === "secret" || enemyArray[currentEnemy].element === "doorway" || enemyArray[currentEnemy].element === "object" || this.props.magicBag === false){
					}else{
						this.props.gainSupCardReward(enemyArray[currentEnemy].supCard);
						this.props.error("Gained Monster Prize!");
					}
				}else{}

			}else{}
			if(enemyArray[currentEnemy].effect[0] === "secret"){
			}else{
				document.getElementById("badGuy" + (currentEnemy)).append("-" + heroAttack);
				document.getElementById("badGuy" + (currentEnemy)).style.display="inline";
			}
			const audioEl = document.getElementsByClassName("hitSound")[0];
	    	audioEl.play();
	    	if(enemyArray[currentEnemy].element === "doorway"){

	    	}else{
				document.getElementById((currentEnemy) + "image").classList.add("shake");
			}
			setTimeout(() => {
				document.getElementById((currentEnemy) + "image").classList.remove("shake");
				if(enemyArray[currentEnemy].effect[0] === "secret"){
				}else{
					document.getElementById("badGuy" + (currentEnemy)).innerHTML="";
					document.getElementById("badGuy" + (currentEnemy)).style.display="none";
				}
				if(enemyHp <= 0){
					enemyArray[currentEnemy].hp = 0;
					this.setState({
						enemyHpArray: [enemyArray[0].hp, enemyArray[1].hp, enemyArray[2].hp]
					});
					var pointValue = enemyArray[currentEnemy].pointValue;
					this.props.changeScore(pointValue);
					if(enemyArray[currentEnemy].element === "obelisk"){
						this.props.aux();
					}else{
						currentEnemy = 4;
						this.triggerEnemyDeath();
					}
				}else{
					enemyArray[currentEnemy].hp = enemyHp;
					this.setState({
						enemyHpArray: [enemyArray[0].hp, enemyArray[1].hp, enemyArray[2].hp]
					}, () => {
						if(this.state.extraAttacks === 0){
							if(enemyArray[currentEnemy].element === "obelisk"){
								this.props.decreaseStormCounter();
							}else{
								currentEnemy = 4;
								if(stageComplete === 3){
									if(level.includes("Temple")){

									}else{
										this.bossCleanse();
									}
								}else{}
								this.enemyAttackAction(0);
							}
						}else{
							currentEnemy = 4;
							var attacksLeft = this.state.extraAttacks - 1;
							patience = false;
							this.setState({
								extraAttacks: attacksLeft
							});
						}
					});
				}
			}, 350);
		}
	}
	playerAttackAll(newAttack, burn, cardElement) {
		const audioEl = document.getElementsByClassName("hitSound")[0];
	    audioEl.play();
		enemyArray[currentEnemy].hp = enemyArray[currentEnemy].hp + this.state.enemyHeal;
		attackAll = false;
		var heroAttack;
		if(newAttack < 0){
			heroAttack = 0;
		}else{
			heroAttack = newAttack;
		}
		if(level.includes("Temple")){
			var templeHealth = this.state.templeHealth - newAttack;
			this.setState({
				templeHealth: templeHealth
			});
		}else{}
		const x = document.getElementsByClassName("characterImage2");
		for (var i=0; i < x.length; i ++ ){
			x[i].classList.remove("targetedEnemy");
		}
		if(enemyArray[currentEnemy].name === "Prison Orb"){
			if(cardElement === "earth"){
				prisonOrbImg[0] = true;
			}else if(cardElement === "fire"){
				prisonOrbImg[1] = true;
			}else if(cardElement === "water"){
				prisonOrbImg[2] = true;
			}else if(cardElement === "wind"){
				prisonOrbImg[3] = true;
			}
			this.checkPrisonOrbImg();
			patience = false;
		}else{
			for(var i = 0; i<enemyArray.length; i++){
				if(enemyArray[i].hp > 0){
					document.getElementById("badGuy" + (i)).append("-" + heroAttack);
					document.getElementById("badGuy" + (i)).style.display="inline";
					document.getElementById((i) + "image").classList.add("shake");
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
						document.getElementById((i) + "image").classList.remove("shake");
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
						if(burn === true){

						}else{
							if(this.state.extraAttacks === 0){
								if(enemyArray[currentEnemy].element === "obelisk"){
									this.props.decreaseStormCounter();
								}else{
									this.enemyAttackAction(0);
								}
							}else{
								var attacksLeft = this.state.extraAttacks - 1;
								this.setState({
									extraAttacks: attacksLeft
								});
							}
						}
					}else{}
				});
			}, 350);
		}
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
					}else if(support.ability1.split(/[ ,]+/)[3] === "confuse"){
						document.getElementById(currentEnemy).classList.add("confused");
						usedSupport.ability2 --;
					}else if(support.ability1.split(/[ ,]+/)[3] === "extra"){
						usedSupport.ability2 --;
						var extraNum = parseInt(support.ability2.match(/\d+/)[0]);
						this.setState({
							extraAttacks: extraNum
						});
					}else if(support.ability1.split(/[ ,]+/)[3] === "stun"){
						usedSupport.ability2 --;
						document.getElementById(currentEnemy).classList.add("stunned");
					}else if(support.ability1.split(/[ ,]+/)[3] === "treasure"){
						usedSupport.ability2 --;
						this.props.gainSupGemReward(fire);
						this.props.gainSupGemReward(water);
						this.props.gainSupGemReward(earth);
						this.props.gainSupGemReward(wind);
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
		console.log("playerdeath");
		//this.props.goToCollection();
		this.props.playerDeathScreen();
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
		var removePoison = this.state.status;
		for(var i=0; i<enemyArray.length; i++){
			if(enemyArray[i].hp === 0){
				removeEndDmg[i] = 0;
				removePoison[i] = empty;
			}else{}
			if(enemyArray[i].name === ""){

			}else{
				if(enemyArray[i].effect[0] === "stage" && enemyArray[i].hp === 0){
					var nextStage = enemyArray[i].effect[1];
					var newEnemy = new EnemyCon(nextStage.name, nextStage.hp, nextStage.attack, nextStage.sabotage, nextStage.pointValue, nextStage.image, nextStage.sabCard, nextStage.element, nextStage.supCard, nextStage.effect);
					enemyArray[i] = newEnemy;
				}else if(enemyArray[i].effect[0] === "final" && enemyArray[i].hp === 0){
					enemyArray[i].image = enemyArray[i].effect[1];
				}else if(enemyArray[i].element === "doorway" && enemyArray[i].hp === 0){
					enemyArray[i].image = emptyDoor;
				}else if(enemyArray[i].effect[0] === "drop" && enemyArray[i].hp === 0 && enemyArray[i].effect[2] === true){
					enemyArray[i].effect[2] = false;
					for(var i=0; i<2; i++){
						if(enemyArray[i].effect[1] === "orbs"){
							console.log("free orbs");
							var templeArray = ["earthTemple", "fireTemple", "waterTemple", "windTemple"];
							var randElement = [earth, fire, water, wind];
							var chosenElement;
							for(var i=0; i<randElement.length; i++){
								if(level === templeArray[i]){
									chosenElement = randElement[i];
								}else{}
							}
							var randNum = Math.floor(Math.random() * 4);
							this.props.gainSupGemReward(chosenElement);
						}else{}
					}
				}else{}
				if(secrets === true && enemyArray[i].hp === 0){
					if(level === "earth" || level === "fire" || level === "water" || level === "wind"){
						var randNum = Math.floor(Math.random() * 101);
						if(randNum >= 90){
							secrets = false;
							var newSecret = eval(level + "SecretStats");
							var newEnemy = new EnemyCon(newSecret.name, newSecret.hp, newSecret.attack, newSecret.sabotage, newSecret.pointValue, newSecret.image, newSecret.sabCard, newSecret.element, newSecret.supCard, newSecret.effect);
							enemyArray[i] = newEnemy;
						}else{}
					}else{}
				}
			}
		}
		this.setState({
			endOfTurnDmg: removeEndDmg,
			status: removePoison
		});
		setTimeout(() => {
			this.enemyCleanUp();
		}, 100);
	}
	enemyCleanUp() {
		console.log(enemyArray);
		if(enemyArray[0].hp === 0 && enemyArray[1].hp === 0 && enemyArray[2].hp === 0){
				console.log("They're all dead. You win!");
				if(stageComplete === numberOfStages - 2 && this.props.bonusStage === true){
					this.bonusStage();
				}else if(stageComplete === numberOfStages - 2){
					if(levelsBeaten.length === 0){
						this.props.prizeChoice("cards");
					}else if(levelsBeaten.length === 1){
						this.props.prizeChoice("orbs");
					}else{}
				}else{
					this.setState({
						playerShield: this.props.shield,
						cardAbility: true
					});
					if(level.includes("Temple")){
						if(this.state.templeHealth <=0){
							this.prosp.aux();
						}
					}else{
						stageComplete ++;
						this.props.switchEnemyArray();
						if(stageComplete === 3){
							this.checkBossEffect();
						}else{}
						this.updateEnemySab();
					}
				}
		}else{
			patience = false;
			var currentSabArray = [];
			for(var i=0; i < enemyArray.length; i++){
				currentSabArray.push(enemyArray[i].sabotage);
			}
			this.setState({
				enemySab: currentSabArray
			}, () => {
				if(this.state.enemiesAttacking === false && this.state.extraAttacks === 0){
					console.log("enemies will attack");
					this.enemyAttackAction(0);
				}else{
					
				}
			});
		}
	}
	bonusStage(){
		this.props.error("Choose Your Prize");
		document.getElementById("stageName").innerHTML = "Bonus Stage";
		patience = false;
		enemyArray = [orbPrizeStats, obeliskOfPrizesStats, cardPrizeStats];
		this.setState({
			enemyArray: enemyArray
		});
	}
	checkBossEffect(){
		var bossEffect = this.props.bossEffect;
		if(bossEffect[0] === int){
			this.setState({
				playerInt: this.state.playerInt - bossEffect[1],
			});
		}else if(bossEffect[0] === power){
			var newAttack = this.props.attack - bossEffect[1];
			this.props.changeHeroAttack(newAttack);
		}else{}
	}
	enemyAttackAction(enemyNumber) {
		patience = false;
		this.setState({
			enemiesAttacking: true
		});
		var enemyAttack = enemyArray[enemyNumber].attack + this.state.enemyDamageMod;
		if(enemyAttack < 0){
			enemyAttack = 0;
		}else{}
		if(enemyArray[enemyNumber].hp === 0 || enemyArray[enemyNumber].element === "object" || enemyArray[enemyNumber].element === "doorway"){
			if(enemyNumber < (enemyArray.length - 1)){
				enemyNumber ++;
				this.enemyAttackAction(enemyNumber);
			}else if(enemyNumber === (enemyArray.length - 1)){
				this.setState({
					playerShield: this.props.shield,
					cardAbility: true,
					decoy: false,
					noHeal: false,
					noWard: false,
					noAbility: false,
					enemyHeal: 0
				}, () => {
					this.endOfTurnDmg();
				});
			}else{}
		}else{
			const x = document.getElementsByClassName("enemyCharacterBox");
			for (var i=0; i < x.length; i ++ ){
				x[i].style.borderColor="black";
			}
			if(document.getElementById(enemyNumber).classList.contains("stunned") || enemyArray[enemyNumber].element === "object" || enemyArray[enemyNumber].element === "doorway"){
				console.log("too stunned to attack");
			}else{
				document.getElementById(enemyNumber + "image").classList.add("attackingEnemy");
				document.getElementById(enemyNumber + "image").classList.add("enemyAttack");
				var enemiesAlive = 0;
				for(var i=0; i<enemyArray.length; i++){
					if(enemyArray[i].hp > 0){
						enemiesAlive ++;
					}else{}
				}
				if(document.getElementById(enemyNumber).classList.contains("confused") && enemiesAlive > 1){
					var enemyNumArray = [];
					for(var i=0; i<enemyArray.length; i++){
						if(i === enemyNumber){
							console.log("can't attack yourself");
						}else if(enemyArray[i].hp > 0){
							enemyNumArray.push(i);
						}else{}
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
					}, 350);
				}else{
					if(this.state.playerShield > 0){
						let playerShield = this.state.playerShield;
						const shieldDamage = playerShield - enemyAttack;
						if(shieldDamage >= 0){
							console.log("Ward Sound Effect");
						}else{
							document.getElementsByClassName("heroDamageIndicator2")[0].append(shieldDamage);
						}
						document.getElementsByClassName("heroDamageIndicator2")[0].style.display="inline";
						document.getElementsByClassName("heroDamageIndicator2")[0].style.color="red";
						var extraDamage = this.props.heroHp + shieldDamage;
						if(extraDamage <= 0){

						}else{
							setTimeout(() => {
									//document.getElementsByClassName("shieldIcon")[0].style.background="none";
									document.getElementsByClassName("heroDamageIndicator2")[0].innerHTML="";
									document.getElementsByClassName("heroDamageIndicator2")[0].style.display="none";
							}, 350);
						}
						if(shieldDamage < 0){
							if(extraDamage <= 0){
								this.props.changeHeroHp(0);
								console.log("trigger death 1");
							}else{
								this.props.changeHeroHp(extraDamage);
							}
							this.setState({
								playerShield: 0
							});
							if(enemyArray[enemyNumber].sabotage > 0 && enemyAttack > 0){
								var enemySabCard = enemyArray[enemyNumber].sabCard;
								var enemyCard = new CardCon(enemySabCard.name, enemySabCard.cost, enemySabCard.power, enemySabCard.text, enemySabCard.alignment, enemySabCard.rarity, enemySabCard.ability1, enemySabCard.ability2, enemySabCard.unlocked, enemySabCard.type, enemySabCard.image, enemySabCard.icon, enemySabCard.faction, enemySabCard.craft, enemySabCard.ownedNum, enemySabCard.deckNum);
								if(this.state.decoy === false){
									cardArray.push(enemyCard);
									enemyArray[enemyNumber].sabotage --;
									var currentSabArray = [];
									for(i=0; i < enemyArray.length; i++){
										currentSabArray.push(enemyArray[i].sabotage);
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
						if(enemyArray[enemyNumber].sabotage > 0 && enemyAttack > 0){
							var enemySabCard2 = enemyArray[enemyNumber].sabCard;
							var enemyCard2 = new CardCon(enemySabCard2.name, enemySabCard2.cost, enemySabCard2.power, enemySabCard2.text, enemySabCard2.alignment, enemySabCard2.rarity, enemySabCard2.ability1, enemySabCard2.ability2, enemySabCard2.unlocked, enemySabCard2.type, enemySabCard2.image, enemySabCard2.icon, enemySabCard2.faction, enemySabCard2.craft, enemySabCard2.ownedNum, enemySabCard2.deckNum);
							if(this.state.decoy === false){
								cardArray.push(enemyCard2);
								enemyArray[enemyNumber].sabotage --;
								var currentSabArray = [];
								for(i=0; i < enemyArray.length; i++){
									currentSabArray.push(enemyArray[i].sabotage);
								}
								this.setState({
									enemySab: currentSabArray
								});
							}else{}
						}else{}
						if(enemyAttack <= 0){
							document.getElementsByClassName("heroDamageIndicator2")[0].append(enemyAttack);
						}else{
							document.getElementsByClassName("heroDamageIndicator2")[0].append("-" + enemyAttack);
						}
						document.getElementsByClassName("heroDamageIndicator2")[0].style.display="inline";
						document.getElementsByClassName("heroDamageIndicator2")[0].style.color="red"
						setTimeout(() => { 
							document.getElementsByClassName("heroDamageIndicator2")[0].innerHTML="";
							document.getElementsByClassName("heroDamageIndicator2")[0].style.display="none";
							if(playerHp <= 0){
								this.props.changeHeroHp(0);
							}else{
								this.props.changeHeroHp(playerHp);
							}
						}, 350);
					}
				}
			}
			setTimeout(() => {
				if(this.props.heroHp === 0){
					console.log("triggerDeath 2");
					this.triggerPlayerDeath();
				}else{
					console.log(enemyNumber);
					console.log(document.getElementById(enemyNumber + "image"));
					if(document.getElementById(enemyNumber + "image") === null){

					}else{
						document.getElementById(enemyNumber + "image").classList.remove("attackingEnemy");
						document.getElementById(enemyNumber + "image").classList.remove("enemyAttack");
						document.getElementById(enemyNumber).classList.remove("stunned");
						document.getElementById(enemyNumber).classList.remove("confused");
						var statusArray = this.state.status;
						for(var i=0; i<statusArray.length; i++){
							if(statusArray[i] === stunned || statusArray[i] === confused){
								statusArray[i] = empty;
							}
						}
						this.setState({
							status: statusArray
						});
						for (var i=0; i < x.length; i ++ ){
							x[i].style.borderColor="black";
						}
					}
					if(enemyNumber < (enemyArray.length - 1)){
						enemyNumber ++;
						this.enemyAttackAction(enemyNumber);
					}else if(enemyNumber === (enemyArray.length - 1)){
						this.setState({
							playerShield: this.props.shield,
							cardAbility: true,
							decoy: false,
							noHeal: false,
							noWard: false,
							noAbility: false,
							enemyHeal: 0
						}, () => {
							//this.props.decreaseStormCounter();
							this.endOfTurnDmg();
						});
					}else{}
				}
			}, 500);
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
				var parseNum = usedSupport.ability2;
				if(usedSupport.ability1.indexOf("supBurning") >= 0){
					var burningNum = parseInt(usedSupport.ability1.split(/[ ,]+/)[1]);
					this.playerAttackAll(burningNum, true);
				}else{}
				if(parseNum <= 0){
					//usedSupport.ability2 = parseInt(usedSupport.ability1.split(" ")[3]);
					//usedSupport.ability2 = 9;
					cardArray.push(usedSupport);
					var newArray = this.state.cards;
					newArray.push(usedSupport);
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
	rewardsClick(){
		var showRewards;
		if(this.state.showRewards === false){
			document.getElementById("rewardsIcon").style.right = "250px";
			document.getElementById("rewardsCol").style.width = "250px";
			showRewards = true;
		}else{
			document.getElementById("rewardsIcon").style.right = "0px";
			document.getElementById("rewardsCol").style.width = "0px";
			showRewards = false;
		}
		this.setState({
			showRewards: showRewards
		});
	}
	listRewardGems () {
		var gems = this.props.supGemRewards;
		const listGems = gems.map((gem, index) =>
			<img key={index} className="rewardGem" src={gem} alt="gem" />
		);
		return (
			<div className="col-xs-12">{listGems}</div>
		)
	}
	listRewardCards(){
		var cards = this.props.supCardRewards;
		const listItems = cards.map((card, index) =>
			<RewardCard icon={card.icon} key={index} id={index} className={card.alignment} name={card.name} image={card.image} ability={card.ability1} power={card.power} card={card} text={card.text} faction={card.faction} />
		);
		return (
			<div className="col-xs-12">{listItems}</div>
		)
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
		        <audio className="mistyWoods">
		          <source src={mistyWoods}></source>
		        </audio>
		        <audio className="hitSound">
		          <source src={attackSound}></source>
		        </audio>
		        <audio className="collectSound">
		          <source src={collectSound}></source>
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
				{this.state.orbTraderScreen ? <OrbTraderScreen showOrbTraderScreen={this.showOrbTraderScreen} /> : null }
				<div className="row" id="topRow">
					<div className="col-xs-12">
						<div className="row" id="enemySide">
							<EnemySide extraRewards={this.props.extraRewards} error={this.props.error} checkPrisonOrbImg={this.checkPrisonOrbImg} showOrbTraderScreen={this.showOrbTraderScreen} switchEnemyArray={this.props.switchEnemyArray} prizeChoice={this.props.prizeChoice} aux={this.props.aux} gainSupGemReward={this.props.gainSupGemReward} gainSupCardReward={this.props.gainSupCardReward} status={this.state.status} updateEnemySab={this.updateEnemySab} bossCleanse={this.state.bossCleanse} cardDisplay={this.state.cardDisplay} state={this.state} sab={this.state.enemySab} heroDraw={this.heroDraw} />
						</div>
						<div className="row" id="tutorialMessageBox">
							<div className="col-xs-12" id="tutorialMessageCol">
								<div className="row" id="tutorialMessage">Clicking an enemy draws your spells and selecting a spell sends an attack.</div>
								<div className="row" id="tutorialButtonRow">
									<div className="coolButton col-xs-4" id="tutorialMessageButton" onClick={this.handleTutorialClick} >OK</div>
								</div>
							</div>
						</div>
						<div className="row" id="playArea">
							<div className="col-xs-12">
								{this.state.cardDisplay ? <CardDisplayBox sabotageNumber={this.state.sabotageNum} heroHp={this.props.heroHp} chooseCard={this.chooseCard} cards={this.state.cards} typeCount={this.state.typeCount} /> : null }
								<div className="row">
									<div id="rewardsCol">
										{this.listRewardGems()}
										{this.listRewardCards()}
									</div>
								</div>
								<div id="rewardsIcon" className="row" onClick={this.rewardsClick}></div>
							</div>
						</div>
						<div className="row">
							<div className="col-xs-offset-4 col-xs-4">
								{/*<SpookyMeter spookLevel={this.state.spookLevel} /> */}
								<EffectsRow exhausted={this.state.exhausted} extra={this.state.extraAttacks} next={this.state.nextSpellBonus} decoy={this.state.decoy} shield={this.state.playerShield} magic={this.props.attack} rummage={this.state.researchNum} />
							</div>
						</div>
						<div className="row" id="characterSide tabIndex" onKeyDown={this.handleKeyPress}>
							<div className="col-xs-12">
								<Character magicBag={this.props.magicBag} supportAction={this.supportAction} schemePower={this.state.schemePower} supportSlot1={this.state.supportSlot1} supportSlot2={this.state.supportSlot2} toggleRecruitState={this.toggleRecruitState} influence={this.props.influence} stormlight={this.state.stormlight} recruitAction={this.recruitAction} attack={this.props.attack} int={this.state.playerInt} playerShield={this.state.playerShield} heroHp={this.props.heroHp} equipItem={this.equipItem} heroDraw={this.heroDraw} heroPosition={this.state.heroPosition} cards={this.state.cards} chooseCard={this.chooseCard} equipment={this.props.equipment} cardDisplay={this.state.cardDisplay} />
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

class OrbTraderScreen extends React.Component {
	constructor(props) {
	    super(props);
	    this.state = {
	      orbCount: [0,0,0,0],
	      trade: [0,0],
	      orbs: [null, null],
	      number: [null, null],
	      text: [null, null]
	    }
	    this.tradingClick = this.tradingClick.bind(this);
	    this.selectOrb = this.selectOrb.bind(this);
	    this.confirmTrade = this.confirmTrade.bind(this);
	}
	componentDidMount(){
		var orbCount = [0,0,0,0];
		for(var i=0; i<elementOrbs.length; i++){
			if(elementOrbs[i] === earth){
				orbCount[0] ++;
			}else if(elementOrbs[i] === fire){
				orbCount[1] ++;
			}else if(elementOrbs[i] === water){
				orbCount[2] ++;
			}else if(elementOrbs[i] === wind){
				orbCount[3] ++;
			}
		}
		this.setState({
			orbCount: orbCount
		});
	}
	tradingClick(option){
		var trade = this.state.trade;
		console.log(this.state.trade);
		console.log(this.state.orbCount);
		console.log(this.state.number);
		if(option === "playerUp"){
			if((this.state.trade[0] + 2) <= (this.state.orbCount[this.state.number[0]])){
				console.log("hey");
				trade[0] = trade[0] + 2;
			}else{}
		}else if(option === "playerDown"){
			if(trade[0] > 0){
				trade[0] = trade[0] - 2;
			}else{}
		}else if(option === "traderUp"){
			trade[1]++;
		}else if(option === "traderDown"){
			if(trade[1] > 0){
				trade[1]--;
			}else{}
		}
		this.setState({
			trade: trade
		});
	}
	selectOrb(option, type, number, text){
		var orbs = this.state.orbs;
		var string = this.state.text;
		var trade = this.state.trade;
		var position = this.state.number;
		if(type === this.state.orbs[0] || option === "trader"){

		}else{
			trade[0] = 0;
		}
		if(option === "player"){
			orbs[0] = type;
			string[0] = text;
			position[0] = number;
		}else if(option === "trader"){
			orbs[1] = type;
			string[1] = text;
			position[1] = number;
		}
		this.setState({
			orbs: orbs,
			number: position,
			text: string,
			trade: trade
		}, () =>{
			const x = document.getElementsByClassName("traderOrb");
			for (var i=0; i < x.length; i ++ ){
				x[i].classList.remove("orbSelected");
			}
			for(var i=0; i<this.state.orbs.length; i++){
				if(i===0){
					if(this.state.orbs[0] === null){

					}else{
						document.getElementById(this.state.text[0] + "OrbP").classList.add("orbSelected");
					}
				}else if(i===1){
					if(this.state.orbs[1] === null){

					}else{
						document.getElementById(this.state.text[1] + "OrbT").classList.add("orbSelected");
					}
				}
			}
		});
	}
	confirmTrade(){
		if(this.state.trade[0] === (this.state.trade[1] * 2) && this.state.orbs[0] != this.state.orbs[1]){
			for(var i=0; i<this.state.trade[0]; i++){
				var usedElement = elementOrbs.indexOf(this.state.orbs[0]);
				elementOrbs.splice(usedElement, 1);
			}
			for(var i=0; i<this.state.trade[1]; i++){
				elementOrbs.push(this.state.orbs[1]);
			}
			console.log(elementOrbs);
		}else{}
		this.props.showOrbTraderScreen();
	}
	render() {
		return (
			<div className="row" id="orbTraderScreen">
				<div className="col-xs-12">
					<div className="row">
						<div className="col-xs-8" id="orbTraderText">Orbs for trade! If you give me two orbs of the same type, I'll give you one of another.</div>
						<div className="col-xs-4"><img src={mortemus} id="orbTraderImg" alt="mortemus" /></div>
					</div>
					<div className="row">
						<div className="col-xs-4" id="playerOrbs">
							<div className="row">
								<div className="orbSelection col-xs-6"><img src={earth} className="traderOrb" id="earthOrbP" alt="earthOrb" onClick={() => {this.selectOrb("player", earth, 0, "earth")}} /><div className="orbCount" id="earthCount">{this.state.orbCount[0]}</div></div>
								<div className="orbSelection col-xs-6"><img src={fire} className="traderOrb" id="fireOrbP" alt="fireOrb" onClick={() => {this.selectOrb("player", fire, 1, "fire")}} /><div className="orbCount" id="fireCount">{this.state.orbCount[1]}</div></div>
							</div>
							<div className="row">
								<div className="orbSelection col-xs-6"><img src={water} className="traderOrb" id="waterOrbP" alt="waterOrb" onClick={() => {this.selectOrb("player", water, 2, "water")}}/><div className="orbCount" id="waterCount">{this.state.orbCount[2]}</div></div>
								<div className="orbSelection col-xs-6"><img src={wind} className="traderOrb" id="windOrbP" alt="windOrb" onClick={() => {this.selectOrb("player", wind, 3, "wind")}}/><div className="orbCount" id="windCount">{this.state.orbCount[3]}</div></div>
							</div>
						</div>
						<div className="col-xs-2">
							<div className="row tradeIcon" onClick={() => {this.tradingClick("playerUp")}}>+</div>
							<div className="row tradeIcon">{this.state.trade[0]}</div>
							<div className="row tradeIcon" onClick={() => {this.tradingClick("playerDown")}}>-</div>
						</div>
						<div className="col-xs-2">
							<div className="row tradeIcon" onClick={() => {this.tradingClick("traderUp")}}>+</div>
							<div className="row tradeIcon">{this.state.trade[1]}</div>
							<div className="row tradeIcon" onClick={() => {this.tradingClick("traderDown")}}>-</div>
						</div>
						<div className="col-xs-4" id="traderOrbs">
							<div className="row">
								<div className="orbSelection col-xs-6"><img src={earth} className="traderOrb" id="earthOrbT" alt="earthOrb" onClick={() => {this.selectOrb("trader", earth, 0, "earth")}}/></div>
								<div className="orbSelection col-xs-6"><img src={fire} className="traderOrb" id="fireOrbT" alt="fireOrb" onClick={() => {this.selectOrb("trader", fire, 1, "fire")}}/></div>
							</div>
							<div className="row">
								<div className="orbSelection col-xs-6"><img src={water} className="traderOrb" id="waterOrbT" alt="waterOrb" onClick={() => {this.selectOrb("trader", water, 2, "water")}}/></div>
								<div className="orbSelection col-xs-6"><img src={wind} className="traderOrb" id="windOrbT" alt="windOrb" onClick={() => {this.selectOrb("trader", wind, 3, "wind")}}/></div>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-xs-offset-3 col-xs-4 coolButton" onClick={this.confirmTrade}>Confirm</div>
					</div>
				</div>
			</div>
		)
	}
}

class PlayerDeathScreen extends React.Component {
	componentDidMount(){
		var audioEl = document.getElementsByClassName("defeatMusic")[0];
		audioEl.play();
		setTimeout(() => {
			this.props.showCollection();
		}, 5000);
	}
	render() {
		return (
			<div className="row" id="defeatRow">
				<audio className="defeatMusic">
		          <source src={defeat}></source>
		        </audio>
				<img src={toogerShadow} id="toogerShadow" alt="shadow" />
				<div id="defeatTitle">DEFEAT</div>
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

class EffectsRow extends React.Component {
	listEffects () {
		var currentEffects = [];
		if(this.props.next > 0 || this.props.magic > 0){
			currentEffects.push({image: power, number: (this.props.next + this.props.magic), type: "magicOrb"});
		}else{}
		if(this.props.decoy === true){
			currentEffects.push({image: decoySym, number: null, type: "decoyOrb"});
		}else{}
		if(this.props.shield > 0){
			currentEffects.push({image: shield, number: this.props.shield, type: "shieldOrb"});
		}else{}
		if(this.props.rummage > 0){
			currentEffects.push({image: rummageSym, number: this.props.rummage, type: "rummageOrb"});
		}else{}
		if(this.props.extra > 0){
			currentEffects.push({image: extraSym, number: this.props.extra, type: "extraOrb"});
		}else{}
		if(this.props.exhausted === true){
			currentEffects.push({image: exhaustedSym, number: null, type: "exhaustedOrb"});
		}else{}
		const listEffects = currentEffects.map((effect, index) =>
			<Effect key={index} id={index} image={effect.image} number={effect.number} type={effect.type} />
		);
		return (
			<div className="row">{listEffects}</div>
		)
	}
	render(){
		return (
			<div className="row" id="effectsRow">
				<div className="col-xs-12">
					{this.listEffects()}
				</div>
			</div>
		)
	}
}

class Effect extends React.Component {
	render(){
		return (
			<div className={`col-xs-2 effectOrb ${this.props.type}`}>
				<div className="row">
					<img className="col-xs-6 effectSym" src={this.props.image} alt={this.props.image} />
					<div className="col-xs-2 effectNum">{this.props.number}</div>
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
				<div id="influenceOrb">{this.props.influence}</div>
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
			<Card className={card.alignment} faction={card.faction} icon={card.icon} key={index} id={index} name={card.name} image={card.image} ability={card.ability1} cost={card.cost} power={card.power} text={card.text} card={card} rarity={card.rarity} chooseCard={this.props.chooseCard} typeCount={this.props.typeCount} heroHp={this.props.heroHp} sabotageNumber={this.props.sabotageNumber} />
		);
		return (
			<div className="col-xs-12">{listItems}</div>
		)
	}
	render() {
		return (
			<div className="row" id="cardBox">
				{this.listCards()}
			</div>
		)
	}
}

class RewardCard extends React.Component {
	render() {
		var cardStyle = this.props.faction;
		return (
			<div className={`col-xs-12 hero2 ${cardStyle}`} id={`${this.props.id}card`}>
	        	<div className="row">
	        		<div className="col-xs-3 deckCardPower">{this.props.power}</div>
	            	<div className="col-xs-7 deckCardName">{this.props.name}</div>
	            </div>
			</div>
		)
	}
}

class Card extends React.Component {
	constructor(props) {
	    super(props);
	    this.state = {
	      hover: false
	    }
	    this.onMouseEnter = this.onMouseEnter.bind(this);
	    this.onMouseLeave = this.onMouseLeave.bind(this);
	}
	onMouseEnter(){
		this.setState({
			hover: true
		});
	}
	onMouseLeave(){
		this.setState({
			hover: false
		});
	}
	render() {
		var cardBonus = 0;
		if(this.props.className === "enemy"){
		}else{
			cardBonus = this.props.sabotageNumber;
		}
		if(this.props.card.type === "support"){
		}else{
			if(this.props.card.ability1 === "factionBoost" || this.props.card.ability2 === "factionBoost"){
				var factionArray = ["neutral", "earth", "fire", "water", "wind", "desert", "lava", "mud", "storm"];
				for(var i=0; i<factionArray.length; i++){
					if(factionArray[i] === this.props.card.faction){
						cardBonus = this.props.typeCount[i];
					}else{}
				}
			}else if(this.props.card.ability2.indexOf("damage") >=0){
				var damageNum = parseInt(this.props.card.ability2.split(" ")[1]);
				if(this.props.card.ability1 === "clutch" && this.props.heroHp <=15){
					cardBonus = damageNum;
				}else{}
			}
		}
		var rarity;
		if(this.props.rarity === 1){
	      rarity = common;
	    }else if(this.props.rarity === 2){
	      rarity = uncommon;
	    }else if(this.props.rarity === 3){
	      rarity = rare;
	    }else{
	      rarity = empty;
	    }
		var charCard = this.props.card.type;
		var influenceCost = false;
		var stormlightCost = false;
		var sphereCard = false;
		var normal = false;
		var cardStyle = "neutral";
	    var schemeReq = 0;
	    var schemePower = 0;
	    var scheme = false;
	    var cardNumberClass = "cardPowerNum";
	    if(this.props.card.cost > 0){
	    	influenceCost = true;
	    }else{}
		if(charCard === "character"){
			influenceCost = true;
			scheme = true;
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
    	}else{
    		normal = true;
    	}
    	var cardPowerLength = (this.props.power + cardBonus).toString().length;
    	if(cardPowerLength === 2){
    		cardNumberClass = "cardPowerNum2";
    	}
    	var newCardPower = this.props.power + cardBonus;
		return (
			<div className="col-xs-12 cardObject">
				{this.state.hover ? <HeroCardHelp ability1={this.props.card.ability1} ability2={this.props.card.ability2} /> : null }
				<div className="row">
					<div onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave} className={`col-xs-12 ${this.props.className} ${cardStyle}`} id={`${this.props.id}card`} onClick={() => this.props.chooseCard(this.props.card)}>
						{ sphereCard === false &&
				          <div>
				            <div className="row">
				              <div className="col-xs-offset-4 col-xs-4 cardPower"><span className={cardNumberClass}>{newCardPower}</span></div>
				            </div>
				            <div className="row cardName">{this.props.name}</div>
				          </div>
				        }
				        { sphereCard === true &&
				          <div className="row">
				            <img className="monsterPic" src={this.props.image} alt="monsta" />
				          </div>
				        }
				        <CardText cardText={this.props.text} />
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
				        	{ normal === true &&
				        		<div className="col-xs-3"></div>
				        	}
				        	<div className="col-xs-5"><img className="rarityImg" src={rarity} alt="rarity" /></div>
			        		<div className="col-xs-4"><img className="iconImg" src={this.props.icon} alt="icon" /></div>
				        </div>
					</div>
				</div>
			</div>
		)
	}
}

class HeroCardHelp extends React.Component {
	constructor(props) {
	    super(props);
	    this.state = {
	      keyword: "",
	      description: ""
	    }
	}
	componentDidMount(){
		var keyword = [];
		var description = [];
		if(typeof this.props.ability2 === "number"){
			for(var i=0; i<keyWordList.length; i++){
				if(this.props.ability1.indexOf(keyWordList[i].id) >=0){
					keyword.push(keyWordList[i].keyword);
					description.push(keyWordList[i].description);
				}else{}
			}
		}else{
			for(var i=0; i<keyWordList.length; i++){
				if(this.props.ability1.indexOf(keyWordList[i].id) >=0 || this.props.ability2.indexOf(keyWordList[i].id) >=0){
					keyword.push(keyWordList[i].keyword);
					description.push(keyWordList[i].description);
				}else{}
			}
		}
		this.setState({
			keyword: keyword,
			description: description
		});
	}
	render() {
		var keywords;
		if(this.props.ability1 === "" && this.props.ability2 === ""){
			keywords = "noAbility";
		}else if(this.props.ability2 === "" || typeof this.props.ability2 === "number"){
			keywords = "oneAbility";
		}else{
			keywords = "twoAbility";
		}
		return (
			<div className={`row helpText ${keywords}`}>
				<div className="col-xs-12">
					<div className="row bigWord">{this.state.keyword[0]}</div>
					<div className="row">{this.state.description[0]}</div>
					<div className="row bigWord">{this.state.keyword[1]}</div>
					<div className="row">{this.state.description[1]}</div>
				</div> 
			</div>
		)
	}
}

class CardText extends React.Component {
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
		var splitText = this.props.cardText.split(".");
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
		return (
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
		)
	}
}

class EnemySide extends React.Component {
	listBadGuys () {
		const numberOfBadGuys = enemyArray;
		const listItems = numberOfBadGuys.map((badGuy, index) => {
			if(badGuy.hp > 0 || badGuy.effect[0] === "final" || badGuy.effect[0] === "secret" || badGuy.element === "doorway"){
				return <Enemy key={index} id={index} aux={this.props.aux} error={this.props.error} extraRewards={this.props.extraRewards} checkPrisonOrbImg={this.props.checkPrisonOrbImg} showOrbTraderScreen={this.props.showOrbTraderScreen} gainSupCardReward={this.props.gainSupCardReward} switchEnemyArray={this.props.switchEnemyArray} prizeChoice={this.props.prizeChoice} status={this.props.status[index]} bossCleanse={this.props.bossCleanse} heroDraw={this.props.heroDraw} cardDisplay={this.props.cardDisplay} enemyId={"badGuy" + index} name={badGuy.name} eHp={badGuy.hp} attack={badGuy.attack} updateEnemySab={this.props.updateEnemySab} sab={this.props.sab[index]} sabCard={badGuy.sabCard} image={badGuy.image} element={badGuy.element} effect={badGuy.effect} />
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
						<HeroSideSlot magicBag={this.props.magicBag} int={this.props.int} attack={this.props.attack} playerShield={this.props.playerShield} heroHp={this.props.heroHp} name={player.name} image={player.image} hp={player.hp} equipItem={this.props.equipItem} heroDraw={this.props.heroDraw} equipment={this.props.equipment} stormlight={this.props.stormlight} toggleRecruitState={this.props.toggleRecruitState} influence={this.props.influence} />
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
										{(this.props.card.ability1.split(/[ ,]+/)[3])}
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
						<MagicBag magicBag={this.props.magicBag} int={this.props.int} />
					</div>
					<div className="col-xs-5">
						<YouberImage image={player.image} />
					</div>
					<div className="col-xs-3 heroStats">
						<HeroHPSpan hp={this.props.heroHp} hero={"heroDamageIndicator2"} enemyId={"hero"} />
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

class MagicBag extends React.Component {
	render(){
		var bagImg = regularBag;
		if(this.props.magicBag === true){
			bagImg = magicBag;
		}else{
			bagImg = regularBag;
		}
		return (
			<div className="row">
				<div className="col-xs-12">
					<div className="row" id="drawRow">
						<img className="col-xs-offset-2 col-xs-7 intImg" src={int} /> 
						<div className="col-xs-2" id="drawNum">{this.props.int}</div>
					</div>
					<img src={bagImg} className="row magicBag" />
					<div className="row" id="bagNum">{cardArray.length}</div>
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
				{/*<button className="coolButton" id="attackButton" onClick={this.props.heroDraw}>Attack</button>*/}
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
		var statusClass;
		if(this.props.boss === "boss"){
			statusClass = "enemyBossStatus";
		}else{
			statusClass = "enemyStatus";
		}
		return (
			<div className="row">
				<img className={statusClass} src={this.props.status} alt="enemyStatus" />
				<img className={`characterImage2 col-xs-offset-1 col-xs-8 ${this.props.boss}`} id={this.props.id + 'image'} src={this.props.image} alt={this.props.name} />
			</div>
		);
	}
};

class YouberImage extends React.Component {
	render() {
		return (
			<img className="youberImage" id={this.props.id + 'image'} src={this.props.image} alt={this.props.name} />
		);
	}
};

class HPSpan extends React.Component {
	render() {
		return (
			<div className="col-xs-7 hpSpan">
				<div className="row">
					<img className="col-xs-4 heartIcon" src={heart} /> 
					<span className="col-xs-3">{this.props.hp}</span>
					<span className={`col-xs-2 ${this.props.hero}`} id={this.props.enemyId}></span>
				</div>
			</div>
		);
	}
};

class HeroHPSpan extends React.Component {
	render() {
		return (
			<div className="col-xs-12 heroHpSpan">
				<div className="row">
					<img className="col-xs-4 heartIcon" src={heart} /> 
					<span className="col-xs-3 currentHealth">{this.props.hp}</span>
					<span className={`col-xs-2 ${this.props.hero}`} id={this.props.enemyId}></span>
				</div>
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
	      hover: false,
	      enemyEffect: true,
	      object: true,
	      boss: null
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
	componentDidMount(){
		if(this.props.name === "Prison Orb"){
			this.props.checkPrisonOrbImg();
		}else{}
		this.props.updateEnemySab();
		var enemyEffect;
		var object = true;
		if(this.props.element === "object"){
			enemyEffect = false;
			object = false;
		}else if(this.props.effect[2] === "countdown" || this.props.effect[2] === "static"){
			enemyEffect = true;
		}else{
			enemyEffect = false;

		}
		this.setState({
			boss: null,
			enemyEffect: enemyEffect,
			object: object
		});
	}
	selectEnemyToAttack(id) {
		if(this.props.cardDisplay === true){
		}else{
			const x = document.getElementsByClassName("characterImage2");
			for (var i=0; i < x.length; i ++ ){
				x[i].classList.remove("targetedEnemy");
			}
			document.getElementById(id + 'image').classList.add("targetedEnemy");
			currentEnemy = id;
		}
		if(this.props.effect[0] === "prize"){
			this.props.prizeChoice(this.props.effect[1]);
		}else if(this.props.image === emptyDoor || this.props.effect[1] === "revealed"){
			if(patience === true){
				this.props.error("Patience Betsy");
			}else{
				lastDoorway = this.props.name;
				if(document.getElementById("1image") === null){

				}else{
					document.getElementById("1image").classList.remove("prisonOrbImg");
				}
				this.props.switchEnemyArray();
				stageComplete ++;
			}
		}else if(this.props.image === mortemus){
			this.props.showOrbTraderScreen();
		}else if(this.props.image === cardPrize && this.props.effect[0] === "final"){
			var typeCards = [];
			var cardNum = 1;
				for(var i=1; i<21; i++){
					var randElement = ["neutral", "earth", "fire", "water", "wind"];
					var randNum = Math.floor(Math.random() * 5);
					var typeCard = eval(randElement[randNum] + i);
					typeCards.push(typeCard);
				}
				for(var i=0; i<cardNum; i++){
					var newCard;
					for(var j=0; j<typeCards.length; j++){
						shuffle(typeCards);
						var randNum = Math.floor(Math.random() * 101);
						if(randNum < 50){
							if(typeCards[j].rarity === 1){
								if((typeCards[j].ownedNum + typeCards[j].deckNum) >=4){
								}else{
									newCard = typeCards[j];
									break;
								}
							}else{}
						}else if(randNum > 50 && randNum < 85){
							if(typeCards[j].rarity === 2){
								if((typeCards[j].ownedNum + typeCards[j].deckNum) >=4){
								}else{
									newCard = typeCards[j];
									break;
								}
							}else{}
						}else{
							if(typeCards[j].rarity === 3){
								if((typeCards[j].ownedNum + typeCards[j].deckNum) >=4){
								}else{
									newCard = typeCards[j];
									break;
								}
							}else{}
						}
					}
					this.props.gainSupCardReward(newCard);
				}
				enemyArray[1] = new EnemyCon("", 0, 0, 0, 0, null, null, "box", null, [null, null, null]);
		}else if(this.props.effect[0] === "artifact"){
			this.props.extraRewards(this.props.image);
			this.props.aux();
		}else{
			this.props.heroDraw();
		}
	}
	render() {
		var newId;
		if(stageComplete === 4){
			if(level.includes("Temple") === true){
				newId = null;
			}else{
				newId = "boss";
			}
		}else if(this.props.effect[0] === "secret"){
			newId = "secretImage";
		}else{
			newId = null;
		}
		return (
			<div className="col-xs-4 enemyCharacterBox" id={this.props.id} onClick={() => {this.selectEnemyToAttack(this.props.id)}}>
				<div className="row">
					<div className="col-xs-offset-2 col-xs-6 enemyInfo">
						<CharacterName name={this.props.name} />
						<div className="row">
							<HPSpan hp={this.props.eHp} enemyId={this.props.enemyId} hero={"heroDamageIndicator"} />
							<AttackNum attack={this.props.attack} />
						</div>
						<div className="row sabRow">
							<div className="col-xs-11"><Sabotage mouseEnter={this.handleMouseEnter} mouseLeave={this.handleMouseLeave} sab={this.props.sab} /></div>
						</div>
					</div>
					{this.state.enemyEffect ? <EnemyEffects effect={this.props.effect[0]} number={this.props.effect[1]} type={this.props.effect[2]} bossCleanse={this.props.bossCleanse} /> : null }
				</div>
				<div className="row">
					<div className="col-xs-offset-2 col-xs-8">
						<CharacterImage image={this.props.image} boss={newId} status={this.props.status} id={this.props.id} />
						{this.state.hover ? <EnemySabCard sabCard={this.props.sabCard}/> : null }
					</div>
				</div>
			</div>
		);
	}
};

class EnemyEffects extends React.Component {
	render(){
		var effectNum;
		if(this.props.type === "static"){
			effectNum = "-" + this.props.number;
		}else{
			effectNum = this.props.bossCleanse;
		}
		return (
			<div className="col-xs-3 enemyEffectDisplay">
				<div className="row">
					<img className="col-xs-8 enemyEffectImg" src={this.props.effect} alt="effect" />
					<div className="col-xs-4 enemyEffectNum">{effectNum}</div>
				</div>
			</div>
		)
	}
}

class AttackNum extends React.Component {
	render(){
		return (
			<div className= "col-xs-5">
				<div className="row">
					<img className="col-xs-6 slashIcon" src={slash} />
					<div className="col-xs-4 attackNum">{this.props.attack}</div>
				</div>
			</div>
		)
	}
}

class EnemySabCard extends React.Component {
	render() {
		return (
			<div className="col-xs-12 enemy enemyHoverCard">
		          <div className="row">
		            <div className="col-xs-offset-4 col-xs-4 enemyCardPower">{this.props.sabCard.power}</div>
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

class Sabotage extends React.Component {
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
			rewardGems: [],
			rewardHp: 0,
			extraItem: null
		}
	this.levelRewards = this.levelRewards.bind(this);
	this.listCardRewards = this.listCardRewards.bind(this);
	this.listGemRewards = this.listGemRewards.bind(this);
	}
	componentDidMount(){
		var audioEl = document.getElementsByClassName("victoryMusic")[0];
		audioEl.play();
		var rewardHp = 0;
		var extraItem;
		if(level === "tower"){
			this.props.goToEndingScreen();
		}else if(level === "tutorial"){
			cardArray = tutorialDeckSave;
		}else{
			levelsBeaten.push(level);
			var rewardTier = 0;
			for(var i=0; i<levelsBeaten.length; i++){
				if(levelsBeaten[i] === level){
					rewardTier ++;
				}else{}
			}
			var levelArray = ["earth", "fire", "water", "wind", "desert", "lava", "mud", "storm"];
			var scrollArray = [earthScroll, fireScroll, waterScroll, windScroll, desertScroll, lavaScroll, mudScroll, stormScroll];
			var keyArray = [earthKey, fireKey, waterKey, windKey];
			var artifactArray = [earthArtifact, fireArtifact, waterArtifact, windArtifact, sarcophagus, moltenPedestal, grandGoo, elderStorm];
			for(var i=0; i<levelArray.length; i++){
				if(levelArray[i] === level){
					if(rewardTier === 2){
						//elementScrolls[i] = true;
						//extraItem = scrollArray[i];
						this.props.activateBonusStage();
					}else if(rewardTier === 3){
						if(i<4){
							elementKeys[i] = true;
							extraItem = keyArray[i];
						}else{}
					}else{}
				}else if(level.includes("Temple") && level.includes(levelArray[i])){
					if(this.props.extraRewards[0] === artifactArray[i] && secretArtifacts[i] === false){
						extraItem = artifactArray[i];
						secretArtifacts[i] = true;
					}else{}
				}else{}
			}
			if(rewardTier === 1){
				youberHero.hp = youberHero.hp + 2;
				rewardHp = 2;
			}else if(rewardTier === 2){
				youberHero.hp = youberHero.hp + 3;
				rewardHp = 3;
			}else if(rewardTier === 3){
				youberHero.hp = youberHero.hp + 5;
				rewardHp = 5;
			}else{}
			cardArray = cardArray2;
			this.setState({
				rewardCards: [],
				rewardGems: [],
				rewardHp: rewardHp,
				extraItem: extraItem
			}, () => {
				this.levelRewards(rewardTier);
			});
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
	levelRewards(rewardTier){
		var levelCard = this.props.supCardRewards;
		var neutralCards = [];
		for(var i=1; i<21; i++){
			var neutralCard = eval('neutral' + i);
			neutralCards.push(neutralCard);
		}
		if(level === 0){
			levelCard = [neutral2, neutral3, neutral4, neutral5, neutral6];
		}else if(this.props.prizeChoice === "cards" || levelsBeaten.length === 1){
			for(var i=0; i<rewardTier; i++){
				for(var j=0; j<neutralCards.length; j++){
					shuffle(neutralCards);
					var randNum = Math.floor(Math.random() * 101);
					if(randNum < 50){
						if(neutralCards[j].rarity === 1){
							if((neutralCards[j].ownedNum + neutralCards[j].deckNum) >=4){
							}else{
								levelCard.push(neutralCards[j])
								break;
							}
						}else{}
					}else if(randNum > 50 && randNum < 85){
						if(neutralCards[j].rarity === 2){
							if((neutralCards[j].ownedNum + neutralCards[j].deckNum) >=4){
							}else{
								levelCard.push(neutralCards[j])
								break;
							}
						}else{}
					}else{
						if(neutralCards[j].rarity === 3){
							if((neutralCards[j].ownedNum + neutralCards[j].deckNum) >=4){
							}else{
								levelCard.push(neutralCards[j])
								break;
							}
						}else{}
					}
				}
			}
		}else{}
		var levelGems = this.props.supGemRewards;
		var levelGemsNum = rewardTier;
		var gemType;
		if(level.includes("Temple")){
			var gemSlice = level.slice(0, -6);
			gemType = eval(gemSlice + "Gem");
		}else{
			gemType = eval(level + "Gem");
		}
		if(this.props.prizeChoice === "orbs" || levelsBeaten.length === 2){
			for(var i=0; i<levelGemsNum; i++){
				levelGems.push(gemType);
			}
		}else{}
		if(level === 0){
		}else{
			for(var i=0; i<levelGems.length; i++){
				elementOrbs.push(levelGems[i]);
			}
		}
		if(this.props.obelisk >= 15 && this.props.obelisk < 30){
			var factionArray = ["earth", "fire", "water", "wind"];
			var randFaction = Math.floor(Math.random() * 3);
			var randNum = Math.floor(Math.random() * 20) + 1;
			var newCard = eval(factionArray[randFaction] + randNum);
			levelCard.push(newCard);
		}else if(this.props.obelisk >= 30 && this.props.obelisk < 45){
			for(var i=0; i<2; i++){
				var factionArray = [earth, fire, water, wind];
				var randFaction = Math.floor(Math.random() * 3);
				levelGems.push(factionArray[randFaction]);
			}
		}else if(this.props.obelisk >= 45 && this.props.obelisk < 60){
			var factionArray = ["desert", "lava", "mud", "storm"];
			var randFaction = Math.floor(Math.random() * 3);
			var randNum = Math.floor(Math.random() * 20) + 1;
			var newCard = eval(factionArray[randFaction] + randNum);
			levelCard.push(newCard);
		}else if(this.props.obelisk >= 60){
			for(var i=0; i<2; i++){
				var factionArray = [desert, lava, mud, storm];
				var randFaction = Math.floor(Math.random() * 3);
				levelGems.push(factionArray[randFaction]);
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
					levelCard[i].unlocked = true;
					levelCard[i].ownedNum ++;
				}else{
					var a = collectionArray.findIndex(x => x.name === levelCard[i].name);
					collectionArray[a].ownedNum ++;
					collectionArray[a].unlocked = true;
				}
			}
		}else{}
	}
	listCardRewards(){
		var cards = this.state.rewardCards;
		if(cards === null){
		}else{
			const listCardRewards = cards.map((card, index) =>
				<CollectionCard className={card.alignment} key={index} id={index} ability={card.ability1} icon={card.icon} faction={card.faction} name={card.name} type={card.type} rarity={card.rarity} cost={card.cost} power={card.power} text={card.text} image={card.image} handleDrop={(name) => this.addToDeck(card.name)} />
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
				<audio className="victoryMusic">
		          <source src={victory}></source>
		        </audio>
				<div className="row" id="rewardsMessage">Congratulations! Claim your rewards!</div>
				<div className="row" id="rewardsDescription">Score: {this.props.score}</div>
				<div className="row">
					{ this.state.rewardCards ? <div className="col-xs-offset-2 col-xs-8" id="cardRewardRow">
						{this.listCardRewards()}
					</div> : null }
				</div>
				<div className="row">
					{ this.state.rewardGems ? <div className="col-xs-offset-2 col-xs-4" id="gemRewardRow">
						{this.listGemRewards()}
					</div> : null}
					<div className="col-xs-4" id="hpRewardRow"><img src={heart} className="heartIcon" alt="heartIcon" />+{this.state.rewardHp}</div>
				</div>
				<div className="row">
					{this.state.extraItem ? <img src={this.state.extraItem} alt="extraItem" id="extraItemImg" /> : null }
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
			deckSize: 0,
			craftTreeScreen: false,
			craftTree: [],
			sortArray: []

		}
		this.listCollection = this.listCollection.bind(this);
		this.listCurrentDeck = this.listCurrentDeck.bind(this);
		this.showCraftTree = this.showCraftTree.bind(this);
		this.hideCraftTree = this.hideCraftTree.bind(this);
		this.handleSortClick = this.handleSortClick.bind(this);
	}
	componentDidMount(){
		collectionArray = [];
		for(var i=0; i<9; i++){
			var cardTypeArray = ["neutral", "earth", "fire", "water", "wind", "desert", "lava", "mud", "storm"];
			for(var j=1; j<30; j++){
				if(cardTypeArray[i] === "neutral" && j > 20){

				}else{	
					var pushCard = eval(cardTypeArray[i] + j);
					collectionArray.push(pushCard);
				}
			}
		}
		collectionArray.push(spooky1);
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
		if(card.ownedNum === 0){
			this.props.error("No More Copies");
		}else{
			if(cardArray.length > 0){
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
					card.ownedNum --;
				}else{
					card.deckNum ++;
					card.ownedNum --;
				}
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
				card.ownedNum --;
			}
		}
	}
	removeFromDeck(card) {
		if(card.deckNum > 1){
			card.deckNum --;
			card.ownedNum ++;
		}else{
			for(var i=0; i < cardArray.length; i++){
				if(card.name === cardArray[i].name){
					card.deckNum = 0;
					card.ownedNum ++;
					cardArray.splice(i, 1);
					this.setState({
						currentDeck: cardArray
					});
					break;
				}
			}
		}
	}
	showCraftTree(craftNum){
		var craftTree = [];
		var show;
		if(craftNum > 0){
			if(this.state.craftTreeScreen === true){
				show = false;
			}else{
				show = true;
			}
			craftTree.push(eval("neutral" + craftNum));
			if(eval("fire" + craftNum).unlocked === true || levelsBeaten.includes("fire") || levelsBeaten.includes("desert") || levelsBeaten.includes("lava")){
				craftTree.push(eval("fire" + craftNum));
			}else{
				craftTree.push(fire99);
			}
			if(eval("earth" + craftNum).unlocked === true || levelsBeaten.includes("earth") || levelsBeaten.includes("lava") || levelsBeaten.includes("mud")){
				craftTree.push(eval("earth" + craftNum));
			}else{
				craftTree.push(earth99);
			}
			if(eval("water" + craftNum).unlocked === true || levelsBeaten.includes("water") || levelsBeaten.includes("mud") || levelsBeaten.includes("storm")){
				craftTree.push(eval("water" + craftNum));
			}else{
				craftTree.push(water99);
			}
			if(eval("wind" + craftNum).unlocked === true || levelsBeaten.includes("wind") || levelsBeaten.includes("desert") || levelsBeaten.includes("storm")){
				craftTree.push(eval("wind" + craftNum));
			}else{
				craftTree.push(wind99);
			}
			if(eval("lava" + craftNum).unlocked === true || levelsBeaten.includes("lava")){
				craftTree.push(eval("lava" + craftNum));
			}else{
				craftTree.push(lava99);
			}
			if(eval("desert" + craftNum).unlocked === true || levelsBeaten.includes("desert")){
				craftTree.push(eval("desert" + craftNum));
			}else{
				craftTree.push(desert99);
			}
			if(eval("mud" + craftNum).unlocked === true || levelsBeaten.includes("mud")){
				craftTree.push(eval("mud" + craftNum));
			}else{
				craftTree.push(mud99);
			}
			if(eval("storm" + craftNum).unlocked === true || levelsBeaten.includes("storm")){
				craftTree.push(eval("storm" + craftNum));
			}else{
				craftTree.push(storm99);
			}
		}else{
			this.props.error("Monster Cards Don't Change");
		}
		this.setState({
			craftTreeScreen: show,
			craftTree: craftTree
		});

	}
	hideCraftTree(){
		this.setState({
			craftTreeScreen: false
		});
	}
	listCollection() {
		var cards = collectionArray;
		var checkSort = this.state.sortArray;
		const listCollection = cards.map((card, index) => {
			if(card.deckNum === 0 & card.ownedNum === 0){

			}else if(((checkSort.includes(card.icon) === true && checkSort.length >= 1) || (checkSort.length === 0))) {
				return <CollectionCard className={card.alignment} key={index} id={index} craft={card.craft} showCraftTree={this.showCraftTree} image={card.image} numberOwned={card.ownedNum} ability={card.ability1} icon={card.icon} faction={card.faction} name={card.name} type={card.type} cost={card.cost} power={card.power} text={card.text} rarity={card.rarity} handleDrop={(name) => this.addToDeck(card)} />
			}
		});
		return (
			<div>{listCollection}</div>
		)
	}
	listCurrentDeck() {
		var cards = this.state.currentDeck;
		var deckNumber = 0;
		for(var i=0; i<cards.length; i++){
			deckNumber = deckNumber + cards[i].deckNum;
		}
		this.setState({
			deckSize: deckNumber
		});
		const listDeck = cards.map((card, index) =>
			<CollectionCard2 className={card.alignment + "2"} key={index} deckNum={card.deckNum} faction={card.faction} icon={card.icon} ability={card.ability1} card={card} id={index} name={card.name} type={card.type} cost={card.cost} power={card.power} text={card.text} rarity={card.rarity} image={card.image} handleDrop={(name) => this.removeFromDeck(card)} />
		);
		return (
			<div>{listDeck}</div>
		)
	}
	handleSortClick(element){
		var newSortArray = this.state.sortArray;
		if(newSortArray.includes(element) === true){
			for(var i=0; i<newSortArray.length; i++){
				if(newSortArray[i] === element){
					newSortArray.splice(i, 1);
					document.getElementById(element).classList.remove("activeSortOrb");
					this.setState({
						sortArray: newSortArray
					});
				}else{}
			}
		}else{
			newSortArray.push(element);
			document.getElementById(element).classList.add("activeSortOrb");
			this.setState({
				sortArray: newSortArray
			});
		}
	}
	listSortOrbs() {
		var sortList = [placeholderImg, earth, fire, water, wind, desert, lava, mud, storm];
		const listSortOrbs = sortList.map((orb, index) =>
			<SortOrb  key={index} element={orb} sortClick={this.handleSortClick} />
		);
		return (
			<div>{listSortOrbs}</div>
		)
	}
	render() {
		return (
			<div className="col-xs-12">
			{ this.state.craftTreeScreen === true &&
				<div className="row" id="craftTreeDisplay" onClick={this.hideCraftTree}>
					<div className="col-xs-offset-3 col-xs-9">
						<div className="row">
							<div id="desertCraftTree">
								<CollectionCard className={this.state.craftTree[6].alignment} showCraftTree={this.showCraftTree} craft={this.state.craftTree[6].craft} ability={this.state.craftTree[6].ability1} icon={this.state.craftTree[6].icon} faction={this.state.craftTree[6].faction} name={this.state.craftTree[6].name} type={this.state.craftTree[6].type} cost={this.state.craftTree[6].cost} power={this.state.craftTree[6].power} text={this.state.craftTree[6].text} rarity={this.state.craftTree[6].rarity} />
							</div>
							<div id="fireCraftTree">
								<CollectionCard className={this.state.craftTree[1].alignment} showCraftTree={this.showCraftTree} craft={this.state.craftTree[1].craft} ability={this.state.craftTree[1].ability1} icon={this.state.craftTree[1].icon} faction={this.state.craftTree[1].faction} name={this.state.craftTree[1].name} type={this.state.craftTree[1].type} cost={this.state.craftTree[1].cost} power={this.state.craftTree[1].power} text={this.state.craftTree[1].text} rarity={this.state.craftTree[1].rarity} />
							</div>
							<div id="lavaCraftTree">
								<CollectionCard className={this.state.craftTree[5].alignment} showCraftTree={this.showCraftTree} craft={this.state.craftTree[5].craft} ability={this.state.craftTree[5].ability1} icon={this.state.craftTree[5].icon} faction={this.state.craftTree[5].faction} name={this.state.craftTree[5].name} type={this.state.craftTree[5].type} cost={this.state.craftTree[5].cost} power={this.state.craftTree[5].power} text={this.state.craftTree[5].text} rarity={this.state.craftTree[5].rarity} />
							</div>
						</div>
						<div className="row">
							<div id="windCraftTree">
								<CollectionCard className={this.state.craftTree[4].alignment} showCraftTree={this.showCraftTree} craft={this.state.craftTree[4].craft} ability={this.state.craftTree[4].ability1} icon={this.state.craftTree[4].icon} faction={this.state.craftTree[4].faction} name={this.state.craftTree[4].name} type={this.state.craftTree[4].type} cost={this.state.craftTree[4].cost} power={this.state.craftTree[4].power} text={this.state.craftTree[4].text} rarity={this.state.craftTree[4].rarity} />
							</div>
							<div id="neutralCraftTree">
								<CollectionCard className={this.state.craftTree[0].alignment} showCraftTree={this.showCraftTree} craft={this.state.craftTree[0].craft} ability={this.state.craftTree[0].ability1} icon={this.state.craftTree[0].icon} faction={this.state.craftTree[0].faction} name={this.state.craftTree[0].name} type={this.state.craftTree[0].type} cost={this.state.craftTree[0].cost} power={this.state.craftTree[0].power} text={this.state.craftTree[0].text} rarity={this.state.craftTree[0].rarity} />
							</div>
							<div id="earthCraftTree">
								<CollectionCard className={this.state.craftTree[2].alignment} showCraftTree={this.showCraftTree} craft={this.state.craftTree[2].craft} ability={this.state.craftTree[2].ability1} icon={this.state.craftTree[2].icon} faction={this.state.craftTree[2].faction} name={this.state.craftTree[2].name} type={this.state.craftTree[2].type} cost={this.state.craftTree[2].cost} power={this.state.craftTree[2].power} text={this.state.craftTree[2].text} rarity={this.state.craftTree[2].rarity} />
							</div>
						</div>
						<div className="row">
							<div id="stormCraftTree">
								<CollectionCard className={this.state.craftTree[8].alignment} showCraftTree={this.showCraftTree} craft={this.state.craftTree[8].craft} ability={this.state.craftTree[8].ability1} icon={this.state.craftTree[8].icon} faction={this.state.craftTree[8].faction} name={this.state.craftTree[8].name} type={this.state.craftTree[8].type} cost={this.state.craftTree[8].cost} power={this.state.craftTree[8].power} text={this.state.craftTree[8].text} rarity={this.state.craftTree[8].rarity} />
							</div>
							<div id="waterCraftTree">
								<CollectionCard className={this.state.craftTree[3].alignment} showCraftTree={this.showCraftTree} craft={this.state.craftTree[3].craft} ability={this.state.craftTree[3].ability1} icon={this.state.craftTree[3].icon} faction={this.state.craftTree[3].faction} name={this.state.craftTree[3].name} type={this.state.craftTree[3].type} cost={this.state.craftTree[3].cost} power={this.state.craftTree[3].power} text={this.state.craftTree[3].text} rarity={this.state.craftTree[3].rarity} />
							</div>
							<div id="mudCraftTree">
								<CollectionCard className={this.state.craftTree[7].alignment} showCraftTree={this.showCraftTree} craft={this.state.craftTree[7].craft} ability={this.state.craftTree[7].ability1} icon={this.state.craftTree[7].icon} faction={this.state.craftTree[7].faction} name={this.state.craftTree[7].name} type={this.state.craftTree[7].type} cost={this.state.craftTree[7].cost} power={this.state.craftTree[7].power} text={this.state.craftTree[7].text} rarity={this.state.craftTree[7].rarity} />
							</div>
						</div>
					</div>
				</div>
			}
				<div className="row">
					<button className="col-xs-1 coolButton goBackButton" onClick={this.props.checkDeckContents}>Back</button>
					<button className="col-xs-offset-3 col-xs-2" id="craftingButton" onClick={this.props.goToCraftingScreen}>Crafting</button>
					<div className="col-xs-offset-5 col-xs-1 infoButton" id="infoButton" onClick={this.props.toggleInfoScreen}>?</div>
				</div>
				<div className="row">
					<div className="col-xs-3 deckTitle">Collection</div>
					<div className="col-xs-7">
						<div className="row">
							{/*this.listSortOrbs()*/}
						</div>
					</div>
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

class SortOrb extends React.Component {
  render() {
    return (
       <img className="sortOrbImg" id={this.props.element} src={this.props.element} alt="orb" onClick={() => { this.props.sortClick(this.props.element)}} />
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
				if(collectionArray[a].deckNum > 0){
					collectionArray[a].deckNum --;
				}else{
					collectionArray[a].ownedNum --;
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
				}else{
					var c = collectionArray.findIndex(x => x.name === newCard.name);
					collectionArray[c].deckNum ++;
					collectionArray[c].unlocked = true;
				}
				/*var b = cardArray.findIndex(x => x.name === craftedCard.name);
				cardArray.splice(a, 1);
				cardArray.push(newCard);*/
				var cardType = 1;
				var element1 = [];
				if(newCard.icon === desert && craftedCard.icon === placeholderImg){
					cardType = 2;
					if(elementOrbs.includes(desert) === true){
						element1 = [desert];
					}else{
						element1 = [fire, wind];
					}
				}else if(newCard.icon === lava && craftedCard.icon === placeholderImg){
					cardType = 2;
					if(elementOrbs.includes(lava) === true){
						element1 = [lava];
					}else{
						element1 = [earth, fire];
					}
				}else if(newCard.icon === mud && craftedCard.icon === placeholderImg){
					cardType = 2;
					if(elementOrbs.includes(mud) === true){
						element1 = [mud];
					}else{
						element1 = [earth, water];
					}
				}else if(newCard.icon === storm && craftedCard.icon === placeholderImg){
					cardType = 2;
					if(elementOrbs.includes(storm) === true){
						element1 = [storm];
					}else{
						element1 = [water, wind];
					}
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
		if(this.state.element[1] === "neutral"){
		}else{
			var resetCard = this.state.resetCard;
			this.setState({
				element: [resetCard.icon, resetCard.faction],
				card: resetCard
			});
		}
	}
	listCardFrames() {
		var multipleFrames = collectionArray;
		const listFrames = multipleFrames.map((card, index) => {
			if(card.type === "support" || (card.ownedNum === 0 && card.deckNum === 0) || card.faction === "desert" || card.faction === "lava" || card.faction === "mud" || card.faction === "storm") {
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
		var newElement = this.state.element;
		if(this.state.card.faction === "lava" || this.state.card.faction === "desert" || this.state.card.faction === "mud" || this.state.card.faction === "storm"){
			console.log("Can't Upgrade Further");
		}else if(this.state.card.faction === "neutral"){
			if(element === fire){
					newElement = [fire, "fire"];
			}else if(element === wind){
				newElement = [wind, "wind"];
			}else if(element === water){
				newElement = [water, "water"];
			}else if(element === earth){
				newElement = [earth, "earth"];
			}else if(element === desert){
				newElement = [desert, "desert"];
			}else if(element === lava){
				newElement = [lava, "lava"];
			}else if(element === mud){
				newElement = [mud, "mud"];
			}else if(element === storm){
				newElement = [storm, "storm"];
			}
		}else{
			if(this.state.element[0] === fire){
				if(element === earth){
					newElement = [lava, "lava"];
				}else if(element === wind){
					newElement = [desert, "desert"];
				}else if(element === desert){
					newElement = [desert, "desert"];
				}else if(element === lava){
					newElement = [lava, "lava"];
				}else{
					newElement = [fire, "fire"];
				}
			}else if(this.state.element[0] === earth){
				if(element === fire){
					newElement = [lava, "lava"];
				}else if (element === water){
					newElement = [mud, "mud"];
				}else if(element === lava){
					newElement = [lava, "lava"];
				}else if(element === mud){
					newElement = [mud, "mud"];
				}else{
					newElement = [earth, "earth"];
				}
			}else if(this.state.element[0] === wind){
				if(element === fire){
					newElement = [desert, "desert"];
				}else if(element === water){
					newElement = [storm, "storm"];
				}else if(element === desert){
					newElement = [desert, "desert"];
				}else if(element === storm){
					newElement = [storm, "storm"];
				}else{
					newElement = [wind, "wind"];
				}
			}else if(this.state.element[0] === water){
				if(element === wind){
					newElement = [storm, "storm"];
				}else if(element === earth){
					newElement = [mud, "mud"];
				}else if(element === mud){
					newElement = [mud, "mud"];
				}else if(element === storm){
					newElement = [storm, "storm"];
				}else{
					newElement = [water, "water"];
				}
			}else if(element === this.state.card.icon){
				newElement = [this.state.card.icon, this.state.card.faction];
			}
		}
		this.setState({
			element: newElement
		});
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
								<FrameTarget className={this.state.card.alignment} faction={this.state.element[1]} name={this.state.card.name} text={this.state.card.text} cost={this.state.card.cost} power={this.state.card.power} element={this.state.element[0]} />
							</div>
						</div>
						<div className="col-xs-3">
							<div className="row createTitle">Element Gems</div>
							{this.listElementOrbs()}
						</div>
					</div>
					<div className="row craftingButtonRow">
						<button className="col-xs-offset-5 col-xs-1 coolButton" onClick={this.handleCraftClick}>Craft</button><button className="col-xs-1 coolButton" onClick={this.handleResetClick}>Reset</button>
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
					<div className="row">
						<input className="col-xs-6" type="text" id="saveName"></input>
						<div className="col-xs-2">
							<button className="coolButton" onClick={this.props.writeUserData}>Save</button>
						</div>
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