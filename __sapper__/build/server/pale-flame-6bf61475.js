'use strict';

var name = "Pale Flame";
var rarity = [
	"4",
	"5"
];
var flower = {
	name: "Stainless Bloom",
	relictype: "Flower of Life",
	description: "A hard, blue artificial flower. Its petals shall never wither, nor shall its colors fade."
};
var plume = {
	name: "Wise Doctor's Pinion",
	relictype: "Plume of Death",
	description: "An ominous pinion with edges of unsurpassed keenness. Perhaps it represents an unnaturally uninhibited nature."
};
var sands = {
	name: "Moment of Cessation",
	relictype: "Sands of Eon",
	description: "A pocket watch with a cover that cannot be opened. Yet it ticks and tocks away, following the inexorable flow of time."
};
var goblet = {
	name: "Surpassing Cup",
	relictype: "Goblet of Eonothem",
	description: "An intricately-made cup. Its appearance betrays nothing of its age to an observer."
};
var circlet = {
	name: "Mocking Mask",
	relictype: "Circlet of Logos",
	description: "A mask that covers the face, hiding one's expression from others."
};
var paleFlame = {
	name: name,
	rarity: rarity,
	"2pc": "Physical DMG is increased by 25%.",
	"4pc": "When an Elemental Skill hits an opponent, ATK is increased by 9% for 7s. This effect stacks up to 2 times and can be triggered once every 0.3s. Once 2 stacks are reached, the 2-set effect is increased by 100%.",
	flower: flower,
	plume: plume,
	sands: sands,
	goblet: goblet,
	circlet: circlet
};

exports.circlet = circlet;
exports["default"] = paleFlame;
exports.flower = flower;
exports.goblet = goblet;
exports.name = name;
exports.plume = plume;
exports.rarity = rarity;
exports.sands = sands;
