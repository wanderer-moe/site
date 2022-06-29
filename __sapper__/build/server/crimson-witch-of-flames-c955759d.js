'use strict';

var name = "Crimson Witch of Flames";
var rarity = [
	"4",
	"5"
];
var flower = {
	name: "Witch's Flower of Blaze",
	relictype: "Flower of Life",
	description: "A flower touched by the witch who once dreamt of burning away all the demons in the world. The anonymous flames affectionately caress the hands of those who touch it."
};
var plume = {
	name: "Witch's Ever-Burning Plume",
	relictype: "Plume of Death",
	description: "A bird feather touched by the witch who once dreamt of burning away all the demons in the world. Its eternal flame burns hot."
};
var sands = {
	name: "Witch's End Time",
	relictype: "Sands of Eon",
	description: "A timepiece worn by the witch who dreamt of burning away all the demons in the world. The years the witch dedicated to the flames flow within."
};
var goblet = {
	name: "Witch's Heart Flames",
	relictype: "Goblet of Eonothem",
	description: "A flame-spitting urn left behind by the Crimson Witch of Flames, who once dreamt of burning away all the demons in the world. The fire in the urn burns eternally, as did its former master."
};
var circlet = {
	name: "Witch's Scorching Hat",
	relictype: "Circlet of Logos",
	description: "A hat once worn by the witch who dreamt of burning away all of the demons in the world. The large brim blocked her sight."
};
var crimsonWitchOfFlames = {
	name: name,
	rarity: rarity,
	"2pc": "Pyro DMG Bonus +15%",
	"4pc": "Increases Overloaded and Burning DMG by 40%. Increases Vaporize and Melt DMG by 15%. Using Elemental Skill increases the 2-Piece Set Bonus by 50% of its starting value for 10s. Max 3 stacks.",
	flower: flower,
	plume: plume,
	sands: sands,
	goblet: goblet,
	circlet: circlet
};

exports.circlet = circlet;
exports["default"] = crimsonWitchOfFlames;
exports.flower = flower;
exports.goblet = goblet;
exports.name = name;
exports.plume = plume;
exports.rarity = rarity;
exports.sands = sands;
