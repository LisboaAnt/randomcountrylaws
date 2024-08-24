
export const laws  = {
    PowerStructureLaws: {
      GovernancePrinciples: [
        {
          name: "Monarchy",
          desc: "A form of governance where an aristocratic dynasty represents the country's national identity and yields executive powers to the royal head of the dynasty.",
          promulgates: [""],
          blocks: ["Anarchy"]
        },
        {
          name: "Presidential Republic",
          desc: "A political system where power is held by the people and their elected representatives. Republics have an elected or nominated President as Head of State.",
          promulgates: [],
          blocks: [],
        },
        {
          name: "Parliamentary Republic",
          desc: "A political system where power is held by the people and their elected representatives. The leader of the legislature acts as the Head of State and is referred to as Chancellor.",
          promulgates: [],
          blocks: ["Autocracy"],
        },
        {
          name: "Theocracy",
          desc: "The government is ruled by a clergy and their interpretation of holy scripture. The Head of State is nominally the person of worship, though in practice a worldly representative selected by merit, status, or birth.",
          promulgates: ["State Religion"],
          blocks: [],
        },
        {
          name: "Council Republic",
          desc: "A political system where workers elect delegates to local councils. Extends concepts of workplace organization to general governance.",
          promulgates: [],
          blocks: ["Hereditary Bureaucrats"],
        },
        {
          name: "Chiefdom",
          desc: "A hierarchical pre-industrial political system based on kinship, with a warlord or elder of a prominent family at the head. It is incapable of efficient centralized control over entire states.",
          promulgates: [],
          blocks: [],
        }
      ],
      DistributionOfPower: [
        {
          name: "Autocracy",
          desc: "The Head of State's power is absolute and they are held accountable to no earthly power.",
          promulgates: [],
          blocks: ["Parliamentary Republic"],
        },
        {
          name: "Technocracy",
          desc: "The nation is governed by an unelected council of men of reason and ability.",
          promulgates: [],
          blocks: [],
        },
        {
          name: "Oligarchy",
          desc: "The Head of State shares power and responsibility with a small group of powerful, unelected individuals.",
          promulgates: [],
          blocks: [],
        },
        {
          name: "Landed Voting",
          desc: "Those who own land or capital property are given a vote.",
          promulgates: [],
          blocks: ["Chiefdom"],
        },
        {
          name: "Wealth Voting",
          desc: "Wealthy citizens are granted a vote. Men of more wealth are granted more votes.",
          promulgates: [],
          blocks: ["Chiefdom"],
        },
        {
          name: "Census Suffrage",
          desc: "Literate men of particular status is given a vote.",
          promulgates: [],
          blocks: ["Chiefdom"],
        },
        {
          name: "Universal Suffrage",
          desc: "Every adult man is given an equal vote.",
          promulgates: [],
          blocks: ["Chiefdom"],
        },
        {
          name: "Single-Party State",
          desc: "The state is governed by a single legal political party, which has a monopoly on all political activity within the nation.",
          promulgates: [],
          blocks: [],
        },
        {
          name: "Anarchy",
          desc: "Local communities govern their own affairs and send representatives to serve limited terms on larger cooperative councils. With no formal hierarchies central authority is difficult to exercise.",
          promulgates: ["Council Republic"],
          blocks: [],
        },
        {
          name: "Elder Council",
          desc: "The most venerated men have a say in the nation's governance.",
          promulgates: ["Chiefdom"],
          blocks: [],
        }
      ],
      Citizenship: [
        {
          name: "Ethnostate",
          desc: "All foreign cultures are discriminated against.",
          promulgates: [],
          blocks: [],
        },
        {
          name: "National Supremacy",
          desc: "Foreign cultures of different heritage are discriminated against.",
          promulgates: [],
          blocks: [],
        },
        {
          name: "Racial Segregation",
          desc: "Foreign cultures of different heritage are discriminated against.",
          promulgates: ["Council Republic"],
          blocks: [],
        },
        {
          name: "Cultural Exclusion",
          desc: "Foreign cultures with nothing in common with your primary cultures are discriminated against.",
          promulgates: ["Debt Slavery","Slavery Banned"],
          blocks: [],
        },
        {
          name: "Multiculturalism",
          desc: "No cultures are discriminated against.",
          promulgates: ["Slavery Banned"],
          blocks: [],
        }
      ],
      ChurchAndState: [
        {
          name: "State Religion",
          desc: "The church is an official organ of the state. All minority religions are discriminated against.",
          promulgates: [],
          blocks: [],
        },
        {
          name: "Freedom of Conscience",
          desc: "The state has an official state religion but the people may choose what to believe. Only particularly exotic religions are discriminated against.",
          promulgates: [],
          blocks: ["Theocracy"],
        },
        {
          name: "Total Separation",
          desc: "No church or faith may interfere in government functions. No religion may be discriminated against.",
          promulgates: [],
          blocks: ["Theocracy"],
        },
        {
          name: "State Atheism",
          desc: "Religion is banned from public life, and the state advocates anti-religious policies. All religions face discrimination, and the clergy are allowed little to no role in society.",
          promulgates: [],
          blocks: ["Theocracy"],
        }
      ],
      Bureaucracy: [
        {
          name: "Hereditary Bureaucrats",
          desc: "Bureaucrats hold their position through traditional inheritance, passing on the responsiblities to their children.",
          promulgates: [],
          blocks: ["Council Republic"],
        },
        {
          name: "Appointed Bureaucrats",
          desc: "Bureaucrats are appointed by rulers to serve the country's best interests in exchange for high wages.",
          promulgates: [],
          blocks: [],
        },
        {
          name: "Elected Bureaucrats",
          desc: "Local governors are elected by their constitutents, decentralizing power while making citizens easier to manage.",
          promulgates: [],
          blocks: ["Autocracy","Elder Council","Oligarchy","Technocracy"],
        }
      ],
      ArmyModel: [
        {
          name: "Peasant Levies",
          desc: "The army's main force comes from conscripted infantry with zero to basic training.",
          promulgates: [],
          blocks: [],
        },
        {
          name: "Professional Army",
          desc: "The army consists of well-trained, professional regulars.",
          promulgates: [],
          blocks: [],
        },
        {
          name: "National Militia",
          desc: "The standing army is small, but local militias can be activated to defend their homes.",
          promulgates: [],
          blocks: [],
        },
        {
          name: "Mass Conscription",
          desc: "Large numbers of infantry conscripts can be activated as needed to supplement the professional army.",
          promulgates: [],
          blocks: [],
        }
      ],
      InternalSecurity: [
        {
          name: "No Home Affairs",
          desc: "The state makes no special attempts to put a stop to unrest and uprisings.",
          promulgates: [],
          blocks: [],
        },
        {
          name: "National Guard",
          desc: "The state may use military force to suppress domestic unrest.",
          promulgates: [],
          blocks: [],
        },
        {
          name: "Secret Police",
          desc: "The secret police keep close track of radical elements and dissenters.",
          promulgates: [],
          blocks: [],
        },
        {
          name: "Guaranteed Liberties",
          desc: "The state is prohibited by law to investigate or interfere with its own citizens.",
          promulgates: ["Protected Speech","Right of Assembly"],
          blocks: [],
        },
        
      ]
    },
    EconomyLaws: {
      EconomicSystems: [
        {
          name: "Traditionalism",
          desc: "",
          promulgates: [],
          blocks: ["Graduated Taxation","Per-Capita Taxation","Proportional Taxation","Anarchy"],
        }
      ]
    },
    HumanRightsLaws: {
      Citizenship: [
        {
          name: "UniversalSuffrage",
          desc: "",
          promulgates: [""],
          blocks: [""],
        }
        ]
    }
  };
  
  export default laws;