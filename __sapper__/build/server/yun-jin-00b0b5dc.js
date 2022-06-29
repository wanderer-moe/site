'use strict';

var name = "Yun Jin";
var fullname = "Yun Jin";
var title = "Stage Lucida";
var description = "A renowned Liyue opera singer who is skilled in both playwriting and singing. Her style is one-of-a-kind, exquisite and delicate, much like the person herself.";
var rarity = "4";
var element = "Geo";
var weapontype = "Polearm";
var substat = "Energy Recharge";
var gender = "Female";
var body = "GIRL";
var association = "LIYUE";
var region = "Liyue";
var affiliation = "Yun-Han Opera Troupe";
var birthdaymmdd = "5/21";
var birthday = "May 21";
var constellation = "Opera Grandis";
var cv = {
	english: "Judy Alice Lee & Yang Yang",
	chinese: "贺文潇&杨扬",
	japanese: "小岩井ことり & Yang Yang",
	korean: "Sah Moon-young & Yang Yang"
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
			name: "Riftborn Regalia",
			count: 2
		},
		{
			name: "Glaze Lily",
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
			name: "Riftborn Regalia",
			count: 4
		},
		{
			name: "Glaze Lily",
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
			name: "Riftborn Regalia",
			count: 8
		},
		{
			name: "Glaze Lily",
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
			name: "Riftborn Regalia",
			count: 12
		},
		{
			name: "Glaze Lily",
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
			name: "Riftborn Regalia",
			count: 20
		},
		{
			name: "Glaze Lily",
			count: 60
		},
		{
			name: "Ominous Mask",
			count: 24
		}
	]
};
var yunJin = {
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
exports["default"] = yunJin;
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
