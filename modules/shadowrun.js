let metatypes = {
   human: {
      attributes: {
         body: { min: 1, max: 6 },
         agility: { min: 1, max: 6 },
         reaction: { min: 1, max: 6 },
         strength: { min: 1, max: 6 },
         willpower: { min: 1, max: 6 },
         logic: { min: 1, max: 6 },
         intuition: { min: 1, max: 6 },
         charisma: { min: 1, max: 6 },
         edge: { min: 1, max: 7 },
      },
      qualities: []
   },
   dwarf: {
      attributes: {
         body: { min: 1, max: 7 },
         agility: { min: 1, max: 6 },
         reaction: { min: 1, max: 5 },
         strength: { min: 1, max: 8 },
         willpower: { min: 1, max: 7 },
         logic: { min: 1, max: 6 },
         intuition: { min: 1, max: 6 },
         charisma: { min: 1, max: 6 },
         edge: { min: 1, max: 6 },
      },
      qualities: ["toxinresistance", "thermographicvision"]
   },
   elf: {
      attributes: {
         body: { min: 1, max: 6 },
         agility: { min: 1, max: 7 },
         reaction: { min: 1, max: 6 },
         strength: { min: 1, max: 6 },
         willpower: { min: 1, max: 6 },
         logic: { min: 1, max: 6 },
         intuition: { min: 1, max: 6 },
         charisma: { min: 1, max: 8 },
         edge: { min: 1, max: 6 },
      },
      qualities: ["lowlightvision"]
   },
   ork: {
      attributes: {
         body: { min: 1, max: 8 },
         agility: { min: 1, max: 6 },
         reaction: { min: 1, max: 6 },
         strength: { min: 1, max: 8 },
         willpower: { min: 1, max: 6 },
         logic: { min: 1, max: 6 },
         intuition: { min: 1, max: 6 },
         charisma: { min: 1, max: 5 },
         edge: { min: 1, max: 6 },
      },
      qualities: ["lowlightvision", "builttough:1"]
   },
   troll: {
      attributes: {
         body: { min: 1, max: 9 },
         agility: { min: 1, max: 5 },
         reaction: { min: 1, max: 6 },
         strength: { min: 1, max: 9 },
         willpower: { min: 1, max: 6 },
         logic: { min: 1, max: 6 },
         intuition: { min: 1, max: 6 },
         charisma: { min: 1, max: 5 },
         edge: { min: 1, max: 6 },
      },
      qualities: ["dermaldeposits", "thermographicvision", "builttough:2"]
   }
}

let names = {

   abbreviate: (term) => {
      let entry = names[term]
      return entry ? entry.abbreviation : term
   },
   display: (term) => {
      let entry = names[term]
      return entry ? entry.display : term
   },

   // attributes
   "body": { "abbreviation": "B", "display": "Body" },
   "agility": { "abbreviation": "A", "display": "Agility" },
   "reaction": { "abbreviation": "R", "display": "Reaction" },
   "strength": { "abbreviation": "S", "display": "Strength" },
   "willpower": { "abbreviation": "W", "display": "Willpower" },
   "logic": { "abbreviation": "L", "display": "Logic" },
   "intuition": { "abbreviation": "I", "display": "Intuition" },
   "charisma": { "abbreviation": "C", "display": "Charisma" },
   "edge": { "abbreviation": "EDG", "display": "Edge" },
   "essence": { "abbreviation": "ESS", "display": "Essence" },
   "magic": { "abbreviation": "M", "display": "Magic" },
   "resonance": { "abbreviation": "RES", "display": "Resonance" },
   // skills
   "astral": { "abbreviation": "Astral", "display": "Astral" },
   "athletics": { "abbreviation": "athletics", "display": "Athletics" },
   "biotech": { "abbreviation": "biotech", "display": "Biotech" },
   "closecombat": { "abbreviation": "CQC", "display": "Close Combat" },
   "con": { "abbreviation": "con", "display": "Con" },
   "conjuring": { "abbreviation": "conjuring", "display": "Conjuring" },
   "cracking": { "abbreviation": "cracking", "display": "Cracking" },
   "electronics": { "abbreviation": "electronics", "display": "Electronics" },
   "enchanting": { "abbreviation": "enchanting", "display": "Enchanting" },
   "engineering": { "abbreviation": "engineering", "display": "Engineering" },
   "exoticweapons": { "abbreviation": "exotic-weapons", "display": "Exotic Weapons" },
   "firearms": { "abbreviation": "firearms", "display": "Firearms" },
   "influence": { "abbreviation": "influence", "display": "Influence" },
   "outdoors": { "abbreviation": "outdoors", "display": "Outdoors" },
   "perception": { "abbreviation": "perception", "display": "Perception" },
   "piloting": { "abbreviation": "piloting", "display": "Piloting" },
   "sorcery": { "abbreviation": "sorcery", "display": "Sorcery" },
   "stealth": { "abbreviation": "stealth", "display": "Stealth" },
   "tasking": { "abbreviation": "tasking", "display": "Tasking" },
   // attribute tests
   "judgeintentions": { "abbreviation": "JI", "display": "Judge Intentions" },
   "composure": { "abbreviation": "Composure", "display": "Composure" },
   "memory": { "abbreviation": "Memory", "display": "Memory" },
   "lift": { "abbreviation": "Lift", "display": "Lift" },
   //common tests
   "healstun": { "abbreviation": "Heal Stun", "display": "Heal–Stun" },
   "healdamage": { "abbreviation": "Heal Damage", "display": "Heal–Damage" },
   "healoverflow": { "abbreviation": "Heal Overflow", "display": "Heal–Overflow" },
   "defendphysical": { "abbreviation": "Defend Physical", "display": "Defend–Physical" },
   "defendastral": { "abbreviation": "Defend Astral", "display": "Defend–Astral" },
   "defenddirectmagic": { "abbreviation": "Defend Direct Magic", "display": "Defend–Direct Magic" },
   "defendindirectmagic": { "abbreviation": "Defend Indirect Magic", "display": "Defend–Indirect Magic" },
   "defenddetectionmagic": { "abbreviation": "Defend Detection Magic", "display": "Defend–Detection Magic" },
   "defendothermagic": { "abbreviation": "Defend Other Magic", "display": "Defend–Other Magic" },
   "resistdamage": { "abbreviation": "Resist Damage", "display": "Resist–Damage" },
   "resistdrain": { "abbreviation": "Resist Drain", "display": "Resist–Drain" },
   // initiatives
   "initiative": { "abbreviation": "Initiative", "display": "Initiative​" },
   "initiativeastral": { "abbreviation": "Initiative Astral", "display": "Initiative–Astral" },
   "initiativematrixar": { "abbreviation": "Initiative Matrix", "display": "Initiative–Matrix AR" },
   "initiativematrixvrcold": { "abbreviation": "Initiative Matrix VR Cold", "display": "Initiative–Matrix VR Cold" },
   "initiativematrixvrhot": { "abbreviation": "Initiative Matrix VR Hot", "display": "Initiative–Matrix VR Hot" },
}

let calculateCharacterData = function (character) {
   // console.log('[shadowrun]', character)

   // determine current values for attributes
   character.data.attributes.body.value = character.data.attributes.body.base + character.data.attributes.body.adj
   character.data.attributes.agility.value = character.data.attributes.agility.base + character.data.attributes.agility.adj
   character.data.attributes.reaction.value = character.data.attributes.reaction.base + character.data.attributes.reaction.adj
   character.data.attributes.strength.value = character.data.attributes.strength.base + character.data.attributes.strength.adj
   character.data.attributes.willpower.value = character.data.attributes.willpower.base + character.data.attributes.willpower.adj
   character.data.attributes.logic.value = character.data.attributes.logic.base + character.data.attributes.logic.adj
   character.data.attributes.intuition.value = character.data.attributes.intuition.base + character.data.attributes.intuition.adj
   character.data.attributes.charisma.value = character.data.attributes.charisma.base + character.data.attributes.charisma.adj
   character.data.attributes.edge.value = character.data.attributes.edge.base + character.data.attributes.edge.adj
   character.data.attributes.essence.value = character.data.attributes.essence.base + character.data.attributes.essence.adj

   // magic and resonance reduced by 1 for every full point of essence loss
   let essenceLoss = 6 - Math.ceil(character.data.attributes.essence.value)

   character.data.attributes.magic.value = character.data.attributes.magic.base + character.data.attributes.magic.adj - essenceLoss
   character.data.attributes.resonance.value = character.data.attributes.resonance.base + character.data.attributes.resonance.adj - essenceLoss

   // set maximums based on metatype
   let meta = metatypes[character.data.metatype]
   character.data.attributes.body.max = meta.attributes.body.max
   character.data.attributes.agility.max = meta.attributes.agility.max
   character.data.attributes.reaction.max = meta.attributes.reaction.max
   character.data.attributes.strength.max = meta.attributes.strength.max
   character.data.attributes.willpower.max = meta.attributes.willpower.max
   character.data.attributes.logic.max = meta.attributes.logic.max
   character.data.attributes.intuition.max = meta.attributes.intuition.max
   character.data.attributes.charisma.max = meta.attributes.charisma.max
   character.data.attributes.edge.max = meta.attributes.edge.max


   // condition and status, do these early so they can be used in other calculations, slightly irrelavent now that test pool is a function
   character.data.condition.damage.max = 8 + Math.ceil(character.data.attributes.body.value / 2) + character.data.condition.damage.adj
   character.data.status.damagePenalty = Math.floor(character.data.condition.damage.value / 3) * -1
   character.data.condition.stun.max = 8 + Math.ceil(character.data.attributes.willpower.value / 2) + character.data.condition.stun.adj
   character.data.status.stunPenalty = Math.floor(character.data.condition.stun.value / 3) * -1
   character.data.condition.overflow.max = character.data.attributes.body.value * 2 + character.data.condition.overflow.adj

   character.data.status.penalty = function () { return character.data.status.stunPenalty + character.data.status.damagePenalty }
   character.data.status.toHtml = function () {
      if (character.data.status.penalty()) {
         return `<span title="${(character.data.status.stunPenalty ? 'stun: ' + character.data.status.stunPenalty + '\n' : '') + (character.data.status.damagePenalty ? 'damage: ' + character.data.status.damagePenalty + '\n' : '')}"> + Status (${character.data.status.penalty()})</span>`
      } else {
         return ''
      }
   }

   // start collecting tests for the tests table
   let tests = {}

   // calculate default dice pool for skills
   for (let [key, skill] of Object.entries(character.data.skills.active)) {
      if (skill.untrained) {
         skill.pool = (skill.rank === 0 ? -1 : skill.rank) + character.data.attributes[skill.primaryAttribute].value
      } else {
         skill.pool = skill.rank === 0 ? 0 : (skill.rank + character.data.attributes[skill.primaryAttribute].value)
      }

      // if you have a positive dice pool before status, add to the overview
      if (skill.pool > 0) {
         tests[key] = {
            "formula": `${names.display(key)} + ${names.display(skill.primaryAttribute)}`,
            "applyStatus": true,
            "pool": function (context, applyStatus = true) {
               return skill.pool + (applyStatus ? character.data.status.penalty() : 0)
            }
         }

         if (skill.specialization) {
            tests[`${names.display(key)}–${skill.specialization}`] = {
               "formula": `${names.display(key)} + 2 + ${names.display(skill.primaryAttribute)}`,
               "applyStatus": true,
               "pool": function (context, applyStatus = true) {
                  return skill.pool + 2 + (applyStatus ? character.data.status.penalty() : 0)
               }
            }
         }

         if (skill.expertise) {
            tests[`${names.display(key)}–${skill.expertise}`] = {
               "formula": `${names.display(key)} + 3 + ${names.display(skill.primaryAttribute)}`,
               "applyStatus": true,
               "pool": function (context, applyStatus = true) {
                  return skill.pool + 3 + (applyStatus ? character.data.status.penalty() : 0)
               }
            }
         }
      }
   }

   // Judge Intentions (Willpower + Intuition + Conditions)
   character.data.overview.tests.judgeintentions = {
      "formula": `Willpower + Intuition`,
      "applyStatus": true,
      "pool": function (context, applyStatus = true) {
         return character.data.attributes.willpower.value + character.data.attributes.intuition.value + (applyStatus ? character.data.status.penalty() : 0)
      }
   }

   // Composure (Willpower + Charisma + Conditions)
   character.data.overview.tests.composure = {
      "formula": `Willpower + Charisma`,
      "applyStatus": true,
      "pool": function (context, applyStatus = true) {
         return character.data.attributes.willpower.value + character.data.attributes.charisma.value + (applyStatus ? character.data.status.penalty() : 0)
      }
   }

   // Memory (Logic + Intuition + Conditions)
   character.data.overview.tests.memory = {
      "formula": `Logic + Intuition`,
      "applyStatus": true,
      "pool": function (context, applyStatus = true) {
         return character.data.attributes.logic.value + character.data.attributes.intuition.value + (applyStatus ? character.data.status.penalty() : 0)
      }
   }

   // Lift (Body + Willpower + Conditions)
   character.data.overview.tests.lift = {
      "formula": `Body + Willpower`,
      "applyStatus": true,
      "pool": function (context, applyStatus = true) {
         return character.data.attributes.body.value + character.data.attributes.willpower.value + (applyStatus ? character.data.status.penalty() : 0)
      }
   }

   // Heal - Stun (Body + Willpower), no condition
   character.data.overview.tests.healstun = {
      "formula": `Body + Willpower`,
      "applyStatus": false,
      "pool": function (context, applyStatus = false) {
         return character.data.attributes.body.value + character.data.attributes.willpower.value + (applyStatus ? character.data.status.penalty() : 0)
      }
   }

   // Heal - Damage (Body + Body), no condition
   character.data.overview.tests.healdamage = {
      "formula": `Body + Body`,
      "applyStatus": false,
      "pool": function (context, applyStatus = false) {
         return character.data.attributes.body.value + character.data.attributes.body.value + (applyStatus ? character.data.status.penalty() : 0)
      }
   }

   // Heal - Overflow (Body + Body + Conditions)
   character.data.overview.tests.healoverflow = {
      "formula": `Body + Body`,
      "applyStatus": true,
      "pool": function (context, applyStatus = true) {
         return character.data.attributes.body.value + character.data.attributes.body.value + (applyStatus ? character.data.status.penalty() : 0)
      }
   }

   // Defend - Physical (Reaction + Intuition + Conditions)
   character.data.overview.tests.defendphysical = {
      "formula": `Reaction + Intuition`,
      "applyStatus": true,
      "pool": function (context, applyStatus = true) {
         return character.data.attributes.reaction.value + character.data.attributes.intuition.value + (applyStatus ? character.data.status.penalty() : 0)
      }
   }

   // Defend - Direct Magic (Willpower + Intuition + Conditions)
   character.data.overview.tests.defenddirectmagic = {
      "formula": `Willpower + Intuition`,
      "applyStatus": true,
      "pool": function (context, applyStatus = true) {
         return character.data.attributes.willpower.value + character.data.attributes.intuition.value + (applyStatus ? character.data.status.penalty() : 0)
      }
   }

   // Defend - Indirect Magic (Reaction + Willpower + Conditions)
   character.data.overview.tests.defendindirectmagic = {
      "formula": `Reaction + Willpower`,
      "applyStatus": true,
      "pool": function (context, applyStatus = true) {
         return character.data.attributes.reaction.value + character.data.attributes.willpower.value + (applyStatus ? character.data.status.penalty() : 0)
      }
   }

   // Defend - Detection Magic (Body + Willpower + Conditions)
   character.data.overview.tests.defenddetectionmagic = {
      "formula": `Body + Willpower`,
      "applyStatus": true,
      "pool": function (context, applyStatus = true) {
         return character.data.attributes.body.value + character.data.attributes.willpower.value + (applyStatus ? character.data.status.penalty() : 0)
      }
   }

   // Defend - Other Effects (Willpower + Logic + Conditions)
   character.data.overview.tests.defendothermagic = {
      "formula": `Willpower + Logic`,
      "applyStatus": true,
      "pool": function (context, applyStatus = true) {
         return character.data.attributes.willpower.value + character.data.attributes.logic.value + (applyStatus ? character.data.status.penalty() : 0)
      }
   }

   // Resist - Damage (Body), no condition
   character.data.overview.tests.resistdamage = {
      "formula": `Body`,
      "applyStatus": false,
      "pool": function (context, applyStatus = false) {
         return character.data.attributes.body.value + (applyStatus ? character.data.status.penalty() : 0)
      }
   }

   // if Awakened
   if (character.data.nature === 'awakened') {
      // Defend - Astral (Intuition + Logic + Conditions)
      character.data.overview.tests.defendastral = {
         "formula": `Intuition + Logic`,
         "applyStatus": true,
         "pool": function (context, applyStatus = true) {
            return character.data.attributes.intuition.value + character.data.attributes.logic.value + (applyStatus ? character.data.status.penalty() : 0)
         }
      }

      // Resist - Drain (Willpower + Logic | Charisma), no condition
      character.data.overview.tests.resistdrain = {
         "formula": `Willpower + ${names.display(character.data.magic.traditionAttribute)}`,
         "applyStatus": false,
         "pool": function (context, applyStatus = false) {
            return character.data.attributes.willpower.value + character.data.attributes[character.data.magic.traditionAttribute].value + (applyStatus ? character.data.status.penalty() : 0)
         }
      }

   }

   // merge pre-defined and skill tests, and then sort them
   let ordered = {}
   let unordered = { ...character.data.overview.tests, ...tests }
   Object.keys(unordered).sort((a, b) => { return a.localeCompare(b) }).forEach(key => {
      ordered[key] = unordered[key]
   })

   character.data.overview.tests = ordered

   // initiative, also need gear for the matrix initative
   // todo - a button to add yourself to the initative in the correct manner. 
   // character.data.initiative.physical.value = character.data.attributes.reaction.value + character.data.attributes.intuition.value
   // character.data.initiative.astral.value = character.data.attributes.intuition.value + character.data.attributes.logic.value
   // character.data.initiative.matrixar.value = character.data.attributes.reaction.value + character.data.attributes.intuition.value
   // character.data.initiative.matrixvrcold.value = character.data.attributes.intuition.value + 0
   // character.data.initiative.matrixvrhot.value = character.data.attributes.intuition.value + 0


   return character

}

let qualities = {
   "ambidexterous": {
      "name": "Ambidexterous",
      "karma": -4,
      "effect": "No penalty for off-hand weapon use.",
      "description": "You are equally adept at using either your right or left side. Whether shooting a gun, throwing a grenade, or kicking a ball, you can switch it up with the best of them.",
      "keywords": "Positive, Physical",
      "source": "Shadowrun Sixth World p. 70",
      "calc": (character) => { }
   },
   "analyticalmind": {
      "name": "Analytical Mind",
      "karma": -3,
      "effect": "You gain a bonus Edge when you make any Logic-based test.",
      "description": "You are a master problem solver. You can analyze information to help deduce solutions, while separating useful bits from the distractions and noise.",
      "keywords": "Positive, Mental",
      "source": "Shadowrun Sixth World p. 70",
      "calc": (character) => { }
   },
   "aptitude:astral": {
      "name": "Aptitude (Astral)",
      "karma": -12,
      "effect": "Your skill maximum for the selected skill is 10, instead of 9, and your maximum starting rank is 7, instead of 6.",
      "description": "The best look up to you. You have the natural potential to be even better than the best in a particular skill.",
      "keywords": "Positive, Mental",
      "source": "Shadowrun Sixth World p. 70",
      "calc": (character) => { }
   },
   "aptitude:athletics": {
      "name": "Aptitude (Athletics)",
      "karma": -12,
      "effect": "Your skill maximum for the selected skill is 10, instead of 9, and your maximum starting rank is 7, instead of 6.",
      "description": "The best look up to you. You have the natural potential to be even better than the best in a particular skill.",
      "keywords": "Positive, Mental",
      "source": "Shadowrun Sixth World p. 70",
      "calc": (character) => { }
   },
   "aptitude:biotech": {
      "name": "Aptitude (Biotech)",
      "karma": -12,
      "effect": "Your skill maximum for the selected skill is 10, instead of 9, and your maximum starting rank is 7, instead of 6.",
      "description": "The best look up to you. You have the natural potential to be even better than the best in a particular skill.",
      "keywords": "Positive, Mental",
      "source": "Shadowrun Sixth World p. 70",
      "calc": (character) => { }
   },
   "aptitude:closecombat": {
      "name": "Aptitude (Close Combat)",
      "karma": -12,
      "effect": "Your skill maximum for the selected skill is 10, instead of 9, and your maximum starting rank is 7, instead of 6.",
      "description": "The best look up to you. You have the natural potential to be even better than the best in a particular skill.",
      "keywords": "Positive, Mental",
      "source": "Shadowrun Sixth World p. 70",
      "calc": (character) => { }
   },
   "aptitude:con": {
      "name": "Aptitude (Con)",
      "karma": -12,
      "effect": "Your skill maximum for the selected skill is 10, instead of 9, and your maximum starting rank is 7, instead of 6.",
      "description": "The best look up to you. You have the natural potential to be even better than the best in a particular skill.",
      "keywords": "Positive, Mental",
      "source": "Shadowrun Sixth World p. 70",
      "calc": (character) => { }
   },
   "aptitude:conjuring": {
      "name": "Aptitude (Conjuring)",
      "karma": -12,
      "effect": "Your skill maximum for the selected skill is 10, instead of 9, and your maximum starting rank is 7, instead of 6.",
      "description": "The best look up to you. You have the natural potential to be even better than the best in a particular skill.",
      "keywords": "Positive, Mental",
      "source": "Shadowrun Sixth World p. 70",
      "calc": (character) => { }
   },
   "aptitude:cracking": {
      "name": "Aptitude (Cracking)",
      "karma": -12,
      "effect": "Your skill maximum for the selected skill is 10, instead of 9, and your maximum starting rank is 7, instead of 6.",
      "description": "The best look up to you. You have the natural potential to be even better than the best in a particular skill.",
      "keywords": "Positive, Mental",
      "source": "Shadowrun Sixth World p. 70",
      "calc": (character) => { }
   },
   "aptitude:electronics": {
      "name": "Aptitude (Electronics)",
      "karma": -12,
      "effect": "Your skill maximum for the selected skill is 10, instead of 9, and your maximum starting rank is 7, instead of 6.",
      "description": "The best look up to you. You have the natural potential to be even better than the best in a particular skill.",
      "keywords": "Positive, Mental",
      "source": "Shadowrun Sixth World p. 70",
      "calc": (character) => { }
   },
   "aptitude:enchanting": {
      "name": "Aptitude (Enchanting)",
      "karma": -12,
      "effect": "Your skill maximum for the selected skill is 10, instead of 9, and your maximum starting rank is 7, instead of 6.",
      "description": "The best look up to you. You have the natural potential to be even better than the best in a particular skill.",
      "keywords": "Positive, Mental",
      "source": "Shadowrun Sixth World p. 70",
      "calc": (character) => { }
   },
   "aptitude:engineering": {
      "name": "Aptitude (Engineering)",
      "karma": -12,
      "effect": "Your skill maximum for the selected skill is 10, instead of 9, and your maximum starting rank is 7, instead of 6.",
      "description": "The best look up to you. You have the natural potential to be even better than the best in a particular skill.",
      "keywords": "Positive, Mental",
      "source": "Shadowrun Sixth World p. 70",
      "calc": (character) => { }
   },
   "aptitude:exoticweapons": {
      "name": "Aptitude (Exotic Weapons)",
      "karma": -12,
      "effect": "Your skill maximum for the selected skill is 10, instead of 9, and your maximum starting rank is 7, instead of 6.",
      "description": "The best look up to you. You have the natural potential to be even better than the best in a particular skill.",
      "keywords": "Positive, Mental",
      "source": "Shadowrun Sixth World p. 70",
      "calc": (character) => { }
   },
   "aptitude:firearms": {
      "name": "Aptitude (Firearms)",
      "karma": -12,
      "effect": "Your skill maximum for the selected skill is 10, instead of 9, and your maximum starting rank is 7, instead of 6.",
      "description": "The best look up to you. You have the natural potential to be even better than the best in a particular skill.",
      "keywords": "Positive, Mental",
      "source": "Shadowrun Sixth World p. 70",
      "calc": (character) => { }
   },
   "aptitude:influence": {
      "name": "Aptitude (Influence)",
      "karma": -12,
      "effect": "Your skill maximum for the selected skill is 10, instead of 9, and your maximum starting rank is 7, instead of 6.",
      "description": "The best look up to you. You have the natural potential to be even better than the best in a particular skill.",
      "keywords": "Positive, Mental",
      "source": "Shadowrun Sixth World p. 70",
      "calc": (character) => { }
   },
   "aptitude:outdoors": {
      "name": "Aptitude (Outdoors)",
      "karma": -12,
      "effect": "Your skill maximum for the selected skill is 10, instead of 9, and your maximum starting rank is 7, instead of 6.",
      "description": "The best look up to you. You have the natural potential to be even better than the best in a particular skill.",
      "keywords": "Positive, Mental",
      "source": "Shadowrun Sixth World p. 70",
      "calc": (character) => { }
   },
   "aptitude:perception": {
      "name": "Aptitude (Perception)",
      "karma": -12,
      "effect": "Your skill maximum for the selected skill is 10, instead of 9, and your maximum starting rank is 7, instead of 6.",
      "description": "The best look up to you. You have the natural potential to be even better than the best in a particular skill.",
      "keywords": "Positive, Mental",
      "source": "Shadowrun Sixth World p. 70",
      "calc": (character) => { }
   },
   "aptitude:piloting": {
      "name": "Aptitude (Piloting)",
      "karma": -12,
      "effect": "Your skill maximum for the selected skill is 10, instead of 9, and your maximum starting rank is 7, instead of 6.",
      "description": "The best look up to you. You have the natural potential to be even better than the best in a particular skill.",
      "keywords": "Positive, Mental",
      "source": "Shadowrun Sixth World p. 70",
      "calc": (character) => { }
   },
   "aptitude:sorcery": {
      "name": "Aptitude (Sorcery)",
      "karma": -12,
      "effect": "Your skill maximum for the selected skill is 10, instead of 9, and your maximum starting rank is 7, instead of 6.",
      "description": "The best look up to you. You have the natural potential to be even better than the best in a particular skill.",
      "keywords": "Positive, Mental",
      "source": "Shadowrun Sixth World p. 70",
      "calc": (character) => { }
   },
   "aptitude:stealth": {
      "name": "Aptitude (Stealth)",
      "karma": -12,
      "effect": "Your skill maximum for the selected skill is 10, instead of 9, and your maximum starting rank is 7, instead of 6.",
      "description": "The best look up to you. You have the natural potential to be even better than the best in a particular skill.",
      "keywords": "Positive, Mental",
      "source": "Shadowrun Sixth World p. 70",
      "calc": (character) => { }
   },
   "aptitude:tasking": {
      "name": "Aptitude (Tasking)",
      "karma": -12,
      "effect": "Your skill maximum for the selected skill is 10, instead of 9, and your maximum starting rank is 7, instead of 6.",
      "description": "The best look up to you. You have the natural potential to be even better than the best in a particular skill.",
      "keywords": "Positive, Mental",
      "source": "Shadowrun Sixth World p. 70",
      "calc": (character) => { }
   },
   "astralchameleon": {
      "name": "Aptitude (Astral Chameleon)",
      "karma": -9,
      "effect": "Characters receive –2 dice on tests to recognize your aura or astral signature. Your astral signature fades in half the normal time (see p. 159).",
      "description": "Your aura never seems to stabilize for very long. You have the ability to blend in with the astral environment around you and make it harder to identify and read your aura and astral signature.",
      "keywords": "Positive, Magical",
      "source": "Shadowrun Sixth World p. 70",
      "calc": (character) => { }
   },
   "blandness": {
      "name": "Blandness",
      "karma": -8,
      "effect": "Characters take a –2 penalty on Memory tests (p. 67) to remember if they have seen you before, and the threshold on tests to notice if you are following or observing them is increased by 1. If the character acquires something permanent and distinctive—obvious, unusual cyberware, a unique tattoo, that sort of thing—they lose this quality. If they acquire something temporarily distinctive, such as an extreme hairdo, the effects are negated until those changes are reversed.",
      "description": "You are the least interesting person in the world. You’re average height, average weight, average build, average everything. Nothing at all about you tends to stand out, and that can be extremely useful.",
      "keywords": "Positive, Mental",
      "source": "Shadowrun Sixth World p. 70",
      "calc": (character) => { }
   },
   "builttough:1": {
      "name": "Built Tough 1",
      "karma": -4,
      "effect": "You have a number of additional boxes on your Physical Condition Monitor equal to the rank of this quality.",
      "description": "You’re built like a brick drekhouse. You’re pretty good at taking a few extra hits before the lights go out.",
      "keywords": "Positive, Physical",
      "source": "Shadowrun Sixth World p. 70",
      "calc": (character) => { }
   },
   "builttough:2": {
      "name": "Built Tough 2",
      "karma": -8,
      "effect": "You have a number of additional boxes on your Physical Condition Monitor equal to the rank of this quality.",
      "description": "You’re built like a brick drekhouse. You’re pretty good at taking a few extra hits before the lights go out.",
      "keywords": "Positive, Physical",
      "source": "Shadowrun Sixth World p. 70",
      "calc": (character) => { }
   },
   "builttough:3": {
      "name": "Built Tough 3",
      "karma": -12,
      "effect": "You have a number of additional boxes on your Physical Condition Monitor equal to the rank of this quality.",
      "description": "You’re built like a brick drekhouse. You’re pretty good at taking a few extra hits before the lights go out.",
      "keywords": "Positive, Physical",
      "source": "Shadowrun Sixth World p. 70",
      "calc": (character) => { }
   },
   "builttough:4": {
      "name": "Built Tough 4",
      "karma": -16,
      "effect": "You have a number of additional boxes on your Physical Condition Monitor equal to the rank of this quality.",
      "description": "You’re built like a brick drekhouse. You’re pretty good at taking a few extra hits before the lights go out.",
      "keywords": "Positive, Physical",
      "source": "Shadowrun Sixth World p. 70",
      "calc": (character) => { }
   },


}

export { calculateCharacterData as CalculateCharacterData, metatypes as Metatypes, names as Names, qualities as Qualities }