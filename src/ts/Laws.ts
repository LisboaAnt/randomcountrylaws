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
        }
      ],
      DistributionOfPower: [
        {
          name: "Oligarchy",
          desc: "",
          promulgates: [],
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
          name: "Capitalism",
          desc: "",
          promulgates: ["Oligarchy"],
          blocks: ["Socialism"],
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
  