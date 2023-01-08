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

let calculateCharacterData = function (data) {
   // console.log('[shadowrun]', character)

   // determine current values for attributes
   data.attributes.body.value = data.attributes.body.base + data.attributes.body.adj
   data.attributes.agility.value = data.attributes.agility.base + data.attributes.agility.adj
   data.attributes.reaction.value = data.attributes.reaction.base + data.attributes.reaction.adj
   data.attributes.strength.value = data.attributes.strength.base + data.attributes.strength.adj
   data.attributes.willpower.value = data.attributes.willpower.base + data.attributes.willpower.adj
   data.attributes.logic.value = data.attributes.logic.base + data.attributes.logic.adj
   data.attributes.intuition.value = data.attributes.intuition.base + data.attributes.intuition.adj
   data.attributes.charisma.value = data.attributes.charisma.base + data.attributes.charisma.adj
   data.attributes.edge.value = data.attributes.edge.base + data.attributes.edge.adj
   data.attributes.essence.value = data.attributes.essence.base + data.attributes.essence.adj

   // magic and resonance reduced by 1 for every full point of essence loss
   let essenceLoss = 6 - Math.ceil(data.attributes.essence.value)

   data.attributes.magic.value = data.attributes.magic.base + data.attributes.magic.adj - essenceLoss
   data.attributes.resonance.value = data.attributes.resonance.base + data.attributes.resonance.adj - essenceLoss

   // set maximums based on metatype
   let meta = metatypes[data.metatype]
   data.attributes.body.max = meta.attributes.body.max
   data.attributes.agility.max = meta.attributes.agility.max
   data.attributes.reaction.max = meta.attributes.reaction.max
   data.attributes.strength.max = meta.attributes.strength.max
   data.attributes.willpower.max = meta.attributes.willpower.max
   data.attributes.logic.max = meta.attributes.logic.max
   data.attributes.intuition.max = meta.attributes.intuition.max
   data.attributes.charisma.max = meta.attributes.charisma.max
   data.attributes.edge.max = meta.attributes.edge.max


   // condition and status, do these early so they can be used in other calculations, slightly irrelavent now that test pool is a function
   data.condition.damage.max = 8 + Math.ceil(data.attributes.body.value / 2) + data.condition.damage.adj
   data.status.damagePenalty = Math.floor(data.condition.damage.value / 3) * -1
   data.condition.stun.max = 8 + Math.ceil(data.attributes.willpower.value / 2) + data.condition.stun.adj
   data.status.stunPenalty = Math.floor(data.condition.stun.value / 3) * -1
   data.condition.overflow.max = data.attributes.body.value * 2 + data.condition.overflow.adj

   data.status.penalty = function () { return data.status.stunPenalty + data.status.damagePenalty }
   data.status.toHtml = function () {
      if (data.status.penalty()) {
         return `<span title="${(data.status.stunPenalty ? 'stun: ' + data.status.stunPenalty + '\n' : '') + (data.status.damagePenalty ? 'damage: ' + data.status.damagePenalty + '\n' : '')}"> + Status (${data.status.penalty()})</span>`
      } else {
         return ''
      }
   }

   // start collecting tests for the tests table
   let tests = {}

   // calculate default dice pool for skills
   for (let [key, skill] of Object.entries(data.skills.active)) {
      if (skill.untrained) {
         skill.pool = (skill.rank === 0 ? -1 : skill.rank) + data.attributes[skill.primaryAttribute].value
      } else {
         skill.pool = skill.rank === 0 ? 0 : (skill.rank + data.attributes[skill.primaryAttribute].value)
      }

      // if you have a positive dice pool before status, add to the overview
      if (skill.pool > 0) {
         tests[key] = {
            "formula": `${names.display(key)} + ${names.display(skill.primaryAttribute)}`,
            "applyStatus": true,
            "pool": function (context, applyStatus = true) {
               return skill.pool + (applyStatus ? data.status.penalty() : 0)
            }
         }

         if (skill.specialization) {
            tests[`${names.display(key)}–${skill.specialization}`] = {
               "formula": `${names.display(key)} + 2 + ${names.display(skill.primaryAttribute)}`,
               "applyStatus": true,
               "pool": function (context, applyStatus = true) {
                  return skill.pool + 2 + (applyStatus ? data.status.penalty() : 0)
               }
            }
         }

         if (skill.expertise) {
            tests[`${names.display(key)}–${skill.expertise}`] = {
               "formula": `${names.display(key)} + 3 + ${names.display(skill.primaryAttribute)}`,
               "applyStatus": true,
               "pool": function (context, applyStatus = true) {
                  return skill.pool + 3 + (applyStatus ? data.status.penalty() : 0)
               }
            }
         }
      }
   }

   // Judge Intentions (Willpower + Intuition + Conditions)
   data.overview.tests.judgeintentions = {
      "formula": `Willpower + Intuition`,
      "applyStatus": true,
      "pool": function (context, applyStatus = true) {
         return data.attributes.willpower.value + data.attributes.intuition.value + (applyStatus ? data.status.penalty() : 0)
      }
   }

   // Composure (Willpower + Charisma + Conditions)
   data.overview.tests.composure = {
      "formula": `Willpower + Charisma`,
      "applyStatus": true,
      "pool": function (context, applyStatus = true) {
         return data.attributes.willpower.value + data.attributes.charisma.value + (applyStatus ? data.status.penalty() : 0)
      }
   }

   // Memory (Logic + Intuition + Conditions)
   data.overview.tests.memory = {
      "formula": `Logic + Intuition`,
      "applyStatus": true,
      "pool": function (context, applyStatus = true) {
         return data.attributes.logic.value + data.attributes.intuition.value + (applyStatus ? data.status.penalty() : 0)
      }
   }

   // Lift (Body + Willpower + Conditions)
   data.overview.tests.lift = {
      "formula": `Body + Willpower`,
      "applyStatus": true,
      "pool": function (context, applyStatus = true) {
         return data.attributes.body.value + data.attributes.willpower.value + (applyStatus ? data.status.penalty() : 0)
      }
   }

   // Heal - Stun (Body + Willpower), no condition
   data.overview.tests.healstun = {
      "formula": `Body + Willpower`,
      "applyStatus": false,
      "pool": function (context, applyStatus = false) {
         return data.attributes.body.value + data.attributes.willpower.value + (applyStatus ? data.status.penalty() : 0)
      }
   }

   // Heal - Damage (Body + Body), no condition
   data.overview.tests.healdamage = {
      "formula": `Body + Body`,
      "applyStatus": false,
      "pool": function (context, applyStatus = false) {
         return data.attributes.body.value + data.attributes.body.value + (applyStatus ? data.status.penalty() : 0)
      }
   }

   // Heal - Overflow (Body + Body + Conditions)
   data.overview.tests.healoverflow = {
      "formula": `Body + Body`,
      "applyStatus": true,
      "pool": function (context, applyStatus = true) {
         return data.attributes.body.value + data.attributes.body.value + (applyStatus ? data.status.penalty() : 0)
      }
   }

   // Defend - Physical (Reaction + Intuition + Conditions)
   data.overview.tests.defendphysical = {
      "formula": `Reaction + Intuition`,
      "applyStatus": true,
      "pool": function (context, applyStatus = true) {
         return data.attributes.reaction.value + data.attributes.intuition.value + (applyStatus ? data.status.penalty() : 0)
      }
   }

   // Defend - Direct Magic (Willpower + Intuition + Conditions)
   data.overview.tests.defenddirectmagic = {
      "formula": `Willpower + Intuition`,
      "applyStatus": true,
      "pool": function (context, applyStatus = true) {
         return data.attributes.willpower.value + data.attributes.intuition.value + (applyStatus ? data.status.penalty() : 0)
      }
   }

   // Defend - Indirect Magic (Reaction + Willpower + Conditions)
   data.overview.tests.defendindirectmagic = {
      "formula": `Reaction + Willpower`,
      "applyStatus": true,
      "pool": function (context, applyStatus = true) {
         return data.attributes.reaction.value + data.attributes.willpower.value + (applyStatus ? data.status.penalty() : 0)
      }
   }

   // Defend - Detection Magic (Body + Willpower + Conditions)
   data.overview.tests.defenddetectionmagic = {
      "formula": `Body + Willpower`,
      "applyStatus": true,
      "pool": function (context, applyStatus = true) {
         return data.attributes.body.value + data.attributes.willpower.value + (applyStatus ? data.status.penalty() : 0)
      }
   }

   // Defend - Other Effects (Willpower + Logic + Conditions)
   data.overview.tests.defendothermagic = {
      "formula": `Willpower + Logic`,
      "applyStatus": true,
      "pool": function (context, applyStatus = true) {
         return data.attributes.willpower.value + data.attributes.logic.value + (applyStatus ? data.status.penalty() : 0)
      }
   }

   // Resist - Damage (Body), no condition
   data.overview.tests.resistdamage = {
      "formula": `Body`,
      "applyStatus": false,
      "pool": function (context, applyStatus = false) {
         return data.attributes.body.value + (applyStatus ? data.status.penalty() : 0)
      }
   }

   // if Awakened
   if (data.nature === 'awakened') {
      // Defend - Astral (Intuition + Logic + Conditions)
      data.overview.tests.defendastral = {
         "formula": `Intuition + Logic`,
         "applyStatus": true,
         "pool": function (context, applyStatus = true) {
            return data.attributes.intuition.value + data.attributes.logic.value + (applyStatus ? data.status.penalty() : 0)
         }
      }

      // Resist - Drain (Willpower + Logic | Charisma), no condition
      data.overview.tests.resistdrain = {
         "formula": `Willpower + ${names.display(data.magic.traditionAttribute)}`,
         "applyStatus": false,
         "pool": function (context, applyStatus = false) {
            return data.attributes.willpower.value + data.attributes[data.magic.traditionAttribute].value + (applyStatus ? data.status.penalty() : 0)
         }
      }
   }

   // merge pre-defined and skill tests, and then sort them
   let ordered = {}
   let unordered = { ...data.overview.tests, ...tests }
   Object.keys(unordered).sort((a, b) => { return a.localeCompare(b) }).forEach(key => {
      ordered[key] = unordered[key]
   })

   data.overview.tests = ordered

   // initiative, also need gear for the matrix initative
   // todo - a button to add yourself to the initative in the correct manner. 
   // data.initiative.physical.value = data.attributes.reaction.value + data.attributes.intuition.value
   // data.initiative.astral.value = data.attributes.intuition.value + data.attributes.logic.value
   // data.initiative.matrixar.value = data.attributes.reaction.value + data.attributes.intuition.value
   // data.initiative.matrixvrcold.value = data.attributes.intuition.value + 0
   // data.initiative.matrixvrhot.value = data.attributes.intuition.value + 0


   return data

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