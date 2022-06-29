'use strict';

var name = "Prayers for Wisdom";
var rarity = [
	"3",
	"4"
];
var circlet = {
	name: "Tiara of Thunder",
	relictype: "Circlet of Logos",
	description: "A tiara worn by those tasked with offering sacrifices in ancient times. Because it harkened to the call of thunder year in and year out, it possesses remarkable resistance."
};
var prayersForWisdom = {
	name: name,
	rarity: rarity,
	"1pc": "Affected by Electro for 40% less time.",
	circlet: circlet
};

exports.circlet = circlet;
exports["default"] = prayersForWisdom;
exports.name = name;
exports.rarity = rarity;
