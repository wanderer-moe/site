'use strict';

var name = "Emblem of Severed Fate";
var rarity = [
	"4",
	"5"
];
var flower = {
	name: "Magnificent Tsuba",
	relictype: "Flower of Life",
	description: "Legends hold that this ornate hand guard was once fitted upon a sword gifted to the oni who betrayed the Shogun."
};
var plume = {
	name: "Sundered Feather",
	relictype: "Plume of Death",
	description: "This was once the black feather of a certain tengu warrior, and was the treasured souvenir of an ancient swordsman."
};
var sands = {
	name: "Storm Cage",
	relictype: "Sands of Eon",
	description: "An exquisite seal cage patterned with pansies painted upon a black backdrop, decorated with shining inlaid seashells and intricate gold-work."
};
var goblet = {
	name: "Scarlet Vessel",
	relictype: "Goblet of Eonothem",
	description: "An intricately-designed wine vessel that a world-famous martial artist once drank from."
};
var circlet = {
	name: "Ornate Kabuto",
	relictype: "Circlet of Logos",
	description: "A sturdy and hard helmet worn as armor by a noble samurai."
};
var emblemOfSeveredFate = {
	name: name,
	rarity: rarity,
	"2pc": "Energy Recharge +20%",
	"4pc": "Increases Elemental Burst DMG by 25% of Energy Recharge. A maximum of 75% bonus DMG can be obtained in this way.",
	flower: flower,
	plume: plume,
	sands: sands,
	goblet: goblet,
	circlet: circlet
};

exports.circlet = circlet;
exports["default"] = emblemOfSeveredFate;
exports.flower = flower;
exports.goblet = goblet;
exports.name = name;
exports.plume = plume;
exports.rarity = rarity;
exports.sands = sands;
