'use strict';

var name = "Ganyu";
var fullname = "Ganyu";
var title = "Plenilune Gaze";
var description = "The secretary at Yuehai Pavilion. The blood of the qilin, an illuminated beast, flows within her veins.";
var rarity = "5";
var element = "Cryo";
var weapontype = "Bow";
var substat = "CRIT DMG";
var gender = "Female";
var body = "GIRL";
var association = "LIYUE";
var region = "Liyue";
var affiliation = "Yuehai Pavilion";
var birthdaymmdd = "12/2";
var birthday = "December 2";
var constellation = "Sinae Unicornis";
var cv = {
	english: "Jennifer Losi",
	chinese: "林簌",
	japanese: "上田麗奈",
	korean: "Kim Seon-hye"
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
			name: "Qingxin",
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
			name: "Shivada Jade Fragment",
			count: 3
		},
		{
			name: "Hoarfrost Core",
			count: 2
		},
		{
			name: "Qingxin",
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
			name: "Shivada Jade Fragment",
			count: 6
		},
		{
			name: "Hoarfrost Core",
			count: 4
		},
		{
			name: "Qingxin",
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
			name: "Shivada Jade Chunk",
			count: 3
		},
		{
			name: "Hoarfrost Core",
			count: 8
		},
		{
			name: "Qingxin",
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
			name: "Shivada Jade Chunk",
			count: 6
		},
		{
			name: "Hoarfrost Core",
			count: 12
		},
		{
			name: "Qingxin",
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
			name: "Shivada Jade Gemstone",
			count: 6
		},
		{
			name: "Hoarfrost Core",
			count: 20
		},
		{
			name: "Qingxin",
			count: 60
		},
		{
			name: "Energy Nectar",
			count: 24
		}
	]
};
var ganyu = {
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
exports["default"] = ganyu;
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
