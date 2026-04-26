const planetData = {
  mercury: {
    name: "Mercury",
    type: "Terrestrial planet",
    distance: "0.39 AU",
    day: "58.6 Earth days",
    year: "88 Earth days",
    moons: "0 moons",
    temperature: "Avg. temp: 167 C",
    accent: "#e8a28f",
    tagline: "A cratered rock world with sun-blasted days and ice trapped in eternal shadow.",
    summary: "Mercury is the smallest classical planet and the closest world to the Sun, racing around our star with dramatic temperature swings and a surprisingly large iron core.",
    paragraphs: [
      "Mercury looks quiet from a distance, but its surface preserves an intense early history of impacts, giant basins, fault scarps, and volcanic plains.",
      "Because Mercury rotates slowly and has almost no atmosphere, one side can bake in extreme heat while shadowed regions near the poles stay cold enough to shelter water ice.",
      "NASA's MESSENGER mission transformed our understanding of Mercury by revealing unusual surface chemistry, signs of past volcanism, and a global magnetic field."
    ],
    facts: [
      "Mercury has the most eccentric orbit of the eight planets.",
      "A solar day on Mercury lasts 176 Earth days.",
      "Its iron-rich core takes up an unusually large fraction of the planet.",
      "Bright crater-floor deposits near the poles are consistent with water ice."
    ],
    missions: [
      "Mariner 10 completed the first flybys in the 1970s.",
      "MESSENGER orbited Mercury from 2011 to 2015.",
      "BepiColombo is on the way to begin a new phase of close study."
    ]
  },
  venus: {
    name: "Venus",
    type: "Terrestrial planet",
    distance: "0.72 AU",
    day: "243 Earth days",
    year: "225 Earth days",
    moons: "0 moons",
    temperature: "Avg. temp: 464 C",
    accent: "#d98b41",
    tagline: "A brilliant planet wrapped in clouds, hiding a superheated surface below.",
    summary: "Venus is Earth's near-twin in size but not in habitability, with dense carbon dioxide air, sulfuric acid clouds, and runaway greenhouse heat.",
    paragraphs: [
      "The reflective clouds of Venus make it one of the brightest objects in the sky, but they also hide a hostile world of volcanic plains and crushing atmospheric pressure.",
      "Venus rotates backward compared with most planets, and it turns so slowly that its day is longer than its year.",
      "Radar mapping from orbit has shown that Venus hosts massive shield volcanoes, broad plateaus, and signs that its surface was reshaped on grand scales."
    ],
    facts: [
      "Surface pressure is roughly 92 times Earth's sea-level pressure.",
      "Venus likely experienced a runaway greenhouse effect long ago.",
      "Its atmosphere is mostly carbon dioxide with clouds of sulfuric acid.",
      "The planet may still be volcanically active."
    ],
    missions: [
      "Venera landers returned the first surface images from Venus.",
      "Magellan mapped most of the planet using radar in the 1990s.",
      "New missions are being prepared to study geology and atmosphere in greater detail."
    ]
  },
  earth: {
    name: "Earth",
    type: "Ocean world",
    distance: "1.00 AU",
    day: "23.9 hours",
    year: "365.25 days",
    moons: "1 moon",
    temperature: "Avg. temp: 15 C",
    accent: "#31d8ad",
    tagline: "The living world where oceans, weather, rock, and biology are tightly linked.",
    summary: "Earth is the only known planet with stable surface oceans, active plate tectonics, and a biosphere capable of observing the wider universe.",
    paragraphs: [
      "Our planet's climate, magnetic field, water cycle, and atmosphere create a rare balance that supports complex life across land, sea, and sky.",
      "Earth's Moon helps stabilize the planet's axial tilt and plays a major role in tides, a quiet but profound influence on long-term environmental patterns.",
      "From orbit, Earth is also a scientific reference point, giving us the baseline for understanding climate systems and searching for habitable exoplanets."
    ],
    facts: [
      "About 71 percent of Earth's surface is covered by water.",
      "Plate tectonics recycle crust and help regulate long-term climate.",
      "Earth's magnetic field deflects much of the solar wind.",
      "It is the densest planet in the Solar System."
    ],
    missions: [
      "Apollo transformed our understanding of the Earth-Moon system.",
      "Earth-observing satellites continuously monitor oceans, weather, and ice.",
      "The ISS and newer orbital platforms provide long-duration microgravity research."
    ]
  },
  mars: {
    name: "Mars",
    type: "Terrestrial planet",
    distance: "1.52 AU",
    day: "24.6 hours",
    year: "687 Earth days",
    moons: "2 moons",
    temperature: "Avg. temp: -63 C",
    accent: "#f07255",
    tagline: "The desert world where giant volcanoes, frozen water, and future crewed missions meet.",
    summary: "Mars remains the most compelling target for future human exploration, combining accessible geology, preserved climate history, and evidence of ancient flowing water.",
    paragraphs: [
      "Its surface preserves river valleys, delta deposits, layered sediments, and minerals that point to a wetter early history with conditions very different from today's cold desert.",
      "Mars hosts extremes: Olympus Mons towers as the tallest known volcano, while Valles Marineris cuts a canyon system that dwarfs anything on Earth.",
      "Modern missions use orbiters, landers, helicopters, and rovers to test past habitability, search for biosignatures, and prepare for eventual human crews."
    ],
    facts: [
      "Mars has seasons because its axis is tilted similarly to Earth's.",
      "Global dust storms can engulf the entire planet.",
      "Water ice is locked in polar caps and buried beneath the ground.",
      "Phobos is slowly spiraling inward and may one day break apart."
    ],
    missions: [
      "Viking delivered the first successful long-lived landers in the 1970s.",
      "Curiosity has explored Gale Crater since 2012.",
      "Perseverance and Ingenuity opened a new era of sampling and powered flight."
    ]
  },
  jupiter: {
    name: "Jupiter",
    type: "Gas giant",
    distance: "5.20 AU",
    day: "9.9 hours",
    year: "11.86 Earth years",
    moons: "95 known moons",
    temperature: "Cloud-top temp: -145 C",
    accent: "#f1b564",
    tagline: "A fast-spinning giant with deep storms, immense gravity, and ocean-bearing moons.",
    summary: "Jupiter is the Solar System's largest planet, a giant of layered clouds, powerful jet streams, and a magnetic environment large enough to dominate nearby space.",
    paragraphs: [
      "Its famous Great Red Spot is only one of many long-lived storms in an atmosphere shaped by fierce winds and towering cloud structures.",
      "Jupiter's gravity helps sculpt the architecture of the Solar System, influencing asteroid belts, comets, and the orbital dynamics of surrounding worlds.",
      "The Jovian moon system is a research frontier of its own, especially Europa and Ganymede, which may hold deep subsurface oceans."
    ],
    facts: [
      "Jupiter has the shortest day of any planet.",
      "Its magnetic field is the strongest planetary one in the Solar System.",
      "The planet emits more heat than it receives from the Sun.",
      "Europa is a prime candidate in the search for extraterrestrial habitability."
    ],
    missions: [
      "Pioneer and Voyager revealed Jupiter's system in the flyby era.",
      "Galileo orbited Jupiter and studied its moons extensively.",
      "Juno is currently probing the deep structure and atmosphere from polar orbit."
    ]
  },
  saturn: {
    name: "Saturn",
    type: "Gas giant",
    distance: "9.58 AU",
    day: "10.7 hours",
    year: "29.45 Earth years",
    moons: "146 known moons",
    temperature: "Cloud-top temp: -178 C",
    accent: "#d2b08b",
    tagline: "The ringed giant where icy structures, methane worlds, and ocean plumes all coexist.",
    summary: "Saturn is instantly recognizable for its rings, but the whole Saturnian system is remarkable for active moons, atmospheric dynamics, and delicate orbital structures.",
    paragraphs: [
      "The planet's rings are made mostly of water ice, arranged in an intricate pattern shaped by resonances, collisions, and shepherd moons.",
      "Titan carries a thick atmosphere and methane lakes, while Enceladus sprays water-rich plumes from a hidden ocean beneath its frozen crust.",
      "Saturn's low density, banded clouds, and polar weather systems make it both elegant and scientifically strange."
    ],
    facts: [
      "Saturn would float in a body of water large enough to hold it.",
      "Its rings are broad but surprisingly thin in many regions.",
      "Enceladus vents material from a subsurface ocean into space.",
      "Titan has weather, rivers, and lakes made from hydrocarbons."
    ],
    missions: [
      "Voyager flybys previewed the richness of the Saturn system.",
      "Cassini studied Saturn, Titan, and Enceladus from 2004 to 2017.",
      "Dragonfly is planned to explore Titan from the air."
    ]
  },
  uranus: {
    name: "Uranus",
    type: "Ice giant",
    distance: "19.19 AU",
    day: "17.2 hours",
    year: "84 Earth years",
    moons: "28 known moons",
    temperature: "Cloud-top temp: -224 C",
    accent: "#8ed9e6",
    tagline: "A pale, tilted world that practically rolls around the Sun.",
    summary: "Uranus is the strangest spinner among the planets, tilted by about 98 degrees so its seasons unfold in ways unlike any other major world.",
    paragraphs: [
      "Its atmosphere contains hydrogen, helium, and methane, with methane absorbing red light and helping give the planet its cool blue-green tone.",
      "Because Uranus rotates on its side, each pole can spend decades in sunlight and then decades in darkness over the course of its long year.",
      "Despite only one spacecraft flyby so far, Uranus is central to understanding ice giants, a class of planet that appears common around other stars."
    ],
    facts: [
      "Uranus was the first planet discovered with a telescope.",
      "Its interior likely contains hot, high-pressure water-ammonia mixtures.",
      "The magnetic field is oddly tilted and offset from the center.",
      "Its rings are dark, narrow, and harder to spot than Saturn's."
    ],
    missions: [
      "Voyager 2 performed the only flyby in 1986.",
      "Ground-based and space telescopes continue seasonal monitoring.",
      "A flagship orbiter and probe mission is a major long-term science goal."
    ]
  },
  neptune: {
    name: "Neptune",
    type: "Ice giant",
    distance: "30.07 AU",
    day: "16.1 hours",
    year: "164.8 Earth years",
    moons: "16 known moons",
    temperature: "Cloud-top temp: -214 C",
    accent: "#5a8cff",
    tagline: "A distant ice giant where fierce winds race through a cobalt-blue atmosphere.",
    summary: "Neptune is the outermost major planet and one of the most dynamic, with dark storms, fast-moving clouds, and weather systems powered far from the Sun.",
    paragraphs: [
      "The planet was predicted mathematically before it was directly observed, a milestone in celestial mechanics and one of astronomy's great detective stories.",
      "Neptune's atmosphere contains methane, but its exact deep-blue color likely also depends on additional photochemical and cloud effects.",
      "Its large moon Triton may be a captured Kuiper Belt object and shows signs of active geology, making the Neptune system particularly enticing."
    ],
    facts: [
      "Some of Neptune's winds reach faster than the speed of sound on Earth.",
      "Triton orbits backward, hinting that it was captured.",
      "Neptune radiates significant internal heat.",
      "It completed its first full orbit since discovery in 2011."
    ],
    missions: [
      "Voyager 2 remains the only spacecraft to visit Neptune.",
      "Hubble and large telescopes track evolving storms and cloud bands.",
      "Future concepts focus on orbiters, atmospheric probes, and Triton science."
    ]
  },
  pluto: {
    name: "Pluto",
    type: "Dwarf planet",
    distance: "39.48 AU",
    day: "6.4 Earth days",
    year: "248 Earth years",
    moons: "5 moons",
    temperature: "Avg. temp: -229 C",
    accent: "#f1a269",
    tagline: "A small Kuiper Belt world with nitrogen ice, water-ice mountains, and surprising geology.",
    summary: "Pluto changed from a fuzzy point of debate into a richly textured world after New Horizons revealed plains, haze layers, and evidence of active surface renewal.",
    paragraphs: [
      "Sputnik Planitia, a vast nitrogen-ice basin, suggests that even far from the Sun, dwarf planets can remain geologically active over long timescales.",
      "Pluto and Charon form a tightly linked binary-like system, orbiting a shared center of mass outside Pluto itself.",
      "Its story now sits at the crossroads of planetary science, classification debates, and Kuiper Belt exploration."
    ],
    facts: [
      "Pluto's atmosphere expands and contracts as it moves along its orbit.",
      "Water-ice mountains rise above softer nitrogen and methane ices.",
      "Charon is so large relative to Pluto that the pair is unusually balanced.",
      "The dwarf planet was reclassified by the IAU in 2006."
    ],
    missions: [
      "Clyde Tombaugh discovered Pluto in 1930.",
      "New Horizons flew past Pluto in 2015 and transformed what we know.",
      "Kuiper Belt exploration after Pluto continues to reshape outer Solar System science."
    ]
  }
};

const planetOrder = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune", "pluto"];

const root = document.documentElement;
const planetInputs = planetOrder.map((id) => document.getElementById(id)).filter(Boolean);
const ctaButtons = document.querySelectorAll(".planet-cta");
const jumpButtons = document.querySelectorAll("[data-jump-to]");
const openActiveButton = document.querySelector("[data-open-active]");
const drawer = document.getElementById("planetDrawer");
const drawerBackdrop = document.getElementById("drawerBackdrop");
const drawerClose = document.getElementById("drawerClose");

const overviewName = document.getElementById("overviewName");
const overviewTagline = document.getElementById("overviewTagline");
const overviewType = document.getElementById("overviewType");
const overviewDistance = document.getElementById("overviewDistance");
const overviewDay = document.getElementById("overviewDay");
const overviewYear = document.getElementById("overviewYear");
const overviewMoons = document.getElementById("overviewMoons");
const overviewTemp = document.getElementById("overviewTemp");
const missionReadMore = document.getElementById("missionReadMore");
const drawerType = document.getElementById("drawerType");
const drawerTitle = document.getElementById("drawerTitle");
const drawerSummary = document.getElementById("drawerSummary");
const drawerStats = document.getElementById("drawerStats");
const drawerParagraphs = document.getElementById("drawerParagraphs");
const drawerFacts = document.getElementById("drawerFacts");
const drawerMissions = document.getElementById("drawerMissions");

let activePlanet = planetInputs.find((input) => input.checked)?.id || "earth";

function updateOverview(planetKey) {
  const planet = planetData[planetKey];
  if (!planet) {
    return;
  }

  activePlanet = planetKey;
  root.style.setProperty("--accent-planet", planet.accent);
  overviewName.textContent = planet.name;
  overviewTagline.textContent = planet.tagline;
  overviewType.textContent = planet.type;
  overviewDistance.textContent = planet.distance;
  overviewDay.textContent = planet.day;
  overviewYear.textContent = planet.year;
  overviewMoons.textContent = planet.moons;
  overviewTemp.textContent = planet.temperature;

   if (missionReadMore) {
    missionReadMore.textContent = `Read More: ${planet.name}`;
    missionReadMore.setAttribute("aria-label", `Read more about ${planet.name}`);
  }

  document.querySelectorAll(".menu").forEach((label) => {
    label.classList.toggle("is-active", label.dataset.planetTarget === planetKey);
  });
}

function renderDrawer(planetKey) {
  const planet = planetData[planetKey];
  if (!planet) {
    return;
  }

  drawerType.textContent = planet.type;
  drawerTitle.textContent = planet.name;
  drawerSummary.textContent = planet.summary;

  drawerStats.innerHTML = `
    <article><span>Distance</span><strong>${planet.distance}</strong></article>
    <article><span>Length of day</span><strong>${planet.day}</strong></article>
    <article><span>Length of year</span><strong>${planet.year}</strong></article>
    <article><span>Natural satellites</span><strong>${planet.moons}</strong></article>
    <article><span>Typical temperature</span><strong>${planet.temperature}</strong></article>
  `;

  drawerParagraphs.innerHTML = planet.paragraphs.map((paragraph) => `<p>${paragraph}</p>`).join("");
  drawerFacts.innerHTML = planet.facts.map((fact) => `<li>${fact}</li>`).join("");
  drawerMissions.innerHTML = planet.missions.map((mission) => `<li>${mission}</li>`).join("");
}

function openDrawer(planetKey) {
  renderDrawer(planetKey);
  drawer.hidden = false;
  drawerBackdrop.hidden = false;
  drawer.classList.add("is-open");
  drawerBackdrop.classList.add("is-visible");
  drawer.setAttribute("aria-hidden", "false");
  drawerClose.focus();
}

function closeDrawer() {
  drawer.classList.remove("is-open");
  drawerBackdrop.classList.remove("is-visible");
  drawer.setAttribute("aria-hidden", "true");

  window.setTimeout(() => {
    if (!drawer.classList.contains("is-open")) {
      drawer.hidden = true;
      drawerBackdrop.hidden = true;
    }
  }, 260);
}

function selectPlanet(planetKey) {
  const input = document.getElementById(planetKey);
  if (!input) {
    return;
  }
  input.checked = true;
  updateOverview(planetKey);
}

planetInputs.forEach((input) => {
  input.addEventListener("change", () => {
    if (input.checked) {
      updateOverview(input.id);
    }
  });
});

ctaButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const planetKey = button.dataset.planet;
    selectPlanet(planetKey);
    openDrawer(planetKey);
  });
});

jumpButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const planetKey = button.dataset.jumpTo;
    selectPlanet(planetKey);
  });
});

openActiveButton?.addEventListener("click", () => {
  openDrawer(activePlanet);
});

missionReadMore?.addEventListener("click", () => {
  openDrawer(activePlanet);
});

drawerClose?.addEventListener("click", closeDrawer);
drawerBackdrop?.addEventListener("click", closeDrawer);

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && drawer.classList.contains("is-open")) {
    closeDrawer();
    return;
  }

  if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") {
    return;
  }

  const currentIndex = planetOrder.indexOf(activePlanet);
  const direction = event.key === "ArrowRight" ? 1 : -1;
  const nextIndex = (currentIndex + direction + planetOrder.length) % planetOrder.length;
  selectPlanet(planetOrder[nextIndex]);
});

updateOverview(activePlanet);
drawer.hidden = true;