'use strict';

var name = "Gorou";
var fullname = "Gorou";
var title = "Canine Warrior";
var description = "The great general of Watatsumi Island's forces. He is deeply trusted by his subordinates.";
var rarity = "4";
var element = "Geo";
var weapontype = "Bow";
var substat = "Geo DMG Bonus";
var gender = "Male";
var body = "BOY";
var association = "INAZUMA";
var region = "Inazuma";
var affiliation = "Watatsumi Island";
var birthdaymmdd = "5/18";
var birthday = "May 18";
var constellation = "Canis Bellatoris";
var cv = {
	english: "Cory Yee",
	chinese: "杨昕燃",
	japanese: "畠中祐",
	korean: "Lee Sae-byeok"
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
			name: "Prithiva Topaz Fragment",
			count: 3
		},
		{
			name: "Perpetual Heart",
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
			name: "Prithiva Topaz Fragment",
			count: 6
		},
		{
			name: "Perpetual Heart",
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
			name: "Prithiva Topaz Chunk",
			count: 3
		},
		{
			name: "Perpetual Heart",
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
			name: "Prithiva Topaz Chunk",
			count: 6
		},
		{
			name: "Perpetual Heart",
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
			name: "Prithiva Topaz Gemstone",
			count: 6
		},
		{
			name: "Perpetual Heart",
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
var gorou = {
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
exports["default"] = gorou;
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
