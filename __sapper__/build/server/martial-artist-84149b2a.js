'use strict';

var name = "Martial Artist";
var rarity = [
	"3",
	"4"
];
var flower = {
	name: "Martial Artist's Red Flower",
	relictype: "Flower of Life",
	description: "This particular kind of red flower was the only thing that could alleviate the Martial Artist's pain."
};
var plume = {
	name: "Martial Artist's Feather Accessory",
	relictype: "Plume of Death",
	description: "A common bird feather. Experts use it to practice strength control, while rookies use it to make fans."
};
var sands = {
	name: "Martial Artist's Water Hourglass",
	relictype: "Sands of Eon",
	description: "A tool to keep track of time in endurance training. It is more accurate and reliable than a regular hourglass."
};
var goblet = {
	name: "Martial Artist's Wine Cup",
	relictype: "Goblet of Eonothem",
	description: "A rather exquisite wine cup used in pre-combat rituals."
};
var circlet = {
	name: "Martial Artist's Bandana",
	relictype: "Circlet of Logos",
	description: "The first lesson as an apprentice: Vigor, Strength, Will. These words are written on the bandana so you'll never forget them."
};
var martialArtist = {
	name: name,
	rarity: rarity,
	"2pc": "Increases Normal Attack and Charged Attack DMG by 15%.",
	"4pc": "After using Elemental Skill, increases Normal Attack and Charged Attack DMG by 25% for 8s.",
	flower: flower,
	plume: plume,
	sands: sands,
	goblet: goblet,
	circlet: circlet
};

exports.circlet = circlet;
exports["default"] = martialArtist;
exports.flower = flower;
exports.goblet = goblet;
exports.name = name;
exports.plume = plume;
exports.rarity = rarity;
exports.sands = sands;
