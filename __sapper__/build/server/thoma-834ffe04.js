'use strict';

var name = "Thoma";
var fullname = "Thoma";
var title = "Protector From Afar";
var description = "The Kamisato Clan's housekeeper. A well-known \"fixer\" in Inazuma.";
var rarity = "4";
var element = "Pyro";
var weapontype = "Polearm";
var substat = "ATK";
var gender = "Male";
var body = "MALE";
var association = "INAZUMA";
var region = "Inazuma";
var affiliation = "Yashiro Commission";
var birthdaymmdd = "1/9";
var birthday = "January 9";
var constellation = "Rubeum Scutum";
var cv = {
	english: "Christian Banas",
	chinese: "张沛",
	japanese: "森田成一",
	korean: "Ryu Seung-kon"
};
var costs = {
	ascend1: [
		{
			name: "Mora",
			count: 20000
		},
		{
			name: "Agnidus Agate Sliver",
			count: 1
		},
		{
			name: "Fluorescent Fungus",
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
			name: "Agnidus Agate Fragment",
			count: 3
		},
		{
			name: "Smoldering Pearl",
			count: 2
		},
		{
			name: "Fluorescent Fungus",
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
			name: "Agnidus Agate Fragment",
			count: 6
		},
		{
			name: "Smoldering Pearl",
			count: 4
		},
		{
			name: "Fluorescent Fungus",
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
			name: "Agnidus Agate Chunk",
			count: 3
		},
		{
			name: "Smoldering Pearl",
			count: 8
		},
		{
			name: "Fluorescent Fungus",
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
			name: "Agnidus Agate Chunk",
			count: 6
		},
		{
			name: "Smoldering Pearl",
			count: 12
		},
		{
			name: "Fluorescent Fungus",
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
			name: "Agnidus Agate Gemstone",
			count: 6
		},
		{
			name: "Smoldering Pearl",
			count: 20
		},
		{
			name: "Fluorescent Fungus",
			count: 60
		},
		{
			name: "Golden Raven Insignia",
			count: 24
		}
	]
};
var thoma = {
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
exports["default"] = thoma;
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
