'use strict';

var name = "Sangonomiya Kokomi";
var fullname = "Sangonomiya Kokomi";
var title = "Pearl of Wisdom";
var description = "The Divine Priestess of Watatsumi Island. All of the island's affairs are at this young lady's fingertips.";
var rarity = "5";
var element = "Hydro";
var weapontype = "Catalyst";
var substat = "Hydro DMG Bonus";
var gender = "Female";
var body = "GIRL";
var association = "INAZUMA";
var region = "Inazuma";
var affiliation = "Watatsumi Island";
var birthdaymmdd = "2/22";
var birthday = "February 22";
var constellation = "Dracaena Somnolenta";
var cv = {
	english: "Risa Mei",
	chinese: "龟娘",
	japanese: "三森すずこ",
	korean: "Yeo Yoon-mi"
};
var costs = {
	ascend1: [
		{
			name: "Mora",
			count: 20000
		},
		{
			name: "Varunada Lazurite Sliver",
			count: 1
		},
		{
			name: "Sango Pearl",
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
			name: "Varunada Lazurite Fragment",
			count: 3
		},
		{
			name: "Dew of Repudiation",
			count: 2
		},
		{
			name: "Sango Pearl",
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
			name: "Varunada Lazurite Fragment",
			count: 6
		},
		{
			name: "Dew of Repudiation",
			count: 4
		},
		{
			name: "Sango Pearl",
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
			name: "Varunada Lazurite Chunk",
			count: 3
		},
		{
			name: "Dew of Repudiation",
			count: 8
		},
		{
			name: "Sango Pearl",
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
			name: "Varunada Lazurite Chunk",
			count: 6
		},
		{
			name: "Dew of Repudiation",
			count: 12
		},
		{
			name: "Sango Pearl",
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
			name: "Varunada Lazurite Gemstone",
			count: 6
		},
		{
			name: "Dew of Repudiation",
			count: 20
		},
		{
			name: "Sango Pearl",
			count: 60
		},
		{
			name: "Spectral Nucleus",
			count: 24
		}
	]
};
var sangonomiyaKokomi = {
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
exports["default"] = sangonomiyaKokomi;
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
