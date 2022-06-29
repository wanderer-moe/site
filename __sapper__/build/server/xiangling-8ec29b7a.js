'use strict';

var name = "Xiangling";
var fullname = "Xiangling";
var title = "Exquisite Delicacy";
var description = "A renowned chef from Liyue. She's extremely passionate about cooking and excels at making her signature hot and spicy dishes.";
var rarity = "4";
var element = "Pyro";
var weapontype = "Polearm";
var substat = "Elemental Mastery";
var gender = "Female";
var body = "GIRL";
var association = "LIYUE";
var region = "Liyue";
var affiliation = "Wanmin Restaurant";
var birthdaymmdd = "11/2";
var birthday = "November 2";
var constellation = "Trulla";
var cv = {
	english: "Jackie Lastra",
	chinese: "小N",
	japanese: "小澤亜李",
	korean: "Yoon Ah-young"
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
			name: "Jueyun Chili",
			count: 3
		},
		{
			name: "Slime Condensate",
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
			name: "Jueyun Chili",
			count: 10
		},
		{
			name: "Slime Condensate",
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
			name: "Jueyun Chili",
			count: 20
		},
		{
			name: "Slime Secretions",
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
			name: "Jueyun Chili",
			count: 30
		},
		{
			name: "Slime Secretions",
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
			name: "Jueyun Chili",
			count: 45
		},
		{
			name: "Slime Concentrate",
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
			name: "Jueyun Chili",
			count: 60
		},
		{
			name: "Slime Concentrate",
			count: 24
		}
	]
};
var xiangling = {
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
exports["default"] = xiangling;
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
