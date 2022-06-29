'use strict';

var name = "Kujou Sara";
var fullname = "Kujou Sara";
var title = "Crowfeather Kaburaya";
var description = "A general of the Tenryou Commission. Bold, decisive, and skilled in battle.";
var rarity = "4";
var element = "Electro";
var weapontype = "Bow";
var substat = "ATK";
var gender = "Female";
var body = "LADY";
var association = "INAZUMA";
var region = "Inazuma";
var affiliation = "Tenryou Commission";
var birthdaymmdd = "7/14";
var birthday = "July 14";
var constellation = "Flabellum";
var cv = {
	english: "Jeannie Tirado",
	chinese: "杨梦露",
	japanese: "瀬戸麻沙美",
	korean: "Moon Ji-young"
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
			name: "Dendrobium",
			count: 3
		},
		{
			name: "Damaged Mask",
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
			name: "Storm Beads",
			count: 2
		},
		{
			name: "Dendrobium",
			count: 10
		},
		{
			name: "Damaged Mask",
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
			name: "Storm Beads",
			count: 4
		},
		{
			name: "Dendrobium",
			count: 20
		},
		{
			name: "Stained Mask",
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
			name: "Storm Beads",
			count: 8
		},
		{
			name: "Dendrobium",
			count: 30
		},
		{
			name: "Stained Mask",
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
			name: "Storm Beads",
			count: 12
		},
		{
			name: "Dendrobium",
			count: 45
		},
		{
			name: "Ominous Mask",
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
			name: "Storm Beads",
			count: 20
		},
		{
			name: "Dendrobium",
			count: 60
		},
		{
			name: "Ominous Mask",
			count: 24
		}
	]
};
var kujousara = {
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
exports["default"] = kujousara;
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
