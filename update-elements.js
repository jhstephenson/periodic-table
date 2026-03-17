import fs from "fs";
import https from "https";

const elementsFile = fs.readFileSync("./src/elements.js", "utf-8");
const elementsMatch = elementsFile.match(/export const ELEMENTS = ([\s\S]*);/);

if (!elementsMatch) {
  console.error("Could not find ELEMENTS array in ./src/elements.js");
  process.exit(1);
}

// This is a bit of a hack to parse the array, but it works for this specific case.
const existingElements = eval(elementsMatch[1]);

https.get("https://raw.githubusercontent.com/Bowserinator/Periodic-Table-JSON/master/PeriodicTableJSON.json", (res) => {
  let body = "";
  res.on("data", (chunk) => {
    body += chunk;
  });
  res.on("end", () => {
    try {
      const newElements = JSON.parse(body).elements;
      const mergedElements = existingElements.map((el) => {
        const newEl = newElements.find((newEl) => newEl.number === el.z);
        if (newEl) {
          return {
            ...el,
            electronegativity_pauling: newEl.electronegativity_pauling,
            ionization_energies: newEl.ionization_energies,
            electron_affinity: newEl.electron_affinity,
            shells: newEl.shells,
          };
        }
        return el;
      });
      fs.writeFileSync("./src/elements.js", `export const ELEMENTS = ${JSON.stringify(mergedElements, null, 2)};`);
      console.log("Successfully updated elements.js");
    } catch (e) {
      console.error("Error parsing or processing new element data:", e);
      process.exit(1);
    }
  });
}).on("error", (e) => {
  console.error("Error fetching new element data:", e);
  process.exit(1);
});
