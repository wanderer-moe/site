'use strict';

var name = "Instructor";
var rarity = [
	"3",
	"4"
];
var flower = {
	name: "Instructor's Brooch",
	relictype: "Flower of Life",
	description: "Whenever the instructor wore this brooch, it meant there would be no training sessions that day."
};
var plume = {
	name: "Instructor's Feather Accessory",
	relictype: "Plume of Death",
	description: "Any instructor who has mastered the art of de-escalation knows to keep this accessory firmly in their grasp at all times."
};
var sands = {
	name: "Instructor's Pocket Watch",
	relictype: "Sands of Eon",
	description: "A stopwatch used not for general timekeeping but to measure the duration of a training session."
};
var goblet = {
	name: "Instructor's Tea Cup",
	relictype: "Goblet of Eonothem",
	description: "It may seem like an ordinary tea cup to most. But to students, it is the symbol of the instructor's authority."
};
var circlet = {
	name: "Instructor's Cap",
	relictype: "Circlet of Logos",
	description: "A standard-issue honorary instructor's cap, only granted to those who turn down a promotion."
};
var instructor = {
	name: name,
	rarity: rarity,
	"2pc": "Increases Elemental Mastery by 80.",
	"4pc": "Upon triggering an Elemental Reaction, increases all party members' Elemental Mastery by 120 for 8s.",
	flower: flower,
	plume: plume,
	sands: sands,
	goblet: goblet,
	circlet: circlet
};

exports.circlet = circlet;
exports["default"] = instructor;
exports.flower = flower;
exports.goblet = goblet;
exports.name = name;
exports.plume = plume;
exports.rarity = rarity;
exports.sands = sands;
