'use strict';

var name = "Kaedehara Kazuha";
var fullname = "Kaedehara Kazuha";
var title = "Scarlet Leaves Pursue Wild Waves";
var description = "A wandering samurai from Inazuma who is currently with Liyue's Crux Fleet. A gentle and carefree soul whose heart hides a great many burdens from the past.";
var rarity = "5";
var element = "Anemo";
var weapontype = "Sword";
var substat = "Elemental Mastery";
var gender = "Male";
var body = "BOY";
var association = "INAZUMA";
var region = "Inazuma";
var affiliation = "The Crux";
var birthdaymmdd = "10/29";
var birthday = "October 29";
var constellation = "Acer Palmatum";
var cv = {
	english: "Mark Whitten",
	chinese: "斑马",
	japanese: "島﨑信長",
	korean: "Kim Shin-woo"
};
var costs = {
	ascend1: [
		{
			name: "Mora",
			count: 20000
		},
		{
			name: "Vayuda Turquoise Sliver",
			count: 1
		},
		{
			name: "Sea Ganoderma",
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
			name: "Vayuda Turquoise Fragment",
			count: 3
		},
		{
			name: "Marionette Core",
			count: 2
		},
		{
			name: "Sea Ganoderma",
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
			name: "Vayuda Turquoise Fragment",
			count: 6
		},
		{
			name: "Marionette Core",
			count: 4
		},
		{
			name: "Sea Ganoderma",
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
			name: "Vayuda Turquoise Chunk",
			count: 3
		},
		{
			name: "Marionette Core",
			count: 8
		},
		{
			name: "Sea Ganoderma",
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
			name: "Vayuda Turquoise Chunk",
			count: 6
		},
		{
			name: "Marionette Core",
			count: 12
		},
		{
			name: "Sea Ganoderma",
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
			name: "Vayuda Turquoise Gemstone",
			count: 6
		},
		{
			name: "Marionette Core",
			count: 20
		},
		{
			name: "Sea Ganoderma",
			count: 60
		},
		{
			name: "Golden Raven Insignia",
			count: 24
		}
	]
};
var kaedeharaKazuha = {
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
exports["default"] = kaedeharaKazuha;
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
