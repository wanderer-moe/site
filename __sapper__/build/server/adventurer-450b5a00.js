'use strict';

var name = "Adventurer";
var rarity = [
	"1",
	"2",
	"3"
];
var flower = {
	name: "Adventurer's Flower",
	relictype: "Flower of Life",
	description: "A resilient flower that survived the harsh environment of an ancient city. It is now proudly worn like a medal."
};
var plume = {
	name: "Adventurer's Tail Feather",
	relictype: "Plume of Death",
	description: "The feather of an exotic bird rarely seen on this continent."
};
var sands = {
	name: "Adventurer's Pocket Watch",
	relictype: "Sands of Eon",
	description: "It's easy to lose track of time when you're adventuring where the sun doesn't shine, whether that's the depths of the abyss or the ruins of a lost city."
};
var goblet = {
	name: "Adventurer's Golden Goblet",
	relictype: "Goblet of Eonothem",
	description: "The spoils of one of an adventurer's many expeditions. Though a little damaged, it is still an excellent find."
};
var circlet = {
	name: "Adventurer's Bandana",
	relictype: "Circlet of Logos",
	description: "A cloth garment worn at the forehead. Though soaked in sweat and covered in dust, it still beams with an adventurer's pride."
};
var adventurer = {
	name: name,
	rarity: rarity,
	"2pc": "Max HP increased by 1000.",
	"4pc": "Opening a chest regenerates 30% Max HP over 5s.",
	flower: flower,
	plume: plume,
	sands: sands,
	goblet: goblet,
	circlet: circlet
};

exports.circlet = circlet;
exports["default"] = adventurer;
exports.flower = flower;
exports.goblet = goblet;
exports.name = name;
exports.plume = plume;
exports.rarity = rarity;
exports.sands = sands;
