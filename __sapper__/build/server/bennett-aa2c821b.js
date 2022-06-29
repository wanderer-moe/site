'use strict';

var name = "Bennett";
var fullname = "Bennett";
var title = "Trial by Fire";
var description = "A good-natured adventurer from Mondstadt who's unfortunately extremely unlucky.";
var rarity = "4";
var element = "Pyro";
var weapontype = "Sword";
var substat = "Energy Recharge";
var gender = "Male";
var body = "BOY";
var association = "MONDSTADT";
var region = "Mondstadt";
var affiliation = "Adventurers' Guild";
var birthdaymmdd = "2/29";
var birthday = "February 29";
var constellation = "Rota Calamitas";
var cv = {
	english: "Cristina Vee Valenzuela",
	chinese: "穆雪婷",
	japanese: "逢坂良太",
	korean: "Song Ha-rim"
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
			name: "Windwheel Aster",
			count: 3
		},
		{
			name: "Treasure Hoarder Insignia",
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
			name: "Windwheel Aster",
			count: 10
		},
		{
			name: "Treasure Hoarder Insignia",
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
			name: "Windwheel Aster",
			count: 20
		},
		{
			name: "Silver Raven Insignia",
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
			name: "Windwheel Aster",
			count: 30
		},
		{
			name: "Silver Raven Insignia",
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
			name: "Windwheel Aster",
			count: 45
		},
		{
			name: "Golden Raven Insignia",
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
			name: "Windwheel Aster",
			count: 60
		},
		{
			name: "Golden Raven Insignia",
			count: 24
		}
	]
};
var bennett = {
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
exports["default"] = bennett;
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
