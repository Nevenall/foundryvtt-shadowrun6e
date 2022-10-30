import { Character } from "./actors/character.js"
import { QualitySheet } from "./items/quality-sheet.js"
import { CharacterSheet } from "./actors/character-sheet.js"
import { Names, Qualities } from './shadowrun.js'
import { Quality } from "./items/quality.js"

// import { markdown } from './markdown.js'

/* -------------------------------------------- */
/*  Foundry VTT Initialization                  */
/* -------------------------------------------- */

Hooks.once("init", async function () {
   console.log(`Welcome to Shadowrun 6th World, Chummer!`)

   // Define custom Entity classes
   CONFIG.Actor.entityClass = Character
   CONFIG.Item.entityClass = Quality


   Combat.prototype._getInitiativeFormula = combatant => {
      let data = combatant.actor.data.data
      return `${data.attributes.reaction.value + data.attributes.intuition.value} + ${data.initiative.physical.dice}d6`
   }

   // Register sheet application classes
   Actors.unregisterSheet("core", ActorSheet)
   Actors.registerSheet("shadowrun", CharacterSheet, { makeDefault: true })

   Items.unregisterSheet("core", ItemSheet)
   Items.registerSheet("shadowrun", QualitySheet, { types: ['quality'], makeDefault: true })




   // isEqual helper
   Handlebars.registerHelper("isEqual", function (a, b) {
      return a === b
   })
   // lookup the abbreviation of a well know term
   Handlebars.registerHelper("abbreviate", function (term) {
      return Names.abbreviate(term)
   })

   // lookup the display version of a well know term
   Handlebars.registerHelper("display", function (term) {
      return Names.display(term)
   })

   Handlebars.registerHelper('add', function (a, b) {
      return a + b
   })

   // Register an inline markdown editor helper
   Handlebars.registerHelper('md-editor', function (options) {

      // let target = options.hash['target'],
      //    content = options.hash['content'] || "",
      //    button = Boolean(options.hash['button']),
      //    owner = Boolean(options.hash['owner']),
      //    editable = Boolean(options.hash['editable'])


      // if (!target) throw new Error("You must define the name of a target field.")

      // Enrich the content
      // this will do foundry specific stuff to html. We want to run it, for secrets and such, but we'll have to do it 


      let content = options.hash['content'] || ''
      // content = TextEditor.enrichHTML(content, { secrets: owner, entities: true })

      // Construct the HTML
      // let editor = $(`<div class="editor"><div class="editor-content" data-edit="${target}">${content}</div></div>`)


      let area = `<textarea data-dtype="String" name="data.journal.${options.data.key}.value" data-editor="journal-${options.data.key}">${content}</textarea>`

      return new Handlebars.SafeString(area)
   })


})


Hooks.once('ready', async (obj) => {

   // todo - qualities will be in the compendium. 
   // Item.create({ name: "Test Quality", type: "quality" }).then(item => {
   //    // debugger


   // })

})

Hooks.on('renderChatMessage', (msg, html, data) => {

   if (!msg.isRoll || !msg.isContentVisible) return

   for (const roll of msg.rolls) {
      // check for glitches when rolling #d6cs>4
      if (roll.terms[0].faces !== 6 || !roll.formula.match(/cs>4/i)) return

      let results = roll.terms[0].results.reduce((accumulator, current) => {
         if (current.result === 1) {
            accumulator.ones++
         } else if (current.success) {
            accumulator.hits++
         }
         accumulator.dice++
         return accumulator
      }, { ones: 0, hits: 0, dice: 0 })

      let hitText = () => {
         if (roll.formula.match(/ms/i)) {
            // if the formula contains margin of success, label with 'net hits'
            if (roll.total === 1 || roll.total === -1) {
               return 'net hit'
            } else {
               return 'net hits'
            }
            // otherwise label with 'hits'
         } else {
            // label with 'hits'
            if (roll.total === 1 || roll.total === -1) {
               return 'hit'
            } else {
               return 'hits'
            }
         }
      }
      // add hits/net hits text and indicate glitches
      if (results.ones > results.dice / 2 && results.hits === 0) {
         html.find('.dice-total').addClass('glitch')
         html.find('.dice-total')[0].innerText = 'CRITICAL GLITCH!'
      } else if (results.ones > results.dice / 2) {
         html.find('.dice-total').addClass('glitch')
         html.find('.dice-total').append(`<span> ${hitText()} + glitch</span>`)
      } else {
         html.find('.dice-total').append(`<span> ${hitText()}</span>`)
      }
   }
})
