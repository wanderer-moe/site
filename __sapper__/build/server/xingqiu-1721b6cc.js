'use strict';

var name = "Xingqiu";
var fullname = "Xingqiu";
var title = "Juvenile Galant";
var description = "A young man carrying a longsword who is frequently seen at book booths. He has a chivalrous heart and yearns for justice and fairness for all.";
var rarity = "4";
var element = "Hydro";
var weapontype = "Sword";
var substat = "ATK";
var gender = "Male";
var body = "BOY";
var association = "LIYUE";
var region = "Liyue";
var affiliation = "Feiyun Commerce Guild";
var birthdaymmdd = "10/9";
var birthday = "October 9";
var constellation = "Fabulae Textile";
var cv = {
	english: "Cristina Vee Valenzuela",
	chinese: "唐雅菁",
	japanese: "皆川純子",
	korean: "Kwak Kyu-mi"
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
			name: "Silk Flower",
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
			name: "Varunada Lazurite Fragment",
			count: 3
		},
		{
			name: "Cleansing Heart",
			count: 2
		},
		{
			name: "Silk Flower",
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
			name: "Varunada Lazurite Fragment",
			count: 6
		},
		{
			name: "Cleansing Heart",
			count: 4
		},
		{
			name: "Silk Flower",
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
			name: "Varunada Lazurite Chunk",
			count: 3
		},
		{
			name: "Cleansing Heart",
			count: 8
		},
		{
			name: "Silk Flower",
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
			name: "Varunada Lazurite Chunk",
			count: 6
		},
		{
			name: "Cleansing Heart",
			count: 12
		},
		{
			name: "Silk Flower",
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
			name: "Varunada Lazurite Gemstone",
			count: 6
		},
		{
			name: "Cleansing Heart",
			count: 20
		},
		{
			name: "Silk Flower",
			count: 60
		},
		{
			name: "Ominous Mask",
			count: 24
		}
	]
};
var xingqiu = {
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
exports["default"] = xingqiu;
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
