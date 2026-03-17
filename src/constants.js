export const CELL = 56;
export const GAP = 2;

export const TRENDS = [
  { value: null, label: "No Trend", description: "Display elements by their category colors." },
  { value: "electronegativity_pauling", label: "Electronegativity", description: "A measure of the tendency of an atom to attract a bonding pair of electrons." },
  { value: "ionization_energies", label: "Ionization Energy", description: "The energy required to remove an electron from a gaseous atom or ion." },
  { value: "electron_affinity", label: "Electron Affinity", description: "The energy change that occurs when an electron is added to a neutral atom." },
];

export const PHASES = [
  { value: "all", label: "All Phases", description: "Show all elements regardless of their phase." },
  { value: "solid", label: "Solid", description: "Elements that are solid at standard temperature and pressure." },
  { value: "liquid", label: "Liquid", description: "Elements that are liquid at standard temperature and pressure." },
  { value: "gas", label: "Gas", description: "Elements that are gas at standard temperature and pressure." },
];
