
export const laws  = {
    PowerStructureLaws: {
      GovernancePrinciples: [
        {
          id: "GovernancePrinciples",
          name: "Monarchy",
          desc: "A form of governance where an aristocratic dynasty represents the country's national identity and yields executive powers to the royal head of the dynasty.",
          promulgates: [""],
          blocks: ["Anarchy"]
        },
        {
          id: "GovernancePrinciples",
          name: "Presidential Republic",
          desc: "A political system where power is held by the people and their elected representatives. Republics have an elected or nominated President as Head of State.",
          promulgates: [],
          blocks: [],
        },
        {
          id: "GovernancePrinciples",
          name: "Parliamentary Republic",
          desc: "A political system where power is held by the people and their elected representatives. The leader of the legislature acts as the Head of State and is referred to as Chancellor.",
          promulgates: [],
          blocks: ["Autocracy"],
        },
        {
          id: "GovernancePrinciples",
          name: "Theocracy",
          desc: "The government is ruled by a clergy and their interpretation of holy scripture. The Head of State is nominally the person of worship, though in practice a worldly representative selected by merit, status, or birth.",
          promulgates: ["State Religion"],
          blocks: ["Total Separation"],
        },
        {
          id: "GovernancePrinciples",
          name: "Council Republic",
          desc: "A political system where workers elect delegates to local councils. Extends concepts of workplace organization to general governance.",
          promulgates: [],
          blocks: ["Hereditary Bureaucrats"],
        },
        {
          id: "GovernancePrinciples",
          name: "Chiefdom",
          desc: "A hierarchical pre-industrial political system based on kinship, with a warlord or elder of a prominent family at the head. It is incapable of efficient centralized control over entire states.",
          promulgates: [],
          blocks: [],
        }
      ],
      DistributionOfPower: [
        {
          id: "DistributionOfPower",
          name: "Autocracy",
          desc: "The Head of State's power is absolute and they are held accountable to no earthly power.",
          promulgates: [],
          blocks: ["Parliamentary Republic"],
        },
        {
          id: "DistributionOfPower",
          name: "Technocracy",
          desc: "The nation is governed by an unelected council of men of reason and ability.",
          promulgates: [],
          blocks: ["Chiefdom"],
        },
        {
          id: "DistributionOfPower",
          name: "Oligarchy",
          desc: "The Head of State shares power and responsibility with a small group of powerful, unelected individuals.",
          promulgates: [],
          blocks: ["Chiefdom"],
        },
        {
          id: "DistributionOfPower",
          name: "Landed Voting",
          desc: "Those who own land or capital property are given a vote.",
          promulgates: [],
          blocks: ["Chiefdom"],
        },
        {
          id: "DistributionOfPower",
          name: "Wealth Voting",
          desc: "Wealthy citizens are granted a vote. Men of more wealth are granted more votes.",
          promulgates: [],
          blocks: ["Chiefdom"],
        },
        {
          id: "DistributionOfPower",
          name: "Census Suffrage",
          desc: "Literate men of particular status is given a vote.",
          promulgates: [],
          blocks: ["Chiefdom"],
        },
        {
          id: "DistributionOfPower",
          name: "Universal Suffrage",
          desc: "Every adult man is given an equal vote.",
          promulgates: [],
          blocks: ["Chiefdom"],
        },
        {
          id: "DistributionOfPower",
          name: "Single-Party State",
          desc: "The state is governed by a single legal political party, which has a monopoly on all political activity within the nation.",
          promulgates: [],
          blocks: [],
        },
        {
          id: "DistributionOfPower",
          name: "Anarchy",
          desc: "Local communities govern their own affairs and send representatives to serve limited terms on larger cooperative councils. With no formal hierarchies central authority is difficult to exercise.",
          promulgates: ["Council Republic"],
          blocks: [],
        },
        {
          id: "DistributionOfPower",
          name: "Elder Council",
          desc: "The most venerated men have a say in the nation's governance.",
          promulgates: ["Chiefdom"],
          blocks: [],
        }
      ],
      Citizenship: [
        {
          id: "Citizenship",
          name: "Ethnostate",
          desc: "All foreign cultures are discriminated against.",
          promulgates: [],
          blocks: [],
        },
        {
          id: "Citizenship",
          name: "National Supremacy",
          desc: "Foreign cultures of different heritage are discriminated against.",
          promulgates: [],
          blocks: [],
        },
        {
          id: "Citizenship",
          name: "Racial Segregation",
          desc: "Foreign cultures of different heritage are discriminated against.",
          promulgates: ["Council Republic"],
          blocks: [],
        },
        {
          id: "Citizenship",
          name: "Cultural Exclusion",
          desc: "Foreign cultures with nothing in common with your primary cultures are discriminated against.",
          promulgates: ["Debt Slavery","Slavery Banned"],
          blocks: ["Legacy Slavery","Slave Trade"],
        },
        {
          id: "Citizenship",
          name: "Multiculturalism",
          desc: "No cultures are discriminated against.",
          promulgates: ["Slavery Banned"],
          blocks: ["Legacy Slavery","Slave Trade","Debt Slavery"],
        }
      ],
      ChurchAndState: [
        {
          id: "ChurchAndState",
          name: "State Religion",
          desc: "The church is an official organ of the state. All minority religions are discriminated against.",
          promulgates: [],
          blocks: [],
        },
        {
          id: "ChurchAndState",
          name: "Freedom of Conscience",
          desc: "The state has an official state religion but the people may choose what to believe. Only particularly exotic religions are discriminated against.",
          promulgates: [],
          blocks: ["Theocracy"],
        },
        {
          id: "ChurchAndState",
          name: "Total Separation",
          desc: "No church or faith may interfere in government functions. No religion may be discriminated against.",
          promulgates: [],
          blocks: ["Theocracy"],
        },
        {
          id: "ChurchAndState",
          name: "State Atheism",
          desc: "Religion is banned from public life, and the state advocates anti-religious policies. All religions face discrimination, and the clergy are allowed little to no role in society.",
          promulgates: [],
          blocks: ["Theocracy"],
        }
      ],
      Bureaucracy: [
        {
          id: "Bureaucracy",
          name: "Hereditary Bureaucrats",
          desc: "Bureaucrats hold their position through traditional inheritance, passing on the responsiblities to their children.",
          promulgates: [],
          blocks: ["Council Republic"],
        },
        {
          id: "Bureaucracy",
          name: "Appointed Bureaucrats",
          desc: "Bureaucrats are appointed by rulers to serve the country's best interests in exchange for high wages.",
          promulgates: [],
          blocks: [],
        },
        {
          id: "Bureaucracy",
          name: "Elected Bureaucrats",
          desc: "Local governors are elected by their constitutents, decentralizing power while making citizens easier to manage.",
          promulgates: [],
          blocks: ["Autocracy","Elder Council","Oligarchy","Technocracy"],
        }
      ],
      ArmyModel: [
        {
          id: "ArmyModel",
          name: "Peasant Levies",
          desc: "The army's main force comes from conscripted infantry with zero to basic training.",
          promulgates: [],
          blocks: [],
        },
        {
          id: "ArmyModel",
          name: "Professional Army",
          desc: "The army consists of well-trained, professional regulars.",
          promulgates: [],
          blocks: [],
        },
        {
          id: "ArmyModel",
          name: "National Militia",
          desc: "The standing army is small, but local militias can be activated to defend their homes.",
          promulgates: [],
          blocks: [],
        },
        {
          id: "ArmyModel",
          name: "Mass Conscription",
          desc: "Large numbers of infantry conscripts can be activated as needed to supplement the professional army.",
          promulgates: [],
          blocks: [],
        }
      ],
      InternalSecurity: [
        {
          id: "InternalSecurity",
          name: "No Home Affairs",
          desc: "The state makes no special attempts to put a stop to unrest and uprisings.",
          promulgates: [],
          blocks: [],
        },
        {
          id: "InternalSecurity",
          name: "National Guard",
          desc: "The state may use military force to suppress domestic unrest.",
          promulgates: [],
          blocks: [],
        },
        {
          id: "InternalSecurity",
          name: "Secret Police",
          desc: "The secret police keep close track of radical elements and dissenters.",
          promulgates: [],
          blocks: [],
        },
        {
          id: "InternalSecurity",
          name: "Guaranteed Liberties",
          desc: "The state is prohibited by law to investigate or interfere with its own citizens.",
          promulgates: ["Protected Speech","Right of Assembly"],
          blocks: ["Outlawed Dissent","Censorship"],
        },
      ]
    },
    EconomyLaws: {
      EconomicSystems: [
        {
          id: "EconomicSystems",
          name: "Traditionalism",
          desc: "Pre-industrial subsistence economy with little central control.",
          promulgates: [],
          blocks: ["Graduated Taxation","Per-Capita Taxation","Proportional Taxation","Anarchy"],
        },
        {
          id: "EconomicSystems",
          name: "Interventionism",
          desc: "To ensure the stability of our nation, government must curb the worst excesses of private businesses.",
          promulgates: [],
          blocks: ["Serfdom","Anarchy"],
        },
        {
          id: "EconomicSystems",
          name: "Agrarianism",
          desc: "A rural economy emphasizing agricultural development and community.",
          promulgates: [],
          blocks: ["Anarchy"],
        },
        {
          id: "EconomicSystems",
          name: "Industry Banned",
          desc: "An economic view that rejects heavy industry and automation, preferring the fruits of honest labor over soulless machinery.",
          promulgates: [],
          blocks: [],
        },
        {
          id: "EconomicSystems",
          name: "Laissez-Faire",
          desc: "A liberal economy founded on the principles of comparative advantage and that fewer government interventions means greater growth.",
          promulgates: [],
          blocks: ["Anarchy","Serfdom","Isolationism"],
        },
        {
          id: "EconomicSystems",
          name: "Command Economy",
          desc: "An inward-focused interventionist economy where the government directly manages most aspects of production.",
          promulgates: ["Autocracy", "Oligarchy","Single-Party State", "Technocracy"],
          blocks: ["Serfdom","Anarchy","Landed Voting","Wealth Voting","Census Suffrage","Universal Suffrage","Elder Council"],
        },
        {
          id: "EconomicSystems",
          name: "Cooperative Ownership",
          desc: "An economic system based around the concept of social ownership, where surplus production is distributed more evenly among the workers.",
          promulgates: ["Council Republic"],
          blocks: ["Serfdom","Monarchy","Presidential Republic","Parliamentary Republic","Theocracy","Chiefdom"],
        }
      ],
      "Trade Policy": [
        {
          id: "Trade Policy",
          name: "Mercantilism",
          desc: "An export-focused economy with an emphasis on keeping a positive current account and competing with other nations.",
          promulgates: [],
          blocks: [],
        },
        {
          id: "Trade Policy",
          name: "Protectionism",
          desc: "Our industries must be protected from the depredations of foreign market actors.",
          promulgates: [],
          blocks: [],
        },        
        {          
          id: "Trade Policy",
          name: "Free Trade",
          desc: "The free exchange of goods must not be impeded, as trade is for the benefit of all.",
          promulgates: [],
          blocks: ["Command Economy"],
        },
        {
          id: "Trade Policy",
          name: "Isolationism",
          desc: "The free exchange of goods must not be impeded, as trade is for the benefit of all.",
          promulgates: [],
          blocks: ["Laissez-Faire"],
        }
      ],
      "Taxation": [
        {
          id: "Taxation",
          name: "Consumption Based Taxation",
          desc: "A tax system where there are no direct income or per-capita taxes and instead revenue is raised through taxing the consumption of goods.",
          promulgates: [],
          blocks: [],
        },
        {
          id: "Taxation",
          name: "Land-Based Taxation",
          desc: "A traditional form of land-based taxation, collected mainly from the peasantry.",
          promulgates: [],
          blocks: [],
        },        
        {
          id: "Taxation",
          name: "Per-Capita Taxation",
          desc: "A tax system that disproportionally taxes the poor through a combination of income and per-capita taxes.",
          promulgates: [],
          blocks: ["Traditionalism"],
        },        
        {
          id: "Taxation",
          name: "Proportional Taxation",
          desc: "A mainly income-based tax system that tries to ensure everyone pays a roughly equal share of their income to the state.",
          promulgates: [],
          blocks: ["Traditionalism"],
        },        
        {
          id: "Taxation",
          name: "Graduated Taxation",
          desc: "A tax system that aims to put the burden of taxation primarily on the well-to-do through high Dividends taxes.",
          promulgates: [],
          blocks: ["Traditionalism"],
        }
      ],
      "Land Reform": [
        {
          id: "Land Reform",
          name: "Serfdom",
          desc: "Peasants are tied to their land and must perform labor for their feudal masters.",
          promulgates: [],
          blocks: ["Command Economy","Laissez-Faire","Interventionism"],
        },
        {
          id: "Land Reform",
          name: "Tenant Farmers",
          desc: "Agricultural land is owned by hereditary elites. Workers are not tied to the land, and may seek alternative employment if they can find it.",
          promulgates: [],
          blocks: [],
        },        
        {
          id: "Land Reform",
          name: "Commercialized Agriculture",
          desc: "Agriculture is a business like any other, subject to market forces and owned by capital.",
          promulgates: [],
          blocks: ["Traditionalism"],
        },        
        {
          id: "Land Reform",
          name: "Homesteading",
          desc: "Farmers lay claim to plots of land which they work alongside their hired laborers.",
          promulgates: [],
          blocks: [],
        },        
        {
          id: "Land Reform",
          name: "Collectivized Agriculture",
          desc: "Agricultural land is organized into plots worked by groups of farmers as a joint enterprise.",
          promulgates: ["Command Economy","Cooperative Ownership"],
          blocks: ["Traditionalism","Interventionism","Agrarianism","Industry Banned","Laissez-Faire"],
        }
      ],
      "Colonization": [
        {
          id: "Colonization",
          name: "No Colonial Affairs",
          desc: "The country does not engage in any formal type of colonization and cannot establish colonies.",
          promulgates: [],
          blocks: [],
        },
        {
          id: "Colonization",
          name: "Colonial Resettlement",
          desc: "Colonies are established to provide land to settlers from the country's incorporated states.",
          promulgates: [],
          blocks: [],
        },        
        {
          id: "Colonization",
          name: "Frontier Colonization",
          desc: "The wild frontiers on our borders are ripe for settlement if they can first be pacified and tamed.",
          promulgates: [],
          blocks: ["Traditionalism"],
        },        
        {
          id: "Colonization",
          name: "Colonial Exploitation",
          desc: "Colonies are established to exploit the area for their natural resources and cheap labor.",
          promulgates: [],
          blocks: [],
        }
      ],
      "Policing": [
        {
          id: "Policing",
          name: "No Police",
          desc: "Any sort of structured police force does not exist in this country.",
          promulgates: [],
          blocks: [],
        },
        {
          id: "Policing",
          name: "Local Police Force",
          desc: "This country has local police forces operating.",
          promulgates: [],
          blocks: [],
        },        
        {
          id: "Policing",
          name: "Dedicated Police Force",
          desc: "This country has a dedicated police force with standardized training.",
          promulgates: [],
          blocks: ["Traditionalism"],
        },        
        {
          id: "Policing",
          name: "Militarized Police Force",
          desc: "By giving your police force military equipment and military training, their effectiveness at carrying out your will increases.",
          promulgates: [],
          blocks: [],
        }
      ],
      "Education System": [
        {
          id: "Education System",
          name: "No Schools",
          desc: "Education is the parents' responsibility. Only the most leisurely citizens learn to read and write.",
          promulgates: [],
          blocks: ["Compulsory Primary School"],
        },
        {
          id: "Education System",
          name: "Religious Schools",
          desc: "Letting the church take care of state education ensures a loyal and morally healthy population.",
          promulgates: [],
          blocks: ["Total Separation", "Serfdom", "State Atheism"],
        },        
        {
          id: "Education System",
          name: "Private Schools",
          desc: "Schooling is best left to private interests who can assure freedom of choice in one's education.",
          promulgates: [],
          blocks: ["State Religion"],
        },        
        {
          id: "Education System",
          name: "Public Schools",
          desc: "Schooling is the responsibility of the state, and should be standardized and equally accessible to all.",
          promulgates: [],
          blocks: ["State Religion","Serfdom"],
        }
      ],
      "Health System": [
        {
          id: "Health System",
          name: "No Health System",
          desc: "The government does not fund any system of healthcare.",
          promulgates: [],
          blocks: [],
        },
        {
          id: "Health System",
          name: "Charity Hospitals",
          desc: "Charitable organizations — often religious ones — provide some help to anyone who's sick or dying, to the degree they are able.",
          promulgates: [],
          blocks: [],
        },        
        {
          id: "Health System",
          name: "Private Health Insurance",
          desc: "Population health is managed through a system of privately owned hospitals paid through private health insurance programs, ensuring the well-being of those who can afford it with minimal impact on the government treasury.",
          promulgates: [],
          blocks: [],
        },        
        {
          id: "Health System",
          name: "Public Health Insurance",
          desc: "The government provides a publicly funded health insurance program ensuring equal access to care for all.",
          promulgates: [],
          blocks: [],
        }
      ]
    },
    HumanRightsLaws: {
      "Free Speech": [
          {
            id: "Free Speech",
            name: "Outlawed Dissent",
            desc: "Criticizing the government is considered treasonous and illegal.",
            promulgates: [],
            blocks: [],
          },
          {
            id: "Free Speech",
            name: "Censorship",
            desc: "There is active censorship of the press and no guaranteed right of assembly.",
            promulgates: [],
            blocks: [],
          },
          {
            id: "Free Speech",
            name: "Right of Assembly",
            desc: "Citizens enjoy the right to public assembly.",
            promulgates: [],
            blocks: [],
          },
          {
            id: "Free Speech",
            name: "Protected Speech",
            desc: "The protection of free speech is enshrined in law.",
            promulgates: [],
            blocks: [],
          },
        ],
      "Labor Rights": [
          {
            id: "Labor Rights",
            name: "No Workers' Rights",
            desc: "Workers have no particular labor rights guaranteed by the state.",
            promulgates: [],
            blocks: [],
          },
          {
            id: "Labor Rights",
            name: "Regulatory Bodies",
            desc: "Government institutions have been created to regulate the excesses of employers.",
            promulgates: [],
            blocks: [],
          },
          {
            id: "Labor Rights",
            name: "Workers' Protections",
            desc: "Workers enjoy extensive protections that are enshrined in law.",
            promulgates: [],
            blocks: [],
          }
        ],
      "Children's Rights": [
          {
            id: "Children's Rights",
            name: "Child Labor Allowed",
            desc: "No legal restrictions are placed on where children may work.",
            promulgates: [],
            blocks: [],
          },
          {
            id: "Children's Rights",
            name: "Restricted Child Labor",
            desc: "No child is permitted on the factory floor.",
            promulgates: [],
            blocks: [],
          },
          {
            id: "Children's Rights",
            name: "Compulsory Primary School",
            desc: "All children must attend several years of primary school during which they're prohibited from working.",
            promulgates: [],
            blocks: ["No Schools"],
          }
        ],
        "Rights of Women": [
          {
            id: "Rights of Women",
            name: "Legal Guardianship",
            desc: "Women are legally under the guardianship of men and enjoy very few rights.",
            promulgates: [],
            blocks: [],
          },
          {
            id: "Rights of Women",
            name: "Propertied Women",
            desc: "Whether inherited or otherwise earned, even women have the right and duty to own and cherish their possessions.",
            promulgates: [],
            blocks: [],
          },
          {
            id: "Rights of Women",
            name: "Women in the Workplace",
            desc: "How will we be able to keep the furnaces of progress aflame with only half the potential workforce?",
            promulgates: [],
            blocks: [],
          },
          {
            id: "Rights of Women",
            name: "Women's Suffrage",
            desc: "In the adjustment of the new order of things, we women demand an equal voice; we shall accept nothing less.",
            promulgates: [],
            blocks: ["Autocracy","Technocracy","Oligarchy","Elder Council"],
          }
        ],
      "Welfare": [
          {
            id: "Welfare",
            name: "No Social Security",
            desc: "It is not the state's role to provide for those who cannot provide for themselves.",
            promulgates: [],
            blocks: [],
          },
          {
            id: "Welfare",
            name: "Poor Laws",
            desc: "Getting the tramps and hobos off our streets and into the workhouses is well worth the cost.",
            promulgates: [],
            blocks: [],
          },
          {
            id: "Welfare",
            name: "Wage Subsidies",
            desc: "All who are willing to work have a right to eat. No man should lack the means to provide for his family.",
            promulgates: [],
            blocks: [],
          },
          {
            id: "Welfare",
            name: "Old Age Pension",
            desc: "There is a practical limit to the age where our workforce is no longer efficient and their subsequent welfare must fall under the purview of government.?",
            promulgates: [],
            blocks: [],
          }
        ],
        "Migration": [
          {
            id: "Migration",
            name: "No Migration Controls",
            desc: "The country makes no attempt to control movement across its borders.",
            promulgates: [],
            blocks: [],
          },
          {
            id: "Migration",
            name: "Migration Controls",
            desc: "Only people of cultures and religions not discriminated against may migrate.",
            promulgates: [],
            blocks: [],
          },
          {
            id: "Migration",
            name: "Closed Borders",
            desc: "No internal or external migration is permitted.",
            promulgates: [],
            blocks: [],
          },
        ],
        "Slavery": [
          {
            id: "Slavery",
            name: "Slavery Banned",
            desc: "No human being may be owned by another.",
            promulgates: [],
            blocks: [],
          },
          {
            id: "Slavery",
            name: "Debt Slavery",
            desc: "Those who cannot clear their debts instead forefeits their person as their creditor's property.",
            promulgates: [],
            blocks: ["Multiculturalism"],
          },
          {
            id: "Slavery",
            name: "Slave Trade",
            desc: "Demand for cheap labor is fulfilled through a dehumanizing trade in foreign bodies.",
            promulgates: [],
            blocks: ["Cultural Exclusion","Multiculturalism"],
          },
          {
            id: "Slavery",
            name: "Legacy Slavery",
            desc: "As a compromise between abolitionists and slaveholders, the institution of slavery may continue as long as it does not expand.",
            promulgates: [],
            blocks: [],
          }
        ]
    }
  };
  
  export default laws;