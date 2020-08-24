export class Quality extends Item {


  static get config() {

    return {
      baseEntity: Quality,
      collection: game.items,
      embeddedEntities: {},
      label: "ENTITY.Item.Quality",
      permissions: {
        create: "ITEM_CREATE"
      }
    };
  }



}

