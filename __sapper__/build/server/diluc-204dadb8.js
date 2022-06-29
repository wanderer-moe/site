'use strict';

var name = "Diluc";
var fullname = "Diluc";
var title = "The Dark Side of Dawn";
var description = "The tycoon of a winery empire in Mondstadt, unmatched in every possible way.";
var rarity = "5";
var element = "Pyro";
var weapontype = "Claymore";
var substat = "CRIT Rate";
var gender = "Male";
var body = "MALE";
var association = "MONDSTADT";
var region = "Mondstadt";
var affiliation = "Dawn Winery";
var birthdaymmdd = "4/30";
var birthday = "April 30";
var constellation = "Noctua";
var cv = {
	english: "Sean Chiplock",
	chinese: "马洋",
	japanese: "小野賢章",
	korean: "Choi Seung-hoon"
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
			name: "Recruit's Insignia",
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
			name: "Recruit's Insignia",
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
			name: "Sergeant's Insignia",
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
			name: "Sergeant's Insignia",
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
			name: "Lieutenant's Insignia",
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
			name: "Lieutenant's Insignia",
			count: 24
		}
	]
};
var diluc = {
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
exports["default"] = diluc;
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
