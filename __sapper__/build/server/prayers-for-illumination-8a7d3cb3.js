'use strict';

var name = "Prayers for Illumination";
var rarity = [
	"3",
	"4"
];
var circlet = {
	name: "Tiara of Flame",
	relictype: "Circlet of Logos",
	description: "A tiara worn by those tasked with offering sacrifices in ancient times. After being subjected to the dancing sacrificial flames year in and year out, it possesses remarkable resistance."
};
var prayersForIllumination = {
	name: name,
	rarity: rarity,
	"1pc": "Affected by Pyro for 40% less time.",
	circlet: circlet
};

exports.circlet = circlet;
exports["default"] = prayersForIllumination;
exports.name = name;
exports.rarity = rarity;
