/*Leis separadas em:
    PowerStructureLaws: GovernancePrinciples, DistributionOfPower...
    EconomyLaws: EconomicSystems....
    HumanRightsLaws Citizenship...


*/
const laws = {
    PowerStructureLaws: {
      GovernancePrinciples: [
        {
          name: "Monarchy",
          desc: "A form of governance where an aristocratic dynasty represents the country's national identity and yields executive powers to the royal head of the dynasty.",
          promulgates: [],
          blocks: ["Anarchy"],
          effects: {
            stability: 10,
            tax_efficiency: -5
          },
          interest_groups: ["+10 Aristocrats", "-20 Clergy"]
        },
        {
          name: "Presidential Republic",
          desc: "A political system where power is held by the people and their elected representatives. Republics have an elected or nominated President as Head of State.",
          promulgates: [],
          blocks: [],
          effects: {
          },
          interest_groups: []
        },
        {
          name: "Parliamentary Republic",
          desc: "A political system where power is held by the people and their elected representatives. The leader of the legislature acts as the Head of State and is referred to as Chancellor.",
          promulgates: [],
          blocks: ["Autocracy"],
          effects: {
          },
          interest_groups: []
        },
        {
          name: "Theocracy",
          desc: "The government is ruled by a clergy and their interpretation of holy scripture. The Head of State is nominally the person of worship, though in practice a worldly representative selected by merit, status, or birth.",
          promulgates: ["State Religion"],
          blocks: [],
          effects: {
          },
          interest_groups: []
        },
        {
          name: "Council Republic",
          desc: "A political system where workers elect delegates to local councils. Extends concepts of workplace organization to general governance.",
          promulgates: [],
          blocks: ["Hereditary Bureaucrats"],
          effects: {
          },
          interest_groups: []
        },
        {
          name: "Chiefdom",
          desc: "A hierarchical pre-industrial political system based on kinship, with a warlord or elder of a prominent family at the head. It is incapable of efficient centralized control over entire states.",
          promulgates: [],
          blocks: [],
          effects: {
          },
          interest_groups: []
        }
      ],
      DistributionOfPower: [
        {
          name: "Autocracy",
          desc: "The Head of State's power is absolute and they are held accountable to no earthly power.",
          promulgates: [],
          blocks: ["Parliamentary Republic"],
          effects: {
          },
          interest_groups: []
        },
        {
          name: "Technocracy",
          desc: "The nation is governed by an unelected council of men of reason and ability.",
          promulgates: [],
          blocks: [],
          effects: {
          },
          interest_groups: []
        },
        {
          name: "Oligarchy",
          desc: "The Head of State shares power and responsibility with a small group of powerful, unelected individuals.",
          promulgates: [],
          blocks: [],
          effects: {
          },
          interest_groups: []
        },
        {
          name: "Landed Voting",
          desc: "Those who own land or capital property are given a vote.",
          promulgates: [],
          blocks: ["Chiefdom"],
          effects: {
          },
          interest_groups: []
        },
        {
          name: "Wealth Voting",
          desc: "Wealthy citizens are granted a vote. Men of more wealth are granted more votes.",
          promulgates: [],
          blocks: ["Chiefdom"],
          effects: {
          },
          interest_groups: []
        },
        {
          name: "Census Suffrage",
          desc: "Literate men of particular status is given a vote.",
          promulgates: [],
          blocks: ["Chiefdom"],
          effects: {
          },
          interest_groups: []
        },
        {
          name: "Universal Suffrage",
          desc: "Every adult man is given an equal vote.",
          promulgates: [],
          blocks: ["Chiefdom"],
          effects: {
          },
          interest_groups: []
        },
        {
          name: "Single-Party State",
          desc: "The state is governed by a single legal political party, which has a monopoly on all political activity within the nation.",
          promulgates: [],
          blocks: [],
          effects: {
          },
          interest_groups: []
        },
        {
          name: "Anarchy",
          desc: "Local communities govern their own affairs and send representatives to serve limited terms on larger cooperative councils. With no formal hierarchies central authority is difficult to exercise.",
          promulgates: ["Council Republic"],
          blocks: [],
          effects: {
          },
          interest_groups: []
        },
        {
          name: "Elder Council",
          desc: "The most venerated men have a say in the nation's governance.",
          promulgates: ["Chiefdom"],
          blocks: [],
          effects: {
          },
          interest_groups: []
        }
      ]
    },
    EconomyLaws: {
      EconomicSystems: [
        {
          name: "Traditionalism",
          desc: "",
          promulgates: [],
          blocks: ["Graduated Taxation","Per-Capita Taxation","Proportional Taxation","Anarchy"],
          effects: {
            production_efficiency: 15,
            wealth_gap: 20
          },
          interest_groups: ["Capitalists + 10", "Industrialists"]
        },
      ]
    },
    HumanRightsLaws: {
      Citizenship: [
        {
          name: "UniversalSuffrage",
          promulgates: [""],
          blocks: [""],
          effects: {
          },
          interest_groups: ["Intellectuals", "MiddleClass"]
        }
        ]
    }
  };
  
  export default laws;