/**
 * @extends {Actor}
 */
export class Character extends Actor {

   /** @override */
   async update(data, options = {}) {
      var ret = super.update(data, options)
      // console.log('[update]', ret)
      return ret
   }

   /** @override */
   getRollData() {
      const data = super.getRollData()
     
      return data
   }
}
