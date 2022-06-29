'use strict';

var name = "Xinyan";
var fullname = "Xinyan";
var title = "Blazing Riff";
var description = "Liyue's sole rock 'n' roll musician. She rebels against ossified prejudices using her music and passionate singing.";
var rarity = "4";
var element = "Pyro";
var weapontype = "Claymore";
var substat = "ATK";
var gender = "Female";
var body = "GIRL";
var association = "LIYUE";
var region = "Liyue";
var affiliation = "\"The Red Strings\"";
var birthdaymmdd = "10/16";
var birthday = "October 16";
var constellation = "Fila Ignium";
var cv = {
	english: "Laura Stahl",
	chinese: "王雅欣",
	japanese: "たかはし智秋",
	korean: "Kim Chae-ha"
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
			name: "Violetgrass",
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
			name: "Everflame Seed",
			count: 2
		},
		{
			name: "Violetgrass",
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
			name: "Everflame Seed",
			count: 4
		},
		{
			name: "Violetgrass",
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
			name: "Everflame Seed",
			count: 8
		},
		{
			name: "Violetgrass",
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
			name: "Everflame Seed",
			count: 12
		},
		{
			name: "Violetgrass",
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
			name: "Everflame Seed",
			count: 20
		},
		{
			name: "Violetgrass",
			count: 60
		},
		{
			name: "Golden Raven Insignia",
			count: 24
		}
	]
};
var xinyan = {
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
exports["default"] = xinyan;
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
