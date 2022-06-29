'use strict';

var name = "Prayers to Springtime";
var rarity = [
	"3",
	"4"
];
var circlet = {
	name: "Tiara of Frost",
	relictype: "Circlet of Logos",
	description: "A tiara worn by those tasked with offering sacrifices in ancient times. Because it once weathered years of the icy cold, it possesses remarkable resistance."
};
var prayersToSpringtime = {
	name: name,
	rarity: rarity,
	"1pc": "Affected by Cryo for 40% less time.",
	circlet: circlet
};

exports.circlet = circlet;
exports["default"] = prayersToSpringtime;
exports.name = name;
exports.rarity = rarity;
