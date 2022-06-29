'use strict';

var name = "Sayu";
var fullname = "Sayu";
var title = "Mujina Ninja";
var description = "A pint-sized ninja attached to the Shuumatsuban, who always seems sleep-deprived.";
var rarity = "4";
var element = "Anemo";
var weapontype = "Claymore";
var substat = "Elemental Mastery";
var gender = "Female";
var body = "LOLI";
var association = "INAZUMA";
var region = "Inazuma";
var affiliation = "Shuumatsuban";
var birthdaymmdd = "10/19";
var birthday = "October 19";
var constellation = "Nyctereutes Minor";
var cv = {
	english: "Lilypichu (Lily Ki)",
	chinese: "Sakula小舞",
	japanese: "洲崎綾",
	korean: "Lee Ji-hyeon"
};
var costs = {
	ascend1: [
		{
			name: "Mora",
			count: 20000
		},
		{
			name: "Vayuda Turquoise Sliver",
			count: 1
		},
		{
			name: "Crystal Marrow",
			count: 3
		},
		{
			name: "Whopperflower Nectar",
			count: 3
		}
	],
	ascend2: [
		{
			name: "Mora",
			count: 40000
		},
		{
			name: "Vayuda Turquoise Fragment",
			count: 3
		},
		{
			name: "Marionette Core",
			count: 2
		},
		{
			name: "Crystal Marrow",
			count: 10
		},
		{
			name: "Whopperflower Nectar",
			count: 15
		}
	],
	ascend3: [
		{
			name: "Mora",
			count: 60000
		},
		{
			name: "Vayuda Turquoise Fragment",
			count: 6
		},
		{
			name: "Marionette Core",
			count: 4
		},
		{
			name: "Crystal Marrow",
			count: 20
		},
		{
			name: "Shimmering Nectar",
			count: 12
		}
	],
	ascend4: [
		{
			name: "Mora",
			count: 80000
		},
		{
			name: "Vayuda Turquoise Chunk",
			count: 3
		},
		{
			name: "Marionette Core",
			count: 8
		},
		{
			name: "Crystal Marrow",
			count: 30
		},
		{
			name: "Shimmering Nectar",
			count: 18
		}
	],
	ascend5: [
		{
			name: "Mora",
			count: 100000
		},
		{
			name: "Vayuda Turquoise Chunk",
			count: 6
		},
		{
			name: "Marionette Core",
			count: 12
		},
		{
			name: "Crystal Marrow",
			count: 45
		},
		{
			name: "Energy Nectar",
			count: 12
		}
	],
	ascend6: [
		{
			name: "Mora",
			count: 120000
		},
		{
			name: "Vayuda Turquoise Gemstone",
			count: 6
		},
		{
			name: "Marionette Core",
			count: 20
		},
		{
			name: "Crystal Marrow",
			count: 60
		},
		{
			name: "Energy Nectar",
			count: 24
		}
	]
};
var sayu = {
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
exports["default"] = sayu;
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
