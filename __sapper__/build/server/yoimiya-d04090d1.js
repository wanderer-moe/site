'use strict';

var name = "Yoimiya";
var fullname = "Yoimiya";
var title = "Frolicking Flames";
var description = "Owner of Naganohara Fireworks. Known as the \"Queen of the Summer Festival,\" she excels in her craft of creating fireworks that symbolize people's hopes and dreams.";
var rarity = "5";
var element = "Pyro";
var weapontype = "Bow";
var substat = "CRIT Rate";
var gender = "Female";
var body = "GIRL";
var association = "INAZUMA";
var region = "Inazuma";
var affiliation = "Naganohara Fireworks";
var birthdaymmdd = "6/21";
var birthday = "June 21";
var constellation = "Carassius Auratus";
var cv = {
	english: "Jenny Yokobori",
	chinese: "金娜",
	japanese: "植田佳奈",
	korean: "Park Shin-hee"
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
			name: "Naku Weed",
			count: 3
		},
		{
			name: "Divining Scroll",
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
			name: "Naku Weed",
			count: 10
		},
		{
			name: "Divining Scroll",
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
			name: "Naku Weed",
			count: 20
		},
		{
			name: "Sealed Scroll",
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
			name: "Naku Weed",
			count: 30
		},
		{
			name: "Sealed Scroll",
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
			name: "Naku Weed",
			count: 45
		},
		{
			name: "Forbidden Curse Scroll",
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
			name: "Naku Weed",
			count: 60
		},
		{
			name: "Forbidden Curse Scroll",
			count: 24
		}
	]
};
var yoimiya = {
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
exports["default"] = yoimiya;
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
