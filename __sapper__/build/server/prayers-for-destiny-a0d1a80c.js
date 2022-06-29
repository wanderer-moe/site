'use strict';

var name = "Prayers for Destiny";
var rarity = [
	"3",
	"4"
];
var circlet = {
	name: "Tiara of Torrents",
	relictype: "Circlet of Logos",
	description: "A tiara worn by those tasked with offering sacrifices in ancient times. Because it was submerged in water year in and year out, it possesses remarkable resistance."
};
var prayersForDestiny = {
	name: name,
	rarity: rarity,
	"1pc": "Affected by Hydro for 40% less time.",
	circlet: circlet
};

exports.circlet = circlet;
exports["default"] = prayersForDestiny;
exports.name = name;
exports.rarity = rarity;
