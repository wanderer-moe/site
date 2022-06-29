'use strict';

var name = "Kamisato Ayato";
var fullname = "Kamisato Ayato";
var title = "Pillar of Fortitude";
var description = "The young but highly accomplished head of the Yashiro Commission's Kamisato Clan. Cultured and polite, he is a man of many ways and means.";
var rarity = "5";
var element = "Hydro";
var weapontype = "Sword";
var substat = "CRIT DMG";
var gender = "Male";
var body = "MALE";
var association = "INAZUMA";
var region = "Inazuma";
var affiliation = "Yashiro Commission";
var birthdaymmdd = "3/26";
var birthday = "March 26";
var constellation = "Cypressus Custos";
var cv = {
	english: "Chris Hackney",
	chinese: "赵路",
	japanese: "石田彰",
	korean: "Jang Min-hyeok"
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
			name: "Sakura Bloom",
			count: 3
		},
		{
			name: "Old Handguard",
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
			name: "Sakura Bloom",
			count: 10
		},
		{
			name: "Old Handguard",
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
			name: "Sakura Bloom",
			count: 20
		},
		{
			name: "Kageuchi Handguard",
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
			name: "Sakura Bloom",
			count: 30
		},
		{
			name: "Kageuchi Handguard",
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
			name: "Sakura Bloom",
			count: 45
		},
		{
			name: "Famed Handguard",
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
			name: "Sakura Bloom",
			count: 60
		},
		{
			name: "Famed Handguard",
			count: 24
		}
	]
};
var kamisatoAyato = {
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
exports["default"] = kamisatoAyato;
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
