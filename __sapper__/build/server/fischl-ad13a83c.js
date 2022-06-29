'use strict';

var name = "Fischl";
var fullname = "Fischl";
var title = "Prinzessin der Verurteilung!";
var description = "A mysterious girl who calls herself \"Prinzessin der Verurteilung\" and travels with a night raven named Oz.";
var rarity = "4";
var element = "Electro";
var weapontype = "Bow";
var substat = "ATK";
var gender = "Female";
var body = "GIRL";
var association = "MONDSTADT";
var region = "Mondstadt";
var affiliation = "Adventurers' Guild";
var birthdaymmdd = "5/27";
var birthday = "May 27";
var constellation = "Corvus";
var cv = {
	english: "Brittany Cox & Ben Pronsky",
	chinese: "Mace & 赵悦程",
	japanese: "内田真礼 & 増谷康紀",
	korean: "Park Go-woon & Lee Hyeon"
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
			name: "Small Lamp Grass",
			count: 3
		},
		{
			name: "Firm Arrowhead",
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
			name: "Lightning Prism",
			count: 2
		},
		{
			name: "Small Lamp Grass",
			count: 10
		},
		{
			name: "Firm Arrowhead",
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
			name: "Lightning Prism",
			count: 4
		},
		{
			name: "Small Lamp Grass",
			count: 20
		},
		{
			name: "Sharp Arrowhead",
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
			name: "Lightning Prism",
			count: 8
		},
		{
			name: "Small Lamp Grass",
			count: 30
		},
		{
			name: "Sharp Arrowhead",
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
			name: "Lightning Prism",
			count: 12
		},
		{
			name: "Small Lamp Grass",
			count: 45
		},
		{
			name: "Weathered Arrowhead",
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
			name: "Lightning Prism",
			count: 20
		},
		{
			name: "Small Lamp Grass",
			count: 60
		},
		{
			name: "Weathered Arrowhead",
			count: 24
		}
	]
};
var fischl = {
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
exports["default"] = fischl;
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
