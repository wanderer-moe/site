'use strict';

var name = "Ocean-Hued Clam";
var rarity = [
	"4",
	"5"
];
var flower = {
	name: "Sea-Dyed Blossom",
	relictype: "Flower of Life",
	description: "A soft flower that has taken on the many shades of the capricious ocean. It shines with wondrous colors under the moon's silver light."
};
var plume = {
	name: "Deep Palace's Plume",
	relictype: "Plume of Death",
	description: "A down feather with the same hue as coral, said to come from a shrine maiden's ceremonial garment."
};
var sands = {
	name: "Cowry of Parting",
	relictype: "Sands of Eon",
	description: "A clean, flawless seashell that comes from the bottomless ocean."
};
var goblet = {
	name: "Pearl Cage",
	relictype: "Goblet of Eonothem",
	description: "The shining pearls that the shrine maidens of Watatsumi Island offer up shine eternally and never dim."
};
var circlet = {
	name: "Crown of Watatsumi",
	relictype: "Circlet of Logos",
	description: "An ancient, intricate crown that was once used by a forgotten clergy member. Today, this relic has been enshrined with great ceremony by the people of Watatsumi."
};
var oceanHuedClam = {
	name: name,
	rarity: rarity,
	"2pc": "Healing Bonus +15%.",
	"4pc": "When the character equipping this artifact set heals a character in the party, a Sea-Dyed Foam will appear for 3 seconds, accumulating the amount of HP recovered from healing (including overflow healing). At the end of the duration, the Sea-Dyed Foam will explode, dealing DMG to nearby opponents based on 90% of the accumulated healing. (This DMG is calculated similarly to Reactions such as Electro-Charged, and Superconduct, but is not affected by Elemental Mastery, Character Levels, or Reaction DMG Bonuses). Only one Sea-Dyed Foam can be produced every 3.5 seconds. Each Sea-Dyed Foam can accumulate up to 30,000 HP (including overflow healing). There can be no more than one Sea-Dyed Foam active at any given time. This effect can still be triggered even when the character who is using this artifact set is not on the field.",
	flower: flower,
	plume: plume,
	sands: sands,
	goblet: goblet,
	circlet: circlet
};

exports.circlet = circlet;
exports["default"] = oceanHuedClam;
exports.flower = flower;
exports.goblet = goblet;
exports.name = name;
exports.plume = plume;
exports.rarity = rarity;
exports.sands = sands;
