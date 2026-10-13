// =============================================================
//  PHONE-AN-EXPERT roster
// =============================================================
//  home      categories where the expert is always right and confident
//  adjacent  categories where they are always right, a bit less sure
//  anything else counts as "far": usually right, but they hedge and
//  occasionally miss (FAR_MISS_RATE). Overall accuracy ≈ 99%.
//
//  Category names must match those in questions.js:
//   Mesoscale & Severe · Tropical Cyclones · Climate · Dynamics ·
//   Synoptic · Thermodynamics · Cloud Physics · NWP & Data Assimilation ·
//   Atmospheric Chemistry · Observations & Remote Sensing · Boundary Layer
// =============================================================

window.FAR_MISS_RATE = 0.03;

window.EXPERTS = [
  { name: "Dr. Henry Fuelberg",
    short: "Fuelberg",
    blurb: "Atmospheric chemistry & transport, lightning, synoptic meteorology",
    home: ["Atmospheric Chemistry", "Synoptic"],
    adjacent: ["Mesoscale & Severe", "Observations & Remote Sensing", "NWP & Data Assimilation", "Climate", "Dynamics"] },

  { name: "Dr. David Stensrud",
    short: "Stensrud",
    blurb: "Mesoscale NWP, parameterization schemes, ensemble data assimilation",
    home: ["NWP & Data Assimilation", "Mesoscale & Severe", "Boundary Layer"],
    adjacent: ["Cloud Physics", "Thermodynamics", "Dynamics", "Synoptic", "Observations & Remote Sensing"] },

  { name: "Dr. Kerry Emanuel",
    short: "Emanuel",
    blurb: "Tropical cyclones, potential intensity, moist convection, climate",
    home: ["Tropical Cyclones", "Thermodynamics", "Climate"],
    adjacent: ["Dynamics", "Cloud Physics", "Mesoscale & Severe", "Boundary Layer", "Synoptic"] },

  { name: "Dr. Sue van den Heever",
    short: "van den Heever",
    blurb: "Aerosol–cloud–precipitation interactions, convective storms, cloud modeling",
    home: ["Cloud Physics", "Mesoscale & Severe"],
    adjacent: ["Atmospheric Chemistry", "NWP & Data Assimilation", "Thermodynamics", "Observations & Remote Sensing", "Climate"] },

  { name: "Dr. Joanne Simpson",
    short: "Simpson",
    blurb: "Hot towers, tropical convection, cloud modeling, TRMM",
    home: ["Cloud Physics", "Tropical Cyclones", "Observations & Remote Sensing"],
    adjacent: ["Thermodynamics", "Climate", "Mesoscale & Severe", "Dynamics"] },

  { name: "Dr. T. Theodore Fujita",
    short: "Fujita",
    blurb: "Tornadoes, downbursts & microbursts, damage surveys, the F-scale",
    home: ["Mesoscale & Severe", "Observations & Remote Sensing"],
    adjacent: ["Boundary Layer", "Synoptic", "Tropical Cyclones", "Dynamics"] }
];

// Neutral answer phrasings. {L} = letter, {T} = answer text.
window.EXPERT_LINES = {
  home: [
    "This is right in my area. It's {L}: {T}.",
    "No hesitation: {L}.",
    "I'm certain. Go with {L}, {T}.",
    "That one I know well. The answer is {L}."
  ],
  adjacent: [
    "Not my core specialty, but I'm confident it's {L}.",
    "I'd go with {L}. I'm pretty sure about that one.",
    "I'm fairly confident: {L}, {T}."
  ],
  far: [
    "That's well outside my field. My best guess is {L}, but don't bet the million on me.",
    "Honestly, I'd have to look that up. I lean toward {L}.",
    "Not my area at all. I think it's {L}, maybe 60% sure."
  ]
};
