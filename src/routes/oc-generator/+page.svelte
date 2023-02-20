<script>
// TODO: I know, i REALLY need to refactor this code, it's incredibly messy and unefficient.
// I'll do it later, I promise. I just wanted to get this out as soon as possible.

const rarities = ["5 star", "4 star"];
const weapons = ["Sword", "Claymore", "Polearm", "Bow", "Catalyst"];
const elements = ["Pyro", "Hydro", "Electro", "Anemo", "Cryo", "Geo", "Dendro"];
const genders = ["Male", "Female", "Non-binary"];
const pronounsList = ["He/Him", "She/Her", "They/Them", "He/They", "She/They"];
const heights = ["Short", "Average", "Tall"];
const ages = ["Child", "Teenager", "Adult"];
const roles = ["DPS", "Support", "Sub-DPS", "Healer"];
const hairTypes = ["Short", "Medium", "Long"];
const hairStyles = ["Curly", "Straight", "Wavy"];
const personalityTypes = [
  "INTP",
  "INTJ",
  "ENTP",
  "ENTJ",
  "INFJ",
  "INFP",
  "ENFJ",
  "ENFP",
  "ISTJ",
  "ISFJ",
  "ESTJ",
  "ESFJ",
  "ISTP",
  "ISFP",
  "ESTP",
  "ESFP",
];
const regions = [
  "Dragonspine",
  "Enkanomiya",
  "Fontaine",
  "Inazuma",
  "Khaenri'ah",
  "Liyue",
  "Mondstadt",
  "Natlan",
  "Snezhnaya",
  "Sumeru",
];
const affiliations = [
  "???",
  "Adepti",
  "Adventurers Guild",
  "Akademiya",
  "Bantan Sango Detective Agency",
  "Blackcliff Forge",
  "Bubu Pharmacy",
  "Court of Fontaine",
  "Dawn Winery",
  "Ermites",
  "Favonius Church",
  "Fatui",
  "Fatui Harbinger",
  "Gandharva Ville",
  "Inazuma Shogunate",
  "International Trade Comission",
  "Knights of Favonius",
  "Komore Teahouse",
  "Kujou Clan",
  "Liyue Qixing",
  "Mahamatra",
  "Ministry of Civil Affairs",
  "Naganohora Fireworks",
  "Narukami Shrine",
  "Northland Bank",
  "Sangonomiya Shrine",
  "Springvale",
  "Tenryou Comission",
  "Wangsheng Funeral Parlor",
  "Wangshu Inn",
  "Yaksha",
];
const ascensionSubstats = [
  "ATK",
  "Crit DMG",
  "Crit Rate",
  "DEF",
  "Elemental DMG Bonus",
  "Elemental Mastery",
  "Energy Recharge",
  "Healing Bonus",
  "HP",
  "Physical DMG Bonus",
];
const colors = [
  "Black",
  "Blue",
  "Brown",
  "Gray",
  "Green",
  "Orange",
  "Pink",
  "Purple",
  "Red",
  "White",
  "Yellow",
];

let rarity = "None";
let region = "None";
let weapon = "None";
let element = "None";
let gender = "None";
let pronouns = "None";
let height = "None";
let age = "None";
let role = "None";
let ascensionSubstat = "None";
let hairColor = "None";
let eyeColor = "None";
let affiliation = "None";
let hairType = "None";
let hairStyle = "None";
let personalityType = "None";

let lockedRarity,
  lockedRegion,
  lockedWeapon,
  lockedElement,
  lockedGender,
  lockedPronouns,
  lockedHeight,
  lockedAge,
  lockedRole,
  lockedAscensionSubstat,
  lockedHairColour,
  lockedEyeColour,
  lockedAffiliation,
  lockedHairType,
  lockedHairStyle,
  lockedPersonalityType;

// randomisestats function
function randomiseStats() {
  if (!lockedRarity) {
    rarity = rarities[Math.floor(Math.random() * rarities.length)];
  }
  if (!lockedRegion) {
    region = regions[Math.floor(Math.random() * regions.length)];
  }
  if (!lockedWeapon) {
    weapon = weapons[Math.floor(Math.random() * weapons.length)];
  }
  if (!lockedElement) {
    element = elements[Math.floor(Math.random() * elements.length)];
  }
  if (!lockedGender) {
    gender = genders[Math.floor(Math.random() * genders.length)];
  }
  if (!lockedPronouns) {
    pronouns = pronounsList[Math.floor(Math.random() * pronounsList.length)];
  }
  if (!lockedHeight) {
    height = heights[Math.floor(Math.random() * heights.length)];
  }
  if (!lockedAge) {
    age = ages[Math.floor(Math.random() * ages.length)];
  }
  if (!lockedRole) {
    role = roles[Math.floor(Math.random() * roles.length)];
  }
  if (!lockedAscensionSubstat) {
    ascensionSubstat =
      ascensionSubstats[Math.floor(Math.random() * ascensionSubstats.length)];
  }
  if (!lockedHairColour) {
    hairColor = colors[Math.floor(Math.random() * colors.length)];
  }
  if (!lockedEyeColour) {
    eyeColor = colors[Math.floor(Math.random() * colors.length)];
  }
  if (!lockedAffiliation) {
    affiliation = affiliations[Math.floor(Math.random() * affiliations.length)];
  }
  if (!lockedHairType) {
    hairType = hairTypes[Math.floor(Math.random() * hairTypes.length)];
  }
  if (!lockedHairStyle) {
    hairStyle = hairStyles[Math.floor(Math.random() * hairStyles.length)];
  }
  if (!lockedPersonalityType) {
    personalityType =
      personalityTypes[Math.floor(Math.random() * personalityTypes.length)];
  }
}

// lock functions
function lockRarity() {
  if (lockedRarity) {
    lockedRarity = false;
  } else {
    lockedRarity = true;
  }
}

function lockRegion() {
  if (lockedRegion) {
    lockedRegion = false;
  } else {
    lockedRegion = true;
  }
}

function lockWeapon() {
  if (lockedWeapon) {
    lockedWeapon = false;
  } else {
    lockedWeapon = true;
  }
}

function lockElement() {
  if (lockedElement) {
    lockedElement = false;
  } else {
    lockedElement = true;
  }
}

function lockGender() {
  if (lockedGender) {
    lockedGender = false;
  } else {
    lockedGender = true;
  }
}

function lockPronouns() {
  if (lockedPronouns) {
    lockedPronouns = false;
  } else {
    lockedPronouns = true;
  }
}

function lockHeight() {
  if (lockedHeight) {
    lockedHeight = false;
  } else {
    lockedHeight = true;
  }
}

function lockAge() {
  if (lockedAge) {
    lockedAge = false;
  } else {
    lockedAge = true;
  }
}

function lockRole() {
  if (lockedRole) {
    lockedRole = false;
  } else {
    lockedRole = true;
  }
}

function lockAscensionSubstat() {
  if (lockedAscensionSubstat) {
    lockedAscensionSubstat = false;
  } else {
    lockedAscensionSubstat = true;
  }
}

function lockHairColour() {
  if (lockedHairColour) {
    lockedHairColour = false;
  } else {
    lockedHairColour = true;
  }
}

function lockEyeColour() {
  if (lockedEyeColour) {
    lockedEyeColour = false;
  } else {
    lockedEyeColour = true;
  }
}

function lockAffiliation() {
  if (lockedAffiliation) {
    lockedAffiliation = false;
  } else {
    lockedAffiliation = true;
  }
}

function lockHairType() {
  if (lockedHairType) {
    lockedHairType = false;
  } else {
    lockedHairType = true;
  }
}

function lockHairStyle() {
  if (lockedHairStyle) {
    lockedHairStyle = false;
  } else {
    lockedHairStyle = true;
  }
}

function lockPersonalityType() {
  if (lockedPersonalityType) {
    lockedPersonalityType = false;
  } else {
    lockedPersonalityType = true;
  }
}
</script>

<svelte:head>
  <title>genshin oc generator | wanderer.moe</title>
</svelte:head>

<div class="flex min-h-screen flex-col">
  <section class="py-24">
    <div class="container mx-auto bg-[#121212] px-4">
      <div class="mb-6">
        <h1 class="gifont font-semibold text-white">Genshin OC Generator</h1>
        <p class="text-sm text-gray-400">
          Generates random statistics and characteristics for your OCs by
          clicking the 'Randomise' button
        </p>
        <p class="text-sm text-gray-400">
          You can lock your choices using the lock icon <i class="fas fa-lock"
          ></i>
          and unlock them using the unlock icon
          <i class="fas fa-lock-open"></i>
        </p>
      </div>

      <div>
        <p class="text-xl font-semibold text-white">STATS</p>
        <div class="mb-6 rounded-lg bg-[#1E1E1E] p-2 text-white">
          <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div class="container">
              <p class="font-semibold text-white">RARITY</p>
              <div class="flex items-center">
                <button
                  class="h-10  rounded-lg bg-indigo-400 bg-opacity-70 px-5 text-left font-semibold text-white hover:bg-indigo-500 focus:shadow focus:outline-none md:w-auto"
                  on:click="{lockRarity}"
                >
                  {#if lockedRarity}
                    <i class="fas fa-lock"></i>
                  {:else}
                    <i class="fas fa-lock-open"></i>
                  {/if}
                </button>
                <input
                  type="text"
                  class="h-10 w-full rounded-lg bg-[#121212] text-center text-indigo-400 focus:shadow focus:outline-none"
                  value="{rarity}"
                  readonly
                />
              </div>
            </div>

            <div class="container">
              <p class="font-semibold text-white">REGION</p>
              <div class="flex items-center">
                <button
                  class="h-10  rounded-lg bg-indigo-400 bg-opacity-70 px-5 text-left font-semibold text-white hover:bg-indigo-500 focus:shadow focus:outline-none md:w-auto"
                  on:click="{lockRegion}"
                >
                  {#if lockedRegion}
                    <i class="fas fa-lock"></i>
                  {:else}
                    <i class="fas fa-lock-open"></i>
                  {/if}
                </button>
                <input
                  type="text"
                  class="h-10 w-full rounded-lg bg-[#121212] text-center text-indigo-400 focus:shadow focus:outline-none"
                  value="{region}"
                  readonly
                />
              </div>
            </div>

            <div class="container">
              <p class="font-semibold text-white">WEAPON TYPE</p>
              <div class="flex items-center">
                <button
                  class="h-10  rounded-lg bg-indigo-400 bg-opacity-70 px-5 text-left font-semibold text-white hover:bg-indigo-500 focus:shadow focus:outline-none md:w-auto"
                  on:click="{lockWeapon}"
                >
                  {#if lockedWeapon}
                    <i class="fas fa-lock"></i>
                  {:else}
                    <i class="fas fa-lock-open"></i>
                  {/if}
                </button>
                <input
                  type="text"
                  class="h-10 w-full rounded-lg bg-[#121212] text-center text-indigo-400 focus:shadow focus:outline-none"
                  value="{weapon}"
                  readonly
                />
              </div>
            </div>

            <div class="container">
              <p class="font-semibold text-white">ELEMENT</p>
              <div class="flex items-center">
                <button
                  class="h-10  rounded-lg bg-indigo-400 bg-opacity-70 px-5 text-left font-semibold text-white hover:bg-indigo-500 focus:shadow focus:outline-none md:w-auto"
                  on:click="{lockElement}"
                >
                  {#if lockedElement}
                    <i class="fas fa-lock"></i>
                  {:else}
                    <i class="fas fa-lock-open"></i>
                  {/if}
                </button>
                <input
                  type="text"
                  class="h-10 w-full rounded-lg bg-[#121212] text-center text-indigo-400 focus:shadow focus:outline-none"
                  value="{element}"
                  readonly
                />
              </div>
            </div>

            <div class="container">
              <p class="font-semibold text-white">ROLE</p>
              <div class="flex items-center">
                <button
                  class="h-10  rounded-lg bg-indigo-400 bg-opacity-70 px-5 text-left font-semibold text-white hover:bg-indigo-500 focus:shadow focus:outline-none md:w-auto"
                  on:click="{lockRole}"
                >
                  {#if lockedRole}
                    <i class="fas fa-lock"></i>
                  {:else}
                    <i class="fas fa-lock-open"></i>
                  {/if}
                </button>
                <input
                  type="text"
                  class="h-10 w-full rounded-lg bg-[#121212] text-center text-indigo-400 focus:shadow focus:outline-none"
                  value="{role}"
                  readonly
                />
              </div>
            </div>

            <div class="container">
              <p class="font-semibold text-white">ASCENSION SUBSTATS</p>
              <div class="flex items-center">
                <button
                  class="h-10  rounded-lg bg-indigo-400 bg-opacity-70 px-5 text-left font-semibold text-white hover:bg-indigo-500 focus:shadow focus:outline-none md:w-auto"
                  on:click="{lockAscensionSubstat}"
                >
                  {#if lockedAscensionSubstat}
                    <i class="fas fa-lock"></i>
                  {:else}
                    <i class="fas fa-lock-open"></i>
                  {/if}
                </button>
                <input
                  type="text"
                  class="h-10 w-full rounded-lg bg-[#121212] text-center text-indigo-400 focus:shadow focus:outline-none"
                  value="{ascensionSubstat}"
                  readonly
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <p class="text-xl font-semibold text-white">CHARACTERISTICS</p>
        <div class="mb-6 rounded-lg bg-[#1E1E1E] p-2 text-white">
          <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div class="container">
              <p class="font-semibold text-white">GENDER</p>
              <div class="flex items-center">
                <button
                  class="h-10  rounded-lg bg-indigo-400 bg-opacity-70 px-5 text-left font-semibold text-white hover:bg-indigo-500 focus:shadow focus:outline-none md:w-auto"
                  on:click="{lockGender}"
                >
                  {#if lockedGender}
                    <i class="fas fa-lock"></i>
                  {:else}
                    <i class="fas fa-lock-open"></i>
                  {/if}
                </button>
                <input
                  type="text"
                  class="h-10 w-full rounded-lg bg-[#121212] text-center text-indigo-400 focus:shadow focus:outline-none"
                  value="{gender}"
                  readonly
                />
              </div>
            </div>

            <div class="container">
              <p class="font-semibold text-white">PRONOUNS</p>
              <div class="flex items-center">
                <button
                  class="h-10  rounded-lg bg-indigo-400 bg-opacity-70 px-5 text-left font-semibold text-white hover:bg-indigo-500 focus:shadow focus:outline-none md:w-auto"
                  on:click="{lockPronouns}"
                >
                  {#if lockedPronouns}
                    <i class="fas fa-lock"></i>
                  {:else}
                    <i class="fas fa-lock-open"></i>
                  {/if}
                </button>
                <input
                  type="text"
                  class="h-10 w-full rounded-lg bg-[#121212] text-center text-indigo-400 focus:shadow focus:outline-none"
                  value="{pronouns}"
                  readonly
                />
              </div>
            </div>

            <div class="container">
              <p class="font-semibold text-white">HEIGHT</p>
              <div class="flex items-center">
                <button
                  class="h-10  rounded-lg bg-indigo-400 bg-opacity-70 px-5 text-left font-semibold text-white hover:bg-indigo-500 focus:shadow focus:outline-none md:w-auto"
                  on:click="{lockHeight}"
                >
                  {#if lockedHeight}
                    <i class="fas fa-lock"></i>
                  {:else}
                    <i class="fas fa-lock-open"></i>
                  {/if}
                </button>
                <input
                  type="text"
                  class="h-10 w-full rounded-lg bg-[#121212] text-center text-indigo-400 focus:shadow focus:outline-none"
                  value="{height}"
                  readonly
                />
              </div>
            </div>

            <div class="container">
              <p class="font-semibold text-white">AGE</p>
              <div class="flex items-center">
                <button
                  class="h-10  rounded-lg bg-indigo-400 bg-opacity-70 px-5 text-left font-semibold text-white hover:bg-indigo-500 focus:shadow focus:outline-none md:w-auto"
                  on:click="{lockAge}"
                >
                  {#if lockedAge}
                    <i class="fas fa-lock"></i>
                  {:else}
                    <i class="fas fa-lock-open"></i>
                  {/if}
                </button>
                <input
                  type="text"
                  class="h-10 w-full rounded-lg bg-[#121212] text-center text-indigo-400 focus:shadow focus:outline-none"
                  value="{age}"
                  readonly
                />
              </div>
            </div>

            <div class="container">
              <p class="font-semibold text-white">HAIR COLOUR</p>
              <div class="flex items-center">
                <button
                  class="h-10  rounded-lg bg-indigo-400 bg-opacity-70 px-5 text-left font-semibold text-white hover:bg-indigo-500 focus:shadow focus:outline-none md:w-auto"
                  on:click="{lockHairColour}"
                >
                  {#if lockedHairColour}
                    <i class="fas fa-lock"></i>
                  {:else}
                    <i class="fas fa-lock-open"></i>
                  {/if}
                </button>
                <input
                  type="text"
                  class="h-10 w-full rounded-lg bg-[#121212] text-center text-indigo-400 focus:shadow focus:outline-none"
                  value="{hairColor}"
                  readonly
                />
              </div>
            </div>

            <div class="container">
              <p class="font-semibold text-white">EYE COLOUR</p>
              <div class="flex items-center">
                <button
                  class="h-10  rounded-lg bg-indigo-400 bg-opacity-70 px-5 text-left font-semibold text-white hover:bg-indigo-500 focus:shadow focus:outline-none md:w-auto"
                  on:click="{lockEyeColour}"
                >
                  {#if lockedEyeColour}
                    <i class="fas fa-lock"></i>
                  {:else}
                    <i class="fas fa-lock-open"></i>
                  {/if}
                </button>
                <input
                  type="text"
                  class="h-10 w-full rounded-lg bg-[#121212] text-center text-indigo-400 focus:shadow focus:outline-none"
                  value="{eyeColor}"
                  readonly
                />
              </div>
            </div>

            <div class="container">
              <p class="font-semibold text-white">AFFILIATION</p>
              <div class="flex items-center">
                <button
                  class="h-10  rounded-lg bg-indigo-400 bg-opacity-70 px-5 text-left font-semibold text-white hover:bg-indigo-500 focus:shadow focus:outline-none md:w-auto"
                  on:click="{lockAffiliation}"
                >
                  {#if lockedAffiliation}
                    <i class="fas fa-lock"></i>
                  {:else}
                    <i class="fas fa-lock-open"></i>
                  {/if}
                </button>
                <input
                  type="text"
                  class="h-10 w-full rounded-lg bg-[#121212] text-center text-indigo-400 focus:shadow focus:outline-none"
                  value="{affiliation}"
                  readonly
                />
              </div>
            </div>

            <div class="container">
              <p class="font-semibold text-white">HAIR TYPE</p>
              <div class="flex items-center">
                <button
                  class="h-10  rounded-lg bg-indigo-400 bg-opacity-70 px-5 text-left font-semibold text-white hover:bg-indigo-500 focus:shadow focus:outline-none md:w-auto"
                  on:click="{lockHairType}"
                >
                  {#if lockedHairType}
                    <i class="fas fa-lock"></i>
                  {:else}
                    <i class="fas fa-lock-open"></i>
                  {/if}
                </button>
                <input
                  type="text"
                  class="h-10 w-full rounded-lg bg-[#121212] text-center text-indigo-400 focus:shadow focus:outline-none"
                  value="{hairType}"
                  readonly
                />
              </div>
            </div>

            <div class="container">
              <p class="font-semibold text-white">HAIR STYLE</p>
              <div class="flex items-center">
                <button
                  class="h-10  rounded-lg bg-indigo-400 bg-opacity-70 px-5 text-left font-semibold text-white hover:bg-indigo-500 focus:shadow focus:outline-none md:w-auto"
                  on:click="{lockHairStyle}"
                >
                  {#if lockedHairStyle}
                    <i class="fas fa-lock"></i>
                  {:else}
                    <i class="fas fa-lock-open"></i>
                  {/if}
                </button>
                <input
                  type="text"
                  class="h-10 w-full rounded-lg bg-[#121212] text-center text-indigo-400 focus:shadow focus:outline-none"
                  value="{hairStyle}"
                  readonly
                />
              </div>
            </div>

            <div class="container">
              <p class="font-semibold text-white">PERSONALITY TYPE</p>
              <div class="flex items-center">
                <button
                  class="h-10  rounded-lg bg-indigo-400 bg-opacity-70 px-5 text-left font-semibold text-white hover:bg-indigo-500 focus:shadow focus:outline-none md:w-auto"
                  on:click="{lockPersonalityType}"
                >
                  {#if lockedPersonalityType}
                    <i class="fas fa-lock"></i>
                  {:else}
                    <i class="fas fa-lock-open"></i>
                  {/if}
                </button>
                <input
                  type="text"
                  class="h-10 w-full rounded-lg bg-[#121212] text-center text-indigo-400 focus:shadow focus:outline-none"
                  value="{personalityType}"
                  readonly
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-2">
        <div class="flex justify-start gap-4">
          <button
            class="h-10 w-1/2 rounded-lg bg-indigo-400 bg-opacity-70 px-5 text-left font-semibold text-white hover:bg-indigo-500 focus:shadow focus:outline-none md:w-auto"
            on:click="{randomiseStats}"
          >
            <i class="fas fa-random"></i>
            Randomise
          </button>
        </div>
      </div>
    </div>
  </section>
</div>
