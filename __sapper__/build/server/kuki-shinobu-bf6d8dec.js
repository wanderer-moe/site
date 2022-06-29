'use strict';

var name = "Kuki Shinobu";
var fullname = "Kuki Shinobu";
var title = "Mender of Tribulations";
var description = "The capable and reliable deputy leader of the \"Arataki Gang.\" Please note: capable and reliable are not appellations for the \"Arataki Gang,\" but for their deputy leader in specific.";
var rarity = "4";
var element = "Electro";
var weapontype = "Sword";
var substat = "HP";
var gender = "Female";
var body = "GIRL";
var association = "INAZUMA";
var region = "Inazuma";
var affiliation = "Arataki Gang";
var birthdaymmdd = "7/27";
var birthday = "July 27";
var constellation = "Tribulatio Demptio";
var cv = {
	english: "Kira Buckland",
	chinese: "杨凝",
	japanese: "水橋かおり",
	korean: "Kim Yool"
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
			name: "Naku Weed",
			count: 3
		},
		{
			name: "Spectral Husk",
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
			name: "Runic Fang",
			count: 2
		},
		{
			name: "Naku Weed",
			count: 10
		},
		{
			name: "Spectral Husk",
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
			name: "Runic Fang",
			count: 4
		},
		{
			name: "Naku Weed",
			count: 20
		},
		{
			name: "Spectral Heart",
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
			name: "Runic Fang",
			count: 8
		},
		{
			name: "Naku Weed",
			count: 30
		},
		{
			name: "Spectral Heart",
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
			name: "Runic Fang",
			count: 12
		},
		{
			name: "Naku Weed",
			count: 45
		},
		{
			name: "Spectral Nucleus",
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
			name: "Runic Fang",
			count: 20
		},
		{
			name: "Naku Weed",
			count: 60
		},
		{
			name: "Spectral Nucleus",
			count: 24
		}
	]
};
var kukiShinobu = {
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
exports["default"] = kukiShinobu;
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
