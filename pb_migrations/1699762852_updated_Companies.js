/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("shg31shlnvrl80f")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "zjhgwzsl",
    "name": "State",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("shg31shlnvrl80f")

  // remove
  collection.schema.removeField("zjhgwzsl")

  return dao.saveCollection(collection)
})
