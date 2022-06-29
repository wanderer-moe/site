'use strict';

var name = "Razor";
var fullname = "Razor";
var title = "Wolf Boy";
var description = "A boy who lives among the wolves in Wolvendom of Mondstadt, away from human civilization. As agile as lightning.";
var rarity = "4";
var element = "Electro";
var weapontype = "Claymore";
var substat = "Physical DMG Bonus";
var gender = "Male";
var body = "BOY";
var association = "MONDSTADT";
var region = "Mondstadt";
var affiliation = "Wolvendom";
var birthdaymmdd = "9/9";
var birthday = "September 9";
var constellation = "Lupus Minor";
var cv = {
	english: "Todd Haberkorn",
	chinese: "周帅",
	japanese: "内山昂輝",
	korean: "Kim Seo-young"
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
			name: "Wolfhook",
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
			name: "Lightning Prism",
			count: 2
		},
		{
			name: "Wolfhook",
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
			name: "Lightning Prism",
			count: 4
		},
		{
			name: "Wolfhook",
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
			name: "Lightning Prism",
			count: 8
		},
		{
			name: "Wolfhook",
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
			name: "Lightning Prism",
			count: 12
		},
		{
			name: "Wolfhook",
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
			name: "Lightning Prism",
			count: 20
		},
		{
			name: "Wolfhook",
			count: 60
		},
		{
			name: "Ominous Mask",
			count: 24
		}
	]
};
var razor = {
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
exports["default"] = razor;
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
