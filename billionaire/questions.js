// =============================================================
//  QUESTION BANK — Who Wants to Be a Billionaire? (Meteorology)
// =============================================================
//  One question per level is drawn at random each game.
//  To add questions, copy any block below and edit it.
//
//  Fields
//    level        1–15  (1–5 undergrad, 6–10 M.S., 11–15 Ph.D. quals)
//    category     must match a category used in experts.js
//    q            the question
//    options      exactly four answers (order is shuffled at runtime)
//    answer       index (0–3) of the correct option in `options`
//    explanation  shown after the player answers
//    trap         (optional) index of a tempting wrong option; the
//                 "Ask the Grad Students" poll leans toward it
// =============================================================

window.QUESTIONS = [

  // ---------------- LEVEL 1 ----------------
  { level: 1, category: "Cloud Physics",
    q: "Which cloud type is most closely associated with thunderstorms?",
    options: ["Cirrus", "Stratus", "Cumulonimbus", "Altostratus"],
    answer: 2,
    explanation: "Cumulonimbus clouds reach deep into the troposphere, often to the tropopause, with strong updrafts, ice, and charge separation. They are the thunderstorm cloud." },

  { level: 1, category: "Synoptic",
    q: "On a standard surface weather map, how is a cold front drawn?",
    options: ["Blue line with triangles", "Red line with semicircles", "Purple line with triangles and semicircles", "Dashed brown line"],
    answer: 0,
    explanation: "Cold fronts are blue lines with triangles pointing toward the warmer air. Warm fronts are red with semicircles, occluded fronts are purple with both, and a dashed brown line usually marks a trough." },

  { level: 1, category: "Observations & Remote Sensing",
    q: "Which instrument measures atmospheric pressure?",
    options: ["Hygrometer", "Anemometer", "Barometer", "Pyranometer"],
    answer: 2,
    explanation: "A barometer measures pressure. Hygrometers measure humidity, anemometers measure wind speed, and pyranometers measure solar irradiance." },

  { level: 1, category: "Atmospheric Chemistry",
    q: "What is the most abundant gas in Earth's dry atmosphere?",
    options: ["Oxygen", "Nitrogen", "Argon", "Carbon dioxide"],
    answer: 1,
    explanation: "N₂ makes up about 78% of dry air by volume, O₂ about 21%, Ar about 0.9%, and CO₂ about 0.04%." },

  { level: 1, category: "Tropical Cyclones",
    q: "In the Atlantic basin, a tropical storm becomes a hurricane when maximum sustained winds reach at least:",
    options: ["39 mph", "74 mph", "111 mph", "157 mph"],
    answer: 1,
    explanation: "74 mph (64 kt) is the hurricane threshold. 39 mph is the tropical storm threshold, 111 mph is major hurricane (Cat 3), and 157 mph is Cat 5." },

  // ---------------- LEVEL 2 ----------------
  { level: 2, category: "Dynamics",
    q: "In the Northern Hemisphere, near-surface winds around a low-pressure center blow:",
    options: ["Clockwise and outward", "Counterclockwise and inward", "Clockwise and inward", "Counterclockwise and outward"],
    answer: 1,
    explanation: "The Coriolis force gives cyclonic (counterclockwise in the NH) flow. Surface friction slows the wind, so the Coriolis force no longer fully balances the pressure-gradient force, and air turns inward across the isobars toward low pressure." },

  { level: 2, category: "Thermodynamics",
    q: "The dew point is the temperature to which air must be cooled, at constant pressure and water-vapor content, to:",
    options: ["Freeze", "Reach saturation", "Become neutrally buoyant", "Reach its potential temperature"],
    answer: 1,
    explanation: "Cooling isobarically at fixed vapor content lowers the saturation vapor pressure until it equals the actual vapor pressure. That temperature is the dew point." },

  { level: 2, category: "Climate",
    q: "In which layer of the atmosphere does nearly all weather occur?",
    options: ["Stratosphere", "Mesosphere", "Troposphere", "Thermosphere"],
    answer: 2,
    explanation: "The troposphere contains most of the atmosphere's mass and nearly all of its water vapor, and temperature generally decreases with height there, which allows convection." },

  { level: 2, category: "Mesoscale & Severe",
    q: "The Enhanced Fujita (EF) scale rates tornadoes based on:",
    options: ["Radar-measured rotational velocity", "Wind speeds estimated from damage", "Path length and width", "Funnel diameter"],
    answer: 1,
    explanation: "EF ratings come from damage surveys. Damage indicators and degrees of damage are mapped to estimated wind speeds. Radar velocities can support a survey, but they do not set the rating." },

  { level: 2, category: "Cloud Physics",
    q: "Which phase change releases latent heat to the surrounding air?",
    options: ["Evaporation", "Melting", "Sublimation", "Condensation"],
    answer: 3,
    explanation: "Condensation (and freezing and deposition) release latent heat. Evaporation, melting, and sublimation absorb it." },

  // ---------------- LEVEL 3 ----------------
  { level: 3, category: "Observations & Remote Sensing",
    q: "A modern radiosonde provides vertical profiles of:",
    options: ["Only temperature", "Temperature, humidity, and pressure, plus wind from GPS tracking", "Only wind speed and direction", "Radar reflectivity and cloud liquid water"],
    answer: 1,
    explanation: "Radiosondes carry temperature, humidity, and (or GPS-derived) pressure sensors. Winds are computed by tracking the balloon's horizontal drift with GPS." },

  { level: 3, category: "Mesoscale & Severe",
    q: "A dryline is a boundary that separates:",
    options: ["Warm air from cold air of similar moisture", "Moist air from dry air, with a sharp dew point gradient", "Rain-cooled outflow from ambient air", "Stratospheric air from tropospheric air"],
    answer: 1,
    explanation: "The dryline separates moist Gulf air from dry continental air, often over the southern Great Plains. It is defined mainly by a moisture (dew point) gradient, and it is a common convection initiation zone." },

  { level: 3, category: "Tropical Cyclones",
    q: "The eye of a mature hurricane is typically characterized by:",
    options: ["The strongest winds in the storm", "Light winds and gently subsiding air", "Intense convective updrafts", "The heaviest rainfall"],
    answer: 1,
    explanation: "Inside the eye, air sinks slowly and warms adiabatically, so skies are often clear and winds are light. The strongest winds and heaviest rain are in the surrounding eyewall." },

  { level: 3, category: "Climate",
    q: "The warm phase of ENSO, with anomalously warm sea surface temperatures in the central and eastern equatorial Pacific, is called:",
    options: ["La Niña", "El Niño", "The Madden–Julian Oscillation", "The negative PDO"],
    answer: 1,
    explanation: "El Niño is the warm phase and La Niña is the cool phase. The MJO is an intraseasonal tropical oscillation, and the PDO is a separate decadal pattern." },

  { level: 3, category: "Thermodynamics",
    q: "What is the dry adiabatic lapse rate approximately equal to?",
    options: ["6.5 K/km", "9.8 K/km", "3.5 K/km", "2.0 K/km"],
    answer: 1,
    explanation: "Γd = g/cp ≈ 9.8 K/km. The 6.5 K/km value is the standard-atmosphere average tropospheric lapse rate." },

  // ---------------- LEVEL 4 ----------------
  { level: 4, category: "Cloud Physics",
    q: "The Wegener–Bergeron–Findeisen process works because, at the same subfreezing temperature:",
    options: ["Saturation vapor pressure over ice is lower than over supercooled liquid", "Ice crystals fall faster than droplets", "Supercooled droplets cannot exist below 0 °C", "Ice nuclei are more abundant than CCN"],
    answer: 0,
    explanation: "Because e_s,ice < e_s,liquid, air that is saturated with respect to liquid is supersaturated with respect to ice. Ice crystals then grow by vapor deposition at the expense of evaporating droplets." },

  { level: 4, category: "Dynamics",
    q: "The geostrophic wind represents a balance between:",
    options: ["Pressure-gradient force and friction", "Pressure-gradient force and Coriolis force", "Coriolis force and centrifugal force", "Gravity and buoyancy"],
    answer: 1,
    explanation: "Geostrophic balance is the balance of the horizontal pressure-gradient force and the Coriolis force. It is a good approximation away from the surface and the equator, for small Rossby numbers." },

  { level: 4, category: "Observations & Remote Sensing",
    q: "Which wind quantity does a single Doppler weather radar measure directly?",
    options: ["The full 3D wind vector", "The radial velocity component toward or away from the radar", "Vertical velocity only", "Wind speed regardless of direction"],
    answer: 1,
    explanation: "The Doppler shift gives only the radial (along-beam) component of target motion. Retrieving full wind fields needs multiple radars or assumptions such as VAD." },

  { level: 4, category: "Atmospheric Chemistry",
    q: "Stratospheric ozone is produced mainly by:",
    options: ["Lightning NOx", "Photolysis of O₂ by UV radiation, followed by O + O₂ + M", "Breakdown of CFCs", "Oxidation of methane"],
    answer: 1,
    explanation: "In the Chapman mechanism, O₂ is photolyzed by UV (λ < 242 nm), and the O atoms combine with O₂ in the presence of a third body to form O₃. CFC breakdown releases Cl, which destroys ozone." },

  { level: 4, category: "Tropical Cyclones",
    q: "Why do tropical cyclones almost never form right on the equator?",
    options: ["Sea surface temperatures are too low", "The Coriolis parameter is near zero", "Vertical wind shear is always extreme there", "There is no low-level moisture"],
    answer: 1,
    explanation: "f = 2Ω sin φ vanishes at the equator. Without planetary vorticity, a low-pressure disturbance is hard to spin up and sustain in rotational balance. Genesis usually happens poleward of about 5°." },

  // ---------------- LEVEL 5 ----------------
  { level: 5, category: "Thermodynamics",
    q: "Convective Available Potential Energy (CAPE) is best described as:",
    options: ["The energy needed to lift a parcel to its LCL", "The vertically integrated positive buoyancy of a lifted parcel between the LFC and the EL", "The total latent heat released in a column", "The kinetic energy of the low-level jet"],
    answer: 1,
    explanation: "CAPE = ∫ g (T_v,parcel − T_v,env)/T_v,env dz from the LFC to the EL. The energy barrier below the LFC is CIN." },

  { level: 5, category: "Mesoscale & Severe",
    q: "On radar reflectivity, a hook echo usually indicates:",
    options: ["A bow echo's rear-inflow jet", "Precipitation wrapping around a supercell's mesocyclone", "Hail in the forward-flank core", "Ground clutter from wind turbines"],
    answer: 1,
    explanation: "The hook forms when precipitation is drawn around the rotating updraft near the rear-flank downdraft. It is the classic supercell signature on reflectivity." },

  { level: 5, category: "Climate",
    q: "What was the approximate pre-industrial atmospheric CO₂ concentration?",
    options: ["180 ppm", "280 ppm", "350 ppm", "420 ppm"],
    answer: 1,
    explanation: "Ice cores give about 280 ppm before roughly 1750. About 180 ppm is typical of glacial maxima, and values above 420 ppm have been observed in the 2020s." },

  { level: 5, category: "Boundary Layer",
    q: "The classic explanation for the nocturnal low-level jet over the Great Plains is:",
    options: ["An inertial oscillation after the residual layer frictionally decouples near sunset", "Sea-breeze penetration from the Gulf", "Mountain-wave breaking over the Rockies", "Descent of an upper-level jet streak"],
    answer: 0,
    explanation: "Blackadar (1957): when turbulent mixing collapses at sunset, the frictional force vanishes and the ageostrophic wind oscillates inertially, producing supergeostrophic winds overnight. Sloping-terrain baroclinicity (Holton 1967) adds to the effect." },

  { level: 5, category: "NWP & Data Assimilation",
    q: "Edward Lorenz's work in the 1960s showed that:",
    options: ["Numerical models are unconditionally stable", "Sensitive dependence on initial conditions limits deterministic predictability", "Weather is predictable indefinitely with enough computing power", "Higher resolution always increases forecast skill"],
    answer: 1,
    explanation: "Lorenz (1963) showed that small initial-condition errors grow in nonlinear systems, which sets a finite limit on deterministic predictability. That is the basis for chaos theory and ensemble forecasting." },

  // ---------------- LEVEL 6 ----------------
  { level: 6, category: "Dynamics",
    q: "In the Northern Hemisphere, the thermal wind vector is oriented so that colder air lies:",
    options: ["To its left", "To its right", "Directly downstream", "Directly upstream"],
    answer: 0,
    explanation: "The thermal wind (geostrophic shear) is parallel to the mean-layer isotherms with cold air to the left in the NH, just as the geostrophic wind has low pressure to the left." },

  { level: 6, category: "Cloud Physics",
    q: "A Köhler curve combines which two effects on the equilibrium saturation ratio over a solution droplet?",
    options: ["Curvature (Kelvin) and solute (Raoult) effects", "Collision and coalescence", "Riming and aggregation", "Ventilation and radiative cooling"],
    answer: 0,
    explanation: "The Kelvin term raises the equilibrium vapor pressure over small curved droplets, and the Raoult term lowers it for dissolved solute. The peak of the curve gives the critical supersaturation for activation." },

  { level: 6, category: "Tropical Cyclones",
    q: "A tropical cyclone has a warm core. By thermal wind balance, its tangential winds therefore:",
    options: ["Increase with height", "Decrease with height", "Stay constant with height", "Reverse direction at the surface"],
    answer: 1, trap: 0,
    explanation: "A warm core means the radial pressure gradient weakens with height, so cyclonic winds are strongest near the top of the boundary layer and decay upward, often becoming anticyclonic in the outflow layer." },

  { level: 6, category: "NWP & Data Assimilation",
    q: "The CFL condition for an explicit advection scheme relates which quantities?",
    options: ["Time step, grid spacing, and the fastest signal speed", "Grid spacing and the Rossby radius", "Time step and the Brunt–Väisälä frequency only", "Number of vertical levels and model top height"],
    answer: 0,
    explanation: "For stability, the Courant number c·Δt/Δx must not exceed a scheme-dependent limit. Information cannot move more than about one grid cell per time step." },

  { level: 6, category: "Mesoscale & Severe",
    q: "Midlevel updraft rotation in supercells comes mainly from:",
    options: ["Tilting of horizontal vorticity associated with environmental vertical wind shear", "Earth's rotation (planetary vorticity)", "Pre-existing vertical vorticity along a dryline", "Baroclinic generation in the anvil"],
    answer: 0,
    explanation: "The updraft tilts environmental horizontal vorticity, especially its streamwise part, into the vertical. Stretching then amplifies it. The Coriolis effect is negligible on supercell scales." },

  // ---------------- LEVEL 7 ----------------
  { level: 7, category: "Thermodynamics",
    q: "Equivalent potential temperature (θe) is approximately conserved for:",
    options: ["Dry adiabatic processes only", "Both dry and moist pseudoadiabatic processes", "Diabatic radiative heating", "Isobaric mixing with dry air"],
    answer: 1,
    explanation: "θe includes the latent heat content of the vapor, so it is conserved through condensation in pseudoadiabatic ascent as well as dry adiabatic motion. That makes it a useful tracer of convective air masses." },

  { level: 7, category: "Climate",
    q: "What is the IPCC AR6 best estimate of equilibrium climate sensitivity (ECS)?",
    options: ["1.5 °C", "3 °C", "4.5 °C", "6 °C"],
    answer: 1,
    explanation: "AR6 gives a best estimate of 3 °C, a likely range of 2.5–4 °C, and a very likely range of 2–5 °C. Combining process understanding, the historical record, and paleoclimate evidence narrowed the older 1.5–4.5 °C range." },

  { level: 7, category: "Observations & Remote Sensing",
    q: "In rain, a large positive differential reflectivity (Z_DR of about +3 dB) indicates:",
    options: ["Tumbling hail", "Large oblate raindrops", "Small drizzle drops", "Non-meteorological scatterers only"],
    answer: 1,
    explanation: "Large drops flatten as they fall, so horizontally polarized returns exceed vertical ones. Tumbling hail tends toward Z_DR ≈ 0, and small drops are nearly spherical." },

  { level: 7, category: "Atmospheric Chemistry",
    q: "What is the main sink of methane in the troposphere?",
    options: ["Photolysis by visible light", "Reaction with the hydroxyl radical (OH)", "Uptake by ocean phytoplankton", "Reaction with ozone"],
    answer: 1,
    explanation: "Oxidation by OH removes roughly 90% of atmospheric CH₄. OH is often called the atmosphere's detergent, and its abundance largely sets methane's lifetime of about a decade." },

  { level: 7, category: "Dynamics",
    q: "Relative to the mean flow, Rossby waves propagate:",
    options: ["Eastward", "Westward", "Northward only", "They do not propagate"],
    answer: 1,
    explanation: "The barotropic Rossby dispersion relation c − U = −β/K² gives westward phase propagation relative to the mean flow. In strong westerlies, waves can still move east relative to the ground." },

  // ---------------- LEVEL 8 ----------------
  { level: 8, category: "Dynamics",
    q: "In the traditional form of the QG omega equation, large-scale ascent is forced by:",
    options: ["Cyclonic vorticity advection increasing with height, and warm advection", "Anticyclonic vorticity advection and cold advection", "Surface friction and radiative cooling", "Latent heating only"],
    answer: 0,
    explanation: "The two forcing terms are differential vorticity advection and the Laplacian of thermal advection. Cyclonic vorticity advection increasing with height and local warm-air advection both force ascent. The Q-vector form combines them." },

  { level: 8, category: "Cloud Physics",
    q: "Hallett–Mossop secondary ice production (rime splintering) is most active at temperatures of about:",
    options: ["0 to −2 °C", "−3 to −8 °C", "−15 to −20 °C", "Below −38 °C"],
    answer: 1,
    explanation: "Laboratory work by Hallett and Mossop (1974) showed splinter production during riming peaks near −5 °C, within roughly −3 to −8 °C, and needs both large and small droplets. Below about −38 °C, homogeneous freezing dominates." },

  { level: 8, category: "Tropical Cyclones",
    q: "During an eyewall replacement cycle, a hurricane's maximum winds typically:",
    options: ["Increase steadily", "Weaken temporarily while the wind field broadens", "Stay exactly constant", "Fall to tropical-storm strength permanently"],
    answer: 1,
    explanation: "An outer eyewall forms, contracts, and cuts the inner eyewall off from inflow and moisture. Peak winds drop while the radius of maximum winds expands, and the storm can then reintensify around the new eyewall." },

  { level: 8, category: "NWP & Data Assimilation",
    q: "The WRF-ARW dynamical core uses a vertical coordinate based on:",
    options: ["Geometric height above sea level", "Potential temperature (isentropic)", "Terrain-following hydrostatic pressure (mass coordinate, η)", "Log-pressure without terrain following"],
    answer: 2,
    explanation: "ARW uses a mass-based η coordinate tied to dry hydrostatic pressure. It follows the terrain near the surface and, with the hybrid option in v4+, relaxes toward isobaric surfaces aloft." },

  { level: 8, category: "Mesoscale & Severe",
    q: "Fujita defined a microburst as a downburst with damaging outflow extending less than:",
    options: ["1 km", "4 km", "10 km", "40 km"],
    answer: 1,
    explanation: "Fujita separated microbursts (< 4 km, peak winds typically lasting 2–5 minutes) from macrobursts (> 4 km). His work after the Eastern 727 crash in 1975 changed aviation wind-shear safety." },

  // ---------------- LEVEL 9 ----------------
  { level: 9, category: "Thermodynamics",
    q: "What distinguishes pseudoadiabatic ascent from reversible moist adiabatic ascent?",
    options: ["Pseudoadiabatic ascent removes condensate immediately, while reversible ascent keeps it with the parcel", "Pseudoadiabatic ascent includes ice and reversible ascent does not", "Reversible ascent ignores latent heating", "There is no physical difference"],
    answer: 0,
    explanation: "In the reversible case, condensate stays in the parcel. Its heat capacity and its loading (in virtual-temperature terms) reduce buoyancy. Pseudoadiabatic ascent drops condensate instantly, giving a warmer parcel and larger CAPE aloft." },

  { level: 9, category: "Climate",
    q: "Saturation vapor pressure rises about 7% per K, yet global-mean precipitation rises only about 1–3% per K. Why?",
    options: ["Precipitation is limited by the atmosphere's ability to radiatively cool and remove latent heat", "Relative humidity drops sharply with warming", "Aerosols completely offset the increase", "Ocean evaporation decreases with warming"],
    answer: 0, trap: 1,
    explanation: "Globally, latent heating from precipitation must be balanced mostly by net atmospheric radiative cooling, which grows slowly with warming. Column moisture follows Clausius–Clapeyron, but global precipitation is energetically constrained." },

  { level: 9, category: "Tropical Cyclones",
    q: "Under the widely used Kaplan & DeMaria (2003) definition, rapid intensification is an increase in maximum sustained winds of at least:",
    options: ["15 kt in 24 h", "30 kt in 24 h", "50 kt in 48 h", "35 hPa pressure fall in 12 h"],
    answer: 1,
    explanation: "30 kt in 24 h was roughly the 95th percentile of Atlantic 24-h intensity changes. Other thresholds (for example 20, 25, or 35 kt) are used in some studies." },

  { level: 9, category: "NWP & Data Assimilation",
    q: "In a statistically well-calibrated ensemble, the average ensemble spread should match:",
    options: ["The RMSE of the ensemble mean (with a small finite-size correction)", "The bias of the control run", "The climatological standard deviation, always", "Zero after the first forecast day"],
    answer: 0,
    explanation: "For a reliable ensemble, the spread is consistent with the ensemble-mean error, scaled by about √((M+1)/M) for M members. Spread smaller than error indicates underdispersion, the common case." },

  { level: 9, category: "Mesoscale & Severe",
    q: "With a clockwise-curved (veering) hodograph in the Northern Hemisphere, which member of a splitting supercell pair is typically favored?",
    options: ["The left-mover", "The right-mover", "Both equally", "Neither; the storm does not split"],
    answer: 1,
    explanation: "Clockwise curvature produces dynamic pressure perturbations that strengthen the cyclonically rotating right-mover and weaken the left-mover. With a straight hodograph, the split is roughly mirror-symmetric." },

  // ---------------- LEVEL 10 ----------------
  { level: 10, category: "Dynamics",
    q: "Ertel potential vorticity is materially conserved for flow that is:",
    options: ["Hydrostatic", "Adiabatic and frictionless", "Geostrophic", "Barotropic"],
    answer: 1,
    explanation: "PV = (1/ρ) ζ_a · ∇θ is conserved following the flow when there is no diabatic heating and no friction. That property makes PV a powerful tracer and the basis of PV inversion." },

  { level: 10, category: "Cloud Physics",
    q: "The Twomey (first indirect) aerosol effect refers to:",
    options: ["More CCN at fixed liquid water path producing more, smaller droplets and higher cloud albedo", "Aerosols suppressing drizzle and extending cloud lifetime", "Absorbing aerosols evaporating clouds", "Aerosols scattering sunlight in clear sky"],
    answer: 0, trap: 1,
    explanation: "Twomey (1974/1977): with liquid water held fixed, more CCN means more, smaller droplets, more total droplet surface area, and higher albedo. The lifetime/LWP effect is the Albrecht (1989) effect. Absorbing aerosol is the semi-direct effect." },

  { level: 10, category: "Observations & Remote Sensing",
    q: "Over oceans, low-frequency (about 10–37 GHz) passive-microwave rain retrievals rely mainly on:",
    options: ["Emission by liquid hydrometeors against the radiometrically cold ocean surface", "Scattering by ice above the freezing level", "Cloud-top temperature in the infrared", "Lightning detection"],
    answer: 0,
    explanation: "The low emissivity of the ocean makes it look cold, so rain emission raises brightness temperatures. Over land, the warm, variable surface hides that signal, and retrievals rely more on high-frequency ice scattering." },

  { level: 10, category: "Climate",
    q: "Pithan & Mauritsen (2014) found that, alongside the surface-albedo feedback, a major contributor to Arctic amplification is:",
    options: ["The lapse-rate (temperature) feedback", "A stronger water-vapor feedback than in the tropics", "Increased Arctic aerosol forcing", "Weakening of the Atlantic meridional overturning circulation"],
    answer: 0,
    explanation: "Strong near-surface stability in the Arctic concentrates warming at the surface, which makes the lapse-rate feedback positive there (negative in the tropics). Temperature feedbacks were the largest contributors, ahead of surface albedo." },

  { level: 10, category: "Atmospheric Chemistry",
    q: "In a strongly VOC-limited (NOx-saturated) urban regime, cutting NOx emissions will initially:",
    options: ["Increase ozone", "Decrease ozone proportionally", "Have no effect on ozone", "Eliminate ozone formation"],
    answer: 0, trap: 1,
    explanation: "When NOx is saturated, NO₂ removes OH (forming HNO₃) and NO titrates O₃. Cutting NOx frees OH for VOC oxidation and reduces titration, so O₃ can rise. This is the basis of the weekend ozone effect." },

  // ---------------- LEVEL 11 ----------------
  { level: 11, category: "Cloud Physics",
    q: "In the classic steady entraining-plume model (Morton, Taylor & Turner 1956), the fractional entrainment rate ε scales approximately as:",
    options: ["ε ∝ R (plume radius)", "ε ∝ 1/R", "ε ∝ CAPE", "ε independent of plume size"],
    answer: 1,
    explanation: "With the entrainment assumption (inflow velocity = α·w), mass-flux budgets give ε = 2α/R. Wider plumes are diluted less, which is the basis of ε ≈ 0.2/R closures in many convection schemes." },

  { level: 11, category: "Tropical Cyclones",
    q: "In tropical cyclone theory, what does the acronym WISHE stand for?",
    options: ["Wind-Induced Surface Heat Exchange", "Warm-core Instability of Saturated Hot Eyewalls", "Wave–Inertia Shear Hurricane Equilibrium", "Westerly-Induced Sea Height Elevation"],
    answer: 0,
    explanation: "WISHE describes a feedback in which stronger surface winds increase air–sea enthalpy fluxes, which in turn sustain the storm. It is central to Emanuel's view that TCs are finite-amplitude air–sea interaction instabilities, as opposed to CISK." },

  { level: 11, category: "NWP & Data Assimilation",
    q: "Compared with 3D-Var, what does 4D-Var require?",
    options: ["Tangent-linear and adjoint versions of the forecast model", "A larger ensemble", "No background error covariance", "Only surface observations"],
    answer: 0,
    explanation: "4D-Var fits observations spread over a time window using model dynamics as a constraint. The adjoint efficiently computes the gradient of the cost function with respect to the initial state." },

  { level: 11, category: "Dynamics",
    q: "Which of these is absent in the Eady baroclinic-instability model but present in the Charney model?",
    options: ["Vertical wind shear", "The β effect (meridional gradient of planetary vorticity)", "Static stability", "Coriolis force"],
    answer: 1,
    explanation: "Eady uses an f-plane with uniform shear, rigid lids, and no interior PV gradient, so instability comes only from boundary temperature gradients. Charney includes β, which provides an interior PV gradient." },

  { level: 11, category: "Mesoscale & Severe",
    q: "In RKW theory (Rotunno, Klemp & Weisman 1988), squall lines are most upright and long-lived when:",
    options: ["Cold-pool propagation speed C roughly balances the low-level shear ΔU (C/ΔU ≈ 1)", "There is no low-level shear", "The cold pool is absent", "Upper-level shear dominates low-level shear"],
    answer: 0,
    explanation: "The horizontal vorticity generated at the cold-pool edge is balanced by opposite-signed ambient low-level shear vorticity. That produces deep, upright lifting at the gust front." },

  // ---------------- LEVEL 12 ----------------
  { level: 12, category: "Cloud Physics",
    q: "In the classic cold-phase aerosol invigoration hypothesis (e.g., Rosenfeld et al. 2008), the extra updraft buoyancy comes mainly from:",
    options: ["Freezing of extra supercooled condensate lofted because warm rain was suppressed", "Faster condensation onto many small droplets below the freezing level", "Aerosol absorption of solar radiation", "Reduced entrainment in polluted clouds"],
    answer: 0, trap: 1,
    explanation: "Suppressed collision–coalescence leaves more liquid to be lofted and frozen, releasing latent heat of fusion aloft. The warm-phase mechanism (Fan et al. 2018) is a different hypothesis. Both are actively debated, since observed signals are hard to separate from meteorological covariability (e.g., Varble et al. 2023)." },

  { level: 12, category: "Thermodynamics",
    q: "Real convective updrafts rarely reach the 'thermodynamic speed limit' w_max = √(2·CAPE). The main reasons are:",
    options: ["Entrainment dilution, condensate loading, and perturbation pressure-gradient forces", "The Coriolis force", "Radiative cooling at cloud top only", "Numerical diffusion in observations"],
    answer: 0,
    explanation: "Undilute parcel theory ignores mixing with drier environmental air, the weight of condensate, and the downward perturbation pressure-gradient force that opposes buoyancy. All three reduce realized vertical velocity." },

  { level: 12, category: "Climate",
    q: "Held & Soden (2006) argued that under global warming the tropical convective mass flux is expected to:",
    options: ["Strengthen", "Weaken", "Stay unchanged", "Reverse direction"],
    answer: 1, trap: 0,
    explanation: "Precipitation ≈ mass flux × boundary-layer specific humidity. Humidity rises about 7%/K but precipitation only about 2%/K, so the mass flux must weaken, consistent with a slowing Walker circulation in models." },

  { level: 12, category: "Tropical Cyclones",
    q: "In Emanuel's (1986) steady-state hurricane model, surfaces of absolute angular momentum (M) and saturation θe in the eyewall are:",
    options: ["Congruent (aligned), so the eyewall is neutral to slantwise moist convection", "Perpendicular", "Unrelated", "Both strictly vertical"],
    answer: 0,
    explanation: "Above the boundary layer, the eyewall is assumed slantwise neutral, so M and saturation entropy surfaces coincide. With thermal wind balance, this links surface fluxes to maximum winds." },

  { level: 12, category: "Observations & Remote Sensing",
    q: "CloudSat's Cloud Profiling Radar operates at about:",
    options: ["13.8 GHz (Ku band)", "35.5 GHz (Ka band)", "94 GHz (W band)", "183 GHz"],
    answer: 2,
    explanation: "The 94 GHz W band is sensitive to small cloud particles but attenuates strongly in heavy rain. TRMM PR used 13.8 GHz, GPM DPR uses Ku (13.6) and Ka (35.5), and 183 GHz is a water-vapor sounding channel." },

  // ---------------- LEVEL 13 ----------------
  { level: 13, category: "Tropical Cyclones",
    q: "Including dissipative heating (Bister & Emanuel 1998), the thermodynamic efficiency factor in the potential intensity formula becomes:",
    options: ["(Ts − To)/Ts", "(Ts − To)/To", "To/Ts", "Ts/(Ts − To)"],
    answer: 1, trap: 0,
    explanation: "V² = (Ck/Cd)·(Ts − To)/To·(k₀* − k). The ordinary Carnot efficiency, (Ts − To)/Ts, appears in the original formulation. Recycling frictionally dissipated heat back into the cycle changes the denominator to the outflow temperature To and raises PI by about 20–30%." },

  { level: 13, category: "NWP & Data Assimilation",
    q: "The convective 'gray zone', where convection is neither fully resolved nor well parameterized, corresponds roughly to horizontal grid spacings of:",
    options: ["10–100 m", "About 1–10 km", "25–50 km", "> 100 km"],
    answer: 1,
    explanation: "At kilometer-scale spacing, deep convection is partly resolved, which breaks the scale-separation assumptions of traditional schemes. This motivates scale-aware schemes such as Grell–Freitas." },

  { level: 13, category: "Cloud Physics",
    q: "A key deficiency of single-moment bulk microphysics schemes (e.g., fixed Marshall–Palmer intercept) is that they cannot properly represent:",
    options: ["Gravitational size sorting", "Latent heat release", "Saturation adjustment", "Terminal fall speed"],
    answer: 0,
    explanation: "With only mass predicted, all moments fall at one speed. Large particles cannot outrun small ones, so size sorting is suppressed, which distorts reflectivity and evaporation and cold-pool strength. Predicting number as a second moment (e.g., Milbrandt & Yau 2005) helps." },

  { level: 13, category: "Dynamics",
    q: "In 'PV thinking' (Hoskins et al. 1985), an isolated upper-level positive PV anomaly in the NH induces:",
    options: ["A cyclonic circulation decaying downward over a penetration depth of about fL/N, with cold air beneath the anomaly", "An anticyclone at the surface directly below", "A warm core beneath the anomaly", "No circulation outside the anomaly"],
    answer: 0,
    explanation: "Inverting a positive PV anomaly gives cyclonic flow that extends downward over a Rossby penetration depth H ≈ fL/N. Isentropes bow toward the anomaly, leaving a cold anomaly below and a warm anomaly above, with the tropopause lowered." },

  { level: 13, category: "Atmospheric Chemistry",
    q: "Schumann & Huntrieser (2007) gave a best estimate for the global lightning NOx source of about:",
    options: ["0.5 Tg N/yr", "5 Tg N/yr", "50 Tg N/yr", "500 Tg N/yr"],
    answer: 1,
    explanation: "Their best estimate was about 5 ± 3 Tg N/yr, roughly 250 mol NOx per flash. Lightning is small compared with anthropogenic NOx, but it is very important for upper-tropospheric ozone because it is emitted aloft." },

  // ---------------- LEVEL 14 ----------------
  { level: 14, category: "Cloud Physics",
    q: "Buoyancy-sorting convection schemes (e.g., Raymond & Blyth; Kain–Fritsch) differ from bulk entraining plumes mainly because:",
    options: ["Mixtures of cloudy and environmental air are entrained or detrained according to the buoyancy of each mixing fraction", "They assume zero entrainment", "They use only the parcel's initial θe", "They ignore detrainment"],
    answer: 0,
    explanation: "Episodic mixing produces a spectrum of mixtures. Positively buoyant mixtures stay in the updraft and negatively buoyant ones detrain, so entrainment and detrainment rates depend on environmental humidity and cloud properties instead of a fixed ε." },

  { level: 14, category: "Tropical Cyclones",
    q: "Riehl & Malkus (1958) argued that upward energy transport in the equatorial trough requires:",
    options: ["A relatively small number of nearly undilute 'hot tower' cumulonimbi", "Uniform, slow mesoscale ascent everywhere", "Radiative heating of the upper troposphere", "Transport by shallow trade cumulus"],
    answer: 0,
    explanation: "Because θe has a midtropospheric minimum, only cores that are protected from entrainment can carry high-θe boundary-layer air to the upper troposphere. They estimated about 1500–5000 such towers globally, an idea Joanne Simpson later extended to TC intensification." },

  { level: 14, category: "Mesoscale & Severe",
    q: "Without pre-existing near-surface vertical vorticity, theory (e.g., Davies-Jones 1982; Davies-Jones & Brooks 1993) holds that near-ground rotation requires:",
    options: ["A downdraft that tilts horizontal vorticity while descending", "A stronger midlevel updraft alone", "Larger Coriolis forcing", "Removal of all surface friction"],
    answer: 0,
    explanation: "Updraft tilting produces vertical vorticity only once air has risen away from the ground. Air that is tilted while descending can arrive at the surface already rotating, which is why downdrafts (e.g., the RFD) matter for tornadogenesis." },

  { level: 14, category: "Climate",
    q: "Zelinka et al. (2020) attributed the higher ECS of many CMIP6 models, compared with CMIP5, mainly to:",
    options: ["Stronger positive extratropical low-cloud feedback", "Stronger water-vapor feedback", "Weaker Planck response", "Larger aerosol forcing"],
    answer: 0,
    explanation: "CMIP6 models showed larger decreases in extratropical (especially Southern Ocean) low-cloud amount and albedo with warming, partly tied to changes in mixed-phase cloud representation." },

  { level: 14, category: "NWP & Data Assimilation",
    q: "Desroziers et al. (2005) diagnostics estimate observation and background error statistics from:",
    options: ["Cross-products of observation-minus-background and observation-minus-analysis (and analysis-increment) residuals", "Ensemble spread alone", "Climatological variance only", "Forecast tendency budgets"],
    answer: 0,
    explanation: "If the assimilation system is optimal, expectations of products of innovations and residuals equal the observation, background, and analysis error covariances. That makes the diagnostics a practical consistency check and a way to tune R and B." },

  // ---------------- LEVEL 15 ----------------
  { level: 15, category: "Thermodynamics",
    q: "The Arakawa–Schubert (1974) quasi-equilibrium closure assumes that:",
    options: ["The cloud work function stays near equilibrium, with large-scale generation of instability balanced by convective consumption", "CAPE is always zero", "Convection is triggered only by surface heating", "Moisture convergence equals precipitation instantaneously"],
    answer: 0,
    explanation: "Convection removes instability about as fast as the large scale creates it, because the adjustment time is much shorter than the large-scale forcing time. This closure underlies many mass-flux schemes, even though departures from quasi-equilibrium are now an active research topic." },

  { level: 15, category: "Cloud Physics",
    q: "What fundamentally distinguishes the P3 microphysics scheme (Morrison & Milbrandt 2015) from traditional bulk schemes?",
    options: ["Ice is represented by free categories with predicted properties (e.g., rime fraction and rime density) instead of predefined categories like snow, graupel, and hail", "It has no ice phase", "It uses spectral bin microphysics for all hydrometeors", "It predicts only cloud water"],
    answer: 0,
    explanation: "P3 (Predicted Particle Properties) lets ice properties evolve continuously, avoiding arbitrary conversions between fixed categories such as snow → graupel." },

  { level: 15, category: "Mesoscale & Severe",
    q: "In Davies-Jones (1984) linear theory, the correlation between updraft and vertical vorticity is greatest when environmental horizontal vorticity is:",
    options: ["Purely streamwise relative to the storm", "Purely crosswise", "Zero", "Vertical"],
    answer: 0,
    explanation: "Streamwise vorticity tilted by an updraft puts maximum vertical vorticity in the updraft itself, giving rotating updrafts. Crosswise vorticity produces a couplet straddling the updraft. Storm-relative helicity measures this streamwise component." },

  { level: 15, category: "Climate",
    q: "Sherwood et al. (2020), combining process, historical, and paleoclimate evidence, gave a 66% (likely) range for effective climate sensitivity of:",
    options: ["1.5–4.5 K", "2.6–3.9 K", "2.0–5.0 K", "3.5–5.5 K"],
    answer: 1,
    explanation: "Their Bayesian synthesis gave 2.6–3.9 K (66%) and 2.3–4.7 K (5–95%). It strongly influenced the narrower AR6 assessment." },

  { level: 15, category: "Atmospheric Chemistry",
    q: "The Abdul-Razzak & Ghan (2000) parameterization, used for example in WRF-Chem, primarily computes:",
    options: ["Aerosol activation into cloud droplets for multiple lognormal modes, given updraft speed", "Ice nucleation rates for dust", "Wet scavenging of gases", "Photolysis rates in cloudy columns"],
    answer: 0,
    explanation: "It diagnoses the maximum supersaturation and the activated fraction of each aerosol mode from its size distribution, hygroscopicity, and updraft velocity. That links online chemistry to the cloud droplet number used by microphysics." }

];
