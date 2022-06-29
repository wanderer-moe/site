'use strict';

var name = "Beidou";
var fullname = "Beidou";
var title = "Uncrowned Lord of the Ocean";
var description = "Captain of her crew, The Crux. She's quite an unbound and forthright woman.";
var rarity = "4";
var element = "Electro";
var weapontype = "Claymore";
var substat = "Electro DMG Bonus";
var gender = "Female";
var body = "LADY";
var association = "LIYUE";
var region = "Liyue";
var affiliation = "The Crux";
var birthdaymmdd = "2/14";
var birthday = "February 14";
var constellation = "Victor Mare";
var cv = {
	english: "Allegra Clark",
	chinese: "唐雅菁",
	japanese: "小清水亜美",
	korean: "Jung Yoo-mi"
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
			name: "Noctilucous Jade",
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
			name: "Vajrada Amethyst Fragment",
			count: 3
		},
		{
			name: "Lightning Prism",
			count: 2
		},
		{
			name: "Noctilucous Jade",
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
			name: "Vajrada Amethyst Fragment",
			count: 6
		},
		{
			name: "Lightning Prism",
			count: 4
		},
		{
			name: "Noctilucous Jade",
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
			name: "Vajrada Amethyst Chunk",
			count: 3
		},
		{
			name: "Lightning Prism",
			count: 8
		},
		{
			name: "Noctilucous Jade",
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
			name: "Vajrada Amethyst Chunk",
			count: 6
		},
		{
			name: "Lightning Prism",
			count: 12
		},
		{
			name: "Noctilucous Jade",
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
			name: "Vajrada Amethyst Gemstone",
			count: 6
		},
		{
			name: "Lightning Prism",
			count: 20
		},
		{
			name: "Noctilucous Jade",
			count: 60
		},
		{
			name: "Golden Raven Insignia",
			count: 24
		}
	]
};
var beidou = {
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
exports["default"] = beidou;
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
