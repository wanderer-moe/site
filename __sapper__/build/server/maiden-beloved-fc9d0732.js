'use strict';

var name = "Maiden Beloved";
var rarity = [
	"4",
	"5"
];
var flower = {
	name: "Maiden's Distant Love",
	relictype: "Flower of Life",
	description: "A fragrant flower that will bloom for all eternity and never wither."
};
var plume = {
	name: "Maiden's Heart-stricken Infatuation",
	relictype: "Plume of Death",
	description: "A feathered accessory that carries the longing for a certain someone, like a migratory bird on the wind."
};
var sands = {
	name: "Maiden's Passing Youth",
	relictype: "Sands of Eon",
	description: "The hands of time will never come to an end, but the same cannot not be said for those cherished years of the young maiden's life when she was doted upon."
};
var goblet = {
	name: "Maiden's Fleeting Leisure",
	relictype: "Goblet of Eonothem",
	description: "A vessel made with sweet black tea in mind rather than bitter liquor."
};
var circlet = {
	name: "Maiden's Fading Beauty",
	relictype: "Circlet of Logos",
	description: "A meticulously well-maintained woman's hat that keeps wrinkles safely out of sight."
};
var maidenBeloved = {
	name: name,
	rarity: rarity,
	"2pc": "Character Healing Effectiveness +15%",
	"4pc": "Using an Elemental Skill or Burst increases healing received by all party members by 20% for 10s.",
	flower: flower,
	plume: plume,
	sands: sands,
	goblet: goblet,
	circlet: circlet
};

exports.circlet = circlet;
exports["default"] = maidenBeloved;
exports.flower = flower;
exports.goblet = goblet;
exports.name = name;
exports.plume = plume;
exports.rarity = rarity;
exports.sands = sands;
