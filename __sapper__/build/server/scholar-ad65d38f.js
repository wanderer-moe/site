'use strict';

var name = "Scholar";
var rarity = [
	"3",
	"4"
];
var flower = {
	name: "Scholar's Bookmark",
	relictype: "Flower of Life",
	description: "A dried flower used as a bookmark. It has absorbed the scent from the pages."
};
var plume = {
	name: "Scholar's Quill Pen",
	relictype: "Plume of Death",
	description: "A bird's feather that serves as a quill pen. The tip has long been stained black."
};
var sands = {
	name: "Scholar's Clock",
	relictype: "Sands of Eon",
	description: "A small desktop clock, whose former owner was a scholar sat in a windowless room buried in books. This was probably the only reference they had to the time of day."
};
var goblet = {
	name: "Scholar's Ink Cup",
	relictype: "Goblet of Eonothem",
	description: "Originally designed to hold drinking water, this cup was stained black after a scholar used it to wash their paint brushes."
};
var circlet = {
	name: "Scholar's Lens",
	relictype: "Circlet of Logos",
	description: "This corrective lens helped restore the vision of one whose eyes were damaged from intensive studying."
};
var scholar = {
	name: name,
	rarity: rarity,
	"2pc": "Energy Recharge +20%",
	"4pc": "Gaining Elemental Particles or Orbs gives 3 Energy to all party members who have a bow or a catalyst equipped. Can only occur once every 3s.",
	flower: flower,
	plume: plume,
	sands: sands,
	goblet: goblet,
	circlet: circlet
};

exports.circlet = circlet;
exports["default"] = scholar;
exports.flower = flower;
exports.goblet = goblet;
exports.name = name;
exports.plume = plume;
exports.rarity = rarity;
exports.sands = sands;
