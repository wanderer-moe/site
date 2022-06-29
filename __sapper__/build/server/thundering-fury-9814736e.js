'use strict';

var name = "Thundering Fury";
var rarity = [
	"4",
	"5"
];
var flower = {
	name: "Thunderbird's Mercy",
	relictype: "Flower of Life",
	description: "A lightning-infused flower, somehow spared the fate of being trodden underfoot or reduced to ash by the furious purple fire, making it the sole survivor on the day of disaster."
};
var plume = {
	name: "Survivor of Catastrophe",
	relictype: "Plume of Death",
	description: "A lightning-charged feather that still flickers with the wrath of the Thunderbird's cruel retribution."
};
var sands = {
	name: "Hourglass of Thunder",
	relictype: "Sands of Eon",
	description: "The hourglass used to foretell the coming of the Thunderbird by the tribe that worshiped it. It has fallen into eternal silence now that the tribe is no more."
};
var goblet = {
	name: "Omen of Thunderstorm",
	relictype: "Goblet of Eonothem",
	description: "A ceremonial cup that holds the blood of the innocent. It is brimming with the thundering fury of the prayers that echo within."
};
var circlet = {
	name: "Thunder Summoner's Crown",
	relictype: "Circlet of Logos",
	description: "A crown once worn by an ancient shaman who worshiped the Thunderbird. The capricious beast remained unmoved by the shaman's devotion."
};
var thunderingFury = {
	name: name,
	rarity: rarity,
	"2pc": "Electro DMG Bonus +15%",
	"4pc": "Increases damage caused by Overloaded, Electro-Charged and Superconduct by 40%. Triggering such effects decreases Elemental Skill CD by 1s. Can only occur once every 0.8s.",
	flower: flower,
	plume: plume,
	sands: sands,
	goblet: goblet,
	circlet: circlet
};

exports.circlet = circlet;
exports["default"] = thunderingFury;
exports.flower = flower;
exports.goblet = goblet;
exports.name = name;
exports.plume = plume;
exports.rarity = rarity;
exports.sands = sands;
