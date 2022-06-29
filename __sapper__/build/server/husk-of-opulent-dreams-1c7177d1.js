'use strict';

var name = "Husk of Opulent Dreams";
var rarity = [
	"4",
	"5"
];
var flower = {
	name: "Bloom Times",
	relictype: "Flower of Life",
	description: "A small golden ornament with six petals that shall never wilt. It symbolizes the transience of mortal glories."
};
var plume = {
	name: "Plume of Luxury",
	relictype: "Plume of Death",
	description: "A feather-shaped token that was brought forth from a secluded hall. The compassion of its creator led to it being left within that mansion along with a certain slumbering form."
};
var sands = {
	name: "Song of Life",
	relictype: "Sands of Eon",
	description: "As far as Inazuma is concerned, this is some small object from overseas. The heart of this mechanism has been removed, and its hands no longer turn."
};
var goblet = {
	name: "Calabash of Awakening",
	relictype: "Goblet of Eonothem",
	description: "A gourd that has been adorned with powdered gold and black paint. Its original color can no longer be discerned, but its main use seems to be as a performance prop."
};
var circlet = {
	name: "Skeletal Hat",
	relictype: "Circlet of Logos",
	description: "A hat that once shielded a wanderer from sun and rain. It eventually became a convenient tool with which faces might be hidden and expressions obscured."
};
var huskOfOpulentDreams = {
	name: name,
	rarity: rarity,
	"2pc": "DEF +30%",
	"4pc": "A character equipped with this Artifact set will obtain the Curiosity effect in the following conditions: When on the field, the character gains 1 stack after hitting an opponent with a Geo attack, triggering a maximum of once every 0.3s. When off the field, the character gains 1 stack every 3s. Curiosity can stack up to 4 times, each providing 6% DEF and a 6% Geo DMG Bonus. When 6 seconds pass without gaining a Curiosity stack, 1 stack is lost.",
	flower: flower,
	plume: plume,
	sands: sands,
	goblet: goblet,
	circlet: circlet
};

exports.circlet = circlet;
exports["default"] = huskOfOpulentDreams;
exports.flower = flower;
exports.goblet = goblet;
exports.name = name;
exports.plume = plume;
exports.rarity = rarity;
exports.sands = sands;
