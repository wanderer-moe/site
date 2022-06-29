'use strict';

var name = "Yae Miko";
var fullname = "Yae Miko";
var title = "Astute Amusement";
var description = "Lady Guuji of the Grand Narukami Shrine. Also serves as the editor-in-chief of Yae Publishing House. Unimaginable intelligence and cunning are hidden under her beautiful appearance.";
var rarity = "5";
var element = "Electro";
var weapontype = "Catalyst";
var substat = "CRIT Rate";
var gender = "Female";
var body = "LADY";
var association = "INAZUMA";
var region = "Inazuma";
var affiliation = "Grand Narukami Shrine";
var birthdaymmdd = "6/27";
var birthday = "June 27";
var constellation = "Divina Vulpes";
var cv = {
	english: "Ratana",
	chinese: "杜冥鸦",
	japanese: "佐倉綾音",
	korean: "Moon Yoo-jung"
};
var costs = {
	ascend1: [
		{
			name: "Mora",
			count: 20000
		},
		{
			name: "Vajrada Amethyst Sliver",
			count: 1
		},
		{
			name: "Sea Ganoderma",
			count: 3
		},
		{
			name: "Old Handguard",
			count: 3
		}
	],
	ascend2: [
		{
			name: "Mora",
			count: 40000
		},
		{
			name: "Vajrada Amethyst Fragment",
			count: 3
		},
		{
			name: "Dragonheir's False Fin",
			count: 2
		},
		{
			name: "Sea Ganoderma",
			count: 10
		},
		{
			name: "Old Handguard",
			count: 15
		}
	],
	ascend3: [
		{
			name: "Mora",
			count: 60000
		},
		{
			name: "Vajrada Amethyst Fragment",
			count: 6
		},
		{
			name: "Dragonheir's False Fin",
			count: 4
		},
		{
			name: "Sea Ganoderma",
			count: 20
		},
		{
			name: "Kageuchi Handguard",
			count: 12
		}
	],
	ascend4: [
		{
			name: "Mora",
			count: 80000
		},
		{
			name: "Vajrada Amethyst Chunk",
			count: 3
		},
		{
			name: "Dragonheir's False Fin",
			count: 8
		},
		{
			name: "Sea Ganoderma",
			count: 30
		},
		{
			name: "Kageuchi Handguard",
			count: 18
		}
	],
	ascend5: [
		{
			name: "Mora",
			count: 100000
		},
		{
			name: "Vajrada Amethyst Chunk",
			count: 6
		},
		{
			name: "Dragonheir's False Fin",
			count: 12
		},
		{
			name: "Sea Ganoderma",
			count: 45
		},
		{
			name: "Famed Handguard",
			count: 12
		}
	],
	ascend6: [
		{
			name: "Mora",
			count: 120000
		},
		{
			name: "Vajrada Amethyst Gemstone",
			count: 6
		},
		{
			name: "Dragonheir's False Fin",
			count: 20
		},
		{
			name: "Sea Ganoderma",
			count: 60
		},
		{
			name: "Famed Handguard",
			count: 24
		}
	]
};
var yaeMiko = {
	name: name,
	fullname: fullname,
	title: title,
	description: description,
	rarity: rarity,
	element: element,
	weapontype: weapontype,
	substat: substat,
	gender: gender,
	body: body,
	association: association,
	region: region,
	affiliation: affiliation,
	birthdaymmdd: birthdaymmdd,
	birthday: birthday,
	constellation: constellation,
	cv: cv,
	costs: costs
};

exports.affiliation = affiliation;
exports.association = association;
exports.birthday = birthday;
exports.birthdaymmdd = birthdaymmdd;
exports.body = body;
exports.constellation = constellation;
exports.costs = costs;
exports.cv = cv;
exports["default"] = yaeMiko;
exports.description = description;
exports.element = element;
exports.fullname = fullname;
exports.gender = gender;
exports.name = name;
exports.rarity = rarity;
exports.region = region;
exports.substat = substat;
exports.title = title;
exports.weapontype = weapontype;
