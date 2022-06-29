'use strict';

var name = "Kaeya";
var fullname = "Kaeya";
var title = "Frostwind Swordsman";
var description = "An accomplished swordsman and a strategic thinker in the Knights of Favonius, rumored to hail from beyond Mondstadt.";
var rarity = "4";
var element = "Cryo";
var weapontype = "Sword";
var substat = "Energy Recharge";
var gender = "Male";
var body = "MALE";
var association = "MONDSTADT";
var region = "Mondstadt";
var affiliation = "Knights of Favonius";
var birthdaymmdd = "11/30";
var birthday = "November 30";
var constellation = "Pavo Ocellus";
var cv = {
	english: "Josey Montana McCoy",
	chinese: "孙晔",
	japanese: "鳥海浩輔",
	korean: "Jung Joo-won"
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
			name: "Golden Raven Insignia",
			count: 24
		}
	]
};
var kaeya = {
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
exports["default"] = kaeya;
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
