'use strict';

var name = "Resolution of Sojourner";
var rarity = [
	"3",
	"4"
];
var flower = {
	name: "Heart of Comradeship",
	relictype: "Flower of Life",
	description: "A small cerulean flower with somebody's ribbon pinned to the stem."
};
var plume = {
	name: "Feather of Homecoming",
	relictype: "Plume of Death",
	description: "A blue arrow fletching imbued with the sentiment of travelers that had once faded into the horizon."
};
var sands = {
	name: "Sundial of the Sojourner",
	relictype: "Sands of Eon",
	description: "A sundial that has survived the ages, always silently recording the cycles of the sun and moon as they pass through the sky."
};
var goblet = {
	name: "Goblet of the Sojourner",
	relictype: "Goblet of Eonothem",
	description: "A plain porcelain goblet that was once brimming with joyous brews."
};
var circlet = {
	name: "Crown of Parting",
	relictype: "Circlet of Logos",
	description: "A reed coronet that emanates the spring breeze."
};
var resolutionOfSojourner = {
	name: name,
	rarity: rarity,
	"2pc": "ATK +18%.",
	"4pc": "Increases Charged Attack CRIT Rate by 30%.",
	flower: flower,
	plume: plume,
	sands: sands,
	goblet: goblet,
	circlet: circlet
};

exports.circlet = circlet;
exports["default"] = resolutionOfSojourner;
exports.flower = flower;
exports.goblet = goblet;
exports.name = name;
exports.plume = plume;
exports.rarity = rarity;
exports.sands = sands;
