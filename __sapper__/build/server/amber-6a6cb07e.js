'use strict';

var name = "Amber";
var fullname = "Amber";
var title = "Gliding Champion";
var description = "Always energetic and full of life, Amber's the best — albeit only — Outrider of the Knights of Favonius.";
var rarity = "4";
var element = "Pyro";
var weapontype = "Bow";
var substat = "ATK";
var gender = "Female";
var body = "GIRL";
var association = "MONDSTADT";
var region = "Mondstadt";
var affiliation = "Knights of Favonius";
var birthdaymmdd = "8/10";
var birthday = "August 10";
var constellation = "Lepus";
var cv = {
	english: "Kelly Baskin",
	chinese: "蔡书瑾",
	japanese: "石見舞菜香",
	korean: "Kim Yeon-woo"
};
var costs = {
	ascend1: [
		{
			name: "Mora",
			count: 20000
		},
		{
			name: "Agnidus Agate Sliver",
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
			name: "Agnidus Agate Fragment",
			count: 3
		},
		{
			name: "Everflame Seed",
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
			name: "Agnidus Agate Fragment",
			count: 6
		},
		{
			name: "Everflame Seed",
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
			name: "Agnidus Agate Chunk",
			count: 3
		},
		{
			name: "Everflame Seed",
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
			name: "Agnidus Agate Chunk",
			count: 6
		},
		{
			name: "Everflame Seed",
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
			name: "Agnidus Agate Gemstone",
			count: 6
		},
		{
			name: "Everflame Seed",
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
var amber = {
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
exports["default"] = amber;
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
