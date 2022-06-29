'use strict';

var name = "Diona";
var fullname = "Diona";
var title = "Kätzlein Cocktail";
var description = "A young lady who has inherited trace amounts of non-human blood. She is the incredibly popular bartender of the Cat's Tail tavern.";
var rarity = "4";
var element = "Cryo";
var weapontype = "Bow";
var substat = "Cryo DMG Bonus";
var gender = "Female";
var body = "LOLI";
var association = "MONDSTADT";
var region = "Mondstadt";
var affiliation = "The Cat's Tail";
var birthdaymmdd = "1/18";
var birthday = "January 18";
var constellation = "Feles";
var cv = {
	english: "Dina Sherman",
	chinese: "诺亚",
	japanese: "井澤詩織",
	korean: "Woo Jeong-shin"
};
var costs = {
	ascend1: [
		{
			name: "Mora",
			count: 20000
		},
		{
			name: "Shivada Jade Sliver",
			count: 1
		},
		{
			name: "Calla Lily",
			count: 3
		},
		{
			name: "Firm Arrowhead",
			count: 3
		}
	],
	ascend2: [
		{
			name: "Mora",
			count: 40000
		},
		{
			name: "Shivada Jade Fragment",
			count: 3
		},
		{
			name: "Hoarfrost Core",
			count: 2
		},
		{
			name: "Calla Lily",
			count: 10
		},
		{
			name: "Firm Arrowhead",
			count: 15
		}
	],
	ascend3: [
		{
			name: "Mora",
			count: 60000
		},
		{
			name: "Shivada Jade Fragment",
			count: 6
		},
		{
			name: "Hoarfrost Core",
			count: 4
		},
		{
			name: "Calla Lily",
			count: 20
		},
		{
			name: "Sharp Arrowhead",
			count: 12
		}
	],
	ascend4: [
		{
			name: "Mora",
			count: 80000
		},
		{
			name: "Shivada Jade Chunk",
			count: 3
		},
		{
			name: "Hoarfrost Core",
			count: 8
		},
		{
			name: "Calla Lily",
			count: 30
		},
		{
			name: "Sharp Arrowhead",
			count: 18
		}
	],
	ascend5: [
		{
			name: "Mora",
			count: 100000
		},
		{
			name: "Shivada Jade Chunk",
			count: 6
		},
		{
			name: "Hoarfrost Core",
			count: 12
		},
		{
			name: "Calla Lily",
			count: 45
		},
		{
			name: "Weathered Arrowhead",
			count: 12
		}
	],
	ascend6: [
		{
			name: "Mora",
			count: 120000
		},
		{
			name: "Shivada Jade Gemstone",
			count: 6
		},
		{
			name: "Hoarfrost Core",
			count: 20
		},
		{
			name: "Calla Lily",
			count: 60
		},
		{
			name: "Weathered Arrowhead",
			count: 24
		}
	]
};
var diona = {
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
exports["default"] = diona;
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
