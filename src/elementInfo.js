// Bundled element descriptions, properties, uses, and fun facts for all 118 elements.
// Keyed by atomic number.

const ELEMENT_INFO = {
  1: {
    description: "Hydrogen is the lightest and most abundant element in the universe, making up roughly 75% of all normal matter by mass. It is a colorless, odorless, highly flammable diatomic gas under standard conditions.",
    properties: "Hydrogen has the lowest density of any gas. It forms both covalent and ionic compounds readily, and its single electron makes it unique in bonding behavior, sometimes acting like an alkali metal and other times like a halogen.",
    uses: [
      "Rocket fuel and aerospace propulsion (liquid hydrogen + liquid oxygen)",
      "Petroleum refining and ammonia production (Haber process)",
      "Fuel cells for clean energy vehicles and power generation",
      "Welding and metal cutting with oxy-hydrogen torches"
    ],
    funFact: "A single teaspoon of liquid hydrogen weighs only about 0.07 grams — roughly 14 times lighter than a teaspoon of water."
  },
  2: {
    description: "Helium is the second lightest and second most abundant element in the observable universe. It is a monatomic noble gas that is colorless, odorless, tasteless, and non-toxic.",
    properties: "Helium has the lowest boiling point of any element at -268.93°C, and it is the only element that cannot be solidified at atmospheric pressure. It exhibits superfluidity near absolute zero, flowing without friction.",
    uses: [
      "Cryogenics — cooling MRI superconducting magnets in hospitals",
      "Filling balloons and airships due to its low density and non-flammability",
      "Leak detection in high-vacuum and pressurized systems",
      "Protective shielding gas in arc welding"
    ],
    funFact: "Helium was discovered on the Sun (via spectroscopy) 27 years before it was found on Earth — its name comes from 'Helios,' the Greek sun god."
  },
  3: {
    description: "Lithium is the lightest metal and the least dense solid element. It is a soft, silvery-white alkali metal that tarnishes rapidly in air and reacts vigorously with water.",
    properties: "Lithium has the highest specific heat capacity of any solid element. It is soft enough to cut with a kitchen knife and floats on water while reacting with it, producing hydrogen gas and lithium hydroxide.",
    uses: [
      "Rechargeable lithium-ion batteries for electronics and electric vehicles",
      "Psychiatric medication for treating bipolar disorder",
      "Lightweight alloys for aerospace applications",
      "Flux additives in ceramics, glass, and metallurgy"
    ],
    funFact: "Much of the lithium in the universe was produced during the Big Bang itself — it is one of only three elements (along with hydrogen and helium) created in primordial nucleosynthesis."
  },
  4: {
    description: "Beryllium is a hard, lightweight, steel-gray alkaline earth metal. It is relatively rare on Earth and is notable for its exceptional stiffness and low density.",
    properties: "Beryllium is one-third lighter than aluminum yet six times stiffer than steel. It is transparent to X-rays and does not spark when struck against other metals, making it useful in non-sparking tools.",
    uses: [
      "X-ray windows in medical and scientific equipment",
      "Aerospace structural materials and satellite components",
      "Nuclear reactor moderators and neutron reflectors",
      "Copper-beryllium alloys for non-sparking tools and springs"
    ],
    funFact: "Beryllium compounds taste sweet, which is why it was originally called 'glucinium' from the Greek word for sweet — but its dust is extremely toxic to inhale."
  },
  5: {
    description: "Boron is a metalloid found primarily in borax deposits. It is essential to plant life but relatively rare in the Earth's crust, and exists in several allotropic forms.",
    properties: "Boron is extremely hard (9.3 on the Mohs scale) and has a very high melting point. It is a poor electrical conductor at room temperature but becomes a better conductor at higher temperatures, similar to semiconductors.",
    uses: [
      "Borosilicate glass (Pyrex) for lab equipment and cookware",
      "Fiberglass insulation for buildings",
      "Neodymium-iron-boron (NdFeB) permanent magnets",
      "Boron-based detergents and bleaches (sodium perborate)"
    ],
    funFact: "Boron nitride, a compound of boron, can form a crystal structure nearly as hard as diamond — and in some conditions may actually be harder."
  },
  6: {
    description: "Carbon is the basis of all known life on Earth and the fourth most abundant element in the universe. It can form more compounds than any other element, with nearly 10 million known carbon-containing molecules.",
    properties: "Carbon has the highest melting point of all elements at 3,550°C. Its allotropes range from the hardest natural substance (diamond) to one of the softest (graphite), and include fullerenes, graphene, and carbon nanotubes.",
    uses: [
      "Steel production — carbon is the key alloying element in steel",
      "Fossil fuels (coal, oil, natural gas) for energy",
      "Carbon fiber composites in aerospace, sports, and automotive",
      "Activated carbon for water filtration and air purification"
    ],
    funFact: "A single sheet of graphene (one atom thick layer of carbon) is about 200 times stronger than steel, yet so thin that a stack of 3 million sheets would be only 1 millimeter thick."
  },
  7: {
    description: "Nitrogen makes up about 78% of Earth's atmosphere by volume, making it the most abundant uncombined element accessible on the planet's surface. It is a colorless, odorless diatomic gas.",
    properties: "The triple bond in molecular nitrogen (N₂) is one of the strongest chemical bonds known, requiring 945 kJ/mol to break. This makes nitrogen gas remarkably inert at standard conditions despite nitrogen's importance in biological molecules.",
    uses: [
      "Ammonia and fertilizer production via the Haber-Bosch process",
      "Food packaging — modified atmosphere to prevent oxidation",
      "Liquid nitrogen for cryogenic freezing and preservation",
      "Pressurizing aircraft tires and fuel systems"
    ],
    funFact: "The Haber-Bosch process for converting atmospheric nitrogen into ammonia fertilizer is estimated to sustain roughly half the world's current population."
  },
  8: {
    description: "Oxygen is the third most abundant element in the universe and the most abundant element by mass in the Earth's crust. It is essential for aerobic respiration in most living organisms.",
    properties: "Oxygen is a highly reactive nonmetal and a powerful oxidizing agent. Liquid oxygen is pale blue and is attracted to magnets due to its paramagnetic nature — an unusual property for a nonmetal.",
    uses: [
      "Medical oxygen therapy and life support systems",
      "Steel manufacturing via basic oxygen steelmaking",
      "Rocket propulsion as liquid oxidizer",
      "Water treatment and wastewater processing"
    ],
    funFact: "Oxygen wasn't always abundant in Earth's atmosphere — the 'Great Oxidation Event' about 2.4 billion years ago, caused by cyanobacteria, was initially a mass extinction event for anaerobic life."
  },
  9: {
    description: "Fluorine is the lightest halogen and the most electronegative and reactive of all elements. It is a pale yellow, extremely corrosive gas that reacts with virtually every other element.",
    properties: "Fluorine's extreme electronegativity gives it the ability to oxidize almost anything it contacts, including many materials normally considered inert. It forms compounds with all elements except helium, neon, and argon.",
    uses: [
      "Fluoride in toothpaste and drinking water for dental health",
      "Teflon (PTFE) non-stick coatings for cookware and industrial use",
      "Uranium enrichment via uranium hexafluoride (UF₆)",
      "Refrigerants (hydrofluorocarbons) and pharmaceutical compounds"
    ],
    funFact: "Isolating fluorine was so dangerous that several early chemists were killed or seriously injured in the attempt — Henri Moissan finally succeeded in 1886 and won a Nobel Prize for it."
  },
  10: {
    description: "Neon is a noble gas known for its distinctive reddish-orange glow when used in discharge tubes. Despite being the fifth most abundant element in the universe, it is quite rare on Earth.",
    properties: "Neon has a very narrow liquid range (about 2.5°C between melting and boiling points) and produces the most intense light discharge of all noble gases at normal voltages. It is completely inert under all standard conditions.",
    uses: [
      "Neon signs and advertising displays",
      "High-voltage indicator lights and lightning arrestors",
      "Cryogenic refrigeration applications",
      "Helium-neon lasers for barcode readers and alignment"
    ],
    funFact: "True neon signs only glow reddish-orange — signs in other colors use different gases (argon for blue, mercury vapor for green) or phosphor coatings, though they are all commonly called 'neon.'"
  },
  11: {
    description: "Sodium is a soft, highly reactive alkali metal with a silvery-white appearance. It is the sixth most abundant element on Earth and is essential for animal life but never found free in nature due to its reactivity.",
    properties: "Sodium is soft enough to cut with a butter knife and light enough to float on water — though this is a dangerous combination since it reacts violently with water, generating hydrogen gas and enough heat to ignite it.",
    uses: [
      "Table salt (sodium chloride) — essential for food and preservation",
      "Sodium hydroxide (lye) for soap, paper, and chemical manufacturing",
      "Sodium-vapor lamps for street and highway lighting",
      "Heat transfer fluid in certain nuclear reactor designs"
    ],
    funFact: "Sodium's chemical symbol 'Na' comes from the Latin 'natrium,' which itself traces back to an ancient Egyptian word for a sodium carbonate mineral found in dried lake beds."
  },
  12: {
    description: "Magnesium is a shiny, silvery-white alkaline earth metal that is the eighth most abundant element in the Earth's crust. It is vital to all living cells, where it plays a role in over 300 enzymatic reactions.",
    properties: "Magnesium is remarkably light — about two-thirds the density of aluminum. It burns with an intensely bright white flame that is difficult to extinguish with water, as it can actually decompose water at high temperatures.",
    uses: [
      "Lightweight structural alloys for automotive and aerospace parts",
      "Dietary supplements and antacid medications",
      "Flares, fireworks, and incendiary devices (brilliant white light)",
      "Sacrificial anodes for corrosion protection of steel structures"
    ],
    funFact: "Magnesium is produced in massive quantities inside aging stars — when a star about 8 times the Sun's mass reaches its final stages, carbon burning produces magnesium as a primary product."
  },
  13: {
    description: "Aluminium is the most abundant metal in Earth's crust and the third most abundant element overall. It is a silvery-white, lightweight metal that forms a protective oxide layer preventing corrosion.",
    properties: "Aluminium is about one-third the density of steel yet can be alloyed to match steel's strength. Its natural oxide coating (Al₂O₃) is extremely hard and self-healing, giving it excellent corrosion resistance.",
    uses: [
      "Aircraft and vehicle construction for weight reduction",
      "Beverage cans and food packaging (infinitely recyclable)",
      "Window frames, building facades, and construction materials",
      "Electrical transmission lines (lighter alternative to copper)"
    ],
    funFact: "Before the Hall-Héroult process was developed in 1886, aluminium was more expensive than gold — Napoleon III reportedly served his most honored guests with aluminium cutlery while lesser guests used gold."
  },
  14: {
    description: "Silicon is the second most abundant element in the Earth's crust after oxygen and is a metalloid with semiconducting properties that have made it the foundation of modern electronics.",
    properties: "Silicon has a diamond cubic crystal structure and exhibits a bandgap of 1.12 eV, making it ideal for semiconductor applications. It forms strong covalent bonds with oxygen, creating silicate minerals that make up over 90% of Earth's crust.",
    uses: [
      "Semiconductor chips — the basis of all modern computing",
      "Solar photovoltaic cells for renewable energy",
      "Silicone polymers for sealants, lubricants, and medical implants",
      "Glass production (silicon dioxide is the primary component)"
    ],
    funFact: "The name 'Silicon Valley' comes from the silicon used in semiconductor chips — but pure electronic-grade silicon (99.9999999% pure) is one of the purest materials ever manufactured by humans."
  },
  15: {
    description: "Phosphorus is a nonmetal essential to life, forming the backbone of DNA and RNA and serving as the primary energy currency in cells via ATP. It was the first element discovered through scientific experimentation.",
    properties: "Phosphorus exists in several allotropes: white phosphorus is waxy, toxic, and glows in the dark; red phosphorus is stable and non-toxic; and black phosphorus is the most thermodynamically stable form and has semiconductor properties.",
    uses: [
      "Fertilizers (phosphates) — critical for global food production",
      "Match heads and pyrotechnics (red phosphorus)",
      "Phosphoric acid in soft drinks and food processing",
      "Detergents and water treatment chemicals"
    ],
    funFact: "White phosphorus glows faintly green in the dark through chemiluminescence — this eerie glow is what gave the element its name, from the Greek 'phosphoros' meaning 'light-bearer.'"
  },
  16: {
    description: "Sulfur is a bright yellow nonmetal that has been known since antiquity, often associated with volcanic activity. It is the tenth most abundant element in the universe and essential to all life.",
    properties: "Sulfur has more solid allotropes than any other element — over 30 forms are known. It burns with a distinctive blue flame and forms compounds in oxidation states from -2 to +6, giving it extremely versatile chemistry.",
    uses: [
      "Sulfuric acid production — the world's most-produced industrial chemical",
      "Vulcanization of rubber for tires and industrial products",
      "Fungicides and pesticides in agriculture",
      "Petroleum refining (removal of sulfur from fuels)"
    ],
    funFact: "Sulfuric acid is so important industrially that a nation's sulfuric acid production was once considered a reliable indicator of its industrial strength."
  },
  17: {
    description: "Chlorine is a yellow-green gas with a pungent, suffocating odor. It is the second lightest halogen and one of the most widely used chemical elements in industrial processes.",
    properties: "Chlorine is a powerful oxidizer and disinfectant. It readily forms compounds with almost all elements and has the ability to disrupt biological processes, which makes it both useful for water treatment and dangerous as a chemical agent.",
    uses: [
      "Water purification and swimming pool disinfection",
      "PVC plastic production (polyvinyl chloride)",
      "Bleaching agents for paper and textiles",
      "Hydrochloric acid manufacturing"
    ],
    funFact: "About 85% of pharmaceutical drugs contain chlorine or are manufactured using chlorine chemistry at some point in their production process."
  },
  18: {
    description: "Argon is the third most abundant gas in Earth's atmosphere at 0.93%. It is a noble gas that gets its name from the Greek word 'argos' meaning lazy or inactive, reflecting its chemical inertness.",
    properties: "Argon is completely colorless, odorless, and non-toxic. It is denser than air and produces a pale lavender-violet glow when placed in an electric field. It forms no stable chemical compounds under normal conditions.",
    uses: [
      "Shielding gas in TIG and MIG welding to prevent oxidation",
      "Filling incandescent and fluorescent light bulbs",
      "Insulating gas between double-pane windows",
      "Preserving historical documents and wine in oxygen-free environments"
    ],
    funFact: "Argon makes up nearly 1% of every breath you take — you are breathing in and out more argon atoms right now than the total number of breaths you will ever take in your lifetime."
  },
  19: {
    description: "Potassium is a soft, silvery-white alkali metal that is vital to all living cells. It is the seventh most abundant element in Earth's crust and the second lightest known metal after lithium.",
    properties: "Potassium is so soft it can be cut with a spoon and so reactive that it must be stored under oil or inert gas. It reacts more violently with water than sodium, producing a distinctive lilac-colored flame.",
    uses: [
      "Potash fertilizers (potassium chloride) for agriculture",
      "Potassium hydroxide in soap and detergent production",
      "Food preservatives (potassium sorbate) and salt substitutes",
      "Essential dietary mineral for heart and muscle function"
    ],
    funFact: "Bananas are famously associated with potassium, but avocados, sweet potatoes, and spinach actually contain more potassium per serving than bananas."
  },
  20: {
    description: "Calcium is the fifth most abundant element in Earth's crust and the most abundant metal in the human body. It is an alkaline earth metal essential for bones, teeth, and cellular signaling.",
    properties: "Pure calcium is a moderately hard, silvery metal that reacts readily with water and tarnishes quickly in air. It has good electrical conductivity and its compounds are among the most widespread minerals on Earth, including limestone and marble.",
    uses: [
      "Cement and concrete production (calcium silicates)",
      "Dietary supplements and fortified foods for bone health",
      "Steel deoxidizer and alloy additive in metallurgy",
      "Calcium carbonate in antacids, paper coatings, and construction"
    ],
    funFact: "Your body contains about 1 kg of calcium — 99% of it is in your bones and teeth, but the remaining 1% in your blood is so critical that your body will dissolve its own bones to maintain it."
  },
  21: {
    description: "Scandium is a soft, silvery transition metal often classified with the rare earth elements. It is widely distributed in low concentrations across many minerals but rarely found in economically mineable deposits.",
    properties: "Scandium has a higher melting point than aluminium and a density only slightly higher, making it attractive for lightweight high-performance alloys. It develops a slightly yellowish or pinkish tint when exposed to air.",
    uses: [
      "Aluminium-scandium alloys for aerospace and sports equipment",
      "High-intensity metal halide lamps mimicking natural sunlight",
      "Solid oxide fuel cells (scandium-stabilized zirconia)",
      "Lightweight bicycle frames and baseball bats"
    ],
    funFact: "Scandium was predicted by Mendeleev in 1871 as 'eka-boron' — when Lars Fredrik Nilson discovered it in 1879, its properties matched Mendeleev's predictions almost exactly, validating the periodic table."
  },
  22: {
    description: "Titanium is a lustrous, strong transition metal known for its exceptional strength-to-weight ratio and corrosion resistance. It is the ninth most abundant element in Earth's crust.",
    properties: "Titanium is as strong as steel but 45% lighter, and it resists corrosion from seawater, aqua regia, and chlorine. It is non-magnetic, non-toxic, and biocompatible with human tissue, making it ideal for implants.",
    uses: [
      "Aerospace components — jet engines, airframes, and spacecraft",
      "Medical implants — hip and knee joints, dental implants, surgical tools",
      "Titanium dioxide (TiO₂) white pigment in paint, sunscreen, and paper",
      "High-performance sports equipment and luxury watches"
    ],
    funFact: "Despite being abundant in Earth's crust, titanium is expensive because extracting pure metal from its ore (the Kroll process) is extremely energy-intensive — roughly 10 times more than steel production."
  },
  23: {
    description: "Vanadium is a hard, silvery-grey transition metal rarely found as a free element in nature. It was named after Vanadís, the Scandinavian goddess of beauty, because of the many beautiful colors of its compounds.",
    properties: "Vanadium has excellent corrosion resistance and forms compounds in oxidation states from -1 to +5, each with a distinctly different color. Small additions of vanadium dramatically increase the strength and toughness of steel.",
    uses: [
      "High-strength low-alloy steel for tools, axles, and armor plating",
      "Vanadium redox flow batteries for grid-scale energy storage",
      "Titanium-aluminium-vanadium alloy (Ti-6Al-4V) in aerospace",
      "Catalyst in sulfuric acid production (contact process)"
    ],
    funFact: "Vanadium compounds exhibit a remarkable rainbow of colors across its oxidation states: +2 is violet, +3 is green, +4 is blue, and +5 is yellow."
  },
  24: {
    description: "Chromium is a hard, lustrous transition metal known for its brilliant mirror-like finish and resistance to tarnishing. It is the 21st most abundant element in Earth's crust.",
    properties: "Chromium is the hardest known metal and takes a higher polish than nearly any other element. It has an extremely high melting point (1,907°C) and its oxide layer provides exceptional corrosion resistance.",
    uses: [
      "Stainless steel production (10-20% chromium content)",
      "Chrome plating for decorative and anti-corrosion applications",
      "Chromium pigments — chrome yellow, chrome green, chrome oxide",
      "Leather tanning (chromium(III) sulfate)"
    ],
    funFact: "The vivid red color of rubies and the green of emeralds are both caused by trace amounts of chromium — the same element creates completely different colors depending on the crystal structure it enters."
  },
  25: {
    description: "Manganese is a hard, brittle transition metal essential to steel production and biological function. It is the 12th most abundant element in Earth's crust and is found in over 300 different minerals.",
    properties: "Manganese is too brittle to be used as a structural metal on its own, but in alloys it dramatically improves strength, hardness, and wear resistance. It can exist in oxidation states from -3 to +7, though +2, +4, and +7 are most common.",
    uses: [
      "Steel production — virtually all steel contains manganese as a deoxidizer",
      "Lithium-manganese battery cathodes for electronics",
      "Manganese dioxide in alkaline batteries and dry cells",
      "Purple-colored potassium permanganate for water treatment"
    ],
    funFact: "About 90% of all manganese produced goes into steel manufacturing — without it, steel would be too brittle and full of sulfur impurities to use in construction or manufacturing."
  },
  26: {
    description: "Iron is the most widely used metal on Earth and the fourth most abundant element in the crust. It has been used by humans for thousands of years and forms the core of our planet.",
    properties: "Iron is a relatively soft metal in its pure form but becomes extraordinarily strong and versatile when alloyed with carbon to make steel. It is ferromagnetic — one of only three elements naturally magnetic at room temperature.",
    uses: [
      "Steel production — the backbone of construction and infrastructure",
      "Cast iron for cookware, pipes, and engine blocks",
      "Hemoglobin in blood — iron atoms carry oxygen to every cell",
      "Permanent magnets and electromagnets"
    ],
    funFact: "Earth's core is primarily iron, and it generates our magnetic field that shields us from solar radiation — without iron, life on Earth's surface would likely be impossible."
  },
  27: {
    description: "Cobalt is a hard, lustrous, bluish-gray transition metal found in the Earth's crust primarily in chemically combined form. Its compounds have been used for centuries to produce brilliant blue pigments.",
    properties: "Cobalt is one of only three naturally ferromagnetic elements at room temperature. It retains its magnetism to the highest temperature of any element (1,115°C Curie point) and its alloys maintain strength at high temperatures.",
    uses: [
      "Lithium-ion battery cathodes (lithium cobalt oxide)",
      "Superalloys for jet engines and gas turbines",
      "Cobalt blue pigment in ceramics, glass, and paint",
      "Cobalt-60 radioactive isotope for cancer radiation therapy"
    ],
    funFact: "Cobalt gets its name from the German word 'Kobold' meaning goblin — medieval miners blamed mischievous goblins when cobalt-containing ores released toxic arsenic fumes during smelting."
  },
  28: {
    description: "Nickel is a silvery-white transition metal with a slight golden tinge, known for its excellent corrosion resistance and versatile alloying properties. It is the fifth most abundant element on Earth overall.",
    properties: "Nickel is ferromagnetic at room temperature, hard yet ductile, and highly resistant to oxidation and corrosion. It maintains its strength and toughness over a wide temperature range, from cryogenic to over 1,000°C.",
    uses: [
      "Stainless steel and nickel alloys (Monel, Inconel) for corrosion resistance",
      "Rechargeable battery electrodes (NiMH and NiCd batteries)",
      "Electroplating for decorative and protective coatings",
      "Coinage — the U.S. five-cent 'nickel' contains 25% nickel"
    ],
    funFact: "Nickel gets its name from the German 'Kupfernickel' (Old Nick's copper) — frustrated copper miners in Saxony blamed a mischievous sprite when the reddish ore they found yielded no copper."
  },
  29: {
    description: "Copper is one of the few metals that naturally occurs in a directly usable metallic form and was one of the first metals ever used by humans, dating back over 10,000 years.",
    properties: "Copper has the second-highest electrical and thermal conductivity of any element (after silver). It is naturally antimicrobial — bacteria that land on copper surfaces die within hours — and it develops a distinctive green patina (verdigris) over time.",
    uses: [
      "Electrical wiring and components — the standard for conductors",
      "Plumbing pipes and fittings for water systems",
      "Bronze and brass alloys for hardware, instruments, and art",
      "Antimicrobial surfaces in hospitals and public spaces"
    ],
    funFact: "The Statue of Liberty contains about 80 tons of copper — its green color is the natural patina (copper carbonate) that formed after decades of exposure to the elements."
  },
  30: {
    description: "Zinc is a slightly brittle, bluish-white transition metal that is the 24th most abundant element in Earth's crust. It is essential to all living organisms, with the human body containing about 2-3 grams.",
    properties: "Zinc has a relatively low melting point for a metal (419.5°C) and is an excellent sacrificial anode — it corrodes preferentially to protect iron and steel. It becomes ductile between 100-150°C but brittle again above 210°C.",
    uses: [
      "Galvanizing steel to prevent rust and corrosion",
      "Zinc alloy die castings for automotive and hardware parts",
      "Dietary supplements and cold remedy lozenges",
      "Brass production (copper-zinc alloy)"
    ],
    funFact: "Zinc-air batteries have one of the highest energy densities of any battery type — they literally use oxygen from the air as a reactant, which is why hearing-aid batteries have a tab you must remove."
  },
  31: {
    description: "Gallium is a soft, silvery post-transition metal with a melting point just above room temperature. It is one of only a few metals that can melt in the palm of your hand.",
    properties: "Gallium melts at 29.76°C but doesn't boil until 2,204°C — giving it the widest liquid range of any element. Unlike most materials, gallium expands when it freezes, similar to water.",
    uses: [
      "Gallium arsenide (GaAs) semiconductors for high-speed electronics",
      "LEDs and laser diodes (gallium nitride blue LEDs)",
      "Medical thermometers as a non-toxic mercury replacement",
      "Solar cells (CIGS thin-film photovoltaics)"
    ],
    funFact: "A famous prank among chemists is making a teaspoon out of gallium — when someone stirs hot tea with it, the spoon melts and dissolves into the liquid."
  },
  32: {
    description: "Germanium is a lustrous, brittle metalloid in the carbon group. It was one of the key elements that validated Mendeleev's periodic table, as its properties closely matched his predictions for 'eka-silicon.'",
    properties: "Germanium is a semiconductor with properties between silicon and tin. It is transparent to infrared radiation and has a high refractive index, making it valuable for optical applications. Pure germanium is a poor conductor but becomes useful when doped.",
    uses: [
      "Fiber-optic systems (germanium-doped silica glass cores)",
      "Infrared optics — lenses and windows for thermal imaging cameras",
      "Polymerization catalysts for PET plastic production",
      "Transistors in early computing (before silicon dominated)"
    ],
    funFact: "The first transistor (1947) and the first integrated circuit (1958) both used germanium — it was the original semiconductor of the electronics age before silicon took over."
  },
  33: {
    description: "Arsenic is a metalloid with a long and notorious history, known both for its toxicity and its essential industrial applications. It occurs in many minerals and is widely distributed in the environment.",
    properties: "Arsenic exists in several allotropic forms — the most stable is a gray, brittle, metallic-looking solid. It sublimes at 614°C without melting at standard pressure, and it tarnishes in air forming a golden-bronze oxide layer.",
    uses: [
      "Gallium arsenide semiconductors for cell phones and satellites",
      "Wood preservative (chromated copper arsenate, now restricted)",
      "Lead-acid battery grid alloys for improved performance",
      "Specialty glass production (arsenic trioxide as a clarifier)"
    ],
    funFact: "Arsenic was called 'inheritance powder' in the Middle Ages and Renaissance because it was frequently used to poison wealthy relatives — it was nearly undetectable in food and mimicked natural diseases."
  },
  34: {
    description: "Selenium is a nonmetal chemically similar to sulfur and tellurium. It is an essential trace element for humans and animals but is toxic in larger amounts. It was named after Selene, the Greek moon goddess.",
    properties: "Selenium exists in several allotropic forms — gray (most stable, with semiconducting properties), red, and black. Its electrical conductivity increases dramatically when exposed to light, making it photosensitive.",
    uses: [
      "Glass manufacturing — decolorizing agent and red pigment",
      "Dietary supplements and animal feed additives",
      "Photovoltaic solar cells (CIGS thin-film technology)",
      "Anti-dandruff shampoos (selenium sulfide)"
    ],
    funFact: "Selenium's photoconductivity was the basis of early xerography (photocopying) — the first commercial photocopier, the Xerox 914, used selenium drums and revolutionized office work in 1959."
  },
  35: {
    description: "Bromine is the only nonmetallic element that is liquid at room temperature. It is a fuming, reddish-brown halogen with a strong, acrid odor and is found primarily in dissolved bromide salts in seawater.",
    properties: "Bromine is a powerful oxidizer that is less reactive than chlorine but more reactive than iodine. Its vapor is extremely irritating to mucous membranes and its liquid can cause severe burns on skin contact.",
    uses: [
      "Flame retardants in electronics, textiles, and building materials",
      "Drilling fluids (calcium and zinc bromide) for oil and gas wells",
      "Water purification, particularly for hot tubs and pools",
      "Silver bromide in traditional photographic film"
    ],
    funFact: "Bromine gets its name from the Greek 'bromos' meaning stench — it is one of the few elements whose name directly describes its smell, which is powerfully unpleasant even at low concentrations."
  },
  36: {
    description: "Krypton is a noble gas with very limited chemical reactivity, known primarily for its spectral lines and use in high-performance lighting. It is far rarer than argon in Earth's atmosphere.",
    properties: "Krypton produces a brilliant white light when electrified and can form unstable compounds with fluorine under extreme conditions (krypton difluoride). Its spectral emission lines are exceptionally sharp and well-defined.",
    uses: [
      "High-performance photographic flash equipment",
      "Energy-efficient fluorescent lamps and lighting",
      "Insulating gas for double-pane windows (better than argon)",
      "Scientific standard — krypton-86 once defined the meter"
    ],
    funFact: "Superman's home planet Krypton was named after this element, but the real krypton is a colorless, odorless gas with no special powers — though its name comes from the Greek 'kryptos' meaning hidden."
  },
  37: {
    description: "Rubidium is a soft, silvery-white alkali metal that is the second most electropositive element. It ignites spontaneously in air and reacts explosively with water.",
    properties: "Rubidium is so reactive it must be kept under vacuum or inert gas. It melts just above body temperature (39.3°C) and its flame color is a distinctive red-violet. Its isotope Rb-87 is radioactive with a half-life of 49 billion years.",
    uses: [
      "Atomic clocks (rubidium oscillators for GPS and telecommunications)",
      "Specialty glass for fiber optics",
      "Photocells and vacuum tubes",
      "Rubidium-strontium dating of geological samples"
    ],
    funFact: "Rubidium was one of the first elements discovered by spectroscopy — Bunsen and Kirchhoff named it for the prominent red (Latin: 'rubidus') lines in its emission spectrum in 1861."
  },
  38: {
    description: "Strontium is a soft, silvery-yellow alkaline earth metal that is highly reactive chemically. It is best known for the brilliant crimson-red color its compounds produce in flames.",
    properties: "Strontium is softer than calcium and decomposes in water more vigorously. It oxidizes rapidly in air, turning yellowish. Strontium has similar chemical properties to calcium and can substitute for it in biological systems.",
    uses: [
      "Red fireworks and emergency flares (strontium compounds)",
      "Ferrite ceramic magnets (strontium ferrite)",
      "Cathode ray tube glass (historically, for radiation shielding)",
      "Strontium ranelate for osteoporosis treatment"
    ],
    funFact: "Strontium-90, a radioactive isotope produced by nuclear fallout, is particularly dangerous because it mimics calcium — the body absorbs it into bones where it irradiates bone marrow."
  },
  39: {
    description: "Yttrium is a silvery-metallic transition metal that is chemically similar to the lanthanides. It is almost always found in combination with rare earth elements in nature.",
    properties: "Yttrium is relatively stable in air due to the formation of a protective oxide layer. It has a high melting point and its oxide (Y₂O₃) is extremely stable, with a melting point above 2,400°C.",
    uses: [
      "YAG (yttrium aluminium garnet) lasers for cutting and surgery",
      "Red phosphor in LED displays and television screens",
      "Yttria-stabilized zirconia for thermal barrier coatings and dental crowns",
      "High-temperature superconductors (YBCO ceramics)"
    ],
    funFact: "Yttrium is named after the Swedish village of Ytterby — remarkably, three other elements (terbium, erbium, and ytterbium) are also named after this same tiny quarry village."
  },
  40: {
    description: "Zirconium is a strong, malleable, ductile transition metal with exceptional resistance to corrosion. It is widely used in demanding environments where other metals would fail.",
    properties: "Zirconium is highly resistant to corrosion by acids, alkalis, and seawater. It has a very low neutron-absorption cross-section, making it nearly transparent to neutrons, and its alloys maintain structural integrity at very high temperatures.",
    uses: [
      "Nuclear reactor fuel rod cladding (zirconium alloys)",
      "Chemical processing equipment resistant to corrosive media",
      "Cubic zirconia gemstones (zirconium oxide crystals)",
      "Ceramic dental crowns and hip joint prosthetics"
    ],
    funFact: "Zirconium crystals (zircon) are the oldest known materials on Earth — some Australian zircon crystals are 4.4 billion years old, formed just 150 million years after the planet itself."
  },
  41: { description: "Niobium is a soft, grey, crystalline transition metal formerly known as columbium. It becomes a superconductor at cryogenic temperatures and is a vital component in advanced materials.", properties: "Niobium has excellent corrosion resistance and becomes superconducting below 9.3 K (-264°C). When processed into alloys, small additions significantly improve the strength and heat resistance of steel.", uses: ["High-strength low-alloy steel for oil pipelines and car bodies", "Superconducting magnets in MRI machines and particle accelerators", "Nickel-niobium superalloys for jet engine components", "Hypoallergenic jewelry and body piercing"], funFact: "The Large Hadron Collider at CERN uses over 1,200 tons of niobium-titanium superconducting cable — cooled to 1.9 K — to generate the powerful magnetic fields that steer particles at near-light speed." },
  42: { description: "Molybdenum is a silvery-grey transition metal with the sixth-highest melting point of any element. It is an essential trace element for most living organisms.", properties: "Molybdenum does not visibly react with oxygen or water at room temperature and has excellent resistance to corrosion. It retains its strength at very high temperatures where most metals would soften.", uses: ["High-strength steel alloys for structural and tool applications", "Catalyst in petroleum refining (hydrodesulfurization)", "Molybdenum disulfide (MoS₂) dry lubricant", "Filament supports and electrodes in high-temperature furnaces"], funFact: "An enzyme containing molybdenum (nitrogenase) in soil bacteria is responsible for converting atmospheric nitrogen into ammonia — without this single atom, most plants could not obtain nitrogen." },
  43: { description: "Technetium was the first artificially produced element, filling a gap in the periodic table. It has no stable isotopes and is radioactive in all forms.", properties: "Technetium is a silvery-grey metal that slowly tarnishes in moist air. Its most stable isotope (Tc-98) has a half-life of 4.2 million years. In solution, it can inhibit steel corrosion even at very low concentrations.", uses: ["Medical imaging — Tc-99m is the most widely used radioisotope in diagnostic medicine", "Radioactive tracer studies in metallurgy and biology", "Potential corrosion inhibitor for steel (research applications)", "Calibration source for particle detectors"], funFact: "Technetium-99m is used in over 30 million medical imaging procedures worldwide each year — its 6-hour half-life is long enough for imaging but short enough to minimize radiation exposure." },
  44: { description: "Ruthenium is a rare transition metal belonging to the platinum group. It is one of the rarest elements on Earth and is known for its exceptional hardness and catalytic properties.", properties: "Ruthenium is hard, brittle, and has excellent resistance to chemical attack. It has eight stable isotopes and can exist in a wide range of oxidation states from -2 to +8, giving it versatile catalytic activity.", uses: ["Hardening agent for platinum and palladium alloys", "Electrical contacts and chip resistors in electronics", "Catalyst for organic chemical synthesis", "Wear-resistant coatings for fountain pen nibs"], funFact: "Ruthenium is named after Russia (Ruthenia in Latin) — it was discovered in platinum ore from the Ural Mountains and is one of the rarest elements in Earth's crust." },
  45: { description: "Rhodium is an ultra-rare, silvery-white noble metal belonging to the platinum group. It is one of the most expensive precious metals and the rarest of the platinum group elements in Earth's crust.", properties: "Rhodium has the highest reflectance of any metal and is extremely resistant to corrosion and tarnishing. It has a higher melting point than platinum and is very hard, yet ductile.", uses: ["Catalytic converters in automobiles (reduces NOx emissions)", "Rhodium plating for jewelry and mirrors (brilliant white finish)", "Industrial catalyst for acetic acid and nitric acid production", "Thermocouple wires for high-temperature measurement"], funFact: "Rhodium is so rare and valuable that catalytic converter theft has become a major crime — a few grams of rhodium in each converter can be worth hundreds of dollars." },
  46: { description: "Palladium is a rare, lustrous silvery-white metal belonging to the platinum group. It has been in high demand for its catalytic properties and its ability to absorb large volumes of hydrogen.", properties: "Palladium can absorb up to 900 times its own volume of hydrogen gas at room temperature. It is the least dense and has the lowest melting point of the platinum group metals, yet has excellent catalytic activity.", uses: ["Catalytic converters for gasoline engines", "Electronics — multilayer ceramic capacitors (MLCCs)", "Hydrogen purification membranes", "Dental crowns and bridges (palladium alloys)"], funFact: "Palladium can absorb so much hydrogen that its lattice expands by about 10% — this property is used in hydrogen purification membranes that allow only hydrogen atoms to pass through." },
  47: { description: "Silver is a lustrous white precious metal that has the highest electrical and thermal conductivity of any element. It has been valued by human civilizations for thousands of years as currency and decoration.", properties: "Silver has the highest electrical conductivity, thermal conductivity, and reflectivity of all metals. It is quite ductile and malleable — one ounce can be drawn into 8,000 feet of wire. It naturally kills bacteria.", uses: ["Electronics and electrical contacts (highest conductivity)", "Jewelry, silverware, and decorative arts", "Photography (silver halide film)", "Medical applications — wound dressings with antimicrobial silver"], funFact: "Silver's antimicrobial properties were known long before germ theory — ancient civilizations stored water and wine in silver vessels to keep them fresh, not knowing the scientific reason it worked." },
  48: { description: "Cadmium is a soft, bluish-white metal that is chemically similar to zinc. It is toxic to humans and has been largely phased out of many applications due to environmental and health concerns.", properties: "Cadmium has a low melting point and is an excellent neutron absorber. It is resistant to corrosion in many environments and produces brilliant colors in its compounds — especially cadmium yellow and cadmium red.", uses: ["Nickel-cadmium (NiCd) rechargeable batteries", "Cadmium pigments for artist paints and plastics", "Corrosion-resistant cadmium plating for military/aerospace", "Nuclear reactor control rods (neutron absorption)"], funFact: "The brilliant yellow, orange, and red in many Impressionist and Post-Impressionist paintings — including works by Monet and Van Gogh — owe their vivid color to cadmium-based pigments." },
  49: { description: "Indium is a very soft, silvery-white post-transition metal with a distinctive metallic squeal when bent. It is one of the softest non-alkali metals and is relatively rare.", properties: "Indium is so soft it can be scratched with a fingernail and it wets glass surfaces, making it useful for seals. When bent, it emits a high-pitched cry known as the 'tin cry.' It has a low melting point (156.6°C).", uses: ["Indium tin oxide (ITO) transparent conductive coatings for touchscreens", "LCD and OLED display electrodes", "Low-melting solders and thermal interface materials", "Semiconductor compounds (InGaAs) for infrared detectors"], funFact: "Nearly every smartphone, tablet, and laptop screen relies on a thin coating of indium tin oxide — the element is so critical to display technology that it was identified as a strategic resource." },
  50: { description: "Tin is a malleable, silvery-white post-transition metal that has been known to humans since the Bronze Age. Combined with copper, it created bronze — the alloy that defined an era of civilization.", properties: "Tin has a low melting point and resists corrosion from water and acids. Below 13.2°C it can slowly transform from metallic 'white tin' to crumbly 'gray tin' — a phase change known as 'tin pest' or 'tin disease.'", uses: ["Tin-plated steel cans for food preservation", "Lead-free solder for electronics assembly", "Bronze alloys (tin + copper) for bearings and bells", "Float glass manufacturing (molten tin bath process)"], funFact: "The 'tin pest' phenomenon may have contributed to the failure of Napoleon's Russian campaign — legend holds that tin buttons on soldiers' uniforms crumbled in the extreme cold, though historians debate this." },
  51: { description: "Antimony is a lustrous, silvery metalloid that has been used since antiquity. The ancient Egyptians used antimony sulfide (stibnite) as an eyeliner cosmetic called kohl.", properties: "Antimony is a poor conductor of heat and electricity. Like water and bismuth, it expands upon solidification — making it valuable for type metal where sharp casting is needed. It is brittle and flaky in crystalline form.", uses: ["Flame retardant synergist (antimony trioxide) in plastics and textiles", "Lead-antimony alloys for battery plates and bullets", "Semiconductor compounds (InSb, GaSb) for infrared detectors", "Type metal for printing (historically, for sharp typeface castings)"], funFact: "Antimony pills — small balls of metallic antimony — were used as laxatives in the Middle Ages and were so durable they could be recovered and reused, earning them the nickname 'everlasting pills.'" },
  52: { description: "Tellurium is a brittle, silvery-white metalloid that is among the rarest stable solid elements in Earth's crust — comparable in abundance to platinum.", properties: "Tellurium is a semiconductor whose conductivity increases when exposed to light. When burned, it produces a greenish-blue flame. Exposure to even tiny amounts gives a person's breath and sweat an intense garlic-like odor.", uses: ["Cadmium telluride (CdTe) thin-film solar cells", "Thermoelectric cooling devices (bismuth telluride)", "Alloying additive to improve machinability of steel and copper", "Rubber vulcanization accelerator"], funFact: "Handling tellurium gives you 'tellurium breath' — a garlic-like odor that can persist for weeks, even from exposure to minute quantities. There is no known treatment to eliminate it faster." },
  53: { description: "Iodine is a shiny, purple-black solid halogen that sublimes readily into a distinctive violet gas. It is an essential nutrient required for thyroid hormone production in all vertebrates.", properties: "Iodine is the least reactive of the common halogens and the only one that is a solid at room temperature. It dissolves poorly in water but readily in organic solvents, producing brown solutions. Its vapor is a vivid purple.", uses: ["Table salt iodization to prevent goiter and developmental disorders", "Medical antiseptic (iodine tincture and povidone-iodine)", "Contrast media for X-ray and CT imaging", "Catalyst in pharmaceutical and chemical synthesis"], funFact: "Iodine deficiency is the leading preventable cause of intellectual disability worldwide — adding a tiny amount to table salt, which costs about 5 cents per person per year, prevents this entirely." },
  54: { description: "Xenon is a dense, colorless noble gas found in trace amounts in Earth's atmosphere. Despite being 'noble,' xenon was the first noble gas proven to form true chemical compounds.", properties: "Xenon is the densest gas that occurs naturally at standard conditions (excluding radon). It produces a brilliant blue-white glow in gas discharge tubes and can form stable compounds with fluorine and oxygen under the right conditions.", uses: ["Ion propulsion engines for spacecraft (xenon ion thrusters)", "General anesthesia in medicine (fast onset, rapid recovery)", "High-intensity headlights and cinema projection lamps", "Dark matter detection experiments (liquid xenon detectors)"], funFact: "NASA's Dawn spacecraft used xenon ion propulsion to orbit both the asteroid Vesta and the dwarf planet Ceres — the same tank of xenon fuel powered years of space travel." },
  55: { description: "Cesium is the most electropositive stable element and one of only five metals that are liquid at or near room temperature. It is an extremely soft, gold-colored alkali metal.", properties: "Cesium melts at just 28.44°C and reacts explosively with water — more violently than any other alkali metal. It is pyrophoric in air (ignites spontaneously) and its compounds are generally very soluble in water.", uses: ["Cesium atomic clocks — the international standard for time measurement", "Drilling fluids (cesium formate) for high-pressure oil wells", "Photoelectric cells and photomultiplier tubes", "Ion propulsion research and spacecraft attitude control"], funFact: "The second is officially defined by the cesium-133 atom: exactly 9,192,631,770 oscillations of its ground-state hyperfine transition. This makes cesium the element that literally defines time." },
  56: { description: "Barium is a soft, silvery alkaline earth metal that never occurs naturally as a free element due to its high reactivity. Its name comes from the Greek 'barys' meaning heavy.", properties: "Barium is extremely reactive — it oxidizes rapidly in air and reacts vigorously with water. Its compounds are dense and opaque to X-rays. Most soluble barium compounds are toxic, but barium sulfate is insoluble and harmless.", uses: ["Barium sulfate 'milkshakes' for gastrointestinal X-ray imaging", "Drilling mud additive (barite) to increase fluid density", "Green fireworks and signal flares (barium compounds)", "Barium titanate capacitors and piezoelectric ceramics"], funFact: "When you drink a barium 'milkshake' for a medical X-ray, the barium sulfate is so insoluble that it passes through your entire digestive system without being absorbed — making the toxic element perfectly safe." },
  57: { description: "Lanthanum is a soft, silvery-white rare earth metal that heads the lanthanide series. Its name comes from the Greek 'lanthanein' meaning 'to lie hidden,' as it was difficult to isolate.", properties: "Lanthanum is relatively soft and can be cut with a knife. It tarnishes rapidly in air and reacts slowly with cold water. It has no unpaired f-electrons, distinguishing it chemically from most other lanthanides.", uses: ["Hybrid car battery electrodes (lanthanum-nickel hydride)", "Camera and telescope lenses (lanthanum glass for low dispersion)", "Fluid cracking catalysts for petroleum refining", "Pool and aquarium water treatment (phosphate removal)"], funFact: "Lanthanum was so hard to separate from cerium that it remained hidden in cerium oxide for 36 years after cerium was discovered — hence its name meaning 'hidden one.'" },
  58: { description: "Cerium is the most abundant of the rare earth elements and is more common in Earth's crust than copper. It is a soft, silvery, ductile metal that tarnishes rapidly in air.", properties: "Cerium has the unusual ability to exist in two stable oxidation states (+3 and +4) which gives it unique catalytic and redox properties. Cerium(IV) oxide is a powerful oxidizer, while the metal itself is pyrophoric when finely divided.", uses: ["Catalytic converters — cerium oxide as oxygen storage component", "Self-cleaning ovens (cerium oxide catalytic coatings)", "Glass polishing (cerium oxide 'jeweler's rouge')", "Flint for cigarette lighters (ferrocerium alloy)"], funFact: "The original lighter flint — ferrocerium, invented in 1903 — contains cerium and produces the sparks in nearly every disposable lighter, meaning cerium creates billions of flames every day worldwide." },
  59: { description: "Praseodymium is a soft, silvery rare earth metal that slowly develops a green oxide coating in air. Its name means 'green twin' in Greek, distinguishing it from neodymium (the 'new twin').", properties: "Praseodymium is moderately hard and develops a distinctive green oxide layer (Pr₆O₁₁) rather than the white oxide typical of most rare earths. Its salts are generally bright green, which gives it its name.", uses: ["Didymium glass for welder's and glassblower's goggles", "Strong permanent magnets (praseodymium-neodymium alloy)", "Aircraft engine alloys (with magnesium)", "Yellow-orange ceramic pigments and art glass colorant"], funFact: "Praseodymium and neodymium were originally thought to be a single element called 'didymium' — it took 40 years of painstaking work with fractional crystallization to prove they were actually two elements." },
  60: { description: "Neodymium is a hard, silvery rare earth metal that is one of the most commercially important lanthanides. It rapidly tarnishes in air, forming an oxide that flakes off and exposes more metal.", properties: "Neodymium has exceptionally strong paramagnetic properties that, when alloyed with iron and boron, create the world's strongest permanent magnets. Its compounds produce distinctive sharp absorption bands in glass.", uses: ["Neodymium magnets (NdFeB) — the strongest permanent magnets available", "Lasers for medical surgery, manufacturing, and range-finding", "Purple/violet coloring in glass and ceramics", "Wind turbine generators and electric vehicle motors"], funFact: "A neodymium magnet the size of a coin can lift over 1,000 times its own weight — these magnets are so powerful that larger ones can cause serious injury by snapping together with tremendous force." },
  61: { description: "Promethium is the only lanthanide element with no stable isotopes and is one of only two radioactive elements in the first 83. Named after the Titan Prometheus who stole fire from the gods.", properties: "Promethium's most stable isotope, Pm-145, has a half-life of 17.7 years. It emits beta radiation and glows faintly blue or green in the dark. It is produced artificially in nuclear reactors.", uses: ["Luminous paint for watches and instruments (historically)", "Nuclear batteries for spacecraft and remote sensors", "Beta radiation source for thickness gauges", "Research into rare earth element chemistry"], funFact: "Promethium is so rare naturally that the entire Earth's crust is estimated to contain only about 570 grams of it at any given time — less than the weight of two cups of coffee." },
  62: { description: "Samarium is a moderately hard, silvery rare earth metal with important magnetic properties. It was named after the mineral samarskite, which was itself named after a Russian mine official.", properties: "Samarium is relatively stable in dry air but tarnishes in moist air. It has excellent magnetic properties, particularly in its compounds with cobalt, and has a higher resistance to demagnetization at elevated temperatures than neodymium.", uses: ["Samarium-cobalt permanent magnets for high-temperature applications", "Cancer treatment (samarium-153 radiation therapy for bone pain)", "Neutron absorber in nuclear reactor control rods", "Infrared-absorbing glass for optical filters"], funFact: "Samarium-cobalt magnets were the strongest permanent magnets before neodymium magnets were developed — they are still preferred in extreme heat applications where neodymium magnets would lose their magnetism." },
  63: { description: "Europium is the most reactive of the rare earth elements, oxidizing rapidly in air. It is named after the continent of Europe and is notable for its exceptional luminescent properties.", properties: "Europium has only two stable oxidation states (+2 and +3), which is unusual for lanthanides. Its ions produce brilliant red and blue fluorescence, making it the most important rare earth for phosphor applications.", uses: ["Red phosphor in TV and LED screens (europium oxide)", "Euro banknote anti-counterfeiting fluorescent ink", "Energy-efficient fluorescent light bulbs", "Neutron absorber in nuclear reactor control rods"], funFact: "The red glow in color television screens and LED displays comes from europium — and the anti-counterfeiting marks on Euro banknotes (named after the same continent) also rely on europium fluorescence." },
  64: { description: "Gadolinium is a silvery-white, malleable rare earth metal with unusual magnetic properties. It is named after Finnish chemist and geologist Johan Gadolin.", properties: "Gadolinium is ferromagnetic at room temperature — unique among the rare earths — but loses its magnetism above 20°C. It has the highest neutron-absorption cross-section of any known element.", uses: ["MRI contrast agent (gadolinium-based compounds)", "Nuclear reactor shielding and neutron radiography", "Magnetocaloric refrigeration (next-gen cooling technology)", "Data storage and memory devices"], funFact: "Gadolinium has a remarkable 'magnetocaloric effect' — it heats up when magnetized and cools when demagnetized, which is being developed into a refrigeration technology that uses no greenhouse gas coolants." },
  65: { description: "Terbium is a silvery-white rare earth metal that is soft enough to cut with a knife. It is one of the less abundant lanthanides but plays an outsized role in green phosphor technology.", properties: "Terbium is relatively stable in air compared to other lanthanides. It has excellent fluorescent properties, producing bright green luminescence. When alloyed with iron and dysprosium, it exhibits giant magnetostriction.", uses: ["Green phosphor in fluorescent lamps and LED displays", "Terfenol-D (terbium-dysprosium-iron) magnetostrictive alloys for sonar", "Solid-state devices and fuel cell membranes", "Laser materials and stabilizers"], funFact: "Terfenol-D, an alloy containing terbium, changes its physical length by up to 0.2% in a magnetic field — this 'giant magnetostriction' is used in naval sonar transducers and precision actuators." },
  66: { description: "Dysprosium is a bright, silvery rare earth metal that is one of the most magnetic elements. Its name comes from the Greek 'dysprositos' meaning 'hard to get.'", properties: "Dysprosium has the highest magnetic susceptibility of any element. It is relatively stable in air at room temperature and has an unusually high neutron-absorption cross-section. It is soft enough to machine without spark generation.", uses: ["Neodymium magnet additive — maintains strength at high temperatures", "Nuclear reactor control rods (neutron absorption)", "Magnetostrictive alloys for transducers and actuators", "Data storage materials (magneto-optical recording)"], funFact: "Without dysprosium added to neodymium magnets, electric vehicle motors and wind turbine generators would lose their magnetic properties at operating temperatures — making dysprosium critical for the green energy transition." },
  67: { description: "Holmium is a soft, silvery rare earth metal with the highest magnetic moment of any naturally occurring element. It is named after Stockholm (Holmia in Latin).", properties: "Holmium has extraordinary magnetic properties — its magnetic moment of 10.6 μB is the highest of any element. It is relatively soft, slowly tarnishes in air, and reacts with water. Its oxide is a vivid yellow.", uses: ["Magnetic flux concentrators in powerful magnetic fields", "Medical lasers (holmium:YAG) for surgery and kidney stone treatment", "Nuclear control rods (neutron absorption)", "Yellow and red coloring agent in glass and cubic zirconia"], funFact: "The strongest continuous magnetic fields ever produced by humans — over 45 Tesla — use holmium pole pieces because holmium can concentrate magnetic flux more effectively than any other element." },
  68: { description: "Erbium is a soft, silvery rare earth metal that is most famous for the pink color of its ions and its crucial role in fiber-optic communications.", properties: "Erbium is stable in air and does not oxidize as quickly as other rare earths. Its ions absorb light at specific wavelengths and re-emit it, making it an efficient optical amplifier. Erbium compounds are distinctively pink.", uses: ["Erbium-doped fiber amplifiers (EDFAs) for internet telecommunications", "Er:YAG lasers for dental and dermatological procedures", "Pink colorant for glass, ceramics, and cubic zirconia", "Nuclear control rod material (neutron absorption)"], funFact: "Almost all long-distance internet traffic passes through erbium-doped fiber amplifiers — without erbium, optical signals would weaken and need electronic conversion every 100 km, making the modern internet far slower." },
  69: { description: "Thulium is the second least abundant of the naturally occurring lanthanides and has a bright, silvery-gray appearance. It is named after Thule, an ancient name for Scandinavia.", properties: "Thulium is the least abundant naturally occurring lanthanide (excluding promethium). It is relatively soft, slowly tarnishes in air, and has a bright metallic luster when freshly cut. Its compounds are typically pale green.", uses: ["Portable X-ray machines (thulium-170 as a radiation source)", "High-temperature superconductors", "Surgical lasers (thulium fiber lasers)", "Specialized arc lighting for projection and photography"], funFact: "Thulium-170 is used in portable X-ray devices for field medicine and geological surveys — its compact radiation source means X-ray machines can operate without electricity." },
  70: { description: "Ytterbium is a soft, silvery rare earth metal that has seen growing commercial applications in recent years. It was first isolated from a mineral found near the village of Ytterby, Sweden.", properties: "Ytterbium is notable among the lanthanides for having a stable +2 oxidation state in addition to the usual +3. Under extreme pressure, it becomes a semiconductor. It has a relatively low melting point for a lanthanide.", uses: ["Stainless steel and alloy strengthening additive", "Fiber-optic signal amplifiers (ytterbium-doped fiber lasers)", "Improving grain refinement in steel manufacturing", "Potential next-generation atomic clocks (higher precision than cesium)"], funFact: "Ytterbium atomic clocks are so precise they would neither gain nor lose a second in 15 billion years — they may eventually replace cesium as the new definition of the second." },
  71: { description: "Lutetium is the last and heaviest element in the lanthanide series. It is a dense, silvery-white metal that is the hardest and most expensive of the rare earth elements.", properties: "Lutetium is the densest and hardest of the lanthanides. It has the smallest atomic radius of any lanthanide due to the lanthanide contraction and is relatively stable in air, forming a thin protective oxide layer.", uses: ["PET scan detectors (lutetium oxyorthosilicate scintillators)", "Petroleum refining catalyst (cracking, polymerization)", "Lutetium-177 for targeted cancer radiation therapy", "Research into advanced LED phosphors"], funFact: "Lutetium-177, a radioactive isotope, is used in cutting-edge cancer treatment — it can be attached to molecules that target specific cancer cells, delivering radiation directly to tumors while sparing healthy tissue." },
  72: { description: "Hafnium is a lustrous, silvery transition metal that is almost identical to zirconium chemically and is difficult to separate from it. It was the second-to-last stable element to be discovered.", properties: "Hafnium is extremely resistant to corrosion and has a very high neutron-absorption cross-section — 600 times greater than zirconium. This property made it critical for nuclear technology once it could be separated from zirconium.", uses: ["Nuclear reactor control rods (excellent neutron absorber)", "High-temperature alloys for rocket engines and turbines", "Hafnium oxide in advanced microprocessor gate insulators", "Plasma arc cutting torch electrodes"], funFact: "Hafnium and zirconium are so chemically similar that hafnium hid inside zirconium minerals for over a century — it was only discovered in 1923, making it the second-to-last stable element found." },
  73: { description: "Tantalum is a rare, hard, blue-gray transition metal known for its extraordinary resistance to corrosion and its ability to form stable oxide films.", properties: "Tantalum is virtually immune to chemical attack at temperatures below 150°C — only hydrofluoric acid, hot sulfuric acid, and some alkalis can damage it. Its thin oxide layer is an excellent dielectric, enabling tiny yet powerful capacitors.", uses: ["Tantalum capacitors in smartphones, laptops, and medical devices", "Surgical implants and replacement bone plates (biocompatible)", "Chemical processing equipment for extreme corrosion resistance", "High-temperature furnace parts and vacuum equipment"], funFact: "Tantalum is named after King Tantalus from Greek mythology, who was condemned to stand in water he couldn't drink — fitting, since the metal sits in acid without reacting, as if 'tantalized' by it." },
  74: { description: "Tungsten has the highest melting point of all metals (3,422°C) and the highest tensile strength at temperatures above 1,650°C. Its chemical symbol W comes from its earlier name, wolfram.", properties: "Tungsten's extreme melting point and density (19.25 g/cm³, comparable to gold) make it unique among metals. It has the lowest vapor pressure and highest tensile strength of any pure metal, and forms extremely hard carbides.", uses: ["Incandescent light bulb filaments (withstands extreme heat)", "Tungsten carbide cutting tools, drill bits, and mining equipment", "Heavy metal alloys for radiation shielding and military projectiles", "High-temperature furnace heating elements"], funFact: "Tungsten carbide is so hard that it can only be polished using diamond-based abrasives — it scores 9-9.5 on the Mohs scale, just below diamond's perfect 10." },
  75: { description: "Rhenium is one of the rarest elements in Earth's crust and was the last stable, naturally occurring element to be discovered (1925). It has remarkable high-temperature properties.", properties: "Rhenium has the third-highest melting point of all elements and the widest liquid range (3,186°C to 5,596°C). It does not form carbides, making it unique among refractory metals, and maintains ductility from cryogenic to extreme temperatures.", uses: ["Superalloys for jet engine turbine blades", "Platinum-rhenium catalysts for high-octane gasoline production", "High-temperature thermocouples (tungsten-rhenium)", "Electrical contacts for high-wear applications"], funFact: "Rhenium is so rare that global annual production is only about 50 tons — most of it comes as a byproduct of molybdenum processing from copper mining, and the majority goes into jet engines." },
  76: { description: "Osmium is the densest naturally occurring element and one of the rarest in Earth's crust. It is a hard, brittle, bluish-silver platinum group metal.", properties: "Osmium has a density of 22.587 g/cm³, making it the densest known element. It is extremely hard and brittle. Its volatile oxide (OsO₄) is highly toxic and has a pungent odor — its name comes from the Greek 'osme' meaning smell.", uses: ["Hardening agent for platinum alloys (fountain pen tips, pivots)", "Osmium tetroxide staining in electron microscopy", "Fingerprint detection in forensic science", "Specialized electrical contacts and instrument pivots"], funFact: "A cubic foot of osmium weighs about 1,410 pounds — if you could fill a standard bathtub with osmium, it would weigh over 4 tons." },
  77: { description: "Iridium is one of the rarest elements in Earth's crust and the most corrosion-resistant metal known. It is extremely dense and was famously linked to the asteroid that killed the dinosaurs.", properties: "Iridium is the second-densest element (after osmium) and the most corrosion-resistant metal — no acid, not even aqua regia, can dissolve it at room temperature. It has the highest elastic modulus of any metal.", uses: ["Spark plug electrodes for high-performance and aviation engines", "Crucibles for growing high-quality single crystals", "International prototype kilogram (90% platinum, 10% iridium, historically)", "Deep-water pipeline structures and extreme-environment equipment"], funFact: "A thin layer of iridium found worldwide in 66-million-year-old rock strata provided key evidence that an asteroid impact caused the mass extinction of the dinosaurs — iridium is rare on Earth but common in asteroids." },
  78: { description: "Platinum is a dense, malleable, highly unreactive precious metal with a silvery-white appearance. It is one of the rarest elements in Earth's crust and has been prized for centuries.", properties: "Platinum is remarkably resistant to corrosion — it withstands attack by any single acid but dissolves in aqua regia. It is an excellent catalyst and is biologically inert, making it compatible with human tissue.", uses: ["Catalytic converters for automobile emissions control", "Jewelry — valued for its durability, luster, and rarity", "Laboratory equipment (crucibles, electrodes) for extreme conditions", "Chemotherapy drugs (cisplatin) for cancer treatment"], funFact: "About 30% of all goods manufactured today either contain platinum or were produced using a platinum-dependent process — making it one of the most industrially essential precious metals." },
  79: { description: "Gold is one of the least reactive chemical elements, which is why it occurs naturally in a free metallic state. It has been treasured by virtually every human civilization throughout recorded history.", properties: "Gold is the most malleable and ductile of all metals — a single ounce can be beaten into a sheet covering 100 square feet. It is an excellent conductor of electricity, does not tarnish, and its distinctive yellow color is unique among metals.", uses: ["Jewelry and decorative arts — gold never tarnishes or corrodes", "Electronics — reliable connectors and bonding wire", "Central bank reserves and investment (monetary standard)", "Dentistry and medical implants (biocompatible, durable)"], funFact: "All the gold ever mined in human history would fit into roughly three Olympic-sized swimming pools — estimated at about 200,000 metric tons, with over half mined in the last 50 years." },
  80: { description: "Mercury is the only metallic element that is liquid at standard room temperature and pressure. It has fascinated humans for thousands of years and was used extensively in alchemy.", properties: "Mercury is a dense, silvery liquid that has very high surface tension, forming spherical droplets. It alloys readily with most metals to form amalgams, has poor thermal conductivity for a metal, and its vapor is highly toxic.", uses: ["Thermometers and barometers (historically, being phased out)", "Fluorescent lighting (small amounts of mercury vapor)", "Dental amalgam fillings (being reduced due to toxicity concerns)", "Gold and silver mining via amalgamation (now restricted)"], funFact: "The tomb of China's first emperor, Qin Shi Huang, is legendarily described as containing rivers and seas made of mercury — modern soil tests around the tomb have confirmed abnormally high mercury concentrations." },
  81: { description: "Thallium is a soft, silvery-gray post-transition metal that is extremely toxic. It was discovered by its distinctive green spectral line and named from the Greek 'thallos' meaning green shoot.", properties: "Thallium is very soft and malleable, resembling tin. It tarnishes to a blue-gray oxide in air. Its toxicity is insidious — thallium salts are colorless, odorless, and nearly tasteless, making accidental or intentional poisoning difficult to detect.", uses: ["Specialized optical lenses and prisms (thallium bromide-iodide)", "Semiconductor materials and superconductors", "Medical imaging (thallium-201 for cardiac stress tests)", "Rodenticides (historically, now largely banned)"], funFact: "Thallium was nicknamed 'the poisoner's poison' because its salts are virtually undetectable by taste or smell, and thallium poisoning symptoms mimic many natural diseases." },
  82: { description: "Lead is a dense, soft, malleable heavy metal that has been used by humans for at least 7,000 years. Despite its toxicity, it played a central role in the Roman Empire's plumbing and architecture.", properties: "Lead is very dense (11.3 g/cm³), extremely soft, and has the highest atomic number of any stable element. It is a poor electrical conductor but an excellent radiation shield. Its corrosion product (white lead carbonate) protected it in ancient plumbing.", uses: ["Lead-acid batteries for automobiles and backup power systems", "Radiation shielding in medical and nuclear facilities", "Ammunition and fishing weights (dense and inexpensive)", "Roofing and flashing for historic buildings"], funFact: "The word 'plumbing' comes from the Latin 'plumbum' (lead) — and lead's chemical symbol Pb comes from the same root — because the Romans built their water pipes from lead." },
  83: { description: "Bismuth is a brittle, pinkish-white post-transition metal with the most naturally diamagnetic properties of any element. It was long considered the heaviest stable element.", properties: "Bismuth expands 3.3% when it solidifies — one of the few substances that do this. It has the lowest thermal conductivity of any metal and its crystals display striking rainbow-colored oxide layers in characteristic hopper formations.", uses: ["Pepto-Bismol (bismuth subsalicylate) for stomach relief", "Lead-free replacement in fishing sinkers, shotgun pellets, and solder", "Cosmetics — bismuth oxychloride adds pearlescent shimmer", "Fusible alloys and fire sprinkler triggering mechanisms"], funFact: "Bismuth-209 was long considered completely stable, but in 2003 it was shown to be radioactive with a half-life of about 1.9×10¹⁹ years — over a billion times the age of the universe." },
  84: { description: "Polonium is an extremely rare and highly radioactive element discovered by Marie and Pierre Curie in 1898. It was named after Marie Curie's homeland of Poland.", properties: "Polonium emits so much alpha radiation that it glows blue due to excitation of surrounding air. A milligram of Po-210 generates about 140 watts of heat, making it intensely energetic. It dissolves readily in dilute acids.", uses: ["Static eliminator in industrial manufacturing (alpha source)", "Thermoelectric power for space satellites (heat source)", "Neutron trigger in early nuclear weapons (historically)", "Research into radiation effects and nuclear physics"], funFact: "Polonium-210 was infamously used to assassinate former Russian spy Alexander Litvinenko in London in 2006 — a microgram of the substance, invisible to the naked eye, delivered a lethal radiation dose." },
  85: { description: "Astatine is the rarest naturally occurring element on Earth, with at most about 25 grams existing in the entire crust at any given time. It is a radioactive halogen.", properties: "Astatine's most stable isotope (At-210) has a half-life of only 8.1 hours. It is believed to be a dark, metallic-looking solid that is more metallic than iodine. Its extreme scarcity means many of its bulk properties are estimated.", uses: ["Astatine-211 research for targeted alpha therapy (cancer treatment)", "Scientific research into halogen chemistry at heavy atomic weights", "Potential radiopharmaceutical applications", "Nuclear physics research"], funFact: "So little astatine exists naturally that no one has ever seen enough of it to observe its color — scientists estimate it would look like a dark, metallic solid, but this has never been confirmed visually." },
  86: { description: "Radon is a radioactive, colorless, odorless noble gas formed by the decay of radium. It is the leading cause of lung cancer among non-smokers.", properties: "Radon is the densest gas that occurs in nature. Its most stable isotope (Rn-222) has a half-life of 3.8 days. It seeps up from uranium-containing soils and can accumulate in basements and enclosed spaces.", uses: ["Geological surveying (tracking radon to find uranium deposits)", "Earthquake prediction research (radon level monitoring)", "Radon therapy (controversial — for arthritis in some European spas)", "Hydrological tracing of groundwater movement"], funFact: "The EPA estimates that radon exposure causes about 21,000 lung cancer deaths per year in the United States alone — simple home test kits can detect it, yet many homes have never been tested." },
  87: { description: "Francium is the most unstable of the first 101 elements and the second rarest naturally occurring element after astatine. It was the last element discovered in nature.", properties: "Francium's most stable isotope (Fr-223) has a half-life of only 22 minutes. It is predicted to be the most reactive and electropositive of all metals. Its bulk properties are entirely theoretical since no weighable amount has ever been produced.", uses: ["Atomic physics research (spectroscopy of heavy alkali metals)", "Fundamental research on nuclear structure and decay", "Studies of weak interaction physics", "No commercial applications due to extreme rarity and radioactivity"], funFact: "At any given moment, there are estimated to be fewer than 30 grams of francium in all of Earth's crust — it decays so quickly that no one has ever collected enough to see what it looks like." },
  88: { description: "Radium is an intensely radioactive alkaline earth metal discovered by Marie and Pierre Curie in 1898. It was once used widely before its dangers were understood.", properties: "Radium glows faintly blue due to its intense radioactivity exciting the surrounding air. Fresh radium metal is silvery-white but quickly blackens in air. It is about a million times more radioactive than the same mass of uranium.", uses: ["Historical luminous paint for watch dials (now discontinued)", "Cancer radiation therapy (radium-226, largely replaced by cobalt-60)", "Industrial radiography sources (historically)", "Research into radioactivity and nuclear physics"], funFact: "The 'Radium Girls' were factory workers in the 1920s who painted watch dials with radium and were told it was safe — they licked their brushes to get fine points and suffered devastating radiation effects, leading to landmark workplace safety laws." },
  89: { description: "Actinium is a soft, silvery-white radioactive metal that heads the actinide series. It glows blue in the dark due to its intense radioactivity and is extremely rare.", properties: "Actinium-227, its most common isotope, has a half-life of 21.8 years and is about 150 times more radioactive than radium. It is found in trace amounts in uranium ore and its chemistry is dominated by the +3 oxidation state.", uses: ["Neutron source when combined with beryllium", "Actinium-225 for targeted alpha therapy in cancer treatment", "Thermoelectric power generation (research)", "Radioactive tracer in scientific research"], funFact: "Actinium-225 is being investigated as a revolutionary cancer treatment — it can be attached to antibodies that deliver lethal alpha radiation directly to cancer cells with minimal damage to surrounding tissue." },
  90: { description: "Thorium is a weakly radioactive silvery metal that is about three times more abundant than uranium in Earth's crust. It was named after Thor, the Norse god of thunder.", properties: "Thorium is soft, ductile, and slowly tarnishes to black thorium oxide in air. Its only significant isotope, Th-232, has a half-life of 14 billion years — longer than the current age of the universe — making it mildly radioactive.", uses: ["Potential nuclear fuel — thorium-based reactors (research/development)", "Gas mantle lanterns (thorium oxide provides bright incandescent light)", "Aerospace alloys (high melting point, added to magnesium/tungsten)", "Specialized welding electrodes (thoriated tungsten)"], funFact: "India is investing heavily in thorium reactors because it has the world's largest thorium reserves — the thorium fuel cycle produces far less weapons-usable material than uranium, making it attractive for energy security." },
  91: { description: "Protactinium is an extremely rare, highly radioactive actinide metal. It is one of the rarest and most expensive naturally occurring elements.", properties: "Protactinium is a dense, silvery-gray metal that is both radioactive and highly toxic. Its most stable isotope (Pa-231) has a half-life of 32,760 years. It readily reacts with oxygen, water, and acids.", uses: ["Geological dating of ocean sediments (Pa-231/Th-230 method)", "Scientific research on actinide chemistry", "No significant commercial applications", "Research into nuclear waste processing"], funFact: "Protactinium is one of the rarest and most dangerous elements to work with — it is both radioactive and chemically toxic, and a single gram once cost about $280,000." },
  92: { description: "Uranium is a heavy, silvery-white radioactive metal that is the primary fuel for nuclear power plants and nuclear weapons. It is surprisingly common — more abundant than tin in Earth's crust.", properties: "Natural uranium is 99.3% U-238 (half-life 4.5 billion years) and 0.7% U-235, the only naturally occurring fissile isotope. Uranium is pyrophoric when finely divided, extremely dense (19 g/cm³), and weakly radioactive.", uses: ["Nuclear power generation (enriched U-235 fuel rods)", "Nuclear weapons (highly enriched uranium)", "Depleted uranium armor-piercing projectiles and armor plating", "Radioactive dating of geological formations (uranium-lead dating)"], funFact: "A single kilogram of enriched uranium fuel produces as much energy as approximately 20,000 kilograms of coal — this extraordinary energy density is why nuclear power plants need refueling only every 1-2 years." },
  93: { description: "Neptunium was the first synthetic transuranium element ever produced, created in 1940 by bombarding uranium with neutrons. It is named after the planet Neptune.", properties: "Neptunium is a dense, silvery, radioactive metal with at least three allotropic forms. Its most stable isotope (Np-237) has a half-life of 2.14 million years. It forms compounds in multiple oxidation states from +3 to +7.", uses: ["Detection of high-energy neutrons in physics research", "Precursor for producing plutonium-238 (for space missions)", "Research into nuclear waste and actinide chemistry", "Potential nuclear fuel in fast breeder reactors"], funFact: "Neptunium-237 is the most mobile actinide in deep geological nuclear waste repositories — its very long half-life and relative solubility make it a key concern in long-term nuclear waste management." },
  94: { description: "Plutonium is a radioactive actinide metal that is central to nuclear weapons technology and is produced in significant quantities in nuclear reactors.", properties: "Plutonium is unique in having six allotropic crystal phases — more than any other element. It is warm to the touch due to radioactive self-heating and can maintain a nuclear chain reaction in a smaller critical mass than uranium.", uses: ["Nuclear weapons (primary fissile material in implosion designs)", "Plutonium-238 radioisotope thermoelectric generators for spacecraft", "MOX fuel for nuclear reactors (mixed oxide fuel)", "Research into actinide chemistry and nuclear physics"], funFact: "NASA's Voyager probes, launched in 1977, are still sending data from interstellar space powered by plutonium-238 RTGs — they've been running continuously for over 48 years." },
  95: { description: "Americium is a synthetic radioactive actinide that is the most commonly encountered transuranium element — it is present in nearly every household smoke detector.", properties: "Americium is a silvery, somewhat malleable metal that tarnishes slowly in air. Am-241 has a half-life of 432 years and emits alpha particles. It is produced in nuclear reactors from plutonium.", uses: ["Smoke detectors (Am-241 ionization source)", "Industrial thickness and density gauges", "Portable gamma radiography sources", "Neutron sources for oil well logging"], funFact: "The americium in a typical household smoke detector (about 0.3 micrograms) emits alpha particles that ionize air molecules — when smoke disrupts this ion current, the alarm sounds." },
  96: { description: "Curium is a hard, dense, silvery radioactive actinide metal named after Marie and Pierre Curie. It is produced artificially in nuclear reactors.", properties: "Curium is so radioactive that it glows reddish-purple in the dark from self-excitation. It generates significant heat through radioactive decay and is chemically reactive, dissolving in acids.", uses: ["Alpha particle X-ray spectrometer on Mars rovers", "Radioisotope thermoelectric generators (research)", "Neutron source when combined with beryllium", "Research into transuranium element chemistry"], funFact: "Curium-244 has been used on several Mars rovers (including Curiosity and Perseverance) to analyze the chemical composition of Martian rocks and soil using X-ray spectroscopy." },
  97: { description: "Berkelium is a synthetic radioactive actinide element named after Berkeley, California, where it was first produced at the Lawrence Berkeley National Laboratory in 1949.", properties: "Berkelium is a silvery metal that slowly accumulates damage from its own radioactivity. Its most stable isotope (Bk-247) has a half-life of 1,380 years. Only milligram quantities have ever been produced.", uses: ["Target material for producing heavier elements (californium, etc.)", "Fundamental research into actinide chemistry and physics", "Study of electronic structure of heavy elements", "No commercial applications due to scarcity"], funFact: "In 2009, about 22 milligrams of berkelium-249 were produced at Oak Ridge National Laboratory over a 250-day campaign — this rare material was then shipped to Russia to create element 117 (tennessine)." },
  98: { description: "Californium is a radioactive actinide metal named after California and the University of California. It has specialized but important applications in nuclear technology.", properties: "Californium-252 is an exceptionally strong neutron emitter — one microgram releases 170 million neutrons per minute. It is produced in microgram quantities in nuclear reactors and has a half-life of 2.645 years.", uses: ["Portable neutron source for detecting gold and silver ores", "Startup neutron source for nuclear reactors", "Treatment of certain cervical and brain cancers", "Moisture and material analysis in coal plants and oil wells"], funFact: "A single gram of californium-252 costs roughly $27 million, making it one of the most expensive substances on Earth — but its powerful neutron emission means only micrograms are needed for most applications." },
  99: { description: "Einsteinium is a synthetic, highly radioactive actinide element first identified in the debris of the first hydrogen bomb test (Ivy Mike) in 1952. It is named after Albert Einstein.", properties: "Einsteinium is a soft, silvery, paramagnetic metal. Its most stable isotope (Es-252) has a half-life of 471.7 days. It glows visibly from its own radioactivity and self-destructs its crystal lattice over time.", uses: ["Production of mendelevium through neutron bombardment", "Fundamental research into heavy element chemistry", "Study of relativistic effects on electron configuration", "No commercial applications due to scarcity"], funFact: "Einsteinium was kept secret for several years after its discovery — it was first created in thermonuclear explosion debris but classified because revealing it would confirm that hydrogen bombs produced extremely heavy elements." },
  100: { description: "Fermium is a synthetic, highly radioactive actinide named after Enrico Fermi. Like einsteinium, it was first detected in nuclear weapon test fallout.", properties: "Fermium's most stable isotope (Fm-257) has a half-life of 100.5 days. It is believed to be a divalent metal in some compounds, unusual for an actinide. Only tiny amounts have ever been produced.", uses: ["Fundamental research into nuclear physics", "Study of the chemistry of superheavy elements", "Investigation of nuclear stability limits", "No commercial applications"], funFact: "Fermium is the heaviest element that can be produced by neutron capture in a reactor — all heavier elements must be produced through particle accelerator bombardment, making them even more difficult to create." },
  101: { description: "Mendelevium is a synthetic radioactive actinide named after Dmitri Mendeleev, creator of the periodic table. It was first produced in 1955 by bombarding einsteinium with alpha particles.", properties: "Mendelevium's most stable isotope (Md-258) has a half-life of about 51.5 days. It exists primarily in the +3 oxidation state but can be reduced to +2, similar to some lighter actinides.", uses: ["Fundamental research in nuclear chemistry", "Study of actinide chemistry in solution", "Research into relativistic effects on heavy elements", "No commercial applications"], funFact: "Mendelevium was first created one atom at a time — the initial experiment in 1955 produced only 17 atoms, yet scientists were able to identify it through ingenious chemical separation techniques." },
  102: { description: "Nobelium is a synthetic, highly radioactive actinide element named after Alfred Nobel, inventor of dynamite and founder of the Nobel Prizes.", properties: "Nobelium is notable for being the first transactinide element that preferentially exists in the +2 oxidation state, unlike the +3 typical for most actinides. Its most stable isotope (No-259) has a half-life of about 58 minutes.", uses: ["Fundamental nuclear physics research", "Study of relativistic effects on chemical properties", "Investigation of superheavy element stability", "No commercial applications"], funFact: "Nobelium was the subject of a prolonged priority dispute between American, Soviet, and Swedish laboratories — each claimed discovery, and the naming took decades to settle officially." },
  103: { description: "Lawrencium is the last element in the actinide series, named after Ernest Lawrence, inventor of the cyclotron particle accelerator. It bridges the actinides and the transition metals.", properties: "Lawrencium's most stable isotope (Lr-266) has a half-life of about 11 hours. Recent experiments suggest its first ionization energy is unexpectedly low, confirming a predicted break from actinide trends.", uses: ["Fundamental research in nuclear chemistry and physics", "Study of the end of the actinide series", "Investigation of superheavy element periodicity", "No commercial applications"], funFact: "A 2015 experiment measuring lawrencium's first ionization energy — using just a few atoms at a time — confirmed that it behaves more like a p-block element than a d-block element, surprising many chemists." },
  104: { description: "Rutherfordium is the first transactinide element, named after Ernest Rutherford, the father of nuclear physics. It is expected to behave as a heavier homolog of hafnium.", properties: "Rutherfordium's most stable isotope (Rf-267) has a half-life of about 1.3 hours. Limited chemical experiments suggest it behaves similarly to hafnium and zirconium, as predicted by its position in Group 4.", uses: ["Fundamental research in superheavy element chemistry", "Study of relativistic effects on chemical behavior", "Nuclear physics experiments", "No practical applications due to extreme instability"], funFact: "Rutherfordium's discovery was claimed independently by both American and Soviet laboratories during the Cold War — the naming dispute lasted decades and was part of the broader 'Transfermium Wars.'" },
  105: { description: "Dubnium is a synthetic superheavy element named after Dubna, Russia, home of the Joint Institute for Nuclear Research where it was first convincingly produced.", properties: "Dubnium's most stable isotope (Db-268) has a half-life of about 28 hours. Its chemistry is expected to resemble tantalum, though relativistic effects may cause deviations from predicted behavior.", uses: ["Fundamental nuclear physics research", "Study of superheavy element chemistry", "Test of periodic table predictability at high atomic numbers", "No practical applications"], funFact: "Dubnium was another element caught in the Cold War naming dispute — the Americans wanted to call it 'hahnium' while the Soviets preferred 'nielsbohrium,' but ultimately the compromise name honored the Russian city." },
  106: { description: "Seaborgium is a synthetic superheavy element named after Glenn Seaborg, who was instrumental in discovering ten transuranium elements — the only person to have an element named after him while still alive.", properties: "Seaborgium's most stable isotope (Sg-269) has a half-life of about 14 minutes. Chemical studies confirm it behaves as expected for a Group 6 element, similar to tungsten and molybdenum.", uses: ["Fundamental research into superheavy element behavior", "Verification of periodic table trends at extreme atomic numbers", "Nuclear physics experiments", "No practical applications"], funFact: "When seaborgium was named after Glenn Seaborg in 1997, it broke an unwritten rule that elements should only be named after deceased scientists — Seaborg reportedly loved the honor." },
  107: { description: "Bohrium is a synthetic superheavy element named after Niels Bohr, the pioneering quantum physicist. It was first produced in 1981 in Darmstadt, Germany.", properties: "Bohrium's most stable isotope (Bh-270) has a half-life of about 61 seconds. Very limited chemical experiments suggest it behaves similarly to rhenium, as expected from its position in Group 7.", uses: ["Fundamental nuclear physics research", "Study of chemical properties at extreme atomic numbers", "Test of relativistic quantum chemistry predictions", "No practical applications"], funFact: "Bohrium was first created by bombarding a bismuth target with chromium ions — only a handful of atoms have ever been produced, making chemical studies extraordinarily challenging." },
  108: { description: "Hassium is a synthetic superheavy element named after the German state of Hesse, where it was first produced at the GSI Helmholtz Centre in Darmstadt.", properties: "Hassium's most stable isotope (Hs-277) has a half-life of about 11 seconds. Chemical experiments have confirmed it forms a volatile tetroxide (HsO₄) similar to osmium, its lighter group member.", uses: ["Fundamental research into superheavy element chemistry", "Verification of periodic table group trends", "Nuclear physics experiments", "No practical applications"], funFact: "In 2001, scientists managed to study the chemistry of hassium using just seven individual atoms — they confirmed it forms a volatile oxide like osmium, triumphantly proving the periodic table works even at element 108." },
  109: { description: "Meitnerium is a synthetic superheavy element named after Lise Meitner, the Austrian-Swedish physicist who co-discovered nuclear fission but was controversially excluded from the Nobel Prize.", properties: "Meitnerium's most stable isotope (Mt-278) has a half-life of about 4.5 seconds. No chemical experiments have been conducted due to its extremely short half-life and tiny production quantities.", uses: ["Fundamental nuclear physics research", "No chemical studies conducted yet", "No practical applications", "Theoretical interest in Group 9 chemistry"], funFact: "The naming of meitnerium honored Lise Meitner, who was nominated for the Nobel Prize 48 times but never won — many consider this one of the greatest oversights in Nobel Prize history." },
  110: { description: "Darmstadtium is a synthetic superheavy element named after Darmstadt, Germany, where it was first created. It is expected to be a noble metal similar to platinum.", properties: "Darmstadtium's most stable isotope (Ds-281) has a half-life of about 12.7 seconds. No chemical studies have been performed. Relativistic calculations predict it may have some properties different from its lighter homolog platinum.", uses: ["Fundamental nuclear physics research", "Theoretical chemistry studies", "No practical applications", "No chemical experiments conducted"], funFact: "Darmstadtium was originally given the placeholder name 'ununnilium' (Uun) — one-one-zero in Latin — until it was officially named after the city of its creation in 2003." },
  111: { description: "Roentgenium is a synthetic superheavy element named after Wilhelm Röntgen, the discoverer of X-rays and first Nobel Prize laureate in Physics.", properties: "Roentgenium's most stable isotope (Rg-282) has a half-life of about 100 seconds. Theoretical predictions suggest it may be a noble metal with properties somewhat similar to gold, its lighter Group 11 homolog.", uses: ["Fundamental nuclear physics research", "Theoretical predictions of superheavy element properties", "No practical applications", "No chemical experiments conducted"], funFact: "Roentgenium is predicted by some calculations to be the heaviest element that might retain some resemblance to gold in its chemistry — though relativistic effects could make it behave quite differently." },
  112: { description: "Copernicium is a synthetic superheavy element named after Nicolaus Copernicus, the astronomer who formulated the heliocentric model of the solar system.", properties: "Copernicium's most stable isotope (Cn-285) has a half-life of about 28 seconds. Experiments suggest it may be unusually volatile for a metal, potentially behaving more like a noble gas due to relativistic contraction of its electron orbitals.", uses: ["Fundamental nuclear physics research", "Study of relativistic effects on heavy element properties", "No practical applications", "Chemical behavior studies at the frontier of the periodic table"], funFact: "Experiments with copernicium suggest it may not behave like the metal mercury at all — relativistic effects may make it so weakly interactive that it behaves more like a noble gas, challenging our understanding of periodicity." },
  113: { description: "Nihonium is a synthetic superheavy element named after Japan (Nihon in Japanese). It was the first element discovered in an Asian country, produced at RIKEN in Wako, Japan.", properties: "Nihonium's most stable isotope (Nh-286) has a half-life of about 9.5 seconds. It is expected to be a post-transition metal in Group 13, but relativistic effects may significantly alter its chemistry from thallium.", uses: ["Fundamental nuclear physics research", "Study of superheavy element stability", "No practical applications", "Theoretical interest in relativistic chemistry"], funFact: "Japan worked for nearly a decade to produce enough nihonium atoms to claim discovery — Kosuke Morita's team at RIKEN ultimately created just three atoms between 2004 and 2012." },
  114: { description: "Flerovium is a synthetic superheavy element named after the Flerov Laboratory of Nuclear Reactions in Dubna, Russia. It may have unusual chemical properties due to relativistic effects.", properties: "Flerovium's most stable isotope (Fl-289) has a half-life of about 1.9 seconds. Some theoretical models predict it might be volatile and chemically inert, more like a noble gas than a typical Group 14 metal like lead.", uses: ["Fundamental nuclear physics research", "Study of relativistic effects on chemical behavior", "No practical applications", "Theoretical exploration of the 'island of stability'"], funFact: "Flerovium sits near the theorized 'island of stability' — a region where superheavy elements might have significantly longer half-lives, potentially making them more practically useful if they can be produced." },
  115: { description: "Moscovium is a synthetic superheavy element named after Moscow Oblast, where the Dubna laboratory that co-discovered it is located.", properties: "Moscovium's most stable isotope (Mc-290) has a half-life of about 0.65 seconds. It is expected to be a pnictogen (Group 15) but its chemistry remains entirely theoretical.", uses: ["Fundamental nuclear physics research", "Study of superheavy element properties", "No practical applications", "Exploration of nuclear stability at extreme atomic numbers"], funFact: "Moscovium briefly gained public fame when UFO enthusiasts incorrectly claimed it powered alien spacecraft — in reality, it exists for fractions of a second and has no practical energy applications." },
  116: { description: "Livermorium is a synthetic superheavy element named after Lawrence Livermore National Laboratory in California, which collaborated with Dubna in its discovery.", properties: "Livermorium's most stable isotope (Lv-293) has a half-life of about 53 milliseconds. It is a Group 16 element (chalcogen family) but its extreme instability prevents any chemical study.", uses: ["Fundamental nuclear physics research", "No practical applications", "Theoretical interest in chalcogen chemistry at extreme mass", "Study of nuclear decay chains"], funFact: "Livermorium exists for only about 53 thousandths of a second before decaying — in that brief moment, nuclear physicists must detect its decay products to confirm it was ever created." },
  117: { description: "Tennessine is a synthetic superheavy element named after the state of Tennessee, recognizing contributions from Oak Ridge National Laboratory, Vanderbilt University, and the University of Tennessee.", properties: "Tennessine's most stable isotope (Ts-294) has a half-life of about 51 milliseconds. It is placed in the halogen group but is predicted to be more metallic than its lighter relatives.", uses: ["Fundamental nuclear physics research", "No practical applications", "Study of superheavy element synthesis techniques", "Exploration of periodic table boundaries"], funFact: "Creating tennessine required berkelium-249 as a target — this berkelium had to be specially produced over 250 days at Oak Ridge, then shipped to Russia, because no single laboratory had all the necessary resources." },
  118: { description: "Oganesson is the heaviest known element and completes the seventh period of the periodic table. It is named after Yuri Oganessian, a pioneer in superheavy element research.", properties: "Oganesson's only known isotope (Og-294) has a half-life of about 0.7 milliseconds. Despite being in the noble gas group, theoretical calculations predict it may actually be a solid with reactive properties due to extreme relativistic effects.", uses: ["Fundamental nuclear physics research", "No practical applications", "Theoretical study of the limits of the periodic table", "Exploration of relativistic quantum effects on matter"], funFact: "Oganesson may be the most un-noble of the 'noble gases' — calculations suggest its electron cloud is so distorted by relativistic effects that it might behave more like a reactive solid than an inert gas." },
};

export default ELEMENT_INFO;
