'use strict';

var name = "Tiny Miracle";
var rarity = [
	"3",
	"4"
];
var flower = {
	name: "Tiny Miracle's Flower",
	relictype: "Flower of Life",
	description: "A flower that grew from a rock, breaking through the stone as it strove to reach the light."
};
var plume = {
	name: "Tiny Miracle's Feather",
	relictype: "Plume of Death",
	description: "A feather from a bird of prey that flies almost too fast for the human eye to detect."
};
var sands = {
	name: "Tiny Miracle's Hourglass",
	relictype: "Sands of Eon",
	description: "Just an ordinary, everyday hourglass. Turn it upside down and sure enough, the dry sand starts trickling down like water."
};
var goblet = {
	name: "Tiny Miracle's Goblet",
	relictype: "Goblet of Eonothem",
	description: "A cup commonly used for fortune-telling. It can also hold water, of course."
};
var circlet = {
	name: "Tiny Miracle's Earrings",
	relictype: "Circlet of Logos",
	description: "A cheap accessory that is actually made from ancient meteoric ore."
};
var tinyMiracle = {
	name: name,
	rarity: rarity,
	"2pc": "All Elemental RES increased by 20%.",
	"4pc": "Incoming elemental DMG increases corresponding Elemental RES by 30% for 10s. Can only occur once every 10s.",
	flower: flower,
	plume: plume,
	sands: sands,
	goblet: goblet,
	circlet: circlet
};

exports.circlet = circlet;
exports["default"] = tinyMiracle;
exports.flower = flower;
exports.goblet = goblet;
exports.name = name;
exports.plume = plume;
exports.rarity = rarity;
exports.sands = sands;
