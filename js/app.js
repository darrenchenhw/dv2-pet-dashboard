// js/app.js

// ---------------------------
// 1. Population lookup tables
// ---------------------------
const caseyPopulation = {
    "Beaconsfield": 515,
    "Berwick": 55292,
    "Blind Bight": 1286,
    "Botanic Ridge": 6755,
    "Cannons Creek": 657,
    "Clyde": 11173,
    "Clyde North": 31684,
    "Cranbourne": 21279,
    "Cranbourne East": 24671,
    "Cranbourne North": 24673,
    "Cranbourne South": 3231,
    "Cranbourne West": 19969,
    "Devon Meadows": 1559,
    "Doveton": 9607,
    "Eumemmerring": 2282,
    "Endeavour Hills": 24454,
    "Hallam": 11349,
    "Hampton Park": 26088,
    "Harkaway": 1016,
    "Junction Village": 1046,
    "Lynbrook": 9139,
    "Lyndhurst": 8892,
    "Lysterfield South": 990,
    "Narre Warren": 27699,
    "Narre Warren North": 8033,
    "Narre Warren South": 30914,
    "Pearcedale": 3713,
    "Warneet": 568,
    "Tooradin": 1702
  };
  
  const geelongPopulation = {
    "Anakie": 668,
    "Armstrong Creek": 11246,
    "Avalon": 256,
    "Balliang": 149,
    "Barwon Heads": 4367,
    "Batesford": 273,
    "Bell Park": 5606,
    "Bell Post Hill": 5074,
    "Bellarine": 166,
    "Belmont": 15060,
    "Breakwater": 1060,
    "Breamlea": 149,
    "Ceres": 265,
    "Charlemont": 2600,
    "Clifton Springs": 7652,
    "Connewarre": 733,
    "Corio": 15490,
    "Curlewis": 4184,
    "Drumcondra": 567,
    "Drysdale": 4968,
    "East Geelong": 4017,
    "Fyansford": 1212,
    "Geelong": 5805,
    "Geelong West": 7343,
    "Grovedale": 14861,
    "Hamlyn Heights": 6522,
    "Herne Hill": 3488,
    "Highton": 20744,
    "Indented Head": 1388,
    "Lara": 19015,
    "Leopold": 13273,
    "Little River": 612,
    "Lovely Banks": 2784,
    "Manifold Heights": 2686,
    "Mannerim": 102,
    "Marcus Hill": 160,
    "Marshall": 2303,
    "Moolap": 1824,
    "Moorabool": 92,
    "Mount Duneed": 5760,
    "Newcomb": 4716,
    "Newtown": 10445,
    "Norlane": 8678,
    "North Geelong": 3219,
    "North Shore": 326,
    "Ocean Grove": 17705,
    "Point Lonsdale": 2036,
    "Portarlington": 4423,
    "Rippleside": 1001,
    "South Geelong": 1011,
    "St Albans Park": 4940,
    "St Leonards": 3556,
    "Staughton Vale": 108,
    "Swan Bay": 102,
    "Thomson": 1612,
    "Wallington": 1524,
    "Wandana Heights": 2200,
    "Waurn Ponds": 4957,
    "Whittington": 3986
  };

// ---------- Top 10 suburbs data (combined for Overall) ----------

// Combined Overall Top 10
const top10Overall = [
    { suburb: "Mannerim", council: "Geelong", pets: 41, population: 102, rate: 401.96 },
    { suburb: "Bellarine", council: "Geelong", pets: 59, population: 166, rate: 355.42 },
    { suburb: "Avalon", council: "Geelong", pets: 78, population: 256, rate: 304.69 },
    { suburb: "Moorabool", council: "Geelong", pets: 28, population: 92, rate: 304.35 },
    { suburb: "Ceres", council: "Geelong", pets: 80, population: 265, rate: 301.89 },
    { suburb: "Junction Village", council: "Casey", pets: 293, population: 1046, rate: 280.11 },
    { suburb: "Wallington", council: "Geelong", pets: 404, population: 1524, rate: 265.15 },
    { suburb: "Clifton Springs", council: "Geelong", pets: 1930, population: 7652, rate: 252.29 },
    { suburb: "Pearcedale", council: "Casey", pets: 933, population: 3713, rate: 251.28 },
    { suburb: "Marcus Hill", council: "Geelong", pets: 40, population: 160, rate: 250.00 }
  ];

// ---------------------------
// Top 10 breeds (Geelong only) – for lollipop chart
// ---------------------------
const topBreedData = [
    // ---- Cats ----
    { species: "Cat", breed: "Domestic Short Haired", count: 4096 },
    { species: "Cat", breed: "Domestic",              count: 3560 },
    { species: "Cat", breed: "Domestic Long Haired",  count: 885  },
    { species: "Cat", breed: "Burmese",               count: 476  },
    { species: "Cat", breed: "Ragdoll",               count: 248  },
    { species: "Cat", breed: "Birman",                count: 155  },
    { species: "Cat", breed: "Tonkinese",             count: 143  },
    { species: "Cat", breed: "Siamese",               count: 97   },
    { species: "Cat", breed: "British/Short Haired",  count: 91   },
    { species: "Cat", breed: "Russian Blue",          count: 81   },
  
    // ---- Dogs ----
    { species: "Dog", breed: "Labrador",              count: 2101 },
    { species: "Dog", breed: "Jack Russell",          count: 1919 },
    { species: "Dog", breed: "Maltese/Shih Tzu",      count: 1694 },
    { species: "Dog", breed: "Border Collie",         count: 1619 },
    { species: "Dog", breed: "Staffordshire",         count: 1266 },
    { species: "Dog", breed: "Cavalier KC Spaniel",   count: 896  },
    { species: "Dog", breed: "Golden Retriever",      count: 895  },
    { species: "Dog", breed: "Maltese Cross",         count: 785  },
    { species: "Dog", breed: "Kelpie",                count: 716  },
    { species: "Dog", breed: "German Shepherd",       count: 616  }
  ];
  
  
  // Inline data tables for lookup
  const caseyPopulationData = Object.entries(caseyPopulation).map(
    ([suburb, population]) => ({ suburb, population })
  );
  
  const geelongPopulationData = Object.entries(geelongPopulation).map(
    ([loc_name, population]) => ({ loc_name, population })
  );
  
  // ---------------------------
  // 2. Combined map spec
  // ---------------------------
  const combinedMapSpec = {
    $schema: "https://vega.github.io/schema/vega-lite/v5.json",
    width: 1050,
    height: 650,
    projection: { type: "mercator" },
  
    // Dropdown to toggle metric
    params: [
      {
        name: "metricChoice",
        value: "Total", // default
        bind: {
          input: "select",
          name: "Show Metric: ", 
          options: ["Total", "Dogs", "Cats"],
          labels: [
            "Total pets per 1,000 residents",
            "Dogs per 1,000 residents",
            "Cats per 1,000 residents"
          ]
        }
      }
    ],
  
    layer: [
      // -----------------------------------------
      // 1. Victoria outline (background)
      // -----------------------------------------
      {
        data: {
          url: "data/casey_geelong_combined.topojson",
          format: {
            type: "topojson",
            feature: "VIC_STATE_POLYGON_shp_GDA2020"
          }
        },
        mark: {
          type: "geoshape",
          fill: "#f5f5f5",
          stroke: "#999999",
          strokeWidth: 0.8
        },
        encoding: {
          tooltip: [{ field: "properties.STATE_NAME", title: "State" }]
        }
      },
  
      // =========================
      // G E E L O N G
      // =========================
      {
        data: {
          url: "data/casey_geelong_combined.topojson",
          format: {
            type: "topojson",
            feature: "GeelongSuburb"
          }
        },
  
        transform: [
          // Join on population by suburb name
          {
            lookup: "properties.loc_name",
            from: {
              data: { values: geelongPopulationData },
              key: "loc_name",
              fields: ["population"]
            }
          },
          // Total pets
          {
            calculate:
              "toNumber(datum['properties.DogCount']) + toNumber(datum['properties.CatCount'])",
            as: "TotalPetsGeelong"
          },
          // Dogs per 1000
          {
            calculate:
              "datum.population && datum.population > 0 ? 1000 * toNumber(datum['properties.DogCount']) / datum.population : null",
            as: "DogsPer1000Geelong"
          },
          // Cats per 1000
          {
            calculate:
              "datum.population && datum.population > 0 ? 1000 * toNumber(datum['properties.CatCount']) / datum.population : null",
            as: "CatsPer1000Geelong"
          },
          // Total pets per 1000
          {
            calculate:
              "datum.population && datum.population > 0 ? 1000 * datum.TotalPetsGeelong / datum.population : null",
            as: "PetsPer1000Geelong"
          },
          // Unified metric based on dropdown choice
          {
            calculate:
              "metricChoice === 'Total' ? datum.PetsPer1000Geelong : metricChoice === 'Dogs' ? datum.DogsPer1000Geelong : datum.CatsPer1000Geelong",
            as: "MetricGeelong"
          }
        ],
  
        mark: {
          type: "geoshape",
          stroke: "#1f4a7a",
          strokeWidth: 0.9
        },
  
        encoding: {
          color: {
            field: "MetricGeelong",
            type: "quantitative",
            title: "Geelong – pets per 1,000 residents",
            scale: { scheme: "blues" }
          },
          tooltip: [
            { field: "properties.loc_name",  title: "Suburb" },
            { field: "properties.CatCount",  title: "Cats" },
            { field: "properties.DogCount",  title: "Dogs" },
            { field: "population",           title: "Population (2021)" },
            { field: "TotalPetsGeelong",     title: "Total pets" },
            { field: "PetsPer1000Geelong",   title: "Total pets / 1,000" },
            { field: "DogsPer1000Geelong",   title: "Dogs / 1,000" },
            { field: "CatsPer1000Geelong",   title: "Cats / 1,000" },
            { field: "MetricGeelong",        title: "Current metric (colour)" }
          ]
        }
      },
  
      // =========================
      // C A S E Y
      // =========================
      {
        data: {
          url: "data/casey_geelong_combined.topojson",
          format: {
            type: "topojson",
            feature: "CaseySuburbPetData"
          }
        },
  
        transform: [
          // 1) Join suburb-level population
          {
            lookup: "properties.suburb",
            from: {
              data: { values: caseyPopulationData },
              key: "suburb",
              fields: ["population"]
            }
          },
  
          // 2) Polygon-level totals
          {
            calculate:
              "toNumber(datum['properties.dog_count']) + toNumber(datum['properties.cat_count'])",
            as: "TotalPetsCasey"
          },
  
          // 3) Aggregate to suburb level (sum over polygons)
          {
            joinaggregate: [
              {
                op: "sum",
                field: "TotalPetsCasey",
                as: "SuburbTotalPetsCasey"
              },
              {
                op: "sum",
                field: "properties.dog_count",
                as: "SuburbDogsCasey"
              },
              {
                op: "sum",
                field: "properties.cat_count",
                as: "SuburbCatsCasey"
              }
            ],
            groupby: ["properties.suburb"]
          },
  
          // 4) Rates per 1,000 residents
          {
            calculate:
              "datum.population && datum.population > 0 ? 1000 * datum.SuburbTotalPetsCasey / datum.population : null",
            as: "PetsPer1000Casey"
          },
          {
            calculate:
              "datum.population && datum.population > 0 ? 1000 * datum.SuburbDogsCasey / datum.population : null",
            as: "DogsPer1000Casey"
          },
          {
            calculate:
              "datum.population && datum.population > 0 ? 1000 * datum.SuburbCatsCasey / datum.population : null",
            as: "CatsPer1000Casey"
          },
  
          // 5) Single metric for colour
          {
            calculate:
              "metricChoice === 'Total' ? datum.PetsPer1000Casey : metricChoice === 'Dogs' ? datum.DogsPer1000Casey : datum.CatsPer1000Casey",
            as: "MetricCasey"
          }
        ],
  
        mark: {
          type: "geoshape",
          stroke: "#205b2a",
          strokeWidth: 0.9
        },
  
        encoding: {
          color: {
            field: "MetricCasey",
            type: "quantitative",
            title: "Casey – pets per 1,000 residents",
            scale: { scheme: "greens" }
          },
  
          tooltip: [
            { field: "properties.suburb",        title: "Suburb" },
            { field: "properties.cat_count",     title: "Cats (this polygon)" },
            { field: "properties.dog_count",     title: "Dogs (this polygon)" },
            { field: "population",               title: "Population (2021)" },
            { field: "SuburbTotalPetsCasey",     title: "Suburb total pets" },
            { field: "PetsPer1000Casey",         title: "Total pets / 1,000" },
            { field: "DogsPer1000Casey",         title: "Dogs / 1,000" },
            { field: "CatsPer1000Casey",         title: "Cats / 1,000" },
            { field: "MetricCasey",              title: "Current metric (colour)" }
          ]
        }
      }
    ],
  
    // Independent colour scales per council
    resolve: {
      scale: { color: "independent" }
    }
  };
  
  // Render the single combined map
  vegaEmbed("#map-victoria", combinedMapSpec).catch(console.error);

  // ---------------------------
// 3. Dog vs Cat ratio map (smaller map on the left)
// ---------------------------
const ratioMapSpec = {
    $schema: "https://vega.github.io/schema/vega-lite/v5.json",
    width: 600,
    height: 400,
    projection: { type: "mercator" },
  
    layer: [
      // Victoria outline (light background)
      {
        data: {
          url: "data/casey_geelong_combined.topojson",
          format: {
            type: "topojson",
            feature: "VIC_STATE_POLYGON_shp_GDA2020"
          }
        },
        mark: {
          type: "geoshape",
          fill: "#f8f8f8",
          stroke: "#cccccc",
          strokeWidth: 0.6
        }
      },
  
      // Geelong – log10(dogs/cats)
      {
        data: {
          url: "data/casey_geelong_combined.topojson",
          format: {
            type: "topojson",
            feature: "GeelongSuburb"
          }
        },
        transform: [
          {
            calculate:
              "(log(toNumber(datum['properties.DogCount']) + 1) - log(toNumber(datum['properties.CatCount']) + 1)) / log(10)",
            as: "DogCatLogRatio"
          }
        ],
        mark: {
          type: "geoshape",
          stroke: "#1f4a7a",
          strokeWidth: 0.8
        },
        encoding: {
          color: {
            field: "DogCatLogRatio",
            type: "quantitative",
            title: "log₁₀(dogs/cats)",
            scale: {
                scheme: "redblue",
                reverse: true,
                domain: [-0.5, 0, 1],   // Force blue, white, red
                domainMid: 0
              }
          },
          tooltip: [
            { field: "properties.loc_name",   title: "Suburb (Geelong)" },
            { field: "properties.DogCount",   title: "Dogs" },
            { field: "properties.CatCount",   title: "Cats" },
            { field: "DogCatLogRatio",        title: "log₁₀(dogs/cats)" }
          ]
        },
      },
      // Casey – suburb-level log10(dogs/cats) (aggregated over sub-polygons)
      {
        data: {
          url: "data/casey_geelong_combined.topojson",
          format: {
            type: "topojson",
            feature: "CaseySuburbPetData"
          }
        },
       transform: [
  {
    calculate:
      "(log(toNumber(datum['properties.dog_count']) + 1) - " +
      " log(toNumber(datum['properties.cat_count']) + 1)) / log(10)",
    as: "DogCatLogRatio"
  }
],

        mark: {
          type: "geoshape",
          stroke: "#205b2a",
          strokeWidth: 0.8
        },
        encoding: {
          color: {
            field: "DogCatLogRatio",
            type: "quantitative",
            // shares the same scale + legend as Geelong layer
            scale: {
              scheme: "redblue",
              reverse: true,
              domain: [-0.5, 0, 1],   // Force blue, white, red
              domainMid: 0
            }
          },
          tooltip: [
            { field: "properties.suburb",     title: "Suburb (Casey)" },
            { field: "properties.dog_count",  title: "Dogs (this polygon)" },
            { field: "properties.cat_count",  title: "Cats (this polygon)" },
            // { field: "SuburbDogs",            title: "Dogs (suburb total)" },
            // { field: "SuburbCats",            title: "Cats (suburb total)" },
            { field: "DogCatLogRatio",        title: "log₁₀(dogs/cats)" }
          ]
        }
      }
    ]
  };
  
  // Render the ratio map into #map-ratio
  vegaEmbed("#map-ratio", ratioMapSpec).catch(console.error);

  // ---------- Vega-Lite spec: Top 10 suburbs chart ----------

  const top10SuburbSpec = {
    $schema: "https://vega.github.io/schema/vega-lite/v5.json",
    width: 380,
    height: 370,
  
    data: {
      values: top10Overall   // <-- ONLY overall dataset
    },
  
    mark: "bar",
  
    encoding: {
      x: {
        field: "rate",
        type: "quantitative",
        title: "Registered pets per 1,000 residents"
      },
      y: {
        field: "suburb",
        type: "ordinal",
        sort: "-x",
        title: "Suburb"
      },
      color: {
        field: "council",
        type: "nominal",
        title: "Council",
        scale: {
          domain: ["Geelong", "Casey"],
          range: ["#1f78b4", "#33a02c"]   // blue for Geelong, green for Casey
        }
      },
      tooltip: [
        { field: "suburb",     title: "Suburb" },
        { field: "council",    title: "Council" },
        { field: "rate",       title: "Pets per 1,000", format: ".1f" },
        { field: "pets",       title: "Total pets" },
        { field: "population", title: "Population" }
      ]
    }
  };
  
  vegaEmbed("#top10-suburbs", top10SuburbSpec).catch(console.error);  

/* -------------------------------------------
   City-level dog vs cat ownership with toggle
-------------------------------------------- */

// Inline totals – keep your real numbers here
const cityLevelData = [
    { City: "Casey",   Species: "Dog", count: 26869 },
    { City: "Casey",   Species: "Cat", count: 8662 },
    { City: "Geelong", Species: "Dog", count: 35336 },
    { City: "Geelong", Species: "Cat", count: 10426 }
  ];
  
  const cityBarSpec = {
    $schema: "https://vega.github.io/schema/vega-lite/v5.json",
    width: 380,
    height: 360,
  
    data: { values: cityLevelData },
  
    // ---- Toggle: All / Dogs only / Cats only ----
    params: [
      {
        name: "speciesChoice",
        value: "All species",
        bind: {
          input: "select",
          name: "Show Species: ", 
          options: ["All species", "Dogs only", "Cats only"],
          labels: ["All species", "Dogs only", "Cats only"]
        }
      }
    ],
  
    transform: [
      {
        filter:
          "speciesChoice == 'All species' || " +
          "(speciesChoice == 'Dogs only' && datum.Species == 'Dog') || " +
          "(speciesChoice == 'Cats only' && datum.Species == 'Cat')"
      }
    ],
  
    mark: {
      type: "bar",
      cornerRadiusTopLeft: 3,
      cornerRadiusTopRight: 3
    },
  
    encoding: {
      x: {
        field: "City",
        type: "nominal",
        axis: { title: null, labelAngle: 0 }
      },
  
      // grouped bars when both species are shown;
      // when filtered to one species, they just sit centered.
      xOffset: { field: "Species" },
  
      y: {
        field: "count",
        type: "quantitative",
        title: "Number of registered pets"
      },
  
      color: {
        field: "Species",
        type: "nominal",
        title: "Species",
        scale: {
          domain: ["Dog", "Cat"],
          range: ["#C28800", "#345995"]
        }
      },
  
      tooltip: [
        { field: "City", title: "City" },
        { field: "Species", title: "Species" },
        { field: "count", title: "Registered pets" }
      ]
    }
  };
  
  vegaEmbed("#city-dog-cat-bar", cityBarSpec, { actions: false });
  
// ---------------------------
// Geelong pet age histogram
// ---------------------------
const ageHistogramSpec = {
    $schema: "https://vega.github.io/schema/vega-lite/v5.json",
    data: {
      url: "data/GeelongPetDataset.csv"
    },
  
    // Let the chart fit the container nicely
    width: 420,
    height: 295,
    // autosize: { type: "fit", contains: "padding" },
  
    params: [
      {
        name: "speciesChoice",
        value: "All",
        bind: {
          input: "select",
          name: "Show Species: ", 
          options: ["All", "Dog", "Cat"],
          labels: ["All pets", "Dogs only", "Cats only"]
        }
      }
    ],
  
    transform: [
      // Normalise species label (from `type` column)
      { calculate: "datum.type", as: "Species" },
  
      // Filter based on dropdown
      {
        filter: "speciesChoice == 'All' || datum.Species == speciesChoice"
      }
    ],
  
    mark: {
      type: "bar",
      tooltip: true
    },
  
    encoding: {
      x: {
        field: "age",
        type: "quantitative",
        // Bins only from age 0 to 20, in steps of 2 years
        bin: { step: 1, extent: [0, 30] },
        title: "Pet age (years)",
        axis: { tickMinStep: 2 },
        // Match the visual scale to the same range so the axis stops at 20
        scale: {
          domain: [0, 30],
          nice: false
        }
      },
      y: {
        aggregate: "count",
        type: "quantitative",
        title: "Number of registered pets"
      },
      color: {
        field: "Species",
        type: "nominal",
        title: "Species",
        scale: {
          domain: ["Dog", "Cat"],
          range: ["#C28800", "#345995"]  // same custom colours as before
        }
      },
      order: { field: "Species" }
    }
  };
  
  // Render histogram
  vegaEmbed("#age-histogram", ageHistogramSpec).catch(console.error);

  // ---------------------------
// Top 10 breeds chart (toggle Dog / Cat)
// ---------------------------
const topBreedSpec = {
    $schema: "https://vega.github.io/schema/vega-lite/v5.json",
  
    data: {
      values: topBreedData   // <- your inline data
    },
  
    width: 350,
    height: 300,
  
    // Dropdown: Dog vs Cat
    params: [
      {
        name: "breedSpecies",
        value: "Dog",              // default view
        bind: {
          input: "select",
          name: "Show Species: ", 
          options: ["Dog", "Cat"],
          labels: ["Dogs", "Cats"]
        }
      }
    ],
  
    transform: [
      // keep only the chosen species
      { filter: "datum.species == breedSpecies" },
  
      // (Optional safety) rank within species, in case you later add more rows
      {
        window: [{ op: "rank", as: "rank" }],
        sort: [{ field: "count", order: "descending" }]
      },
      { filter: "datum.rank <= 10" }
    ],
  
    mark: "bar",
  
    encoding: {
      x: {
        field: "count",
        type: "quantitative",
        title: "Number of registered pets"
      },
      y: {
        field: "breed",
        type: "ordinal",
        sort: "-x",
        title: "Breed"
      },
      color: {
        field: "species",
        type: "nominal",
        title: "Species",
        scale: {
          domain: ["Dog", "Cat"],
          range: ["#C28800", "#345995"]  // same palette as your other charts
        }
      },
      tooltip: [
        { field: "breed",   title: "Breed" },
        { field: "species", title: "Species" },
        { field: "count",   title: "Registered pets" }
      ]
    }
  };
  
  
  // Render into the right-hand card
  vegaEmbed("#breed-lollipop", topBreedSpec).catch(console.error);

// ---------------------------
// Word Cloud – Pet Names
// ---------------------------
const nameCloudSpec = {
    $schema: "https://vega.github.io/schema/vega/v5.json",
    description: "Word cloud of most common pet names in Geelong",
    width: 600,
    height: 380,
    padding: -2,
  
    data: [
      {
        name: "table",
        url: "data/TopPetName.csv",
        format: { type: "csv" },
        transform: [
          // Make a robust 'text' field: use Name or name
          {
            type: "formula",
            as: "text",
            expr: "datum.Name ? datum.Name : datum.name"
          },
          // Robust numeric frequency: use Count or count
          {
            type: "formula",
            as: "frequency",
            expr: "toNumber(datum.Count ? datum.Count : datum.count)"
          },
          // Drop rows where frequency is missing / zero
          {
            type: "filter",
            expr: "isValid(datum.frequency) && isFinite(datum.frequency) && datum.frequency > 0"
          },
          // Small random rotation
          {
            type: "formula",
            as: "angle",
            expr: "[-30, 0, 30][floor(random() * 3)]"
          }
        ]
      },
      {
        name: "cloud",
        source: "table",
        transform: [
          {
            type: "wordcloud",
            size: [800, 400],
            text: { field: "text" },
            font: "Inter",
            fontSize: { field: "frequency" },  // bigger = more common
            fontSizeRange: [18, 85],
            padding: 2,
            rotate: { field: "angle" },
            spiral: "archimedean"
          }
        ]
      }
    ],
  
    scales: [
      {
        name: "color",
        type: "ordinal",
        domain: { data: "cloud", field: "text" },
        range: ["#2b5b8e", "#4e79a7", "#9bbfe5", "#f28e2b"]
      }
    ],
  
    marks: [
      {
        type: "text",
        from: { data: "cloud" },
        encode: {
          enter: {
            text: { field: "text" },
            align: { value: "center" },
            baseline: { value: "alphabetic" },
            fill: { scale: "color", field: "text" }
          },
          update: {
            x: { field: "x" },
            y: { field: "y" },
            angle: { field: "angle" },
            fontSize: { field: "fontSize" },
            fillOpacity: { value: 1 }
          },
          hover: {
            fillOpacity: { value: 0.6 }
          }
        }
      }
    ]
  };
  
  vegaEmbed("#pet-name-cloud", nameCloudSpec, { actions: false }).catch(console.error);

  // -------------------------------------------
// Age-by-breed heatmap for top 10 breeds
// -------------------------------------------
const breedAgeHeatmapSpec = {
    $schema: "https://vega.github.io/schema/vega-lite/v5.json",
  
    data: {
      url: "data/GeelongPetDataset.csv"   // full Geelong pet dataset
    },
  
    width: 520,
    height: 450,
  
    params: [
        {
          name: "heatSpecies",
          value: "Dog",
          bind: {
            input: "select",
            name: "Show Species: ",   // 👈 label next to the dropdown
            options: ["Dog", "Cat"],
            labels: ["Dogs", "Cats"]
          }
        }
      ],
  
    transform: [
      // normalise species label from the `type` column
      { calculate: "datum.type", as: "Species" },
  
      // keep only the chosen species
      { filter: "datum.Species == heatSpecies" },
  
      // keep only the top 10 breeds for that species
      {
        filter:
          "(heatSpecies == 'Dog' && " +
          "  indexof(['Labrador','Jack Russell','Maltese/Shih Tzu','Border Collie'," +
          "          'Staffordshire','Cavalier KC Spaniel','Golden Retriever'," +
          "          'Maltese Cross','Kelpie','German Shepherd'], datum.breed) >= 0" +
          ") || " +
          "(heatSpecies == 'Cat' && " +
          "  indexof(['Domestic Short Haired','Domestic','Domestic Long Haired'," +
          "          'Burmese','Ragdoll','Birman','Tonkinese','Siamese'," +
          "          'British/Short Haired','Russian Blue'], datum.breed) >= 0" +
          ")"
      }
    ],
  
    mark: "rect",
  
    encoding: {
      x: {
        field: "age",
        type: "quantitative",
        bin: { step: 2, extent: [0, 20] },   // 0–2, 2–4, …, up to 20
        title: "Pet age (years)"
      },
  
      y: {
        field: "breed",                      // ensure this matches your CSV column
        type: "ordinal",
        sort: {
          op: "count",
          field: "*",
          order: "descending"               // most common breeds at the top
        },
        title: "Breed"
      },
  
      color: {
        aggregate: "count",
        type: "quantitative",
        title: "Number of pets",
        scale: { scheme: "purples" }          // sequential blue scale
      },
  
      tooltip: [
        { field: "breed", title: "Breed" },
        {
          bin: { binned: true },
          field: "age",
          type: "quantitative",
          title: "Age range (years)"
        },
        {
          aggregate: "count",
          type: "quantitative",
          title: "Number of pets"
        }
      ]
    }
  };
  
  // render the heatmap
  vegaEmbed("#breed-age-heatmap", breedAgeHeatmapSpec, { actions: false })
    .catch(console.error);
  
// -------------------------------------------
// Name length histogram – Dogs vs Cats
// -------------------------------------------
const nameLengthHistSpec = {
    $schema: "https://vega.github.io/schema/vega-lite/v5.json",
  
    data: {
      // Combined table with both dogs and cats:
      // columns: Name, Species, Length, Count
      url: "data/NameLengthCombined.csv"
    },
  
    width: 420,
    height: 280,
  
    // Dropdown to switch between both / dogs / cats
    params: [
      {
        name: "nameSpecies",
        value: "Both",
        bind: {
          input: "select",
          name: "Show Species: ", 
          options: ["Both", "Dog", "Cat"],
          labels: ["Dogs & cats", "Dogs only", "Cats only"]
        }
      }
    ],
  
    transform: [
      // Make sure Species is there (in case of weird casing)
      { calculate: "datum.Species", as: "Species" },
  
      // Filter by dropdown
      {
        filter: "nameSpecies == 'Both' || datum.Species == nameSpecies"
      }
    ],
  
    mark: "bar",
  
    encoding: {
      x: {
        field: "Length",              // integer length of name
        type: "quantitative",
        bin: { step: 1 },             // 1-char bins: 2, 3, 4, ...
        title: "Name length (characters)"
      },
      y: {
        aggregate: "sum",
        field: "Count",               // total pets with that name length
        type: "quantitative",
        title: "Number of pets"
      },
      color: {
        field: "Species",
        type: "nominal",
        title: "Species",
        scale: {
          domain: ["Dog", "Cat"],
          range: ["#C28800", "#345995"]   // same palette as your other charts
        }
      },
      // Make the overlap readable when Both is selected
      opacity: {
        condition: { test: "nameSpecies == 'Both'", value: 0.6 },
        value: 0.9
      },
      tooltip: [
        {
          bin: { binned: true },
          field: "Length",
          type: "quantitative",
          title: "Name length (chars)"
        },
        { field: "Species", title: "Species" },
        {
          aggregate: "sum",
          field: "Count",
          type: "quantitative",
          title: "Number of pets"
        }
      ]
    }
  };

// ---------------------------
// Name initial (A–Z) frequency chart (Dogs vs Cats)
// ---------------------------
const nameInitialSpec = {
    $schema: "https://vega.github.io/schema/vega-lite/v5.json",
  
    data: { url: "data/NameLengthCombined.csv" },
  
    width: 420,
    height: 280,
  
    // Dropdown: Dogs & cats / Dogs only / Cats only
    params: [
      {
        name: "nameSpecies",
        value: "Dogs & cats",          // default
        bind: {
          input: "select",
          name: "Show Species: ",   
          options: ["Dogs & cats", "Dogs only", "Cats only"],
          labels: ["Dogs & cats", "Dogs only", "Cats only"]
        }
      }
    ],
  
    transform: [
      // Make sure species field is consistent
      { calculate: "datum.Species", as: "Species" },
  
      // First letter of the name, uppercase
      { calculate: "upper(substring(datum.Name, 0, 1))", as: "Initial" },
  
      // Keep only A–Z (ignore anything weird)
      { filter: "test(/^[A-Z]$/, datum.Initial)" },
  
      // Filter based on dropdown
      {
        filter:
          "nameSpecies == 'Dogs & cats' || " +
          "(nameSpecies == 'Dogs only' && datum.Species == 'Dog') || " +
          "(nameSpecies == 'Cats only' && datum.Species == 'Cat')"
      }
    ],
  
    mark: "bar",
  
    encoding: {
      x: {
        field: "Initial",
        type: "ordinal",
        sort: "ascending",
        title: "First letter of pet name"
      },
  
      // Grouped bars when both species shown
      xOffset: { field: "Species" },
  
      y: {
        aggregate: "sum",
        field: "Count",
        type: "quantitative",
        title: "Number of pets"
      },
  
      color: {
        field: "Species",
        type: "nominal",
        title: "Species",
        scale: {
          domain: ["Dog", "Cat"],
          range: ["#C28800", "#345995"]    // same palette as your other charts
        }
      },
  
      tooltip: [
        { field: "Initial", title: "Initial" },
        { field: "Species", title: "Species" },
        {
          aggregate: "sum",
          field: "Count",
          type: "quantitative",
          title: "Number of pets"
        }
      ]
    }
  };
  
  vegaEmbed("#name-initial-bar", nameInitialSpec, { actions: false })
    .catch(console.error);
  
  
  // Render into the new container
  vegaEmbed("#name-length-hist", nameLengthHistSpec, { actions: false })
    .catch(console.error);
  
  
  



  