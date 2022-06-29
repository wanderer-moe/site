'use strict';

var name = "Noelle";
var fullname = "Noelle";
var title = "Chivalric Blossom";
var description = "A maid who faithfully serves the Knights of Favonius. She dreams of joining their ranks someday.";
var rarity = "4";
var element = "Geo";
var weapontype = "Claymore";
var substat = "DEF";
var gender = "Female";
var body = "GIRL";
var association = "MONDSTADT";
var region = "Mondstadt";
var affiliation = "Knights of Favonius";
var birthdaymmdd = "3/21";
var birthday = "March 21";
var constellation = "Parma Cordis";
var cv = {
	english: "Laura Faye Smith",
	chinese: "宴宁",
	japanese: "高尾奏音",
	korean: "Lee Bo-hee"
};
var costs = {
	ascend1: [
		{
			name: "Mora",
			count: 20000
		},
		{
			name: "Prithiva Topaz Sliver",
			count: 1
		},
		{
			name: "Valberry",
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
			name: "Prithiva Topaz Fragment",
			count: 3
		},
		{
			name: "Basalt Pillar",
			count: 2
		},
		{
			name: "Valberry",
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
			name: "Prithiva Topaz Fragment",
			count: 6
		},
		{
			name: "Basalt Pillar",
			count: 4
		},
		{
			name: "Valberry",
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
			name: "Prithiva Topaz Chunk",
			count: 3
		},
		{
			name: "Basalt Pillar",
			count: 8
		},
		{
			name: "Valberry",
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
			name: "Prithiva Topaz Chunk",
			count: 6
		},
		{
			name: "Basalt Pillar",
			count: 12
		},
		{
			name: "Valberry",
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
			name: "Prithiva Topaz Gemstone",
			count: 6
		},
		{
			name: "Basalt Pillar",
			count: 20
		},
		{
			name: "Valberry",
			count: 60
		},
		{
			name: "Ominous Mask",
			count: 24
		}
	]
};
var noelle = {
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
exports["default"] = noelle;
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
