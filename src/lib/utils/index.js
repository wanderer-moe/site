import fs from "fs"; // TODO

export const fetchImages = async (location) => {
  console.log("fetchImages", location);

  let allImageFiles = [];

  switch (location) {
    case "characterparts":
      allImageFiles =
        import.meta.glob("/static/images/characterparts/*.png");
      break;
    case "emotes":
      allImageFiles =
        import.meta.glob("/static/images/emotes/*.png");
      break;
    case "splashart":
      allImageFiles =
        import.meta.glob("/static/images/splashart/*.png");
      break;
    case "tcg":
      allImageFiles =
        import.meta.glob("/static/images/tcg/*.png");
      break;
    default:
      throw new Error("Unrecognized image location");
  }

  const iterableImageFiles = Object.entries(allImageFiles);

  const allImages = await Promise.all(
    iterableImageFiles.map(async ([path]) => {
      const name = path.split("/").pop().split(".").shift();
      const imagePath = path;
      // TODO: implement this in properly? idk how, i'll have to figure it out. 
      // dateUploaded = last modified date
      // const dateUploaded = fs.statSync(`.${path}`).mtime;

      return {
        name: name,
        path: imagePath,
        // dateUploaded: dateUploaded,
      };
    })
  );

  return allImages;
};


export const fetchCharacterData = async (location) => {
  console.log("fetchCharacterData", location);
  let allDataFiles = [];

  // if location is characters, then the path sdfis /src/data/characters
  if (location == "characters") {
    allDataFiles =
      import.meta.glob("/src/data/characters/*.json");
  }
  // get the name, rarity and element from each data file and return it as an array
  const iterableDataFiles = Object.entries(allDataFiles);

  const allData = await Promise.all(
    iterableDataFiles.map(async ([path]) => {
      const name = path.split("/").pop().split(".").shift();
      const data = await import(`../../data/characters/${name}.json`);

      return {
        name: data.default.name,
        otherName: name,
        rarity: data.rarity,
        element: data.element,
        weaponType: data.weapontype,
        released: data.released ? data.released : true,
      };
    })
  );
  return allData;
};

export const fetchArtifactData = async (location) => {
  console.log("fetchArtifactData", location);
  let allDataFilesArtifact = [];

  // if location is artifacts, then the path is /src/data/artifacts
  if (location == "artifacts") {
    allDataFilesArtifact =
      import.meta.glob("/src/data/artifacts/*.json");
  }

  // get the name, rarity from each data file and return it as an array
  const iterableDataFiles = Object.entries(allDataFilesArtifact);

  const allData = await Promise.all(
    iterableDataFiles.map(async ([path]) => {
      const name = path.split("/").pop().split(".").shift();
      const data = await import(`../../data/artifacts/${name}.json`);
      const fullName = data.default.name.replace(/'/g, "");
      const rarity = data.rarity;
      const released = data.released ? data.released : true;

      return {
        name: fullName,
        otherName: name,
        rarity: rarity,
        released: released,
      };
    })
  );
  return allData;
};