'use strict';

var name = "Viridescent Venerer";
var rarity = [
	"4",
	"5"
];
var flower = {
	name: "In Remembrance of Viridescent Fields",
	relictype: "Flower of Life",
	description: "A wild flower that was once a ubiquitous sight in its homeland. It was picked by a hunter who wore it on their chest."
};
var plume = {
	name: "Viridescent Arrow Feather",
	relictype: "Plume of Death",
	description: "The fletching of an arrow that once pierced right through its prey, but somehow still remains spotless."
};
var sands = {
	name: "Viridescent Venerer's Determination",
	relictype: "Sands of Eon",
	description: "A wondrous instrument that a hunter once wore. It forever points towards their prey."
};
var goblet = {
	name: "Viridescent Venerer's Vessel",
	relictype: "Goblet of Eonothem",
	description: "A water pouch used by the Viridescent Venerer. Its capacity is much greater than one would expect."
};
var circlet = {
	name: "Viridescent Venerer's Diadem",
	relictype: "Circlet of Logos",
	description: "A proud crown that once belonged to the Viridescent Venerer. It is as lush and green as the breezes of the wild."
};
var viridescentVenerer = {
	name: name,
	rarity: rarity,
	"2pc": "Anemo DMG Bonus +15%",
	"4pc": "Increases Swirl DMG by 60%. Decreases opponent's Elemental RES to the element infused in the Swirl by 40% for 10s.",
	flower: flower,
	plume: plume,
	sands: sands,
	goblet: goblet,
	circlet: circlet
};

exports.circlet = circlet;
exports["default"] = viridescentVenerer;
exports.flower = flower;
exports.goblet = goblet;
exports.name = name;
exports.plume = plume;
exports.rarity = rarity;
exports.sands = sands;
