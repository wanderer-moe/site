'use strict';

var name = "Ningguang";
var fullname = "Ningguang";
var title = "Eclipsing Star";
var description = "The Tianquan of the Liyue Qixing. Her wealth is unsurpassed in all of Teyvat.";
var rarity = "4";
var element = "Geo";
var weapontype = "Catalyst";
var substat = "Geo DMG Bonus";
var gender = "Female";
var body = "LADY";
var association = "LIYUE";
var region = "Liyue";
var affiliation = "Liyue Qixing";
var birthdaymmdd = "8/26";
var birthday = "August 26";
var constellation = "Opus Aequilibrium";
var cv = {
	english: "Erin Ebers",
	chinese: "杜冥鸦",
	japanese: "大原さやか",
	korean: "Kwak Kyu-mi"
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
			name: "Glaze Lily",
			count: 3
		},
		{
			name: "Recruit's Insignia",
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
			name: "Glaze Lily",
			count: 10
		},
		{
			name: "Recruit's Insignia",
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
			name: "Glaze Lily",
			count: 20
		},
		{
			name: "Sergeant's Insignia",
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
			name: "Glaze Lily",
			count: 30
		},
		{
			name: "Sergeant's Insignia",
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
			name: "Glaze Lily",
			count: 45
		},
		{
			name: "Lieutenant's Insignia",
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
			name: "Glaze Lily",
			count: 60
		},
		{
			name: "Lieutenant's Insignia",
			count: 24
		}
	]
};
var ningguang = {
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
exports["default"] = ningguang;
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
